# Как да конфигурирате Huawei телефон

Има различни опции, някои специфични за Android, други – специфични за Huawei:

* Добавете AAPS и xdrip+ в списъка с приложения, които игнорират оптимизацията на батерията:
  
  * Settings / App / Settings / Special autorisations / Ignore battery optimisation / Select "All applications" / Set app to allowed
    
    ![Huawei - ignore battery optimization](../images/Huawei_BatteryOptimization.png)

* Задайте настройките за опциите на батерията:
  
  * Settings / App / Изберете AndroidAPS/xdrip+ / В Battery / App launch
    
    * Уверете се, че сте изключили "automatic management"
    * Разрешете:
      
      * Automatic launch
      * Secondary launch (може да бъде стартирано от други приложения)
      * Пускай във фонов режим
        
        ![Huawei - battery options](../images/Huawei_BatteryOptions.png)

* Заключване на приложението (Lock App)
  
  * Отидете в списъка с последни приложения (App recent list) и изберете иконата за заключване
    
    ![Huawei - lock app](../images/Huawei_LockApp.png)

За xDrip+ трябва да активирате постоянните известия (persistent notifications) (в самото приложение xDrip+):

* Settings / less common settings / other misc options / Run Collector in foreground
  
  ![xdrip+ settings - collector in foreground](../images/xdrip_collector_foreground.png)

В зависимост от версията на Android, тези настройки може да се намират другаде. Тези обяснения важат за Android 8.1.