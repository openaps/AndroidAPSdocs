התקנת Git
**************************************************
חלונות
==================================================
1. הורדת git
--------------------------------------------------
* **עליכם להיות מחוברים לאינטרנט כל הזמן מכיוון ש-Android Studio מוריד מספר עדכונים!**
כל גרסה של git תתאים. לדוגמה `https://git-scm.com/download/win <https://git-scm.com/download/win>`_.
* חובה לשים לב לנתיב התקנת git. תצטרכו אותו בהמשך.

.. image:: ../images/Update_GitPath.png
  :alt: Git installation path

2. הגדירו נתיב git ב-Android Studio
--------------------------------------------------
* Open File > Settings 

  .. image:: ../images/Update_GitSettings1.png
    :alt: Android Studio - open settings

* לחצו על המשולש הקטן שליד Version Control (1.) כדי לפתוח את תפריט המשנה.
* לחצו על Git (2.).
* ודא ששיטת העדכון "Merge" (3.) נבחרה.
* בדקו אם Android Studio יכול לאתר נתיב ל-git.exe באופן אוטומטי על ידי לחיצה על הכפתור "Test" (4.)

  .. image:: ../images/AndroidStudio361_09.png
    :alt: Android Studio settings

* אם ההגדרה האוטומטית מצליחה תוצג גרסת git.
* לחצו על "OK" בתיבת הדו-שיח (1.) OK" בחלון ההגדרות (2.).

  .. image:: ../images/AndroidStudio361_10.png
    :alt: Automatic git installation succeeded

* במקרה שלא ניתן למצוא את הקובץ git.exe לחצו על "OK" בתיבת הדו-שיח (1.) ולאחר מכן על הכפתור עם שלוש הנקודות (2.).
* השתמש ב`פונקציית חיפוש <https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html>`_ ב-Windows Explorer כדי למצוא את "git.exe" אם אינכם בטוחים היכן ניתן למצוא אותו. אתם מחפשים את git.exe שנמצא בתיקייה \bin\.
* בחרו את הנתיב אל git.exe וודאו שבחרתם את זה שבתיקיית **\\bin\\** (3.) ולחצו על "אישור" (4.).
* סגרו את חלון ההגדרות על ידי לחיצה על כפתור "OK" (5.).

  .. image:: ../images/AndroidStudio361_11.png
    :alt: Automatic git installation failed
 
3. אתחל מחדש
--------------------------------------------------
* הפעילו מחדש את המחשב כדי לעדכן את סביבת המערכת.

4. בדקו את הגדרות git ב-Android Studio
--------------------------------------------------
* פתחו את חלון ה-Terminal ב-Android Studio
* הזינו ``git --version`` (ללא מרכאות וללא רווחים בין סימני המינוס) והקישור אנטר

  .. image:: ../images/AndroidStudio_gitversion1.png
    :alt: git - -version

* אם git מותקן ומחובר כהלכה יופיע מידע על הגרסה המותקנת שנראה כך:

  .. image:: ../images/AndroidStudio_gitversion2.png
    :alt: result git-version

מקינטוש
==================================================
כל גרסה של git תתאים. לדוגמה `https://git-scm.com/download/mac <https://git-scm.com/download/mac>`_
השתמשו ב-homebrew כדי להתקין git: ```$ brew install git```.
* לפרטים על התקנת git ראו את `מסמכי git הרשמיים <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>`_.
* אם אתם מתקינים git דרך homebrew אין צורך לשנות שום העדפות. ליתר ביטחון: ניתן למצוא אותם כאן: Android Studio > Preferences.
