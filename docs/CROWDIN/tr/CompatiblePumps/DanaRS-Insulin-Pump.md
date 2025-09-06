# DanaRS ve Dana-i Pompa

*Bu talimatlar, 2017'den itibaren bir DanaRS'niz veya daha yeni Dana-i'niz varsa uygulamayı ve pompanızı yapılandırmak içindir. Visit [DanaR Insulin Pump](./DanaR-Insulin-Pump.md) if you have the original DanaR instead.*

**Yeni Dana RS pompa yazılımı v3, AAPS sürüm 2.7'den itibaren kullanılabilir.**

**Yeni Dana-i, AAPS 3.0 sürümünden itibaren kullanılabilir.**

* DanaRS/i pompasında uygulama tarafından "BASAL A" kullanılır. Mevcut verilerin üzerine yazılır.

(DanaRS-Insulin-Pump-pairing-pump)=

## Pompa eşleştirme

* AAPS ana ekranında sol üst köşedeki hamburger menüsüne tıklayın ve Konfigürasyon ayarları'na gidin.
* Pompa bölümünde 'Dana-i/RS'i seçin.
* Doğrudan pompa ayarlarına gitmek için dişli çarka tıklayın veya ana ekrana dönün.
    
    ![AAPS Konfigürasyon ayarları Dana-i/RS](../images/DanaRS_i_ConfigB.png)

* Ana ekranda 'DANA-i/RS' sekmesine gidin.

* Sağ üstteki 3 noktaya dokunarak tercihler menüsünü seçin. 
* 'Dana-i/RS Tercihleri'ni seçin.
* "Pompa seçimi"ne tıklayın.
* Eşleştirme penceresinde pompanıza tıklayın.
    
    ![AAPS Dana-i/RS eşleştirme](../images/DanaRS_i_Pairing.png)

* **Pompa üzerinde eşleştirmeyi onaylamanız gerekir!** Bu, diğer bluetooth eşleştirmelerinden (ör. akıllı telefon ve araç ses sistemi) alışık olduğunuz yoldur.
    
    ![Dana RS eşleştirme onayı](../images/DanaRS_Pairing.png)

* Pompanızın tipine ve yazılımına göre eşleştirme sürecini takip edin:
    
    * DanaRS v1 için tercihlerde pompa şifresini seçin ve şifrenizi ayarlayın.
    * DanaRS v3 için, AAPS eşleştirme iletişim kutusuna, pompada görüntülenen 2 dizi sayı ve harfi yazmanız gerekir.
    * Dana-i için standart Android eşleştirme iletişim kutusu görünür ve pompada görüntülenen 6 haneli sayıyı girmeniz gerekir.

* Kullanılan varsayılan bolus hızını değiştirmek için Bolus Hızı'nı seçin (1u başına 12sn, 1u başına 30sn veya 1u başına 60sn).

* Doktorlar menüsünü kullanarak pompadaki bazal adımı 0,01 Ü/s olarak ayarlayın (pompa kullanım kılavuzuna bakın).
* Doktorlar menüsünü kullanarak pompadaki bolus adımını 0,05 Ü/s olarak ayarlayın (pompa kullanım kılavuzuna bakın).
* Pompada yayma bolusları etkinleştir

(DanaRS-Insulin-Pump-default-password)=

### Varsayılan parola

* Pompa yazılımı v1 ve v2'ye sahip DanaRS için varsayılan parola 1234'tür.
* v3 cihaz yazılımlı DanaRS veya Dana-i'ye sahip olanlar için varsayılan parola üretim tarihinden çıkarılır ve MMDD olarak hesaplanır; burada MM ay, DD ise pompanın üretildiği gündür (yani '0124', 01. ayı ve 24. günü temsil eder).
    
    * MAIN MENU'den REVIEW'i seçin ve alt menüden SHIPPING INFORMATION'nu açın.
    * 3. numara üretim tarihidir. 
    * v3/i için bu şifre sadece pompada menüyü kilitlemek için kullanılır. İletişim veya AAPS'e girmek için gerekli değildir.

(DanaRS-Insulin-Pump-change-password-on-pump)=

