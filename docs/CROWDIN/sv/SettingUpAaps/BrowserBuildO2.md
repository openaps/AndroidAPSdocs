(aaps-ci-option2)=

# Alternativ 2 – Ladda upp din befintliga keystore

```{note}
Detta är en del av [Steg 2 – Skapa din keystore för signering](BrowserBuildKeystore.md) i [Bygge i webbläsaren](BrowserBuild.md). Se till att du har läst [valet mellan alternativ 1 och alternativ 2](#aaps-ci-preparation).
```

Alternativ 2 använder den JKS-fil som du redan har skapat när du byggde AAPS tidigare på en dator i Android Studio. Det passar dig som redan har en JKS-fil och vet dess lösenord och alias.

För `KEYSTORE_PASSWORD`, `KEY_ALIAS` och `KEY_PASSWORD` skriver du in ditt riktiga lösenord och alias i GitHub – samma som i Android Studio, se nedan var du använde dem.

```{warning}
**Lösenord med specialtecken.** Skriv in dina lösenord exakt som de är. Lägg inte till något omvänt snedstreck (backslash) eller något annat escape-tecken: byggets arbetsflöde behåller varje tecken som det är, och ett tillagt omvänt snedstreck blir en del av lösenordet.

Om bygget ändå misslyckas vid signeringen och ditt lösenord innehåller `$`, en backtick, `"` eller `\`, är arbetsflödesfilen i din fork för gammal. [Synkronisera din fork](#Update-to-new-version-update-your-repo) med den senaste dev-grenen och kör bygget igen. Se [Bygge i webbläsaren: felsökning](#aaps-ci-password-special-characters).
```

```{admonition} KEY + PASSWORDS
:class: dropdown

![Kom ihåg lösenord](../images/Building-the-App/044_RememberPwd.png)
```

## Välj din enhet

```{tip}
Bygger du från en **Android-telefon**? Använd [AAPS Builder](BrowserBuildAapsBuilder.md) i stället: där behövs ingen förberedelsefil.
```

Följ sidan för den enhet som du bygger från:

- **[Dator](BrowserBuildO2Computer.md)** – Windows, Mac eller Linux.

```{tip}
Du kan byta enhet när som helst – öppna bara sidan för den enheten.
```

```{toctree}
:hidden:

Dator <BrowserBuildO2Computer.md>
```
