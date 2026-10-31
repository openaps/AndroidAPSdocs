(github-fork)=

# Compilation dans le navigateur – Étape 1 : Créer votre fork GitHub

```{note}
Ceci est l'**Étape 1** de la [Compilation dans le navigateur](BrowserBuild.md).
```

Vous devrez enregistrer en secret dans GitHub votre clé Java Android personnelle et les informations de votre Google Drive (nous expliquerons comment plus loin).

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

*Remarque : vous pouvez **décocher** « Copy the master branch only » (copier uniquement la branche master) si vous voulez compiler des versions de développement ou des versions personnalisées.*

![fork_aaps_main](../images/Building-the-App/CI/ForkAAPS3.png)

```{note}
Vous ne pouvez pas créer de fork et vous voyez ceci ?</br></br>
**`No available destinations to fork this repository.`**</br></br>
![Déjà forké](../images/Building-the-App/CI/ForkAAPS3b.png)</br></br>
Cela signifie que vous avez déjà un fork d'AndroidAPS.</br>
Vérifiez qu'il est à jour et passez aux étapes de préparation.
```

```{warning}
**Ne supprimez jamais votre fork sans avoir fait une sauvegarde de vos secrets !**
```

GitHub affiche maintenant votre copie personnelle d'AndroidAPS. Laissez cet onglet du navigateur ouvert.

![forked_aaps](../images/Building-the-App/CI/ForkAAPS4.png)

----

**Suivant : [Étape 2 – Créer votre keystore de signature](BrowserBuildKeystore.md) →**
