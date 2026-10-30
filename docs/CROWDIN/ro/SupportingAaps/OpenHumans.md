# Încarcă date in platforma Open Humans

## Donează datele tale pentru știință

Poți ajuta comunitatea prin donarea datelor tale către proiecte de cercetare! Acest lucru ajută oamenii de știință să meargă mai departe, să dezvolte noi idei științifice și să crească atenția acordata sistemelor în bucla închisa open-source. AAPS is ready to synchronize your data with [Open Humans](https://www.openhumans.org), a platform allowing you to upload, connect, and store your personal data – such as genetics, activity and health data.

Deții controlul deplin asupra a ceea ce se întâmplă cu datele tale și asupra proiectelor pe care dorești să le susții oferindu-le acces la datele tale. Datele tale sunt evaluate și folosite în moduri și în grade diferite in funcție de proiectul la care te-ai alăturat.

Următoarele date vor fi încărcate în contul tău Open Humans:

- Valori ale glicemiei
- Evenimente Careportal (cu excepția notelor)
- Bolusuri extinse
- Schimbări de profil
- Doze zilnice totale
- Bazale temporare
- Ținte temporare
- Preferințe
- Versiunea aplicației
- Tipul dispozitivului
- Dimensiuni ecran

Informații secrete sau private, cum ar fi Nightscout URL sau API secret nu vor fi încărcate.

## Instalare

1. Create your account on [Open Humans](https://www.openhumans.org) if not already done. Poți utiliza, dacă dorești, conturile tale de Google sau Facebook.
2. Enable the **Open Humans** plugin in [**Configuration** > **Communication**](../SettingUpAaps/ConfigBuilder.md).

![Open Humans enabled in Configuration > Communication](../images/OHUploader1.png)

3. Tap **Settings** on the **Open Humans** card. You can restrict uploads to times when the phone uses Wi-Fi (**WiFi only**) and/or is charging (**Charging only**).

![Open Humans settings with WiFi only and Charging only](../images/OHUploader_settings.png)

4. Tap **Open plugin** on the **Open Humans** card, then tap **Setup**.

![Open Humans plugin screen with the Setup button](../images/OHUploader_setup.png)

5. On the **Welcome to Open Humans** screen, tap **Next**. Read the **Consent** screen carefully: it shows the terms of use and which data is uploaded and not uploaded.
6. Switch on **I understand and agree.** (1) and tap **Login to Open Humans** (2).

![Open Humans Welcome and Consent screens in AAPS](../images/OHUploader2.png)

7. Site-ul Open Humans va fi deschis. Autentifică-te cu datele tale de autentificare.
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
14. Notificările Android te vor informa despre încărcarea în curs.

![Finalizați configurarea Open Humans](../images/OHUploader3.png)

```{admonition} Older screenshot
:class: note
The screenshot above is from an earlier **AAPS** version. In **AAPS** 4 the confirmation screens are **Final touches** and **We're done!**, there is no queue size, and the buttons are **Upload now** and **Logout**.
```

15. Vă puteți gestiona datele prin conectarea la [pagina Open Humans](https://www.openhumans.org).

![Gestionați datele Open Humans](../images/OHWeb.png)

## Oportunități de partajare

### [The 'OPEN' project](https://www.open-diabetes.eu/)

Proiectul "OPEN" reunește un consorțiu internațional și intersectorial de pacienți inovatori, medici, oameni de știință, informaticieni și organizații care pledeaza pentru pacienti, cu scopul de a investiga diverse aspecte in legatura cu sistemele de pancreas-artificial-realizat-individual (DIY APS) utilizate de un număr din ce în ce mai mare de persoane cu diabet. For more details see their [website](https://www.open-diabetes.eu/).

September 2020 the 'OPEN' project launched a [survey](https://survey.open-diabetes.eu/) including the option to donate data you uploaded to Open Humans. A [tutorial](https://open-diabetes.eu/en/open-survey/survey-tutorials/) how to donate your data to the 'OPEN' project is available on their site and within the survey itself.

### [OpenAPS Data Commons](https://www.openhumans.org/activity/openaps-data-commons/)

OpenAPS Data Commons e creat pentru a permite o modalitate simplă de a partaja date de la comunitatea DIYAPS pentru cercetare. Datele sunt partajate atât catre cercetători tradiționali, pentru studii de cercetare, cât și grupurilor sau persoanelor din comunitate care doresc să analizeze datele ca parte a propriilor proiecte. The OpenAPS Data Commons uses the 'Open Humans' platform to enable people to easily upload and share their data from DIYAPS including AAPS, Loop, and OpenAPS.

Poți să introduci datele tale în Open Humans prin unul din aceste trei moduri:

1. use the AAPS uploader option to get your data into Open Humans
2. utilizează transferul de date Nightscout
3. încarca manual fișiere de date în Open Humans.

Odată ce ai creat contul și fluxul de date se transmite in Open Humans, alătura-te și la OpenAPS Data Commons pentru a dona datele pentru cercetare, dacă vrei.

## Condiții de utilizare

This is an open source tool that will copy your data to [Open Humans](https://www.openhumans.org). Nu avem nici un drept de a partaja datele tale cu terțe părți fără autorizația ta explicită. Datele pe care le primesc proiectul și aplicația sunt identificate printr-un ID de utilizator aleatoriu și vor fi transmise în siguranță într-un cont Open Humans cu autorizarea ta pentru acest proces. You can stop uploading and delete your upload data at any time via [www.openhumans.org](https://www.openhumans.org). Țineți cont că unele proiecte care primesc date s-ar putea să nu suporte acest lucru.

Consultați de asemenea [Termeni de Utilizare Open Humans](https://www.openhumans.org/terms/).

## Confidențialitatea datelor

Open Humans iti protejeaza intimitatea prin atribuirea unui ID numeric pentru fiecare proiect. Aceasta permite proiectelor să recunoască sursa fara sa te idntifice. The Application ID uploaded by AAPS is similar and only helps administrate the data. Mai multe informații pot fi gasite aici:

- [Open Humans Data Use Policy](https://www.openhumans.org/data-use/)
- [Open Humans GDPR](https://www.openhumans.org/gdpr/)
