# עוזר פרופילים

Profile helper offers two functions:

1. הרכבת פרופיל עבור ילדים
2. השוואת פרופילים או החלפות פרופילים כדי לשכפל פרופיל חדש

## פרופיל עבור ילדים (עד גיל 18)

**Important note:**

**Profile helper is intended to support you finding the initial profile for your kid. Even though it is based on data sets of two different hospitals always discuss with your medical team before using a new profile!**

עוזר הפרופיל מציע נתונים משני בתי חולים שונים לילדים המסייעים למצוא פרופיל ראשוני לילד בגיל עד 18 שנים.

```{image} ../images/ProfileHelperKids1.png
:alt: Profile Helper Kids 1
```

1. בחרו 'עוזר פרופיל' מתפריט שלוש הנקודות (⋮) למעלה בצד השמאלי של המסך.
2. Adjust Default profile (based on hospital data set) by entering kids age and either TDD Total **or** weight.
3. עברו מסך על ידי לחיצה על הסרגל האפור שכותרתו 2 משמאל.
4. לחצו לחיצה ארוכה על 'פרופיל נוכחי' ובחרו פרופיל ברירת מחדל DPV.

```{image} ../images/ProfileHelperKids2.png
:alt: Profile Helper Kids 2
```

5. Adjust DPV Default profile (based on another hospital data set) by entering kids age, percentage of basal and either TDD Total **or** weight.
6. לחצו על 'השוואת פרופילים'.
7. תוצג השוואה בין הפרופילים.

Once you are fine with the profile adjustments you can [clone the profile](../Configuration/profilehelper.md#clone-profile) as described below.

## השוואת פרופילים

You can use profile helper also to compare to different profiles or profile switches (percentage of one of your profiles used in a [profile switch](../Usage/Profiles.md) before).

```{image} ../images/ProfileHelper1.png
:alt: Profile Helper 1
```

1. בחרו 'עוזר פרופיל' מתפריט שלוש הנקודות (⋮) למעלה בצד השמאלי של המסך.
2. לחצו לחיצה ארוכה על 'פרופיל ברירת מחדל' ובחרו 'פרופיל זמין' לרשימת הפרופילים הקיימים או 'החלפת פרופיל' לרשימת החלפות הפרופיל האחרונות שביצעתם.
3. לחץ לחיצה ארוכה על שם הפרופיל \ הלחפת פרופיל ('Aktuell_LP' בצילום מסך למעלה) ובחרו פרופיל \ החלפת פרופיל מהרשימה.
4. עברו מסך על ידי לחיצה על הסרגל האפור שכותרתו 2 משמאל.

```{image} ../images/ProfileHelper2.png
:alt: Profile Helper 2
```

5. ה'פרופיל הנוכחי' מוצע להשוואה תמיד.
6. אם ברצונכם לעבור לפרופיל אחר \ להחליף אחוזי פרופיל לחצו לחיצה ארוכה על 'פרופיל נוכחי' ובחרו 'פרופיל זמין' או 'החלפת פרופיל'.
7. לחצו לחיצה ארוכה על שם פרופיל \ החלפת הפרופיל ('Aktuell_LP' בצילום מסך למעלה) ובחרו פרופיל / החלפת פרופיל מהרשימה.
8. לחצו על 'השוואת פרופילים'.
9. תוצג השוואה בין הפרופילים.

(clone-profile)=
## שכפול הפרופיל

If you use [local profiles](../Configuration/Config-Builder.md#local-profile) you can clone a profile / profile switch directly from profile helper.

```{image} ../images/ProfileHelperClone.png
:alt: Profile Helper Clone profile / profile switch
```

1. בחרו את החלפת הפרופיל \ פרופיל הרצוי כמתואר לעיל.
2. אם אתם משתמשים ב'פרופיל ברירת מחדל' או 'פרופיל ברירת מחדל של DPV' (מבוסס על מערכי נתונים מבתי חולים לילדים) הקפידו להזין הגדרות נכונות לגיל, לאחוז הבזאלי ומינון יומי כולל או משקל.
3. לחצו על כפתור 'שכפול' בתחתית המסך.
4. לחצו על אישור.
5. הפעילו את הפרופיל החדש בלשונית הפרופיל המקומי.
