# Installer Git

## Windows

### 1. Télécharger git

- **Vous devez rester connecter à internet pendant toute la durée où Android Studio télécharge les différentes mises à jour !**
- Any git version should work. Par exemple [https://git-scm.com/download/win](https://git-scm.com/download/win).
- Assurez-vous de noter le chemin d’installation. Vous en aurez besoin dans la prochaine étape.

```{admonition} make git.exe available via Windows PATH
:class: note

Make sure that you can call git.exe without the prefing path as Android Studio needs this to find git.exe. It will then automatically sets the path to git.exe correct in the Android Studio settings.

```

![Git installation path](../images/Update_GitPath.png)

### 2. Définir le chemin d’accès git dans Android Studio

- Sélectionnez File > Settings

  ![Android Studio - open settings](../images/Update_GitSettings1.png)

- Cliquez sur le petit triangle à côté de Version Control (1) pour ouvrir le sous-menu.

- Cliquez sur Git (2).

- Assurez-vous que la méthode de mise à jour "Merge" (3) est sélectionnée.

- Vérifiez si Android Studio peut localiser le chemin d'accès à git.exe automatiquement en cliquant sur le bouton "Test" (4)

  ![Android Studio settings](../images/AndroidStudio361_09.png)

- Si la configuration automatique est réussie, la version de git s'affiche.

- Cliquez sur "OK" dans la boîte de dialogue (1) et sur "OK" dans la fenêtre des paramètres (2).

  ![Automatic git installation succeeded](../images/AndroidStudio361_10.png)

- Si le fichier git.exe n'est pas trouvé, cliquez sur "OK" dans la boite de diablogue (1) puis sur le bouton avec les 3 petits points (2).

- Utilisez la [fonction recherche](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) dans l'explorateur windows pour trouver "git.exe" si vous n'êtes pas sûr de l'endroit où il est. Vous chercher un fichier git.exe situé dans un dossier bin.

- Sélectionnez le chemin d'accès à git.exe et vérifiez que vous avez sélectionné le dossier **\\bin\\** (3) et cliquez sur "OK" (4).

- Fermez la fenêtre des paramètres en cliquant sur le bouton "OK" (5).

  ![Automatic git installation failed](../images/AndroidStudio361_11.png)

### 3. Redémarrer

- Redémarrez votre PC pour mettre à jour l'environnement système.

(git-install-check-git-settings-in-android-studio)=
### 4. Vérifier les paramètres de git dans Android Studio

- Ouvrez la fenêtre Terminal dans Android Studio

- Entrez `git --version` (sans les guillemets et sans espace entre les deux - \[signe moins\]!) et appuyez sur Entrer

  ![git - -version](../images/AndroidStudio_gitversion1.png)

- Si git est installé et connecté correctement, vous recevrez une information sur la version installée qui ressemble à ceci :

  ![result git-version](../images/AndroidStudio_gitversion2.png)

## Mac

- Any git version should work. Par exemple [https://git-scm.com/download/mac](https://git-scm.com/download/mac)
- Utilisez homebrew pour installer git: `` `$ brew install git` ``.
- For details on installing git see the [official git documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
- If you install git via homebrew there is no need to change any preferences. Just in case: They can be found here: Android Studio - Preferences.
