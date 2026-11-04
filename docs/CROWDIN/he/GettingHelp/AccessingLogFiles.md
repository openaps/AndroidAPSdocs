(Accessing-logfiles-accessing-logfiles)=

# גישה לקובצי היומן

* Connect phone to a computer in file transfer mode
* Locate the log files in the AAPS data directory, in `Android\data\info.nightscout.androidaps\files`.  
    The naming of the root storage folder may vary a little depending on the phone.
* The location is `Android\data\info.nightscout.aapsclient\files` for [AAPSClient](#RemoteControl_aapsclient).
* הערה: מיקום היומנים השתנה ב־**AAPS 3.3**. See the previous versions' documentation if needed.

![יומנים](../images/aapslog.png)

* היומן הנוכחי הוא קובץ .log שניתן לצפות בו בכמה דרכים, כגון [LogCat](https://developer.android.com/studio/debug/am-logcat.html) בתוך Android Studio, כל אפליקציה לצפייה ביומנים ב־Android, או פשוט כטקסט רגיל. 
* Previous log files are zipped and stored in folders in date/time order. 
* אם אתם משתפים קובץ יומן ב־[discord](https://discord.gg/4fQUWHZ4Mw) כדי לדון בבאג אפשרי, יש לחלץ מהארכיון ולהעלות את הקובץ שתאריכו קודם להתרחשות השגיאה.