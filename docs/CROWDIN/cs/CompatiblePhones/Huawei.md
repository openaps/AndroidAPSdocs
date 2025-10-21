# Jak nastavit telefon Huawei

Existují různé možnosti, některé jsou specifické pro Android, jiné pro Huawei:

* Add AAPS and xdrip+ to apps list which ignore battery optimisations:
  
  * Nastavení / Aplikace / Nastavení / Speciální přístup / Ignorovat optimalizaci baterie / Vyberte "Všechny aplikace" / Nastavte aplikaci na povoleno
    
    ![Huawei - ignorovat optimalizaci baterie](../images/Huawei_BatteryOptimization.png)

* Nastavte optimalizaci baterie:
  
  * Nastavení / Aplikace / Vyberte AndroidAPS/xdrip+ / V části Baterie / Spouštění aplikací
    
    * Ujistěte že, že jste deaktivovali možnost „automatická správa“
    * Povolte:
      
      * Automatické spuštění
      * Sekundární spuštění (lze spustit z jiných aplikací)
      * Spustit na pozadí
        
        ![Huawei - možnosti baterie](../images/Huawei_BatteryOptions.png)

* Uzamkněte aplikaci
  
  * Přejděte do seznamu nedávných aplikací a a klepněte na ikonu zámku
    
    ![Huawei - uzamknout aplikaci](../images/Huawei_LockApp.png)

For xDrip+, you must enable persistent notifications (within xDrip+ app):

* Settings / less common settings / other misc options / Run Collector in foreground
  
  ![Nastavení xdripu+ - spustit kolektor v popředí](../images/xdrip_collector_foreground.png)

V závislosti na verzi Androidu mohou být tato nastavení v jiných nabídkách. Tento návod se týká Androidu 8.1.