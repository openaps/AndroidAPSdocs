# Sestavení APK

* * *

**Please note** With AndroidAPS version 2.3 it is not possible to build the APK with the latest Android Studio version. Please use Android Studio 3.4 from [here](https://developer.android.com/studio/archive?).

**Please note** when building AndroidAPS 2.0 apk: **Configuration on demand** is not supported by the current version of the Android Gradle plugin!

Jestliže vytváření apk selže s chybou "on demand configuration", proveďte následující změnu:

* Otevřete okno Preferences klepnutím na File > Settings (na platformě Mac, Android Studio > Preferences).
* V levé části pak na Build, Execution, Deployment > Compiler.
* Zrušte označení možnosti Configure on demand.
* Klepněte na tlačítko použít nebo OK.

* * *

### Tento článek je rozdělený do dvou částí.

* In the overview part there is an explanation on what steps are necessary to build the APK file.
* In the step by step walkthrough part you will find the screenshots of a concrete installation. Because the versions of Android Studio - the software development environment which we will use to build the APK - will change very quickly this will be not identical to your installation but it should give you a good starting point. Android Studio also runs on Windows, Mac OS X and Linux and there might be small differences in some aspects between each platform. If you find that something important is wrong or missing, please inform the facebook group "AndroidAPS users" or in the Gitter chats [Android APS](https://gitter.im/MilosKozak/AndroidAPS) or [AndroidAPSwiki](https://gitter.im/AndroidAPSwiki/Lobby) so that we can have a look at this.

## Přehled

In general, the steps necessary to build the APK file:

* Install git
* Install and setup Android Studio.
* Use git to clone the source code from the central Github repository where the developers have put the actual code for the app.
* Open the cloned project in Android Studio as active project.
* Build the signed APK.
* Transfer the signed APK to your smartphone.

## Step by step walkthrough

Detailed description of the steps necessary to build the APK file.

## Install Android Studio

* Install git 
  * [Windows](https://gitforwindows.org/)
  * [Mac OS X](http://sourceforge.net/projects/git-osx-installer/)
  * Linux - just install a package git via package manager of your distribution
* Install [Android Studio](https://developer.android.com/studio/install.html).
* Setup Android Studio during first start

Select "Do not import settings" as you have not used it before.

![Snímek 1](../images/Installation_Screenshot_01.png)

Click "Next".

![Screenshot 2](../images/Installation_Screenshot_02.png)

Select "Standard" installation and click "Next".

![Screenshot 3](../images/Installation_Screenshot_03.png)

Select the theme for the user interface you like. (In this manual we used "Intellij". Then click "Next". This is just the color scheme. You can select any you like (i.e. "Darcula" for dark mode). This selection has no influence on building the APK.

![Screenshot 4](../images/Installation_Screenshot_04.png)

Click "Next" on the "Verify Settings" dialog.

![Screenshot 5](../images/Installation_Screenshot_05.png)

The Android emulator (to emulate the smartphone on your PC or Mac) is not used to build the APK. You can click "Finish" to finish the installation and read the documentation later on demand.

![Screenshot 6](../images/Installation_Screenshot_06.png)

Android Studio is downloading a lot of software components it uses. You can click on the "Show Details" button to the what happens but that's not important at all.

![Screenshot 7](../images/Installation_Screenshot_07.png)

![Screenshot 8](../images/Installation_Screenshot_08.png)

After the downloads are completed click the "Finish" button.

![Screenshot 9](../images/Installation_Screenshot_09.png)

* Applause, applause you have now finished the Android Studio installation and can start cloning the source code. Maybe it's time for a short break?

## Download code and additional components

* Use git clone in Android Studio as shown in screenshots below. Select "Check out project from Version Control" with "Git" as concrete version control system.

![Screenshot 10](../images/Installation_Screenshot_10.png)

![Version_Control_Git](../images/Version_Control_Git.png)

Fill in the URL to the main AndroidAPS repository ("https://github.com/MilosKozak/AndroidAPS") and click "clone".

![Screenshot 13](../images/Installation_Screenshot_13.png)

Android Studio will start cloning. Don't click "Background" as it goes fast and makes things more complicated at the moment.

![Screenshot 14](../images/Installation_Screenshot_14.png)

Finish the checkout from version control with opening the project by clicking "Yes".

![Screenshot 15](../images/Installation_Screenshot_15.png)

Use the standard "default gradle wrapper" and click "OK".

![Screenshot 16](../images/Installation_Screenshot_16.png)

Read and close the "Tip of Day" screen of Android Studio by pressing "Close".

![Screenshot 17](../images/Installation_Screenshot_17.png)

* Excellent, you have your own copy of the source code and are ready to start the build.
* Now we are approaching our first error message. Fortunately, Android Studio will directly give us the solution for this.

Click "Install missing platform(s) and sync project" as Android Studio needs to install a missing platform.

![Screenshot 18](../images/Installation_Screenshot_18.png)

Accept the license agreement by selecting "Accept" and clicking "Next".

![Screenshot 19](../images/Installation_Screenshot_19.png)

As it is said in the dialog please wait until the download is finished.

![Screenshot 20](../images/Installation_Screenshot_20.png)

Now it's finished. Please click "Finish".

![Screenshot 21](../images/Installation_Screenshot_21.png)

Aaaahhh, next error. But Android Studio suggests a similar solution. Click "Install Build Tools and sync project" as Android Studio needs to download missing Tools.

![Screenshot 22](../images/Installation_Screenshot_22.png)

As it is said in the dialog please wait until the download is finished.

![Screenshot 23](../images/Installation_Screenshot_23.png)

Now it's finished. Please click "Finish".

![Screenshot 24](../images/Installation_Screenshot_24.png)

And another error to handle as Android Studio needs to download again a missing platform. Click "Install missing platform(s) and sync project".

![Screenshot 25](../images/Installation_Screenshot_25.png)

As it is said in the dialog please wait until the download is finished.

![Screenshot 26](../images/Installation_Screenshot_26.png)

Now it's finished. Please click "Finish".

![Screenshot 27](../images/Installation_Screenshot_27.png)

Click "Install Build Tools and sync project" as Android Studio needs to download missing Tools.

![Screenshot 28](../images/Installation_Screenshot_28.png)

As it is said in the dialog please wait until the download is finished.

![Screenshot 29](../images/Installation_Screenshot_29.png)

Now it's finished. Please click "Finish".

![Screenshot 30](../images/Installation_Screenshot_30.png)

Yeah, the error messages are gone and the first gradle build is runing. Maybe it's time to drink some water?

![Screenshot 31](../images/Installation_Screenshot_31.png)

Android Studio recommends to update the gradle system. **Never update gradle!** This might lead to difficulties!

Please click "Don't remind me again for this project".

![Screenshot 32](../images/AS_NoGradleUpdate.png)

The build is running again.

![Screenshot 33](../images/Installation_Screenshot_33.png)

Yeah, the first build is successful but we are not finished.

![Screenshot 34](../images/Installation_Screenshot_34.png)

## Vytvořte podepsaný soubor APK

V nabídce vyberte „Build“ a pak „Generate Signed Bundle / APK…“. (Nabídka Android Studio se v září 2018 změnila. In older versions select in the menu “Build” and then “Generate Signed APK...”.)

Signing means that you sign your generated app but in a digital way as a kind of digital fingerprint in the app itself. To je nezbytné, protože Android má pravidlo, že z bezpečnostních důvodů přijme pouze podepsaný kód. Pokud se o toto téma zajímáte, můžete si k tomu víc přečíst [zde](https://developer.android.com/studio/publish/app-signing.html#generate-key), ale Bezpečnost je hluboké a komplexní téma a teď ho nepotřebujete.

![Snímek 39a](../images/Installation_Screenshot_39a.PNG)

V následujícím dialogovém okně vyberte „APK“ místo „Android App Bundle“ a klepněte na tlačítko „Next“.

![Snímek 39b](../images/Installation_Screenshot_39b.PNG)

Zvolte „app“ a klepněte na tlačítko „Next“.

![Snímek 40](../images/Installation_Screenshot_40.png)

Click "Create new..." to start creating your keystore. A keystore in this case is nothing more than a file in which the information for signing is stored. It is encrypted and the information is secured with passwords. We suggest storing it in your home folder and remember the passwords but if you lose this information it's not a big issue because then you just have to create a new one. Best practice is to store this information carefully.

![Screenshot 41](../images/Installation_Screenshot_41.png)

* Fill in the information for the next dialog. 
  * Key store path: is the path to the keystore file
  * The password fields below are for the keystore to double check for typing errors.
  * Alias is a name for the key you need. You can leave the default or give it a fancy name you want.
  * The password fields below the key are for the key itself. As always to double check for typing errors.
  * You can let the validity at the default of 25 years.
  * You only have to fill out first name and last name but feel free to complete the rest of information. Then click "OK".

![Screenshot 42](../images/Installation_Screenshot_42.png)

Fill in the information of the last dialog in this dialog and click "Next".

![Screenshot 43](../images/Installation_Screenshot_43.png)

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

Objeví se okno správce souborů. Na vašem počítači může vypadat trochu jinak, protože já používám systém Linux. Pokud používáte sytém Windows, otevře se Průzkumník souborů, na platformě Mac OS X to bude Finder. V něm byste měli vidět složku s vygenerovaným souborem APK. Toto bohužel není správné umístění, protože „wear-release.apk“ není podepsaný soubor „app“ APK, který hledáme.

![Snímek 47](../images/Installation_Screenshot_47.png)

Přejděte prosím do složky AndroidAPS/app/full/release a tam vyhledejte soubor „app-full-release.apk“. Přeneste tento soubor do telefonu s Androidem. Můžete to udělat způsobem, který upřednostňujete, přes Bluetooth, nahráním do cloudu, připojením telefonu k počítači pomocí kabelu nebo přes přílohu e-mailu. Já v této ukázce používám Gmail, jelikož je to pro mě poměrně jednoduché. Zmiňuji to proto, protože instalaci self-signed aplikace (certifikát podepsaný sám sebou) potřebujeme v systému Android výslovně povolit, i když byl soubor přijatý přes Gmail. Standardně je to totiž zakázané. Pokud použijete jinou metodu, zvolte vhodný postup.

![Snímek 48](../images/Installation_Screenshot_48.png)

V nastavení telefonu je nabídka (instalovat neznámé aplikace), kde lze povolit instalaci APK souborů, které jsem si poslal přes Gmail.

Vyberte možnost „Povolit z tohoto zdroje“. Po instalaci můžete tuto volbu zase zakázat.

![Instalace z neznámých zdrojů](../images/Installation_Screenshot_49-50.png)

Posledním krokem je klepnout na soubor APK, který jsem přijal přes Gmail, a nainstalovat aplikaci. Pokud se APK nechce nainstalovat a máte v telefonu již starší verzi AndroidAPS, pravděpodobně byla podepsaná jiným klíčem – v tom případě musíte starou verzi nejdřív odinstalovat, avšak nezapomeňte předtím exportovat svá nastavení!

Ano, máte to a můžete začít s úvodní konfigurací AndroidAPS (CGM, inzulínová pumpa) atd.