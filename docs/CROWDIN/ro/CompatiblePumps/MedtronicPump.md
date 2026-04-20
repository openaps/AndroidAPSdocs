# Pompele Medtronic

Driverul nu funcționează cu nici un model mai nou, inclusiv cu toate modelele care se termină în G (530G, 600 [630G, 640G, 670G], serie de 700 [770G, 780G] etc.).

Următoarele modele și combinații de firmware sunt compatibile:

- 512/712 (orice versiune de firmware)
- 515/715 (orice versiune de firmware)
- 522/722 (orice versiune de firmware)
- 523/723 (firmware 2.4A sau mai mic)
- 554/754 lansare UE (firmware 2.6A sau mai mic)
- 554/754 Versiunea de Canada (firmware 2.7A sau mai mic)

Puteți afla cum să verificați firmware-ul de pe pompele de la [documentația OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Gear%20Up/pump.html#how-to-check-pump-firmware-check-for-absence-of-pc-connect) sau [LoopDocs](https://loopkit.github.io/loopdocs/build/step3/#medtronic-pump-firmware).

## Cerințe hardware și software

- **Telefon:** Driverul Medtronic ar trebui să funcționeze cu orice telefon Android care acceptă conexiuni Bluetooth. **IMPORTANT: Phone manufacturers Bluetooth implementations can vary so how each phone model behaves can vary. For example, some phones will handle enabling/disabling Bluetooth differently. This can impact the user experience when AAPS needs to reconnect to your Rileylink type device.**
- **RileyLink Compatible Device:** Android phones cannot communicate to Medtronic pumps without a separate device to handle communications. This device will link with your phone via Bluetooth and with your pump via a compatible radio connection. The first such device was called a Rileylink but a number of other options are now available which can offer additional functionality.
    
    - Rileylink available at [getrileylink.org](https://getrileylink.org/product/rileylink916)
    - Orangelink available at [getrileylink.org](https://getrileylink.org/product/orangelink)
    - Emalink (multiple model options) available at [github.com](https://github.com/sks01/EmaLink)
    - Gnarl (some additional DIY required) details available at [github.com](https://github.com/ecc1/gnarl)

A comparison chart for the various Rileylink compatible devices can be found at [getrileylink.org](https://getrileylink.org/rileylink-compatible-hardware-comparison-chart)

(MedtronicPump-configuration-of-the-pump)=

## Configuration of the pump

The following settings should be configured on the pump in order for AAPS to remotely send commands. The steps necessary to make each change on a Medtronic 715 are shown in brackets for each setting. The exact steps may vary based on pump type and/or firmware version.

- **Enable remote mode on Pump** (On the pump press Act and go to Utilities -> Remote Options, Select On, and on next screen do Add ID and add any random id such as 111111). At least one ID must be on the Remote ID list in order for the pump to expect remote communication.
- **Set Max Basal** (On the pump press Act and got to Basal and then select Max Basal Rate) As an example setting this value to four times your maximum standard basal rate would allow a 400% Temporary Basal Rate. The maximum value permitted by the pump is 34.9 units per hour.
- **Set Max Bolus** (On the pump press Act and to to Bolus and then select Max Bolus) This is the largest bolus that the pump will accept. The maximum value permitted by the pump is 25.
- **Set profile to Standard**. (On the pump press Act and go to Basal and then Select Patterns) The pump will only need one profile as AAPS will manage different profiles on your phone. No other patterns are required.
- **Set Temporary Basal Rate type** (On the pump press Act and go to Basal and then Temp Basal Type). Select Absolute (not Percent).

## Medtronic Configuration of Phone/AAPS

- **Do not pair RileyLink compatible device with the Bluetooth menu on your phone.** Pairing via the Bluetooth menu on your phone will stop AAPS from seeing your Rileylink Compatible device when you follow the instructions below.
- Disable automatic screen rotation on your phone. On certain devices automatic screen rotation causes Bluetooth sessions to restart which would cause issues for your Medtronic pump. 
- There are two ways to configure your Medtronic pump in AAPS:

1. Using the setup wizard as part of a fresh install
2. By selecting the cog icon beside the Medtronic selection in the pump selection option in Config Builder

When configuring your Medtronic pump with the setup wizard it is possible that you will be prevented from completing setup because of Bluetooth issues (e.g. you cannot successfully connect to the pump). Should this happen you should select the virtual pump option in order to complete the configuration and allow for further troubleshooting by using option 2.

![Medtronic Settings](../images/Medtronic01a.png)

While setting up AAPS to work with your medtronic pump you need to set following items: (see picture above)

- **Pump Serial Number**: Displayed on the back of your pump and starts with SN. You should only enter the 6 numbers shown without any alphabetic characters (e.g. 123456).
- **Pump Type**: The model pump you are using (e.g. 522). 
- **Pump Frequency**: There are two options based on where your pump was originally distributed. Please check the [FAQ](#MedtronicPump-faq) if you are unsure which option to select): 
    - for US & Canada, frequency used is 916 Mhz
    - for Worldwide, frequency used is 868 Mhz
- **Max Basal on Pump (U/h)**: This needs to match the setting set on your pump (see Configuration of the pump above). Again this setting must be carefully selected as it will determine how much AAPS can deliver via your basal rate. This will effectively set the maximum temporary basal rate. As an example, setting this value to four times your maximum standard basal rate would allow a 400% Temporary Basal Rate. The maximum value permitted by the pump is 34.9 units per hour.
- **Max Bolus on Pump (U)** (in an hour): This needs to match the setting set on your pump (see Configuration of the pump above). This setting should be carefully considered as it determines how large a bolus AAPS can ever set.
- **Întârziere înainte ca bolusul să înceapă (s)**: Numărul de secunde după ce un bolus este emis înainte ca această comandă să fie trimisă la pompă. Această perioadă de timp permite utilizatorului să anuleze bolusul în cazul în care o comandă bolus este trimisă din greșeală. Nu este posibilă anularea unui bolus care a început prin AAPS. Singurul mod de a anula un bolus care a început deja este de a suspenda pompa manual, urmat de reluare.
- **Codificarea Medtronic**: Determină dacă codarea Medtronic se efectuează. Selectarea codificării hardware (adică, efectuată de dispozitivul compatibil Rileylink) este preferată, deoarece aceasta duce la trimiterea mai multor date. Selectarea codificării Software (spre exemplu realizată de AAPS) poate ajuta în cazul în care se văd deconectări frecvente. Această setare va fi ignorată dacă aveți versiunea de firmware 0.x pe dispozitivele Rileylink.
- **Tipul bateriei (Power View)**: Pentru a determina corect nivelul rămas al bateriei ar trebui să selectați tipul de baterie AAA în uz. Atunci când o altă valoare decât vizualizarea simplă este selectată AAPS va afișa nivelul procentual al bateriei și voltajul. Sunt disponibile următoarele opțiuni:
    
    - Fără selecție (Afișare simplificată)
    - Alcalină (Afișare extinsă)
    - Litiu (Afișare extinsă)
    - NiZn (Afișare extinsă)
    - NiMH (Afișare extinsă)
- **Depanare bolus/tratamente**: Selectați Pornit sau Oprit în funcție de cerințe.

- **Configurare RileyLink**: Această opțiune vă permite să găsiți și să asociați dispozitivul compatibil RileyLink. Selectarea vă va arăta orice dispozitive compatibile RileyLink din apropiere și puterea semnalului.
- **Utilizați scanarea** Activați scanarea Bluetooth înainte de a vă conecta cu dispozitivele compatibile RileyLink. Acest lucru ar trebui să îmbunătățească fiabilitatea conexiunii dumneavoastră la dispozitiv.
- **Afișați nivelul bateriei raportat de OrangeLink/EmaLink/DiaLink** Această funcție este disponibilă doar pe dispozitivele mai noi, cum ar fi EmaLink sau OrangeLink. Valorile vor fi afișate în fila Medtronic din AndroidAPS. 
- **Setați bazale temporare neutre** În mod implicit pompele Medtronic luminează în timpul orei când o rată bazală temporară este activă. Activarea acestei opțiuni poate ajuta la reducerea numărului de semnale sonore auzite prin întreruperea unei bazale temporare la schimbarea orei pentru a suprima semnalul sonor.

## FILA MEDTRONIC (MDT)

![Fila MDT](../images/Medtronic02.png) Când AAPS este configurat pentru a utiliza o pompă Medtronic o filă MDT va fi afișată în lista de file din partea de sus a ecranului. Această filă afișează informațiile curente despre starea pompei împreună cu unele acțiuni specifice Medtronic.

- **Starea RileyLink**: Starea curentă a conexiunii dintre telefon și dispozitivul compatibil RileyLink. Ar trebui să apară permanent drept conectat. Orice altă stare poate necesita intervenția utilizatorului. 
- **Bateria RileyLink**: Nivelul actual al bateriei pentru dispozitivul dumneavoastră EmaLink sau OrangeLink. În funcție de selectarea "Afișați nivelul bateriei raportat de dispozitivul OrangeLink/EmaLink/DiaLink" din meniul de configurare al pompei Medtronic.
- **Starea pompei**: Starea curentă a conexiunii pompei. Deoarece pompa nu va fi conectată în mod constant, aceasta va arăta în general pictograma de somn. Există o serie de posibile alte stări, inclusiv "Trezire" când AAPS încearcă să emită o comandă sau alte posibile comenzi de pompă cum ar fi "Obțineți timpul", "Setați o rată bazală temporară", șamd.
- **Baterie**: Afișați starea bateriei pe baza valorii alese pentru Tipul bateriei (Vizualizare Energie) în meniul de configurare al pompei Medtronic. 
- **Ultima conexiune**: Cu cât timp în urmă a avut loc ultima conexiune reușită la pompă.
- **Ultimul Bolus**: În urmă cu cât timp a fost livrat ultimul bolus cu succes.
- **Rata bazală de bază**: Aceasta este rata bazală de bază care rulează în pompă la această oră în profilul activ.
- **Bazală Temporară**: Bazala temporară care se livrează în prezent, care poate fi 0 unități pe oră.
- **Rezervor**: Cât insulină este în rezervor (actualizată cel puțin o dată pe oră).
- **Erori**: Șirul de eroare în cazul în care există probleme (în principal arată dacă există eroare în configurație).

În partea de jos a ecranului sunt trei butoane:

- **Reîmprospătați** este pentru reîmprospătarea stării curente a pompei. Acest lucru ar trebui să fie utilizat numai în cazul în care conexiunea a fost pierdută pentru o perioadă lungă de timp, deoarece este necesară o reîmprospătare completă a datelor (preluare istoric, obțineți/setați ora, obțineți profilul, obțineți starea bateriei, șamd).
- **Istoric pompă**: Afișați istoricul pompei (vedeți [mai jos](#MedtronicPump-pump-history))
- **Statistici RL**: Arată Statisticile RL (vedeți [mai jos](#MedtronicPump-rl-status-rileylink-status))

(MedtronicPump-pump-history)=

## Istoric pompă

![Pump History Dialog](../images/Medtronic03.png)

Istoricul pompei este preluat la fiecare 5 minute și păstrat local. Se stochează doar istoricul ultimelor 24 de ore. Permite o modalitate convenabilă de a vedea comportamentul pompei în cazul în care acest lucru este necesar. Singurele elemente stocate sunt cele relevante pentru AAPS și nu vor include o funcție de configurare care nu are relevanță.

(MedtronicPump-rl-status-rileylink-status)=

## Stare RL (Stare RileyLink)

![Stare RileyLink - Setări](../images/Medtronic04.png) ![Stare RileyLink - istoric](../images/Medtronic05.png)

Dialogul de stare RL are două file:

- **Setări**: Afișați setări despre dispozitivul compatibil RileyLink: Adresa configurată, Dispozitiv conectat, Starea conexiunii, Eroare conexiune și firmware RileyLink. Tipul dispozitivului este întotdeauna pompa Medtronic, Modelul ar fi modelul dumneavoastră, Numărul de serie este numărul de serie configurat, Frecvența Pompei indică frecvența pe care o utilizați, Ultima Frecvență fiind ultima frecvență utilizată.
- **Istoric**: Afișați istoricul comunicațiilor, elementele cu RileyLink arată modificările de stare pentru RileyLink și indicațiile Medtronic care comenzi au fost trimise la pompă.

## Acțiuni

Când driverul Medtronic este utilizat, două acțiuni suplimentare sunt adăugate în lista de acțiuni:

- **Treziți și reinițializați** - În cazul în care AAPS nu s-a conectat la pompă pentru o perioadă îndelungată (ar trebui să se conecteze la fiecare 5 minute), puteți forța o reinițializare. Se va încerca contactarea pompei prin căutarea pe toate frecvențele radio posibile folosite de pompă. În cazul în care o conexiune reușită are loc, frecvența care a reușit va fi setată ca implicită.
- **Resetați configurarea RileyLink** - Dacă resetați dispozitivul compatibil RileyLink, ar putea fi necesar să folosiți această acțiune astfel încât dispozitivul să poată fi reconfigurat (setare de frecvență, tip de frecvență setată, codare configurată).

## Note importante

### Este necesară o atenție specială în configurația Nightscout

AAPS utilizează un număr de serie pentru sincronizare și numărul de serie este expus în Nigtscout. Deoarece cunoașterea numărului de serie al pompei vechi Medtronic poate fi utilizată pentru controlul pompei de la distanță, să aveți grijă deosebită la întărirea site-ului NS prevenind astfel scurgerea de date în ceea ce privește numărul de serie al pompei. Vedeți https://nightscout.github.io/nightscout/security

### OpenAPS users

Utilizatorii OpenAPS ar trebui să ia aminte că AAPS cu Medtronic utilizează o abordare complet diferită față cea de la OpenAPS. Prin folosirea AAPS, principala metodă de a interacționa cu pompa este prin telefonul dumneavoastră. În cazuri normale de utilizare, este posibil ca singura dată când este necesară utilizarea meniului pompei să fie atunci când se schimbă rezervoarele. Acest lucru este foarte diferit atunci când se utilizează OpenAPS, unde cel puțin o parte din bolus este livrată, de obicei, prin intermediul butoanelor rapide pentru bolus. În cazul în care pompa este folosită pentru a livra manual un bolus, pot apărea probleme dacă AAPS încearcă să livreze unul în același timp. În astfel de cazuri există controale care încearcă să prevină problemele, dar acest lucru trebuie evitat pe cât posibil.

### Jurnalizare

În cazul în care trebuie să depanați funcția pompei Medtronic selectați pictograma de meniu din colțul din stânga sus al ecranului, selectați Setările de Întreținere și Jurnal. Pentru depanarea oricăror probleme Medtronic, elementele Pump, PumpComm, PumpBTComm trebuie bifate.

### CGM Medtronic

CGM Medtronic nu este momentan acceptat.

### Utilizarea manuală a pompei

Trebuie să evitați bolusarea manuală sau configurarea ratelor bazale temporare direct de pe pompă. Toate aceste comenzi ar trebui trimise prin AAPS. În cazul în care se folosesc comenzi manuale, trebuie să existe o întârziere de cel puțin 3 minute între ele pentru a reduce riscul apariției oricăror probleme.

### Schimbările de fus orar, Ora de vară (DST) și Călătoriile cu pompa Medtronic și AAPS

AAPS va detecta automat modificările de fus orar și va actualiza pompa atunci când telefonul se schimbă la noua oră.

Călătoritul spre est înseamnă că vei adăuga ore la ora curentă (spre exemplu de la GMT+0 la GMT+2) nu vor rezulta probleme deoarece nu va fi nicio suprapunere (spre exemplu nu va fi posibil să ai aceeași oră de două ori). Totuși, călătoria înspre vest poate duce la probleme, deoarece vă întoarceți de fapt în timp, ceea ce poate duce la date IOB incorecte.

Problemele observate în timpul călătoriei spre vest sunt cunoscute de dezvoltatori și lucrul la o posibilă soluție este în curs de desfășurare. Vedeți https://github.com/andyrozman/RileyLinkAAPS/issues/145 pentru mai multe detalii. Pentru moment, vă rugăm să rețineți că această problemă poate apărea și să monitorizați cu atenție atunci când se schimbă fusele orare.

### Is a GNARL a fully compatible Rileylink compatible device?

The GNARL code fully supports all of the functions used by the Medtronic driver in AAPS which means it is fully compatible. It is important to note that this will require additional work as you will have to source compatible hardware and then load the GNARL code on to the device.

**Note from author:** Please note that the GNARL software is still experimental and lightly tested, and should not be considered as safe to use as a RileyLink.

(MedtronicPump-faq)=

## FAQ

(MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)=

### What to do if I loose connection to RileyLink and/or pump?

There are a number of options to try and resolve connectivity issues.

- Use the "Wake Up and Tune" button in the ACT tab as detailed above.
- Disable Bluetooth on your phone, wait 10 seconds and then enable it again. This will force the Rileylink device to reconnect to the phone.
- Reset the Rileylink device. You must then use the "Reset Rileylink Config" button in the ACT tab.
- Other users have found the following steps to be effective in restoring connectivity when other methods have not: 
    1. Restart the phone
    2. *While* the phone is restarting restart the Rileylink device
    3. Open AAPS and allow the connection to restore

### How to determine what Frequency my pump uses

![Pump Model](../images/Medtronic06.png)

On the back of the pump you will find a line detailing your model number along with a special 3 letter code. The first two letters determine the frequency type and the last one determines color. Here are possible values for Frequency:

- NA - North America (in frequency selection you need to select "US & Canada (916 MHz)")
- CA - Canada (in frequency selection you need to select "US & Canada (916 MHz)")
- WW - Worldwide (in frequency selection you need to select "Worldwide (868 Mhz)")