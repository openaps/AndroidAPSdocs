# FAQ para loopers

Como adicionar perguntas ao FAQ: siga estas [instruções](../SupportingAaps/HowToEditTheDocs.md)

## Geral

### Posso simplesmente baixar o arquivo de instalação do AAPS?

Não. Não existe um arquivo apk do AAPS para baixar. Você precisa [compilar](../SettingUpAaps/BuildingAaps.md) o app você mesmo. Veja o motivo:

O AAPS é usado para controlar sua bomba e administrar insulina. Nos termos da regulamentação atual na Europa, todos os sistemas classificados como IIa ou IIb são dispositivos médicos que requerem aprovação regulamentar (marca CE) e necessitam de vários estudos e assinaturas. A distribuição de um dispositivo não regulamentado é ilegal. Existem regulamentações semelhantes em outras partes do mundo.

Este regulamento não se restringe apenas às vendas (no sentido de receber dinheiro por algo), mas se aplica a qualquer distribuição (mesmo gratuita). Construir um dispositivo médico para você mesmo é a única maneira de usar o aplicativo dentro destas regulamentações.

É por isso que os apks não estão disponíveis.

(FAQ-how-to-begin)=

### Como começar?

Comece por [Preparação para começar com o AAPS](../Getting-Started/PreparingForAaps.md): essa página explica tudo o que vem abaixo em mais detalhes.

Antes de tudo, você precisa **obter componentes de hardware compatíveis com loop**:

