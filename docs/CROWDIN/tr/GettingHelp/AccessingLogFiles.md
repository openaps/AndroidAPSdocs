(Accessing-logfiles-accessing-logfiles)=

# Günlük dosyalarına erişim

* Telefonu dosya aktarım modunda bir bilgisayara bağlayın
* Locate the log files in the AAPS data directory, in `Android\data\info.nightscout.androidaps\files`.  
    The naming of the root storage folder may vary a little depending on the phone.
* The location is `Android\data\info.nightscout.aapsclient\files` for [AAPSClient](#RemoteControl_aapsclient).
* Note: log location has changed in **AAPS 3.3**. See the previous versions' documentation if needed.

![logs](../images/aapslog.png)

* The current log is a .log file which can be viewed in a number of ways such as [LogCat](https://developer.android.com/studio/debug/am-logcat.html) within Android Studio, any log viewer Android app, or simply as plain text. 
* Önceki günlük dosyaları sıkıştırılır ve tarih/saat sırasına göre klasörlerde saklanır. 
* Olası bir hata hakkında konuşmak için günlük dosyanızı [discord](https://discord.gg/4fQUWHZ4Mw)'da paylaşıyorsanız, lütfen sıkıştırılmış dosyayı açın ve hata oluşmadan önceki tarihli dosyayı yükleyin.