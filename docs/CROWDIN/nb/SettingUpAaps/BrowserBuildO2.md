(aaps-ci-option2)=

# Alternativ 2 – Last opp keystore-filen du har fra før

```{note}
Dette er en del av [Steg 2 – Lag keystore-filen for signering](BrowserBuildKeystore.md) i [Nettleserbygg](BrowserBuild.md). Sørg for at du har lest [valget mellom alternativ 1 og alternativ 2](#aaps-ci-preparation).
```

Alternativ 2 bruker JKS-filen du allerede laget på et tidligere AAPS-bygg fra en datamaskin i Android Studio. Det passer for brukere som allerede har en JKS og kan JKS-passordet og aliaset.

For `KEYSTORE_PASSWORD`, `KEY_ALIAS` og `KEY_PASSWORD` skriver du inn ditt faktiske passord og alias i GitHub – de fra Android Studio, se nedenfor hvor du brukte dem.

```{warning}
**Passord med spesialtegn.** Skriv inn passordene nøyaktig slik de er. Ikke legg til en omvendt skråstrek eller noe annet escape-tegn: bygge-arbeidsflyten beholder hvert tegn som det er, og en ekstra omvendt skråstrek blir en del av passordet.

Hvis bygget fortsatt feiler i signeringssteget og passordet ditt inneholder `$`, en backtick, `"` eller `\`, er arbeidsflytfilen i forken din utdatert. [Synkroniser forken din](#Update-to-new-version-update-your-repo) med nyeste dev og kjør bygget på nytt. Se [Nettleserbygg: feilsøking](#aaps-ci-password-special-characters).
```

```{admonition} KEY + PASSWORDS
:class: dropdown

![Remember passwords](../images/Building-the-App/044_RememberPwd.png)
```

## Velg enheten din

```{tip}
Bygger du fra en **Android-telefon**? Bruk [AAPS Builder](BrowserBuildAapsBuilder.md) i stedet: den trenger ingen forberedelsesfil.
```

Følg siden som passer enheten du bygger fra:

- **[Datamaskin](BrowserBuildO2Computer.md)** – Windows, Mac eller Linux.

```{tip}
Du kan bytte enhet når som helst – bare åpne siden som passer.
```

```{toctree}
:hidden:

Datamaskin <BrowserBuildO2Computer.md>
```
