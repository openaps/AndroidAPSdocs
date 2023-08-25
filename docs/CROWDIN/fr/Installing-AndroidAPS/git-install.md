# Installer Git

## Windows

### 1. Télécharger git

- **Vous devez rester connecter à internet pendant toute la durée où Android Studio télécharge les différentes mises à jour !**
- N’importe quelle version de git devrait fonctionner. Par exemple [https://git-scm.com/download/win](https://git-scm.com/download/win).
- Assurez-vous de noter le chemin d’installation. Vous en aurez besoin dans la prochaine étape.

```{admonition} make git.exe available via Windows PATH
:class: note

Assurez-vous que vous pouvez appeler git.exe sans le chemin de prédilection car Android Studio en a besoin pour trouver git.exe. Il définira alors automatiquement le chemin vers git.exe correct dans les paramètres d'Android Studio.

```

```{image} ../images/Update_GitPath.png
:alt: Chemin d'installation de Git
```

### 2. Définir le chemin d’accès git dans Android Studio

- Sélectionnez File > Settings

  ```{image} ../images/Update_GitSettings1.png
  :alt: Android Studio - open settings
  ```

- Cliquez sur le petit triangle à côté de Version Control (1) pour ouvrir le sous-menu.

- Cliquez sur Git (2).

- Assurez-vous que la méthode de mise à jour "Merge" (3) est sélectionnée.

- Vérifiez si Android Studio peut localiser le chemin d'accès à git.exe automatiquement en cliquant sur le bouton "Test" (4)

  ```{image} ../images/AndroidStudio361_09.png
  :alt: Paramètres Android Studio
  ```

- Si la configuration automatique est réussie, la version de git s'affiche.

- Cliquez sur "OK" dans la boîte de dialogue (1) et sur "OK" dans la fenêtre des paramètres (2).

  ```{image} ../images/AndroidStudio361_10.png
  :alt: Installation automatic de git réussie
  ```

- Si le fichier git.exe n'est pas trouvé, cliquez sur "OK" dans la boite de diablogue (1) puis sur le bouton avec les 3 petits points (2).

- Utilisez la [fonction recherche](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) dans l'explorateur windows pour trouver "git.exe" si vous n'êtes pas sûr de l'endroit où il est. Vous chercher un fichier git.exe situé dans un dossier bin.

- Sélectionnez le chemin d'accès à git.exe et vérifiez que vous avez sélectionné le dossier **\\bin\\** (3) et cliquez sur "OK" (4).

- Fermez la fenêtre des paramètres en cliquant sur le bouton "OK" (5).

  ```{image} ../images/AndroidStudio361_11.png
  :alt: Installation automatic de git ratée
  ```

### 3. Redémarrer

- Redémarrez votre PC pour mettre à jour l'environnement système.

(git-install-check-git-settings-in-android-studio)=
### 4. Vérifier les paramètres de git dans Android Studio

- Ouvrez la fenêtre Terminal dans Android Studio

- Entrez `git --version` (sans les guillemets et sans espace entre les deux - \[signe moins\]!) et appuyez sur Entrer

  ```{image} ../images/AndroidStudio_gitversion1.png
  :alt: git - -version
  ```

- Si git est installé et connecté correctement, vous recevrez une information sur la version installée qui ressemble à ceci :

  ```{image} ../images/AndroidStudio_gitversion2.png
  :alt: résultat git-version
  ```

## Mac

- N’importe quelle version de git devrait fonctionner. Par exemple [https://git-scm.com/download/mac](https://git-scm.com/download/mac)
- Utilisez homebrew pour installer git: `` `$ brew install git` ``.
- Pour plus de détails sur l'installation de git, voir la [documentation officielle](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
- Si vous installez git via homebrew, il n'est pas nécessaire de modifier les préférences. Juste au cas où : on peut y accéder ici : Android Studio - Preferences.
