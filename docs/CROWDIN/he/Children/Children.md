# ניטור מרחוק

![Monitoring children](../images/KidsMonitoring.png)

AAPS offer several options for remote monitoring of children and also allows to send remote commands. Of course you can also use remote monitoring to follow your partner or friend.

## פונקציות

- Kid's pump is controlled by kid's phone using AAPS.
- Parents can remotely follow seeing all relevant data such as glucose levels, carbs on board, insulin on board etc. using **AAPSClient app** on their phone. Settings must be the same in AAPS and AAPSClient app.
- הורים יכולים לקבל התרעות באמצעות שימוש **באפליקציית xDrip בתור עוקבים (follower mode)** במכשירים החכמים.
- Remote control of AAPS using [SMS Commands](../Children/SMS-Commands.md) secured by two-factor authentication.
- Remote control through AAPSClient app is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see [release notes for Version 2.8.1.1](Releasenotes-important-hints-2-8-1-1) for further details.

## כלים ואפליקציות לניטור מרחוק

- [נייטסקאוט](https://nightscout.github.io/) בדפדפן אינטרנט (בעיקר הצגת נתונים)
- AAPSClient app is a stripped down version of AAPS capable of following somebody, making profile switches, setting TTs and entering carbs. There are 2 apps:  [AAPSClient & AAPSClient2 to download](https://github.com/nightscout/AndroidAPS/releases/). ההבדל היחידי ביניהן הוא שמן. כך ניתן להתקין שני עותקים של האפליקציה על אותו המכשיר ולעקוב אחר שני מטופלים או חשבונות נייטסקאוט במקביל.
- דקסקום Follow אם אתם משתמשים באפליקציית דקסקום (רק ערכי הסוכר מוצגים)
- אפליקציית [xDrip+](../Configuration/xdrip.md) במצב עוקב (בעיקר להצגת ערכי הסוכר והשמעת **התראות**)
- אפליקציית [Sugarmate](https://sugarmate.io/) או [Spike](https://spike-app.com/) על מכשירי iOS (בעיקר ערכי סוכר **והתראות**)
- Some users find a full remote access tool like [TeamViewer](https://www.teamviewer.com/) to be helpful for advanced remote troubleshooting

## Smartwatch options

A smartwatch can be a very useful tool in helping manage AAPS with kids. A couple of different configurations are possible:

- If AAPSClient is installed on the parents phone, the [AAPSClient WearOS app](https://github.com/nightscout/AndroidAPS/releases/) can be installed on a compatible smartwatch connected to the parent's phone. This will show current BG, loop status and allow carb entry, temp targets and profile changes. It will NOT allow bolusing from the WearOS app.
- Alternatively, the [AAPS WearOS app](https://androidaps.readthedocs.io/en/latest/Configuration/Watchfaces.html) can be built and installed on a compatible smartwatch, connected to the kid's phone but worn by the parent. This includes all the functions listed above as well as the ability to bolus insulin. This allows the parent to adminster insulin without needing to remove the kid's phone from however it is kept on them.

## דברים שיש לקחת בחשבון

- הגדרת [פרופיל](FAQ-how-to-begin) (מינונים באזליים, DIA, יחס התיקון..) יכולה להיות מאתגרת לילדים ובמיוחד בגיל ההתבגרות בעקבות הורמוני הגדילה.
- Settings must be the same in AAPS and AAPSClient app.
- שימו לב שיש הפרש זמנים מסויים בין הטלפון הראשי של המטופל לבין הטלפון העוקב בגלל שליחה והורדה של נתונים ובגלל ש-AAPS של המכשיר הראשי יעלה עדכון רק אחרי שיסיים לבצע את פעולתו.
- לכן קחו את הזמן, הגדירו היטב ונסו את ההגדרות כשהילד\ה לידכם לפני שתתחילו ניטור וטיפול מרחוק. חופשות מבית הספר הן זמן מתאים לכך.
- מהי התוכנית למקרי חירום כאשר השליטה מרחוק לא עובדת (נניח בעקבות בעיות רשת)?
- ניטור וטיפול מרחוק יכול להיות שימושי מאוד בגילי גן ובית ספר יסודי. אך יש לוודא שהמורים והסגל מודעים לתוכנית הטיפול שלכם. Examples for such care plans can be found in the [files section of AAPS users](https://www.facebook.com/groups/AndroidAPSUsers/files/) on Facebook.
- It is important to keep the kid's phone in range of their pump and CGM at all times. This can be challenging especially with very small children. Many solutions exist, a popular option is an [SPI Belt](https://spibelt.com/collections/kids-belts)
