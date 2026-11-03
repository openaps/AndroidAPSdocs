(aaps-ci-option2)=

# Opzione 2 – Carica il tuo keystore esistente

```{note}
This is part of [Step 2 – Create your signing keystore](BrowserBuildKeystore.md) of the [Browser build](BrowserBuild.md). Controlla di aver letto la [scelta tra Opzione 1 e Opzione 2](#aaps-ci-preparation).
```

Option 2 reuses the JKS you already created on a previous build of AAPS from a computer in Android Studio. It is suitable for users who already have a JKS and know the JKS password and alias.

For `KEYSTORE_PASSWORD`, `KEY_ALIAS`, and `KEY_PASSWORD`, enter your actual password and alias in GitHub – those from Android Studio, see below where you used them.

```{warning}
**Password con caratteri speciali.** Inserisci le password esattamente come sono. Do not add a backslash or any other escape character: the build workflow keeps every character intact, and an added backslash becomes part of the password.

If the build still fails at the signing step and your password contains `$`, a backtick, `"` or `\`, the workflow file in your fork is outdated. [Sync your fork](#Update-to-new-version-update-your-repo) with the latest dev and re-run the build. See [Browser build troubleshooting](#aaps-ci-password-special-characters).
```

```{admonition} KEY + PASSWORDS
:class: dropdown

![Remember passwords](../images/Building-the-App/044_RememberPwd.png)
```

## Scegli il tuo dispositivo

```{tip}
Fai la build da un **telefono Android**? Usa invece [AAPS Builder](BrowserBuildAapsBuilder.md): non serve il file di preparazione.
```

Follow the page that matches the device you are building from:

- **[Computer](BrowserBuildO2Computer.md)** – Windows, Mac or Linux.

```{tip}
You can switch device at any time – just open the matching page.
```

```{toctree}
:hidden:

Computer <BrowserBuildO2Computer.md>
```
