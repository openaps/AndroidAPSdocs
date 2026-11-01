# Atualizar com o Android Studio

## Compilar em vez de transferir

O **AAPS** não está disponível para transferência, devido às regras sobre dispositivos médicos. É legal compilar a app para uso próprio, mas não pode dar uma cópia a outras pessoas! Veja a [página FAQ](../UsefulLinks/FAQ.md) para mais detalhes.

```{note}
Se quiser compilar o **AAPS** num computador novo: copie o ficheiro de cópia de segurança da sua keystore para o computador novo. Depois siga o [procedimento da primeira compilação do **AAPS**](../SettingUpAaps/BuildingAaps.md) em vez deste guia. A única diferença é que, em vez de criar uma nova keystore, pode selecionar a que copiou para o computador novo.
```

## Visão geral da atualização para uma nova versão do AAPS com o Android Studio

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

Se tiver problemas, veja a página separada [Resolução de problemas do Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

### Exporte as suas definições

Exporte as suas definições a partir da versão do **AAPS** que já tem no telefone. Pode não precisar delas, mas é melhor prevenir do que remediar.

Veja a página [Exportar e importar definições](ExportImportSettings.md) se não se lembrar de como se faz.

### Verifique a sua versão do Android Studio

A versão mínima necessária está descrita nas [instruções de compilação](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Se a sua versão for mais antiga, [atualize primeiro o Android Studio](#Building-APK-install-android-studio)!

(Update-to-new-version-update-your-local-copy)=
### Atualize a sua cópia local

* Abra o seu projeto AAPS existente no Android Studio. Pode ter de selecionar o seu projeto. Clique (duas vezes) no projeto AAPS.

  ![Android Studio - Selecionar o projeto](../images/update/01_ProjectSelection.png)

* Na barra de menus do Android Studio, selecione Git -> Fetch

   ![Menu do Android Studio - Git - Fetch](../images/update/02_GitFetch.png)

* Vai ver uma mensagem no canto inferior direito a dizer que o Fetch foi concluído com sucesso.

   ![Menu do Android Studio - Git - Fetch concluído](../images/update/03_GitFetchSuccessful.png)

* Na barra de menus, selecione agora Git -> Pull

   ![Menu do Android Studio - Git - Pull](../images/update/04_GitPull.png)

* Deixe todas as opções como estão (origin/master) e selecione Pull

   ![Android Studio - Git - janela Pull](../images/update/05_GitPullOptions.png)

* Aguarde enquanto a transferência decorre. Vai ver esta informação na barra inferior. Quando terminar, vai ver uma mensagem de sucesso.

  ```{note}
  Os ficheiros atualizados podem ser diferentes! Isto não indica um problema.
  ```

   ![Android Studio - Pull concluído](../images/update/06_GitPullSuccess.png)

* A Gradle Sync vai ser executada para transferir algumas dependências. Aguarde até terminar.

  ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

### Verifique a versão da JVM

Esta verificação é especialmente indicada se já compilou uma versão anterior do **AAPS** no mesmo computador.

Veja nas [instruções de compilação](#Building-APK-recommended-specification-of-computer-for-building-apk-file) a versão da JVM necessária para a versão do **AAPS** que está a compilar agora. Depois siga os passos descritos em [Incompatible Gradle JVM](#incompatible-gradle-jvm) para confirmar que usa a versão correta.

(Update-to-new-version-build-the-signed-apk)=
### Compile o APK assinado

O seu código-fonte é agora a versão atual publicada, e todos os requisitos foram verificados. Está na altura de compilar o apk assinado, como descrito na [secção Gerar o APK assinado](#Building-APK-generate-signed-apk).

(Update-to-new-version-transfer-and-install)=

### Transfira e instale o apk
Tem de transferir o apk para o seu telefone para o poder instalar.

```{note}
Se compilou com a mesma keystore existente no Android Studio, não precisa de remover a app existente do seu telefone. Quando instalar o apk, siga as instruções no ecrã para instalar a atualização.
Noutros casos, por exemplo se criou uma nova keystore no Android Studio para o seu apk assinado, tem de apagar a app antiga antes de instalar o apk. **Não se esqueça de exportar as suas definições!**
```

Veja as instruções para [transferir e instalar o AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md). Onde a [verificação de programador do Android](#android-developer-verification) da Google estiver em vigor (a partir de setembro de 2026, conforme o seu país), instale com [ADB](#android-developer-verification-adb) em vez de tocar no ficheiro APK.

Continue [aqui](#Update-to-new-version-check-aaps-version-on-phone).

(update-computer-build-troubleshooting)=

## Resolução de Problemas

Se algo correr mal, não entre em pânico.

Respire fundo!

Depois veja na página separada [Resolução de problemas do Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) se o seu problema já está documentado!

Se precisar de mais ajuda, contacte outros utilizadores do **AAPS** no [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) ou no [Discord](https://discord.gg/4fQUWHZ4Mw).