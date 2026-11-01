(aaps-ci-google-drive-auth)=

# Nettleserbygg – Steg 3: Autoriser Google Drive

```{note}
Dette er **steg 3** av [Nettleserbygg](BrowserBuild.md). Fullfør først [Steg 2 – Lag keystore-filen for signering](BrowserBuildKeystore.md).
```

```{warning}
Uansett hvilken av de forrige instruksjonene du fulgte (alternativ 1 eller alternativ 2), MÅ du legge til Google Drive-autorisasjonen for at nettleserbygget skal fungere.
```

Merk: Hvis du allerede har fulgt denne delen i videoen, kan du nå hoppe til [Steg 4 – Bygg APK-filen](BrowserBuildAPK.md).

```{warning}
Hvis Google-autorisasjonen ikke starter, eller forberedelsessiden feiler, lukk forberedelsessiden, åpne `aaps-ci-preparation.html` på nytt på samme måte som i steg 2, og start dette steget på nytt. Se [feilsøking](#aaps-ci-preparation-web).
```

Gå tilbake til fanen med forberedelsessiden.

Bla ned til delen Google Drive Auth og trykk Start Auth.

![](../images/Building-the-App/CI/BrowserBuildStep44.png)

Velg Google-kontoen din.

![](../images/Building-the-App/CI/BrowserBuildGAUTH1.png)

Bla ned og godta tilgangen. Nettsiden trenger den for å hente autentiseringsnøkkelen for Google Drive.

Trykk Continue.

![](../images/Building-the-App/CI/BrowserBuildGAUTH2.png)

Feltet `GDRIVE_OAUTH2` fylles ut; trykk på den øverste Copy-knappen.

![](../images/Building-the-App/CI/BrowserBuildGAUTH3.png)

Bytt tilbake til GitHub-fanen.

Bla ned til Repository secrets og trykk New repository secret.

Hvis du fulgte alternativ 1, skal du se dette:

![](../images/Building-the-App/CI/BrowserBuildGAUTH4.png)

Hvis du fulgte alternativ 2, er det flere nøkler:

![](../images/Building-the-App/CI/BrowserBuildGAUTH4b.png)

I feltet Name limer du inn teksten du nettopp kopierte. Trykk og hold på tekstboksen for å vise lim inn-menyen.

![](../images/Building-the-App/CI/BrowserBuildGAUTH5.png)

Bytt til fanen med forberedelsessiden.

Trykk på den andre Copy-knappen.

![](../images/Building-the-App/CI/BrowserBuildGAUTH6.png)

Bytt tilbake til GitHub-fanen.

1. I feltet Secret limer du inn teksten du nettopp kopierte. Trykk og hold på tekstboksen for å vise lim inn-menyen.

2. Trykk Add secret.

![](../images/Building-the-App/CI/BrowserBuildGAUTH7.png)

Du skal nå ha enten to (alternativ 1) eller fem (alternativ 2) oppføringer under secrets.

![](../images/Building-the-App/CI/BrowserBuildGAUTH8.png)

GitHub kan nå lagre AAPS-APK-filen i din Google Drive når den er bygget.

----

**Neste: [Steg 4 – Bygg APK-filen](BrowserBuildAPK.md) →**
