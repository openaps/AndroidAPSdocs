(aaps-ci-option2)=

# Optie 2 – Je bestaande keystore uploaden

```{note}
Dit hoort bij [Stap 2 – Je keystore voor ondertekening maken](BrowserBuildKeystore.md) van [Bouwen in de browser](BrowserBuild.md). Zorg dat je de [keuze tussen Optie 1 en Optie 2](#aaps-ci-preparation) hebt gelezen en het voorbereidingsbestand hebt gedownload.
```

Bij optie 2 gebruik je opnieuw de JKS die je al hebt gemaakt toen je AAPS eerder op een computer bouwde in Android Studio. Deze optie is geschikt als je al een JKS hebt en het JKS-wachtwoord en de alias kent.

Vul bij `KEYSTORE_PASSWORD`, `KEY_ALIAS` en `KEY_PASSWORD` in GitHub je echte wachtwoord en alias in – die uit Android Studio, zie hieronder waar je ze hebt gebruikt.

```{warning}
**Wachtwoorden met speciale tekens.** Vul je wachtwoorden precies zo in als ze zijn. Voeg geen backslash of ander escape-teken toe: de build-workflow laat elk teken ongewijzigd, en een toegevoegde backslash wordt een deel van het wachtwoord.

Mislukt de build nog steeds bij het ondertekenen en bevat je wachtwoord `$`, een backtick, `"` of `\`? Dan is het workflowbestand in je fork verouderd. [Synchroniseer je fork](#Update-to-new-version-update-your-repo) met de nieuwste dev en start de build opnieuw. Zie [Bouwen in de browser: probleemoplossing](#aaps-ci-password-special-characters).
```

```{admonition} KEY + PASSWORDS
:class: dropdown

![Wachtwoorden onthouden](../images/Building-the-App/044_RememberPwd.png)
```

## Kies je apparaat

```{tip}
Bouw je vanaf een **Android-telefoon**? Gebruik dan [AAPS Builder](BrowserBuildAapsBuilder.md): daarvoor heb je geen voorbereidingsbestand nodig.
```

Volg de pagina die past bij het apparaat waarmee je bouwt:

- **[Computer](BrowserBuildO2Computer.md)** – Windows, Mac of Linux.

```{tip}
Je kunt altijd van apparaat wisselen – open dan gewoon de pagina die erbij past.
```

```{toctree}
:hidden:

Computer <BrowserBuildO2Computer.md>
```
