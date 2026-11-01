# Mudança de fuso horário e hora de verão

Quando o fuso horário do telefone muda, o **AAPS** volta a calcular do início a **IA**, a basal e a sensibilidade do passado, cerca de 10 segundos depois da mudança. Enquanto isto decorre, os gráficos e os valores no ecrã principal podem demorar um pouco a atualizar.

(timezone-traveling-with-pumps)=

## Mudança de fuso horário com a Omnipod Dash

* Atualize o estado da bomba em **Gerir → Bomba**
* Selecione temporariamente outro **Perfil** e depois volte ao seu **Perfil** original ou desejado

## Mudança de fuso horário com a DanaR e a DanaR coreana

Não há problema em mudar o fuso horário no telefone, porque a bomba não usa o histórico

(timezone-traveling-danarv2-danars)=

## Mudança de fuso horário com a DanaRv2, a DanaRS e a Dana-i

Estas bombas precisam de cuidados especiais, porque o **AAPS** usa o histórico da bomba, mas os registos na bomba não têm o fuso horário. **Isto significa que, se mudar o fuso horário no telefone, os registos serão lidos com um fuso horário diferente e ficarão duplicados.**

Para evitar isto, há duas possibilidades:

### Opção 1: manter a hora de casa e deslocar o perfil no tempo

* Desligue «Data e hora automáticas» nas definições do telefone (mudança manual do fuso horário).

* O seu telefone tem de manter a hora normal de casa durante toda a viagem.

