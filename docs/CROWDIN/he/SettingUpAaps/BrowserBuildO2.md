(aaps-ci-option2)=

# אפשרות 2 – העלאת ה-keystore הקיים שלכם

```{note}
זה חלק מ-[שלב 2 – יצירת keystore לחתימה](BrowserBuildKeystore.md) של [בנייה בדפדפן](BrowserBuild.md). יש לוודא שקראתם את [ההחלטה בין אפשרות 1 לאפשרות 2](#aaps-ci-preparation).
```

אפשרות 2 משתמשת שוב ב-JKS שכבר יצרתם בבנייה קודמת של AAPS במחשב ב-Android Studio. היא מתאימה למשתמשים שכבר יש להם JKS ושיודעים את הסיסמה ואת ה-alias שלו.

עבור `KEYSTORE_PASSWORD`, `KEY_ALIAS` ו-`KEY_PASSWORD`, יש להזין ב-GitHub את הסיסמה ואת ה-alias האמיתיים שלכם – אלה מ-Android Studio. בתמונה למטה רואים איפה השתמשתם בהם.

```{warning}
**סיסמאות עם תווים מיוחדים.** יש להזין את הסיסמאות בדיוק כפי שהן. אין להוסיף לוכסן הפוך (backslash) או כל תו מילוט (escape) אחר: ה-workflow של הבנייה שומר כל תו בלי שינוי, ולוכסן הפוך שנוסף הופך לחלק מהסיסמה.

אם הבנייה עדיין נכשלת בשלב החתימה, והסיסמה שלכם מכילה `$`, גרש הפוך (backtick), `"` או `\`, קובץ ה-workflow ב-fork שלכם ישן. יש [לסנכרן את ה-fork שלכם](#Update-to-new-version-update-your-repo) עם ה-dev העדכני, ואז להריץ שוב את הבנייה. ראו [בנייה בדפדפן: פתרון תקלות](#aaps-ci-password-special-characters).
```

```{admonition} KEY + PASSWORDS
:class: dropdown

![זכירת סיסמאות](../images/Building-the-App/044_RememberPwd.png)
```

## בחירת המכשיר

```{tip}
בונים מ**טלפון Android**? השתמשו במקום זה ב-[AAPS Builder](BrowserBuildAapsBuilder.md): הוא לא צריך קובץ הכנה.
```

פעלו לפי הדף שמתאים למכשיר שממנו אתם בונים:

- **[מחשב](BrowserBuildO2Computer.md)** – Windows, Mac או Linux.

```{tip}
אפשר להחליף מכשיר בכל זמן – פשוט פותחים את הדף המתאים.
```

```{toctree}
:hidden:

מחשב <BrowserBuildO2Computer.md>
```
