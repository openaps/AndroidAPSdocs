# Sfaturi pentru utilizarea de bază a Accu-Chek Combo

## Cum se asigură buna derulare a operațiunilor

* Întotdeauna **purtați telefonul inteligent asupra dumnevoastră**, lăsați-l lângă patul dumneavoastră noaptea. Deoarece pompa dumneavoastră poate sta în spatele sau sub corpul dumneavoastră în timp ce dormiți, o poziție mai înaltă (pe un raft sau pe o masă) funcționează cel mai bine.
* Asigurați-vă întotdeauna că bateria pompei este cât se poate de încărcată. Vedeți secțiunea despre baterie pentru sfaturi legate de aceasta.
* Ori de câte ori este posibil, utilizați pompa doar prin aplicația AAPS. Pentru a facilita acest lucru, activați blocarea tastelor la **SETĂRI POMPĂ / BLOCARE TASTE / PORNIT**. Numai în momentul schimbării bateriei sau a cartușului, este necesară utilizarea tastelor pompei. 

![Blocarea tastelor](../images/combo/combo-tips-keylock.png)

## Pompă indisponibilă. Ce poate fi făcut?

### Activați alarma de pompă indisponibilă

* În AAPS, mergeți la **Setări / Alarme Locale** și activați **alarmă atunci când pompa nu este disponibilă** și setați **limita pentru pompa indisponibilă [Min]** la **31** minute.
* Acest lucru vă va oferi suficient timp pentru a nu declanșa alarma când părăsiți camera în timp ce telefonul dumneavoastră este lăsat pe birou, dar vă informează dacă pompa este indisponibilă pentru o perioadă de timp care depășește durata unei rate bazale temporare.

### Restabilire disponibilitate pompă

* Când AAPS raportează o alarmă de **pompă indisponibilă**, mai întâi deblocați tastatura **apăsați orice tastă de pe pompă** (spre exemplu tasta "jos"). Imediat ce afișajul pompei s-a oprit, apăsați **Reîmprospătați** din **fila Combo** în AAPS. De cele mai multe ori, comunicarea funcționează din nou.
* Dacă acest lucru nu ajută, reporniți telefonul dumneavoastră inteligent. După repornire, AAPS va fi reactivat și o nouă conexiune va fi stabilită cu pompa. Dacă utilizați un driver mai vechi, ruffy va fi reactivat de asemenea.

