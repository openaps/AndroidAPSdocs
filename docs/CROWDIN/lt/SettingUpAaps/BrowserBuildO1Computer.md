(aaps-ci-option1-computer)=

# 1 variantas · Kompiuteris – Sugeneruokite naują raktų saugyklą

```{note}
[1 variantas](BrowserBuildO1.md) (naujos raktų saugyklos generavimas) **kompiuteryje** (Windows / Mac / Linux).
```

## 1. Atsisiųskite paruošimo failą

:::{include} BrowserBuildDownloadPrep.md
:::

## 2. Paleiskite vietinį serverį ir sugeneruokite raktų saugyklą

Naudokite kompiuterį (tinka Windows / Mac / Linux)

Atidarykite tinklalapį [https://simplewebserver.org/download.html](https://simplewebserver.org/download.html)

Įdiekite Simple Web Server<br/> Jei naudojate Windows arba Mac, galite jį įdiegti iš Microsoft Store arba Mac App Store.<br/> Jei naršyklė klausia, ar atidaryti parduotuvės programėlę, leiskite.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)<br/>

Pavyzdys Mac kompiuteryje:

- get → install → open<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)<br/><br/>

- Spauskite Get Started<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)<br/><br/>

- Spauskite New Server<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)<br/><br/>

- Lauke Folder Path pasirinkite aplanką, kuriame yra aaps-ci-preparation.html, tada spauskite Create Server.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)<br/><br/>

- Jei matote šį ekraną, serveris paleistas.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)<br/><br/>

- Neuždarykite Simple Web Server. Pereikite į naršyklę ir atidarykite<br/> [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)<br/><br/>

- Tolesnius veiksmus rasite toliau esančiame vaizdo įraše, pradedant nuo 1 minutės 37 sekundžių.

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

**Toliau: [3 žingsnis – Suteikite prieigą prie Google Drive](BrowserBuildGoogleDrive.md) →**
