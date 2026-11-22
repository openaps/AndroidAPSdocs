<!-- Android Studio Build, FKA Computer Build. Preserve filenames to avoid breaking URLs. -->

# Compilação com o Android Studio

Este é o método tradicional para compilar a sua app AAPS.

Pode compilar a app sem computador com o método [Compilação no navegador](./BrowserBuild.md).

## Compilar em vez de transferir

**A app AAPS (um ficheiro apk) não está disponível para transferência, por causa das regras sobre dispositivos médicos. É legal compilar a app para uso próprio, mas não pode dar uma cópia a outras pessoas!**

Veja a [página FAQ](../UsefulLinks/FAQ.md) para mais detalhes.

---

(Building-APK-recommended-specification-of-computer-for-building-apk-file)=
## Especificações do computador e do software para compilar o AAPS

* Pode ser necessária uma versão específica do **[Android Studio](https://developer.android.com/studio/)** para compilar o apk. Veja a tabela abaixo:

| Versão AAPS             | Versão<br/>preferida do<br/>Android Studio | Versão<br/>alternativa do<br/>Android Studio | Gradle | JVM |
| ----------------------- | ------------------------------------------------------ | -------------------------------------------------------- | ------ |:--- |
| 2.6.2                   | 3.6.1                                                  |                                                          | 5.6.4  | 11  |
| 2.8.2.1                 | 4.1.1                                                  |                                                          | 6.1.1  | 13  |
| [3.1.0.3](#version3100) | 2020.3.1                                               | testado até ao Quail 4                                   | 7.3.3  | 17  |
| [3.2.0.4](#version3204) | Hedgehog (2023.1.1)                                    | testado até ao Quail 4                                   | 8.2    | 17  |
| [3.3.1.3](#version3300) | Ladybug Feature Drop (2024.2.2)                        | testado até ao Quail 4                                   | 8.10   | 21  |
| [3.3.2](#version3300)   | Meerkat (2024.3.1)                                     | testado até ao Quail 4                                   | 8.11.1 | 21  |
| [3.3.2.1](#version3321) | Narwhal (2025.1.2)                                     | testado até ao Quail 4                                   | 8.13   | 21  |
| [3.4.2.6](#version3426) | Panda 2 (2025.3.2)                                     | testado até ao Quail 4                                   | 9      | 21  |
| [4.0.0](#version400)    | Rabbit 2 (2026.2.2)                                    | Mais recente                                             | 9.8    | 21  |

A «versão preferida» já inclui a versão adequada da JVM. A versão preferida é também a versão mínima que pode usar para compilar o **AAPS**. **NÃO** vai conseguir compilar numa versão mais antiga do que a «preferida». Se usar outra versão, pode ter problemas relacionados com a versão da JVM. Veja a página [Resolução de problemas do Android Studio](#troubleshooting_androidstudio-uncommitted-changes) para o ajudar a resolver estes problemas. Se a sua versão atual do Android Studio não está na tabela, tem de a atualizar primeiro.

A versão do Gradle está ligada ao código-fonte. Recebe sempre a versão correta do Gradle quando transfere / atualiza o código-fonte. Só é indicada aqui como referência. Não precisa de fazer nada com ela.

* Os [sistemas Windows de 32 bits](#troubleshooting_androidstudio-unable-to-start-daemon-process) não são suportados pelo Android Studio. Tenha em conta que **um CPU de 64 bits e um sistema operativo de 64 bits são condições obrigatórias.** Se o seu sistema NÃO cumpre esta condição, tem de mudar o hardware ou o software em causa, ou o sistema inteiro.

<table class="tg">
<tbody>
  <tr>
    <th class="tg-baqh">OS (Only 64 bit)</th>
    <td class="tg-baqh">Windows 10 ou mais recente</td>
    <td class="tg-baqh">macOS 12 ou mais recente</td>
    <td class="tg-baqh">Qualquer distribuição Linux que suporte Gnome, KDE ou Unity DE;&nbsp;&nbsp;GNU C Library (glibc) 2.31 ou mais recente</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">CPU (Only 64 bit)</th>
    <td class="tg-baqh">CPU x86_64 de 2017 ou mais recente (Intel Core i5 de 8.ª geração, AMD Ryzen ou mais recente) com <a href="https://developer.android.com/studio/install" target="_blank" rel="noopener noreferrer">suporte de virtualização</a> (Intel VT-x ou AMD-V) ativado na BIOS</td>
    <td class="tg-baqh">Apple Silicon (M1 ou mais recente), ou Intel Core de 6.ª geração ou mais recente (o suporte para Macs Intel está a ser retirado aos poucos)</td>
    <td class="tg-baqh">CPU x86_64 de 2017 ou mais recente (Intel Core i5 de 8.ª geração, AMD Ryzen ou mais recente) com suporte de virtualização (Intel VT-x ou AMD-V) ativado na BIOS</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">RAM</th>
    <td class="tg-baqh" colspan="3"><p align="center">16 GB ou mais (8 GB é o mínimo absoluto só para o Android Studio; recomendam-se 32 GB)</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Disk</th>
    <td class="tg-baqh" colspan="3"><p align="center">Pelo menos 32 GB de espaço livre. SSD is recommended.</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Resolution</th>
    <td class="tg-baqh" colspan="3"><p align="center">Mínimo 1280 x 800 (recomendado 1920 x 1080)<br></td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Internet</th>
    <td class="tg-baqh" colspan="3"><p align="center">Broadband</td>
  </tr>
</tbody>
</table>

**Recomenda-se muito (não é obrigatório) usar um SSD (Solid State Disk) em vez de um HDD (Hard Disk Drive), porque a compilação do ficheiro apk do AAPS demora menos tempo.**  Pode na mesma usar um HDD para compilar o ficheiro apk do **AAPS**. Se o fizer, a compilação pode demorar muito tempo a terminar, mas depois de começar pode deixá-la a correr sem supervisão.

## Ajuda e apoio durante a compilação

Se tiver dificuldades ao compilar a app **AAPS**, há uma secção própria de [**resolução de problemas do Android Studio**](../GettingHelp/TroubleshootingAndroidStudio.md); consulte-a primeiro.

Se achar que algo nas instruções de compilação está errado, falta ou não é claro, ou se ainda tiver dificuldades, contacte o grupo de utilizadores do **AAPS** no [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) ou no [Discord](https://discord.gg/4fQUWHZ4Mw). Se quiser mudar algo (atualizar capturas de ecrã _etc._), envie um [pull request (PR)](../SupportingAaps/HowToEditTheDocs.md).

## Guia passo a passo para compilar a app AAPS

```{admonition} WARNING
:class: warning
Se já compilou o AAPS antes, não precisa de repetir todos os passos seguintes.
Passe diretamente para o [guia de atualização](../Maintenance/UpdateToNewVersion.md)!
```

```{contents} The overall steps for building the **AAPS** apk file
:depth: 1
:local: true
```

Neste guia encontra capturas de ecrã de _exemplo_ da compilação do ficheiro apk do **AAPS**. Como o **Android Studio** - o programa que usamos para compilar o apk do **AAPS** - é atualizado com frequência, estas capturas de ecrã podem não ser iguais à sua instalação, mas deve conseguir segui-las na mesma.

Como o **Android Studio** corre em Windows, Mac OS X e Linux, também pode haver pequenas diferenças nos passos para as diferentes plataformas.

(install-git-if-you-dont-have-it)=
### Instalar o Git

```{admonition} Why Git? 
:class: dropdown

O Git é conhecido como um «_Sistema de Controlo de Versões_» (VCS, Versioning Control System).\
O Git é um programa que permite acompanhar as alterações no código e colaborar com outras pessoas. Vai usar o Git para fazer uma cópia do código-fonte do **AAPS** do site GitHub para o seu computador. Depois, vai usar o Android Studio no seu computador para compilar a aplicação **AAPS** (apk). 
```

(BuildingAaps-steps-for-installing-git)=
#### Passos para instalar o Git

1.  Confirme que ainda não tem o **Git** instalado. You can do this by typing “git” in the Windows search bar – if you see **“Git bash”** or some other form of Git, it is already installed and you can go straight to [installing Android Studio](#Building-APK-install-android-studio):


![Git_installed](../images/Building-the-App/001_check_git_installed.png)

2. Se não tiver o Git instalado, transfira e instale a versão mais recente para o seu sistema a partir da secção «Download» [**aqui**](https://git-scm.com/downloads). Qualquer versão recente do Git deve funcionar; selecione a versão certa para o seu sistema: Mac, Windows ou Linux.

**Nota para utilizadores de Mac:** a página do Git também o vai guiar para instalar um programa adicional chamado «homebrew», que ajuda na instalação. Se instalar o Git através do homebrew, não é preciso alterar nenhuma preferência.

(Make_a_note_of_Git_path)=

* Durante a instalação, quando lhe for pedido para «select destination location», tome nota de _onde_ o Git está a ser instalado (o «**caminho de instalação**»), porque vai precisar de o verificar no passo seguinte. Será algo parecido com «C:\Program Files\Git\cmd\git.exe»

*  Nos vários passos da instalação do Git, aceite simplesmente todas as opções predefinidas.

*  Depois da instalação, se se esqueceu de tomar nota de onde o Git foi instalado, pode encontrá-lo assim: escreva «git» na barra de pesquisa do PC, clique com o botão direito em «Git bash», selecione «open file location» e passe o rato por cima do ícone «Git bash», que mostra onde está instalado.

* Reinicie o computador antes do passo seguinte.

(Building-APK-install-android-studio)=
### Instalar o Android Studio

- **Tem de estar sempre ligado à internet durante os passos seguintes, porque o Android Studio transfere várias atualizações**

```{admonition} What is Android Studio?
:class: dropdown
O Android Studio é um programa que corre no seu computador. Permite transferir código-fonte da internet (com o Git) e compilar apps para smartphones (e smartwatches). Não pode «estragar» uma versão atual do **AAPS** que esteja a usar em loop num smartphone por compilar uma app nova ou atualizada no seu PC com o Android Studio; são processos totalmente separados. 
```

Uma das coisas mais importantes ao instalar o Android Studio é **ter paciência!** Durante a instalação e a configuração, o Android Studio transfere muitos ficheiros, o que leva tempo.

```{admonition} Different UI
:class: warning
Nota importante: o Android Studio mudou a sua interface nas últimas versões. Este guia mostra os passos com a *nova interface*. As capturas de ecrã foram feitas com o «Ladybug», por isso as versões mais recentes podem ter um aspeto um pouco diferente. Se ainda usa a interface antiga, pode querer mudar primeiro o Android Studio para a nova interface, seguindo [estas instruções](#computerbuild-NewUI).
```

A versão do Android Studio é muito importante. Veja as [instruções acima](#Building-APK-recommended-specification-of-computer-for-building-apk-file) para escolher a versão certa do Android Studio.

Transfira a [versão atual do Android Studio](https://developer.android.com/studio) ou uma versão mais antiga dos [**Archives**](https://developer.android.com/studio/archive) (arquivo) e aceite os acordos de transferência.

![DownloadAndroidStudio](../images/Building-the-App/010_DownloadLadybug.png)

Quando a transferência terminar, abra a aplicação transferida para a instalar no seu computador. Pode ter de aceitar/confirmar alguns avisos do Windows sobre apps transferidas!

Instale o Android Studio clicando em «Next», como mostram as capturas de ecrã seguintes. **Não** precisa de alterar nenhuma definição!

![Welcome_to_Android_Studio_Setup](../images/Building-the-App/011_InstallLadybug.png)

Se quiser poupar espaço no disco rígido, pode desmarcar Android Virtual Device: não é usado para compilar o **AAPS**.

![Choose_components](../images/Building-the-App/012_InstallLadybug.png)

![Configuration_Settings](../images/Building-the-App/013_InstallLadybug.png)

Agora clique em «Install»:

![Choose_start_Menu_Folder](../images/Building-the-App/014_InstallLadybug.png)

Quando terminar, clique em «Next»

![Installation_Complete](../images/Building-the-App/015_InstallLadybug.png)

No último passo, clique em «Finish» para abrir o Android Studio pela primeira vez.

![Completing_Android_Studio_Setup](../images/Building-the-App/016_InstallLadybug.png)

Vai ser perguntado se quer ajudar a melhorar o Android Studio. Escolha a opção que preferir; não faz diferença para os passos seguintes.

![Help_improve_Android_Studio](../images/Building-the-App/020_ImproveAS.png)

A instalação do Android Studio começa com um ecrã de boas-vindas. Clique em «Next».

![Bem-vindo](../images/Building-the-App/022_WelcomeAndroidStudioInstallation.png)

Selecione «Standard» como tipo de instalação.

![Install_Type](../images/Building-the-App/023_DefaultInstallation.png)

Verifique as definições clicando de novo em «Next».

![Verify_Settings](../images/Building-the-App/024_DefaultInstallation.png)

Agora tem de aceitar os acordos de licença. Há duas secções (1 + 3) do lado esquerdo, que tem de selecionar uma após a outra, e em cada uma selecionar «Accept» (2 + 4) do lado direito.

Depois já pode clicar no botão «Finish» (5).

![License_Agreement](../images/Building-the-App/025_LicenseAgreement.png)

Agora vão ser transferidos e instalados alguns pacotes Android. Tenha paciência e espere.

Quando terminar, aparece o ecrã seguinte, onde pode selecionar de novo «Finish».

![Downloading_Components](../images/Building-the-App/026_DownloadFinished.png)

Agora vê o ecrã de boas-vindas do Android Studio.

![Welcome_to_Android_Studio](../images/Building-the-App/031_WelcomeAndroidStudio.png)


(Building-APK-download-AAPS-code)=
### Transferir o código do AAPS

```{admonition} Why can it take a long time to download the AAPS code?
:class: dropdown

Da primeira vez que o **AAPS** é transferido, o Android Studio liga-se pela internet ao site GitHub para transferir o código-fonte do **AAPS**. Isto deve demorar cerca de 1 minuto. 

Depois, o Android Studio usa o **Gradle** (uma ferramenta de desenvolvimento para apps Android) para identificar outros componentes necessários para compilar estes itens no seu computador. 
```

No ecrã de boas-vindas do Android Studio, confirme que «**Projects**» (1) está destacado à esquerda.

Depois clique em «**Clone Repository**» (2) à direita:

![Get_from_VCS](../images/Building-the-App/032_GetVCS.png)

Agora vamos indicar ao Android Studio de onde obter o código:

![Get from Version Control (obter do controlo de versões)](../images/Building-the-App/033_CloneGit.png)

* «Repository URL» deve estar selecionado (por predefinição) à esquerda (1).
* «Git» deve estar selecionado (por predefinição) como controlo de versões (2).
* Agora copie este URL:
    ```
    https://github.com/nightscout/AndroidAPS.git
    ```
    e cole-o na caixa de texto URL (3).

* Confirme que a pasta (predefinida) onde o código clonado vai ser guardado ainda não existe no seu computador (4). Pode mudá-la para outra pasta, mas lembre-se de onde a guardou!
* Agora clique no botão «Clone» (5).

```{admonition} INFORMATION
:class: note
Tome nota da pasta. É onde o seu código-fonte fica guardado!
```

Agora vê um ecrã que indica que o repositório está a ser clonado:

![cloning_repository](../images/Building-the-App/034_CloningProgress.png)

A certa altura, o Android Studio fecha e volta a abrir. Pode ser perguntado se confia no projeto. Clique em «Trust project»:

  ![Trust project (confiar no projeto)](../images/Building-the-App/035_TrustProject.png)


Só para utilizadores de Windows: se a firewall pedir permissão, conceda o acesso:

 ![Permissão da firewall para o Java](../images/Building-the-App/AndroidStudio361_18.png)

Depois de o repositório ser clonado com sucesso, o Android Studio abre o projeto clonado.

(computerbuild-NewUI)=
```{admonition} New UI
:class: note
O Android Studio mudou a sua interface recentemente. As novas instalações do Android Studio usam a nova interface por predefinição!

Só se o seu Android Studio tiver um aspeto diferente é que pode precisar de mudar para a nova interface:
Clique no menu de hambúrguer no canto superior esquerdo e selecione **Settings** (ou **Preferences** nos computadores Apple).
Em **Appearance & Behavior**, vá a **New UI** e marque **Enable new UI**. Depois reinicie o Android Studio para começar a usá-la.

Se não encontrar a opção **New UI**, não se preocupe: já a está a usar!
```


Quando o Android Studio abrir, espere com paciência (pode demorar alguns minutos) e, sobretudo, **não** atualize o projeto como sugerido na janela que aparece.

O Android Studio inicia automaticamente uma «Gradle project sync» (sincronização do projeto Gradle), que demora alguns minutos a terminar. Pode vê-la (ainda) a correr:

![AS_download_dependencies](../images/Building-the-App/036_GradleSyncing.png)

```{admonition} NEVER UPDATE GRADLE!
:class: warning

O Android Studio pode recomendar que atualize o sistema gradle. **Nunca atualize o gradle!** Isso vai causar problemas.
```

Só em computadores Windows: pode receber uma notificação sobre o Windows Defender estar a correr: clique em **Automatically** (automaticamente) e confirme; isto torna a compilação mais rápida!

![Windows Defender](../images/Building-the-App/037_WindowsDefender.png)


Pode deixar a sincronização do gradle a correr e já seguir os passos seguintes.

(Building-APK-set-git-path-in-preferences)=
### Definir o caminho do Git nas preferências do Android Studio

Agora vamos indicar ao Android Studio onde encontrar o Git, que instalou [antes](#install-git-if-you-dont-have-it).

* Só para utilizadores de Windows: confirme que reiniciou o computador depois de [instalar o Git](#install-git-if-you-dont-have-it). Se não reiniciou, reinicie agora e abra de novo o Android Studio

No canto superior esquerdo do **Android Studio**, abra o menu de hambúrguer e vá a **File** > **Settings** (no Windows) ou **Android Studio** > **Preferences** (no Mac). Isto abre a janela seguinte; clique para expandir a lista chamada **Version Control** (1) e selecione **Git** (2)

![Version_control_Git](../images/Building-the-App/038_SettingsGit.png)

Verifique se o **Android Studio** consegue encontrar automaticamente o **Path to Git executable** certo, clicando no botão «Test» (1):

![Git Executable (executável do Git)](../images/Building-the-App/039_GitTest.png)


Se a definição automática funcionar, a sua versão atual do **Git** aparece ao lado do caminho.

   ![Git_version_displayed](../images/Building-the-App/039_GitTestSuccess.png)


Se o **git.exe** não for encontrado automaticamente, ou se clicar em «Test» der um erro, pode
* introduzir manualmente o caminho que guardou [antes](#BuildingAaps-steps-for-installing-git), ou
* clicar no ícone da pasta (1) e navegar manualmente até à pasta onde o **git.exe** foi instalado [antes](#BuildingAaps-steps-for-installing-git)
* Verifique as suas definições com o botão **Test**!

  ![Git não encontrado](../images/Building-the-App/039_GitTestError.png)

(Building-APK-generate-signed-apk)=
### Compilar o APK «assinado» do AAPS

```{admonition} Why does the AAPS app need to be "signed"?
:class: dropdown

O Android exige que cada app seja _assinada_, para garantir que só pode ser atualizada mais tarde a partir da mesma fonte de confiança que publicou a app original. Para mais informações sobre este tema, siga [esta ligação](https://developer.android.com/studio/publish/app-signing.html#generate-key). 

Para o nosso objetivo, isto significa apenas que geramos um ficheiro de assinatura, ou «keystore», e o usamos quando compilamos a app **AAPS**.
```


**Importante: confirme que a sincronização do gradle terminou com sucesso antes de continuar!**


Clique no menu de hambúrguer no canto superior esquerdo para abrir a barra de menus. Selecione **Build** (1) e depois **Generate Signed App Bundle / APK** (2)

![Compilar o APK](../images/Building-the-App/040_GenerateSignedAPK.png)

Selecione «APK» (1) em vez de «Android App Bundle» e clique em «Next» (2):

![APK em vez de bundle](../images/Building-the-App/041_APK.png)

No ecrã seguinte, confirme que «Module» está definido como «AndroidAPS.app» (1). A parte antes de «.app» é o nome da pasta para onde clonou o código.

(Building-APK-wearapk)=
```{admonition} INFORMATION!
:class: note
Se quiser criar o apk para o seu relógio, tem agora de selecionar AndroidAPS.wear!
```
![Create_key_store](../images/Building-the-App/042_CreateNewKey.png)

Clique em «Create new...» (2) para começar a criar a sua keystore.

```{admonition} INFORMATION!
:class: note
Só precisa de criar a keystore uma vez.
Se já compilou o AAPS antes, NÃO crie uma nova keystore: selecione a keystore que já tem e introduza as senhas dela!
```

**_Nota:_** a keystore é um ficheiro onde fica guardada a informação para assinar a app. Está encriptada e a informação está protegida com senhas.

![Criar a keystore](../images/Building-the-App/043_Keystore.png)

* Clique no símbolo da «pasta» (1) para selecionar um caminho no seu computador para a sua keystore.

  **Não** use a pasta onde guardou o código-fonte, mas sim uma pasta que também transferiria para um computador novo.

```{admonition} WARNING!
:class: warning
Tome nota de onde a sua keystore está guardada. Vai precisar dela quando compilar a próxima atualização do AAPS!
```

* Agora escolha uma senha simples (e tome nota dela), introduza-a na caixa da senha (2) e confirme-a (2).

  As senhas da keystore e da chave não precisam de ser complicadas. Se perder a sua senha no futuro, veja [Reinstalar o AAPS com uma nova keystore](#reinstall-aaps).

```{warning}
**Evite caracteres especiais nas suas senhas.** Use só letras e algarismos nas senhas da keystore e da chave. Em particular, não use `$`, um acento grave (backtick), `"` nem `\`. Se mais tarde mudar para a [Compilação no navegador](#aaps-ci-option2) e usar de novo esta keystore, estes caracteres podem fazer falhar o passo de assinatura; veja [Compilação no navegador: resolução de problemas](#aaps-ci-password-special-characters).
```

* O alias predefinido (3) da sua chave é «key0»; não o altere.

* Agora precisa de uma senha para a sua chave. Para simplificar, se quiser, pode usar a mesma senha que usou acima para a keystore. Introduza uma senha (4) e confirme-a.

```{admonition} WARNING!
:class: warning
Tome nota destas senhas! Vai precisar delas quando compilar a próxima atualização do AAPS!
```

* A validade é de 25 anos por predefinição; deixe-a como está.

* Introduza o seu nome próprio e apelido (5). Não é preciso adicionar mais nenhuma informação, mas pode fazê-lo se quiser (6-7).

* Clique em «OK» (8) para continuar:


Na página **Generate signed App Bundle or APK**, aparece agora o caminho da sua keystore. Agora introduza de novo a senha da keystore (1) e a senha da chave (2), e marque a caixa (3) para lembrar as senhas, para não ter de as introduzir outra vez da próxima vez que compilar o apk (ou seja, ao atualizar para uma nova versão do AAPS). Clique em «Next» (4):

![Lembrar senhas](../images/Building-the-App/044_RememberPwd.png)


No ecrã seguinte, selecione a variante de compilação «fullRelease» (1) e clique em «Create» (3). Lembre-se da pasta de destino mostrada em (2), porque é lá que vai encontrar mais tarde o ficheiro apk compilado!

   ![Selecionar a variante de compilação](../images/Building-the-App/045_BuildPath.png)

O Android Studio vai agora compilar o apk do **AAPS**. Mostra «Gradle Build running» (2) no canto inferior direito. O processo demora algum tempo, conforme o seu computador e a ligação à internet, por isso **tenha paciência!** Se quiser acompanhar o progresso da compilação, clique no pequeno martelo «build» (1) na parte de baixo do Android Studio:

![Gradle a correr](../images/Building-the-App/046_BuildRunning.png)

Agora pode acompanhar o progresso da compilação:

![Android_Studio_building](../images/Building-the-App/047_BuildDetails.png)

O Android Studio mostra a informação «BUILD SUCCESSFUL» quando a compilação terminar. Pode aparecer uma notificação em que pode clicar para selecionar «locate». Se não viu isto, clique no ícone de notificações (1) para abrir as notificações e depois em **locate** (2):

![Compilação terminada](../images/Building-the-App/049_ReopenNotification.png)

**_Se a compilação não tiver sucesso, consulte a [secção Resolução de problemas do Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)._**

Na caixa de notificações, clique no link azul «locate»:

![Localizar a compilação](../images/Building-the-App/048_BuildFinished.png) O seu gestor de ficheiros abre e mostra o ficheiro apk que acabou de compilar.

   ![Localização do ficheiro apk](../images/Building-the-App/050_LocateAPK.png)

Parabéns! Agora que compilou o ficheiro apk do **AAPS**, vai transferir este ficheiro para o seu smartphone na secção seguinte da documentação.

```{tip}
Se pensa que pode querer usar um smartwatch Android Wear no futuro, esta é a melhor altura para compilar o apk do AAPS Wear, para ter a certeza de que fica sincronizado com o seu apk do AAPS.
```

Passe à etapa seguinte: [Transferir e instalar o **AAPS**](../SettingUpAaps/TransferringAndInstallingAaps.md).



