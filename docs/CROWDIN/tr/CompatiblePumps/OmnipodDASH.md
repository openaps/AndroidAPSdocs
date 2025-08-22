- - -
orphan: true
- - -

# Omnipod DASH

These instructions are for configuring the **Omnipod DASH** generation pump **(NOT Omnipod Eros)**, available as part of **AAPS** version 3.0.

## Omnipod DASH özellikleri

These are the specifications of the **Omnipod DASH** ('DASH') and what differentiates it from the **Omnipod EROS** ('EROS'):

* DASH podları mavi bir iğne kapağıyla tanımlanır (EROS'un şeffaf bir iğne kapağı vardır). The pods are otherwise identical in terms of physical dimensions.
*  DASH does not require a BLE link/bridge device (NO RileyLink, OrangeLink, or EmaLink needed).
* The DASH's bluetooth connection is used only when needed, and connects to send command and disconnects right after!
* No more "no connection to link device / pod" errors with DASH.
* **AAPS** will wait for pod's accessibility to send commands.
* On pod activation, **AAPS** will find and connect to a new DASH pod.
* Expected range: 5-10 meters (YMMV).

## Donanım/Yazılım Gereksinimleri

* DASH is identified by blue needle cap.

![Omnipod Pod](../images/DASH_images/Omnipod_Pod.png)

* **Compatible Android phone** with a BLE Bluetooth connection  
  Be aware that **AAPS** Omnipod Dash driver connects with the DASH via Bluetooth every time it sends a command, and it disconnects right after. The Bluetooth connection can be disturbed by other bluetooth devices linked to the phone that is running **AAPS**, like earbuds etc... (which might cause, in rare occasions, connection issue or pod errors/loss on activation or afterwards in some phone models), or be disturbed by it.
   -  **Version 3.0 or newer of AAPS built and installed** using the [**Build APK**](../SettingUpAaps/BuildingAaps.md) instructions.
* [**Sürekli Glikoz İzleme (CGM)**](../Getting-Started/CompatiblesCgms.md)

The instructions below explain how to activate a new pod session. Wait to close to expiry of a current pod session before trying to connect **AAPS** with a new pod. Once a pod is is cancelled it cannot reused and the disconnection will be final.

## Başlamadan önce

**SAFETY FIRST** - you should not try to connect **AAPS** to a pod for the first time without having access to extra pods, insulin, and phone devices are a must have.

**Your Omnipod Dash PDM will become redundant after the AAPS Dash driver activates your pod.** Previously a user may have operated a PDM to send commands to your DASH. A DASH will only faciiliate a single device to send commands to communicate with it. The device that successfully activates the pod is the only device allowed to communicate with it from that point forward. This means that once you activate a DASH with your Android phone through the **AAPS**, **you will no longer be able to use your PDM with that pod**. The **AAPS** Dash driver in your Android phone is now your acting PDM.

*This does NOT mean you should throw away your PDM, it is recommended to keep it around as a backup and for emergencies, for instance when your phone gets lost or AAPS is not working correctly.*

**Your pod will not stop delivering insulin when it is not connected to AAPS**. Default basal rates are programmed on the pod on activation as defined in the current active **Profile**. As long as **AAPS** is operational it will send basal rate commands that run for a maximum of 120 minutes. When for some reason the pod does not receive any new commands (for instance because communication was lost due to Pod - phone distance) the pod will automatically fall back to default basal rates.

**AAPS Profile does not support a 30 minute basal rate time frame** If you are new to **AAPS** and are setting up your basal rate **Profile** for the first time, please be aware that basal rates starting on a half-hour basis are not supported, and programmes on an hourly basis. For example, if you have a basal rate of 1.1 units which starts at 09:30 and has a duration of 2 hours ending at 11:30, it is not possible replicate this im **AAPS**. You will need to change this 1.1 unit basal rate to a time range of either 9:00-11:00 or 10:00-12:00. Even though the DASH hardware itself supports the 30 minute basal rate **Profile** increments, **AAPS** does support this feature.

**0U/h profile basal rates are NOT supported in AAPS** While the DASH does support a zero basal rate, since **AAPS** uses multiples of the user's **Profile** basal rate to determine automated treatment; it cannot function with a zero basal rate. A temporary zero basal rate can be achieved through the "Disconnect pump" function or through a combination of Disable Loop/Temp Basal Rate or Suspend Loop/Temp Basal Rate. The lowest basal rate allowed in **AAPS** is 0.05U/h.

## Selecting Dash in AAPS

There are **two ways**:

### Seçenek 1: Yeni kurulum

When installing **AAPS** for the first time, the **Setup Wizard** will guide new users through key features and installation requirements for **AAPS**. Select “DASH” when you reach Pump selection.

![Enable_Dash_1](../images/DASH_images/Enable_Dash/Enable_Dash_1.png)

When in doubt you can also select “Virtual Pump” and select “DASH” later, after setting up **AAPS** (see option 2).

### Seçenek 2: Konfigürasyon ayarları

On an existing installation you can select the **DASH** pump from the Config builder:

On the top-left hand corner **hamburger menu** select **Config Builder (1)**\ ➜\ **Pump**\ ➜\ **Dash**\ ➜\ **Settings Gear (3)** by selecting the **radio button (2)** titled **Dash**.

Selecting the **checkbox (4)** next to the **Settings Gear (3)** will allow the DASH menu to be displayed as a tab in the **AAPS** interface titled **DASH**. Checking this box will facilitate your access to the DASH commands when using **AAPS**.

**NOTE:** A faster way to access the [**Dash settings**](#omnipod-dash-settings) can be found below in the DASH settings section of this document.

![Enable_Dash_3](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)

### Omnipod Sürücü Seçiminin Doğrulanması

To verify that you have selected the DASH in **AAPS**, if you have checked the box (4), **swipe to the left** from the **Overview** tab, where you will now see a **DASH** tab on **AAPS**. If this box is left unchecked, you’ll find the DASH tab in the hamburger menu upper left.

![Enable_Dash_4](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

## Dash Konfigürasyonu

Please **swipe left** to the **DASH** tab where you will be able to manage all pod functions (some of these functions are not enabled or visible without an active pod session):

![Refresh_LOGO](../images/DASH_images/Refresh_LOGO.png) 'Refresh' pod connectivity and status, be able to silence pod alarms when the pod beeps

![POD_MGMT_LOGO](../images/DASH_images/POD_MGMT_LOGO.png) 'Pod Management' (Activate, Deactivate, Play test beep, and Pod history)

(omnipod-dash-activate-pod)=

### Pod Etkinleştirme

1. **DASH** sekmesine gidin. **POD YNTM (1)** butonuna ve ardından **Pod Etkinleştir (2) **butonuna tıklayın.

![Activate_Pod_1](../images/DASH_images/Activate_Pod/Activate_Pod_1.png)

​    ![Activate_Pod_2](../images/DASH_images/Activate_Pod/Activate_Pod_2.png)

2. **Podu Doldur** ekranı görüntülenir. Yeni bir podu en az 80 ünite insülinle doldurun ve podun kullanıma hazır olduğunu belirten iki bip sesini dinleyin. 3 gün boyunca ihtiyacınız olan toplam insülin miktarını hesaplarken, pod hazırlamanın ilave 3-10 ünite kullanacağını lütfen göz önünde bulundurun.

![Activate_Pod_3](../images/DASH_images/Activate_Pod/Activate_Pod_3.png)    ![Activate_Pod_4](../images/DASH_images/Activate_Pod/Activate_Pod_4.jpg)

Ensure that the new pod and the phone running **AAPS** are within close proximity of each other and click the **Next** button.

**NOTE**: if the  error message below pops up _'Could not find an available pod for activation'_ (this can happen), do not panic. Click on the **Retry** button. In most situations activation will continue successfully.

![Activate_Pod_3](../images/DASH_images/Activate_pod_error.png)

3. **Pod'u Başlat** ekranında, pod hazırlanmaya başlar (pod kendini hazırlarken bir tıklama ve ardından bir dizi tıkırtı sesi duyarsınız).  Başarılı kullanıma hazırlamanın ardından yeşil bir onay işareti gösterilecek ve **İleri** butonu aktif olacaktır. Pod hazırlama işlemini tamamlamak ve **Pod Ekle** ekranını görüntülemek için **İleri** butonunu tıklayın.

![Activate_Pod_5](../images/DASH_images/Activate_Pod/Activate_Pod_5.jpg)    ![Activate_Pod_6](../images/DASH_images/Activate_Pod/Activate_Pod_6.jpg)

4. Next, prepare the infusion site ready to receive the new pod. Wash hands to avoid any risk of infection. Clean the infusion site by either using soap and water or an alcohol wipe to disinfect and let the skin air dry completely before proceeding. Remove the pod's blue plastic needle cap. If you see something that sticks out of the pod or unusual, cancel the process and start with a new pod. If everything looks OK, proceed to take off the white paper backing from the adhesive and apply the pod to the selected site on your body. Bitirdiğinizde, **İleri** butonunu tıklayın.

![Activate_Pod_8](../images/DASH_images/Activate_Pod/Activate_Pod_8.jpg)

5. **Pod Ekle** iletişim kutusu şimdi görünecektir. **Kanülü vücudunuza yerleştirmeye hazırsanız Tamam düğmesini tıklayın**.

![Activate_Pod_9](../images/DASH_images/Activate_Pod/Activate_Pod_9.jpg)

6. After pressing **OK**, it may take some time before the DASH responds and inserts the cannula (1-2 minutes maximum). Be patient.

 *NOT: Kanül takılmadan önce, kanül yerleştirme noktasının etrafındaki cildi sıkıştırmak iyi bir uygulamadır. Bu iğnenin düzgün bir şekilde yerleştirilmesini sağlar ve tıkanıklık oluşturma şansınızı azaltır.*

![Activate_Pod_10](../images/DASH_images/Activate_Pod/Activate_Pod_10.png)    ![Activate_Pod_11](../images/DASH_images/Activate_Pod/Activate_Pod_11.jpg)

7. Başarılı bir kanül yerleştirilmesinden sonra yeşil bir onay işareti görünür ve **İleri** butonu aktif olur. **İleri** butonunu tıklayın.

![Activate_Pod_12](../images/DASH_images/Activate_Pod/Activate_Pod_12.jpg)

9. **Pod etkinleştirildi** ekranı görüntülenir. Yeşil **Bitti** düğmesini tıklayın. Tebrikler! You have now started a new pod session.

![Activate_Pod_13](../images/DASH_images/Activate_Pod/Activate_Pod_13.jpg)

10. **Pod yönetimi** menüsünde şimdi **Pod Etkinleştir (1)** butonu <em x-id"3"=>devre dışı</em> olmalı ve **Pod'u Devre Dışı Bırak (2)** butonu *aktif olmalıdır.*. Bunun nedeni, bir podun artık etkin olması ve o anda etkin olan podu devre dışı bırakmadan ek bir pod etkinleştirememenizdendir.

    **DASH** sekme ekranına dönmek için telefonunuzdaki geri düğmesini tıklayın. Şimdi aktif pod oturumunuz için mevcut bazal oran, pod rezervuar seviyesi, iletilen insülin, pod hataları ve uyarılar dahil Pod bilgileri görüntülenecektir.

    For more details on the information displayed go to the [**DASH Tab**](#omnipod-dash-tab) section of this document.

![Activate_Pod_14](../images/DASH_images/Activate_Pod/Activate_Pod_14.png)

​    ![Activate_Pod_15](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

It is good practice to export settings AFTER activating the pod. Export settings should be done at each pod change and once a month, copy the exported file to your internet drive. see [**Export settings Doc**](../Maintenance/ExportImportSettings.md).


(omnipod-dash-deactivate-pod)=

### Pod'u Devre Dışı Bırakma

Under normal circumstances, the expected lifetime of a pod is three days (72 hours) and an additional 8 hours after the pod expiration warning for a total of 80 hours of pod usage.

To deactivate a pod (either from expiration or from a pod failure):

1. **DASH** sekmesine gidin, **POD YNTM (1)** butonunu tıklayın, **pod yönetimi** ekranında **Pod'u Devre Dışı Bırak (2)** butonunu tıklayın.

![Deactivate_Pod_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)

​    ![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

2. **Pod'u Devre Dışı Bırak** ekranında, podu devre dışı bırakma işlemini başlatmak için **İleri** butonunu tıklayın. Devre dışı bırakmanın başarılı olduğuna dair poddan bir onay bip sesi alacaksınız.

![Deactivate_Pod_3](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_3.jpg)

 ![Deactivate_Pod_4](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_4.jpg)


3. Başarılı bir şekilde devre dışı bırakmanın ardından yeşil bir onay işareti görünecektir. Pod devre dışı ekranını görüntülemek için **İleri** butonunu tıklayın. Etkin oturum devre dışı bırakıldığı için artık podunuzu çıkartabilirsiniz.

![Deactivate_Pod_5](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_5.jpg)

4. **Pod Yönetimi** ekranına dönmek için yeşil butona tıklayın.

![Deactivate_Pod_6](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_6.jpg)

5. Artık **Pod Yönetimi** menüsündesiniz; **DASH** sekmesine dönmek için telefonunuzdaki geri butonuna basın. **Pod durumu:** alanında bir **Aktif pod yok** mesajının görüntülendiğini doğrulayın.

![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

 ![Deactivate_Pod_8](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

(omnipod-dash-resuming-insulin-delivery)=

### İnsülin İletimini Sürdür

**Note**: During **Profile Switches**, DASH must suspend delivery before setting the new basal **Profile** as delivery can be suspended. Read [**Delivery suspended**](#omnipod-dash-delivery-suspended) in the troubleshooting section for more details.

Use this command to instruct the active, currently suspended pod to resume insulin delivery. After the command is successfully processed, insulin will resume normal delivery using the current basal rate based on the current time from the active basal **Profile**. The pod will again accept commands for bolus, **TBR**, and **SMB**.

1. **DASH** sekmesine gidin ve **Pod durumu (1)** satırında **ASKIYA ALINDI** mesajının görünmesi gerekir, ardından mevcut podun normal insülin iletimini sürdürmesi talimatını vermek için **İLETİME DEVAM ET (2)** butonuna basın. **Pod Durumu (3)** satırında **İleme Devam Et** mesajı görüntülenir.

![Resume_1](../images/DASH_images/Resume/Resume_1.jpg)   ![Resume_2](../images/DASH_images/Resume/Resume_2.jpg)

2. İletimi sürdür komutu başarılı olduğunda, bir onay iletişim kutusu **İnsülin iletimi yeniden başlatıldı.** mesajını görüntüler. Onaylamak ve devam etmek için **Tamam**'ı tıklayın.

![Resume_3](../images/DASH_images/Resume/Resume_3.png)

3. **DASH** sekmesi, **Pod durumu (1)** satırını **ÇALIŞIYOR** olarak günceller ve **İletime Devam Et** butonu artık görüntülenmez.

![Resume_4](../images/DASH_images/Resume/Resume_4.jpg)

### Pod Alarmlarını Susturma

*NOTE - The SILENCE ALERTS button is only available on the **DASH** tab when the pod expiration or low reservoir alert has been triggered. If the SILENCE ALERTS button is not visible and you hear beep sounds from the pod, try to 'Refresh pod status'.*

The process below will show you how to acknowledge and dismiss pod beeps when the active pod time reaches the warning time limit before the pod expiration of 72 hours (3 days). This warning time limit is defined in the **Hours before shutdown** Dash alerts setting. The maximum life of a pod is 80 hours (3 days 8 hours), however Insulet recommends not exceeding the 72 hours (3 days) limit.

1. Tanımlanan **Kapanmadan kaç saat önce?** uyarı süresi sınırına ulaşıldığında, pod sona erme zamanına yaklaştığını size bildirmek için uyarı bip sesleri çıkaracak ve yakında pod değişikliği gerekecektir. Bunu **DASH** sekmesinde doğrulayabilirsiniz, **Pod Sona Erme: (1)** satırı tam zamanı gösterecektir. Pod'un süresi dolar (etkinleştirmeden 72 saat sonra) ve bu süre geçerse metin **kırmızı** olacaktır. **Etkin pod alarmları (2)** satırında, **Pod'un süresi yakında dolacak** durum mesajı görüntülenir. Bu aynı zamanda **ALARMLARI SUSTUR (3)** butonunun görüntülenmesini de tetikler.

![ACK_alerts_1](../images/DASH_images/ACK_Alerts/ACK_ALERTS_1.png)

2. **DASH** sekmesine gidin ve **ALARMLARI SUSTUR (2)** butonuna basın. **AAPS** sends the command to the pod to deactivate the pod expiration warning beeps and updates the **Pod status (1)** field with **ACKNOWLEDGE ALERTS**.

![ACK_alerts_2](../images/DASH_images/ACK_Alerts/ACK_ALERTS_2.png)

3. Uyarıların **başarıyla devre dışı bırakılması** üzerine, etkin pod tarafından **2 bip** sesi verilir ve bir onay iletişim kutusunda **Etkin alarmlar susturuldu.** mesajı görüntülenir. İletişim kutusunu onaylamak ve kapatmak için **Tamam** butonunu tıklayın.


![ACK_alerts_3](../images/DASH_images/ACK_Alerts/ACK_ALERTS_3.png)

4. **DASH** sekmesine gidin. **Etkin Pod Alarmları** satırında, uyarı mesajı artık görüntülenmez ve etkin pod artık sona erme uyarısı bip sesi vermez.

(omnipod-dash-view-pod-history)=

### Pod Geçmişini Görüntüle

This section explains how to review your active pod history and filter by different action categories. The pod history tool allows you to view the actions and results committed to your currently active pod during its three days (72 - 80 hours) life.

This feature is helpful in verifying boluses, TBRs and basal commands that were sent to the pod. The remaining categories are useful for troubleshooting issues and determining the order of events that occurred leading up to a failure.

*NOTE:* **Only the last command can be uncertain**. New commands *will not be sent* until the **last 'uncertain' command becomes 'confirmed' or 'denied'**. The way to 'fix' uncertain commands is to **'refresh pod status'**.

1. **DASH** sekmesine gidin ve **POD YNTM (1)** butonuna basarak **Pod Yönetimi** menüsüne gidin ve ardından pod geçmişi ekranına erişmek için **Pod geçmişi (2)** butonuna basın.

![Pod_history_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)



 ![Pod_history_2](../images/DASH_images/Pod_History/Pod_history_2.jpg)



2. **Pod geçmişi ** ekranında, **All (1)** (Tümü) varsayılan kategorisi ile tüm pod **Eylemleri (3)** ve **Sonuçları (4)** **Tarih ve Saat (2)** ters kronolojik sırada görüntülenir. Use your phone’s **back button 2 times** to return to the **DASH** tab in the main **AAPS** interface.


![Pod_history_3](../images/DASH_images/Pod_History/Pod_history_3.jpg) ![Pod_history_4](../images/DASH_images/Pod_History/Pod_history_4.jpg)

(omnipod-dash-tab)=

## DASH Sekmesi

Below is an explanation of the layout and meaning of the icons and status fields on the **DASH** tab in the main AAPS interface.

*NOTE: If any message in the **DASH** tab status fields report (uncertain), then you will need to press the Refresh button to clear it and refresh the pod status.*

![DASH_Tab_1](../images/DASH_images/DASH_Tab/DASH_Tab_1.png)

### Alanlar

* **Bluetooth Adresi:** Bağlı Pod'un mevcut bluetooth adresini görüntüler.
* **Bluetooth Durumu:** Mevcut bağlantı durumunu görüntüler.
* **Sıra Numarası:** Etkin POD'un sıra numarasını görüntüler.
* **Firmware Versiyonu:** Etkin bağlantının firmware sürümünü görüntüler.
* **Pod üzerindeki zaman:** Pod üzerindeki geçerli saati görüntüler.
* **Pod Sona Erme:** Pod'un süresinin dolacağı tarih ve saati görüntüler.
* **Pod durumu:** Pod durumunu görüntüler.
* **Son bağlantı:** Pod ile son iletişimin zamanını görüntüler.

   - *Biraz önce* - 20 saniyeden kısa bir süre önce.
   - *Bir dakikadan kısa bir süre önce* - 20 saniyeden uzun, ancak 60 saniyeden kısa bir süre önce.
   - *1 dakika önce* - 60 saniyeden uzun ancak 120 saniyeden kısa (2 dakika)
   - *XX dakika önce* - XX değeriyle tanımlanan 2 dakikadan daha uzun bir süre önce

* **Son bolus:** Etkin pod'dan gönderilen son bolus miktarını ve ne kadar süre önce verildiğini parantez içinde görüntüler.
* **Bazal oranı:** Bazal oran profilinden geçerli zaman için programlanmış bazal oranı görüntüler.
* **Geçici bazal oranı:** Şu anda çalışmakta olan Geçici Bazal Oranı aşağıdaki biçimde görüntüler

   - {Units per hour} @{TBR start time}  ({minutes run}/{total minutes TBR will be run})
   - *Örnek:* 0,00Ü/s @18:25 ( 90/120 dakika)

* **Rezervuar:** Rezervuarda 50 üniteden fazla insülin olduğuda 50+Ü'den fazla kalanı gösterir. 50 Ü'nin altında, tam birimler görüntülenir.
* **Toplam iletilen:** Rezervuardan iletilen toplam insülin ünite miktarını görüntüler. Bu miktar etkinleştirme ve hazırlama için kullanılan insülini de içerir.
* **Hatalar:** Karşılaşılan son hatayı görüntüler. Review the [Pod history](#omnipod-dash-view-pod-history) and log files for past errors and more detailed information.
*  **Etkin pod alarmları:** Etkin pod alarmlarını gösteren satırdır.

### Butonlar


![Refresh_Icon](../images/DASH_images/Refresh_LOGO.png) : Sends a refresh command to the active pod to update communication.

   * Pod durumunu yenilemek ve metin içeren (belirsiz) durum satırlarını yenilemek için kullanın.
   * Ek bilgi için aşağıdaki Sorun Giderme bölümüne bakın.

![POD_MGMT_Icon](../images/DASH_images/POD_MGMT_LOGO.png) : Navigates to the Pod management menu.

![ack_alert_logo](../images/DASH_images/ack_alert_logo.png) : When pressed this will disable the pod alerts beeps and notifications (expiry, low reservoir..).

   * Bu buton, yalnızca pod kullanım süresi (72saat) aşılmışsa görüntülenir.
   * Başarılı bir devre dışı bırakmanın ardından bu simge artık görünmeyecektir.

![RESUME_Icon](../images/DASH_images/DASH_tab_icons/RESUME_Icon.png) : Resumes the currently suspended insulin delivery in the active pod.

### Pod Yönetim Menüsü

Below is the meaning of the icons on the **Pod Management** menu accessed by pressing **POD MGMT (1)** button from the **DASH** tab.

![DASH_Tab_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)

 ![DASH_Tab_3](../images/DASH_images/DASH_Tab/DASH_Tab_3.png)

* 2 - [**Activate Pod**](#omnipod-dash-activate-pod) : Primes and activates a new pod.
* 3 - [**Deactivate Pod**](#omnipod-dash-deactivate-pod) : Deactivates the currently active pod.
* 4 - **Play Test Beep** : Plays a single test beep on the pod when pressed.
* 5 - [**Pod history**](#omnipod-dash-view-pod-history) : Displays the active pod activity history.

(omnipod-dash-settings)=

## Dash Ayarları

The Dash driver settings are configurable from the top-left hand corner **hamburger menu** under **Config Builder (1)**\ ➜\ **Pump**\ ➜\ **Dash**\ ➜\ **Settings Gear (3)** by selecting the **radio button (2)** titled **Dash**. Selecting the **checkbox (4)** next to the **Settings Gear (3)** will allow the Dash menu to be displayed as a tab in the **AAPS** interface titled **DASH**.

![Dash_settings_1](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)



**NOTE:** A faster way to access the **Dash settings** is by accessing the **3 dot menu (1)** in the upper right hand corner of the **DASH** tab and selecting **Dash preferences (2)** from the dropdown menu.

![Dash_settings_3](../images/DASH_images/Dash_settings/Dash_settings_3.png)

The settings groups are listed below; you can enable or disable via a toggle switch for most entries described below:

*NOTE: An asterisk (\*) denotes the default setting is enabled.*

### Onay Bildirimleri

![Dash_settings_4](../images/DASH_images/Dash_settings/Dash_settings_4.jpg)

Provides confirmation beeps from the pod for bolus, basal, SMB, and TBR delivery and changes.

* **Bolus bip seslerini etkinleştir:** Bolus iletildiğinde onay biplerini etkinleştirin veya devre dışı bırakın.
* **Bazal bip seslerini etkinleştir:** Yeni bir bazal oran ayarlandığında, aktif bazal oran iptal edildiğinde veya mevcut bazal oran değiştirildiğinde onay biplerini etkinleştirin veya devre dışı bırakın.
* **SMB bip seslerini etkinleştir:** Bir SMB teslim edildiğinde onay biplerini etkinleştirin veya devre dışı bırakın.
* **GBO (TBR) bip seslerini etkinleştir:** Bir GBO ayarlandığında veya iptal edildiğinde onay biplerini etkinleştirin veya devre dışı bırakın.

### Alarmlar

![Dash_settings_5](../images/DASH_images/Dash_settings/Dash_settings_5.jpg)

Provides **AAPS** alerts for pod expiration, shutdown, low reservoir based on the defined threshold units.

*Note an AAPS notification will ALWAYS be issued for any alert after the initial communication with the pod since the alert was triggered. Dismissing the notification will NOT dismiss the alert UNLESS automatically acknowledge Pod alerts is enabled. To MANUALLY dismiss the alert you must visit the **DASH** tab and press the **Silence ALERTS button**.*

* **Süre sonu hatırlatıcısını etkinleştir:** Kapanmadan önce tanımlanan saat süresine ulaşıldığında tetiklenecek şekilde pod sona erme hatırlatıcısını etkinleştirin veya devre dışı bırakın.
* **Kapanmadan kaç saat önce:** Etkin pod kapanmadan önceki saat süresini tanımlar, bu daha sonra pod süre sonu hatırlatıcısı alarmını tetikler.
* **Düşük rezervuar uyarısını etkinleştir:** Pod, ünite satırında belirlenen alt rezervuar sınırına ulaştığında bir alarm etkinleştirin veya devre dışı bırakın.
* **Ünite:** Pod düşük rezervuar alarmının tetikleneceği ünite sayısı.

### Bildirimler

![Dash_settings_6](../images/DASH_images/Dash_settings/Dash_settings_6.jpg)

The Notification section allows the user to so select their preferred notifications and audible phone alerts when it is uncertain if TBR, SMB, or bolus, and delivery suspended events were successful.

*NOTE: These are notifications only, no audible beep alerts are made.*

* **Sound for uncertain TBR notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when **AAPS** is uncertain if a TBR was successfully set.
* **Sound for uncertain SMB notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when **AAPS**is uncertain if an SMB was successfully delivered.
* **Sound for uncertain bolus notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when **AAPS**is uncertain if a bolus was successfully delivered.
* **İletimin askıya alındığı bildirimi etkinleştirildiğinde sesle uyar:** İletimi askıya alma başarıyla tamamlandığında sesli bir uyarı ve görsel bildirimi tetiklemek için bu ayarı etkinleştirin veya devre dışı bırakın.

## Eylemler (EYLEM) Sekmesi

This tab is well documented in the main**AAPS**documentation but there are a few items on this tab that are specific to how the DASH differs from tube based pumps, especially after the processes of applying a new pod.

1. Go to the **Actions (ACT)** tab in the main **AAPS**interface.

2. Under the **Careportal (1)** section the **Insulin** and **Cannula** fields will have their **age reset** to 0 days and 0 hours **after each pod change**. Bu Omnipod pompasının çalışma şekli nedeniyle böyle yapılmaktadır. Pod, kanülü doğrudan pod uygulama bölgesinde deriye yerleştirdiği için, Omnipod pompalarında hortum kullanılmaz. *Bu nedenle, bir pod değişikliğinden sonra bu değerlerin her birinin yaşı otomatik olarak sıfırlanır.* **Pompa pil yaşı** pod pili her zaman kendi ömründen daha fazla olacağı için (maksimum 80 saat) rapor edilmez. **Pompa pili** ve **insülin rezervuarı**, her pod içinde yer almaktadır.

![ACT_1](../images/DASH_images/Actions_Tab/ACT_1.png)

### Seviye

**Insulin Level**

Insulin level displayed is the amount reported by DASH. However, the pod only reports the actual insulin reservoir level when it is below 50 units. Until then “Above 50 units” will be displayed. The amount reported is not exact: when the pod reports ‘empty’ in most cases the reservoir will still have some additional units of insulin left. The DASH overview tab will display as described the below:

  * **Above 50 Units** - The pod reports more than 50 units currently in the reservoir.
  * **50 Ünitenin Altında** - Pod tarafından bildirilen rezervuarda kalan insülin miktarı.

Additional note:
  * **SMS** - SMS yanıtlarında insülin seviyesi 50+Ü veya değer görünür.
  * **Nightscout** - Nightscout'a (sürüm 14.07 ve daha eski) 50 üniteden fazla olduğunda 50 değerini yükler.  Daha yeni sürümler, 50 ünite üzerinde olduğunda 50+ değerini bildirir.

## Troubleshooting

(omnipod-dash-delivery-suspended)=

### İletimi askıya alma

  * Artık iletimi askıya alma butonu yok. If you want to "suspend" the pod, you can set a zero **TBR** for x minutes.
  * During **Profile Switches**, DASH must suspend delivery before setting the new basal **Profile**. İki komut arasında iletişim başarısız olursa, iletim askıya alınabilir. Bu olduğunda:
     - Bazal, SMB, Manuel bolus vb. içeren insülin iletimi olmayacaktır.
     - Komutlardan birinin onaylanmadığına dair bir bildirim olabilir: bu, hatanın ne zaman gerçekleştiğine bağlıdır.
     - **AAPS** will try to set the new basal profile every 15 minutes.
     - **AAPS** will show a notification informing that the delivery is suspended every 15 minutes, if the delivery is still suspended (resume delivery failed).
     - The [**Resume delivery**](#omnipod-dash-resuming-insulin-delivery) button will be active if the user chooses to resume delivery manually.
     - If **AAPS** fails to resume delivery on its own (this happens if the pod is unreachable, sound is muted, etc), the pod will start beeping 4 times every minute for 3 minutes, then repeated every 15 minutes if delivery is still suspended for more than 20 minutes.
  * Onaylanmamış komutlar için "pod durumunu yenile" komutu, bunları onaylamalı/reddetmelidir.

**Note:** When you hear beeps from the pod, do not assume that delivery will continue without checking the phone, delivery might stay suspended, **so you need to check !**

### Pod Hataları

Pods fail occasionally due to a variety of issues, including hardware issues with the Pod itself. It is best practice not to call these into Insulet, since AAPS is not an approved use case. A list of fault codes can be [**found here**](https://github.com/openaps/openomni/wiki/Fault-event-codes) to help determine the cause.

### 49 numaralı Pod hatasını önleme

This failure is related to an incorrect pod state for a command or an error during an insulin delivery command. This is when the driver and Pod disagree on the actual state. The Pod (out of a built-in safety measure) then reacts with an unrecoverable error code 49 (0x31) ending up with what is know as a “screamer”: the long irritating beep that can only be stopped by punching a hole at the appropriate location at the back of the Pod. The exact origin of a “49 pod failure” often is hard to trace. In situations that are suspected for this failure to occur (for instance on application crashes, running a development version or re-installation).

### Pompaya Ulaşılamıyor Uyarıları

When no communication can be established with the pod for a preconfigured time a “Pump unreachable” alert will be raised. Pump unreachable alerts can be configured by going to the top right-hand side three-dot menu, selecting **Preferences**\ ➜\ **Local Alerts**\ ➜\ **Pump unreachable threshold [min]**. Recommended value is alerting after **120** minutes.

### Ayarları Dışa Aktarma

Exporting **AAPS** settings enables you to restore all your settings, and maybe more importantly, all your Objectives. You may need to restore settings to the “last known working situation” or after uninstalling/reinstalling **AAPS** or in case of phone loss, reinstalling on the new phone.

Note: The active pod information is included in the exported settings. If you import an "old" exported file, your actual pod will "die". There is no other alternative. In some cases (like a _programmed_ phone change), you may need to use the exported file to restore **AAPS'** settings **while keeping the current active Pod**. In this case it is important to only use the recently exported settings file containing the pod currently active.

**It is good practice to do an export immediately after activating a pod**. This way you will always be able to restore the current active pod in case of a problem. For instance when moving to another backup phone.

Regularly copy your exported settings to a safe place (as a cloud drive) that can be accessible by any phone when needed (e.g. in case of a phone loss or factory reset of the actual phone).

### Ayarları İçe Aktarma

**WARNING** Please note that importing settings will possibly import an outdated Pod status. As a result, there is a risk of losing the active Pod! (see **Exporting Settings**). It is better to only try it when no other options are available.

When importing settings with an active Pod, make sure the export was done with the currently active pod.

**Importing while on an active Pod:** (you risk losing the Pod!)

1. Şu anda etkin olan Pod ile yakın zamanda dışa aktarılan ayarları içe aktardığınızdan emin olun.
2. Ayarlarınızı içe aktarın.
3. Tüm tercihleri kontrol edin.

**Importing (no active Pod session)**

1. Yakın zamanda dışa aktarılan bir dosyanın içe aktarılması işe yarayacaktır (yukarıya bakın)
2. Ayarlarınızı içe aktarın.
3. Tüm tercihleri kontrol edin.
4. You may need to **Deactivate** the "non existing" pod if the imported settings included any active pod data.

### Etkin olmayan bir pod durumunu içeren ayarları içe aktarma

When importing settings containing data for a Pod that is no longer active, AAPS will try to connect with it, which will obviously fail. You can not activate a new Pod in this situation.

To remove the old pod session “try” to de-activate the Pod. The de-activation will fail. Select “Retry”. After the second or third retry you will get the option to remove the pod. Once the old pod is removed you will be able to activate a new pod.

### AAPS'i yeniden yükleme

When uninstalling**AAPS** you will lose all your settings, objectives and the current Pod session. To restore them make sure you have a recent exported settings file available!

When on an active Pod, make sure that you have an export for the current pod session or you will lose the currently active pod when importing older settings.

1. Ayarlarınızı dışa aktarın ve bir kopyasını güvenli bir yerde saklayın.
2. Uninstall **AAPS** and restart your phone.
3. Install the new version of **AAPS**.
4. Ayarlarınızı içe aktarın.
5. Verify all preferences (optionally import settings again).
6. Activate a new pod.
7. Tamamlandığında, mevcut ayarları dışa aktarın.

### AAPS'i daha yeni bir sürüme güncelleme

In most cases there is no need to uninstall. You can do an “in-place” install by starting the installation for the new version. This is also possible when on an active Pod  session.

1. Ayarlarınızı dışa aktarın.
2. Install the new **AAPS** version.
3. Kurulumun başarılı olduğunu doğrulayın
4. RESUME the Pod or activate a new pod.
5. Tamamlandığında, mevcut ayarları dışa aktarın.

### Omnipod sürücü uyarıları

Please note that the Omnipod Dash driver presents a variety of unique alerts on the **Overview tab**, most of them are informational and can be dismissed while some provide the user with an action to take to resolve the cause of the triggered alert. A summary of the main alerts that you may encounter is listed below:

* Aktif bir Pod oturumu algılanamadı. Bu uyarı, **ERTELE**'ye basılarak geçici olarak kapatılabilir, ancak yeni bir pod etkinleştirilmedikçe tetiklenmeye devam edecektir. Etkinleştirildiğinde bu uyarı otomatik olarak susacaktır.
* Pod suspended Informational alert that pod has been suspended.
* Setting basal **Profile** failed : Delivery might be suspended! Lütfen Omnipod sekmesindeki Pod durumunu manuel olarak güncelleyin ve gerekirse teslimi devam ettirin.. Informational alert that the Pod basal **Profile** setting has failed, and you will need to hit *Refresh* on the Omnipod tab.
* Unable to verify whether **SMB** bolus succeeded. Bolus'un başarılı olmadığından eminseniz, SMB girişini Tedaviler'den manuel olarak kaldırmalısınız. Alert that the **SMB** bolus command success could not be verified, you will need to verify the *Last bolus* field on the DASH tab to see if **SMB** bolus succeeded and if not remove the entry from the Treatments tab.
* "Görev bolus/GBO/SMB"nin tamamlanıp tamamlanmadığı belirsizse, lütfen başarılı olup olmadığını manuel olarak doğrulayın.

## Where to get help for DASH

All of the development work for the DASH is done by the community on a **volunteer** basis; please keep this in mind and use the following guidelines before requesting assistance:

-  **Seviye 0:** Sorun yaşadığınız işlevin nasıl çalışması gerektiğini anladığınızdan emin olmak için bu dokümantasyonun ilgili bölümünü okuyun.
-  **Seviye 1:** Bu dokümantasyonu kullanmanıza rağmen hâlâ çözemediğiniz sorunlarla karşılaşıyorsanız, lütfen [bu davet bağlantısını](https://discord.gg/4fQUWHZ4Mw) kullanarak **Discord**'da * #AAPS* kanalına gidin.
-  **Level 2:** Search existing issues to see if your issue has already been reported at [Issues](https://github.com/nightscout/AndroidAPS/issues) if it exists, please confirm/comment/add information on your problem. If not, please create a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach [your log files](../GettingHelp/AccessingLogFiles.md).
-  **Sabırlı olun - topluluğumuzun üyelerinin çoğu iyi huylu gönüllülerden oluşur ve sorunları çözmek genellikle hem kullanıcılar hem de geliştiriciler için zaman ve sabır gerektirir.**