* Desloque o seu **Perfil** no tempo de acordo com a diferença entre a hora de casa e a hora do destino.
   
   * Toque no nome do **Perfil** no ecrã principal para abrir o [ecrã do perfil](#ProfileSwitch-manage-v4)
   * Selecione o seu **Perfil** e toque em **▶ Ativar**
   * Defina o «**Deslocamento temporal**» de acordo com o seu destino e toque em **Ativar**.
   
   ![Troca de Perfil com deslocamento temporal](../images/ProfileSwitchTimeShift2.png)
   
   * por exemplo, Viena -> Nova Iorque: **Troca de Perfil** +6 horas
   * por exemplo, Viena -> Sydney: **Troca de Perfil** -8 horas

### Opção 2: apagar o histórico da bomba

* Desligue «Data e hora automáticas» nas definições do telefone (mudança manual do fuso horário)

Quando sair do avião:

* desligue a bomba
* mude o fuso horário no telefone
* desligue o telefone, ligue a bomba
* apague o histórico na bomba
* mude a hora na bomba
* ligue o telefone
* deixe o telefone ligar-se à bomba e acertar a hora

(timezone-traveling-insight)=

## Mudança de fuso horário com a Insight

O controlador ajusta automaticamente a hora da bomba à hora do telefone.

A Insight também regista no histórico o momento em que a hora foi mudada e de que hora (antiga) para que hora (nova). Assim, a hora correta pode ser determinada no **AAPS** apesar da mudança da hora.

Pode causar imprecisões nas **TID**. Mas isto não deve ser um problema.

Por isso, o utilizador da Insight não precisa de se preocupar com mudanças de fuso horário nem de hora. Há uma exceção a esta regra: a bomba Insight tem uma pequena bateria interna que alimenta o relógio, etc. enquanto troca a bateria «real». Se a troca de bateria demorar demasiado, esta bateria interna fica sem energia, o relógio é reposto e é-lhe pedido que introduza a hora e a data depois de inserir uma nova bateria. Neste caso, todos os registos anteriores à troca de bateria são ignorados nos cálculos do AAPS, porque não é possível saber a hora correta.

## Mudança de fuso horário com a Accu-Chek Combo

O [controlador da Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) ajusta automaticamente a hora da bomba à hora do telefone. A Combo não consegue guardar fusos horários, só a hora local, que é exatamente o que o controlador programa na bomba. Além disso, guarda o fuso horário nas preferências locais do AAPS, para poder converter a hora local da bomba num registo de tempo completo com o desvio do fuso horário. O utilizador não tem de fazer nada; se a hora da Combo se afastar muito da hora atual do telefone, a hora da bomba é ajustada automaticamente.

Note, no entanto, que isto demora algum tempo, porque só pode ser feito no modo de terminal remoto, que é geralmente lento. Esta é uma limitação da Combo que não pode ser ultrapassada.

## Mudança de fuso horário com a Medtrum

O controlador ajusta automaticamente a hora da bomba à hora do telefone.

As mudanças de fuso horário mantêm o histórico intacto; só a TID pode ser afetada. Mudar a hora do telefone manualmente pode causar problemas no histórico e na **IA**. Se mudar a hora manualmente, verifique bem a **IA**.

Quando o fuso horário ou a hora mudam, as **basais temporárias** em curso são paradas.

(time-adjustment-daylight-savings-time-dst)=

## HORA DE VERÃO (DST)

Acerto da hora para a hora de verão.

Conforme a sua bomba e o seu CGM, saltos na hora podem impedir o **AAPS** de funcionar corretamente. Com algumas bombas, é melhor ajustar o fuso horário enquanto está acordado, antes da mudança da hora de verão, e não durante a noite.

### Ajuste automático da hora de verão na maioria das bombas

* No entanto, o **Loop** será desativado durante 3 horas DEPOIS da mudança da hora de verão (normalmente a partir da 1 h) e o **AAPS** passa a usar a basal de fundo definida no seu **Perfil**. Isto é feito por razões de segurança – a **IA** pode estar alta demais devido a bólus duplicados antes da mudança da hora de verão.
* Depois da mudança da hora de verão, faça uma **Troca de Perfil** para o **Perfil** desejado para ativar o **Loop**: toque no nome do perfil no ecrã principal e depois no botão redondo **▶** (ver [Ativar um perfil](#ProfileSwitch-manage-v4)).
* Antes da mudança da hora de verão, também receberá no ecrã principal do **AAPS** uma notificação de que o **Loop** foi desativado temporariamente. Esta mensagem aparece sem bip, vibração ou som semelhante.

Se fizer bólus com a calculadora do **AAPS**, não use os dados de **HCA** e **IA**, a não ser que tenha a certeza de que estão absolutamente corretos. Tenha cuidado e não use esta função durante algumas horas depois da mudança da hora de verão.

### Hora de verão com a Accu-Chek Insight

* A mudança para a hora de verão é feita automaticamente. Não é preciso fazer nada.

### Hora de verão com a Accu-Chek Combo

* A mudança para a hora de verão é feita automaticamente. Não é preciso fazer nada.

### Hora de verão com a Medtrum

* A mudança para a hora de verão é feita automaticamente. Não é preciso fazer nada.

### Hora de verão com a Omnipod Dash

* Ou deixa o **AAPS** usar temporariamente a basal de fundo depois da mudança da hora de verão, como explicado acima.
* Ou, se não quiser que o **AAPS** use temporariamente a basal de fundo durante a noite, pode mudar o fuso horário no dia anterior à mudança da hora de verão, para evitar problemas durante a noite. ATENÇÃO: ESTA OPÇÃO PODE FAZER O SEU POD EXPIRAR ANTES DO TEMPO. SE ESCOLHER A FUNÇÃO ABAIXO, TENHA MATERIAL CONSIGO.

#### Ações a fazer antes da mudança da hora

1. Desligue todas as definições do telefone que acertam automaticamente o fuso horário, para poder mudar para um fuso horário à sua escolha que não use hora de verão. A forma de ativar isto depende do seu smartphone e da versão do Android.
   
   * Alguns telefones têm duas definições: uma para o acerto automático da hora (que deve, de preferência, ficar ligada) e outra para o acerto automático do fuso horário (que tem de DESLIGAR: **Definir automaticamente** em **Fuso horário** na captura de ecrã abaixo).
   * Infelizmente, algumas versões do Android têm um único interruptor para ativar o acerto automático da hora e do fuso horário. Por agora, terá de desligar isto.

![Screenshot_20260329-110315 (1)](../images/570963727-ca40c1c6-1697-4832-ae10-5cf6a1dc0bce.png)

2. Encontre um fuso horário que tenha a mesma hora que o local onde está, mas que não use hora de verão.
   
   * Uma lista destes países está disponível em [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * Para a hora da Europa Central (CET), pode ser «Brazzaville» (Congo). Mude o fuso horário do telefone para o Congo.

![Screenshot_20260329-111830](../images/570966323-b7b7f738-f91e-40df-ad79-f404fbfb9ae6.png)

3. No **AAPS**, atualize a bomba e mude para o **Perfil** desejado.

4. Verifique a **IA** e a **HCA** no **AAPS** e, se não estiverem corretas, desative o **Loop** durante pelo menos uma DAI ou o tempo máximo de absorção dos hidratos (Max-Carb-Time) – o que for maior.

5. Ações a fazer depois da mudança da hora. Um bom momento para voltar ao fuso horário local é quando a **IA** está baixa. Por exemplo, uma hora antes de uma refeição, como o pequeno-almoço. O ideal é que a **HCA** e a **IA** estejam ambas perto de zero.