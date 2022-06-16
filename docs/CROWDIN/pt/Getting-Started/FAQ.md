# FAQ para loopers

Como adicionar perguntas ao FAQ: Siga estas [instruções](../make-a-PR.md)

# Geral

## Posso apenas baixar o arquivo de instalação do AndroidAPS?

Não. Não há nenhum arquivo apk para download e instalação do AndroidAPS. Você mesmo precisa [compilar](../Installing-AndroidAPS/Building-APK.md), a partir do código fonte. Veja o motivo:

AndroidAPS é usado para controlar a sua bomba e administrar insulina. Nos termos da regulamentação atual na Europa, todos os sistemas classificados como IIa ou IIb são dispositivos médicos que requerem aprovação regulamentar (marca CE) e necessitam de vários estudos e assinaturas. A distribuição de um dispositivo não regulamentado é ilegal. Existem regulamentações semelhantes noutras partes do mundo.

Este regulamento não se restringe apenas às vendas (no sentido de obter dinheiro para alguma coisa) mas aplica-se a qualquer distribuição (mesmo distribuindo gratuitamente). Construir um dispositivo médico para você mesmo é a única maneira de usar o aplicativo dentro destas regulamentações.

É por isso que os apks não estão disponíveis.

## Como começar?

Antes de tudo, você deve **obter componentes de hardware que possam fechar um loop**:

