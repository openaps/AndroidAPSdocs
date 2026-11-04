# Introduzione ad APS e AAPS

```{contents} In this page
:backlinks: entry
:depth: 2
```

## Che cos'è un “sistema di pancreas artificiale”?

Un pancreas umano fa molte cose oltre a regolare la glicemia. Tuttavia, il termine **“sistema di pancreas artificiale” (APS, Artificial Pancreas System)** indica di solito un sistema che lavora per mantenere in automatico la glicemia entro limiti sani.

Il modo più semplice per farlo è rilevare i **livelli di glucosio**, usare questi valori per fare dei **calcoli** e poi erogare nel corpo la quantità giusta (prevista) di **insulina**. Ripete il calcolo ogni pochi minuti, 24 ore su 24, 7 giorni su 7. Usa **allarmi** e **avvisi** per informare l'utente quando serve un intervento o attenzione. This system is typically made up of a **glucose sensor**, an **insulin pump** and a **controller** which runs the calculations. In **AAPS** e negli altri sistemi open source il controller è un'app su un telefono. Nella maggior parte dei sistemi commerciali è un software integrato nel micro stesso, con un'app per telefono usata soprattutto per visualizzare e controllare.

Per sapere come sono nati i sistemi a loop chiuso e come funzionano, questo articolo di revisione del 2022 è un buon punto di partenza. Tieni presente che è precedente alla maggior parte dei sistemi disponibili oggi, quindi non è una guida a ciò che c'è attualmente sul mercato:

![Frontiers](../images/FRONTIERS_Logo_Grey_RGB.png) [Closed-Loop Insulin Delivery Systems: Past, Present, and Future Directions](https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2022.919942/full) (Templer, _Frontiers in Endocrinology_, 2022).

I cosiddetti sistemi “bi-ormonali” infondono glucagone insieme all'insulina, con lo scopo di prevenire le ipoglicemie gravi e permettere un controllo della glicemia ancora più stretto. Un primo sistema di questo tipo è stato approvato in Europa, ma è fornito solo tramite studi e progetti, e altri sono ancora in sviluppo. Nessuno è ancora in vendita al pubblico.

Un pancreas artificiale può essere visto come un [“pilota automatico per il tuo diabete”](https://www.artificialpancreasbook.com/). Che cosa significa?

In un aereo il pilota automatico non fa tutto il lavoro del pilota umano: il pilota non può dormire per tutto il volo. Il pilota automatico aiuta il lavoro del pilota. Lo libera dal peso di dover gestire continuamente l'aereo e permette al pilota di concentrarsi su una sorveglianza più ampia. Il pilota automatico riceve segnali da vari sensori, un computer valuta i dati insieme alle indicazioni del pilota e poi fa le regolazioni necessarie, avvisando il pilota di eventuali problemi. Il pilota non deve più preoccuparsi di prendere decisioni di continuo, e questo paragone si può applicare ad **AAPS**.

![immagine](../images/autopilot.png)

(Introduction-what-does-hybrid-closed-loop-mean)=
## Che cosa significa loop chiuso ibrido?

La soluzione migliore per il diabete di tipo 1 sarebbe una “cura funzionale” (probabilmente un impianto di cellule del pancreas protette dal sistema immunitario). Mentre la comunità delle persone con diabete di tipo 1 (DT1) aspetta questa cura, un pancreas artificiale a “loop chiuso completo” è probabilmente la soluzione migliore subito dopo. Si tratta di un sistema tecnologico che non ha bisogno di alcun input dell'utente (come fare boli di insulina per i pasti o annunciare l'attività fisica) e che regola bene i livelli di glicemia. Quasi tutti i sistemi in uso ogni giorno sono a loop chiuso “ibrido”, perché usano una combinazione di tecnologia automatica e di input dell'utente. I primi sistemi a loop chiuso completo sono stati approvati in Europa nel 2026, ma nessuno è ancora largamente disponibile.

## Come e perché è nato il loop?

Lo sviluppo di tecnologia commerciale per le persone con diabete di tipo 1 (DT1) è molto lento. Nel 2013 la comunità DT1 ha fondato il movimento #WeAreNotWaiting. They developed systems themselves using existing approved technology (insulin pumps and sensors) to improve blood glucose control, safety, and quality of life. Sono chiamati sistemi OS-AID (Open-Source Automated Insulin Delivery, erogazione automatica di insulina open source; in passato sistemi DIY, “fai da te”), perché non sono approvati ufficialmente dagli enti sanitari (FDA, NHS ecc.). Sono disponibili quattro sistemi OS-AID principali: [OpenAPS](https://openaps.org/what-is-openaps/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) e [Trio](https://triodocs.org).

