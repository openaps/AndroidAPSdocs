# Necessary checks after update coming from AAPS 2.6

- Codul programului a fost modificat semnificativ atunci când s-a trecut la AAPS 2.7.
- Prin urmare, este important să efectuați unele modificări sau să verificați setările după actualizare.
- Please see [release notes](#Releasenotes-version-2-7-0) for details on new and extended features.

## Verificați sursa glicemiei

- Verificați dacă sursa glicemiei este corectă după actualizare.
- Especially when using [xDrip+](../CompatibleCgms/xDrip.md) it might happen, that BG source is changed to Dexcom app (patched).
- Open [Config builder](#Config-Builder-bg-source) (hamburger menu on top left side of home screen)
- Derulați în jos la "sursa glicemiei".
- Selectați sursa corectă a glicemiei dacă sunt necesare modificări.

![Sursă valoare glicemie](../images/ConfBuild_BG.png)

## Finalizați examenul

- AAPS 2.7 contains new objective 11 (in later versions renumbered to objective 10!) for [automation](../DailyLifeWithAaps/Automations.md).
- You have to finish exam ([objective 3 and 4](#objectives-objective3)) in order to complete objective 11.
- If for example you did not finish the exam in [objective 3](#objectives-objective3) yet, you will have to complete the exam before you can start objective 11.
- This will not effect other objectives you have already finished. Veți păstra toate obiectivele finalizate!

## Setați parola principală

- Necessary to be able to [export settings](ExportImportSettings.md) as they are encrypted as of version 2.7.
- Deschideți preferințele (meniu-trei-puncte în partea dreaptă sus a ecranului principal)
- Apăsați pe triunghi sub "General"
- Apăsați pe "parola principală"
- Introduceți parola, confirmați parola și apăsați pe OK.

![Setați parola principală](../images/MasterPW.png)

## Exportă setările

- AAPS 2.7 folosește un nou format de copie de rezervă criptat.
- You must [export your settings](ExportImportSettings.md) after updating to version 2.7.
- Setările din versiunile anterioare pot fi doar importate în AAPS 2.7. Exportarea va fi în format nou.
- Asigurați-vă că păstrați setările exportate nu numai pe telefon, ci și într-un loc sigur (calculator personal, cloud șamd).
- Dacă construiți fișierul AAPS 2.7 apk cu aceeași cheie (keystore) ca în versiunile anterioare, puteți instala o versiune nouă fără a șterge versiunea anterioară.
- Toate setările, precum și obiectivele finalizate vor rămâne așa cum au fost în versiunea anterioară.
- In case you have lost your keystore build version 2.7 with new keystore and import settings from previous version as described in the [troubleshooting section](#troubleshooting_androidstudio-lost-keystore).

## Autosens (indiciu - nicio acțiune necesară)

- Autosens se modifică la un model de schimbare dinamică care reproduce modelul de referință.
- Autosens va comuta acum între o fereastră de 24 și 8 ore pentru calcularea sensibilității. Va alege care dintre ele este mai sensibilă.
- If users have come from oref1 they will probably notice the system may be less dynamic to changes, due to the varying of either 24 or 8 hours of sensitivity.

## Setați parola pompei pentru Dana RS (dacă se utilizează Dana RS)

- Pump password for [Dana RS](../CompatiblePumps/DanaRS-Insulin-Pump.md) was not checked in previous versions.
- Deschideți preferințele (meniu-trei-puncte în partea dreaptă sus a ecranului)
- Derulați în jos și atingeți pe triunghi lângă "Dana RS".
- Atingeți pe "Parola pompei (v1)"
- Enter pump password ([Default password](#DanaRS-Insulin-Pump-default-password) is different depending on firmware version) and click OK.

![Set Dana RS password](../images/DanaRSPW.png)

To change password on Dana RS follow instructions on [DanaRS page](#DanaRS-Insulin-Pump-change-password-on-pump).
