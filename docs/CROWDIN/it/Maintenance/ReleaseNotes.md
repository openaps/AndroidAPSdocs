
# Note di rilascio

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Segui le istruzioni nel [manuale di aggiornamento](UpdateToNewVersion.md) per aggiornare a una nuova versione. La sezione sulla risoluzione dei problemi tratta anche le difficoltà più comuni durante l'aggiornamento di **AAPS**, nella pagina del manuale sull'aggiornamento.

```{admonition} Upgrading from AAPS v3?
:class: tip
Vedi [Cosa è cambiato in AAPS v4](V4Changes.md) per le modifiche di comportamento più importanti: funzioni che sono state spostate, rinominate o rimosse.
```

Quando è disponibile un nuovo aggiornamento, riceverai una notifica come questa:

![Informazioni sull'aggiornamento](../images/AAPS_LoopDisable90days.png)

Se non aggiorni entro la data di scadenza, **AAPS** passerà al loop aperto.

Vedi [Fine del supporto](EndOfLife.md) per le date di fine delle versioni di AAPS.

**Non ignorare la notifica.** Le nuove versioni di **AAPS** contengono importanti correzioni per la sicurezza. Per questo ogni utente di **AAPS** deve aggiornare all'ultima versione il prima possibile. Questo è un tentativo di migliorare la sicurezza di ogni utente di **AAPS** e della comunità fai da te (DIY). Grazie per la comprensione.

(maintenance-android-version-aaps-version)=

## Versione di Android e versione di AAPS

Se il tuo smartphone usa una versione di Android precedente ad Android 12, non potrai usare AAPS v3.4 e successive, perché richiedono almeno Android 12.

Per permettere a chi ha un Android più vecchio di usare versioni precedenti di AAPS, sono state pubblicate nuove versioni che cambiano solo il controllo della versione. Non contengono altri miglioramenti.

Trova la tua versione di Android nella tabella qui sotto e usa la versione di **AAPS** corrispondente. Il codice si scarica da <https://github.com/nightscout/AndroidAPS> usando il branch indicato.

| La tua versione di Android | Versione di AAPS da usare | Branch da scaricare                                              |
| -------------------------- | ------------------------- | ---------------------------------------------------------------- |
| Android 12 e successivi    | Ultima versione           | [master](https://github.com/nightscout/AndroidAPS) (predefinito) |
| Android 11                 | **3.3.2.1**               | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1) |
| Android 9, 10              | **3.2.0.4**               | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4) |
| Android 8                  | **2.8.2.1**               | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1) |
| Android 7                  | **2.6.2**                 | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)     |

## Versione WearOS

- AAPS richiede WearOS 3.0, 3.2 o 3.5 (Android 11, livello API 30) o successivo. Gli orologi con WearOS 2 non sono supportati.

```{tip}
WearOS 5, livello API 34 (Android 14), ha dei [limiti](#BuildingAapsWearOs-WearOS5).
```

Le versioni con un titolo sono l'ultima release per ogni versione di Android (vedi la tabella sopra). Le altre release seguono in mezzo, con le loro note o con un link alle note su GitHub.

(latestrelease)=

(version400)=

## Versione 4.0.0

Data di rilascio: 31-10-2026

**Nuove funzioni**

