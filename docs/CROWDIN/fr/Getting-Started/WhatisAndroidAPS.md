# Qu'est-ce qu'un système de boucle fermé avec AndroidAPS ?

AndroidAPS est une application qui agit comme un pancréas artificiel (APS) sur un smartphone Android. Qu'est ce qu'un système de pancréas artificiel? C’est un logiciel qui a pour but de faire ce que fait un pancréas vivant : maintenir la glycémie dans les limites saines automatiquement.

Malheureusement, l’APS ne peut pas faire le même travail qu'un pancréas biologique, mais il peut soulager un diabète de type 1 en le rendant plus facile à gérer avec l’aide des dispositifs disponibles dans le commerce et son logiciel qui est simple et sûr. Le dispositif comporte: - une mesure de glycémie en continu (MGC) qui communique à AndroidAPS le taux de sucre dans le sang. - une pompe à insuline compatible qui administre des doses appropriées d'insuline calculée par AndroidAPS. L’application communique avec ces périphériques Bluetooth. Elle effectue les calculs de dosage à l’aide d’un algorithme, ou ensemble de règles, mis au point pour un autre système de pancréas artificiel, appelé OpenAPS, qui a des milliers d’utilisateurs et a accumulé des millions d’heures d’utilisation.

Prudence : AndroidAPS n’est réglementée par aucune autorité médicale dans aucun pays. À l’aide d'AndroidAPS, vous procédez à une expérience médicale sur vous-même! La mise en place du système nécessite détermination et connaissances techniques. Si vous n’avez pas le savoir-faire technique au début, vous l'aurez à la fin. Toutes les informations dont vous avez besoin se trouve dans ces documents, ailleurs en ligne, ou par d’autres personnes qui l'ont déjà fait -- vous pouvez leur demander dans les groupes Facebook ou autres forums. Beaucoup de personnes ont construit avec succès la boucle avec AndroidAPS, et l’utilise à présent entièrement en toute sécurité, mais il est essentiel que tous les utilisateurs :

- Builds the system themselves so that they thoroughly understand how it works
- Adjusts its individual dosage algorithm with his or her diabetes team to work nearly perfect
- Maintains and monitors the system to ensure it is working properly

```{note}
**Disclaimer and Warning**

- All information, thought, and code described here is intended for informational and educational purposes only. Nightscout ne fait actuellement aucune tentative de conformité à la confidentialité HIPAA. Utilisez Nightscout et AndroidAPS à vos propres risques et n'utilisez pas les informations ni le code pour prendre des décisions médicales.
- Use of code from github.com is without warranty or formal support of any kind. Veuillez consulter la LICENCE de ce référentiel pour plus de détails.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Leur utilisation est à titre informatif et n'implique aucune affiliation avec eux ni aucune approbation de leur part.

Please note - this project has no association with and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) or [Medtronic](https://www.medtronic.com/).
```

Si vous êtes prêt à relever le défi, lisez la suite.

## Principaux objectifs derrière AndroidAPS :

- An app with safety built in. To read about the safety features of the algorithms, known as oref0 and oref1, click here (<https://openaps.org/reference-design/>)
- An all-in-one app for managing type 1 diabetes with an artificial pancreas and Nightscout
- An app to which users can easily add or remove modules as needed
- An app with different versions for specific locations and languages.
- An app which can be used in open- and closed-loop mode
- An app that is totally transparent: users can input parameters, see results, and make the final decision
- An app which is independent of particular pump drivers and contains a "virtual pump" so users can safely experiment before using it on themselves
- An app closely integrated with Nightscout
- An app in which the user is in control of safety constraints

## Comment débuter

Bien sûr, tout ce contenu ici est très important, mais peut être au début assez déroutant. A good orientation is given by the [Module Overview](../Module/module.md) and the [Objectives](../Usage/Objectives.html).
