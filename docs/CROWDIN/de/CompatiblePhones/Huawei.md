# Konfigurations-Einstellungen für Huawei Smartphones

Einige der nachfolgenden Optionen sind Android-spezifisch, einige Huawei-spezifisch:

* Füge AAPS und xdrip+ der Liste der Apps hinzu, die von der Akkuoptimierungen ausgenommen sind:
  
  * Einstellungen / App / Einstellungen / Spezielle Berechtigungen/ Akkuoptimierung ignorieren / Wählen Sie "Alle Anwendungen" / App auf erlaubt setzen
    
    ![Huawei - Batterieoptimierung ignorieren](../images/Huawei_BatteryOptimization.png)

* Batterieoptionen einstellen:
  
  * Einstellungen / App / Select AndroidAPS bzw. xdrip+ / Batterie / App starten
    
    * Stelle sicher, dass "Automatisches Management" deaktiviert ist.
    * Zulassen:
      
      * Automatischer Start
      * Sekundärer Start (kann von anderen Apps gestartet werden)
      * Hintergrundaktivität
        
        ![Huawei - Batterieoptionen](../images/Huawei_BatteryOptions.png)

* App sperren
  
  * Rufe die Liste der letzten Apps auf und wähle das Schloss-Symbol
    
    ![Huawei - App sperren](../images/Huawei_LockApp.png)

Für xDrip+ musst Du außerdem noch laufende Benachrichtigungen (persistent notifications) in den xDrip-Einstellungen aktivieren:

* Einstellungen / Erweiterte Einstellungen / Andere verschiedene Einstellungen / Collector im Vordergrund ausführen
  
  ![xdrip+ Einstellungen - Collector im Vordergrund](../images/xdrip_collector_foreground.png)

Je nach genutzter Android-Version können die Einstellungen sich an anderer Stelle befinden. Diese Hinweise sind für Android 8.1.