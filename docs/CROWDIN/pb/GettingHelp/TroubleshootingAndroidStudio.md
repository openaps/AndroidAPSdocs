(troubleshooting_androidstudio-troubleshooting-android-studio)=

# Resolução de problemas do Android Studio

```{contents} List of common issues
:depth: 2
:local: true
```

(troubleshooting_androidstudio-lost-keystore)=
## Keystore perdida
Se você perdeu a sua keystore ou a senha dela, um apk assinado com uma nova keystore não pode atualizar o seu **AAPS** atual: você precisa desinstalá-lo e reinstalá-lo. Veja [Reinstalar o AAPS com uma nova keystore](#reinstall-aaps).

## Falha no Gradle Sync
O Gradle Sync pode falhar por vários motivos. Quando você receber uma mensagem dizendo 'gradle sync failed', abra a aba "Build" (1) na parte de baixo do Android Studio e veja qual mensagem de erro (2) aparece.

![Falha no Gradle](../images/studioTroubleshooting/07_GradleSyncFailed2.png)

```{contents} Likely reasons for gradle sync failures are:
:depth: 1
:local: true
```

*Importante*: Depois de seguir as instruções para o seu problema, você precisa iniciar o [gradle sync](#gradle-resync) de novo.

(troubleshooting_androidstudio-uncommitted-changes)=
### Alterações não confirmadas (uncommitted changes)

Se você receber uma mensagem de falha como esta:

![Gradle: alterações não confirmadas](../images/studioTroubleshooting/02_GradleUncommitedChanges.png)

```
Build file 'C:\Data\50-Android\AndroidAPS\app\build.gradle.kts' line: 243

There are uncommitted changes.
Clone sources again as described in wiki and do not allow gradle update
```

#### Passo 1 - Verificar a instalação do Git
  * Abra a aba Terminal (1) na parte de baixo do Android Studio, copie o texto a seguir e cole ou digite no terminal (2).
    ```
    git --version
    ```

    ![Versão do Git no Gradle](../images/studioTroubleshooting/03_GitVersion.png)

    Nota: há um espaço e dois hifens entre git e version!

  * Você deve receber uma mensagem dizendo qual versão do Git está instalada, como você pode ver na captura de tela acima. Nesse caso, vá para o [Passo 2](#troubleshooting-android-studio-check-for-uncommitted-changes).

  * In case you get a message saying
    ```
    Git: command not found
    ```
    a sua instalação do Git não está correta.

  * [Verificar a instalação do Git](#BuildingAaps-steps-for-installing-git)

  * Se você usa Windows e o Git acabou de ser instalado, reinicie o computador para que o Git fique disponível em todo o sistema depois da instalação

  * If Git is installed, you have restarted (if on Windows), and Git still cannot be found:

  * Procure no seu computador o arquivo "git.exe".

    Anote em qual diretório ele está salvo.

  * Go to the Environment variables in Windows, select the variable "PATH" and click edit. Adicione o diretório onde você encontrou a sua instalação do Git.

  * Salve e feche.

  * Reinicie o Android Studio.

(troubleshooting-android-studio-check-for-uncommitted-changes)=
#### Passo 2: Verificar se há alterações não confirmadas.

  * No Android Studio, abra a aba 'Commit' (1) no lado esquerdo. ![Aba Commit: alterações não confirmadas](../images/studioTroubleshooting/04_CommitTabWithChanges.png)
  * Você pode ver "Changes" (chamado "Default changeset" em versões mais antigas do Android Studio) (2) ou "Unversioned Files" (3):

    * Em "Changes", você provavelmente atualizou o 'Gradle' ou alterou o conteúdo de algum arquivo por engano.

    * Clique com o botão direito em "Changes" e selecione "Rollback…" (1)

      ![Aba Commit: desfazer as alterações (Rollback)](../images/studioTroubleshooting/05_CommitTabRollback.png)

    * Os arquivos são baixados de novo do servidor Git. Se não houver outras alterações na aba Commit, vá para o [Passo 3](#gradle-resync).

  * Se você vir "Unversioned Files", talvez tenha guardado arquivos no diretório do código-fonte por engano. Talvez sejam arquivos importantes, como o arquivo da sua keystore, que devem ser movidos para outro lugar. Se você não sabe que arquivos são esses e não os criou, pode apagá-los.

    * Use o explorador de arquivos normal do seu computador para mover (ou recortar e colar) esse arquivo para um lugar seguro.

    * Volte ao Android Studio e clique no botão Refresh (4) na aba Commit para ter certeza de que o arquivo não está mais no diretório do **AAPS**.

      Se não houver outras alterações na aba Commit, vá para o [Passo 3](#gradle-resync).


#### Passo 3: Sincronizar o Gradle (de novo)

Siga as instruções em [Gradle Resync](#gradle-resync).

### Git Pull Failed - Please tell me who you are

Se você vir esta mensagem, o Git precisa que você se identifique.

![Identificação no Git](../images/studioTroubleshooting/164_Git_Identify.png)

Abra o terminal e digite os dois comandos a seguir, um depois do outro.

```
git config --global user.name "Your name here"
git config --global user.email your.email@here.com
```

O seu nome precisa ser escrito entre aspas.

![Correção da identificação no Git](../images/studioTroubleshooting/164_Git_Identify2.png)

(troubleshooting_androidstudio-android-gradle-plugin-requires-java-11-to-run)=

(incompatible-gradle-jvm)=
### Incompatible Gradle JVM

![Incompatible Gradle JVM](../images/studioTroubleshooting/160_InkompatibelAndroidGradleJVM.png)

```
Your build is currently configured to use incompatible Java 21.0.3 and Gradle 8.2.
Cannot sync the project.

We recommend upgrading to Gradle version 8.9.

The minimum compatible Gradle version is 8.5.

The maximum compatible Gradle JVM version is 19.
```

Ou:

```
Cause: error: invalid source release: 21
```

If you experience the above error message, you need to download a correct JVM version before you can try to rebuild:

1.  Verifique na [tabela de requisitos](#Building-APK-recommended-specification-of-computer-for-building-apk-file) qual versão da JVM você precisa para a versão do **AAPS** que está compilando, e anote-a.

2. Abra a visualização Gradle clicando no elefante (1) no lado direito do Android Studio, abra as configurações (2) e selecione **Gradle Settings** (3):

![Abrir Gradle Settings](../images/studioTroubleshooting/161_GradleSettings.png)

3.  No campo **Gradle JDK**, verifique se a versão certa está selecionada (1). Se não estiver, clique no campo e veja se ela já está disponível na lista. O exemplo abaixo mostra que a JVM 21 aparece como “jbr-21”. Se você encontrá-la, basta selecioná-la e pronto. Se não estiver disponível, selecione **Download JDK** (2).


![Selecionar Download JDK](../images/studioTroubleshooting/162_DownloadJDK.png)

4. Em Version (1), selecione o JDK necessário para a sua versão do **AAPS** (o que você anotou quando verificou a tabela de requisitos). Em Vendor (2), selecione qualquer fornecedor. Location (3): não altere. Clique em **Download** (4).

![Selecionar o JDK 17](../images/studioTroubleshooting/163_JDKSelection.png)

5.  Feche o diálogo **Settings** com **OK**.
6. Agora você precisa reiniciar o Gradle Sync. Siga as instruções em [Gradle Resync](#gradle-resync).

(incompatible-version-of-android-gradle-plugin)=
### Versão incompatível do Android Gradle plugin

  Se você receber a seguinte mensagem de erro

`The project is using an incompatible version (AGP x.x.x) of the Android Gradle plugin. Latest supported version is AGP x.x.x`

  ![Versão incompatível do Android Gradle plugin](../images/studioTroubleshooting/15_InkompatibelAndroidGradlePlugin.png)

  Você está usando uma versão desatualizada do Android Studio. No menu, vá para Help > Check for updates e instale todas as atualizações encontradas do Android Studio e dos plugins dele.

(troubleshooting_androidstudio-could-not-resolve-no-cached-version)=
### Could not resolve/No cached version

  Você pode receber esta mensagem de erro:

![Could not resolve... No cached version](../images/studioTroubleshooting/08_NoCachedVersion.png)

  * No lado direito, abra a aba Gradle (1).

    Verifique se o botão mostrado em (2) *NÃO* está selecionado.

    ![Modo offline do Gradle](../images/studioTroubleshooting/10_GradleOfflineMode.png)

  * Agora você precisa iniciar um [Gradle Resync](#gradle-resync)

(troubleshooting_androidstudio-unable-to-start-daemon-process)=
### Unable to start daemon process

  Se você vir uma mensagem de erro como a abaixo, provavelmente está usando um sistema Windows 10 de 32 bits. Isso não é compatível com o Android Studio 3.5.1 e mais recentes e, infelizmente, os desenvolvedores do **AAPS** não podem fazer nada sobre isso!

  Há informações na internet sobre como saber se o seu sistema operacional é de 32 ou de 64 bits, por exemplo [esta](https://support.microsoft.com/en-us/windows/32-bit-and-64-bit-windows-frequently-asked-questions-c6ca9541-8dce-4d48-0415-94a3faa2e13d).

  ![Captura de tela: Unable to start daemon process](../images/AndroidStudioWin10_32bitError.png)

(gradle-resync)=
### Gradle Resync

  Se você ainda vê a mensagem de que o gradle sync falhou, agora selecione o link **Try again** (1). ![Mensagem de falha do Gradle Sync](../images/studioTroubleshooting/01_GradleSyncFailed.png)


  Se você não vê mais a mensagem, ainda pode iniciar isso manualmente:

  * Abra a aba Gradle (1) na borda direita do Android Studio.

    ![Gradle Reload](../images/studioTroubleshooting/06_GradleResyncManually.png)

  * Clique com o botão direito em AAPS (2)

  * Clique em "Reload Gradle Project" (3)

## Generate Signed APK gerado com sucesso com 0 build variants

Quando você gera o apk assinado, pode receber a notificação de que a geração deu certo, mas que foram geradas '0 build variants':

![APK gerado com 0 build variants](../images/studioTroubleshooting/14_BuildWith0Variants.png)

Este é um aviso falso. Verifique o diretório que você selecionou como "Destination folder" na geração (passo [Gerar APK assinado](#Building-APK-generate-signed-apk)) e você vai encontrar o apk gerado lá!


## App criado com avisos do compilador/kotlin

Se a sua compilação terminou com sucesso, mas você recebeu avisos do compilador ou do kotlin (indicados por um ponto de exclamação amarelo ou azul), você pode simplesmente ignorar esses avisos.

 ![Gradle terminou com avisos](../images/studioTroubleshooting/13_BuildWithWarnings.png)

O seu apk foi compilado com sucesso e pode ser transferido para o seu telefone!


## O AAPS não recebe dados do CGM

* Se você usa o app Dexcom G6 modificado (patched): este app está desatualizado. Use o app [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) no lugar dele.

* Se você usa o xDrip: identifique o receptor como descrito na [página de configurações do xDrip](#xdrip-identify-receiver).


## Apk não instalado

![App do telefone não instalado](../images/Update_AppNotInstalled.png)

* Verifique se você transferiu o arquivo “app-full-release.apk” para o seu telefone.
* Este erro normalmente significa que o novo apk foi assinado com uma keystore diferente da do **AAPS** instalado. Se você ainda tem a sua keystore anterior, selecione-a e compile de novo. Caso contrário, veja [Reinstalar o AAPS com uma nova keystore](#reinstall-aaps).
* Se aparecer "App not installed" (App não instalado) no seu telefone, siga estes passos:

1. [Exportar configurações](../Maintenance/ExportImportSettings.md) (na versão do AAPS que já está instalada no seu telefone)
2. Desinstale o **AAPS** do seu telefone.
3. Ative o modo avião e desligue o Bluetooth.
4. Instale a nova versão (“app-full-release.apk”)
5. [Importar configurações](../Maintenance/ExportImportSettings.md)
6. Ligue o Bluetooth de novo e desative o modo avião

## Apk instalado, mas com a versão antiga

If you built the app successfully, transferred it to your phone and installed it successfully but the version number stays the same then you might have forgotten to [update your local copy](#Update-to-new-version-update-your-local-copy)

## Nenhuma das soluções acima funcionou

Se nenhuma das dicas acima ajudou, você pode compilar o apk do zero:

1. [Exportar configurações](../Maintenance/ExportImportSettings.md) (na versão do AAPS que já está instalada no seu telefone)

2. Tenha em mãos a senha da chave (key password) e a senha da keystore (key store password).

    Ou simplesmente use uma nova keystore.

3. Compile o apk do zero, como descrito [aqui](#Building-APK-download-AAPS-code).

4. Depois de compilar o apk com sucesso, apague o apk que está no seu telefone, transfira o novo apk para o telefone e instale-o.
5. [Importar configurações](../Maintenance/ExportImportSettings.md) de novo para restaurar os seus objetivos e configurações.
6. Verifique as opções de otimização de bateria e desative-as de novo.

## Pior cenário

Se o que foi descrito acima não resolver o seu problema de compilação, você pode tentar desinstalar o Android Studio completamente e compilar de novo do zero.  Alguns usuários descobriram que isso pode resolver o problema de compilação.  Ao apagar o Android Studio, não apague as configurações de usuário do Android e **desinstale todos os arquivos ligados ao Android Studio.** Se você não remover completamente o Android Studio com todos os arquivos ocultos, a desinstalação pode causar novos problemas em vez de resolver os que você já tem. Manuais para a desinstalação completa podem ser encontrados na internet, por exemplo

[https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10](https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10).

Instale o Android Studio do zero, como descrito [aqui](#Building-APK-install-android-studio).
