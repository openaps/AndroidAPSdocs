(aaps-ci-google-drive-auth)=

# Zostavenie v prehliadači – Krok 3: Autorizujte Disk Google

```{note}
Toto je **krok 3** návodu [Zostavenie v prehliadači](BrowserBuild.md). Najprv dokončite [krok 2 – Vytvorte si podpisové úložisko kľúčov](BrowserBuildKeystore.md).
```

```{warning}
Bez ohľadu na to, ktorý z predchádzajúcich postupov ste použili (možnosť 1 alebo možnosť 2), MUSÍTE pridať autorizáciu Disku Google, aby zostavenie v prehliadači fungovalo.
```

Poznámka: ak ste túto časť už urobili podľa videa, môžete teraz prejsť na [krok 4 – Zostavte APK](BrowserBuildAPK.md).

```{warning}
Ak sa autorizácia Google nespustí alebo prípravná stránka zlyhá, zatvorte prípravnú stránku, otvorte `aaps-ci-preparation.html` znova rovnakým spôsobom ako v kroku 2 a začnite tento krok odznova. Pozrite si časť [riešenie problémov](#aaps-ci-preparation-web).
```

Vráťte sa na kartu s prípravnou stránkou.

Posuňte sa nadol do sekcie Google Drive Auth a ťuknite na Start Auth.

![](../images/Building-the-App/CI/BrowserBuildStep44.png)

Vyberte svoj účet Google.

![](../images/Building-the-App/CI/BrowserBuildGAUTH1.png)

Posuňte sa nadol a povoľte prístup. Stránka ho potrebuje na získanie overovacieho kľúča pre Disk Google.

Ťuknite na Pokračovať.

![](../images/Building-the-App/CI/BrowserBuildGAUTH2.png)

Pole `GDRIVE_OAUTH2` sa vyplní; ťuknite na horné tlačidlo Copy.

![](../images/Building-the-App/CI/BrowserBuildGAUTH3.png)

Prepnite sa späť na kartu s GitHubom.

Posuňte sa nadol k Repository secrets a ťuknite na New repository secret.

Ak ste postupovali podľa možnosti 1, mali by ste vidieť toto:

![](../images/Building-the-App/CI/BrowserBuildGAUTH4.png)

Ak ste postupovali podľa možnosti 2, kľúčov bude viac:

![](../images/Building-the-App/CI/BrowserBuildGAUTH4b.png)

Do poľa Name vložte text, ktorý ste práve skopírovali. Ponuku na vloženie zobrazíte dlhým podržaním prsta na textovom poli.

![](../images/Building-the-App/CI/BrowserBuildGAUTH5.png)

Prepnite sa na kartu s prípravnou stránkou.

Ťuknite na druhé tlačidlo Copy.

![](../images/Building-the-App/CI/BrowserBuildGAUTH6.png)

Prepnite sa späť na kartu s GitHubom.

1. Do poľa Secret vložte text, ktorý ste práve skopírovali. Ponuku na vloženie zobrazíte dlhým podržaním prsta na textovom poli.

2. Ťuknite na Add secret.

![](../images/Building-the-App/CI/BrowserBuildGAUTH7.png)

Teraz by ste mali mať buď dva (možnosť 1), alebo päť (možnosť 2) záznamov secrets.

![](../images/Building-the-App/CI/BrowserBuildGAUTH8.png)

GitHub teraz bude môcť po zostavení uložiť súbor APK aplikácie AAPS na váš Disk Google.

----

**Ďalej: [Krok 4 – Zostavte APK](BrowserBuildAPK.md) →**
