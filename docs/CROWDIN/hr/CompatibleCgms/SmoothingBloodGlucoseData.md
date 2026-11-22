# Zaglađivanje podataka GUK-a

Ako su podaci **GUK-a** nestabilni ili imaju šum, **AAPS** može pogrešno dozirati inzulin, što dovodi do visokih ili niskih vrijednosti. Ako primijetite greške ili imate nestabilne podatke s CGM-a, važno je onemogućiti petlju dok se problem ne riješi. Ovisno o vašem CGM-u, takvi problemi mogu biti posljedica konfiguracije CGM-a u **AAPS-u** (kako je objašnjeno niže) ili problema s mjestom CGM senzora (zbog čega će možda trebati zamijeniti CGM senzor).

## Zaglađivanje podataka u AAPS-u

**AAPS** nudi mogućnost zaglađivanja podataka u **AAPS-u** umjesto u CGM aplikaciji. Otvorite **izbornik** (☰), odaberite [**Konfiguracija**](../SettingUpAaps/ConfigBuilder.md), zatim **Zaglađivanje**. Postoje četiri opcije i samo jedna može biti aktivna u isto vrijeme: **Bez zaglađivanja**, **Eksponencijalno zaglađivanje**, **Prosječno zaglađivanje** i **Unscented Kalman Filter**.

![Konfiguracija > Zaglađivanje](../images/v4/Configuration/configuration_smoothing.png)

### Eksponencijalno zaglađivanje

Općenito, s ovom opcijom preporučuje se početi, jer najsnažnije uklanja šum i prepravlja najnoviju vrijednost. Ipak, pogledajte tablicu ispod za druge posebne preporuke.

### Prosječno zaglađivanje

Ova opcija radi slično kao zaglađivanje unatrag (back smoothing) koje je ranije postojalo na nekim CGM platformama. Brže reagira na nedavne promjene vrijednosti GUK-a, pa je zato sklonija pogrešnoj reakciji na CGM podatke sa šumom.

### Bez zaglađivanja

Ovu opciju koristite samo ako vaša aplikacija za prikupljanje podataka već ispravno zaglađuje CGM podatke prije nego što ih pošalje u **AAPS**.

### Unscented Kalman Filter (UKF)

Ova opcija koristi statistički model koji stalno procjenjuje vašu stvarnu vrijednost glukoze i brzinu njezine promjene iz pristiglih očitanja (koja mogu imati šum) i sama se prilagođava tome koliko šuma vaš senzor trenutačno ima. Također prepoznaje i odbacuje iznenadna očitanja koja jako odstupaju. To je naprednija zamjena za eksponencijalno i prosječno zaglađivanje, korisna ako želite da se zaglađivanje samo prilagođava promjenjivoj razini šuma vašeg senzora umjesto da koristi fiksnu metodu.

(smoothing-xdrip-dexcom-g6)=

## Prijedlozi za korištenje zaglađivanja

Metodu zaglađivanja možete mijenjati i automatski, na primjer ovisno o starosti senzora, pomoću [radnje automatizacije](#automations-automation-action) **Promijeni zaglađivanje**.

|               | Eksponencijalno |    Prosječno    | Bez zaglađivanja |
| ------------- |:---------------:|:---------------:|:----------------:|
| G5/G6/ONE     |  Ako ima šuma   |                 |   Preporučeno    |
| G7/ONE+/Stelo |  Ako ima šuma   | Ako je stabilno |                  |

Libre senzori imaju šum i mogu trebati zaglađivanje. Kad koristite izravnu vezu xDripa ili izvor podataka zakrpane aplikacije (primanje iz druge aplikacije, uključujući Juggluco), [zaglađivanje se već radi u aplikaciji](#libre2-value-smoothing-raw-values).

| Senzor / izvor podataka | Juggluco  | xDrip izravno | xDrip bridge | xDrip zakrpana aplikacija |
| ----------------------- |:---------:|:-------------:|:------------:|:-------------------------:|
| Libre 1/14 dana/Pro     |    N/P    |      N/P      |  Prosječno   |            N/P            |
| Libre 2/2+ (EU)         | Prosječno |      Bez      |  Prosječno   |            Bez            |
| Libre 2/2+/3/3+         | Prosječno |      N/P      |     N/P      |            Bez            |
