# Bomba de Insulina Accu Chek Combo

**Este software é parte de uma solução DIY (faça você mesmo) e não é um produto, no entanto é necessário que VOCÊ leia, aprenda e compreenda o sistema, incluindo a forma de o usar. Não é algo que faça a gestão total da sua diabetes, mas permite melhorá-la, bem como a sua qualidade de vida, se estiver disposto a utilizar o seu tempo para isso. Não tenha demasiada pressa, permita-se ter tempo para aprender. Você é o ÚNICO responsável pela utilização e configuração deste sistema, e pelo que faz com ele.**

## Requisitos de hardware

* Uma bomba de insulina Accu-Chek Combo da Roche (qualquer firmware serve, todos funcionam)
* Um dispositivo Smartpix 1 ou um cabo 360 (Realtyme), juntamente com o software de configuração 360 poderão ser necessários para configurar a bomba. (A Roche, em alguns países, envia gratuitamente os dispositivos Smartpix e o software de configuração aos seus clientes, mediante pedido. Tal não se verifica em Portugal, mas a maioria das unidades de diabetes possuem-no.)
* Um telefone compatível: telemóvel Andoid com o sistema LineageOS 14.1 ( anteriormente chamado CyanogenMod) ou Android 8.1 (Oreo). 
* O LineageOS 14.1 tem de ser uma versão recente, pelo menos de Junho de 2017, dado que a alteração necessária para emparelhar com a bomba Combo só foi introduzida nessa altura. 
* Poderá encontrar uma lista de telefones compatíveis no documento [AAPS Telefones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit).
* Por favor tenha em atenção que isto não é uma lista completa e reflecte apenas a experiência pessoal dos utilizadores. Encorajamo-lo a também introduzir a sua experiência para que possa ajudar os outros (estes projectos baseiam-se na solidariedade da comunidade).
* Esteja consciente de que enquanto o Android 8.1 permite a comunicação com o Combo, ainda há problemas com a AAPS no dia 8.1.
* Para utilizadores avançados, com bons conhecimentos informáticos, é possível realizar o emparelhamento num telefone com root e transferi-lo para outro telefone com root para usar com ruffy / AAPS, que também deve estar com root. Isto permite usar telefones com Android inferior a 8.1 mas ainda não foi totalmente testado: https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Limitações

