(aapsclient-app)=
# האפליקציה AAPSClient

**AAPSClient** היא אפליקציית העזר של **AAPS**: אפליקציה נלווית לטלפון שני — בדרך כלל של מטפל — ש**עוקבת** אחרי האדם שמשתמש ב-**AAPS**. החל מגרסה 4 של **AAPS**, המטפל יכול גם **לשלוט** בלולאה מרחוק באמצעות פקודות חתומות. שני הטלפונים מתקשרים דרך אתר ה-**Nightscout** שלכם; אין צורך בחיבור ישיר בין הטלפונים.

```{admonition} Wording used on this page
:class: note
- **מכשיר לקוח** = טלפון שמריץ את **AAPSClient**.
- **מכשיר ראשי** = הטלפון הראשי של **AAPS**, שמחובר למשאבה ומריץ את הלולאה.
```

```{admonition} Which devices can run AAPSClient?
:class: note
From **AAPS** version 4, **AAPSClient** runs on Android phones and tablets, on Wear OS watches and on computers (Windows, Mac and Linux). On an iPhone there is no ready-made download: you build the app yourself. See the [table of downloads by device](#aapsclient-platforms).
```

```{contents} Table of contents
:depth: 2
:local: true
```

## מה AAPSClient עושה (ומה לא)

**AAPSClient** נראית ומרגישה כמו **AAPS**, אבל **אין לה לולאה משלה**:

- אין בה **אלגוריתם APS**, אין **משימות** ו**אין מנהלי התקן למשאבות** — היא אף פעם לא נותנת אינסולין בעצמה.
- גם התוספים שמשמשים רק את האפליקציה הראשית (**תקשורת SMS**, **Tidepool**, **Open Humans**) לא נכללים בה.
- מה *כן* יש בה: סנכרון **NSClientV3**, התוספים של מקורות ערכי הסוכר, שידור ל-**xDrip+**, והמחברים ל-**Wear OS** / **Garmin** — כל מה שצריך כדי לעקוב ולהעביר פקודות. שעון **Garmin** שמחובר למכשיר לקוח יכול להציג את הנתונים, אבל פחמימות שהוא שולח לא נרשמות, והוא לא יכול לחבר או לנתק את המשאבה: מכשיר הלקוח מציג הודעה, ויש להזין אותן ב-**AAPS** במקום זאת.

כל מה שמפעילים מ-**AAPSClient** נבדק, מוגבל, מאושר **ומבוצע על ידי המכשיר הראשי** (הטלפון שמחובר למשאבה). הדף הייעודי [שליטה בין מכשיר ראשי ↔ מכשיר לקוח](ClientMasterControl.md) מסביר איך זה עובד: איך לצמד את שני הטלפונים, איך המכשיר הראשי כותב את טקסט האישור שרואים, איך בולוס שהתחיל במכשיר הלקוח ניתן, ומה קורה כשהמכשיר הראשי לא מחובר.

## גרסאות: AAPSClient, AAPSClient2 ו-AAPSClient3

