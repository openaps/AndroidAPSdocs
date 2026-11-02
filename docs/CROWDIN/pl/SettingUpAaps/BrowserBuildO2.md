(aaps-ci-option2)=

# Opcja 2 – Prześlij swój istniejący magazyn kluczy

```{note}
To jest część [Kroku 2 – Utwórz magazyn kluczy do podpisu](BrowserBuildKeystore.md) [budowania w przeglądarce](BrowserBuild.md). Make sure you have read the [Option 1 vs Option 2 decision](#aaps-ci-preparation).
```

Opcja 2 używa ponownie pliku JKS, który już utworzyłeś przy wcześniejszym budowaniu AAPS na komputerze w Android Studio. Jest odpowiednia dla użytkowników, którzy mają już plik JKS i znają jego hasło oraz alias.

W polach `KEYSTORE_PASSWORD`, `KEY_ALIAS` i `KEY_PASSWORD` wpisz w GitHub swoje prawdziwe hasło i alias – te same, których użyłeś w Android Studio, zobacz poniżej.

```{warning}
**Hasła ze znakami specjalnymi.** Wpisz hasła dokładnie tak, jak są. Nie dodawaj ukośnika wstecznego (backslash) ani żadnego innego znaku ucieczki: workflow budowania zachowuje każdy znak bez zmian, a dodany ukośnik wsteczny staje się częścią hasła.

Jeśli budowanie nadal kończy się błędem na etapie podpisywania, a Twoje hasło zawiera `$`, odwrotny apostrof (backtick), `"` albo `\`, to plik workflow w Twoim forku jest nieaktualny. [Zsynchronizuj swój fork](#Update-to-new-version-update-your-repo) z najnowszą gałęzią dev i uruchom budowanie ponownie. Zobacz [Budowanie w przeglądarce: rozwiązywanie problemów](#aaps-ci-password-special-characters).
```

```{admonition} KEY + PASSWORDS
:class: dropdown

![Zapamiętane hasła](../images/Building-the-App/044_RememberPwd.png)
```

## Wybierz swoje urządzenie

```{tip}
Budujesz na **telefonie z Androidem**? Zamiast tego użyj [AAPS Builder](BrowserBuildAapsBuilder.md): nie potrzebuje on pliku przygotowania.
```

Otwórz stronę, która pasuje do urządzenia, na którym budujesz:

- **[Komputer](BrowserBuildO2Computer.md)** – Windows, Mac albo Linux.

```{tip}
Możesz w każdej chwili zmienić urządzenie – wystarczy otworzyć odpowiednią stronę.
```

```{toctree}
:hidden:

Komputer <BrowserBuildO2Computer.md>
```
