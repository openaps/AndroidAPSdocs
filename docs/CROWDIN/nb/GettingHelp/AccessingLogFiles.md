(Accessing-logfiles-accessing-logfiles)=

# Tilgang til loggfiler

* Koble telefonen til en datamaskin i filoverføringsmodus
* Finn loggfilene i AAPS-datamappen, i `Android\data\info.nightscout.androidaps\files`.  
    Navnet på rotmappen for lagring kan variere litt fra telefon til telefon.
* For [AAPSClient](#RemoteControl_aapsclient) er plasseringen `Android\data\info.nightscout.aapsclient\files`.
* Merk: Plasseringen av loggene ble endret i **AAPS 3.3**. Se dokumentasjonen for tidligere versjoner om nødvendig.

![logs](../images/aapslog.png)

* Den gjeldende loggen er en .log-fil som kan vises på flere måter, for eksempel med [LogCat](https://developer.android.com/studio/debug/am-logcat.html) i Android Studio, med en hvilken som helst Android-app for visning av logger, eller rett og slett som ren tekst. 
* Eldre loggfiler er pakket som zip-filer og lagret i mapper sortert etter dato og klokkeslett. 
* Hvis du deler loggfilen din på [Discord](https://discord.gg/4fQUWHZ4Mw) for å snakke om en mulig feil, må du pakke ut og laste opp filen som er datert før feilen oppsto.