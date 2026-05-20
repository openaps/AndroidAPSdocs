# Viața de zi cu zi - Pompele
## Schimbarea seturilor de infuzie: rezervoare de insulină și canule

Procedura descrisă mai jos este numai pentru pompe cu fir și nu se aplică pentru pompe plasture cum ar fi Omnipod, Medtrum Nano, Accu-Chek Solo șamd. Această procedură este uneori denumită "schimbare de set", cu o schimbare "completă" a setului, care include rezervorul de insulină și canula, și o schimbare "parțială" a setului care se referă numai la o schimbare a canulei.

Modificările cartușului fizic/rezervorului nu pot fi efectuate prin intermediul **AAPS** și trebuie efectuate direct prin intermediul pompei. Acestea trebuie să fie înregistrate manual în **AAPS**, odată terminate.

### Ghid pentru schimbarea atât a rezervorului pompei cât și a canulei

1) În **AAPS**, deconectare pompă: Apăsați lung pe pictograma "Buclă deschisă"/"Buclă închisă" pe **AAPS** Ecranul de pornire și selectați "Deconectare pompă - 1 oră". Pictograma pompei se va schimba într-o pictogramă gri, indicând faptul că pompa este deconectată.

2) Schimbați fizic rezervorul de insulină: deconectați fizic pompa de corp și schimbați rezervorul/cartușul și canula conform instrucțiunilor fabricantului.

3) Amorsați/umpleți canula: aceasta se poate face direct prin pompă. Asigurați-vă că eliminați bulele de aer din tub.

4)  Attach the new cannula to the body. Odată ce canula este introdusă și acul este îndepărtat, canula atașată are acum un mic spațiu de aer care trebuie, de asemenea, să fie amorsat. To announce this in **AAPS** and prime the site: select the PRIME/FILL button in the **AAPS** actions tab and tick “Pump site change” and/or “Insulin Cartridge Change” as appropriate to record the change. Acum apăsați pe cantitatea implicită de insulină pentru amorsare (este de obicei în jur de 0,3 U, dar verificați că această valoare este corectă pentru canula dumneavoastră) și selectați "OK". Citiți mesajul rezumat, și confirmați pentru a executa amorsarea prin apăsarea "OK".

5)  Reconnect the pump in **AAPS**: Press the grey disconnected pump symbol and select ‘Reconnect pump’ to continue looping.

### Informații utile privind modificările de insulină/canulă

●   Logging a pump site change resets Autosens to 100%. It also resets the corresponding cannula/insulin status lights and ages on the **AAPS** Home screen.

●   You can set/adjust the default prime amount in Preferences > Overview > Fill/Prime standard insulin amounts. Vedeți instrucțiunile din cutia canulei pentru câte unități (în funcție de lungimea acului și lungimea tubului) ar trebui să fie amorsate pentru canulă.

●   Insulin delivered using the prime function is not taken into account by **AAPS** when calculating insulin on board (IOB), and is marked in the **AAPS** treatments menu as “Prime”.

●   Any insulin bolused from the pump during a pump disconnection will also not be taken into account by **AAPS**. If you happen to bolus directly from the pump while **AAPS** is disconnected, once you reconnect the pump you can announce this insulin (without bolusing it) under the “insulin” tab (see link to below ”to announce delivered insulin without actually bolusing” for more details).

### Canula, locul de perfuzare, tubulatura şi/sau problemele pompei

If you are confident that you haven’t received any insulin for a period of time, despite **AAPS** recording that you have, and you know exactly when the issue started (_e.g._ you remove the cannula and see that the cannula was kinked during the insertion process) you can correct this in **AAPS**, while being aware that the insulin may in fact have been delivered but may be slow to act for some reason.

```{admonition} Caution - Risk of Hypoglycemia
:class: pericol
Ștergeți administrarea insulinei din **AAPS** numai cu precauție MAXIMĂ, în cazul în care insulina _a_ fost de fapt administrată și monitorizați-vă îndeaproape glicemia pentru următoarele 24 de ore.
```

