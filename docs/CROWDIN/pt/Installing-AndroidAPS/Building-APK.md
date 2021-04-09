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
* No passo a passo pode encontrar as capturas de ecrã de uma instalação real. Como as versões do Android Studio - o ambiente de desenvolvimento de software que utilizaremos para construir o APK-mudarão muito rapidamente isso não será idêntico à sua instalação mas dará um bom ponto de partida. O Android Studio também "corre" em Windows, Mac OS X e Linux e pode haver pequenas diferenças em alguns aspectos entre cada plataforma. If you find that something important is wrong or missing, please inform the facebook group "AndroidAPS users" or in the Discord chat [Android APS](https://discord.gg/4fQUWHZ4Mw) so that we can have a look at this.

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

Siga o manual na [página de instalação do git](../Installing-AndroidAPS/git-install.rst).

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

![Esquema de Cores](../images/AndroidStudio361_05.png)

Clique em "Finish" na seção de "Verify Settings".

![Verificar configurações](../images/AndroidStudio361_06.png)

Aguarde enquanto o Android Studio faz o download de componentes adicionais e seja paciente. Uma vez que termine o download, pode premir o botão "Finish" que fica azul. Clique no botão agora.

![Download de componentes](../images/AndroidStudio361_07.png)

## Definir caminho Git nas preferências

Certifique-se de que o [Git esteja instalado](../Installing-AndroidAPS/git-install.rst) no seu computador.

No ecrã de boas-vindas do Android Studio clique no pequeno triângulo (1. no próximo screenshot) e selecione "Settings" (2.).

![Configurações do Android Studio no ecrã de boas-vindas,](../images/AndroidStudio361_08.png)

### Windows

* Clique no pequeno triângulo próximo ao Version Control (1.) para abrir o sub-menu.
* Clicar em Git (2.).
* Assegure-se que o método de update "Merge" (3.) está seleccionado.
* Confira se o Android Studio pode localizar o caminho para git.exe automaticamente clicando no botão "Test" (4.)
    
    ![Configurações do Android Studio](../images/AndroidStudio361_09.png)

* Se a configuração for bem-sucedida, a versão do Git será exibida.

* Clique em "OK" na caixa de diálogo (1.) e "OK" na janela de configurações (2.).
    
    ![Git Automático instalado com sucesso](../images/AndroidStudio361_10.png)

* No caso do arquivo git.exe não puder ser encontrado, clique em "OK" na caixa de diálogo (1.) e, em seguida, no botão com os três pontos (2.).

* Use [a função de pesquisa](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) no windows explorer para encontrar o ficheiro "git.exe" se não souber da sua localização. You are looking for git.exe located in \bin\ folder.
* Selecione o caminho para o ficheiro git.exe e certifique-se de selecionar o que se encontra na pasta ** \bin\ ** (3.) e clique em "OK" (4.).
* Feche a janela de configurações clicando no botão "OK" (5.).
    
    ![Instalação automática do git falhou](../images/AndroidStudio361_11.png)

* **Reinicie o seu computador para atualizar o sistema.**

### Mac

* Qualquer versão Git deve funcionar. Por exemplo <https://git-scm.com/download/mac>.
* Use o homebrew para instalar o git: ```$ brew install git```.
* Para obter detalhes sobre a instalação do Git, [ver a documentação oficial do Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* Se instalou o Git via homebrew não há necessidade de alterar nenhuma preferência. Just in case: They can be found here: Android Studio - Preferences.

## Baixar o código da AndroidAPS

* **Se ainda não reiniciou o computador após configurar o caminho do git nas preferências, faça-o agora. O sistema deve ser atualizado.**

* Há duas opções para iniciar um novo projeto:
    
    * No ecrã de boas-vindas do Android Studio, clique em "Get from Version Control"
        
        ![Confira o projeto do controle de versão a partir da tela de boas-vindas](../images/AndroidStudio_GetFromVersionControl.PNG)
    
    * Se já abriu o Android Studio e não conseguiu ver o ecrã de boas vindas selecione File (1.)> New (2.)> Project from Version Control... (3.)
        
        ![Confira o projeto a partir do controle de versão dentro do Android Studio](../images/AndroidStudio_FileNew.PNG)

* Preencha o URL para o repositório principal da AndroidAPS (https: //github.com/nightscout/AndroidAPS) (1.).

* Escolha o destino para onde deseja salvar o código clonado. (2.)
* Clique no botão "Clone" (3.).
    
    ![Clonar repositório](../images/AndroidStudio_NewURL.PNG)

* NÃO CLIQUE em "Background" enquanto o repositório é clonado!
    
    ![Nenhuma ação de segundo Plano](../images/AndroidStudio361_15.png)

* Após o repositório ser copiado/clonado com sucesso, abra a cópia clicando em "Yes".
    
    ![Abrir repositório](../images/AndroidStudio361_16.png)

* No canto inferior direito irá encontrar a informação de que o Android Studio está a executar tarefas em ecrã de fundo (background).
    
    ![Tarefas de background](../images/AndroidStudio361_17.png)

* Conceda o acesso se a sua firewall estiver a pedir permissão.
    
    ![Permissão do Firewall](../images/AndroidStudio361_18.png)

* Uma vez concluídas as tarefas provavelmente irá encontrar a seguinte mensagem de erro:
    
    ![Licença de SDK](../images/AndroidStudio361_19.png)

## Download do Android SDK

* Clique em File > Settings.
    
    ![Abrir definições](../images/AndroidStudio361_20.png)

* Clique no pequeno triângulo a seguir a Appearence & Behaviour (1.).

* Clique no pequeno triângulo a seguir a System Settings (2.) e selecione Android SDK (3.)
* Seleccione a caixa à esquerda de "Android 9,0 (Pie)" (4.) (API Level 28).
    
    ![Definições do SDK](../images/AndroidStudio361_21.png)

* Confirme as alterações clicando em OK.
    
    ![Confirmar alterações do SDK](../images/AndroidStudio361_22.png)

* Aceite o acordo da licença (1.) e clique em "Next" (2.).
    
    ![Aceitar Licença SDK](../images/AndroidStudio361_23.png)

* Aguardar até a instalação terminar.
    
    ![Esperar durante a instalação do SDK](../images/AndroidStudio361_24.png)

* Quando a instalação do SDK for concluída o botão "Finish" ficará azul. Clique neste botão.
    
    ![Finalizar a instalação do SDK](../images/AndroidStudio361_25.png)

* O Android Studio pode recomendar para atualizar o "gradle system". **NUNCA ATUALIZAR O GRADLE!** Isso pode levar a dificuldades de instalação!

* Se vir uma informação do canto inferior-direito na janela do Android Studio, que o Android Gradle Plugin está pronto para atualizar, clique no texto "update" (1.) e na caixa de diálogo clique em "Don't remind me again for this project" (2.).
    
    ![Nenhuma atualização no cradle](../images/AndroidStudio361_26.png)

## Generate signed APK

Assinar significa que você indica que a sua aplicação é da sua autoria, mas de uma forma digital, como uma espécie de impressão digital dentro da própria aplicação. Isso é necessário porque o Android só aceita código assinado digitalmente por motivos de segurança. Para obter mais informações sobre este tópico, siga [este link](https://developer.android.com/studio/publish/app-signing.html#generate-key).

* Click "Build" in the menu bar and select "Generate Signed Bundle / APK...".
    
    ![Construir a apk](../images/AndroidStudio361_27.png)

* Select "APK" (1.) instead of "Android App Bundle" and click "Next" (2.).
    
    ![APK instead of bundle](../images/AndroidStudio361_28.png)

* Certifique-se de que o módulo está configurado como "app" (1.).

* Clique em "Create new ..." (2.) para começar a criar sua chave digital.
    
    Uma chave digital, neste caso, não é nada mais do que um arquivo no qual as informações para assinatura de aplicações são armazenadas. Esta é encriptada e a informação é protegida por palavra-passe.
    
    ![Criar armazenamento de chaves](../images/AndroidStudio361_29.png)

* Clique no símbolo da pasta (1.) para selecionar o caminho de armazenamento da chave digital.

* Selecione o caminho para onde a sua chave digital deve ser guardada(2.). **Não guarde na mesma pasta que o projecto. Deve selecionar uma pasta diferente!** Sugestão: ambiente de trabalho.
* Escreva um nome para a sua chave digital (3.).
* Clique "OK" (4.).
* As palavras-passe das chaves digitais não têm de ser muito sofisticadas. Certifique-se que se lembra das mesmas ou tome uma nota num lugar seguro. Caso não se lembre da sua palavra-passe no futuro, por favor ver [resolução de problemas com chaves digitais perdidas](../Installing-AndroidAPS/troubleshooting_androidstudio#lost-keystore).
* Introduza (5.) e confirme (6.) a password da sua chave digital.
* Faça o mesmo para a chave digital (7. + 8.).
* Validade (9.) é de 25 anos por defeito. Não precisa de mudar este valor pré-definido.
* Primeiro e último nome deve ser introduzido (10.). Todas as outras informações são opcionais.
* Clique em "OK" (11.) e está feito.
    
    ![Caminho para armazenamento das chaves](../images/AndroidStudio361_30.png)

* Certifique-se de que a caixa para lembrar senhas está seleccionada (1.). Assim não tem que digitar as mesmas da próxima vez que construir o APK (ex: atualizar para uma nova versão da AndroidAPS).

* Clique em "Next" (2.).
    
    ![Lembrar palavras-passe](../images/AndroidStudio361_31.png)

* Selecione Build Variants "fullRelease" (1.).

* Verifique as caixas V1 e V2 para versões de assinatura (2.).
* Clica em "Finish". (3.)
    
    ![Finalizar construção](../images/AndroidStudio361_32.png)

* O Android Studio exibirá as informações "APK(s) generated successfully..." após a conclusão da compilação.

* Caso a compilação não tenha sido bem-sucedida, consulte a [seção de solução de problemas](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).
* A maneira mais fácil de encontrar o ficheiro apk é clicar em "Event log".
    
    ![Build successfully - event log](../images/AndroidStudio361_33.png)

* Na seção de registo de eventos clique em "locate".
    
    ![Event log - locate apk](../images/AndroidStudio361_34.png)

* app-full-release.apk é o arquivo que procura.
    
    ![File location apk](../images/AndroidStudio361_35.png)

## Transferir o APK para o smartphone

A maneira mais fácil de transferir app-full-release.apk para o seu telefone é via [cabo USB ou Google Drive](https://support.google.com/android/answer/9064445?hl=en). Por favor, note que a transferência por correio pode causar dificuldades e não é a forma preferida.

No seu telefone é necessário permitir a instalação de fontes desconhecidas. Manuais como fazer isso podem ser encontrados na internet (ex: [aqui](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) ou [aqui](https://www.androidcentral.com/unknown-sources)).

## Identificar o receptor de estiver a utilizar o xDrip+

[Ver a página do xDrip+](../Configuration/xdrip#identify-receiver)

## Resolução de Problemas

See separate page [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).