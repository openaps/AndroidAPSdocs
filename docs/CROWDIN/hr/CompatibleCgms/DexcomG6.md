# Dexcom G6 i ONE

## Najprije osnove

-   Slijedite opće preporuke za higijenu CGM-a i postavljanje senzora [ovdje](../CompatibleCgms/GeneralCGMRecommendation.md).

## Opći savjeti za korištenje petlje s G6 i ONE

- Novi odašiljači zovu se Firefly. Senzori se ne mogu ponovno pokrenuti bez uklanjanja odašiljača, a sam odašiljač ne može se resetirati; ti odašiljači također ne daju sirove podatke.

- Ako ponovno pokrećete senzore, budite spremni na kalibraciju i pratite odstupanja.

- Namakanje G6/ONE unaprijed (pre-soak) uz tvorničku kalibraciju vjerojatno će dati odstupanja u rezultatima. Ako senzor namačete unaprijed (pre-soak), za najbolje rezultate vjerojatno ćete ga morati kalibrirati.

Više pročitajte u [članku](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) koji je objavio Tim Street na [www.diabettech.com](https://www.diabettech.com).

## Ako koristite G6 ili ONE s xDripom

- Ako to još niste učinili, preuzmite [xDrip](https://github.com/NightscoutFoundation/xDrip) i podesite njegove postavke prema stranici [Postavke xDripa](../CompatibleCgms/xDrip.md).
- Odaberite xDrip u [**Konfiguracija → Izvor GUK-a**](#Config-Builder-bg-source).
- Odašiljači Dexcom G6 i ONE mogu istodobno biti povezani s Dexcomovim prijemnikom (ili umjesto njega s pumpom t:slim) i s jednom aplikacijom na vašem telefonu.
- Kada xDrip koristite kao prijemnik, najprije deinstalirajte aplikaciju Dexcom. **Ne možete istodobno povezati xDrip i aplikaciju Dexcom s odašiljačem!**
- Ako vam treba Clarity i želite koristiti alarme xDripa, koristite [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (samo G6) s lokalnim emitiranjem (local broadcast) u xDrip.
- xDrip možete koristiti i kao pomoćnu aplikaciju uz službenu aplikaciju Dexcom, ali tada očitanja GUK-a mogu kasniti. Za čitanje obavijesti aplikacije Dexcom bez xDripa, kao pouzdanog izvora podataka, koristite [Čitač obavijesti](#DexcomG6-notification-reader).
- S današnjim odašiljačima xDrip uvijek koristi [izvorni algoritam](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) odašiljača; nema razloga da ga isključite. [Preventivna ponovna pokretanja](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) rade samo na starim odašiljačima (firmware 1.6.5.25 ili stariji), gdje su potrebna da se senzor ne zaustavi nakon 10 dana; novi odašiljači (Firefly) ih zanemaruju. Prije bilo kakvog ponovnog pokretanja pročitajte [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) (ponovno pokretanje senzora).
- Sve što se odnosi na sam senzor i odašiljač opisano je na stranici [xDrip Dexcom](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Ako koristite G6 s aplikacijom Build Your Own Dexcom App

```{admonition} Old app version
:class: warning
Dexcom BYODA je sada vrlo stara verzija aplikacije i ne može se ažurirati.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) podržava lokalno emitiranje (local broadcast) u AAPS i/ili xDrip

-   Ova aplikacija omogućuje korištenje vašeg Dexcoma G6 s bilo kojim Android pametnim telefonom.
-   Deinstalirajte originalnu aplikaciju Dexcom ili izmijenjenu aplikaciju Dexcom ako ste prije koristili jednu od njih (**nemojte zaustaviti** senzor koji trenutno radi)
-   Instalirajte preuzeti apk
-   U izmijenjenoj aplikaciji unesite kôd senzora i serijski broj odašiljača.
-   U postavkama telefona idite na aplikacije > Dexcom G6 > dopuštenja > dodatna dopuštenja i pritisnite 'Access Dexcom app'.
-   Nakon kratkog vremena BYODA bi trebao uhvatiti signal odašiljača.

### Postavke za AAPS

-   Odaberite **BYODA** u [**Konfiguracija → Izvor GUK-a**](#Config-Builder-bg-source).

-   Ako ne primate nikakve vrijednosti, odaberite bilo koji drugi izvor podataka, a zatim ponovno odaberite **BYODA** da se zatraže dopuštenja za uspostavu veze između AAPS-a i emitiranja BYODA.

### Postavke za xDrip

-   Kao izvor podataka odaberite '640G/Eversense'.
-   Da biste primali vrijednosti, u xDripu morate izvršiti naredbu 'start sensor'. To neće utjecati na vaš trenutni senzor kojim upravlja Build Your Own Dexcom App.

(DexcomG6-notification-reader)=
## Ako koristite G6 ili ONE s Čitačem obavijesti

Službena aplikacija Dexcom G6 ili ONE ostaje povezana s odašiljačem. **AAPS** čita vrijednost glukoze izravno iz obavijesti aplikacije Dexcom, bez ikakve druge aplikacije između.

```{admonition} Trusted data source
:class: note
Očitanja iz aplikacija Dexcom G6 i ONE su [pouzdan izvor podataka GUK-a](#GettingStarted-TrustedBGSource): SMB-ovi mogu biti dopušteni cijelo vrijeme.
```

U usporedbi s BYODA ili xDripom, Čitač obavijesti ima ograničenja:

- **Nema strelice trenda** i **nema naknadnog popunjavanja (backfill)**: očitanja propuštena dok je telefon bio isključen ili izvan dometa su izgubljena.
- Svako očitanje dobiva vrijeme kada se obavijest pojavila, a ne točno vrijeme očitanja senzora.
- Čitaju se samo vrijednosti između 40 i 405 mg/dL (2,2 i 22,5 mmol/L). "LOW" i "HIGH" se ne čitaju.

### Postavite aplikaciju Dexcom

-   Neka aplikacija Dexcom ostane instalirana i povezana s odašiljačem.
-   Provjerite prikazuje li aplikacija Dexcom trenutnu vrijednost glukoze u svojoj obavijesti. Njezine obavijesti moraju ostati vidljive: nemojte ih utišati ni sakriti.
-   U aplikaciji Dexcom koristite iste jedinice glukoze (mg/dL ili mmol/L) kao u **AAPS-u**. Inače **AAPS** ne može pročitati vrijednost.

### Konfiguracija u AAPS-u

-   Odaberite **Čitač obavijesti** u [**Konfiguracija → Izvor GUK-a**](#Config-Builder-bg-source) i potvrdite promjenu.

    ![Izvor GUK-a: odabran Čitač obavijesti](../images/NotificationReader_BgSource.png)

-   Na glavnom zaslonu **AAPS** zatim prikazuje **Potrebna dopuštenja**. Pokraj **Pristup obavijestima** dodirnite **Odobri**.

    ![Potrebna dopuštenja: Pristup obavijestima](../images/NotificationReader_Permissions.png)

-   Android otvara svoj popis pristupa obavijestima (njegov naziv ovisi o vašoj verziji Androida, na primjer *Čitanje obavijesti, odgovaranje i upravljanje* (Notification read, reply & control)). Odaberite **AAPS**, uključite **Dopusti pristup obavijestima** i potvrdite s **Dopusti**.

    ![Android traži da dopustite pristup obavijestima za AAPS](../images/NotificationReader_AllowDialog.png)

    Android upozorava da bi **AAPS** mogao čitati sve vaše obavijesti. **AAPS** čita samo obavijesti podržanih CGM aplikacija i zanemaruje sve ostale.

    ![Pristup obavijestima dopušten za AAPS](../images/NotificationReader_AccessOn.png)

-   Ako je **Dopusti pristup obavijestima** zasivljeno (*Kontrolira ograničena postavka* (Controlled by Restricted Setting)), Android to blokira jer **AAPS** nije instaliran iz Trgovine Play. Otvorite informacije o aplikaciji **AAPS** (dugo pritisnite ikonu **AAPS** > **Informacije o aplikaciji**), dodirnite izbornik s tri točke gore desno i odaberite **Dopusti ograničene postavke**. Zatim se vratite na zaslon pristupa obavijestima i dopustite ga.
-   Očitanja se prikazuju u **AAPS-u** kada aplikacija Dexcom prikaže novu vrijednost.

```{warning}
Ako obavijest aplikacije Dexcom prikazuje više od jednog broja glukoze ili nijedan, **AAPS** preskače tu obavijest.
```


(DexcomG6-troubleshooting-g6)=
## Rješavanje problema s G6 i ONE

### Rješavanje problema specifičnih za Dexcom G6/ONE

-   Pomaknite se prema dolje do **Troubleshooting** (rješavanje problema) [ovdje](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Opće rješavanje problema

Opće rješavanje problema za CGM-ove možete pronaći [ovdje](#general-cgm-troubleshooting).

### Novi odašiljač sa senzorom koji već radi

Ako slučajno mijenjate odašiljač tijekom sesije senzora koji radi, možete pokušati ukloniti odašiljač bez oštećenja nosača senzora. Videozapis možete pronaći [ovdje](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Ako umjesto toga odaberete [ovo rješenje](https://youtu.be/tx-kTsrkNUM), morate paziti da trakom ne [oštetite kontakte senzora](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html).
