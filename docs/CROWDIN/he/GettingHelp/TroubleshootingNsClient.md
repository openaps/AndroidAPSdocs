(Troubleshooting-NSClient-troubleshooting-nsclient)=

# פתרון תקלות ב-NSClient

NSClient relies on stable communication with Nightscout. An unstable connection leads to synchronization errors and high data usage.

If nobody is following you on Nightscout you can choose to pause NSClient to save battery life or you can choose to setup NSClient so that it only connects when on Wi-Fi and/or during charging.

* How to detect an unstable connection?

יש לפתוח את מסך NSClient (**הגדרות תצורה** > **תקשורת** > **NSClientV3** > **פתיחת תוסף**) ולעקוב אחרי **מצב** ואחרי היומן. כאשר websockets מופעלים, המצב אמור להישאר "connected" (מחובר), וביומן כמעט לא אמורות להופיע הודעות על התחברות מחדש. If you see many reconnections, then there is a problem.

* Restart

כצעד ראשון, יש להפעיל מחדש את Nightscout ואחר כך את הטלפון, כדי לראות אם הבעיה נשארת.

אם Nightscout שלכם מתארח ב־Heroku, ניתן להפעילו מחדש כך: התחברו ל־Heroku, לחצו על שם אפליקציית nightscout שלכם, לחצו על תפריט 'More' ואז על 'Restart all dynos'.

For other hosts, please follow your hosts guidance documentation.

* Phone issues

Android may put your phone into a sleep mode. בדקו אם הוגדרה החרגה עבור AAPS באפשרויות צריכת החשמל של הטלפון, כדי לאפשר לו לפעול ברקע כל הזמן.

Check the NSClient again when in strong network signal location.

Try another phone.

* Nightscout

If your site is hosted on Azure, many people have found that connection issues have improved since moving to Heroku.

A workaround to connection issues in Azure is to set in Application settings HTTP protocol to 2.0 and Websockets to ON

* No BG reading from Nightscout

אם **AAPS** מתחבר ל-Nightscout כראוי, אבל ערך הסוכר מוצג כ-N/A: ב[הגדרות NSClientV3](#Preferences-nsclient) יש לפתוח את **סנכרון** ולהפעיל את **קבלת נתוני CGM מ־Nightscout**. אפשרות זו מוסתרת כאשר השליטה ממכשיר לקוח מופעלת ([מצב מוקשח](#client-master-control-hardened-mode)); במקרה זה יש לוודא ש**נתוני סוכר מ-NSClient** נבחר ב**הגדרות תצורה** ← **מקור ערכי הסוכר**.

* If you still get an error...

Check the size of your database in MongoDB (or via the database size plugin in nightscout). If you are using the free tier in MongoDB, 496MB means it is full and needs to be cleaned up. [פעלו לפי הוראות Nightscout אלה לבדיקת גודל מסד הנתונים ולמחיקת נתונים](https://nightscout.github.io/troubleshoot/troubleshoot/#database-full).

Before clearing data from your database and if you haven't already set it up, you should consider donating your AAPS data to the Open Humans project (for research). The instructions are on the [OpenHumans configuration page](../SupportingAaps/OpenHumans.md).