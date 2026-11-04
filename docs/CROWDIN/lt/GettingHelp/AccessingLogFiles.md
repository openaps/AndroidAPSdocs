(Accessing-logfiles-accessing-logfiles)=

# Žurnalų failų gavimas

* Prijunkite telefoną prie kompiuterio failų persiuntimo režimu
* Žurnalų failus rasite AAPS duomenų aplanke `Android\data\info.nightscout.androidaps\files`.  
    Pagrindinio atminties aplanko pavadinimas gali šiek tiek skirtis, priklausomai nuo telefono.
* Jei naudojate [AAPSClient](#RemoteControl_aapsclient), žurnalų failai yra aplanke `Android\data\info.nightscout.aapsclient\files`.
* Pastaba: **AAPS 3.3** versijoje žurnalų failų vieta pasikeitė. See the previous versions' documentation if needed.

![žurnalai](../images/aapslog.png)

* Dabartinis žurnalo failas yra .log formato. Jį galima peržiūrėti įvairiais būdais, pavyzdžiui, naudojant [LogCat](https://developer.android.com/studio/debug/am-logcat.html) programoje Android Studio, bet kurią Android žurnalų peržiūros programėlę arba tiesiog kaip paprastą tekstą. 
* Senesni žurnalų failai yra suglaudinami (ZIP) ir saugomi aplankuose pagal datą ir laiką. 
* Jei dėl galimos klaidos dalijatės žurnalo failu [Discord](https://discord.gg/4fQUWHZ4Mw), išpakuokite ir įkelkite failą, kurio data yra prieš klaidą.