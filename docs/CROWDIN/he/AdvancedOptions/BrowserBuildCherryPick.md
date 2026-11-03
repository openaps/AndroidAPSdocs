(github-cherry-pick)=

# בנייה בדפדפן: cherry-pick של קומיט

```{note}
זוהי פעולה אופציונלית ומתקדמת. היא פועלת רק אם הבנייה נעשית עם **fork** ([שלבי הבנייה בדפדפן 1–4](../SettingUpAaps/BrowserBuild.md)). מאגרי **AAPS Builder** אינם כוללים את ה-workflow הזה.
```

יש להשתמש בזה רק כאשר מפתח מבקש לבדוק שינוי מסוים (המפתח נותן hash של קומיט אחד או יותר) לפני שהשינוי נכלל בגרסה שפורסמה.

## לפני שמתחילים

- [יש לסנכרן את ה-fork](#Update-to-new-version-update-your-repo): ה-workflow הזה בונה את המצב הנוכחי של הענף, ולא גרסה שבוחרים מרשימה.
- יש לאשר גישה ל-Google Drive ([שלב 3](../SettingUpAaps/BrowserBuildGoogleDrive.md)): האפליקציה שנבנתה נשמרת שם, כמו בבנייה רגילה.

## הרצת ה-workflow

1. ב-fork של AndroidAPS ב-GitHub, יש לפתוח את **Actions**.
2. יש להרחיב את **All workflows** ולבחור **Cherry Pick CI (Pre-release Feature Backport)**.
3. יש להקיש על **Run workflow** ולמלא:

   ![aaps_cherry-pick_ci](../images/Building-the-App/CI/aaps_cherry_pick_ci.png)

   - **Use workflow from**: הענף שאליו יש להוסיף את הקומיטים, בדרך כלל `master`.
   - **Upstream repository**: המאגר שממנו מגיעים הקומיטים. יש להשאיר `nightscout/AndroidAPS`, אלא אם המפתח ביקש אחרת.
   - **Commit hash(es) to cherry-pick**: ה-hash (או ה-hashes) שהתקבלו מהמפתח, מופרדים ברווחים.
   - **Select Build Variant**: ראו [וריאנטים](#browserbuild-variant) (בדרך כלל `fullRelease`).
4. יש להקיש על **Run workflow**. בסיום, האפליקציה נמצאת ב-Google Drive, כמו לאחר [בנייה רגילה](../SettingUpAaps/BrowserBuildAPK.md).
