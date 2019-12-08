# Sterowniki do pomp (prawdopodobne) w przyszłości

Poniżej znajduje się lista niektórych pomp, które mogą działać w pętli, status ich wsparcia w dowolnym systemie pętlowym, oraz status dla systemu AAPS. Na końcu jest trochę informacji, jakie są wymagania, aby pompa nadawała się do pracy w pętli.

## Pompy, których wsparcie jest w fazie rozwoju

### Medtronic

** Status pętli: ** Niektóre starsze wersje pomp nadają się do zastosowania w pętli, nowsze modele jeszcze nie nadają się na użycie w pętli (patrz poniżej)

**Inne implementacje:** OpenAPS, Loop

** Implementacje Java: ** Dostępne częściowe implementacje [ Rountrip2 ](https://github.com/TC2013/Roundtrip2) i [ RileyLinkAAPS ](https://github.com/andyrozman/RileyLinkAAPS)

** Status wdrożenia AAPS: ** Trwają prace. Szczegóły na GitHUBie [Andy's AndroidAPS](https://github.com/andyrozman/AndroidAPS), gałąź medtronic_andy. Większość prac została wykonana dla [ RileyLinkAAPS ](https://github.com/andyrozman/RileyLinkAAPS) do uzyskania dostępu do struktury aplikacji i poleceń. W tym repozytorium został stworzony projekt (Medtronic) i zadania otwarte do dalszego rozwoju. Rozwój odbywa się w oddziale dev_medtronic (jest to lokalna gałąź domyślna). Istnieje również czat dla użytkowników GitHUB: RileyLinkAAPS / Lobby. AAPS. 0.10 test "release" is out, with about 95% of all functionality, at the moment what is missing is synhronization of TBRs and Pump "Delivery stopped" events. Project will probably be merged to main repository by end of July 2019. Szczegółowe informacje i harmonogram można znaleźć w [ tablicy projektu ](https://github.com/andyrozman/RileyLinkAAPS/projects/1).

**Hardware requirement for AAPS:** RileyLink (with 916 MHz antenna).

** Wersje pomp współpracujących z pętlą: ** 512-522, 523 (Fw 2.4A lub niższa), 554 (EU firmware 2.6A lub niższa, firmware CA 2.7A lub niższa). To samo dotyczy wersji 7xx. Wszystkie inne urządzenia nie są obsługiwane i prawdopodobnie nie będą.

* * *

### Insulet Omnipod (with "old" Eros Pods) ([Homepage](https://www.myomnipod.com/en-gb/about/how-to-use))

**Loop status:** Not supported natively by AAPS at the moment. Decoding of the Omnipod protocol is finished- [OpenOmni](http://www.openomni.org/) and [OmniAPS Slack](https://omniaps.slack.com/)

**Other implementations:**

- Omnipy for AndroidAPS (stable in testing, requires Raspberry Pi as well as RileyLink, and specially modified AndroidAPS) 
- OmniCore for AndroidAPS (not release yet, C# code running "natively" on Android, requires only RileyLink and specially modified AndroidAPS - next version of Omnipy project).
- [iOS Loop](https://loopkit.github.io/loopdocs/) (stable, released, requires RileyLink).

**Implementacji Javy:** brak do tej pory.

**AAPS implementation status:** Work on a native Java driver for Omnipod on AAPS is progressing on [AAPS-Omnipod/AndroidAPS](https://github.com/AAPS-Omnipod/AndroidAPS) (omnipod_eros branch). It does not require a Raspberry Pi. You can follow progress on [the OmniAPS Slack](https://omniaps.slack.com/) on channel android-driver. A first public test version is expected to be released around January 2020.

**Hardware requirement for AAPS:** RileyLink with Omnipod firmware (2.x) and 433 MHz antenna.

## Pompy, które nadają się do pętli

### Omnipod DASH ([Homepage](https://www.myomnipod.com/DASH))

** Status pętli: ** Obecnie nie jest obsługiwany przez żaden z systemów pętli. Pompa jest kandydatem do pętli, ale protokół komunikacji jest jeszcze nieznany. Selling of pump officially started in January 2019.

** Wymagania sprzętowe dla AAPS: ** Prawdopodobnie brak, ponieważ pompa komunikuje się przez Bluetooth.

**Comments:** We are looking into development of Omnipod DASH, but problem at the moment is, that Dash is not yet available in Europe (where most of AAPS developers are) and that communciation protocol is unknown. We will try to reverse engineer official Dash APK, to determine how communication works and then implementation based on that findings. You can follow what is happening here: [DashAAPS](https://github.com/andyrozman/DashAAPS/projects/1), but don't expect this to be available anytime soon. This is at the moment only Proof Of Concept (until Milestone 2 is completed).

* * *

### Pompa Ypsomed ([Strona domowa](https://www.ypsomed.com/en/diabetes-care-mylife.html))

** Status pętli: ** Wersja 1 - 1.5 (2 kwartał 2018) nie są kandydatami dla pętli. Mimo że komunikuje się poprzez Bluetooth, transfer danych wydaje się być bardzo ograniczony (tylko w jedną stronę: od pompy do aplikacji). Może to zmieni się w jednym z kolejnych modeli pompy.

** Wymagania sprzętowe dla AAPS: ** Prawdopodobnie brak, ponieważ pompa komunikuje się przez Bluetooth.

* * *

### Kaleido ([Strona domowa](https://www.hellokaleido.com/))

** Status pętli: ** Obecnie nie jest obsługiwany przez żaden z systemów pętli. Pompa może być odpowiednia do wykonania pętli, ale ponieważ protokół komunikacji jest obecnie nieznany, przyszła implementacja jest mało prawdopodobna.

** Wymagania sprzętowe dla AAPS: ** Prawdopodobnie brak, ponieważ pompa komunikuje się przez Bluetooth.

* * *

### Medtrum A6/P6/C6 ([Strona domowa](http://www.medtrum.com/P6.html))

** Status pętli: ** pompa Jest kandydatem do wykonania pętli. Firma ma swój własny system limitowanej połowy pętli (A6). Sterowanie za pomocą aplikacji na iPhone'a. Obecnie brak aplikacji na Androida.

** Wymagania sprzętowe dla AAPS: ** Prawdopodobnie brak, wygląda na to, że jest włączona obsługa BT w pompie.

* * *

### EOFLOW ([Strona domowa](http://www.eoflow.com/eng/main/main.html))

** Status pętli: ** pompa Jest kandydatem do wykonania pętli. Użyty pilot zdalnego sterowania to zmodyfikowane urządzenie z systemem Android. (Pompa jest obecnie dostępna tylko w Korei).

** Wymagania sprzętowe dla AAPS: ** Prawdopodobnie brak, wygląda na to, że jest włączona obsługa BT w pompie.

* * *

### Accu-Chek Solo ([Strona domowa](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

** Status pętli: ** pompa Jest kandydatem do wykonania pętli. Sprzedaż pompy rozpocznie się pod koniec 2018 r. w wybranych krajach UE. Wg wstępnych ustaleń kontrola pracy pompy odbywa się za pośrednictwem aplikacji na Androida.

** Wymagania sprzętowe dla AAPS: ** Prawdopodobnie brak, wygląda na to, że jest włączona obsługa BT w pompie.

### Medtronic Bluetooth

**Comments:** This is pump that will come out in next few years and is planned to be supported in Tidepool Loop software ([see this article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

* * *

## Pompy już nie sprzedawane (firmy już nie działają)

### Cellnovo Pump ([Homepage](https://www.cellnovo.com/en/homepage))

** Status pętli: ** Obecnie nie jest obsługiwany przez żaden z systemów pętli. Pompa może być odpowiednia do wykonania pętli, ale ponieważ protokół komunikacji jest obecnie nieznany, przyszła implementacja jest mało prawdopodobna.

** Wymagania sprzętowe dla AAPS: ** Prawdopodobnie brak, ponieważ pompa komunikuje się przez Bluetooth.

**Note about product:** It seems that company decided to exit the Pump Business. You can see more in this [article](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Pompy, które nie są odpowiednie dla pętli

### Tandem:(any) ([Homepage](https://www.tandemdiabetes.com/))

** Status pętli: ** Nie nadaje się do zapętlenia.

While ago they had firmware called T:AP (mentioned in this [article](https://www.liebertpub.com/doi/full/10.1089/dia.2018.0278?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed&), which could be used in loop (its no longer available, since pump was upgraded to x2), but that was not intended for commercial use, just for experimental use only (research projects). I talked with one of directors of company and he assured my that Tandem pump will never be open, but they have created their own closed loop system, which they are calling Control-IQ (I think it is already available in USA, and should be available in 2020 in Eu).

* * *

### Animas Vibe

** Status pętli: ** Nie nadaje się do zapętlenia. No remote control possibility. **Note:** Pump is not being sold anymore. Company stopped working in Pump bussiness (J&J).

* * *

### Animas Ping

** Status pętli: ** Nie nadaje się do zapętlenia. It has bolus possibility, but no TBR one. **Note** Stopped beeing sold when Vibe came out.

## Wymagania dotyczące możliwości zapętlenia pomp

**Prerequisite**

- Pump has to support some kind of remote control. (BT, Radio frequency, etc)
- Protocol is hacked/documented/etc.

**Minimal requirement**

- Set Temporary Basal Rate
- Get Status
- Cancel Temporary Basal Rate

**For oref1(SMB) or Bolusing:**

- Set Bolus

**Good to have**

- Cancel Bolus
- Get Basal Profile (almost requirement)
- Set Basal Profile (nice to have)
- Read History 

**Other (not required but good to have)**

- Set Extended Bolus
- Cancel Extended Bolus
- Read History
- Read TDD

* * *

### Other pumps support

If you have any other pumps you would like to see status on, please contact me (@andyrozman on gitter). In future release a lot of Pump configurations will be added to be Open loopable (you will be able to select Virtual Pump Type in configuration and your settings will be loaded - [Feature request #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).