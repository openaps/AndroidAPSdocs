(aaps-ci-troubleshooting)=

# בנייה בדפדפן: פתרון תקלות

```{note}
דף זה מרכז עצות לפתרון תקלות ב[בנייה בדפדפן](../SettingUpAaps/BrowserBuild.md).

משתמשים ב-**AAPS Builder**? יש להתחיל מ[חלק פתרון התקלות](#aaps-builder-troubleshooting) שלו. החלקים על Google Drive בהמשך מתאימים גם לו.
```

## פתרון תקלות ב-AAPS-CI

(aaps-ci-read-the-logs)=
### קודם כול: לברר מה השתבש

כאשר בנייה נכשלת, GitHub שומר יומן של כל שלב. היומן מראה איזה שלב נכשל ולמה. יש לקרוא אותו לפני שמנסים כל דבר אחר: הודעת השגיאה היא מה שמחפשים בדף זה, ומה שהעוזרים יבקשו.

1. בעותק של AndroidAPS שלכם ב-GitHub, יש לפתוח את **Actions**. לבנייה שנכשלה יש איקס אדום. יש ללחוץ על השם שלה.

   ![הרצה שנכשלה ברשימת Actions](../images/Building-the-App/CI/aaps_ci_logs_1_runs.png)

2. סיכום ההרצה מציג **Failure** (כישלון), ומתחת לזה את ה-job שנכשל (**Build AAPS**, עם איקס אדום).

   ![סיכום ההרצה](../images/Building-the-App/CI/aaps_ci_logs_2_summary.png)

3. יש לגלול למטה אל **Annotations** (הערות) וללחוץ על השורה האדומה **Build AAPS**.

   ![Annotations (הערות)](../images/Building-the-App/CI/aaps_ci_logs_3_annotations.png)

4. ה-job נפתח. שלבים עם וי אפור הצליחו. השלב עם האיקס האדום הוא השלב שנכשל: GitHub פותח אותו עבורכם. השלבים שאחריו דולגו (עיגול אפור).

   ![שלבי ה-job](../images/Building-the-App/CI/aaps_ci_logs_4_job.png)

