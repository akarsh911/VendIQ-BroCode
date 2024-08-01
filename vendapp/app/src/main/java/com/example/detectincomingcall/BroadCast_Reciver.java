package com.example.detectincomingcall;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.telephony.TelephonyManager;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import org.json.JSONException;
import org.json.JSONObject;


import androidx.constraintlayout.helper.widget.MotionEffect;
import androidx.core.app.NotificationCompat;

import android.util.Log;
import android.widget.Toast;
public class BroadCast_Reciver extends BroadcastReceiver {
    private static final String CHANNEL_ID = "IncomingCallChannel";
    private static final int NOTIFICATION_ID = 123;
    private String ipAddress="akarsh.smartsavaari.in";
    @Override
    public void onReceive(Context context, Intent intent) {
        String state = intent.getStringExtra(TelephonyManager.EXTRA_STATE);
        String action = intent.getAction();

        if (action != null && action.equals("com.example.detectincomingcall.IP_ADDRESS_ACTION")) {
             ipAddress = intent.getStringExtra("ip");

            if (ipAddress != null) {
                // Do whatever you need with the IP address
                Log.d("BroadcastReceiver", "Received IP address: " + ipAddress);
            }
            else{
                Log.d("Broadcast","Did not recieve IP");
            }
        }
        if (state != null && state.equals(TelephonyManager.EXTRA_STATE_RINGING)){
            String incomingCallerNumber = intent.getStringExtra(TelephonyManager.EXTRA_INCOMING_NUMBER);

            if (incomingCallerNumber != null){
                Toast.makeText(context, "Call Incoming", Toast.LENGTH_SHORT).show();
                showIncomingCallNotification(context, incomingCallerNumber);
                sendPostRequest(ipAddress);
            }
        }
    }

    private void showIncomingCallNotification(Context context, String incomingCallerNumber) {
        // Create notification channel (required for Android Oreo and above)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationChannel channel = new NotificationChannel(CHANNEL_ID, "Incoming Call", NotificationManager.IMPORTANCE_DEFAULT);
            NotificationManager notificationManager = context.getSystemService(NotificationManager.class);
            notificationManager.createNotificationChannel(channel);
        }

        // Create the notification
        NotificationCompat.Builder builder = new NotificationCompat.Builder(context, CHANNEL_ID)
                .setSmallIcon(R.drawable.ic_launcher_foreground) // Set your notification icon
                .setContentTitle("Incoming Call")
                .setContentText("Call from: " + incomingCallerNumber)
                .setPriority(NotificationCompat.PRIORITY_DEFAULT);

        // Show the notification
        NotificationManager notificationManager = null;
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.M) {
            notificationManager = context.getSystemService(NotificationManager.class);
        }
        notificationManager.notify(NOTIFICATION_ID, builder.build());
    }

        /* access modifiers changed from: private */
        public void sendPostRequest(final String ipAddress) {
            new Thread(
                    new Runnable() {
                /* Debug info: failed to restart local var, previous not found, register: 6 */
                public void run() {
                    DataOutputStream os;
                    try {
                        Log.d("Test Call", ipAddress);
                        HttpURLConnection conn = (HttpURLConnection) new URL("https://" + ipAddress + "/update-message").openConnection();
                        conn.setRequestMethod("POST");
                        conn.setRequestProperty("Content-Type", "application/json");
                        conn.setDoOutput(true);
                        JSONObject jsonObject = new JSONObject();
                        jsonObject.put("message", "Connected");
                        Log.d(MotionEffect.TAG, "1");
                        os = new DataOutputStream(conn.getOutputStream());
                        os.write(jsonObject.toString().getBytes());
                        os.flush();
                        os.close();
                        int responseCode = conn.getResponseCode();
                        Log.d(MotionEffect.TAG, String.valueOf(responseCode));
                        if (responseCode == 200) {
                            Log.d(MotionEffect.TAG, "resp");

                            //MainActivity.this.runOnUiThread(new MainActivity$2$$ExternalSyntheticLambda0(this));
                        } else {
                            // MainActivity.this.runOnUiThread(new MainActivity$2$$ExternalSyntheticLambda1(this));
                        }
                        conn.disconnect();
                        return;
                    } catch (MalformedURLException e) {
                        e.printStackTrace();
                        return;
                    } catch (IOException e2) {
                        e2.printStackTrace();
                        return;
                    } catch (JSONException e3) {
                        e3.printStackTrace();
                        return;
                    } catch (Throwable th) {
                        th.addSuppressed(th);
                    }
                }

                /* access modifiers changed from: package-private */
                /* renamed from: lambda$run$0$com-yoursales-voicesharing-MainActivity$2  reason: not valid java name */


                /* access modifiers changed from: package-private */
                /* renamed from: lambda$run$1$com-yoursales-voicesharing-MainActivity$2  reason: not valid java name */

            }).start();
        }
    
}
