# Πρώτα η ασφάλεια

**When you decide to build your own artificial pancreas, it's always important to think about security and safety, and to understand the impact of all your actions**

## Γενικά

- AAPS is a just a tool to help you manage diabetes, it is not a fully automated system you can install and forget!
- Do not assume that AAPS will never make mistakes. Αυτή η συσκευή αναλαμβάνει τον έλεγχο της χορήγησης ινσουλίνης: Παρακολουθήστε τη συνεχώς, κατανοήστε πώς λειτουργεί και μάθετε πώς να ερμηνεύετε τις ενέργειές της.
- Να θυμάστε ότι, μόλις συνδεθεί, το τηλέφωνο μπορεί να δώσει εντολή στην αντλία να κάνει οτιδήποτε. Only use this phone for AAPS and, if being used by a child, essential communications. Μην εγκαταστήσετε περιττές εφαρμογές ή παιχνίδια (!!!) που θα μπορούσαν να εισάγουν κακόβουλο λογισμικό, όπως trojans, ιούς ή bots που θα μπορούσαν να παρεμβληθούν στο σύστημά σας.
- Εγκαταστήστε όλες τις ενημερώσεις ασφαλείας που παρέχονται από τον κατασκευαστή του τηλεφώνου σας και το Google.
- Μπορεί επίσης να χρειαστεί να αλλάξετε τις συνήθειες του διαβήτη καθώς αλλάζετε τη θεραπεία σας χρησιμοποιώντας ένα σύστημα κλειστού κυκλώματος. Π.χ. some people report, they need less hypo treatments as AAPS has already reduced insulin.

## Επικοινωνία με SMS

- Το AAPS σας επιτρέπει να ελέγχετε εξ αποστάσεως το τηλέφωνο ενός παιδιού μέσω ενός μηνύματος SMS. Αν ενεργοποιήσετε αυτό την επικοινωνία με SMS, θυμηθείτε πάντα ότι το τηλέφωνο που έχει ρυθμιστεί για να δώσει απομακρυσμένες εντολές μπορεί να κλαπεί. Συνεπώς, πάντα να το προστατεύετε τουλάχιστον από ένα κωδικό PIN.
- Το AndroidAPS θα σας ενημερώσει επίσης με μήνυμα κειμένου , εάν έχουν πραγματοποιηθεί οι απομακρυσμένες εντολές σας, όπως μια γευματική δόση ή μια αλλαγή προφίλ. Συνιστάται να το ρυθμίσετε έτσι ώστε τα κείμενα επιβεβαίωσης να αποστέλλονται σε τουλάχιστον δύο διαφορετικούς αριθμούς τηλεφώνου σε περίπτωση κλοπής ενός από τα τηλέφωνα λήψης.

(Safety-first-aaps-can-also-be-used-by-blind-people)=
## AAPS can also be used by blind people

On Android devices TalkBack is part of the operating system. It is a program for screen orientation via voice output. With TalkBack you can operate your smartphone as well as AAPS blind.

We users create the AAPS app ourselves with Android Studio. Many use Microsoft Windows for this purpose, where there is the Screenreader analogous to TalkBack. Since Android Studio is a Java application, the "Java Access Bridge" component must be enabled in the Control Panel. Otherwise, the screen reader of the PC will not speak in Android Studio.

To do this, please proceed as follows:

- Press WINDOWSTASTE and enter "Control Panel" in the search field, open with Enter. It opens: "All Control Panel Items".
- Press the letter C to get to "Center for Ease of Use", open with Enter.
- Then open "Use computer without a screen" with Enter.
- There, at the bottom, you will find the checkbox "Enable Java Access Bridge", select it.
- Done, just close the window! The screen reader should work now.

```{note}
**IMPORTANT SAFETY NOTICE**

The foundation of AAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. Είναι πολύ σημαντικό να χρησιμοποιείτε μόνο μια δοκιμασμένη, πλήρως λειτουργική FDA ή CE εγκεκριμένη αντλία ινσουλίνης και CGM για το κλείσιμο ενός αυτοματοποιημένου κυκλώματος δοσολογίας ινσουλίνης. Οι τροποποιήσεις υλικού ή λογισμικού σε αυτά τα εξαρτήματα μπορεί να προκαλέσουν απροσδόκητη δόση ινσουλίνης, προκαλώντας σημαντικό κίνδυνο για τον χρήστη. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AAPS system.

Επιπλέον, είναι εξίσου σημαντικό να χρησιμοποιείτε μόνο αυθεντικά προϊόντα όπως εισαγωγείς, κάνουλα και δοχεία ινσουλίνης εγκεκριμένα από τον κατασκευαστή για χρήση με την αντλία ή το CGM. Η χρήση μη δοκιμασμένων ή τροποποιημένων αναλωσίμων μπορεί να προκαλέσει ανακρίβεια CGM και σφάλματα δοσολογίας ινσουλίνης. Η ινσουλίνη είναι εξαιρετικά επικίνδυνη όταν δίνετε σε λάθος δοσολογία - παρακαλώ μην παίζετε με τη ζωή σας με μη εγκεκριμένες προμήθειες.

Last not least, you must not take SGLT-2 inhibitors (gliflozins) as they incalculably lower blood sugar levels.  The combination with a system that lowers basal rates in order to increase BG is especially dangerous as due to the gliflozin this rise in BG might not happen and a dangerous state of lack of insulin can happen.
```
