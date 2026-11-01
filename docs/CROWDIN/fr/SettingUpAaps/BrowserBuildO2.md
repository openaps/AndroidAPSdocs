(aaps-ci-option2)=

# Option 2 – Envoyer votre keystore existant

```{note}
Cette page fait partie de l'[Étape 2 – Créer votre keystore de signature](BrowserBuildKeystore.md) de la [Compilation dans le navigateur](BrowserBuild.md). Make sure you have read the [Option 1 vs Option 2 decision](#aaps-ci-preparation).
```

L'Option 2 réutilise le JKS que vous avez déjà créé lors d'une compilation précédente d'AAPS sur un ordinateur avec Android Studio. Elle convient aux utilisateurs qui ont déjà un JKS et qui connaissent son mot de passe et son alias.

Pour `KEYSTORE_PASSWORD`, `KEY_ALIAS` et `KEY_PASSWORD`, saisissez dans GitHub votre vrai mot de passe et votre vrai alias – ceux d'Android Studio ; voyez ci-dessous où vous les avez utilisés.

```{warning}
**Mots de passe avec des caractères spéciaux.** Saisissez vos mots de passe exactement tels qu'ils sont. N'ajoutez pas de barre oblique inverse (backslash) ni aucun autre caractère d'échappement : le workflow de compilation garde chaque caractère tel quel, et une barre oblique inverse ajoutée devient une partie du mot de passe.

Si la compilation échoue encore à l'étape de signature et que votre mot de passe contient `$`, un accent grave (backtick), `"` ou `\`, le fichier de workflow de votre fork n'est pas à jour. [Synchronisez votre fork](#Update-to-new-version-update-your-repo) avec la dernière version dev, puis relancez la compilation. Voir [Dépannage de la compilation dans le navigateur](#aaps-ci-password-special-characters).
```

```{admonition} KEY + PASSWORDS
:class: dropdown

![Mémoriser les mots de passe](../images/Building-the-App/044_RememberPwd.png)
```

## Choisissez votre appareil

```{tip}
Vous compilez depuis un **téléphone Android** ? Utilisez plutôt [AAPS Builder](BrowserBuildAapsBuilder.md) : il n'a pas besoin de fichier de préparation.
```

Suivez la page qui correspond à l'appareil depuis lequel vous compilez :

- **[Ordinateur](BrowserBuildO2Computer.md)** – Windows, Mac ou Linux.

```{tip}
Vous pouvez changer d'appareil à tout moment – ouvrez simplement la page correspondante.
```

```{toctree}
:hidden:

Ordinateur <BrowserBuildO2Computer.md>
```
