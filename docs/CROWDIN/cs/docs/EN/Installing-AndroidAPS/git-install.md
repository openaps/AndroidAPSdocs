# Nainstalujte git

## Windows

### 1. Stažení git

- **Musíte zůstat online po celou dobu, co bude Android Studio stahovat nějaké aktualizace!**
- Měly by fungovat všechny verze gitu. Například [https://git-scm.com/download/win](https://git-scm.com/download/win).
- Poznačte si cestu instalace. Budete ji potřebovat v dalším kroku.

```{admonition} make git.exe available via Windows PATH
:class: poznámka

Ujistěte se, že můžete spustit git.exe bez přednastavené cesty, protože Android Studio to vyžaduje k nalezení git.exe. Poté automaticky nastaví správnou cestu ke git.exe v nastavení Android Studia.

```

![Instalační cesta gitu](../images/Update_GitPath.png)

### 2. Nastavení git v Android Studiu

- Klikněte na File > Settings

  ![Android Studio - otevřete nastavení](../images/Update_GitSettings1.png)

- Klikněte na malý trojúhelníček před Version Control (1.), rozbalí se související menu.

- Klikněte na Git (2.).

- Ověřte, že v kolonce Update Method je zvolena volba Merge (3.).

- Kliknutím na tlačítko "Test" (4.) spustíte automatické ověření, že Android Studio má přístup k git.exe

  ![Nastavení aplikace Android Studio](../images/AndroidStudio361_09.png)

- Pokud byl automatický test úspěšný zobrazí se okno s informací o verzi Git.

- Klikněte na "OK" v dialogovém okně (1.) a pak na "OK" v okně s nastavením (2.).

  ![Automatická instalace git byla úspěšná](../images/AndroidStudio361_10.png)

- Pokud soubor git.exe nebyl automatickým testem nalezen, klikněte na "OK" v dialogovém okně (1.) a pak na tlačítko se třemi tečkami (2.).

- Použijte funkci [vyhledávání](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) v programu Průzkumník souborů pro nalezení souboru "git.exe" pokud si nejste jisti, kde lze soubor najít. Hledejte soubor git.exe ve složce bin.

- Vyberte cestu k souboru git.exe a ujistěte se, že vybraný soubor je ve složce **\bin\** (3.) a klikněte na tlačítko “OK” (4.).

- Zavřete okno nastavení kliknutím na tlačítko "OK" (5.).

  ![Automatická instalace git selhala](../images/AndroidStudio361_11.png)

### 3. Restart

- Restartujte počítač, aktualizuje se prostředí jeho systému.

(git-install-check-git-settings-in-android-studio)=
### 4. Kontrola nastavení git v Android Studiu

- Otevřete terminálové okno v Android Studiu

- Napište `git - -version` (bez uvozovek a bez mezery mezi oběma - \[znaménky minus\]!) a stiskněte Enter

  ![git --version](../images/AndroidStudio_gitversion1.png)

- Pokud je git nainstalován a je správně nastaveno propojení, vypíše se informace o nainstalované verzi, bude vypadat obdobně:

  ![result git-version](../images/AndroidStudio_gitversion2.png)

## Mac

- Měly by fungovat všechny verze gitu. Například [https://git-scm.com/download/mac](https://git-scm.com/download/mac)
- Použijte homebrew k instalaci gitu: `` `$ brew install git` ``.
- Detaily o instalaci gitu naleznete v [oficiální dokumentaci gitu](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
- Pokud instalujete git přes homebrew, není třeba měnit žádné předvolby. Pokud by bylo třeba: Najdete je zde: Android Studio - Preferences.
