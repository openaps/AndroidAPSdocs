# Mudança de fuso horário e horário de verão

Quando o fuso horário do seu telefone muda, o **AAPS** calcula de novo, do zero, a **IOB**, a basal e a sensibilidade do passado, cerca de 10 segundos depois da mudança. Enquanto isso acontece, os gráficos e valores na tela principal podem demorar um pouco para atualizar.

(timezone-traveling-with-pumps)=

## Mudança de fuso horário para Omnipod Dash

* Atualize o status da bomba em **Gerenciar → Bomba**
* Selecione temporariamente outro **Perfil** e depois volte para o seu **Perfil** original ou desejado

## Mudança de fuso horário para DanaR, DanaR coreana

Não há problema em mudar o fuso horário no telefone, porque a bomba não usa histórico

(timezone-traveling-danarv2-danars)=

## Mudança de fuso horário para DanaRv2, DanaRS, Dana-i

Estas bombas precisam de cuidado especial, porque o **AAPS** usa o histórico da bomba, mas os registros na bomba não têm o fuso horário. **Isso significa que, se você mudar o fuso horário no telefone, os registros serão lidos com outro fuso horário e ficarão duplicados.**

Para evitar isso, existem duas possibilidades:

### Opção 1: Manter o horário de casa e deslocar o perfil no tempo

* Desligue 'Data e hora automáticas' nas configurações do seu telefone (mudança manual do fuso horário).

* Seu telefone deve manter o horário padrão de casa durante toda a viagem.