Un ottimo modo per capire le basi del loop OS-AID è leggere il libro di Dana Lewis “Automated Insulin Delivery”. Puoi leggerlo gratuitamente [qui](https://www.artificialpancreasbook.com/) (oppure comprare una copia stampata del libro). Se vuoi capire meglio [OpenAPS](https://openaps.org/what-is-openaps/), da cui è nato **AAPS**, il [sito web di OpenAPS](https://openaps.org/what-is-openaps/) è un'ottima risorsa.

Sono stati lanciati anche diversi sistemi commerciali a loop chiuso ibrido. Sono molto diversi dai sistemi OS-AID, soprattutto perché molti di loro includono un “algoritmo di apprendimento” che regola quanta insulina viene erogata in base al tuo fabbisogno di insulina dei giorni precedenti. Molte persone della comunità OS-AID hanno già provato sistemi commerciali e li hanno confrontati con il loro sistema OS-AID. Puoi scoprire di più sul confronto tra i diversi sistemi chiedendo nei gruppi Facebook dedicati a quei sistemi, nel [gruppo Facebook di AAPS](https://www.facebook.com/groups/AndroidAPSUsers/) o su [Discord](https://discord.com/invite/4fQUWHZ4Mw).

## Che cos'è Android APS (AAPS)?

![immagine](../images/basic-outline-of-AAPS.png)

**Figura 1**. Schema di base di Android APS (sistema di pancreas artificiale), AAPS.

Android APS (**AAPS**) è un sistema a loop chiuso ibrido, o sistema di pancreas artificiale (APS). Calcola le dosi di insulina usando gli algoritmi consolidati di [OpenAPS](https://openaps.org/) (un insieme di regole) sviluppati dalla comunità DT1 #WeAreNotWaiting.

Since OpenAPS is only compatible with certain older insulin pumps, **AAPS** (which can be used with a wider range of insulin pumps) was first developed in 2016 for a family member with type 1 diabetes. Da quei primi giorni, **AAPS** è stato continuamente sviluppato e migliorato da un gruppo di sviluppatori informatici volontari e altri appassionati che hanno un legame con il mondo del diabete di tipo 1. Oggi **AAPS** è usato da molte migliaia di persone in tutto il mondo. È un sistema molto personalizzabile e versatile e, essendo open source, è anche facilmente compatibile con molti altri software e piattaforme open source per il diabete. I componenti fondamentali dell'attuale sistema **AAPS** sono mostrati nella **Figura 1** qui sopra.



## Quali sono i componenti di base di AAPS?

Il “cervello” di AAPS è un'**app** di cui fai tu stesso la build. Per questo ci sono istruzioni dettagliate passo per passo. Poi installi l'**app AAPS** su uno **smartphone Android** [compatibile](../Getting-Started/Phones.md) (**1**). Diversi utenti preferiscono avere il loop su un telefono separato dal loro telefono principale. Quindi non devi per forza usare un telefono Android per tutto il resto della tua vita, ma solo per far funzionare il tuo loop AAPS.

Sullo **smartphone Android** dovrà essere installata anche un'altra app oltre ad **AAPS**. Questa [app aggiuntiva](../Getting-Started/CompatiblesCgms.md) riceve i dati del glucosio da un sensore (**2**) via Bluetooth e poi li invia internamente sul telefono all'**app AAPS**.

L'**app AAPS** usa un processo decisionale (**algoritmo**) di OpenAPS. I principianti iniziano con l'algoritmo di base **oref0**, ma è possibile passare all'algoritmo più recente **oref1** man mano che fai progressi con AAPS. Quale algoritmo usare (oref0 o oref1) dipende da quale si adatta meglio alla tua situazione specifica.  In entrambi i casi l'algoritmo tiene conto di molti fattori e fa calcoli rapidi ogni volta che arriva una nuova lettura dal sensore. The algorithm then sends instructions to the insulin pump (**3**) on how much insulin to deliver by Bluetooth. Tutte le informazioni possono essere inviate a internet (**4**) tramite dati mobili o Wi-Fi. Se vuoi, questi dati possono anche essere condivisi con chi ti segue e/o raccolti per essere analizzati. Se vuoi, puoi anche associare uno [smartwatch](../Getting-Started/Watches.md) (**5**) al telefono per vedere i tuoi dati a colpo d'occhio e, con alcuni orologi, inviare comandi di base ad **AAPS**.

## Quali sono i vantaggi del sistema AAPS?

L'algoritmo OpenAPS usato da **AAPS** controlla i livelli di glicemia senza input dell'utente, secondo i parametri definiti dall'utente (i più importanti sono le velocità basali, i fattori di sensibilità all'insulina, i rapporti insulina/carboidrati, la durata d'azione dell'insulina ecc.), e reagisce ogni 5 minuti ai nuovi dati del sensore.

Alcuni dei vantaggi riportati dell'uso di **AAPS** sono le molte opzioni regolabili con precisione, le **Automazioni** e una maggiore trasparenza del sistema per il paziente o chi se ne prende cura. Questo può portare a un migliore controllo del tuo diabete (o di quello della persona di cui ti prendi cura), che a sua volta può dare una migliore qualità della vita e più tranquillità.

Se ci dedichi del tempo, **AAPS** può portare a:

- ridurre lo stress e il peso della gestione del diabete di tipo 1;

- ridurre le tante piccole decisioni quotidiane legate al diabete di tipo 1;

- dosi di insulina personali e dinamiche basate su dati in tempo reale, che possono ridurre il bisogno di trattare le ipoglicemie e ridurre gli episodi di iperglicemia;

- una maggiore conoscenza della gestione dell'insulina e più sicurezza nel regolare meglio le tue impostazioni;

- la possibilità di creare impostazioni automatiche (**automazioni**) adatte al tuo stile di vita;

- una migliore qualità del sonno e in generale meno interventi notturni;

- monitoraggio remoto e gestione dell'erogazione di insulina per chi si prende cura di persone con diabete di tipo 1; e

- riunire tutti i tuoi dispositivi portatili per il diabete (ricevitore del monitoraggio continuo del glucosio e dispositivi di controllo dell'insulina) usando un telefono Android controllato da **AAPS**.


In definitiva, **AAPS** può aiutare le persone a gestire meglio il proprio diabete, con glicemie stabili e migliori risultati di salute a lungo termine.

### I vantaggi specifici includono:

#### 1) Sicurezza integrata
Per leggere le funzioni di sicurezza degli algoritmi, chiamati oref0 e oref1, [clicca qui](https://openaps.org/reference-design/). È l'utente a controllare i propri limiti di sicurezza.

#### 2) Flessibilità dell'hardware

**AAPS** works with a wide range of insulin pumps and sensors and offers flexibility as life changes. Per esempio, se sviluppi un'allergia alla colla del cerotto dei sensori Dexcom, puoi passare a un sensore Libre. Non serve rifare la build o reinstallare l'app **AAPS**: per cambiare hardware basta scegliere un altro micro o un'altra sorgente glicemia in **Configurazione**. **AAPS** non dipende da driver specifici del micro e contiene anche un "micro virtuale", così gli utenti possono fare prove in sicurezza prima di usarlo su sé stessi.

#### 3) Molto personalizzabile, con parametri ampi

Gli utenti possono facilmente aggiungere o togliere moduli o funzioni, e **AAPS** può essere usato sia in modalità loop aperto sia in modalità loop chiuso. Ecco alcuni esempi delle possibilità del sistema **AAPS**:

 a) La possibilità di impostare un target di **glicemia** più basso 30 minuti prima di mangiare; puoi impostare il target fino a 72 mg/dL (4,0 mmol/L).

 b) Se sei insulino-resistente e questo causa glicemie alte, **AAPS** ti permette di impostare una regola di **automazione** che si attiva quando la glicemia sale sopra 8 mmol/l (144 mg/dl) e passa (per esempio) a un profilo al 120% (con un aumento del 20% della basale e un rafforzamento anche degli altri fattori, rispetto all'impostazione normale del tuo **profilo**). L'automazione durerà secondo il tempo programmato che imposti. Un'automazione di questo tipo può essere impostata per essere attiva solo in certi giorni della settimana, in certe ore del giorno e anche in certi luoghi.

 c) Se tuo figlio salta su un trampolino senza preavviso, **AAPS** permette di sospendere l'insulina per un periodo di tempo stabilito, direttamente dal telefono.

 d) Dopo aver ricollegato un micro con catetere che è stato scollegato per nuotare, **AAPS** calcolerà l'insulina basale che hai perso mentre eri scollegato e la erogherà con cautela, in base alla tua glicemia attuale. L'insulina non necessaria può essere evitata semplicemente “annullando” la basale persa.

 e) **AAPS** ti permette di impostare profili diversi per situazioni diverse e di passare facilmente dall'uno all'altro. Per esempio, le funzioni che rendono l'algoritmo più rapido nel far scendere una glicemia alta (come i super micro boli (“**SMB**”) e i pasti non annunciati (“**UAM**”)) possono essere impostate per funzionare solo di giorno, se temi le ipoglicemie notturne.

