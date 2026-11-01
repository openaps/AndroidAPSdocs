# FAQ para loopers

Como adicionar perguntas a estas FAQ: siga estas [instruções](../SupportingAaps/HowToEditTheDocs.md)

## Geral

### Posso simplesmente transferir o ficheiro de instalação do AAPS?

Não. Não existe nenhum ficheiro apk do AAPS para transferir. Tem de o [compilar](../SettingUpAaps/BuildingAaps.md) por si próprio. A razão é a seguinte:

O AAPS serve para controlar a sua bomba e administrar insulina. Segundo a regulamentação atual na Europa, todos os sistemas da classe IIa ou IIb são dispositivos médicos que precisam de aprovação regulamentar (marcação CE), o que exige vários estudos e aprovações. Distribuir um dispositivo não regulamentado é ilegal. Regulamentações semelhantes existem noutras partes do mundo.

Esta regulamentação não se limita à venda (no sentido de receber dinheiro por algo): aplica-se a qualquer distribuição (mesmo gratuita). Construir um dispositivo médico para si próprio é a única forma de usar a app dentro destas regras.

É por isso que os apks não estão disponíveis.

(FAQ-how-to-begin)=

### Como começar?

Comece por [Preparar-se para começar com o AAPS](../Getting-Started/PreparingForAaps.md): esta página explica tudo o que está abaixo com mais detalhe.

Em primeiro lugar, tem de **obter componentes de hardware que possam ser usados em loop**:

