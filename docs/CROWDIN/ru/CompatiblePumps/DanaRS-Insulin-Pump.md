# DanaRS, Dana-i and Dana-i2

*These instructions are for configuring the app and your pump if you have a DanaRS from 2017 onwards, a Dana-i or a Dana-i2. Если у вас оригинальная помпа DanaR, перейдите на страницу [DanaR](./DanaR-Insulin-Pump.md).*

**Dana-i2 can be used from AAPS version 4.0 onwards.** It uses the same **Dana-i/RS** driver as the Dana-i.

* In DanaRS/i/i2 pump "BASAL A" is used by the app. Existing data gets overwritten.

    {contents} Table of contents
    :depth: 1
    :local: true

## Возможности работы с AAPS

* Communicates with **AAPS** over your phone's native Bluetooth, without an additional communication device.
* DST and timezone changes must be handled manually (see [Timezone traveling](#timezone-traveling-danarv2-danars)).

(DanaRS-Insulin-Pump-pairing-pump)=

## Сопряжение с помпой

* Open the **menu** (☰) in the top-left corner of the **AAPS** main screen and select **Configuration**.
* Tap **Pump** and select **Dana-i/RS**.
    
    ![Configuration > Pump with the Dana-i/RS plugin](../images/v4/Configuration/configuration_pump_list_2.png)
    
    Once it is selected, the **Dana-i/RS** card shows two buttons, **Settings** and **Open plugin**:
    
    ![The Dana-i/RS plugin selected in Configuration > Pump](../images/v4/Pumps/dana_i_rs_enabled.png)
    
    **Settings** opens the settings of the Dana-i/RS driver:
    
    ![Dana-i/RS driver settings](../images/v4/Pumps/dana_i_rs_settings.png)
    
    **Open plugin** (or **Manage** > **Pump**) opens the Dana-i/RS pump screen. Before a pump is paired it looks like this:
    
    ![Dana-i/RS pump screen before pairing](../images/v4/Pumps/dana_i_rs_pump_screen.png)

* On the pump screen, tap **Pairing**. **AAPS** scans for nearby pumps.

* Tap the entry for your pump in the list.
    
    ![The Pairing screen listing a Dana pump found by the scan](../images/DanaRS_i_Pairing.png)

* **You have to confirm the pairing on the pump!** This works the same way as other Bluetooth pairings you may know (for example, smartphone and car audio).
    
    ![Подтверждение сопряжения с Dana RS](../images/DanaRS_Pairing.png)

* Следуйте процессу сопряжения на основе типа и прошивки вашей помпы:
    
    * For DanaRS v1, **AAPS** asks for the **Pump password (v1 only)**. Enter your pump password (see [Default password](#DanaRS-Insulin-Pump-default-password)).
    * For DanaRS v3, **AAPS** asks you to press OK on the pump and type the 2 sequences of numbers and letters shown on the pump. Keep the pump display on by pressing the minus button until you have finished. Then tap **Done**.
    * For Dana-i and Dana-i2, the standard Android pairing dialog appears. Enter the 6-digit number shown on the pump.

* When **Pairing successful!** is shown, tap **Done**.
    
    ![Pairing successful!](../images/v4/Pumps/dana_i_rs_pairing_success.png)
    
    You are back on the pump screen, which now shows your pump's status.
    
    ![Dana-i/RS pump screen after pairing](../images/v4/Pumps/dana_i_rs_pump_screen_paired.png)

* In **Settings**, select **Bolus speed** to change the default bolus speed (12 s/U, 30 s/U or 60 s/U).

* Установите шаг базала на помпе в 0.01 ед./ч с помощью меню Doctors (см. руководство пользователя помпы).
* Set bolus step on pump to 0.05 U using Doctors menu (see pump user guide). **AAPS** reads the basal and bolus steps from the pump and uses them for every bolus, so a bolus always matches the step set on the pump. The pump screen shows them in the **Basal/Bolus step** row.
* Активируйте пролонгированные болюсы на помпе

### Options shown only for some models

* **Auto lock**: on a Dana-i2, the **User options** screen (on the pump screen, **Manage** > **Pump**) has an **Auto lock** switch for the pump's auto lock setting. Press **Save options to pump** after changing it.
* **Easy mode**: on pump models that have an easy menu mode, the pump screen shows an **Easy mode** row with **On** or **Off**.
* If a Dana-i2 refuses a bolus, **AAPS** shows the reason, for example *Pump is not primed*, *Not enough insulin in the reservoir* or *Easy sleep mode is on in the pump*.

(DanaRS-Insulin-Pump-default-password)=

### Пароль по умолчанию

* Для DanaRS с прошивкой v1 и v2 пароль по умолчанию 1234.
* Для DanaRS с прошивкой v3 или Dana-i пароль по умолчанию зависит от даты изготовления и вычисляется как MMDD, где MM - это день месяца и DD, i)помпа изготовлена ( например '0124' - месяц 01 и день 24).
    
    * В разделе MAIN MENU выберите REVIEW, затем откройте SHIPPING INFORMATION из подменю
    * Number 3 is manufacturing date. 
    * Для v3/i этот пароль используется только для блокировки меню на помпе. Он не используется для коммуникации и нет необходимости вводить его в AAPS.

(DanaRS-Insulin-Pump-change-password-on-pump)=

## Смена пароля на помпе

* Нажмите кнопку OK на помпе
* В главном меню выберите "OPTION" (двигайтесь вправо, нажав кнопку со стрелкой несколько раз)
    
    ![Главное меню DanaRS](../images/DanaRSPW_01_MainMenu.png)

* В меню опций выберите "USER OPTION"
    
    ![Меню настроек DanaRS](../images/DanaRSPW_02_OptionMenu.png)

* При помощи кнопки со стрелкой переместитесь вниз до " 11. пароль "
    
    ![DanaRS 11. Пароль](../images/DanaRSPW_03_11PW.png)

* Нажмите OK, чтобы ввести старый пароль.

* Enter **old password** (Default password see [above](#DanaRS-Insulin-Pump-default-password)) and press OK
    
    ![Ввод старого пароля](../images/DanaRSPW_04_11PWenter.png)

* Если указан неправильный пароль, то сообщение о сбое не выдается!

* Установите **новый пароль** (меняйте цифры с помощью кнопки + & - кнопки/Перемещайтесь вправо кнопкой со стрелкой).
    
    ![Новый пароль DanaRS](../images/DanaRSPW_05_PWnew.png)

* Подтвердите кнопкой ОК.

* Нажмите OK, чтобы сохранить настройки.
    
    ![DanaRS сохранить новый пароль](../images/DanaRSPW_06_PWnewSave.png)

* Переместитесь вниз до "14. EXIT " и нажмите кнопку OK.
    
    ![Выход DanaRS](../images/DanaRSPW_07_Exit.png)

(DanaRS-Insulin-Pump-dana-rs-specific-errors)=

## Специфические ошибки Dana RS

### Ошибка во время подачи инсулина

В случае, если связь между AAPS и Dana RS теряется во время подачи болюса (например вы отошли от телефона когда дана RS подает инсулин) вы увидите сообщение и услышите сигнал.

![Оповещение - подача инсулина](../images/DanaRS_Error_bolus.png)

* В большинстве случаев это просто проблема связи и нужное количество инсулина все равно подается.
* Check in the pump history that the correct bolus was given. You can do this on the pump itself, or in **AAPS** on the pump screen (**Manage** > **Pump**) > **Pump history** > **Boluses**.
* Delete the error entry in [treatments](#screens-bolus-carbs) if you wish.
* The real amount is read and recorded at the next connection. To force this, tap **Refresh** on the pump screen, or just wait for the next connection.

## Отдельное замечание при смене телефона

При переходе на новый телефон требуются следующие действия:

* Выполните [Экспорт настроек](../Maintenance/ExportImportSettings.md) на вашем старом телефоне
* Перенести настройки со старого на новый телефон

### DanaRS v1

* **Вручную выполните сопряжение** Dana RS с новым телефоном
* If you tick **Also replace pump settings** when importing, the pump connection settings are imported too and AAPS on your new phone will already "know" the pump and therefore not start a Bluetooth scan. Поэтому новый телефон и помпа должны сопрягатся вручную.
* Установите AAPS на новом телефоне.
* [Импортируйте настройки](../Maintenance/ExportImportSettings.md) на новом телефоне

### DanaRS v3, Dana-i, Dana-i2

* Start pairing procedure as described [above](#DanaRS-Insulin-Pump-pairing-pump).
* Sometimes you may need to clear the pairing information in **AAPS** first. On the pump screen (**Manage** > **Pump**), tap **Unpair** and confirm **Reset pairing information?**. Then tap **Pairing** again.

## Timezone traveling with DanaRS, Dana-i and Dana-i2 pumps

Информацию о пересечении часовых поясов см. в разделе [Пересечение часовых поясов с помпами](#timezone-traveling-danarv2-danars).

## Куда обращаться за помощью

Development of the DanaRS/Dana-i/Dana-i2 driver is done by the community on a **volunteer** basis. Before requesting help, please:

1. **Read** the relevant section of this documentation to confirm how the feature is meant to work.
2. **Ask** on the *#AAPS* channel on [Discord](https://discord.gg/4fQUWHZ4Mw), or in one of the other [community channels](../GettingHelp/WhereCanIGetHelp.md).
3. **Report a bug** by searching the [existing issues](https://github.com/nightscout/AndroidAPS/issues); if yours is not listed, open a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach your [log files](../GettingHelp/AccessingLogFiles.md).

When asking for help, include your phone make and model, Android version, **AAPS** version, and a plain-English description of the problem (what changed, when it last worked).