# Omogenizarea datelor de glicemie

Dacă datele **glicemice** sunt săltărețe/zgomotoase, **AAPS** poate doza incorect insulina ceea ce duce la valori mari sau mici ale glicemiei. If you observe errors in your CGM data it is important to disable the loop until the problem is resolved. În funcție de CGM, astfel de probleme se pot datora configurației CGM din **AAPS** (după cum se explică mai jos); sau o problemă a locului de inserare al senzorului CGM (care poate necesita înlocuirea senzorului CGM).

## Smoothing data within AAPS

De la **AAPS** versiunea 3.2, **AAPS** oferă opțiunea de a omogeniza datele în **AAPS** mai degrabă decât în aplicația CGM. Există trei opțiuni disponibile în [Constructor > Omogenizare](../SettingUpAaps/ConfigBuilder.md).

![Omogenizare](../images/ConfBuild_Smoothing.png)

### Omogenizare exponențială

În general, aceasta este opțiunea recomandată pentru început, deoarece este cea mai agresivă opțiune pentru rezolvarea zgomotului și rescrie cea mai recentă valoare. Cu toate acestea, vedeți tabelul de mai jos pentru alte recomandări specifice.

### Omogenizare medie

This option works similar to back smoothing that was previously implemented on certain CGM platforms. It is more reactive to recent changes in BG value and therefore more prone to responding incorrectly to noisy CGM data.

### No Smoothing

Utilizați această opțiune numai dacă datele CGM sunt uniformizate corespunzător de aplicația colector înainte de a fi transmise la **AAPS**.

(smoothing-xdrip-dexcom-g6)=

## Suggestions to use smoothing

|               | Exponential |       Medie       |    Nimic    |
| ------------- |:-----------:|:-----------------:|:-----------:|
| G5/G6/ONE     |  If noisy   |                   | Recommended |
| G7/ONE+/Stelo |  If noisy   | Dacă este stabilă |             |

Senzorii Libre sunt zgomotoși și pot necesita omogenizare. Când se utilizează conexiunea directă xDrip+, sau sursa de date a aplicației modificată (se primește de la o altă aplicație, Juggluco inclus), [omogenizarea este deja făcută în cadrul aplicației](#libre2-value-smoothing-raw-values).

| Senzor / sursă de date | Juggluco | direct xDrip+ | punte xDrip+ | aplicație xDrip+ modificată |
| ---------------------- |:--------:|:-------------:|:------------:|:---------------------------:|
| Libre 1/14 zile/Pro    |   N.A.   |     N.A.      |    Medie     |            N.A.             |
| Libre 2/2+ (EU)        |  Medie   |     Nimic     |    Medie     |            Nimic            |
| Libre 2/2+/3/3+        |  Medie   |     N.A.      |     N.A.     |            Nimic            |