* Bolus prolongado e bolus multi onda não são suportados ( ver [Extended Carbs](../Usage/Extended-Carbs.rst)).
* Apenas é suportado um perfil de basal.
* Programar mais do que um perfil de basal na bomba, ou dar bólus prolongado ou multi onda a partir da bomba interfere com as DBT e irá forçar o LOOP a entrar em modo de suspensão durante horas dado que o LOOP não consegue funcionar em segurança nestas condições.
* Actualmente não é possível programar tempo e hora na bomba, então [as alterações horárias](../Usage/Timezone-traveling#accu-chek-combo) têm de ser efectuadas manualmente (poderá desactivar as actualizações de horário automáticas no telefone de noite e voltar a activar de manhã e ao mesmo tempo alterar o relógio da bomba e assim evitar alarmes nessas duas noites do ano).
* Actualmente apenas basais desde 0.05 até 10u/h são suportadas. Isto também se aplica quando modifica um perfil, i.e. ao aumentar para 200% a basal temporária, o valor da basal máxima não deve exceder 5U/h ou duplicada ultrapassará o limite de 10U/h. Do mesmo modo, ao reduzir para 50%, a taxa menor da basal deverá ser no mínimo 0.10 U/h.
* Se o loop solicitar o cancelamento de uma DBT em execução a Combo definirá em vez disso uma DBT de 90% ou 110% durante 15 minutos. Isto porque ao cancelar uma DBT a bomba emite um alerta que causa imensas vibrações.
* Occasionally (every couple of days or so) AAPS might fail to automatically cancel a TBR CANCELLED alert, which the user then needs to deal with (by pressing the refresh button in AAPS to transfer the warning to AAPS or confirming the alert on the pump).
* Bluetooth connection stability varies with different phones, causing "pump unreachable" alerts, where no connection to the pump is established anymore. 
* If that error occurs, make sure Bluetooth is enabled, press the Refresh button in the Combo tab to see if this was caused by an intermitted issue and if still no connection is established, reboot the phone which should usually fix this. 
* There is another issue were a restart doesn't help but a button on the pump must be pressed (which resets the pump's Bluetooth), before the pump accepts connections from the phone again. 
* There is very little that can be done to remedy either of those issues at this point. So if you see those errors frequently your only option at this time is to get another phone that's known to work well with AndroidAPS and the Combo (see above).
* A emissão de um bólus a partir da bomba nem sempre será detectado a tempo (apenas quando a AAPS se conecta à bomba) e na pior situação poderá demorar até 20 minutos. 
* Os bólus na bomba são sempre verificados antes de uma BT (basal temporária) alta ou um bólus efectuado pela AAPS, mas devido aos limites de segurança a AAPS irá recusar a BT/Bólus, dado que o mesmo foi calculado devido a falsas informações. (-> Não dê bólus a partir da bomba! See chapter [Usage](#usage) below)
* É de evitar programar uma BT na bomba dado que o Loop assume o controlo das BTs. Detectar uma nova DBT na bomba pode levar até 20 minutos e o efeito da DBT só será tido em conta a partir do momento em que é detectado, no pior dos casos poderão haver 20 minutos de DBT que não será reflectida na IOB (insulina activa). 

## Instalação

* Configurar a bomba usando o software de configuração 360. 
* Se não tiver o software, entre em contacto com a sua linha de apoio ao cliente Accu-Check. Eles normalmente enviam aos utilizadores registados um CD com o ''360º configuração de software'' e um aparelho de conexão por infravermelhos USB SmartPix (o Realtyme também funciona).
* **Required settings** (marked green in screenshots):
    
    * Set/leave the menu configuration as "Standard", this will show only the supported menus/actions on the pump and hide those which are unsupported (extended/multiwave bolus, multiple basal rates), which cause the loop functionality to be restricted when used because it's not possible to run the loop in a safe manner when used.
    * Verifique se o *Texto de informação rápida * está programado para ''Informação Rápida'' ( sem as aspas, encontrado em *Opções da bomba de insulina *).
    * Programar a DBT *Ajuste máximo* a 500%
    * Desactivar *aviso de fim de DBT*
    * Programar DBT *aumento de duração * para 15 min
    * Activar bluetooth

* **Recommended settings** (marked blue in screenshots)
    
    * Programar aviso de cartuxo vazio à sua escolha
    * Configurar o bólus máximo adequado à sua terapia para se proteger contra bugs do software
    * Da mesma forma, configure a duração máxima da DBT para sua segurança. Allow at least 3 hours, since the option to disconnect the pump for 3 hours sets a 0% for 3 hours.
    * Active a opção de bloqueio de teclas na bomba para prevenir eventuais bólus não desejados a partir da bomba, esp. when the pump was used before and quick bolusing was a habit.
    * Programe o tempo limite do ecrã e do menu para no mínimo 5.5 e 5 respectivamente. This allows the AAPS to recover more quickly from error situations and reduces the amount of vibrations that can occur during such errors

![Captura de ecrã das configurações de utilizador](../images/combo/combo-menu-settings.png)

![Captura de ecrã das configurações da DBT](../images/combo/combo-tbr-settings.png)

![Captura de ecrã das configurações de bólus](../images/combo/combo-bolus-settings.png)

![Captura de ecrã das configurações do cartucho de insulina](../images/combo/combo-insulin-settings.png)

* Install AndroidAPS as described in the [AndroidAPS docs](../Installing-AndroidAPS/Building-APK.md).
* Make sure to read the docs to understand how to setup AndroidAPS.
* Select the **MDI plugin** in AndroidAPS, not the Combo plugin at this point to avoid the Combo plugin from interfering with ruffy during the pairing process.
* Clone [ruffy](https://github.com/MilosKozak/ruffy) from github via git.
* Instale a aplicação ruffy e use-a para emparelhar com a bomba.
    
    * Se não trabalhar após múltiplas tentativas, troque para o branch `emparelhamento`, emparelhe a bomba e regresse depois ao branch original.
    * Note that the pairing processing is somewhat fragile (but only has to be done once) and may need a few attempts; quickly acknowledge prompts and when starting over, remove the pump device from the Bluetooth settings beforehand. 
    * Another option to try is to go to the Bluetooth menu after initiating the pairing process (this keeps the phone's Bluetooth discoverable as long as the menu is displayed) and switch back to ruffy after confirming the pairing on the pump, when the pump displays the authorization code.
    * If you're unsuccessful in pairing the pump (say after 10 attempts), try waiting up to 10s before confirming the pairing on the pump (when the name of the phone is displayed on the pump). 
    * If you have configured the menu timeout to be 5s above, you need to increase it again. Some users reported they needed to do this. 
    * Lastly, consider moving from one room to another in case of local radio interference. At least one user immediately overcame pairing problems by simply changing rooms.

* When AAPS is using ruffy, the ruffy app can't be used. The easiest way is to just reboot the phone after the pairing process and let AAPS start ruffy in the background.

* If the pump is completely new, you need to **do one bolus on the pump**, so the pump creates a first history entry.
* Before enabling the Combo plugin in AAPS make sure your profile is set up correctly and activated(!) and your basal profile is up to date as AAPS will sync the basal profile to the pump.
* Then activate the [Combo plugin](../Configuration/Config-Builder#pump). 
* Press the *Refresh* button on the Combo tab to initialize the pump.
* To verify your setup, with the pump **disconnected**, use AAPS to set a TBR of 500% for 15 min and issue a bolus.
* The pump should now have a TBR running and the bolus in the history. AAPS should also show the active TBR and delivered bolus.

## Why does pairing with the pump not work with the app "ruffy"?

Há várias razões possiveis. Tente os seguintes passos:

1. Insira **pilha nova** na bomba. Para detalhes consulte a secção bateria. Certifique-se de que a bomba está muito perto do smartphone.

![Combo deverá estar próxima do telefone](../images/Combo_next_to_Phone.png)

2. Turn off or remove any other bluetooth devices so they will not be able to establish a connection to the phone while pairing is in progress. Any parallel bluetooth communication or prompt to establish connections might disturb the pairing process.
3. Delete already connected devices in the Bluetooth menu of the pump: **BLUETOOTH SETTINGS / CONNECTION / REMOVE** until **NO DEVICE** is shown.
4. Delete a pump already connected to the phone via Bluetooth: Under Settings / Bluetooth, remove the paired device "**SpiritCombo**"
5. Certifique se de que AAPS não está em background a correr o loop. Desactive Loop no AAPS.
6. Inicie agora ruffy no telefone. Pode premir Reset! e remover a ligação antiga. Prima Connect!.
7. In the Bluetooth menu of the pump, go to **ADD DEVICE / ADD CONNECTION**. Press *CONNECT!**
    
    * Step 6 and 7 have to be done in a short timing.

8. Now the Pump should show up the BT Name of phone to select for pairing. Here it is important to wait at least 5s before you hit the select button on Pump. Otherwise the Pump will not send the Pairing request to the Phone properly.

* If Combo Pump is set to 5s Screen timeout, you may test it with 40s (original setting). From experience the time between pump is showing up in phone until select phone is around 5-10s. In many other cases pairing just times out without successfully Pair. 
* Later you should set it back to 5s, to meet AAPS Combo settings.
* If the pump does not show the phone as a pairing device at all, your phone's Bluetooth stack is probably not compatible with the pump. Make sure you are running a new **LineageOS ≥ 14.1** or **Android ≥ 8.1 (Oreo)**. If possible, try another smartphone. You can find a list of already successfully used smartphones under \[AAPS Phones\] (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit). 

9. De seguida a bomba deverá indicar um código de segurança de 10 dígitos. E Ruffy um écran para introduzir esse código. So enter it in Ruffy and you should be ready to go.
10. Reinicie o telemóvel.
11. Poderá agora iniciar o loop AAPS.

## Utilização

* Keep in mind that this is not a product, esp. in the beginning the user needs to monitor and understand the system, its limitations and how it can fail. 
* It is strongly advised NOT to use this system when the person using it is not able to fully understand the system.
* Read the OpenAPS documentation https://openaps.org to understand the loop algorithm AndroidAPS is based upon.
* Read the [AAPS docs](../index.rst) to learn about and understand AndroidAPS.
* This integration uses the same functionality which the meter provides that comes with the Combo.
* The meter allows to mirror the pump screen and forwards button presses to the pump. 
* The connection to the pump and this forwarding is what the ruffy app does. 
* A 'scripter' components reads the screen and automates entering boluses, TBRs etc and making sure inputs are processed correctly.
* AAPS then interacts with the scripter to apply loop commands and to administer boluses.
* This mode has some restrictions: it's comparatively slow (but well fast enough for what it is used for) and setting a TBR or giving a bolus causes the pump to vibrate.
* The integration of the Combo with AndroidAPS is designed with the assumption that all inputs are made via AndroidAPS. Boluses entered on the pump directly will be detected by AAPS, but it can take up to 20 min before AndroidAPS becomes aware of such a bolus. 
* Reading boluses delivered directly on the pump is a safety feature and not meant to be regularly used (the loop requires knowledge of carbs consumed, which can't be entered on the pump, which is another reason why **all inputs should be done in AndroidAPS**). 
* Don't set or cancel a TBR on the pump. The loop assumes control of TBR and cannot work reliably otherwise, since it's not possible to determine the start time of a TBR that was set by the user on the pump.
* The pump's first basal rate profile is read on application start and is updated by AAPS.
* The basal rate should not be manually changed on the pump, but will be detected and corrected as a safety measure (don't rely on safety measures by default, this is meant to detect an unintended change on the pump).
* It's recommended to enable key lock on the pump to prevent bolusing from the pump, esp. when the pump was used before and using the "quick bolus" feature was a habit.
* Also, with keylock enabled, accidentally pressing a key will NOT interrupt active communication between AAPS and pump.
* When a BOLUS/TBR CANCELLED alert starts on the pump during bolusing or setting a TBR, this is caused by a disconnect between pump and phone, which happens from time to time. AAPS will try to reconnect and confirm the alert and then retry the last action (**boluses are NOT retried** for safety reasons). 
* Therefore, such an alarm can be ignored as AAPS will confirm it automatically, usually within 30s (cancelling it is not problem, but will lead to the currently active action to have to wait till the pump's display turns off before it can reconnect to the pump). 
* If the pump's alarm continues, automatic confirmation failed, in which case the user needs to confirm the alarm manually.
* When a low cartridge or low battery alarm is raised during a bolus, they are confirmed and shown as a notification in AAPS. 
* If they occur while no connection is open to the pump, going to the Combo tab and hitting the Refresh button will take over those alerts by confirming them and show a notification in AAPS.
* When AAPS fails to confirm a TBR CANCELLED alert, or one is raised for a different reason, hitting Refresh in the Combo tab establishes a connection, confirms the alert and shows a notification for it in AAPS. This can safely be done, since those alerts are benign - an appropriate TBR will be set again during the next loop iteration.
* For all other alerts raised by the pump: connecting to the pump will show the alert message in the Combo tab, e.g. "State: E4: Occlusion" as well as showing a notification on the main screen.
* An error will raise an urgent notification. 
* AAPS never confirms serious errors on the pump, but let's the pump vibrate and ring to make sure the user is informed of a critical situation that needs action.
* After pairing, ruffy should not be used directly (AAPS will start in the background as needed), since using ruffy at AAPS at the same time is not supported.
* If AAPS crashes (or is stopped from the debugger) while AAPS and the pump were communicating (using ruffy), it might be necessary to force close ruffy. Restarting AAPS will start ruffy again.
* Restarting the phone is also an easy way to resolve this if you don't know how to force kill an app.
* Don't press any buttons on the pump while AAPS communicates with the pump (Bluetooth logo is shown on the pump).