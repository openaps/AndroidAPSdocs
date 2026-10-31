# A dedicated Google account for AAPS (optional)

Certains utilisateurs d'**AAPS** préfèrent utiliser aussi leur compte e-mail principal pour **AAPS**. D'autres utilisateurs d'**AAPS** (ou leurs aidants) créent un compte e-mail dédié à **AAPS**. C'est facultatif. Nous donnons ci-dessous un exemple pour le faire.

Si vous ne voulez pas créer de compte Gmail dédié à **AAPS**, vous pouvez passer directement à la section suivante, [Compilation d'AAPS](../SettingUpAaps/BuildingAaps.md).

```{admonition} Advantages of a dedicated Google account for AAPS
:class: dropdown

- Avec un espace Google Drive dédié, vous ne risquez pas de remplir la limite de votre Google Drive personnel avec **Exporter les paramètres**.
- Chaque version d'**AAPS** (et des applications associées comme xDrip, BYODA, etc.) sera stockée dans un seul endroit, indépendant de votre ordinateur. Si votre PC ou votre téléphone est volé, perdu ou cassé, vous aurez toujours accès à vos données.
- Avec une configuration identique, l'aide en ligne est plus simple entre utilisateurs qui ont la même structure de dossiers.
- Selon la configuration (voir ci-dessous), vous aurez une identité séparée (un alias) pour communiquer dans la communauté. Cela peut protéger votre vie privée. 
- Les enfants avec un DT1 peuvent garder leur propre compte e-mail « de tous les jours » de mineur, tout en utilisant **AAPS** et les fonctions associées qui demandent un compte adulte.
- Gmail vous permet d'enregistrer jusqu'à 4 comptes avec le même numéro de téléphone.
```

## How to set up a dedicated Google account for AAPS

(⌛About 10 minutes)

![](../images/Building-the-App/building_0001.png)

Requirements:

* Vous avez un PC Windows (Windows 10 ou plus récent) et un téléphone Android (Android 12 ou plus récent) qui accueillera l'application **AAPS**. These both have all the latest security updates, internet access and admin privileges, since some steps require downloading and installing programs.
* Le téléphone Android est déjà configuré avec votre adresse e-mail personnelle « de tous les jours », par exemple un compte Gmail.

```{admonition} Things to consider when setting up your new account
:class: dropdown
- Pour protéger votre vie privée, vous pouvez utiliser un nom différent du vôtre, qui a un lien avec le compte (par exemple t1dsuperstar). Vous pouvez ensuite l'utiliser dans les forums publics d'**AAPS** tout en gardant votre identité privée. Comme Google demande un e-mail de récupération et un numéro de téléphone, le compte reste quand même traçable.
- Le nouveau compte **AAPS** utilisera pour la vérification le même numéro de téléphone que votre compte « _de tous les jours_ ». Il utilisera l'adresse e-mail « de tous les jours » pour la vérification ;
- Nous allons configurer un transfert d'e-mails : tout e-mail envoyé au nouveau compte dédié à AAPS sera transféré vers le compte principal (vous n'avez donc pas besoin de vérifier deux boîtes e-mail différentes) ;
- Utilisez des mots de passe différents pour votre compte Gmail _de tous les jours_ et pour le compte Gmail dédié à AAPS
- Si vous utilisez la « validation en deux étapes » de Google (authentification multifacteur) pour un compte Gmail, faites-le aussi pour l'autre compte Gmail.
- Si vous voulez utiliser les « clés d'accès » (Passkeys) de Google, enregistrez plusieurs appareils. Ainsi, vous ne vous bloquerez pas l'accès à votre compte. Faites-le seulement sur des appareils auxquels personne d'autre n'a accès (_c.-à-d._ pas sur un PC avec un compte partagé que d'autres personnes peuvent déverrouiller).
```


```{admonition} Video Walkthrough!
:class: note
Cliquez [ici](<https://drive.google.com/file/d/1dMZTIolO-kd2eB0soP7boEVtHeCDEQBF/view?usp=drive_link>) pour voir une vidéo qui montre comment créer un compte Google dédié.
```

 These are the steps outlined in the video:

Dans cet exemple : 
- Votre compte Google existant « _de tous les jours_ » est <donald.muck42@gmail.com> ; ![](../images/Building-the-App/building_0002.png)
- Votre nouveau compte Gmail « _AAPS_ » sera : <donald.muck42.aaps@gmail.com> ; ![](../images/Building-the-App/building_0003.png)


### Allez sur <https://account.google.com> 

 Si vous êtes déjà connecté à Google, vous arriverez sur la page **Mon compte** de votre compte « de tous les jours ». (1) Cliquez en haut à droite de la page sur votre photo de profil (ici, un simple ![](../images/Building-the-App/building_0002.png) (2) choisissez « _Ajouter un autre compte_ ».

![](../images/Building-the-App/building_0005.png)


### Saisissez les informations de votre NOUVEAU compte dédié : 

- Saisissez le nouveau compte : 
- Create Account
- pour mon usage personnel. 


### Enter your persona:
 - Enter firstname
 - lastname
 - birthdate (needs to be an Adult age)

### Choisissez votre NOUVELLE adresse e-mail et votre mot de passe

Dans cet exemple, on ajoute « .AAPS » à l'adresse existante de Donald Muck…\
Choisissez un mot de passe

### Saisissez un numéro de téléphone qui peut recevoir le SMS de vérification

Gmail will now send you a unique code to enter for validation.

### Saisissez l'adresse e-mail de récupération

Ici, ce sera votre adresse e-mail existante « _de tous les jours_ »…

### Finish setting up the account

Gmail will display the account name. Google vous demandera d'accepter les conditions d'utilisation de Gmail et de confirmer vos paramètres de personnalisation.

### Customize the new profile display

Vous devriez maintenant être sur la page « Mon compte » de Gmail, avec votre nouveau compte e-mail dédié à **AAPS**. The profile picture will be set by default to the first letter of your name. Changez-la pour une image unique, pour éviter les confusions… Dans cet exemple, Donald.Muck.AAPS a remplacé ![](../images/Building-the-App/building_0002.png) par ![](../images/Building-the-App/building_0003.png)

![](../images/Building-the-App/building_0007.png)\
![](../images/Building-the-App/building_0008.png)

### Open the Gmail website on both windows to configure the new account

Pour ne pas devoir surveiller une boîte e-mail de plus, transférez tous les e-mails du nouveau compte dédié à **AAPS** vers votre compte de tous les jours\
Cette partie peut être un peu déroutante, car vous devrez passer d'un compte à l'autre plusieurs fois. To make it easier, open 2 separate browser windows on top of each other:

1. Placez votre navigateur actuel en haut de l'écran et changez sa taille pour qu'il prenne environ la moitié haute de l'écran…
2. Faites un clic droit sur l'icône de votre navigateur dans la barre des tâches
3. Dans le menu, choisissez « Nouvelle fenêtre »... et réglez-la pour qu'elle prenne seulement la moitié basse de l'écran.

Ouvrez <https://gmail.com> dans chaque fenêtre du navigateur. Vérifiez que votre compte personnel est en haut et que le nouveau compte dédié à **AAPS** est en bas. Vous le reconnaissez facilement à la photo de profil en haut à droite. (if needed you can always switch accounts by clicking on the profile picture and selecting the correct one.

![](../images/Building-the-App/building_0009.png)

Vos pages d'accueil Gmail devraient ressembler à ceci :\
![](../images/Building-the-App/building_0010.png)

 ### Dans le nouveau compte Gmail (fenêtre du bas), ouvrez les paramètres de Gmail…

- Cliquez sur la roue dentée à gauche de la photo de profil
- puis choisissez « **Voir tous les paramètres** »

![](../images/Building-the-App/building_0011.png)

### Setup forwarding…

- Click on the “Forwarding and POP/IMAP” Setting tab
- Click on “add a forwarding address”
- Add your “everyday” email address
- Gmail enverra un code de vérification à votre adresse e-mail « de tous les jours ».
- You will switch back to your everyday profile and click on the link to verify that you accept the forwarding (or get the code from Gmail’s verification email in your “everyday” Gmail window and cut and paste it in your “new AAPS dedicated” Gmail window).

There is quite a bit of back and forth between the windows but this will ensure that when you check your “everyday” account emails you will also see the emails forwarded from your AAPS dedicated account such as Gmail alerts.

![](../images/Building-the-App/building_0012.png)

### Verify the forwarded email address

- Dans le Gmail « de tous les jours » (fenêtre du haut), vous recevrez l'e-mail « Confirmation de transfert Gmail » (Gmail forwarding Confirmation).
- Open it and “click the link to confirm the request”

### Archive forwarded emails in the new dedicated Gmail account (bottom window)

<!---->

1. Refresh the bottom window
2. Check “forward incoming email”
3. And archive Gmail’s copy (to keep your new dedicated mailbox clean)
4. Faites défiler jusqu'en bas pour enregistrer vos modifications\
   ![](../images/Building-the-App/building_0013.png)

![](../images/Building-the-App/building_0014.png)

Félicitations ! Now you have created an AAPS-dedicated Google account. L'étape suivante est de [compiler l'application AAPS](../SettingUpAaps/BuildingAaps.md).