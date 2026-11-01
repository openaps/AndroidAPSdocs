# Glossário

**AAPS** = AndroidAPS é o nome da app Android.

**AAPSClient** = a app de seguidor para cuidadores. Num telefone de seguidor, segue o **AAPS** de um utilizador através do site **Nightscout** do utilizador e, depois de emparelhado com o telefone **AAPS**, controla-o à distância. Não confundir com o **NSClient**. Mais informações → [Wiki - «A aplicação AAPSClient»](../RemoteFeatures/AapsClient.md) e [Controlo principal ↔ cliente](#client-master-control).

**Activity** (Atividade) = atividade da insulina, que mostra a velocidade a que a IOB (IA) diminui. Veja [Wiki - «DIA (DAI)»](#Config-Builder-insulin-dia) e a **BGI** (IG) relacionada.

**AID** = Automated Insulin Delivery (administração automática de insulina). O termo usado em geral na prática clínica e na investigação para um sistema que ajusta automaticamente a administração de insulina com os dados do **CGM**. **APS** e **closed loop** (loop fechado) significam o mesmo → veja também **OS-AID**.

**APS** = Artificial Pancreas System (Sistema de Pâncreas Artificial) → veja também **AID**.

**AMA** = Advanced Meal Assist (assistência avançada às refeições). Um algoritmo que permite ao **AAPS** aumentar a basal do utilizador de forma mais agressiva depois de um bólus de refeição. Mais informações → [Wiki - «Advanced Meal Assist (AMA)»](#Open-APS-features-advanced-meal-assist-ama).

**Adjustment Factor** (Fator de ajuste) = usado no **DynamicISF** (FSI Dinâmico); é um valor entre 1 % e 300 % que o utilizador define nas suas **Settings** (Definições). Funciona como um multiplicador sobre o valor da **TDD** (TID). Veja [Wiki - Fator de ajuste do FSI Dinâmico](#dyn-isf-adjustment-factor)

**Android Auto** = um sistema que mostra algumas funções de um smartphone Android, incluindo o **AAPS**, no ecrã de um carro. Mais informações → [Wiki - «Android Auto»](../RemoteFeatures/AndroidAuto.md).

**APK** = Android application Package (pacote de aplicação Android). Um ficheiro para instalar software. Mais informações → [Wiki - «Compilar o AAPS»](../SettingUpAaps/BuildingAaps.md).

**Autosens** = calculation of sensitivity to insulin over a 24-hour and an 8-hour window etc. Mais informações → [DIABETTECH - **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = plataforma de computação na nuvem para alojar a app web **Nightscout** → veja também **Nightscout**.

**BAT** = luz de estado para bateria da bomba fraca, mostrada na linha de estado do ecrã principal do **AAPS** → veja também **CAN** / **RES** / **SEN**.

**BG** (glicose) = blood glucose (glicose no sangue).

**BGI** (IG) = blood glucose impact (impacto na glicose). O quanto a **BG** (glicose) «deveria» subir ou descer só por causa da atividade da insulina.

**BG source** (Fonte da Glicose) = uma definição do AAPS para escolher a origem dos dados da glicose. Veja [Wiki - Fonte da Glicose](#Config-Builder-bg-source)

**Bridge** (ponte) = um dispositivo adicional que transforma um **FGM** num **CGM**.

**BR** = Basal Rate (taxa basal). A quantidade de insulina num dado período de tempo para manter a **BG** (glicose) num nível estável. → veja também **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App (crie a sua própria app Dexcom). Uma forma de gerar uma app Dexcom própria do utilizador para ler os dados do sensor Dexcom G6.

**CAGE** = Cannula AGE (idade da cânula). Mostrada no ecrã principal do **AAPS** e no Nightscout, com base nos registos **Purgar/Preencher** do Careportal do utilizador → veja também **Nightscout**.

**CAN** = luz de estado para mudança da cânula em atraso, mostrada na linha de estado do ecrã principal do **AAPS** → veja também **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor (monitor contínuo de glicose) → veja também **FGM**.

**Closed Loop** = a closed loop system which makes automatic adjustments to the user’s basal delivery based on an **AAPS’s** algorithm and the user’s **Profile** settings without requiring the user’s approval. Further info → [Wiki - 'closed loop'](#KeyAapsFeatures-ClosedLoop) and see also **HCL** / **FCL**.

**COB** (HCA) = Carbs On Board (hidratos de carbono ativos). É a quantidade de hidratos de carbono que o corpo do utilizador ainda está a digerir → veja também IOB (IA).

**CSF** = Carbs Sensitivity Factor (fator de sensibilidade aos hidratos de carbono). Ou seja, quanto sobe a **BG** (glicose) do utilizador por cada 1 g de hidratos de carbono absorvidos.

**DIA** (DAI) = Duration of Insulin Action (duração da ação da insulina). Mais informações → [Wiki - «DIA (DAI)»](#Config-Builder-insulin-dia) e veja também → [DIABETTECH - «DIA»](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = Daylight Saving Time. Veja [Wiki - Mudança de fuso horário e hora de verão](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Dynamic ISF (or DynISF)** (FSI Dinâmico) = uma funcionalidade do **AAPS** que adapta o fator de sensibilidade à insulina (**ISF**, FSI) de forma dinâmica, com base na **TDD** (TID) e na **BG** (glicose) do utilizador.

**eCarbs** = extended Carbs (hidratos de carbono prolongados). Hidratos de carbono divididos por várias horas (por exemplo, para cobrir gordura/proteína), o que permite ao **AAPS** distribuir a insulina como um bólus prolongado. Mais informações → [Wiki - «Hidratos de carbono prolongados»](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop (loop totalmente fechado). Um loop que não precisa de nenhuma informação do utilizador às refeições: sem contar hidratos de carbono e sem bólus de refeição. Further info → [Wiki - 'full closed loop'](../AdvancedOptions/FullClosedLoop.md) and see also **HCL**.

**FGM** = Flash Glucose Monitor (monitor flash de glicose), como o Abbott Freestyle Libre. Further info → [Wiki - 'BG source'](#Config-Builder-bg-source) and see also 'CGM'.

**git** = a tool used to store and download the **AAPS’** source code.

**GitHub** = um serviço web que aloja o código-fonte do **AAPS** e o seu controlo de versões (registo das alterações nos ficheiros e coordenação do trabalho neles, sobretudo em equipa), e que também pode compilar a app. Também é necessário para as atualizações do **APK**. Further info → [Wiki - 'update APK'](../Maintenance/UpdateToNewVersion.md).

**Glimp** = uma app para recolher valores do Freestyle Libre.

**HCL (or Hybrid Closed Loop)** (loop fechado híbrido) = um loop que automatiza a administração de insulina entre as refeições, mas em que o utilizador ainda tem de dar o bólus das refeições. Quase todos os sistemas em uso no dia a dia, incluindo o **AAPS**, são loops fechados híbridos → veja também **FCL** / **Closed Loop**.

**IC (I:C, ICR, CR, carb ratio)** (IHC) = Insulin to Carb ratio (rácio insulina/hidratos de carbono). Atenção: por convenção, a unidade é g/U, embora a sigla sugira o contrário.

**IOB** (IA) = Insulin On Board (insulina ativa). Insulina que ainda está ativa no corpo do utilizador. Veja [Wiki - Insulina ativa (IA)](#aaps-screens-iob)

**ISF** (FSI) = Insulin Sensitivity Factor (fator de sensibilidade à insulina). A descida esperada da glicose com uma unidade de insulina. A unidade é mg/dl/U ou mmol/l/U. Estes valores não são equivalentes sem uma conversão!

**Keystore (or JKS)** = uma Java Key Store, um ficheiro encriptado onde ficam guardados os seus certificados e chaves pessoais de programador, necessários para compilar (e voltar a compilar) o **AAPS**.

**LGS** (SGB) = Low Glucose Suspend (Suspensão Glicose Baixa). Veja [Wiki - Suspensão Glicose Baixa](#KeyAapsFeatures-LGS)

**LineageOS** = sistema operativo livre e de código aberto para smartphones, etc. Se usar a Accu-Chek Combo, veja [Wiki - Bomba Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Log files** (ficheiros de registo) = registos do **AAPS** sobre as ações do utilizador (úteis para resolver problemas e encontrar erros). Mais informações → [Wiki - «ficheiros de registo»](../GettingHelp/AccessingLogFiles.md).

**maxIOB** (IA máxima) = IOB (IA) total máxima. É uma função de segurança e impede que o **AAPS** administre insulina acima das definições do utilizador. Mais informações → [Wiki - «IA total máxima que o OpenAPS não pode ultrapassar»](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = função de segurança que calcula uma absorção de hidratos predefinida quando a absorção de hidratos não pode ser determinada pela reação da glicose do utilizador. Further info → [Wiki - 'min_5m_carbimpact'](#Preferences-min_5m_carbimpact).

**Nightscout** = projeto de código aberto para aceder aos dados do **CGM** e fazer relatórios. O centro de dados para os dados do **AAPS** do utilizador. Pode gerar relatórios para ver o histórico de dados do utilizador no **Nightscout**, como a HbA1c esperada, o tempo no alvo, ou procurar padrões nos dados com um gráfico de percentis, etc.

**Nightscout** → veja também **Nightscout Reporter**. É especialmente útil para pais que acompanham a gestão da diabetes da sua criança.

**Nightscout Reporter Tool** = uma ferramenta que gera relatórios em PDF a partir dos dados da app web Nightscout. Veja «Nightscout Reporter», «NS Reporter» no Facebook.

**NSClient** (**NSClientV3**) = o plugin do **AAPS** que sincroniza os dados com o **Nightscout** (**Configuração** → **Comunicação**). Não é o mesmo que o **AAPSClient**, a app de seguidor. Mais informações → [Wiki - «NSClient»](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System (sistema de pâncreas artificial aberto), o projeto anterior e a base do AAPS.

**Open Loop system** (sistema de Loop Aberto) = uma funcionalidade do **AAPS** que recomenda ajustes, que o utilizador tem de executar manualmente no **AAPS**. Mais informações → [Wiki - «Loop Aberto»](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = deteção de sensibilidade e «reference design implementation version 0/1» (implementação de referência, versão 0/1). It is the key algorithm behind OpenAPS. Further info → [Wiki - 'sensitivity detection'](../DailyLifeWithAaps/SensitivityDetectionAndCob.md).

**OS-AID** = Open-Source Automated Insulin Delivery (administração automática de insulina de código aberto). Um sistema **AID** feito com software de código aberto, como o **AAPS**, o **OpenAPS**, o Loop ou o Trio. Estes sistemas não são aprovados formalmente pelas autoridades de saúde (FDA, NHS, etc.) → veja também **AID**.

**Peak time** (tempo de pico) = momento do efeito máximo da insulina administrada. Mais informações → [Wiki - «Duração da ação da insulina (DAI) e pico»](#Config-Builder-insulin-dia).

**PH** = Pump History (histórico da bomba). Pode ver isto no histórico de tratamentos do **AAPS**: abra o **menu** (☰) no canto superior esquerdo do ecrã principal e selecione **Tratamentos**.

**Predictions** (previsões) = previsões da **BG** (glicose) no futuro, com base em vários cálculos. Mais informações → [Wiki - «linhas de previsão»](#aaps-screens-prediction-lines).

**Profile** (perfil) = as definições básicas de tratamento do utilizador (taxa basal, **DIA** (DAI), **IC** (IHC), **ISF** (FSI), alvo de **BG** (glicose)). O **AAPS** só usa perfis criados no **AAPS** (**Gerir** → **Perfil**), mas os **Profiles** (perfis) do **Nightscout** podem ser copiados (sincronizados) para o **AAPS**. Mais informações → [Wiki - «O seu perfil AAPS»](../SettingUpAaps/YourAapsProfile.md).

**Profile switch** (Troca de Perfil) = troca (temporária) do **Profile** (perfil) do utilizador para outro **Profile** guardado no **AAPS**.

**Profile Percentage** (Percentagem do Perfil) = um aumento ou diminuição percentual (temporária) aplicada ao **Profile** (perfil) do utilizador durante um período escolhido.

**RES** = luz de estado para mudança do reservatório em atraso, mostrada na linha de estado do ecrã principal do **AAPS** → veja também **BAT** / **CAN** / **SEN**.

**RileyLink** = dispositivo de hardware de código aberto que faz a ponte entre o Bluetooth Low Energy (BLE) e a comunicação sem fios a 916 MHz (usada nas bombas Medtronic antigas) ou a 433 MHz (usada nas bombas Omnipod Eros).

**SAGE** = sensor age (idade do sensor). É mostrada no ecrã principal do **AAPS** e no **Nightscout**, com base nos registos **Inserção do sensor** do Careportal do utilizador → veja também **Nightscout**.

**SEN** = luz de estado para mudança do sensor em atraso, mostrada na linha de estado do ecrã principal do **AAPS** → veja também **BAT** / **CAN** / **RES**.

**Sensitivity detection** (Deteção de sensibilidade) = cálculo da sensibilidade à insulina por causa do exercício, das hormonas, etc. veja também → [DIABETTECH - «Autosens»](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Sensor noise** (ruído do sensor) = termo que descreve leituras instáveis do **CGM**, que levam a valores de **BG** (glicose) aos «saltos». Mais informações → [Wiki - «Suavizar os dados da glicose»](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus (Super Micro Bólus). Uma funcionalidade do **AAPS** para administrar insulina mais depressa e assim ajustar a **BG** (glicose). Mais informações → [Wiki - «**SMB**»](#Open-APS-features-super-micro-bolus-smb) e veja também **UAM** (RNA).

**Super bolus** (Superbólus) = passar insulina basal para bólus, para ajustar a **BG** (glicose) mais depressa.

**TBB** = total base basal (basal base total: soma da taxa basal em 24 horas) → veja também **TBR** / **TDD**.

**TBR** = temporary basal rate → see also **TBB** / **TDD**.

**TDD** (TID) = total daily dose (dose diária total: bólus + basal por dia) → veja também **TBB** / **TBR**.

**TT** = temporary target: temporary increase/decrease of the user’s **BG** target (range) e.g. for eating or sport activities. Mais informações → [Wiki - «Alvos temporários»](../DailyLifeWithAaps/TempTargets.md).

**UAM** (RNA) = unannounced meals (refeições não anunciadas). Deteção de uma subida significativa da **BG** (glicose) por causa de refeições, adrenalina ou outras influências, e tentativa de a corrigir. Mais informações → [Wiki - «RNA»](#enable-uam) e veja também **SMB**.

**Virtual pump** = an **AAPS** feature which allows the user to try **AAPS’** functions, or lets PWD whose pump model has no **AAPS** driver use **AAPS** as an open loop → see also **Open Loop**.

**Wallpaper** (imagem de fundo) = imagem de fundo do **AAPS**, veja a página Telefones.

**xDrip** = software de código aberto para ler sistemas de **CGM**.

**Zero-temp** = basal temporária de 0 % (sem administração de insulina basal).

→ veja também [a documentação do OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)