Questi sono tutti esempi: l'insieme completo delle funzioni offre una grande flessibilità nella vita quotidiana, compresi sport, malattia, cicli ormonali _ecc._ Alla fine è l'utente a decidere come usare questa flessibilità, e non esiste un'automazione valida per tutti.

#### 4) Monitoraggio remoto
Ci sono molti canali di monitoraggio possibili (Sugarmate, Dexcom Follow, xDrip, Android Auto _ecc._), utili per genitori/chi si prende cura e per adulti in certe situazioni (sonno/guida) che hanno bisogno di avvisi personalizzabili. In alcune app (xDrip) puoi anche spegnere del tutto gli allarmi: è molto utile se hai un sensore nuovo in fase di “soaking” o di assestamento che non vuoi ancora usare per il loop.

#### 5) Controllo remoto
Un vantaggio importante di **AAPS** rispetto ai sistemi commerciali è che chi ti segue può inviare al sistema **AAPS** molti comandi diversi, usando comandi di testo (SMS) autenticati o un'app **AAPSClient** associata. Questa funzione è molto usata dai genitori di bambini con diabete di tipo 1 che usano **AAPS**.

Le funzioni di controllo remoto possono essere molto utili: per esempio al parco giochi, se vuoi fare un pre-bolo per uno spuntino dal tuo telefono mentre tuo figlio è impegnato a giocare. È anche possibile monitorare il sistema da uno smartwatch (_ad es._ Garmin) o inviare da esso comandi di base (_ad es._ da un orologio Wear OS come il Samsung Galaxy Watch).

