# Инсулиновая помпа DanaRS

*Эти инструкции подойдут для настройки приложения AAPS и помпы DanaRS, выпускаемой с 2017 года. Если у вас оригинальная помпа DanaR, перейдите на страницу [DanaR](./DanaR-Insulin-Pump).*

**Новая прошивка Dana RS v3 может быть использована начиная с AndroidAPS версии 2.7.**

* В помпе DanaRS приложением используется переменная "BASAL A". Существующие данные перезаписываются.

## Сопряжение с помпой

* В AndroidAPS перейдите в Конфигуратор и выберите 'DanaRS'

* Выберите меню, нажав на 3 точки в правом верхнем углу. Выберите Настройки.

* Выберите Соединиться с новой помпой и нажмите на серийный номер вашей DanaRS.
    
    ![AAPS pair Dana RS](../images/AAPS_DanaRSPairing.png)

* Выберите пароль помпы и введите ваш пароль.

### Пароль по умолчанию

* Для DanaRS с прошивкой v1 и v2 пароль по умолчанию 1234.
* Для DanaRS с прошивкой v3 пароль по умолчанию представляет собой комбинацию из месяца производства и даты производства (например, месяц 01 и день 24). Откройте главное меню на помпе > обзор > информация. Number 3 is production date.

* **You have to confirm the pairing on the pump!** That's just the way you are used to from other bluetooth pairings (i.e. smartphone and car audio).
    
    ![Dana RS confirmation pairing](../images/DanaRS_Pairing.png)

* Select Bolus Speed to change the default bolus speed used (12sec per 1u, 30sec per 1u or 60sec per 1u).

* Restart your phone.
* Set basal step on pump to 0.01 U/h using Doctors menu (see pump user guide)
* Активируйте удлиненные болюсы на помпе

## Change password on pump

* Press OK button on pump
* In main menu select "OPTION" (move right by pressing arrow button several times)
    
    ![DanaRS Main Menu](../images/DanaRSPW_01_MainMenu.png)

* In options menu select "USER OPTION"
    
    ![DanaRS Option Menu](../images/DanaRSPW_02_OptionMenu.png)

* Use arrow button to scroll down to "11. password"
    
    ![DanaRS 11. Password](../images/DanaRSPW_03_11PW.png)

* Press OK to enter old password.

* Enter **old password** (Default password see [above](#default-password)) and press OK
    
    ![DanaRS Enter old password](../images/DanaRSPW_04_11PWenter.png)

* If wrong password is entered here there will be no message indicating failure!

* Set **new password** (Change numbers with + & - buttons / Move right with arrow button).
    
    ![DanaRS New password](../images/DanaRSPW_05_PWnew.png)

* Confirm with OK button.

* Save by pressing OK button again.
    
    ![DanaRS Save new password](../images/DanaRSPW_06_PWnewSave.png)

* Move down to "14. EXIT" and press OK button.
    
    ![DanaRS Exit](../images/DanaRSPW_07_Exit.png)

## Dana RS specific errors

### Error during insulin delivery

В случае, если связь между AAPS и Dana RS теряется во время подачи болюса (например вы отошли от телефона когда дана RS подает инсулин) вы увидите сообщение и услышите сигнал.

![Оповещение - подача инсулина](../images/DanaRS_Error_bolus.png)

* In most cases this is just a communication issue and the correct amount of insulin is delivered.
* Check in pump history (either on the pump or through Dana tab > pump history > boluses) if correct bolus is given.
* Delete error entry in [treatments tab](../Getting-Started/Screenshots#carb-correction) if you wish.
* Real amount is read and recorded on next connect. To force this press BT icon on dana tab or just wait for next connect.

## Special note when switching phone

При переходе на новый телефон необходимы следующие шаги:

* [Export settings](../Usage/ExportImportSettings#export-settings) on your old phone
* Transfer settings from old to new phone
* **Manually pair** Dana RS with the new phone
    
    * As pump connection settings are also imported AAPS on your new phone will already "know" the pump and therefore not start a bluetooth scan. Therefore new phone and pump must be paired manually.
* Install AndroidAPS on the new phone.
* [Import settings](../Usage/ExportImportSettings#import-settings) on your new phone

## Timezone traveling with Dana RS pump

Информацию о пересечении часовых поясов см. в разделе [Пересечение часовых поясов с помпами](../Usage/Timezone-traveling#danarv2-danars).