(github-fork)=

# בנייה בדפדפן – שלב 1: יצירת fork ב-GitHub

```{note}
זהו **שלב 1** של [בנייה בדפדפן](BrowserBuild.md).
```

יהיה צורך לשמור ב-GitHub את מפתח ה-Java האישי שלכם ל-Android ואת פרטי Google Drive כסודות (secrets) (בהמשך נסביר איך).

מכיוון שאי אפשר לעשות זאת בתוך המאגר הציבורי של AndroidAPS, יש ליצור עותק אישי של קוד המקור (שנקרא fork).

## חשבון GitHub

אם עדיין אין לכם חשבון GitHub, יש [ליצור חשבון GitHub](https://github.com/signup).  
אפשר להירשם עם כתובת דוא"ל או עם חשבון Google. יש לבצע את תהליך ההרשמה והאימות.

כשיש לכם חשבון, [התחברו ל-GitHub](https://github.com/login).

## יצירת fork של AndroidAPS

פתחו את המאגר הרשמי של AndroidAPS דרך [הקישור הזה](https://github.com/nightscout/AndroidAPS).

הקישו על סמל ה-fork. כך נוצר עותק בתוך החשבון שלכם.

![fork_aaps](../images/Building-the-App/CI/ForkAAPS.png)

גללו למטה במסך הבא והקישו על **Create Fork**.

![fork_aaps_confirm](../images/Building-the-App/CI/ForkAAPS2.png)

*הערה: אם תרצו לבנות גרסאות למפתחים או גרסאות מותאמות אישית, אפשר **לבטל את הסימון** של "Copy the master branch only".*

![fork_aaps_main](../images/Building-the-App/CI/ForkAAPS3.png)

```{note}
לא ניתן ליצור fork ומופיעה ההודעה הזו?<br/><br/>
**`No available destinations to fork this repository.`**<br/><br/>
![Already forked](../images/Building-the-App/CI/ForkAAPS3b.png)<br/><br/>
המשמעות היא שכבר יש לכם fork קיים של AndroidAPS.<br/>
יש לוודא שהוא מעודכן ולהמשיך לשלבי ההכנה.
```

```{warning}
**לעולם אין למחוק את ה-fork בלי לגבות קודם את ה-secrets שלכם!**
```

GitHub מציג עכשיו את העותק האישי שלכם של AndroidAPS. השאירו את לשונית הדפדפן הזו פתוחה.

![forked_aaps](../images/Building-the-App/CI/ForkAAPS4.png)

----

**הבא: [שלב 2 – יצירת keystore לחתימה](BrowserBuildKeystore.md) →**
