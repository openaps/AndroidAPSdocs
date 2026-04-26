# Dexcom G7 and ONE+


## Fundamental in advance

Noteworthy is the fact that the G7 and ONE+ systems, compared to the G6, do not smooth the values, neither in the app, nor in the reader. More details about this [here](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

```{admonition} Smoothing method 
Read [Smoothing method](../CompatibleCgms/SmoothingBloodGlucoseData.md) suggestions to use for Dexcom G7/ONE+/Stelo
```

## 1. xDrip+ (direct connection to G7 or ONE+)

- Follow the instructions here: [xDrip+ G7](https://navid200.github.io/xDrip/docs/Dexcom/G7.html)
- Select  xDrip+ in [ConfigBuilder, BG Source](#Config-Builder-bg-source).

- Adjust the xDrip+ settings according to the explanations on the xDrip+ settings page  [xDrip+ settings](../CompatibleCgms/xDrip.md)

## 2.  Patched Dexcom G7 App (DiaKEM)

```{admonition} No new users
:class: warning
Latest Dexcom servers update broke DiaKEM for new installs: the G7 app no longer can get through the login and onboarding process that happens on a fresh install of the app. 
Existing users do not experience issues for now: do not logout, wipe data, or reinstall the G7 app as that will prevent you from getting the app up and running again. If it is already running, you should be unaffected.
New users are recommended to use [xDrip+](https://androidaps.readthedocs.io/en/latest/CompatibleCgms/xDrip.html) as **AAPS'** BG data source until this issue has been resolved.
```

**Note: AAPS 3.2.0.0 or higher is required! Not available for ONE+.**

### Install a new patched (!) G7 app and start the sensor


A patched Dexcom G7 app (DiaKEM) gives access to the Dexcom G7 data. This is not the BYODA app as this app can not receive G7 data at the moment.

- Uninstall the original Dexcom app if you used it before (A running sensor session can be continued - note the sensor code before removal of the app!)

- Download and install the patched.apk [here](https://github.com/authorgambel/g7/releases).

- Enter sensor code in the patched app.

- Follow the general recommendations for CGM hygiene and sensor placement found [here](../CompatibleCgms/GeneralCGMRecommendation.md).

- After the warm-up phase, the values are displayed as usual in the G7 app.

### Configurarea în AAPS

- Selectați 'BYODA' în [Configurator, Sursă glicemie](#Config-Builder-bg-source) - chiar dacă nu este aplicația BYODA!

- Dacă AAPS nu primește valori, comută la o altă sursă de glicemie și apoi înapoi la "BYODA" pentru a apela interogarea pentru aprobarea schimbului de date între AAPS și BYODA.

## 3. xDrip+ (mod companion)

-   Descărcați și instalați xDrip+: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- Ca sursă de date în xDrip+ "Companion App" trebuie selectată și în Setări Avansate > Setări Bluetooth > "Companion Bluetooth" trebuie activat.
-   Selectați xDrip+ în [Configurator, Sursă glicemie](#Config-Builder-bg-source).

-   Adjust the xDrip+ settings according to the explanations on the xDrip+ settings page  [xDrip+ settings](../CompatibleCgms/xDrip.md)

## 4. Juggluco

Versiunea 9.0+ necesară

- Dezactivați aplicația conectată anterior la senzor: Dezinstalați aplicația sau utilizați "Oprire forțată". Dezactivați permisiunea "Dispozitive apropiate" în setările aplicației. Restricționează utilizarea bateriei de către aplicație.

- Uitați senzorul în setările Bluetooth: În setările Android, găsiți senzorul în dispozitivele asociate și selectați "Uitați". Numele senzorilor Dexcom G7 încep cu DXCM.

- Evitați interferențele ale altor senzori: Păstrați senzorii Dexcom vechi în afara razei Bluetooth.

- Conectați senzorul G7 la Juggluco: Deschide Juggluco → Meniul Stânga → Foto. Scanați matricea de date de pe aplicatorul G7 al senzorului. Așteptați până la 5 minute pentru ca Juggluco să găsească senzorul.

- Cerințe de asociere: Acceptați împerecherea senzorului cu Juggluco. Asigurați-vă că ecranul nu este blocat în timpul asocierii. Dacă asocierea eșuează, așteptați 5 minute înainte de a încerca din nou.

- Excepție: Ceasurile cu Wear OS se pot asocia fără a apăsa un buton de acceptare.
