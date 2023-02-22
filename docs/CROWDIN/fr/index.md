# Bienvenue dans la documentation de AAPS

![Image](images/modules-female.png)

AAPS est une application open source pour les personnes vivant avec un diabète insulino-dépendant et qui agit comme un pancréas artificiel (APS) sur les smartphones Google Android. Les principaux composants sont différents algorithmes logiciels de openAPS qui visent à reproduire ce que fait un pancréas vivant : maintenir la glycémie dans des limites de santé en utilisant un dosage automatisé d'insuline. De plus, il vous faut une pompe à insuline compatible approuvée FDA/CE et un capteur de Mesure de Glycémies en Continu (MGC).

The app does *not* use self-learning artificial intelligence. A la place, les calculs d'AAPS sont basés sur un algorithme de dosage individuel et les apports en glucides que l'utilisateur renseigne manuellement dans son profil de traitement, mais ces informations sont vérifiés par le système pour des raisons de sécurité.

L'application n'est pas fournie dans Google Play - vous devez la compiler vous même à partir du code source pour des raisons juridiques.

```{admonition} Ask for help - Writing Docs
:class: note

Please don't be shy, we urgently *need* support in creating the documentation.

A pull request to edit the documentation is relatively simple to create. Vous ne pouvez rien casser. Il y a des procédures pour la publication.

A 3 minute video which explains how to edit the docs via PR is available [here](https://www.youtube.com/watch?v=Vo4L6YYxWak).

```

## Comment lire la documentation ?

Nous avons rédigé ce paragraphe de la documentation en particulier pour ceux qui sont nouveaux dans le concept du Do-It-Yourself-APS (Système de Pancreas Artificiel fait soi même) afin de mieux vous montrer comment faire connaissance avec les informations que nous considérons comme les plus importantes, surtout en ce qui concerne la compréhension des raisons qui justifient les "limites" mises en place lorsque vous commencez votre premier voyage AAPS. Ces limites de sécurité ont été développées au cours de plusieurs années par les observations des erreurs involontaires que les nouveaux utilisateurs sont les plus susceptibles de commettre lors de la première mise en place, construit, et enfin lorsqu'ils ont réussi avec succès à boucler avec AAPS - comme le plus souvent ces erreurs se produisent simplement parce que l'utilisateur était tellement excité de commencer à utiliser le système qu'ils ont peut-être oublié de s'asseoir et de consacrer le temps nécessaire pour comprendre de façon approfondie l'ensemble des informations présentes dans cette documentation. Nous sommes tous passés par là!

Certes, l'approche "tout lire" a du mérite et est certainement bonne. Cependant, Il n’est pas rare que les nouveaux arrivants soient rapidement submergés par le volume et la variété des informations qu’ils sont censés comprendre en même temps! Ainsi, ces prochaines paragraphes sont destinées à mettre en place les fondations les plus importantes de la connaissance nécessaire pour gérer avec succès votre propre installation choisie le plus facilement possible. Les nouveaux utilisateurs peuvent se référer à ce guide lorsqu'ils rencontrent des aspects du système avec lesquels ils ne sont pas encore familiers; et pour se rappeler où aller dans la documentation afin de trouver des informations plus détaillées si nécessaire. Il est également important de mettre en perspective les capacités d'AAPS au démarrage, car il peut parfois être décevant de découvrir en cours de lecture que certains outils nécessaires ne sont pas disponibles pour le moment (à cause des contraintes sur les pompes à insuline, capteurs MGC disponibles dans certains pays et par rapport à  d'autres pays, etc.) ou tout simplement parce que les fonctionnalités moins importantes ou différentes de celles imaginées au départ. Enfin, il est important d'admettre que de nombreux points liés aux retours d'expérience dans cette documentation ne deviennent pertinents que lorsque vous commencetrz à utiliser AAPS en temps réel. Tout comme il est quasiment impossible d'apprendre à pratiquer un sport uniquement en lisant les règles, il faut combiner un apprentissage préalable des fondations et des règles pour fonctionner en toute sécurité AAPS et ensuite consacrer du temps pour apprendre comment appliquer au mieux ces règles pendant que vous naviguez à travers les étapes de la boucle avec AAPS.

La section [Pour commencer](Getting-Started/Safety-first.html) doit obligatoirement être lue pour comprendre ce qu'un système de pancréas artificiel est conçu pour faire; et est particulièrement pertinente pour les utilisateurs d'AAPS.