* Uma [bomba de insulina suportada](../Getting-Started/CompatiblePumps.md), 
* um [smartphone Android](../Getting-Started/Phones.md) (o Apple iOS não é suportado pelo AAPS - pode ver o [iOS Loop](https://loopkit.github.io/loopdocs/)) e
* um [sistema de monitorização contínua da glicose](../Getting-Started/CompatiblesCgms.md). 

Em segundo lugar, tem de **configurar os componentes de software**: [AAPS](../SettingUpAaps/BuildingAaps.md), [fonte CGM/FGM](../Getting-Started/CompatiblesCgms.md) e um [servidor de relatórios](../SettingUpAaps/SettingUpTheReportingServer.md).

Em terceiro lugar, tem de aprender e **compreender o OpenAPS reference design para verificar os seus fatores de tratamento**. O princípio base do loop fechado é que a sua [taxa basal e o seu IHC](../SettingUpAaps/YourAapsProfile.md) estejam corretos. Todas as recomendações partem do princípio de que as suas necessidades basais estão bem definidas e de que os picos ou descidas que vê resultam de outros fatores, que por isso precisam de ajustes pontuais (exercício, stress, etc.). Os ajustes que o loop fechado pode fazer foram limitados por segurança (ver a taxa basal temporária máxima permitida no [OpenAPS Reference Design](https://openaps.org/reference-design/)), por isso não deve gastar a dose permitida a corrigir uma basal de fundo errada. Por exemplo, se tem muitas vezes basais temporárias baixas antes de uma refeição, é provável que a sua basal precise de ajuste. Pode usar o [Autoajuste](#autotune-how-autotune-calculates-adjustments) para analisar um grande conjunto de dados e sugerir se e como as basais e/ou o FSI precisam de ajuste, e também se o IHC precisa de ser alterado. Ou pode testar e definir a sua basal [à moda antiga](https://integrateddiabetes.com/basal-testing/).

### Que aspetos práticos tem o loop?

#### Proteção por senha

Se não quiser que as suas definições sejam alteradas com facilidade, pode protegê-las com uma senha, um PIN ou a autenticação biométrica do telefone (impressão digital, rosto). Abra **Definições** > **Proteção** > **Proteção das definições** e escolha o tipo de proteção. No mesmo local, também pode proteger toda a app ou apenas os bólus. Veja [Proteção das definições](#Preferences-settings-protection) para mais detalhes.

#### Smartwatches Android Wear

Se usar a app do relógio do AAPS para dar bólus ou alterar definições, cada pedido tem de ser confirmado no relógio: depois de o enviar, o relógio mostra um resumo com um botão **CONFIRMAR**. Veja [Controlo remoto a partir de um relógio Wear OS](../RemoteFeatures/RemoteControlWearOS.md).

(FAQ-disconnect-pump)=

#### Desligar a bomba

Se retirar a bomba para tomar duche, banho, nadar, fazer desporto ou outras atividades, tem de informar o AAPS de que não está a ser administrada insulina, para manter a IA correta.

A bomba pode ser desligada com o [ícone do loop](#AapsScreens-loop-status) no ecrã principal do AAPS: prima-o e selecione **Desligar bomba** com a duração de que precisa. Se a atividade demorar mais do que o previsto, prima o ícone de novo e escolha uma nova duração: não precisa de religar a bomba primeiro. Veja [Desligar a bomba para o duche ou para uma atividade](#pumps-cannulas-disconnecting) para saber como evitar a falta de insulina quando a bomba fica desligada muito tempo.

#### Recomendações que não se baseiam numa só leitura do CGM

Por segurança, as recomendações não se baseiam numa só leitura do CGM, mas no delta médio. Por isso, se perder algumas leituras, pode demorar algum tempo, depois de os dados voltarem, até o AAPS voltar a fazer loop.

#### Leituras adicionais

Há vários blogs com boas dicas para ajudar a compreender os aspetos práticos do loop. Alguns já não estão online: os links abaixo marcados «cópia arquivada» abrem uma cópia guardada no Internet Archive.

    * [Afinar as definições](https://web.archive.org/web/20171029031305/http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM (cópia arquivada)
    * [Porque é que a DAI é importante](https://web.archive.org/web/20231130035027/http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM (cópia arquivada)
    * [Limitar os picos depois das refeições](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
    * [Hormonas e autosens](https://web.archive.org/web/20170902081839/http://seemycgm.com/2017/06/06/hormones-2/) See my CGM (cópia arquivada)
    

(what-emergency-equipment-is-recommended-to-take-with-me)= (FAQ-emergency-equipment)=

### Que equipamento de emergência devo levar comigo?

Precisa de levar o mesmo equipamento de emergência que qualquer outra pessoa com DT1 em terapia com bomba de insulina. Quando usa o AAPS em loop, recomenda-se vivamente ter o seguinte equipamento adicional consigo ou perto de si:

* Bateria externa e cabos para carregar o smartphone, o relógio e (se necessário) o leitor BT ou o dispositivo Link
* Pilhas da bomba
* Acesso às suas cópias de segurança, tanto no telefone como na nuvem (por ex. Google Drive, Dropbox), para poder configurar o AAPS de novo noutro telefone (veja [Criar e restaurar cópias de segurança](../Maintenance/ExportImportSettings.md)): 
  * o [apk](../SettingUpAaps/BuildingAaps.md) atual do AAPS e de outras apps que usa (por ex. xDrip, Juggluco, BYODA).
  * o seu ficheiro keystore (da compilação do apk) e a respetiva senha,
  * os seus ficheiros de exportação de definições mais recentes do AAPS e das outras apps,
  * a sua senha mestre do **AAPS**: sem ela não consegue importar o ficheiro de definições.

(FAQ-organize-backups)=

#### Como organizar as minhas cópias de segurança?

Exporte as definições com muita regularidade: depois de cada troca de Pod ou de reservatório, depois de alterar o seu perfil, quando validar um objetivo, se mudar de bomba… Mesmo que nada mude, exporte uma vez por mês. Guarde vários ficheiros de exportação antigos.

O **AAPS** pode fazer isto por si: pode exportar as definições automaticamente (por exemplo com uma [Automatização](#ExportImportSettings-Automating-Settings-Export) depois de cada troca de Pod) e guardar a exportação diretamente numa pasta na nuvem (Google Drive). Veja [Criar e restaurar cópias de segurança](../Maintenance/ExportImportSettings.md).

### Como posso fixar o CGM/FGM de forma segura?

Pode colá-lo com fita adesiva. Existem vários «overpatches» pré-perfurados para os sistemas CGM mais comuns (pesquise no Google, eBay ou Amazon). Alguns utilizadores usam fita de kinesiologia padrão, mais barata, ou rocktape.

Pode fixá-lo. Também pode comprar braçadeiras para a parte superior do braço que fixam o CGM/FGM com uma banda (pesquise no Google, eBay ou Amazon).

## Algoritmo APS

### Porque é que o OpenAPS AMA mostra «dia: 3», mesmo que tenha uma DAI diferente no meu perfil?

Com o **OpenAPS AMA** selecionado em **Configuração** > **APS**, **Abrir plugin** mostra os dados enviados ao algoritmo. Na secção **Perfil**, `dia` é sempre 3.0 ou menos:

![Ecrã do plugin OpenAPS AMA com dia 3.0 nos dados do perfil](../images/screens/openaps_ama_plugin.png)

No AMA, a DAI não significa na verdade a «duração da ação da insulina». É um parâmetro que antes estava ligado à DAI. Agora significa «em quanto tempo a correção deve estar concluída». Não tem nada a ver com o cálculo da IA. No OpenAPS SMB, este parâmetro já não é necessário.

## Outras definições

### Definições do Nightscout

(FAQ-nsclient-blocked)=

#### O AAPSClient (ou o AAPS) não envia dados: «Bloqueado por…». O que posso fazer?

O estado do NSClient mostra porque não são enviados dados:

* **Bloqueado pelas opções de conectividade**: as definições de ligação não permitem a ligação atual. Por exemplo, está a usar dados móveis mas só é permitido Wi-Fi, ou não está numa das redes Wi-Fi permitidas (SSIDs).
* **Bloqueado pelas opções de carregamento**: as definições de ligação só permitem sincronizar enquanto o telefone está a carregar (ou só com bateria), e neste momento não é o caso.
* **Sem ligação**: o telefone não tem ligação à internet.

Verifique as [definições de ligação do NSClient](#Preferences-nsclient): **Usar dados móveis**, **Usar roaming**, **Usar WiFi**, **SSID WiFi**, **Sincronizar com bateria** e **Sincronizar durante o carregamento**.

### Definições do CGM

(FAQ-advanced-filtering)=

#### Porque é que o AAPS diz «SMB sempre e depois dos hidratos desativado por fonte da Glicose ativa não suportar filtro avançado»?

**Ativar SMB sempre** e **Ativar SMB depois de hidratos** só podem ser usados com uma [fonte de dados de glicose fiável](#GettingStarted-TrustedBGSource): um sensor e uma app do CGM que conseguem dizer ao **AAPS** de que sensor vêm as leituras. Com qualquer outra fonte de glicose, o **AAPS** desliga estas duas opções e mostra esta mensagem. Consulte a lista de fontes fiáveis e, se o seu sensor estiver na lista, certifique-se de que usa uma das apps do CGM indicadas para ele. Veja também [Suavizar os dados da glicose](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Bomba

#### Baterias

O loop pode gastar a pilha da bomba mais depressa do que o uso normal, porque o sistema comunica por Bluetooth muito mais do que um utilizador manual. É melhor trocar a pilha aos 25 %, porque a partir daí a comunicação fica difícil. Pode definir alarmes de aviso para a pilha da bomba com a variável PUMP_WARN_BATT_P no seu site do Nightscout. Truques para aumentar a duração da pilha:

* reduzir o tempo em que o LCD fica ligado (no menu de definições da bomba)
* reduzir o tempo em que a retroiluminação fica ligada (no menu de definições da bomba)
* escolher nas definições de notificação um bip em vez de vibração (no menu de definições da bomba)
* carregue nos botões da bomba só para recarregar; use o AAPS para ver todo o histórico, o nível da pilha e o volume do reservatório.
* Em alguns telefones, a app AAPS pode ser fechada muitas vezes para poupar energia ou libertar RAM. Quando o AAPS é reiniciado, em cada arranque estabelece uma ligação Bluetooth à bomba e volta a ler a taxa basal atual e o histórico de bólus. Isto consome bateria. Para ver se isto acontece, ative **Registar evento de início da aplicação** nas **Definições avançadas** do NSClient: o Nightscout recebe um evento a cada reinício do AAPS, o que facilita seguir o problema. Para reduzir isto, desligue a otimização da bateria para o AAPS, para que o telefone deixe de o fechar: veja [poupança de bateria](#FAQ-battery-savings) abaixo.
* limpar os terminais da pilha com um toalhete com álcool, para garantir que não fica cera/gordura do fabrico.
* nas [bombas Dana R/RS](../CompatiblePumps/DanaRS-Insulin-Pump.md), o procedimento de arranque puxa uma corrente alta da pilha para quebrar de propósito a película de passivação (que evita a perda de energia durante o armazenamento), mas nem sempre a consegue quebrar a 100 %. Retire e volte a colocar a pilha 2–3 vezes até o ecrã mostrar 100 %, ou use a chave da pilha para fazer um curto-circuito breve na pilha antes de a colocar, encostando-a aos dois terminais por uma fração de segundo.
* veja também mais dicas para [tipos específicos de pilha](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

#### Mudar reservatórios e cânulas

O reservatório tem de ser mudado diretamente na bomba; depois, a mudança é registada no **AAPS**. Siga o [guia passo a passo para mudar o reservatório e a cânula da bomba](#pumps-cannulas-changing-reservoir-and-cannula).

### Imagem de fundo

Pode encontrar a imagem de fundo do AAPS para o seu telefone na [página Telefones](#Phones-phone-wallpaper).

### Uso diário

Muitas das situações abaixo podem ser preparadas uma vez como [cena](#scenes): uma predefinição que troca o perfil, o alvo temporário e outras definições com um só toque. O **AAPS** oferece modelos prontos, por exemplo *Exercício*, *Sono*, *Álcool* ou *Banho*.

#### Higiene

(what-to-do-when-taking-a-shower-or-bath)=

##### O que fazer ao tomar duche ou banho?

Pode retirar a bomba durante o duche ou o banho. Durante este curto período pode não precisar dela, mas deve dizer ao AAPS que desligou a bomba, para que os cálculos da IA estejam corretos. Veja a [descrição acima](#FAQ-disconnect-pump). O modelo de [cena](#scenes) *Banho* faz isto por si.

#### Trabalho

Conforme o seu trabalho, pode escolher usar fatores de tratamento diferentes nos dias de trabalho. Como utilizador do loop, deve pensar numa [troca de perfil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) para o seu dia de trabalho típico. Por exemplo, pode trocar para um perfil acima de 100 % se tiver um trabalho menos exigente (por ex. sentado a uma secretária), ou abaixo de 100 % se estiver ativo e de pé o dia todo. Também pode pensar num alvo temporário alto ou baixo, ou num [deslocamento temporal do seu perfil](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile), quando trabalha muito mais cedo ou mais tarde do que o habitual, ou se trabalha por turnos. Também pode criar um segundo perfil (por ex. «casa» e «dia de trabalho») e fazer todos os dias uma troca de perfil para o perfil de que realmente precisa, ou guardar as definições do dia de trabalho como [cena](#scenes).

### Atividades de lazer

(FAQ-sports)=

#### Desporto

Tem de rever os seus hábitos de desporto do tempo antes do loop. Se simplesmente comer um ou mais hidratos de carbono para o desporto, como antes, o sistema de loop fechado vai reconhecê-los e corrigi-los.

Assim, teria mais hidratos de carbono ativos, mas ao mesmo tempo o loop iria contrariá-los e administrar insulina.

Com o loop, deve experimentar estes passos:

* Make a [profile switch](#ProfileSwitch-change-percentage) below 100%: tap the profile name on the main screen, tap the round **▶** button, then set **Percentage** and **Duration**.
* Defina um [alvo temporário de atividade](#TempTargets-activity-temp-target) acima do seu alvo normal. Com uma percentagem abaixo de 100 % e uma duração, o mesmo ecrã **Ativar** oferece um interruptor **Alvo Temporário / Atividade** que inicia os dois ao mesmo tempo.
* Se usar SMB, certifique-se de que [«Ativar SMB com alvo temporário alto»](#Open-APS-features-enable-smb-with-high-temp-targets) e [«Ativar SMB sempre»](#Open-APS-features-enable-smb-always) estão desativados.

É importante preparar estas definições antes e ajustá-las depois. Faça as alterações a tempo, antes do desporto, e tenha em conta o efeito da reposição das reservas dos músculos.

Os modelos de [cena](#scenes) *Exercício* e *Noite após exercício* juntam estas definições, para as poder iniciar com um só toque. Se faz desporto com regularidade à mesma hora (por ex. uma aula no ginásio), pode usar uma [automatização](../DailyLifeWithAaps/Automations.md) para iniciar a troca de perfil e o AT, ou a cena. Uma automatização baseada na localização também pode ser uma ideia, mas torna a preparação mais difícil.

A percentagem da troca de perfil, o valor do seu alvo temporário de atividade e a melhor hora para as alterações são individuais. Comece pelo lado seguro quando procurar o valor certo para si (comece com uma percentagem mais baixa e um AT mais alto).

#### Sexo

Pode retirar a bomba para ficar «livre», mas deve informar o AAPS, para que os cálculos da IA estejam corretos. Veja a [descrição acima](#FAQ-disconnect-pump).

#### Beber álcool

Beber álcool é arriscado em modo de loop fechado, porque o algoritmo não consegue prever corretamente a glicose influenciada pelo álcool. Tem de descobrir o seu próprio método para lidar com isto, usando as seguintes funções do AAPS:

* Desativar o modo de loop fechado e tratar a diabetes manualmente ou
* setting high temp targets and deactivating UAM to avoid the loop increasing IOB due to an unannounced meal or
* fazer uma [troca de perfil](#ProfileSwitch-change-percentage) para bastante menos de 100 % 

O modelo de [cena](#scenes) *Álcool* é um ponto de partida que pode adaptar ao seu próprio método.

Quando bebe álcool, tem de vigiar sempre o seu CGM para evitar manualmente uma hipoglicemia, comendo hidratos de carbono.

#### Dormir

##### Como fazer loop durante a noite sem radiação da rede móvel e do Wi-Fi?

Muitos utilizadores põem o telefone em modo avião à noite. Se quiser que o loop o ajude enquanto dorme, faça o seguinte (só funciona se a app do CGM correr no mesmo telefone que o AAPS, como o xDrip, o Juggluco ou o BYODA; NÃO funciona se receber as leituras de glicose através do Nightscout):

1. Active o modo avião no seu telemóvel.
2. Aguarde até o modo avião estar ativo.
3. Ligue o Bluetooth.

Agora não recebe chamadas nem está ligado à internet. Mas o loop ainda está em execução.

Algumas pessoas tiveram problemas com a difusão local (o AAPS não recebe valores de glicose do xDrip) quando o telefone está em modo avião. No xDrip, vá a Settings > Inter-app settings > Identify receiver e introduza `info.nightscout.androidaps`.

![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

Se quiser definições diferentes à noite (por exemplo um alvo mais alto), o modelo de [cena](#scenes) *Sono* é um bom ponto de partida.

#### Viagens

##### Como lidar com mudanças de fuso horário?

Com a Dana R e a Dana R Korean não precisa de fazer nada. Para outras bombas, veja a página [Mudança de fuso horário e hora de verão](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) para mais detalhes.

### Temas médicos

#### Internamento hospitalar

Se quiser partilhar informação sobre o AAPS e o loop DIY com os seus médicos, pode imprimir o [guia do AAPS para médicos](../UsefulLinks/ClinicianGuideToAaps.md).

#### Consulta com o seu endocrinologista

##### Relatórios

Pode mostrar os seus relatórios do Nightscout (https://YOUR-NS-SITE.com/report) ou usar o [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

## Perguntas frequentes no Discord e as respostas...

### O meu problema não está nesta lista.

Veja [onde obter ajuda](../GettingHelp/WhereCanIGetHelp.md). Se encontrou a solução sozinho, **lembre-nos de a adicionar a esta lista!**

### Compilação e instalação

(FAQ-build-errors)=

#### Tenho problemas ou erros ao compilar a app.

Consulte a página de resolução de problemas da forma como compila o **AAPS** (veja [Compilar o AAPS](../SettingUpAaps/BuildingAaps.md)):

* compilação no navegador: [Compilação no navegador: resolução de problemas](#aaps-ci-troubleshooting),
* compilação com o Android Studio: [Resolução de problemas do Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

(FAQ-build-error-file-name-too-long)=

#### Erro de compilação: nome de ficheiro demasiado longo (file name too long)

Este erro pode acontecer ao compilar com o Android Studio: a compilação para com um erro a dizer que o nome do ficheiro é demasiado longo. Soluções possíveis: Mova o código-fonte para uma pasta mais próxima da raiz da sua unidade (por ex. «C:\src\AndroidAPS»).

No Android Studio: Certifique-se de que o «Gradle» terminou a sincronização e a indexação depois de abrir o projeto e de fazer pull do GitHub. Execute Build->Clean Project antes de fazer Rebuild Project. Execute File->Invalidate Caches e reinicie o Android Studio.

(FAQ-running-dev-version)=

#### Alerta: A correr a versão dev. O Loop fechado está desativado

O **AAPS** mostra esta mensagem quando usa uma versão de desenvolvimento (dev) sem o modo engenheiro: numa versão dev, o loop fechado só funciona em modo engenheiro.

A versão dev serve para testes, não para fazer loop no dia a dia: leia [Branch de desenvolvimento](../AdvancedOptions/DevBranch.md) antes de continuar.

Para ativar o modo engenheiro:

1. Coloque um ficheiro chamado `engineering_mode` na subpasta `extra` da pasta do AAPS (a pasta que escolheu no assistente de configuração, normalmente `AAPS/extra`). Qualquer ficheiro serve, desde que tenha o nome correto.
2. Reinicie o **AAPS** para que ele encontre o ficheiro.

Dica: faça uma cópia de um ficheiro de registo existente e mude-lhe o nome para «engineering_mode» (nota: sem extensão!).

### Objetivos

#### Estou bloqueado num objetivo e preciso de ajuda.

Leia primeiro [Concluir os objetivos](../SettingUpAaps/CompletingTheObjectives.md). Se continuar bloqueado, faça uma captura de ecrã da pergunta e das respostas e publique-a no canal AAPS do Discord. Não se esqueça de dizer que opções escolheu (ou não) e porquê. Vai receber dicas e ajuda, mas tem de encontrar as respostas.

### Definições, senhas e cópias de segurança

(FAQ-reset-master-password)=

#### Como repor a senha mestre?

Se se esqueceu da senha mestre, pode repô-la para o número de série da sua bomba:

1. Crie um ficheiro vazio chamado `PasswordReset` (sem extensão) na subpasta `extra` da pasta do AAPS (normalmente `AAPS/extra`).
2. Reinicie o **AAPS**. A bomba tem de estar ligada: o **AAPS** mostra «A aguardar a bomba…» e tem de ler o número de série da bomba em 30 segundos.
3. O **AAPS** mostra «Senha foi definida!»: a sua senha mestre passa a ser o **número de série da bomba**. O ficheiro `PasswordReset` é apagado automaticamente.
4. Abra **Definições** > **Proteção** > **Senha Mestre** e defina uma nova senha.

Se a bomba não for alcançada a tempo, nada muda: verifique a ligação à bomba e tente de novo.

Isto só repõe a senha mestre. Uma senha ou PIN das definições, da aplicação ou do bólus não é reposto, mas pode sempre usar a senha mestre em vez deles.

    {admonition} Ficheiros de definições antigos
    :class: warning
    Os ficheiros de definições exportados com a senha mestre antiga só podem ser importados com essa senha antiga.

(FAQ-where-are-settings-files)=

#### Onde encontro os ficheiros de definições?

Os ficheiros de definições ficam na subpasta `preferences` da pasta do AAPS que escolheu no [assistente de configuração](#SetupWizard-StoragePermission) (por exemplo `/internal storage/AAPS/preferences`). Se configurou uma pasta na nuvem (Google Drive), as exportações também podem ser guardadas lá. Veja [Criar e restaurar cópias de segurança](../Maintenance/ExportImportSettings.md).

AVISO: Não perca a sua senha, porque sem ela não vai conseguir importar um ficheiro de definições encriptado!

(FAQ-import-settings-earlier-versions)=

#### Como importo definições de versões anteriores do AAPS para o AAPS v3 ou v4?

Só pode importar definições (no AAPS v3 ou v4) que foram exportadas com o AAPS v2.8x ou posterior. Se usava uma versão do AAPS anterior à v2.8x, ou precisa de usar exportações de definições anteriores à v2.8x, tem de instalar primeiro o AAPS v2.8. Importe as definições antigas da v2.x na v2.8. Depois de verificar que está tudo bem, pode exportar as definições da v2.8. Instale a versão atual do AAPS e importe nela as definições da v2.8.

Se usar a mesma chave para compilar a versão antiga e a nova, nem sequer precisa de importar as definições. Pode instalar a nova versão por cima da antiga.

Foram adicionados alguns objetivos novos. Vai ter de os validar.

(FAQ-delete-treatments)=

#### Onde posso apagar tratamentos?

Abra o **menu** (☰) e selecione **Histórico de tratamentos**. Toque sem soltar num registo para o selecionar, toque em mais registos se precisar e depois toque no ícone do **caixote do lixo** e confirme. Veja [Histórico de tratamentos](#aaps-screens-treatments).

### Problemas do telefone e da ligação

(FAQ-aaps-stops)=

#### O AAPS para todos os dias mais ou menos à mesma hora.

* Em alguns telefones, o Google Play Protect pode encerrar o **AAPS** todas as manhãs. Se isto acontecer, vá às opções do Google Play e desative o **Google Play Protect**.
* Procure apps de «limpeza» (por ex. CCleaner) e desinstale-as.
* Desligue todas as otimizações da bateria para o **AAPS** (veja [poupança de bateria](#FAQ-battery-savings) abaixo).

(FAQ-battery-savings)=

#### Como configurar a poupança de bateria?

O telefone pode suspender o **AAPS** e apps relacionadas (app do CGM, Bluetooth) quando não as está a usar. Nesse caso, o **AAPS** não consegue fazer o seu trabalho, e as ligações Bluetooth ao sensor e à bomba (ou ao RileyLink) podem ser cortadas, o que provoca alertas «Bomba inacessível» e erros de comunicação.

Desligue a otimização da bateria para o **AAPS**, para a app do CGM (por ex. xDrip) e para a app de sistema do Bluetooth. A forma de o fazer depende da marca, do modelo e da versão Android do telefone:

* veja [Otimização da bateria](#generaltroubleshooting-android-related-issues) para telefones Pixel, Samsung e Huawei,
* no **AAPS**, abra o **menu** (☰) > **Sobre** e toque em **Don't kill my app?**, ou visite [Don't kill my app](https://dontkillmyapp.com/) para outras marcas.

Se não tem a certeza de que a poupança de bateria causa o problema, pode desligar temporariamente toda a poupança de bateria do telefone: a bateria vai gastar-se mais depressa, mas vai ver rapidamente se o problema desaparece.

(FAQ-pump-unreachable-alerts)=

#### Alertas de bomba inacessível várias vezes por dia ou à noite.

O telefone pode estar a suspender o **AAPS** ou até o Bluetooth, o que faz perder a ligação à bomba ou ao RileyLink (veja [poupança de bateria](#FAQ-battery-savings) acima).

Também pode alterar quando o alerta é dado: prima o ícone **Definições** (roda dentada) no canto superior direito do ecrã principal e depois selecione **Alertas locais** > **Limiar de bomba inacessível** (30 a 300 minutos). Consulte a página da sua bomba: algumas recomendam um valor, por ex. 120 minutos para a [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md).

(FAQ-link-unresponsive)=

#### O meu Link/bomba/Pod não responde (RL/OL/EmaLink…)

With some phones, there are Bluetooth disconnects from the Links (RL/OL/EmaLink).

Some also have non responsive Links (AAPS says that they are connected but the Links can't reach or command the pump).

Experimente primeiro o botão **Repor RileyLink** no ecrã da bomba (veja a página da sua bomba: [Medtronic](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump), [Omnipod Eros](#OmnipodEros-reset-rileylink-config-notes)). Se isso não ajudar, a forma mais fácil de pôr todas estas partes a funcionar em conjunto é:

1. Desligue o Link.
2. Saia do **AAPS** (**menu** (☰) > **Sair**).
3. Toque sem soltar no ícone do **AAPS**, abra as **App info** (Informações da app) do Android, toque em **Force stop** (Forçar paragem) e depois em **Storage** (Armazenamento) > **Clear cache** (Limpar cache) (NÃO limpe o armazenamento/os dados!).
4. Raramente, alguns telefones podem precisar de ser reiniciados neste passo. Pode tentar sem reiniciar.
5. Ligue o Link.
6. Inicie o **AAPS**.
7. No ecrã da bomba, toque em **Emparelhar RileyLink** e selecione o seu Link de novo.

### Controlo remoto

(FAQ-aapsclient)=

#### Configurar e usar a app remota AAPSClient

O **AAPSClient** é uma app separada que permite a um cuidador seguir e controlar o **AAPS** à distância. Desde o **AAPS** v4, para controlar o **AAPS** a partir do AAPSClient é preciso emparelhar as duas apps uma vez. Veja:

* [A aplicação AAPSClient](#aapsclient-app): instalação, primeiro arranque e emparelhamento,
* [Controlo principal ↔ cliente](#client-master-control): o que pode ser controlado e como funciona o emparelhamento,
* [AAPSClient num smartwatch](#remotecontrol-smartwatches).

(FAQ-hardened-mode)=

#### Os tratamentos que introduzo no site do Nightscout não são aplicados

Isso é o [modo reforçado](#client-master-control-hardened-mode). Enquanto o controlo pelos clientes está ligado — sempre no Modo simples — o **AAPS** só aceita alterações de clientes emparelhados, não do site do Nightscout nem de outras apps. Introduza-os antes num **AAPSClient** emparelhado.

### Alertas e avisos

#### Tenho um distintivo de aviso vermelho (triângulo vermelho) / O AAPS não ativa o loop fechado / O loop fica em SGB / Tive um triângulo amarelo

O distintivo de aviso vermelho no atalho da fonte da glicose é uma função de segurança do AAPS. Veja [Sinal de aviso da glicose](#aaps-screens-bg-warning-sign) para a explicação completa.

Um distintivo de aviso vermelho no atalho da fonte da glicose na barra inferior (o triângulo vermelho das versões antigas) significa que tem valores de glicose duplicados e que o AAPS não consegue calcular os deltas com precisão. Um loop fechado passa para o modo **Suspensão Glicose Baixa**: continua a reduzir ou a suspender a basal para o proteger de hipoglicemias, mas não dá insulina de correção. Tem de apagar um valor de glicose de cada valor duplicado para limpar o aviso. Toque no atalho para abrir o [ecrã da fonte da glicose](#aaps-screens-bg-source): o duplicado aparece destacado a vermelho. Toque sem soltar numa linha que quer apagar, marque uma de cada par de linhas duplicadas e toque no ícone do caixote do lixo. Pode ser preciso repor as bases de dados do AAPS se houver demasiados valores de glicose duplicados. Neste caso, também perde as estatísticas, a IA, os HCA e o perfil selecionado.

Quando o aviso desaparecer, o AAPS não volta sozinho para **Loop Fechado**. Prima o ícone do loop no ecrã principal e selecione **Loop Fechado** de novo.

Possível origem do problema: o xDrip e/ou o NS a preencher valores de glicose em falta (backfill).

O triângulo amarelo das versões antigas indicava um intervalo instável entre leituras de glicose (valores não recebidos regularmente a cada 5 min, ou valores em falta), o que acontece muitas vezes com o Libre ou depois de mudar o transmissor do G6. O **AAPS** 4 já não o mostra: recalcula os valores em segundo plano e o loop funciona corretamente.

### Omnipod DASH

(FAQ-move-dash-pod)=

#### Posso mudar um Pod DASH ativo para outro telefone?

O estado do Pod faz parte das definições exportadas. Por isso, um Pod ativo pode passar para outro telefone: exporte as definições imediatamente antes da mudança e importe-as no outro telefone. Isto não é suportado oficialmente e há o risco de perder o Pod: se possível, experimente quando o Pod estiver perto do fim.

Leia primeiro estas secções:

* [Export and import settings](#omnipod-dash-export-import) on the Omnipod DASH page, and [Tubeless pumps](#ExportImportSettings-tubeless-pumps): on the new phone, tick **Also replace pump settings** and use a file exported while wearing your current Pod,
* [Descartar um Pod](#omnipod-dash-discard-pod), para depois retirar o Pod do telefone antigo. Mantenha o telefone antigo em modo avião até o Pod ser descartado, para que os dois telefones nunca comuniquem com o Pod ao mesmo tempo.