(aaps-ci-option2-computer)=

# Opcija 2 · Računalo – Prenesite postojeće spremište ključeva

```{note}
[Opcija 2](BrowserBuildO2.md) (prijenos postojećeg spremišta ključeva) na **računalu** (Windows / Mac / Linux).
```

## 1. Preuzmite pripremnu datoteku

:::{include} BrowserBuildDownloadPrep.md
:::

## 2. Pokrenite lokalni poslužitelj i prenesite spremište ključeva

Koristite računalo (podržani su Windows/Mac/Linux)

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

Instalirajte Simple Web Server<br/><br/> Ako koristite Windows ili Mac, možete ga instalirati iz trgovine Microsoft Store ili Mac App Store. Ako vas preglednik pita želite li otvoriti aplikaciju trgovine, dopustite to.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)<br/><br/>

Primjer na Macu:

- preuzmi → instaliraj → otvori<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)<br/><br/>

- Kliknite Get Started<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)<br/><br/>

- Kliknite New Server<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)<br/><br/>

- U polju Folder Path odaberite mapu u kojoj se nalazi aaps-ci-preparation.html, a zatim kliknite Create Server.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)<br/><br/>

- Ako vidite ovaj zaslon, poslužitelj je pokrenut.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)<br/><br/>

- Ne zatvarajte Simple Web Server. Prebacite se u preglednik i otvorite<br/><br/> [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)<br/><br/>

- Za sljedeće korake pogledajte videozapis ispod, od 2 minute i 18 sekundi.<br/><br/>
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

**Sljedeće: [Korak 3 – Autorizirajte Google Drive](BrowserBuildGoogleDrive.md) →**
