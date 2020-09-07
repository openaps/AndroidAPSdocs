# Στόχοι ρυθμού

## Τι είναι οι Στόχοι ρυθμού και πού μπορώ να τα ορίσω και να τα διαμορφώσω;

Με το "Στόχοι ρυθμού" (ή το σύντομο ΣΡ), μπορείτε να αλλάξετε τον στόχο γλυκόζης αίματος για μια συγκεκριμένη χρονική περίοδο. Καθώς αυτά απαιτούνται ως επί το πλείστον για δραστηριότητα, υπογλυκαιμίας (Θεραπεία υδατανθράκων) ή τρώγοντας σύντομα, μπορείτε να διαμορφώσετε τα προεπιλεγμένα. Για να τις ρυθμίσετε, μπορείτε να μεταβείτε στο μενού στη δεξιά γωνία της κορυφής και να μεταβείτε στις Προτιμήσεις-> Άλλο-> Προεπιλεγμένοι στόχοι-στόχοι.

![Ορίστε προεπιλεγμένους προσωρινούς στόχους](../images/TempTarget_Default.png)

Για να ορίσετε "Προεπιλεγμένες τιμές-Προσωρινοί-Στόχοι", μπορείτε να πατήσετε παρατεταμένα τον στόχο σας στη δεξιά γωνία στην κορυφή της καρτέλας επισκόπησης ή στο πορτοκαλί κουμπί "Υδατάνθρακες". To manually set a [“Custom Temp-Target”](../Usage/temptarget#custom-temp-target) (BG value and/or duration) use “Custom“ after long-pressing your target in the top right corner or use the “Temporary Target“ button in the [actions tab / menu](../Configuration/Config-Builder#actions).

![Ορίστε προσωρινό στόχο](../images/TempTarget_Set2.png)

## Υπογλυκαιμικός Ρυθμός-Στόχος

Αυτό μπορεί να θεωρηθεί ως ο πιο σημαντικός Ρυθμός -Στόχος. There are several reasons for it:

1. Realizing you will go low: Usually, the Loop should handle it, but sometimes you can see better in advance than the loop, so the loop can react faster when it targets a higher blood glucose value.
2. When you eat hypo treatments carbs, your blood glucose will rise very fast. The loop will correct against the rising or even give SMBs if enabled. A "Hypo Temp-Target" can prevent that. 
3. (advanced, [objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)): You can enable “High Temp-Targets raises sensitivity” for Temp-Targets of 100mg/dl or 5.5mmol/l or higher in OpenAPS SMB, so AndroidAPS is more sensitive.
4. (advanced, [objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)): You can deactivate “SMB with high temp target”, so that even if you have COB > 0, "SMB with Temp-Target" or "SMB always" enabled and OpenAPS SMB active, AndroidAPS won’t give SMBs while high temp targets are active. 

Σημείωση: Εάν εισαγάγετε υδατάνθρακες με το κουμπί υδατάνθρακες και η γλυκόζη του αίματός σας είναι μικρότερη από 72mg / dl ή 4mmol / l, ο Υπογλυκαιμικός Ρυθμός-Στόχος ενεργοποιείται αυτόματα.

## Δραστηριότητα Ρυθμού-Στόχου

Πριν και κατά τη διάρκεια της δραστηριότητας, ίσως θελήσετε να έχετε έναν υψηλότερο στόχο για να αποφύγετε το χαμηλό σάκχαρο. Για να απλοποιήσετε τη ρύθμιση του Ρυθμού-Στόχου, μπορείτε να διαμορφώσετε μια προεπιλεγμένη "Δραστηριότητα Ρυθμού-Στόχου". Based on DIA, IOB and your experience you might want to set TT prior to activity. See also [sports section in FAQ](../Getting-Started/FAQ#sports).

Advanced, [objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb): The advantages about “Activity Temp-Target”, is that you can enable “High Temp-Targets raises sensitivity” for Temp-Targets higher or equal 100mg/dl or 5.5mmol/L in OpenAPS SMB. Στη συνέχεια, το AndroidAPS είναι πιο ευαίσθητο. Μερικοί άνθρωποι κάνουν αντ 'αυτού μια αλλαγή προφίλ πριν / παράλληλα με την δραστηριότητα ΡΣ, αλλά όλοι είναι διαφορετικοί. Εάν το "SMB με υψηλό Ρυθμού-Στόχου" είναι απενεργοποιημένο, το AndroidAPS δεν θα χρησιμοποιήσει SMB, ακόμη και με COB> 0, "SMB με Ρυθμού-Στόχου" ή "SMB πάντα" ενεργοποιημένο και OpenAPS SMB ενεργό.

## Τρώγοντας νωρίς Ρυθμός-Στόχος

Αν γνωρίζετε ότι θέλετε να φάτε σύντομα, μπορείτε να ενεργοποιήσετε αυτό το Ρυθμός-Στόχος, οπότε υπάρχει ήδη περισσότερο IOB πριν από το φαγητό. Ειδικά για όσους δεν κάνουν προληπτική χρήση bolus, μπορεί να είναι μια καλή εναλλακτική λύση για να έχετε ήδη τη γλυκόζη του αίματος σε χαμηλότερο στόχο. Μπορείτε να διαβάσετε περισσότερα σχετικά με τη λειτουργία πρόωρης κατανάλωσης φαγητού στο άρθρο [ «Πώς να κάνετε» να φάτε σύντομα «λειτουργία» ](https://diyps.org/2015/03/26/how-to-do-eating-soon-mode-diyps-lessons-learned/) ή [ εδώ ](https://diyps.org/tag/eating-soon-mode/).

Advanced, [objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb): If you use OpenAPS SMB and have “Low temptarget lowers sensitivity”, AndroidAPS works a little bit more aggressive. Η απαίτηση είναι ο Ρυθμός-Στόχος να είναι μικρότερος από 100mg / dl ή 5.5mmol / l για αυτή την επιλογή.

## Διαμορφόμενος Ρυθμός-Στόχος

Μερικές φορές, θέλετε απλώς να έχετε έναν στόχο ρυθμό διαφορετικό από τους προεπιλεγμένους. Μπορείτε να ορίσετε ένα πατώντας μακροπρόθεσμα τον στόχο (εύρος) στη δεξιά γωνία της επισκόπησης ή στο κουμπί "Δράση".

![Ορίστε ρυθμό στόχου μέσω της καρτέλας Δράσης](../images/TempTarget_ActionTab.png)