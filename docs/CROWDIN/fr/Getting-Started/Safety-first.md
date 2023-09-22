# La sécurité avant tout

**Quand vous décidez de construire votre propre pancréas artificiel, c’est toujours important de penser à la sécurité et à la sûreté, et de bien comprendre les impacts de toutes vos actions**

## Généralités

- AAPS is a just a tool to help you manage diabetes, it is not a fully automated system you can install and forget!
- Do not assume that AAPS will never make mistakes. Le dispositif prend le contrôle de la délivrance d’insuline : surveillez le tout le temps, comprenez comment il fonctionne, et apprenez comment interpréter ses actions.
- N’oubliez pas que, une fois appairé, le téléphone peut demander à la pompe de faire n'importe quelle action. Only use this phone for AAPS and, if being used by a child, essential communications. N’installez pas des applications ou des jeux (!!!) inutiles qui pourraient introduire des logiciels malveillants comme des chevaux de troie, des virus ou des robots qui pourraient interférer avec votre système.
- Installez toutes les mises à jour de sécurité proposées par le fabricant de votre téléphone et Google.
- Vous pourriez aussi avoir besoin de modifier vos habitudes en tant que diabétique lorsque vous changez de thérapie en utilisant un système de boucle fermée. Par ex. some people report, they need less hypo treatments as AAPS has already reduced insulin.

## Communicateur SMS

- AAPS vous permet de controler le téléphone d’un enfant à distance via un SMS. Si vous activez le Communicateur SMS, rappelez-vous toujours que le téléphone configuré pour donner des commandes distantes pourrait être volé. Donc, toujours le protéger au minimum par un code PIN.
- AAPS vous informera également par SMS si vos commandes à distance, comme un bolus ou un changement de profil, ont été effectuées. Il est conseillé de le configurer de sorte que les SMS de confirmation soient envoyés à au moins deux numéros de téléphone différents au cas où l'un des téléphones destinataires serait volé.

(Safety-first-aaps-can-also-be-used-by-blind-people)=
## AAPS can also be used by blind people

Sur les appareils Android, TalkBack fait partie du système d'exploitation. Il s'agit d'un programme pour s'orienter sur l'écran avec la voix. With TalkBack you can operate your smartphone as well as AAPS blind.

We users create the AAPS app ourselves with Android Studio. Beaucoup utilisent Microsoft Windows à cette fin, à l'aide du lecteur d'écran ("Screenreader"), qui est analogue à TalkBack. Comme Android Studio est une application Java, le composant "Java Access Bridge" doit être activé dans le Panneau de configuration. Dans le cas contraire, le lecteur d'écran du PC ne pourra pas fonctionner dans Android Studio.

Pour ce faire, veuillez procéder comme suit:

- Appuyez sur la touche "Windows" et entrez "Panneau de configuration" dans le champ de recherche, appuyez sur la touche "Entrée" pour l'ouvrir. Cela ouvre : "Tous les éléments du panneau de configuration".
- Appuyez sur la lettre C pour aller à "Centre pour la facilité d'utilisation", appuyez sur la touche "Entrée" pour l'ouvrir.
- Puis ouvrez "Utiliser l'ordinateur sans écran" en appuyant sur "Entrée".
- Là, en bas, vous trouverez la case à cocher "Activer Java Access Bridge", sélectionnez-la.
- Terminé, il suffit de fermer la fenêtre ! Le lecteur d'écran devrait fonctionner maintenant.

```{note}
**AVIS DE SÉCURITÉ IMPORTANT**

La base des fonctions de sécurité d'AAPS présentée dans cette documentation s'appuie sur les fonctions de sécurité du matériel utilisé pour construire votre système. Il est extrêmement important que vous utilisiez uniquement une pompe à insuline et un capteur de MGC approuvés FDA/CE pour mettre en oeuvre une boucle fermée d'administration automatique d'insuline. Les modifications matérielles ou logicielles de ces composants peuvent entraîner un dosage incorrect de l'insuline, causant un risque significatif pour l'utilisateur. Si vous trouvez ou recevez des pompes à insuline ou des récepteurs MGC cassés, modifiés ou fabriqués par vos soins, *ne les utilisez pas* pour créer un système AAPS.

De plus, il est également important d'utiliser uniquement des fournitures d'origine telles que serteurs, canules et réservoirs d'insuline approuvés par le fabricant pour une utilisation avec votre pompe ou votre MGC. L'utilisation de consommables non testés ou modifiés peut entraîner une imprécision du MGC et des erreurs de dosage de l'insuline. L'insuline est très dangereuse lorsqu'elle est mal dosée - veuillez ne pas jouer avec votre vie en piratant avec vos fournitures.

Enfin et surtout, vous ne devez pas prendre d'inhibiteurs du SGLT-2 (gliflozines), car ils abaissent de façon incalculable la glycémie.  La combinaison avec un système qui réduit les débits de base pour augmenter la glycémie est particulièrement dangereuse car en raison de la gliflozine, cette augmentation de glycémie pourrait ne pas se produire et un état dangereux d'absence d'insuline peut se produire.
```
