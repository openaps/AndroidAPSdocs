(github-fork)=

# Budowanie w przeglądarce – Krok 1: Utwórz swój fork na GitHub

```{note}
To jest **Krok 1** [budowania w przeglądarce](BrowserBuild.md).
```

You will need to store your personal Android Java Key and Google Drive information as secrets in GitHub (later in the process, we will explain how).

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

*Note: you can **unselect** "Copy the master branch only" if you will want to build developer versions or customizations.*

![fork_aaps_main](../images/Building-the-App/CI/ForkAAPS3.png)

```{note}
You cannot fork and you see this?<br/><br/>
**`No available destinations to fork this repository.`**<br/><br/>
![Already forked](../images/Building-the-App/CI/ForkAAPS3b.png)<br/><br/>
This means you already have an existing fork of AndroidAPS.<br/>
Make sure it's up to date and continue to Preparation Steps.
```

```{warning}
**Nigdy nie usuwaj swojego forka, jeśli nie masz kopii zapasowej swoich sekretów!**
```

GitHub pokazuje teraz Twoją osobistą kopię AndroidAPS. Nie zamykaj tej karty przeglądarki.

![forked_aaps](../images/Building-the-App/CI/ForkAAPS4.png)

----

**Dalej: [Krok 2 – Utwórz magazyn kluczy do podpisu](BrowserBuildKeystore.md) →**
