# Πρώτα η ασφάλεια

**When you decide to build your own artificial pancreas, it's always important to think about security and safety, and to understand the impact of all your actions**

## Γενικά

- AndroidAPS is a just a tool to help you manage diabetes, it is not a fully automated system you can install and forget!
- Do not assume that AndroidAPS will never make mistakes. Αυτή η συσκευή αναλαμβάνει τον έλεγχο της χορήγησης ινσουλίνης: Παρακολουθήστε τη συνεχώς, κατανοήστε πώς λειτουργεί και μάθετε πώς να ερμηνεύετε τις ενέργειές της.
- Remember that, once paired, the phone can instruct the pump to do anything. Χρησιμοποιήστε μόνο αυτό το τηλέφωνο για το AndroidAPS και, εάν χρησιμοποιείται από ένα παιδί, να του μιλήσετε ώστε να προσέχει το κινητό. Μην εγκαταστήσετε περιττές εφαρμογές ή παιχνίδια (!!!) που θα μπορούσαν να εισάγουν κακόβουλο λογισμικό, όπως trojans, ιούς ή bots που θα μπορούσαν να παρεμβληθούν στο σύστημά σας.
- Install all security updates provided by your phone manufacturer and Google.
- You might also need to change your diabetes habits as you change your therapy by using a closed loop system. Π.χ. μερικοί άνθρωποι αναφέρουν ότι χρειάζονται λιγότερες θεραπείες υπογλυκαιμίας, καθώς το AndroidAPS έχει ήδη μειώσει την ινσουλίνη.

## Επικοινωνία με SMS

- AndroidAPS allows you to control a child's phone remotely via text message. Αν ενεργοποιήσετε αυτό την επικοινωνία με SMS, θυμηθείτε πάντα ότι το τηλέφωνο που έχει ρυθμιστεί για να δώσει απομακρυσμένες εντολές μπορεί να κλαπεί. Συνεπώς, πάντα να το προστατεύετε τουλάχιστον από ένα κωδικό PIN.
- AndroidAPS will also inform you by text message if your remote commands, such as a bolus or a profile change, have been carried out. Συνιστάται να το ρυθμίσετε έτσι ώστε τα κείμενα επιβεβαίωσης να αποστέλλονται σε τουλάχιστον δύο διαφορετικούς αριθμούς τηλεφώνου σε περίπτωση κλοπής ενός από τα τηλέφωνα λήψης.

## AndroidAPS can also be used by blind people

On Android devices TalkBack is part of the operating system. It is a program for screen orientation via voice output. With TalkBack you can operate your smartphone as well as AndroidAPS blind.

We users create the AndroidAPS app ourselves with Android Studio. Many use Microsoft Windows for this purpose, where there is the Screenreader analogous to TalkBack. Since Android Studio is a Java application, the "Java Access Bridge" component must be enabled in the Control Panel. Otherwise, the screen reader of the PC will not speak in Android Studio.

To do this, please proceed as follows:

- Press WINDOWSTASTE and enter "Control Panel" in the search field, open with Enter. It opens: "All Control Panel Items".
- Press the letter C to get to "Center for Ease of Use", open with Enter.
- Then open "Use computer without a screen" with Enter.
- There, at the bottom, you will find the checkbox "Enable Java Access Bridge", select it.
- Done, just close the window! The screen reader should work now.

```{note}
**IMPORTANT SAFETY NOTICE**

The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. It is critically important that you only use a tested, fully functioning FDA or CE approved insulin pump and CGM for closing an automated insulin dosing loop. Hardware or software modifications to these components can cause unexpected insulin dosing, causing significant risk to the user. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

Additionally, it is equally important to only use original supplies such as inserters, cannulas and insulin containers approved by the manufacturer for use with your pump or CGM. Using untested or modified supplies can cause CGM inaccuracy and insulin dosing errors. Insulin is highly dangerous when misdosed - please do not play with your life by hacking with your supplies.

Last not least, you must not take SGLT-2 inhibitors (gliflozins) as they incalculably lower blood sugar levels.  The combination with a system that lowers basal rates in order to increase BG is especially dangerous as due to the gliflozin this rise in BG might not happen and a dangerous state of lack of insulin can happen.
```
