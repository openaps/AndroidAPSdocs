(Accessing-logfiles-accessing-logfiles)=

# Günlük dosyalarına erişim

* Telefonu dosya aktarım modunda bir bilgisayara bağlayın
* AndroidAPS veri dizinindeki günlük dosyalarını bulun
    
    * (2.8.2) Klasör, ***Internal storage(1) / Android / data / info.nightscout.androidaps / files*** konumuna benzer bir konumda olacaktır
    * (3.0.0) Klasör, ***Internal storage(1) / AAPS / logs*** konumuna benzer bir konumda olacaktır
    * Kök depolama klasörünün (1) adlandırılması, telefona bağlı olarak biraz değişebilir.

![logs](../images/aapslog.png)

* Geçerli günlük, Android Studio'da, herhangi bir Log Viewer android uygulamasında [LogCat](https://developer.android.com/studio/debug/am-logcat.html) gibi çeşitli şekillerde veya yalnızca düz metin olarak görüntülenebilen bir .log dosyasıdır. 
* Önceki günlük dosyaları sıkıştırılır ve tarih/saat sırasına göre klasörlerde saklanır. 
* Olası bir hata hakkında konuşmak için günlük dosyanızı [discord](https://discord.gg/4fQUWHZ4Mw)'da paylaşıyorsanız, lütfen sıkıştırılmış dosyayı açın ve hata oluşmadan önceki tarihli dosyayı yükleyin.