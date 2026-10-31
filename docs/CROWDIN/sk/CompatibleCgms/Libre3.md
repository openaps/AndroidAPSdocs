# **Freestyle Libre 3** a 3+

Freestyle Libre 3 (FSL3) vyžaduje osobitné nastavenie, aby AAPS dostával hodnoty glykémie. Hodnoty z Freestyle Libre 3 (FSL3) sa dajú do AAPS dostať dvoma spôsobmi.

![FL3](../images/d912c1d3-06d2-4b58-ad7c-025ca1980fae.jpeg)

Spôsoby uvedené nižšie používajú samostatnú aplikáciu Juggluco. Používa Juggluco na prijímanie surových dát zo senzora v 1-minútových intervaloch, ktoré sa potom posielajú do xDrip alebo AAPS. Nové senzory sa dajú spustiť buď aplikáciou Libre 3, alebo priamo v Juggluco. Návod nižšie popisuje postup spustenia senzora aplikáciou Juggluco. Ak bol senzor spustený s prihláseným účtom LibreView, je možné ako prijímač striedať aj Juggluco a aplikáciu Libre 3.

Ak bol senzor spustený aplikáciou Libre 3, Juggluco dokáže posielať dáta aj do LibreView na zdieľanie s lekármi.

V xDrip sa dá senzor kalibrovať v rozsahu od -40 mg/dl do +20 mg/dl (-2,2 mmol/l až +1,1 mmol/l), aby sa vyrovnali rozdiely medzi meraním glukomerom a hodnotami zo senzora.

## Spôsob 1: priame použitie 1-minútových hodnôt
**AAPS** je prispôsobený na 5-minútové hodnoty. Preto má spracovanie 1-minútových hodnôt občas obmedzenia.

