(github-fork)=

# Nettleserbygg – Steg 1: Lag din GitHub-fork

```{note}
Dette er **steg 1** av [Nettleserbygg](BrowserBuild.md).
```

Du må lagre din personlige Android Java-nøkkel og Google Drive-informasjon som hemmeligheter (secrets) i GitHub (senere i prosessen forklarer vi hvordan).

Siden dette ikke kan gjøres i det offentlige AndroidAPS-repositoryet, må du lage din egen personlige kopi av kildekoden (kalt en fork).

## GitHub-konto

Du må [opprette en GitHub-konto](https://github.com/signup) hvis du ikke har en fra før.  
Du kan registrere deg med e-post, eller du kan registrere deg med Google. Følg registrerings- og verifiseringsprosessen.

Når du har en konto, [logg inn på GitHub](https://github.com/login).

## Lag en fork av AndroidAPS

Åpne det offisielle AndroidAPS-repositoryet via [denne lenken](https://github.com/nightscout/AndroidAPS).

Trykk på fork-ikonet. Dette lager en kopi i din egen konto.

![fork_aaps](../images/Building-the-App/CI/ForkAAPS.png)

Bla ned på neste skjerm og trykk **Create Fork**.

![fork_aaps_confirm](../images/Building-the-App/CI/ForkAAPS2.png)

*Merk: du kan **fjerne haken** ved «Copy the master branch only» hvis du vil bygge utviklerversjoner eller tilpasninger.*

![fork_aaps_main](../images/Building-the-App/CI/ForkAAPS3.png)

```{note}
Får du ikke laget en fork, og ser du dette?<br/><br/>
**`No available destinations to fork this repository.`**<br/><br/>
![Already forked](../images/Building-the-App/CI/ForkAAPS3b.png)<br/><br/>
Det betyr at du allerede har en fork av AndroidAPS.<br/>
Sørg for at den er oppdatert, og fortsett til forberedelsesstegene.
```

```{warning}
**Slett aldri forken din uten å ha tatt en sikkerhetskopi av hemmelighetene (secrets) dine!**
```

GitHub viser nå din personlige kopi av AndroidAPS. La denne nettleserfanen stå åpen.

![forked_aaps](../images/Building-the-App/CI/ForkAAPS4.png)

----

**Neste: [Steg 2 – Lag keystore-filen for signering](BrowserBuildKeystore.md) →**