* Uma [bomba de insulina compatível](../Getting-Started/CompatiblePumps.md), 
* um [smartphone Android](../Getting-Started/Phones.md) (o Apple iOS não é compatível com o AAPS - você pode conferir o [iOS Loop](https://loopkit.github.io/loopdocs/)) e
* um [sistema de monitoramento contínuo de glicose](../Getting-Started/CompatiblesCgms.md). 

Em segundo lugar, você precisa **configurar seus componentes de software**: [AAPS](../SettingUpAaps/BuildingAaps.md), [fonte de CGM/FGM](../Getting-Started/CompatiblesCgms.md) e um [servidor de relatórios](../SettingUpAaps/SettingUpTheReportingServer.md).

Em terceiro lugar, você precisa aprender e **entender o design de referência do OpenAPS para verificar seus fatores de tratamento**. O princípio básico do loop fechado é que sua [taxa basal e relação de carboidratos](../SettingUpAaps/YourAapsProfile.md) estejam corretas. Todas as recomendações pressupõem que sua necessidade de basal está atendida e que quaisquer picos ou quedas que você vê são resultado de outros fatores, que por isso exigem ajustes pontuais (exercício, estresse etc.). Os ajustes que o loop fechado pode fazer foram limitados por segurança (veja a taxa máxima de basal temporária permitida em [OpenAPS Reference Design](https://openaps.org/reference-design/)), por isso você não quer gastar a dosagem permitida corrigindo uma basal de base errada. Se, por exemplo, o loop define com frequência basais temporárias baixas antes de uma refeição, é provável que sua basal precise de ajuste. Você pode usar o [Autotune](#autotune-how-autotune-calculates-adjustments) para analisar uma grande quantidade de dados e sugerir se e como as basais e/ou o ISF precisam ser ajustados, e também se a relação de carboidratos precisa ser alterada. Ou você pode testar e ajustar sua basal [do jeito tradicional](https://integrateddiabetes.com/basal-testing/).

### Que aspectos práticos do loop devo conhecer?

#### Proteção por senha

Se você não quer que suas configurações sejam alteradas com facilidade, pode protegê-las com uma senha, um PIN ou a autenticação biométrica do telefone (impressão digital, rosto). Abra **Configurações** > **Proteção** > **Proteção das configurações** e escolha o tipo de proteção. No mesmo lugar, você também pode proteger o app inteiro ou apenas os bólus. Veja [Proteção das configurações](#Preferences-settings-protection) para mais detalhes.

#### Smartwatches Android Wear

Se você usa o app do AAPS no relógio para dar bólus ou alterar configurações, cada solicitação precisa ser confirmada no relógio: depois de enviá-la, o relógio mostra um resumo com o botão **CONFIRMAR**. Veja [Uso do AAPS pelo seu smartwatch Wear OS](../RemoteFeatures/RemoteControlWearOS.md).

(FAQ-disconnect-pump)=

#### Desconectar bomba

Se você tirar a bomba para tomar banho de chuveiro ou de banheira, nadar, praticar esportes ou fazer outras atividades, precisa informar ao AAPS que nenhuma insulina está sendo administrada, para manter a IOB correta.

A bomba pode ser desconectada pelo [ícone do loop](#AapsScreens-loop-status) na tela principal do AAPS: toque nele e selecione **Desconectar bomba** com a duração de que você precisa. Se a atividade demorar mais do que o planejado, toque no ícone de novo e escolha uma nova duração: não é preciso reconectar antes. Veja [Desconectar a bomba para o banho ou atividades](#pumps-cannulas-disconnecting) para saber como evitar a falta de insulina durante desconexões longas.

#### Recomendações não baseadas em uma única leitura do CGM

Por segurança, as recomendações não se baseiam em uma única leitura do CGM, mas no delta médio. Por isso, se faltarem algumas leituras, pode levar um tempo depois que os dados voltarem até o AAPS voltar a fazer o loop.

#### Leituras adicionais

Existem vários blogs com boas dicas para ajudar você a entender os aspectos práticos do loop. Alguns deles não estão mais on-line: os links abaixo marcados como "cópia arquivada" abrem uma cópia salva no Internet Archive.

    * [Fine-tuning Settings](https://web.archive.org/web/20171029031305/http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM (cópia arquivada)
    * [Why DIA matters](https://web.archive.org/web/20231130035027/http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM (cópia arquivada)
    * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
    * [Hormones and autosens](https://web.archive.org/web/20170902081839/http://seemycgm.com/2017/06/06/hormones-2/) See my CGM (cópia arquivada)
    

(what-emergency-equipment-is-recommended-to-take-with-me)= (FAQ-emergency-equipment)=

### Que equipamento de emergência devo levar comigo?

Você precisa levar o mesmo equipamento de emergência que qualquer outra pessoa com diabetes tipo 1 em terapia com bomba de insulina. Ao usar o loop com o AAPS, é altamente recomendado ter o seguinte equipamento adicional com você ou perto de você:

* Carregador portátil e cabos para carregar seu smartphone, relógio e (se necessário) leitor BT ou dispositivo Link
* Bateria(s) da Bomba
* Acesso aos seus backups, tanto no telefone quanto na nuvem (por exemplo, Google Drive, Dropbox), para que você possa configurar o AAPS de novo em outro telefone (veja [Criação e restauração de backups](../Maintenance/ExportImportSettings.md)): 
  * o [apk](../SettingUpAaps/BuildingAaps.md) atual do AAPS e de todos os outros apps que você usa (por exemplo, xDrip, Juggluco, BYODA).
  * o seu arquivo de keystore (da compilação do apk) e a senha dele,
  * os seus arquivos mais recentes de exportação de configurações do AAPS e dos seus outros apps,
  * a sua senha mestra do **AAPS**: sem ela, você não consegue importar o arquivo de configurações.

(FAQ-organize-backups)=

#### Como organizar meus backups?

Exporte as configurações com muita regularidade: depois de cada troca de pod ou de reservatório, depois de alterar o seu perfil, quando validar um objetivo, se trocar de bomba… Mesmo que nada mude, exporte uma vez por mês. Guarde vários arquivos de exportação antigos.

O **AAPS** pode fazer isso por você: ele pode exportar suas configurações automaticamente (por exemplo, com uma [Automação](#ExportImportSettings-Automating-Settings-Export) depois de cada troca de pod) e salvar a exportação direto em uma pasta na nuvem (Google Drive). Veja [Criação e restauração de backups](../Maintenance/ExportImportSettings.md).

### Como posso fixar o CGM/FGM de forma segura?

Você pode fixá-lo com fita adesiva. Existem vários adesivos de cobertura ("overpatches") pré-perfurados para os sistemas de CGM mais comuns (pesquise no Google, eBay ou Amazon). Alguns loopers usam fita de cinesiologia padrão, mais barata, ou rocktape.

Você pode prendê-lo. Você também pode comprar braçadeiras para a parte superior do braço que prendem o CGM/FGM com uma faixa (pesquise no Google, eBay ou Amazon).

## Algoritmo APS

### Por que o OpenAPS AMA mostra "dia: 3" mesmo que eu tenha outro DIA no meu perfil?

Com o **OpenAPS AMA** selecionado em **Configuração** > **APS**, **Abrir plugin** mostra os dados enviados ao algoritmo. Na seção **Perfil**, `dia` é sempre 3,0 ou menos:

![Tela do plugin OpenAPS AMA com dia 3,0 nos dados do perfil](../images/screens/openaps_ama_plugin.png)

No AMA, o DIA na verdade não significa "duração da ação da insulina". É um parâmetro que antes estava ligado ao DIA. Agora significa "em quanto tempo a correção deve estar concluída". Não tem nada a ver com o cálculo da IOB. No SMB OpenAPS, esse parâmetro não é mais necessário.

## Outras configurações

### Configurações do Nightscout

(FAQ-nsclient-blocked)=

#### O AAPSClient (ou o AAPS) não envia dados: "Bloqueado pelas…". O que posso fazer?

O status do NSClient mostra por que nenhum dado é enviado:

* **Bloqueado pelas opções de conectividade**: as configurações de conexão não permitem a conexão atual. Por exemplo, você está usando dados móveis, mas só o Wi-Fi é permitido, ou não está em uma das redes Wi-Fi permitidas (SSIDs).
* **Bloqueado pelas opções de carregamento**: as configurações de conexão só permitem sincronizar enquanto o telefone está carregando (ou só usando a bateria), e isso não acontece agora.
* **Sem conectividade**: o telefone não tem conexão com a internet.

Verifique as [configurações de conexão do NSClient](#Preferences-nsclient): **Usar dados móveis**, **Usar roaming**, **Usar Wi-Fi**, **WiFi SSID**, **Sincronizar usando a bateria** e **Sincronizar durante o carregamento**.

### Configurações do CGM

(FAQ-advanced-filtering)=

#### Por que o AAPS diz "SMB sempre e após carboidratos desativado porque a fonte de BG ativa não suporta filtragem avançada"?

**Ativar SMB sempre** e **Ativar SMB após carboidratos** só podem ser usados com uma [fonte de dados de BG confiável](#GettingStarted-TrustedBGSource): um sensor e um app de CGM que conseguem informar ao **AAPS** de qual sensor vêm as leituras. Com qualquer outra fonte de BG, o **AAPS** desativa essas duas opções e mostra essa mensagem. Verifique a lista de fontes confiáveis e, se o seu sensor estiver nela, use um dos apps de CGM indicados para ele. Veja também [Suavização dos dados de glicose](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Bomba

#### Baterias

O loop pode gastar a bateria da bomba mais rápido do que o uso normal, porque o sistema se comunica por Bluetooth muito mais do que um usuário manual. É melhor trocar a bateria quando ela atingir 25%, pois a comunicação se torna desafiadora a partir deste nível. Você pode definir alarmes para níveis da bateria da bomba usando a variável PUMP_WARN_BATT_P no seu site do Nightscout. Truques para prolongar a duração da bateria incluem:

* reduzir o tempo que o LCD permanece ativado (no menu de configurações da bomba)
* reduzir o tempo que a luz de fundo permanece ativada (no menu de configurações da bomba)
* alterar configurações de notificação para bipar em vez de vibrar (no menu de configurações da bomba)
* use os botões da bomba apenas para recarregar; use o AAPS para ver todo o histórico, o nível da bateria e o volume do reservatório.
* Em alguns telefones, o app AAPS pode ser fechado com frequência para economizar energia ou liberar RAM. Quando o AAPS é reiniciado, a cada início ele estabelece uma conexão Bluetooth com a bomba e lê novamente a taxa basal atual e o histórico de bólus. Isso consome bateria. Para ver se isso está acontecendo, ative **Registrar evento de início do app** nas **Configurações Avançadas** do NSClient: o Nightscout vai receber um evento a cada reinício do AAPS, o que facilita acompanhar o problema. Para reduzir isso, desative a otimização de bateria para o AAPS, para que o telefone pare de fechá-lo: veja [economia de bateria](#FAQ-battery-savings) abaixo.
* limpe os terminais da bateria com um lenço com álcool para garantir que não reste cera/graxa da fabricação.
* nas [bombas Dana R/RS](../CompatiblePumps/DanaRS-Insulin-Pump.md), o procedimento de inicialização puxa uma corrente alta da bateria para romper de propósito a película de passivação (que evita a perda de energia durante o armazenamento), mas nem sempre consegue rompê-la 100%. Ou remova e reinsira a bateria 2-3 vezes até que ela mostre 100% na tela, ou use a chave de bateria para curto-circuitar a bateria antes de inserir, aplicando a ambos os terminais por uma fração de segundo.
* veja também mais dicas para [tipos específicos de bateria](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

#### Trocando reservatórios e cânulas

O reservatório precisa ser trocado diretamente na bomba; depois, a troca é registrada no **AAPS**. Siga o [guia passo a passo para trocar o reservatório e a cânula da bomba](#pumps-cannulas-changing-reservoir-and-cannula).

### Papel de parede

Você encontra o papel de parede do AAPS para o seu telefone na [página Telefones](#Phones-phone-wallpaper).

### Uso diário

Muitas das situações abaixo podem ser preparadas uma vez como um [cenário](#scenes): uma predefinição que troca o perfil, o alvo temporário e outras configurações com um toque. O **AAPS** oferece modelos prontos, por exemplo *Exercício*, *Sono*, *Álcool* ou *Banho*.

#### Higiene

(what-to-do-when-taking-a-shower-or-bath)=

##### O que fazer ao tomar banho?

Você pode remover a bomba ao tomar banho. Por esse curto período você talvez não precise dela, mas deve informar ao AAPS que desconectou a bomba, para que os cálculos de IOB fiquem corretos. Veja a [descrição acima](#FAQ-disconnect-pump). O modelo de [cenário](#scenes) *Banho* faz isso por você.

#### Trabalho

Dependendo do seu trabalho, você pode usar fatores de tratamento diferentes nos dias de trabalho. Como looper, você deve considerar uma [troca de perfil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) para o seu dia de trabalho típico. Por exemplo, você pode mudar para um perfil acima de 100% se tiver um trabalho menos exigente (por exemplo, sentado a uma mesa), ou abaixo de 100% se ficar ativo e de pé o dia todo. Você também pode considerar um alvo temporário alto ou baixo ou um [deslocamento de tempo do seu perfil](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) quando trabalhar muito mais cedo ou mais tarde do que o normal, ou se trabalhar em turnos diferentes. Você também pode criar um segundo perfil (por exemplo, "casa" e "dia de trabalho") e fazer uma troca de perfil diária para o perfil de que realmente precisa, ou salvar suas configurações de dia de trabalho como um [cenário](#scenes).

### Atividades de lazer

(FAQ-sports)=

#### Esportes

Você precisa rever seus antigos hábitos de esporte da época antes do loop. Se você simplesmente consumir um ou mais carboidratos para esporte como antes, o sistema de loop fechado vai reconhecê-los e corrigi-los.

Assim, você teria mais carboidratos ativos, mas ao mesmo tempo o loop reagiria e liberaria insulina.

Com o loop, tente estes passos:

* Faça uma [troca de perfil](#ProfileSwitch-change-percentage) < 100%: toque no nome do perfil na tela principal, toque no botão redondo **▶** e defina **Porcentagem** e **Duração**.
* Defina um [alvo temporário de atividade](#TempTargets-activity-temp-target) acima do seu alvo padrão. Com uma porcentagem abaixo de 100% e uma duração, a mesma tela **Ativar** oferece a chave **Alvo Temporário / Atividade**, que inicia os dois ao mesmo tempo.
* Se você usa SMB, verifique se ["Ativar SMB com alvo temporário alto"](#Open-APS-features-enable-smb-with-high-temp-targets) e ["Ativar SMB sempre"](#Open-APS-features-enable-smb-always) estão desativados.

A preparação antes e o acompanhamento depois dessas configurações são importantes. Faça as mudanças com antecedência antes do esporte e considere o efeito do reabastecimento dos músculos (glicogênio).

Os modelos de [cenário](#scenes) *Exercício* e *Noite pós-exercício* reúnem essas configurações, para que você possa iniciá-las com um toque. Se você pratica esportes regularmente no mesmo horário (por exemplo, uma aula na academia), pode considerar usar uma [automação](../DailyLifeWithAaps/Automations.md) para iniciar a troca de perfil e o TT, ou o cenário. Uma automação baseada na localização também pode ser uma ideia, mas torna a preparação mais difícil.

A porcentagem da troca de perfil, o valor do seu alvo temporário de atividade e o melhor momento para as mudanças são individuais. Comece pelo lado seguro ao procurar o valor certo para você (comece com uma porcentagem menor e um TT mais alto).

#### Sexo

Você pode remover a bomba para ficar "livre", mas deve informar ao AAPS para que os cálculos de IOB fiquem corretos. Veja a [descrição acima](#FAQ-disconnect-pump).

#### Beber álcool

Beber álcool é arriscado no modo de loop fechado, pois o algoritmo não consegue prever corretamente a glicose influenciada pelo álcool. Você precisa encontrar o seu próprio método para tratar isso usando as seguintes funções do AAPS:

* Desativar o modo de loop fechado e tratar o diabetes manualmente ou
* definir alvos temporários altos e desativar o UAM para evitar que o loop aumente a IOB por causa de uma refeição não anunciada ou
* fazer uma [troca de perfil](#ProfileSwitch-change-percentage) para bem menos de 100% 

O modelo de [cenário](#scenes) *Álcool* é um ponto de partida que você pode adaptar ao seu próprio método.

Ao beber álcool, você sempre precisa ficar de olho no seu CGM para evitar manualmente uma hipoglicemia comendo carboidratos.

#### Dormindo

##### Como fazer o loop durante a noite sem radiação do celular e do Wi-Fi?

Muitos usuários colocam o telefone em modo avião à noite. Se quiser que o loop ajude você enquanto dorme, faça o seguinte (isso só funciona se o seu app de CGM rodar no mesmo telefone que o AAPS, como xDrip, Juggluco ou BYODA; NÃO funciona se você recebe as leituras de glicose pelo Nightscout):

1. Ative o modo avião no seu celular.
2. Aguarde até o modo avião estar ativo.
3. Ative o Bluetooth.

Agora você não recebe chamadas nem está conectado à internet. Mas o loop continua funcionando.

Algumas pessoas tiveram problemas com a transmissão local (o AAPS não recebe valores de glicose do xDrip) quando o telefone está em modo avião. No xDrip, vá em Settings > Inter-app settings > Identify receiver e digite `info.nightscout.androidaps`.

![Configurações Inter-app do xDrip: Identify receiver](../images/xDrip_InterApp_NS.png)

Se quiser configurações diferentes à noite (por exemplo, um alvo mais alto), o modelo de [cenário](#scenes) *Sono* é um bom ponto de partida.

#### Viagens

##### Como lidar com mudanças de fuso horário?

Com a Dana R e a Dana R Korean, você não precisa fazer nada. Para outras bombas, veja a página [Mudança de fuso horário e horário de verão](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) para mais detalhes.

### Temas médicos

#### Hospitalização

Se quiser compartilhar algumas informações sobre o AAPS e o loop DIY com seus médicos, você pode imprimir o [guia do AAPS para médicos](../UsefulLinks/ClinicianGuideToAaps.md).

#### Consulta com seu endocrinologista

##### Relatórios

Você pode mostrar seus relatórios do Nightscout (https://YOUR-NS-SITE.com/report) ou usar o [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

## Perguntas frequentes no Discord e suas respostas...

### Meu problema não está listado aqui.

Veja [onde obter ajuda](../GettingHelp/WhereCanIGetHelp.md). Se você encontrou a solução sozinho, **lembre-nos de adicioná-la a esta lista!**

### Compilação e instalação

(FAQ-build-errors)=

#### Tenho problemas e erros ao compilar o app.

Verifique a página de resolução de problemas do modo como você compila o **AAPS** (veja [Compilar o AAPS](../SettingUpAaps/BuildingAaps.md)):

* compilação no navegador: [Compilação no navegador: resolução de problemas](#aaps-ci-troubleshooting),
* compilação com o Android Studio: [Resolução de problemas do Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

(FAQ-build-error-file-name-too-long)=

#### Erro de compilação: file name too long (nome de arquivo longo demais)

Este erro pode acontecer ao compilar com o Android Studio: a compilação para com um erro dizendo que o nome do arquivo é longo demais. Soluções possíveis: Mova o código-fonte para uma pasta mais próxima da pasta raiz do seu disco (por exemplo, "C:\src\AndroidAPS").

No Android Studio: Verifique se o "Gradle" terminou a sincronização e a indexação depois de abrir o projeto e fazer o pull do GitHub. Execute Build->Clean Project antes de fazer um Rebuild Project. Execute File->Invalidate Caches e reinicie o Android Studio.

(FAQ-running-dev-version)=

#### Alerta: Executando a versão dev. O loop fechado está desativado

O **AAPS** mostra esta mensagem quando você usa uma versão de desenvolvimento (dev) sem o modo engenheiro: em uma versão dev, o loop fechado só funciona no modo engenheiro.

A versão dev serve para testes, não para uso real do loop: leia [Branch de desenvolvimento](../AdvancedOptions/DevBranch.md) antes de continuar.

Para ativar o modo engenheiro:

1. Coloque um arquivo chamado `engineering_mode` na subpasta `extra` do seu diretório do AAPS (a pasta que você escolheu no assistente de configuração, normalmente `AAPS/extra`). Qualquer arquivo serve, desde que tenha o nome correto.
2. Reinicie o **AAPS** para que ele encontre o arquivo.

Dica: faça uma cópia de um arquivo de log existente e renomeie-a para "engineering_mode" (atenção: sem extensão de arquivo!).

### Objetivos

#### Estou preso em um objetivo e preciso de ajuda.

Primeiro leia [Completar os objetivos](../SettingUpAaps/CompletingTheObjectives.md). Se ainda estiver preso, faça uma captura de tela da pergunta e das respostas e publique no canal do AAPS no Discord. Não se esqueça de dizer quais opções você escolheu (ou não) e por quê. Você vai receber dicas e ajuda, mas precisa encontrar as respostas.

### Configurações, senhas e backups

(FAQ-reset-master-password)=

#### Como redefinir a senha mestra?

Se você esqueceu sua senha mestra, pode redefini-la para o número de série da sua bomba:

1. Crie um arquivo vazio chamado `PasswordReset` (sem extensão de arquivo) na subpasta `extra` do seu diretório do AAPS (normalmente `AAPS/extra`).
2. Reinicie o **AAPS**. Sua bomba precisa estar conectada: o **AAPS** mostra "Aguardando a bomba…" e precisa ler o número de série da bomba em até 30 segundos.
3. O **AAPS** mostra "Senha foi definida!": sua senha mestra agora é o **número de série da bomba**. O arquivo `PasswordReset` é apagado automaticamente.
4. Abra **Configurações** > **Proteção** > **Senha mestra** e defina uma nova senha.

Se a bomba não for alcançada a tempo, nada muda: verifique a conexão com a bomba e tente de novo.

Isso redefine apenas a senha mestra. Uma senha ou PIN de configurações, do aplicativo ou de bólus não é redefinido, mas você sempre pode usar a senha mestra no lugar deles.

    {admonition} Arquivos de configurações antigos
    :class: warning
    Arquivos de configurações exportados com a senha mestra antiga só podem ser importados com essa senha antiga.

(FAQ-where-are-settings-files)=

#### Onde encontro os arquivos de configurações?

Os arquivos de configurações ficam na subpasta `preferences` do diretório do AAPS que você escolheu no [assistente de configuração](#SetupWizard-StoragePermission) (por exemplo, `/internal storage/AAPS/preferences`). Se você configurou uma pasta na nuvem (Google Drive), suas exportações também podem ser salvas lá. Veja [Criação e restauração de backups](../Maintenance/ExportImportSettings.md).

ATENÇÃO: não perca sua senha, pois sem ela você não conseguirá importar um arquivo de configurações criptografado!

(FAQ-import-settings-earlier-versions)=

#### Como importar configurações de versões anteriores do AAPS para o AAPS v3 ou v4?

Você só pode importar configurações (no AAPS v3 ou v4) que foram exportadas com o AAPS v2.8x ou mais recente. Se você usava uma versão do AAPS anterior à v2.8x ou precisa usar exportações de configurações anteriores à v2.8x, primeiro precisa instalar o AAPS v2.8. Importe as configurações antigas da v2.x na v2.8. Depois de verificar que está tudo certo, você pode exportar as configurações da v2.8. Instale a versão atual do AAPS e importe nela as configurações da v2.8.

Se você usar a mesma chave para compilar a versão antiga e a nova, nem vai precisar importar as configurações. Você pode instalar a nova versão por cima da antiga.

Foram adicionados alguns objetivos novos. Você vai precisar validá-los.

(FAQ-delete-treatments)=

#### Onde posso apagar tratamentos?

Abra o **menu** (☰) e selecione **Histórico de tratamentos**. Toque e segure um registro para selecioná-lo, toque em mais registros se precisar, depois toque no ícone de **lixeira** e confirme. Veja [Histórico de tratamentos](#aaps-screens-treatments).

### Problemas com o telefone e a conexão

(FAQ-aaps-stops)=

#### O AAPS para todos os dias mais ou menos no mesmo horário.

* Em alguns telefones, o Google Play Protect pode encerrar o **AAPS** toda manhã. Se isso acontecer, abra as opções do Google Play e desative o **Google Play Protect**.
* Procure apps de "limpeza" (por exemplo, CCleaner) e desinstale-os.
* Desative todas as otimizações de bateria para o **AAPS** (veja [economia de bateria](#FAQ-battery-savings) abaixo).

(FAQ-battery-savings)=

#### Como configurar a economia de bateria?

Seu telefone pode suspender o **AAPS** e apps relacionados (app de CGM, Bluetooth) quando você não os está usando. Então o **AAPS** não consegue fazer seu trabalho, e as conexões Bluetooth com o sensor e a bomba (ou o RileyLink) podem ser encerradas, causando alertas de "bomba inacessível" e erros de comunicação.

Desative a otimização de bateria para o **AAPS**, para o seu app de CGM (por exemplo, xDrip) e para o app de sistema do Bluetooth. A forma de fazer isso depende da marca, do modelo e da versão do Android do telefone:

* veja [Otimização de bateria](#generaltroubleshooting-android-related-issues) para telefones Pixel, Samsung e Huawei,
* no **AAPS**, abra o **menu** (☰) > **Sobre** e toque em **Não encerre meu aplicativo?**, ou visite [Don't kill my app](https://dontkillmyapp.com/) para outras marcas.

Se você não tem certeza de que a economia de bateria causa o problema, pode desativar temporariamente toda a economia de bateria do telefone: a bateria vai acabar mais rápido, mas você vai ver logo se o problema desaparece.

(FAQ-pump-unreachable-alerts)=

#### Alertas de bomba inacessível várias vezes por dia ou à noite.

Seu telefone pode estar suspendendo o **AAPS** ou até o Bluetooth, fazendo com que ele perca a conexão com a bomba ou o RileyLink (veja [economia de bateria](#FAQ-battery-savings) acima).

Você também pode mudar quando o alerta é disparado: toque no ícone **Configurações** (engrenagem) no canto superior direito da tela principal e selecione **Alertas locais** > **Limite de bomba inacessível** (30 a 300 minutos). Veja a página da sua bomba: algumas recomendam um valor, por exemplo 120 minutos para o [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md).

(FAQ-link-unresponsive)=

#### Meu link/bomba/pod não responde (RL/OL/EmaLink…)

Com alguns telefones, ocorrem desconexões Bluetooth dos Links (RL/OL/EmaL...).

Alguns também têm Links que não respondem (o AAPS diz que estão conectados, mas os Links não conseguem alcançar ou comandar a bomba.)

Primeiro tente o botão **Redefinir RileyLink** na tela da bomba (veja a página da sua bomba: [Medtronic](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump), [Omnipod Eros](#OmnipodEros-reset-rileylink-config-notes)). Se isso não ajudar, a forma mais fácil de fazer todas essas partes funcionarem juntas é:

1. Desligue o Link.
2. Feche o **AAPS** (**menu** (☰) > **Sair**).
3. Toque e segure o ícone do **AAPS**, abra **App info** (Informações do app) do Android, toque em **Force stop** (Forçar parada) e depois em **Storage** (Armazenamento) > **Clear cache** (Limpar cache) (NÃO limpe o armazenamento/os dados!).
4. Raramente, alguns telefones podem precisar ser reiniciados neste ponto. Você pode tentar sem reiniciar.
5. Ligue o Link.
6. Inicie o **AAPS**.
7. Na tela da bomba, toque em **Parear RileyLink** e selecione o seu Link de novo.

### Controle remoto

(FAQ-aapsclient)=

#### Configurar e usar o app remoto AAPSClient

O **AAPSClient** é um app separado que permite a um cuidador acompanhar e controlar o **AAPS** a distância. Desde o **AAPS** v4, controlar o **AAPS** pelo AAPSClient exige um pareamento único entre os dois apps. Veja:

* [O app AAPSClient](#aapsclient-app): instalação, primeiro início e pareamento,
* [Controle dispositivo principal ↔ cliente](#client-master-control): o que pode ser controlado e como funciona o pareamento,
* [AAPSClient em um smartwatch](#remotecontrol-smartwatches).

(FAQ-hardened-mode)=

#### Os tratamentos que eu insiro no site do Nightscout não são aplicados

Isso é o [modo reforçado](#client-master-control-hardened-mode). Enquanto o controle do cliente estiver ativado — sempre no Modo simples — o **AAPS** aceita mudanças apenas de clientes pareados, não do site do Nightscout nem de outros apps. Em vez disso, insira-os em um **AAPSClient** pareado.

### Alertas e avisos

#### Tenho um selo de aviso vermelho (triângulo vermelho) / O AAPS não ativa o loop fechado / O loop fica em LGS / Tive um triângulo amarelo

O selo de aviso vermelho no atalho da fonte de BG é um recurso de segurança do AAPS. Veja [Sinal de aviso de BG](#aaps-screens-bg-warning-sign) para a explicação completa.

Um selo de aviso vermelho no atalho da fonte de BG na barra inferior (o triângulo vermelho das versões antigas) significa que você tem glicoses duplicadas e o AAPS não consegue calcular os deltas com precisão. Um loop fechado é colocado no modo **Suspensão por glicose baixa**: ele ainda reduz ou suspende sua basal para proteger você contra hipoglicemias, mas não administra insulina de correção. Você precisa apagar uma glicose de cada valor duplicado para remover o aviso. Toque no atalho para abrir a sua [tela da fonte de BG](#aaps-screens-bg-source): a duplicata aparece destacada em vermelho. Toque e segure uma linha que você quer apagar, marque uma de cada linha duplicada e toque no ícone de lixeira. Pode ser necessário redefinir os bancos de dados do AAPS se houver muitas glicoses duplicadas. Nesse caso, você também vai perder estatísticas, IOB, COB e o perfil selecionado.

Depois que o aviso sumir, o AAPS não volta sozinho para **Loop Fechado**. Toque no ícone do loop na tela principal e selecione **Loop Fechado** de novo.

Possível origem do problema: xDrip e/ou NS preenchendo depois glicoses que faltavam (backfill).

O triângulo amarelo das versões antigas indicava um atraso instável entre as leituras de glicose (glicoses não recebidas regularmente a cada 5 min, ou glicoses faltando), o que acontece com frequência com o Libre ou depois de trocar o transmissor do G6. O **AAPS** 4 não mostra mais esse aviso: ele recalcula os valores em segundo plano e o loop funciona corretamente.

### Omnipod DASH

(FAQ-move-dash-pod)=

#### Posso mover um Pod DASH ativo para outro telefone?

O estado do Pod está incluído nas configurações exportadas, então um Pod ativo pode ser movido para outro telefone exportando as configurações logo antes da mudança e importando-as no outro telefone. Isso não tem suporte oficial e há risco de perder o Pod: se possível, tente quando o seu Pod estiver perto de expirar.

Leia estas seções primeiro:

* [Exportar e importar configurações](#omnipod-dash-export-import) na página do Omnipod DASH, e [Bombas sem tubo](#ExportImportSettings-tubeless-pumps): no novo telefone, marque **Substituir também as configurações da bomba** e use um arquivo exportado durante o Pod que você está usando agora,
* [Descartar um pod](#omnipod-dash-discard-pod), para remover depois o Pod do telefone antigo. Mantenha o telefone antigo em modo avião até o Pod ser descartado, para que os dois telefones nunca se comuniquem com o Pod ao mesmo tempo.