#### 6) Nessun vincolo commerciale, grazie a interfacce applicative aperte
Oltre all'approccio open source, che permette di vedere il codice sorgente di **AAPS** in qualsiasi momento, il principio generale di offrire interfacce di programmazione aperte dà anche ad altri sviluppatori la possibilità di contribuire con nuove idee. **AAPS** è strettamente integrato con Nightscout. Questo accelera lo sviluppo e permette agli utenti di aggiungere funzioni che rendono la vita con il diabete ancora più comoda. Buoni esempi di queste integrazioni sono [Nightscout](https://nightscout.github.io/), [Nightscout Reporter](https://nightscout-reporter.zreptil.de/), xDrip, [M5 stack](https://github.com/mlukasek/M5_NightscoutMon/wiki) ecc. C'è un dialogo continuo tra gli sviluppatori open source e chi sviluppa sistemi commerciali. Molte delle innovazioni OS-AID vengono adottate gradualmente dai sistemi commerciali, dove lo sviluppo è comprensibilmente più lento, anche perché le interfacce tra sistemi di aziende diverse (micro, app, sensori _ecc._) devono essere negoziate con cura e concesse in licenza. Questo può anche rallentare innovazioni utili per il paziente (o per un piccolo gruppo di pazienti con un'esigenza molto specifica) ma che non generano un profitto significativo.

#### 7) Interfaccia dell'app dettagliata
Con **AAPS** è facile tenere traccia di cose come: livello di insulina nel micro, età della cannula, età del sensore, età della batteria del micro, insulina attiva _ecc._ Molte azioni si possono fare tramite l'app **AAPS** (caricare il micro, scollegare il micro _ecc._) invece che sul micro stesso: così il micro può restare in tasca o alla cintura (tua o della persona di cui ti prendi cura).

#### 8) Accessibilità e costi contenuti
**AAPS** dà a chi oggi non può pagare di tasca propria, o non ha finanziamenti/assicurazione, l'accesso a un sistema a loop chiuso ibrido che, come concetto, è avanti di anni nello sviluppo rispetto ai sistemi commerciali. Al momento ti serve un server di report (Nightscout o Tidepool) per configurare **AAPS**, anche se non è necessario per il funzionamento quotidiano del loop **AAPS**. Molte persone continuano a usare Nightscout per raccogliere i propri dati e per il monitoraggio remoto. Anche se **AAPS** stesso è gratuito, configurare Nightscout tramite una delle varie piattaforme può avere un costo (0 € - 12 €), a seconda del livello di supporto che vuoi (vedi la tabella di confronto) e del fatto che tu voglia continuare a usare Nightscout dopo la configurazione o no. **AAPS** funziona con un'ampia gamma di [telefoni Android](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true) a prezzi accessibili (a partire da circa 150 €). Sono disponibili versioni diverse per luoghi e lingue specifici, e AAPS può essere usato anche da persone [non vedenti](#accessibility-for-users-aaps-who-are-partially-or-completely-blind).

#### 9) Supporto
Nessun sistema di erogazione automatica di insulina è perfetto. I sistemi commerciali e quelli open source hanno molti problemi in comune, sia nelle comunicazioni sia per guasti temporanei dell'hardware. È disponibile il supporto della comunità di utenti di AAPS su Facebook, Discord e GitHub, che hanno progettato, sviluppato e usano oggi **AAPS** in tutto il mondo. Ci sono anche gruppi di supporto su Facebook e aiuto da cliniche/aziende per i sistemi APS commerciali - vale la pena parlare con gli utenti, o con ex utenti, di questi sistemi per avere un riscontro sui problemi comuni, sulla qualità del programma di formazione e sul livello di supporto continuo offerto.

#### 10) Prevedibilità, trasparenza e sicurezza
**AAPS** è trasparente, logico e prevedibile: questo può rendere più facile capire quando un'impostazione è sbagliata e correggerla di conseguenza. Puoi vedere esattamente cosa fa il sistema, perché lo fa, e impostare i suoi limiti di funzionamento: questo mette il controllo (e la responsabilità) nelle tue mani. Questo può dare all'utente fiducia e un sonno più tranquillo.

#### 11) Accesso a funzioni avanzate tramite le modalità di sviluppo (dev), compreso il loop chiuso completo
Questa documentazione di **AAPS** riguarda il branch principale **“master”** di **AAPS**. Tuttavia, la ricerca e lo sviluppo continuano sempre. Gli utenti più esperti possono voler provare le funzioni sperimentali nel branch di **sviluppo**. Le innovazioni in sviluppo si concentrano su strategie per il loop chiuso completo (non dover fare il bolo per i pasti _ecc._) e in generale cercano di rendere la vita con il diabete di tipo 1 il più comoda possibile.

#### 12) Possibilità di contribuire tu stesso a ulteriori miglioramenti
Il diabete di tipo 1 può essere molto frustrante e può farti sentire isolato. Avere il controllo della tecnologia per il tuo diabete, con la possibilità di “restituire il favore” aiutando gli altri nel loro percorso appena fai progressi, può dare molta soddisfazione. Puoi informarti, scoprire gli ostacoli e cercare, e anche contribuire a, nuovi sviluppi e alla documentazione. Nella comunità ci saranno altre persone con lo stesso obiettivo con cui puoi scambiare idee e lavorare. Questa è l'essenza di #WeAreNotWaiting.

## Come si confronta AAPS con la MDI e con il loop aperto?

Le iniezioni multiple giornaliere (MDI, (a) nella **Figura 2** qui sotto) di solito prevedono un'iniezione di insulina a lunga durata d'azione (_ad es._ Tresiba) una volta al giorno, con iniezioni di insulina ad azione più rapida (_ad es._ Novorapid, Fiasp) ai pasti o per le correzioni. La terapia con micro senza loop (b) prevede l'uso di un micro che eroga la basale di insulina ad azione rapida a velocità programmate in anticipo, e poi boli tramite il micro ai pasti o per le correzioni. L'idea di base di un sistema a loop è che l'app del loop usa i dati del glucosio del sensore per dire al micro di fermare l'erogazione di insulina quando prevede che stai andando verso una glicemia bassa, e di darti insulina in più se i tuoi livelli di glucosio salgono e si prevede che diventino troppo alti (c). Anche se questa figura è molto semplificata rispetto alla vita reale, vuole mostrare le differenze principali tra gli approcci. È possibile ottenere un controllo del glucosio eccezionalmente buono con ognuno di questi tre approcci.

![21-06-23 AAPS glucose MDI etc](../images/basic-overview-mdi-open-and-closed-loop.png)


**Figura 2**. Panoramica di base di (a) MDI, (b) terapia con micro in loop aperto e (c) terapia con micro in loop chiuso ibrido.

## Come si confronta AAPS con altri sistemi di loop?

Al 25 giugno 2023 sono disponibili quattro grandi sistemi open source a loop chiuso: [OpenAPS](https://openaps.readthedocs.io/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) e [Trio](https://triodocs.org) (in passato FreeAPS X). Le caratteristiche dei diversi sistemi sono mostrate nella tabella qui sotto:


| Tipo di dispositivo | Nome                                                                          | [AAPS](https://wiki.aaps.app)                 | [Loop](https://loopkit.github.io/loopdocs/)   | [Open APS](https://openaps.readthedocs.io/en/latest/) | [Trio](https://triodocs.org)                  |
| ------------------- | ----------------------------------------------------------------------------- | --------------------------------------------- | --------------------------------------------- | ----------------------------------------------------- | --------------------------------------------- |
| Telefono            | Android                                                                       | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png) | ![non disponibile](../images/unavailable.png)         | ![non disponibile](../images/unavailable.png) |
| Telefono            | iPhone                                                                        | ![non disponibile](../images/unavailable.png) | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png)         | ![disponibile](../images/available.png)       |
| Rig                 | piccolo computer (1)                                                          | ![non disponibile](../images/unavailable.png) | ![non disponibile](../images/unavailable.png) | ![disponibile](../images/available.png)               | ![non disponibile](../images/unavailable.png) |
| PUMP                | [Dana I](../CompatiblePumps/DanaRS-Insulin-Pump.md)                           | ![disponibile](../images/available.png)       | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png)         | ![disponibile](../images/available.png)       |
| PUMP                | [Dana RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)                          | ![disponibile](../images/available.png)       | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png)         | ![disponibile](../images/available.png)       |
| PUMP                | [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)                            | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png) | ![non disponibile](../images/unavailable.png)         | ![non disponibile](../images/unavailable.png) |
| PUMP                | [Omnipod (Dash)](../CompatiblePumps/OmnipodDASH.md)                           | ![disponibile](../images/available.png)       | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png)         | ![disponibile](../images/available.png)       |
| PUMP                | [Omnipod (Eros)](../CompatiblePumps/OmnipodEros.md)                           | ![disponibile](../images/available.png)       | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png)         | ![disponibile](../images/available.png)       |
| PUMP                | [Diaconn G8](../CompatiblePumps/DiaconnG8.md)                                 | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png) | ![non disponibile](../images/unavailable.png)         | ![non disponibile](../images/unavailable.png) |
| PUMP                | [EOPatch 2](../CompatiblePumps/EOPatch2.md)                                   | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png) | ![non disponibile](../images/unavailable.png)         | ![non disponibile](../images/unavailable.png) |
| PUMP                | [Medtrum TouchCare Nano 200U](../CompatiblePumps/MedtrumNano.md)              | ![disponibile](../images/available.png)       | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png)         | ![disponibile](../images/available.png)       |
| PUMP                | [Medtrum TouchCare 300U](../CompatiblePumps/MedtrumNano.md)                   | ![disponibile](../images/available.png)       | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png)         | ![disponibile](../images/available.png)       |
| PUMP                | [Roche Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)                  | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png) | ![non disponibile](../images/unavailable.png)         | ![non disponibile](../images/unavailable.png) |
| PUMP                | [Roche Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)                 | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png) | ![non disponibile](../images/unavailable.png)         | ![non disponibile](../images/unavailable.png) |
| PUMP                | [Medtronic meno recenti](../CompatiblePumps/MedtronicPump.md)                 | ![disponibile](../images/available.png)       | ![disponibile](../images/available.png)       | ![disponibile](../images/available.png)               | ![disponibile](../images/available.png)       |
| PUMP                | [Equil 5.3](../CompatiblePumps/Equil5.3.md)                                   | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png) | ![non disponibile](../images/unavailable.png)         | ![non disponibile](../images/unavailable.png) |
| PUMP                | [CareLevo](../CompatiblePumps/CareLevo.md)                                    | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png) | ![non disponibile](../images/unavailable.png)         | ![non disponibile](../images/unavailable.png) |
| CGM                 | [Dexcom G7/One+/Stelo](../CompatibleCgms/DexcomG7.md)                         | ![disponibile](../images/available.png)       | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png)         | ![disponibile](../images/available.png)       |
| CGM                 | [Dexcom One](../CompatibleCgms/DexcomG6.md)                                   | ![disponibile](../images/available.png)       | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png)         | ![disponibile](../images/available.png)       |
| CGM                 | [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                    | ![disponibile](../images/available.png)       | ![disponibile](../images/available.png)       | ![disponibile](../images/available.png)               | ![disponibile](../images/available.png)       |
| CGM                 | [Libre 3/3+](../CompatibleCgms/Libre3.md)                                     | ![disponibile](../images/available.png)       | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png)         | ![disponibile](../images/available.png)       |
| CGM                 | [Libre 2/2+](../CompatibleCgms/Libre2.md)                                     | ![disponibile](../images/available.png)       | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png)         | ![disponibile](../images/available.png)       |
| CGM                 | [Libre 1](../CompatibleCgms/Libre1.md)                                        | ![disponibile](../images/available.png)       | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png)         | ![disponibile](../images/available.png)       |
| CGM                 | [Eversense](../CompatibleCgms/Eversense.md)                                   | ![disponibile](../images/available.png)       | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png)         | ![disponibile](../images/available.png)       |
| CGM                 | [MM640g/MM630g](../CompatibleCgms/MM640g.md)                                  | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png) | ![non disponibile](../images/unavailable.png)         | ![non disponibile](../images/unavailable.png) |
| CGM                 | [PocTech](../CompatibleCgms/PocTech.md)                                       | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png) | ![non disponibile](../images/unavailable.png)         | ![non disponibile](../images/unavailable.png) |
| CGM                 | [Ottai](../CompatibleCgms/OttaiM8.md)                                         | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png) | ![non disponibile](../images/unavailable.png)         | ![non disponibile](../images/unavailable.png) |
| CGM                 | [Syai Tag](../CompatibleCgms/SyaiTagX1.md)                                    | ![disponibile](../images/available.png)       | ![non disponibile](../images/unavailable.png) | ![non disponibile](../images/unavailable.png)         | ![non disponibile](../images/unavailable.png) |
| CGM                 | [Nightscout come sorgente glicemia](../CompatibleCgms/CgmNightscoutUpload.md) | ![disponibile](../images/available.png)       | ![disponibile](../images/available.png)       | ![disponibile](../images/available.png)               | ![disponibile](../images/available.png)       |

