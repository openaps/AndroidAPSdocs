(aaps-builder-setup)=

# דף ההגדרה של AAPS Builder

בנו אפליקציית **AAPS** משלכם ב-GitHub. בלי תוכנות להתקנה, בלי טרמינל. בפעם הראשונה זה לוקח כ-10 דקות, ואחר כך אתם מתחילים כל בנייה בעצמכם.

כל שלב מוסבר בפירוט רב יותר, עם צילומי מסך, ב-[בנייה בדפדפן עם AAPS Builder](#aaps-builder). השאירו את הדף ההוא פתוח בלשונית אחרת.

הכפתורים שלמטה פותחים את GitHub בלשונית חדשה של Chrome. כדי לחזור לדף הזה, הקישו על כפתור הלשוניות ליד שורת הכתובת של Chrome (הריבוע עם מספר) ובחרו את הדף הזה.

(aaps-builder-setup-step1)=

## שלב 1 – יצירת מאגר בנייה פרטי

כך נוצר עותק פרטי משלכם של AAPS Builder בחשבון GitHub שלכם: מאגר שה-workflow לבנייה כבר נמצא בו. רק אתם יכולים לראות אותו ואת האפליקציות שהוא בונה. **אין** צורך ליצור fork של AndroidAPS: קוד המקור של AAPS יורד ממאגר AndroidAPS הרשמי בכל בנייה.

<label class="aapsb-label" for="aapsb-user">Your GitHub username</label>
<input class="aapsb-input" type="text" id="aapsb-user" autocomplete="username" spellcheck="false" placeholder="my-github-name" />
<span class="aapsb-msg" id="aapsb-userMsg"></span>

קודם יש להתחבר ל-github.com בדפדפן הזה (אין חשבון? אפשר ליצור חשבון בחינם). ואז לחזור לכאן. יש להשתמש בשם המשתמש (שמוצג בפרופיל GitHub שלכם), לא בכתובת הדוא"ל: הדף שואל את GitHub אם שם המשתמש הזה קיים.

<label class="aapsb-label" for="aapsb-repo">Name of your repository</label>
<input class="aapsb-input" type="text" id="aapsb-repo" spellcheck="false" placeholder="my-aaps" />

השאירו את השם המוצע. כבר יצרתם את המאגר בשם אחר? הקלידו כאן את השם הזה בדיוק.

```{note}
**כבר יש לכם מאגר AAPS Builder** (שנוצר עם גרסה קודמת של הדף הזה)? אין ליצור מאגר חדש: הקלידו כאן את השם המדויק שלו, דלגו על הכפתור שלמטה, ועדכנו את ה-workflow שלו פעם אחת: ראו **Updating your copy** בסוף השלב הזה. ה-secrets שלכם נשארים כמו שהם.

אם בכל זאת רוצים מאגר חדש, יש לבחור שם שעוד אין לכם, למשל `my-aaps-2`, ולהשתמש באותו keystore בשלב 2.

אין להקליד את השם של ה-fork שלכם של AndroidAPS: fork הוא ציבורי, והוא כבר בונה עם ה-workflow **AAPS CI** שלו.
```

Your repository: <code class="aapsb-repoUrl"></code>

יש לבדוק את השם הזה לפני השימוש בכפתורים שלמטה: הדף זוכר את השם מהביקור הקודם שלכם.

<a class="aapsb-btn" id="aapsb-createRepo" target="_blank" rel="noopener">Create my private repository</a>

בדף GitHub שנפתח, הכול כבר ממולא: התבנית `nightscout/aaps-builder`, החשבון שלכם בתור הבעלים, שם המאגר שלכם, ו-**Private**. אין לשנות שום דבר, ויש להשאיר את **Include all branches** לא מסומן.

1. לחצו על הכפתור הירוק **Create repository**.
2. GitHub מציג את המאגר החדש שלכם עם תיקייה `.github` וקובץ `README.md`: ה-workflow לבנייה נמצא שם. חזרו לדף הזה לשלב 2.

```{admonition} Your new repository is empty (no files)?
:class: warning

המאגר לא נוצר מהתבנית. מחקו אותו (**Settings** ← תחתית הדף ← **Delete this repository**), ואז הקישו שוב על **Create my private repository**.
```

```{admonition} Updating your copy (existing AAPS Builder repository)
:class: dropdown

שלבי הבנייה מתעדכנים בשבילכם: בכל בנייה, המאגר שלכם מריץ את הגרסה שמפתחי AAPS פרסמו ב-nightscout/aaps-builder, ושום דבר במאגר שלכם לא משתנה. את קובץ ה-workflow מחליפים רק כשהדף [עדכונים ושינויים בתיעוד](../Maintenance/DocumentationUpdate.md) מודיע על כך (למשל בגלל ווריאנט בנייה חדש), או פעם אחת אם המאגר שלכם נוצר עם גרסה קודמת של הדף הזה או מהתבנית הישנה. ה-secret שלכם `KEYSTORE_SET` נשאר כמו שהוא.

1. <a class="aapsb-btn aapsb-secondary" href="https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/build.yml" target="_blank" rel="noopener">Open the newest workflow</a>

   במחשב, לחצו על **סמל ההעתקה** ("Copy raw file") בפינה הימנית העליונה של הקובץ. בטלפון, פתחו במקום זאת את <a href="https://raw.githubusercontent.com/nightscout/aaps-builder/main/.github/workflows/build.yml" target="_blank" rel="noopener">גרסת הטקסט הפשוט</a>, לחצו לחיצה ארוכה על הטקסט ← **Select all** ← **Copy**.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openWorkflowFile" target="_blank" rel="noopener">Open my workflow file</a>

   פותח את `.github/workflows/build.yml` ב-<code class="aapsb-repoUrl"></code> לעריכה.
3. החליפו את כל הטקסט ב-workflow שהעתקתם (בטלפון: לחיצה ארוכה ← **Select all** ← **Paste**), ואז לחצו פעמיים על **Commit changes…**. השורה הראשונה של הקובץ מציגה את הגרסה שלו.
```

(aaps-builder-setup-step2)=

## שלב 2 – מפתח החתימה שלכם

האפליקציה חייבת להיחתם עם מפתח משלכם. יש להשתמש תמיד באותו מפתח. אחרת, כדי לעדכן, יהיה צורך להסיר את AAPS (ולאבד את ההגדרות שלו). יש לבחור אחת משתי הלשוניות.

`````{tab-set}

````{tab-item} I already have a keystore
לדוגמה מ-Android Studio (.jks).

<label class="aapsb-label" for="aapsb-ksFile">Keystore file</label>
<input type="file" id="aapsb-ksFile" accept=".jks,.keystore,.p12,.pfx,application/octet-stream">

<label class="aapsb-label" for="aapsb-ksPass">Keystore password</label>
<input class="aapsb-input" type="password" id="aapsb-ksPass" autocomplete="off">

<label class="aapsb-label" for="aapsb-ksAlias">Key alias</label>
<select class="aapsb-input" id="aapsb-ksAliasSel" hidden></select>
<input class="aapsb-input" type="text" id="aapsb-ksAlias" autocomplete="off" spellcheck="false" placeholder="key0">

<label class="aapsb-check"><input type="checkbox" id="aapsb-samePass" checked> Key password is the same as the keystore password</label>

<div id="aapsb-keyPassWrap" hidden>

<label class="aapsb-label" for="aapsb-keyPass">Key password</label>
<input class="aapsb-input" type="password" id="aapsb-keyPass" autocomplete="off">

</div>

<button class="aapsb-btn" type="button" id="aapsb-haveGo">Check and continue</button> <span class="aapsb-msg" id="aapsb-haveMsg"></span>
````

````{tab-item} Create a new key
בונים את AAPS בפעם הראשונה? מפתח חדש נוצר כאן, בדפדפן שלכם. שום דבר לא נשלח לשום מקום.

<label class="aapsb-label" for="aapsb-newPass">Choose a password (at least 8 characters, no accented letters)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass" autocomplete="new-password">

<label class="aapsb-label" for="aapsb-newPass2">Repeat the password</label>
<input class="aapsb-input" type="password" id="aapsb-newPass2" autocomplete="new-password">

<button class="aapsb-btn" type="button" id="aapsb-newGo">Create key</button> <span class="aapsb-msg" id="aapsb-newMsg"></span>

<div class="aapsb-box" id="aapsb-backupBox" hidden>

**שמרו גיבוי של המפתח!**

הורידו את הקובץ. שמרו את שלושת הדברים האלה יחד, במקום בטוח מחוץ לטלפון (למשל באחסון ענן משלכם):

- הקובץ `aaps-keystore.jks`
- הסיסמה שלכם
- ה-alias של המפתח: **`key0`**

תצטרכו את שלושתם אם תבנו את AAPS אי פעם בדרך אחרת, למשל עם Android Studio.

<button class="aapsb-btn" type="button" id="aapsb-downloadKs">Download backup (aaps-keystore.jks)</button>

</div>
````

`````
(aaps-builder-setup-step3)=
## שלב 3 – מתן המפתח למאגר שלכם
<span id="aapsb-s3wait">קודם יש להשלים את שלב 2.</span>

<div id="aapsb-s3ready" hidden>
  1. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets" target="_blank" rel="noopener">Open the secrets page</a> נפתח: <code class="aapsb-repoUrl"></code> מופיע "Page not found" (404)? קודם יש לוודא שאתם מחוברים ל-github.com בדפדפן הזה: GitHub מציג 404 עבור מאגרים פרטיים כשלא מחוברים. אחרת, שם המשתמש או שם המאגר בשלב 1 לא תואמים למאגר שלכם: יש לבדוק אותם ב-github.com ולהקליד אותם בשלב 1. 2. הקישו על "Copy name", ואז הדביקו אותו בשדה הקטן "Name": `KEYSTORE_SET` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="name">Copy name</button> 3. הקישו על "Copy secret", ואז הדביקו את הקוד הארוך בתיבה הגדולה "Secret": <code id="aapsb-secretPreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="secret">Copy secret</button> <span class="aapsb-msg" id="aapsb-copyMsg"></span> ה-secret הוא קוד ארוך מאוד (אלפי תווים), ולא המילה KEYSTORE_SET. יש להעתיק ולהדביק קודם את השם, ואחר כך את הקוד הארוך. 4. הקישו על "Add secret". זהו, לא תצטרכו לעשות זאת שוב.
</div>
(aaps-builder-setup-step4)=
## שלב 4 – בניית האפליקציה

1. <a class="aapsb-btn" id="aapsb-openActions" target="_blank" rel="noopener">Open the build page</a>

   נפתח: <code class="aapsb-repoUrl"></code>

   מופיע "Page not found" (404)? קודם יש לוודא שאתם מחוברים ל-github.com בדפדפן הזה: GitHub מציג 404 עבור מאגרים פרטיים כשלא מחוברים. אחרת, שם המשתמש או שם המאגר בשלב 1 לא תואמים למאגר שלכם: יש לבדוק אותם ב-github.com ולהקליד אותם בשלב 1. במקום זה נפתחה אפליקציית GitHub? הקישו על "RUN WORKFLOW", בדקו את הגרסה ואת הווריאנט, והקישו שוב על "RUN WORKFLOW". אם האפליקציה עדיין מציגה "Nothing to see here", משכו את הרשימה למטה כדי לראות את הבנייה שלכם.
2. אם מתבקשים, לחצו על הכפתור הירוק כדי להפעיל את ה-workflows.
ברשימת תהליכי העבודה (workflows) יש שתי רשומות: יש להשתמש ב-"Build AAPS". התעלמו מ-"AAPS Builder": הוא מכיל את שלבי הבנייה ואין בו לחצן "Run workflow".
3. לחצו על "Run workflow", ואז על הכפתור הירוק "Run workflow". "latest" בונה את הגרסה החדשה ביותר של AAPS. ***טיפ:*** *אפשר לבנות גרסה אחרת: במקום "latest" יש להקליד את השם של ה-[tag](https://github.com/nightscout/AndroidAPS/tags) שלה*
4. יש להמתין כ-15–30 דקות. סימן וי ירוק אומר שהבנייה הסתיימה.
רוצים לקבל דוא"ל כשהבנייה מסתיימת? GitHub שולח דוא"ל רק כשבנייה נכשלת. כדי לקבל דוא"ל גם כשהיא מצליחה: ב-github.com, פתחו את תמונת הפרופיל ← Settings ← Notifications ← System ← Actions, והסירו את הסימון מ-"Only notify for failed workflows".

```{admonition} No "Build AAPS" / "Run workflow" button?
:class: warning

1. פתחו את המאגר שלכם ובדקו שיש בו תיקייה `.github` עם הקובץ `workflows/build.yml`. אם המאגר ריק, הוא לא נוצר מהתבנית: מחקו אותו (**Settings** ← תחתית הדף ← **Delete this repository**) ובצעו שוב את [שלב 1](#aaps-builder-setup-step1) עם הכפתור.
2. פתחו את הלשונית Actions. אם כתוב שה-workflows מושבתים, לחצו על הכפתור הירוק כדי להפעיל אותם. אחר כך לחצו על "Build AAPS" ברשימה.
```

(aaps-builder-setup-step5)=

## שלב 5 – התקנה בטלפון

```{admonition} Before every update: back up your settings!
:class: warning

1. ב-AAPS: תחזוקה ← ייצוא הגדרות. (כדאי לעשות זאת באופן קבוע בכל מקרה, למשל אחרי שינוי פרופיל או פעם בחודש.)
2. העתיקו את הקובץ המיוצא אל מחוץ לטלפון, למשל ל-Google Drive או ל-Dropbox. גיבוי שנמצא רק בטלפון ילך לאיבוד יחד עם הטלפון.
3. שמרו שם גם את קובצי ה-APK וכמה ייצואים ישנים יותר. כך תמיד אפשר לחזור אחורה.

[איך לייצא הגדרות](#ExportImportSettings-Settings-Export) · [שאלות נפוצות של AAPS: איך לארגן גיבויים](#FAQ-organize-backups)
```

1. פתחו את הדף הזה בטלפון, בדפדפן האינטרנט (Chrome). אם מתבקשים, יש להתחבר ל-github.com.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openRuns" target="_blank" rel="noopener">Open my builds</a>

   במקום זה נפתחה אפליקציית GitHub? האפליקציה לא יכולה להוריד בניות. באפליקציה, פתחו את הבנייה החדשה ביותר והקישו על "Artifacts ↗", או הקישו על סמל השיתוף ובחרו Chrome (או "Copy link", ואז הדביקו את הקישור בשורת הכתובת של Chrome). המשיכו ב-Chrome.

   מופיע "Page not found" (404)? קודם יש לוודא שאתם מחוברים ל-github.com בדפדפן הזה: GitHub מציג 404 עבור מאגרים פרטיים כשלא מחוברים. אחרת, שם המשתמש או שם המאגר בשלב 1 לא תואמים למאגר שלכם: יש לבדוק אותם ב-github.com ולהקליד אותם בשלב 1.

   כדי שקישורי GitHub לא ייפתחו באפליקציה: Android Settings ← Apps ← GitHub ← Open by default ← כבו את "Open supported links".
3. הקישו על הבנייה החדשה ביותר עם סימן וי ירוק ✅.
4. גללו למטה אל סיכום הבנייה והקישו על הקישור הגדול "📱 Download AAPS …" (או גללו עוד למטה אל "Artifacts" והקישו על aaps-….apk). יש לגלול עם האצבע על הטקסט, לא על התרשים של שלבי הבנייה.
5. כשההורדה מסתיימת, הקישו על הקובץ ובחרו Install (התקנה). אם מתבקשים, יש לאשר התקנת אפליקציות מהמקור הזה.
6. aaps-wear-….apk מיועד לשעון חכם. אם אין לכם שעון כזה, אפשר לדלג עליו.

ה-APK לא מופיע תחת "Code" במאגר שלכם, אלא רק בדף הבנייה. הוא נשמר למשך 14 ימים.

גרסה חדשה של AAPS? גבו את ההגדרות, ואז בנו אותה עם [שלב 4](#aaps-builder-setup-step4). המאגר שלכם אף פעם לא בונה שום דבר מעצמו.

(aaps-builder-setup-step6)=

## שלב 6 – אופציונלי: קבלת האפליקציה ב-Google Drive

רוצים שה-APK יופיע ב-Google Drive שלכם (נשמר לתמיד)? יש להוסיף עוד secret אחד, GDRIVE_OAUTH2. הדף הזה מקבל אותו מ-Google בשבילכם. אז AAPS יוכל לראות ולשנות ב-Google Drive רק את הקבצים שהוא עצמו יוצר, ושום דבר אחר.

1. <a class="aapsb-btn" id="aapsb-googleAuth" target="_blank" rel="noopener">Connect Google Drive</a>

   Google נפתח בלשונית חדשה. בחרו את חשבון Google שלכם ותנו ל-AAPS הרשאה לראות ולשנות את הקבצים שלו. אם Google מודיע שהאפליקציה לא מאומתת, הקישו על "Advanced", ואז על "Go to …".
2. אחר כך הלשונית החדשה מציגה שגיאה כמו **"This site can't be reached"** או **"127.0.0.1 refused to connect"**. **זה צפוי.** התשובה של Google נמצאת בכתובת של הלשונית הזו.

   הקישו על שורת הכתובת של הלשונית הזו, בחרו את כל הכתובת והעתיקו אותה. היא מתחילה ב-`http://127.0.0.1:47913/`. חזרו לדף הזה תוך כמה דקות: התשובה תקפה רק לזמן קצר.
3. <label class="aapsb-label" for="aapsb-googleUrl">Paste the copied address here</label> <input class="aapsb-input" type="url" id="aapsb-googleUrl" autocomplete="off" spellcheck="false" placeholder="http://127.0.0.1:47913/aaps-builder?…" /> <button class="aapsb-btn" type="button" id="aapsb-googleGo">Get GDRIVE_OAUTH2</button> <span class="aapsb-msg" id="aapsb-googleMsg"></span>

<div id="aapsb-gdriveReady" hidden>

4. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets2" target="_blank" rel="noopener">Open the secrets page</a>

   נפתח: <code class="aapsb-repoUrl"></code>

   מופיע "Page not found" (404)? קודם יש לוודא שאתם מחוברים ל-github.com בדפדפן הזה: GitHub מציג 404 עבור מאגרים פרטיים כשלא מחוברים. אחרת, שם המשתמש או שם המאגר בשלב 1 לא תואמים למאגר שלכם: יש לבדוק אותם ב-github.com ולהקליד אותם בשלב 1.
5. הקישו על "Copy name", ואז הדביקו אותו בשדה הקטן "Name": `GDRIVE_OAUTH2` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="gdrive">Copy name</button>
6. הקישו על "Copy secret", ואז הדביקו את הקוד בתיבה הגדולה "Secret": <code id="aapsb-gdrivePreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="gdriveValue">Copy secret</button> <span class="aapsb-msg" id="aapsb-gdriveCopyMsg"></span>
7. הקישו על "Add secret".

</div>

```{admonition} Already have a GDRIVE_OAUTH2 value?
:class: dropdown

גם ערך מדף ההכנה של AAPS, של שיטת הבנייה האחרת בדפדפן, עובד: פתחו את דף ה-secrets, הוסיפו את השם `GDRIVE_OAUTH2` והדביקו את הערך שלכם. ראו [שמירת הבניות ב-Google Drive](#aaps-builder-google-drive).
```

בבנייה הבאה, קובצי ה-APK יישמרו גם ב-Google Drive, בתיקייה AAPS/&lt;version&gt;.

אם לא בונים במשך 6 חודשים, או אם משנים את סיסמת Google, הגישה מבוטלת על ידי Google. הבנייה תודיע על כך: אז יש לבצע את השלב הזה שוב.

----

כל מה שבדף הזה רץ בדפדפן שלכם. המפתח והסיסמאות שלכם לא נשלחים לשום מקום, חוץ מהמקום שבו אתם עצמכם מדביקים אותם. רק שם המשתמש שלכם ב-GitHub נשלח ל-GitHub, כדי לבדוק שהוא קיים. בשלב 6, התשובה של Google נשלחת רק ל-Google, כדי לקבל את GDRIVE_OAUTH2. ה-workflow לבנייה מתוחזק על ידי מפתחי AAPS ב-[nightscout/aaps-builder](https://github.com/nightscout/aaps-builder), על בסיס AAPS Builder (AGPL-3.0).

<div id="aapsb-msgs" hidden>

- <span data-aapsb-msg="copied">הקוד הארוך הועתק: הדביקו אותו בתיבה הגדולה "Secret", ואז הקישו על "Add secret".</span>
- <span data-aapsb-msg="copiedName">השם הועתק: הדביקו אותו בשדה הקטן "Name".</span>
- <span data-aapsb-msg="userOk">✓ GitHub user found.</span>
- <span data-aapsb-msg="userBad">✗ No GitHub user with this name. יש להשתמש בשם המשתמש (שמוצג בפרופיל GitHub שלכם), לא בכתובת הדוא"ל.</span>
- <span data-aapsb-msg="copiedShort">הועתק ✓</span>
- <span data-aapsb-msg="needUser">קודם יש להזין בשלב 1 את שם המשתמש שלכם ב-GitHub.</span>
- <span data-aapsb-msg="errPipe">סיסמאות ו-alias לא יכולים להכיל את התו |</span>
- <span data-aapsb-msg="errNoFile">בחרו את קובץ ה-keystore שלכם.</span>
- <span data-aapsb-msg="errEmpty">יש למלא סיסמה ו-alias.</span>
- <span data-aapsb-msg="errPass">סיסמת ה-keystore שגויה.</span>
- <span data-aapsb-msg="errKeyPass">סיסמת המפתח שגויה.</span>
- <span data-aapsb-msg="errAlias">ה-alias לא נמצא ב-keystore. זמינים: {aliases}</span>
- <span data-aapsb-msg="errFormat">זה לא נראה כמו קובץ keystore.</span>
- <span data-aapsb-msg="okHave">ה-keystore תקין! המשיכו לשלב 3.</span>
- <span data-aapsb-msg="okHaveUnchecked">ה-keystore נקרא. הסיסמה תיבדק בזמן הבנייה. המשיכו לשלב 3.</span>
- <span data-aapsb-msg="errShort">הסיסמה חייבת להכיל לפחות 8 תווים.</span>
- <span data-aapsb-msg="errAscii">יש להשתמש רק ב-a–z, A–Z, 0–9 ובסימנים כמו ! ? # – בלי רווחים, בלי אותיות עם סימנים (כמו é) ובלי |</span>
- <span data-aapsb-msg="errMatch">הסיסמאות לא זהות.</span>
- <span data-aapsb-msg="working">יוצרים מפתח…</span>
- <span data-aapsb-msg="okNew">Key created. הורידו את הגיבוי שלמטה, ואז המשיכו לשלב 3.</span>
- <span data-aapsb-msg="gNoUrl">קודם יש להדביק את הכתובת המלאה של הלשונית של Google.</span>
- <span data-aapsb-msg="gNoCode">בכתובת הזו אין תשובה מ-Google. העתיקו את הכתובת המלאה של הלשונית שמציגה את השגיאה. היא מתחילה ב-http://127.0.0.1:47913/</span>
- <span data-aapsb-msg="gDenied">הגישה ל-Google לא אושרה. הקישו שוב על "Connect Google Drive" ואשרו את הגישה.</span>
- <span data-aapsb-msg="gOldUrl">הכתובת הזו שייכת לניסיון קודם. הקישו שוב על "Connect Google Drive" והשתמשו בכתובת החדשה.</span>
- <span data-aapsb-msg="gWorking">שואלים את Google…</span>
- <span data-aapsb-msg="gFailed">Google לא קיבל את התשובה ({error}). התשובה תקפה רק לכמה דקות ורק פעם אחת: הקישו שוב על "Connect Google Drive".</span>
- <span data-aapsb-msg="gNoRefresh">Google לא שלח גישה לטווח ארוך. הקישו שוב על "Connect Google Drive".</span>
- <span data-aapsb-msg="gOk">GDRIVE_OAUTH2 is ready. הוסיפו אותו כ-secret למטה.</span>
- <span data-aapsb-msg="gCopied">הקוד הועתק: הדביקו אותו בתיבה הגדולה "Secret", ואז הקישו על "Add secret".</span>

</div>

<style>
  .rst-content .aapsb-label { display: block; font-weight: 700; margin: 14px 0 4px; }
  .rst-content .aapsb-input { display: block; width: 100%; max-width: 480px; padding: 8px 10px; font: inherit; border: 1px solid #ccc; border-radius: 4px; }
  .rst-content .aapsb-check { display: flex; gap: 8px; align-items: center; margin-top: 10px; }
  .rst-content .aapsb-btn, .rst-content a.aapsb-btn:visited {
    display: inline-block; margin: 4px 0; padding: 8px 16px; border-radius: 4px; border: 1px solid #2980b9; cursor: pointer;
    background: #2980b9; color: #fff; font: inherit; font-weight: 700; text-decoration: none;
  }
  .rst-content .aapsb-btn:hover { background: #1f6391; color: #fff; }
  .rst-content .aapsb-btn.aapsb-secondary, .rst-content a.aapsb-btn.aapsb-secondary:visited { background: transparent; color: #2980b9; }
  .rst-content .aapsb-btn.aapsb-secondary:hover { background: #e7f2fa; }
  .rst-content .aapsb-btn:disabled { opacity: .45; cursor: not-allowed; }
  .rst-content .aapsb-msg { display: inline-block; margin-left: 6px; }
  .rst-content .aapsb-msg.ok { color: #1a7f37; } .rst-content .aapsb-msg.err { color: #cf222e; } .rst-content .aapsb-msg.warn { color: #9a6700; }
  .rst-content .aapsb-box { background: #e7f2fa; border-radius: 4px; padding: 12px 14px; margin: 12px 0; }
  .rst-content section.aapsb-done > h2::after { content: " ✓"; color: #1a7f37; }
  .rst-content [hidden] { display: none !important; }
</style>

<script src="../_static/aaps-builder/aaps-builder.forge.min.js"></script>
<script>
// AAPS Builder setup page logic. Walks the user through creating a private copy of the
// github.com/nightscout/aaps-builder template (the build workflow is in it) and creating the
// KEYSTORE_SET secret. The repository then builds AAPS from the official source,
// github.com/nightscout/AndroidAPS, with GitHub Actions.
//
// The keystore and passwords never leave this browser. The only requests are asking GitHub's
// public API whether the typed username exists (only the name is sent) and, in the optional
// Google Drive step, sending Google's one-time answer to Google's token endpoint. The page's
// Content-Security-Policy (set in docs/shared.conf.py) allows only the AAPS documentation site
// itself, https://api.github.com and https://oauth2.googleapis.com/token.
//
// Based on AAPS Builder by the AAPS Builder authors (github.com/dio99/aaps-builder), GNU Affero
// General Public License v3.0 (AGPL-3.0). Modified for the AAPS documentation: texts in the page
// so they can be translated, workflow maintained in github.com/nightscout/aaps-builder.
// Vendor library: _static/aaps-builder/aaps-builder.forge.min.js = node-forge 1.3.1
// (BSD-3-Clause or GPL-2.0), https://github.com/digitalbazaar/forge, the unmodified
// dist/forge.min.js of the npm package node-forge@1.3.1.
(() => {
  const TEMPLATE = { owner: 'nightscout', name: 'aaps-builder' };
  const REPO_NAME = 'my-aaps';
  const WORKFLOW_PATH = '.github/workflows/build.yml';       // where the template puts it

  const $ = id => document.getElementById('aapsb-' + id);
  // The texts are in the page (hidden list above), so they are translated with it.
  const M = {};
  document.querySelectorAll('[data-aapsb-msg]').forEach(el => { M[el.dataset.aapsbMsg] = el.textContent.trim(); });
  const t = (key, vars = {}) => M[key].replace(/\{(\w+)\}/g, (all, k) => k in vars ? vars[k] : all);
  const store = {
    get: k => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch {} }
  };
  const done = step => { const el = document.getElementById('aaps-builder-setup-step' + step); if (el) el.closest('section').classList.add('aapsb-done'); };

  // ---------- step 1: links ----------
  const userInput = $('user');
  userInput.value = store.get('ghUser') || '';
  const user = () => userInput.value.trim().replace(/^@/, '');
  const repoInput = $('repo');
  repoInput.value = store.get('ghRepo') || REPO_NAME;
  const repo = () => repoInput.value.trim() || REPO_NAME;

  const LINKS = [
    ['openWorkflowFile', '/edit/main/' + WORKFLOW_PATH],
    ['openSecrets', '/settings/secrets/actions/new'],
    ['openSecrets2', '/settings/secrets/actions/new'],
    ['openActions', '/actions/workflows/build.yml'],
    ['openRuns', '/actions/workflows/build.yml']
  ];

  function updateLinks() {
    const u = user();
    store.set('ghUser', u);
    store.set('ghRepo', repo());
    // GitHub's own "Use this template" page, with its documented prefill parameters: the copy is
    // private and contains the build workflow. owner=@me is the signed-in user.
    const p = new URLSearchParams({ template_owner: TEMPLATE.owner, template_name: TEMPLATE.name,
                                    owner: '@me', name: repo(), visibility: 'private' });
    $('createRepo').href = 'https://github.com/new?' + p;
    document.querySelectorAll('.aapsb-repoUrl').forEach(el => { el.textContent = `github.com/${u || '…'}/${repo()}`; });
    const base = `https://github.com/${encodeURIComponent(u)}/${encodeURIComponent(repo())}`;
    for (const [id, path] of LINKS) $(id).href = u ? base + path : '#aaps-builder-setup-step1';
  }
  userInput.addEventListener('input', updateLinks);
  // Check that the username exists (GitHub's public API, sends only the name)
  let userTimer;
  async function checkUser() {
    const u = user();
    if (!u) { $('userMsg').textContent = ''; return; }
    try {
      const r = await fetch(`https://api.github.com/users/${encodeURIComponent(u)}`);
      if (u !== user()) return;
      if (r.status === 200) msg('userMsg', t('userOk'), 'ok');
      else if (r.status === 404) msg('userMsg', t('userBad'), 'err');
      else $('userMsg').textContent = '';
    } catch { $('userMsg').textContent = ''; }
  }
  userInput.addEventListener('input', () => { clearTimeout(userTimer); userTimer = setTimeout(checkUser, 600); });
  repoInput.addEventListener('input', updateLinks);
  for (const [id] of LINKS) {
    $(id).addEventListener('click', e => { if (!user()) { e.preventDefault(); userInput.focus(); alert(t('needUser')); } });
  }
  $('createRepo').addEventListener('click', () => done(1));

  // ---------- helpers ----------
  const utf8 = s => new TextEncoder().encode(s);
  function bytesToB64(bytes) {
    let s = '';
    for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(s);
  }
  const binStrToBytes = s => Uint8Array.from(s, c => c.charCodeAt(0));
  const sha1 = async (...parts) => {
    const all = new Uint8Array(parts.reduce((n, p) => n + p.length, 0));
    let o = 0; for (const p of parts) { all.set(p, o); o += p.length; }
    return new Uint8Array(await crypto.subtle.digest('SHA-1', all));
  };
  const eq = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
  // JKS uses the password as UTF-16BE bytes
  const utf16be = s => { const b = new Uint8Array(s.length * 2); for (let i = 0; i < s.length; i++) { b[2*i] = s.charCodeAt(i) >> 8; b[2*i+1] = s.charCodeAt(i) & 255; } return b; };

  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); }
    catch {
      const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta);
      ta.select(); document.execCommand('copy'); ta.remove();
    }
  }
  function msg(id, text, cls) { const el = $(id); el.className = 'aapsb-msg ' + cls; el.textContent = text; }

  let secretValue = null;
  function setSecret(ksBytes, storePass, alias, keyPass) {
    const raw = [bytesToB64(ksBytes), storePass, alias, keyPass].join('|');
    secretValue = bytesToB64(utf8(raw));
    $('secretPreview').textContent = secretValue.slice(0, 16) + '…';
    done(2);
    $('s3wait').hidden = true;
    $('s3ready').hidden = false;
  }

  // ---------- step 2a: existing keystore ----------
  function parseJks(bytes) {
    const v = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    if (v.getUint32(0) !== 0xFEEDFEED) return null;
    let o = 12; const n = v.getUint32(8); const entries = [];
    const readUtf = () => { const len = v.getUint16(o); o += 2; const s = new TextDecoder().decode(bytes.subarray(o, o + len)); o += len; return s; };
    const skipCert = () => { if (v.getUint32(4) === 2) readUtf(); const len = v.getUint32(o); o += 4 + len; };
    for (let i = 0; i < n; i++) {
      const tag = v.getUint32(o); o += 4;
      const alias = readUtf(); o += 8;
      if (tag === 1) {
        const len = v.getUint32(o); o += 4;
        const key = bytes.subarray(o, o + len); o += len;
        const chain = v.getUint32(o); o += 4;
        for (let c = 0; c < chain; c++) skipCert();
        entries.push({ alias, key });
      } else { skipCert(); }
    }
    return { entries, body: bytes.subarray(0, o), digest: bytes.subarray(o, o + 20) };
  }

  // Sun JKS KeyProtector: verify key password without fully decrypting
  async function jksKeyPassOk(encKeyInfo, pass) {
    // EncryptedPrivateKeyInfo: SEQ { AlgId, OCTET STRING data }
    const asn = forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, encKeyInfo)));
    const data = binStrToBytes(asn.value[1].value);
    const salt = data.subarray(0, 20), enc = data.subarray(20, data.length - 20), check = data.subarray(data.length - 20);
    const pw = utf16be(pass);
    const plain = new Uint8Array(enc.length);
    let d = salt;
    for (let off = 0; off < enc.length; off += 20) {
      d = await sha1(pw, d);
      for (let j = 0; j < 20 && off + j < enc.length; j++) plain[off + j] = enc[off + j] ^ d[j];
    }
    return eq(await sha1(pw, plain), check);
  }

  let haveBytes = null, haveKind = null, haveJks = null;
  $('ksFile').addEventListener('change', async () => {
    const f = $('ksFile').files[0]; $('haveMsg').textContent = '';
    if (!f) return;
    haveBytes = new Uint8Array(await f.arrayBuffer());
    haveJks = null; haveKind = null;
    try { haveJks = parseJks(haveBytes); } catch { haveJks = null; }
    if (haveJks) {
      haveKind = 'jks';
      const sel = $('ksAliasSel');
      sel.innerHTML = '';
      haveJks.entries.forEach(e => sel.add(new Option(e.alias, e.alias)));
      if (haveJks.entries.length > 0) {
        sel.hidden = false; $('ksAlias').hidden = true; $('ksAlias').value = haveJks.entries[0].alias;
        sel.onchange = () => { $('ksAlias').value = sel.value; };
      }
    } else if (haveBytes[0] === 0x30) {
      haveKind = 'p12';
      $('ksAliasSel').hidden = true; $('ksAlias').hidden = false;
    } else {
      msg('haveMsg', t('errFormat'), 'err');
    }
  });
  $('samePass').addEventListener('change', () => { $('keyPassWrap').hidden = $('samePass').checked; });

  $('haveGo').addEventListener('click', async () => {
    const pass = $('ksPass').value, alias = $('ksAlias').value.trim();
    const keyPass = $('samePass').checked ? pass : $('keyPass').value;
    if (!haveBytes) return msg('haveMsg', t('errNoFile'), 'err');
    if (!haveKind) return msg('haveMsg', t('errFormat'), 'err');
    if (!pass || !alias || !keyPass) return msg('haveMsg', t('errEmpty'), 'err');
    if ([pass, alias, keyPass].some(s => s.includes('|'))) return msg('haveMsg', t('errPipe'), 'err');

    try {
      if (haveKind === 'jks') {
        const d = await sha1(utf16be(pass), utf8('Mighty Aphrodite'), haveJks.body);
        if (!eq(d, haveJks.digest)) return msg('haveMsg', t('errPass'), 'err');
        const entry = haveJks.entries.find(e => e.alias.toLowerCase() === alias.toLowerCase());
        if (!entry) return msg('haveMsg', t('errAlias', { aliases: haveJks.entries.map(e => e.alias).join(', ') }), 'err');
        if (!(await jksKeyPassOk(entry.key, keyPass))) return msg('haveMsg', t('errKeyPass'), 'err');
        setSecret(haveBytes, pass, entry.alias, keyPass);
        return msg('haveMsg', t('okHave'), 'ok');
      }
      // PKCS12
      let p12;
      try {
        const asn = forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, haveBytes)));
        p12 = forge.pkcs12.pkcs12FromAsn1(asn, pass);
      } catch (e) {
        if (/password|MAC/i.test(String(e && e.message))) return msg('haveMsg', t('errPass'), 'err');
        // Could not parse locally; let the build validate it
        setSecret(haveBytes, pass, alias, keyPass);
        return msg('haveMsg', t('okHaveUnchecked'), 'warn');
      }
      const names = [...new Set(p12.safeContents.flatMap(sc => sc.safeBags.flatMap(b => (b.attributes.friendlyName || []))))];
      if (names.length && !names.some(n => n.toLowerCase() === alias.toLowerCase())) {
        return msg('haveMsg', t('errAlias', { aliases: names.join(', ') }), 'err');
      }
      setSecret(haveBytes, pass, alias, keyPass);
      msg('haveMsg', t('okHave'), 'ok');
    } catch (e) {
      console.error(e);
      setSecret(haveBytes, pass, alias, keyPass);
      msg('haveMsg', t('okHaveUnchecked'), 'warn');
    }
  });

  // ---------- step 2b: new keystore ----------
  // Use the browser's cryptographic RNG for everything forge needs (salts, IVs, serial)
  forge.random.getBytesSync = n => String.fromCharCode.apply(null, crypto.getRandomValues(new Uint8Array(n)));
  forge.random.getBytes = (n, cb) => cb ? cb(null, forge.random.getBytesSync(n)) : forge.random.getBytesSync(n);
  let newKsBytes = null;
  $('newGo').addEventListener('click', async () => {
    const p1 = $('newPass').value, p2 = $('newPass2').value;
    if (p1.length < 8) return msg('newMsg', t('errShort'), 'err');
    if (p1 !== p2) return msg('newMsg', t('errMatch'), 'err');
    if (!/^[\x21-\x7e]+$/.test(p1) || p1.includes('|')) return msg('newMsg', t('errAscii'), 'err');
    $('newGo').disabled = true;
    msg('newMsg', t('working'), '');
    try {
      const kp = await crypto.subtle.generateKey(
        { name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' },
        true, ['sign', 'verify']);
      const pkcs8 = new Uint8Array(await crypto.subtle.exportKey('pkcs8', kp.privateKey));
      const key = forge.pki.privateKeyFromAsn1(forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, pkcs8))));
      const cert = forge.pki.createCertificate();
      cert.publicKey = forge.pki.setRsaPublicKey(key.n, key.e);
      cert.serialNumber = '01' + forge.util.bytesToHex(forge.random.getBytesSync(8));
      cert.validity.notBefore = new Date();
      cert.validity.notAfter = new Date(); cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 50);
      const subject = [{ name: 'commonName', value: 'AAPS' }];
      cert.setSubject(subject); cert.setIssuer(subject);
      cert.sign(key, forge.md.sha256.create());
      const asn = forge.pkcs12.toPkcs12Asn1(key, [cert], p1, { algorithm: '3des', friendlyName: 'key0', generateLocalKeyId: true });
      newKsBytes = binStrToBytes(forge.asn1.toDer(asn).getBytes());
      setSecret(newKsBytes, p1, 'key0', p1);
      $('backupBox').hidden = false;
      msg('newMsg', t('okNew'), 'ok');
    } catch (e) {
      console.error(e);
      msg('newMsg', String(e), 'err');
      $('newGo').disabled = false;
    }
  });
  $('downloadKs').addEventListener('click', () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([newKsBytes], { type: 'application/octet-stream' }));
    a.download = 'aaps-keystore.jks';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  // ---------- step 6: Google Drive access (GDRIVE_OAUTH2) ----------
  // The same Google OAuth client, scope and PKCE flow as the AAPS preparation page
  // (github.com/nightscout/aaps-ci-preparation), so the build workflow reads the value the same
  // way: base64(client_id|refresh_token). Google sends the browser to a loopback address where
  // nothing listens: the tab shows an error, but its address holds the answer. The user copies that
  // address here, and this page sends the code to Google's token endpoint, and nowhere else.
  // The PKCE verifier stays in this tab, so the code is useless to anything else that sees it.
  const GOOGLE_CLIENT_ID = '705061051276-5ssikkg2ag39l7hj9t63saq549n3s2n5.apps.googleusercontent.com';
  const GOOGLE_REDIRECT = 'http://127.0.0.1:47913/aaps-builder';
  const session = {
    get: k => { try { return sessionStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { sessionStorage.setItem(k, v); } catch {} }
  };
  const randomHex = n => [...crypto.getRandomValues(new Uint8Array(n))].map(b => b.toString(16).padStart(2, '0')).join('');
  const b64url = bytes => bytesToB64(bytes).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

  // The link is ready before the tap, so the browser opens it as a normal link and does not
  // block it as a pop-up.
  async function setGoogleLink(verifier, state) {
    const challenge = b64url(new Uint8Array(await crypto.subtle.digest('SHA-256', utf8(verifier))));
    const p = new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID, redirect_uri: GOOGLE_REDIRECT, response_type: 'code',
      scope: 'https://www.googleapis.com/auth/drive.file', access_type: 'offline',
      // consent: Google sends a refresh token only when the user is asked, also after an earlier grant
      prompt: 'consent', code_challenge_method: 'S256', code_challenge: challenge, state
    });
    $('googleAuth').href = 'https://accounts.google.com/o/oauth2/v2/auth?' + p;
  }
  // A new attempt: new verifier and state
  function newGoogleAttempt() {
    const verifier = randomHex(32), state = randomHex(16);
    session.set('gVerifier', verifier);
    session.set('gState', state);
    return setGoogleLink(verifier, state);
  }
  // Keep the attempt of this tab if the page is reloaded while the user is in the Google tab
  if (session.get('gVerifier') && session.get('gState')) setGoogleLink(session.get('gVerifier'), session.get('gState'));
  else newGoogleAttempt();

  let gdriveValue = null;
  $('googleGo').addEventListener('click', async () => {
    const text = $('googleUrl').value.trim();
    if (!text) return msg('googleMsg', t('gNoUrl'), 'err');
    let params;
    try { params = new URL(text).searchParams; } catch { return msg('googleMsg', t('gNoCode'), 'err'); }
    if (params.get('error')) return msg('googleMsg', t('gDenied'), 'err');
    const code = params.get('code');
    if (!code) return msg('googleMsg', t('gNoCode'), 'err');
    if (params.get('state') !== session.get('gState')) return msg('googleMsg', t('gOldUrl'), 'err');
    $('googleGo').disabled = true;
    msg('googleMsg', t('gWorking'), '');
    try {
      const r = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: GOOGLE_CLIENT_ID, code, code_verifier: session.get('gVerifier'),
          grant_type: 'authorization_code', redirect_uri: GOOGLE_REDIRECT
        })
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) {
        msg('googleMsg', t('gFailed', { error: data.error || r.status }), 'err');
        await newGoogleAttempt();
        return;
      }
      if (!data.refresh_token) { msg('googleMsg', t('gNoRefresh'), 'err'); await newGoogleAttempt(); return; }
      gdriveValue = bytesToB64(utf8(GOOGLE_CLIENT_ID + '|' + data.refresh_token));
      $('gdrivePreview').textContent = gdriveValue.slice(0, 16) + '…';
      $('gdriveReady').hidden = false;
      $('googleUrl').value = '';
      msg('googleMsg', t('gOk'), 'ok');
      done(6);
      await newGoogleAttempt();      // the code is used up; a new tap starts a new attempt
    } catch (e) {
      console.error(e);
      msg('googleMsg', t('gFailed', { error: String(e) }), 'err');
    } finally {
      $('googleGo').disabled = false;
    }
  });

  // ---------- step 3 / 6: copy secret names and values ----------
  document.querySelectorAll('[data-aapsb-copy]').forEach(b => b.addEventListener('click', async () => {
    const kind = b.dataset.aapsbCopy;
    const values = { name: 'KEYSTORE_SET', gdrive: 'GDRIVE_OAUTH2', secret: secretValue, gdriveValue };
    await copyText(values[kind]);
    if (kind === 'secret') msg('copyMsg', t('copied'), 'ok');
    if (kind === 'name') msg('copyMsg', t('copiedName'), 'ok');
    if (kind === 'gdriveValue') msg('gdriveCopyMsg', t('gCopied'), 'ok');
    const label = b.textContent;
    b.textContent = t('copiedShort');
    setTimeout(() => { b.textContent = label; }, 2000);
  }));

  updateLinks();
  checkUser();
})();
</script>
