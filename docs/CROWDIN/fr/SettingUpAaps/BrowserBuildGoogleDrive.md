(aaps-ci-google-drive-auth)=

# Compilation dans le navigateur – Étape 3 : Autoriser Google Drive

```{note}
Ceci est l'**Étape 3** de la [Compilation dans le navigateur](BrowserBuild.md). Faites d'abord l'[Étape 2 – Créer votre keystore de signature](BrowserBuildKeystore.md).
```

```{warning}
Quelles que soient les instructions suivies avant (Option 1 ou Option 2), vous DEVEZ ajouter l'autorisation Google Drive pour pouvoir utiliser la compilation dans le navigateur.
```

Remarque : si vous avez déjà fait cette partie dans la vidéo, vous pouvez maintenant passer à l'[Étape 4 – Compiler l'APK](BrowserBuildAPK.md).

```{warning}
Si l'autorisation Google ne démarre pas ou si la page de préparation échoue, fermez la page de préparation, ouvrez à nouveau `aaps-ci-preparation.html` de la même façon qu'à l'Étape 2, puis recommencez cette étape. Voir le [dépannage](#aaps-ci-preparation-web).
```

Revenez à l'onglet de la page de préparation.

Faites défiler jusqu'à la section Google Drive Auth et appuyez sur Start Auth.

![](../images/Building-the-App/CI/BrowserBuildStep44.png)

Choisissez votre compte Google.

![](../images/Building-the-App/CI/BrowserBuildGAUTH1.png)

Faites défiler vers le bas et acceptez l'accès. La page web en a besoin pour obtenir la clé d'authentification Google Drive.

Appuyez sur Continue (Continuer).

![](../images/Building-the-App/CI/BrowserBuildGAUTH2.png)

Le champ `GDRIVE_OAUTH2` se remplit : appuyez sur le bouton Copy du haut.

![](../images/Building-the-App/CI/BrowserBuildGAUTH3.png)

Revenez à l'onglet GitHub.

Faites défiler jusqu'à Repository secrets et appuyez sur New repository secret.

Si vous avez suivi l'Option 1, vous devriez voir ceci :

![](../images/Building-the-App/CI/BrowserBuildGAUTH4.png)

Si vous avez suivi l'Option 2, il y aura plus de clés :

![](../images/Building-the-App/CI/BrowserBuildGAUTH4b.png)

Dans le champ Name, collez le texte que vous venez de copier. Faites un appui long sur la zone de texte pour afficher le menu Coller.

![](../images/Building-the-App/CI/BrowserBuildGAUTH5.png)

Passez à l'onglet de la page de préparation.

Appuyez sur le deuxième bouton Copy.

![](../images/Building-the-App/CI/BrowserBuildGAUTH6.png)

Revenez à l'onglet GitHub.

1. Dans le champ Secret, collez le texte que vous venez de copier. Faites un appui long sur la zone de texte pour afficher le menu Coller.

2. Appuyez sur Add secret.

![](../images/Building-the-App/CI/BrowserBuildGAUTH7.png)

Vous devriez maintenant avoir deux (option 1) ou cinq (option 2) secrets.

![](../images/Building-the-App/CI/BrowserBuildGAUTH8.png)

Une fois l'APK compilé, GitHub pourra enregistrer le fichier apk d'AAPS dans votre Google Drive.

----

**Suivant : [Étape 4 – Compiler l'APK](BrowserBuildAPK.md) →**
