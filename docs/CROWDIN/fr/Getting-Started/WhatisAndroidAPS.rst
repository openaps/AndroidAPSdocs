Qu'est-ce qu'un système de boucle fermé avec AndroidAPS ?
**************************************************

AndroidAPS est une application qui agit comme un pancréas artificiel (APS) sur un smartphone Android. Qu'est ce qu'un système de pancréas artificiel? C’est un logiciel qui a pour but de faire ce que fait un pancréas vivant : maintenir la glycémie dans les limites saines automatiquement. 

Malheureusement, l’APS ne peut pas faire le même travail qu'un pancréas biologique, mais il peut soulager un diabète de type 1 en le rendant plus facile à gérer avec l’aide des dispositifs disponibles dans le commerce et son logiciel qui est simple et sûr. Le dispositif comporte:
- une mesure de glycémie en continu (MGC) qui communique à AndroidAPS le taux de sucre dans le sang.
- une pompe à insuline compatible qui administre des doses appropriées d'insuline calculée par AndroidAPS. L’application communique avec ces périphériques Bluetooth. Elle effectue les calculs de dosage à l’aide d’un algorithme, ou ensemble de règles, mis au point pour un autre système de pancréas artificiel, appelé OpenAPS, qui a des milliers d’utilisateurs et a accumulé des millions d’heures d’utilisation. 

Prudence : AndroidAPS n’est réglementée par aucune autorité médicale dans aucun pays. À l’aide d'AndroidAPS, vous procédez à une expérience médicale sur vous-même! La mise en place du système nécessite détermination et connaissances techniques. Si vous n’avez pas le savoir-faire technique au début, vous l'aurez à la fin. Toutes les informations dont vous avez besoin se trouve dans ces documents, ailleurs en ligne, ou par d’autres personnes qui l'ont déjà fait -- vous pouvez leur demander dans les groupes Facebook ou autres forums. Beaucoup de personnes ont construit avec succès la boucle avec AndroidAPS, et l’utilise à présent entièrement en toute sécurité, mais il est essentiel que tous les utilisateurs :

* Construisent eux-mêmes le système afin qu’ils comprennent bien comment ça marche
* Ajustent les dosages individuels de leur algorithme avec leur équipe médicale pour que cela fonctionne presque parfaitement
* Gèrent et surveillent le système pour s’assurer qu’il fonctionne correctement

.. note:: 
	**Clause de non-responsabilité et avertissement**

	* Toutes les informations, pensées et codes décrits ici sont destinés à des fins d'information et d'éducation uniquement. Nightscout ne fait actuellement aucune tentative de conformité à la confidentialité HIPAA. Utilisez Nightscout et AndroidAPS à vos propres risques et n'utilisez pas les informations ni le code pour prendre des décisions médicales.

	* L'utilisation du code de github.com est sans garantie ni support formel d'aucune sorte. Veuillez consulter la LICENCE de ce référentiel pour plus de détails.

	* Tous les noms de produits et de sociétés, marques commerciales, marques de service, marques déposées,  sont la propriété de leurs détenteurs respectifs. Leur utilisation est à titre informatif et n'implique aucune affiliation avec eux ni aucune approbation de leur part.

	A noter - ce projet n'a aucun lien avec, et n'est pas approuvé par : `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_ ou `Medtronic <http://www.medtronic.com/>`_.
	
Si vous êtes prêt à relever le défi, lisez la suite. 

Principaux objectifs derrière AndroidAPS :
==================================================

* Une application construite avec sécurité. Cliquez ici pour connaître les caractéristiques de sécurité des algorithmes, appelés oref0 et oref1, (https://openaps.org/reference-design/)
* Une application tout-en-un pour la gestion de diabète de type 1 avec un pancréas artificiel et Nightscout
* Une application à laquelle les utilisateurs peuvent facilement ajouter ou supprimer des modules selon leurs besoins
* Une application avec différentes versions pour des pays et des langues spécifiques.
* Une application qui peut être utilisée en mode "boucle ouverte" et "boucle fermée"
* Une application totalement transparente : les utilisateurs peuvent saisir des paramètres, voir les résultats et prendre la décision finale.
* Une application indépendante de pilotes de pompe particuliers et contenant une "pompe virtuelle" afin que les utilisateurs puissent expérimenter en toute sécurité avant de l'utiliser sur eux-mêmes 
* Une application étroitement intégrée à Nightscout
* Une application dans laquelle l'utilisateur maîtrise les contraintes de sécurité 

Comment débuter
==================================================
Bien sûr, tout ce contenu ici est très important, mais peut être au début assez déroutant.
Une bonne orientation est donnée par le `Module de présentation <../Module/module.html>`_ et les `Objectifs <../Usage/Objectives.html>`_. Vous pouvez également consulter `l'exemple de configuration avec une Dana, un Dexcom et une montre Sony <../Getting-Started/Sample-Setup.html>`_.
 
