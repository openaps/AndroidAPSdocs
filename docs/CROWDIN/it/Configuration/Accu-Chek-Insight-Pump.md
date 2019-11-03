# Microinfusore Accu-Chek Insight

**Questo software è parte di un progetto che prevede una soluzione fai da te (DIY) di pancreas artificiale. Non è un prodotto e richiede che tu legga, impari e capisca come funziona il sistema. Non è pensato per essere sostitutivo alla gestione del diabete, ma è in grado di facilitarla permettendo di migliorare la qualità della vita nel caso in cui tu sia disposto ad impiegare il tempo necessario a capire come funziona. Non avere fretta, concediti tutto il tempo di cui hai bisogno per imparare. Tu sei l'unico responsabile di quello che farai.**

* * *

## ***ATTENZIONE:** Nel caso in cui tu stessi ancora utilizzando l'app **SightRemote**, ti chiediamo **passare alla più recente versione di AAPS** e di **disinstallare SightRemote**.*

## Requisiti hardware e software

* Un microinfusore Roche Accu-Chek Insight (qualsiasi versione va bene)
<br>   Nota: AAPS  utilizzerà sempre il  <b>primo profilo basale del microinfusore</b> per scrivere i dati
* Un telefono Android (Vanno bene tutte le versioni da Android 6 in poi)
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

Nota: La connessione tra il microinfusore e il telefono non è continuativa. La connessione sarà stabilita ogni volta che sarà necessario (i.e. impostare una basale temporanea, dare un bolo, leggere lo storico del micro...). Altrimenti la batteria del telefono e del microinfusore si esaurirebbero troppo velocemente.

## Impostazioni in AAPS

![Screenshot of Insight Settings](../images/Insight_pairing_V2_5.png)

Nelle impostazioni Insight in AndroidAPS è possibile abilitare le seguenti opzioni:

* "Log reservoir changes": This will automatically record an insulin cartridge change when you run the "fill cannula" program on the pump.
* "Log cambio catetere": Aggiunge una nota nel database di AndroidAPS ogni volta che dal microinfusore parte il comando "Riempimento Catetere".
* "Log site change": This adds a note to the AndroidAPS database when you run the "cannula filling" program on the pump. **Note: A cannula change also resets Autosens.**
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

I momenti in cui il microinfusore è in stop sono registrati in AAPS con una basale temporanea dello 0%.

In AndroidAPS, la finestra Accu-Chek Insight mostra lo stato attuale del microinfusore e ha due pulsanti:

* "Refresh"; Aggiorna lo stato del microinfusore
* "Abilita/Disabilita la notifica di TBR": Un microinfusore Insight standard emette un avviso ogni volta che termina una basale temporanea. Questo pulsante ti consente di attivare o disattivare questa notifica senza la necessità di recuperare il software di configurazione del microinfusore.
    
    ![Screenshot of Insight Status](../images/Insight_Status2.png)

## Settings in the pump

Configura allarmi nel microinfusore come segue:

* Menu > Impostazioni > Impostazioni Dispositivo > Impostazioni delle Modalità > Silenzioso >Segnale > Suono > Impostazioni dispositivo > Impostazioni della modalità > Silenzioso > Volume > 0 (tagli tutte le barre)
* Menu > Modalità > Modalità segnale > Silenzioso

Questo silienzierà tutti gli allarmi provenienti dal microinfusore, lasciando ad AndridAPS il compito di decidere se un allarme è rilevante o meno. Se AAPS non dovesse riconoscere un allarme, il volume aumenterà gradualmente (prima beep, poi anche vibrazione).

I microinfusori Insight di versione più recente emetteranno una breve vibrazione ogni volta che viene somministrato un bolo (per esempio, quando AAPS eroga un SMB o un bolo esteso come emulatore di TBR). Questa vibrazione non può essere disabilitata. I microinfusori più vecchi non vibrano in queste circostanze.

## Sostituzione della batteria

Il microinfusore Insight ha una piccola batteria interna per mantenere attive le funzioni essenziali (tipo segnare l'orario) anche mentre si sta cambiando la batteria rimovibile. Quando si impiega troppo tempo a cambiare la batteria, la piccola batteria interna potrebbe esaurirsi. Questo comporta un reset dell'orologio e perciò ti verrà chiesto di inserire nuovamente data e ora dopo aver inserito la nuova batteria. Nei casi in cui questo succede, tutti i parametri che erano stati inseriti in AAPS prima del cambio batteria non saranno utilizzati nei calcoli di AAPS perchè l'orario non può essere determinato in modo corretto.

## Errori specifici di Insight

### Bolo Esteso

Utilizza un bolo esteso per volta in quanto boli estesi multipli potrebbero causare errori.

### Time out

A volte potrebbe capitare che il microinfusore Insight non risponda durante processo di connessione. In questo caso AAPS mostrerà il seguente messaggio: "Timeout during handshake - reset bluetooth".

![Insight Reset Bluetooth](../images/Insight_RimeMeter.png)

In questi casi spegni il bluetooth sia sul telefono che sul microinfusore per circa 10 secondi e poi riattivali entrambi.

## Fuso orario con Insight

Per informazioni su come comportarsi quando si viaggia in paesi con fuso orario diverso guardare la sezione [Fuso orario e microinfusori](../Usage/Timezone-traveling#insight).