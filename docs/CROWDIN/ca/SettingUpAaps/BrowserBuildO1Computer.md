(aaps-ci-option1-computer)=

# Opció 1 · Ordinador – Generar un nou magatzem de claus

```{note}
[Opció 1](BrowserBuildO1.md) (generar un nou magatzem de claus) en un **ordinador** (Windows / Mac / Linux).
```

## 1. Descarregueu el fitxer de preparació

:::{include} BrowserBuildDownloadPrep.md
:::

## 2. Inicieu un servidor local i genereu el magatzem de claus

Feu servir un ordinador (Windows/Mac/Linux)

Obriu la pàgina web [https://simplewebserver.org/download.html](https://simplewebserver.org/download.html)

Instal·leu Simple Web Server<br/> Si feu servir Windows o Mac, el podeu instal·lar des de Microsoft Store o des de Mac App Store.<br/> Si el navegador us pregunta si voleu obrir l'aplicació de la botiga, permeteu-ho.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)<br/>

Exemple en un Mac:

- get → install → open<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)<br/><br/>

- Feu clic a «Get Started»<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)<br/><br/>

- Feu clic a «New Server»<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)<br/><br/>

- A «Folder Path», seleccioneu la carpeta on hi ha el fitxer aaps-ci-preparation.html i després feu clic a «Create Server».<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)<br/><br/>

- Si veieu aquesta pantalla, el servidor s'ha iniciat.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)<br/><br/>

- No tanqueu Simple Web Server. Torneu al navegador i obriu<br/> [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)<br/><br/>

- Per als passos següents, mireu el vídeo de sota, a partir del minut 1 i 37 segons.

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

**Següent: [Pas 3 – Autoritzeu Google Drive](BrowserBuildGoogleDrive.md) →**
