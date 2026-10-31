(aaps-ci-option1-computer)=

# Επιλογή 1 · Υπολογιστής – Δημιουργία νέου keystore

```{note}
[Επιλογή 1](BrowserBuildO1.md) (δημιουργία νέου keystore) σε **υπολογιστή** (Windows / Mac / Linux).
```

## 1. Κατεβάστε το αρχείο προετοιμασίας

:::{include} BrowserBuildDownloadPrep.md
:::

## 2. Ξεκινήστε έναν τοπικό server και δημιουργήστε το keystore

Χρησιμοποιήστε υπολογιστή (Windows/Mac/Linux)

Ανοίξτε την ιστοσελίδα [https://simplewebserver.org/download.html](https://simplewebserver.org/download.html)

Εγκαταστήστε το Simple Web Server</br> Αν χρησιμοποιείτε Windows ή Mac, μπορείτε να το εγκαταστήσετε από το Microsoft Store ή το Mac App Store.</br> Αν ο browser σας ρωτήσει αν θα ανοίξει την εφαρμογή του store, επιτρέψτε το.</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)</br>

Παράδειγμα σε Mac:

- get → install → open</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)</br></br>

- Πατήστε Get Started</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)</br></br>

- Πατήστε New Server</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)</br></br>

- Στο Folder Path επιλέξτε τον φάκελο όπου βρίσκεται το aaps-ci-preparation.html και μετά πατήστε Create Server.</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)</br></br>

- Αν βλέπετε αυτή την οθόνη, ο server έχει ξεκινήσει.</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)</br></br>

- Μην κλείσετε το Simple Web Server. Μεταβείτε στον browser σας και ανοίξτε το</br> [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)</br></br>

- Για τα επόμενα βήματα δείτε το παρακάτω βίντεο, από το 1 λεπτό και 37 δευτερόλεπτα.

  <!--crowdin: exclude-->
  <div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
    <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
      <iframe
        src="https://geo.dailymotion.com/player/x9rdrpy.html?video=x9rdrpy&startTime=97&loop=true&mute=true"
        loading="lazy"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
        frameborder="0"
        allowfullscreen>
      </iframe>
    </div>
  </div>

----

**Επόμενο: [Βήμα 3 – Εξουσιοδότηση του Google Drive](BrowserBuildGoogleDrive.md) →**
