package com.example.detectincomingcall;

import android.content.Context;
import android.util.Log;

import java.util.Date;

public class CallReceiver extends PhonecallReceiver {
    private static final String TAG = "com.testing.firewall";
    public static String incoming_number;
    private String ipAddress;
    public void onIncomingCallStarted(Context ctx, String number, Date start) {
        incoming_number = number;
        Log.d(TAG, "Incoming call from: "+ incoming_number);
    }
    public void setIPAddress(String ipAddress) {
        this.ipAddress = ipAddress;
    }
}