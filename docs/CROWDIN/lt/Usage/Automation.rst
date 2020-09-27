Automatizavimas
**************************************************

Kas yra Automatizavimas
==================================================
Dėl nuolatinių, pasikartojančių įvykių gali būti, kad visada turite pakeisti tuos pačius parametrus. Norėdami išvengti papildomo darbo, galite pabandyti automatizuoti visą reikalą (jei galite jį pakankamai tiksliai nurodyti). 

pvz.,  galite sukurti aukšto tikslo veiksmų rinkinį, kuris automatiškai suaktyvinamas, kai gliukozės kiekis kraujyje yra mažas. Arba, jei esate savo sporto klube, laikinas tikslas gali būti suaktyvintas automatiškai. 

Prieš naudodamiesi automatizavimu, turite išmanyti `laikinus tikslus <./temptarget.html>`_ ir (arba) profilio keitimą. 

Įsitikinkite, kad jūs tikrai suprantate, kaip automatizavimas veikia prieš nustatant savo pirmąjį paprastą taisyklę. ** Vietoje veiksmų, leiskite AAPS pirmą kartą rodyti tik pranešimus.** Kai esate tikri, kad automatizavimas yra inicijuotas tinkamu laiku, pakeisti pranešimą realiu veiksmu.

.. image:: ../images/Automation_ConditionAction_RC3.png
  :alt: Automatizavimo būsena + veiksmai

Kaip naudoti
==================================================
Norėdami nustatyti automatizavimą, jūs turite suteikti jam pavadinimą, bent vieną sąlygą ir bent vieną atliktiną veiksmą. 

Svarbios pastabos
--------------------------------------------------
**Automatizavimas vis dar yra aktyvus, kai ciklas yra išjungtas!**

Todėl, jei reikia, išjunkite automatizavimo taisykles, kai išjungiate ciklą. Norėdami tai padaryti, pašalinkite varnelę laukelyje, esančiame automatizavimo taisyklės pavadinimo kairėje.

.. image:: ../images/Automation_ActivateDeactivate.png
  :alt: Įjungti ir išjungti automatizavimo taisyklę

Bendrieji
--------------------------------------------------
Yra kai kurie apribojimai:

* Glikemijos lygis turi būti nuo 72 iki 270 md/dl (4–15 mmol/l).
* Profilio procentinė dalis turi būti nuo 70% iki 130%.
* Yra 5 min. laiko tarpas tarp kiekvieno įvykdymo (ir prieš pirmąjį įvykdymą).

**Prašome, būkite atsargūs:**

* ** mažiau nei -2 reiškia: -3 ir mažiau (-4, -10 ir t. t.)**
* **daugiau nei -2 reiškia: -1 ir daugiau (-1, 0, +10, ir t. t.)**


Sąlyga
--------------------------------------------------
Jūs galite pasirinkti tarp kelių sąlygų. Čia minimos tik kelios, tačiau dauguma jų yra savaime suprantamos, todėl čia nėra aprašytos:

Susietos sąlygos: Galite naudoti kelias sąlygas ir jas susieti taip 

  * "Ir"
  * "Arba"
  * "Išskirtinė arba" (t. y. viena (ir tik viena) iš sąlygų turi būti taikoma veiksmui atlikti)
   
* Laikas prieš pasikartojantis laikas

  * Laikas = vienkartinis įvykis
  * Pasikartojantis laikas = kažkas, kas vyksta reguliariai (pvz. kartą per savaitę, kiekvieną darbo dieną ir pan.)
   
* Vieta: Konfigūratoriuje (automatizavimas) galite pasirinkti, kurią vietos nustatymo paslaugą norite naudoti:

  * Pasyvi vieta: AAPS naudoja tik tą vietą, kurios reikalauja kitos programos
  * Tinklo vieta: vietos nustatymas naudojant jūsų mobiliojo ryšio paslaugų teikėjo infrastruktūrą arba Wifi
  * GPS vieta (Dėmesio! Gali sukelti pernelyg didelį akumuliatoriaus sunaudojimą!)
  
Veiksmas
--------------------------------------------------
Galite pasirinkti vieną ar daugiau veiksmų: 

* nustatykite laikiną tikslą 

  * turi būti tarp 72 mg/dl ir 270 mg/dl (4 mmol/l ir 15 mmol/l)
  * veikia tik tada, jei nėra ankstesnių laikinų tikslų
   
* sustabdykite laikiną tikslą
* pranešimas
* profilio procentas

  * turi būti tarp 70% iki 130% 
  * veikia tik tuomet, jei ankstesnė profilio procentinė dalis 100%

Pridėję savo veiksmus, **nepamirškite pakeisti numatytųjų reikšmių** spustelėdami numatytąsias reikšmes.
 
.. image:: ../images/Automation_Default_V2_5.png
  :alt: Automatizavimo numatytosios prieš nustatytos reikšmės

