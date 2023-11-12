# Nightscout

(Nightscout-security-considerations)=

## שיקולי ביטחון

Besides reporting Nightscout can also be used to control AAPS. I.e. you can set temp targets or add future carbs. This information will be picked up by AAPS and it will act correspondingly. Therefore it is worth thinking about securing your Nightscout website.

### הגדרות Nightscout

You can deny public access to your Nightscout site by using [authentication roles](https://nightscout.github.io/nightscout/security).

### הגדרות AAPS

There is an NS upload only (no sync) function in AAPS settings. By doing so AAPS will not pick up changes done in Nightscout such as temp targets or future carbs.

* הקישו על תפריט 3 נקודות בפינה הימנית העליונה במסך הבית של ה-AAPS שלך.
* בחרו "העדפות".
* גללו מטה והקישו על "הגדרות מתקדמות".
* הפעילו "העלאה בלבד ל-NS"

![Nightscout upload only](../images/NSsafety.png)

### הגדרות אבטחה נוספות

Keep your phone up to date as described in [safety first](../Getting-Started/Safety-first.md).

(Nightscout-manual-nightscout-setup)=

## הגדרה ידנית של Nightscout

It is assumed you already have a Nightscout site, if not visit the [Nightscout](http://nightscout.github.io/nightscout/new_user/) page for full instructions on set up, the instructions below are then settings you will also need to add to your Nightscout site. Your Nightscout site needs to be at least version 10 (displayed as 0.10...), so please check you are running the [latest version](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version) otherwise you will get an error message on your AAPS app. Some people find looping uses more than the azure free quota allowed, so heroku is the preferred choice.

* גלשו ל-https://herokuapp.com/

* לחצו על שם אפליקציית ה-Nightscout שלכם.

* Settings > "Reveal Config Variables" (heroku)

* הוסיפו או ערכו את המשתנים באופן הבא:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * ניתן להגדיר אזעקות שונות ל[ניטור המשאבה](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), מומלץ במיוחד אחוז הסוללה: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

![Azure](../images/nightscout1.png)

* לחצו על "Save" בחלק העליון של הלוח.

## Nightscout as a paid SaaS (Software as a Service)

While Nightscout is an free open source software which you can download yourself free of charge you need

1. a cloud service provider to host your own Nightscout instance

2. invest time to setup your Nightscout instance and MongoDB and

3. operate your Nightscout instance which can be as easy as updating from time to time the Nightscout instance or much more complex if errors occur.

An alternative can be to pay for these SaaS services and get rid of these tasks.

Here you find a randomly ordered list of possible service providers. We will not recommend any of them but we want to give new users a place to jump to their web site and inform themself!

[![ns.10be.de](../images/ns.10be.de-logo_halb_klein.jpg)](https://ns.10be.de/en/index.html)

[![T1Pal](../images/t1_pal_bear_bw.png)](https://t1pal.com/)