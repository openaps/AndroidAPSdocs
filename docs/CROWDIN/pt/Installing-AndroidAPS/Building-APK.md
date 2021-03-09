# Construir o ficheiro APK

## Construa você em vez de fazer download

**A AndroidAPS não está disponível para download devido à regulamentação para dispositivos médicos. É legal criar o aplicativo para o seu próprio uso, mas não deve dar uma cópia aos outros! Consulte a [página de perguntas frequentes-FAQ](../Getting-Started/FAQ.md) para mais detalhes.**

## Notas importantes

* Por favor, use o **[Android Studio Version 4.1.1](https://developer.android.com/studio/)** ou um mais recente para construir o apk.
* [Sistemas Windows 10 32-bit](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) não são suportados pelo Android Studio 4.1.1.

**A configuração sob demanda** não é suportada pela versão atual do plugin Android Gradle!

Se a construção falhar com um erro em relação à "on demand configuration" pode fazer o seguinte:

* Abra a janela Preferências clicando em Arquivo> Configurações (no Mac, Android Studio> Preferências).
* No painel esquerdo, clique em Build, Execution, Deployment > Compiler.
* Desmarque a caixa de opção Configure on demand.
* Clique em Apply ou OK.

* * *

### Este artigo é dividido em duas partes.

* Na parte de visão geral há uma explicação sobre quais os passos necessários para construir o arquivo APK.
* No passo a passo pode encontrar as capturas de ecrã de uma instalação real. Como as versões do Android Studio - o ambiente de desenvolvimento de software que utilizaremos para construir o APK-mudarão muito rapidamente isso não será idêntico à sua instalação mas dará um bom ponto de partida. O Android Studio também "corre" em Windows, Mac OS X e Linux e pode haver pequenas diferenças em alguns aspectos entre cada plataforma. Se achar que algo importante está errado ou ausente, informe o grupo do facebook "AndroidAPS users ou o AndroidAPS Portugal" ou no chat do Gitter [Android APS](https://gitter.im/MilosKozak/AndroidAPS) ou [AndroidAPSwiki](https://gitter.im/AndroidAPSwiki/Lobby) para que isso seja revisto.

## Visão Geral

De um modo geral, os passos necessários para construir o arquivo APK são:

1. [Instalar Git](../Installing-AndroidAPS/git-install.rst)
2. [Instalar o Android Studio](../Installing-AndroidAPS/Building-APK#install-android-studio)
3. [Definir o caminho git nas preferências do Android Studio](../Installing-AndroidAPS/Building-APK#set-git-path-in-preferences)
4. [Baixar o código da AndroidAPS](../Installing-AndroidAPS/Building-APK#download-androidaps-code)
5. [Download do Android SDK](../Installing-AndroidAPS/Building-APK#download-android-sdk)
6. [Construir a app](../Installing-AndroidAPS/Building-APK#generate-signed-apk) (gerar o apk assinado)
7. [Transferir o arquivo apk para o seu telefone](../Installing-AndroidAPS/Building-APK#transfer-apk-to-smartphone)
8. [Identificar o receptor de estiver a utilizar o xDrip+](../Installing-AndroidAPS/Building-APK#identify-receiver-if-using-xdrip)

## Instalação Passo a Passo

Descrição detalhada dos passos necessários para construir o ficheiro APK.

## Install git (if you don't have it)

Follow the manual on the [git installation page](../Installing-AndroidAPS/git-install.rst).

## Instalar o Android Studio

Os seguintes screenshots foram retirados do Android Studio Version 3.6.1. A sua imagem pode parecer um pouco diferente se estiver a usar uma versão mais recente do Android Studio. Mas será capaz de encontrar o caminho facilmente. [Ajuda da comunidade](../Where-To-Go-For-Help/Connect-with-other-users.md) pode ser encontrada aqui.

Uma das coisas mais importantes ao instalar o Android Studio: **Seja paciente!** Durante a instalação e setup o Android Studio está a fazer o download de muitos arquivos e vai levar o seu tempo.

Instale o [Android Studio](https://developer.android.com/studio/install.html) e configure durante o primeiro início.

Selecione "Do not import settings", se nunca o utilizou antes.

![Não importe as Definições](../images/AndroidStudio361_01.png)

Decida se quer partilhar dados com o Google ou não.

![Partilhar dados com o Google](../images/AndroidStudio361_02.png)

No passo seguinte clique em "Next".

![Ecrã de Boas-vindas](../images/AndroidStudio361_03.png)

Selecione a instalação "Standard" e clique em "Next".

![Instalação Standard](../images/AndroidStudio361_04.png)

Selecione o tema para a interface do usuário que mais lhe agrada. (Neste manual utilizamos o tema "Light".) Em seguida, clique em "Next". Este é apenas um esquema de cores. Pode selecionar o que mais gosta (ex: "Darcula" para o modo escuro). Esta seleção não tem influência na construção da APK.

![UI color scheme](../images/AndroidStudio361_05.png)

Clique em "Finish" na seção de "Verify Settings".

![Verify settings](../images/AndroidStudio361_06.png)

Aguarde enquanto o Android Studio faz o download de componentes adicionais e seja paciente. Uma vez que termine o download, pode premir o botão "Finish" que fica azul. Clique no botão agora.

![Downloading components](../images/AndroidStudio361_07.png)

## Definir caminho Git nas preferências

Certifique-se de que o [Git esteja instalado](../Installing-AndroidAPS/git-install.rst) no seu computador.

On the Android Studio welcome screen click the small triangle (1. in next screenshot) and select "Settings" (2.).

![Android Studio settings from welcome screen](../images/AndroidStudio361_08.png)

### Windows

* Click the small triangle next to Version Control (1.) to open the sub-menu.
* Click Git (2.).
* Make sure update method "Merge" (3.) is selected.
* Check if Android Studio can locate path to git.exe automatically by clicking the button "Test" (4.)
    
    ![Android Studio settings](../images/AndroidStudio361_09.png)

* If automatic setting is successful git version will be displayed.

* Clique em "OK" na caixa de diálogo (1.) e "OK" na janela de configurações (2.).
    
    ![Automatic git installation succeeded](../images/AndroidStudio361_10.png)

* No caso do arquivo git.exe não puder ser encontrado, clique em "OK" na caixa de diálogo (1.) e, em seguida, no botão com os três pontos (2.).

* Use [search function](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) in windows explorer to find "git.exe" if you are unsure where it can be found. You are looking for git.exe located in \bin\ folder.
* Select path to git.exe and make sure you selected the one in ** \bin\ ** folder (3.) and click "OK" (4.).
* Close settings window by clicking "OK" button (5.).
    
    ![Automatic git installation failed](../images/AndroidStudio361_11.png)

* **Reboot your computer to update system environment.**

### Mac

* Any git version should work. For example <https://git-scm.com/download/mac>.
* Use homebrew to install git: ```$ brew install git```.
* For details on installing git see the [official git documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* If you install git via homebrew there is no need to change any preferences. Just in case: They can be found here: Android Studio - Preferences.

## Baixar o código da AndroidAPS

* **If you haven't already rebooted your computer after setting git path in preferences do it now. System environment must be updated.**

* There are two options to start a new project:
    
    * On the Android Studio welcome screen click "Get from version control"
        
        ![Check out project from version control from welcome screen](../images/AndroidStudio_GetFromVersionControl.PNG)
    
    * If you already opened Android Studio and do not see the welcome screen anymore select File (1.) > New (2.) > Project from Version Control... (3.)
        
        ![Check out project from version control within Android Studio](../images/AndroidStudio_FileNew.PNG)

* Fill in the URL to the main AndroidAPS repository (https://github.com/nightscout/AndroidAPS) (1.).

* Choose the directory where you want to save the cloned code. (2.)
* Click button "Clone" (3.).
    
    ![Clone repository](../images/AndroidStudio_NewURL.PNG)

* Do not click "Background" while repository is cloned!
    
    ![No background action](../images/AndroidStudio361_15.png)

* After repository is cloned successfully open your local copy by clicking "Yes".
    
    ![Open repository](../images/AndroidStudio361_16.png)

* In the lower right corner you will see the information that Android Studio is running background tasks.
    
    ![Background tasks](../images/AndroidStudio361_17.png)

* Grant access if your firewall is asking for permission.
    
    ![Firewall permission java](../images/AndroidStudio361_18.png)

* Once the background tasks are finished you will probably see the following error message:
    
    ![SDK licence](../images/AndroidStudio361_19.png)

## Download do Android SDK

* Click File > Settings.
    
    ![Open settings](../images/AndroidStudio361_20.png)

* Click the small triangle next to Appearance & Behaviour (1.).

* Click the small triangle next to System Settings (2.) and select Android SDK (3.)
* Check the box left of "Android 9.0 (Pie)" (4.) (API Level 28).
    
    ![SDK settings](../images/AndroidStudio361_21.png)

* Confirm changes by clicking OK.
    
    ![Confirm SDK changes](../images/AndroidStudio361_22.png)

* Accept licence agreement (1.) and click "Next" (2.).
    
    ![Accept SDK licence](../images/AndroidStudio361_23.png)

* Wait until installation is finished.
    
    ![Wait during SDK installation](../images/AndroidStudio361_24.png)

* When SDK installation is completed the "Finish" button will turn blue. Click this button.
    
    ![Finish SDK installation](../images/AndroidStudio361_25.png)

* Android Studio might recommend to update the gradle system. **Never update gradle!** This might lead to difficulties!

* Se vir uma informação do canto inferior-direito na janela do Android Studio, que o Android Gradle Plugin está pronto para atualizar, clique no texto "update" (1.) e na caixa de diálogo clique em "Don't remind me again for this project" (2.).
    
    ![No cradle update](../images/AndroidStudio361_26.png)

## Generate signed APK

Signing means that you indicate your app to be your own creation but in a digital way as a kind of digital fingerprint within the app itself. That is necessary because Android has a rule that it only accepts signed code to run for security reasons. For more information on this topic, follow [this link](https://developer.android.com/studio/publish/app-signing.html#generate-key).

* Click "Build" in the menu bar and select "Generate Signed Bundle / APK...".
    
    ![Build apk](../images/AndroidStudio361_27.png)

* Select "APK" (1.) instead of "Android App Bundle" and click "Next" (2.).
    
    ![APK instead of bundle](../images/AndroidStudio361_28.png)

* Make sure that module is set to "app" (1.).

* Click "Create new..." (2.) to start creating your key store.
    
    A key store in this case is nothing more than a file in which the information for signing is stored. Esta é encriptada e a informação é protegida por palavra-passe.
    
    ![Create key store](../images/AndroidStudio361_29.png)

* Click the folder symbol (1.) to select your key store path.

* Selecione o caminho para onde a sua chave digital deve ser guardada(2.). **Não guarde na mesma pasta que o projecto. Deve seleccionar uma pasta diferente!** Sugestão: ambiente de trabalho.
* Escreva um nome para a sua chave digital (3.).
* Clique "OK" (4.).
* As palavras-passe das chaves digitais não têm de ser muito sofisticadas. Certifique-se que se lembra das mesmas ou tome uma nota num lugar seguro. Caso não se lembre da sua palavra-passe no futuro, por favor ver [resolução de problemas com chaves digitais perdidas](../Installing-AndroidAPS/troubleshooting_androidstudio#lost-keystore).
* Introduza (5.) e confirme (6.) a password da sua chave digital.
* Faça o mesmo para a chave digital (7. + 8.).
* Validade (9.) é de 25 anos por defeito. Não precisa de mudar este valor pré-definido.
* Primeiro e último nome deve ser introduzido (10.). Todas as outras informações são opcionais.
* Clique em "OK" (11.) e está feito.
    
    ![Key store path](../images/AndroidStudio361_30.png)

* Certifique-se de que a caixa para lembrar senhas está seleccionada (1.). Assim não tem que digitar as mesmas da próxima vez que construir o APK (ex: atualizar para uma nova versão da AndroidAPS).

* Clique em "Next" (2.).
    
    ![Remember passwords](../images/AndroidStudio361_31.png)

* Select build variant "fullRelease" (1.).

* Check boxes V1 and V2 for signature versions (2.).
* Click "Finish". (3.)
    
    ![Finish build](../images/AndroidStudio361_32.png)

* Android Studio will display the information "APK(s) generated successfully..." after build is finished.

* In case build was not successful refer to the [troubleshooting section](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).
* Easiest way to find the apk is to click on "Event log".
    
    ![Build successfully - event log](../images/AndroidStudio361_33.png)

* In the event log section click "locate".
    
    ![Event log - locate apk](../images/AndroidStudio361_34.png)

* app-full-release.apk is the file you are looking for.
    
    ![File location apk](../images/AndroidStudio361_35.png)

## Transfer APK to smartphone

Easiest way to transfer app-full-release.apk to your phone is via [USB cable or Google Drive](https://support.google.com/android/answer/9064445?hl=en). Please note that transfer by mail might cause difficulties and is not the preferred way.

On your phone you have to allow installation from unknown sources. Manuals how to do this can be found on the internet (i.e. [here](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) or [here](https://www.androidcentral.com/unknown-sources)).

## Identificar o receptor de estiver a utilizar o xDrip+

[Ver a página do xDrip+](../Configuration/xdrip#identify-receiver)

## Resolução de Problemas

See separate page [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).