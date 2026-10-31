(github-build-apk)=

# Δημιουργία μέσω browser – Βήμα 4: Δημιουργία του APK

```{note}
Αυτό είναι το **Βήμα 4** της [Δημιουργίας μέσω browser](BrowserBuild.md). Ολοκληρώστε πρώτα το [Βήμα 3 – Εξουσιοδότηση του Google Drive](BrowserBuildGoogleDrive.md).
```

## Δημιουργία του APK του AAPS με το AAPS-CI του GitHub Actions
 - Κατάλληλο για τους περισσότερους χρήστες.

```{tab-set}

:::{tab-item} Wiki
### Εκτελέστε το workflow για να δημιουργήσετε το υπογεγραμμένο APK

1. Στο αντίγραφό σας του AndroidAPS στο GitHub, επιλέξτε Actions.
2. Ανοίξτε το All Workflows.
3. Επιλέξτε AAPS-CI

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. Κάντε κύλιση προς τα κάτω και πατήστε Run Workflow.

![Run Workflow](../images/update/CI/GitHubActions2.png)

5. Αφήστε το **Use workflow from** (κλάδος του workflow) στον κλάδο master. Στο **Select AAPS Version** (επιλογή έκδοσης AAPS), επιλέξτε την έκδοση του **AAPS** που θέλετε να δημιουργήσετε (συνήθως την πιο νέα). Επιλέξτε την [παραλλαγή (variant)](#browserbuild-variant) (fullRelease) και πατήστε Run workflow.



![Run Workflow](../images/update/CI/GitHubActions3.png)

6. Θα δείτε το μήνυμα Workflow run was successfully requested. Ανανεώστε τη σελίδα του browser και θα μπορείτε να παρακολουθείτε την πρόοδο του build. Όταν τελειώσει η ενέργεια, το AAPS CI θα δείχνει ένα πράσινο σημάδι ελέγχου (tick). Έχετε κάνει με επιτυχία build της ενημερωμένης έκδοσης του Android APS.

![Monitor Workflow](../images/update/CI/GitHubActions4.png)

### Εγκατάσταση του APK του AAPS

1. Ανοίξτε το Google Drive σας
2. Ανοίξτε τον φάκελο AAPS, επιλέξτε τον φάκελο της νέας έκδοσης και θα βρείτε και την έκδοση για το τηλέφωνο και την έκδοση για Android Wear.

![Google Drive Location](../images/update/CI/GitHubActions5.png)
:::

:::{tab-item} Βίντεο
<div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
  <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
    <iframe
      src="https://geo.dailymotion.com/player/x9rdwms.html?video=x9rdwms&loop=true&mute=true"
      loading="lazy"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</div>
:::  

```

## Επιλογή έκδοσης για το build

**Μόνο οι εκδόσεις του AAPS από 3.3.2.1 και νεότερες μπορούν να δημιουργηθούν με τη μέθοδο μέσω browser.**

Πατήστε **Select AAPS Version** (επιλογή έκδοσης AAPS) και διαλέξτε την έκδοση που θέλετε να δημιουργήσετε. Η πιο νέα έκδοση είναι στην κορυφή της λίστας.

![Λίστα Select AAPS Version](../images/Building-the-App/CI/BrowserBuildVariant2.png)

(browserbuild-variant)=

## Επιλογή παραλλαγής (variant) του build

*Σημείωση: δημιουργούνται αυτόματα και οι δύο εφαρμογές, για Android και για Android Wear.*

  - Επιλέξτε την παραλλαγή που χρειάζεστε:
    - fullRelease: Για κανονική χρήση με αντλία, με όλες τις λειτουργίες.
    - [aapsclientRelease, aapsclient2Release, aapsclient3Release](#RemoteControl_aapsclient): Για φροντιστές και γονείς (χρειάζεται [Nightscout](../SettingUpAaps/Nightscout.md)). Το `aapsclient3Release` δημιουργεί το **AAPSClient3**, που υπάρχει από την έκδοση 4.0 του **AAPS** (δείτε [Σχετικά με τα AAPSClient, AAPSClient2 και AAPSClient3](#remotecontrol-aapsclient-versions)).
    - pumpcontrolRelease: Για να αντικαταστήσετε την εφαρμογή/το χειριστήριο της αντλίας σας

![](../images/Building-the-App/CI/BrowserBuildVariant3.png)

Οι παραλλαγές που τελειώνουν σε “Debug” σημαίνουν ότι το APK θα δημιουργηθεί σε λειτουργία debug, που είναι χρήσιμη στους προγραμματιστές για την αντιμετώπιση προβλημάτων.

<!-- If you want to test the items in a pull request has been moved to dev page /AdvancedOptions/DevBranch.md -->

----

Όταν το build πετύχει, το apk αποθηκεύεται στο Google Drive σας. Συνεχίστε με τη [Μεταφορά και εγκατάσταση του AAPS στο τηλέφωνό σας](TransferringAndInstallingAaps.md).

```{note}
Από τον Σεπτέμβριο του 2026, η [επαλήθευση προγραμματιστών Android](#android-developer-verification) της Google μπορεί να εμποδίζει την εγκατάσταση του APK με πάτημα στο αρχείο, ανάλογα με τη χώρα σας. Δωρεάν λύσεις εξηγούνται σε εκείνη τη σελίδα.
```

Αν το build αποτύχει, πρώτα [βρείτε τι πήγε στραβά στο log του build](#aaps-ci-read-the-logs) και μετά δείτε τη σελίδα [Δημιουργία μέσω browser: αντιμετώπιση προβλημάτων](../GettingHelp/BrowserBuildTroubleshooting.md). Για να προσθέσετε ένα συγκεκριμένο commit στο build σας, δείτε [cherry-pick ενός commit](#github-cherry-pick).
