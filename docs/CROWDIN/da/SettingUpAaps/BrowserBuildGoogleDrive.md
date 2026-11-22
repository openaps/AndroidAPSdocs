(aaps-ci-google-drive-auth)=

# Build i browseren – Trin 3: Giv adgang til Google Drive

```{note}
Dette er **trin 3** i [Build i browseren](BrowserBuild.md). Gennemfør først [Trin 2 – Opret dit keystore til signering](BrowserBuildKeystore.md).
```

```{warning}
Uanset hvilken af de forrige vejledninger du fulgte (Mulighed 1 eller Mulighed 2), SKAL du give adgang til Google Drive for at kunne bruge build i browseren.
```

Bemærk: Hvis du allerede har fulgt denne del i videoen, kan du nu springe til [Trin 4 – Byg APK'en](BrowserBuildAPK.md).

```{warning}
Hvis Google-godkendelsen ikke starter, eller forberedelsessiden fejler, så luk forberedelsessiden, åbn `aaps-ci-preparation.html` igen på samme måde som i trin 2, og start dette trin forfra. Se [fejlfinding](#aaps-ci-preparation-web).
```

Gå tilbage til fanen med forberedelsessiden.

Rul ned til afsnittet »Google Drive Auth«, og tryk på »Start Auth«.

![](../images/Building-the-App/CI/BrowserBuildStep44.png)

Vælg din Google-konto.

![](../images/Building-the-App/CI/BrowserBuildGAUTH1.png)

Rul ned, og giv adgang. Websiden skal bruge den for at hente nøglen til Google Drive-godkendelse.

Tryk på »Continue«.

![](../images/Building-the-App/CI/BrowserBuildGAUTH2.png)

Feltet `GDRIVE_OAUTH2` bliver udfyldt. Tryk på den øverste knap »Copy«.

![](../images/Building-the-App/CI/BrowserBuildGAUTH3.png)

Skift tilbage til fanen med GitHub.

Rul ned til »Repository secrets«, og tryk på »New repository secret«.

Hvis du fulgte Mulighed 1, skal du se dette:

![](../images/Building-the-App/CI/BrowserBuildGAUTH4.png)

Hvis du fulgte Mulighed 2, er der flere nøgler:

![](../images/Building-the-App/CI/BrowserBuildGAUTH4b.png)

Indsæt den tekst, du lige har kopieret, i feltet »Name«. Tryk længe på tekstfeltet for at få vist menuen til at indsætte.

![](../images/Building-the-App/CI/BrowserBuildGAUTH5.png)

Skift til fanen med forberedelsessiden.

Tryk på den anden knap »Copy«.

![](../images/Building-the-App/CI/BrowserBuildGAUTH6.png)

Skift tilbage til fanen med GitHub.

1. Indsæt den tekst, du lige har kopieret, i feltet »Secret«. Tryk længe på tekstfeltet for at få vist menuen til at indsætte.

2. Tryk på »Add secret«.

![](../images/Building-the-App/CI/BrowserBuildGAUTH7.png)

Du skal nu have enten to (mulighed 1) eller fem (mulighed 2) secrets.

![](../images/Building-the-App/CI/BrowserBuildGAUTH8.png)

Når APK'en er bygget, kan GitHub nu gemme AAPS-apk-filen i din Google Drive.

----

**Næste: [Trin 4 – Byg APK'en](BrowserBuildAPK.md) →**
