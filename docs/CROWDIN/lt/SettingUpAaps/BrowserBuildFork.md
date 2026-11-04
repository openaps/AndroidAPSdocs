(github-fork)=

# Kūrimas naršyklėje – 1 žingsnis: Sukurkite savo GitHub fork

```{note}
Tai puslapio [Kūrimas naršyklėje](BrowserBuild.md) **1 žingsnis**.
```

Savo asmeninį Android Java raktą ir Google Drive duomenis turėsite išsaugoti GitHub kaip paslaptis (secrets) (kaip tai padaryti, paaiškinsime vėliau).

Kadangi to negalima padaryti viešoje AndroidAPS saugykloje, turite susikurti asmeninę šaltinio kodo kopiją (ji vadinama fork).

## GitHub paskyra

Jei dar neturite GitHub paskyros, turite [ją susikurti](https://github.com/signup).  
Galite užsiregistruoti su savo el. pašto adresu arba su Google paskyra. Atlikite registracijos ir patvirtinimo veiksmus.

Kai turėsite paskyrą, [prisijunkite prie GitHub](https://github.com/login).

## Sukurkite AndroidAPS fork

Atidarykite oficialią AndroidAPS saugyklą per [šią nuorodą](https://github.com/nightscout/AndroidAPS).

Spauskite fork piktogramą. Taip jūsų paskyroje bus sukurta kopija.

![fork_aaps](../images/Building-the-App/CI/ForkAAPS.png)

Kitame ekrane slinkite žemyn ir spauskite **Create Fork**.

![fork_aaps_confirm](../images/Building-the-App/CI/ForkAAPS2.png)

*Pastaba: jei norėsite kurti kūrėjų versijas ar savo pakeitimus, galite **nuimti žymę** „Copy the master branch only“.*

![fork_aaps_main](../images/Building-the-App/CI/ForkAAPS3.png)

```{note}
Negalite sukurti fork ir matote šį pranešimą?<br/><br/>
**`No available destinations to fork this repository.`**<br/><br/>
![Already forked](../images/Building-the-App/CI/ForkAAPS3b.png)<br/><br/>
Tai reiškia, kad jau turite AndroidAPS fork.<br/>
Įsitikinkite, kad jis atnaujintas, ir tęskite paruošimo veiksmais.
```

```{warning}
**Niekada netrinkite savo fork, prieš tai nepasidarę savo slaptųjų reikšmių (secrets) atsarginės kopijos!**
```

Dabar GitHub rodo jūsų asmeninę AndroidAPS kopiją. Palikite šį naršyklės skirtuką atidarytą.

![forked_aaps](../images/Building-the-App/CI/ForkAAPS4.png)

----

**Toliau: [2 žingsnis – Sukurkite pasirašymo raktų saugyklą](BrowserBuildKeystore.md) →**
