(github-fork)=

# Bouwen in de browser – Stap 1: Je GitHub-fork maken

```{note}
Dit is **Stap 1** van [Bouwen in de browser](BrowserBuild.md).
```

Je moet je persoonlijke Android Java-sleutel en je Google Drive-gegevens geheim opslaan in GitHub (verderop leggen we uit hoe).

Dat kan niet in de openbare repository van AndroidAPS. Daarom moet je een persoonlijke kopie van de broncode maken (een fork).

## GitHub-account

Als je nog geen GitHub-account hebt, moet je [een GitHub-account maken](https://github.com/signup).  
Je kunt je aanmelden met je e-mailadres of met Google. Volg de stappen voor registratie en verificatie.

Als je een account hebt, [log je in op GitHub](https://github.com/login).

## AndroidAPS forken

Open de officiële AndroidAPS-repository via [deze link](https://github.com/nightscout/AndroidAPS).

Tik op het fork-icoon. Dit maakt een kopie in je eigen account.

![fork_aaps](../images/Building-the-App/CI/ForkAAPS.png)

Scrol op het volgende scherm omlaag en tik op **Create Fork**.

![fork_aaps_confirm](../images/Building-the-App/CI/ForkAAPS2.png)

*Let op: je kunt het vinkje bij "Copy the master branch only" **weghalen** als je ontwikkelversies of aangepaste versies wilt bouwen.*

![fork_aaps_main](../images/Building-the-App/CI/ForkAAPS3.png)

```{note}
Kun je niet forken en zie je dit?</br></br>
**`No available destinations to fork this repository.`**</br></br>
![Already forked](../images/Building-the-App/CI/ForkAAPS3b.png)</br></br>
Dan heb je al een fork van AndroidAPS.</br>
Zorg dat die bijgewerkt is en ga verder met de voorbereidende stappen.
```

```{warning}
**Verwijder je fork nooit zonder eerst een back-up van je secrets te maken!**
```

GitHub toont nu je persoonlijke kopie van AndroidAPS. Laat dit tabblad van de webbrowser open.

![forked_aaps](../images/Building-the-App/CI/ForkAAPS4.png)

----

**Volgende: [Stap 2 – Je keystore voor ondertekening maken](BrowserBuildKeystore.md) →**