* Desloque seu **Perfil** no tempo de acordo com a diferença entre o horário de casa e o horário do destino.
   
   * Toque no nome do **Perfil** na tela principal para abrir a [tela Perfil](#ProfileSwitch-manage-v4)
   * Selecione seu **Perfil** e toque em **▶ Ativar**
   * Defina '**Deslocamento de tempo**' de acordo com o seu destino e toque em **Ativar**.
   
   ![Troca de perfil com deslocamento de tempo](../images/ProfileSwitchTimeShift2.png)
   
   * por exemplo, Viena -> Nova York: **Troca de Perfil** +6 horas
   * por exemplo, Viena -> Sydney: **Troca de Perfil** -8 horas

### Opção 2: Apagar o histórico da bomba

* Desligue 'Data e hora automáticas' nas configurações do telefone (mudança manual do fuso horário)

Quando você sair do avião:

* desligue a bomba
* mude o fuso horário no telefone
* desligue o telefone, ligue a bomba
* apague o histórico da bomba
* mude a hora na bomba
* ligue o telefone
* deixe o telefone se conectar à bomba e ajustar a hora

(timezone-traveling-insight)=

## Mudança de fuso horário para Insight

O driver ajusta automaticamente a hora da bomba para a hora do telefone.

A Insight também registra no histórico o momento em que a hora foi alterada e de qual hora (antiga) para qual hora (nova). Assim, a hora correta pode ser determinada no **AAPS** apesar da mudança de hora.

Isso pode causar imprecisões nas **TDDs**. Mas isso não deve ser um problema.

Assim, o usuário da Insight não precisa se preocupar com mudanças de fuso horário e de hora. Há uma exceção a esta regra: a bomba Insight tem uma pequena bateria interna que mantém a hora etc. enquanto você troca a bateria "real". Se a troca da bateria demorar muito, essa bateria interna fica sem energia, o relógio é zerado e você precisa informar a hora e a data depois de colocar uma bateria nova. Neste caso, todos os registros anteriores à troca da bateria são ignorados no cálculo do AAPS, porque não é possível saber a hora correta.

## Mudança de fuso horário para Accu-Chek Combo

O [driver da Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) ajusta automaticamente a hora da bomba para a hora do telefone. A Combo não consegue salvar fusos horários, só a hora local, que é exatamente o que o driver programa na bomba. Além disso, ele salva o fuso horário nas preferências locais do AAPS, para poder converter a hora local da bomba em um registro de tempo completo com o deslocamento do fuso horário. O usuário não precisa fazer nada; se a hora da Combo for muito diferente da hora atual do telefone, a hora da bomba é ajustada automaticamente.

Note que isso leva algum tempo, porque só pode ser feito no modo de terminal remoto, que em geral é lento. Esta é uma limitação da Combo que não pode ser contornada.

## Mudança de fuso horário para Medtrum

O driver ajusta automaticamente a hora da bomba para a hora do telefone.

Mudanças de fuso horário mantêm o histórico intacto, só a TDD pode ser afetada. Mudar a hora do telefone manualmente pode causar problemas com o histórico e a **IOB**. Se você mudar a hora manualmente, verifique bem a **IOB**.

Quando o fuso horário ou a hora mudam, as **TBRs** em andamento são paradas.

(time-adjustment-daylight-savings-time-dst)=

## HORÁRIO DE VERÃO (DST)

Ajuste de hora para o horário de verão.

Dependendo da sua bomba e do seu CGM, saltos de hora podem impedir que o **AAPS** funcione corretamente. Para algumas bombas, é melhor ajustar o fuso horário enquanto você está acordado, antes do horário de verão começar, e não durante a noite.

### Ajuste automático do horário de verão para a maioria das bombas

* No entanto, o **Loop** será desativado por 3 horas DEPOIS da mudança do horário de verão (normalmente a partir da 1h da manhã) e o **AAPS** usará a basal de fundo definida no seu **Perfil**. Isso é feito por segurança - a **IOB** pode ficar alta demais por causa de um bólus duplicado antes da mudança do horário de verão.
* Depois da mudança do horário de verão, faça uma **Troca de Perfil** para o **Perfil** desejado para ativar o **Loop**: toque no nome do perfil na tela principal e depois no botão redondo **▶** (veja [Ativar um perfil](#ProfileSwitch-manage-v4)).
* Antes da mudança do horário de verão, você também receberá uma notificação na tela principal do **AAPS** de que o **Loop** foi desativado temporariamente. Esta mensagem aparece sem bipe, vibração ou som parecido.

Se você der bólus com a calculadora do **AAPS**, não use os dados de **COB** e **IOB**, a menos que tenha certeza de que esses dados estão totalmente corretos. Tenha cuidado e não use esta função por algumas horas depois da mudança do horário de verão.

### Horário de verão para Accu-Chek Insight

* A mudança para o horário de verão é feita automaticamente. Nenhuma ação é necessária.

### Horário de verão para Accu-Chek Combo

* A mudança para o horário de verão é feita automaticamente. Nenhuma ação é necessária.

### Horário de verão para Medtrum

* A mudança para o horário de verão é feita automaticamente. Nenhuma ação é necessária.

### Horário de verão para Omnipod Dash

* Ou deixe o **AAPS** usar temporariamente a basal de fundo depois da mudança do horário de verão, como explicado acima.
* Ou, se você não quiser que o **AAPS** use temporariamente a basal de fundo durante a noite, pode mudar o fuso horário no dia anterior à mudança do horário de verão, para evitar a interrupção durante a noite. ATENÇÃO: ESTA OPÇÃO PODE FAZER SEU POD EXPIRAR ANTES DO TEMPO. TENHA MATERIAIS DE REPOSIÇÃO COM VOCÊ SE ESCOLHER A FUNÇÃO ABAIXO.

#### Ações antes da mudança do relógio

1. Desligue todas as configurações do telefone que definem o fuso horário automaticamente, para que você possa mudar para um fuso horário desejado que não use horário de verão. Como ativar isso depende do seu smartphone e da versão do Android.
   
   * Alguns telefones têm duas configurações: uma para definir a hora automaticamente (que de preferência deve ficar ligada) e outra para definir o fuso horário automaticamente (que você deve DESLIGAR: **Definir automaticamente** em **Fuso horário** na captura de tela abaixo).
   * Infelizmente, algumas versões do Android têm uma única chave para ativar o ajuste automático da hora e do fuso horário juntos. Por enquanto, você terá que desligar isso.

![Screenshot_20260329-110315 (1)](../images/570963727-ca40c1c6-1697-4832-ae10-5cf6a1dc0bce.png)

2. Encontre um fuso horário que tenha a mesma hora do seu local atual, mas que não use horário de verão.
   
   * Uma lista desses países está disponível em [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * Para o Horário da Europa Central (CET), pode ser "Brazzaville" (Congo). Mude o fuso horário do seu telefone para Congo.

![Screenshot_20260329-111830](../images/570966323-b7b7f738-f91e-40df-ad79-f404fbfb9ae6.png)

3. No **AAPS**, atualize sua bomba e troque para o **Perfil** desejado.

4. Verifique a **IOB** e a **COB** no **AAPS**. Se estiverem incorretas, desative o **Loop** por pelo menos uma DIA ou pelo tempo máximo de carboidratos (Max-Carb-Time) - o que for maior.

5. Ações depois da mudança do relógio. Um bom momento para voltar ao fuso horário local é quando a **IOB** estiver baixa. Por exemplo, uma hora antes de uma refeição, como o café da manhã. O ideal é que a **COB** e a **IOB** estejam ambas perto de zero.