Pozrite [tu](#juggluco-to-aaps).


## Spôsob 2: prevod 1-minútových hodnôt na 5-minútové hodnoty cez xDrip
Tento spôsob používa Juggluco na prijímanie surových dát zo senzora v 1-minútových intervaloch. Tie sa potom posielajú do xDrip, ktorý ich vyhladí na dáta v 5-minútových intervaloch a pošle do AAPS.

### Krok 1: Nastavenie Juggluco
Aplikáciu Juggluco si stiahnite a nainštalujte [odtiaľto](https://www.juggluco.nl/Juggluco/download.html). Postupujte podľa návodu [tu](https://www.juggluco.nl/Juggluco/libre3/)

Uistite sa, že posielate hodnoty glykémie do xDrip: v nastaveniach Juggluco môžete nastaviť, aby Juggluco posielal hodnoty glykémie iným aplikáciám. Juggluco môže posielať tri typy takéhoto vysielania: **Patched Libre broadcast** pôvodne používala upravená aplikácia Librelink a dá sa použiť na posielanie hodnôt glykémie do xDrip

### Krok 2: Nastavenie xDrip

Hodnoty glykémie prijíma aplikácia xDrip v smartfóne.

- Ak ho ešte nemáte nastavený, stiahnite si [xDrip](https://github.com/NightscoutFoundation/xDrip) a postupujte podľa návodu na [stránke nastavení xDrip](../CompatibleCgms/xDrip.md).
- V xDrip vyberte ako zdroj dát „Libre2 (patched app)“.
- Ak je to potrebné, zadajte „BgReading:d,xdrip libre_receiver:v“ v Less Common Settings → Extra Logging Settings → Extra tags for logging. Budú sa zaznamenávať ďalšie chybové hlásenia na riešenie problémov.

![Zaznamenávanie LibreLink v xDrip](../images/Libre2_Tags.png)

- Technicky sa aktuálna hodnota glykémie posiela do xDrip každú minútu. Filter váženého priemeru vypočíta vyhladenú hodnotu predvolene za posledných 25 minút. Toto obdobie môžete zmeniť v ponuke NFC Scan features.

  → Ponuka (☰) → Settings → NFC Scan features → Smooth libre 3 data when using xxx method

  ![Pokročilé nastavenia xDrip pre Libre 2 a surové hodnoty](../images/xDrip_Libre3_Smooth.png)



### Krok 3: Spustenie senzora v xDrip

V xDrip spustite senzor pomocou „Start Sensor“ a „not today“. Mobilný telefón nie je potrebné držať pri senzore. „Start Sensor“ v skutočnosti fyzicky nespustí žiadny senzor Libre 3 ani s ním nijako nekomunikuje. Slúži to iba na to, aby xDrip vedel, že nový senzor posiela hodnoty glykémie. If available, enter two blood-measured values for the initial calibration. Teraz by sa hodnoty glykémie mali v xDrip zobrazovať každých 5 minút. Vynechané hodnoty, napr. preto, že ste boli príliš ďaleko od telefónu, sa nebudú spätne dopĺňať.

Ak stále nie sú žiadne dáta, počkajte aspoň 15–20 minút.

Po výmene senzora xDrip automaticky rozpozná nový senzor a vymaže všetky kalibračné dáta. You may check your blood glucose after activation and make a new initial calibration.

### Krok 4: Nastavenie AAPS

- Pozrite [tu](#juggluco-to-xdrip) a potom sa vráťte.

- Ak **AAPS** nedostáva hodnoty glykémie, keď je telefón v režime lietadlo, použite „Identify receiver“
- Vypnite vyhladzovanie (už ho robí xDrip)

## Ďalšie výmeny senzora

1. Otvorte Juggluco a poznačte si sériové číslo súčasného senzora

![Sériové číslo Libre](../images/libre3/step_13.jpg)

2. Teraz jednoducho naskenujte nový senzor čítačkou NFC vo vašom telefóne. Ak sa proces úspešne spustil, Juggluco zobrazí oznámenie.
3. Keď budete pripravení deaktivovať starý senzor, otvorte ponuku Juggluco kliknutím kamkoľvek do prázdneho miesta v ľavom hornom rohu obrazovky.
4. Vyberte senzor s ukončenou platnosťou a ťuknite na „Terminate“

![Ukončenie senzora](../images/libre3/step_14.jpg)

Poznámka: Keď sú aktívne dva senzory, Juggluco posiela do xDrip najnovšiu hodnotu z ktoréhokoľvek z nich. Ak senzory nie sú nakalibrované a nemerajú glykémiu podobne, môže to spôsobiť, že do xDrip budú prichádzať skákajúce hodnoty glykémie. Ak ukončíte nesprávny senzor, môžete ho znova aktivovať jednoduchým naskenovaním senzora.

## Prepínanie senzora medzi aplikáciou Libre 3 a Juggluco

Ak bol senzor spustený s prihláseným účtom LibreView, je možné ako prijímač striedať aj Juggluco a aplikáciu Libre 3. Vyžaduje to tieto kroky:

1. Nainštalujte aplikáciu Libre 3 z Obchodu Google Play
2. Nastavte aplikáciu Libre 3 s účtom LibreView, ktorým bol senzor aktivovaný.
3. V nastaveniach Androidu vynútene zastavte aplikáciu Juggluco.
4. V ponuke Libre 3 kliknite na „Start Sensor“, zvoľte „Yes“, „Next“ a naskenujte senzor.
5. Po niekoľkých minútach by mali byť hodnoty glykémie viditeľné v aplikácii Libre 3.

Ak chcete prejsť z aplikácie Libre 3 na Juggluco, musíte aplikáciu Libre 3 vynútene zastaviť v nastaveniach Androidu a pokračovať krokmi 1 a 2.

(libre3-experiences-and-troubleshooting)=
## Skúsenosti a riešenie problémov

### Riešenie problémov s pripojením Libre3 -> Juggluco

- Uistite sa, že používate aktuálnu verziu aplikácie Juggluco
- Skontrolujte svoje nastavenia podľa tohto návodu
- Niekedy môže byť potrebné vynútene zastaviť aplikáciu Libre 3 aj Juggluco a znova ich spustiť.
- Vypnite Bluetooth a znova ho zapnite
- Chvíľu počkajte alebo skúste Juggluco zatvoriť
- Staršie verzie Juggluco (pod 2.9.6) neposielajú ďalšie dáta zo senzora Libre3 do pripojených zariadení (napr. Juggluco vo WearOS). Možno bude potrebné kliknúť na „Resend data“ v upravenej aplikácii Libre3 (ponuka Juggluco).

### Ďalšia pomoc

Pôvodný návod: [webová stránka jkaltes](https://www.juggluco.nl/Juggluco/libre3/)

Ďalší repozitár na GitHube: [odkaz na GitHub](https://github.com/maheini/FreeStyle-Libre-3-patch)
