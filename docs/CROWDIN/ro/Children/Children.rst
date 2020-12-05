Monitorizarea la distanţă
**************************************************

.. image:: ../images/KidsMonitoring.png
  :alt: Monitorizarea copiilor
  
AndroidAPS oferă mai multe opțiuni pentru monitorizarea la distanță a copiilor și, de asemenea, permite trimiterea de comenzi la distanță. Desigur, se poate folosi monitorizarea de la distanta pentru supravegherea partenerului sau prietenului.

Functii
==================================================
* Pompa este controlată de telefonul copilului folosind AndroidAPS.
* Părinţii pot vedea de la distanţă toate datele importante, cum ar fi valorile glicemiei, carbohidratii din organism, insulina din corp etc. folosind ** NSClient app * * pe telefonul lor. Setările trebuie să fie aceleași pentru AndroidAPS și NSClient.
* Părinții pot avea alarme pe telefonul lor folosind aplicația **xDrip+ în modul follower**.
* Control de la distanță al AndroidAPS folosind `SMS Commands <../Children/SMS-Commands.html>`_ securizat prin autentificarea cu doi factori.
* Schimbarea profilului la distanță și țintele temporare prin aplicația NSClient.

Instrumente și aplicații pentru monitorizare la distanță
--------------------------------------------------
* `Nightscout <http://www.nightscout.info/>`_ în browser-ul web (în principal afișare a datelor)
* Aplicaţia NSClient
*Aplicația Dexcom Flollow dacă folosiți aplicația Dexcom originală (doar valorile glicemiei)
*<unk> `xDrip+ <../Configuration/xdrip.html>`_ în modul follower (în principal valori ale glicemiei și **alarme**)
* ` Sugarmate <https://sugarmate.io/>` _ sau ` Spike <https://spike-app.com/>` _ pe iOS (in principal valori ale glicemiei si ** alarme**)

Lucrurile de luat în considerare
==================================================
* Setarea corectă a factorilor de tratament <../Getting-Started/FAQ.html#how-to-begin>`_ (rată bazală, DIA, ISF...) este dificilă pentru copii, în special atunci când sunt implicați hormoni de creștere. 
* Setările trebuie să fie la fel în AndroidAPS şi NSClient.
* Luați în considerare decalajul de timp dintre telefonul principal si telefonul urmaritor datorat timpului necesar pentru crestere si scadere, precum și faptul că telefonul principal AAPS se va încărca numai după rularea buclei.
* So take your time to set those correctly and test them in real life with your kid next to you before starting remote monitoring and remote treatment. School holidays might be a good time for that.
* What is your emergency plan when remote control does not work (i.e. network problems)?
* Remote monitoring and treatment can be really helpful in kinder garden and elementary school. But make sure the teachers and educators are aware of your kid's treatment plan. Examples for such care plans can be found in the `files section of AndroidAPS users <https://www.facebook.com/groups/AndroidAPSUsers/files/>`_ on Facebook.
