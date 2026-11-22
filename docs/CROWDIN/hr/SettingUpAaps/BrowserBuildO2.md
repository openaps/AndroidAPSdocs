(aaps-ci-option2)=

# Opcija 2 – Prenesite postojeće spremište ključeva

```{note}
Ovo je dio [Izrada u pregledniku – Korak 2: Izradite spremište ključeva za potpisivanje](BrowserBuildKeystore.md) na stranici [Izrada u pregledniku](BrowserBuild.md). Provjerite jeste li pročitali [odluku između opcije 1 i opcije 2](#aaps-ci-preparation).
```

Opcija 2 ponovno koristi JKS koji ste već izradili kod ranije izrade AAPS-a na računalu u Android Studiju. Prikladna je za korisnike koji već imaju JKS i znaju lozinku i alias JKS-a.

Za `KEYSTORE_PASSWORD`, `KEY_ALIAS` i `KEY_PASSWORD` u GitHubu unesite svoju stvarnu lozinku i alias – one iz Android Studija, pogledajte niže gdje ste ih koristili.

```{warning}
**Lozinke s posebnim znakovima.** Unesite lozinke točno onakve kakve jesu. Ne dodajte obrnutu kosu crtu (backslash) ni bilo koji drugi znak za izbjegavanje (escape): workflow za izradu čuva svaki znak, a dodana obrnuta kosa crta postaje dio lozinke.

Ako izrada i dalje ne uspije u koraku potpisivanja, a vaša lozinka sadrži `$`, obrnuti apostrof (backtick), `"` ili `\`, workflow datoteka u vašem forku je zastarjela. [Sinkronizirajte svoj fork](#Update-to-new-version-update-your-repo) s najnovijom dev granom i ponovno pokrenite izradu. Pogledajte [Izrada u pregledniku: rješavanje problema](#aaps-ci-password-special-characters).
```

```{admonition} KEY + PASSWORDS
:class: dropdown

![Zapamtite lozinke](../images/Building-the-App/044_RememberPwd.png)
```

## Odaberite svoj uređaj

```{tip}
Izrađujete s **Android telefona**? Umjesto toga koristite [AAPS Builder](BrowserBuildAapsBuilder.md): ne treba mu pripremna datoteka.
```

Slijedite stranicu za uređaj s kojeg izrađujete:

- **[Računalo](BrowserBuildO2Computer.md)** – Windows, Mac ili Linux.

```{tip}
Uređaj možete promijeniti u bilo kojem trenutku – samo otvorite odgovarajuću stranicu.
```

```{toctree}
:hidden:

Računalo <BrowserBuildO2Computer.md>
```
