# DanaRS and Dana-i Pump

*These instructions are for configuring the app and your pump if you have a DanaRS from 2017 onwards or the newer Dana-i. Если у вас оригинальная помпа DanaR, перейдите на страницу [DanaR](./DanaR-Insulin-Pump).*

**Новая прошивка Dana RS v3 может быть использована начиная с AndroidAPS версии 2.7.**

**New Dana-i can be used from AndroidAPS version 3.0 onwards.**

* In DanaRS/i pump "BASAL A" is used by the app. Existing data gets overwritten.

## Сопряжение с помпой

* On AndroidAPS homescreen click hamburger menu on the top left corner and go to Config Builder.
* In pump section select 'Dana-i/RS'.
* Click on gear wheel to get directly to the pump settings or return to homescreen.
    
    ![AAPS config builder Dana-i/RS](../images/DanaRS_i_ConfigB.png)

* Go to 'DANA-i/RS' tab.

* Select preferences menu by tapping the 3 dots in the top right. 
* Select 'Dana-i/RS Preferences'.
* Click on "Selected pump".
* In the pairing window click on the entry for your pump.
    
    ![AAPS pair Dana-i/RS](../images/DanaRS_i_Pairing.png)

* **You have to confirm the pairing on the pump!** That's just the way you are used to from other bluetooth pairings (i.e. smartphone and car audio).
    
    ![Dana RS confirmation pairing](../images/DanaRS_Pairing.png)

* Follow the pairing process based on the type and firmware of your pump:
    
    * For DanaRS v1 select pump password in preferences and set your password.
    * For DanaRS v3 you have to type 2 sequences of numbers and letters displayed on pump to AndroidAPS pairing dialog.
    * For Dana-i standard Android pairing dialog appear and you have to enter 6-digit number displayed on pump.

* Select Bolus Speed to change the default bolus speed used (12sec per 1u, 30sec per 1u or 60sec per 1u).

* Set basal step on pump to 0.01 U/h using Doctors menu (see pump user guide).
* Set bolus step on pump to 0.05 U/h using Doctors menu (see pump user guide).
* Активируйте пролонгированные болюсы на помпе

(default-password)=

### Пароль по умолчанию

* Для DanaRS с прошивкой v1 и v2 пароль по умолчанию 1234.
* For DanaRS with firmware v3 or Dana-i the default password is a combination of production month and production date (i.e. month 01 and day 24).
    
    * Open main menu on pump > review > information. 
    * Number 3 is production date. 
    * For v3/i this password is used only for locking menu on pump. It's not used for communication and it's not necessary to enter it in AndroidAPS.

(change-password-on-pump)=

## Смена пароля на помпе

* Нажмите кнопку OK на помпе
* В главном меню выберите "OPTION" (двигайтесь вправо, нажав кнопку со стрелкой несколько раз)
    
    ![Главное меню DanaRS](../images/DanaRSPW_01_MainMenu.png)

* В меню опций выберите "USER OPTION"
    
    ![Меню настроек DanaRS](../images/DanaRSPW_02_OptionMenu.png)

* При помощи кнопки со стрелкой переместитесь вниз до " 11. пароль "
    
    ![DanaRS 11. Пароль](../images/DanaRSPW_03_11PW.png)

* Нажмите OK, чтобы ввести старый пароль.

* Введите **старый пароль** (пароль по умолчанию см [выше](#default-password)) и нажмите OK
    
    ![Ввод старого пароля](../images/DanaRSPW_04_11PWenter.png)

* Если указан неправильный пароль, то сообщение о сбое не выдается!

* Установите **новый пароль** (меняйте цифры с помощью кнопки + & - кнопки/Перемещайтесь вправо кнопкой со стрелкой).
    
    ![Новый пароль DanaRS](../images/DanaRSPW_05_PWnew.png)

* Подтвердите кнопкой ОК.

* Сохраните, снова нажав кнопку ОК.
    
    ![DanaRS сохранить новый пароль](../images/DanaRSPW_06_PWnewSave.png)

* Переместитесь вниз до "14. EXIT " и нажмите кнопку OK.
    
    ![Выход DanaRS](../images/DanaRSPW_07_Exit.png)

(dana-rs-specific-errors)=

## Специфические ошибки Dana RS

### Ошибка во время подачи инсулина

In case the connection between AAPS and Dana RS is lost during bolus insulin delivery (i.e. you walk away from phone while Dana RS is pumping insulin) you will see the following message and hear an alarm sound.

![Alarm insulin delivery](../images/DanaRS_Error_bolus.png)

* В большинстве случаев это просто проблема связи и нужное количество инсулина все равно подается.
* Проверьте в истории помпы (либо на помпе, либо через вкладку Dana > история помпы> болюс), был ли подан правильный болюс.
* Delete error entry in [treatments tab](../Getting-Started/Screenshots.md#carb-correction) if you wish.
* Реальный объем читается и записывается при следующем подключении. Чтобы принудительно выполнить действие, нажмите на иконку BT на вкладке Dana или просто подождите следующего подключения.

## Отдельное замечание при смене телефона

When switching to a new phone the following steps are necessary:

* [Export settings](../Usage/ExportImportSettings.md#export-settings) on your old phone
* Transfer settings from old to new phone

### DanaRS v1

* **Manually pair** Dana RS with the new phone
* As pump connection settings are also imported AAPS on your new phone will already "know" the pump and therefore not start a bluetooth scan. Therefore new phone and pump must be paired manually.
* Install AndroidAPS on the new phone.
* [Import settings](../Usage/ExportImportSettings.md#import-settings) on your new phone

### DanaRS v3, Dana-i

* Start pairing procedure like decribed [above](#pairing-pump).
* Sometimes it may be necessary to clear pairing information in AndroidAPS by long-click BT icon on Dana-i/RS tab.

## Пересечение часовых поясов с помпой Dana RS

For information on traveling across time zones see section [Timezone traveling with pumps](../Usage/Timezone-traveling.md#danarv2-danars).