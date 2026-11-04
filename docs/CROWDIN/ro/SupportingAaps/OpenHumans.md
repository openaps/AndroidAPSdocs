# Încarcă date in platforma Open Humans

## Donați datele dumneavoastră pentru știință

Poți ajuta comunitatea prin donarea datelor tale către proiecte de cercetare! Acest lucru îi ajută pe oamenii de știință să dea mai departe ajutorul primit, să dezvolte idei științifice noi și să facă mai cunoscute sistemele open source cu buclă închisă. AAPS is ready to synchronize your data with [Open Humans](https://www.openhumans.org), a platform allowing you to upload, connect, and store your personal data – such as genetics, activity and health data.

Deții controlul deplin asupra a ceea ce se întâmplă cu datele tale și asupra proiectelor pe care dorești să le susții oferindu-le acces la datele tale. Datele tale sunt evaluate și folosite în moduri și în grade diferite in funcție de proiectul la care te-ai alăturat.

Următoarele date vor fi încărcate în contul dumneavoastră Open Humans:

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

Informațiile secrete sau private, cum ar fi URL-ul Nightscout sau API secret, nu vor fi încărcate.

## Instalare

1. Create your account on [Open Humans](https://www.openhumans.org) if not already done. Poți utiliza, dacă dorești, conturile tale de Google sau Facebook.
2. Activați modulul **Open Humans** în [**Configurație** > **Comunicare**](../SettingUpAaps/ConfigBuilder.md).

![Open Humans activat în Configurație > Comunicare](../images/OHUploader1.png)

3. Apăsați **Setări** pe cardul **Open Humans**. You can restrict uploads to times when the phone uses Wi-Fi (**WiFi only**) and/or is charging (**Charging only**).

![Setările Open Humans cu Doar WiFi și Doar la încărcare](../images/OHUploader_settings.png)

4. Apăsați **Deschideți modulul** pe cardul **Open Humans**, apoi apăsați **Configurare**.

![Ecranul modulului Open Humans cu butonul Configurare](../images/OHUploader_setup.png)

5. Pe ecranul **Bine ați venit la Open Humans**, apăsați **Următor**. Read the **Consent** screen carefully: it shows the terms of use and which data is uploaded and not uploaded.
6. Activați **Înțeleg și sunt de acord.** (1) și apăsați **Conectare la Open Humans** (2).

![Open Humans Welcome and Consent screens in AAPS](../images/OHUploader2.png)

7. Site-ul Open Humans va fi deschis. Autentificați-vă cu datele dumneavoastră de autentificare.
8. Decide whether you want to hide your AAPS Uploader membership in your public Open Humans profile (1).
9. Click **Authorize project** (2).

![Autentificarea și autorizarea proiectului pe site-ul Open Humans](../images/OHUploader_web.png)

```{admonition} Older screenshot
:class: note
The screenshots above show an earlier version of the Open Humans website and still use the old project name **AndroidAPS Uploader**. Pașii sunt aceiași.
```

10. Înapoi în **AAPS**, ecranul **Retușuri finale** vă întreabă dacă doriți să continuați. Apăsați **Continuați**.
11. Wait until **We're done!** appears, then tap **Close**. From now on, your phone uploads data in the background from time to time.
12. The **Open Humans** plugin screen now shows your **Project Member ID**. Tap **Upload now** if you want to start an upload right away.
13. Apăsați **Deconectați-vă** dacă doriți să opriți încărcarea datelor în Open Humans.
14. O notificare Android vă va informa despre încărcarea în curs.

![Finalizați configurarea Open Humans](../images/OHUploader3.png)

```{admonition} Older screenshot
:class: note
The screenshot above is from an earlier **AAPS** version. În **AAPS** 4, ecranele de confirmare sunt **Retușuri finale** și **Gata!**, nu există dimensiunea cozii, iar butoanele sunt **Încărcați acum** și **Deconectați-vă**.
```

15. Vă puteți gestiona datele prin conectarea la [pagina Open Humans](https://www.openhumans.org).

![Gestionați datele Open Humans](../images/OHWeb.png)

## Oportunități de partajare

### [Proiectul „OPEN”](https://www.open-diabetes.eu/)

Proiectul "OPEN" reunește un consorțiu internațional și intersectorial de pacienți inovatori, medici, oameni de știință, informaticieni și organizații care pledeaza pentru pacienti, cu scopul de a investiga diverse aspecte in legatura cu sistemele de pancreas-artificial-realizat-individual (DIY APS) utilizate de un număr din ce în ce mai mare de persoane cu diabet. Pentru mai multe detalii, consultați [site-ul lor](https://www.open-diabetes.eu/).

În septembrie 2020, proiectul „OPEN” a lansat un [sondaj](https://survey.open-diabetes.eu/), care include opțiunea de a dona datele pe care le-ați încărcat în Open Humans. A [tutorial](https://open-diabetes.eu/en/open-survey/survey-tutorials/) how to donate your data to the 'OPEN' project is available on their site and within the survey itself.

### [OpenAPS Data Commons](https://www.openhumans.org/activity/openaps-data-commons/)

OpenAPS Data Commons e creat pentru a permite o modalitate simplă de a partaja date de la comunitatea DIYAPS pentru cercetare. Datele sunt partajate atât catre cercetători tradiționali, pentru studii de cercetare, cât și grupurilor sau persoanelor din comunitate care doresc să analizeze datele ca parte a propriilor proiecte. The OpenAPS Data Commons uses the 'Open Humans' platform to enable people to easily upload and share their data from DIYAPS including AAPS, Loop, and OpenAPS.

Poți să introduci datele tale în Open Humans prin unul din aceste trei moduri:

1. use the AAPS uploader option to get your data into Open Humans
2. utilizează transferul de date Nightscout
3. încărcați manual fișiere de date în Open Humans.

Odată ce ai creat contul și fluxul de date se transmite in Open Humans, alătura-te și la OpenAPS Data Commons pentru a dona datele pentru cercetare, dacă vrei.

## Condiții de utilizare

Acesta este un instrument open source care va copia datele dumneavoastră în [Open Humans](https://www.openhumans.org). Nu avem nici un drept de a partaja datele tale cu terțe părți fără autorizația ta explicită. Datele pe care le primesc proiectul și aplicația sunt identificate printr-un ID de utilizator aleatoriu și vor fi transmise în siguranță într-un cont Open Humans cu autorizarea ta pentru acest proces. You can stop uploading and delete your upload data at any time via [www.openhumans.org](https://www.openhumans.org). Țineți cont că unele proiecte care primesc date s-ar putea să nu suporte acest lucru.

Consultați și [Condițiile de utilizare Open Humans](https://www.openhumans.org/terms/).

## Confidențialitatea datelor

Open Humans iti protejeaza intimitatea prin atribuirea unui ID numeric pentru fiecare proiect. This allows projects to recognize but not identify you. ID-ul aplicației încărcat de AAPS este similar și ajută doar la administrarea datelor. Mai multe informații găsiți aici:

- [Open Humans Data Use Policy](https://www.openhumans.org/data-use/)
- [Open Humans GDPR](https://www.openhumans.org/gdpr/)
