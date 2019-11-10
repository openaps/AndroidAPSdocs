# Microinfusore Accu-Chek Insight

**Questo software è parte di un progetto che prevede una soluzione fai da te (DIY) di pancreas artificiale. Non è un prodotto e richiede che tu legga, impari e capisca come funziona il sistema. Non è pensato per essere sostitutivo alla gestione del diabete, ma è in grado di facilitarla permettendo di migliorare la qualità della vita nel caso in cui tu sia disposto ad impiegare il tempo necessario a capire come funziona. Non avere fretta, concediti tutto il tempo di cui hai bisogno per imparare. Tu sei l'unico responsabile di quello che farai.**

* * *

## ***ATTENZIONE:** Nel caso in cui tu stessi ancora utilizzando l'app **SightRemote**, ti chiediamo **passare alla più recente versione di AAPS** e di **disinstallare SightRemote**.*

## Requisiti hardware e software

* A Roche Accu-Chek Insight pump (any firmware, they all work)
    
    Note: AAPS will write data always in **first basal rate profile in the pump**.

* An Android phone (Basically every Android version would work, but AndroidAPS itself requires at least Android 5 (Lollipop).)

* L'app AndroidAPS installata sul tuo telefono

## Configurazione

* Il microinfusore Insight deve essere collegato ad un solo dispositivo per volta. Se precedentemente utilizzavi il telecomando di Insight, devi rimuoverlo dalla lista dei dispositivi associati al tuo microinfusore. Per farlo: Menu>Impostazioni>Comunicazioni>Eliminare Dispositivo
    
    ![Screenshot of Remove Meter Insight](../images/Insight_RimeMeter.png)

* Nella sezione [Configuratore](../Configuration/Config-Builder) dell'app AndroidAPS seleziona Accu-Chek Insight nel campo microinfusore
    
    ![Screenshot of Config Builder Insight](../images/Insight_ConfigBuilder.png)

* Tocca la il simbolo a forma di rotella per aprire le impostazioni di Insight.

* Nelle impostazioni, clicca su 'Accoppiamento Insight ' nella parte alta dello schermo. A questo punto dovresti vedere una lista dei dispositivi con bluethoot attivo nella vicinanze (in basso a sinistra).
* Prendere il microinfusore e andare su Menu>Impostazioni>Comunicazioni>Aggiungere Dispositivo. Sul microinfusore apparirà la seguente schermata (sotto a destra) che mostra il numero di serie del microinfusore.
    
    ![Screenshot of Insight Pairing 1](../images/Insight_Pairing1.png)

* Ora torna sul telefono, clicca sul numero di serie del microinfusore che si trova nella lista dei dispositivi Bluetooth. Clicca su accoppia per confermare.
    
    ![Screenshot of Insight Pairing 2](../images/Insight_Pairing2.png)

* A questo punto sia il microinfusore che il telefono mostreranno un codice. Controlla che il codice sia lo stesso su entrambi i dispositivi e conferma su entrambi.
    
    ![Screenshot of Insight Pairing 3](../images/Insight_Pairing3.png)

* Ottimo! Datti una pacca sulla spalla per aver accoppiato con successo il microinfusore ad AndroidAPS.
    
    ![Screenshot of Insight Pairing 4](../images/Insight_Pairing4.png)

* Per controllare che tutto vada bene, torna al campo Configuratore in AndroidAPS e tocca la rotella vicino alla scritta Insight per entrare nelle impostazioni di Insight, quindi tocca su Accoppiamento Insight e vedrai alcune informazioni riguardo al microinfusore:
    
    ![Screenshot of Insight Pairing Information](../images/Insight_Pairing3.png)

Nota: La connessione tra il microinfusore e il telefono non è continuativa. A connection will only be established if necessary (i.e. setting temporary basal rate, giving bolus, reading pump history...). Altrimenti la batteria del telefono e del microinfusore si esaurirebbero troppo velocemente.

## Impostazioni in AAPS

You **must not use ‘Always use basal absolute values’** with Insight pump. In AAPS go to Preferences > Nightscout-Client > Advanced Settings and make sure ‘Always use basal absolute values’ is disabled. It would lead to false TBR settings in Insight pump. As a consequence you will not be able to use Autotune but there is no alternative to disable this when using Insight pump.

