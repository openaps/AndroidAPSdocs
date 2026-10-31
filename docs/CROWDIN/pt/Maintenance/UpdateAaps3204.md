# Atualizar para o AAPS 3.2.0.4

(update-aaps-3204)=

## Compilar em vez de transferir

**A app AAPS (um ficheiro apk) não está disponível para transferência, por causa das regras sobre dispositivos médicos. É legal compilar a app para uso próprio, mas não pode dar uma cópia a outras pessoas!**

Veja a [página FAQ](../UsefulLinks/FAQ.md) para mais detalhes.

## Especificações do computador e do software para compilar o AAPS 3.2.0.4

* Pode ser necessária uma versão específica do **[Android Studio](https://developer.android.com/studio/)** para compilar o apk.

| Versão AAPS             | Versão<br/>preferida do<br/>Android Studio | Versão<br/>alternativa do<br/>Android Studio | Gradle | JVM |
| ----------------------- | ------------------------------------------------------ | -------------------------------------------------------- | ------ |:--- |
| [3.2.0.4](#version3200) | Hedgehog (2023.1.1)                                    | até Meerkat                                              | 8.2    | 17  |

A «versão preferida» já inclui a versão adequada da JVM. A versão preferida é também a versão mínima que pode usar para compilar o **AAPS**. **NÃO** vai conseguir compilar numa versão mais antiga do que a «preferida». Se usar outra versão, pode ter problemas relacionados com a versão da JVM. Veja a página [Resolução de problemas do Android Studio](#incompatible-gradle-jvm) para ajudar a resolver estes problemas. Se a sua versão atual do Android Studio não está na tabela, tem de a atualizar primeiro.

A versão do Gradle está ligada ao código-fonte. Recebe sempre a versão correta do Gradle quando transfere / atualiza o código-fonte. Só é indicada aqui como referência. Não precisa de fazer nada com ela.

* Os [sistemas Windows de 32 bits](#troubleshooting_androidstudio-unable-to-start-daemon-process) não são suportados pelo Android Studio. Tenha em conta que **um CPU de 64 bits e um sistema operativo de 64 bits são condições obrigatórias.** Se o seu sistema NÃO cumpre esta condição, tem de mudar o hardware ou o software em causa, ou o sistema inteiro.

<table class="tg">
<tbody>
  <tr>
    <th class="tg-baqh">OS (Only 64 bit)</th>
    <td class="tg-baqh">Windows 8 or higher</td>
    <td class="tg-baqh">Mac OS 10.14 or higher</td>
    <td class="tg-baqh">Any Linux supports Gnome, KDE, or Unity DE;&nbsp;&nbsp;GNU C Library 2.31 or later</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">CPU (Only 64 bit)</th>
    <td class="tg-baqh">x86_64 CPU architecture; 2nd generation Intel Core or newer, or AMD CPU with support for a <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-windows" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Windows Hypervisor</span></a></td>
    <td class="tg-baqh">ARM-based chips, or 2nd generation Intel Core or newer with support for <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-mac" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Hypervisor.Framework</span></a></td>
    <td class="tg-baqh">x86_64 CPU architecture; 2nd generation Intel Core or newer, or AMD processor with support for AMD Virtualization (AMD-V) and SSSE3</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">RAM</th>
    <td class="tg-baqh" colspan="3"><p align="center">8GB or more</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Disk</th>
    <td class="tg-baqh" colspan="3"><p align="center">At least 30GB free space. SSD is recommended.</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Resolution</th>
    <td class="tg-baqh" colspan="3"><p align="center">1280 x 800 Mínimo <br></td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Internet</th>
    <td class="tg-baqh" colspan="3"><p align="center">Broadband</td>
  </tr>
</tbody>
</table>

**Recomenda-se muito (não é obrigatório) usar um SSD (Solid State Disk) em vez de um HDD (Hard Disk Drive), porque a compilação do ficheiro apk do AAPS demora menos tempo.**  Pode na mesma usar um HDD para compilar o ficheiro apk do **AAPS**. If you do, the building process may take a long time to complete, but once it has started, you can leave it running unattended.

## Ajuda e suporte durante a compilação da versão 3.2.0.4

Se tiver dificuldades ao compilar a app **AAPS**, existe uma secção dedicada de [**resolução de problemas do Android Studio**](https://androidaps.readthedocs.io/en/3.2/GettingHelp/TroubleshootingAndroidStudio.html). Consulte-a primeiro.

Se achar que algo nas instruções de compilação está errado, falta ou não é claro, ou se ainda tiver dificuldades, contacte o grupo de utilizadores do **AAPS** no [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) ou no [Discord](https://discord.gg/4fQUWHZ4Mw). Se quiser mudar algo (atualizar capturas de ecrã _etc._), envie um [pull request (PR)](../SupportingAaps/HowToEditTheDocs.md).

```{note}
Esta página mostra imagens de exemplo para a nova interface (**New**) e para a antiga (**Classic**) do Android Studio.
```

## Visão geral da atualização da 3.2.0.x para a 3.2.0.4

```{contents} Steps for updating to 3.2.0.4
:depth: 1
:local: true
```

### Exporte as suas definições atuais

Exporte as suas definições a partir da versão do **AAPS** que já tem no telefone. Pode não precisar delas, mas é melhor prevenir do que remediar.

Veja a página [Exportar e importar definições](ExportImportSettings.md) se não se lembrar de como se faz.

### Atualize a sua cópia local do AAPS

* Abra o seu projeto AAPS existente no Android Studio. Pode ter de selecionar o seu projeto. Clique (duas vezes) no projeto AAPS.

![Android Studio - Selecionar o projeto](../images/update/01_ProjectSelection.png)

<br>

![Android Studio - Selecionar o projeto](https://androidaps.readthedocs.io/en/3.1/_images/01_ProjectSelection.png)

* Na barra de menus do Android Studio, selecione Git -> Fetch

![Menu do Android Studio - Git - Fetch](../images/update/02_GitFetch.png)

<br>

![Menu do Android Studio - Git - Fetch](https://androidaps.readthedocs.io/en/3.1/_images/02_GitFetch.png)

* Vai ver uma mensagem no canto inferior direito a dizer que o Fetch foi concluído com sucesso.

![Menu do Android Studio - Git - Fetch concluído](../images/update/03_GitFetchSuccessful.png)

<br>

![Menu do Android Studio - Git - Fetch concluído](https://androidaps.readthedocs.io/en/3.1/_images/03_GitFetchSuccessful.png)

* Na barra de menus, selecione agora Git -> Pull

![Menu do Android Studio - Git - Pull](../images/update/04_GitPull.png)

<br>

![Menu do Android Studio - Git - Pull](https://androidaps.readthedocs.io/en/3.1/_images/04_GitPull.png)

* Deixe todas as opções como estão (origin/master) e selecione Pull

![Android Studio - Git - janela Pull](../images/update/05_GitPullOptions.png)

<br>

![Android Studio - Git - janela Pull](https://androidaps.readthedocs.io/en/3.1/_images/05_GitPullOptions.png)

* Aguarde enquanto a transferência decorre. Vai ver esta informação na barra inferior. Quando terminar, vai ver uma mensagem de sucesso.

  ```{note}
  Os ficheiros atualizados podem ser diferentes! Isto não indica um problema.
  ```


![Android Studio - Pull concluído](../images/update/06_GitPullSuccess.png)

<br>

![Android Studio - Pull concluído](https://androidaps.readthedocs.io/en/3.1/_images/06_GitPullSuccess.png)

* A Gradle Sync vai ser executada para transferir algumas dependências. Aguarde até terminar.

![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

<br>

![Android Studio - Gradle Sync](https://androidaps.readthedocs.io/en/3.1/_images/40_BackgroundTasks.png)

### Selecione a versão 17 da JVM

- Abra a vista Gradle clicando no elefante (1) no lado direito do Android Studio, abra as definições (2) e selecione **Gradle Settings** (3):

![Abrir as Gradle Settings](../images/studioTroubleshooting/161_GradleSettings.png)

<br>

![Abrir as Gradle Settings](../images/studioTroubleshooting/09_GradleSettings.png)

- No campo **Gradle JDK** (1), verifique se a versão adequada, **jbr-17**, está selecionada. Se não estiver, clique no campo e veja se ela já está na lista. Se não estiver na lista (a captura de ecrã abaixo mostra um computador onde só existe a **jbr-21**), selecione **Download JDK...** (2).

![Selecionar Download JDK](../images/studioTroubleshooting/162_DownloadJDK.png)



- Em Version (1), selecione **17**. Em Vendor (2), selecione JetBrains Runtime ou qualquer fornecedor. Location (3): não altere.

![Selecionar o JDK 17](https://androidaps.readthedocs.io/en/3.2/_images/163_JDKSelection.png)

- Feche a janela **Settings** com **OK**.

### Selecione o branch AAPS 3.2.0.4

- No canto inferior esquerdo, selecione o símbolo do Git, clique com o botão direito em 3.2.0.4 e depois em Checkout.

![Selecionar Download JDK](../images/studioTroubleshooting/17_Checkout.png)

<br>

![Selecionar Download JDK](../images/studioTroubleshooting/17_CheckoutOld.png)

### Sincronize o projeto com o Gradle

```{admonition} WARNING!
:class: warning
**Nunca atualize o Gradle.** Sincronize-o sempre com o projeto.
```

Na nova interface, use o ícone do elefante e Sync Project with Gradle Files (ou siga [isto](#gradle-resync)).

![Sync Project with Gradle Files](../images/studioTroubleshooting/06_GradleResyncElephant.png)

Ou ([isto](https://androidaps.readthedocs.io/en/3.2/GettingHelp/TroubleshootingAndroidStudio.html#gradle-resync)) na interface clássica.

![Sync Project with Gradle Files](../images/studioTroubleshooting/06_GradleResyncElephantOld.png)

### Compile o APK 3.2.0.4 assinado

O seu código-fonte é agora a versão atual publicada, e todos os requisitos foram verificados. Está na altura de compilar o apk assinado, como descrito na [secção Gerar o APK assinado](#Building-APK-generate-signed-apk).

### Transfira e instale o APK 3.2.0.4

Tem de transferir o apk para o seu telefone para o poder instalar.

```{note}
Se compilou com a mesma keystore existente no Android Studio, não precisa de remover a app existente do seu telefone. Quando instalar o apk, siga as instruções no ecrã para instalar a atualização.
Noutros casos, por exemplo se criou uma nova keystore no Android Studio para o seu apk assinado, tem de apagar a app antiga antes de instalar o apk. **Não se esqueça de exportar as suas definições!**
```

Veja as instruções para [transferir e instalar o AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md)

### Verifique a versão 3.2.0.4 do AAPS no telefone

Depois de instalar o novo apk, pode ver a versão do AAPS no seu telefone: toque no menu de três pontos no canto superior direito e depois em Sobre. Deve ver a versão atual.

