(aaps-ci-option1-computer)=

# Варіант 1 · Комп'ютер – Створіть новий keystore

```{note}
[Варіант 1](BrowserBuildO1.md) (створення нового keystore) на **комп'ютері** (Windows / Mac / Linux).
```

## 1. Завантажте файл підготовки

:::{include} BrowserBuildDownloadPrep.md
:::

## 2. Запустіть локальний сервер і створіть keystore

Використайте комп'ютер (підходять Windows/Mac/Linux)

Відкрийте вебсторінку [https://simplewebserver.org/download.html](https://simplewebserver.org/download.html)

Встановіть Simple Web Server</br> Якщо у вас Windows або Mac, його можна встановити з Microsoft Store або Mac App Store.</br> Якщо браузер запитає, чи відкрити застосунок магазину, дозвольте це.</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)</br>

Приклад на Mac:

- Get → Install → Open (Отримати → Встановити → Відкрити)</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)</br></br>

- Натисніть Get Started (Почати)</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)</br></br>

- Натисніть New Server (новий сервер)</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)</br></br>

- У полі Folder Path (шлях до папки) виберіть папку, де лежить aaps-ci-preparation.html, а потім натисніть Create Server (створити сервер).</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)</br></br>

- Якщо ви бачите цей екран, сервер запущено.</br></br> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)</br></br>

- Не закривайте Simple Web Server. Перейдіть у браузер і відкрийте</br> [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)</br></br>

- Наступні кроки дивіться у відео нижче, починаючи з 1 хвилини 37 секунд.

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

**Далі: [Крок 3 – Авторизуйте Google Drive](BrowserBuildGoogleDrive.md) →**
