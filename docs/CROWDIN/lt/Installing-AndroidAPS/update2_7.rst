Būtini patikrinimai po to, kai buvo atnaujinta AndroidAPS 2.7
***********************************************************

* Atnaujinant į AAPS 2.7, programos kodas buvo žymiai pakeistas. 
* Todėl svarbu, kad atnaujinę atliktumėte keletą pakeitimų arba patikrintumėte nustatymus.
* Prašome peržiūrėti `Išleidimo pastabos <../Installing-AndroidAPS/Releasenotes.html#version-270>`_ dėl detalių apie naujas ir išplėstines funkcijas.

Tikrinti KG šaltinį
-----------------------------------------------------------
* Patikrinkite, ar po atnaujinimo KG šaltinis yra teisingas.
* Jei jūs naudojate `xDrip+ <../Configuration/xdrip.html>`_ gali atsitikti taip, kad KG šaltinis pakeistas į modifikuotą „Dexcom“ programą.
* Atidarykite `Konfigūratorių <../Configuration/Config-Builder.html#bg-source>`_ (trijų linijų meniu pagrindinio ekrano viršuje kairėje)
* Slinkite žemyn į "KG šaltinis".
* Pasirinkite teisingą KG šaltinį, jei pakeitimai yra būtini.

.. image:: ../images/ConfBuild_BG.png
  :alt: KG šaltinis

Baigti egzaminą
-----------------------------------------------------------
* AAPS 2.7 programoje yra naujas Tikslas 11 `Automatizavimas <../Usage/Automation.html>`_.
* Jūs turite išlaikyti egzaminą (`Tikslas 3 ir 4 <../Usage/Objectives.html#objective-3-proof-your-knowledge>`_), kad užbaigtumėte `Tikslą 11 <../Usage/Objectives.html#objective-11-automation>`_.
* If for example you did not finish the exam in `objective 3 <../Usage/Objectives.html#objective-3-proof-your-knowledge>`_ yet, you will have to complete the exam before you can start `objective 11 <../Usage/objective-11-automation>`_. 
* This will not effect other objectives you have already finished. You will keep all finished objectives!

Pagrindinio slaptažodžio nustatymas
-----------------------------------------------------------
* Jis yra būtinas, kad būtų galima `eksportuoti nustatymus <../Usage/ExportImportSettings.html>`_, nes versijoje 2.7 jie yra užkoduoti.
* Atidarykite Nustatymus (trijų taškų meniu dešinėje viršutinėje pagrindinio ekrano pusėje)
* Spustelėkite trikampį žemiau "Bendrieji"
* Spauskite "Pagrindinis Slaptažodis"
* Įveskite slaptažodį, patvirtinkite slaptažodį ir spustelėkite Ok.

.. image:: ../images/MasterPW.png
  :alt: Nustatyti pagrindinį slaptažodį
  
Eksportuoti nustatymus
-----------------------------------------------------------
* AAPS 2.7 naudoja naują šifruotą atsarginės kopijos formatą. 
* Jūs turite `eksportuoti savo nustatymus <../Usage/ExportImportSettings.html>`_ po atnaujinimo į versiją 2.7.
* Settings files from previous versions can only be imported in AAPS 2.7. Export will be in new format.
* Įsitikinkite, kad saugojate savo eksportuotus nustatymus ne tik telefone, bet ir bent vienoje saugioje vietoje (jūsų kompiuteris, debesijos saugykla...).
* If you build AAPS 2.7 apk with the same keystore than in previous versions you can install new version without deleting the previous version. 
* All settings as well as finished objectives will remain as they were in the previous version.
* In case you have lost your keystore build version 2.7 with new keystore and import settings from previous version as described in the `troubleshooting section <../Installing-AndroidAPS/troubleshooting_androidstudio.html#lost-keystore>`_.

Autosens (Užuomina - nėra būtina imtis konkrečių veiksmų)
-----------------------------------------------------------
* Autosens buvo pakeistas iš statinio į dinaminį modelį.
* Autosens jautrumui apskaičiuoti dabar persijungia tarp dviejų modulių: 24 valandų ir 8 valandų laikotarpius. Jis išsirinks vieną, kuris yra jautresnis. 
* Vartotojai, kurie naudojo oref1, gali pastebėti, kad sistema gali būti mažiau dinamiška pokyčiams, dėl tuo metu pasirinkto 24 ar 8 valandas jautrumo.

Danos RS slaptažodžio nustatymas (jei naudojate Dana RS)
-----------------------------------------------------------
* Pompos slaptažodis `Dana RS pompai <../Configuration/DanaRS-Insulin-Pump.html>`_ buvo netikrinamas ankstesnėse versijose.
* Atidarykite Nustatymus (trijų taškų meniu dešinėje viršutinėje ekrano pusėje)
* Slinkite žemyn ir spustelėkite trikampį šalia "Dana RS".
* Paspauskite "Pompos slaptažodis (tik v1)"
* Įveskite pompos slaptažodį (Numatytasis slaptažodis yra 1234) ir spustelėkite Gerai.

.. image:: ../images/DanaRSPW.png
  :alt: Nustatyti Dana RS slaptažodį
  
Norėdami pakeisti slaptažodį Dana RS pompoje:

* paspauskite OK mygtuką pompoje
* Pagrindiniame meniu pasirinkite „OPTION“ (judėkite dešinėn kelis kartus paspausdami rodyklės mygtuką)
* Meniu Parinktys pasirinkite „USER OPTION“
* Rodyklės mygtuku slinkite žemyn iki "11. password"
* Įveskite senąjį slaptažodį (Numatytasis slaptažodis yra 1234)
* Įveskite naują slaptažodį (Keiskite numerius mygtukais + ir - / Perkelkite į dešinę rodyklės mygtuku).
* Patvirtinkite paspausdami OK mygtuką.
* Išsaugokite spausdami OK mygtuką dar kartą.
* Pereikite žemyn į „14. EXIT" ir paspauskite OK mygtuką.
