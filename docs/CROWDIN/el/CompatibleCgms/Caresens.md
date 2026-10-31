# CareSens

Υπάρχουν διάφοροι τρόποι για να χρησιμοποιήσετε τα δεδομένα του CareSens με το **AAPS**:

- xDrip
- Juggluco

**Σημείωση:** Δεν χρειάζεστε την εφαρμογή παρακολούθησης Sens365 για τη σύνδεση με το AAPS.

## 1. xDrip

1. Εγκαταστήστε και ρυθμίστε την επίσημη εφαρμογή CareSens.
2. Στην εφαρμογή CareSens, πηγαίνετε στις settings -> Manage Data and Connections -> ενεργοποιήστε τον διακόπτη xDrip. Αν το προτιμάτε, απενεργοποιήστε τις συνδέσεις δεδομένων με τα CareLevo, DIA:CONN, CloudLoop κ.λπ. στο "others".

![Συνδέσεις δεδομένων της εφαρμογής CareSens](../images/eversenseapp-dataconnections.png)


2. Εγκαταστήστε το xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. Στο xDrip, πηγαίνετε στις settings -> hardware data source και επιλέξτε `Companion App` ως πηγή δεδομένων.
4. Στο **AAPS**, επιλέξτε xDrip στη [**Διαμόρφωση → Πηγή BG**](#Config-Builder-bg-source).


## 2. Juggluco

1. Εγκαταστήστε την εφαρμογή Juggluco.
2. Στο Juggluco, ανοίξτε το αριστερό μενού και επιλέξτε `Photo`
3. Σαρώστε τον κωδικό QR στη συσκευασία του αισθητήρα.
4. Στο αριστερό μενού -> settings -> exchange data βεβαιωθείτε ότι το xDrip broadcast είναι ενεργοποιημένο.
5. Στο **AAPS**, επιλέξτε xDrip στη [**Διαμόρφωση → Πηγή BG**](#Config-Builder-bg-source).
