# Jelly

## Jelly Star Mini

**Features**

* Android 13
* 8 ГБ RAM

**Переваги**

* Він дуже маленький.
* Навіть якщо ви скажете людям, вони можуть не вважати його звичайним смартфоном і легше приймуть його як виняток там, де телефони зазвичай заборонені.

**Недоліки**

* Рекомендовано лише для досвідчених користувачів петлі (деякі налаштування важко впізнати, вам треба знати з досвіду роботи з AAPS на великому Android-телефоні, що і де розташовано. Деякі кнопки AAPS важко натиснути, тут потрібна точність, товсті пальці не допоможуть.)
* Можна використовувати лише як телефон для петлі. Краще мати звичайний смартфон у кишені. 

### Оптимізація роботи батареї

Jelly має сильні функції оптимізації, які **треба** вимкнути для AAPS (та інших DIY-застосунків, як-от BYODA, xDrip, OOP2, Juggluco тощо).

![](../images/Jelly_Settings1.png)

Ви можете залишити Intelligent assistance увімкненим, але його **треба вимкнути для DIY-застосунків**.

![](../images/Jelly_Settings2.png)

Ви можете увімкнути NFC для сенсорів Libre.

![](../images/Jelly_Settings3.png)

### Оптимізація роботи батареї

Щоб уникнути перешкод для **AAPS**, обмеження «battery usage» на Jelly Star треба вимкнути, вибравши «unrestricted» для **AAPS** (та для інших **DIY-застосунків**, як-от BYODA, xDrip, OOP2, Juggluco тощо).

![Jelly_BatterY_1ACA756A-2EC4-4623-B8C4-2CEB9D230A93](../images/JellyStarMini1.jpg)

### Google Play Protect

Не забудьте вимкнути Google Play Protect.

### Remote Connection для Wear apk

Для деяких смарт-годинників, як-от Samsung Galaxy, параметр «Remote Connection» у розділі Advanced Features годинника Samsung Galaxy має бути **увімкнений**, щоб використовувати Jelly, **Wear.apk** та **AAPS** віддалено через Wi-Fi.

![Galaxy Wearable, Advanced features, Remote connection switched on](../images/wearos/galaxy_wearable_remote_connection.png)