_Note alla tabella:_
1. Un **rig** è un piccolo computer senza schermo che porti con te. Un tipo di dispositivo supportato è Intel Edison + Explorer Board, l'altro è Raspberry Pi + Explorer HAT o Adafruit RFM69HCW Bonnet. I primi sistemi APS erano basati su questa configurazione, perché i telefoni non erano in grado di eseguire gli algoritmi necessari. L'uso di questi sistemi è diminuito, perché la configurazione sui telefoni è diventata più facile e i telefoni hanno già uno schermo. Inoltre Intel ha smesso di vendere l'Intel Edison. Gli ottimi algoritmi OpenAPS **oref0** e **oref1** sono ora integrati in AAPS e in Trio.


Una dichiarazione di consenso internazionale, revisionata da esperti (peer review), con indicazioni pratiche sul loop open source è stata scritta da e per professionisti sanitari ed è stata pubblicata nel 2022 in un'importante rivista medica: [_Lancet Diabetes Endocrinol_, 2022; 10: 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_). Vale davvero la pena leggerlo (anche per il tuo centro diabetologico): riassume le principali differenze tecniche tra i diversi sistemi open source a loop chiuso ibrido.

È difficile farsi un'idea di un sistema senza usarlo o senza parlare con altri che lo usano, quindi contatta altre persone su Facebook/Discord e fai domande. La maggior parte delle persone trova **AAPS** molto sofisticato rispetto ad altri sistemi a loop chiuso ibrido (in particolare quelli commerciali), con un numero enorme di impostazioni e funzioni personalizzabili, descritte sopra. All'inizio alcune persone possono sentirsi un po' sopraffatte, ma non c'è fretta di esplorare tutte le possibilità in una volta. Puoi procedere lentamente o velocemente come preferisci, e c'è aiuto disponibile in ogni fase del percorso.


## AAPS usa l'intelligenza artificiale o un algoritmo di apprendimento?

La versione attuale di **AAPS** (4.0) non ha algoritmi di apprendimento automatico (machine learning), modelli di risposta all'insulina a più parametri né intelligenza artificiale. Per questo il sistema è aperto e trasparente nel suo funzionamento, e può essere capito non solo dagli esperti, ma anche dai medici e dai pazienti. Significa anche che, se hai un programma che cambia molto (per esempio passi da una settimana stressante al lavoro a una vacanza rilassante) e probabilmente ti serve una quantità di insulina molto diversa, puoi far passare subito **AAPS** a un profilo personalizzato più debole/più forte. Un ‘sistema che apprende’ farà questa regolazione in automatico per te, ma probabilmente impiegherà più tempo ad adattare l'erogazione di insulina.

(which-system-is-right-for-me-or-my-dependent)=
## Quale sistema è giusto per me o per la persona di cui mi prendo cura?

