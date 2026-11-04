# מנהלי התקן עתידיים (אפשריים) למשאבות

זוהי רשימה של כמה משאבות שקיימות בשוק, מצב התמיכה בהן במערכות לולאה אחרות, ומצב התמיכה בהן ב-AAPS. בסוף מופיע מידע על מה שמשאבה צריכה כדי להתאים לשימוש בלולאה ("Loop capable").

    {contents} תוכן העניינים
    :depth: 1
    :local: true

## משאבות בשלב השילוב ב-AAPS

**בקרוב:** מנהלי ההתקן למשאבות אלה נמצאים בפיתוח וכבר פועלים בגרסאות ניסיון.

Omnipod 5 ([דף הבית](https://www.omnipod.com/))

![מנהל ההתקן ל-Omnipod 5 בפיתוח](../images/future-pumps/omnipod5-driver.png)

Tandem: t:Mobi ([דף הבית](https://www.tandemdiabetes.com/))

![מנהל ההתקן ל-Tandem t:Mobi בפיתוח](../images/future-pumps/tandem-mobi-driver.png)

## משאבות שמתאימות ללולאה

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Loop status:** Pump is a Loop candidate, but protocol is unknown at the time. No interest in open source from the vendor.

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

### Tandem: t:slim X3 ([דף הבית](https://www.tandemdiabetes.com/about-us/pipeline))

**מצב התמיכה בלולאה:** אולי מועמדת לשימוש בלולאה בעתיד. התקווה היא ש-t:slim X3 תאפשר שליטה מלאה מהטלפון, מה שיאפשר תמיכה ב-AAPS, אך לוח הזמנים והתכונות עדיין לא ידועים.

**Hardware requirement for AAPS:** None. צפוי שתתמוך ב-Bluetooth.

**הערות:** עדיין לא יצאה לשוק. נראה ש-Tandem דוחה שוב ושוב את t:slim X3 בתוכניות שלה, לטובת t:Mobi (כולל גרסה ללא צינורית) ו-Sigi (משאבת הפאץ' שלה).

### Twiist ([דף הבית](https://www.twiist.com/))

**מצב התמיכה בלולאה:** מועמדת לשימוש בלולאה.

**Hardware requirement for AAPS:** None. היא תומכת ב-Bluetooth.

### Willcare Insulin pump ([Homepage](http://shinmyungmedi.com/en/))

**מצב התמיכה בלולאה:** כרגע אינה מועמדת לשימוש בלולאה, אך צוות החברה פנה אלינו והוא מעוניין להתאים את המשאבה לשימוש בלולאה (נראה שחסרות רק פקודות קריאה והגדרה של פרופיל).

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

**Comments:** Since company is interested in integration with AAPS, they might do implementation themselves.

### Ypsopump ([דף הבית](https://www.ypsomed.com/))

**מצב התמיכה בלולאה:** מועמדת לשימוש בלולאה. הקהילה פענחה את פרוטוקול ה-Bluetooth של המשאבה (reverse engineering), כך שתקשורת איתה אפשרית עקרונית.

**Hardware requirement for AAPS:** None. היא תומכת ב-Bluetooth.

**הערות:** ה-Ypsopump מגנה על תקשורת ה-Bluetooth שלה בהצפנה כבדה של צד שלישי. העבודה איתה דורשת ידע טכני רב, ולכן קשה לבנות מנהל התקן אמין ולתחזק אותו. עדיין אין מנהל התקן AAPS שמוכן לשימוש יומיומי.

## Pumps no longer sold (companies no longer operating)

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**Comments:** End of support March 2025.

## משאבות שלא מתאימות ללולאה

### Medtronic Bluetooth

**Comments:** Medtronic [withdrew](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

### Tandem: t:slim X2 ([Homepage](https://www.tandemdiabetes.com/))

**הערות:** פרוטוקול ה-Bluetooth של Tandem פוענח, אבל ב-t:slim X2 אפשר לתת רק בולוסים — אי אפשר לשלוט במתן הבזאלי — ולכן אי אפשר להשתמש בה בבטחה בלולאה. זה כנראה לא ישתנה, אלא אם Tandem תאפשר שליטה מלאה ב-X2 מהטלפון, ויותר סביר שזה יגיע דווקא עם t:slim X3.

### Accu-Chek Solo

**Comments:** No community success in communicating with the Solo pump.

## Requirements for pumps being loopable

**Prerequisite**

- Pump has to support some kind of remote control. (BT, Radio frequency, etc)
- Protocol is hacked/documented/etc.

**דרישות מינימום**

- Set Temporary Basal Rate
- Get Status
- Cancel Temporary Basal Rate

**For oref1(SMB) or Bolusing:**

- הגדרת בולוס

**Good to have**

- Cancel Bolus
- Get Basal Profile (almost requirement)
- Set Basal Profile (nice to have)
- Read History 

**Other (not required but good to have)**

- הגדרת בולוס ממושך
- Cancel Extended Bolus
- Read History
- Read TDD

### Other pumps support

If you have any other pumps you would like to see status on, please contact us on discord.