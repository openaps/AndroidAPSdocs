# ניטור מרחוק

```{image} ../images/KidsMonitoring.png
:alt: Monitoring children
```

AAPS offer several options for remote monitoring of children and also allows to send remote commands. Of course you can also use remote monitoring to follow your partner or friend.

## פונקציות

- Kid's pump is controlled by kid's phone using AAPS.
- הורים יכולים לנטר מרחוק על כל המידע הרלוונטי כמו רמות הסוכר, פחמימות פעילות, אינוסלין פעיל וכו' במכשיר הנייד באמצעות ** אפליקציית NSClient**. Settings must be the same in AAPS and NSClient app.
- הורים יכולים לקבל התרעות באמצעות שימוש **באפליקציית xDrip בתור עוקבים (follower mode)** במכשירים החכמים.
- Remote control of AAPS using [SMS Commands](../Children/SMS-Commands.md) secured by two-factor authentication.
- שליטה מרחוק באמצעות אפליקציית NSClient מומלצת רק אם הסנכרון עובד היטב (כלומר, אין שינויים לא רצויים בנתונים כמו שינוי עצמי של מטרה זמנית, בזאלי זמני וכו') ראה [הערות פרסום עבור גרסה 2.8.1.1](Releasenotes-important-hints-2-8-1-1) עבור פרטים נוספים.

## כלים ואפליקציות לניטור מרחוק

- [נייטסקאוט](https://nightscout.github.io/) בדפדפן אינטרנט (בעיקר הצגת נתונים)
- אפליקציית NSClient היא גרסה חלקית של AAPS, המסוגלת לעקוב אחר מטופל\ת, מאפשרת החלפת פרופילים, הגדרת ערכי מטרה זמניים ורישום פחמימות. ישנן 2 אפליקציות: [NSClient & NSClient2 ](https://github.com/nightscout/AndroidAPS/releases/). ההבדל היחידי ביניהן הוא שמן. כך ניתן להתקין שני עותקים של האפליקציה על אותו המכשיר ולעקוב אחר שני מטופלים או חשבונות נייטסקאוט במקביל.
- דקסקום Follow אם אתם משתמשים באפליקציית דקסקום (רק ערכי הסוכר מוצגים)
- אפליקציית [xDrip+](../Configuration/xdrip.md) במצב עוקב (בעיקר להצגת ערכי הסוכר והשמעת **התראות**)
- אפליקציית [Sugarmate](https://sugarmate.io/) או [Spike](https://spike-app.com/) על מכשירי iOS (בעיקר ערכי סוכר **והתראות**)

## Smartwatch options

A smartwatch can be a very useful tool in helping manage AAPS with kids. A couple of different configurations are possible:

- If NSClient is installed on the parents phone, the [NSClient WearOS app](https://github.com/nightscout/AndroidAPS/releases/) can be installed on a compatible smartwatch connected to the parent's phone. This will show current BG, loop status and allow carb entry, temp targets and profile changes. It will NOT allow bolusing from the WearOS app.
- Alternatively, the [AAPS WearOS app](https://androidaps.readthedocs.io/en/latest/Configuration/Watchfaces.html) can be built and installed on a compatible smartwatch, connected to the kid's phone but worn by the parent. This includes all the functions listed above as well as the ability to bolus insulin. This allows the parent to adminster insulin without needing to remove the kid's phone from however it is kept on them.

## דברים שיש לקחת בחשבון

- הגדרת [פרופיל](FAQ-how-to-begin) (מינונים באזליים, DIA, יחס התיקון..) יכולה להיות מאתגרת לילדים ובמיוחד בגיל ההתבגרות בעקבות הורמוני הגדילה.
- Settings must be the same in AAPS and NSClient app.
- שימו לב שיש הפרש זמנים מסויים בין הטלפון הראשי של המטופל לבין הטלפון העוקב בגלל שליחה והורדה של נתונים ובגלל ש-AAPS של המכשיר הראשי יעלה עדכון רק אחרי שיסיים לבצע את פעולתו.
- לכן קחו את הזמן, הגדירו היטב ונסו את ההגדרות כשהילד\ה לידכם לפני שתתחילו ניטור וטיפול מרחוק. חופשות מבית הספר הן זמן מתאים לכך.
- מהי התוכנית למקרי חירום כאשר השליטה מרחוק לא עובדת (נניח בעקבות בעיות רשת)?
- ניטור וטיפול מרחוק יכול להיות שימושי מאוד בגילי גן ובית ספר יסודי. אך יש לוודא שהמורים והסגל מודעים לתוכנית הטיפול שלכם. Examples for such care plans can be found in the [files section of AAPS users](https://www.facebook.com/groups/AndroidAPSUsers/files/) on Facebook.
- It is important to keep the kid's phone in range of their pump and CGM at all times. This can be challenging especially with very small children. Many solutions exist, a popular option is an [SPI Belt](https://spibelt.com/collections/kids-belts)
