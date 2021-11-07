מהי מערכת לולאה סגורה ב-AndroidAPS?
**************************************************

AndroidAPS היא אפליקציה הפועלת כמערכת לבלב מלאכותי (APS) בסמארטפון אנדרואיד. מהי מערכת לבלב מלאכותי? זוהי תוכנה שמטרתה לעשות את מה שעושה לבלב טבעי: לשמור על רמות הסוכר בדם בטווח בריא באופן אוטומטי. 

מערכת לבלב מלאכותי לא יכולה לעשות את העבודה כמו לבלב ביולוגי, אבל יכולה להקל על ניהול סוכרת מסוג 1 באמצעות מכשירים זמינים מסחרית ותוכנה פשוטה ובטוחה. מכשירים אלה כוללים חיישן גלוקוז רציף (CGM) כדי לדווח ל-AndroidAPS על רמות הסוכר בדם ומשאבת אינסולין בה היא שולטת כדי לספק מינונים מתאימים של אינסולין. האפליקציה מתקשרת עם מכשירים אלה באמצעות בלוטות'.
 היא מבצעת את חישובי המינון שלה באמצעות אלגוריתם, או מערכת כללים, שפותחה עבור מערכת לבלב מלאכותית אחרת, בשם OpenAPS, לה אלפי משתמשים וצברה מיליוני שעות שימוש. 

הערת זהירות: AndroidAPS אינה עוברת רגולציה על ידי אף רשות רפואית באף מדינה. השימוש ב-AndroidAPS הוא בעצם ביצוע ניסוי רפואי על עצמכם.
 הקמת המערכת דורשת נחישות ויכולת טכנית.
 אם עדיין אין לכם את הידע הטכני בהתחלה, עד סיום התהליך אתם תרכשו אותו. את כל המידע הדרוש ניתן למצוא במסמכים באתר זה, במקומות אחרים באינטרנט, או אצל אחרים שכבר עשו זאת -- מומלץ לשאול בקבוצות פייסבוק או בפורומים אחרים. אנשים רבים בנו להם בהצלחה את AndroidAPS וכעת משתמשים בו בצורה בטוחה לחלוטין, אך חיוני שכל משתמש:

* יבנה את המערכת בעצמו כך שיבין היטב איך היא עובדת

* יתאים את אלגוריתם המינון האישי שלו יחד צוות הסוכרת שלו כך שיעבוד בצורה מושלמת ככל האפשר
* יתחזק וינטר את המערכת כדי לוודא שהיא פועלת כראוי

.. הערה:: 
	**כתב ויתור ואזהרה** 


	* All information, thought, and code described here is intended for informational and educational purposes only. Nightscout currently makes no attempt at HIPAA privacy compliance. Use Nightscout and AndroidAPS at your own risk, and do not use the information or code to make medical decisions.

	* Use of code from github.com is without warranty or formal support of any kind. Please review this repository's LICENSE for details.

	* All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Their use is for information purposes and does not imply any affiliation with or endorsement by them.

	Please note - this project has no association with and is not endorsed by: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <https://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <https://www.accu-chek.com/>`_, `Insulet <https://www.insulet.com/>`_ or `Medtronic <https://www.medtronic.com/>`_.
	
If you're ready for the challenge, please read on. 

Primary goals behind AndroidAPS
==================================================

* An app with safety built in. To read about the safety features of the algorithms, known as oref0 and oref1, click here (https://openaps.org/reference-design/)
* An all-in-one app for managing type 1 diabetes with an artificial pancreas and Nightscout
* An app to which users can easily add or remove modules as needed
* An app with different versions for specific locations and languages.
* An app which can be used in open- and closed-loop mode
* An app that is totally transparent: users can input parameters, see results, and make the final decision
* An app which is independent of particular pump drivers and contains a "virtual pump" so users can safely experiment before using it on themselves 
* An app closely integrated with Nightscout
* An app in which the user is in control of safety constraints 

How to start
==================================================
Of course, all of this content here is very important, but can be in the beginning quite confusing.
A good orientation is given by the `Module Overview <../Module/module.html>`_ and the `Objectives <../Usage/Objectives.html>`_. You can also take a look on the `sample setup with Dana, Dexcom and Sony Smartwatch <../Getting-Started/Sample-Setup.html>`_.
 
