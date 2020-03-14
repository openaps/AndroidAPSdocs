# DanaRS pompa

*Naudokite šias instrukcijas AAPS programėlės ir DanaRS (nuo 2017 m.) pompos konfigūravimui. Jei turite DanaR pompą, skaitykite [DanaR insulino pompa](./DanaR-Insulin-Pump).*

**DanaRS with new firmware v3 cannot be used with AndroidAPS!**

* Programėlė naudoja tik "BASAL A". Programa pati perrašo duomenis pompoje.

* AndroidAPS programoje eikite į Konfigūraciją ir pasirinkite DanaRS.

* Viršutiniame dešiniajame kampe paspauskite 3 taškus. Pasirinkite Nustatymai.

* Pasirinkite "DanaRS susieti naują pompą" ir patvirtinkite Jūsų DanaRS pompos serijinį numerį.
  
      ![AAPS susiejama su Dana RS](../images/AAPS_DanaRSPairing.png)
      

* Paspauskite "Pompos slaptažodis" ir įveskite savo pompos slaptažodį. (Standartinis slaptažodis yra 1234)   
  **Patvirtinkite susiejimą pompoje!**Taip, kaip įprastai darote susiedami bluetooth prietaisus (pvz.: išmanųjį telefoną ir automobilio garso sistemą).
  
      ![Dana RS patvirtina susiejimą](../images/DanaRS_Pairing.png)
      

* Pasirinkite "Boluso greitis", jei norite pakeisti standartinį boluso greitį (1 V per 12 s, 1 V per 30 s, 1 V per 60 s).

* Paleiskite telefoną iš naujo.

* Naudodami Gydytojo meniu (žr. pompos Vartotojo vadovą) nustatykite pompos bazinį greitį 0,01 U/h.

* Aktyvuokite pompoje ištęstinius bolusus.

## Specifinės DanaRS klaidos 

### Klaida suleidžiant insuliną

In case the connection between AAPS and Dana RS is lost during bolus insulin delivery (i.e. you walk away from phone while Dana RS is pumping insulin) you will see the following message and hear an alarm sound.

![Alarm insulin delivery](../images/DanaRS_Error_bolus.png)

* Dažniausiai tai tik ryšio klaida ir visas insulino kiekis sėkmingai suleidžiamas.
* Patikrinkite, ar suleistas teisingas insulino kiekis pompos istorijoje (pačioje pompoje arba AAPS skirtuke Dana > Pompos istorija > Bolusai.
* Priežiūros portale galite ištrinti klaidos pranešimą, jei to pageidaujate.
* Kito programos ir pompos susijungimo metu suleisto insulino kiekis bus patikrintas ir įrašytas. Galite tiesiog palaukti kito susijungimo arba jį pagreitinti paspaudę BT ikoną Dana skirtuke.

## Specialūs veiksmai keičiant telefoną

When switching to a new phone the following steps are neccessary:

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