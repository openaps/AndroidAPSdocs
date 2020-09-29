# DanaRS pompa

*Naudokite šias instrukcijas AAPS programėlės ir DanaRS (nuo 2017 m.) pompos konfigūravimui. Jei turite DanaR pompą, skaitykite [DanaR insulino pompa](./DanaR-Insulin-Pump).*

**New Dana RS firmware v3 can be used from AndroidAPS version 2.7 onwards.**

* Programėlė naudoja tik "BASAL A". Programa pati perrašo duomenis pompoje.

* AndroidAPS programoje eikite į Konfigūraciją ir pasirinkite DanaRS.

* Viršutiniame dešiniajame kampe paspauskite 3 taškus. Pasirinkite Nustatymai.

* Pasirinkite "DanaRS susieti naują pompą" ir patvirtinkite Jūsų DanaRS pompos serijinį numerį.
  
  ![AAPS ir Dana RS suporavimas](../images/AAPS_DanaRSPairing.png)

* Select Pump password and input your password.
  
  * For DanaRS with firmware 1 and 2 the default password is 1234.
  * For DanaRS with firmware 3 the default password is a combination of production month and production date (i.e. month 01 and day 24). ==> On your pump open main menu -> review -> information. Ne. 3 is production date.

* **You have to confirm the pairing on the pump!** That's just the way you are used to from other bluetooth pairings (i.e. smartphone and car audio).
  
  ![Dana RS confirmation pairing](../images/DanaRS_Pairing.png)

* Select Bolus Speed to change the default bolus speed used (12sec per 1u, 30sec per 1u or 60sec per 1u).

* Restart your phone.

* Set basal step on pump to 0.01 U/h using Doctors menu (see pump user guide)

* Įgalinkite ištęstus bolusus pompoje

## Specifinės DanaRS klaidos 

### Klaida suleidžiant insuliną

Jei ryšys tarp AAPS ir DanaRS pompos nutrūksta boluso suleidimo metu (pvz.: Jūs nueinate per toli nuo telefono), Jūs matysite klaidos pranešimą ir girdėsite garsinį signalą.

![Insulino tiekimo perspėjimas](../images/DanaRS_Error_bolus.png)

* Dažniausiai tai tik ryšio klaida ir visas insulino kiekis sėkmingai suleidžiamas.
* Patikrinkite, ar suleistas teisingas insulino kiekis pompos istorijoje (pačioje pompoje arba AAPS skirtuke Dana > Pompos istorija > Bolusai.
* Priežiūros portale galite ištrinti klaidos pranešimą, jei to pageidaujate.
* Kito programos ir pompos susijungimo metu suleisto insulino kiekis bus patikrintas ir įrašytas. Galite tiesiog palaukti kito susijungimo arba jį pagreitinti paspaudę BT ikoną Dana skirtuke.

## Specialūs veiksmai keičiant telefoną

Kai keičiate seną telefoną į naują, turite atlikti šiuos veiksmus:

* **Eksportuoti nustatymus** senajame telefone
  
  * Paspauskite "Sumuštinio" meniu (viršutiniame kairiajame kampe)
  * Servisas
  * Eksportuoti nustatymus
    
    ![AAPS eksportuoti nustatymus](../images/AAPS_ExportSettings.png)

* **Perkelti** nustatymus į naują telefoną

* **Rankiniu būdu susieti** Dana RS su nauju telefonu 
  * Kadangi pompos susiejimo nustatymai persikelia į naują telefoną kartu su kitais, Jūsų naujas telefonas jau "pažįsta" pompą, todėl nepradės BT paieškos. Todėl naują telefoną ir pompą reikia susieti rankiniu būdu.
* **Instaliuokite AndroidAPS** naujame telefone.
* **Importuokite nustatymus** naujame telefone 
  * Paspauskite "Sumuštinio" meniu (viršutiniame kairiajame kampe)
  * Servisas
  * Importuoti nustatymus

## Keliavimas per skirtingas laiko juostas su DanaRS pompa

Žiūrėkite skyrių [Keliavimas per skirtingas laiko juostas su pompa](../Usage/Timezone-traveling#danarv2-danars).