# Accu-Chek Combo - Dicas para uso básico

## Como assegurar operações suaves

* Ande **SEMPRE com o smartphone consigo**, deixe-o próximo da sua cama à noite.
* Certifique-se sempre de que a bateria da bomba está o mais completa possível. Consulte a seção da bateria para dicas sobre a bateria.
* É melhor **não mexer na app ruffy** enquanto o sistema está em execução. Se a app for iniciada novamente, a conexão com a bomba pode ser interrompida. Uma vez que a bomba esteja conectada ao ruffy, não há necessidade de se reconectar. Mesmo após um reinício do telefone, a conexão é restabelecida automaticamente. Se possível, mova a app para um ecrã não utilizado ou para uma pasta no seu smartphone para que não a abra acidentalmente.
* Se abrir involuntariamente a app ruffy durante o loop, é melhor reiniciar o smartphone logo de seguida.
* Sempre que possível, opere com a bomba apenas através da app AndroidAPS. Para facilitar isto, ative o Key lock na bomba em **CONFIGURAÇÕES DE BOMBA / BLOQUEIO DE CHAVE / ON**. Somente ao trocar a bateria ou o cartucho, é necessário utilizar as chaves da bomba. ![Bloqueio](../images/combo/combo-tips-keylock.png)

## Bomba inacessível. O que fazer?

### Ativar alarme da bomba inacessível

* Na AndroidAPS, vá até **Preferências / Alertas locais** e ative o **Alertar caso não seja possível alcançar a bomba** e configure o **Limite para bomba inacessível [Min]** para **31** minutos. 
* Isto dar-lhe-á tempo suficiente para não ativar o alarme ao sair da sala enquanto o seu telefone é deixado na mesa de secretária, mas informará se a bomba não pode ser alcançada durante o tempo que excede a duração de uma taxa basal temporária.

### Restaurar o alcance da bomba

* Quando a AndroidAPS reporta um alarme de **Bomba inacessível** , primeiro solte o bloqueio de teclas e **pressione qualquer tecla na bomba** (por exemplo, botão "para baixo"). Assim que o ecrã da bomba se desligar, pressione **ATUALIZAR** no separador **Combo** na AndroidAPS. Na maior parte dos casos, a comunicação volta a funcionar.
* Se isto não ajudar, reinicie o smartphone. Após o reinício, a AndroidAPS e o ruffy serão reativados e uma nova conexão será estabelecida com a bomba.
* Os testes com smartphones diferentes mostraram que certos smartphones acionam o erro "bomba inacessível" com mais frequência do que outros. [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) lista de smartphones testados com sucesso. 

### Raiz das causas, e consequências, de erros de comunicação frequentes

* Em telefones com **pouca memória** (ou **configurações agressivas de poupança de bateria** ), a AndroidAPS é frequentemente encerrada. Pode identificar isto quando os botões Insulina e Calculadora no ecrã inicial não são exibidos ao abrir a AAPS, porque o sistema está a iniciar. Isto pode ativar alarmes de "bomba inacessível" na inicialização. No campo **Última Ligação** do separador Combo, é possível verificar quando a AndroidAPS comunicou pela última vez com a bomba. 

![Bomba inacessível](../images/combo/combo-tips-pump-unreachable.png) ![Sem ligação à bomba](../images/combo/combo-tips-no-connection-to-pump.png)

* Este erro pode gastar a bateria da bomba rapidamente porque o perfil basal é lido pela bomba quando a aplicação é reiniciada.
* Aumenta também a probabilidade de causar o erro que faz com que a bomba rejeite todas as conexões de entrada até que um botão na bomba seja pressionado. 

## Falha do cancelamento de uma basal temporária

* Ocasionalmente, a AndroidAPS pode não cancelar automaticamente um alerta de **DBT CANCELADA**. Então tem de pressionar **ATUALIZAR** na AndroidAPS , no separador **Combo** ou o alarme na bomba será confirmado.

## Considerações sobre a bateria da bomba

### Trocar a bateria

* Após um alarme de **bateria fraca** a bateria deve ser mudada o mais rápido possível para ter energia suficiente para uma comunicação Bluetooth confiável com o smartphone, mesmo que o telefone esteja a uma distância mais larga da bomba.
* Mesmo depois de um alarme de **de bateria baixa** , a bateria pode ser usada por algum tempo. No entanto, recomenda-se sempre ter uma bateria nova consigo após um alarme de "bateria baixa".
* Para fazer isto, pressione sem largar o símbolo de **Loop Fechado** no ecrã principal e selecione **Suspender loop por 1h**. 
* Aguarde até que a bomba comunique com o telefone e o logotipo do Bluetooth na bomba desapareça.