To remove boluses and SMBs which you know have not been delivered, open the Treatments tab and conservatively delete the logged bolus information from > carbs and bolus starting from the point the incident happened. This will correct the “insulin on board” (IOB) value which is key for **AAPS**’ calculations, if you now return to the homescreen you will see that the IOB has now reduced. Be aware that you cannot delete basal insulin which **AAPS** calculates to have been delivered, so that will still be taken into account by **AAPS**.

In less obvious cases of insulin delivery problems  _e.g._ leakages, occlusions or tunneling where either you are not sure when the issue started, or think some of the insulin was delivered, you need to be careful. Puteți detecta aceste probleme fie prin "mirosirea" insulinei, prin observarea adezivului umed, sau prin întâlnirea unor valori ridicate ale glicemiei sau prin primirea de alarme. Deoarece nu veți ști niciodată câtă insulină a intrat în piele (care ar putea începe să acționeze după un timp), va fi greu de determinat cantitatea corectă de insulină care trebuie dedusă din valoarea curentă a "insulinei la bord" (IOB). O strategie este să întrerupeți bucla timp de 5 ore (sau durata specifică de acțiune a insulinei) după ce ați rezolvat problema de administrare a insulinei, și reluare buclei după aceea. Acest lucru va asigura corectitudinea IOB după repornirea buclei.

## Deconectarea pompei pentru duș sau activitate

If you take your pump off for showering, bathing, swimming, contact sports or other activities you must let **AAPS** know that no insulin is being delivered, to keep the IOB correct. The pump can be disconnected using the Loop Status icon on the **AAPS** Home Screen.

Deoarece nu primiți insulină în timp ce pompa este deconectată, trebuie să vă reconectați la fiecare două ore pentru a compensa bazala lipsă. You can do this by connecting, bolusing the missing basal amounts (_e.g._ of the last two hours) before disconnecting again. Acest lucru ajută la evitarea lipsei severe de insulină care poate duce la cetoacidoză diabetică (CAD). If it is inconvenient to reconnect the pump during activity (cannula site is covered by wearing a wetsuit _etc._), consider a pen injection instead. This manual injection can be logged in **AAPS**, and doesn’t have to be logged at the time of injection (just make a note of the time of injection) since you can announce the insulin and backdate the time the insulin was actually given when you reconnect the pump.

## Pentru a anunța insulina administrată fără a bolusa propriu-zis

To announce insulin delivered from the pump either while **AAPS** was disconnected, or from pen injections to **AAPS**: select the “insulin” tab, enter the amount in units and select “do not bolus, record only”. Când selectați această opțiune, va apărea o filă cu "decalaj". You can ignore this if the injection was given recently, but if the bolus was given some time ago, you can add a minus sign in front of the time (_e.g._ - 30 min) to record the actual time of the bolus. **AAPS** will then take into account the duration of insulin action and calculate the remaining insulin still in the system accordingly.

If you are using **AAPS** as a careiver, you can remotely disconnect (and reconnect) the pump very easily by [SMS command](../RemoteFeatures/SMSCommands.md) using commands such as “pump disconnect 120” and “pump connect 120”. Intervalul de timp pentru deconectarea de la distanță este de 1 - 120 de minute (în acest exemplu este de 120 de minute). This is very useful if the **AAPS** handset is inconvenient for you to access, buried in a pump belt on a kid who is running off towards the swimming complex, or being closely guarded (or in use) by a teenager.

## Reconectarea pompei după activitate

After a long disconnection (1 - 2 hours) it is fairly common for **AAPS** to calculate that you now have negative IOB. Când reconectați pompa, în funcție de preferință/nivelul curent al glicemiei/alimentației planificate sau de activitatea ulterioară, puteți fie:

a) Just reconnect the pump in **AAPS** (grey-to-green, for closed loop) and leave it up to **AAPS** to start to deliver insulin again

_sau_

b) Dacă doriți să fiți mai agresiv (de exemplu, vă îndreptați spre hiperglicemie), puteți naviga la calculator și bolusa pentru zero carbohidrați, pentru a administra imediat insulina calculată lipsă sub formă de bolus.


Ce strategie preferați este foarte personal, și se determină cel mai bine prin încercări și erori.    
