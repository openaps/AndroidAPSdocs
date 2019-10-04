# Αντλίες Medtronic

**>>>> Το πρόγραμμα οδήγησης της αντλίας Medtronic δεν είναι ακόμα μέρος του master AndroidAPS. Θα είναι διαθέσιμο στην επόμενη κύρια έκδοση. <<<<**

* * *

Λειτουργεί μόνο με παλαιότερες αντλίες Medtronic (βλ. λεπτομέρειες παρακάτω). Δε λειτουργεί με την Medtronic 640G και 670G.

* * *

Ενώ το πρόγραμμα οδήγησης της Medtronic δοκιμάστηκε με καλή δοκιμαστική ομάδα, εξακολουθεί να θεωρείται λογισμικό beta, πράγμα που σημαίνει ότι έως ότου ένα μεγαλύτερο κοινό το δοκιμάσει για μεγαλύτερο χρονικό διάστημα, θα χρειαστεί να ενεργοποιήσετε τη λειτουργία Engineering, για να μπορείτε να δείτε τον οδηγό στο AndroidAPS.

* * *

## Απαιτήσεις υλικού και λογισμικού

- ** Τηλέφωνο: ** Ο οδηγός Medtronic θα πρέπει να λειτουργεί με οποιοδήποτε τηλέφωνο που υποστηρίζει BLE. ** ΣΗΜΑΝΤΙΚΟ: Ενώ το πρόγραμμα οδήγησης λειτουργεί σωστά σε όλα τα τηλέφωνα, δεν επιτρέπεται η ενεργοποίηση / απενεργοποίηση του Bluetooth (αυτό απαιτείται όταν χάσετε τη σύνδεση με το RileyLink και το σύστημα δεν μπορεί να ανακτήσει αυτόματα - συμβαίνει κατά διαστήματα). Έτσι πρέπει να πάρετε συσκευή με Android 6.0 - 8.1, στη χειρότερη περίπτωση μπορείτε να εγκαταστήσετε LinegaeOS 15.1 (απαιτείται 15.1 ή χαμηλότερη) στο τηλέφωνό σας. Εξετάζουμε το πρόβλημα με το Android 9, αλλά μέχρι στιγμής δεν έχουμε βρει λύση (φαίνεται ότι λειτουργεί σε μερικά μοντέλα και όχι σε άλλα).**
- ** RileyLink / Gnarl: ** Για επικοινωνία με την αντλία χρειάζεστε συσκευή που μετατρέπει τις εντολές BT από το τηλέφωνο σε RF εντολές που κατανοεί η αντλία. Η συσκευή που λέγεται RileyLink (μπορείτε να την πάρετε εδώ [ getrileylink.org ](https://getrileylink.org/)). Χρειάζεστε σταθερή έκδοση της συσκευής, η οποία είναι για τα παλαιότερα μοντέλα firmware 0.9 (παλαιότερες εκδόσεις μπορεί να μην λειτουργούν σωστά) ή για νεώτερα μοντέλα 2.2 (υπάρχουν επιλογές για αναβάθμιση διαθέσιμες στην τοποθεσία RL). Εάν νιώθετε περιπετειώδης, μπορείτε επίσης να δοκιμάσετε το Gnarl ([ εδώ ](https://github.com/ecc1/gnarl)), το οποίο είναι είδος του RileyLink-clone. 
- ** Αντλία: ** Το πρόγραμμα οδήγησης λειτουργεί μόνο με τα ακόλουθα μοντέλα και εκδόσεις υλικολογισμικού: 
    - 512/712
    - 515/715
    - 522/722
    - 523/723 (firmware 2.4A ή χαμηλότερη)
    - 554/754 Έκδοση ΕΕ (firmware 2.6A ή χαμηλότερη)
    - 554/754 Έκδοση Καναδά (firmware 2.7A ή χαμηλότερη)

## Διαμόρφωση της αντλίας

- **Enable remote mode on Pump** (Utilities -> Remote Options, Select Yes, and on next screen do Add ID and add dummy id (111111 or something). Πρέπει να έχετε τουλάχιστον ένα αναγνωριστικό στη λίστα απομακρυσμένων αναγνωριστικών. Αυτές οι επιλογές ενδέχεται να φαίνονται διαφορετικά σε διαφορετικό μοντέλο αντλίας. Αυτό το βήμα είναι σημαντικό, γιατί όταν ρυθμιστεί, η αντλία θα ακούει πιο συχνά για απομακρυσμένη επικοινωνία.
- ** Ρυθμίστε το μέγιστο βασικό** στην αντλία σας στο "εισαγωγή μεγίστου βασικού στο προφίλ STD" * 4 (αν θέλετε να έχετε 400% TBR ως μέγιστο). Αυτός ο αριθμός πρέπει να είναι κάτω από 35 (όπως μπορείτε να δείτε στην αντλία).
- ** Ορισμός μέγιστης δόσης ** στην αντλία σας (το μέγιστο είναι 25)
- ** Ρυθμίστε το προφίλ σε STD **. Αυτό θα είναι το μοναδικό προφίλ που θα χρησιμοποιήσουμε. Μπορείτε επίσης να απενεργοποιήσετε.
- ** Ορίστε τον τύπο TBR ** στο Απόλυτο (όχι επί της εκατό)

## Διαμόρφωση του τηλεφώνου / AndroidAPS

- ** Μην αντιστοιχίζετε το RileyLink με το τηλέφωνό σας. ** Αν έχετε αντιστοιχίσει το RileyLink, τότε το AndroidAPS δεν θα το βρει στη διαμόρφωση.
- Απενεργοποιήστε την Αυτόματη περιστροφή στο τηλέφωνό σας (σε ορισμένες συσκευές Αυτόματη περιστροφή επανενεργοποιεί τις περιόδους λειτουργίας BT, κάτι που δεν είναι κάτι που θα θέλαμε).
- Μπορείτε να ρυθμίσετε την αντλία στο AndroidAPS με δύο τρόπους: 

1. Χρήση του Οδηγού (σε νέα εγκατάσταση)
2. Directly in Config tab (Cog icon on Medtronic driver)

If you do new install you will be thrown directly into wizard. Sometimes if your BT connection is not working fully (unable to connect to pump), you might not be able to complete configuration. In such case select virtual pump and after wizard is finished, you can go with option 2, which will bypass pump detection.

![MDT Settings](../images/Medtronic01.png)

You need to set following items: (see picture above)

- **Pump Serial Number**: You can find that on back side, entry SN. You need to get only number, your serial is 6 numbers.
- **Pump Type**: Which pump type you have (i.e. 522). 
- **Pump Frequency**: According to pump frequency there were two versions of Medtronic pump made (if you are not sure what frequency your pump uses, look at [FAQ](../Configuration/MedtronicPump#faq)): 
    - for US & Canada, frequency used is 916 Mhz
    - for Worldwide, frequency used is 868 Mhz
- **Max Bolus on Pump (U)** (in an hour): This needs to be set to same as on the pump. It limits how much insulin you can Bolus. If you go over this, Bolus won't be set and error will be returned. Max that can be used is 25, please set correct value for yourself here so that you don't overdose.
- **Max Basal on Pump (U/h)**: This needs to be set to same as on the pump. It limits how much basal you can get in an hour. So for example, if you want to have max TBR set to 500% and highest of your Basal patterns is 1.5 U, then you would need to set Max Basal to at least 7.5. If this setting is wrong (for example, if one of your basal pattern would go over this value, pump would return error).
- **Delay before Bolus is started (s)**: This is delay before bolus is sent to pump, so that if you change your mind you can cancel it. Canceling bolus when bolus is running is not supported by pump (if you want to stop bolus when running, you have to suspend pump and then resume).
- **Medtronic Encoding**: This is setting which determines, if 4b6b encoding that Medtronic devices do will be done in AndroidAPS or on RileyLink. If you have a RileyLink with 2.x firmware, default value will be to use Hardware encoding (= done by RileyLink), if you have 0.x firmware this setting will be ignored.
- **Battery Type (Power View)**: If you want to see battery power in your pump, you need to select type of battery you use (currently supported Lithium or Alkaline), this will in turn change display to display calculated percent and volts.
- **RileyLink Configuration**: This will find your RileyLink/GNARL device.

## MEDTRONIC (MDT) Tab

![MDT Tab](../images/Medtronic02.png)

On pump tab you can see several lines that are showing pumps (and connections) current status.

- **RileyLink Status**: It shows status of RileyLink connection. Phone should be connected to RileyLink all the time.
- **Pump Status**: Status of pump connection, this can have several values, but mostly we will see sleep icon (when pump connection is not active), when command is beeing executed, we might see "Waking Up", which is AAPS trying to make connection to your pump or description of any command that might be running on pump (ex.: Get Time, Set TBR, etc.).
- **Battery**: Shows battery status depening on your configuration. This can be simple icon showing if battery is empty or full (red if battery is getting critical, under 20%), or percent and voltage.
- **Last connection**: Time when last connection to pump was successful.
- **Last Bolus**: When last bolus was given.
- **Base Basal Rate**: This is the base basal rate that runs on pump at this hour.
- **Temp basal**: Temp basal that is running or empty.
- **Reservoir**: How much insulin is in reservoir (updated at least every hour).
- **Errors**: Error string if there is problem (mostly shows if there is error in configuration).

On lower end we have 3 buttons:

- **Refresh** is for refreshing state. This should be used only after connection was not present for long time, as this action will reset data about pump (retrieve history, get/set time, get profile, get battery status, etc).
- **Pump History**: Shows pump history (see [bellow](../Configuration/MedtronicPump#pump-history))
- **RL Stats**: Show RL Stats (see [bellow](../Configuration/MedtronicPump#rl-status-rileylink-status))

## Pump History

![Pump History Dialog](../images/Medtronic03.png)

Pump history is retrieved every 5 minutes and stored localy. We keep history only for last 24 hours, so older entries are removed when new are added. This is simple way to see the pump history (some entries from pump might not be displayed, because they are not relevant - for example configuration of functions that are not used by AndroidAPS).

## RL Status (RileyLink Status)

![RileyLink Status - Settings](../images/Medtronic04.png) ![RileyLink Status - History](../images/Medtronic05.png)

Dialog has two tabs:

- **Settings**: Shows settings about RileyLink: Configured Address, Connected Device, Connection Status, Connection Error and RileyLink Firmware versions. Device Type is always Medtronic Pump, Model would be your model, Serial number is configured serial number, Pump Frequency shows which frequency you use, Last Frequency is last frequency used.
- **History**: Shows communication history, items with RileyLink shows state changes for RileyLink and Medtronic shows which commands were sent to pump.

## Actions

When Medtronic driver is selected, 3 possible actions can be added to Actions Tab:

- **Wake and Tune Up** - If you see that your AndroidAPS hasn't contacted your pump in a while (it should contact it every 5 minutes), you can force Tune Up. This will try to contact your pump, by searching all sub frequencies on which Pump can be contacted. If it finds one it will set it as your default frequency. 
- **Reset RileyLink Config** - If you reset your RileyLink/GNARL, you need to use this action, so that device can be reconfigured (frequency set, frequency type set, encoding configured).
- **Clear Bolus Block** - When you start bolus, we set Bolus Block, which prevents any commands to be issued to pump. If you suspend your pump and resume (to cancel bolus), you can then remove that block. Option is only there when bolus is running... 

## Important notes

### Logging

Since Medtronic driver is very new, you need to enable logging, so that we can debug and fix problems, if they should arise. Click on icon on upper left corner, select Maintainance and Log Settings. Options Pump, PumpComm, PumpBTComm need to be checked.

### RileyLink/GNARL

When you restart RileyLink or GNARL, you need to either do new TuneUp (action "Wake and Tune Up") or resend communication parameters (action "Reset RileyLink Config"), or else communication will fail.

### CGMS

Medtronic CGMS is currently NOT supported.

### Manual use of pump

You should avoid manually doing treatments things on your pump. All commands (bolus, TBR) should go through AndroidAPS, but if it happens that you will do manual commands, do NOT run commands with frequency less than 3 minutes (so if you do 2 boluses (for whatever reason), second should be started at least 3 minutes after first one).

## Timezone changes and DST (Daylight Saving Time) or Traveling with Medtronic Pump and AndroidAPS

Important thing to remember is that you should never disable loop when you are traveling (unless your CGMS can't do offline mode). AAPS will automatically detect Timezone changes and will send command to Pump to change time, when time on Phone is changed.

Now if you travel to East and your TZ changes with adding hours (ex. from GMT+0 to GMT+2), pump history won't have problem and you don't have to worry... but if you travel to West and your TZ changes by removing hours (GMT+2 to GMT-0), then sychronization might be little iffy. In clear text, that means that for next x hours you will have to be careful, because your IOB, might be little weird.

We are aware of this problem, and we are already looking into possible solution (see https://github.com/andyrozman/RileyLinkAAPS/issues/145), but for now, have that info in mind when traveling.

## FAQ

### Can I see the power of RileyLink/GNARL?

No. At the moment none of this devices support this and it probably won't even in the future.

### Is GNARL full replacement for RileyLink?

Yes. Author of GNARL added all functions used by Medtronic driver. All Medtronic communication is supported (at time of the writing (June/2019). GNARL can't be used for Omnipod communication. Downside of GNARL is that you have to build it yourself, and you have to have compatible version of hardware.

**Note from author:** Please note that the GNARL software is still experimental and lightly tested, and should not be considered as safe to use as a RileyLink.

### Where can I get RileyLink or GNARL?

Like mentioned before you can get devices here:

- RileyLink - You can get device here - [getrileylink.org](https://getrileylink.org/).
- GNARL - You can get info here, but device needs to be ordered elsewhere ([github.com/ecc1/gnarl](https://github.com/ecc1/gnarl)).

### What to do if I loose connection to RileyLink and/or pump?

1. Run "Wake Up and Tune" action, this will try to find right frequency to communicate with pump.
2. Disable Bluetooth, wait 10s and enable it again. This will force reconnecting to RileyLink.
3. Reset RileyLink, after you do that do not forget to run "Reset RileyLink Config" action.
4. Try 3 and 2 together.
5. Reset RileyLink and reset phone.

### How to determine what Frequency my pump uses

![Pump Model](../images/Medtronic06.png)

If you turn your pump around in first line on right side you will see special 3 letter code. First two letters determine frequency type and last one determines color. Here are possible values for Frequency:

- NA - North America (in frequency selection you need to select "US & Canada (916 MHz)")
- CA - Canada (in frequency selection you need to select "US & Canada (916 MHz)")
- WW - Worldwide (in frequency selection you need to select "Worldwide (868 Mhz)")