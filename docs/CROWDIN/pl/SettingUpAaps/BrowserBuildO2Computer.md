(aaps-ci-option2-computer)=

# Opcja 2 · Komputer – Prześlij swój istniejący magazyn kluczy

```{note}
[Opcja 2](BrowserBuildO2.md) (przesłanie istniejącego magazynu kluczy) na **komputerze** (Windows / Mac / Linux).
```

## 1. Pobierz plik przygotowania

:::{include} BrowserBuildDownloadPrep.md
:::

## 2. Uruchom lokalny serwer i prześlij magazyn kluczy

Użyj komputera (Windows/Mac/Linux)

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

Install Simple Web Server<br/><br/> If you are a Windows or Mac user, you can install it from the Microsoft Store or the Mac App Store. Jeśli przeglądarka zapyta, czy otworzyć aplikację sklepu, zezwól na to.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)<br/><br/>

Przykład na Macu:

- pobierz → zainstaluj → otwórz<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)<br/><br/>

- Kliknij Get Started<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)<br/><br/>

- Kliknij New Server<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)<br/><br/>

- W polu Folder Path wybierz folder, w którym jest plik aaps-ci-preparation.html, a potem kliknij Create Server.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)<br/><br/>

- Jeśli widzisz ten ekran, serwer jest uruchomiony.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)<br/><br/>

- Nie zamykaj Simple Web Server. Please switch to your browser and open<br/><br/> [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)<br/><br/>

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

**Dalej: [Krok 3 – Autoryzuj Dysk Google](BrowserBuildGoogleDrive.md) →**
