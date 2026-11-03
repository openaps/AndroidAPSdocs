(aaps-ci-option2)=

# Option 2 – Upload your existing keystore

```{note}
Das ist Teil von [Schritt 2 – Deinen Signatur-Keystore erstellen](BrowserBuildKeystore.md) des [Browser-Builds](BrowserBuild.md). Achte darauf, dass Du die [Entscheidung zwischen Option 1 und Option 2](#aaps-ci-preparation) gelesen hast.
```

Option 2 reuses the JKS you already created on a previous build of AAPS from a computer in Android Studio. It is suitable for users who already have a JKS and know the JKS password and alias.

For `KEYSTORE_PASSWORD`, `KEY_ALIAS`, and `KEY_PASSWORD`, enter your actual password and alias in GitHub – those from Android Studio, see below where you used them.

```{warning}
**Passwords with special characters.** Enter your passwords exactly as they are. Do not add a backslash or any other escape character: the build workflow keeps every character intact, and an added backslash becomes part of the password.

If the build still fails at the signing step and your password contains `$`, a backtick, `"` or `\`, the workflow file in your fork is outdated. [Sync your fork](#Update-to-new-version-update-your-repo) with the latest dev and re-run the build. See [Browser build troubleshooting](#aaps-ci-password-special-characters).
```

```{admonition} KEY + PASSWORDS
:class: dropdown

![Remember passwords](../images/Building-the-App/044_RememberPwd.png)
```

## Wähle Dein Gerät

```{tip}
Du erstellst auf einem **Android-Smartphone**? Verwende stattdessen [AAPS Builder](BrowserBuildAapsBuilder.md): Dafür brauchst Du keine Vorbereitungsdatei.
```

Folge der Seite, die zu dem Gerät passt, auf dem Du erstellst:

- **[Computer](BrowserBuildO2Computer.md)** – Windows, Mac or Linux.

```{tip}
Du kannst das Gerät jederzeit wechseln – öffne einfach die passende Seite.
```

```{toctree}
:hidden:

Computer <BrowserBuildO2Computer.md>
```
