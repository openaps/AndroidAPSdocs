(Profiles-profile-switch)=

# החלפת פרופיל

Documentation about profiles in general can be found at [Config Builder - profile](Config-Builder-profile).

On starting your AAPS and selecting your profile, you will need to do a "Profile switch" event with zero duration (explained later). By doing this AAPS starts tracking history of profiles and every new profile change requires another "Profile switch" even when you change content of the profile in NS. Updated profile is pushed to AAPS immediately, but you need to switch the same profile again to start using these changes.

Internally AAPS creates snapshot of profile with start date and duration and is using it within selected period.

* משך 0 פירושו אינסופי. פרופיל כזה תקף עד "החלפת פרופיל" הבאה.
* משך זמן של x דקות פירושו שימוש של x דקות בפרופיל זה. לאחר פרק זמן זה, הפרופיל חוזר ל"החלפת פרופיל" התקף הקודם.

If you edited your profile inside the "local profile" tab you can activate the profile there which makes an implicit profile switch too.

To do a profile switch long-press on the name of your profile ("Tuned 03/11" in the picture below) on the homescreen of AndroidAPS.

![Do profile switch](../images/ProfileSwitch_HowTo.png)

Within the "profile switch" you can choose two additional changes which used to be part of the Circadian Percentage Profile:

## אחוזים

* על כל הפרמטרים הבאים חל על אותו אחוז שינוי. 
* אם תגדירו 130% (כלומר אתם עם תנגודת גבוהה ב-30%), המינון הבזאלי יגדל ב-30%. במקביל, יקטנו יחסי התיקון (ISF) והפחמימות (IC) בהתאם (חילוק ב-1.3 בדוגמה זו).
  
  ![Example profile switch percentage](../images/ProfileSwitchPercentage.png)

* שינוי זה יישלח למשאבה ואז יהיה ברירת המחדל של המינון הבזאלי.

* אלגוריתם הלולאה (פתוחה או סגורה) ימשיך לעבוד על פי אחוז הפרופיל שנבחר. כך, למשל, ניתן להגדיר אחוז פרופילים נפרדים עבור שלבים שונים של מחזור ההורמונים.

(Profiles-time-shift)=

## היסט זמן

![Profile switch percentage and timeshift](../images/ProfileSwitchTimeShift2.png)

* אפשרות זו מזיזה את הפרופיל קדימה או אחורה בהתאם למספר השעות שהוזנו. 
* כך, למשל, כאשר עובדים במשמרות לילה שנו את מספר השעות לכמה מאוחר\מוקדם יותר אתם הולכים לישון או להתעורר.
* תמיד נשאלת השאלה איזו שעת פרופיל כדאי שתחליף את השעה הנוכחית. יש להזיז זמן זה ב-X שעות. אז היו עקבו אחר ההנחיות המתוארות בדוגמה הבאה: 
  * השעה הנוכחית: 12:00
  * **היסט זמן חיובי** : 
    * 2:00 **+10 שעות** -> 12:00
    * הגדרות מ-2:00 ישמשו במקום ההגדרות המשמשות בדרך כלל ב-12:00 בגלל שינוי הזמן החיובי.
  * **היסט זמן שלילי** : 
    * 22:00 **-10 שעות** -> 12:00
    * הגדרות מ-22:00 ישמשו במקום ההגדרות המשמשות בדרך כלל ב-12:00 בגלל שינוי הזמן השלילי.

![Profile switch timeshift directions](../images/ProfileSwitch_PlusMinus2.png)

This mechanism of taking snapshots of the profile allows a much more precise calculations of the past and the possibility to track profile changes.

(Profiles-troubleshooting-profile-errors)=

## פתרון בעיות בפרופיל

### 'פרופיל לא חוקי' / 'ערכי הבזאלי לא מותאמים לשעות'

![Basal not aligned to the hour](../images/BasalNotAlignedToHours2.png)

* הודעות שגיאה אלה יופיעו אם מינוני הבזאלי או IC אינם בשעות עגולות בלבד. (משאבות DanaR ו-DanaRS אינן תומכות בשינויים בחצי השעה למשל.)
  
  ![Example profile not aligned to hours](../images/ProfileNotAlignedToHours.png)

* זכרו \ רשמו את התאריך והשעה המוצגים בהודעת השגיאה (19/11/2019 00:19 בצילום המסך).

* בתפריט 3 נקודות בחרו את "טיפולים"
* בחרו בלשונית הכוכב
* גללו עד שתמצאו תאריך ושעה מהודעת השגיאה.
* לחצו על הפח שבפינה שמאלית עליונה, סמנו את התיבה שליד הרשומה שברצונכם למחוק, לחצו על הפח שוב ואשרו.
* לפעמים יש יותר מהחלפת פרופיל פגומה אחת. במקרה כזה מחקו גם אותן.
  
  ![Remove profile switch](../images/PSRemove.png)

Alternatively you can delete the profile switch directly in mLab as described below.

### 'התקבלה החלפת פרופיל מ-NS אבל הפרופיל לא קיים מקומית' 

* הפרופיל המבוקש לא סונכרן כהלכה מ-Nightscout.
* מלאו אחר ההוראות מלמעלה כדי למחוק את החלפת הפרופיל

Alternatively you can delete the profile switch directly in mLab:

* עבור לאוסף ה-mlab
* חפשו בטיפולים את חלפת פרופיל
* מחקו את החלפת הפרופיל עם התאריך והשעה שהוזכרו בהודעת השגיאה.![mlab](../images/mLabDeletePS.png)

### 'DIA קצר מדי'

* הודעת שגיאה תופיע אם משך פעולת האינסולין בפרופיל רשום בערך ש-AndroidAPS לא מאמין שיהיה מדויק. 
* קראו על [בחירת ה-DIA הנכון](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/), וערכו אותו בפרופיל ואז בצעו [החלפת פרופיל](../Usage/Profiles) כדי להמשיך.