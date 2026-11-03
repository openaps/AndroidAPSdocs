(aaps-ci-option1-computer)=

# Seçenek 1 · Bilgisayar – Yeni bir anahtar deposu oluşturun

```{note}
**Bilgisayarda** (Windows / Mac / Linux) [Seçenek 1](BrowserBuildO1.md) (yeni bir anahtar deposu oluşturma).
```

## 1. Hazırlık dosyasını indirin

:::{include} BrowserBuildDownloadPrep.md
:::

## 2. Yerel bir sunucu başlatın ve anahtar deposunu oluşturun

Bilgisayar kullanın (Windows/Mac/Linux desteklenir)

Şu web sayfasını açın [https://simplewebserver.org/download.html](https://simplewebserver.org/download.html)

Simple Web Server'ı yükleyin<br/> Windows veya Mac kullanıyorsanız onu Microsoft Store'dan veya Mac App Store'dan yükleyebilirsiniz.<br/> Tarayıcınız mağaza uygulamasının açılıp açılmayacağını sorarsa izin verin.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)<br/>

Mac örneği:

- get → install → open (al → yükle → aç)<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)<br/><br/>

- Get Started (başlayın) düğmesine tıklayın<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)<br/><br/>

- New Server (yeni sunucu) düğmesine tıklayın<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)<br/><br/>

- Folder Path (klasör yolu) alanında aaps-ci-preparation.html dosyasının bulunduğu klasörü seçin, ardından Create Server (sunucu oluştur) düğmesine tıklayın.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)<br/><br/>

- Bu ekranı görüyorsanız sunucu başlatılmıştır.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)<br/><br/>

- Simple Web Server'ı kapatmayın. Lütfen tarayıcınıza geçin ve şu adresi açın:<br/> [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)<br/><br/>

- Sonraki adımlar için aşağıdaki videoya bakın; videoyu 1 dakika 37 saniyeden itibaren izleyin.

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

**Sonraki adım: [Adım 3 – Google Drive'ı yetkilendirin](BrowserBuildGoogleDrive.md) →**
