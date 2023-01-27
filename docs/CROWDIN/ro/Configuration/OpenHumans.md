# Încarcă date in platforma Open Humans

## Donează datele tale pentru știință

Poți ajuta comunitatea prin donarea datelor tale către proiecte de cercetare! Acest lucru ajută oamenii de știință să meargă mai departe, să dezvolte noi idei științifice și să crească atenția acordata sistemelor în bucla închisa open-source. AndroidAPS is ready to synchronize your data with [Open Humans](https://www.openhumans.org), a platform allowing you to upload, connect, and store your personal data – such as genetics, activity and health data.

Deții controlul deplin asupra a ceea ce se întâmplă cu datele tale și asupra proiectelor pe care dorești să le susții oferindu-le acces la datele tale. Datele tale sunt evaluate și folosite în moduri și în grade diferite in funcție de proiectul la care te-ai alăturat.

Următoarele date vor fi încărcate în contul tău Open Humans:

- Glucose values
- Careportal events (except notes)
- Extended boluses
- Profile switches
- Total daily doses
- Temporary basals
- Temp targets
- Preferințe
- Application version
- Device model
- Screen dimensions

Informații secrete sau private, cum ar fi Nightscout URL sau API secret nu vor fi încărcate.

## Instalare

1. Create your account on [Open Humans](https://www.openhumans.org) if not already done. Poți utiliza, dacă dorești, conturile tale de Google sau Facebook.
2. Enable the “Open Humans” plugin in [Config Builder](../Configuration/Config-Builder.md).
3. Deschide setarea folosind iconița roata dințată. Poți restricționa încărcarea pe durata în care telefonul utilizează Wi-Fi și/sau este conectat la un încărcător.
4. Deschide conectarea Open Humans (fir prin secțiunea OH sau meniul complet) și apasă pe 'LOGIN'.

```{image} ../images/OHUploader1.png
:alt: Open Humans Config Builder
```

5. Citește cu atenție informațiile furnizate despre funcția de Open Humans Uploader și termenii de utilizare.
6. Confirmă prin bifarea căsuţei şi apasă pe "LOGIN".
7. Site-ul Open Humans va fi deschis. Autentifică-te cu datele tale de autentificare.
8. Decide dacă vrei să îți ascunzi calitatea de membru al aplicației AndroidAPS Uploader în profilul public Open Humans.
9. Apăsați butonul „Autorizează proiectul”.

```{image} ../images/OHUploader2.png
:alt: Open Humans Termeni de utilizare + Autentificare
```

10. Când revii la AAPS vei vedea logare reușită.
11. Pentru finalizarea configurării păstrează conectarea Open Humans Uploader pornita și telefonul deschis.
12. După ce dai click pe închidere vei vedea ID-ul tău de membru. Queue sizes > 0 shows that there is still data to be uploaded.
13. Apasă pe 'LOGOUT' dacă vrei să oprești încărcarea datelor în Open Humans.
14. Notificările Android te vor informa despre încărcarea în curs.

```{image} ../images/OHUploader3.png
:alt: Open Humans termină configurarea
```

15. You can manage your data by logging in to the [Open Humans website](https://www.openhumans.org).

```{image} ../images/OHWeb.png
:alt: Open Humans management date
```

## Oportunități de partajare

### [The 'OPEN' project](https://www.open-diabetes.eu/)

Proiectul "OPEN" reuneşte un consorţiu internaţional şi intersectorial de pacienţi inovatori, medici, oameni de ştiinţă, informaticieni şi organizaţii care pledeaza pentru pacienti, cu scopul de a investiga diverse aspecte in legatura cu sistemele de pancreas-artificial-realizat-individual (DIY APS) utilizate de un număr din ce în ce mai mare de persoane cu diabet. For more details see their [website](https://www.open-diabetes.eu/).

September 2020 the 'OPEN' project launched a [survey](https://survey.open-diabetes.eu/) including the option to donate data you uploaded to Open Humans. A [tutorial](https://open-diabetes.eu/en/open-survey/survey-tutorials/) how to donate your data to the 'OPEN' project is available on their site and within the survey itself.

### [OpenAPS Data Commons](https://www.openhumans.org/activity/openaps-data-commons/)

OpenAPS Data Commons e creat pentru a permite o modalitate simplă de a partaja date de la comunitatea DIYAPS pentru cercetare. Datele sunt partajate atât catre cercetători tradiționali, pentru studii de cercetare, cât și grupurilor sau persoanelor din comunitate care doresc să analizeze datele ca parte a propriilor proiecte. OpenAPS Data Commons folosește platforma 'Open Humans' pentru a permite oamenilor să încarce ușor și să partajeze datele lor din DIYAPS, inclusiv AndroidAPS, Loop şi OpenAPS.

Poți să introduci datele tale în Open Humans prin unul din aceste trei moduri:

1. utilizează opțiunea de încarcare AndroidAPS
2. utilizează transferul de date Nightscout
3. încarca manual fişiere de date în Open Humans.

Odată ce ai creat contul și fluxul de date se transmite in Open Humans, alătura-te și la OpenAPS Data Commons pentru a dona datele pentru cercetare, dacă vrei.

## Condiții de utilizare

This is an open source tool that will copy your data to [Open Humans](https://www.openhumans.org). Nu avem nici un drept de a partaja datele tale cu terţe părţi fără autorizaţia ta explicită. Datele pe care le primesc proiectul și aplicația sunt identificate printr-un ID de utilizator aleatoriu și vor fi transmise în siguranță într-un cont Open Humans cu autorizarea ta pentru acest proces. You can stop uploading and delete your upload data at any time via [www.openhumans.org](https://www.openhumans.org). Țineți cont că unele proiecte care primesc date s-ar putea să nu suporte acest lucru.

Also see [Open Humans Terms of Use](https://www.openhumans.org/terms/).

## Confidenţialitatea datelor

Open Humans iti protejeaza intimitatea prin atribuirea unui ID numeric pentru fiecare proiect. Aceasta permite proiectelor să recunoască sursa fara sa te idntifice. ID-ul aplicației încărcate de către AndroidAPS este similar și ajută doar la administrarea datelor. Mai multe informații pot fi gasite aici:

- [Open Humans Data Use Policy](https://www.openhumans.org/data-use/)
- [Open Humans GDPR](https://www.openhumans.org/gdpr/)
