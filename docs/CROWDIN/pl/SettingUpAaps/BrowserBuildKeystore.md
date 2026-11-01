(aaps-ci-preparation)=

# Budowanie w przeglądarce – Krok 2: Utwórz magazyn kluczy do podpisu

```{note}
To jest **Krok 2** [budowania w przeglądarce](BrowserBuild.md). Najpierw wykonaj [Krok 1 – Utwórz swój fork na GitHub](BrowserBuildFork.md).
```

AAPS must be signed with private keys stored in a **Java KeyStore (JKS)**. To najważniejsza decyzja w całym procesie, bo od niej zależy, czy później będziesz mógł **zaktualizować** AAPS bez ponownej instalacji.

```{note}
W kolejnych krokach zapiszesz prywatne dane (Twój magazyn kluczy, a później dostęp do Dysku Google) w GitHub jako **sekrety**. Sekret to po prostu zaszyfrowana wartość, którą może odczytać tylko Twoje własne budowanie – nikt inny, nawet osoby, które oglądają Twój fork, nie może jej zobaczyć. Dzięki temu Twoje budowanie należy tylko do Ciebie.
```

## Wybierz sposób przygotowania magazynu kluczy

Przeczytaj obie opcje i wybierz tę, która pasuje do Twojej sytuacji.

### Opcja 1 – Wygeneruj nowy magazyn kluczy (nowi użytkownicy)

Wybierz ją, jeśli **którekolwiek** z poniższych zdań jest prawdziwe:

- Budujesz AAPS **pierwszy raz**.
- Nie masz magazynu kluczy z wcześniejszego budowania w Android Studio (na komputerze).
- Nie pamiętasz hasła albo aliasu swojego magazynu kluczy.

```{warning}
Budowanie AAPS w **Opcji 1** tworzy całkiem nowy magazyn kluczy, więc **nie pozwoli zaktualizować Twojego obecnego AAPS** bez ponownej instalacji. Aby przejść na to nowe budowanie, musisz wyeksportować ustawienia, odinstalować stary AAPS, zainstalować nowy i ponownie zaimportować ustawienia. Wykonaj kroki opisane w [Ponowna instalacja AAPS z nowym magazynem kluczy](#reinstall-aaps).
```

**→ [Przejdź do Opcji 1 – Wygeneruj nowy magazyn kluczy](BrowserBuildO1.md)**

### Opcja 2 – Prześlij swój istniejący magazyn kluczy (obecni / dawni użytkownicy)

Wybierz ją, jeśli **masz już** magazyn kluczy `.jks`, którego użyłeś przy wcześniejszym budowaniu AAPS na komputerze w Android Studio, **i** znasz jego hasło oraz alias (zwykle `key0`).

Dzięki temu Twój obecnie zainstalowany AAPS da się dalej aktualizować: przyszłe aktualizacje użyją tego samego magazynu kluczy.

**→ [Przejdź do Opcji 2 – Prześlij swój istniejący magazyn kluczy](BrowserBuildO2.md)**

----

```{note}
Na następnej stronie wybierzesz swoje urządzenie (komputer albo iPhone). Strona każdego urządzenia pokaże Ci potem krok po kroku, jak na tym urządzeniu poprawnie pobrać i otworzyć plik przygotowania oraz jak utworzyć magazyn kluczy. Zbudowana aplikacja AAPS zostanie zapisana na Twoim Dysku Google.
```

**Dalej: wybierz powyżej [Opcję 1](BrowserBuildO1.md) albo [Opcję 2](BrowserBuildO2.md), a potem wykonaj kroki ze strony dla swojego urządzenia.**

----

(ci-keystore-export)=

## Eksport magazynu kluczy (opcjonalnie)

Jeśli chcesz wyeksportować zapisany magazyn kluczy, użyj tej metody.

Ten skrypt wyeksportuje wcześniej skonfigurowane dane magazynu kluczy (z Opcji 1 lub Opcji 2) jako plik ZIP chroniony hasłem do folderu `/AAPS/KeyStore` na Twoim Dysku Google.

```{warning}
Zanim użyjesz tej metody eksportu, upewnij się, że ustawienia magazynu kluczy i Dysku Google są już gotowe.
```

### Kroki:

1. **Dodaj sekret z hasłem do pliku ZIP:**
   - Przejdź w swoim repozytorium do **Settings** → **Secrets and variables** → **Actions**
   - Kliknij **New repository secret**
   - W polu **Name** wpisz: `ZIP_PASSWORD`
   - W polu **Secret** wpisz własne hasło do zaszyfrowania pliku ZIP
   - W haśle używaj tylko angielskich liter i cyfr (bez znaków specjalnych)
   - Kliknij **Add secret**

   ![aaps_ci_zip_password.png](../images/Building-the-App/CI/aaps_ci_zip_password.png)

2. **Uruchom workflow eksportu:**
   - Przejdź do karty **Actions** w swoim repozytorium
   - Select **CI Keystore Export**
   - Kliknij **Run workflow**
   - Wyeksportowany plik ZIP z magazynem kluczy zostanie zapisany na Twoim Dysku Google

   ![aaps_ci_keystore_export.png](../images/Building-the-App/CI/aaps_ci_keystore_export.png)

   ![aaps_ci_keystore_export_run.png](../images/Building-the-App/CI/aaps_ci_keystore_export_run.png)

```{toctree}
:hidden:

Opcja 1 – Wygeneruj nowy magazyn kluczy <BrowserBuildO1.md>
Opcja 2 – Prześlij swój istniejący magazyn kluczy <BrowserBuildO2.md>
```
