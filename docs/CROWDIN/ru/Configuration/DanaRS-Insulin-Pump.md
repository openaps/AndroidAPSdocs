# Инсулиновая помпа DanaRS

*Эти инструкции подойдут для настройки приложения AAPS и помпы DanaRS, выпускаемой с 2017 года. Если у вас оригинальная помпа DanaR, перейдите на страницу [DanaR](./DanaR-Insulin-Pump).*

**New Dana RS firmware v3 can be used from AndroidAPS version 2.7 onwards.**

* В помпе DanaRS приложением используется переменная "BASAL A". Существующие данные перезаписываются.

* В AndroidAPS перейдите в Конфигуратор и выберите 'DanaRS'

* Выберите меню, нажав на 3 точки в правом верхнем углу. Выберите Настройки.

* Выберите Соединиться с новой помпой и нажмите на серийный номер вашей DanaRS.
  
  ![Сопряжение AAPS с Dana RS](../images/AAPS_DanaRSPairing.png)

* Select Pump password and input your password.
  
  * For DanaRS with firmware 1 and 2 the default password is 1234.
  * For DanaRS with firmware 3 the default password is a combination of production month and production date (i.e. month 01 and day 24). ==> On your pump open main menu -> review -> information. Нет. 3 is production date.

* **You have to confirm the pairing on the pump!** That's just the way you are used to from other bluetooth pairings (i.e. smartphone and car audio).
  
  ![Dana RS confirmation pairing](../images/DanaRS_Pairing.png)

* Select Bolus Speed to change the default bolus speed used (12sec per 1u, 30sec per 1u or 60sec per 1u).

* Restart your phone.

* Set basal step on pump to 0.01 U/h using Doctors menu (see pump user guide)

* Активируйте удлиненные болюсы на помпе

## Специфические ошибки Dana RS

### Ошибка во время подачи инсулина

В случае, если связь между AAPS и Dana RS теряется во время подачи болюса (например вы отошли от телефона когда дана RS подает инсулин) вы увидите сообщение и услышите сигнал.

![Оповещение - подача инсулина](../images/DanaRS_Error_bolus.png)

* В большинстве случаев это просто проблема связи и нужное количество инсулина все равно подается.
* Проверьте в истории помпы (либо на помпе, либо через вкладку Dana > история помпы> болюс), был ли подан правильный болюс.
* Удалите запись ошибки во вкладке ПОРТЛЕЧ, если хотите.
* Реальный объем читается и записывается при следующем подключении. Чтобы принудительно выполнить действие, нажмите на иконку BT на вкладке Dana или просто подождите следующего подключения.

## Отдельное замечание при смене телефона

При переходе на новый телефон необходимы следующие шаги:

* Выполнить **Экспорт настроек** на вашем старом телефоне
  
  * Сэндвич-меню (в верхнем левом углу экрана)
  * Тех. обслуживание
  * Экспорт настроек
    
    ![Экспорт настроек AAPS](../images/AAPS_ExportSettings.png)

* **Перенос настроек** со старого на новый телефон

* **Вручную выполните сопряжение** Dana RS с новым телефоном 
  * Поскольку настройки подключения помпы также переносятся новый телефон, AAPS на новом телефоне уже будет "знать" помпу и не запустит сканирование bluetooth. Поэтому новый телефон и помпа должны сопрягатся вручную.
* **Установите AndroidAPS** на новом телефоне.
* **Выполните импорт настроек** на вашем новом телефоне 
  * Сэндвич-меню (в верхнем левом углу экрана)
  * Тех. обслуживание
  * Импорт настроек

## Пересечение часовых поясов с помпой Dana RS

Информацию о пересечении часовых поясов см. в разделе [Пересечение часовых поясов с помпами](../Usage/Timezone-traveling#danarv2-danars).