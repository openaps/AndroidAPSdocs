# Bomba de Insulina Accu Chek Combo

**Este software é parte de uma solução DIY (faça você mesmo) e não é um produto, no entanto é necessário que VOCÊ leia, aprenda e compreenda o sistema, incluindo a forma de o usar. Não é algo que faça a gestão total da sua diabetes, mas permite melhorá-la, bem como a sua qualidade de vida, se estiver disposto a utilizar o seu tempo para isso. Não tenha demasiada pressa, permita-se ter tempo para aprender. Você é o ÚNICO responsável pela utilização e configuração deste sistema, e pelo que faz com ele.**

(hardware-requirements)=

## Requisitos de hardware

- Uma bomba de insulina Accu-Chek Combo da Roche (qualquer firmware serve, todos funcionam)
- Um dispositivo Smartpix 1 ou um cabo 360 (Realtyme), juntamente com o software de configuração 360 poderão ser necessários para configurar a bomba. (A Roche, em alguns países, envia gratuitamente os dispositivos Smartpix e o software de configuração aos seus clientes, mediante pedido. Tal não se verifica em Portugal, mas a maioria das unidades de diabetes possuem-no.)
- A compatible phone: An Android phone with a phone running LineageOS 14.1 (formerly CyanogenMod) or at least Android 8.1 (Oreo). As of AndroidAPS 3.0 Android 9 is mandatory. See [release notes](https://androidaps.readthedocs.io/en/latest/Installing-AndroidAPS/Releasenotes.html#android-version-and-aaps-version) for details.
- With LineageOS 14.1 it has to be a recent version from at least June 2017 since the change needed to pair the Combo pump was only introduced at that time. 
- Poderá encontrar uma lista de telefones compatíveis no documento [AAPS Telefones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit).
- Por favor tenha em atenção que isto não é uma lista completa e reflecte apenas a experiência pessoal dos utilizadores. Encorajamo-lo a também introduzir a sua experiência para que possa ajudar os outros (estes projectos baseiam-se na solidariedade da comunidade).
- Esteja consciente de que enquanto o Android 8.1 permite a comunicação com o Combo, ainda há problemas com a AAPS no dia 8.1.
- Para utilizadores avançados, com bons conhecimentos informáticos, é possível realizar o emparelhamento num telefone com root e transferi-lo para outro telefone com root para usar com ruffy / AAPS, que também deve estar com root. Isto permite usar telefones com Android inferior a 8.1 mas ainda não foi totalmente testado: https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Limitações

- Extended bolus and multiwave bolus are not supported (see [Extended Carbs](../Usage/Extended-Carbs.md) instead).
- Apenas é suportado um perfil de basal.
- Programar mais do que um perfil de basal na bomba, ou dar bólus prolongado ou multi onda a partir da bomba interfere com as DBT e irá forçar o LOOP a entrar em modo de suspensão durante horas dado que o LOOP não consegue funcionar em segurança nestas condições.
- It's currently not possible to set the time and date on the pump, so [daylight saving time changes](../Usage/Timezone-traveling.md#accu-chek-combo) have to be performed manually (you may disable the phone's automatic clock update in the evening and change it back in the morning together with the pump clock to avoid an alarm during the night).
- Actualmente apenas basais desde 0.05 até 10u/h são suportadas. Isto também se aplica quando modifica um perfil, i.e. ao aumentar para 200% a basal temporária, o valor da basal máxima não deve exceder 5U/h ou duplicada ultrapassará o limite de 10U/h. Do mesmo modo, ao reduzir para 50%, a taxa menor da basal deverá ser no mínimo 0.10 U/h.
- Se o loop solicitar o cancelamento de uma DBT em execução a Combo definirá em vez disso uma DBT de 90% ou 110% durante 15 minutos. Isto porque ao cancelar uma DBT a bomba emite um alerta que causa imensas vibrações.
- Ocasionalmente (a cada dois ou três dias) a AAPS pode falhar no cancelamento automático do alerta de DBT CANCELADA. Nesta situação o utilizador terá de anulá-lo: premindo o botão actualizar na AAPS para transferir o aviso para a AAPS ou confirmar o alerta na bomba.
- A estabilidade da conexão Bluetooth varia de acordo com os diferentes telefones, causando alertas de 'bomba não localizada', quando a ligação à bomba for perdida. 
- Se esse erro ocorrer, certifique-se de que o Bluetooth está activo, prima o botão actualizar no separador Combo para verificar se a causa foi temporária ou se continua sem conexão. Reiniciar o telemóvel normalmente resolve o problema. 
- Há uma outra questão onde o reiniciar do telefone não ajuda mas um botão na bomba pode ser pressionado ( o que faz um reset ao Bluetooth da bomba), antes da bomba aceitar de novo ligações ao telemóvel. 
- Neste momento muito pouco poderá ser feito para corrigir qualquer um destes problemas. Assim, se verificar estes erros com frequência a única opção nesta altura será arranjar outro telefone que trabalhe corretamente com a AndroidAPS e a Combo (ver acima).
- A emissão de um bólus a partir da bomba nem sempre será detectado a tempo (apenas quando a AAPS se conecta à bomba) e na pior situação poderá demorar até 20 minutos. 
- Os bólus na bomba são sempre verificados antes de uma BT (basal temporária) alta ou um bólus efectuado pela AAPS, mas devido aos limites de segurança a AAPS irá recusar a BT/Bólus, dado que o mesmo foi calculado devido a falsas informações. (-> Não dê bólus a partir da bomba! Veja capítulo [Utilização](#usage) abaixo)
- É de evitar programar uma BT na bomba dado que o Loop assume o controlo das BTs. Detectar uma nova DBT na bomba pode levar até 20 minutos e o efeito da DBT só será tido em conta a partir do momento em que é detectado, no pior dos casos poderão haver 20 minutos de DBT que não será reflectida na IA (insulina ativa). 

## Instalação

- Configurar a bomba usando o software de configuração 360. 
- Se não tiver o software, entre em contacto com a sua linha de apoio ao cliente Accu-Check. Eles normalmente enviam aos utilizadores registados um CD com o ''360º configuração de software'' e um aparelho de conexão por infravermelhos USB SmartPix (o Realtyme também funciona).
- **Configurações obrigatórias** (marcado como verde nas capturas de ecrã):
    
    - Configure / deixe a configuração do menu como "Standard", isto mostrará apenas os menus / ações suportados na bomba e esconderá aqueles que não são suportados (bólus estendido/multionda, múltiplas taxas basais), que fazem com que a funcionalidade de loop seja restrita quando usada porque não é possível executar o loop de maneira segura quando usado.
    - Verifique se o *Texto de informação rápida * está programado para ''Informação Rápida'' ( sem as aspas, encontrado em *Opções da bomba de insulina *).
    - Programar a DBT *Ajuste máximo* a 500%
    - Desactivar *aviso de fim de DBT*
    - Programar DBT *aumento de duração * para 15 min
    - Activar bluetooth

- **Configurações obrigatórias** (marcadas com azul nas capturas de ecrã)
    
    - Programar aviso de cartuxo vazio à sua escolha
    - Configurar o bólus máximo adequado à sua terapia para se proteger contra bugs do software
    - Da mesma forma, configure a duração máxima da DBT para sua segurança. Deixe pelo menos 3 horas, uma vez que a opção de desconectar a bomba por 3 horas fixa um 0% por 3 horas.
    - Active a opção de bloqueio de teclas na bomba para prevenir eventuais bólus não desejados a partir da bomba. Por exemplo, quando a bomba era usada para dar bólus rápidos.
    - Programe o tempo limite do ecrã e do menu para no mínimo 5.5 e 5, respectivamente. Isto permite que AAPS possa recuperar mais rapidamente de situações de erro e reduzir a quantidade de vibrações que poderão ocorrer durante esses erros

![Screenshot of user menu settings](../images/combo/combo-menu-settings.png)

![Screenshot of TBR settings](../images/combo/combo-tbr-settings.png)

![Screenshot of bolus settings](../images/combo/combo-bolus-settings.png)

![Screenshot of insulin cartridge settings](../images/combo/combo-insulin-settings.png)

- Instale AndroidAPS como descrito no [wiki AndroidAPS](https://androidaps.readthedocs.io/)
- Certifique se de que leu o wiki para entender como se programa o AndroiAPS.
- Seleccione o plugin MDI em AndroidAPS, não o plugin Combo nesta altura para evitar que o plugin Combo interfira com ruffy durante o processo de emparelhamento.
- Clone ruffy via git from [MilosKozak/ruffy](https://github.com/MilosKozak/ruffy). At the moment, the primary branch is the `combo` branch, in case of problems you might also try the 'pairing' branch (see below).
- Build and install ruffy and use it to pair the pump. Se não trabalhar após múltiplas tentativas, troque para o branch `emparelhamento`, emparelhe a bomba e regresse depois ao branch original. Se a bomba já estiver emparelhada e puder ser controlada via ruffy, instalar o branch `combo` é suficiente. Note that the pairing processing is somewhat fragile (but only has to be done once) and may need a few attempts; quickly acknowledge prompts and when starting over, remove the pump device from the Bluetooth settings beforehand. Another option to try is to go to the Bluetooth menu after initiating the pairing process (this keeps the phone's Bluetooth discoverable as long as the menu is displayed) and switch back to ruffy after confirming the pairing on the pump, when the pump displays the authorization code. If you're unsuccessful in pairing the pump (say after 10 attempts), try waiting up to 10s before confirming the pairing on the pump (when the name of the phone is displayed on the pump). If you have configured the menu timeout to be 5s above, you need to increase it again. Some users reported they needed to do this. Lastly, consider moving from one room to another in case of local radio interference. At least one user immediately overcame pairing problems by simply changing rooms.
- When AAPS is using ruffy, the ruffy app can't be used. The easiest way is to just reboot the phone after the pairing process and let AAPS start ruffy in the background.
- If the pump is completely new, you need to do one bolus on the pump, so the pump creates a first history entry.
- Before enabling the Combo plugin in AAPS make sure your profile is set up correctly and activated(!) and your basal profile is up to date as AAPS will sync the basal profile to the pump. Then activate the Combo plugin. Press the *Refresh* button on the Combo tab to initialize the pump.
- To verify your setup, with the pump **disconnected**, use AAPS to set a TBR of 500% for 15 min and issue a bolus. The pump should now have a TBR running and the bolus in the history. AAPS should also show the active TBR and delivered bolus.

(why-pairing-with-the-pump-does-not-work-with-the-app-ruffy)=

## Why pairing with the pump does not work with the app "ruffy"?

There are serveral possible reasons. Try the following steps:

1. Insira **pilha nova** na bomba. Para detalhes consulte a secção bateria. Certifique-se de que a bomba está muito perto do smartphone.

![Combo should be next to phone](../images/Combo_next_to_Phone.png)

2. Turn off or remove any other bluetooth devices so they will not be able to establish a connection to the phone while pairing is in progress. Any parallel bluetooth communication or prompt to establish connections might disturb the pairing process.

3. Delete already connected devices in the Bluetooth menu of the pump: **BLUETOOTH SETTINGS / CONNECTION / REMOVE** until **NO DEVICE** is shown.

4. Delete a pump already connected to the phone via Bluetooth: Under Settings / Bluetooth, remove the paired device "**SpiritCombo**"
5. Certifique se de que AAPS não está em background a correr o loop. Deaktivate Loop in AAPS.
6. Try using the '**pairing**' branch from the [MilosKozak/ruffy](https://github.com/MilosKozak/ruffy/tree/pairing) repository to establish the connection 
7. Now start ruffy on the phone. You may press Reset! and remove the old connection. Then hit **Connect!**.
8. In the Bluetooth menu of the pump, go to **ADD DEVICE / ADD CONNECTION**. Press *CONNECT!** 
    - The next three steps are timing-sensitive, so you might need to try different pauses/speed if pairing fails. Read the full sequence before trying it.

9. Now the Pump should show up the BT Name of phone to select for pairing. Here it is importand to wait at least 5s before you hit the select button on Pump. Otherwise the Pumpe will not send the Paring request to the Phone proberly.
    
    - If Combo Pump is set to 5s Screentime out, you may test it with 40s (original setting). From experiance the time between pump is showing up in phone until select phone is around 5-10s. In many other cases pairing just times out without successfully pair. Later you should set it back to 5s, to meet AAPS Combo settings and speed up connections.
    - If the pump does not show the phone as a pairing device at all, your phone's Bluetooth stack is probably not compatible with the pump. Make sure you are running a new **LineageOS ≥ 14.1** or **Android ≥ 8.1 (Oreo)**. If possible, try another smartphone. You can find a list of already successfully used smartphones under \[AAPS Phones\] (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). 

10. Sometimes the phone asks for a (typically 4 digit) bluetooth PIN number that is not related to the 10 digit PIN later shown on the pump. Usually, ruffy will set this PIN automatically, but due to timing issues, this does not always work. If a request for a Bluetooth pairing PIN appears on the phone before any code is shown on the pump, you need to enter **}gZ='GD?gj2r|B}>** as the PIN. This is easiest done if you copy this 16 character text into the clipboard before starting the pairing sequence and just paste it in the dialog at this step. See related [Github issue](https://github.com/MilosKozak/ruffy/issues/14) for details.

11. At next the pump should show up a 10 digit security code. And Ruffy shold show a screen to enter it. So enter the code in Ruffy and you should be ready to go.
12. If pairing was not successful and you got a timeout on the pump, you will need to restart the process from scratch.
13. If you have used the 'Pairing' branch to build the ruffy app, now install the version build from the 'combo' branch on top of it. Make sure that you have used the same keys when signing the two versions of the app to be able to keep all setting and data, as they also contain the connection properties.
14. Reboot the phone.
15. Now you can restart AAPS loop.

## Utilização

- Keep in mind that this is not a product, esp. in the beginning the user needs to monitor and understand the system, its limitations and how it can fail. It is strongly advised NOT to use this system when the person using it is not able to fully understand the system.
- Read the OpenAPS documentation https://openaps.org to understand the loop algorithm AndroidAPS is based upon.
- Read the online documentation to learn about and understand AndroidAPS https://androidaps.readthedocs.io/
- This integration uses the same functionality which the meter provides that comes with the Combo. The meter allows to mirror the pump screen and forwards button presses to the pump. The connection to the pump and this forwarding is what the ruffy app does. A `scripter` component reads the screen and automates entering boluses, TBRs etc and making sure inputs are processed correctly. AAPS then interacts with the scripter to apply loop commands and to administer boluses. This mode has some restrictions: it's comparatively slow (but well fast enough for what it is used for), and setting a TBR or giving a bolus causes the pump to vibrate.
- The integration of the Combo with AndroidAPS is designed with the assumption that all inputs are made via AndroidAPS. Boluses entered on the pump directly will be detected by AAPS, but it can take up to 20 min before AndroidAPS becomes aware of such a bolus. Reading boluses delivered directly on the pump is a safety feature and not meant to be regularly used (the loop requires knowledge of carbs consumed, which can't be entered on the pump, which is another reason why all inputs should be done in AndroidAPS). 
- Don't set or cancel a TBR on the pump. The loop assumes control of TBR and cannot work reliably otherwise, since it's not possible to determine the start time of a TBR that was set by the user on the pump.
- The pump's first basal rate profile is read on application start and is updated by AAPS. The basal rate should not be manually changed on the pump, but will be detected and corrected as a safety measure (don't rely on safety measures by default, this is meant to detect an unintended change on the pump).
- It's recommended to enable key lock on the pump to prevent bolusing from the pump, esp. when the pump was used before and using the "quick bolus" feature was a habit. Also, with keylock enabled, accidentally pressing a key will NOT interrupt active communication between AAPS and pump.
- When a BOLUS/TBR CANCELLED alert starts on the pump during bolusing or setting a TBR, this is caused by a disconnect between pump and phone, which happens from time to time. AAPS will try to reconnect and confirm the alert and then retry the last action (boluses are NOT retried for safety reasons). Therefore, such an alarm can be ignored as AAPS will confirm it automatically, usually within 30s (cancelling it is not problem, but will lead to the currently active action to have to wait till the pump's display turns off before it can reconnect to the pump). If the pump's alarm continues, automatic corfirmation failed, in which case the user needs to confirm the alarm manually.
- When a low cartridge or low battery alarm is raised during a bolus, they are confirmed and shown as a notification in AAPS. If they occur while no connection is open to the pump, going to the Combo tab and hitting the Refresh button will take over those alerts by confirming them and show a notification in AAPS.
- When AAPS fails to confirm a TBR CANCELLED alert, or one is raised for a different reason, hitting Refresh in the Combo tab establishes a connection, confirms the alert and shows a notification for it in AAPS. This can safely be done, since those alerts are benign - an appropriate TBR will be set again during the next loop iteration.
- For all other alerts raised by the pump: connecting to the pump will show the alert message in the Combo tab, e.g. "State: E4: Occlusion" as well as showing a notification on the main screen. An error will raise an urgent notification. AAPS never confirms serious errors on the pump, but let's the pump vibrate and ring to make sure the user is informed of a critical situation that needs action.
- After pairing, ruffy should not be used directly (AAPS will start in the background as needed), since using ruffy at AAPS at the same time is not supported.
- If AAPS crashes (or is stopped from the debugger) while AAPS and the pump were communicating (using ruffy), it might be necessary to force close ruffy. Restarting AAPS will start ruffy again. Restarting the phone is also an easy way to resolve this if you don't know how to force kill an app.
- Don't press any buttons on the pump while AAPS communicates with the pump (Bluetooth logo is shown on the pump).