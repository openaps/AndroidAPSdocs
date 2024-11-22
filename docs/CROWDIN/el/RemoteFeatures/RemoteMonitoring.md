# Απομακρυσμένο σύστημα παρακολούθησης

![Monitoring children](../images/KidsMonitoring.png)

Το AndroidAPS προσφέρει αρκετές επιλογές για την απομακρυσμένη παρακολούθηση των παιδιών και επίσης επιτρέπει την αποστολή εντολών από απόσταση. Φυσικά, μπορείτε να χρησιμοποιήσετε το σύστημα απομακρυσμένης παρακολούθησης για να ακολουθήσετε τον σύντροφο ή τον φίλο σας.

## Λειτουργίες

- Η αντλία του παιδιού ελέγχεται από το τηλέφωνο του παιδιού χρησιμοποιώντας το AndroidAPS.
- Parents can remotely follow seeing all relevant data such as glucose levels, carbs on board, insulin on board etc. using **AAPSClient app** on their phone. Settings must be the same in AAPS and AAPSClient app.
- Οι γονείς μπορούν να έχουν συναγερμούς χρησιμοποιώντας την εφαρμογή **xDrip+ με λειτουργία ακόλουθου ** στο τηλέφωνο τους.
- Remote control of AAPS using [SMS Commands](../RemoteFeatures/SMSCommands.md) secured by two-factor authentication.
- Remote control through AAPSClient app is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see [release notes for Version 2.8.1.1](#important-hints-2-8-1-1) for further details.

## Εργαλεία και εφαρμογές για την εξ αποστάσεως παρακολούθηση

- [Nightscout ](https://nightscout.github.io/)στο πρόγραμμα περιήγησης στο web (κυρίως εμφάνιση δεδομένων)
- AAPSClient app is a stripped down version of AAPS capable of following somebody, making profile switches, setting TTs and entering carbs. There are 2 apps:  [AAPSClient & AAPSClient2 to download](https://github.com/nightscout/AndroidAPS/releases/). Η μόνη διαφορά μεταξύ τους είναι το όνομα της εφαρμογής. Με αυτόν τον τρόπο μπορείτε να εγκαταστήσετε την εφαρμογή δύο φορές στο ίδιο τηλέφωνο ώστε να μπορείτε να ακολουθήσετε δύο διαφορετικά άτομα/nightscouts με την εφαρμογή.
- Παρακολούθηση Dexcom αν χρησιμοποιείτε την αυθεντική εφαρμογή του Dexcom (μόνο τιμές γλυκόζης)
- [xDrip+](../CompatibleCgms/xDrip.md) in follower mode (mainly BG values and **alarms**)
- [Sugarmate](https://sugarmate.io/) ή [Spike](https://spike-app.com/) σε iOS (κυρίως τιμές γλυκόζης και συναγερμοί ****)
- Ορισμένοι χρήστες βρίσκουν ότι ένα πλήρες εργαλείο απομακρυσμένης πρόσβασης, όπως το [TeamViewer](https://www.teamviewer.com/) μπορεί είναι χρήσιμο για την προηγμένη απομακρυσμένη αντιμετώπιση προβλημάτων

## Επιλογές Smartwatch

Ένα smartwatch μπορεί να είναι ένα πολύ χρήσιμο εργαλείο για τη διαχείριση του AAPS με παιδιά. Μερικές διαφορετικές ρυθμίσεις είναι δυνατές:

- If AAPSClient is installed on the parents phone, the [AAPSClient WearOS app](https://github.com/nightscout/AndroidAPS/releases/) can be installed on a compatible smartwatch connected to the parent's phone. Αυτό θα εμφανίσει την τρέχουσα γλυκόζη αίματος, την κατάσταση του συστήματος και θα επιτρέψει την καταχώρηση υδατανθράκων, προσωρινών στόχων και τις αλλαγές προφίλ. ΔΕΝ θα επιτρέψει γευματική δόση ινσουλίνης από την εφαρμογή WearOS.
- Alternatively, the [AAPS WearOS app](../WearOS/WearOsSmartwatch.md) can be built and installed on a compatible smartwatch, connected to the kid's phone but worn by the parent. Σε αυτό περιλαμβάνονται όλες οι λειτουργίες που αναφέρονται παραπάνω, καθώς και η ικανότητα για γευματική δόση ινσουλίνης. Αυτό επιτρέπει στο γονέα να χορηγήσει ινσουλίνη χωρίς να χρειάζεται να πάρει το τηλέφωνο από πάνω από το παιδί.

## Πράγματα που πρέπει να σκεφτείτε

- Settings must be the same in AAPS and AAPSClient app.
- Λάβετε υπόψη το χρονικό κενό ανάμεσα στο βασικό χρήστη και τον ακόλουθο που δημιουργείται λόγω του χρόνου που χρειάζεται για να ανέβουν και να κατέβουν τα δεδομένα, όπως επίσης και το γεγονός ότι το βασικό τηλέφωνο με AAPS θα ανεβάσει τα δεδομένα μόνο αφού ξεκινήσει το κύκλωμα.
- What is your emergency plan for when remote control does not work (_i.e._ network problems or lost bluetooth connection)?  Always consider what will happen with **AAPS** if you suddenly can’t send a new command. **AAPS** overwrites the pump basal, ISF and ICR with the current profile values. Only use temporary profile switches (_i.e._ with a set time duration) if switching to a stronger insulin profile, in case your remote connection is disrupted. Then the pump will revert to the original profile when the time expires.