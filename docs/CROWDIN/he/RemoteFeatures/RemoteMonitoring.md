# ניטור מרחוק

![Monitoring children](../images/KidsMonitoring.png)

מערכת AndroidAPS מציעה מספר אפשרויות לניטור מרחוק ושליחת פקודות מרחוק לטיפול בילדים. באותה מידה ניתן לנטר מרחוק גם את בן\\בת הזוג או חבר.

## פונקציות

- משאבת הילד נשלטת באמצעות מכשיר הטלפון של הילד, דרך AAPS.
- ההורים יכולים לעקוב מרחוק ולראות את כל המידע הרלוונטי, כגון רמת סוכר, פחמימות פעילות, אינסולין פעיל, וכו', באמצעות ** אפליקציית AAPSClient** במכשיר הטלפון הפרטי שלהם. על ההגדרות ב-AAPS ובאפליקציית AAPSClient להיות זהות.
- הורים יכולים לקבל התרעות באמצעות שימוש **באפליקציית xDrip בתור עוקבים (follower mode)** במכשירים החכמים.
- Remote control of AAPS using [SMS Commands](../RemoteFeatures/SMSCommands.md) secured by two-factor authentication.
- Remote control through AAPSClient app is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see [release notes for Version 2.8.1.1](#important-hints-2-8-1-1) for further details.

## כלים ואפליקציות לניטור מרחוק

- [נייטסקאוט](https://nightscout.github.io/) בדפדפן אינטרנט (בעיקר הצגת נתונים)
- אפליקציית AAPSClient היא גרסה חלקית של AAPS, המסוגלת לעקוב אחר מטופל\ת, מאפשרת החלפת פרופילים, הגדרת ערכי מטרה זמניים ורישום פחמימות. קיימות שתי אפליקציות: [AAPSClient ו-AAPSClient2 להורדה](https://github.com/nightscout/AndroidAPS/releases/). ההבדל היחידי ביניהן הוא שמן. כך ניתן להתקין שני עותקים של האפליקציה על אותו המכשיר ולעקוב אחר שני מטופלים או חשבונות נייטסקאוט במקביל.
- דקסקום Follow אם אתם משתמשים באפליקציית דקסקום (רק ערכי הסוכר מוצגים)
- [xDrip+](../CompatibleCgms/xDrip.md) in follower mode (mainly BG values and **alarms**)
- אפליקציית [Sugarmate](https://sugarmate.io/) או [Spike](https://spike-app.com/) על מכשירי iOS (בעיקר ערכי סוכר **והתראות**)
- ישנם משתמשים הנעזרים בכלים כמו [Team Viewer](https://www.teamviewer.com/) לגישה מלאה ופתרון בעיות מרחוק

## אפשרויות שעון חכם

שעון חכם יכול להיות כלי עזר משמעותי בניהול AAPS אצל ילדים. ישנן מספר תצורות אפשריות:

- במידה ו-AAPSClient מותקן במכשיר הטלפון של ההורים, ניתן להתקין אפליקציית [AAPSClient WearOS ](https://github.com/nightscout/AndroidAPS/releases/)על שעון חכם תואם המחובר למכשיר הטלפון של ההורים. האפליקציה תראה רמת סוכר נוכחית, מצב לולאה, ותאפשר הזנת פחמימות, יעדי מטרה זמניים, ושינויי פרופיל. אין אפשרות לבולוסים מרחוק באמצעות אפליקציית WearOS.
- Alternatively, the [AAPS WearOS app](../UsefulLinks/WearOsSmartwatch.md) can be built and installed on a compatible smartwatch, connected to the kid's phone but worn by the parent. אפשרות זו כוללת את כל הפונקציות הרשומות לעיל, וכן את האפשרות למתן בולוסים. כך יוכל ההורה להזריק בולוסים מבלי להשתמש פיזית במכשיר הטלפון של הילד.

## דברים שיש לקחת בחשבון

- Setting the correct [treatment factors](#FAQ-how-to-begin) (basal rate, DIA, ISF...) is difficult for kids, especially when growth hormones are involved.
- על ההגדרות ב-AAPS ובאפליקציית AAPSClient להיות זהות.
- שימו לב שיש הפרש זמנים מסויים בין הטלפון הראשי של המטופל לבין הטלפון העוקב בגלל שליחה והורדה של נתונים ובגלל ש-AAPS של המכשיר הראשי יעלה עדכון רק אחרי שיסיים לבצע את פעולתו.
- לכן קחו את הזמן, הגדירו היטב ונסו את ההגדרות כשהילד\ה לידכם לפני שתתחילו ניטור וטיפול מרחוק. חופשות מבית הספר הן זמן מתאים לכך.
- מהי התוכנית למקרי חירום כאשר השליטה מרחוק לא עובדת (נניח בעקבות בעיות רשת)?
- ניטור וטיפול מרחוק יכול להיות שימושי מאוד בגילי גן ובית ספר יסודי. אך יש לוודא שהמורים והסגל מודעים לתוכנית הטיפול שלכם. דוגמאות לתוכניות טיפול כאלה ניתן למצוא ב[לשונית הקבצים (files) בקבוצת AndroidAPS](https://www.facebook.com/groups/AndroidAPSUsers/files/) בפייסבוק.
- חשוב להשאיר את מכשיר הטלפון של הילד בטווח קליטה של המשאבה והחיישן בכל עת. זה עשוי להיות מאתגר, בעיקר כשמדובר בילדים קטנים. ישנם פתרונות שונים. אפשרות פופולארית אחת היא [חגורת SPI](https://spibelt.com/collections/kids-belts)
