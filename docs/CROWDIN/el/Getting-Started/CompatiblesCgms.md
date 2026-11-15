# Συμβατά CGM

Αυτή η ενότητα δίνει μια σύντομη επισκόπηση όλων των **CGM/FGM** που είναι συμβατά με το **AAPS**.

*Συμβουλή*: Αν μπορείτε να δείτε τα δεδομένα γλυκόζης σας στην εφαρμογή xDrip, μπορείτε να επιλέξετε το xDrip ως πηγή **BG** στο **AAPS**.

<!-- List of hidden pages to avoid overcrowding the table of contents -->

```{toctree}
:hidden:

../CompatibleCgms/GeneralCGMRecommendation.md
../CompatibleCgms/SmoothingBloodGlucoseData.md
../CompatibleCgms/xDrip.md
../CompatibleCgms/CgmNightscoutUpload.md
../CompatibleCgms/DexcomG6.md
../CompatibleCgms/DexcomG7.md
../CompatibleCgms/Juggluco.md
../CompatibleCgms/Libre1.md
../CompatibleCgms/Libre2.md
../CompatibleCgms/Libre2MinimalL00per.md
../CompatibleCgms/Libre3.md
../CompatibleCgms/Eversense.md
../CompatibleCgms/MM640g.md
../CompatibleCgms/PocTech.md
../CompatibleCgms/OttaiM8.md
../CompatibleCgms/SyaiTagX1.md
../CompatibleCgms/Caresens.md
```

* [Γενικές συστάσεις](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Εξομάλυνση δεδομένων](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [Ρυθμίσεις xDrip](../CompatibleCgms/xDrip.md)
* [Nightscout ως πηγή BG](../CompatibleCgms/CgmNightscoutUpload.md): Μπορείτε να χρησιμοποιήσετε το Nightscout ως πηγή BG για χορήγηση ινσουλίνης σε κλειστό κύκλωμα, αλλά **αυτή η μέθοδος δεν συνιστάται**, επειδή εξαρτάται από σταθερή σύνδεση δεδομένων κινητής ή Wi-Fi. Αυτό σημαίνει ότι το **AAPS** θα λαμβάνει τα δεδομένα του **CGM** μόνο όταν έχετε σύνδεση στο διαδίκτυο με τον ιστότοπο Nightscout σας. Για πιο αξιόπιστη ρύθμιση, είναι πολύ καλύτερο να χρησιμοποιείτε ένα CGM με τοπική μετάδοση (local broadcast) από τον δέκτη προς το **AAPS** (όπως στη λίστα παρακάτω).

| CGM                                                                                                              | Διαθέσιμες [πηγές BG](#Config-Builder-bg-source)                                                                                              |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                                       | BYODA, [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader) |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                                     | [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader)        |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                                    | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG7-notification-reader)                                                   |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                                       | BYODA, [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                            |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                                      | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                                   |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                                        | [Juggluco](../CompatibleCgms/Juggluco.md) (με ή χωρίς xDrip)                                                                                  |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                                        | [xDrip](../CompatibleCgms/xDrip.md) (μόνο ΕΕ) ή [Juggluco](../CompatibleCgms/Juggluco.md) (με ή χωρίς xDrip)                                  |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                           | [xDrip](../CompatibleCgms/xDrip.md) (το Diabox στέλνει τις τιμές του μέσω της πηγής xDrip), Glimp ή Tomato (MiaoMiao). Χρειάζεται πομπό       |
| [Eversense](../CompatibleCgms/Eversense.md)                                                                      | [xDrip](../CompatibleCgms/xDrip.md), τροποποιημένη εφαρμογή ESEL/Eversense ή Ανάγνωση ειδοποιήσεων                                            |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                            | [xDrip](../CompatibleCgms/xDrip.md) ή MM640g + εφαρμογή 600SeriesAndroidUploader                                                              |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                          | Εφαρμογή PocTech                                                                                                                              |
| Glunovo                                                                                                          | Εφαρμογή Glunovo                                                                                                                              |
| Intelligo                                                                                                        | Εφαρμογή Intelligo                                                                                                                            |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                                    | Syai/Ottai (με την εφαρμογή Ottai ή Syai Tag)                                                                                                 |
| Sibionics CGM                                                                                                    | [Juggluco](../CompatibleCgms/Juggluco.md) ή SI App (με την τροποποιημένη SI App ή την εφαρμογή Sibionics)                                     |
| Sinocare                                                                                                         | Sino App (με την τροποποιημένη Sino App)                                                                                                      |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                               | Εφαρμογή MicroTech CGM                                                                                                                        |
| Instara                                                                                                          | Instara (με την εφαρμογή Instara)                                                                                                             |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                                      | Εφαρμογή xDrip Companion ή [Juggluco](../CompatibleCgms/Juggluco.md)                                                                          |
| Κάθε CGM του οποίου η επίσημη εφαρμογή δείχνει την τιμή γλυκόζης σε ειδοποίηση (Dexcom, Medtronic, Eversense, …) | Ανάγνωση ειδοποιήσεων                                                                                                                         |

(GettingStarted-TrustedBGSource)=

## Αξιόπιστες πηγές δεδομένων BG

Τα **CGM** που έχουν έγκριση από τις ρυθμιστικές αρχές για εμπορικά υβριδικά συστήματα κλειστού κυκλώματος θεωρούνται αξιόπιστες πηγές δεδομένων **BG**.

Για να τα αναγνωρίζει σωστά το **AAPS**, η εφαρμογή που στέλνει τις τιμές **BG** πρέπει να μπορεί να δίνει πληροφορίες για τον αισθητήρα.

Οι αξιόπιστες πηγές δεδομένων επιτρέπουν τη χορήγηση **SMB** σε κάθε περίπτωση.

**AAPS** checks the sensor named in the latest **BG** reading it received, whichever **BG** source delivered it. After you change your **BG** source, the **SMB** "always" settings appear only once the first reading from the new source has arrived.

| Αισθητήρας      |                                                                               Εφαρμογή CGM                                                                               |
| --------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6       |                             BYODA, xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                              |
| Dexcom G7       | BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader)) |
| Dexcom ONE+     |    xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))     |
| Dexcom ONE      |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                                 |
| Dexcom Stelo    |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))                                 |
| Libre 2/2+ (EU) |                                  xDrip (OOP2), <br/>Juggluco (**xDrip broadcast** without xDrip, or **Patched Libre** with xDrip)                                  |
| Libre 2/2+/3/3+ |                                                 Juggluco (**xDrip broadcast** χωρίς xDrip ή **Patched Libre** με xDrip)                                                  |
| Syai, Ottai     |                      Syai or Ottai app (**Syai/Ottai** source or **Notification Reader**), <br/>Juggluco (**xDrip broadcast** without xDrip)                       |

**Note: xDrip Companion apps, Medtronic, Eversense and all other sensors are not trusted data sources.**

```{admonition} Online BG sources are not recommended for closed looping
:class: warning
Some sources that need an internet connection can also be trusted:
- xDrip **Dexcom Share follower** (any Dexcom sensor)
- the **Nightscout** BG source (**AAPSClient**, or **AAPS** following your Nightscout site), when the uploader names one of the sensors above

These sources are **not recommended** for a closed loop. When your phone or the CGM uploader loses its connection, **AAPS** receives no **BG** readings and cannot loop. Readings also arrive late, after the delay of the cloud service. Use a CGM app that sends its readings to **AAPS** directly on the phone (as listed in the table above) whenever possible.

Other follower modes (xDrip Nightscout or Web follower, CareLink follower, Juggluco Nightscout) are never trusted.
```
