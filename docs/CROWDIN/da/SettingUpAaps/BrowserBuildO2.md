(aaps-ci-option2)=

# Mulighed 2 – Upload dit eksisterende keystore

```{note}
Dette er en del af [Build i browseren – Trin 2: Opret dit keystore til signering](BrowserBuildKeystore.md) i [Build i browseren](BrowserBuild.md). Sørg for, at du har læst [valget mellem Mulighed 1 og Mulighed 2](#aaps-ci-preparation).
```

Mulighed 2 bruger igen den JKS, som du allerede har oprettet, da du tidligere byggede AAPS på en computer i Android Studio. Den passer til brugere, som allerede har en JKS og kender JKS-adgangskoden og aliasset.

For `KEYSTORE_PASSWORD`, `KEY_ALIAS` og `KEY_PASSWORD` skal du indtaste din rigtige adgangskode og dit rigtige alias i GitHub – dem fra Android Studio, se nedenfor, hvor du brugte dem.

```{warning}
**Adgangskoder med specialtegn.** Indtast dine adgangskoder præcis, som de er. Tilføj ikke en backslash eller et andet escape-tegn: build-workflowet beholder hvert tegn uændret, og en tilføjet backslash bliver en del af adgangskoden.

Hvis buildet stadig fejler ved signeringstrinnet, og din adgangskode indeholder `$`, en backtick, `"` eller `\`, er workflow-filen i din fork forældet. [Synkroniser din fork](#Update-to-new-version-update-your-repo) med den nyeste dev, og kør buildet igen. Se [Build i browseren: fejlfinding](#aaps-ci-password-special-characters).
```

```{admonition} KEY + PASSWORDS
:class: dropdown

![Husk adgangskoder](../images/Building-the-App/044_RememberPwd.png)
```

## Vælg din enhed

```{tip}
Bygger du fra en **Android-telefon**? Brug i stedet [AAPS Builder](BrowserBuildAapsBuilder.md): den kræver ingen forberedelsesfil.
```

Følg den side, der passer til den enhed, du bygger fra:

- **[Computer](BrowserBuildO2Computer.md)** – Windows, Mac eller Linux.

```{tip}
Du kan skifte enhed når som helst – åbn bare den side, der passer.
```

```{toctree}
:hidden:

Computer <BrowserBuildO2Computer.md>
```
