(Troubleshooting-NSClient-troubleshooting-nsclient)=

# NSClient trikčių šalinimas

NSClient veikimui reikia stabilaus ryšio su Nightscout. Dėl nestabilaus ryšio atsiranda sinchronizavimo klaidų ir naudojama daug duomenų.

Jei niekas jūsų neseka per Nightscout, galite pristabdyti NSClient ir taip taupyti bateriją. Arba galite nustatyti NSClient taip, kad jis jungtųsi tik per Wi-Fi ir (arba) tik kraunant telefoną.

* Kaip atpažinti nestabilų ryšį?

Atidarykite NSClient ekraną (**Konfigūracija** > **Ryšys** > **NSClientV3** > **Atidaryti įskiepį**) ir stebėkite lauką **Būsena** ir žurnalą. Kai websockets įjungti, būsena turi likti „connected“ (prisijungta), o žurnale beveik neturi būti pakartotinio prisijungimo pranešimų. Jei matote daug pakartotinių prisijungimų, yra problema.

* Paleisti iš naujo

Pirmiausia paleiskite iš naujo Nightscout, o tada telefoną, kad pamatytumėte, ar problema išlieka.

Jei jūsų Nightscout veikia Heroku, Nightscout galite paleisti iš naujo taip: prisijunkite prie Heroku, spustelėkite savo Nightscout programos pavadinimą, spustelėkite meniu 'More', tada 'Restart all dynos'.

Jei naudojate kitą paslaugos teikėją, vadovaukitės jo dokumentacija.

* Telefono problemos

Android gali perjungti jūsų telefoną į miego režimą. Patikrinkite, ar telefono energijos nustatymuose AAPS turi išimtį, kad galėtų visą laiką veikti fone.

Dar kartą patikrinkite NSClient ten, kur stiprus tinklo signalas.

Try another phone.

* Nightscout

Jei jūsų svetainė veikia Azure, daugelio žmonių ryšio problemos sumažėjo perkėlus ją į Heroku.

Ryšio problemas Azure galima apeiti taip: Application settings nustatykite HTTP protocol į 2.0 ir Websockets į ON

* Iš Nightscout negaunama KG rodmenų

Jei **AAPS** prie Nightscout prisijungia teisingai, bet KG rodoma kaip N/A: [NSClientV3 nustatymuose](#Preferences-nsclient) atidarykite **Sinchronizacija** ir įjunkite **Gauti NGJ duomenis iš NS**. Ši parinktis paslėpta, kai įjungtas kliento valdymas ([sustiprintos apsaugos režimas](#client-master-control-hardened-mode)). Tokiu atveju patikrinkite, ar **Konfigūracija** → **Glikemijos šaltinis** pasirinkta **NSClient glikemija**.

* Jei vis dar gaunate klaidą...

Patikrinkite savo duomenų bazės dydį MongoDB (arba per Nightscout įskiepį „database size“). Jei naudojate nemokamą MongoDB planą, 496MB reiškia, kad duomenų bazė pilna ir ją reikia išvalyti. [Vadovaukitės šiomis Nightscout instrukcijomis, kaip patikrinti duomenų bazės dydį ir išvalyti duomenis](https://nightscout.github.io/troubleshoot/troubleshoot/#database-full).

Prieš valydami duomenų bazę, jei dar to nepadarėte, apsvarstykite galimybę paaukoti savo AAPS duomenis projektui Open Humans (moksliniams tyrimams). Instrukcijos yra [Open Humans konfigūravimo puslapyje](../SupportingAaps/OpenHumans.md).