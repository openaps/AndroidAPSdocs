Surveillance à distance
**************************************************

.. image:: ../images/KidsMonitoring.png
  :alt: Surveillance des enfants
  
AndroidAPS offre plusieurs options pour la surveillance à distance des enfants et permet également d'envoyer des commandes à distance. Bien sûr, vous pouvez également utiliser la surveillance à distance pour suivre votre partenaire ou votre ami.

Fonctions
==================================================
* La pompe de l'enfant est contrôlée par le téléphone de l'enfant à l'aide d'AndroidAPS.
* Les parents peuvent suivre à distance toutes les données pertinentes telles que les glycémies, les glucides actifs, l'insuline active, etc. en utilisant l'application **NSclient** sur leur téléphone. Settings must be the same in AndroidAPS and NSClient.
* Parents can be alarmed by using **xDrip+ app in follower mode** on their phone.
* Ils peuvent contrôler à distance AndroidAPS en utilisants les `Commandes SMS <../Children/SMS-Commands.html>`_.
* Les changement de profil et cibles temporaires peuvent être effectués à distance via l'application NSClient.

Outils et applications pour la surveillance à distance
--------------------------------------------------
*	`Nightscout <http://www.nightscout.info/>`_ dans le navigateur web (principalement affichage des données)
*	Application NSClient
*	Dexcom Follow si vous utilisez l'application officielle Dexcom (glycémies uniquement)
*	`xDrip+ <../Configuration/xdrip.html>`_ in follower mode (mainly BG values and **alarms**)
*	`Spike <https://spike-app.com/>`_ sur iPhone (principalement les glycémies et les **alarmes**)

Points à considérer
==================================================
* Définir les bons `paramètres de traitement <../Getting-Started/FAQ.html#how-to-begin>`_ (débits de basal, DAI, SI...) est difficile pour les enfants, surtout lorsque les hormones de croissance sont impliquées. 
* Settings must be the same in AndroidAPS and NSClient.
* Consider time gap between master and follower due to time for up- and download as well as the fact that AAPS master phone will only upload after loop run.
* Alors prenez le temps de les configurer correctement et de les tester dans la vrai vie avec votre enfant à côté de vous avant de commencer la surveillance et le traitement à distance. Les vacances scolaires pourraient être un bon moment pour cela.
* Quel est votre plan d'urgence lorsque le contrôle à distance ne fonctionne pas (par ex. en cas de problèmes réseaux)?
* La surveillance et le traitement à distance peuvent vraimpent être très utiles à la crèche et à l'école primaire. Mais assurez-vous que les enseignants et les éducateurs sont au courant du plan de traitement de votre enfant. Des examples pour ces plans de soins peuvent être trouvés dans la `section fichiers des utilisateurs AndroidAPS <https://www.facebook.com/groups/AndroidAPSUsers/files/>`_ sur Facebook.
