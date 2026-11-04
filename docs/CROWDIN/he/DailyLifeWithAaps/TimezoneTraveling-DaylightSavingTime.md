# Timezone Change and Daylight Saving

כאשר אזור הזמן בטלפון משתנה, **AAPS** מחשב מחדש מההתחלה את **האינסולין הפעיל**, הבזאלי והרגישות עבור העבר, כ-10 שניות לאחר השינוי. בזמן שהחישוב רץ, ייתכן שיעבור רגע עד שהגרפים והערכים במסך הראשי יתעדכנו.

(timezone-traveling-with-pumps)=

## Timezone change for Omnipod Dash

* יש לרענן את מצב המשאבה ב-**ניהול ← משאבה**
* Temporarily select a different **Profile** and then switch back to your original or desired **Profile**

## Timezone change for DanaR, Korean DanaR

There is no issue with changing timezone in phone because pump doesn't use history

(timezone-traveling-danarv2-danars)=

## שינוי אזור זמן ב-DanaRv2, DanaRS ו-Dana-i

These pumps require special care because **AAPS** uses history from the pump but the records in pump do not have timezone stamp. **This means that if you change time zone in your phone, records will be read with different time zone and will be doubled.**

To avoid this there are two possibilities:

### Option 1: Keep home time and timeshift profile

* Turn off 'Automatic date and time' in your phone's settings (manual time zone change).

* Your phone must keep your standard time as at home for the whole travel period.

