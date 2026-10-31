(aaps-ci-preparation)=

# Compilation dans le navigateur – Étape 2 : Créer votre keystore de signature

```{note}
Ceci est l'**Étape 2** de la [Compilation dans le navigateur](BrowserBuild.md). Terminez d'abord l'[Étape 1 – Créer votre fork GitHub](BrowserBuildFork.md).
```

AndroidAPS doit être signé avec des clés privées stockées dans un **Java KeyStore (JKS)**. C'est la décision la plus importante de tout le processus, car elle détermine si vous pourrez **mettre à jour** AAPS plus tard sans le réinstaller.

```{note}
Dans les étapes suivantes, vous allez stocker des informations privées (votre keystore et, plus tard, votre accès à Google Drive) dans GitHub sous forme de **secrets**. Un secret est simplement une valeur chiffrée que seule votre propre compilation peut lire – personne d'autre ne peut la voir, pas même les personnes qui regardent votre fork. C'est ce qui garantit que votre compilation reste la vôtre.
```

## Choisissez votre option de keystore

Lisez les deux options et choisissez celle qui correspond à votre situation.

### Option 1 – Générer un nouveau keystore (nouveaux utilisateurs)

Choisissez cette option si **au moins un** de ces points est vrai :

- C'est la **première fois** que vous compilez AAPS.
- Vous n'avez pas de keystore d'une compilation précédente avec Android Studio (sur ordinateur).
- Vous avez oublié le mot de passe ou l'alias de votre keystore.

```{warning}
Compiler AAPS avec l'**Option 1** crée un tout nouveau keystore, donc cela **ne vous permettra pas de mettre à jour votre AAPS existant** directement. Pour passer à cette nouvelle compilation, vous devez exporter vos paramètres, désinstaller l'ancien AAPS, installer le nouveau, puis importer à nouveau vos paramètres. Suivez les étapes de [Réinstaller AAPS avec un nouveau keystore](#reinstall-aaps).
```

**→ [Continuer avec l'Option 1 – Générer un nouveau keystore](BrowserBuildO1.md)**

### Option 2 – Envoyer votre keystore existant (utilisateurs actuels / anciens)

Choisissez cette option si vous **avez déjà** le keystore `.jks` que vous avez utilisé pour une compilation précédente d'AAPS sur un ordinateur avec Android Studio, **et** que vous connaissez son mot de passe et son alias (en général `key0`).

Ainsi, votre installation actuelle d'AAPS peut toujours être mise à jour : les futures mises à jour utiliseront le même keystore.

**→ [Continuer avec l'Option 2 – Envoyer votre keystore existant](BrowserBuildO2.md)**

----

```{note}
Sur la page suivante, vous choisirez votre appareil (ordinateur ou iPhone). Chaque page d'appareil vous guide ensuite pour télécharger et ouvrir le fichier de préparation de la bonne manière pour cet appareil, et pour créer votre keystore. L'application AAPS compilée sera enregistrée dans votre Google Drive.
```

**Suite : choisissez l'[Option 1](BrowserBuildO1.md) ou l'[Option 2](BrowserBuildO2.md) ci-dessus, puis suivez la page de votre appareil.**

----

(ci-keystore-export)=

## Exporter votre keystore (facultatif)

Si vous voulez exporter votre keystore enregistré, utilisez cette méthode.

Ce script exporte les informations de keystore configurées auparavant (avec l'Option 1 ou l'Option 2) dans un fichier ZIP protégé par mot de passe, dans le dossier `/AAPS/KeyStore` de votre Google Drive.

```{warning}
Avant d'utiliser cette méthode d'export, vérifiez que la configuration de votre keystore et de Google Drive est terminée.
```

### Étapes :

1. **Ajouter le secret du mot de passe ZIP :**
   - Dans votre dépôt, allez dans **Settings** → **Secrets and variables** → **Actions**
   - Cliquez sur **New repository secret**
   - Dans le champ **Name**, saisissez : `ZIP_PASSWORD`
   - Dans le champ **Secret**, saisissez le mot de passe de votre choix pour chiffrer le ZIP
   - Utilisez uniquement des lettres anglaises (sans accents) et des chiffres pour le mot de passe (pas de symboles spéciaux)
   - Cliquez sur **Add secret**

   ![aaps_ci_zip_password.png](../images/Building-the-App/CI/aaps_ci_zip_password.png)

2. **Lancer le workflow d'export :**
   - Allez dans l'onglet **Actions** de votre dépôt
   - Sélectionnez **CI KeyStore Export**
   - Cliquez sur **Run workflow**
   - Le fichier ZIP du keystore exporté sera enregistré dans votre Google Drive

   ![aaps_ci_keystore_export.png](../images/Building-the-App/CI/aaps_ci_keystore_export.png)

   ![aaps_ci_keystore_export_run.png](../images/Building-the-App/CI/aaps_ci_keystore_export_run.png)

```{toctree}
:hidden:

Option 1 – Générer un nouveau keystore <BrowserBuildO1.md>
Option 2 – Envoyer votre keystore existant <BrowserBuildO2.md>
```
