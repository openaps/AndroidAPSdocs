Qu'est-ce qu'un système de boucle fermé avec AndroidAPS ?
****************************

AndroidAPS est une application qui peut communiquer avec des pompes à insuline compatibles Bluetooth et exécute une version des algorithmes OpenAPS «oref0» et «oref1». Qu'est ce qu'un système de pancréas artificiel? C’est un logiciel qui a pour but de faire ce que fait un pancréas vivant : maintenir la glycémie dans les limites saines automatiquement. 

Malheureusement, l’APS ne peut pas faire le même travail qu'un pancréas biologique, mais il peut soulager un diabète de type 1 en le rendant plus facile à gérer avec l’aide des dispositifs disponibles dans le commerce et son logiciel qui est simple et sûr. Le dispositif comporte:
- une mesure de glycémie en continu (MGC) qui communique à AndroidAPS le taux de sucre dans le sang.
- une pompe à insuline compatible qui administre des doses appropriées d'insuline calculée par AndroidAPS. L’application communique avec ces périphériques Bluetooth. Elle effectue les calculs de dosage à l’aide d’un algorithme, ou ensemble de règles, mis au point pour un autre système de pancréas artificiel, appelé OpenAPS, qui a des milliers d’utilisateurs et a accumulé des millions d’heures d’utilisation. 

Prudence : AndroidAPS n’est réglementée par aucune autorité médicale dans aucun pays. À l’aide d'AndroidAPS, vous procédez à une expérience médicale sur vous-même! Setting up the system requires determination and technical knowledge. If you don't have the technical know-how at the beginning, you will by the end. All the information you need can be found in these documents, elsewhere online, or from others who have already done it -- you can ask them in Facebook groups or other forums. Many people have successfully built AndroidAPS and are now using it entirely safely, but it is essential that every user:

* Builds the system themselves so that they thoroughly understand how it works
* Adjusts its individual dosage algorithm with his or her diabetes team to work nearly perfect
* Maintains and monitors the system to ensure it is working properly

.. note:: 
	** Avertissement **

	* Toutes les informations, pensées et codes décrits ici sont destinés à des fins d'information et d'éducation uniquement. Nightscout ne fait actuellement aucune tentative de conformité à la confidentialité HIPAA. Utilisez Nightscout et AndroidAPS à vos propres risques et n'utilisez pas les informations ni le code pour prendre des décisions médicales.

	* L'utilisation du code de github.com est sans garantie ni support formel d'aucune sorte. Veuillez consulter la LICENCE de ce référentiel pour plus de détails.

	* Tous les noms de produits et de sociétés, marques commerciales, marques de service, marques déposées,  sont la propriété de leurs détenteurs respectifs. Leur utilisation est à titre informatif et n'implique aucune affiliation avec eux ni aucune approbation de leur part.

	Please note - this project has no association with and is not endorsed by: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_ or `Medtronic <http://www.medtronic.com/>`_.
	
If you're ready for the challenge, please read on. 

Primary goals behind AndroidAPS
===========================================

* An app with safety built in. To read about the safety features of the algorithms, known as oref0 and oref1, click here (https://openaps.org/reference-design/)
* An all-in-one app for managing type 1 diabetes with an artificial pancreas and Nightscout
* An app to which users can easily add or remove modules as needed
* An app with different versions for specific locations and languages.
* An app which can be used in open- and closed-loop mode
* An app that is totally transparent: users can input parameters, see results, and make the final decision
* An app which is independent of particular pump drivers and contains a "virtual pump" so users can safely experiment before using it on themselves 
* An app closely integrated with Nightscout
* An app in which the user is in control of safety constraints 

How to start
===============
Of course, all of this content here is very important, but can be in the beginning quite confusing.
A good orientation is given by the `Module Overview <../Module/module.html>`_ and the `Objectives <../Usage/Objectives.html>`_. You can also take a look on the `sample setup with Dana, Dexcom and Sony Smartwatch <../Getting-Started/Sample-Setup.html>`_.
 
