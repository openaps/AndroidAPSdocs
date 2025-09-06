# Kaip sukonfigūruoti "Huawei" telefoną

Yra įvairių variantų, kai kurie būdingi konkrečiai "Android", kai kurie - "Huawei":

* Add AAPS and xdrip+ to apps list which ignore battery optimisations:
  
  * Nustatymai / Programos / Nustatymai / Specialusis autorizavimas / Ignoruoti baterijos optimizavimą / Pasirinkite "Visos programos" / Suteikti programoms leidimą
    
    ![Huawei - ignoruoti baterijos optimizavimą](../images/Huawei_BatteryOptimization.png)

* Nustatyti baterijos parinkties parametrus:
  
  * Nustatymai / Programos / pasirinkti AndroidAPS/xdrip+ / ties Baterija / Programos paleidimas
    
    * Įsitikinkite, kad pašalinta "automatinis valdymas"
    * Leisti:
      
      * Automatinis paleidimas
      * Antrinis paleidimas (gali būti paleista iš kitų programų)
      * Veikimas fono režimu
        
        ![Huawei baterijos funkcijos](../images/Huawei_BatteryOptions.png)

* Užrakinti programą
  
  * Eikite į neseniai naudotų programų sąrašą ir pasirinkite užrakto piktogramą
    
    ![Huawei - užrakinti programą](../images/Huawei_LockApp.png)

For xDrip+, you must enable persistent notifications (within xDrip+ app):

* Settings / less common settings / other misc options / Run Collector in foreground
  
  ![xdrip+ parametrai - kolektorius priekiniame plane](../images/xdrip_collector_foreground.png)

Priklausomai nuo turimos Android versijos, šie nustatymai gali būti kitur. Šie paaiškinimai yra skirti Android 8.1.