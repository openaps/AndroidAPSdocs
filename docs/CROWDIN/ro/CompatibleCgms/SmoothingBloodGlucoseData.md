# Omogenizarea datelor de glicemie

Dacă datele **glicemice** sunt săltărețe/zgomotoase, **AAPS** poate doza incorect insulina ceea ce duce la valori mari sau mici ale glicemiei. If you observe errors or experience jumpy data with your CGM it is important to disable the loop until the problem is resolved. În funcție de CGM, astfel de probleme se pot datora configurației CGM din **AAPS** (după cum se explică mai jos); sau o problemă a locului de inserare al senzorului CGM (care poate necesita înlocuirea senzorului CGM).

## Omogenizarea datelor în AAPS

**AAPS** offers the option to smooth the data within **AAPS** rather than within the CGM app. Open the **menu** (☰), select [**Configuration**](../SettingUpAaps/ConfigBuilder.md), then **Smoothing**. There are four options, and only one can be active at a time: **No smoothing**, **Exponential smoothing**, **Average smoothing** and **Unscented Kalman Filter**.

![Configuration > Smoothing](../images/v4/Configuration/configuration_smoothing.png)

### Omogenizare exponențială

În general, aceasta este opțiunea recomandată pentru început, deoarece este cea mai agresivă opțiune pentru rezolvarea zgomotului și rescrie cea mai recentă valoare. Cu toate acestea, vedeți tabelul de mai jos pentru alte recomandări specifice.

### Omogenizare medie

Această opțiune funcționează similar cu netezirea care a fost implementată anterior pe anumite platforme CGM. Este mai reactivă la modificările recente ale valorii glicemiei și, prin urmare, mai predispusă la un răspuns incorect la datele zgomotoase de la CGM.

### Fără netezire

Utilizați această opțiune numai dacă datele CGM sunt uniformizate corespunzător de aplicația colector înainte de a fi transmise la **AAPS**.

### Unscented Kalman Filter (UKF)

This option uses a statistical model to continuously estimate your true glucose value and its rate of change from the incoming (possibly noisy) readings, automatically adapting to how noisy your sensor currently is. It also detects and rejects sudden outlier readings. It is a more advanced alternative to Exponential and Average smoothing, useful if you want the smoothing to adjust itself to your sensor's changing noise level rather than using a fixed method.

(smoothing-xdrip-dexcom-g6)=

## Sugestii de utilizare a omogenizării

You can also change the smoothing method automatically, for example depending on the sensor age, with the **Change smoothing** [Automation action](#automations-automation-action).

|               |    Exponențial     |       Medie       | Fără netezire |
| ------------- |:------------------:|:-----------------:|:-------------:|
| G5/G6/ONE     | Dacă este zgomotos |                   |  Recomandat   |
| G7/ONE+/Stelo | Dacă este zgomotos | Dacă este stabilă |               |

Senzorii Libre sunt zgomotoși și pot necesita netezire. When using xDrip direct connection, or the patched app data source (receiving from another app, Juggluco included), [smoothing is already done inside the app](#libre2-value-smoothing-raw-values).

| Senzor / sursă de date | Juggluco | xDrip direct | xDrip bridge | xDrip patched app |
| ---------------------- |:--------:|:------------:|:------------:|:-----------------:|
| Libre 1/14 zile/Pro    |   N.A.   |     N.A.     |    Medie     |       N.A.        |
| Libre 2/2+ (EU)        |  Medie   |    Nimic     |    Medie     |       Nimic       |
| Libre 2/2+/3/3+        |  Medie   |     N.A.     |     N.A.     |       Nimic       |
