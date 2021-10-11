# Configurador

Dependendo de suas configurações pode-se abrir o Configurador através de um separador na parte superior do ecrã ou através do menu hambúrguer.

![Abrir configurador](../images/ConfBuild_Open.png)

O Configurador (Conf) é o separador onde ativa e desativa os módulos de configurações. As caixas do lado esquerdo (A) permitem selecionar qual usar, as caixas do lado direito (C) permitem que as veja como um separador (E) no AndroidAPS. Caso a caixa direita não esteja ativada, pode chegar à função utilizando o menu hamburger (D) no topo esquerdo do ecrã.

Onde existem configurações adicionais disponíveis dentro do módulo, pode clicar na roda dentada (B) que o levará para as configurações específicas dentro das preferências.

**Primeira configuração:** Desde AAPS 2.0 um assistente de instalação guia através do processo de configuração do AndroidAPS. Carregue no menu de 3 pontos no lado superior direito do ecrã (F) e selecione 'Assistente de instalação' para usá-lo.

![Caixas de seleção do configurador e roda dentada](../images/ConfBuild_ConfigBuilder.png)

## Separador ou menu Hambúrguer

Com a caixa de seleção sob o símbolo de olho, pode decidir como abrir a seção de programa correspondente.

![Separador ou menu Hambúrguer](../images/ConfBuild_TabOrHH.png)

## Perfil

Selecione o perfil basal que prefere usar. Ver a página [Perfis](../Usage/Profiles.md) para mais informações de configuração.

### Perfil local (recomendado)

O perfil local usa o perfil basal inserido manualmente no telefone. Assim que é selecionado, aparece um novo separador em AAPS, onde é possivel alterar os dados do perfil lidos da bomba se necessário. Com o próximo interruptor de perfil eles são então escritos na bomba em perfil 1. Este perfil é recomendado pois não depende de ligação à internet.

Os seus perfis locais são parte das [configurações exportadas](../Usage/ExportImportSettings.rst). Portanto, certifique-se de ter um backup num lugar seguro.

![Definições de Perfil Local](../images/LocalProfile_Settings.png)

Botões:

* verde (+): adicionar
* vermelho (X): excluir
* seta azul (↷): duplicar

Se você fizer alguma alteração no seu perfil, certifique-se que está a editar o perfil correto. In profile tab there is not always shown the actual profile being used - e.g. if you made a profile switch by using the profile tab on homescreen it may differ from the profile actually shown in profile tab as there is no connection between these.

#### Fazer Mudança De Perfil

Pode facilmente criar um novo perfil local a partir da mudança de perfil. Neste caso o deslocamento temporal e percentagem serão aplicados ao novo perfil local.

1. Vá para o separador "tratamentos".
2. Selecione Troca de Perfil.
3. Pressione "Clone".
4. Pode editar o novo perfil local na guia Perfil Local (PF) ou no menu do lado esquerdo

![Fazer Mudança De Perfil](../images/LocalProfile_ClonePS.png)

Se deseja mudar de perfil do Nightscout para o perfil local basta fazer uma troca de perfil no seu perfil NS e clone a troca de perfil conforme descrito acima.

#### Enviar perfis locais para o Nightscout

