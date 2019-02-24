# Konfigurations-Einstellungen für Huawei Smartphones

Einige der nachfolgenden Optionen sind Android-spezifisch, einige Huawei-spezifisch:

* Füge AndroidAPS und xdrip+ der Liste der Apps hinzu, die von der Akkuoptimierungen ausgenommen sind:
  
  * Settings / App / Settings / Special autorisations / Ignore battery optimisation / Select "All applications" / Set app to allowed
    
    ![Huawei - ignore battery optimization](../images/Huawei_BatteryOptimization.png)

* Batterieoptionen einstellen:
  
  * Settings / App / Select AndroidAPS/xdrip+ / Under Battery / App launch
    
    * Stelle sicher, dass "Automatisches Management" deaktiviert ist.
    * Allow:
      
      * Automatischer Start
      * Secondary launch (can be launched from other apps)
      * Background run
        
        ![Huawei - battery options](../images/Huawei_BatteryOptions.png)

* App sperren
  
  * Go into App recent list and select the lock icon
    
    ![Huawei - lock app](../images/Huawei_LockApp.png)

Für xdrip+ kannst Du außerdem noch laufende Benachrichtigungen (persistent notifications) in den xdrip-Einstellungen auswählen. 

* Setttings / less common settings / other misc options / Run Collector in foreground
  
  ![xdrip+ settings - collector in foreground](../images/xdrip_collector_foreground.png)

Depending on Android version, these settings are somewhere else. These explanations are for Android 8.1.