Rūšiuoti automatizavimo taisykles
-----
Norint rūšiuoti automatizavimo taisykles, paspauskite ir palaikykite keturių linijų mygtuką ekrano dešinėje pusėje ir tempkite žemyn ar aukštyn.

.. image:: ../images/Automation_Sort.png
  :alt: Rūšiuoti automatizavimo taisykles
  
Ištrinti automatizavimo taisykles
-----
Norėdami ištrinti automatizavimo taisyklę, tiesiog braukite į kairę arba į dešinę.

.. image:: ../images/Automation_Delete.png
  :alt: Ištrinti automatizavimo taisyklę

Rekomendacijos ir išlygos
==================================================
* Jei pirmą kartą naudojate automatizavimą arba kuriate naują taisyklę, taip pat turėtumėte įjungti pranešimą siuntimo taisyklę, kad būtumėte tikri, kad taisyklė veikia taip, kaip numatyta.
* Stebėkite savo taisyklės rezultatus.
* Nenaudokite pernelyg paprastų sąlygų (pvz., jei KG> 80 mg/dl IR KG<180 mg/dl)

  ** Ypač svarbu, jei veiksmas keičia profilį! **
 
* Stenkitės naudoti laikinus tikslus, o ne profilių keitimą. Laikini tikslai negrąžina `Autosens <../Usage/Open-APS-features.html#autosens>` _ reikšmės į 0.
* Profilio pakeitimus naudokite saikingai ir tik kaip paskutinę galimybę.

  * Pakeitus profilį, `Autosens <../Usage/Open-APS-features.html#autosens>`_ bus nenaudojamas mažiausiai 6 valandas.

* Profilio pakeitimai automatiškai neatkuria jūsų profilio į standartinį

  * Norėdami tai padaryti, turite sukurti kitą taisyklę, kad grįžtumėte į standartinį profilį arba padarytumėte tai rankiniu būdu!
  * Jei profilio keitimas nustatomas neribotam laikui ir nėra atstatomas į standartinį profilį, padidėja hipoglikemijos rizika.

Pavyzdžiai
==================================================
Tai yra tiesiog pavyzdžiai, ne patarimai. Jūs neturėtumėte tiesiog jų kopijuoti, nebūdami tikri, ką tiksiai darote, ir nežinodami, kodėl jums jų reikia.

* Kasdienės veiklos profilio keitimas (pvz., Mokykla, sportas, savaitgalis, darbo diena...) su vietos nustatymo funkcija, WiFi, laiku ir kt.
* Laikino tikslo nustatymas grindžiamas laiku, vieta, ryšio su bluetooth prietaisu...
* "Netrukus valgysiu" laikino tikslo, pagrįsto laiku, vieta, nustatymas...

Žemos glikemijos laikinas tikslas
--------------------------------------------------
.. image:: ../images/Automation2.png
  :alt: Automation2

Tai tiems, kurie nori automatiškai nustatyti laikiną žemos glikemijos tikslą, kai jų cukraus kiekis kraujyje yra mažas.

Pietų laiko laikinas tikslas
--------------------------------------------------
.. image:: ../images/Automation3.png
  :alt: Automation3
  
Šis pavyzdys skirtas tiems, kurie pietus darbe valgo kiekvieną dieną tuo pačiu metu. Jei jis ar ji tam tikru laiku yra jų valgymo vietoje, automatizavimas, laukdamas pietų, uždės laikiną žemą tikslą (netrukus valgysiu). Dėl ryšio „Ir“ tai vyksta tik tam tikrą valandą ir jei jis ar ji yra tinkamoje vietoje. Taigi automatizavimas neveiks visai kitu metu, arba tuo metu, jei žmogus lieka namuose, ar ilgiau būna darbe. 

Neteisingai naudojamas Automatizavimas
--------------------------------------------------
Atkreipkite dėmesį, jei netinkamai naudojate automatizavimo funkciją. Tai gali sukelti sunkumų ir net kelti pavojų jūsų sveikatai. Neteisingo naudojimo pavyzdžiai:

* Pabandyti pergudrauti algoritmą, užuot jį palaikę (pvz., profilio keitimas, o ne tikslaus valandinės bazės ir kitų faktorių koregavimas)
* Nustatyti profilio pakeitimą, kad kompensuotumėte suvalgytą maistą
* Profilio keitimas be trukmės nustatymo
* Vienpusės taisyklės kūrimas (pvz., nustatote taisyklę, bet pamirštate ją anuliuoti su kita taisykle)
* Kurti ilgalaikes taisykles

Alternatyvos
==================================================

Pažangesniems vartotojams yra ir kitų būdų automatizuoti užduotis naudojant IFTTT arba trečiosios šalies Android programą, vadinamą Automate. Keletas pavyzdžių galima rasti 'čia <./automationwithapp.html>`_.
