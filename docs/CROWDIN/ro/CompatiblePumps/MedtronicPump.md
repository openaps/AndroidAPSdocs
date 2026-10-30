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

    {contents} Table of contents
    :depth: 1
    :local: true

## Capacități pompă cu AAPS

* Requires a RileyLink-compatible device to communicate with **AAPS**.
* Automatic DST and timezone handling.

## Cerințe hardware și software

- **Telefon:** Driverul Medtronic ar trebui să funcționeze cu orice telefon Android care acceptă conexiuni Bluetooth. **IMPORTANT: Implementările Bluetooth ale producătorilor de telefoane pot varia, astfel că modul în care se comportă fiecare model de telefon poate fi diferit. De exemplu, unele telefoane vor gestiona activarea/dezactivarea Bluetooth în mod diferit. Acest lucru poate avea impact asupra experienței utilizatorului când AAPS trebuie să se reconecteze la dispozitivul de tip RileyLink.**
- **Dispozitiv compatibil RileyLink:** Telefoanele Android nu pot comunica cu pompele Medtronic fără un dispozitiv separat pentru a gestiona comunicațiile. Acest dispozitiv se va conecta cu telefonul dumneavoastră prin Bluetooth și cu pompa printr-o conexiune radio compatibilă. Primul astfel de dispozitiv s-a numit RileyLink, dar acum sunt disponibile o serie de alte opțiuni care pot oferi funcționalitate suplimentară.
    
    - RileyLink disponibil la [getrileylink.org](https://getrileylink.org/product/rileylink916)
    - OrangeLink disponibil la [getrileylink.org](https://getrileylink.org/product/orangelink)
    - EmaLink (mai multe opțiuni ale modelului) disponibil pe [github.com](https://github.com/sks01/EmaLink)
    - Gnarl (necesită unele adaptări/modificări suplimentare de tip "Fă-o Singur" - DIY) detalii disponibile pe [github.com](https://github.com/ecc1/gnarl)

Un grafic de comparație pentru diferitele dispozitive compatibile RileyLink poate fi găsit la [getrileylink.org](https://getrileylink.org/rileylink-compatible-hardware-comparison-chart)

(MedtronicPump-configuration-of-the-pump)=

## Configurarea pompei

Următoarele setări trebuie să fie configurate în pompă pentru ca AAPS să trimită comenzi de la distanță. Etapele necesare pentru a face fiecare modificare pe un Medtronic 715 sunt indicate în paranteze pentru fiecare setare. Etapele exacte pot varia în funcție de tipul pompei și/sau versiunea firmware.

- **Activează modul de la distanță în pompa** (Pe pompă apasă Act și mergi la utilități -> Opțiuni de distanță, Selectați Activat, și pe ecranul următor să adăugați ID și să adăugați orice ID aleatoriu cum ar fi 111111). Cel puțin un ID trebuie să fie pe lista de ID-uri la distanță pentru ca pompa să se aștepte la comunicarea la distanță.
- **Setați bazala maximă** (Pe pompă apăsați Act și ajungeți la bazală și apoi selectați Rată bazală Max) ca un exemplu de setare a acestei valori la de patru ori rata bazală standard maximă ar permite o rată bazală temporară de 400 %. Valoarea maximă permisă de pompă este de 34,9 unități pe oră.
- **Setează bolusul maxim** (Pe pompă, apăsați pe Act și mergeți la bolus, apoi selectați bolus maxim) Acesta este cel mai mare bolus pe care pompa îl va accepta. Valoarea maximă permisă de pompă este 25.
- **Setează profilul la standard**. (Pe pompă, apăsați pe Act și mergeți la Bazal, apoi Selectați Tipare) Pompa va avea nevoie de un singur profil, deoarece AAPS va gestiona profiluri diferite pe telefonul dumneavoastră. Nu sunt necesare alte tipare.
- **Setează tipul de rată bazală temporară** (În pompă apăsați Act și mergeți la bazală și apoi tipul bazalei temporare). Selectați Absolut (nu Procent).

## Configurare Medtronic a telefonului/AAPS

- **Nu asociați dispozitivul compatibil RileyLink din meniul Bluetooth de pe telefonul dumneavoastră** Asocierea prin meniul Bluetooth de pe telefon va opri AAPS să vadă dispozitivul compatibil RileyLink atunci când urmați instrucțiunile de mai jos.
- Dezactivați rotirea automată a ecranului pe telefon. Pe anumite dispozitive rotirea automată a ecranului determină repornirea sesiunilor Bluetooth, ceea ce ar cauza probleme pompei Medtronic. 
- Există două modalități de a configura pompa Medtronic în AAPS:

1. Utilizarea asistentului de configurare ca parte a unei noi instalări
2. In **Configuration** > **Pump**, by selecting **Medtronic**
    
    ![Configuration > Pump with the Medtronic plugin](../images/v4/Configuration/configuration_pump_list_3.png)
    
    Once it is selected, the **Medtronic** card shows two buttons, **Settings** and **Open plugin**:
    
    ![The Medtronic plugin selected in Configuration > Pump](../images/v4/Pumps/medtronic_enabled.png)
    
    **Settings** opens the settings of the Medtronic driver:
    
    ![Medtronic driver settings](../images/v4/Pumps/medtronic_settings.png)
    
    **Open plugin** (or **Manage** > **Pump**) opens the Medtronic pump screen. Before a pump is paired it looks like this:
    
    ![Medtronic pump screen before pairing](../images/v4/Pumps/medtronic_pump_screen.png)

Când configurați pompa Medtronic cu ajutorul asistentului de configurare, este posibil să nu puteți finaliza configurarea din cauza problemelor Bluetooth (spre exemplu nu vă puteți conecta cu succes la pompă). Dacă se întâmplă acest lucru, trebuie să selectați opțiunea pompei virtuale pentru a finaliza configurația și pentru a permite depanarea ulterioară folosind opțiunea 2.

While setting up AAPS to work with your medtronic pump you need to set the following items in **Settings** (see the settings picture above):

- **Numărul de serie al pompei**: afișat pe spatele pompei și începe cu SN. Ar trebui să introduceți doar cele 6 numere afișate fără nici un caracter alfabetic (de exemplu 123456).
- **Tip pompă**: Pompa model pe care o folosiți (de exemplu 522). 
- **Frecvența pompei**: Există două opțiuni bazate pe locul în care pompa a fost distribuită inițial. Vă rugăm să verificați [Întrebările frecvente](#MedtronicPump-faq) dacă nu sunteți sigur ce opțiune să selectați: 
    - pentru SUA & Canada, frecvența utilizată este de 916 Mhz
    - pentru restul lumii, frecvența utilizată este 868 Mhz
- **Bazală maximă în pompă (U/h)**: Aceasta trebuie să corespundă setării din pompă (vedeți Configurarea pompei de mai sus). Din nou, această setare trebuie selectată cu atenție, deoarece va determina cât de mult AAPS poate livra prin rata bazală. Aceasta va stabili efectiv rata bazală temporară maximă. De exemplu, stabilirea acestei valori la de patru ori valoarea maximă a valorii bazalei standard ar permite o rată bazală temporară de 400%. Valoarea maximă permisă de pompă este de 34,9 unități pe oră.
- **Bolus maxim în pompă (U)** (într-o oră): Aceasta trebuie să corespundă setării setate de pompă (vedeți Configurarea pompei de mai sus). Această setare trebuie analizată cu atenție, deoarece determină cât de mare poate fi setat bolusul de către AAPS.
- **Întârziere înainte ca bolusul să înceapă (s)**: Numărul de secunde după ce un bolus este emis înainte ca această comandă să fie trimisă la pompă. Această perioadă de timp permite utilizatorului să anuleze bolusul în cazul în care o comandă bolus este trimisă din greșeală. Nu este posibilă anularea unui bolus care a început prin AAPS. Singurul mod de a anula un bolus care a început deja este de a suspenda pompa manual, urmat de reluare.
- **Codificarea Medtronic**: Determină dacă codarea Medtronic se efectuează. Selectarea codificării hardware (adică, efectuată de dispozitivul compatibil Rileylink) este preferată, deoarece aceasta duce la trimiterea mai multor date. Selectarea codificării Software (spre exemplu realizată de AAPS) poate ajuta în cazul în care se văd deconectări frecvente. Această setare va fi ignorată dacă aveți versiunea de firmware 0.x pe dispozitivele Rileylink.
- **Tipul bateriei (Power View)**: Pentru a determina corect nivelul rămas al bateriei ar trebui să selectați tipul de baterie AAA în uz. Atunci când o altă valoare decât vizualizarea simplă este selectată AAPS va afișa nivelul procentual al bateriei și voltajul. Sunt disponibile următoarele opțiuni:
    
    - Fără selecție (Afișare simplificată)
    - Alcalină (Afișare extinsă)
    - Litiu (Afișare extinsă)
    - NiZn (Afișare extinsă)
    - NiMH (Afișare extinsă)
- **Use Scanning**: Activates Bluetooth scanning before connecting with your Rileylink Compatible devices. Acest lucru ar trebui să îmbunătățească fiabilitatea conexiunii dumneavoastră la dispozitiv.

- **Show battery level reported by OrangeLink/EmaLink/DiaLink**: This feature is only supported on newer link devices such as the EmaLink or OrangeLink. The value is shown as **RileyLink Battery** on the Medtronic pump screen.
- **Set neutral temp basals**: By default Medtronic pumps beep on the hour when a temporary basal rate is active. Activarea acestei opțiuni poate ajuta la reducerea numărului de semnale sonore auzite prin întreruperea unei bazale temporare la schimbarea orei pentru a suprima semnalul sonor.

(pairing-your-rileylink-compatible-device)=

### Pairing your RileyLink compatible device

Your RileyLink compatible device is paired from the Medtronic pump screen, not from the Bluetooth menu of your phone:

- Open the pump screen (**Manage** > **Pump**, or **Open plugin** on the Medtronic card in **Configuration** > **Pump**).
- Tap **Pair RileyLink**. **AAPS** scans for nearby RileyLink compatible devices.
- Tap your device in the list. When **RileyLink paired successfully** is shown, tap **OK**.

## Medtronic pump screen

To open the Medtronic pump screen, go to **Manage** > **Pump**. The pump screen displays the current pump status information along with some Medtronic specific actions (see the pump screen picture above).

- **Starea RileyLink**: Starea curentă a conexiunii dintre telefon și dispozitivul compatibil RileyLink. Ar trebui să apară permanent drept conectat. Orice altă stare poate necesita intervenția utilizatorului. 
- **Bateria RileyLink**: Nivelul actual al bateriei pentru dispozitivul dumneavoastră EmaLink sau OrangeLink. Only shown if **Show battery level reported by OrangeLink/EmaLink/DiaLink** is enabled in the Medtronic settings.
- **Starea pompei**: Starea curentă a conexiunii pompei. Deoarece pompa nu va fi conectată în mod constant, aceasta va arăta în general pictograma de somn. Există o serie de posibile alte stări, inclusiv "Trezire" când AAPS încearcă să emită o comandă sau alte posibile comenzi de pompă cum ar fi "Obțineți timpul", "Setați o rată bazală temporară", șamd.
- **Battery**: Shows battery status based on the value chosen for **Battery Type (Power View)** in the Medtronic settings.
- **Ultima conexiune**: Cu cât timp în urmă a avut loc ultima conexiune reușită la pompă.
- **Ultimul Bolus**: În urmă cu cât timp a fost administrat ultimul bolus cu succes.
- **Rata bazală de bază**: Aceasta este rata bazală de bază care rulează în pompă la această oră în profilul activ.
- **Bazală Temporară**: Bazala temporară care se livrează în prezent, care poate fi 0 unități pe oră.
- **Rezervor**: Cât insulină este în rezervor (actualizată cel puțin o dată pe oră).
- **Erori**: Șirul de eroare în cazul în care există probleme (în principal arată dacă există eroare în configurație).

At the bottom of the screen there are these buttons:

- **Reîmprospătați** este pentru reîmprospătarea stării curente a pompei. Acest lucru ar trebui să fie utilizat numai în cazul în care conexiunea a fost pierdută pentru o perioadă lungă de timp, deoarece este necesară o reîmprospătare completă a datelor (preluare istoric, obțineți/setați ora, obțineți profilul, obțineți starea bateriei, șamd).
- **Pair RileyLink**: Finds and pairs your RileyLink compatible device (see [above](#pairing-your-rileylink-compatible-device)).
- **Pump history**: Shows pump history (see [below](#MedtronicPump-pump-history)).
- **RL Stats**: Shows RL Stats (see [below](#MedtronicPump-rl-status-rileylink-status)).
- **Wake and Tune Up** and **Reset RileyLink**: See [Actions](#medtronic-actions) below.
- **Clear Bolus Block**: Only shown for a short time after a bolus, while **AAPS** waits for the pump to finish delivering it. Tapping it ends this wait.

(MedtronicPump-pump-history)=

## Istoric pompă

![Pump history screen with its filter buttons](../images/Medtronic03.png)

Istoricul pompei este preluat la fiecare 5 minute și păstrat local. Se stochează doar istoricul ultimelor 24 de ore. This allows for a convenient way to see pump behavior should that be required. The only items stored are those relevant to AAPS and will not include a configuration function that has no relevance.

Tap **Pump history** on the pump screen to open it. By default **All** is selected. Tap one of the filter buttons at the top (for example **Boluses**, **Basals** or **Alarms**) to show only one type of entry.

(MedtronicPump-rl-status-rileylink-status)=

## Stare RL (Stare RileyLink)

![Stare RileyLink - Setări](../images/Medtronic04.png) ![Stare RileyLink - istoric](../images/Medtronic05.png)

Dialogul de stare RL are două file:

- **Setări**: Afișați setări despre dispozitivul compatibil RileyLink: Adresa configurată, Dispozitiv conectat, Starea conexiunii, Eroare conexiune și firmware RileyLink. Tipul dispozitivului este întotdeauna pompa Medtronic, Modelul ar fi modelul dumneavoastră, Numărul de serie este numărul de serie configurat, Frecvența Pompei indică frecvența pe care o utilizați, Ultima Frecvență fiind ultima frecvență utilizată.
- **Istoric**: Afișați istoricul comunicațiilor, elementele cu RileyLink arată modificările de stare pentru RileyLink și indicațiile Medtronic care comenzi au fost trimise la pompă.

(medtronic-actions)=

## Acțiuni

When the Medtronic driver is used, two additional actions are available on the pump screen (**Manage** > **Pump**):

- **Treziți și reinițializați** - În cazul în care AAPS nu s-a conectat la pompă pentru o perioadă îndelungată (ar trebui să se conecteze la fiecare 5 minute), puteți forța o reinițializare. Se va încerca contactarea pompei prin căutarea pe toate frecvențele radio posibile folosite de pompă. În cazul în care o conexiune reușită are loc, frecvența care a reușit va fi setată ca implicită. While the tune-up runs, the RileyLink status on the pump screen shows it. If a tune-up fails (for example because the pump was out of range), **AAPS** tries again by itself about every 10 minutes.
- **Reset RileyLink** - If you reset your RileyLink compatible device you may need to use this action so that device can be reconfigured (frequency set, frequency type set, encoding configured).

## Note importante

### Este necesară o atenție specială în configurația Nightscout

AAPS utilizează un număr de serie pentru sincronizare și numărul de serie este expus în Nigtscout. Deoarece cunoașterea numărului de serie al pompei vechi Medtronic poate fi utilizată pentru controlul pompei de la distanță, să aveți grijă deosebită la întărirea site-ului NS prevenind astfel scurgerea de date în ceea ce privește numărul de serie al pompei. Vedeți https://nightscout.github.io/nightscout/security

### OpenAPS users

Utilizatorii OpenAPS ar trebui să ia aminte că AAPS cu Medtronic utilizează o abordare complet diferită față cea de la OpenAPS. Prin folosirea AAPS, principala metodă de a interacționa cu pompa este prin telefonul dumneavoastră. În cazuri normale de utilizare, este posibil ca singura dată când este necesară utilizarea meniului pompei să fie atunci când se schimbă rezervoarele. Acest lucru este foarte diferit atunci când se utilizează OpenAPS, unde cel puțin o parte din bolus este administrată, de obicei, prin intermediul butoanelor rapide pentru bolus. În cazul în care pompa este folosită pentru a livra manual un bolus, pot apărea probleme dacă AAPS încearcă să livreze unul în același timp. În astfel de cazuri există controale care încearcă să prevină problemele, dar acest lucru trebuie evitat pe cât posibil.

### Jurnalizare

În cazul în care trebuie să depanați funcția pompei Medtronic selectați pictograma de meniu din colțul din stânga sus al ecranului, selectați Setările de Întreținere și Jurnal. Pentru depanarea oricăror probleme Medtronic, elementele Pump, PumpComm, PumpBTComm trebuie bifate.

### CGM Medtronic

CGM Medtronic nu este momentan acceptat.

### Utilizarea manuală a pompei

Trebuie să evitați bolusarea manuală sau configurarea ratelor bazale temporare direct de pe pompă. Toate aceste comenzi ar trebui trimise prin AAPS. În cazul în care se folosesc comenzi manuale, trebuie să existe o întârziere de cel puțin 3 minute între ele pentru a reduce riscul apariției oricăror probleme.

### Schimbările de fus orar, Ora de vară (DST) și Călătoriile cu pompa Medtronic și AAPS

AAPS va detecta automat modificările de fus orar și va actualiza pompa atunci când telefonul se schimbă la noua oră.

Traveling east means you are going to be adding hours to the current time (ex. from GMT+0 to GMT+2), which will not result in any issues as there will be no overlap (e.g. it won't be possible to have the same hour twice). Traveling west, however, can result in issues as you are effectively going back in time, which can result in incorrect IOB data.

The issues seen when traveling west are known to the developers and work on a possible solution is ongoing. Vedeți https://github.com/andyrozman/RileyLinkAAPS/issues/145 pentru mai multe detalii. Pentru moment, vă rugăm să rețineți că această problemă poate apărea și să monitorizați cu atenție atunci când se schimbă fusele orare.

### Este GNARL este un dispozitiv complet compatibil Rileylink?

Codul GNARL acceptă pe deplin toate funcțiile folosite de driverul Medtronic în AAPS, ceea ce înseamnă că este complet compatibil. Este important să rețineți că acest lucru va necesita muncă suplimentară, deoarece va trebui să obțineți hardware compatibil și apoi să încărcați codul GNARL pe dispozitiv.

**Notă autorului:** Vă rugăm să rețineți că software-ul GNARL este încă experimental și puțin testat, și nu trebuie să fie considerat sigure pentru utilizarea RileyLink.

(MedtronicPump-faq)=

## Întrebări frecvente

(MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)=

### Ce trebuie făcut dacă am pierdut conexiunea la RileyLink și/sau pompă?

Există o serie de opțiuni pentru încercarea rezolvării problemelor de conectivitate.

- Tap **Wake and Tune Up** on the pump screen (**Manage** > **Pump**) as detailed above.
- Dezactivați Bluetooth de pe telefon, așteptați 10 secunde și apoi activați din nou. Acest lucru va forța dispozitivul RileyLink să se reconecteze la telefon.
- Resetați dispozitivul RileyLink. You must then tap **Reset RileyLink** on the pump screen (**Manage** > **Pump**).
- Alți utilizatori consideră că următorii pași sunt eficienți în restabilirea conectivității atunci când alte metode nu au fost: 
    1. Reporniți telefonul
    2. *În timp ce* telefonul repornește reporniți dispozitivul RileyLink
    3. Deschideți AAPS și permite conexiunii să se restabilească

### Cum să determinați ce frecvență utilizează pompa dumneavoastră

![Model pompă](../images/Medtronic06.png)

Pe spatele pompei veți găsi o linie care detaliază numărul modelului dumneavoastră, împreună cu un cod special de 3 litere. Primele două litere determină tipul de frecvență și ultimul determină culoarea. Iată valorile posibile pentru frecvență:

- NA - America de Nord (în selecția de frecvențe trebuie să selectați "US & Canada (916 MHz)")
- CA - Canada (în selecția de frecvențe trebuie să selectați "US & Canada (916 MHz)")
- WW - Lume (în selectarea frecvenței trebuie să selectați "Worldwide (868 Mhz)")

(MedtronicPump-pump-unreachable)=

### How to fix the "pump unreachable" error

Some Medtronic pumps report a "pump unreachable" error after an **AAPS** update. To fix it, change the encoding type:

1. Go to **Configuration** > **Pump** and tap **Settings** on the **Medtronic** card.
2. Set **Medtronic Encoding** to **Hardware Encoding**.

## Unde să obțineți ajutor

Development of the Medtronic driver is done by the community on a **volunteer** basis. Before requesting help, please:

1. **Read** the relevant section of this documentation to confirm how the feature is meant to work.
2. **Ask** on the *#AAPS* channel on [Discord](https://discord.gg/4fQUWHZ4Mw), or in one of the other [community channels](../GettingHelp/WhereCanIGetHelp.md).
3. **Report a bug** by searching the [existing issues](https://github.com/nightscout/AndroidAPS/issues); if yours is not listed, open a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach your [log files](../GettingHelp/AccessingLogFiles.md).

When asking for help, include your phone make and model, Android version, **AAPS** version, and a plain-English description of the problem (what changed, when it last worked).