La section [De quoi ai-je besoin?](Module/module.html) spécifie les MGC (Mesure de Glycémie en Continu) et les pompes à insuline qui sont disponibles pour utilisation avec AAPS. Cette section est importante à comprendre pour que votre système AAPS puisse être assemblé et construit correctement la première fois et qu'elle fonctionne bien dans les situations du monde réel.

La section [Où chercher de l'aide ?](Where-To-Go-For-Help/Connect-with-other-users.html) devrait vous aider à vous orienter vers les meilleurs endroits pour aller chercher de l'aide en fonction de votre expérience avec AAPS. C'est très important pour que vous ne vous sentiez jamais seuls, surtout au début, et pour que vous puissiez entrer en contact avec d'autres utilisateurs aussi rapidement que possible, clarifier les questions et résoudre les écueils habituels le plus vite possible. L'expérience montre que beaucoup de gens utilisent déjà AAPS avec succès, mais tout le monde a une question à un moment qu'il ne sait pas résoudre seul. Ce qui est bien, c'est qu'en raison du grand nombre d'utilisateurs, les temps de réponse aux questions sont généralement très rapides, généralement seulement quelques heures. N'ayez pas peur de demander de l’aide, car il n’y a pas de question stupide! Nous encourageons les utilisateurs, quelque soit leur niveau, à poser autant de questions qu’ils jugent nécessaire pour les aider à fonctionner en toute sécurité. Il suffit juste d'essayez.

Dans la section [Glossaire](Getting-Started/Glossary.md) nous avons compilé une liste des acronymes (ou abbréviations) utilisés dans AAPS. Par exemple, pour savoir ce que signifie les termes SI ou CT, parmi les termes les plus courrants.

Pour les parents qui veulent construire AAPS pour leurs enfants, nous recommandons la section [AAPS pour les enfants](Children/Children.md) , car vous y trouverez des informations plus avancées pour apprendre les étapes supplémentaires nécessaires au contrôle à distance de l'application AAPS de votre enfant ainsi qu'un profil de sécurité plus complet par rapport aux adultes. Vous devez être en mesure de soutenir vos enfants et de comprendre tous les concepts avancés qu'AAPS propose pour vous aider à réussir.

Maintenant que vous avez une bonne compréhension des concepts qu'AAPS utilise, savoir où aller pour trouver les outils nécessaires pour construire votre APS et savoir où obtenir de l'aide en cas d'urgence, c'est le bon moment pour commencer à construire l'application ! La section [Comment installer AAPS ?](Installing-AndroidAPS/Building-APK.md) vous montre cela en détail. Étant donné que les exigences sont très différentes de celles que vous avez pu mettre en place dans le passé, nous vous recommandons de suivre vraiment toutes les instructions, pas à pas, les premières fois que vous construisez l'application, afin que vous ayez une meilleure idée de la façon dont le processus de construction de l'application est censé se comporter lorsque toutes les étapes sont suivies exactement. N'oubliez pas de prendre votre temps. Plus tard, cela ira très rapidement lorsque vous devrez reconstruire l'application pour une nouvelle version. De cette façon, vous aurez plus de chances de voir quand quelque chose ne va pas comme prévu avant que trop d'étapes ne soient effectuées. Il est important de sauvegarder votre fichier de clés (fichier .jks utilisé pour signer votre application) dans un endroit sûr, afin que vous puissiez toujours utiliser le même fichier de clés et le même mot de passe chaque fois qu'on vous demande de créer une nouvelle mise à jour d'AAPS, car c"est ve fichier qui garanti que chaque nouvelle version de l'application « se souviendra » de toutes les informations que vous lui avez fournies dans les versions précédentes de l'application et ainsi de permettre que les mises à jour se dérouleront aussi facilement que possible. En moyenne, vous pouvez considérer qu'il y aura une nouvelle version et 2 à 3 mises à jour par an. Ce nombre est basé sur le retour d'expérience et peut changer à l'avenir. Mais nous voulons au moins vous donner une estimation sur ce à quoi vous pouvez vous attendre. Lorsque vous aurez plus d'expérience pour créer les "build" de mises à jour d'AAPS, toutes les étapes nécessaires pour une mise à jour ne prendront que 15 à 30 minutes. en moyenne. Cependant, au début, il peut y avoir une période d'apprentissage assez difficile, car ces étapes ne sont pas toujours considérées comme intuitives par les nouveaux utilisateurs! Donc, ne soyez pas frustré si vous trouvez qu'il vous faut une demi-journée ou une journée entière avec l'aide de la communauté avant d'arriver à faire vos premières mise à jour. Si vous trouvez que vous devenez très frustré, prenez juste des courtes pauses et régulièrement; après un tour du pâté de maisons ou deux, vous trouverez que vous serez plus à même d'aborder le problème à nouveau. Nous avons également compilé une liste de questions et de réponses à la plupart des erreurs typiques qui sont susceptibles de se produire lors des premières mises à jour dans la section Questions Fréquentes; ainsi que dans « Comment installer AAPS ? » qui fournit des renseignements supplémentaires dans la section « Dépannage ».

La section [Configuration des composants](Configuration/BG-Source.md) explique comment intégrer correctement chacun des composants dans AAPS, ainsi que la façon de les configurer pour les faire fonctionner aussi facilement que possible ensemble. All components are listed under the separate sections: CGM/FGM, xDrip Settings, Pumps, Phones, Nightscout setup, and Smartwatches. The sensor (BG) values and control of the insulin pump are particularly important information to understand. The subsection [Configuration](Configuration/BG-Source.md) describes the best pump configurations to use in AAPS.

This is followed by a particularly important subsection [AndroidAPS Usage](Getting-Started/Screenshots.md), in which you are slowly introduced to the full usage of what AndroidAPS has to offer via a safe and carefully calibrated step-by-step gradual process designed to make sure that you/your child are thoroughly familiar and comfortable navigating all the different levels and menu configurations before graduating on the next phase, each commonly referred to as the next Objective, until you are have enough experience to begin using the more advanced options available within the app. These Objectives are specially designed in such a way that will gradually unlock more possibilities of AndroidAPS and switch from Open Loop to Closed Loop.

After that there is a subsection [General Hints](Usage/Timezone-traveling.md) with e.g. information on how to deal with the crossing of time zones as well as knowing what to do during the Spring Forward - Fall Back daylight saving time changes which will occur twice a year while using AndroidAPS.

There is a subsection for the [clinicians](Resources/clinician-guide-to-AndroidAPS.md) who have expressed interest in open source artificial pancreas technology such as AndroidAPS, or for patients who want to share such information with their clinicians.

Finally, in the subsection [How to help?](make-a-PR.md) we would like to provide you with information so that you are able to suggest small or larger changes to the documentation yourself and work together with us on the documentation. We further need support for [translation of the documentation](translations.md) By the way, it also very helpful for everyone if you could provide links to the corresponding documentation (or screenshots of where the links are located within the Documentation if you are not familiar with how to send a link) when answering questions from other users. That way the correct information can easily be located again should other users also be trying to find answers to the same types of questions in the future.

(index-translation-help-needed)=

```{admonition} Ask for help - Translators Neeeded!!!
:class: note

The documentation is written in English and translated in different languages. We are searching help by the translation of a) the app and b) the documentation.

The translation process is explained [here](translations.md).

The state of the translations per language for app and documentation can be found [here](./Administration/stateTranslations.md).

```

```{toctree}
:caption: Change language

Change language <./changelanguage.md>

```

```{toctree}
:caption: Getting started

Safety first <./Getting-Started/Safety-first.md>

What is a closed loop system <./Getting-Started/ClosedLoop.md>

What is a closed loop system with AndroidAPS <./Getting-Started/WhatisAndroidAPS.md>

Docs updates & changes <./Getting-Started/WikiUpdate.md>

```

(index-what-do-i-need)=

```{toctree}
:caption: What do I need

CGM/FGM choices <./Configuration/BG-Source.md>

Pump choices <./Getting-Started/Pump-Choices.md>

Module <./Module/module.md>

```

```{toctree}
:caption: How to Install AndroidAPS

Building the APK <./Installing-AndroidAPS/Building-APK.md>

Update to a new version or branch <./Installing-AndroidAPS/Update-to-new-version.md>

Hints and Checks after update to AAPS 3.0<./Installing-AndroidAPS/update3_0.md>

Checks after update to AAPS 2.7 <./Installing-AndroidAPS/update2_7.md>

Install git <./Installing-AndroidAPS/git-install.md>

Troubleshooting Android Studio <./Installing-AndroidAPS/troubleshooting_androidstudio.md>

Release notes <./Installing-AndroidAPS/Releasenotes.md>

Dev branch <./Installing-AndroidAPS/Dev_branch.md>

```

(index-component-setup)=

```{toctree}
:caption: Component Setup

CGM/FGM <./Configuration/BG-Source.md>

xDrip Settings <./Configuration/xdrip.md>

Pump choices <./Getting-Started/Pump-Choices.md>

Phones <./Hardware/Phoneconfig.md>

Nightscout setup <./Installing-AndroidAPS/Nightscout.md>

Smartwatch  <./Hardware/Smartwatch.md>

```

(index-configuration)=

```{toctree}
:caption: Configuration

Config builder <./Configuration/Config-Builder.md>

Preferences <./Configuration/Preferences.md>

```

```{toctree}
:caption: AndroidAPS Usage

AndroidAPS screens <./Getting-Started/Screenshots.md>

Objectives <./Usage/Objectives.md>

OpenAPS features <./Usage/Open-APS-features.md>

COB calculation <./Usage/COB-calculation.md>

Sensitivity detection <./Configuration/Sensitivity-detection-and-COB.md>

Profile switch <./Usage/Profiles.md>

Temp-targets <./Usage/temptarget.md>

Extended carbs <./Usage/Extended-Carbs.md>

Automation <./Usage/Automation.md>

Careportal (discontinued) <./Usage/CPbefore26.md>

Open Humans Uploader <./Configuration/OpenHumans.md>

Automation with 3rd party apps <./Usage/automationwithapp.md>

Android auto <./Usage/Android-auto.md>

```

```{toctree}
:caption: General Hints

Crossing timezones with pumps <./Usage/Timezone-traveling.md>

Accessing logfiles <./Usage/Accessing-logfiles.md>

Accu-Chek Combo tips for basic usage <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>

Export/Import Settings <./Usage/ExportImportSettings.md>

xDrip engineering mode <./Usage/Enabling-Engineering-Mode-in-xDrip.md>

```

```{toctree}
:caption: AndroidAPS for children

Remote monitoring <./Children/Children.md>

SMS commands <./Children/SMS-Commands.md>

Profile helper <./Configuration/profilehelper.md>

```

```{toctree}
:caption: Troubleshooting

Troubleshooting <./Usage/troubleshooting.md>

Nightscout client <./Usage/Troubleshooting-NSClient.md>

```

```{toctree}
:caption: FAQ

FAQ <./Getting-Started/FAQ.md>
```

```{toctree}
:caption: Glossary

Glossary <./Getting-Started/Glossary.md>
```

```{toctree}
:caption: Where to go for help

Useful resources to read before you start <./Where-To-Go-For-Help/Background-reading.md>

Where to go for help <./Where-To-Go-For-Help/Connect-with-other-users.md>

Docs updates & changes <./Getting-Started/WikiUpdate.md>

```

```{toctree}
:caption: For Clinicians

For Clinicians <./Resources/clinician-guide-to-AndroidAPS.md>
```

```{toctree}
:caption: How to help

How to help <./Getting-Started/How-can-I-help.md>

How to translate the app and docs <./translations.md>

State of translations <./Administration/stateTranslations.md>

How to edit the docs <./make-a-PR.md>

```

```{toctree}
:caption: Sandbox

Sandbox <./Sandbox/sandbox1.md>
```

```{note}
**Disclaimer And Warning**

- All information, thought, and code described here is intended for informational and educational purposes only. Nightscout ne fait actuellement aucune tentative de conformité à la confidentialité HIPAA. Utilisez Nightscout et AndroidAPS à vos propres risques et n'utilisez pas les informations ni le code pour prendre des décisions médicales.
- Use of code from github.com is without warranty or formal support of any kind. Veuillez consulter la LICENCE de ce référentiel pour plus de détails.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Leur utilisation est à titre informatif et n'implique aucune affiliation avec eux ni aucune approbation de leur part.

Please note - this project has no association with and is not endorsed by: [SOOIL](<https://www.sooil.com/eng/>), [Dexcom](<https://www.dexcom.com/>), [Accu-Chek, Roche Diabetes Care](<https://www.accu-chek.com/>) or [Medtronic](<https://www.medtronic.com/>)

```
