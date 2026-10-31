(github-fork)=

# Budowanie w przeglądarce – Krok 1: Utwórz swój fork na GitHub

```{note}
To jest **Krok 1** [budowania w przeglądarce](BrowserBuild.md).
```

Twój osobisty klucz Android Java i dane Dysku Google musisz bezpiecznie zapisać jako sekrety w GitHub (wyjaśnimy to później).

Nie da się tego zrobić w publicznym repozytorium AndroidAPS, dlatego musisz zrobić swoją osobistą kopię kodu źródłowego (nazywaną fork).

## Konto GitHub

Jeśli jeszcze nie masz konta GitHub, musisz je [utworzyć](https://github.com/signup).  
Możesz zarejestrować się adresem e-mail albo kontem Google. Przejdź przez rejestrację i weryfikację.

Gdy masz już konto, [zaloguj się do GitHub](https://github.com/login).

## Zrób fork AndroidAPS

Otwórz oficjalne repozytorium AndroidAPS pod [tym linkiem](https://github.com/nightscout/AndroidAPS).

Dotknij ikony fork. To utworzy kopię na Twoim koncie.

![fork_aaps](../images/Building-the-App/CI/ForkAAPS.png)

Przewiń następny ekran w dół i dotknij **Create Fork**.

![fork_aaps_confirm](../images/Building-the-App/CI/ForkAAPS2.png)

*Uwaga: możesz **odznaczyć** „Copy the master branch only”, jeśli chcesz budować wersje deweloperskie lub własne zmiany.*

![fork_aaps_main](../images/Building-the-App/CI/ForkAAPS3.png)

```{note}
Nie możesz zrobić forka i widzisz ten komunikat?</br></br>
**`No available destinations to fork this repository.`**</br></br>
![Already forked](../images/Building-the-App/CI/ForkAAPS3b.png)</br></br>
To znaczy, że masz już fork AndroidAPS.</br>
Upewnij się, że jest aktualny, i przejdź do kroków przygotowania.
```

```{warning}
**Nigdy nie usuwaj swojego forka, jeśli nie masz kopii zapasowej swoich sekretów!**
```

GitHub pokazuje teraz Twoją osobistą kopię AndroidAPS. Nie zamykaj tej karty przeglądarki.

![forked_aaps](../images/Building-the-App/CI/ForkAAPS4.png)

----

**Dalej: [Krok 2 – Utwórz magazyn kluczy do podpisu](BrowserBuildKeystore.md) →**
