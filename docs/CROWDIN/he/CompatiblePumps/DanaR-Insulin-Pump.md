# DanaR

*These instructions are for configuring the app and your pump if you have a DanaR. Visit [DanaRS Insulin Pump](./DanaRS-Insulin-Pump.md) if you have the DanaRS launched in 2017 instead.*

## Pump capabilities with AAPS

* מתקשרת עם **AAPS** דרך ה-Bluetooth המובנה של הטלפון, בלי התקן תקשורת נוסף.
* שינויים באזור הזמן ובשעון הקיץ אינם דורשים פעולה מיוחדת, כי המשאבה אינה משתמשת בהיסטוריה שלה עצמה.

## תצורה

* In the pump go to Main Menu > Setting > User Option
* Turn on "8. Extended Bolus"

![DanaR pump](../images/danar1.png)

* Go to Main Menu > Setting > Discovery
* בהגדרות הטלפון, עברו אל Bluetooth, סרקו התקנים קרובים, בחרו את המספר הסידורי של ה-DanaR שלכם והזינו את הסיסמה (סיסמת הצימוד היא 0000). If DanaR is not showing in scan then restart phone and take DanaR battery out, replace and start these two steps again.

* ב-**AAPS**, יש לפתוח את **התפריט** (☰) בחלק העליון של המסך, לעבור אל **הגדרות תצורה** > **משאבה** ולבחור את סוג ה-DanaR שלכם (**DanaR**, **DanaR קוריאנית** או **DanaRv2**).
  
  ![הגדרות תצורה > משאבה עם התוספים של DanaR](../images/v4/Configuration/configuration_pump_list_1.png)

* יש לפתוח את מסך המשאבה: ללחוץ על **פתיחת תוסף** בכרטיס DanaR (או לעבור אל **ניהול** > **משאבה**).

* יש ללחוץ על **צימוד**. במסך הצימוד: 
  * יש להזין את סיסמת המשאבה בשדה **סיסמת משאבה** (סיסמת ברירת המחדל היא 1234).
  * תחת **בחירת מכשיר מצומד**, יש ללחוץ על המספר הסידורי של ה-DanaR. אם הרשימה ריקה, יש ללחוץ על **פתיחת הגדרות Bluetooth** ולצמד קודם את המשאבה עם הטלפון (ראו את השלב הקודם). כשחוזרים אל **AAPS**, המשאבה מופיעה ברשימה. אם היא לא מופיעה, יש ללחוץ על סמל הרענון.
  * יש ללחוץ על **צימוד**. **AAPS** מתחבר למשאבה ובודק את הסיסמה.
* כדי לשנות את הגדרות מנהל ההתקן, יש ללחוץ על **הגדרות** בכרטיס DanaR ב-**הגדרות תצורה** > **משאבה**: 
  * **מהירות הזרקת הבולוס** (DanaR ו-DanaRv2): שינוי מהירות הבולוס שמוגדרת כברירת מחדל (12 s/U, 30 s/U או 60 s/U).
  * **שימוש בבולוסים ממושכים עבור >200%** (DanaR ו-DanaR קוריאנית): יש להפעיל אפשרות זו אם רוצים ש-**AAPS** יאפשר קצב בזאלי מעל 200%. שימו לב: פירוש הדבר שלא ניתן להפעיל את הלולאה עם TBR גבוהים בזמן שמשתמשים בבולוסים ממושכים לאוכל.
* יש להגדיר במשאבה את צעד הבזאלי ל-0.01 U/h
* יש להגדיר במשאבה את צעד הבולוס ל-0.1 U. **AAPS** קורא את צעד הבולוס מהמשאבה ומשתמש בו בכל בולוס.
* הפעלת בולוסים ממושכים במשאבה

## Timezone traveling with Dana R pump

For information on traveling across time zones see section [Timezone traveling with pumps](#timezone-traveling-danarv2-danars).

## Where to get help

הפיתוח של מנהל ההתקן של DanaR נעשה על ידי הקהילה על בסיס **התנדבותי**. לפני שמבקשים עזרה, יש:

1. **לקרוא** את החלק הרלוונטי בתיעוד הזה, כדי לוודא איך התכונה אמורה לעבוד.
2. **לשאול** בערוץ *#AAPS* ב-[Discord](https://discord.gg/4fQUWHZ4Mw), או באחד מ[ערוצי הקהילה](../GettingHelp/WhereCanIGetHelp.md) האחרים.
3. **לדווח על באג**: לחפש ב[issues הקיימים](https://github.com/nightscout/AndroidAPS/issues); אם הבעיה לא מופיעה שם, לפתוח [issue חדש](https://github.com/nightscout/AndroidAPS/issues) ולצרף את [קובצי היומן](../GettingHelp/AccessingLogFiles.md).

כשמבקשים עזרה, יש לציין את היצרן והדגם של הטלפון, את גרסת Android, את גרסת **AAPS** ותיאור פשוט של הבעיה באנגלית (מה השתנה, ומתי זה עבד בפעם האחרונה).