

<div id="front-matter"><ul><li><div class="yaml-key" translate="no" has_child_nodes="yes">substitutions: </div><ul><li><div class="yaml-key" translate="no" has_child_nodes="no">DiaLink: </div><div class="yaml-value">`{image} ../images/omnipod/DiaLink.png`</div></li>
- <div class="yaml-key" translate="no" has_child_nodes="no">EmaLink: </div><div class="yaml-value">
    <code>{image} ../images/omnipod/EmaLink.png</code>
  </div>
- <div class="yaml-key" translate="no" has_child_nodes="no">LoopLink: </div><div class="yaml-value">
    <code>{image} ../images/omnipod/LoopLink.png</code>
  </div>
- <div class="yaml-key" translate="no" has_child_nodes="no">OrangeLink: </div><div class="yaml-value">
    <code>{image} ../images/omnipod/OrangeLink.png</code>
  </div>
- <div class="yaml-key" translate="no" has_child_nodes="no">RileyLink: </div><div class="yaml-value">
    ```{image} ../images/omnipod/RileyLink.png</p> 
    
    <pre><code class="&lt;/div&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;">

# Vue d'ensemble des composants

AAPS n'est pas seulement une application (faite vous même), c'est juste un des modules fonctionnels de votre système de boucle fermée. Avant de décider des composants, ce serait une bonne idée de jeter un oeil à la [configuration des composants](index-component-setup).

```{image} ../images/modules.png
:alt: "Aperçu des composants"
</code></pre>
    
    <pre><code class="{note}">**AVIS DE SÉCURITÉ IMPORTANT**

La base des fonctions de sécurité d'AndroidAPS présentée dans cette documentation s'appuie sur les fonctions de sécurité du matériel utilisé pour construire votre système. Il est extrêmement important que vous utilisiez uniquement une pompe à insuline et un capteur de MGC approuvés FDA/CE pour mettre en oeuvre une boucle fermée d'administration automatique d'insuline. Les modifications matérielles ou logicielles de ces composants peuvent entraîner un dosage incorrect de l'insuline, causant un risque significatif pour l'utilisateur. Si vous trouvez ou recevez des pompes à insuline ou des récepteurs MGC cassés, modifiés ou fabriqués par vos soins, *ne les utilisez pas* pour créer un système AAPS.

De plus, il est également important d'utiliser uniquement des fournitures d'origine telles que serteurs, canules et réservoirs d'insuline approuvés par le fabricant pour une utilisation avec votre pompe ou votre MGC. L'utilisation de consommables non testés ou modifiés peut entraîner une imprécision du MGC et des erreurs de dosage de l'insuline. L'insuline est très dangereuse lorsqu'elle est mal dosée - veuillez ne pas jouer avec votre vie en piratant avec vos fournitures.

Enfin et surtout, vous ne devez pas prendre d'inhibiteurs du SGLT-2 (gliflozines), car ils abaissent de façon incalculable la glycémie.  La combinaison avec un système qui réduit les débits de base pour augmenter la glycémie est particulièrement dangereuse car en raison de la gliflozine, cette augmentation de glycémie pourrait ne pas se produire et un état dangereux d'absence d'insuline peut se produire.
</code></pre>

<h2 spaces-before="0">
  Composants Nécessaires
</h2>

<h3 spaces-before="0">
  Un bon algorithme de dosage individuel pour votre diabète
</h3>

<p spaces-before="0">
  Même si ce n'est pas quelque chose à créer ou à acheter, c'est le "composant" qui est probablement le plus sous-estimé, mais essentiel. Quand vous laissez un algorithme vous aider à gérer votre diabète, il doit en connaître les bons réglages pour ne pas faire de graves erreurs. Même si d'autres composants vous manquent, vous pouvez déjà vérifier et adapter votre « profil » en collaboration avec votre équipe médicale. La plupart des "boucleurs" utilisent le rythme circadien pour les DB, la SI et le G/I, qui adaptent la sensibilité à l'insuline hormonale durant la journée.
</p>

<p spaces-before="0">
  Le profil inclut :
</p>

