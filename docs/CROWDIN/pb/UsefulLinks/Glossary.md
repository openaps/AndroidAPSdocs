# Glossário

**AAPS** = AndroidAPS é o nome do app Android.

**AAPSClient** = o app seguidor para cuidadores. Em um telefone do seguidor, ele acompanha o **AAPS** do usuário pelo site do **Nightscout** do usuário e, depois de pareado com o telefone com o **AAPS**, passa a controlá-lo remotamente. Não confunda com o **NSClient**. Mais informações → [Wiki - "O app AAPSClient"](../RemoteFeatures/AapsClient.md) e [Controle dispositivo principal ↔ cliente](#client-master-control).

**Activity** (atividade) = atividade da insulina, que representa a velocidade de queda do IOB. Veja [Wiki - "DIA"](#Config-Builder-insulin-dia) e o termo relacionado **BGI**.

**AID** = Automated Insulin Delivery (administração automatizada de insulina). O termo usado em geral na prática clínica e na pesquisa para um sistema que ajusta automaticamente a administração de insulina usando dados do **CGM**. **APS** e **loop fechado** significam a mesma coisa → veja também **OS-AID**.

**APS** = Artificial Pancreas System (Sistema de Pâncreas Artificial) → veja também **AID**.

**AMA** = Advanced Meal Assist (Assistente avançado de refeição). Um algoritmo que permite ao **AAPS** aumentar a basal do usuário de forma mais agressiva depois de um bólus de refeição. Mais informações → [Wiki - "Assistente avançado de refeição (AMA)"](#Open-APS-features-advanced-meal-assist-ama).

**Adjustment Factor** (fator de ajuste) = usado no **ISF dinâmico**; é um valor definido nas **Configurações** do usuário entre 1% e 300%. Funciona como um multiplicador sobre o valor de **TDD**. Veja [Wiki - Fator de ajuste do DynamicISF](#dyn-isf-adjustment-factor)

**Android Auto** = um sistema que mostra algumas funções de um smartphone Android, incluindo o **AAPS**, na tela de um carro. Mais informações → [Wiki - "Android Auto"](../RemoteFeatures/AndroidAuto.md).

**APK** = Android application Package (pacote de aplicativo Android). Um arquivo de instalação de software. Mais informações → [Wiki - "Compilar o APK"](../SettingUpAaps/BuildingAaps.md).

**Autosens** = cálculo da sensibilidade à insulina em uma janela de 24 e 8 horas etc. Mais informações → [DIABETTECH - **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = plataforma de computação em nuvem para hospedar o app web **Nightscout** → veja também **Nightscout**.

**BAT** = luz de status de bateria fraca da bomba, mostrada na linha de status da tela principal do **AAPS** → veja também **CAN** / **RES** / **SEN**.

**BG** = blood glucose (glicose no sangue).

**BGI** = blood glucose impact (impacto na glicose). O quanto a **BG** "deveria" subir ou cair com base apenas na atividade da insulina.

**BG source** (Fonte de BG) = uma configuração do AAPS para definir a fonte dos dados de glicose. Veja [Wiki - Fonte de BG](#Config-Builder-bg-source)

**Bridge** (ponte) = um dispositivo adicional que transforma um **FGM** em **CGM**.

**BR** = Basal Rate (taxa basal). A quantidade de insulina em um determinado período de tempo para manter a **BG** em um nível estável. → veja também **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App (compile o seu próprio app Dexcom). Uma forma de gerar o seu próprio app Dexcom para ler os dados do sensor Dexcom G6.

**CAGE** = Cannula AGE (idade da cânula). Mostrado na tela principal do **AAPS** e no Nightscout, com base nos registros do CarePortal **Purgar/Preencher** do usuário → veja também **Nightscout**.

**CAN** = luz de status de troca de cânula atrasada, mostrada na linha de status da tela principal do **AAPS** → veja também **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor (monitor contínuo de glicose) → veja também **FGM**.

**Closed Loop** (loop fechado) = um sistema de loop fechado que ajusta automaticamente a administração de basal do usuário com base no algoritmo do **AAPS** e nas configurações do **Perfil** do usuário, sem precisar da aprovação do usuário. Mais informações → Wiki - "loop fechado" e veja também **HCL** / **FCL**.

**COB** = Carbs On Board (carboidratos ativos). É a quantidade de carboidratos ainda disponível para a digestão do usuário → veja também IOB.

**CSF** = Carbs Sensitivity Factor (fator de sensibilidade aos carboidratos). Ou seja, quanto a **BG** do usuário sobe para cada 1 g de carboidratos absorvido.

**DIA** = Duration of Insulin Action (duração da ação da insulina). Mais informações → [Wiki - "DIA"](#Config-Builder-insulin-dia) e veja também → [DIABETTECH - "DIA"](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = Daylight Savings Time (horário de verão). Veja [Wiki - Mudança de fuso horário e horário de verão](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Dynamic ISF (ou DynISF)** (ISF dinâmico) = um recurso do **AAPS** que adapta o fator de sensibilidade à insulina (**ISF**) de forma dinâmica, com base no **TDD** e na **BG** do usuário.

**eCarbs** = extended Carbs (carboidratos estendidos). Carboidratos divididos ao longo de várias horas (por exemplo, para cobrir gordura/proteína), o que permite ao **AAPS** distribuir a insulina como um bólus estendido. Mais informações → [Wiki - "Carboidratos estendidos"](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop (loop fechado completo). Um loop que não precisa de nenhuma informação do usuário nas refeições: sem contagem de carboidratos e sem bólus de refeição. Mais informações → Wiki - "loop fechado completo" e veja também **HCL**.

**FGM** = Flash Glucose Monitor (monitor flash de glicose), como o Abbott Freestyle Libre. Mais informações → Wiki - "Fonte de BG" e veja também "CGM".

**git** = uma ferramenta usada para guardar e baixar o código-fonte do **AAPS**.

**GitHub** = um serviço web que hospeda o código-fonte do **AAPS** e o seu controle de versão (registra as mudanças nos arquivos e coordena o trabalho neles, principalmente em equipes), e que também pode compilar o app. Também é necessário para atualizações do **APK**. Mais informações → Wiki - "atualizar o APK".

**Glimp** = um app para coletar valores do Freestyle Libre.

**HCL (ou Hybrid Closed Loop)** (loop fechado híbrido) = um loop que automatiza a administração de insulina entre as refeições, mas o usuário ainda precisa dar bólus para as refeições. Quase todo sistema de uso diário, incluindo o **AAPS**, é um loop fechado híbrido → veja também **FCL** / **Closed Loop**.

**IC (I:C, ICR, CR, carb ratio)** = Insulin to Carb ratio (relação insulina/carboidratos). Observe que, por convenção, a unidade é g/U, embora a sigla sugira o contrário.

**IOB** = Insulin On Board (insulina ativa). Insulina ativa no corpo do usuário. Veja [Wiki - Insulina ativa (IOB)](#aaps-screens-iob)

**ISF** = Insulin Sensitivity Factor (fator de sensibilidade à insulina). A queda esperada da BG como resultado de uma unidade de insulina. A unidade é mg/dl/U ou mmol/l/U. Elas não são equivalentes sem uma conversão!

**Keystore (ou JKS)** = uma Java Key Store, um arquivo criptografado onde ficam guardados os seus certificados e chaves pessoais de desenvolvedor, necessários para compilar (e recompilar) o **AAPS**.

**LGS** = Low Glucose Suspend (Suspensão por glicose baixa). Veja [Wiki - Suspensão por glicose baixa](#KeyAapsFeatures-LGS)

**LineageOS** = sistema operacional livre e de código aberto para smartphones etc. Se você usa a Accu-Chek Combo, veja [Wiki - bomba Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Log files** (arquivos de log) = registros do **AAPS** sobre as ações do usuário (úteis para resolver problemas e depurar). Mais informações → [Wiki - "arquivos de log"](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = IOB total máximo. É um recurso de segurança que impede o **AAPS** de administrar mais insulina do que as configurações do usuário permitem. Mais informações → [Wiki - "IOB total máximo que o OpenAPS não pode ultrapassar"](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = recurso de segurança que calcula a absorção padrão de carboidratos quando a absorção de carboidratos não pode ser determinada pelas reações da glicose do usuário. Mais informações → [Wiki - "Configurações"](#Preferences-min_5m_carbimpact).

**Nightscout** = projeto de código aberto para acessar e relatar dados do **CGM**. É a central de dados do **AAPS** do usuário e pode gerar relatórios para ver os dados históricos do **Nightscout** do usuário, como a HbA1c esperada, o tempo na faixa-alvo ou procurar padrões nos dados com o gráfico de percentis etc.

**Nightscout** → veja também **Nightscout Reporter**. É muito útil para pais que acompanham o tratamento do diabetes do filho.

**Nightscout Reporter Tool** = uma ferramenta que gera relatórios em PDF a partir dos dados do app web Nightscout. Veja "Nightscout Reporter", "NS Reporter" no Facebook.

**NSClient** (**NSClientV3**) = o plugin do **AAPS** que sincroniza os dados com o **Nightscout** (**Configuração** → **Comunicação**). Não é o mesmo que o **AAPSClient**, o app seguidor. Mais informações → [Wiki - "NSClient"](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System (sistema de pâncreas artificial aberto), o projeto anterior e a base do AAPS.

**Open Loop system** (sistema de loop aberto) = um recurso do **AAPS** que recomenda ajustes que o usuário precisa fazer manualmente no **AAPS**. Mais informações → [Wiki - "Loop aberto"](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = detecção de sensibilidade e "reference design implementation version 0/1" (implementação de referência, versão 0/1). É o algoritmo principal por trás do OpenAPS Wiki - detecção de sensibilidade.

**OS-AID** = Open-Source Automated Insulin Delivery (administração automatizada de insulina de código aberto). Um sistema **AID** feito com software de código aberto, como **AAPS**, **OpenAPS**, Loop ou Trio. Esses sistemas não são aprovados formalmente por órgãos de saúde (FDA, NHS etc.) → veja também **AID**.

**Peak time** (tempo de pico) = momento de efeito máximo da insulina administrada. Mais informações → [Wiki - "Duração da ação da insulina (DIA) e pico"](#Config-Builder-insulin-dia).

**PH** = Pump History (histórico da bomba). Você pode ver isso no histórico de tratamentos do **AAPS**: abra o **menu** (☰) no canto superior esquerdo da tela principal e selecione **Tratamentos**.

**Predictions** (previsões) = previsões da **BG** no futuro com base em diferentes cálculos. Mais informações → [Wiki - "linhas de previsão"](#aaps-screens-prediction-lines).

**Profile** (perfil) = as configurações básicas de tratamento do usuário (taxa basal, **DIA**, **IC**, **ISF**, alvo de **BG**). O **AAPS** usa apenas perfis criados no **AAPS** (**Gerenciar** → **Perfil**), mas os **Perfis** do **Nightscout** podem ser copiados (sincronizados) para o **AAPS**. Mais informações → [Wiki - "Seu perfil do AAPS"](../SettingUpAaps/YourAapsProfile.md).

**Profile switch** (Troca de Perfil) = troca (temporária) do **Perfil** do usuário para outro **Perfil** salvo no **AAPS**.

**Profile Percentage** (porcentagem do perfil) = aumento ou diminuição (temporária) em porcentagem aplicada ao **Perfil** do usuário por um período escolhido.

**RES** = luz de status de troca de reservatório atrasada, mostrada na linha de status da tela principal do **AAPS** → veja também **BAT** / **CAN** / **SEN**.

**RileyLink** = dispositivo de hardware de código aberto que faz a ponte entre Bluetooth Low Energy (BLE) e a comunicação sem fio em 916 MHz (usada nas bombas Medtronic antigas) ou 433 MHz (usada nas bombas Omnipod Eros).

**SAGE** = sensor age (idade do sensor). É mostrado na tela principal do **AAPS** e no **Nightscout**, com base nos registros do CarePortal **Inserção do sensor** do usuário → veja também **Nightscout**.

**SEN** = luz de status de troca de sensor atrasada, mostrada na linha de status da tela principal do **AAPS** → veja também **BAT** / **CAN** / **RES**.

**Sensitivity detection** (Detecção de sensibilidade) = cálculo da sensibilidade à insulina como resultado de exercício, hormônios etc. veja também → [DIABETTECH - "Autosens"](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Sensor noise** (ruído do sensor) = termo usado para descrever leituras instáveis do **CGM**, que levam a valores de **BG** que "pulam". Mais informações → [Wiki - "Suavização dos dados de glicose"](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus (Super Micro Bólus). Um recurso do **AAPS** para administrar insulina mais rápido e assim ajustar a **BG**. Mais informações → [Wiki - "**SMB**"](#Open-APS-features-super-micro-bolus-smb) e veja também **UAM**.

**Super bolus** (superbólus) = transferência de insulina basal para bólus, para ajustar a **BG** mais rápido.

**TBB** = total base basal (basal total: soma da taxa basal em 24 horas) → veja também **TBR** / **TDD**.

**TBR** = temporary basal rate (basal temporária) → veja também **TBB** / **TDD**.

**TDD** = total daily dose (dose diária total: bólus + basal por dia) → veja também **TBB** / **TBR**.

**TT** = temporary target (alvo temporário): aumento/diminuição temporária do alvo (faixa) de **BG** do usuário, por exemplo para comer ou para atividades esportivas. Mais informações → [Wiki - "Alvos temporários"](../DailyLifeWithAaps/TempTargets.md).

**UAM** = unannounced meals (refeições não anunciadas). Detecção de um aumento significativo dos níveis de **BG** por causa de refeições, adrenalina ou outras influências, e tentativa de ajustar isso. Mais informações → [Wiki - "UAM"](#enable-uam) e veja também **SMB**.

**Virtual pump** (bomba virtual) = um recurso do **AAPS** que permite ao usuário testar as funções do **AAPS**, ou fazer loop para pessoas com diabetes que usam uma bomba sem driver no **AAPS** → veja também **Open Loop**.

**Wallpaper** (papel de parede) = imagem de fundo do **AAPS**, veja a página de telefones.

**xDrip** = software de código aberto para ler sistemas de **CGM**.

**Zero-temp** (basal temporária zero) = basal temporária de 0% (sem administração de insulina basal).

→ veja também [a documentação do OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)