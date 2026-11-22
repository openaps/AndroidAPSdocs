(aaps-ci-option2-computer)=

# Вариант 2 · Компьютер – Загрузить существующее хранилище ключей

```{note}
[Вариант 2](BrowserBuildO2.md) (загрузить существующее хранилище ключей) на **компьютере** (Windows / Mac / Linux).
```

## 1. Скачайте файл подготовки

:::{include} BrowserBuildDownloadPrep.md
:::

## 2. Запустите локальный сервер и загрузите хранилище ключей

Используйте компьютер (Windows/Mac/Linux)

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

Установите Simple Web Server<br/><br/> Если у вас Windows или Mac, его можно установить из Microsoft Store или Mac App Store. Если браузер спросит, открыть ли магазин приложений, разрешите это.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)<br/><br/>

Пример на Mac:

- get → install → open<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)<br/><br/>

- Нажмите Get Started<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)<br/><br/>

- Нажмите New Server<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)<br/><br/>

- В поле Folder Path выберите папку, в которой лежит файл aaps-ci-preparation.html, затем нажмите Create Server.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)<br/><br/>

- Если вы видите этот экран, сервер запущен.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)<br/><br/>

- Не закрывайте Simple Web Server. Перейдите в браузер и откройте<br/><br/> [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)<br/><br/>

- Следующие шаги смотрите в видео ниже, начиная с 2 минут 18 секунд.<br/><br/>
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

**Далее: [Сборка через браузер – Шаг 3: Дайте доступ к Google Диску](BrowserBuildGoogleDrive.md) →**