אפשר להתקין עד שלוש אפליקציות לקוח זו לצד זו באותו טלפון עוקב, וכל אחת עוקבת אחרי אדם **אחר**: **AAPSClient** (סמל ינשוף צהוב), **AAPSClient2** (ינשוף כחול) ו — חדש בגרסה 4 של **AAPS** — **AAPSClient3** (ינשוף ירוק). מבחינת הפונקציות הן זהות. רק השם והצבע שונים (סמל האפליקציה, הרקע של הווידג'ט ואזור המצב במסך הבית), כדי שאפשר יהיה להבדיל ביניהן. כל אפליקציה מצומדת למכשיר ראשי משלה. לפרטים ראו [על AAPSClient, AAPSClient2 ו-AAPSClient3](#remotecontrol-aapsclient-versions).

(aapsclient-platforms)=
## השגת האפליקציה

All the ready-made files are in the *Assets* list of the latest release on [GitHub](https://github.com/nightscout/AndroidAPS/releases/) (click *Assets* at the bottom of the release to expand it). In the table, *x.y.z* stands for the version number. Choose the file that matches your device:

| מכשיר                   | File to download                    | Notes                                                                                                                                                                                        |
| ----------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Android phone or tablet | `app-aapsclient-release_x.y.z.apk`  | Install it like the main app: see [Download and installation of AAPSClient](#RemoteControl_aapsclient) and [Transferring and installing](../SettingUpAaps/TransferringAndInstallingAaps.md). |
| Wear OS watch           | `wear-aapsclient-release_x.y.z.apk` | Goes with the AAPSClient app on the phone. See [Wear OS smartwatch](../WearOS/WearOsSmartwatch.md).                                                                                          |
| Windows computer        | `AAPSClient-x.y.z.msi`              | Open the file to install.                                                                                                                                                                    |
| Mac                     | `AAPSClient-x.y.z.dmg`              | See the note on macOS below the table.                                                                                                                                                       |
| Linux (Debian, Ubuntu)  | `aapsclient_x.y.z_amd64.deb`        | Install it with your package manager.                                                                                                                                                        |
| iPhone                  | none                                | There is no App Store version and no download. You build the app yourself, see [AAPSClient on an iPhone](#aapsclient-iphone).                                                                |

**Following two people?** Each file above also exists as *aapsclient2* / *AAPSClient2*. It is a second client app that installs next to the first one, so one device can follow two people (see [About AAPSClient, AAPSClient2 and AAPSClient3](#remotecontrol-aapsclient-versions)). **AAPSClient3** is not in the release assets: build it yourself ([build variants](#browserbuild-variant)).

**Files to ignore:** the *pumpcontrol* files (`app-pumpcontrol-release_…`, `wear-pumpcontrol-release_…`) are not a client. Leave them out.

**Mac: the first start.** The app is not notarized by Apple, so macOS blocks it the first time you open it. Click *Done*, then open *System Settings → Privacy & Security*, scroll down and click *Open Anyway*.

**Computer: how to connect.** A computer has no camera, so the QR code cannot be scanned. Set up **Nightscout** in the client, then on the master add the client with a **PIN** and type the 8-digit PIN in the client (**Pair with master**). See [Pairing with the master](#aapsclient-pairing-with-the-master).

**Same version everywhere.** The master and all its clients must run the same **AAPS** version. When you update the master, update the clients too.

(aapsclient-iphone)=
### AAPSClient on an iPhone

There is no **AAPSClient** in the App Store and no ready-made file to download, so you build the app yourself:

- You need a Mac with **Xcode** and an Apple developer account.
- The project is the `ios` folder of the [AndroidAPS repository on GitHub](https://github.com/nightscout/AndroidAPS/tree/master/ios).
- A build for a real iPhone is signed with your own Apple developer team. A build for the iPhone simulator does not need one.
- There is no step-by-step guide yet. This page will be updated when there is one.

The iPhone version pairs with the master like the others. Unlike the computer versions, the iPhone can scan the master's QR code with its camera.

## הפעלה ראשונה: אשף התקנה קצר יותר

בהפעלה הראשונה **AAPSClient** מריצה את אותו **אשף ההתקנה** שמכירים מ-**AAPS**, אבל עם הרבה פחות שלבים — בטלפון עוקב אין הגדרה של פרופיל, אינסולין, משאבה, APS או משימות:

1. **ברוכים הבאים**, **הסכם רישיון למשתמש**, **הרשאות** ו**סיסמה ראשית** — זהים לאפליקציה הראשית, ראו [אשף ההתקנה של AAPS](../SettingUpAaps/SetupWizard.md).
2. מכשיר הלקוח **לא** שואל על **יחידות** או על **הסימון הנמוך / הגבוה**: הוא לוקח אותם מהטלפון הראשי ברגע שהוא מתחבר ל-Nightscout. אפשר לראות אותם אחר כך ב**הגדרות**, שם **סמל טלפון** קטן מראה שהם [מסונכרנים עם הטלפון הראשי](#client-master-config-prefs). אפשר לערוך אותם רק כשהמכשיר הראשי זמין.
3. **הגדרה מהמכשיר הראשי** — במכשיר הראשי יש לפתוח את **ניהול ← לקוחות מורשים**, להוסיף את הטלפון הזה עם **קוד QR**, ולהקיש כאן על **סריקת קוד ה-QR**. סריקה אחת מגדירה את Nightscout עם אסימון משלו לטלפון הזה, ואם הקוד כולל צימוד, היא גם מצמדת את הטלפון. הטלפון גם מקבל כשם המופע שלו את השם שבו הוא נוסף במכשיר הראשי (אותיות עם סימנים מיוחדים הופכות לאותיות רגילות, "Miloš" הופך ל-"Milos"). **אחרי הסריקה, ההתקנה הסתיימה**: האשף נסגר, כי השלבים הבאים רק היו מציגים מה הקוד כבר עשה. בלי קוד QR, יש לדלג על שלב זה. (Not on a computer: it has no camera, see [Getting the app](#aapsclient-platforms).)

   ![השלב הגדרה מהמכשיר הראשי עם הלחצן סריקת קוד ה-QR](../images/v4/AapsClient/aapsclient_wizard_from_master.png)

4. **תקשורת** — רשימת התוספים מציעה רק את מה שטלפון עוקב צריך (NSClientV3, xDrip+, Wear, אפליקציות נלוות חיצוניות, Garmin). אם לא סרקתם קוד QR, יש להפעיל את **NSClientV3** ולהזין את **אותה כתובת URL של Nightscout** כמו בטלפון הראשי ואסימון גישה, עם **websockets** מופעלים — בדיוק כפי שמתואר ב[סנכרון](#RemoteControl_aapsclient).

   ![שלב התקשורת במכשיר הלקוח](../images/v4/AapsClient/aapsclient_wizard_communication.png)

5. **צימוד למכשיר הראשי** — שלב זה קיים **רק** במכשיר הלקוח. הוא מחבר את המכשיר הזה למכשיר הראשי בערוץ הפקודות המאובטח, בעזרת קוד ה-PIN, ולוקח את השם שבו הטלפון נוסף במכשיר הראשי, כמו בקוד ה-QR. **אחרי הצימוד, ההתקנה הסתיימה.** אפשר גם לדלג על השלב הזה ולבצע צימוד בכל זמן מאוחר יותר דרך **ניהול ← צימוד למכשיר ראשי**.

   ![השלב צימוד למכשיר הראשי באשף של מכשיר הלקוח](../images/v4/AapsClient/aapsclient_wizard_pair_step.png)

6. **מי משתמש בטלפון זה?** — רק אם לא בוצע צימוד באשף: השם של האדם שמשתמש בטלפון הזה. השם מבדיל את המופע הזה בדוחות ובסנכרון.

(aapsclient-pairing-with-the-master)=

## צימוד עם המכשיר הראשי

ב**מכשיר הראשי** יש לפתוח את **ניהול ← לקוחות מורשים** ולהוסיף מכשיר לקוח. יש שתי דרכים לבצע צימוד:

- **עם קוד QR** (הדרך המהירה ביותר, אם לטלפון יש מצלמה): יש לסרוק את הקוד בשלב האשף "**הגדרה מהמכשיר הראשי**" או דרך **ניהול ← צימוד למכשיר ראשי ← סריקת קוד QR**, ולאשר עם "**שימוש**". הוא גם מגדיר את Nightscout.
- **עם קוד PIN**: ב**מכשיר הלקוח** יש לפתוח את שלב האשף שלמעלה (או **ניהול ← צימוד למכשיר ראשי**), להקליד את קוד ה-PIN החד-פעמי שמוצג במכשיר הראשי וללחוץ על "**צימוד**". אז מכשיר הלקוח מראה במי הוא עומד לתת אמון — יש לאשר עם "**צימוד**":

![אישור במכשיר הלקוח לפני השלמת הצימוד](../images/v4/AapsClient/aapsclient_pair_confirm.png)

מתוך האשף, צימוד מוצלח מסיים את ההתקנה ופותח את מסך הבית. במכשיר הראשי, מכשיר הלקוח מופיע כ**פעיל** ברשימת [לקוחות מורשים](#client_master_master_setup). לאחר מכן, **ניהול ← צימוד למכשיר ראשי** מציג "*כבר מצומד*", את התפקיד של הטלפון ואם המצב המוקשח מופעל:

![ניהול ← צימוד למכשיר ראשי במכשיר לקוח מצומד: כבר מצומד, תפקיד: טיפול, מצב מוקשח מופעל](../images/v4/ClientMaster/pair_with_master_client.png) תהליך הצימוד המלא, פרטי האבטחה ופתרון תקלות נמצאים בדף [שליטה בין מכשיר ראשי ↔ מכשיר לקוח](#client_master_client_setup).

אחרי הצימוד, מכשיר הלקוח מקבל מהמכשיר הראשי אסימון Nightscout משלו (אם במכשיר הראשי יש אסימון מנהל), רק עם ההרשאות שמכשיר לקוח צריך, ומפסיק להשתמש באסימון שאולי הזנתם. **AAPSClient** אף פעם לא כותבת בעצמה טיפולים או ערכי סוכר ל-Nightscout: כל מה שהיא עושה נשלח למכשיר הראשי, והוא כותב את זה. ראו [אסימון ה-Nightscout הנפרד של מכשיר הלקוח](#client-master-control-own-token).

המכשיר הראשי קובע מה מותר לטלפון הזה לעשות לפי ה**[תפקיד](#client-master-control-roles)** שלו (קריאה בלבד, ארוחות, טיפול או ניהול). **ניהול ← צימוד למכשיר ראשי** מציג את התפקיד של הטלפון.

## מסך הבית

מסך הבית של מכשיר הלקוח משקף את הלולאה שאחריה עוקבים:

![מסך הבית של AAPSClient](../images/v4/AapsClient/aapsclient_home.png)

- **ערכי הסוכר, הגרפים, IOB/COB והפרופיל** מגיעים מ-Nightscout, בדיוק כפי שהמכשיר הראשי העלה אותם.
- **מצב הלולאה** שמוצג הוא זה של **המכשיר הראשי** (למכשיר לקוח אין לולאה משלו). עד שמכשיר הלקוח מקבל מ-Nightscout את מצב ההפעלה של המכשיר הראשי, שבב מצב ההפעלה מציג **סימן שאלה** (לא ידוע).
- **כרטיס המצב** מציג את המכל והסוללה של **המשאבה שאחריה עוקבים** ואת הסוללה של הטלפון המעלה, לפי מצב המכשיר ב-Nightscout — למכשיר לקוח אין משאבה, ולכן אין באפליקציה מצב משאבה מקומי ואין ניהול משאבה בשום מקום.
- הסרגל התחתון מציע **טיפולים**, **תרחישים** ו**ניהול** אחרי שמכשיר הלקוח מצומד (לפני הצימוד רק **ניהול**) — אין לשוניות של משאבה או של משימות.

## טיפולים ופעולות

כל מה שנמצא תחת **ניהול** עובד כמו באפליקציה הראשית, עם הבדל חשוב אחד: במכשיר לקוח, פעולות שמשנות את הטיפול (בולוס, פחמימות, יעדים זמניים, תרחישים…) **מוסתרות עד שהמכשיר מצומד**, ואחרי הצימוד הן **מועברות למכשיר הראשי** לאישור ולביצוע — ראו [שימוש בשליטה מרחוק](#client-master-control).

הפריט **פרופיל** הוא היוצא מן הכלל: הוא מוצג גם במכשיר לקוח **לא מצומד**, אבל נפתח **לצפייה בלבד** — מכשיר הלקוח מציג את הפרופילים שהוא מקבל דרך Nightscout (הוא צריך אותם לחישובים שלו), בלי לחצני עריכה או הפעלה. אחרי שמכשיר הלקוח **מצומד**, רשימת הפרופילים מסונכרנת עם המכשיר הראשי, ואפשר לערוך ולהפעיל פרופילים ממכשיר הלקוח כמו כל פעולה אחרת מרחוק.

במכשיר לקוח **לא מצומד**, **ניהול** מציע רק **פרופיל** ו**צימוד למכשיר ראשי**:

![מסך הניהול במכשיר לקוח לא מצומד: רק פרופיל וצימוד למכשיר ראשי](../images/v4/AapsClient/aapsclient_manage_unpaired.png)

הבאנר האדום "*המכשיר הראשי אינו זמין. העריכה מושבתת עד שהחיבור ישוחזר.*" מופיע גם במכשיר לקוח לא מצומד. זה צפוי: עדיין אין מכשיר ראשי להתחבר אליו. הבאנר נעלם אחרי שמכשיר הלקוח מצומד והמכשיר הראשי מחובר.

אחרי שמכשיר הלקוח מצומד, פעולות הטיפול מופיעות:

![מסך הניהול במכשיר לקוח מצומד, כולל הפריט צימוד למכשיר ראשי](../images/v4/AapsClient/aapsclient_manage.png)

**אין פריט משאבה** — למכשיר לקוח אין משאבה.

אם המכשיר הראשי לא זמין, אותו באנר מופיע גם במכשיר לקוח מצומד: פעולות הטיפול מוצגות באפור, וכל מה שמנסים לעשות נחסם לפני שהוא נשלח. מכשיר הלקוח מזהה שהמכשיר הראשי לא מחובר כשמנסים לבצע פעולה, ומפעיל שוב את הפעולות כשהמכשיר הראשי חוזר לפעול.

![מסך הניהול במכשיר לקוח מצומד כשהמכשיר הראשי לא מחובר: הפעולות באפור מתחת לבאנר](../images/v4/AapsClient/aapsclient_manage_master_offline.png)

## הגדרות שמסונכרנות עם המכשיר הראשי

**התצורה** של התוספים הפעילים והרבה **העדפות** נשמרות מסונכרנות בין המכשיר הראשי למכשירי הלקוח המצומדים שלו; פריטים מסונכרנים מסומנים ב**סמל טלפון** קטן, והם מושבתים (עם הבאנר "*המכשיר הראשי אינו זמין*") כל עוד אי אפשר להגיע למכשיר הראשי. הדבר מתואר ב[שינוי התצורה וההעדפות](#client-master-config-prefs).

## AAPSClient בשעון חכם

אפשר לצמד שעון Wear OS לטלפון של **מכשיר הלקוח**; הפעולות שלו מועברות דרך מכשיר הלקוח למכשיר הראשי. ראו [Wear OS](../WearOS/WearOsSmartwatch.md) ואת [אפשרויות השעון החכם בשליטה מרחוק](#RemoteControl_smartwatches).
