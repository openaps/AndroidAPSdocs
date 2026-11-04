(aaps-ci-option2-computer)=

# 2 variantas · Kompiuteris – Įkelkite esamą raktų saugyklą

```{note}
[2 variantas](BrowserBuildO2.md) (esamos raktų saugyklos įkėlimas) **kompiuteryje** (Windows / Mac / Linux).
```

## 1. Atsisiųskite paruošimo failą

:::{include} BrowserBuildDownloadPrep.md
:::

## 2. Paleiskite vietinį serverį ir įkelkite raktų saugyklą

Naudokite kompiuterį (tinka Windows / Mac / Linux)

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

Įdiekite Simple Web Server<br/><br/> Jei naudojate Windows arba Mac, galite jį įdiegti iš Microsoft Store arba Mac App Store. Jei naršyklė klausia, ar atidaryti parduotuvės programėlę, leiskite.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)<br/><br/>

Pavyzdys Mac kompiuteryje:

- get → install → open<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)<br/><br/>

- Spauskite Get Started<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)<br/><br/>

- Spauskite New Server<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)<br/><br/>

- Lauke Folder Path pasirinkite aplanką, kuriame yra aaps-ci-preparation.html, tada spauskite Create Server.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)<br/><br/>

- Jei matote šį ekraną, serveris paleistas.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)<br/><br/>

- Neuždarykite Simple Web Server. Pereikite į naršyklę ir atidarykite<br/><br/> [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)<br/><br/>

- Tolesnius veiksmus rasite toliau esančiame vaizdo įraše, pradedant nuo 2 minučių 18 sekundžių.<br/><br/>
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

**Toliau: [3 žingsnis – Suteikite prieigą prie Google Drive](BrowserBuildGoogleDrive.md) →**
