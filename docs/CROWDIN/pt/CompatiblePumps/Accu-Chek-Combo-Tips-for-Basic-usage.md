* * *

orphan: true

* * *

# Accu-Chek Combo - Dicas para uso básico

**NOTE:** Starting with AAPS version 3.2, a [new Combo driver](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (referred to as "combov2" sometimes) has been added. The old driver is also referred to as the "Ruffy-based driver". Some parts of this document only apply to the old driver. These will be annotated accordingly.

## Como assegurar operações suaves

* Always **carry the smartphone with you**, leave it next to your bed at night. As your pump may lay behind or under you body while you sleep, a higher position (on a shelf or board) works best.
* Always make sure that the pump battery is as full as possible. See the battery section for tipps regarding the battery.

* (Only applies to the old driver) It is best to **not touch the app ruffy** while the system is running. If the app is started again, the connection to the pump can break off. Once the pump is connected to ruffy, there is no need to re-connect. Even after a restart of the phone, the connection is automatically re-established. If possible, move the app to an unused screen or in a folder on your smartphone so you do not accidentally open it.

* (Only applies to the old driver) If you unintentionally open the app ruffy during looping, it's best to restart the smartphone right away.
* Whenever possible, only operate the pump via the AAPS app. To facilitate this, activate the key lock on the pump under **PUMP SETTINGS / KEY LOCK / ON**. Somente ao trocar a bateria ou o cartucho, é necessário utilizar as chaves da bomba. 

![Keylock](../images/combo/combo-tips-keylock.png)

## Bomba inacessível. O que fazer?

### Ativar alarme da bomba inacessível

* In AAPS, go to **Settings / Local Alarms** and activate **alarm when pump is unreachable** and set **pump not reachable limit [Min]** to **31** minutes.
* Isto dar-lhe-á tempo suficiente para não ativar o alarme ao sair da sala enquanto o seu telefone é deixado na mesa de secretária, mas informará se a bomba não pode ser alcançada durante o tempo que excede a duração de uma taxa basal temporária.

### Restaurar o alcance da bomba

* When AAPS reports a **pump unreachable** alarm, first release the keylock and **press any key on the pump** (e.g. "down" button). As soon as the pump display has turned off, press **Refresh** on the **Combo Tab** in AAPS. Na maior parte dos casos, a comunicação volta a funcionar.
* If that does not help, reboot your smartphone. After the restart, AAPS will be reactivated and a new connection will be established with the pump. If you are using the old driver, ruffy will be reactivated as well.

* The tests with different smartphones have shown that certain smartphones trigger the "pump unreachable" error more often than others. See [AAPS Phones](#Phones-list-of-tested-phones) for successfully tested smartphones.

### Raiz das causas, e consequências, de erros de comunicação frequentes

* On phones with **low memory** (or **aggressive power-saving** settings), AAPS is often shut down. Pode identificar isto quando os botões Insulina e Calculadora no ecrã inicial não são exibidos ao abrir a AAPS, porque o sistema está a iniciar. Isto pode ativar alarmes de "bomba inacessível" na inicialização. In the **Last Connection** field of the Combo tab, you can check when AAPS last communicated with the pump.

![Pump unreachable](../images/combo/combo-tips-pump-unreachable.png)

![No connection to pump (as shown in the old driver's tab)](../images/combo/combo-tips-no-connection-to-pump.png)

![No connection to pump (as shown in the new driver's tab)](../images/combo/combov2-tips-no-connection-to-pump.png)

* Este erro pode gastar a bateria da bomba rapidamente porque o perfil basal é lido pela bomba quando a aplicação é reiniciada.
* Aumenta também a probabilidade de causar o erro que faz com que a bomba rejeite todas as conexões de entrada até que um botão na bomba seja pressionado. 

## Falha do cancelamento de uma basal temporária

* Occasionally, AAPS can not automatically cancel a **TBR CANCELED** alert. Then you have to either press **UPDATE** in the AAPS **Combo tab** or the alarm on the pump will need to be confirmed.

## Considerações sobre a bateria da bomba

### Trocar a bateria

* Após um alarme de **bateria fraca** a bateria deve ser mudada o mais rápido possível para ter energia suficiente para uma comunicação Bluetooth confiável com o smartphone, mesmo que o telefone esteja a uma distância mais larga da bomba.
* Mesmo depois de um alarme de **de bateria baixa** , a bateria pode ser usada por algum tempo. No entanto, recomenda-se sempre ter uma bateria nova consigo após um alarme de "bateria baixa".
* Before changing the battery, press on the **Loop** symbol on the main screen and select **Suspend loop for 1h**. 
* Wait for the pump to communicate with the pump and the bluetooth logo on the pump has faded.

![Bluetooth enabled](../images/combo/combo-tips-compo.png)

* Release the key lock on the pump, put the pump into stop mode, confirm a possibly canceled temporary basal rate, and change the battery quickly.
* When using the old driver, if the clock on the pump did not survive the battery chenge, re-set the date and time on the pump to exactly the date/time on your phone running AAPS. (The new driver automatically updates the pump's date and time.)
* Then put the pump back in run mode select **Resume** when pressing on the **Suspended Loop** icon on the main screen.
* AAPS will re-set a necessary temporary basal rate with the arrival of the next blood sugar value.

(Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)=

### Tipo de bateria e causas de curta duração da bateria

* As intensive Bluetooth communication consumes a lot of energy, only use **high-quality batteries** like Energizer Ultimate Lithium, the "power one"s from the "large" Accu-Chek service pack, or if you are going for a rechargeable battery, use Eneloop batteries. 

![Energizer](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

Ranges for typical life time of the different battery types are as follows:

* **Energizer Ultimate Lithium**: 4 a 7 semanas
* **Power One Alkaline** (Varta) Accu-chek: 2 to 4 semanas
* **Eneloop rechargeable** batteries (BK-3MCCE): 1 to 3 weeks

If your battery life is significantly shorter than the ranges given above, please check the following possible causes:

* (Only applies to the old driver) Versions of the [ruffy App](https://github.com/MilosKozak/ruffy) after vMarch 2018 significantly improved pump battery lifetime. Make sure you are on the newest version if you have issues with a short battery lifetime.
* Existem algumas variantes da tampa de bateria da bomba Combo, que colocam a bateria em curto circuito e assim gasta a sua energia. As tampas sem este problema podem ser reconhecidas pelos contatos dourados.
* Se o relógio da bomba não "sobreviver" a uma curta mudança de bateria, é provável que o capacitor (o que mantém o relógio a funcionar durante uma breve interrupção de energia) esteja estragado. In this case, a replacement of the pump by Roche might help, which is not a problem during the warranty period. 
* O hardware e software do telemóvel (sistema operacional Android e bluetooth) também têm impacto no tempo de vida da bateria da bomba, mesmo que os fatores exatos não sejam completamente conhecidos ainda. Se tiver oportunidade, teste outro smartphone e compare o tempo de vida da bateria.

## Mudanças de Hora

**NOTE**: The new driver automatically sets date and time and handles daylight saving time changes on its own. The steps below all only apply to the old driver.

* Atualmente, o controlador da Combo não suporta o ajuste automático do horário da bomba.
* Durante a noite de uma mudança de horário, o tempo do telemóvel é atualizado, mas o tempo da bomba permanece inalterado. Isto leva a um alarme devido a tempos diferentes entre os sistemas.
* If you do not want to be awakened at night, **deactivate the automatic daylight saving time changeover on the mobile phone** in the evening before the time changeover and adjust the times manually the next morning. A good way to deal with daylight saving time changes is to switch to a different time zone located on the same longitude you are located at but closer to the equator, where usually no daylight saving time is observed. Example: For Central Europe on Summer Time (CEST/GMT+2), you could switch to the time zone of Zimbabwe on your phone the night before the switch to winter time and then switch back to Central European Time CET/GMT+1 the next morning while changing the clock on your pump at the same time. The other way around, switch to the time zone of Nigeria while on Winter Time CET/GMT+1 and go back to Central European Summer Time (CEST/GMT+2) the morning after the switch to summer time and change the pump time accordingly. Look at https://www.timeanddate.com/time/map/ to find a suitable country.

## Bólus prolongado, bólus multiondas

The OpenAPS algorithm does not support a parallel extended bolus or multiwave bolus. But a similar treatment can be achieved by the following alternatives:

* Use **e-Carbs** when entering carbs or using the Calculator by entering the carbs of the full meal and the duration you expect the carbs to arrive as glucose in you blood. The system will then calculate small carbs equally distributed over the whole duration which will cause th algorithm to provide equivalent insulin dosing while still permanently checking the overall rise/decrease of the blood glucose level. For a multiwave bolus approach, you can also combine a smaller immediate bolus with e-carbs. 
* Before eating, on the **Actions tab** in AAPS set as a temporary **Eating Soon** goal with target glucose 80 for several hours. The duration should be based on the interval you would chosse for an extended bolus. This will keep your target lower than usual and therefore increase the amount of insulin delivered.
* Then use the **CALCULATOR** to enter the full carbs of the meal, but do not directly apply the values suggested by the bolus calculator. If a multiwave-like bolus is to be delivered, correct the insulin dosage down. Depending on the meal, the algorithm now has to deliver additional SMBs or higher temporary basal rates to counteract the increase in blood sugar. Here, the safety limitation of the basal rate (Max IE / h, Maximum basal IOB) should be very carefully experimented with and, if necessary, temporarily changed.

* If you are tempted to just use the extended or multiwave bolus directly on the pump, AAPS will penalize you with disabling the closed loop for the next six hours to ensure that no excess insulin dosage is calculated.

![Disabled loop after multiwave bolus](../images/combo/combo-tips-multiwave-bolus.png)

## Alarmes na administração de bólus

* If AAPS detects that an identical bolus has been successfully delivered at the same minute, bolus delivery will be prevented with identical numer of insulin units. If your really want to bolus the same insulin twice in short succession, just wait two more minutes and then deliver the bolus again. If the fist bolus has been interrupted or was not delivered for other reasons, you can immediately re-submit the bolus since AAPS 2.0.
* The alarm is a safety mechanism that reads the pump's bolus history before submitting a new bolus to correctly calculate insulin on board (IOB), even when a bolus is delivered directly from the pump. Há que evitar tratamentos repetidos.

![Double bolus](../images/combo/combo-tips-doppelbolus.png)

* Esse mecanismo também é responsável por uma segunda causa do erro: se durante o uso da calculadora do bólus outro bólus for administrado através da bomba e, assim, a história do bólus mudar, a base do cálculo do bólus está errada e o bólus é abortado. 

![Canceled bolus](../images/combo/combo-tips-history-changed.png)