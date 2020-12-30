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
Asa ca faceti-va timp ca sa le setati corect si sa le testati functionarea cu copilul langa dumneavoastra inainte de a incepe monitorizarea si transmiterea tratamentului de la distanta. Vacanța școlară ar putea fi o perioadă bună pentru asta.
* Care este solutia dvs. de urgenţă atunci când monitorizarea de la distanţă nu funcţionează (de ex. probleme de reţea)?
* Monitorizarea şi tratamentul de la distanţă pot fi foarte utile la grădinita şi şcoala primara. Dar asigurați-vă că profesorii și educatorii sunt conștienți de planul de tratament al copilului dumneavoastră. Exemple pentru astfel de planuri de îngrijire pot fi găsite în "secțiunea de fișiere a utilizatorilor AndroidAPS <https://www.facebook.com/groups/AndroidAPSUsers/files/>`_ pe Facebook.
