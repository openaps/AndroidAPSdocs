# Open Humans Uploader

## Donirajte svoje podatke znanosti

Zajednici možete pomoći tako da svoje podatke donirate istraživačkim projektima! This helps scientists to pay it forward, develop new scientific ideas and make open source closed loop systems better known. AAPS je spreman sinkronizirati vaše podatke s [Open Humans](https://www.openhumans.org), platformom koja vam omogućuje prijenos, povezivanje i pohranu osobnih podataka – kao što su genetski podaci, podaci o aktivnosti i zdravstveni podaci.

Zadržavate potpunu kontrolu nad time što se događa s vašim podacima i koje projekte želite podržati tako da im date pristup svojim podacima. Ovisno o projektu kojem ste se pridružili, projekt podatke procjenjuje i koristi na različite načine i u različitoj mjeri.

Na vaš Open Humans račun prenijet će se sljedeći podaci:

- Vrijednosti glukoze
- Careportal događaji (osim bilješki)
- Produženi bolusi
- Zamjene profila
- Ukupne dnevne doze
- Privremeni bazali
- Privremeni ciljevi
- Postavke
- Verzija aplikacije
- Model uređaja
- Dimenzije zaslona

Tajni ili privatni podaci, kao što su vaš Nightscout URL ili API tajna, neće se prenijeti.

## Postavljanje

1. Ako ga još nemate, izradite račun na [Open Humans](https://www.openhumans.org). Ako želite, možete koristiti svoj postojeći Google ili Facebook račun.
2. Enable the **Open Humans** plugin in [**Configuration** > **Communication**](../SettingUpAaps/ConfigBuilder.md).

![Open Humans enabled in Configuration > Communication](../images/OHUploader1.png)

3. Tap **Settings** on the **Open Humans** card. You can restrict uploads to times when the phone uses Wi-Fi (**WiFi only**) and/or is charging (**Charging only**).

![Open Humans settings with WiFi only and Charging only](../images/OHUploader_settings.png)

4. Tap **Open plugin** on the **Open Humans** card, then tap **Setup**.

![Open Humans plugin screen with the Setup button](../images/OHUploader_setup.png)

5. On the **Welcome to Open Humans** screen, tap **Next**. Read the **Consent** screen carefully: it shows the terms of use and which data is uploaded and not uploaded.
6. Switch on **I understand and agree.** (1) and tap **Login to Open Humans** (2).

![Open Humans Welcome and Consent screens in AAPS](../images/OHUploader2.png)

7. Otvorit će se web-stranica Open Humans. Prijavite se svojim podacima za prijavu.
8. Decide whether you want to hide your AAPS Uploader membership in your public Open Humans profile (1).
9. Click **Authorize project** (2).

![Login and project authorization on the Open Humans website](../images/OHUploader_web.png)

```{admonition} Older screenshot
:class: note
The screenshots above show an earlier version of the Open Humans website and still use the old project name **AndroidAPS Uploader**. The steps are the same.
```

10. Back in **AAPS**, the **Final touches** screen asks whether you want to proceed. Tap **Proceed**.
11. Wait until **We're done!** appears, then tap **Close**. From now on, your phone uploads data in the background from time to time.
12. The **Open Humans** plugin screen now shows your **Project Member ID**. Tap **Upload now** if you want to start an upload right away.
13. Tap **Logout** if you want to stop uploading data to Open Humans.
14. Android obavijest obavijestit će vas o prijenosu koji je u tijeku.

![Open Humans – dovršetak postavljanja](../images/OHUploader3.png)

```{admonition} Older screenshot
:class: note
Snimka zaslona iznad je iz starije verzije **AAPS-a**. In **AAPS** 4 the confirmation screens are **Final touches** and **We're done!**, there is no queue size, and the buttons are **Upload now** and **Logout**.
```

15. Svojim podacima možete upravljati tako da se prijavite na [web-stranicu Open Humans](https://www.openhumans.org).

![Open Humans – upravljanje podacima](../images/OHWeb.png)

## Mogućnosti dijeljenja

### [Projekt „OPEN“](https://www.open-diabetes.eu/)

Projekt „OPEN“ okuplja međunarodni i međusektorski konzorcij pacijenata inovatora, liječnika, društvenih znanstvenika, računalnih znanstvenika i udruga za zaštitu prava pacijenata. Cilj je istražiti različite aspekte sustava umjetne gušterače „uradi sam“ (DIY APS), koje koristi sve više osoba s dijabetesom. Više detalja potražite na njihovoj [web-stranici](https://www.open-diabetes.eu/).

In September 2020 the 'OPEN' project launched a [survey](https://survey.open-diabetes.eu/) including the option to donate data you uploaded to Open Humans. [Upute](https://open-diabetes.eu/en/open-survey/survey-tutorials/) o tome kako donirati podatke projektu „OPEN“ dostupne su na njihovoj stranici i u samoj anketi.

### [OpenAPS Data Commons](https://www.openhumans.org/activity/openaps-data-commons/)

OpenAPS Data Commons napravljen je kako bi se na jednostavan način omogućilo dijeljenje skupova podataka iz zajednice DIYAPS za istraživanje. Podaci se dijele i s klasičnim istraživačima koji provode klasične istraživačke studije, i sa skupinama ili pojedincima iz zajednice koji žele pregledati podatke u sklopu vlastitih istraživačkih projekata. OpenAPS Data Commons koristi platformu „Open Humans“ kako bi ljudi mogli jednostavno prenijeti i dijeliti svoje podatke iz sustava DIYAPS, uključujući AAPS, Loop i OpenAPS.

Svoje podatke u Open Humans možete prenijeti na jedan od tri načina:

1. koristite opciju AAPS uploader za prijenos podataka u Open Humans
2. koristite Nightscout Data Transfer za prijenos podataka u Open Humans
3. ručno prenesite datoteke s podacima u Open Humans.

Kada ste izradili račun i vaši podaci počnu stizati u Open Humans, pridružite se i projektu OpenAPS Data Commons kako biste, ako to želite, donirali svoje podatke za istraživanje.

## Uvjeti korištenja

Ovo je alat otvorenog koda koji će kopirati vaše podatke u [Open Humans](https://www.openhumans.org). Ne zadržavamo nikakva prava dijeljenja vaših podataka s trećim stranama bez vašeg izričitog dopuštenja. Podaci koje primaju projekt i aplikacija označeni su slučajnim korisničkim ID-om i sigurno će se prenijeti na Open Humans račun samo ako vi odobrite taj postupak. Prijenos možete zaustaviti i prenesene podatke izbrisati u bilo kojem trenutku putem [www.openhumans.org](https://www.openhumans.org). Imajte na umu da neki projekti koji primaju podatke to možda ne podržavaju.

Pogledajte i [Uvjete korištenja Open Humans](https://www.openhumans.org/terms/).

## Privatnost podataka

Open Humans štiti vašu privatnost tako da vam za svaki projekt dodijeli brojčani ID. This allows projects to recognize but not identify you. ID aplikacije koji prenosi AAPS je sličan i služi samo za upravljanje podacima. Više informacija možete pronaći ovdje:

- [Pravila korištenja podataka Open Humans (Data Use Policy)](https://www.openhumans.org/data-use/)
- [Open Humans GDPR](https://www.openhumans.org/gdpr/)
