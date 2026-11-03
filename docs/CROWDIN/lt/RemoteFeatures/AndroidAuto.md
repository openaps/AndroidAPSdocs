# Android Auto

**AAPS** gali siųsti jūsų dabartinę būseną kaip pranešimą tiesiai į jūsų automobilio Android Auto.

## Reikalavimai

**AAPS** naudoja Android Auto funkciją, kuri leidžia telefono programėlių pranešimus rodyti automobilio garso sistemos ekrane.

Tai reiškia, kad:

* Android turi leisti **AAPS** rodyti pranešimus, o
* Kadangi **AAPS** nėra oficiali programėlė, Android Auto leiskite naudoti „unknown sources“ (nežinomus šaltinius).

![AAPS NGJ duomenys Android Auto ekrane](../images/android_auto_01.png)

(androidauto-check-that-aaps-can-show-notifications)=

## Patikrinkite, ar AAPS gali rodyti pranešimus

**AAPS** visada rodo būsenos pranešimą su jūsų dabartine glikemija, AIO ir AAO. Šį pranešimą Android Auto rodo automobilyje. **AAPS** nieko įjungti nereikia, bet Android turi leisti **AAPS** rodyti pranešimus.

Telefone atidarykite **Settings** > **Apps** > **AAPS** > **Notifications** (Nustatymai > Programėlės > AAPS > Pranešimai) ir patikrinkite, ar įjungta **All AAPS notifications** (visi AAPS pranešimai).

![Įjungta „All AAPS notifications“ (visi AAPS pranešimai)](../images/android_auto_notifications_all.png)

Slinkite žemyn ir patikrinkite, ar įjungta **Nuolatinės būsenos pranešimai**: tai būsenos pranešimo kanalas.

![Įjungtas pranešimų kanalas „Nuolatinės būsenos pranešimai“](../images/android_auto_ongoing_channel.png)

Prieš eidami prie automobilio, dabar patikrinkite, ar telefone matote **AAPS** būsenos pranešimą!

![AAPS pranešimas telefone](../images/android_auto_04.png)

(androidauto-allow-the-use-of-unknown-sources-with-android-auto)=

## Leiskite Android Auto naudoti „unknown sources“ (nežinomus šaltinius).

Kadangi **AAPS** nėra oficiali Android Auto programėlė, Android Auto reikia įjungti pranešimus iš „unknown sources“ (nežinomų šaltinių). Tam naudojamas kūrėjo režimas. Toliau parodysime, kaip tai padaryti.

Nueikite prie automobilio ir prijunkite telefoną prie automobilio garso sistemos.

Dabar turėtumėte matyti ekraną, panašų į šį.

![Įjunkite kūrėjo režimą](../images/android_auto_05.png)

Paspauskite **setting** (nustatymų) piktogramą, kad pradėtumėte konfigūravimą.

Slinkite žemyn iki puslapio galo ir pasirinkite **see more in the phone** (daugiau telefone).

![Įjunkite kūrėjo režimą](../images/android_auto_06.png)

Dabar telefone įjungsime kūrėjo režimą.

Pirmasis ekranas atrodo taip. Slinkite žemyn iki puslapio galo.

![Įjunkite kūrėjo režimą](../images/android_auto_07.png)

Ten matysite Android Auto versiją. Paspauskite Android Auto versiją 10 kartų (dešimt kartų). Šiuo slaptu veiksmu jūs įjungėte kūrėjo režimą.

![Įjunkite kūrėjo režimą](../images/android_auto_08.png)

Lange „Allow development settings?“ (leisti kūrėjo nustatymus?) patvirtinkite, kad norite įjungti kūrėjo režimą.

![Įjunkite kūrėjo režimą](../images/android_auto_09.png)

Skiltyje **developer settings** (kūrėjo nustatymai) įjunkite „Unknown sources“ (nežinomi šaltiniai).

![Įjunkite kūrėjo režimą](../images/android_auto_10.png)

Dabar, jei norite, galite išjungti kūrėjo režimą. Tam paspauskite trijų taškų meniu viršuje dešinėje.

## Show notifications in car

Automobilio Android Auto ekrane paspauskite **number icon** (skaičiaus piktogramą) apačioje dešinėje.

![Skaičiaus piktograma – Android Auto automobilyje](../images/android_auto_11.png)

Jūsų NGJ duomenys bus rodomi taip:

![AAPS NGJ duomenys Android Auto ekrane](../images/android_auto_01.png)

(android-auto-troubleshooting)=

## KEEP

* Jei pranešimo nematote, patikrinkite, ar Android [leido AAPS rodyti pranešimus](#androidauto-check-that-aaps-can-show-notifications) ir ar [Android Auto turi prieigą prie pranešimų](#androidauto-allow-the-use-of-unknown-sources-with-android-auto).