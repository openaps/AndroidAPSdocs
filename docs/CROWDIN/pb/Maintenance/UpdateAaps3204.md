# Atualizando para o AAPS 3.2.0.4

(update-aaps-3204)=

## Compile você mesmo em vez de baixar

**O app AAPS (um arquivo apk) não está disponível para download, por causa das regras sobre dispositivos médicos. É legal compilar o app para uso próprio, mas você não deve dar uma cópia para outras pessoas!**

Veja a página [FAQ para loopers](../UsefulLinks/FAQ.md) para mais detalhes.

## Especificações de computador e software para compilar o AAPS 3.2.0.4

* Pode ser necessária uma versão específica do **[Android Studio](https://developer.android.com/studio/)** para compilar o apk.

| Versão AAPS             | Versão<br/>preferida do<br/>Android Studio | Versão<br/>alternativa do<br/>Android Studio | Gradle | JVM |
| ----------------------- | ------------------------------------------------------ | -------------------------------------------------------- | ------ |:--- |
| [3.2.0.4](#version3204) | Hedgehog (2023.1.1)                                    | até Meerkat                                              | 8.2    | 17  |

A "versão preferida" já vem com a versão correta da JVM. A versão preferida é também a versão mínima que você pode usar para compilar o **AAPS**. Você **NÃO** conseguirá compilar com uma versão mais antiga que a "preferida". Se você usar outra versão, poderá ter problemas com a versão da JVM. Veja a página [Resolução de problemas do Android Studio](#incompatible-gradle-jvm) para ajudar a resolver esses problemas. Se a sua versão atual do Android Studio não estiver na tabela, você precisa atualizá-la primeiro.

A versão do Gradle está ligada ao código-fonte. Você sempre terá a versão correta do Gradle ao baixar / atualizar o código-fonte. Ela é citada aqui apenas como referência, você não precisa fazer nada.

* [Sistemas Windows de 32 bits](#troubleshooting_androidstudio-unable-to-start-daemon-process) não são compatíveis com o Android Studio. Lembre-se de que **CPU de 64 bits e sistema operacional de 64 bits são condições obrigatórias.** Se o seu sistema NÃO atende a essa condição, você precisa trocar o hardware ou software afetado, ou o sistema inteiro.

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
    <td class="tg-baqh" colspan="3"><p align="center">Mínimo 1280 x 800 <br></td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Internet</th>
    <td class="tg-baqh" colspan="3"><p align="center">Broadband</td>
  </tr>
</tbody>
</table>

**É altamente recomendado (não obrigatório) usar SSD (Solid State Disk) em vez de HDD (Hard Disk Drive), porque a compilação do arquivo apk do AAPS leva menos tempo.**  Você ainda pode usar um HDD para compilar o arquivo apk do **AAPS**. If you do, the building process may take a long time to complete, but once it has started, you can leave it running unattended.

## Ajuda e suporte durante a compilação da versão 3.2.0.4

Se você tiver dificuldades ao compilar o app **AAPS**, existe uma seção dedicada de [**resolução de problemas do Android Studio**](https://androidaps.readthedocs.io/en/3.2/GettingHelp/TroubleshootingAndroidStudio.html). Consulte essa seção primeiro.

Se você acha que algo nas instruções de compilação está errado, faltando ou confuso, ou se ainda tiver dificuldades, entre em contato com o grupo de usuários do **AAPS** no [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) ou no [Discord](https://discord.gg/4fQUWHZ4Mw). Se você quiser mudar algo por conta própria (atualizar capturas de tela _etc._), envie um [pull request (PR)](../SupportingAaps/HowToEditTheDocs.md).

```{note}
Esta página mostra imagens de exemplo tanto para a interface **New** (nova) quanto para a antiga (**Classic**) do Android Studio.
```

## Visão geral da atualização da 3.2.0.x para a 3.2.0.4

```{contents} Steps for updating to 3.2.0.4
:depth: 1
:local: true
```

### Exporte suas configurações atuais

Exporte as configurações da versão atual do **AAPS** no seu telefone. Talvez você não precise delas, mas é melhor prevenir do que remediar.

Veja a página [Criação e restauração de backups](ExportImportSettings.md) se você não lembrar como fazer isso.

### Atualize sua cópia local do AAPS

* Abra seu projeto AAPS existente no Android Studio. Talvez você precise selecionar o seu projeto. Clique (duas vezes) no projeto AAPS.

![Android Studio - Select Project (selecionar o projeto)](../images/update/01_ProjectSelection.png)

<br>

![Android Studio - Select Project (selecionar o projeto)](https://androidaps.readthedocs.io/en/3.1/_images/01_ProjectSelection.png)

* Na barra de menus do Android Studio, selecione Git -> Fetch

![Menu do Android Studio - Git - Fetch](../images/update/02_GitFetch.png)

<br>

![Menu do Android Studio - Git - Fetch](https://androidaps.readthedocs.io/en/3.1/_images/02_GitFetch.png)

* Você verá uma mensagem no canto inferior direito dizendo que o Fetch foi concluído com sucesso.

![Menu do Android Studio - Git - Fetch concluído com sucesso](../images/update/03_GitFetchSuccessful.png)

<br>

![Menu do Android Studio - Git - Fetch concluído com sucesso](https://androidaps.readthedocs.io/en/3.1/_images/03_GitFetchSuccessful.png)

* Na barra de menus, selecione agora Git -> Pull

![Menu do Android Studio - Git - Pull](../images/update/04_GitPull.png)

<br>

![Menu do Android Studio - Git - Pull](https://androidaps.readthedocs.io/en/3.1/_images/04_GitPull.png)

* Deixe todas as opções como estão (origin/master) e selecione Pull

![Android Studio - Git - diálogo Pull](../images/update/05_GitPullOptions.png)

<br>

![Android Studio - Git - diálogo Pull](https://androidaps.readthedocs.io/en/3.1/_images/05_GitPullOptions.png)

* Aguarde enquanto o download está em andamento. Você verá essa informação na barra inferior. Quando terminar, você verá uma mensagem de sucesso.

  ```{note}
  Os arquivos atualizados podem ser diferentes! Isso não indica um problema.
  ```


![Android Studio - Pull concluído com sucesso](../images/update/06_GitPullSuccess.png)

<br>

![Android Studio - Pull concluído com sucesso](https://androidaps.readthedocs.io/en/3.1/_images/06_GitPullSuccess.png)

* O Gradle Sync será executado para baixar algumas dependências. Aguarde até terminar.

![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

<br>

![Android Studio - Gradle Sync](https://androidaps.readthedocs.io/en/3.1/_images/40_BackgroundTasks.png)

### Selecione a versão 17 da JVM

- Abra a visualização Gradle clicando no elefante (1) no lado direito do Android Studio, abra as configurações (2) e selecione **Gradle Settings** (3):

![Abrir Gradle Settings](../images/studioTroubleshooting/161_GradleSettings.png)

<br>

![Abrir Gradle Settings](../images/studioTroubleshooting/09_GradleSettings.png)

- No campo **Gradle JDK** (1), verifique se a versão correta **jbr-17** está selecionada. Se não estiver, clique no campo e veja se ela já está disponível na lista. Se ela não estiver na lista (a captura de tela abaixo mostra um computador onde só a **jbr-21** está disponível), selecione **Download JDK...** (2).

![Selecionar Download JDK](../images/studioTroubleshooting/162_DownloadJDK.png)



- Em Version (1), selecione **17**. Em Vendor (2), selecione JetBrains Runtime ou qualquer fornecedor. Location (3): não altere.

![Selecionar o JDK 17](https://androidaps.readthedocs.io/en/3.2/_images/163_JDKSelection.png)

- Feche o diálogo **Settings** com **OK**.

### Selecione a branch AAPS 3.2.0.4

- No canto inferior esquerdo, selecione o símbolo do Git, clique com o botão direito em 3.2.0.4 e em Checkout.

![Selecionar Download JDK](../images/studioTroubleshooting/17_Checkout.png)

<br>

![Selecionar Download JDK](../images/studioTroubleshooting/17_CheckoutOld.png)

### Sincronize o projeto com o Gradle

```{admonition} WARNING!
:class: warning
**Nunca atualize o Gradle.** Sempre sincronize-o com o projeto.
```

Use o ícone do elefante e Sync Project with Gradle Files (ou siga [estes passos](#gradle-resync)) para a interface nova.

![Sync Project with Gradle Files](../images/studioTroubleshooting/06_GradleResyncElephant.png)

Ou ([estes passos](https://androidaps.readthedocs.io/en/3.2/GettingHelp/TroubleshootingAndroidStudio.html#gradle-resync)) para a interface clássica.

![Sync Project with Gradle Files](../images/studioTroubleshooting/06_GradleResyncElephantOld.png)

### Compile o APK 3.2.0.4 assinado

Seu código-fonte agora é a versão lançada atual, e todos os pré-requisitos foram verificados. É hora de compilar o apk assinado, como descrito na [seção Gerar APK assinado](#Building-APK-generate-signed-apk).

### Transfira e instale o APK 3.2.0.4

Você precisa transferir o apk para o seu telefone para poder instalá-lo.

```{note}
Se você compilou com a mesma keystore de antes no Android Studio, não precisa remover o app existente do seu telefone. Ao instalar o apk, siga as instruções para instalar as atualizações.
Em outros casos, por exemplo, se você criou uma nova keystore no Android Studio para o seu apk assinado, você precisa desinstalar o app antigo antes de instalar o apk. **Não se esqueça de exportar suas configurações!**
```

Veja as instruções para [transferir e instalar o AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md)

### Verifique a versão 3.2.0.4 do AAPS no telefone

Depois de instalar o novo apk, você pode verificar a versão do AAPS no seu telefone tocando no menu de três pontos no canto superior direito e depois em Sobre. Você deve ver a versão atual.

