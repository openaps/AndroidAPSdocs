# Ρυθμίσεις Juggluco

Αν δεν το έχετε ήδη ρυθμίσει, κατεβάστε το [Juggluco](https://www.juggluco.nl/Juggluco/download.html).

Ακολουθήστε τις [οδηγίες](https://www.juggluco.nl/Jugglucohelp/introhelp.html) για να συνδέσετε τον αισθητήρα σας.

## Βασικές ρυθμίσεις για όλα τα συστήματα CGM

### Απενεργοποιήστε την αποστολή στο Nightscout

Μην αφήνετε καμία άλλη εφαρμογή να στέλνει δεδομένα (γλυκόζη αίματος και θεραπείες) στο Nightscout.

Απενεργοποιήστε στο Juggluco κάθε ενεργή αποστολή δεδομένων στο Nightscout.

![Απενεργοποίηση αποστολής στο Nightscout](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Juggluco προς AAPS

Το Juggluco μπορεί να στέλνει τη γλυκόζη αίματος απευθείας στο AAPS, ώστε τα SMB να επιτρέπονται πάντα, αν χρησιμοποιείτε [αξιόπιστο αισθητήρα](#GettingStarted-TrustedBGSource).

Με αισθητήρα Libre 2/2+/3/3+, οι μετρήσεις κάθε λεπτού θα στέλνονται στο AAPS, αλλά το AAPS δεν θα κάνει υπολογισμούς κάθε λεπτό.

Ενεργοποιήστε το xDrip broadcast στο Juggluco (μην ενεργοποιήσετε το Patched Libre), επιβεβαιώστε και αποθηκεύστε τις πληροφορίες πακέτου του AAPS. Επιλέξτε την πηγή δεδομένων BG xDrip στο AAPS.

Εφαρμόστε επαρκή [εξομάλυνση](./SmoothingBloodGlucoseData.md) στο AAPS.

![Juggluco προς AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## Juggluco προς xDrip

Το Juggluco μπορεί να στέλνει τη γλυκόζη αίματος στο xDrip, το οποίο μετά τη στέλνει στο AAPS.

Ενεργοποιήστε το Patched Libre στο Juggluco (μην ενεργοποιήσετε το xDrip broadcast), επιβεβαιώστε και αποθηκεύστε τις πληροφορίες πακέτου του dexdrip. Επιλέξτε την πηγή δεδομένων BG xDrip στο AAPS.

Apply sufficient [smoothing](./SmoothingBloodGlucoseData.md) in AAPS if necessary. When using a Libre 2/2+/3/3+ sensor, xDrip will average the minute-by-minute readings to 5-minute readings and [also smooth](#libre2-value-smoothing-raw-values) them.

![Juggluco προς xDrip](../images/juggluco/Juggluco-xDrip+.png)
