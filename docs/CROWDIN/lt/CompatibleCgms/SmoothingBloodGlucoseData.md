# Gliukozės duomenų glodinimas

Jei **KG** duomenys šokinėja arba yra triukšmingi, **AAPS** gali neteisingai dozuoti insuliną. Dėl to gliukozės kiekis gali tapti per didelis arba per mažas. Jei pastebite klaidų arba jūsų NGJ duomenys šokinėja, svarbu išjungti ciklą, kol problema bus išspręsta. Priklausomai nuo NGJ, tokias problemas gali sukelti NGJ konfigūracija **AAPS** programėlėje (kaip paaiškinta toliau) arba problema jutiklio įvedimo vietoje (tada gali tekti pakeisti jutiklį).

## Smoothing data within AAPS

**AAPS** leidžia glodinti duomenis pačioje **AAPS**, o ne NGJ programėlėje. Atverkite **meniu** (☰), pasirinkite [**Konfigūracija**](../SettingUpAaps/ConfigBuilder.md), tada **Glodinimas**. Yra keturios parinktys, bet vienu metu gali būti aktyvi tik viena: **Be glodinimo**, **Eksponentinis glodinimas**, **Vidutinis glodinimas** ir **Unscented Kalman Filter**.

![Konfigūracija > Glodinimas](../images/v4/Configuration/configuration_smoothing.png)

### Exponential smoothing

In general, this is the recommended option to start with, as it is most aggressive in resolving noise and rewrites the most recent value. However, see the table below for other specific recommendations.

### Average smoothing

This option works similar to back smoothing that was previously implemented on certain CGM platforms. It is more reactive to recent changes in BG value and therefore more prone to responding incorrectly to noisy CGM data.

### No Smoothing

Šią parinktį naudokite tik tada, jei duomenų rinkimo programėlė tinkamai glodina jūsų NGJ duomenis prieš perduodama juos į **AAPS**.

### Unscented Kalman Filter (UKF)

Ši parinktis naudoja statistinį modelį. Jis nuolat vertina tikrąją jūsų gliukozės reikšmę ir jos kitimo greitį pagal gaunamus (galbūt triukšmingus) rodmenis ir automatiškai prisitaiko prie to, kiek triukšmingas dabar yra jūsų jutiklis. Ji taip pat aptinka ir atmeta staigius, neįprastus rodmenis. Tai pažangesnė alternatyva eksponentiniam ir vidutiniam glodinimui. Ji naudinga, jei norite, kad glodinimas pats prisitaikytų prie kintančio jutiklio triukšmo lygio, o ne naudotų vieną fiksuotą metodą.

(smoothing-xdrip-dexcom-g6)=

## Suggestions to use smoothing

Glodinimo metodą taip pat galite keisti automatiškai, pavyzdžiui, pagal jutiklio amžių, naudodami [automatizacijos veiksmą](#automations-automation-action) **Keisti glodinimą**.

|               | Exponential |  Average  | No Smoothing |
| ------------- |:-----------:|:---------:|:------------:|
| G5/G6/ONE     |  If noisy   |           | Recommended  |
| G7/ONE+/Stelo |  If noisy   | If stable |              |

Libre jutiklių duomenys būna triukšmingi, todėl gali reikėti glodinimo. Kai naudojate tiesioginį xDrip ryšį arba pataisytos programėlės duomenų šaltinį (duomenys gaunami iš kitos programėlės, taip pat ir iš Juggluco), [duomenys jau glodinami pačioje programėlėje](#libre2-value-smoothing-raw-values).

| Jutiklis / duomenų šaltinis | Juggluco  | xDrip tiesioginis ryšys | xDrip tiltas (bridge) | xDrip pataisyta programėlė |
| --------------------------- |:---------:|:-----------------------:|:---------------------:|:--------------------------:|
| Libre 1/14 days/Pro         | Netaikoma |        Netaikoma        |        Average        |         Netaikoma          |
| Libre 2/2+ (EU)             |  Average  |          None           |        Average        |            None            |
| Libre 2/2+/3/3+             |  Average  |        Netaikoma        |       Netaikoma       |            None            |
