# Setting up the Reporting Server

There are currently two reporting servers available for use with **AAPS**:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Reporting Servers](../images/Building-the-App/ReportingServer.png)

We recommend using Nightscout.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout הוא אפליקציית אינטרנט שיכולה לתעד ולהציג את נתוני ה-CGM ואת נתוני **AAPS** שלכם, ולהפיק דוחות. It is a powerful platform which has been integrated into **AAPS** for many years. It enables users and caregivers to track the patient's diabetes data in near real-time (only a few seconds may pass between data reception and data provision if there is a sufficient Internet connection between all components involved). Nightscout גם מעביר את הפקודות מרחוק שמטפלים שולחים ל-**AAPS** מ-**AAPSClient** (ראו [שליטה בין מכשיר ראשי ↔ מכשיר לקוח](#client-master-control)).

Nightscout is provided as open-source software. Anyone can create and operate a Nightscout server, using either free or paid-for services.

You can find more information on the [website of the Nightscout project](http://nightscout.github.io/).

### Option 1 - Set up your Nightscout server yourself

Creating your Nightscout reporting server can require one or more web-based applications that will require maintenance. In order to have a completely free service, you may need to migrate your Nightscout site and data, if and when providers remove the free tier.

תיאור של הגדרת Nightscout, עם היתרונות והחסרונות של אפשרויות ההפעלה השונות, כולל הערכת עלויות, זמין [כאן](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Option 2 - Pay for a hosted Nightscout service

There are also options from different service providers who host Nightscout for you, with a monthly fee. The costs are manageable, and the advantage of a hosted option is that you do not need to be IT-literate, or have any operating infrastructure.


Existing Nightscout users can reconsider where and how their Nightscout server is hosted from time to time, and change to a different option if it becomes more suitable.

Some Nightscout hosted services are listed [here](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Further configuration of Nightscout

Once you have your Nightscout instance up and running, see [Nightscout configuration page](../SettingUpAaps/Nightscout.md) for additional considerations.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool has been available in **AAPS** since version 3.2 which was released in late 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger
כאשר משתמשים ב-**AAPS**, יש עיכוב של שלוש שעות בין קבלת הנתונים לבין הצגתם בדוחות. לכן Tidepool אינו מתאים לשיתוף מידע בזמן אמת עם מטפלים.  
On the other hand, Tidepool can be a great solution for sharing reports with a patient's endocrinologist if Nightscout is not an accepted solution.  
```

Tidepool is an [open source](https://github.com/tidepool-org) project. It offers to run an account free of charge on the Tidepool servers.

More information about setting up Tidepool with AAPS [here](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has the uploader for Tidepool integrated
:class: note
**אין** צורך להשתמש באפליקציית ההעלאה של Tidepool: **AAPS** יעלה עבורכם את ערכי הסוכר בדם, הטיפולים והבזאלי. You only need a personal account with Tidepool. Do not upload your data with the separate Tidepool uploader tool as it will lead to duplicate values.  
```

## Next step

לאחר הגדרת שרת הדיווח, ניתן להגדיר את **AAPS** בטלפון בעזרת [אשף ההתקנה](./SetupWizard.md), שגם יקשר את **AAPS** לשרת הדיווח שלכם.