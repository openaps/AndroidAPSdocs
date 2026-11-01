(github-fork)=

# Compilation dans le navigateur – Étape 1 : Créer votre fork GitHub

```{note}
Ceci est l'**Étape 1** de la [Compilation dans le navigateur](BrowserBuild.md).
```

You will need to store your personal Android Java Key and Google Drive information as secrets in GitHub (later in the process, we will explain how).

Comme cela n'est pas possible dans le dépôt public d'AndroidAPS, vous devez créer votre copie personnelle du code source (appelée un fork).

## Compte GitHub

Vous devez [créer un compte GitHub](https://github.com/signup) si vous n'en avez pas encore.  
Vous pouvez vous inscrire avec votre e-mail ou avec Google. Suivez le processus d'inscription et de vérification.

Quand vous avez un compte, [connectez-vous à GitHub](https://github.com/login).

## Créer un fork d'AndroidAPS

Ouvrez le dépôt officiel d'AndroidAPS avec [ce lien](https://github.com/nightscout/AndroidAPS).

Appuyez sur l'icône fork. Cela crée une copie dans votre propre compte.

![fork_aaps](../images/Building-the-App/CI/ForkAAPS.png)

Faites défiler l'écran suivant vers le bas et appuyez sur **Create Fork**.

![fork_aaps_confirm](../images/Building-the-App/CI/ForkAAPS2.png)

*Note: you can **unselect** "Copy the master branch only" if you will want to build developer versions or customizations.*

![fork_aaps_main](../images/Building-the-App/CI/ForkAAPS3.png)

```{note}
You cannot fork and you see this?<br/><br/>
**`No available destinations to fork this repository.`**<br/><br/>
![Already forked](../images/Building-the-App/CI/ForkAAPS3b.png)<br/><br/>
This means you already have an existing fork of AndroidAPS.<br/>
Make sure it's up to date and continue to Preparation Steps.
```

```{warning}
**Ne supprimez jamais votre fork sans avoir fait une sauvegarde de vos secrets !**
```

GitHub affiche maintenant votre copie personnelle d'AndroidAPS. Laissez cet onglet du navigateur ouvert.

![forked_aaps](../images/Building-the-App/CI/ForkAAPS4.png)

----

**Suivant : [Étape 2 – Créer votre keystore de signature](BrowserBuildKeystore.md) →**
