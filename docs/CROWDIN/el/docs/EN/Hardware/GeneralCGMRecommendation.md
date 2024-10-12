# Γενικές συστάσεις CGM

## CGM υγιεινή

Whichever CGM system you are using, if you are going to use blood based calibration, then there are some very clear rules you should apply, whether or not you are using DIY CGM software or the official apps.

-   Βεβαιωθείτε ότι τα χέρια και το κιτ είναι καθαρά.
-   Προσπαθήστε να βαθμονομήσετε όταν έχετε μια σειρά από κουκίδες με ένα επίπεδο βέλος (συνήθως είναι αρκετά 15-30 λεπτά)
-   Αποφύγετε τη βαθμονόμηση όταν τα επίπεδα γλυκόζης κινούνται προς τα επάνω ή προς τα κάτω.
-   Do “enough” calibrations – on official apps, you will be prompted for once or twice per day checks. On DIY systems you may not be, and should be careful about continuing without calibrations.
-   For sensors not requiring or not allowing calibration, check at least daily real blood sugar. AAPS will be as safe as your sensor readings are reliable.
-   Αν είναι δυνατόν, βαθμονομήστε με μερικές από τις μετρήσεις σας σε χαμηλότερο εύρος (4-5mmol / l ή 72-90mg / dl) και μερικές σε ελαφρώς υψηλότερο επίπεδο (7-9mmol / l ή 126-160mg / dl) καθώς αυτό παρέχει μια καλύτερη περιοχή για τη βαθμονόμηση σημείου / κλίσης.

## Ρυθμίζοντας τον αισθητήρα(G6)

When setting sensor, it is recommended not to press the inserter too firmly in order to avoid bleeding. The sensor contacts should not come into contact with blood.

After setting the sensor, the transmitter can be clicked into the sensor holder. Προσοχή! First click in the square side and then press down the round side.

(GeneralCGMRecommendation-troubleshooting)=
## Αντιμετώπιση προβλημάτων

### Προβλήματα σύνδεσης

Bluetooth connection may be disturbed by other nearby Bluetooth devices such as blood glucose meters, headsets, tablets or kitchen devices such as microwave ovens or ceramic hobs. In this case xdrip does not display any BG values. When bluetooth connection is restabilised the data is backfilled.

### Σφάλματα αισθητήρα

If recurring sensor errors occur try selecting a different body site to set your sensor. The sensor contacts should not come into contact with blood.

Συχνά ένα "σφάλμα αισθητήρα" μπορεί να διορθωθεί με άμεση ενυδάτωση και μασάζ γύρω από τον αισθητήρα!

### Παράξενες τιμές

You might try to change settings for noise blocking in xdrip (Settings - Inter-App Settings - Noise Blocking) i.e. "Block Very High noise and worse". See also [Smoothing BG data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Negative Sensor Age

![Negative sensor age](../images/Troubleshooting_SensorAge.png)

This occurs if there is either a double "CGM Sensor Insert" entry in [actions tab / menu](Config-Builder-actions) or a sensor insert with wrong date. Go to treatments tab \> careportal and delete the wrong entry.
