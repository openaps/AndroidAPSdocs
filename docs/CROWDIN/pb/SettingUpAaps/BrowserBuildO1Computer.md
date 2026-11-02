(aaps-ci-option1-computer)=

# Opção 1 · Computador – Gere uma nova keystore

```{note}
[Opção 1](BrowserBuildO1.md) (gerar uma nova keystore) em um **computador** (Windows / Mac / Linux).
```

## 1. Baixe o arquivo de preparação

:::{include} BrowserBuildDownloadPrep.md
:::

## 2. Inicie um servidor local e gere a keystore

Use um computador (Windows/Mac/Linux)

Abra a página [https://simplewebserver.org/download.html](https://simplewebserver.org/download.html)

Install Simple Web Server<br/> If you are a Windows or Mac user, you can install it from the Microsoft Store or the Mac App Store.<br/> If your browser asks whether to open the store app, allow it.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)<br/>

Exemplo no Mac:

- get → install → open (obter → instalar → abrir)<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)<br/><br/>

- Clique em Get Started (começar)<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)<br/><br/>

- Clique em New Server (novo servidor)<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)<br/><br/>

- Em Folder Path (caminho da pasta), selecione a pasta onde está o arquivo aaps-ci-preparation.html e depois clique em Create Server (criar servidor).<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)<br/><br/>

- Se você vê esta tela, o servidor foi iniciado.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)<br/><br/>

- Não feche o Simple Web Server. Please switch to your browser and open<br/> [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)<br/><br/>

- Para as próximas etapas, veja o vídeo abaixo a partir de 1 minuto e 37 segundos.

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

**Próximo: [Etapa 3 – Autorize o Google Drive](BrowserBuildGoogleDrive.md) →**
