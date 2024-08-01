package com.example.detectincomingcall;


import android.Manifest;
import android.app.Service;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.IBinder;
import android.telecom.Call;
import android.util.Log;

import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;

public class CallDetectService extends Service {

    private CallReceiver callReceiver;
    String ipAddress;
    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        Log.e("Sunooo ", "Mai chal gya" );
        if (intent != null) {
            ipAddress = intent.getStringExtra("ip");
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            startCallDetection();
        }
        return START_STICKY;
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            startCallDetection();
        }
    }

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    private void startCallDetection() {
        if (callReceiver == null) {
            callReceiver = new CallReceiver();
            IntentFilter filter = new IntentFilter();
            filter.addAction("android.intent.action.PHONE_STATE");
            registerReceiver(callReceiver, filter);
            callReceiver.setIPAddress(ipAddress);

        }
    }

    private void stopCallDetection() {
        if (callReceiver != null) {
            unregisterReceiver(callReceiver);
            callReceiver = null;
        }
    }
}