## Pompa şifresi değiştirme

* Pompadaki OK düğmesine basın
* Ana menüde "OPTION" (seçenek) öğesini seçin (sağ ok düğmesine birkaç kez basarak sağa hareket edin)
    
    ![DanaRS Ana Menü](../images/DanaRSPW_01_MainMenu.png)

* Seçenekler menüsünde "USER OPTION" "kullanıcı seçeneği"ni seçin
    
    ![DanaRS Seçenek Menüsü](../images/DanaRSPW_02_OptionMenu.png)

* "11. password'e (parolaya) inmek için sağ ok düğmesini kullanın"
    
    ![DanaRS 11. Parola](../images/DanaRSPW_03_11PW.png)

* Eski şifreyi girmek için Tamam'a basın.

* Enter **old password** (Default password see [above](#DanaRS-Insulin-Pump-default-password)) and press OK
    
    ![DanaRS Eski parola girişi](../images/DanaRSPW_04_11PWenter.png)

* Buraya yanlış şifre girilirse, başarısız olduğunuzu belirten bir mesaj almayacaksınız!

* **Yeni şifre** belirleyin (+ & - düğmeleriyle sayıları değiştirin / sağa gitmek için sağ ok butonuna basın).
    
    ![DanaRS Yeni parola](../images/DanaRSPW_05_PWnew.png)

* OK butonu ile onaylayın.

* Ayarı kaydetmek için OK'e basın.
    
    ![DanaRS Yeni parolayı kaydet](../images/DanaRSPW_06_PWnewSave.png)

* "14. EXIT" çıkışa gelin ve OK butonuna basın.
    
    ![DanaRS Çıkış](../images/DanaRSPW_07_Exit.png)

(DanaRS-Insulin-Pump-dana-rs-specific-errors)=

## Dana RS'e özgü hatalar

### İnsülin iletimi sırasında hata

Bolus insülin iletimi sırasında AAPS ile Dana RS arasındaki bağlantının kesilmesi durumunda (yani, Dana RS insülin iletirken telefondan uzaklaşırsanız) bir mesaj görecek ve bir alarm sesi duyacaksınız.

![İnsülin iletimi alarmı](../images/DanaRS_Error_bolus.png)

* Çoğu durumda bu sadece bir iletişim sorunudur ve doğru miktarda insülin verilir.
* Doğru bolus verilip verilmediğini pompa geçmişinden (pompada veya Dana sekmesi > pompa geçmişi > boluslar aracılığıyla) kontrol edin.
* Delete error entry in [treatments tab](#screens-bolus-carbs) if you wish.
* Bir sonraki pompa bağlantısında gerçek miktar okunur ve kaydedilir. Bunu yaptırmak için dana sekmesindeki BT simgesine basın veya bir sonraki bağlantı için bekleyin.

## Telefon değiştirirken özel not

Yeni bir telefona geçerken aşağıdaki adımları yapmanız gerekir:

* [Export settings](../Maintenance/ExportImportSettings.md) on your old phone
* Ayarları eski telefondan yeni telefona aktarın

### DanaRS v1

* Dana RS'i yeni telefonla **manuel olarak eşleştirin**
* Pompa bağlantı ayarları da içe aktarıldığından, yeni telefonunuzdaki AAPS pompayı zaten "bilir" ve bu nedenle bir bluetooth taraması başlatmaz. Bu nedenle yeni telefon ve pompa manuel olarak eşleştirilmelidir.
* AAPS'i yeni telefona yükleyin.
* [Import settings](../Maintenance/ExportImportSettings.md) on your new phone

### DanaRS v3, Dana-i

* Start pairing procedure as described [above](#DanaRS-Insulin-Pump-pairing-pump).
* Bazen, Dana-i/RS sekmesindeki BT simgesine uzun tıklayarak AAPS'deki eşleştirme bilgilerinin temizlenmesi gerekebilir.

## Dana RS pompasıyla seyahat edenler için saat dilimi

For information on traveling across time zones see section [Timezone traveling with pumps](#timezone-traveling-danarv2-danars).