![Screenshot of Insight Settings](../images/Insight_pairing_V2_5.png)

In the Insight settings in AndroidAPS you can enable the following options:

* "Log reservoir changes": This will automatically record an insulin cartridge change when you run the "fill cannula" program on the pump.
* "Log cambio catetere": Aggiunge una nota nel database di AndroidAPS ogni volta che dal microinfusore parte il comando "Riempimento Catetere".
* "Log site change": This adds a note to the AndroidAPS database when you run the "cannula filling" program on the pump. **Note: A site change also resets Autosens.**
* "Log battery changes": This records a battery change when you put a new battery in the pump.
* "Log operating mode changes": This inserts a note in the AndroidAPS database whenever you start, stop or pause the pump.
* "Log alerts": This records a note in the AndroidAPS database whenever the pump issues an alert (except reminders, bolus and TBR cancellation - those are not recorded).
* "Enable TBR emulation": The Insight pump can only issue temporary basal rates (TBRs) up to 250%. To get round this restriction, TBR emulation will instruct the pump to deliver an extended bolus for the extra insulin if you request a TBR of more than 250%.
    
    **Note: Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.**

* "Recovery duration": This defines how long AndroidAPS will wait before trying again after a failed connection attempt. You can choose from 0 to 20 seconds. If you experience connection problems, choose a longer wait time.   
      
    Example for min. recovery duration = 5 and max. recovery duration = 20   
      
    no connection -> wait **5** sec.   
    retry -> no connection -> wait **6** sec.   
    retry -> no connection -> wait **7** sec.   
    retry -> no connection -> wait **8** sec.   
    ...   
    retry -> no connection -> wait **20** sec.   
    retry -> no connection -> wait **20** sec.   
    ...

* "Disconnect delay": This defines how long (in seconds) AndroidAPS will wait to disconnect from the pump after an operation is finished. Default value is 5 seconds.

For periods when pump was stopped AAPS will log a temp. basal rate with 0%.

In AndroidAPS, the Accu-Chek Insight tab shows the current status of the pump and has two buttons:

* "Refresh"; Aggiorna lo stato del microinfusore
* "Abilita/Disabilita la notifica di TBR": Un microinfusore Insight standard emette un avviso ogni volta che termina una basale temporanea. Questo pulsante ti consente di attivare o disattivare questa notifica senza la necessità di recuperare il software di configurazione del microinfusore.
    
    ![Screenshot of Insight Status](../images/Insight_Status2.png)

## Settings in the pump

Configure alarms in the pump as follows:

* Menu > Impostazioni > Impostazioni Dispositivo > Impostazioni delle Modalità > Silenzioso >Segnale > Suono > Impostazioni dispositivo > Impostazioni della modalità > Silenzioso > Volume > 0 (tagli tutte le barre)
* Menu > Modalità > Modalità segnale > Silenzioso

This will silence all alarms from the pump, allowing AndroidAPS to decide if an alarm is relevant to you. If AndroidAPS does not acknowledge an alarm, its volume will increase (first beep, then vibration).

Insight pumps with newer firmware will vibrate briefly every time a bolus is delivered (for example, when AndroidAPS issues an SMB or TBR emulation delivers an extended bolus). Vibration cannot be disabled. Older pumps do not vibrate in these circumstances.

## Sostituzione della batteria

The Insight pump has a small internal battery to keep essential functions like the clock running while you are changing the removable battery. If changing the battery takes too long, this internal battery may run out of power, the clock will reset, and you will be asked to enter a new time and date after inserting a new battery. If this happens, all entries in AndroidAPS prior to the battery change will no longer be included in calculations as the correct time cannot be identified properly.

## Errori specifici di Insight

### Bolo Esteso

Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.

### Time out

Sometimes it might happen that the Insight pump does not answer during connection setup. In this case AAPS will display the following message: "Timeout during handshake - reset bluetooth".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

In this case turn off bluetooth on pump AND smartphone for about 10 seconds and then turn it back on.

## Fuso orario con Insight

For information on traveling across time zones see section [Timezone traveling with pumps](../Usage/Timezone-traveling#insight).