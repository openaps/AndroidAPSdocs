Kas yra uždaro ciklo sistema su AndroidAPS?
**************************************************

AndroidAPS yra programa, veikianti kaip dirbtinė kasos sistema (DKS) Android išmaniajame telefone. Kas yra dirbtinės kasos sistema? Tai programa, kuria siekiama padaryti tai, ką daro funkcionuojanti kasa: automatiškai siekia išlaikyti sveiką gliukozės kiekį kraujyje. 

APS negali atlikti tokio pat darbo kaip biologinė kasa, tačiau tai gali palengvinti I tipo cukrinio diabeto gydymą standartine įranga ir paprasta bei saugia programine įranga. Šie prietaisai apima nepertraukiamą gliukozės monitorių (CGM), skirtą AndroidAPS informuoti apie jūsų gliukozės kiekį kraujyje, ir insulino pompą, valdomą AndroidAPS, kad būtų tiekiamos atitinkamos insulino dozės. Programa susisiekia su šiais įrenginiais Bluetooth ryšiu. Dozė apskaičiuojama naudojant algoritmą ar taisyklių rinkinį, sukurtą kitai dirbtinei kasai, vadinamai OpenAPS. OpenAPS turi tūkstančius vartotojų, kurie sukaupė milijonus valandų naudojimo. 

Atsargiai: nei vienos šalies medicininis reguliatorius nereglamentuoja AndroidAPS. AndroidAPS iš esmės naudojama savo paties medicininiam eksperimentui atlikti. Sistemai sukurti reikia ryžto ir techninių žinių. Jei pradžioje vis dar trūksta techninių žinių, pabaigoje jas turėsite. Visą jums reikalingą informaciją galite rasti šiame ir kituose interneto puslapiuose. Arba galite užduoti savo klausimus Facebook grupėse ar kituose forumuose patyrusiems vartotojams. Daugybė skirtingų diabetu sergančių žmonių sėkmingai sukūrė AndroidAPS ir dabar saugiai naudojasi. Bet tai svarbu kiekvienam vartotojui:

* Pats sukūria sistemą, kad galėtų suprasti, kaip ji veikia
* Kiek įmanoma geriau suderina individualias diabeto nuostatas su savo diabeto komanda
* Prižiūri, nuolat atnaujina ir stebi sistemą, kad įsitikintų, jog ji veikia tinkamai

.. pastaba:: 
	**Atsakomybės Ir Įspėjimas**

	* Visa informacija, mintys ir šaltinio kodas yra skirti tik informaciniams ir moksliniams tikslams. Nightscout neatitinka jokių privatumo reikalavimų sveikatos priežiūros srityje. Savo rizika naudokite Nightscout ir AndroidAPS ir nenaudokite jų priimdami medicininius sprendimus.

	* Naudojant github.com šaltinio kodą, garantijos ir jokio oficialaus palaikymo nėra. Norėdami gauti daugiau informacijos, perskaitykite šios saugyklos LICENCIJĄ.

	* Visi gaminių ir gamintojų pavadinimai, prekės ženklai, paslaugų ženklai, prekių ženklai ir registruoti paslaugų ženklai yra atitinkamų savininkų nuosavybė ir naudojami tik informaciniais tikslais, o ne reklamai ar rinkodarai. Jie naudojami tik informaciniais tikslais ir nereiškia, kad AAPS priklauso jiems ir kad jie yra palaikomi.

	Atkreipkite dėmesį: Šis projektas nėra susijęs su SOOIL <http://www.sooil.com/eng/>, Dexcom <http://www.dexcom.com/>, Accu-Chek, „Roche Diabetes Care“ <http://www.accu-chek.com/> ar Medtronic <http://www.medtronic.com/>.
	
Jei esate pasirengęs priimti šį iššūkį, skaitykite toliau. 

Pagrindiniai AndroidAPS tikslai
==================================================

* Programa su įjungta sauga. Norėdami daugiau sužinoti apie algoritmų, vadinamų oref0 ir oref1, saugos ypatybes, spustelėkite čia (https://openaps.org/reference-design/)
* Viskas-viename programa, skirta valdyti 1 tipo cukrinį diabetą su dirbtine kasa ir Nightscout
* Programa, leidžianti vartotojams lengvai pridėti arba pašalinti modulius pagal poreikį
* Programa su skirtingų vietų ir kalbų versijomis.
* Programa, kuri gali būti naudojama atviro ir uždaro ciklo režimais
* Programa, kuri yra visiškai skaidri: vartotojai gali įvesti parametrus, pamatyti rezultatus ir priimti galutinį sprendimą
* Programa, nepriklausoma nuo tam tikrų pompų tvarkyklių ir įgalinanti „virtualią pompą“, kad vartotojai galėtų saugiai eksperimentuoti prieš naudodami juos su savo realia insulino pompa 
* Programa, glaudžiai integruota su Nightscout
* Programa, kurioje vartotojas kontroliuoja saugos apribojimus 

Kaip pradėti
==================================================
Žinoma, visa čia pateikiama informacija yra labai svarbi jūsų uždarojo ciklo sistemai, tačiau taip pat normalu, kad daugelis naujų dalykų iš pradžių atrodo painūs.
Geras orientyras yra pateiktas Modulio Apžvalgoje <./Module/module.html>` ir Tiksluose <./Usage/Objectives.html>`. Visų pirma, galite patikrinti pavyzdinę sąranką with pompa Dana, Dexcom and Sony Smartwatch <../ Getting-Started / Sample-Setup.md>`.
 
