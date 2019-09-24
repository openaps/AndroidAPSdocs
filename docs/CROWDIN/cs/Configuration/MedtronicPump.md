# Pumpy Medtronic

**> > > > Ovladač pump Medtronic prozatím není součástí hlavní verze AndroidAPS. Bude k dispozici v další hlavní verzi. <<<<**

* * *

Pracuje pouze se staršími pumpami Medtronic (podrobnosti viz níže). Nefunguje s Medtronic 640G nebo 670G.

* * *

Prozatím byl Medtronic ovladač testován s malou testovací skupinou a je stále považován za beta software, což znamená, že až do většího otestování budete muset povolit inženýrský režim, aby bylo možné vybrat ovladač v AndroidAPS.

* * *

## Hardwarové a softwarové požadavky

- **Telefon:** Ovladač Medtronic by měl pracovat s jakýmkoli telefonem s podporou BLE. **DŮLEŽITÉ: Ačkoli ovladač pracuje správně na všech telefonech, zapnutí/vypnutí Bluetooth všude nefunguje (to je požadováno, když ztratíte připojení k RileyLink a systém se nemůže zotavit automaticky – čas od času se to stává). Takže budete potřebovat získat zařízení s Android 6.0-8.1, v nejhorším případě můžete na svůj telefon nainstalovat LineeaeOS 15.1 (povinné 15.1 nebo nižší). Zabýváme se problémem se systémem Android 9, ale dosud jsme nenalezli řešení (zdá se, že funguje na některých modelech a ne na jiných, a také někdy pracuje jen na některých modelech).**
- **RileyLink/Gnarl:** Pro komunikaci s pumpou je třeba zařízení, které převádí příkazy BT z telefonu na příkazy RF, kterým pumpa rozumí. Zařízení, které to dělá, se nazývá RileyLink (můžete jej získat zde [getrileylink.org](https://getrileylink.org/)). Potřebujete stabilní verzi zařízení, což je pro starší modely firmware 0.9 (starší verze nemusí fungovat správně) nebo pro novější modely 2.2 (existují možnosti upgradu dostupné na serveru RL). Pokud máte dobrodružnou povahu, můžete také zkusit Gnarl ([zde](https://github.com/ecc1/gnarl)), který je něco jako RileyLink klon. 
- **Pumpa:** Ovladač funguje pouze s následujícími modely a verzemi firmwaru: 
    - 512/712
    - 515/715
    - 522/722
    - 523/723 (firmware 2.4A nebo nižší)
    - 554/754 EU verze (firmware 2.6A nebo nižší)
    - 554/754 verze pro Kanadu (firmware 2.7A nebo nižší)

## Nastavení pumpy

- **Povolit vzdálený režim na pumpě** (Utilities -> Remote Options, vybrat Ano a na další obrazovce Přidat ID a přidat fiktivní ID (111111 nebo něco podobného). Musíte mít alespoň jedno ID na tomto seznamu vzdálených ID. Tyto volby mohou na jiném modelu pumpy vypadat jinak. Tento krok je důležitý, protože při nastavení bude pumpa naslouchat častěji kvůli vzdálené komunikaci.
- **Nastavte maximální hodnotu bazálu** na své pumpě na „maximální bazál ve vašem profilu STD“ * 4 (pokud chcete mít 400% TBR jako max). Toto číslo musí být pod 35 (jak můžete vidět na pumpě).
- **Nastavte maximální hodnotu bolusu** na své pumpě (maximum je 25)
- **Nastavte profil na STD**. To bude jediný profil, který budeme používat. Můžete to také zakázat.
- **Nastavit typ TBR** na absolutní hodnotu (nikoli v procentech)

## Konfigurace telefonu/AndroidAPS

- **Nepárujte RileyLink se svým telefonem.** Pokud jste spárovali RileyLink, pak ho AndroidAPS nedokáže najít v konfiguraci.
- Zakažte funkci Auto-rotate na telefonu (některé zařízení automaticky restartují BT spojení, což není něco, co bychom chtěli).
- Pumpu v AndroidAPS můžete nastavit dvěma způsoby: 

1. Použití průvodce (při nové instalaci)
2. Přímo na kartě Konfigurace (ikona ozubeného kola u ovladače Medtronic)

Pokud děláte novou instalaci, skočíte přímo do průvodce. Někdy, když vaše připojení BT není plně funkční (nelze se připojit k pumpě), nebudete možná moci úplně dokončit konfiguraci. V takovém případě vyberte virtuální pumpu a po dokončení průvodce můžete použít možnost 2, která obejde detekci pumpy.

![MDT Settings](../images/Medronic01.png)

Je třeba nastavit následující položky: (viz obrázek výše)

- ** Sériové číslo pumpy**: Můžete ho najít na zadní straně, SN. Použijte pouze číslice, vaše sériové číslo je 6 čísel.
- **Typ pumpy**: Typ pumpy, který máte (tj. 522). 
- **Frekvence pumpy**: Podle frekvence pumpy existují dvě verze pumpy Medtronic (pokud si nejste jisti, jakou frekvenci využívá vaše pumpa, podívejte se na [FAQ](../Configuration/MedtronicPump#faq)): 
    - pro USA & Kanadu je frekvence 916 MHz
    - pro zbytek světa je frekvence 868 MHz
- **Maximální bolus na pumpě(U)** (za hodinu): Toto musí být nastaveno stejně jako na pumpě. Jde o nastavení omezující možnou velikost bolusu. Pokud zadáte větší hodnotu, bolus nebude proveden a bude vrácena chyba. Maximální hodnota, kterou lze použít, je 25. Prosím, nastavte správnou hodnotu pro sebe tak, aby nemohlo dojít k předávkování.
- **Maximální bazál na pumpě(U/h)**: Toto musí být nastaveno stejně jako na pumpě. Jde o nastavení omezující maximální hodinový bazál. Například, pokud chcete mít nastaveno maximální množství TBR na 500 % a nejvyšší bazál je 1,5 U, pak byste měli nastavit maximální bazál na alespoň 7,5. Pokud je toto nastavení chybné (například pokud by nějaký z vašich bazálů byl vyšší, pumpa by vrátila chybu).
- **Prodleva před spuštěním bolusu (s)**: Toto je prodleva před odesláním bolusu do pumpy, takže pokud změníte názor, můžete bolus zrušit. Zrušení bolusu po spuštění není pumpou podporováno (pokud chcete zastavit bolus během vydávání, musíte pozastavit pumpu a pak pokračovat).
- **Medtronic Encoding**: This is setting which determines, if 4b6b encoding that Medtronic devices do will be done in AndroidAPS or on RileyLink. If you have a RileyLink with 2.x firmware, default value will be to use Hardware encoding (= done by RileyLink), if you have 0.x firmware this setting will be ignored.
- **Battery Type (Power View)**: If you want to see battery power in your pump, you need to select type of battery you use (currently supported Lithium or Alkaline), this will in turn change display to display calculated percent and volts.
- **RileyLink Configuration**: This will find your RileyLink/GNARL device.

## MEDTRONIC (MDT) Tab

![MDT Tab](../images/Medtronic02.png)

On pump tab you can see several lines that are showing pumps (and connections) current status.

- **RileyLink Status**: It shows status of RileyLink connection. Phone should be connected to RileyLink all the time.
- **Pump Status**: Status of pump connection, this can have several values, but mostly we will see sleep icon (when pump connection is not active), when command is beeing executed, we might see "Waking Up", which is AAPS trying to make connection to your pump or description of any command that might be running on pump (ex.: Get Time, Set TBR, etc.).
- **Battery**: Shows battery status depening on your configuration. This can be simple icon showing if battery is empty or full (red if battery is getting critical, under 20%), or percent and voltage.
- **Last connection**: Time when last connection to pump was successful.
- **Last Bolus**: When last bolus was given.
- **Base Basal Rate**: This is the base basal rate that runs on pump at this hour.
- **Temp basal**: Temp basal that is running or empty.
- **Reservoir**: How much insulin is in reservoir (updated at least every hour).
- **Errors**: Error string if there is problem (mostly shows if there is error in configuration).

On lower end we have 3 buttons:

- **Refresh** is for refreshing state. This should be used only after connection was not present for long time, as this action will reset data about pump (retrieve history, get/set time, get profile, get battery status, etc).
- **Pump History**: Shows pump history (see [bellow](../Configuration/MedtronicPump#pump-history))
- **RL Stats**: Show RL Stats (see [bellow](../Configuration/MedtronicPump#rl-status-rileylink-status))

## Pump History

![Pump History Dialog](../images/Medtronic03.png)

Pump history is retrieved every 5 minutes and stored localy. We keep history only for last 24 hours, so older entries are removed when new are added. This is simple way to see the pump history (some entries from pump might not be displayed, because they are not relevant - for example configuration of functions that are not used by AndroidAPS).

## RL Status (RileyLink Status)

![RileyLink Status - Settings](../images/Medtronic04.png) ![RileyLink Status - History](../images/Medtronic05.png)

Dialog has two tabs:

- **Settings**: Shows settings about RileyLink: Configured Address, Connected Device, Connection Status, Connection Error and RileyLink Firmware versions. Device Type is always Medtronic Pump, Model would be your model, Serial number is configured serial number, Pump Frequency shows which frequency you use, Last Frequency is last frequency used.
- **History**: Shows communication history, items with RileyLink shows state changes for RileyLink and Medtronic shows which commands were sent to pump.

## Akce

When Medtronic driver is selected, 3 possible actions can be added to Actions Tab:

- **Wake and Tune Up** - If you see that your AndroidAPS hasn't contacted your pump in a while (it should contact it every 5 minutes), you can force Tune Up. This will try to contact your pump, by searching all sub frequencies on which Pump can be contacted. If it finds one it will set it as your default frequency. 
- **Reset RileyLink Config** - If you reset your RileyLink/GNARL, you need to use this action, so that device can be reconfigured (frequency set, frequency type set, encoding configured).
- **Clear Bolus Block** - When you start bolus, we set Bolus Block, which prevents any commands to be issued to pump. If you suspend your pump and resume (to cancel bolus), you can then remove that block. Option is only there when bolus is running... 

## Important notes

### Logging

Since Medtronic driver is very new, you need to enable logging, so that we can debug and fix problems, if they should arise. Click on icon on upper left corner, select Maintainance and Log Settings. Options Pump, PumpComm, PumpBTComm need to be checked.

### RileyLink/GNARL

When you restart RileyLink or GNARL, you need to either do new TuneUp (action "Wake and Tune Up") or resend communication parameters (action "Reset RileyLink Config"), or else communication will fail.

### CGMS

Medtronic CGMS is currently NOT supported.

### Manual use of pump

You should avoid manually doing treatments things on your pump. All commands (bolus, TBR) should go through AndroidAPS, but if it happens that you will do manual commands, do NOT run commands with frequency less than 3 minutes (so if you do 2 boluses (for whatever reason), second should be started at least 3 minutes after first one).

## Timezone changes and DST (Daylight Saving Time) or Traveling with Medtronic Pump and AndroidAPS

Important thing to remember is that you should never disable loop when you are traveling (unless your CGMS can't do offline mode). AAPS will automatically detect Timezone changes and will send command to Pump to change time, when time on Phone is changed.

Now if you travel to East and your TZ changes with adding hours (ex. from GMT+0 to GMT+2), pump history won't have problem and you don't have to worry... but if you travel to West and your TZ changes by removing hours (GMT+2 to GMT-0), then sychronization might be little iffy. In clear text, that means that for next x hours you will have to be careful, because your IOB, might be little weird.

We are aware of this problem, and we are already looking into possible solution (see https://github.com/andyrozman/RileyLinkAAPS/issues/145), but for now, have that info in mind when traveling.

## FAQ

### Can I see the power of RileyLink/GNARL?

Ne. At the moment none of this devices support this and it probably won't even in the future.

### Is GNARL full replacement for RileyLink?

Yes. Author of GNARL added all functions used by Medtronic driver. All Medtronic communication is supported (at time of the writing (June/2019). GNARL can't be used for Omnipod communication. Downside of GNARL is that you have to build it yourself, and you have to have compatible version of hardware.

**Note from author:** Please note that the GNARL software is still experimental and lightly tested, and should not be considered as safe to use as a RileyLink.

### Where can I get RileyLink or GNARL?

Like mentioned before you can get devices here:

- RileyLink - You can get device here - [getrileylink.org](https://getrileylink.org/).
- GNARL - You can get info here, but device needs to be ordered elsewhere ([github.com/ecc1/gnarl](https://github.com/ecc1/gnarl)).

### What to do if I loose connection to RileyLink and/or pump?

1. Run "Wake Up and Tune" action, this will try to find right frequency to communicate with pump.
2. Disable Bluetooth, wait 10s and enable it again. This will force reconnecting to RileyLink.
3. Reset RileyLink, after you do that do not forget to run "Reset RileyLink Config" action.
4. Try 3 and 2 together.
5. Reset RileyLink and reset phone.

### How to determine what Frequency my pump uses

![Pump Model](../images/Medtronic06.png)

If you turn your pump around in first line on right side you will see special 3 letter code. First two letters determine frequency type and last one determines color. Here are possible values for Frequency:

- NA - North America (in frequency selection you need to select "US & Canada (916 MHz)")
- CA - Canada (in frequency selection you need to select "US & Canada (916 MHz)")
- WW - Worldwide (in frequency selection you need to select "Worldwide (868 Mhz)")