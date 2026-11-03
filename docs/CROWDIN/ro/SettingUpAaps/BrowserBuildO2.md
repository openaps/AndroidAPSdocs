(aaps-ci-option2)=

# Opțiunea 2 – Încărcați keystore-ul existent

```{note}
This is part of [Step 2 – Create your signing keystore](BrowserBuildKeystore.md) of the [Browser build](BrowserBuild.md). Asigurați-vă că ați citit [alegerea între Opțiunea 1 și Opțiunea 2](#aaps-ci-preparation).
```

Option 2 reuses the JKS you already created on a previous build of AAPS from a computer in Android Studio. It is suitable for users who already have a JKS and know the JKS password and alias.

Pentru `KEYSTORE_PASSWORD`, `KEY_ALIAS` și `KEY_PASSWORD`, introduceți în GitHub parola și aliasul dumneavoastră reale – cele din Android Studio; vedeți mai jos unde le-ați folosit.

```{warning}
**Passwords with special characters.** Enter your passwords exactly as they are. Do not add a backslash or any other escape character: the build workflow keeps every character intact, and an added backslash becomes part of the password.

If the build still fails at the signing step and your password contains `$`, a backtick, `"` or `\`, the workflow file in your fork is outdated. [Sync your fork](#Update-to-new-version-update-your-repo) with the latest dev and re-run the build. See [Browser build troubleshooting](#aaps-ci-password-special-characters).
```

```{admonition} KEY + PASSWORDS
:class: dropdown

![Rețineți parolele](../images/Building-the-App/044_RememberPwd.png)
```

## Alegeți dispozitivul

```{tip}
Construiți de pe un **telefon Android**? Folosiți în schimb [AAPS Builder](BrowserBuildAapsBuilder.md): nu are nevoie de fișier de pregătire.
```

Follow the page that matches the device you are building from:

- **[Computer](BrowserBuildO2Computer.md)** – Windows, Mac sau Linux.

```{tip}
You can switch device at any time – just open the matching page.
```

```{toctree}
:hidden:

Computer <BrowserBuildO2Computer.md>
```
