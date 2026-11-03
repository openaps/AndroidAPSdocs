(aaps-ci-option2)=

# 2 variantas – Įkelkite esamą raktų saugyklą

```{note}
Tai puslapio [Kūrimas naršyklėje](BrowserBuild.md) [2 žingsnio – Sukurkite pasirašymo raktų saugyklą](BrowserBuildKeystore.md) dalis. Įsitikinkite, kad perskaitėte [kaip pasirinkti tarp 1 ir 2 varianto](#aaps-ci-preparation).
```

2 variantas pakartotinai naudoja JKS, kurį jau sukūrėte ankstesnio AAPS kūrimo metu kompiuteryje su Android Studio. Jis tinka tiems, kas jau turi JKS ir žino JKS slaptažodį bei pseudonimą (alias).

Laukuose `KEYSTORE_PASSWORD`, `KEY_ALIAS` ir `KEY_PASSWORD` GitHub svetainėje įveskite savo tikrus slaptažodžius ir pseudonimą – tuos pačius, kuriuos naudojote Android Studio (žr. žemiau, kur juos naudojote).

```{warning}
**Slaptažodžiai su specialiaisiais simboliais.** Įveskite slaptažodžius tiksliai tokius, kokie jie yra. Nepridėkite atvirkštinio brūkšnio (backslash) ar kito kaitos (escape) simbolio: kūrimo darbo eiga išsaugo kiekvieną simbolį nepakeistą, o pridėtas atvirkštinis brūkšnys tampa slaptažodžio dalimi.

Jei kūrimas vis tiek nepavyksta pasirašymo žingsnyje, o jūsų slaptažodyje yra `$`, atvirkštinė kabutė (backtick), `"` arba `\`, jūsų fork esantis darbo eigos failas yra pasenęs. [Sinchronizuokite savo fork](#Update-to-new-version-update-your-repo) su naujausia dev versija ir vėl paleiskite kūrimą. Žr. [Kūrimas naršyklėje: trikčių šalinimas](#aaps-ci-password-special-characters).
```

```{admonition} KEY + PASSWORDS
:class: dropdown

![Slaptažodžių įsiminimas](../images/Building-the-App/044_RememberPwd.png)
```

## Pasirinkite savo įrenginį

```{tip}
Kuriate iš **Android telefono**? Tokiu atveju naudokite [AAPS Builder](BrowserBuildAapsBuilder.md): jam paruošimo failo nereikia.
```

Atlikite veiksmus puslapyje, kuris skirtas įrenginiui, iš kurio kuriate:

- **[Kompiuteris](BrowserBuildO2Computer.md)** – Windows, Mac arba Linux.

```{tip}
Įrenginį galite pakeisti bet kada – tiesiog atidarykite atitinkamą puslapį.
```

```{toctree}
:hidden:

Kompiuteris <BrowserBuildO2Computer.md>
```
