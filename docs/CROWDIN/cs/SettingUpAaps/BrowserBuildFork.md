(github-fork)=

# Sestavení v prohlížeči – Krok 1: Vytvořte si fork na GitHubu

```{note}
Toto je **krok 1** návodu [Sestavení v prohlížeči](BrowserBuild.md).
```

You will need to store your personal Android Java Key and Google Drive information as secrets in GitHub (later in the process, we will explain how).

To nelze udělat ve veřejném repozitáři AndroidAPS, proto si musíte vytvořit osobní kopii zdrojového kódu (tzv. fork).

## Účet na GitHubu

Pokud ještě účet nemáte, musíte si [vytvořit účet na GitHubu](https://github.com/signup).  
Můžete se zaregistrovat pomocí e-mailu nebo účtu Google. Projděte registrací a ověřením.

Když už účet máte, [přihlaste se na GitHub](https://github.com/login).

## Fork AndroidAPS

Otevřete oficiální repozitář AndroidAPS pomocí [tohoto odkazu](https://github.com/nightscout/AndroidAPS).

Klepněte na ikonu fork. Tím se ve vašem účtu vytvoří kopie.

![fork_aaps](../images/Building-the-App/CI/ForkAAPS.png)

Na další obrazovce se posuňte dolů a klepněte na **Create Fork**.

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
**Nikdy nemažte svůj fork, dokud si nezazálohujete své secrety!**
```

GitHub nyní zobrazí vaši osobní kopii AndroidAPS. Tuto kartu prohlížeče nechte otevřenou.

![forked_aaps](../images/Building-the-App/CI/ForkAAPS4.png)

----

**Další: [Krok 2 – Vytvořte si podpisové úložiště klíčů](BrowserBuildKeystore.md) →**
