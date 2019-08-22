# Aktualizace na novou verzi nebo větev (branch)

<font color="#FF0000"><b>U verze 2.3 je potřeba použít git pro aktualizaci. Updating via zip file does not work anymore.</font></b>

## Install git (if you don't have it)

### Windows

* Měly by fungovat všechny verze gitu. Například <https://git-scm.com/download/win>
* Make sure to note down the installation path. You will need it in the next step.
  
  ![Git installation path](../images/Update_GitPath.png)

* Let Studio know where is git.exe located: File - Settings
  
  ![Android Studio - open settings](../images/Update_GitSettings1.png)

* In the next window: Version Control - Git

* Choose correct path: .../Git<font color="#FF0000"><b>/bin</b></font>

* Make sure update method "Merge" is selected.
  
  ![Android Studio - GIT path](../images/Update_GitSettings2a.png)

### Mac

* Měly by fungovat všechny verze gitu. For example <https://git-scm.com/download/mac>
* Use homebrew to install git: ```$ brew install git```.
* For details on installing git see the [official git documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* If you install git via homebrew there is no need to change any preferences. Just in case: They can be found here: Android Studio - Preferences.

## Update your local copy

* Click: VCS->Git->Fetch
  
  ![Android Studio - GIT - Fetch](../images/Update_Fetch.png)

## Selecting branch

* If you want to change branch select another branch from tray: master (latest release) or another version (please see below)
  
  ![](../images/UpdateAAPS1.png)

and then checkout (You can use 'Checkout as New Branch' if 'Checkout' is not available.)

     ![](../images/UpdateAAPS2.png)
    

## Updating branch from Github

* Press Ctrl+T, select Merge method and press OK
  
  ![](../images/merge.png)

On the tray you'll see green message about updated project

## Vytvořte podepsaný soubor APK

<!--- Text is maintained in page building-apk.md ---> V nabídce vyberte „Build“ a pak „Generate Signed Bundle / APK…“. (Nabídka Android Studio se v září 2018 změnila. Ve starších verzích vyberte nabídku „Build“ a pak „Generate Signed APK...“.)

  
Podepsání znamená, že podepíšete svou generovanou aplikaci, ale digitálním způsobem, něco jako digitálním otiskem prstu v samotné aplikaci. To je nezbytné, protože Android má pravidlo, že z bezpečnostních důvodů přijme pouze podepsaný kód. Pokud se o toto téma zajímáte, můžete si k tomu víc přečíst [zde](https://developer.android.com/studio/publish/app-signing.html#generate-key), ale Bezpečnost je hluboké a komplexní téma a teď ho nepotřebujete.

![Snímek 39a](../images/Installation_Screenshot_39a.PNG)

V následujícím dialogovém okně vyberte „APK“ místo „Android App Bundle“ a klepněte na tlačítko „Next“.

![Snímek 39b](../images/Installation_Screenshot_39b.PNG)

Zvolte „app“ a klepněte na tlačítko „Next“.

![Snímek 40](../images/Installation_Screenshot_40.png)

Enter your key store path, enter key store password, select key alias and enter key password.

Select 'Remember passwords'.

Then click next.

![Key store path](../images/KeystorePathUpdate.PNG)

Zvolte „full“ jako flavour generované aplikace. Zvolte V1 „Jar Signature“ (V2 je volitelné) a klikněte na tlačítko „Finish“. Následující údaje mohou být důležité pro pozdější použití.

* Možnost „Release“ by měla být výchozí volbou pro „Build Type“, možnost „Debug“ je pouze pro vývojáře.
* Vyberte typ sestavení, jaký budete chtít. 
  * full (tj. automatické doporučení pro uzavřenou smyčku)
  * openloop (tj. doporučení pro uživatele s otevřenou smyčkou)
  * pumpcontrol (tj. vzdálené ovládání pumpy bez smyčky)
  * nsclient (tj. zobrazují se data jiného uživatele se smyčkou a lze vkládat záznamy ošetření)

![Snímek 44](../images/Installation_Screenshot_44.png)

V podokně „Event Log“ vidíme, že podepsaný soubor APK byl úspěšně vygenerován.

![Snímek 45](../images/Installation_Screenshot_45.png)

Klikněte na odkaz „locate“ v podokně „Event Log“.

![Snímek 46](../images/Installation_Screenshot_46.png)

## Přeneste soubor APK do telefonu

<!--- Text is maintained in page building-apk.md ---> Objeví se okno správce souborů. Na vašem počítači může vypadat trochu jinak, protože já používám systém Linux. Pokud používáte sytém Windows, otevře se Průzkumník souborů, na platformě Mac OS X to bude Finder. V něm byste měli vidět složku s vygenerovaným souborem APK. Toto bohužel není správné umístění, protože „wear-release.apk“ není podepsaný soubor „app“ APK, který hledáme.

![Snímek 47](../images/Installation_Screenshot_47.png)

Přejděte prosím do složky AndroidAPS/app/full/release a tam vyhledejte soubor „app-full-release.apk“. Přeneste tento soubor do telefonu s Androidem. Můžete to udělat způsobem, který upřednostňujete, přes Bluetooth, nahráním do cloudu, připojením telefonu k počítači pomocí kabelu nebo přes přílohu e-mailu. Já v této ukázce používám Gmail, jelikož je to pro mě poměrně jednoduché. Zmiňuji to proto, protože instalaci self-signed aplikace (certifikát podepsaný sám sebou) potřebujeme v systému Android výslovně povolit, i když byl soubor přijatý přes Gmail. Standardně je to totiž zakázané. Pokud použijete jinou metodu, zvolte vhodný postup.

![Snímek 48](../images/Installation_Screenshot_48.png)

V nastavení telefonu je nabídka (instalovat neznámé aplikace), kde lze povolit instalaci APK souborů, které jsem si poslal přes Gmail.

Vyberte možnost „Povolit z tohoto zdroje“. Po instalaci můžete tuto volbu zase zakázat.

![Instalace z neznámých zdrojů](../images/Installation_Screenshot_49-50.png)

Posledním krokem je klepnout na soubor APK, který jsem přijal přes Gmail, a nainstalovat aplikaci. Pokud se APK nechce nainstalovat a máte v telefonu již starší verzi AndroidAPS, pravděpodobně byla podepsaná jiným klíčem – v tom případě musíte starou verzi nejdřív odinstalovat, avšak nezapomeňte předtím exportovat svá nastavení!

Ano, máte to a můžete začít s úvodní konfigurací AndroidAPS (CGM, inzulínová pumpa) atd.

## Check AAPS version on phone

You can check the AAPS version on your phone by clicking the three dots menu on the top right and then about.

![AAPS version installed](../images/Update_VersionCheck.png)

# Troubleshooting

## Kotlin compiler warning

If build completed successfully but you get Kotlin compiler warnings then just ignore these warnings.

App was build successfully and can be transferred to phone.

![ignore Kotline compiler warning](../images/GIT_WarningIgnore.PNG)

## Could not download… / Offline Work

If you get a failure message like this

![Warning could not download](../images/GIT_Offline1.jpg)

make sure that ‘Offline work’ is disabled.

File -> Settings

![Settings offline work](../images/GIT_Offline2.jpg)

## Uncommitted changes

If you receive failure message like

![Failure uncommitted changes](../images/GIT_TerminalCheckOut0.PNG)

### Option 1

* In Android Studio select VCS -> GIT -> Reset HEAD ![Reset HEAD](../images/GIT_TerminalCheckOut3.PNG)

### Option 2

* Copy ‘git checkout --’ to clipboard (without quote signs)
* Switch to Terminal in Android Studio (lower left side of Android Studio window) ![Android Studio Terminal](../images/GIT_TerminalCheckOut1.PNG)

* Paste copied text and press return ![GIT checkout success](../images/GIT_TerminalCheckOut2.jpg)

## App not installed

![phone app note installed](../images/Update_AppNotInstalled.png)

* Make sure you have transferred the “app-full-release.apk” file to your phone.
* If "App not installed" is displayed on your phone follow these steps: 
  1. [Export settings](../Usage/Objectives#export-import-settings) (in AAPS version already installed on your phone)
  2. Uninstall AAPS on your phone.
  3. Enable airplane mode & turn off bluetooth.
  4. Install new version (“app-full-release.apk”)
  5. [Importujte nastavení](../Usage/Objectives#export-import-settings)
  6. Turn bluetooth back on and disable airplane mode

## App installed but old version

If you build the app successfully, transferred it to your phone and installed it successfully but the version number stays the same then you might have missed the merging step in the [update manual](…/Installing-AndroidAPS/Update-to-new-version.html#updating-branch-from-github).

## None of the above worked

If non of the above tips helped you might consider building the app from scratch:

1. [Export settings](../Usage/Objectives#export-import-settings) (in AAPS version already installed on your phone)
2. Have your key password and key store password ready In case you have forgotten passwords you can try to find them in project files as described [here](https://youtu.be/nS3wxnLgZOo).
3.     Note down the path to your key store
      In Android Studio Build -> Generate Signed APK
      ![Key store path](../images/KeystorePath.PNG)
      
  
  4. Build app from scratch as described [here](…/Installing-AndroidAPS/Building-APK.html#download-code-and-additional-components). Use existing key and key store.
4. When you have build the APK successfully delete the exiting app on your phone, transfer the new apk to your phone and install.
5. [Importujte nastavení](../Usage/Objectives#export-import-settings)

## Worst case scenario

In case even building the app from scratch does not solve your problem you might want to try to uninstall Android Studio completely. Some Users reported that this solved their problem.

Make sure to uninstall all files associated with Android Studio. Manuals can be found online i.e. <https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10>.

Install Android Studio from scratch as described [here](/Installing-AndroidAPS/Building-APK#install-android-studio) and **do not update gradle**.