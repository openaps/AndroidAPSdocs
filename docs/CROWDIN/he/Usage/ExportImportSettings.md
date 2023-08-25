# Export & import settings

## מתי כדאי לייצא הגדרות?

חשוב להיות מוכנים לבלתי צפוי. ייתכן שתשנו הגדרות חשובות בטעות ושתחוו בקשיים בביטול השינויים הללו. הטלפון שלכם עלול להתקלקל, להישבר או להיגנב. על מנת לחזור חזרה להגדרות בהם הייתם, עליכם לייצא את הגדרותיכם על בסיס קבוע.

מומלץ לייצא לאחר שינויים בהגדרות ובסיום משימות.

יש להעתיק את ההגדרות המיוצאות לאחסון בענן או למחשב האישי, עדיף לשני מיקומים שונים. כך תהיו מוכנים לאובדן או נזק לטלפון ה-AAPS שלכם ולא תצטרכו להתחיל מאפס.

במחשב Windows 10 זה נראה כך:

```{image} ../images/AAPS_ExImportSettingsWin.png
:alt: AndroidAPS Preferences phone connected to computer
```

## מידע מיוצא

המידע המיוצא כולל בין השאר:

- [Automation](../Usage/Automation.md) events
- [Config builder](../Configuration/Config-Builder.md) settings
- [Local profile](Config-Builder-local-profile) settings
- [Objectives](../Usage/Objectives.md) status incl. [exam results](Objectives-objective-3-prove-your-knowledge)
- [Preferences](../Configuration/Preferences.md) incl. [NS Client settings](Preferences-nsclient)

## פורמט הגיבוי המוצפן

Settings backup is encrypted by a master password that can be set in [Preferences](Preferences-master-password) .

(ExportImportSettings-export-settings)=
## ייצוא הגדרות

- Hamburger menu (top left corner of screen)
- תחזוקה
- ייצוא הגדרות

```{image} ../images/AAPS_ExportSettings1.png
:alt: AndroidAPS export settings 1
```

- Date and time of export will be added to the file name automatically and displayed together with the path.
- Click 'OK'.
- Enter [master password](Preferences-master-password) and click 'OK'.
- Successful export will be prompted at bottom of the screen.

```{image} ../images/AAPS_ExportSettings2.png
:alt: AndroidAPS export settings 2
```

(ExportImportSettings-import-settings)=
## ייבוא הגדרות

**Do not import settings while on an active Pod session** - see [Omnipod page for details](OmnipodEros-import-settings-from-previous-aaps).

- Hamburger menu (top left corner of screen)
- תחזוקה
- ייבוא הגדרות

```{image} ../images/AAPS_ImportSettings1.png
:alt: AndroidAPS import settings 1
```

- כל הקבצים מהתיקייה /AAPS/preferences בטלפון יוצגו ברשימה.
- בחרו קובץ.
- אשרו ייבוא על ידי לחיצה על 'אישור'.
- Enter [master password](Preferences-master-password) and click 'OK'.

```{image} ../images/AAPS_ImportSettings2.png
:alt: AndroidAPS import settings 2
```

- יוצגו פרטים על קובץ ההעדפות.
- זוהי ההזדמנות האחרונה לביטול הייבוא.
- לחצו על 'ייבוא'.
- אשרו את ההודעה על ידי לחיצה על 'אישור'.
- AAPS יופעל מחדש כדי להפעיל העדפות מיובאות.

### הערה למשתמשי Dana RS

- As pump connection settings are also imported AAPS on your new phone will already "know" the pump and therefore not start a bluetooth scan.
- יש לצמד טלפון חדש עם המשאבה באופן ידני.

### ייבוא הגדרות מגרסאות קודמות (לפני AAPS 2.7)

- קובץ ההגדרות "הישן" (הנקרא 'AndroidAPSPreferences' - ללא סיומת קובץ) חייב להיות בתיקיית השורש של הטלפון החכם (/storage/emulated/0).
- אין לשים את הקובץ ה"ישן" באותה תיקיה כמו ההגדרות המיוצאות החדשות (AAPS/preferences).
- את הקובץ ה"ישן" תמצאו בתחתית הרשימה בדיאלוג הייבוא.

## העברת קובץ הגדרות

- הדרך הטובה ביותר להעביר קובץ הגדרות לטלפון חדש היא באמצעות כבל USB או שירות ענן (כמו לדוגמה Google Drive).
- Manuals can be found on the web, i.e. [Android help pages](https://support.google.com/android/answer/9064445?hl=en).
- אם אתם נתקלים בבעיות עם הקובץ המועבר נסו דרך אחרת להעביר קובץ.
