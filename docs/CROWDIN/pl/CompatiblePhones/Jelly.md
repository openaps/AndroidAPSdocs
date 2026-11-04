# Jelly

## Jelly Star Mini

**Funkcje**

* Android 13
* 8 GB RAM

**Zalety**

* Jest naprawdę mały.
* Nawet jeśli powiesz o nim innym, mogą nie uznać go za zwykły smartfon i łatwiej zaakceptują go jako wyjątek tam, gdzie telefony zwykle są zakazane.

**Wady**

* Polecany tylko dla doświadczonych użytkowników pętli. Niektóre ustawienia trudno rozpoznać: musisz wiedzieć z doświadczenia z dużym telefonem z Androidem i AAPS, co i gdzie się znajduje. Niektóre przyciski AAPS są małe i trudno je nacisnąć: potrzebujesz precyzyjnego dotyku, a nie grubych palców.
* Może służyć tylko jako telefon do pętli. Lepiej mieć w kieszeni także zwykły smartfon. 

### Optymalizacja baterii

Jelly ma silne funkcje optymalizacji, które **musisz** wyłączyć dla AAPS (i innych aplikacji DIY, takich jak BYODA, xDrip, OOP2, Juggluco itp.).

![](../images/Jelly_Settings1.png)

Możesz zostawić włączoną funkcję Intelligent assistance (inteligentna pomoc), ale **musi być wyłączona dla aplikacji DIY**.

![](../images/Jelly_Settings2.png)

Możesz włączyć NFC dla sensorów Libre.

![](../images/Jelly_Settings3.png)

### Optymalizacja baterii

Aby uniknąć zakłóceń w pracy **AAPS**, wyłącz w Jelly Star ograniczenia „użycia baterii” (battery usage), wybierając „bez ograniczeń” (unrestricted) dla **AAPS** (i dla innych **aplikacji DIY**, takich jak BYODA, xDrip, OOP2, Juggluco itp.).

![Jelly_BatterY_1ACA756A-2EC4-4623-B8C4-2CEB9D230A93](../images/JellyStarMini1.jpg)

### Google Play Protect

Pamiętaj, aby wyłączyć Google Play Protect.

### Połączenie zdalne dla Wear apk

W przypadku niektórych smartwatchy, np. Samsung Galaxy, opcja „Połączenie zdalne” (Remote connection) w Funkcjach zaawansowanych w aplikacji Galaxy Wearable musi być **włączona**, aby używać Jelly, **Wear.apk** i **AAPS** zdalnie przez Wi-Fi.

![Galaxy Wearable, Funkcje zaawansowane, Połączenie zdalne włączone](../images/wearos/galaxy_wearable_remote_connection.png)