* הגדירו היסט זמן ב**פרופיל** בהתאם להפרש בין השעה בבית לשעה במקום היעד.
   
   * יש להקיש על שם ה**פרופיל** במסך הראשי כדי לפתוח את [מסך הפרופיל](#ProfileSwitch-manage-v4)
   * יש לבחור את ה**פרופיל** ולהקיש על **▶ הפעלה**
   * יש להגדיר '**היסט זמן**' בהתאם למקום היעד ולהקיש על **הפעלה**.
   
   ![Profile switch with time shift](../images/ProfileSwitchTimeShift2.png)
   
   * למשל וינה ← ניו יורק: **החלפת פרופיל** +6 שעות
   * למשל וינה ← סידני: **החלפת פרופיל** -8 שעות

### Option 2: Delete pump history

* Turn off 'Automatic date and time' in your phone settings (manual time zone change)

כשיורדים מהמטוס:

* turn off pump
* change timezone on phone
* turn off phone, turn on pump
* clear history in pump
* change time in pump
* turn on phone
* let phone connect to the pump and fine-tune time

(timezone-traveling-insight)=

## Timezone Change for Insight

The driver automatically adjusts the time of the pump to the time of the phone.

The Insight also records the history entries in which moment time was changed and from which (old) time to which (new) time. So the correct time can be determined in **AAPS** despite the time change.

הדבר עשוי לגרום לאי-דיוקים ב-**TDD**. But it shouldn't be a problem.

So the Insight user doesn't have to worry about timezone changes and time changes. יש חריג אחד לכלל זה: למשאבת Insight יש סוללה פנימית קטנה ששומרת על השעה וכדומה. בזמן שמחליפים את הסוללה ה"אמיתית". אם החלפת הסוללה נמשכת זמן רב מדי, הסוללה הפנימית מתרוקנת, השעון מתאפס, ולאחר הכנסת סוללה חדשה המשאבה מבקשת להזין שעה ותאריך. In this case all entries prior to the battery change are skipped in calculation in AAPS as the correct time cannot be identified properly.

## Timezone Change for Accu-Chek Combo

[מנהל ההתקן של Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) מתאים אוטומטית את שעת המשאבה לשעת הטלפון. ה-Combo אינה יכולה לשמור אזורי זמן, אלא רק שעה מקומית, וזה בדיוק מה שמנהל ההתקן מתכנת במשאבה. In addition, it stores the timezone in the local AAPS preferences to be able to convert the pump's localtime to a full timestamp that has a timezone offset. אין צורך לעשות דבר; אם השעה ב-Combo שונה מדי מהשעה הנוכחית בטלפון, שעת המשאבה מותאמת אוטומטית.

עם זאת, שימו לב שהפעולה נמשכת זמן מה, מכיוון שניתן לבצע אותה רק במצב remote-terminal (מסוף מרוחק), שהוא בדרך כלל איטי. This is a Combo limitation that cannot be overcome.

## Timezone Change for Medtrum

The driver automatically adjusts the time of the pump to the time of the phone.

Time zone changes keep the history intact, only TDD may be affected. Manually changing the time on the phone can cause problems with the history and **IOB**. If you change time manually double check the **IOB**.

כאשר אזור הזמן או השעה משתנים, **בזאלים זמניים** פעילים נעצרים.

(time-adjustment-daylight-savings-time-dst)=

## DAYLIGHT SAVING (DST)

התאמת השעה לשעון קיץ.

בהתאם למשאבה ולמערך ה-CGM, קפיצות בשעה עלולות לפגוע בפעולה התקינה של **AAPS**. בחלק מהמשאבות עדיף לבצע את התאמות אזור הזמן בשעות הערות, לפני המעבר לשעון קיץ, ולא במהלך הלילה.

### DST automatic adjustment for most pumps

* עם זאת, ה**לולאה** תושבת למשך 3 שעות אחרי המעבר לשעון קיץ (בדרך כלל מ-1 בלילה ואילך), ו-**AAPS** יחזור לבזאלי הרקע שנבחר ב**פרופיל**. This is done for safety reasons - **IOB** may be too high due to duplicated bolus prior to DST change.
* לאחר המעבר לשעון קיץ, יש לבצע **החלפת פרופיל** ל**פרופיל** הרצוי כדי להפעיל את ה**לולאה**: להקיש על שם הפרופיל במסך הראשי, ואז על הלחצן העגול **▶** (ראו [הפעלת פרופיל](#ProfileSwitch-manage-v4)).
* בנוסף, לפני המעבר לשעון קיץ תופיע הודעה במסך הראשי של **AAPS** שה**לולאה** הושבתה זמנית. הודעה זו תופיע ללא צפצוף, רטט או צליל דומה.

If you bolus with **AAPS'** calculator please do not use **COB** and **IOB** data unless you are sure this data is absolutely correct. Take caution and do not use this feature for a couple of hours after DST switch has taken place.

### DST for Accu-Chek Insight

* Change to DST is done automatically. No action required.

### DST for Accu-Chek Combo

* Change to DST is done automatically. No action required.

### שעון קיץ ב-Medtrum

* Change to DST is done automatically. No action required.

### שעון קיץ ב-Omnipod Dash

* אפשרות אחת: לאפשר ל-**AAPS** לחזור זמנית לבזאלי הרקע לאחר המעבר לשעון קיץ, כפי שהוסבר למעלה.
* אחרת, אם לא רוצים ש-**AAPS** יחזור זמנית לבזאלי הרקע במהלך הלילה, אפשר לשנות את אזור הזמן ביום שלפני המעבר לשעון קיץ, כדי להימנע מהפרעה בלילה. שימו לב: אפשרות זו עלולה לגרום לתפוגה מוקדמת של הפוד. אם בוחרים באפשרות שלהלן, יש לקחת ציוד חלופי.

#### Actions to take before the clock change

1. יש לכבות כל הגדרה בטלפון שקובעת את אזור הזמן באופן אוטומטי, כדי שאפשר יהיה לעבור לאזור זמן רצוי שאינו משתמש בשעון קיץ. How to enable this will depend on your smartphone and Android version.
   
   * בחלק מהטלפונים יש שתי הגדרות: אחת להגדרה אוטומטית של השעה (רצוי להשאיר אותה מופעלת) ואחת להגדרה אוטומטית של אזור הזמן (אותה יש לכבות: **Set automatically** תחת **Time zone** בצילום המסך שלהלן).
   * Unfortunately, some Android versions have a single switch to enable automatic setting of both the time and the timezone. You’ll have to turn this off for now.

![Screenshot_20260329-110315 (1)](../images/570963727-ca40c1c6-1697-4832-ae10-5cf6a1dc0bce.png)

2. Find a timezone that has the same time as your current location but doesn't use DST.
   
   * A list of these countries is available [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * עבור שעון מרכז אירופה (CET) זה יכול להיות "Brazzaville" (קונגו). יש לשנות את אזור הזמן בטלפון לקונגו.

![Screenshot_20260329-111830](../images/570966323-b7b7f738-f91e-40df-ad79-f404fbfb9ae6.png)

3. ב-**AAPS** יש לרענן את המשאבה ולעבור ל**פרופיל** הרצוי.

4. יש לבדוק ב-**AAPS** את **האינסולין הפעיל** ואת **הפחמימות הפעילות**. אם הם אינם מדויקים, יש להשבית את ה**לולאה** לפחות למשך DIA אחד או למשך זמן ספיגת הפחמימות המרבי (**זמן ספיגה מרבי**) - הארוך מביניהם.

5. Actions to take after the clock change. A good time to make revert to local time zone is with low **IOB**. E.g. an hour before a meal such as breakfast. Ideally your **COB** and **IOB** should both be close to zero.