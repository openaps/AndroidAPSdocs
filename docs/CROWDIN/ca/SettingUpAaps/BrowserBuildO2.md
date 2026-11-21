(aaps-ci-option2)=

# Opció 2 – Pujar el vostre magatzem de claus existent

```{note}
Aquesta pàgina és part de [Compilació al navegador – Pas 2: Creeu el vostre magatzem de claus de signatura](BrowserBuildKeystore.md) de la [Compilació al navegador](BrowserBuild.md). Assegureu-vos que heu llegit la [decisió entre l'opció 1 i l'opció 2](#aaps-ci-preparation).
```

L'opció 2 torna a fer servir el JKS que ja vau crear en una compilació anterior d'AAPS amb Android Studio en un ordinador. És adequada per als usuaris que ja tenen un JKS i en coneixen la contrasenya i l'àlies.

Per a `KEYSTORE_PASSWORD`, `KEY_ALIAS` i `KEY_PASSWORD`, introduïu a GitHub la vostra contrasenya i l'àlies reals, els d'Android Studio (vegeu més avall on els vau fer servir).

```{warning}
**Contrasenyes amb caràcters especials.** Introduïu les contrasenyes exactament com són. No afegiu cap barra inversa ni cap altre caràcter d'escapament: el workflow de compilació conserva tots els caràcters, i una barra inversa afegida passa a formar part de la contrasenya.

Si la compilació encara falla al pas de signatura i la vostra contrasenya conté `$`, un accent greu (backtick), `"` o `\`, el fitxer de workflow del vostre fork no està actualitzat. [Sincronitzeu el vostre fork](#Update-to-new-version-update-your-repo) amb la darrera versió de dev i torneu a executar la compilació. Vegeu [Compilació al navegador: resolució de problemes](#aaps-ci-password-special-characters).
```

```{admonition} KEY + PASSWORDS
:class: dropdown

![Recordar contrasenyes](../images/Building-the-App/044_RememberPwd.png)
```

## Trieu el vostre dispositiu

```{tip}
Compileu des d'un **telèfon Android**? Feu servir [AAPS Builder](BrowserBuildAapsBuilder.md): no necessita cap fitxer de preparació.
```

Seguiu la pàgina del dispositiu des del qual compileu:

- **[Ordinador](BrowserBuildO2Computer.md)** – Windows, Mac o Linux.

```{tip}
Podeu canviar de dispositiu en qualsevol moment: només cal obrir la pàgina corresponent.
```

```{toctree}
:hidden:

Ordinador <BrowserBuildO2Computer.md>
```