In pratica, la scelta del sistema è spesso limitata dal micro che hai già, o che puoi ottenere dal tuo servizio sanitario, e dalla scelta del telefono (Apple o Android). Se non hai ancora un micro, hai la scelta più ampia di sistemi. La tecnologia cambia continuamente: alcuni micro escono di produzione e nuovi micro e sensori vengono lanciati. La maggior parte dei sistemi open source funziona con i sensori principali (Libre e Dexcom) o viene adattata rapidamente per funzionare con nuovi sensori circa un anno dopo il loro lancio (con un po' di ritardo per i test di sicurezza e stabilità).

La maggior parte degli utenti di **AAPS** riporta più tempo nell'intervallo, una riduzione dell'HbA1c e un miglioramento della qualità della vita grazie a un sistema che può regolare in automatico le velocità basali durante il sonno notturno, e questo vale per la maggior parte dei sistemi a loop chiuso ibrido. Alcune persone preferiscono un sistema molto semplice e poco personalizzabile (in questo caso potresti preferire un sistema commerciale), altre trovano questa mancanza di controllo molto frustrante (in questo caso potresti preferire un sistema open source). Se tu (o la persona di cui ti prendi cura) hai appena ricevuto la diagnosi, un percorso comune è abituarsi prima alla MDI con un sensore del glucosio, poi passare a un micro che può essere usato con il loop e poi passare ad **AAPS**; ma alcune persone (soprattutto i bambini piccoli) possono passare direttamente al micro.

È importante notare che l'utente di **AAPS** deve essere attivo nel cercare e risolvere i problemi da solo, con l'aiuto della comunità. È una mentalità molto diversa da quella di chi usa un sistema commerciale. Con **AAPS** l'utente ha più controllo, ma anche la responsabilità, e deve sentirsi a suo agio con questo.

## È sicuro usare sistemi open source come AAPS?

### Sicurezza del sistema AAPS
Una domanda più precisa è probabilmente “è sicuro **rispetto** al mio attuale sistema di erogazione di insulina?”, perché nessun metodo di erogazione di insulina è senza rischi. In **AAPS** ci sono molti controlli e contrappesi. Un [articolo](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375) recente ha studiato l'uso di **AAPS** in una configurazione simulata al computer, un modo efficace per verificare in modo oggettivo quanto il sistema sia sicuro ed efficace. Più in generale, molte migliaia di persone in tutto il mondo usano sistemi open source di erogazione automatica di insulina, e il loro uso continua a crescere in tutto il mondo.

Any device that uses radio communications could be hacked, and this is true for a non-looping insulin pump as well. Al momento non siamo a conoscenza di nessuno che abbia cercato di fare del male a qualcuno violando i suoi dispositivi medici per il diabete. Comunque ci sono diversi modi per proteggersi da questi rischi:

1.  Nelle impostazioni del micro, limita sia il bolo massimo consentito sia la basale temporanea massima ai valori che ritieni più sicuri. Sono limiti fissi che secondo noi nessun hacker malintenzionato potrebbe aggirare.

2.  Attiva gli allarmi del CGM sia per le glicemie alte sia per quelle basse.

3.  Controlla online l'erogazione della tua insulina. Gli utenti di Nightscout possono impostare allarmi aggiuntivi per molte situazioni diverse, comprese situazioni molto più probabili di un attacco malevolo. Oltre alle glicemie alte e basse, Nightscout può mostrare dati di diagnostica utili per verificare che il micro funzioni come previsto, tra cui l'IOB attuale, lo storico delle basali temporanee del micro e lo storico dei boli del micro. Può anche essere configurato per avvisare in anticipo gli utenti di situazioni indesiderate, come glicemie alte e basse previste, insulina bassa nel serbatoio e batteria del micro scarica.

If a malicious attack was made on your insulin pump, these strategies would significantly mitigate the risk. Ogni potenziale utente di **AAPS** deve valutare i rischi legati all'uso di **AAPS** rispetto ai rischi dell'uso di un sistema diverso.

#### Aspetti di sicurezza legati a un miglioramento troppo rapido del controllo glicemico

Una rapida riduzione dell'HbA1c e un migliore controllo della glicemia sembrano allettanti. Tuttavia, abbassare i livelli medi di glicemia _troppo in fretta_ iniziando un qualsiasi sistema a loop chiuso può causare danni permanenti, anche agli occhi, e una neuropatia dolorosa che non passa più. Questo danno si può evitare semplicemente abbassando i livelli più lentamente. Se al momento hai un'HbA1c alta e stai passando ad AAPS (o a qualsiasi altro sistema a loop chiuso), parla di questo possibile rischio con il tuo team medico prima di iniziare e concorda con loro un piano dei tempi. Informazioni più generali su come abbassare i livelli di glucosio in modo sicuro, con link alla letteratura medica, sono nella sezione sulla sicurezza [qui](#preparing-safety-first).

#### Sicurezza medica di dispositivi, materiali di consumo e altri farmaci

Use a tested, fully functioning FDA or CE approved insulin pump and CGM for an artificial pancreas loop. Hardware or software modifications to these components can cause unexpected insulin dosing, causing significant risk to the user. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, do not use these for creating an AAPS system.

Usa materiali originali, come inseritori, cannule e contenitori di insulina approvati dal produttore del tuo micro e del tuo CGM. Using untested or modified supplies can cause CGM inaccuracy and insulin dosing errors. L'insulina è molto pericolosa se dosata male - non giocare con la tua vita modificando i tuoi materiali.

Non prendere inibitori SGLT-2 (gliflozine) quando usi **AAPS**, perché abbassano la glicemia in modo non calcolabile. Unire questo effetto a un sistema che abbassa le velocità basali per far salire la glicemia è pericoloso; trovi più dettagli nella [sezione principale sulla sicurezza](#preparing-safety-first).

(introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team)=
## Come posso parlare di AAPS con il mio team medico?

Agli utenti si consiglia di parlare con i propri medici della loro intenzione di usare **AAPS**. Non avere paura di parlare apertamente con il tuo team diabetologico se intendi usare **AAPS** (o qualsiasi altro loop OS-AID). Trasparenza e fiducia tra paziente e medico sono fondamentali.

### Approccio consigliato:
Inizia una conversazione con il tuo medico per capire quanto conosce la tecnologia per il diabete, come CGM, micro, loop ibridi e loop commerciali, e cosa ne pensa. Il tuo medico/endocrinologo dovrebbe conoscere la tecnologia di base ed essere disposto a parlare con te dei recenti progressi dei prodotti di loop commerciali disponibili nella sua zona.

#### Precedenti locali

Chiedi ai tuoi medici/endocrinologi cosa pensano del loop OS-AID _rispetto al_ loop commerciale e valuta quanto conoscono questo campo. Conoscono **AAPS** e possono condividere con te esperienze utili di lavoro con pazienti che usano un loop OS-AID?

Chiedi se il tuo team segue già pazienti che usano un loop OS-AID. Per la riservatezza dei pazienti, i medici non possono darti i dati di altri pazienti senza il consenso della persona. Però, se vuoi, **puoi** chiedere loro di dare i **tuoi** contatti a un paziente che usa già un loop OS-AID, se ce n'è uno con cui il medico pensa che potresti "trovarti bene”, dicendo che saresti felice di essere contattato da quel paziente per parlare del loop OS-AID. I medici non sono obbligati a farlo, ma alcuni lo fanno volentieri, perché capiscono l'importanza del supporto tra pari nella gestione del diabete di tipo 1. Potrebbe esserti utile anche incontrare persone della tua zona che usano un loop OS-AID e sono disponibili. Naturalmente questo dipende da te, e non è del tutto necessario.

#### Precedenti nazionali e internazionali

Se senti che il tuo team non ti sostiene nel fare il loop con **AAPS**, questi argomenti di discussione possono aiutarti:

a) Il sistema **AAPS** è stato progettato DA pazienti e da chi si prende cura di loro. È stato progettato prima di tutto per la sicurezza, ma anche basandosi su una profonda esperienza dei pazienti. Ci sono molte migliaia di utenti di **AAPS** in tutto il mondo. È quindi probabile che tra i pazienti della tua clinica ci siano altre persone che usano un loop OS-AID (che la clinica lo sappia o no).

b) Indicazioni recenti, revisionate da esperti e pubblicate nella rivista medica internazionale più importante, [The Lancet](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/pdf/nihms-1765784.pdf)(_1_), hanno confermato che i loop OS-AID sono **sicuri** ed **efficaci nel migliorare il controllo del diabete**, compreso il tempo nell'intervallo. Riviste importanti come [Nature](https://doi.org/10.1038/d41586-023-02648-9)(_3_) pubblicano regolarmente articoli che mettono in luce i progressi della comunità del loop OS-AID.

c) Iniziare con **AAPS** significa passare _gradualmente_ dalla terapia con micro in loop “aperto”, attraverso la sospensione a glicemia bassa, fino al loop “chiuso” ibrido, completando una serie di obiettivi. C'è quindi un programma strutturato, che chiede all'utente di dimostrare un certo livello di competenza in ogni fase e di regolare con precisione le impostazioni di base (basale, ISF e ICR) prima di poter chiudere il loop.

d) Il supporto tecnico è disponibile dalla comunità OS-AID tramite GitHub, Discord e gruppi chiusi su Facebook.