Os perfis locais também podem ser carregados para o Nightscout. As configurações podem ser encontradas em [preferências do NSClient](../Configuration/Preferences#nsclient).

![Upload do Perfil Local para o NS](../images/LocalProfile_UploadNS2.png)

Vantagens:

* nenhuma conexão de internet necessária para alterar configurações de perfil
* mudanças de perfil podem ser feitas diretamente no telefone
* novo perfil pode ser criado a partir da Troca de Perfil
* perfis locais podem ser enviados para o Nightscout

Desvantagens:

* nenhuma

### Assistente de Perfil

Assistentes de perfis oferecem duas funções:

1. Encontre um perfil para crianças
2. Compare dois perfis ou trocas de perfis de modo a clonar um novo perfil

Mais detalhes são explicados na [página Assistente de Perfil ](../Configuration/profilehelper.rst).

### Perfil NS

Perfil NS usa os perfis que guardou na sua página NightScout (https://[yournightscoutsiteaddress]/profile). Pode usar a [Troca de Perfil](../Usage/Profiles.md) para mudar o perfil que está ativo, esta grava o perfil para a bomba em caso de falha da AndroidAPS. Isto permite facilmente criar vários perfis no Nightscout (por exemplo, trabalho, casa, desporto, férias, etc.). Logo após clicar em "Salvar" serão transferidos para a AAPS se o seu smartphone estiver online. Mesmo sem uma ligação à Internet ou sem uma ligação Nightscout, os perfis de Nightscout estão disponíveis na AAPS uma vez sincronizados.

Faça uma [Troca de perfil](../Getting-Started/Screenshots.md#current-profile) para ativar um perfil do Nightscout. A AAPS também escreve o perfil selecionado para a bomba após a mudança de perfil, para que ele esteja disponível sem a AAPS numa emergência e continue a ser executado.

Vantagens:

* múltiplos perfis
* fácil editar via PC ou tablet

Desvantagens:

* nenhuma alteração local para configurações de perfil
* o perfil não pode ser alterado diretamente no telefone

## Insulina

![Tipo de Insulina](../images/ConfBuild_Insulin.png)

* Selecione o tipo de curva de insulina que está a utilizar.
* As opções 'Oref Ação-Rápida','Oref Ultra-Rápida' e 'Oref Pico-Livre' têm todas um gráfico exponencial. Mais informação disponível em [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves). 
* A curva varia baseada com a Duração da Ação da Insulina (DIA) e o tempo de pico.
    
    * A linha ROXA mostra a quantidade de **insulina ativa** depois da mesma ter sido injetada e como vai diminuindo com o tempo.
    * A linha AZUL mostra **como está ativa** a insulina.

### DIA

* A Duração de Ação da Insulina (DIA) varia de pessoa para pessoa. É por isso que tem que experimentar e descobrir o seu. 
* Mas deve ser sempre pelo menos 5 horas.
* Para muitas pessoas que usam insulinas ultra-rápidas como a Fiasp, não existe nenhum efeito notório 3-4 horas, após a sua administração, mesmo que estejam disponíveis 0.0xx unidades. Este valor residual ainda pode ser visível durante o desporto, por exemplo. Por isso o AndroidAPS usa um DIA mínimo de 5h.
* Pode ler mais sobre isto na seção Perfil de Insulina de [nesta página ](../Getting-Started/Screenshots#insulin-profile). 

### Diferenças dos Tipos de Insulina

* Para "ação rápida", "ultra-rápida" e "Lyumjev", o DIA é a única variável que se pode ajustar, o tempo de pico é fixo. 
* O Pico Livre permite ajustar tanto o DIA como o tempo para o pico, e deve ser usado apenas por utilizadores avançados que conhecem os efeitos destas configurações. 
* O gráfico da [curva de insulina](../Getting-Started/Screenshots#insulin-profile) ajuda a entender as diferentes curvas. 
* Pode vê-lo ativando a caixa de seleção para mostrá-la como um separador, caso contrário estará no menu hamburger.

#### Oref Acção Rápida

* recomendado para Humalog, Novolog e Novorapid
* DIA = pelo menos 5.0h
* Máx. pico = 75 minutos após a administração (fixo, não ajustável)

#### Ultra-Rapid Oref

* recomendado para FIASP
* DIA = pelo menos 5.0h
* Máx. pico = 55 minutos após a administração (fixo, não ajustável)

#### Lyumjev

* perfil especial para a insulina Lyumjev
* DIA = pelo menos 5.0h
* Máx. pico = 45 minutos após a injeção (fixo, não ajustável)

#### Oref Pico-Livre

* Com o perfil "Pico Livre 0ref" pode inserir-se individualmente o tempo do pico.
* O DIA é definido automaticamente para 5 horas se estiver especificado mais alto no perfil.
* Este perfil de efeito é recomendado se é utilizada uma insulina não instalada ou uma mistura de diferentes insulinas.

## Fonte de Glic.

Selecione a fonte de glicemia que utiliza - ver [Fonte de GLIC](BG-Source.rst) para mais informações de configuração.

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* Glicose ClienteNS
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - apenas a versão 4.15.57 ou mais recente são suportados
* [App Dexcom (corrigida)](https://github.com/dexcomapp/dexcomapp/) - Selecione 'Enviar dados BG para xDrip+' se quiser usar alarmes xDrip+.
    
    ![Configurador Fonte da Glicemia (GLIC)](../images/ConfBuild_BGSource.png)

* [Poctech](https://www.poctechcorp.com/en/contents/268/5682.html)

* [ Aplicação Tomato](http://tomato.cool/) para aparelhos MiaoMiao
* Glicemia Aleatória: Cria valores de Glicemia (BG) aleatórios (Apenas para demonstração)

## Bomba

Selecione a bomba que está a utilizar.

* [Dana R](DanaR-Insulin-Pump.md)
* DanaR Coreana (para bombas domésticas DanaR)
* Dana Rv2 (Bomba DanaR com upgrade de software não oficial)
* [Dana RS](DanaRS-Insulin-Pump.md)
* [Accu Chek Insight](Accu-Chek-Insight-Pump.md)
* [Accu Chek Combo](Accu-Chek-Combo-Pump.md) (Requer a instalação da Ruffy)
* [Medtronic](MedtronicPump.md)
* MDI (recebe sugestões AAPS para a terapia de múltiplas injecções diárias)
* Bomba Virtual (loop aberto para uma bomba que nao tenha ainda nenhum driver - apenas sugestões AAPS)

Usar **Configurações avançadas** para ativar o BT watchdog se necessário. It switches off bluetooth for one second if no connection to the pump is possible. This may help on some phones where the bluetooth stack freezes.

[Password for Dana RS pump](../Configuration/DanaRS-Insulin-Pump.md) must be entered correctly. Password was not checked in previous versions.

## Detecção de Sensibilidade

Selecione o tipo de deteção de sensibilidade. Para mais detalhes sobre diferentes designs por favor [clique aqui](../Configuration/Sensitivity-detection-and-COB.md). Os dados históricos serão analisados frequentemente e serão feitos ajustes se reconhecer que está mais sensível (ou inversamente, mais resistente) à insulina do que o habitual. More details about the Sensitivity algorithm can be read in the [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

You can view your sensitivity on the homescreen by selecting SEN and watching the white line. Note, you need to be in [Objective 8](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens) in order to let Sensitivity Detection/[Autosens](../Usage/Open-APS-features#autosens) automatically adjust the amount of insulin delivered. Before reaching that objective, the Autosens percentage / the line in your graph is displayed for information only.

### Absorption settings

If you use Oref1 with SMB you must change **min_5m_carbimpact** to 8. The value is only used during gaps in CGM readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause AAPS to decay COB. At times when [carb absorption](../Usage/COB-calculation.rst) can't be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. Basically, it is a failsafe.

## APS

Selecione o algoritmo APS desejado para ajustes da terapia. Pode ver os detalhes do algoritmo escolhido no separador OpenAPS(OAPS).

* OpenAPS AMA (Algoritmo de Assistente Avançado de Refeições de 2017) Mais detalhes sobre o OpenAPS AMA podem ser encontrados em [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). Os benefícios, de forma simples, são verificados depois de se dar um bólus à refeição, o sistema coloca um perfil mais alto (high-temp) mais rapidamente isto SE forem inseridos hidratos de carbono de forma confiável.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (Super Micro Bólus, o algoritmo mais recente para usuários experientes)  
    Atenção que é necessário estar no [Objetivo 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) para usar OpenAPS SMB e min_5m_carbimpact deve ser definido para 8 no Configurador > Sensibilidade de deteção > Configurações Sensibilidade Oref1.

## Loop

* Mudar entre Loop Aberto, Loop Fechado e Suspensão por Glicemia Baixa (LGS).

![Configurador - Modo de Loop](../images/ConfigBuilder_LoopLGS.png)

### Loop Aberto

* A AAPS avalia continuamente todos os dados disponíveis (IA, HC, GLI ...) e se necessário faz sugestões de tratamento sobre como ajustar a sua terapia. 
* As sugestões não serão executadas automaticamente (como em loop fechado), têm que ser introduzidas manualmente na bomba ou usando um botão, caso esteja a usar uma bomba compatível (Dana R/RS ou Accu Chek Combo). 
* Esta opção é para conhecer como funciona a AndroidAPS ou se está a usar uma bomba não suportada.

### Loop Fechado

* A AAPS avalia continuamente todos os dados disponíveis (IA, HC, GLI,...) e, se necessário, ajusta automaticamente o tratamento (ou seja, sem intervenção sua) para alcançar o intervalo ou valor alvo definido (bólus, basal temporária, interrupção da insulina para evitar hipo, etc.). 
* O Loop Fechado funciona dentro de inúmeros limites de segurança, que podem ser configurados individualmente.
* O Loop Fechado só é possível se estiver no [ Objective 6 ](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) ou superior e use uma bomba suportada.
* Nota: No modo Loop Fechado, é preferível um alvo específico ao invés de um intervalo de valores (ex: 5.5 mmol ou 100mg/dl ao invés de 5,0 - 7,0 mmol ou 90 - 125 mg/dl).

### Suspensão por Glicemia Baixa (SGB)

* máxIA definida como zero
* Isto significa que se a glicemia está a baixar, o sistema pode reduzir-lhe a basal.
* Mas se o nível de glicemia está a subir, nenhuma correção automática será efetuada. Os valores basais permanecerão os mesmos do perfil selecionado.
* Apenas se a basal IA é negativa (originada por uma Suspensão por Glicose Baixa), será administrada insulina adicional para baixar a glicemia.

### Pedido de mudança mínima

* Ao usar o loop aberto irá receber notificações sempre que a AAPS recomendar para ajustar a taxa basal. 
* To reduce number of notifications you can either use a wider bg target range or increase percentage of the minimal request rate.
* This defines the relative change required to trigger a notification.

## Objectivos (programa de aprendizagem)

AndroidAPS has a leraning program (objectives) that you have to fulfill step by step. This should guide you safely through setting up a closed loop system. It guarantees that you have set everything up correctly and understand what the system does exactly. This is the only way you can trust the system.

You should [export your settings](../Usage/ExportImportSettings.rst) (including progress of the objectives) on a regularly basis. In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

See [Objectives](../Usage/Objectives.rst) page for more information.

## Tratamentos

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](../Getting-Started/Screenshots#carb-correction).

## Geral

### Visão Geral

Displays the current state of your loop and buttons for most common actions (see [section The Homescreen](../Getting-Started/Screenshots.md) for details). Settings can be accessed by clicking the cog wheel.

#### Keep screen on

Option 'Keep screen on' will force Android to keep the screen on at all times. This is useful for presentations etc. But it consumes a lot of battery power. Therefore, it is recommended to connect the smartphone to a charger cable.

#### Buttons

Define which Buttons are shown on the home screen.

* Tratamentos
* Calculadora
* Insulina
* Carbs
* CGM (opens xDrip+)
* Calibration

Se você usar Super Micro Bolus (SMB) as funções de loop serão desativadas de acordo com as suas definições em <0>"Máx de minutos de basal para limitar os SMB"</0>, se não utilizar os SMB as funções de loop serão desativadas durante 2 horas.</1> Detalhes sobre os SMB podem ser encontrados <2>aqui</2>.

#### QuickWizard settings

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![Botão do Assistente Rápido](../images/ConfBuild_QuickWizard.png)

#### Default Temp-Targets

Choose default temp-targets (duration and target). Preset values are:

* eating soon: target 72 mg/dl / 4.0 mmol/l, duration 45 min
* activity: target 140 mg/dl / 7.8 mmol/l, duration 90 min
* hypo: target 125 mg/dl / 6.9 mmol/l, duration 45 min

#### Fill/Prime standard insulin amounts

Escolha as quantidades padrão usando os três botões para purgar/preencher, dependendo do comprimento do seu cateter/cânula.

#### Range of visualization

Escolha os valores de glicose alta e baixa para o gráfico na visão geral do AndroidAPS e relógio inteligente. It is only the visualization, not the target range for your BG. Example: 70 - 180 mg/dl or 3.9 - 10 mmol/l

#### Abreviar títulos dos separadores

Choose wether the tab titles in AndroidAPS are long (e.g. ACTIONS, LOCAL PROFILE, AUTOMATION) or short (e.g. ACT, LP, AUTO)

#### Mostrar campo de notas na janela de tratamentos

Choose if you want to have a notes field when entering treatments or not.

#### Luzes de Estado

Choose if you want to have [status lights](../Configuration/Preferences#status-lights) on overview for cannula age, insulin age, sensor age, battery age, reservoir level or battery level. When warning level is reached, the color of the status light will switch to yellow. Critical age will show up in red.

#### Advanced settings

**Deliver this part of bolus wizard result**: When using SMB, many people do not meal-bolus 100% of needed insulin, but only a part of it (e.g. 75 %) and let the SMB with UAM (unattended meal detection) do the rest. In this setting, you can choose a default value for the percenteage the bolus wizard should calculate with. If this setting is 75 % and you had to bolus 10u, the bolus wizard will propose a meal bolus of only 7.5 units.

**Enable super bolus functionality in wizard** (It is different from *super micro bolus*!): Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Ações

* Some buttons to quickly access common features.
* See [AAPS screenshots](../Getting-Started/Screenshots#action-tab) for details.

### Automatização

User defined automation tasks ('if-then-else'). Please [read on here](../Usage/Automation.rst).

### Comunicador SMS

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Children/SMS-Commands.rst) for more setup information.

### Food

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (View only)

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

If you want to bolus etc. pelo relógio, dentro da opção "Definições do Wear", necessita de ativar a opção "Controlos pelo Relógio".

![Definições Wear](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Resend all data. Might be helpful if watch was not connected for some time and you want to push the information to the watch.
* Open settings on your watch directly from your phone.

### xDrip Statusline (watch)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### ClienteNS

* Configurar sincronização de dados da AndroidAPS com o Nightscout.
* As configurações em [Preferências](../Configuration/Preferences#nsclient) podem ser abertas clicando na roda dentada.

### Manutenção

E-mail e número de registos a serem enviados. Normalmente, nenhuma mudança é necessária.

### Configurador

Use o separador para o configurador em vez do menu hambúrguer.