(aaps-ci-option2-computer)=

# Вариант 2 · Компютър – Качване на съществуващото хранилище за ключове

```{note}
[Вариант 2](BrowserBuildO2.md) (качване на съществуващо хранилище за ключове) на **компютър** (Windows / Mac / Linux).
```

## 1. Изтеглете подготвителния файл

:::{include} BrowserBuildDownloadPrep.md
:::

## 2. Стартирайте локален сървър и качете хранилището за ключове

Използване на компютър (поддържа Windows/Mac/Linux)

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

Инсталирайте Simple Web Server</br></br> Ако използвате Windows или Mac, можете да го инсталирате от Microsoft Store или от Mac App Store. Ако браузърът ви попита дали да отвори приложението на магазина, разрешете го.</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)</br></br>

Пример на Mac:

- get → install → open (изтегляне → инсталиране → отваряне)</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)</br></br>

- Натиснете Get Started (Започване)</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)</br></br>

- Натиснете New Server (Нов сървър)</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)</br></br>

- В Folder Path (път до папката) изберете папката, в която се намира aaps-ci-preparation.html, и след това натиснете Create Server (Създаване на сървър).</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)</br></br>

- Ако виждате този екран, сървърът е стартиран.</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)</br></br>

- Не затваряйте Simple Web Server. Моля, превключете към браузъра си и отворете</br></br> [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)</br></br>

- За следващите стъпки, моля, вижте видеото по-долу, като започнете от 2 минути и 18 секунди.</br></br>
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

**Следваща стъпка: [Стъпка 3 – Разрешаване на достъп до Google Drive](BrowserBuildGoogleDrive.md) →**