<ul>
  <li>
    DB (débits de basal)
  </li>
  <li>
    SI (sensibilité à l'insuline) est la baisse de glycémie que provoque une unité d'insuline
  </li>
  <li>
    G/I (ratio Glucides / Insuline) est la quantité de glucides en grammes par unité d'insuline
  </li>
  <li>
    DAI (durée d'action de l'insuline).
  </li>
</ul>

<p spaces-before="0">
  (module-no-use-of-sglt-2-inhibitors)=
</p>
<h3 spaces-before="0">
  Ne pas utiliser d'inhibiteurs SGLT-2
</h3>

<p spaces-before="0">
  Les inhibiteurs SGLT-2, aussi appelés gliflozines, empêchent la réabsorption du glucose dans le rein. Comme ils abaissent de façon incalculable la glycémie, vous NE DEVEZ PAS les prendre en utilisant un système à boucle fermée comme AndroidAPS! Il y aurait un risque énorme d'une acidocétose ou d'une hypoglycémie ! La combinaison de ce médicament avec un système qui abaisse les débits de basal pour augmenter la glycémie est particulièrement dangereuse car en raison de la gliflozine, cette augmentation de Gly pourrait ne pas se produire et un état dangereux d'absence d'insuline peut se produire.
</p>

<p spaces-before="0">
  (module-phone)=
</p>
<h3 spaces-before="0">
  Téléphone
</h3>

<p spaces-before="0">
  La version actuelle d'AndroidAPS nécessite un smartphone Android avec Google Android 8.0 ou supérieur. Donc si vous pensez à un nouveau téléphone, un Android 8.1 minimum est recommandé mais choisissez de préférence une version Android 9 ou 10. Les utilisateurs sont fortement encouragés à maintenir leur version d'AAPS à jour pour des raisons de sécurité. Cependant pour les utilisateurs qui ne peuvent pas utiliser d'appareil avec Android 8 minimum, la version 2.6.1.4 d'AAPS, adaptée aux versions plus anciennes d'Android, reste disponible sur l'<a href="https://github.com/miloskozak/androidaps">ancien dépôt.</a>
</p>

<p spaces-before="0">
  Les utilisateurs sont en train de créer une <a href="https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing">liste des téléphones et des montres testées</a>
</p>

<p spaces-before="0">
  Pour enregistrer un téléphone ou une montre qui n'est pas déjà dans la feuille de calcul, veuillez remplir le <a href="https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform">formulaire</a>.
</p>

<p spaces-before="0">
  En cas de problème avec la feuille de calcul, merci d'envoyer un mail à <a href="mailto:hardware@androidaps.org">hardware@androidaps.org</a>, pour tous les dons de téléphone/montre qui ont encore besoin d'être testés, merci d'envoyer un mail à <a href="mailto:hardware@androidaps.org">donations@androidaps.org</a>.
</p>

<h3 spaces-before="0">
  Pompe à insuline
</h3>

<p spaces-before="0">
  AAPS fonctionne <strong x-id="1">actuellement</strong> avec
</p>

<ul>
  <li>
    <a href="../Configuration/Accu-Chek-Combo-Pump.md">Accu-Chek Combo</a> (également nécessaire : application Ruffy, LineageOS ou Android 8.1 sur votre téléphone)
  </li>
  <li>
    <a href="../Configuration/Accu-Chek-Insight-Pump.md">Accu-Chek Insight</a>
  </li>
  <li>
    <a href="../Configuration/DanaR-Insulin-Pump.md">DanaR</a>
  </li>
  <li>
    <a href="../Configuration/DanaRS-Insulin-Pump.md">Dana-i/RS</a>
  </li>
  <li>
    <a href="../Configuration/MedtronicPump.md">certaines anciennes pompes Medtronic</a> de la version 2.4 à venir (<a href="module-additional-communication-device">dispositif de communication supplémentaire</a> nécessaires)
  </li>
  <li>
    <a href="../Configuration/OmnipodEros.md">Omnipod Eros</a> (<a href="module-additional-communication-device">dispositif de communication supplémentaire</a> nécessaire)
  </li>
  <li>
    <a href="../Configuration/OmnipodDASH.md">Omnipod Dash</a>
  </li>
</ul>

<p spaces-before="0">
  Si aucun périphérique de communication supplémentaire n'est indiqué, la communication entre la pompe à insuline et AndroidAPS est basée sur la puce bluetooth intégrée dans Android sans avoir besoin d'un boitier supplémentaire.
</p>

<p spaces-before="0">
  <strong x-id="1">D'autres pompes</strong>, qui peuvent potentiellement fonctionner avec AAPS, sont listées sur la page <a href="../Getting-Started/Future-possible-Pump-Drivers.md">Futures pompes (possible)</a>.
</p>

<p spaces-before="0">
  (module-additional-communication-device)=
</p>
<h4 spaces-before="0">
  Périphérique de communication additionnel
</h4>

<p spaces-before="0">
  Pour les anciennes pompes medtronic, un périphérique de communication supplémentaire (en plus de votre téléphone) est nécessaire pour "traduire" le signal radio de la pompe vers le Bluetooth. Assurez-vous de choisir la bonne version en fonction de votre pompe.
</p>

<ul>
  <li>
    {{ OrangeLink }}  <a href="https://getrileylink.org/product/orangelink">Site internet OrangeLink</a>
  </li>
  <li>
    {{ RileyLink }} <a href="https://getrileylink.org/product/rileylink433">RileyLink 433MHz</a>
  </li>
  <li>
    {{ EmaLink }}  <a href="https://github.com/sks01/EmaLink">Site internet Emalink</a> - <a href="mailto:getemalink@gmail.com">Contact</a>
  </li>
  <li>
    {{ DiaLink }} DiaLink - <a href="mailto:Boshetyn@ukr.net">Contact</a>
  </li>
  <li>
    {{ LoopLink }}  <a href="https://www.getlooplink.org/">Site internet LoopLink</a> - <a href="https://jameswedding.substack.com/">Contact</a> - Non testé
  </li>
</ul>

<p spaces-before="0">
  <strong x-id="1">Alors quelle est la meilleure pompe pour boucler avec AAPS ?</strong>
</p>

<p spaces-before="0">
  La Combo, l'Insight et les anciennes Medtronics sont des pompes solides et bouclables. La Combo offre l’avantage d'avoir un choix parmi beaucoup plus de sets d’infusion, car elle est dotée d’un verrouillage Luer standard. Et elle est alimentée par une pile standard que vous pouvez acheter dans n'importe quelle station service, un magasin de proximité 24 heures / 24 et si vous en avez vraiment besoin, vous pouvez l'emprunter à la télécommande de votre chambre d'hôtel ;-).
</p>

<p spaces-before="0">
  Les avantages de la DanaR/RS et Dana-i vs. la Combo comme choix de pompe de choix sont :
</p>

<ul>
  <li>
    Les pompes Dana se connectent à presque tous les téléphones avec Android >= 5.1 sans avoir besoin de flasher le Lineage OS. Si votre téléphone se casse, vous pouvez trouver facilement n'importe quel téléphone qui fonctionne avec les pompes Dana en remplacement rapide... ce n'est pas aussi facile avec la Combo. (Cela pourrait changer à l'avenir quand Android 8.1 sera plus populaire)
  </li>
  <li>
    L'appairage initial est plus simple avec la Dana-i/RS. Mais en général, vous ne le faites qu'une seule fois, cela n'a d'impact que si vous voulez tester une nouvelle fonctionnalité avec des pompes différentes.
  </li>
  <li>
    Jusqu'à présent, le Combo fonctionne avec l'écran en veille. En général, cela fonctionne bien, mais c'est lent. Pour le bouclage, cela n'a pas d'importance car tout fonctionne en arrière-plan. Il y a beaucoup plus de connections BT, donc plus de risques où la connexion BT pourrait se rompre, ce qui n'est pas si facile si vous vous éloignez de votre téléphone par ex. en faisant votre bolus tout en cuisinant.
  </li>
  <li>
    La Combo vibre à la fin des DBTs (Basal Temporaire), la DanaR vibre (ou bips) sur les SMB. La nuit, vous êtes susceptibles de plus utiliser les DBT que les SMB.  Le Dana-i/RS est configurable pour ne pas émettre de bip ni vibrer.
  </li>
  <li>
    La lecture de l'historique sur le Dana-iRS en quelques secondes avec des glucides permet de changer facilement de téléphone en mode hors connexion et de poursuivre la boucle dès que des valeurs de MGC sont lues.
  </li>
  <li>
    Toutes les pompes avec lesquelles AAPS peut parler sont étanches à la livraison. Seules les pompes Dana sont également "étanches par garantie" en raison du compartiment de batteries scellées et du système de remplissage du réservoir.
  </li>
</ul>

<h3 spaces-before="0">
  Source GLY
</h3>

<p spaces-before="0">
  Voici un bref aperçu de tous les MGC/MGF compatibles avec AndroidAPS. Pour plus de détails, consultez <a href="../Configuration/BG-Source.md">ceci</a>. Juste une petite astuce : si vous voulez afficher vos glycémies dans l'application xDrip+ ou dans le site web Nightscout, vous pouvez choisir xDrip+ (ou Nightscout avec connexion web) comme source de glycémie dans AAPS.
</p>

<ul>
  <li>
    <a href="../Hardware/DexcomG6.md">Dexcom G6</a>: BOYDA est recommandée depuis la version 3.0 (voir <a href="Releasenotes-important-hints-3-0-0">release notes</a> pour plus de détails). xDrip+ doit être au moins la version 2022.01.14 ou plus récente
  </li>
  <li>
    <a href="../Hardware/DexcomG5.md">Dexcom G5</a> : Il fonctionne avec l'application xDrip+ ou l'application Dexcom patchée
  </li>
  <li>
    <a href="../Hardware/DexcomG4.md">Dexcom G4</a> : Ces capteurs sont assez anciens, mais vous pouvez trouver les instructions sur la façon de les utiliser avec l'application xDrip+
  </li>
  <li>
    <a href="../Hardware/Libre2.md">Libre 2</a> : Il fonctioinne avec xDrip+ (pas besoin de transmetteur), mais vous devez compiler votre propre application patchée
  </li>
  <li>
    <a href="../Hardware/Libre1.md">Libre 1</a> : Vous avez besoin d'un transmetteur comme le Bluecon ou le MiaoMiao pour lui (acheté ou fabriqué) et l'application xDrip+
  </li>
  <li>
    <a href="../Hardware/Eversense.md">Eversense</a> : Il ne marche pour l'instant qu'avec l'application ESEL et une application Eversense patchée (il ne marche pas avec DanaRS et un LineageOS, mais DanaRS et Android ou Combo et Lineage OS marchent bien)
  </li>
  <li>
    <a href="../Hardware/MM640g.md">Enlite (MM640G/MM630G)</a> : assez compliqué avec pas mal de choses supplémentaires à faire
  </li>
</ul>

<h3 spaces-before="0">
  Nightscout
</h3>

<p spaces-before="0">
  Nightscout est une application Web open source qui peut enregistrer et afficher vos données MGC / AndroidAPS et créer des rapports. Vous pouvez trouver plus d'informations sur le <a href="http://nightscout.github.io/">site web du projet Nightscout</a>. Vous pouvez créer votre propre <a href="https://nightscout.github.io/nightscout/new_user/">site web Nightscout</a>, utilisez la configuration semi-automatisée Nightscout sur <a href="https://ns.10be.de/en/index.html">zehn.be</a> ou l'héberger sur votre propre serveur (c'est pour les experts en informatique).
</p>

<p spaces-before="0">
  Nightscout est indépendant des autres modules. Vous en aurez besoin pour réaliser l'objectif 1.
</p>

<p spaces-before="0">
  Des informations supplémentaires sur la configuration de Nightscout pour l'utiliser avec AAPS peuvent être trouvées <a href="../Installing-AndroidAPS/Nightscout.md">ici</a>.
</p>

<h3 spaces-before="0">
  Fichier apk de AAPS
</h3>

<p spaces-before="0">
  Le composant de base du système. Avant d'installer l'application, vous devez d'abord construire le fichier apk (qui est l'extension pour une application Android). Les instructions sont <a href="../Installing-AndroidAPS/Building-APK.md">ici</a>.
</p>

<h2 spaces-before="0">
  Composants optionnels
</h2>

<h3 spaces-before="0">
  Montres connectées
</h3>

<p spaces-before="0">
  Vous pouvez choisir n'importe quelle montre connectée avec Android Wear 1.x et plus. La plupart des boucleurs portent une montre Sony Smartwatch 3 (SWR50) car c'est la seule montre qui peut obtenir des lectures de Dexcom G5/G6 quand le téléphone est hors de portée. D'autres montres peuvent également être patchées pour fonctionner comme récepteur indépendant (voir <a href="https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5">cette documentation</a> pour plus de détails).
</p>

<p spaces-before="0">
  Les utilisateurs sont en train de créer une <a href="https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing">liste des téléphones et des montres testées</a>. Ils y a plusieurs cadrans disponibles pour AAPS que vous pouvez trouver <a href="../Configuration/Watchfaces.md">ici</a>.
</p>

<p spaces-before="0">
  Pour enregistrer un téléphone ou une montre qui n'est pas déjà dans la feuille de calcul, veuillez remplir le <a href="https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform">formulaire</a>.
</p>

<p spaces-before="0">
  En cas de problème avec la feuille de calcul, merci d'envoyer un mail à <a href="mailto:hardware@androidaps.org">hardware@androidaps.org</a>, pour tous les dons de téléphone/montre qui ont encore besoin d'être testés, merci d'envoyer un mail à <a href="mailto:hardware@androidaps.org">donations@androidaps.org</a>.
</p>

<h3 spaces-before="0">
  xDrip+
</h3>

<p spaces-before="0">
  Même si vous n'avez pas besoin d'avoir l'application xDrip+ en tant que Source GLY, vous pouvez toujours l'utiliser par ex. pour les alertes ou pour un bon affichage des glycémies. Vous pouvez avoir autant d'alarmes que vous le souhaitez, spécifier l'heure à laquelle l'alarme doit être active, si elle peut remplacer le mode silencieux, etc. Certaines informations xDrip+ peuvent être trouvées <a href="../Configuration/xdrip.md">ici</a>. Veuillez noter que les documentations de cette application ne sont pas toujours à jour car leur progression est assez rapide.
</p>

<h2 spaces-before="0">
  Que faire en attendant les composants
</h2>

<p spaces-before="0">
  Il faut parfois un certain temps pour pouvoir activer tous les composants pour fermer la boucle. Mais pas de soucis, il y a beaucoup de choses que vous pouvez faire en attendant. Il est NECESSAIRE de vérifier et (le cas échéant) adapter les débits de basal (DB), ratio Glucide/Insulin (G/I), la sensibilité à l'insulin (SI) etc. Et la boucle ouverte peut être un bon moyen pour tester le système, et se familiariser avec AndroidAPS. En utilisant ce mode, AndroidAPS donne des conseils de traitement que vous pouvez exécuter manuellement.
</p>

<p spaces-before="0">
  Vous pouvez continuer à lire la documentation ici présente, entrer en contact avec d'autres boucleurs en ligne ou hors ligne, <a href="../Where-To-Go-For-Help/Background-reading.md">lire les documentations</a> ou ce que d'autres boucleurs ont écrits (vous devez toutefois rester prudent, tout n'est pas correct ou adapté à votre situation).
</p>

<p spaces-before="0">
  <strong x-id="1">Fini ?</strong> Si vous avez tous vos composants AAPS ensemble (bravo !) ou au moins suffisamment pour pouvoir démarrer en mode Boucle Ouverte, vous devez d'abord lire la page <a href="../Usage/Objectives.md">Objectifs</a> avant chaque nouvel objectif et configurer vos <a href="index-component-setup">composants</a>.
</p>

<p spaces-before="0">
  % Alias des ressources d'images pour référencer les images par leur nom avec plus de flexibilité de positionnement
</p>

<p spaces-before="0">
  % Configuration matérielle et logicielle requise
</p>