* Testele efectuate cu telefoane inteligente diferite au arătat că anumite telefoane inteligente declanșează mai des decât altele eroarea "pompă indisponibilă". Vedeți [Telefoane AAPS](#Phones-list-of-tested-phones) pentru telefoane inteligente testate cu succes.

### Cauzele fundamentale și consecințele erorilor frecvente de comunicare

* Pe telefoanele cu **memorie mică** (sau **setări agresive de economisire a energiei**), AAPS este adesea închis. Vă puteți da seama prin faptul că butoanele Bolus și Calculator de pe ecranul de pornire nu sunt afișate la deschiderea AAPS deoarece sistemul se inițializează. Acest lucru poate declanșa "alarma de pompă indisponibilă" la pornire. In the **Last Connection** field of the Combo tab, you can check when AAPS last communicated with the pump.

![Pompă indisponibilă](../images/combo/combo-tips-pump-unreachable.png)

![Nicio conexiune la pompă (după cum se arată în fila de driver vechi)](../images/combo/combo-tips-no-connection-to-pump.png)

![Nicio conexiune la pompă (după cum se arată în fila de driver nou)](../images/combo/combov2-tips-no-connection-to-pump.png)

* Această eroare poate consuma bateria pompei mai repede, deoarece profilul bazalei este citit din pompă atunci când aplicația este repornită.
* De asemenea, crește probabilitatea de a cauza eroarea care determină pompa să respingă toate conexiunile primite până când se apasă un buton de pe pompă. 

## Anularea ratei bazale temporare eșuează

* Ocazional, AAPS nu poate anula automat o alertă **RBT ANULATĂ**. Apoi trebuie fie să apăsați **ACTUALIZARE** în fila AAPS **Combo** sau alarma din pompă trebuie confirmată.

## Considerații despre bateria pompei

### Schimbarea bateriei

* După o alarmă <0>baterie scăzută</0>, bateria trebuie schimbată cât mai curând posibil pentru a avea întotdeauna suficientă energie pentru o comunicare Bluetooth fiabilă cu telefonul inteligent chiar dacă telefonul se află la o distanță mai mare de pompă.
* Chiar și după o alarmă **baterie scăzută**, bateria poate fi folosită pentru o perioadă semnificativă de timp. Cu toate acestea, se recomandă să aveți întotdeauna o baterie nouă cu dumneavoastră după ce o alarmă "baterie scăzută" a sunat.
* Înainte de a schimba bateria, apăsați pe simbolul **Buclă** pe ecranul principal și selectați **Suspendă bucla pentru 1h**. 
* Așteptați ca pompa să comunice cu pompa și sigla Bluetooth de pe pompă s-a estompat.

![Bluetooth activat](../images/combo/combo-tips-compo.png)

* Deblocați tastele pompei, puneți pompa în modul stop, confirmați o posibilă rată bazală temporară anulată și schimbați bateria rapid.
* Când se utilizează driverul vechi, dacă ceasul din pompă nu a supraviețuit schimbării bateriei, setați data și ora de pe pompă exact la data/ora de pe telefonul care rulează AAPS. (Noul driver actualizează automat data și ora pompei.)
* Apoi puneți pompa înapoi în modul de rulare prin selectarea **Reluați** după ce apăsați pe pictograma **Bucla Suspendată** de pe ecranul principal.
* AAPS va restabili rata bazală temporar necesară la primirea următoarei valori a glicemiei.

(Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)=

### Tipul de baterie și cauzele duratei scurte de viață a bateriei

* Deoarece comunicarea intensivă prin Bluetooth consumă multă energie, folosește doar bateriile **de înaltă calitate** precum Energizer Ultimate Lithium, cele "power one" din pachetul de servicii Accu-Chek sau dacă doriți o baterie reîncărcabilă, folosiți baterii Eneloop. 

![Energizer](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

Ranges for typical life time of the different battery types are as follows:

* **Energizer Ultimate Lithium**: 4 to 7 weeks
* **Power One Alkaline** (Varta) from the service pack: 2 to 4 weeks
* **Eneloop rechargeable** batteries (BK-3MCCE): 1 to 3 weeks

If your battery life is significantly shorter than the ranges given above, please check the following possible causes:

* There are some variants of the screw-on battery cap of the Combo pump, which partially short circuit the batteries and drain them quickly. The caps without this problem can be recognized by the golden metal contacts.
* If the pump clock does not "survive" a short battery change, it is likely that the capacitor is broken which keeps the clock running during a brief power outage. In this case, a replacement of the pump by Roche might help, which is not a problem during the warranty period. 
* The smart phone hardware and software (Android operating system and bluetooth stack) also impact the battery lifetime of the pump, even though the exact factors are not completely known yet. If you have the opportunity, try another smartphone and compare battery lifetimes.

## Extended bolus, multiwave bolus

The OpenAPS algorithm does not support a parallel extended bolus or multiwave bolus. But a similar treatment can be achieved by the following alternatives:

* Use **e-Carbs** when entering carbs or using the Calculator by entering the carbs of the full meal and the duration you expect the carbs to arrive as glucose in you blood. The system will then calculate small carbs equally distributed over the whole duration which will cause th algorithm to provide equivalent insulin dosing while still permanently checking the overall rise/decrease of the blood glucose level. For a multiwave bolus approach, you can also combine a smaller immediate bolus with e-carbs. 
* Before eating, on the **Actions tab** in AAPS set as a temporary **Eating Soon** goal with target glucose 80 for several hours. The duration should be based on the interval you would choose for an extended bolus. This will keep your target lower than usual and therefore increase the amount of insulin delivered.
* Then use the **CALCULATOR** to enter the full carbs of the meal, but do not directly apply the values suggested by the bolus calculator. If a multiwave-like bolus is to be delivered, correct the insulin dosage down. Depending on the meal, the algorithm now has to deliver additional SMBs or higher temporary basal rates to counteract the increase in blood sugar. Here, the safety limitation of the basal rate (Max IE / h, Maximum basal IOB) should be very carefully experimented with and, if necessary, temporarily changed.

* If you are tempted to just use the extended or multiwave bolus directly on the pump, AAPS will penalize you with disabling the closed loop for the next six hours to ensure that no excess insulin dosage is calculated.

![Disabled loop after multiwave bolus](../images/combo/combo-tips-multiwave-bolus.png)

## Alarms at bolus delivery

* If AAPS detects that an identical bolus has been successfully delivered at the same minute, bolus delivery will be prevented with identical number of insulin units. If your really want to bolus the same insulin twice in short succession, just wait two more minutes and then deliver the bolus again. If the fist bolus has been interrupted or was not delivered for other reasons, you can immediately re-submit the bolus since AAPS 2.0.
* The alarm is a safety mechanism that reads the pump's bolus history before submitting a new bolus to correctly calculate insulin on board (IOB), even when a bolus is delivered directly from the pump. Here indistinguishable entries must be prevented.

![Double bolus](../images/combo/combo-tips-doppelbolus.png)

* This mechanism is also responsible for a second cause of the error: If during the use of the bolus calculator another bolus is delivered via the pump and thereby the bolus history changes, the basis of the bolus calculation is wrong and the bolus is aborted. 

![Canceled bolus](../images/combo/combo-tips-history-changed.png)