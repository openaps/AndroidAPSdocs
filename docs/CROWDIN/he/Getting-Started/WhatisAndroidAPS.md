# What is a closed loop system with AAPS?

AAPS is an app that acts as an artificial pancreas system (APS) on an Android smartphone. מהי מערכת לבלב מלאכותי? זוהי תוכנה שמטרתה לעשות את מה שעושה לבלב טבעי: לשמור על רמות הסוכר בדם בטווח בריא באופן אוטומטי.

מערכת לבלב מלאכותי לא יכולה לעשות את העבודה כמו לבלב ביולוגי, אבל יכולה להקל על ניהול סוכרת מסוג 1 באמצעות מכשירים זמינים מסחרית ותוכנה פשוטה ובטוחה. Those devices include a continuous glucose monitor (CGM) to tell AAPS about your blood sugar levels and an insulin pump which AAPS controls to deliver appropriate doses of insulin. האפליקציה מתקשרת עם מכשירים אלה באמצעות בלוטות'. היא מבצעת את חישובי המינון שלה באמצעות אלגוריתם, או מערכת כללים, שפותחה עבור מערכת לבלב מלאכותית אחרת, בשם OpenAPS, לה אלפי משתמשים וצברה מיליוני שעות שימוש.

A note of caution: AAPS is not regulated by any medical authority in any country. Using AAPS is essentially carrying out a medical experiment on yourself. הקמת המערכת דורשת נחישות ויכולת טכנית. אם עדיין אין לכם את הידע הטכני בהתחלה, עד סיום התהליך אתם תרכשו אותו. את כל המידע הדרוש ניתן למצוא במסמכים באתר זה, במקומות אחרים באינטרנט, או אצל אחרים שכבר עשו זאת -- מומלץ לשאול בקבוצות פייסבוק או בפורומים אחרים. Many people have successfully built AAPS and are now using it entirely safely, but it is essential that every user:

- Builds the system themselves so that they thoroughly understand how it works
- Adjusts its individual dosage algorithm with his or her diabetes team to work nearly perfect
- Maintains and monitors the system to ensure it is working properly

```{note}
**Disclaimer and Warning**

- All information, thought, and code described here is intended for informational and educational purposes only. Nightscout לא עושה כרגע ניסיון לתאימות לפרטיות HIPAA. 
 Use Nightscout and AAPS at your own risk, and do not use the information or code to make medical decisions.
- Use of code from github.com is without warranty or formal support of any kind. אנא עיינו ברישיון של מאגר זה לפרטים.

- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. השימוש בהם הוא למטרות מידע ואינו מרמז על כל זיקה או אישור על ידם. 


Please note - this project has no association with and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) or [Medtronic](https://www.medtronic.com/).
```

אם אתם מוכנים לאתגר, המשיכו לקרוא.

## Primary goals behind AAPS

- An app with safety built in. To read about the safety features of the algorithms, known as oref0 and oref1, click here (<https://openaps.org/reference-design/>)
- An all-in-one app for managing type 1 diabetes with an artificial pancreas and Nightscout
- An app to which users can easily add or remove modules as needed
- An app with different versions for specific locations and languages.
- An app which can be used in open- and closed-loop mode
- An app that is totally transparent: users can input parameters, see results, and make the final decision
- An app which is independent of particular pump drivers and contains a "virtual pump" so users can safely experiment before using it on themselves
- An app closely integrated with Nightscout
- An app in which the user is in control of safety constraints

## איך מתחילים?

כמובן, כל התוכן הזה כאן הוא מאוד חשוב, אך יכול לבלבל בהתחלה. A good orientation is given by the [Module Overview](../Module/module.md) and the [Objectives](../Usage/Objectives.html).
