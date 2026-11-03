(Accessing-logfiles-accessing-logfiles)=

# Günlük dosyalarına erişim

* Telefonu dosya aktarım modunda bir bilgisayara bağlayın
* Günlük dosyalarını AAPS veri dizininde, `Android\data\info.nightscout.androidaps\files` içinde bulun.  
    Kök depolama klasörünün adı telefona göre biraz farklı olabilir.
* [AAPSClient](#RemoteControl_aapsclient) için konum `Android\data\info.nightscout.aapsclient\files` şeklindedir.
* Not: Günlük konumu **AAPS 3.3** ile değişti. Gerekirse önceki sürümlerin dokümantasyonuna bakın.

![logs](../images/aapslog.png)

* Geçerli günlük bir .log dosyasıdır. Bu dosyayı birçok şekilde görüntüleyebilirsiniz: Android Studio içindeki [LogCat](https://developer.android.com/studio/debug/am-logcat.html) ile, herhangi bir günlük görüntüleme Android uygulamasıyla veya düz metin olarak. 
* Önceki günlük dosyaları sıkıştırılır ve tarih/saat sırasına göre klasörlerde saklanır. 
* Olası bir hata hakkında konuşmak için günlük dosyanızı [discord](https://discord.gg/4fQUWHZ4Mw)'da paylaşıyorsanız, lütfen sıkıştırılmış dosyayı açın ve hata oluşmadan önceki tarihli dosyayı yükleyin.