5. יש לקרוא את השורות שממש מעל `Error: Process completed with exit code 1.`: הן מסבירות את הבעיה. בדוגמה זו, השלב **Retrieving Google Drive access token** נכשל עם `invalid_grant` ו-`Token has been expired or revoked.`, ראו [פג תוקפו של אסימון הרענון של Google](#aaps-ci-google-token-expired).

   ![שגיאה ביומן](../images/Building-the-App/CI/aaps_ci_logs_5_error.png)

```{tip}
מבקשים עזרה? יש לשתף את שם השלב שנכשל ואת שורות השגיאה (צילום מסך כמו זה שלמעלה מספיק). אף פעם אין לשתף את התוכן של ה-secrets שלכם.
```

(aaps-ci-update-secret)=
#### עדכון secret

תיקונים רבים פירושם החלפת הערך של secret. בעותק של AndroidAPS שלכם ב-GitHub, יש לעבור אל **Settings** ← **Secrets and variables** ← **Actions** וללחוץ על העיפרון ליד ה-secret.

![רשימת ה-secrets](../images/Building-the-App/CI/aaps_ci_secret_update_1.png)

יש להזין או להדביק את הערך החדש וללחוץ על **Update secret**. GitHub אף פעם לא מציג את הערך הישן: השדה תמיד ריק.

![Update secret](../images/Building-the-App/CI/aaps_ci_secret_update_2.png)

(aaps-ci-rerun)=
#### הרצת הבנייה שוב אחרי תיקון

אחרי שתיקנתם את הסיבה, אין צורך להתחיל מההתחלה: יש לפתוח את ההרצה שנכשלה, ללחוץ על **...** (בחלק העליון של המסך), ואז על **Re-run failed jobs**.

![התפריט Re-run](../images/Building-the-App/CI/aaps_ci_rerun_1.png)

יש ללחוץ על **Re-run jobs**. אפשר גם להתחיל בנייה חדשה מ-**Run workflow** כרגיל.

![חלון Re-run](../images/Building-the-App/CI/aaps_ci_rerun_2.png)

(aaps-ci-preparation-web)=
### דף האינטרנט aaps-ci-preparation
  - דף ההכנה מוצג על ידי שרת מקומי זמני (למשל Simple Web Server במחשב), שמקבל גם את אסימון הרענון של Google.
  - אם מופיע המסך שבהמשך, השרת המקומי הפסיק לפעול או שאין אליו גישה.
  - יש לסגור את דף ההכנה, לבדוק שהשרת המקומי פועל, ואז לפתוח שוב את aaps-ci-preparation.html באותה דרך כמו בשלב 2 ולהשלים את השלבים שנותרו. זה נדרש במיוחד כאשר יוצרים את החיבור הראשון ל-Google במהלך ההגדרה.

  ![aaps_ci_html_not_found](../images/Building-the-App/CI/aaps_ci_html_not_found.png)

(aaps-ci-google-token-expired)=
### פג תוקפו של אסימון הרענון (refresh token) של Google
  - תוקפם של אסימוני רענון (refresh tokens) של Google OAuth2 פג אם לא משתמשים בהם במשך 6 חודשים. הם עלולים להפוך ללא תקפים גם במצבים אחרים (למשל, אם שיניתם את הסיסמה של חשבון Google, או ביטלתם את הגישה באופן ידני). לפרטים נוספים, ראו את [התיעוד של Google OAuth2](https://developers.google.com/identity/protocols/oauth2).
  - ב[יומן הבנייה](#aaps-ci-read-the-logs), השלב **Retrieving Google Drive access token** נכשל עם `invalid_grant` ו-`Token has been expired or revoked.`:

  ![aaps_ci_token_expired](../images/Building-the-App/CI/aaps_ci_token_expired.png)

  - אם הבנייה נכשלת בגלל אסימון רענון של Google שפג תוקפו או שבוטל, יש לבצע שוב את השלבים של [אישור Google Drive](#aaps-ci-google-drive-auth) כדי לקבל אסימון `GDRIVE_OAUTH2` חדש, [לעדכן את ה-secret](#aaps-ci-update-secret) במאגר GitHub שלכם, ואז [להריץ שוב את הבנייה](#aaps-ci-rerun).
  - אם האישור נכשל שוב, או ש-Google כבר לא מבקשת את הסכמתכם, יש קודם להסיר את הגישה הקיימת של AAPS מחשבון Google שלכם, ראו [בהמשך](#aaps-ci-google-remove-access).

(aaps-ci-google-remove-access)=
### הסרת הגישה של AAPS מחשבון Google והתחלת האישור מחדש
  - אם האישור ל-Google Drive ממשיך להיכשל, או שאתם רוצים להתחיל מחדש ממצב נקי, יש קודם להסיר את הגישה שנתתם בעבר ל-AAPS, ואז לבצע שוב את האישור.
  - בטלפון, יש לפתוח את [https://myaccount.google.com](https://myaccount.google.com), ללחוץ על **Security** (אבטחה), לגלול למטה אל **Your connections to third-party apps & services** (החיבורים שלך לאפליקציות ולשירותים של צד שלישי) ולפתוח את רשימת האפליקציות המקושרות. אפשר גם לעבור ישירות אל [https://myaccount.google.com/connections](https://myaccount.google.com/connections).
  - יש ללחוץ על **AAPS** ברשימה.

  ![aaps_ci_google_access_1](../images/Building-the-App/CI/aaps_ci_google_access_1.png)

  - הדף מציג את הגישה שנתתם ל-AAPS (קובצי Google Drive שמשמשים את האפליקציה). יש ללחוץ על **Delete all** (מחיקת הכול) כדי להסיר את החיבור, או על **See details** (הצגת פרטים) כדי לבדוק אותו קודם.

  ![aaps_ci_google_access_2](../images/Building-the-App/CI/aaps_ci_google_access_2.png)

  - בדף הפרטים, יש ללחוץ על **Remove all access** (הסרת כל הגישה).

  ![aaps_ci_google_access_3](../images/Building-the-App/CI/aaps_ci_google_access_3.png)

  - יש ללחוץ על **Confirm** (אישור).

  ![aaps_ci_google_access_4](../images/Building-the-App/CI/aaps_ci_google_access_4_confirm.png)

  - Google מאשרת של-AAPS כבר אין גישה. AAPS כבר לא מופיע ברשימת האפליקציות המקושרות.

  ![aaps_ci_google_access_5](../images/Building-the-App/CI/aaps_ci_google_access_5_removed.png)

  - עכשיו יש להתחיל את האישור מחדש ממצב נקי: לסגור את **שניהם**, גם את דף ההכנה וגם את אפליקציית מנהל הקבצים, לפתוח שוב את aaps-ci-preparation.html ממנהל הקבצים ולבצע שוב את השלבים של [אישור Google Drive](#aaps-ci-google-drive-auth). Google תבקש שוב לתת גישה, והדף ייתן אסימון `GDRIVE_OAUTH2` חדש.
  - יש [לעדכן את ה-secret `GDRIVE_OAUTH2`](#aaps-ci-update-secret) במאגר GitHub שלכם עם האסימון החדש, ואז [להריץ שוב את הבנייה](#aaps-ci-rerun).

(aaps-ci-disable-software)=
### השבתת תוכנות שעלולות להפריע לאימות OAuth
  - יש להשבית כל VPN או אפליקציית אבטחה (חומת אש, אנטי-וירוס,...) בטלפון לפני שמנסים לקבל את מפתח ה-OAuth.

(aaps-ci-actions-permission)=
### בדיקת הגדרות ההרשאות של GitHub Actions
  - יש לוודא שהמדיניות של GitHub Actions מוגדרת ל-“Allow all actions and reusable workflows” (לאפשר את כל ה-actions וה-workflows לשימוש חוזר) (Settings ← Actions ← General). אם משנים אותה, יש ללחוץ על **Save** (שמירה) מתחת לאפשרויות.

  ![aaps_ci_actions_permission](../images/Building-the-App/CI/aaps-ci-actions-permission.png)

`actions/checkout@v4` and `actions/setup-java@v4` are not allowed to be used in `xxxxx/AndroidAPS`. Actions in this workflow must be: within a repository owned by `xxxxx`

(aaps-ci-workflow-permissions)=
### בדיקת הגדרות ההרשאות של GitHub Workflow
  - אם הבנייה נכשלת מיד עם שגיאת "Invalid workflow file" (קובץ workflow לא תקין) כמו זו שבהמשך, הרשאות ברירת המחדל של ה-workflow במאגר שלכם מגבילות מדי:

```
Invalid workflow file
The workflow is not valid. .github/workflows/aaps-ci.yml (Line: 361, Col: 3):
Error calling workflow 'xxxxx/AndroidAPS/.github/workflows/cleanup-workflow-runs.yml@...'.
The nested job 'cleanup' is requesting 'actions: write', but is only allowed 'actions: none'.
```

  - יש לוודא ש-Workflow permissions מוגדרות ל-“Read and write permissions” (הרשאות קריאה וכתיבה) (Settings ← Actions ← General ← Workflow permissions), ואז לשמור ולהריץ שוב את ה-workflow של הבנייה.

  ![aaps_ci_workflow_permissions](../images/Building-the-App/CI/aaps-ci-workflow-permissions.jpg)

(aaps-ci-password-special-characters)=
### הבנייה נכשלת בבדיקת הסיסמה של ה-keystore
  - ב[יומן הבנייה](#aaps-ci-read-the-logs), השלב **Validating keystore, alias and password** נכשל עם `Either KEYSTORE_BASE64, KEYSTORE_PASSWORD, KEY_PASSWORD, or KEY_ALIAS is incorrect`, ואחריו `Keystore was tampered with, or password was incorrect`. הבנייה נעצרת שם: ה-keystore והסיסמאות נבדקים לפני ש-AAPS נבנה.

  ![סיסמת keystore שגויה ביומן הבנייה](../images/Building-the-App/CI/aaps_ci_password_wrong.png)

  - ה-workflow של הבנייה שומר כל תו בסיסמאות שלכם בלי שינוי. יש להזין את `KEYSTORE_PASSWORD` ואת `KEY_PASSWORD` בדיוק כפי שהן, בלי להוסיף לוכסן הפוך (backslash) או כל תו מילוט (escape) אחר. אם הוספתם לוכסנים הפוכים, יש [לעדכן את ה-secrets](#aaps-ci-update-secret) עם הסיסמה בדיוק כפי שהיא. הדוגמה שבהמשך שגויה: הסיסמה היא `Example2026`, והלוכסן ההפוך נוסף.

  ![סיסמה שהוזנה עם לוכסן הפוך מיותר](../images/Building-the-App/CI/aaps_ci_password_escaped.png)

  - אם הבנייה עדיין נכשלת בחתימת ה-APK למרות שהסיסמה נכונה, והסיסמה מכילה `$`, גרש הפוך (backtick), `"` או `\`, קובץ ה-workflow ב-fork שלכם הוא מלפני ספטמבר 2026 ועדיין מפרש את התווים האלה. יש [לסנכרן את ה-fork שלכם](#Update-to-new-version-update-your-repo) עם ה-dev העדכני, ואז להריץ שוב את ה-workflow של הבנייה.
  - הקו האנכי `|` הוא מקרה מיוחד. דף ההכנה של [אפשרות 1](#aaps-ci-option1) מחבר את ה-keystore, הסיסמאות וה-alias ל-secret אחד בשם `KEYSTORE_SET`, מופרדים בתו `|`, וה-workflow מפצל אותו לפי התו הזה. הסיסמה שדף ההכנה יוצר מכילה רק אותיות וספרות, ולכן זה לא יכול לקרות עם אפשרות 1. זה יכול לקרות רק אם הרכבתם בעצמכם secret בשם `KEYSTORE_SET` מסיסמה שמכילה `|`. במקרה כזה, יש למחוק את `KEYSTORE_SET` ולהזין במקומו את ה-secrets הנפרדים של [אפשרות 2](#aaps-ci-option2).