e) You will be able to provide **both CGM and insulin looping/pumping information** as combined reports at clinic meetings (through Nightscout or Tidepool), either printed out or on-screen (if you bring a laptop/tablet). Riunire i dati del CGM e dell'insulina permetterà di usare meglio il tempo del tuo medico per esaminare i tuoi report e lo aiuterà nel valutare i tuoi progressi.

f) Se il tuo team è ancora molto contrario, dai al tuo medico le copie stampate degli articoli citati in questo testo e il link alla sezione di **AAPS** per i medici: [Per i medici – Introduzione generale e guida ad **AAPS**](../UsefulLinks/ClinicianGuideToAaps.md)

#### Sostegno al loop OS-AID da parte di altri medici

L'articolo pubblicato su [Lancet Diabetes Endocrinology](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_) (guidato insieme dal King’s e dal Guy’s and St Thomas’ NHS Foundation Trust, e guidato insieme dal Dr Sufyan Hussain, diabetologo consulente e docente senior onorario del King’s di Londra) fornisce:

a) **Garanzia** per i professionisti che i sistemi di pancreas artificiale OS-AID/open source sono un'opzione di trattamento “sicura ed efficace” per il diabete di tipo 1; fornisce anche indicazioni su raccomandazioni, discussioni, supporto e documentazione;

b) **Riconoscimento** che i sistemi open source di erogazione automatica di insulina (“AID”) possono aumentare il tempo nell'intervallo (TIR), riducendo la variabilità delle concentrazioni di glicemia e il numero di episodi di ipoglicemia e di iperglicemia in varie fasce d'età, generi e comunità;

c) **Raccomandazione** che gli operatori sanitari **sostengano** i pazienti con diabete di tipo 1, o chi si prende cura di loro, che scelgono di gestire il diabete con un sistema AID open source;

d) Raccomandazione che gli operatori sanitari cerchino di conoscere tutte le opzioni di trattamento che potrebbero essere utili ai pazienti, compresi i sistemi AID open source disponibili.  Se i professionisti sanitari non hanno risorse per informarsi, o hanno dubbi legali o normativi, dovrebbero considerare di **collaborare o fare squadra con altri professionisti sanitari** che le hanno;

e) Sottolineatura che tutti gli utenti di CGM dovrebbero avere sempre accesso aperto e in tempo reale ai **propri dati sanitari**

f) Sottolineatura che questi sistemi open source non sono stati sottoposti alle stesse valutazioni normative delle tecnologie mediche in commercio, e che non c'è supporto tecnico commerciale. Tuttavia, **è disponibile un ampio supporto della comunità**; e

g) Raccomandazione che le **norme e i quadri giuridici** vengano aggiornati per chiarire che un trattamento etico ed efficace con questi sistemi open source è consentito.

Un altro articolo in [Medical Law International, 2021](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)(_4_) sottolinea anche che la ‘guida sul consenso’ del General Medical Council del Regno Unito dà molta importanza alle decisioni prese insieme da medico e paziente. Il medico dovrebbe spiegare i possibili benefici, rischi, oneri ed effetti collaterali dell'APS OS-AID e può consigliare una certa opzione senza fare pressione sul paziente.

Alla fine spetta al paziente valutare questi fattori, insieme a eventuali aspetti non clinici che lo riguardano, e decidere quale opzione di trattamento accettare, se ne accetta una.

Se un medico scopre in clinica che il suo paziente usa un loop con un sistema OS-AID, non è esonerato dall'obbligo di seguire il paziente solo perché non ha prescritto lui quella tecnologia; i medici devono continuare a seguire i pazienti.

I medici (almeno nel Regno Unito) non hanno il divieto di prescrivere farmaci senza licenza e possono usare il proprio giudizio clinico. Dovrebbero quindi usare il loro giudizio clinico per decidere se un APS OS-AID è adatto a un certo paziente, e parlare con il paziente dei pro e dei contro che vedono.

#### Gli articoli citati sopra e altri link utili e dichiarazioni di posizione sono elencati qui sotto:

1. Open-source automated insulin delivery: international consensus statement and practical guidance for health-care professionals [_Lancet Diabetes Endocrinol_, (2022) _10_, 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)
2. [In Silico Trials of an Open-Source Android-Based Artificial Pancreas: A New Paradigm to Test Safety and Efficacy of Do-It-Yourself Systems, 2020](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375)
3. A DIY ‘bionic pancreas’ is changing diabetes care — what's next? [_Nature_ (2023), _620_, 940-941](https://doi.org/10.1038/d41586-023-02648-9)
4. Prescribing unapproved medical devices? The case of DIY artificial pancreas systems [_Medical law international_, (2021), _21_, 42-68](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)
5. [Dichiarazione di posizione del Berlin Institute of Health, 2022](https://www.bihealth.org/en/notices/do-it-yourself-solutions-for-people-with-diabetes-are-safe-and-recommended)
6. Do-It-Yourself Automated Insulin Delivery: A Health-care Practitioner User’s Guide (posizione e guida di Diabetes Canada) [_Canadian Journal of Diabetes_ (2023), _47_, E8, 389-397](https://www.canadianjournalofdiabetes.com/article/S1499-2671(23)00138-7/fulltext)
7.  Paesi Bassi (EN/NL) - per i medici - [how to help people on open source automated insulin delivery systems](https://www.diabetotech.com/blog/how-to-help-people-on-open-source-automated-insulin-delivery-systems)
8. First Use of Open-Source Automated Insulin Delivery AndroidAPS in Full Closed-Loop Scenario: Pancreas4ALL Randomized Pilot Study [_Diabetes Technol. Ther._, 25, _5_, 2023](https://www.liebertpub.com/doi/pdf/10.1089/dia.2022.0562?casa_token=D13eFx5vCwwAAAAA:MYvO8hChbViXVJFgov1T11RXBPx2N_wOMThLHwl3TVUxbCuANegPrIFRC5R5VXx_S71FoQYW-qg)
9. Pre-school and school-aged children benefit from the switch from a sensor-augmented pump to an AndroidAPS hybrid closed loop: A retrospective analysis [_Pediatr. Diabetes_ 2021, _22_, 594-604. 2021](https://onlinelibrary.wiley.com/doi/epdf/10.1111/pedi.13190)
10. Risultati del progetto OPEN, un progetto finanziato dall'UE sugli Outcomes of Patient’s Evidence with Novel, Do-it-Yourself Artificial Pancreas Technology (https://www.open-diabetes.eu/publications)



## Perché non posso semplicemente scaricare AAPS e usarlo subito?

L'app **AAPS** non è disponibile su Google Play: per motivi legali devi fare tu stesso la build dal codice sorgente. **AAPS** non ha licenza, cioè non è approvato da nessuna autorità di regolamentazione in nessun paese. Usare **AAPS** è considerato un esperimento medico su sé stessi, e si fa a proprio rischio.

Configurare il sistema richiede pazienza, determinazione e un apprendimento graduale di conoscenze tecniche. Tutte le informazioni e il supporto si trovano in questi documenti, altrove online o presso altre persone che lo hanno già fatto. Molte migliaia di persone in tutto il mondo hanno fatto con successo la build di **AAPS** e lo usano oggi.

Gli sviluppatori di **AAPS** prendono la sicurezza molto sul serio e vogliono che gli altri abbiano una buona esperienza nell'uso di **AAPS**. Per questo è fondamentale che ogni utente (o chi se ne prende cura, se l'utente è un bambino):

- faccia da sé la build del sistema AAPS e completi gli **obiettivi**, così da avere impostazioni personali abbastanza buone e capire le basi del funzionamento di **AAPS** nel momento in cui “chiude il loop”;

- faccia il backup del sistema esportando e salvando i file importanti (come il keystore e il file .json delle impostazioni) in un posto sicuro, così da poterlo configurare di nuovo in fretta se serve;

- aggiorni alle nuove versioni master man mano che diventano disponibili; e

- curi e controlli il sistema per assicurarsi che funzioni correttamente.

## Come si collega il sistema AAPS?

La **Figura 3 (qui sotto)** mostra un esempio del sistema **AAPS** per un utente che non ha bisogno di persone che lo seguono e interagiscono con il sistema. Possono essere integrati anche altri software e piattaforme open source non mostrati qui.

![21-06-23 AAPS connectivity no followers](../images/AAPS-connectivity-no-followers.png)


La **Figura 4 (qui sotto)** mostra tutte le possibilità del sistema **AAPS** per un utente che ha persone che lo seguono e ha bisogno di monitorare e regolare il sistema da remoto (come un bambino con diabete di tipo 1). Possono essere integrati anche altri software e piattaforme open source non mostrati qui.

![21-06-23 AAPS overview with followers](../images/AAPS-overview-with-followers.png)

## Come viene sviluppato e migliorato continuamente AAPS?

La maggior parte degli utenti di **AAPS** usa la versione **master** di AAPS, completamente testata, che è stata controllata per bug e problemi prima di essere rilasciata alla comunità. Dietro le quinte, gli sviluppatori provano nuovi miglioramenti e li testano in versioni “per sviluppatori” (**dev**) di **AAPS** con una comunità di utenti disposti a installare aggiornamenti con correzioni di bug con poco preavviso. Se i miglioramenti funzionano bene, vengono poi rilasciati come nuova versione “master” di **AAPS**. Ogni nuova versione master viene annunciata nel gruppo Facebook, così gli utenti di **AAPS** possono leggerne le novità e aggiornare alla nuova versione master.

Alcuni utenti di **AAPS** esperti e sicuri di sé fanno esperimenti con tecnologie emergenti e con versioni dev dell'app **AAPS**: per gli utenti meno avventurosi può essere interessante leggerne, senza doverlo fare da soli! Anche questi esperimenti di solito vengono condivisi nel gruppo Facebook.

Puoi leggere di più su alcuni di questi esperimenti e sulle discussioni sulle tecnologie emergenti qui:

Tim Street [https://www.diabettech.com/](https://www.diabettech.com/)

David Burren [https://bionicwookie.com/](https://bionicwookie.com/)

## Chi può trarre vantaggio da AAPS?

| Tipo di utente                                                             |
| -------------------------------------------------------------------------- |
| ✔️ persona con diabete di tipo 1                                           |
| ✔️ chi si prende cura di, o genitore di, una persona con diabete di tipo 1 |
| ✔️ utenti non vedenti con diabete di tipo 1                                |
| ✔️ *medici e professionisti sanitari                                       |

The above table assumes that the user has access to both a continuous glucose monitor and an insulin pump.

*Tutti i dati di **AAPS** possono essere resi disponibili ai professionisti sanitari tramite piattaforme di condivisione dei dati, tra cui Nightscout, che offre registrazione e monitoraggio in tempo reale dei dati del CGM, dell'erogazione di insulina, dei carboidrati inseriti, delle previsioni e delle impostazioni. I record di Nightscout comprendono report giornalieri e settimanali che possono aiutare i professionisti sanitari nel parlare con i pazienti con diabete di tipo 1, con dati più precisi sul controllo glicemico e su eventuali aspetti di comportamento.

(accessibility-for-users-aaps-who-are-partially-or-completely-blind)=

### Accessibilità per gli utenti di AAPS ipovedenti o non vedenti

#### Uso quotidiano di AAPS:
AAPS può essere usato da persone non vedenti. Sui dispositivi Android il sistema operativo ha un programma chiamato TalkBack. Questo permette di orientarsi sullo schermo tramite la voce, come parte del sistema operativo. Usando TalkBack puoi usare sia il tuo smartphone sia AAPS senza bisogno di vedere.

#### Build dell'app AAPS:
Come utente farai la build dell'app AAPS in Android Studio. Molte persone usano Microsoft Windows per questo; lì c'è un'utilità di lettura dello schermo simile a TalkBack. Dato che Android Studio è un'applicazione Java, il componente “Java Access Bridge” deve essere attivato nel Pannello di controllo. Altrimenti l'utilità di lettura dello schermo del PC non leggerà ad alta voce in Android Studio.

Come farlo dipende dal tuo sistema operativo; qui sotto sono descritti due metodi:

1) Nel menu Start di Windows, scrivi “Control Panel” (Pannello di controllo) nel campo di ricerca e apri con Invio. Si apre: “All Control Panel Items” (Tutti gli elementi del Pannello di controllo).

Apri "Ease of Access Centre" (Centro accessibilità).

Poi apri “Use computer without a display” (Usa il computer senza schermo) con Invio.

In **Hear text read aloud** (Ascolta testo letto ad alta voce), seleziona **turn on narrator** (Attiva Assistente vocale) e **turn on audio display** (Attiva descrizione audio), poi clicca **apply** (Applica).

oppure:

2) Premi il tasto Windows e scrivi “Control Panel” (Pannello di controllo) nel campo di ricerca, apri con Invio. Si apre: “All Control Panel Items” (Tutti gli elementi del Pannello di controllo).

Premi la lettera E per arrivare a “Ease of Access Centre” (Centro accessibilità), apri con Invio.

Poi apri “Use computer without a display” (Usa il computer senza schermo) con Invio.

Lì, in basso, trovi la casella “Enable Java Access Bridge” (Abilita Java Access Bridge): selezionala.

Fatto, chiudi pure la finestra! Ora l'utilità di lettura dello schermo dovrebbe funzionare.



Vuoi sapere come iniziare a configurare AAPS? Dai un'occhiata alla sezione sulla [preparazione](../Getting-Started/PreparingForAaps.md).
