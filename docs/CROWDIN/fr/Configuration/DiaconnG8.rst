Pompe à insuline Diaconn G8
************************

Appairage Bluetooth de la pompe à insuline
===============================

- Cliquez sur le menu hamburger dans le coin supérieur gauche.

   .. image:: ../images/DiaconnG8/DiaconnG8_01.jpg
    :alt: Menu hamburger

- Cliquez sur le Générateur de configuration.
 
   .. image:: ../images/DiaconnG8/DiaconnG8_02.jpg
    :alt: Générateur de configuration
    
- Après avoir sélectionné la pompe Diaconn G8, cliquez sur l'icône Paramètres (roue crantée).

   .. image:: ../images/DiaconnG8/DiaconnG8_03.jpg
    :alt: Paramètres
    
- Choisissez la pompe sélectionnée.

   .. image:: ../images/DiaconnG8/DiaconnG8_04.jpg
    :alt: Sélection de la pompe
 
- Sélectionnez le numéro de modèle de votre pompe à insuline une fois qu'elle apparaît dans la liste.

   .. image:: ../images/DiaconnG8/DiaconnG8_05.jpg
    :alt: Appariage de la pompe
    
- Il y a deux options pour vérifier votre numéro de modèle :
   
   i. Les 5 derniers chiffres du numéro SN au dos de la pompe.
   ii. Cliquez sur le bouton O > Information > BLE > Derniers 5 chiffres.
      
      .. image:: ../images/DiaconnG8/DiaconnG8_06.jpg
       :alt: Vérification du numéro de série
       
- Une fois que vous avez sélectionné votre pompe, une fenêtre apparaît pour demander un code PIN. Entrez le code PIN affiché sur votre pompe pour terminer la connexion.
 
   .. image:: ../images/DiaconnG8/DiaconnG8_07.jpg
    :alt: Code PIN
    
Contrôle de l'état de la pompe et synchronisation des journaux
==========================================

- Une fois que votre pompe est connectée, cliquez sur le symbole Bluetooth pour vérifier l'état et synchroniser les journaux.

   .. image:: ../images/DiaconnG8/DiaconnG8_08.jpg
    :alt: État du Bluetooth
    
Dépannage Bluetooth
==========================

**Que faire dans le cas d'une connexion Bluetooth instable avec la pompe.**

Méthode 1) Vérifiez à nouveau la pompe une fois la connexion à AAPS terminée.
--------------------------------------------------------------------- 
- Cliquez sur le bouton de 3 points en haut à droite.

   .. image:: ../images/DiaconnG8/DiaconnG8_09.jpg
    :alt: Menu préferences
    
- Cliquez sur Quitter. 

   .. image:: ../images/DiaconnG8/DiaconnG8_10.jpg
    :alt: Quitter

Méthode 2) Si la première méthode ne fonctionne pas, déconnectez Bluetooth puis reconnectez-vous.
-------------------------------------------------------------------------------------
- Appuyez et maintenez le bouton Bluetooth en haut pendant environ 3 secondes. 

   .. image:: ../images/DiaconnG8/DiaconnG8_11.jpg
    :alt: Bouton Bluetooth
 
- Cliquez sur le bouton Réglage de la pompe Diaconn G8 appariée.

   .. image:: ../images/DiaconnG8/DiaconnG8_12.jpg
    :alt: Bouton paramètres
 
- Désappairage.

   .. image:: ../images/DiaconnG8/DiaconnG8_13.jpg
    :alt: Désappairage
    
- Répétez le processus d'appairage Bluetooth pour la pompe (voir ci-dessus).

Informations complémentaires
====================
Réglage des options de pompe Diaconn G8
--------------------------------------
-	Config manager > pump > Diaconn G8 > Settings
-	DIACONN G8 at the top> 3 dots button on the top right > Diaconn G8 Preferences

.. image:: ../images/DiaconnG8/DiaconnG8_14.jpg
 :alt: Diaconn G8 pump options
    
- If the **Log reservoir change** option is activated, the relevant details are automatically uploaded to the careportal when an “Insulin Change” event occurs.
- If the **Log needle change** option is activated, the relevant details are automatically uploaded to the careportal when a “Site Change” event occurs. 
- If the **Log tube change** option is activated, the relevant details are automatically uploaded to the careportal when a “Tube Change” event occurs.
- If the **Log battery change** option is activated, the relevant details are automatically uploaded to the careportal when a “Battery Change” event occurs, and the PUMP BATTERY CHANGE button in the ACTION tab is deactivated. (Note: To change the battery, please stop all in-progress injection functions before proceeding.)
 
.. image:: ../images/DiaconnG8/DiaconnG8_15.jpg
 :alt: Diaconn G8 actions menu

Fonction Bolus Étendu
------------------------
- If you use extended bolus it will disable closed loop.

- See `this page <../Usage/Extended-Carbs.html#why-extended-boluses-won-t-work-in-a-closed-loop-environment>`_ for details why extended bolus does not work in a closed loop environment.