- Nuova interfaccia utente: app del telefono ricostruita in Jetpack Compose @MilosKozak
- [Ricerca globale](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Migrazione a Kotlin Multiplatform, client per Windows, Mac, Linux desktop e iOS @MilosKozak
- [Scene](../DailyLifeWithAaps/Scenes.md): salva un gruppo di azioni ed eseguile insieme @MilosKozak
- [Controllo Master ↔ Client](../RemoteFeatures/ClientMasterControl.md): invia comandi da un telefono client al master @MilosKozak
  - [Ruoli dei client](#client-master-control-roles): Sola lettura, Pasti, Caregiver o Amministratore per ogni client @MilosKozak
  - [Modalità protetta](#client-master-control-hardened-mode): con il controllo dei client attivo, il master accetta modifiche solo dai client associati @MilosKozak
  - Associazione con un codice QR, che configura anche Nightscout sul client, o con un PIN; il segreto di associazione viene sostituito subito dopo l'associazione @MilosKozak
  - [Token Nightscout proprio](#client-master-control-own-token) per ogni client, solo con i diritti di cui il client ha bisogno @MilosKozak
- Supporto della [concentrazione dell'insulina](../AdvancedOptions/InsulinConcentration.md) (U200, U500) per micro, calcolatore e profili @Philoul @MilosKozak
- Gestione dell'insulina: catalogo delle insuline, soprannomi, selezione nel profilo e nel calcolatore @Philoul
- Plugin di calibrazione @MilosKozak
- [Smoothing](../CompatibleCgms/SmoothingBloodGlucoseData.md): Filtro Kalman (Unscented Kalman Filter, UKF) @piecycle
- Nuove [azioni di automazione](#automations-automation-action): **Cambia smoothing** @olorinmaia, e **Esegui scena**, **Abilita scena** o **Disabilita scena** @MilosKozak
- [Rotazione del Sito](#Aapsscreens-site-rotation): registra e alterna le posizioni di infusione @Philoul @MilosKozak
- [Autotune](../AdvancedOptions/Autotune.md) rivisto @Philoul
- Nuovi [widget](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Accessibilità: l'app del telefono funziona con un'utilità di lettura dello schermo - controlli con nome, stato letto ad alta voce, descrizioni dei grafici e titoli per scorrere velocemente @MilosKozak
- [Importazione delle impostazioni](../Maintenance/ExportImportSettings.md): può mantenere le impostazioni del micro @MilosKozak
- La notifica persistente usa gli aggiornamenti live di Android, con supporto per la Now bar di Samsung e il delta @premnirmal
- Grafico della glicemia: [tieni premuto](#aaps-screens-graph-press-and-hold) per vedere i valori di una lettura, su ogni grafico della panoramica @t1dude @olorinmaia
- Miglioramenti delle prestazioni @MilosKozak
- eCarbs automatici nel Calcolatore @MilosKozak

**Nuovi dispositivi**

- **CareLevo**: nuovo [driver per micro](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: supporto @MilosKozak
- **Instara**: nuova sorgente CGM @leohunt

**Miglioramenti dei driver dei micro**

- Schermate dei micro ricostruite per Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn ed Equil @MilosKozak
- **Omnipod DASH**: codici Ref come sul PDM e descrizioni dei guasti leggibili, compensazione della deriva sempre attiva, migliore indicazione del tipo di bolo @nl-ruud
- **Omnipod**: data di fine definitiva per Dash ed Eros @mcnelson
- **DanaR, RS**: emulatore del micro per i test @MilosKozak
- **Equil**: emulatore del micro per i test @MilosKozak
- Molte correzioni per i micro e il loop @MilosKozak e altri

**Wear OS**

- [App per l'orologio](../WearOS/WearOsSmartwatch.md) ricostruita in Compose, nuovi tile e complicazioni, installazione automatica della watchface (Watch Face Push) su Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface disponibile per WearOS 6.0 (GW7, GW8, GW9...) con una watchface WFF dedicata @Philoul @olorinmaia
- CustomWatchface ora può contenere 5 slot per complicazioni che puoi personalizzare (nuova funzione disponibile solo per gli orologi più vecchi) @Philoul
- Nuova [watchface WFF basata sulle complicazioni di AAPS](#wearos-complications-watchface-setup) @olorinmaia
- Correzioni nel risultato del Calcolatore e dell'Assistente Rapido @olorinmaia
- Nuova attività per il grafico della glicemia e per la Modalità esecuzione nel menu principale @olorinmaia
- Calcolatore: pagina [tipo di pasto](#WearOsSmartwatch-wizard-meal-type) che divide i carboidrati come il calcolatore del telefono, e [tempo carboidrati](#WearOsSmartwatch-wizard-carb-time) con il promemoria *È ora di mangiare* sull'orologio @olorinmaia
- [Allarmi del telefono sull'orologio](#WearOsSmartwatch-phone-alarms): l'orologio mostra l'allarme e offre Silenzia e Silenzia per 5 min @olorinmaia

**Build**

- Workflow CI per build da tag/branch, mappatura delle versioni del JDK @Angus-repo

**Contributori**

@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Elenco completo delle modifiche: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

---

(version3426)=

## Versione 3.4.2.6

- Equil: migliorata la stabilità @MilosKozak

---

(version3425)=

**Versione 3.4.2.5**

- Equil: corretta una race condition @MilosKozak

---

(version3424)=

**Versione 3.4.2.4**

- Correzioni per Equil @MilosKozak
- Correzione della sincronizzazione del profilo con NS @MilosKozak

---

(version3423)=

**Versione 3.4.2.3**

- Dash: risoluzione della deriva @nl-ruud
- NSClientV3: corretto il vuoto nei dati dopo la riconnessione @MilosKozak
- Automazione: corretta la deserializzazione @MilosKozak
- Equil: corretto il report della batteria @MilosKozak
- Pulizia del workflow @vanelsberg
- Equil: migliorato il recupero dagli errori @MilosKozak
- DanaRS: corretta la comunicazione con il micro domestico @MilosKozak
- Insight: corretta la sincronizzazione dei TBR @MilosKozak
- Dash: corretto un bug nell'attivazione @nl-ruud

---

(version3422)=

**Versione 3.4.2.2**

- Corretti problemi con Equil e Medtronic
- Migliorata la sicurezza di Medtrum

---

(version3421)=

**Versione 3.4.2.1**

- Equil: corretti l'associazione e la finestra di avanzamento @MilosKozak

---

(version3420)=

**Versione 3.4.2.0**

Data di rilascio: 02-04-2026

- Equil: corretta la resistenza per i diversi modelli @hhfcvmars
- Tidepool: corretta la sessione @MilosKozak
- Medtrum: corretto il percorso di attivazione evitando il doppio riempimento @MilosKozak
- COB: corretto il calcolo dei COB (copre un caso limite pericoloso) @MilosKozak

---

(version3410)=

**Versione 3.4.1.0**

Data di rilascio: 08-03-2026

**Core**

- Corretta la gestione dell'ora legale @MilosKozak
- Migliorato e unificato il riconoscimento del target normale (mgdl > 99, mmol > 5,5) @MilosKozak
- SMS: RESTART protetto da PIN @MilosKozak
- Manutenzione: avviso se è selezionata una directory sbagliata @MilosKozak

**Miglioramenti dei driver dei micro**

- **Omnipod DASH**: codice del driver BLE riorganizzato nel modulo omnipod/common @jwoglom
- **Omnipod DASH**: tentativo di correggere lo stato della connessione @MilosKozak
- **Omnipod**: controllo del profilo prima dell'attivazione del pod, per non sprecare pod (#4534) @brianV
- **Medtronic**: corretto lo stesso tipo di codifica mostrato nella finestra delle impostazioni @mifi100
- **Medtronic**: preparate classi comuni per i micro (preparazione per Tandem) @andy-rozman
- **RileyLink**: correzione della codifica (#4519) @mifi100
- **Equil**: compatibilità estesa con altri micro in base al prefisso del numero di serie (#4510) @hhfcvmars
- **Equil**: aggiunti i log @MilosKozak
- **Diaconn G8**: corretto un bug nella sincronizzazione dei log e aggiunto il supporto per il firmware 3.58+ @miyeongkim
- **Diaconn**: corretta la conversione dell'unità della durata del TBR @miyeongkim
- **Diaconn**: uso di commandQueue.loadEvents() per sincronizzare lo storico @miyeongkim
- Possibilità di erogare insulina quando il loop è sospeso ma il micro è disponibile @cschuijt

**Cloud / Backup**

- Aggiunto il backup su Google Drive @Angus-repo
- Notifica nell'interfaccia quando cambia lo stato di errore dell'archivio cloud @Angus-repo
- Possibilità di usare insieme l'archivio locale e quello cloud @Angus-repo

**Tidepool**

- Migliorata la migrazione a Tidepool OAuth2 @MilosKozak
- Corretto lo stato BLOCKED di Tidepool senza fine, corretto il rifiuto degli SSID vuoti @michaeln-synapse

**NSClient**

- NSCv3: migliorata la riconnessione @MilosKozak

**Wear OS**

- Mostra il nuovo IOB nel risultato del Calcolatore se lo IOB è usato nei calcoli @olorinmaia
- Corretto BolusProgress sull'orologio con la quantità totale @Philoul

**Interfaccia**

- Migliorata l'icona ic_none per la Rotazione del Sito @Philoul
- Corretta l'impostazione del micro nella Rotazione del Sito, che non veniva usata @samfundev

**Contributori**

@MilosKozak @Philoul @olorinmaia @jwoglom @mifi100 @andy-rozman @Angus-repo @brianV @cschuijt @hhfcvmars @miyeongkim @samfundev @michaeln-synapse

---

(version3400)=

**Versione 3.4.0.0**

Data di rilascio: 31-12-2025

**Prima dell'aggiornamento:**

* Questa versione richiede Google Android 12.0 o superiore. Controlla la versione del tuo telefono prima di provare ad aggiornare.
* Aggiorna all'ultima versione di Android Studio o, meglio, usa la build dal browser.

**Nuove funzioni**

* Modalità esecuzione @MilosKozak
  * Mostra la [cronologia dello stato del loop](#AapsScreens-running-mode) nelle schede dei trattamenti
  * Mostra e permette di cambiare lo [stato del loop da AAPSClient](#RemoteControl_aapsclient).<br>NB: serve l'impostazione [NSClient > Sincronizzazione > Ricevi la modalità esecuzione da NS](#Preferences-nsclient-synchronization)
* [Nuovi CGM](../Getting-Started/CompatiblesCgms.md): Glunovo, Intelligo, Sinocare
* Supporto per la [Rotazione del Sito](#Aapsscreens-site-rotation) @Philoul
* Nuova [azione di automazione](#automations-automation-action): abilita o disabilita gli SMB @MilosKozak
* Il CGM Syai è una [sorgente affidabile](#GettingStarted-TrustedBGSource) e supporta il filtraggio avanzato @MilosKozak

**Miglioramenti per Wear OS**

* consumo della batteria molto ridotto @MilosKozak
* miglioramenti e correzioni dell'interfaccia @olorinmaia
* codice riscritto quasi completamente per adattarlo al livello attuale delle librerie (prima WearOS 2) @MilosKozak
* 2 nuove complicazioni per i dati estesi @Philoul
* Migrazione al moderno complication provider con DataStore @MilosKozak

**Correzioni delle perdite di memoria**

* Corrette perdite di memoria nel codice @MilosKozak
* Aggiunta la segnalazione delle perdite di memoria di LeakCanary in Firebase Crashlytics @MilosKozak

**Miglioramenti dei driver dei micro**

* **DanaI**: corretti problemi di disconnessione @MilosKozak
* **RileyLink**: comunicazione più veloce riducendo i ritardi @mifi100
* **Medtrum**: aggiunta la visualizzazione dell'ora di attivazione e dell'età della patch @vanelsberg, correzione delle maiuscole nella password @MilosKozak
* **Combo**: corrette race condition nei test @MilosKozak @dv1
* **Equil**: connettività ottimizzata, consumo della batteria ridotto @MilosKozak

**Sincronizzazione con Nightscout**

* Migliorata la deduplicazione in caso di errore di NS @MilosKozak

**Miglioramenti di interfaccia e usabilità (UI/UX)**

* vari miglioramenti @MilosKozak @Philoul @olorinmaia

**Automation**

* Nuova azione di controllo SMB: abilita/disabilita SMB tramite automazione @MilosKozak

**Test**

* Aggiunti unit test completi per i micro Equil, Eopatch, Dana e Medtronic @MilosKozak
* Migliorate la stabilità e la copertura dei test in più moduli @MilosKozak

**Tidepool**

* Tidepool OAUTH2 (supporto per la nuova autenticazione di Tidepool) @MilosKozak

---

(version3321)=

## Versione 3.3.2.1

Data di rilascio: 13-08-2025

- Corretta la connessione Bluetooth di Omnipod su Android 16
- Processo CI (Build dal browser)
- Corretta la conversione mmol-mgdl
- Corretta la scelta sbagliata dell'ora nelle finestre di dialogo in alcuni fusi orari
- Corretta la lettura delle chiavi in modalità semplice
- Corrette le previsioni mancanti sull'orologio
- Configurazione migliorata
- Sincronizzazione completa di NSCv3 migliorata

---

(version3300)=

**Versione 3.3.2.0**

Data di rilascio: 27-03-2025

**Come aggiornare**

* Per fare la build di questa versione serve la [versione di Android Studio chiamata "Meerkat"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) o superiore. Se hai già fatto la build di una versione 3.3.x, devi aggiornare di nuovo Android Studio.

(version-enforcement)=

**Da questa versione, le notifiche e l'obbligo di aggiornamento sono stati semplificati e resi meno rigidi, e funzionano così:**

*  Nessuna scadenza quando il dispositivo è offline (se non c'è connessione a internet). Questo significa che non ci sono più i periodi di tolleranza di 60 e 90 giorni.
*  Dopo la scadenza viene imposta la modalità LGS
*  Riceverai avvisi/notifiche meno spesso:
   - 28+ giorni rimanenti: ogni 7 giorni
   - 27-14 giorni rimanenti: ogni 3 giorni
   - poi una volta al giorno
   - La notifica viene creata dopo mezzogiorno, per non disturbarti di notte
* Ci sono solo 2 tipi di notifica
   - Nuova versione disponibile (non ha effetto su AAPS)
   - L'applicazione scadrà in una data futura (ancora nessun effetto su AAPS) / è scaduta (AAPS passerà alla modalità LGS)

**Novità**

* Comando SMS RESTART @MilosKozak
* Parametri del cambio profilo dall'orologio @olorinmaia
* Watchface AAPS V2 in modalità scura @olorinmaia
* Miglioramenti dello scambio dati con G7 @olorinmaia
* Configurazione dei widget @MilosKozak
* Miglioramenti all'interfaccia dei RadioButton @olorinmaia
* Automazione: scelta della posizione dalla mappa @MilosKozak
* Versione visibile nelle schermate principali @MilosKozak
* È obbligatoria la compilazione con il sistema git esistente (niente download zip)
* Versione mostrata nella schermata principale @MilosKozak
* Miglioramenti del caricamento su Tidepool @ConstantinMatheis

**Correzioni di bug**

* Correzione dell'unbonding di Dash @Andreas
* Correzioni per Garmin @robertbuessow @suside
* Corretta la visualizzazione dello IOB nelle finestre di dialogo @olorinmaia
* Obiettivi: migliorati testi e controlli @MilosKozak
* Corretta la visualizzazione dei TBR emulati @MilosKozak
* Corretto un modo per aggirare la sicurezza @tdrkDev

---

**Versione 3.3.1.3**

Data di rilascio: 21-01-2025

**Correzioni di bug**

* Dash: il bonding è facoltativo (predefinito: disattivato) @MilosKozak
* Equil: corretto il bolo da 10+ U, miglioramenti degli allarmi @EquilHack
* Garmin: miglioramenti dell'orologio @swissalpine
* Miglioramenti dell'orologio @olorinmaia
* Controllo dello stato del loop dall'orologio @tdrkDev
* Miglioramenti della stabilità

*  **Potrebbe essere necessaria una nuova [configurazione dell'Authenticator](#sms-commands-authenticator-setup).**

---

**Versione 3.3.1.2**

Data di rilascio: 15-01-2025

**Come aggiornare**

* Per fare la build di questa versione serve la [versione di Android Studio chiamata "Ladybug Feature Drop"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) o superiore. **Non è la stessa cosa della semplice "Ladybug".** Se hai già fatto la build di una versione 3.3.x, devi aggiornare di nuovo Android Studio.

**Correzioni di bug**

* Dash: uso del bonding su Android 15+
* Ripristinato il pulsante Dexcom nella Panoramica
* Equil: possibilità di rimuovere un micro che non funziona
* Avviso quando il Fattore di regolazione di DynISF è zero
* NSCv3: risolta la comunicazione websocket su telefoni con un orario leggermente diverso
* Comandi SMS: corretta la OneTimePassword. **Potrebbe essere necessaria una nuova [configurazione dell'Authenticator](#sms-commands-authenticator-setup).**
* Corretto un problema per cui alcune preferenze non si potevano più modificare.
* Corretto il reset della password master con il micro virtuale.
* Corretta l'importazione di file di backup delle impostazioni grandi.

---

**Versione 3.3.1.0**

Data di rilascio: 06-01-2025

**Modifiche all'interfaccia**

* [Aggiunti colori per distinguere AAPSClient da AAPSClient2](#RemoteControl_aapsclient) @MilosKozak
* Layout e icone delle azioni utente migliorati

**Altre funzioni**

* Nuovo trigger di automazione: [numero di passi](#screen-heart-rate-steps) @Roman Rihter
* Possibilità di ricevere tutto con la sincronizzazione completa di NSCv3 (compresi dati prima non sincronizzati, come i TBR) @MilosKozak
* NSClient v3: funzionamento degli Avvisi (_ad es._ da AAPSClient ad AAPS) @MilosKozak

**Modifiche tecniche e correzioni di bug**

* Corretto un crash di Insight @philoul
* Corretta la creazione di troppe voci deviceStatus in Nightscout @MilosKozak
* Corretto l'assorbimento dei carboidrati @MilosKozak
* Corretto il colore di RadioButton e CheckBox @MilosKozak
* Corretto un bug nella migrazione della percentuale DynISF @MilosKozak
* Risolta una notifica DynISF fuori posto @MilosKozak
* Corretto un bug nelle watchface @philoul

---

**Versione 3.3.0.0**

Data di rilascio: 29-12-2024

**Funzioni principali**

* La funzione **[ISF Dinamico](../DailyLifeWithAaps/DynamicISF.md)** non è più un plugin separato, ma ora è un'opzione del plugin [OpenAPS SMB](#Config-Builder-aps), con alcune modifiche nel suo comportamento:
  * **Cambio profilo** e **Percentuale profilo** ora vengono considerati dall'**ISF Dinamico** per la forza della sensibilità dinamica
  * Viene calcolato l'**ISF** medio delle ultime 24h e questo valore viene usato per il calcolatore di bolo e per il calcolo dei **COB**. Il valore dell'**ISF del profilo** non viene usato per niente (tranne come riserva quando i dati storici non sono disponibili)
  * La pagina della documentazione su DynamicISF è stata riscritta. Leggi la sezione importante [Cose da considerare quando si attiva l'ISF Dinamico](#dyn-isf-things-to-consider-when-activating-dynamicisf).
* [Abilita “SMB sempre” e “SMB dopo i CHO”](#Open-APS-features-enable-smb-always) per chi usa FreeStyle Libre 2 e Libre 3
  * Nota: richiede l'ultima versione di xDrip+ o Juggluco.
* Nuovi trigger di **Automazione**
* Esportazioni non presidiate delle impostazioni

**Come aggiornare**

* Prima dell'aggiornamento:
  * **<span style="color:red">Questa versione richiede Google Android 11.0 o superiore</span>**. Controlla la versione del tuo telefono prima di provare ad aggiornare.
  * Se usi il “vecchio” driver Combo con il dispositivo ruffy, passa al [driver Combo nativo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) prima dell'aggiornamento
  * Durante l'aggiornamento perderai i tuoi [grafici aggiuntivi](#AapsScreens-section-g-additional-graphs) nella schermata principale: se serve, prendi nota a mano della tua configurazione attuale, così potrai ricrearli dopo l'aggiornamento.
  * I [problemi di connessione Bluetooth che alcune persone hanno con Android 15](../Getting-Started/Phones.md) **NON** sono risolti da questa versione (è un problema di Android, non di **AAPS**). Una correzione è disponibile nella 3.3.1.2.
  * Il pulsante BYODA nella schermata principale non è più disponibile a causa di limiti di Android. Questo è corretto nella 3.3.1.2.
* Istruzioni per l'aggiornamento: segui la guida [Aggiornare a una nuova versione](../Maintenance/UpdateToNewVersion.md).
  * Per fare la build di questa versione serve la [versione di Android Studio chiamata "Ladybug"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) o superiore. Se hai già installata una versione più vecchia di Android Studio, potresti dover <span style="color:red">impostare la versione della JVM a 21</span>. Vedi [Risoluzione dei problemi di Android Studio > Incompatible Gradle JVM](#incompatible-gradle-jvm).
  * Suggerimento - se non vuoi perdere la tua cronologia di **AAPS**, fai SEMPRE un AGGIORNAMENTO e NON una DISINSTALLAZIONE/INSTALLAZIONE. Per precauzione, fai un backup delle tue impostazioni attuali di **AAPS** e del vecchio APK, così puoi tornare a una versione precedente se qualcosa va storto.
* Dopo l'aggiornamento:
  * Imposta la nuova [impostazione “directory AAPS”](#preferences-maintenance-logdirectory) nella scheda Manutenzione.

**Modifiche in dettaglio**

**CGM e micro**

* [Abilita “SMB sempre” e “SMB dopo i CHO”](#Open-APS-features-enable-smb-always) per chi usa FreeStyle Libre 2 e Libre 3 @MilosKozak
* Miglioramenti del [driver Medtrum](../CompatiblePumps/MedtrumNano.md) @jbr77rr
  * Miglioramenti della comunicazione, compresa una nuova impostazione per aggirare problemi su alcuni smartphone
  * Mostra il livello del serbatoio all'inizio dell'attivazione
  * Corretto un bug per cui l'attivazione tornava all'inizio e l'utente non poteva completarla
  * Riscontro sullo stato della sincronizzazione e altri chiarimenti
* Nuovo micro supportato: [Equil 5.3](../CompatiblePumps/Equil5.3.md) @EquilHack
* Nuovi CGM supportati: [Ottai](../CompatibleCgms/OttaiM8.md) @ottai-developer e [Syai Tag](../CompatibleCgms/SyaiTagX1.md) @syai-dev
* Driver Insight riscritto in kotlin @Philoul
* Rimosso il vecchio driver Combo che dipendeva da ruffy

**Modifiche all'interfaccia**

* [Modalità semplice](#preferences-simple-mode) attiva di default su una nuova installazione @MilosKozak
* Nuove opzioni dell'[Assistente Rapido](#Preferences-quick-wizard) @radicalb
  * L'Assistente Rapido ora usa la stessa logica del calcolatore per calcolare e mostrare il bolo. Ora puoi usare il campo “Tempo Carbo” nell'Assistente Rapido per fare un pre-bolo.
* Nuovo [menu della scala del grafico](#aaps-screens-main-graph); miglioramenti all'interfaccia del [menu dei grafici aggiuntivi](#AapsScreens-activate-optional-information) @Philoul
* [Miglioramento del layout della Configurazione](../SettingUpAaps/ConfigBuilder.md) @MilosKozak
  * Ora le sezioni sono chiuse di default. Usa la freccia per aprirle.
* Sensibilità variabile visibile in AAPSClient
* Miglioramenti all'interfaccia del Calcolatore @kenzo44
* Corretta la visualizzazione del testo nelle schede del micro con il tema chiaro @jbr77rr

**Altre funzioni**

* [Esportazioni non presidiate delle impostazioni](#ExportImportSettings-Automating-Settings-Export) @vanelsberg
* Nuovo [trigger di automazione](#automations-automation-triggers) @vanelsberg
  * Attivazione del pod (solo micro patch)
* Nuovi [trigger di automazione](#automations-automation-triggers) @jbr77rr
  * Età della cannula, età dell'insulina, età della batteria, età del sensore, livello del serbatoio, livello della batteria del micro
* Possibilità di inserire carboidrati negativi @MilosKozak
* Nuovo parametro [“directory AAPS”](#preferences-maintenance-settings) per scegliere una directory di memorizzazione diversa da quella predefinita.
* Possibilità di [registrare l'insulina quando il micro è sospeso](#aaps-screens-buttons-insulin) @jbr77rr
* [Obiettivo 2](#objectives-objective2) aggiornato @MilosKozak
  * Controllo che la password master sia impostata e conosciuta
* Carboidrati casuali in modalità test @MilosKozak
* Corretto un bug nel calcolo del TDD @MilosKozak
* Comandi SMS: possibilità di [**non** inviare SMS per i cambi profilo](#sms-commands-too-many-messages) che arrivano da NS @MilosKozak

**Smartwatch**

* miglioramenti dell'orologio e delle watchface @Philoul @MilosKozak @olorinmaia
* Tile dell'orologio dalle azioni di automazione @Philoul
* Watchface combinate da AAPS, AAPSClient e AAPSClient2 per monitorare più pazienti @Philoul @MilosKozak
* EXTRA: show\_user\_actions\_on\_watch\_only @MilosKozak

**Modifiche tecniche**

* [nuova posizione dei file di log](#Accessing-logfiles-accessing-logfiles)
* nuova struttura interna dei moduli @MilosKozak
* livello di persistenza separato dal codice principale @MilosKozak
* file di build riscritti in kts @MilosKozak
* algoritmi riscritti in kotlin per prestazioni migliori @MilosKozak
* moltissimi nuovi unit test @MilosKozak e altri
* più codice convertito in kotlin @MilosKozak
* nuova gestione delle preferenze, xml \-\> kotlin @MilosKozak
* nuova configurazione CI, CI eseguita sui propri server @MilosKozak
* librerie aggiornate all'ultima versione, toml @MilosKozak
* migrazione a kotlin 2.0, java 21 @MilosKozak

---

(version3204)=

## [Versione 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)

Data di rilascio: 27-02-2024

Questa versione è l'ultima che supporta Android 10. Se non puoi passare ad Android 11, [aggiorna AAPS alla 3.2.0.4](#update-aaps-3204).

**Modifiche**

- Supporto di xDrip G7
- Correzioni per Medtrum
- Correzione dell'icona Automazione
- Correzione del superamento dell'obiettivo 1

---

(version3200)=

**Versione 3.2.0.0 dedicata a @Philoul**

Data di rilascio: 23-10-2023

**Note importanti**

- È necessario NS 15
- Quando usi i websocket nel plugin NS v3, i trattamenti inseriti dall'interfaccia di NS (pulsante più) e da altre applicazioni che usano l'API v1 non vengono inviati ad AAPS. Questo sarà corretto in una versione futura di NS. Usa sempre lo stesso client (v1 o v3) in AAPS e in AAPSClient, finché NS non passa completamente a v3 al suo interno. Lo stesso vale per AAPS e per AAPSClient stesso.
- I websocket nel plugin v3 funzionano in modo simile al plugin v1. Senza websocket attivi, AAPS pianifica download regolari da NS: questo dovrebbe ridurre il consumo di energia, perché NS non è sempre connesso. D'altra parte, questo significa ritardi nello scambio dei dati. Leggi [qui](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS) le note importanti del team di sviluppo prima di usarla!
- Se usi xDrip come sorgente CGM, dopo l'aggiornamento devi selezionarlo di nuovo a causa di modifiche interne
- Tidepool può essere usato al posto di NS per superare il primo obiettivo
- Se invii dati a xDrip+, devi configurare il plugin di sincronizzazione xDrip. Per ricevere le glicemie da AAPS in xDrip, devi selezionare “xDrip+ Sync Follower” come sorgente
- Se vuoi passare al driver ComboV2, devi disinstallare Ruffy e associare di nuovo il micro ad AAPS
- Per usare il plugin DynISF devi avviare l'Obiettivo 11 (tutti i precedenti devono essere completati per poter avviare l'11)

**Modifiche**

- Driver per micro EOPatch2 / GlucomenDay @jungsomyeonggithub @MilosKozak
- Driver per micro ComboV2 (Ruffy non serve più) @dv1
- Driver Medtrum Nano @jbr7rr
- Supporto per DanaI coreano @MilosKozak
- Supporto per il CGM Glunovo @christinadamianou
- Supporto per G7 @MilosKozak @rICTx-T1D @khskekec
- Plugin NSClient v3 @MilosKozak
- Supporto per Tidepool @MilosKozak
- Plugin Smoothing @MilosKozak, @justmara, Smoothing esponenziale @nichi (Tsunami), Smoothing medio @jbr7rr
- Plugin DynamicISF @Chris Wilson, @tim2000s
- Watchface Garmin e supporto per la frequenza cardiaca (HeartRate) @buessow
- Nuovo logo @thiagomsoares
- Nuova watchface @Philoul
- corretti moltissimi problemi della versione 3.1
- possibilità di aggiungere note in più punti @Sergey Zorchenko
- Correzioni dell'interfaccia @MilosKozak @osodebailar @Andries-Smit @yodax @Philoul @dv1 @paravoid
- nuovi comandi SMS LOOP LGS/CLOSED @pzadroga
- traduzioni per l'orologio @Andries-Smit
- la comunicazione con xdrip è stata spostata in un modulo separato @MilosKozak
- modifiche interne: versioni delle librerie aggiornate, migrazione a rx3, nuova struttura dei moduli @MilosKozak
- correzioni del driver Diaconn @miyeongkim
- più opzioni di manutenzione del database @MilosKozak
- AAPSClient mostra se il telefono principale è collegato alla corrente @MilosKozak
- Modifica nel Calcolatore. Se il CGM non è disponibile, la percentuale viene ignorata (cioè viene usato il 100%)
- migrazione al sistema di build kts @MilosKozak
- integrazione CI migliorata @MilosKozak @buessow
- pulizia dei test @ryanhaining @MilosKozak
- oltre 110.000 nuove righe di codice, 240.000 righe modificate, 6884 file modificati

(Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS)= **Note importanti sull'uso dell'API v3 o v1 per Nightscout con AAPS**

v1 è il vecchio protocollo usato per scambiare dati tra il sito web di NS e il server NS. Ha molti limiti
- v1 invia solo 2 giorni di dati
- v1 invia tutti i dati dei 2 giorni a ogni nuova connessione
- usare i websocket è obbligatorio = connessione permanente, più consumo di batteria
- in caso di disconnessioni frequenti, la connessione a NS viene messa in pausa per 15 minuti per evitare un alto consumo di dati

v3 è il nuovo protocollo. Più sicuro ed efficiente
- usando i token puoi definire meglio i diritti di accesso
- il protocollo è più efficiente su entrambi i lati (AAPS e NS)
- Può leggere fino a 3 mesi di dati da NS
- puoi scegliere se usare o no i websocket su ogni dispositivo (usarli significa aggiornamenti più veloci, non usarli significa meno consumo di energia, ma aggiornamenti più lenti, cioè di minuti)
- NSClient non viene messo in pausa in caso di disconnessione

LIMITI
- Con AAPS 3.2 bisogna usare NS 15
- v3 non vede gli aggiornamenti fatti con il protocollo v1 (probabilmente sarà risolto in una versione futura di NS)
- nella direzione opposta, a causa del vecchio metodo inefficiente di tracciare le modifiche, v1 vede le modifiche fatte da v3
- ricorda che per ora NS al suo interno usa ancora v1, quindi non è possibile inserire dati dall'interfaccia web di NS se usi v3. Devi usare AAPSClient o gli SMS se vuoi inserire dati da remoto

IMPOSTAZIONE CONSIGLIATA
- per tutti questi motivi dovresti scegliere un solo metodo e usarlo su tutti i dispositivi (ricorda che, nel momento in cui scriviamo, tutti gli altri uploader usano v1). Se decidi di passare a v3, seleziona v3 in AAPS e in tutti gli AAPSClient
- v3 è preferibile perché è più efficiente
- usare o no i websocket con v3 dipende dalle tue preferenze
- è VIVAMENTE consigliato lasciare che AAPS raccolga tutti i dati e poi li carichi su NS come unico uploader. Tutti gli altri dispositivi/applicazioni dovrebbero solo leggere da NS. Così eviti conflitti ed errori di sincronizzazione. Questo vale anche per l'invio dei dati glicemici a NS con il connettore Dexcom Share, ecc.

---

(version3100)=

**Versione 3.1.0**

Data di rilascio: 19-07-2022

[Note di rilascio](https://github.com/nightscout/AndroidAPS/releases/tag/3.1.0)

---

**Versione 3.0.0**

Data di rilascio: 31-01-2022

[Note di rilascio](https://github.com/nightscout/AndroidAPS/releases/tag/3.0.0)

---

(version2821)=

## Versione 2.8.2.1

Data di rilascio: 05-10-2021

Questa versione è l'ultima che supporta Android 8. [Note di rilascio](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2.1)

---

**Versione 2.8.2**

Data di rilascio: 23-01-2021

[Note di rilascio](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

---

(version-2811)= (important-hints-2-8-1-1)=

**Versione 2.8.1.1**

Data di rilascio: 12-01-2021

[Note di rilascio](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.1.1)

---

(Releasenotes-version-2-8-0)=

**Versione 2.8.0**

Data di rilascio: 01-01-2021

[Note di rilascio](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.0)

---

(Releasenotes-version-2-7-0)=

**Versione 2.7.0**

Data di rilascio: 24-09-2020

[Note di rilascio](https://github.com/nightscout/AndroidAPS/releases/tag/2.7.0)

---

(Releasenotes-version-2-6-1-4)=

**Versione 2.6.1.4**

Data di rilascio: 04-05-2020

[Note di rilascio](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2614)

---

**Versione 2.6.1.3**

Data di rilascio: 03-05-2020

[Note di rilascio](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2613)

---

**Versione 2.6.1.2**

Data di rilascio: 19-04-2020

[Note di rilascio](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2612)

---

**Versione 2.6.1.1**

Data di rilascio: 06-04-2020

[Note di rilascio](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2611)

---

**Versione 2.6.1**

Data di rilascio: 21-03-2020

[Note di rilascio](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-261)

---

(Releasenotes-version-2-6-0)=

**Versione 2.6.0**

Data di rilascio: 29-02-2020

[Note di rilascio](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-260)

---

**Versione 2.5.1**

Data di rilascio: 31-10-2019

[Note di rilascio](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-251)

---

(Releasenotes-version-2-5-0)=

**Versione 2.5.0**

Data di rilascio: 26-10-2019

[Note di rilascio](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-250)

---

**Versione 2.3**

Data di rilascio: 25-04-2019

[Note di rilascio](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-23)

---

**Versione 2.2.2**

Data di rilascio: 07-04-2019

[Note di rilascio](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-222)

---

**Versione 2.2**

Data di rilascio: 29-03-2019

[Note di rilascio](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-22)

---

**Versione 2.1**

Data di rilascio: 03-03-2019

[Note di rilascio](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-21)

---

**Versione 2.0**

Data di rilascio: 03-11-2018

[Note di rilascio](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-20)

---

**Versione 1.0**

```{admonition} First version of **AAPS**
:class: note

La prima versione di test è iniziata nel 2015 e il primo rilascio è stato nel 2016.

La cronologia esatta di questi rilasci al momento non è disponibile, ma poiché questa domanda è stata fatta più volte, la documentiamo qui.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