- Uma [bomba de insulina suportada](./Pump-Choices.md), 
- um [smartphone Android](Phones.md) (Apple iOS não é suportado pelo AndroidAPS - pode verificar o [Loop iOS](https://loopkit.github.io/loopdocs/)) e 
- um [sistema de monitoramento contínuo de glicose (CGM)](../Configuration/BG-Source.rst). 

Em segundo lugar, você deve **configurar seu hardware**. Veja o [exemplo de configuração com o tutorial passo-a-passo](Sample-Setup.md).

Em terceiro lugar, você deve **configurar seus componentes de software**: AndroidAPS e a fonte de CGM/FGM.

Em quarto lugar, você tem que aprender e **entender o design de referência do OpenAPS para verificar seus fatores de tratamento**. O princípio fundador do loop fechado é que a sua taxa basal e a relação de carboidratos estão precisas. Todas as recomendações assumem que suas necessidades basais foram atendidas e quaisquer picos ou problemas que você está vendo são resultado de outros fatores que precisam de alguns ajustes únicos (exercícios, estresse etc). Os ajustes que o loop fechado pode fazer foram limitados por segurança (veja a taxa de basal temporária permitida em [OpenAPS Design de Referência](https://openaps.org/reference-design/)), o que significa que você não quer desperdiçar a dosagem permitida para corrigir uma basal subjacente errada. Se, por exemplo, você está frequentemente baixo pouco antes de uma refeição, então é provável que suas taxas de basal precisam ser ajustadas. Você pode usar [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) para analisar um grande conjunto de dados e sugerir se e como os basais e/ou FS precisam ser ajustados, e também se é necessário alterar a relação I:C. Ou você pode testar e definir sua basal do [modo antiquado](https://integrateddiabetes.com/basal-testing/).

## Que praticidades terei usando o loop?

### Proteção por senha

Se você não quer que suas preferências sejam facilmente alteradas, então você pode proteger o menu preferências, selecionando o item "senha para configurações" e digitando a senha que você escolher. Na próxima vez que você entrar no menu de preferências, ele irá solicitar a senha antes de prosseguir. Se mais tarde quiser remover a opção de senha, vá para "senha das configurações" e exclua o texto.

### Smartwatches Android Wear

Se você planeja usar o aplicativo Android Wear para bolus ou alterar configurações, terá de garantir que as notificações do AndroidAPS não sejam bloqueadas. A confirmação da ação vem através de notificação.

### Desconectar bomba

Se você tirar a bomba para tomar banho, nadar, praticar esportes ou outras atividades você deve deixar o AndroidAPS saber que nenhuma insulina será entregue para manter a IA (Insulina Ativa) correta.

A bomba pode ser desconectada usando o ícone de Status do Loop na [Tela Inicial do AndroidAPS](./Screenshots.md#loop-status).

### Recomendações não se baseiam apenas numa única leitura do CGM

Por segurança, as recomendações formuladas baseiam-se não numa única leitura do CGM, mas no delta médio. Portanto, se perder algumas leituras, pode demorar um pouco para o AndroidAPS entrar em loop novamente depois de ter o fluxo de dados do CGM reestabelecido.

### Leituras adicionais

Existem vários blogs com boas dicas para ajudar você a entender as praticidades do loop:

- [Ajuste fino nas Configurações](https://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
- [Por que DAI importa](https://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
- [Limitando picos das refeições](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
- [Hormônios e autosens](https://seemycgm.com/2017/06/06/hormones-2/) See my CGM

## Que equipamento de emergência devo transportar comigo?

Você precisa ter o mesmo equipamento de emergência que todos os outros T1D em terapia de bomba de insulina. Quando estiver em loop com AndroidAPS, é altamente recomendável ter o seguinte equipamento com ou perto de você:

- Carregadores e cabos para seu smartphone, watch e (se necessário) leitor BT ou dispositivo Link
- Bateria(s) da Bomba
- Arquivos atuais [apk (instalação)](../Installing-AndroidAPS/Building-APK.md) e [preferências](../Usage/ExportImportSettings.rst) para o AndroidAPS e quaisquer outros apps usados (por exemplo, xDrip+, BYO Dexcom) localmente e na nuvem (Dropbox, Google Drive).

## Como posso anexar de forma segura o CGM/FGM?

Você pode travá-lo com adesivo. Existem vários adesivos pré-perfurados para sistemas comuns de CGM disponíveis (pesquise Google, eBay ou Amazon). Alguns loopers usam a fita cinesiologia padrão mais barata ou rocktape.

Você pode fixá-lo. Você também pode comprar braçadeiras que fixem o CGM/FGM com uma banda (procure pelo Google, eBay ou Amazon).

# Configurações do AndroidAPS

A seguinte lista visa ajudar você a otimizar as configurações. Talvez seja melhor começar do primeiro e ir até o último item da lista, em ordem. Tente acertar uma configuração antes de mudar outra. Trabalhe em pequenos passos ao invés de fazer grandes mudanças de uma só vez. Você pode usar [Autotune](https://autotuneweb.azurewebsites.net/) para orientar seu raciocínio, embora não deva ser seguido cegamente: pode não funcionar bem para você ou não funcionar em todas as circunstâncias. Observe que as configurações interagem umas com as outras - você pode ter configurações 'erradas' que funcionam bem juntas em algumas circunstâncias (exemplo um basal muito alto acontece enquanto uma relação I:C muito alta for usada), mas não em outras. Isto significa que você precisa considerar todas as configurações e verificar que elas funcionam em conjunto em uma variedade de circunstâncias.

## Duração da Atividade da Insulina (DAI)

### Descrição & teste

O intervalo de tempo em que a insulina decai para zero.

Isto é frequentemente configurado curto demais. A maioria das pessoas irá querer pelo menos 5 horas, potencialmente 6 ou 7.

### Impacto

DAI muito curta pode levar a GLICs baixas. E vice-versa.

Se DAI for muito curta, AAPS pensa muito cedo que seu bolus anterior está consumido e, em glicose ainda elevada, lhe dará mais. (Na verdade, não espera tanto tempo, mas prevê o que aconteceria, e continua adicionando insulina). Isso essencialmente cria ‘empilhamento de insulina’ do qual o AAPS não está ciente.

Exemplo de um DAI muito curto é uma glicemia alta seguida do AAPS corrigindo excessivamente e resultando numa glicemia baixa.

## Programação Taxas de Basal (U/h)

### Descrição & teste

A quantidade de insulina em um determinado bloco de tempo para manter a GLIC em um nível estável.

Teste suas taxas de basal suspendendo o loop, jejuando, esperando por um tempo próximo à sua DAI depois da comida, e vendo como a GLIC muda. Repita algumas vezes.

Se a GLIC estiver diminuindo, a taxa de basal está muito alta. E vice-versa.

### Impacto

A taxa de basal muito alta pode levar a baixas GLICs. E vice-versa.

AAPS ‘baselines’ contra a taxa de basal padrão. Se a taxa de basal for muito alta, um 'zero temporário' contará como uma IA negativa maior do que deveria. Isso fará com que o AAPS dê mais correções subsequentes do que deveria para trazer a IA para zero.

Então, uma taxa de basal muito alta irá criar baixas GLICs tanto durante sua vigência, quanto algumas horas depois enquanto o AAPS corrige para o alvo.

Inversamente, uma taxa de basal muito baixa pode levar a GLIC alta, e a falha em reduzir os níveis ao alvo.

## Fator de sensibilidade à insulina (FS) (mmol/l/U ou mg/dl/U)

### Descrição & teste

A queda na GLIC esperada com a administração de 1U de insulina.

Supondo basal correta, você pode testar isso suspendendo o loop, verificando que a IA é zero, e tomando alguns comprimidos de glicose para chegar a um nível estável de ‘alto’.

Depois, administre uma quantidade estimada de insulina (seguindo seu 1/FS atual) para chegar à GLIC alvo.

Tome cuidado, pois frequentemente isso é estabelecido muito baixo. Baixo demais significa que 1U vai abaixar sua GLIC mais do que esperado.

### Impacto

**FS Baixo** (ou seja, 40 em vez de 50) significa que a insulina baixa menos a sua GLIC por unidade. Isto leva a uma correção mais agressiva / mais forte do loop com **mais insulina**. Se o FS estiver baixo demais, isso pode levar a baixas GLICs.

**FS Alto** (ou seja, 45 em vez de 35) significa que a insulina baixa mais sua GLIC por unidade. Isto leva a uma correção menos agressiva / mais fraca do loop com **menos insulina**. Se o FS estiver muito alto, isso pode levar a altas GLICs.

**Exemplo:**

- GLIC está 190 mg/dl (10,5 mmol) e o alvo é 100 mg/dl (5,6 mmol). 
- Então, você quer corrigir 90 mg/dl (= 190 - 110).
- FS = 30 -> CORREÇÃO / FS = 90 / 30 = 3 unidades de insulina
- FS = 45 -> CORREÇÃO / FS = 90 / 45 = 2 unidades de insulina

Um FS muito baixo (não incomum) pode resultar em 'sobre correções', porque o AAPS acha que ele precisa de mais insulina para corrigir uma GLIC alta do que realmente precisa. Isso pode levar a GLICs 'montanha russa' (ex. quando jejuando). Nessa circunstância, você precisa aumentar o seu FS. Isso significa que o AAPS administrará doses de correção menores, e evitará 'sobre corrigir' uma GLIC alta que resultaria em uma GLIC baixa.

Inversamente, um FS definido muito alto pode resultar em 'sub correções', o que significa que a sua GLIC permanece acima do alvo – particularmente perceptível durante a noite.

## Relação Insulina-Carboidrato (I:C) (g/U)

### Descrição & teste

Número de gramas de carboidrato para uma unidade de insulina.

Algumas pessoas também usam IC em vez de I:C.

Assumindo que sua taxa basal está correta, sua IA está em zero e você está na meta de GLIC, você pode testar comendo uma quantidade conhecida de carboidratos e tomando uma quantidade estimada de insulina baseada na relação I:C atual. O melhor é comer alimentos que você normalmente come naquela hora do dia e contar seus carboidratos com precisão.

> **NOTA:**
> 
> Em alguns países europeus, foram utilizadas unidades de pão (bread units) para determinar quanta insulina é necessária para fins alimentares. No começo 1 unidade de pão correspondia a12g de carboidratos, depois alguns países mudaram para 10g de carboidrato.
> 
> Nesse modelo, a quantidade de carboidratos foi fixada e a quantidade de insulina era variável. ("Quanta insulina é necessária para cobrir uma unidade de pão?")
> 
> Ao usar o I:C, a quantidade de insulina é fixa e a quantidade de carboidratos é variável. ("Quantos g de carboidratos são cobertos por uma unidade de insulina?")
> 
> Exemplo:
> 
> Fator de unidade de pão (BU = 12g carboidratos): 2,4 U/BU -> Você precisa de 2,4 unidades de insulina quando você come uma unidade de pão.
> 
> Correspondência I:C: 12g / 2,4 U = 5,0 g/U -> 5,0g de carboidratos são cobertos por uma unidade de insulina.
> 
> Fator unidade de pão (BU=12g carboidratos) 2,4 U / 12g ===> I:C = 12g / 2,4 U = 5,0 g/U
> 
> Tabelas de conversão estão disponíveis on-line [aqui](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

### Impacto

**Menor I:C** = menos comida por unidade, ou seja, você está recebendo mais insulina por uma quantidade fixa de carboidratos. Também pode ser chamado "mais agressivo".

**Maior I:C** = mais comida por unidade, ou seja, você está recebendo menos insulina por uma quantidade fixa de carboidratos. Também pode ser chamado "menos agressivo".

Se após a refeição ter sido digerida e a IA ter retornado a zero a sua GLIC ficar mais alta do que antes da comida, é provável que sua relação I:C está muito alta. Inversamente, se sua GLIC ficar mais baixa do que antes da comida, a relação I:C está baixa demais.

# Algoritmo APS

## Por que aparece "dai:3" na aba "AMA OpenAPS" embora eu tenha uma DAI diferente no meu perfil?

![AMA 3h](../images/Screenshot_AMA3h.png)

Na AMA, a DAI na verdade não significa a "duração da atividade da insulina". É um parâmetro, que costumava estar ligado à DAI. Agora significa "após quanto tempo a correção deve estar finalizada". Não tem nenhuma relação com o cálculo da IA. No SMB OpenAPS, já não há necessidade deste parâmetro.

## Perfil

### Por que usar DAI mín. 5h (Duração da Atividade da Insulina) em vez de 2-3h?

Bem explicado [neste artigo](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Não se esqueça de `ATIVAR PERFIL` após alterar sua DAI.

### O que faz com que o loop baixe frequentemente a minha GLIC para valores hipoglicêmicos sem CA?

Em primeiro lugar, verifique sua taxa basal e faça um teste de taxa de basal sem carboidratos. Se a taxa basal estiver correta, esse comportamento normalmente é causado por um FS muito baixo. Um FS muito baixo geralmente se parece com isto:

![ISF too low](../images/isf.jpg)

### O que causa picos altos pós-prandiais no loop fechado?

Em primeiro lugar, verifique sua taxa basal e faça um teste de taxa de basal sem carboidratos. Se estiver correto e sua GLIC estiver caindo no seu alvo depois que os carboidratos forem totalmente absorvidos, tente definir um objetivo temporário "comendo em breve" no AndroidAPS algum tempo antes da refeição ou pense em um tempo pré-bolus apropriado com o seu endocrinologista. Se a sua GLIC estiver muito alta após a refeição e ainda muito alta depois que os carboidratos forem totalmente absorvidos, considere diminuir sua relação I:C com seu endocrinologista. Se a sua GLIC estiver muito alta enquanto houver CA e muito baixa depois que os carboidratos forem totalmente absorvidos, pense em aumentar sua relação I:C e um tempo pré-bolus apropriado com o seu endocrinologista.

# Outras configurações

## Configurações do Nightscout

### AndroidAPS NSClient diz 'não permitido' e não faz o upload de dados. O que posso fazer?

Em NSClient verifique "Configurações de conexão". Talvez você não esteja em uma WLAN permitida ou tenha ativado 'Somente se estiver carregando' e seu cabo de carregamento não esteja conectado.

## Configurações do CGM

### Por que o AndroidAPS diz 'fonte de GLIC não suporta filtro avançado'?

Se você usa outro CGM/FGM além do Dexcom G5 ou G6 em modo nativo do xDrip, você obtém este alerta na aba OpenAPS do AndroidAPS. Veja [Suavizando dados da GLIC](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) para mais detalhes.

## Bomba

### Onde posicionar a bomba?

Há inúmeras possibilidades de posicionamento para a bomba. Não importa se você está em loop ou não.

### Baterias

Looping can reduce the pump battery faster than normal use because the system interacts through bluetooth far more than a manual user does. It is best to change battery at 25% as communication becomes challenging then. You can set warning alarms for pump battery by using the PUMP_WARN_BATT_P variable in your Nightscout site. Tricks to increase battery life include:

- reduce the length of time the LCD stays on (within pump settings menu)
- reduce the length of time the backlight stays on (within pump settings menu)
- select notification settings to a beep rather than vibrate (within pump settings menu)
- only press the buttons on the pump to reload, use AndroidAPS to view all history, battery level and reservoir volume.
- AndroidAPS app may often be closed to save energy or free RAM on some phones. When AndroidAPS is reinitialized at each startup it establishes a Bluetooth connection to the pump, and re-reads the current basal rate and bolus history. This consumes battery. To see if this is happening, go to Preferences > NSClient and enable 'Log app start to NS'. Nightscout will receive an event at every restart of AndroidAPS, which makes it easy to track the issue. To reduce this happening, whitelist AndroidAPS app in the phone battery settings to stop the app power monitor closing it down.
    
    For example, to whitelist on a Samsung phone running Android Pie:
    
    - Go to Settings -> Device Care -> Battery 
    - Scroll until you find AndroidAPS and select it 
    - De-select "Put app to sleep"
    - ALSO go to Settings -> Apps -> (Three circle symbol in the top-right of the screen) select "special access" -> Optimize battery usage
    - Scroll to AndroidAPS and make sure it is de-selected.

- clean battery terminals with alcohol wipe to ensure no manufacturing wax/grease remains.

- for [Dana R/RS pumps](../Configuration/DanaRS-Insulin-Pump.md) the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy whilst in storage) but it doesn't always work to break it 100%. Either remove and reinsert battery 2-3 times until it does show 100% on screen, or use battery key to briefly short circuit battery before insertion by applying to both terminals for a split second.
- see also more tips for [particular types of battery](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage#battery-type-and-causes-of-short-battery-life)

### Changing reservoirs and cannulas

The change of cartridge cannot be done via AndroidAPS but must be carried out as before directly via the pump.

- Long press on "Open Loop"/"Closed Loop" on the Home tab of AndroidAPS and select 'Suspend Loop for 1h'
- Now disconnect the pump and change the reservoir as per pump instructions.
- Also priming and filling tube and cannula can be done directly on the pump. In this case use [PRIME/FILL button](../Usage/CPbefore26#pump) in the actions tab just to record the change.
- Once reconnected to the pump continue the loop by long pressing on 'Suspended (X m)'.

The change of a cannula however does not use the "prime infusion set" function of the pump, but fills the infusion set and/or cannula using a bolus which does not appear in the bolus history. This means it does not interrupt a currently running temporary basal rate. On the Actions (Act) tab, use the [PRIME/FILL button](../Usage/CPbefore26#pump) to set the amount of insulin needed to fill the infusion set and start the priming. If the amount is not enough, repeat filling. You can set default amount buttons in the Preferences > Other > Fill/Prime standard insulin amounts. See the instruction booklet in your cannula box for how many units should be primed depending on needle length and tubing length.

## Wallpaper

You can find the AndroidAPS wallpaper for your phone on the [phones page](../Getting-Started/Phones#phone-background).

## Daily usage

### Hygiene

#### What to do when taking a shower or bath?

You can remove the pump while taking a shower or bath. For this short period of time you may not need it, but you should tell AAPS that you've disconnected so that the IOB calculations are correct. See [description above](../Getting-Started/FAQ#disconnect-pump).

### Work

Depending on your job, you may choose to use different treatment factors on workdays. As a looper you should consider a [profile switch](../Usage/Profiles.md) for your typical working day. For example, you may switch to a profile higher than 100% if you have a less demanding job (e.g. sitting at a desk), or less than 100% if you are active and on your feet all day. You could also consider a high or low temporary target or a [time shift of your profile](../Usage/Profiles#time-shift) when working much earlier or later than regular, of if you work different shifts. You can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need.

## Leisure activities

### Sports

You have to rework your old sports habits from pre-loop times. If you simply consume one or more sports carbs as before, the closed loop system will recognize them and correct them accordingly.

So, you would have more carbohydrates on board, but at the same time the loop would counteract and release insulin.

When looping you should try these steps:

- Make a [profile switch](../Usage/Profiles.md) < 100%.
- Set an [activity temp target](../Usage/temptarget#activity-temp-target) above your standard target.
- If you are using SMB make sure ["Enable SMB with high temp targets"](../Usage/Open-APS-features#enable-smb-with-high-temp-targets) and ["Enable SMB always"](../Usage/Open-APS-features#enable-smb-always) are disabled.

Pre- and post-processing of these settings is important. Make the changes in time before sport and consider the effect of muscle filling.

If you do sports regularly at the same time (i.e. sports class in your gym) you can consider using [automation](../Usage/Automation.rst) for profile switch and TT. Location based automation might also be an idea but makes preprocessing more difficult.

The percentage of the profile switch, the value for your activity temp target and best time for the changes are individual. Start on the safe side if you are looking for the right value for you (start with lower percentage and higher TT).

### Sex

You can remove the pump to be 'free', but you should tell AndroidAPS so that the IOB calculations are correct. See [description above](../Getting-Started/FAQ#disconnect-pump).

### Drinking alcohol

Drinking alcohol is risky in closed loop mode as the algorithm cannot predict the alcohol influenced BG correctly. You have to check out your own method for treating this using the following functions in AndroidAPS:

- Deactivating closed loop mode and treating the diabetes manually or
- setting high temp targets and deactivating UAM to avoid the loop increasing IOB due to an unattended meal or
- do a profile switch to noticeably less than 100% 

When drinking alcohol, you always have to have an eye on your CGM to manually avoid a hypoglycemia by eating carbs.

### Sleeping

#### How can I loop during the night without mobile and WIFI radiation?

Many users turn the phone into airplane mode at night. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or ['Build your own Dexcom App'](../Hardware/DexcomG6#if-using-g6-with-build-your-own-dexcom-app), it will NOT work if you get the BG-readings via Nightscout):

1. Turn on airplane mode in your mobile.
2. Wait until the airplane mode is active.
3. Turn on Bluetooth.

You are not receiving calls now, nor are you connected to the internet. But the loop is still running.

Some people have discovered problems with local broadcast (AAPS not receiving BG values from xDrip+) when phone is in airplane mode. Go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps`.

![xDrip+ Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

### Travelling

#### How to deal with time zone changes?

With Dana R and Dana R Korean you don't have to do anything. For other pumps see [time zone travelling](../Usage/Timezone-traveling.md) page for more details.

## Medical topics

### Hospitalization

If you want to share some information about AndroidAPS and DIY looping with your clinicians, you can print out the [guide to AndroidAPS for clinicians](../Resources/clinician-guide-to-AndroidAPS.md).

### Medical appointment with your endocrinologist

#### Reporting

You can either show your Nightscout reports (https://YOUR-NS-SITE.com/report) or check [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

# Frequent questions on Discord and their answers...

## My problem is not listed here.

[Information to get help.](../Where-To-Go-For-Help/Connect-with-other-users#i-m-getting-stuck-what-do-i-do-who-can-i-ask)

## My problem is not listed here but I found the solution

[Information to get help.](../Where-To-Go-For-Help/Connect-with-other-users#i-m-getting-stuck-what-do-i-do-who-can-i-ask)

**Remind us to add your solution to this list!**

## AAPS stops everyday around the same time.

Stop Google Play Protect. Check for "cleaning" apps (ie CCleaner etc) and uninstall them. AAPS / 3 dots menu / About / follow the link "Keep app running in the background" to stop all battery optimizations.

## How to organize my backups ?

Export settings very regularly: after each pod change, after modifying your profile, when you have validated an objective, if you change your pump… Even if nothing changes, export once a month. Keep several old export files.

Copy on an internet drive (Dropbox, Google etc) : all the apks you used to install apps on your phone (AAPS, xDrip, BYODA, Patched LibreLink…) as well as the exported setting files from all your apps.

## I have problems, errors building the app.

Please

- check [Troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio#troubleshooting-android-studio) for typical errors and
- the tipps for with a [step by step walktrough](https://docs.google.com/document/d/1oc7aG0qrIMvK57unMqPEOoLt-J8UT1mxTKdTAxm8-po).

## I'm stuck on an objective and need help.

Screen capture the question and answers. Post-it on the Discord AAPS channel. Don't forget to tell which options you choose (or not) and why. You'll get hints and help but you'll need to find the answers.

## How to reset the password in AAPS v2.8.x ?

Open the hamburger menu, start the Configuration wizard and enter new password when asked. You can quit the wizard after the password phase.

## How to reset the password in AAPS v3.x

If you forgot your password: Close AAPS. Put an empty file named PasswordReset (without any extensions) in phone_main_memory/AAPS/extra directory. Restart AAPS. The new AAPS password is the serial number of your pump. The serial for the Omnipod DASH pod is 4241. You can change the password via 3 dots menu, configuration wizard, unlock parameters.

## My link/pump/pod is unresponsive (RL/OL/EmaLink…)

With some phones, there are Bluetooth disconnects from the Links (RL/OL/EmaL...).

Some also have non responsive Links (AAPS says that they are connected but the Links can't reach or command the pump.)

The easiest way to get all these parts working together is : 1/ Delete Link from AAPS 2/ Power off Link 3/ AAPS 3 dot menu, quit AAPS 4/ Long press AAPS icon, Android menu, info on app AAPS, Force stop AAPS and then Delete cache memory (Do not delete main memory !) 4bis/ Rarely some phones may need a reboot here. You can try without reboot. 5/Power on Link 6/Start AAPS 7/Pod tab, 3 dot menu, search and connect Link

## Build error: file name too long

While trying to build I get an error stating the file name is too long. Possible solutions: Move your sources to a directory closer to the root directory of your drive (e.g. "c:\src\AndroidAPS-EROS").

From Android Studio: Make sure "Gradle" is done syncing and indexing after opening the project and pulling from GitHub. Execute a Build->Clean Project before doing a Rebuild Project. Execute File->Invalidate Caches and Restart Android Studio.

## Alert: Running dev version. Closed loop is disabled

AndroidAPS is not running in "developer mode". AAPS shows the following message: "running dev version. Closed loop is disabled".

Make sure AndroidAPS is running in "developer mode": Place a file named "engineering_mode" at the location "AAPS/extra". Any file will do as long as it is properly named. Make sure to restart AndroidAPS for it to find the file and go into "developer mode".

Hint: Make a copy of an existing logfile and rename it to "engineering_mode" (note: no file extension!).

## Where can I find settings files?

Settings files will be stored on your phone's internal storage in the directory "/AAPS/preferences". WARNING: Make sure not to lose your password as without it you will not be able to import an encrypted settings file!

## How to configure battery savings?

Properly configuring Power Management is important to prevent your Phone's OS to suspend AndroidAPS and related app's and services when your phone is not being used. As a result AAPS can not do its work and/or Bluetooth connections for sensor and Rileylink (RL) may be shut down causing "pump disconnected" alerts and communication errors. On the phone, go to settings->Apps and disable battery savings for: AndroidAPS xDrip or BYODA/Dexcom app The Bluetooth system app (you may need to select for viewing system apps first) Alternatively, fully disable all battery savings on the phone. As a result your battery may drain faster but it is a good way to find out if battery savings is causing your problem. The way battery savings is implemented greatly depends on the phone's brand, model and/or OS version. Because of this it is almost impossible to give instructions to properly set battery savings for your setup. Experiment on what settings work best for you. For additional information, see also Don't kill my app

## Pump unreachable alerts several times a day or at night.

Your phone may be suspending AAPS services or even Bluetooth causing it to loose connection to RL (see battery savings) Consider configuring unreachable alerts to 120 minutes by going to the top right-hand side three-dot menu, selecting Preferences->Local Alerts->Pump unreachable threshold [min].

## Where can I delete treatments in AAPS v3 ?

3 dots menu, select treatements, then 3 dots menu again and you have different options available.

## Configuring and Using the NSClient remote app

AAPS can be monitored and controlled remotely via the NSClient app and optionally via the associated Wear app running on Android Wear watches. Note that the NSClient (remote) app is distinct from the NSClient configuration in AAPS, and the NSClient (remote) Wear app is distinct from the AAPS Wear app--for clarity the remote apps will be referred to as 'NSClient remote' and 'NSClient remote Wear' apps.

To enable NSClient remote functionality you must: 1) Install the NSClient remote app (the version should match the version of AAPS being used) 2) Run the NSClient remote app and proceed through the configuration wizard to grant required permissions and configure access to your Nightscout site. 3) At this point you may want to disable some of the Alarm options, and/or advanced settings which log the start of the NSClient remote app to your Nightscout site. Once this is done, NSClient remote will download Profile data from your Nightscout site, the 'Overview' tab will display CGM data and some AAPS data, but but may not display graph data, and will indicate that a profile isn't yet set. 4) To activate the profile:

- Enable remote profile synchronization in AAPS > NSClient > Options
- Activate the profile in NSClient remote > Profile After doing so, the profile will be set, and NSClient remote should display all data from AAPS. Hint: If the graph is still missing, try changing the graph settings to trigger an update. 5) To enable remote control by the AAPS NSClient, selectively enable the aspects of AAPS (Profile changes, Temp Targets, Carbs, etc.) that you would like to be able to control remotely via AAPS > NSClient > Options . Once these changes are made, you'll be able to remotely control AAPS via either Nightscout or NSClient remote.

If you'd like to monitor/control AAPS via the NSClient remote Wear App, you'll need both NSClient remote and the associated Wear app to be installed. To compile the NSClient remote Wear app, follow the standard instructions for installing/configuring the AAPS wear app, except when compiling it, choose the NSClient variant.

## I have a red triangle / AAPS won't enable closed loop / Loops stays in LGS / I have a yellow triangle

The red and yellow triangles are a security feature in AAPS v3.

Red triangle means that you have duplicate BGs and AAPS can't calculate precisely the deltas. You can't close the loop. You need to delete one BG of each duplicated value in order to clear the red triangle. Go to BYODA or xDRIP tab, long press one line you want to delete, check one of each lines that are doubled (or via 3 dots menu and Delete, depending on your AAPS version). You may need to reset the AAPS databases if there are too many double BGs. In this case, you'll also loose stats, IOB, COB, selected profile.

Possible origin of the problem: xDrip and/or NS backfilling BGs.

The yellow triangle means unstable delay between each BG reading. You don't receive BGs every 5 min regularly or missing BGs. It is often a Libre problem. It also happens when you change G6 transmitter. If the yellow triangle is related to the G6 tansmitter change, it will go away by itself after several hours (around 24h). In case of Libre, the yellow triangle will stay. The loop can be closed and works correctly.

## Can I move an active DASH Pod to other hardware?

This is possible. Note that as moving is "unsupported" and "untested" there is some risk involved. Best to try the procedure when your Pod is about to expire so when things go wrong not much is lost.

Critical is that pump "state" (which includes it's MAC address) in AAPS and DASH match on reconnecting

## Procedure I follow in this:

1) Suspend the DASH pump. This makes sure there are no running or queued commands active when DASH loses connection 2) Put the phone into airplane mode to disable BT (as well as WiFi and Mobile data). This way it is guaranteed AAPS and DASH can not communicate. 3) Export settings (which includes the DASH state) 4) Copy the settings file just exported from the phone (as it is in airplane mode and we do not want to change that, easiest way is using USB cable) 5) Copy the settings file to the alternate phone. 6) Import settings on the alternate phones AAPS. 7) Check the DASH tab to verify it is seeing the Pod. 8) Un-suspend the Pod. 9) Check the DASH tab and confirm it is communicating with the Pod (use the refresh button)

Congratulations: you did it!

*Wait!* You still have the main phone thinking it can reconnect to the same DASH:

1) On the main phone choose "deactivate". This is safe because the phone has no way of communicating with DASH to actually deactivated the Pod (it is still in airplane mode) 2) Deactivation will result in a communications error - this is expected. 3) Just hit "retry" a couple of times until AAPS offers the option to "Discard" the Pod.

When Discarded, verify AAPS is reporting "No Active Pod". You can now safely disable airplane mode again.

## How do I import settings from earlier versions of AAPS into AAPS v3 ?

You can only import settings (in AAPS v3) that were exported using AAPS v2.8x or v3.x. If you were using a version of AAPS older than v2.8x or you need to use setting exports older than v2.8x, then you need to install AAPS v2.8 first. Import the older settings of v2.x in v2.8. After checking that all is OK, you can export settings from v2.8. Install AAPS v3 and import v2.8 settings in v3.

If you use the same key to build v2.8 and v3, you won't even have to import settings. You can install v3 over v2.8.

There were some new objectives added. You'll need to validate them.