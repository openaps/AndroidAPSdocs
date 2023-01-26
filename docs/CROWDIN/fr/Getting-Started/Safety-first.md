# La sécurité avant tout

**When you decide to build your own artificial pancreas, it's always important to think about security and safety, and to understand the impact of all your actions**

## Généralités

- AndroidAPS is a just a tool to help you manage diabetes, it is not a fully automated system you can install and forget!
- Do not assume that AndroidAPS will never make mistakes. Le dispositif prend le contrôle de la délivrance d’insuline : surveillez le tout le temps, comprenez comment il fonctionne, et apprenez comment interpréter ses actions.
- Remember that, once paired, the phone can instruct the pump to do anything. N’utilisez ce téléphone que pour AndroidAPS et, s’il est utilisé par un enfant, pour les communications essentielles. N’installez pas des applications ou des jeux (!!!) inutiles qui pourraient introduire des logiciels malveillants comme des chevaux de troie, des virus ou des robots qui pourraient interférer avec votre système.
- Install all security updates provided by your phone manufacturer and Google.
- You might also need to change your diabetes habits as you change your therapy by using a closed loop system. Par ex. certaines personnes signalent qu'elles ont besoin de moins de traitements d'hypo car AndroidAPS a déjà réduit l'insuline.

## Communicateur SMS

- AndroidAPS allows you to control a child's phone remotely via text message. Si vous activez le Communicateur SMS, rappelez-vous toujours que le téléphone configuré pour donner des commandes distantes pourrait être volé. Donc, toujours le protéger au minimum par un code PIN.
- AndroidAPS will also inform you by text message if your remote commands, such as a bolus or a profile change, have been carried out. Il est conseillé de le configurer de sorte que les SMS de confirmation soient envoyés à au moins deux numéros de téléphone différents au cas où l'un des téléphones destinataires serait volé.

## AndroidAPS can also be used by blind people

On Android devices TalkBack is part of the operating system. It is a program for screen orientation via voice output. With TalkBack you can operate your smartphone as well as AndroidAPS blind.

We users create the AndroidAPS app ourselves with Android Studio. Many use Microsoft Windows for this purpose, where there is the Screenreader analogous to TalkBack. Since Android Studio is a Java application, the "Java Access Bridge" component must be enabled in the Control Panel. Otherwise, the screen reader of the PC will not speak in Android Studio.

To do this, please proceed as follows:

- Press WINDOWSTASTE and enter "Control Panel" in the search field, open with Enter. It opens: "All Control Panel Items".
- Press the letter C to get to "Center for Ease of Use", open with Enter.
- Then open "Use computer without a screen" with Enter.
- There, at the bottom, you will find the checkbox "Enable Java Access Bridge", select it.
- Done, just close the window! The screen reader should work now.

:::{note}
**IMPORTANT SAFETY NOTICE**

La base des fonctions de sécurité d'AndroidAPS présentée dans cette documentation s'appuie sur les fonctions de sécurité du matériel utilisé pour construire votre système. Il est extrêmement important que vous utilisiez uniquement une pompe à insuline et un capteur de MGC approuvés FDA/CE pour mettre en oeuvre une boucle fermée d'administration automatique d'insuline. Les modifications matérielles ou logicielles de ces composants peuvent entraîner un dosage incorrect de l'insuline, causant un risque significatif pour l'utilisateur. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

De plus, il est également important d'utiliser uniquement des fournitures d'origine telles que serteurs, canules et réservoirs d'insuline approuvés par le fabricant pour une utilisation avec votre pompe ou votre MGC. L'utilisation de consommables non testés ou modifiés peut entraîner une imprécision du MGC et des erreurs de dosage de l'insuline. L'insuline est très dangereuse lorsqu'elle est mal dosée - veuillez ne pas jouer avec votre vie en piratant avec vos fournitures.

Enfin et surtout, vous ne devez pas prendre d'inhibiteurs du SGLT-2 (gliflozines), car ils abaissent de façon incalculable la glycémie.  La combinaison avec un système qui réduit les débits de base pour augmenter la glycémie est particulièrement dangereuse car en raison de la gliflozine, cette augmentation de glycémie pourrait ne pas se produire et un état dangereux d'absence d'insuline peut se produire.
:::
