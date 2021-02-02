Surveillance à distance
**************************************************

.. image:: ../images/KidsMonitoring.png
  :alt: Surveillance des enfants
  
AndroidAPS offre plusieurs options pour la surveillance à distance des enfants et permet également d'envoyer des commandes à distance. Bien sûr, vous pouvez également utiliser la surveillance à distance pour suivre votre partenaire ou votre ami.

Fonctions
==================================================
* La pompe de l'enfant est contrôlée par le téléphone de l'enfant à l'aide d'AndroidAPS.
* Les parents peuvent suivre à distance toutes les données pertinentes telles que les glycémies, les glucides actifs, l'insuline active, etc. en utilisant l'application **NSclient** sur leur téléphone. Les paramètres doivent être identiques dans AndroidAPS et NSClient.
* Les parents peuvent recevoir des alarmes en utilisant l'application **xDrip+ en mode suiveur** sur leur téléphone.
* Contrôle à distance d'AndroidAPS en utilisant les `commandes SMS <../Children/SMS-Commands.html>`_ sécurisées par l'authentification à deux facteurs.
* Le contrôle à distance via l'application NSClient n'est recommandé que si votre synchronisation fonctionne bien (vous ne voyez pas de changement de données indésirables comme la modification automatique de CT, DBT, etc.) voir les `notes de version pour la version 2.8.1.1 <../Installing-AndroidAPS/Releasenotes.html#conseils-importants>`_ pour plus de détails. (vous ne voyez pas de changement de données indésirables comme la modification automatique de CT, DBT, etc.) voir les `notes de version pour la version 2.8.1.1 <../Installing-AndroidAPS/Releasenotes.html#conseils-importants>`_ pour plus de détails.

Outils et applications pour la surveillance à distance
==================================================
*	`Nightscout <http://www.nightscout.info/>`_ dans le navigateur web (principalement affichage des données)
* L'application NSClient est une version réduite d'AAPS capable de suivre quelqu'un, de faire des changements de profil, de régler des CTs et d'entrer des glucides. Il y a 2 applications: `NSClient & NSClient2 que vous pouvez télécharger <https://github.com/nightscout/AndroidAPS/releases/>`_. La seule différence est le nom de l'application. De cette façon, vous pouvez installer l'application deux fois sur le même téléphone, pour pouvoir suivre 2 personnes/nightscout différentes.
*	Dexcom Follow si vous utilisez l'application officielle Dexcom (glycémies uniquement)
*	`xDrip+ <../Configuration/xdrip.html>`_ en mode suiveur (principalement les valeurs de GLY et les **alarmes**)
*	`Sugarmate <https://sugarmate.io/>`_ ou `Spike <https://spike-app.com/>`_ sur iOS (principalement les valeur de glycémies et les **alarmes**)

Points à considérer
==================================================
* Définir les bons `paramètres de traitement <../Getting-Started/FAQ.html#comment-faire-pour-commencer>`_ (débits de basal, DAI, SI...) est difficile pour les enfants, surtout lorsque les hormones de croissance sont impliquées. 
* Les paramètres doivent être identiques dans AndroidAPS et NSClient.
* Considérez un décalage de temps entre le maître et le suiveur dû au temps de téléchargement, et parce que le téléphone principal AAPS ne remontera les données qu'après l'exécution de la boucle.
* Alors prenez le temps de les configurer correctement et de les tester dans la vrai vie avec votre enfant à côté de vous avant de commencer la surveillance et le traitement à distance. Les vacances scolaires pourraient être un bon moment pour cela.
* Quel est votre plan d'urgence lorsque le contrôle à distance ne fonctionne pas (par ex. en cas de problèmes réseaux)?
* La surveillance et le traitement à distance peuvent vraimpent être très utiles à la crèche et à l'école primaire. Mais assurez-vous que les enseignants et les éducateurs sont au courant du plan de traitement de votre enfant. Des examples pour ces plans de soins peuvent être trouvés dans la `section fichiers des utilisateurs AndroidAPS <https://www.facebook.com/groups/AndroidAPSUsers/files/>`_ sur Facebook.
