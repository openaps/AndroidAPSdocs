(aaps-ci-option2-computer)=

# Επιλογή 2 · Υπολογιστής – Ανέβασμα του υπάρχοντος keystore σας

```{note}
[Επιλογή 2](BrowserBuildO2.md) (ανέβασμα υπάρχοντος keystore) σε **υπολογιστή** (Windows / Mac / Linux).
```

## 1. Κατεβάστε το αρχείο προετοιμασίας

:::{include} BrowserBuildDownloadPrep.md
:::

## 2. Ξεκινήστε έναν τοπικό διακομιστή και ανεβάστε το keystore

Χρησιμοποιήστε υπολογιστή (Windows/Mac/Linux)

<!--crowdin: exclude-->
<div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
  <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
    <iframe
      src="https://geo.dailymotion.com/player/x9rdyc6.html?video=x9rdyc6&loop=true&mute=true"
      loading="lazy"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</div>

Install Simple Web Server<br/><br/> If you are a Windows or Mac user, you can install it from the Microsoft Store or the Mac App Store. Αν το πρόγραμμα περιήγησης ρωτήσει αν θα ανοίξει την εφαρμογή του store, επιτρέψτε το.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)<br/><br/>

Παράδειγμα σε Mac:

- get → install → open<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)<br/><br/>

- Πατήστε Get Started<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)<br/><br/>

- Πατήστε New Server<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)<br/><br/>

- Στο Folder Path επιλέξτε τον φάκελο όπου βρίσκεται το aaps-ci-preparation.html και μετά πατήστε Create Server.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)<br/><br/>

- Αν βλέπετε αυτή την οθόνη, ο server έχει ξεκινήσει.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)<br/><br/>

- Μην κλείσετε το Simple Web Server. Please switch to your browser and open<br/><br/> [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)<br/><br/>

- For the subsequent steps, please refer to the video below, starting from 2 minutes 18 seconds.<br/><br/>
  <!--crowdin: exclude-->
  <div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
    <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
      <iframe
        src="https://geo.dailymotion.com/player/x9rdvt0.html?video=x9rdvt0&startTime=138&loop=true&mute=true"
        loading="lazy"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
        frameborder="0"
        allowfullscreen>
      </iframe>
    </div>
  </div>

----

**Επόμενο: [Βήμα 3 – Εξουσιοδότηση του Google Drive](BrowserBuildGoogleDrive.md) →**
