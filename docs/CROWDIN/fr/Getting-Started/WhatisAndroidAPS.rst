Qu'est-ce qu'un système de boucle fermé avec AndroidAPS ?
****************************

AndroidAPS est une application qui peut communiquer avec des pompes à insuline compatibles Bluetooth et exécute une version des algorithmes OpenAPS «oref0» et «oref1». Qu'est ce qu'un système de pancréas artificiel? C’est un logiciel qui a pour but de faire ce que fait un pancréas vivant : maintenir la glycémie dans les limites saines automatiquement. 

Malheureusement, l’APS ne peut pas faire le même travail qu'un pancréas biologique, mais il peut soulager un diabète de type 1 en le rendant plus facile à gérer avec l’aide des dispositifs disponibles dans le commerce et son logiciel qui est simple et sûr. Le dispositif comporte:
- une mesure de glycémie en continu (MGC) qui communique à AndroidAPS le taux de sucre dans le sang.
- une pompe à insuline compatible qui administre des doses appropriées d'insuline calculée par AndroidAPS. L’application communique avec ces périphériques Bluetooth. Elle effectue les calculs de dosage à l’aide d’un algorithme, ou ensemble de règles, mis au point pour un autre système de pancréas artificiel, appelé OpenAPS, qui a des milliers d’utilisateurs et a accumulé des millions d’heures d’utilisation. 

Prudence : AndroidAPS n’est réglementée par aucune autorité médicale dans aucun pays. À l’aide d'AndroidAPS, vous procédez à une expérience médicale sur vous-même! La mise en place du système nécessite détermination et connaissances techniques. Si vous n’avez pas le savoir-faire technique au début, vous l'aurez à la fin. Toutes les informations dont vous avez besoin se trouve dans ces documents, ailleurs en ligne, ou par d’autres personnes qui l'ont déjà fait -- vous pouvez leur demander dans les groupes Facebook ou autres forums. Beaucoup de personnes ont construit avec succès la boucle avec AndroidAPS, et l’utilise à présent entièrement en toute sécurité, mais il est essentiel que tous les utilisateurs :

* Construisent eux-mêmes le système afin qu’ils comprennent bien comment ça marche
* Ajustent les dosages individuels de leur algorithme avec leur équipe médicale pour que cela fonctionne presque parfaitement
* Gèrent et surveillent le système pour s’assurer qu’il fonctionne correctement

.. note:: 
	** Avertissement **

	* Toutes les informations, pensées et codes décrits ici sont destinés à des fins d'information et d'éducation uniquement. Nightscout ne fait actuellement aucune tentative de conformité à la confidentialité HIPAA. Utilisez Nightscout et AndroidAPS à vos propres risques et n'utilisez pas les informations ni le code pour prendre des décisions médicales.

	* L'utilisation du code de github.com est sans garantie ni support formel d'aucune sorte. Veuillez consulter la LICENCE de ce référentiel pour plus de détails.

	* Tous les noms de produits et de sociétés, marques commerciales, marques de service, marques déposées,  sont la propriété de leurs détenteurs respectifs. Leur utilisation est à titre informatif et n'implique aucune affiliation avec eux ni aucune approbation de leur part.

	A noter - ce projet n'a aucun lien avec, et n'est pas approuvé par : `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_ ou `Medtronic <http://www.medtronic.com/>`_.
	
Si vous êtes prêt à relever le défi, lisez la suite. 

Principaux objectifs derrière AndroidAPS :
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
 
