(aaps-ci-google-drive-auth)=

# Kūrimas naršyklėje – 3 žingsnis: Suteikite prieigą prie Google Drive

```{note}
Tai puslapio [Kūrimas naršyklėje](BrowserBuild.md) **3 žingsnis**. Pirmiausia užbaikite šį žingsnį: [2 žingsnis – Sukurkite pasirašymo raktų saugyklą](BrowserBuildKeystore.md).
```

```{warning}
Nesvarbu, kurias ankstesnes instrukcijas vykdėte (1 variantą ar 2 variantą), kad kūrimas naršyklėje veiktų, PRIVALOTE pridėti Google Drive prieigos leidimą.
```

Pastaba: jei šią dalį jau atlikote pagal vaizdo įrašą, dabar galite pereiti prie kito žingsnio: [4 žingsnis – Sukurkite APK](BrowserBuildAPK.md).

```{warning}
Jei Google autorizacija neprasideda arba paruošimo puslapis neveikia, uždarykite paruošimo puslapį, vėl atidarykite `aaps-ci-preparation.html` taip pat, kaip 2 žingsnyje, ir pradėkite šį žingsnį iš naujo. Žr. skyrių [Trikčių šalinimas](#aaps-ci-preparation-web).
```

Grįžkite į paruošimo puslapio skirtuką.

Slinkite žemyn iki skyriaus „Google Drive Auth“ ir spauskite „Start Auth“.

![](../images/Building-the-App/CI/BrowserBuildStep44.png)

Pasirinkite savo Google paskyrą.

![](../images/Building-the-App/CI/BrowserBuildGAUTH1.png)

Slinkite žemyn ir leiskite prieigą. Jos reikia tinklalapiui, kad jis gautų Google Drive autentifikavimo raktą.

Spauskite „Continue“.

![](../images/Building-the-App/CI/BrowserBuildGAUTH2.png)

Laukas `GDRIVE_OAUTH2` bus užpildytas; spauskite viršutinį mygtuką „Copy“.

![](../images/Building-the-App/CI/BrowserBuildGAUTH3.png)

Grįžkite į GitHub skirtuką.

Slinkite žemyn iki „Repository secrets“ ir spauskite „New repository secret“.

Jei vykdėte 1 variantą, turėtumėte matyti štai ką:

![](../images/Building-the-App/CI/BrowserBuildGAUTH4.png)

Jei vykdėte 2 variantą, raktų bus daugiau:

![](../images/Building-the-App/CI/BrowserBuildGAUTH4b.png)

Lauke „Name“ įklijuokite ką tik nukopijuotą tekstą. Kad atsirastų įklijavimo meniu, palaikykite pirštą ant teksto lauko.

![](../images/Building-the-App/CI/BrowserBuildGAUTH5.png)

Pereikite į paruošimo puslapio skirtuką.

Spauskite antrąjį mygtuką „Copy“.

![](../images/Building-the-App/CI/BrowserBuildGAUTH6.png)

Grįžkite į GitHub skirtuką.

1. Lauke „Secret“ įklijuokite ką tik nukopijuotą tekstą. Kad atsirastų įklijavimo meniu, palaikykite pirštą ant teksto lauko.

2. Spauskite „Add secret“.

![](../images/Building-the-App/CI/BrowserBuildGAUTH7.png)

Dabar turėtumėte turėti dvi (1 variantas) arba penkias (2 variantas) slaptąsias reikšmes (secrets).

![](../images/Building-the-App/CI/BrowserBuildGAUTH8.png)

Kai APK bus sukurtas, GitHub galės išsaugoti AAPS apk failą jūsų Google Drive.

----

**Toliau: [4 žingsnis – Sukurkite APK](BrowserBuildAPK.md) →**
