package com.example.detectincomingcall;

import android.Manifest;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.telecom.Call;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;
import androidx.constraintlayout.helper.widget.MotionEffect;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
    public EditText ipAddressEditText;
    private Button sendButton;


    @RequiresApi(api = Build.VERSION_CODES.M)
    @Override
    protected void onStart() {

        super.onStart();
        this.ipAddressEditText = (EditText) findViewById(R.id.ipAddressEditText);
        this.sendButton = (Button) findViewById(R.id.sendButton);
        if (getSupportActionBar() != null) {
            getSupportActionBar().setTitle((CharSequence) "VentIQ");
        }
        this.sendButton.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                String ipAddress = MainActivity.this.ipAddressEditText.getText().toString().trim();
                if (ipAddress.isEmpty()) {
                    Log.d(MotionEffect.TAG, ipAddress);
                    Toast.makeText(MainActivity.this, "Please Enter IP Address", Toast.LENGTH_SHORT).show();
                    return;
                }
                else {
                    initService(ipAddress);
                    Toast.makeText(MainActivity.this, "Caller app has been Initialized", Toast.LENGTH_SHORT).show();
                }

            }
        });



    }
    void initService(String ip)
    {
        int phoneReadStatePermission = 0;
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.M) {
            phoneReadStatePermission = getApplicationContext().checkSelfPermission("READ_PHONE_STATE");
        }
        int readCallLogPermission = 0;
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.M) {
            readCallLogPermission = getApplicationContext().checkSelfPermission("READ_CALL_LOG");
        }
        Boolean hasPhoneReadStatePermission  = phoneReadStatePermission == PackageManager.PERMISSION_GRANTED;
        Boolean hasReadCallLogPermission = readCallLogPermission == PackageManager.PERMISSION_GRANTED;

        if (!hasPhoneReadStatePermission || !hasReadCallLogPermission) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                this.requestPermissions(new String[]{
                                Manifest.permission.READ_CALL_LOG,
                                Manifest.permission.READ_PHONE_STATE},
                        1);
                // Assuming this code is inside an Activity or Context
                Intent intent = new Intent(this, CallDetectService.class);
                intent.putExtra("ip", ip); // Put your data here, replace "key" with an appropriate key and "value" with your data
                startService(intent);
                Intent broadcastIntent = new Intent();
                broadcastIntent.setAction("com.example.detectincomingcall.IP_ADDRESS_ACTION");
                broadcastIntent.putExtra("ip", ip);
                sendBroadcast(broadcastIntent);
            }
            this.registerPhoneReceiver();
        } else {
            this.registerPhoneReceiver();
        }
    }
    void registerPhoneReceiver() {
        CallReceiver handler = new CallReceiver();
        IntentFilter filter = new IntentFilter();
        filter.addAction("android.intent.action.PHONE_STATE");

        registerReceiver(handler, filter);
    }
}