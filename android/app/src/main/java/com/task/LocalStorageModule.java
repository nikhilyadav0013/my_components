// LocalStorageModule.java
package com.task;

import android.content.SharedPreferences;
import static android.content.Context.MODE_PRIVATE;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class LocalStorageModule extends ReactContextBaseJavaModule {

  public LocalStorageModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "LocalStorage";
  }

  @ReactMethod
  public void setString(final String key, final String value) {
    SharedPreferences preferences = getReactApplicationContext()
      .getSharedPreferences("MyPreferences", MODE_PRIVATE);
    SharedPreferences.Editor editor = preferences.edit();
    editor.putString(key, value);
    editor.apply();
  }

  @ReactMethod
  public String getString(final String key) {
    SharedPreferences preferences = getReactApplicationContext()
      .getSharedPreferences("MyPreferences", MODE_PRIVATE);
    return preferences.getString(key, "");
  }
}