![Bluetooth activado](../images/combo/combo-tips-compo.png)

* Solte o bloqueio de teclas na bomba, pare a bomba, confirme uma taxa de basal temporária possivelmente cancelada e mude a bateria.
* Em seguida, volte a INICIAR A BOMBA e selecione **Retomar Loop** pressionando continuamente **no símbolo do loop** no ecrã principal.
* A AndroidAPS vai estabelecer uma dose basal temporária necessária a partir do próximo valor de açúcar no sangue. 

### Tipo de bateria e causas de curta duração da bateria

* Como a comunicação por Bluetooth é intensiva, consome muita energia, portanto use **baterias de alta qualidade** como a Energizer Ultimate Lithium, as distribuídas pela Accu-Chek ou se está pensando em baterias recarregáveis, use baterias Eneloop. 

![Energizar](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

Intervalos de tempo de vida habituais dos diferentes tipos de bateria:

* **Energizer Ultimate Lithium**: 4 a 7 semanas
* **Power One Alkaline** (Varta) Accu-chek: 2 to 4 semanas
* **Eneloop rechargeable** batteries (BK-3MCCE): 1 to 3 weeks

Se a vida útil das suas baterias for significativamente mais curta do que os intervalos acima, confira as seguintes possíveis causas:

* A última versão (março de 2018) da [app ruffy](https://github.com/MilosKozak/ruffy) melhorou significativamente o tempo de vida da bateria da bomba. Certifique-se de estar a usar essa versão se tiver problemas com o período de vida da bateria.
* Existem algumas variantes da tampa de bateria da bomba Combo, que colocam a bateria em curto circuito e assim gasta a sua energia. As tampas sem este problema podem ser reconhecidas pelos contatos dourados.
* Se o relógio da bomba não "sobreviver" a uma curta mudança de bateria, é provável que o capacitor (o que mantém o relógio a funcionar durante uma breve interrupção de energia) esteja estragado. Neste caso, apenas uma substituição da bomba pela Roche ajudará, o que não é um problema durante o período de garantia. 
* O hardware e software do telemóvel (sistema operacional Android e bluetooth) também têm impacto no tempo de vida da bateria da bomba, mesmo que os fatores exatos não sejam completamente conhecidos ainda. Se tiver oportunidade, teste outro smartphone e compare o tempo de vida da bateria.

## Mudanças de Hora

* Atualmente, o controlador da Combo não suporta o ajuste automático do horário da bomba.
* Durante a noite de uma mudança de horário, o tempo do telemóvel é atualizado, mas o tempo da bomba permanece inalterado. Isto leva a um alarme devido a tempos diferentes entre os sistemas.
* Se não quiser ser acordado durante a noite, **desative o horário automático de verão no telemóvel** na noite antes da mudança da hora e ajuste os horários manualmente na manhã seguinte.

## Bólus prolongado, bólus multiondas

O algoritmo OpenAPS não suporta um bólus prolongado ou bólus multiondas criados na bomba. Mas um tratamento semelhante pode ser alcançado através da seguinte alternativa:

* Insira os hidratos de carbono mas não coloque bólus para eles. O algoritmo do loop reagirá com mais agressividade. Se necessário, use o botão **Hidratos** no ecrã principal.

* Se estiver tentado a apenas usar o bólus prolongado ou multionda diretamente na bomba, a AndroidAPS irá penalizá-lo desativando o loop fechado nas próximas seis horas, para garantir que nenhum excesso de insulina serácalculado.

![Loop desativado após bólus multionda](../images/combo/combo-tips-multiwave-bolus.png)

## Alarmes na administração de bólus

* Caso a AndroidAPS detecte que um bólus idêntico foi administrado com sucesso no mesmo minuto, a entrega de bólus será impedida com número idêntico de unidades de insulina. Se realmente quer administrar a mesma insulina duas vezes num curto espaço de tempo, basta esperar mais dois minutos e depois administrar o bólus novamente. Se o primeiro bólus tiver sido interrompido ou não foi entregue por outras razões, pode imediatamente reenviar o bólus a partir da APS 2.0.
* O background é um mecanismo de segurança que lê o histórico de bólus da bomba antes de enviar um novo bólus para calcular corretamente a insulina ativa (IA), mesmo quando um bólus é entregue diretamente da bomba. Há que evitar tratamentos repetidos.

![Bólus duplo](../images/combo/combo-tips-doppelbolus.png)

* Esse mecanismo também é responsável por uma segunda causa do erro: se durante o uso da calculadora do bólus outro bólus for administrado através da bomba e, assim, a história do bólus mudar, a base do cálculo do bólus está errada e o bólus é abortado. 

![Bólus cancelado](../images/combo/combo-tips-history-changed.png)