# DanaRS ve Dana-i Pompa

*Bu talimatlar, 2017'den itibaren bir DanaRS'niz veya daha yeni Dana-i'niz varsa uygulamayı ve pompanızı yapılandırmak içindir. Bunun yerine DanaR'a sahipseniz [DanaR İnsülin Pompası](./DanaR-Insulin-Pump)'nı ziyaret edin.*

**Yeni Dana RS pompa yazılımı v3, AndroidAPS sürüm 2.7'den itibaren kullanılabilir.**

**Yeni Dana-i, AndroidAPS 3.0 sürümünden itibaren kullanılabilir.**

* DanaRS/i pompasında uygulama tarafından "BASAL A" kullanılır. Mevcut verilerin üzerine yazılır.

## Pompa eşleştirme

* AndroidAPS ana ekranında sol üst köşedeki hamburger menüsüne tıklayın ve Konfigürasyon ayarları'na gidin.
* Pompa bölümünde 'Dana-i/RS'i seçin.
* Doğrudan pompa ayarlarına gitmek için dişli çarka tıklayın veya ana ekrana dönün.
    
    ![AAPS config builder Dana-i/RS](../images/DanaRS_i_ConfigB.png)

* Ana ekranda 'DANA-i/RS' sekmesine gidin.

* Sağ üstteki 3 noktaya dokunarak tercihler menüsünü seçin. 
* 'Dana-i/RS Tercihleri'ni seçin.
* "Pompa seçimi"ne tıklayın.
* Eşleştirme penceresinde pompanıza tıklayın.
    
    ![AAPS pair Dana-i/RS](../images/DanaRS_i_Pairing.png)

* **Pompa üzerinde eşleştirmeyi onaylamanız gerekir!** Bu, diğer bluetooth eşleştirmelerinden (ör. akıllı telefon ve araç ses sistemi) alışık olduğunuz yoldur.
    
    ![Dana RS confirmation pairing](../images/DanaRS_Pairing.png)

* Pompanızın tipine ve yazılımına göre eşleştirme sürecini takip edin:
    
    * DanaRS v1 için tercihlerde pompa şifresini seçin ve şifrenizi ayarlayın.
    * DanaRS v3 için, AndroidAPS eşleştirme iletişim kutusuna, pompada görüntülenen 2 dizi sayı ve harfi yazmanız gerekir.
    * Dana-i için standart Android eşleştirme iletişim kutusu görünür ve pompada görüntülenen 6 haneli sayıyı girmeniz gerekir.

* Kullanılan varsayılan bolus hızını değiştirmek için Bolus Hızı'nı seçin (1u başına 12sn, 1u başına 30sn veya 1u başına 60sn).

* Doktorlar menüsünü kullanarak pompadaki bazal adımı 0,01 Ü/s olarak ayarlayın (pompa kullanım kılavuzuna bakın).
* Doktorlar menüsünü kullanarak pompadaki bolus adımını 0,1 Ü/s olarak ayarlayın (pompa kullanım kılavuzuna bakın).
* Pompada yayma bolusları etkinleştir

### Varsayılan parola

* Pompa yazılımı v1 ve v2'ye sahip DanaRS için varsayılan parola 1234'tür.
* Pompa yazılımı v3 olan DanaRS veya Dana-i için varsayılan parola, üretim ayı ve üretim tarihinin (yani 01. ay ve 24. gün) birleşimidir.
    
    * Ana menüde Pompa > gözden geçir > bilgi açın. 
    * 3. numara üretim tarihidir. 
    * v3/i için bu şifre sadece pompada menüyü kilitlemek için kullanılır. İletişim veya AndroidAPS'e girmek için gerekli değildir.

## Pompa şifresi değiştirme

* Pompadaki OK düğmesine basın
* Ana menüde "OPTION" (seçenek) öğesini seçin (sağ ok düğmesine birkaç kez basarak sağa hareket edin)
    
    ![DanaRS Main Menu](../images/DanaRSPW_01_MainMenu.png)

* Seçenekler menüsünde "USER OPTION" "kullanıcı seçeneği"ni seçin
    
    ![DanaRS Option Menu](../images/DanaRSPW_02_OptionMenu.png)

* "11. password'e (parolaya) inmek için sağ ok düğmesini kullanın"
    
    ![DanaRS 11. Password](../images/DanaRSPW_03_11PW.png)

* Eski şifreyi girmek için Tamam'a basın.

* **Eski şifreyi** girin (Varsayılan şifre için [yukarıya](#default-password) bakın) ve "OK" Tamam'a basın
    
    ![DanaRS Enter old password](../images/DanaRSPW_04_11PWenter.png)

* Buraya yanlış şifre girilirse, başarısız olduğunuzu belirten bir mesaj almayacaksınız!

* **Yeni şifre** belirleyin (+ & - düğmeleriyle sayıları değiştirin / sağa gitmek için sağ ok butonuna basın).
    
    ![DanaRS New password](../images/DanaRSPW_05_PWnew.png)

* OK butonu ile onaylayın.

* OK butonuna tekrar basarak kaydediniz.
    
    ![DanaRS Save new password](../images/DanaRSPW_06_PWnewSave.png)

* "14. EXIT" çıkışa gelin ve OK butonuna basın.
    
    ![DanaRS Exit](../images/DanaRSPW_07_Exit.png)

## Dana RS'e özgü hatalar

### İnsülin iletimi sırasında hata

Bolus insülin iletimi sırasında AAPS ile Dana RS arasındaki bağlantının kesilmesi durumunda (yani, Dana RS insülin iletirken telefondan uzaklaşırsanız) aşağıdaki mesajı görecek ve bir alarm sesi duyacaksınız.

![Alarm insulin delivery](../images/DanaRS_Error_bolus.png)

* In most cases this is just a communication issue and the correct amount of insulin is delivered.
* Check in pump history (either on the pump or through Dana tab > pump history > boluses) if correct bolus is given.
* Delete error entry in [treatments tab](../Getting-Started/Screenshots#carb-correction) if you wish.
* Real amount is read and recorded on next connect. To force this press BT icon on dana tab or just wait for next connect.

## Special note when switching phone

When switching to a new phone the following steps are necessary:

* [Export settings](../Usage/ExportImportSettings#export-settings) on your old phone
* Transfer settings from old to new phone

### DanaRS v1

* **Manually pair** Dana RS with the new phone
* As pump connection settings are also imported AAPS on your new phone will already "know" the pump and therefore not start a bluetooth scan. Therefore new phone and pump must be paired manually.
* Install AndroidAPS on the new phone.
* [Import settings](../Usage/ExportImportSettings#import-settings) on your new phone

### DanaRS v3, Dana-i

* Start pairing procedure like decribed [above](#pairing-pump).
* Sometimes it may be necessary to clear pairing information in AndroidAPS by long-click BT icon on Dana-i/RS tab.

## Dana RS pompasıyla seyahat edenler için saat dilimi

Saat dilimleri arasında seyahat hakkında bilgi için [Pompayla seyahat ederken saat dilimleri](../Usage/Timezone-traveling#danarv2-danars) bölümüne bakın.