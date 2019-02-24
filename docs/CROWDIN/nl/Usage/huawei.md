# Een Huawei telefoon instellen

Er zijn verschillende opties, sommige Android specifiek, sommige Huawei specifiek:

* Voeg AndroidAPS en xdrip+ toe aan de lijst van apps die accuoptimalisatie negeren:
  
  * Settings / App / Settings / Special autorisations / Ignore battery optimisation / Select "All applications" / Set app to allowed
    
    ![Huawei - ignore battery optimization](../images/Huawei_BatteryOptimization.png)

* Pas de batterij-instellingen aan:
  
  * Settings / App / Select AndroidAPS/xdrip+ / Under Battery / App launch
    
    * Zorg ervoor dat "automatisch beheer" verwijderd is
    * Allow:
      
      * Automatisch starten
      * Secondary launch (can be launched from other apps)
      * Background run
        
        ![Huawei - battery options](../images/Huawei_BatteryOptions.png)

* App vergrendelen
  
  * Go into App recent list and select the lock icon
    
    ![Huawei - lock app](../images/Huawei_LockApp.png)

Voor xDrip+, kun je ook de 'hardnekkige melding' optie inschakelen (in xDrip+ app):

* Setttings / less common settings / other misc options / Run Collector in foreground
  
  ![xdrip+ settings - collector in foreground](../images/xdrip_collector_foreground.png)

Depending on Android version, these settings are somewhere else. These explanations are for Android 8.1.