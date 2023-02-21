# Sony Smartwatch 3 için Google Play Hizmetinin Manuel Kurulumu

Sony Smartwatch 3, APPS ile kullanılacak en popüler saatlerden biridir. Maalesef Google, 2020 sonbaharında wear OS 1.5 cihazları için desteği bıraktı. Bu Sony SW3'ü AndroidAPS 2.7 ve üstü ile kullanırken sorunlara yol açar.

Aşağıdaki geçici çözüm, Sony Smartwatch 3'ün kullanım süresini uzatacaktır, ancak yeni bir akıllı saate geçme ihtiyacının er ya da geç geleceğini unutmayın.

## 1. Wear OS için en son GService'i indirin

- [Apkmirror web sitesini](https://www.apkmirror.com/apk/google-inc/google-play-services-android-wear/) kullanarak "Google Play Hizmetleri (Wear OS) için en son apk'yı bulabilirsiniz. ".

  Mimari: armeabi-v7a, Minimum Sürüm: Android 6.0+, Ekran DPI: nodpi

- 2 şeyi sağlamalısınız:

  - En son sürüm mü?
  - Android 6.0+ ile uyumlu mu (wear android sürümü olduğu için, 7.0+ ve üstü çalışmayacaktır)?

- Er ya da geç Google, Android 6.0'ı kesinlikle bırakacaktır. Bu olduğunda, en son sürüm artık Android 6.0+ için mevcut olmayacak, bu nedenle son olacak.

## 2. Adb hata ayıklama araçlarını bilgisayarınıza indirin/yükleyin

- Adb hata ayıklama aracını kurmanın birden çok yolu vardır.
- [SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools) kullanılması önerilir: Zip dosyasını indirin ve istediğiniz bir dizine açın.

## 3. Saatinizde ADB Hata Ayıklama seçeneklerini etkinleştirin

- Ayarlar --> Hakkında--> Yapı numarası'na giderek geliştirici modunu etkinleştirin
- 7 kez tıklayın.
- Şimdi Ayarlar --> Geliştirici Seçenekleri --> ADB Hata Ayıklama'ya gidin (etkinleştir)

## 4. Saatinizi bilgisayarınıza bağlayın

- Akıllı saatinizi PC'ye takın.
- En son indirilen google hizmetleri APK'sini kısa ve basit bir isim kullanarak yeniden adlandırın (örn: SW3fix.apk).
- Bu APK'yı adb aracınızın dizinine yerleştirin (sıkıştırılmamış SDK Platform Araçları dizini).
- Windows başlat menüsünde "cmd" komutunu kullanarak Windows komut istemini açın.
- Terminalde, adb aracınızı ve google hizmetleri APK'nızı içeren dizine gidin ("cd \[yolunuz\]" komutunu yazın, örneğin "cd C:UsersSWR50loopersdktools".)
- Ardından “adb devices” yazın.
- Bir süre sonra, saatinizde hata ayıklama izni isteyen bir istem almalısınız: kabul et.
- Terminalde şimdi tekrar "adb devices" yazarken "14452D11F536B52 device" gibi bir şey görmelisiniz.
- "unauthorized" ifadesini görürseniz veya bir sonraki adıma hazır değilseniz, geri dönün ve tekrar deneyin.
- Bu adımda zorlanıyorsanız, saatiniz için belirli sürücülere veya başka bir şeye ihtiyacınız olabilir. Google bu noktada en iyi arkadaşınız olacak.
- Bekleyin, kurulum birkaç dakika sürebilir.

## 5. Uygulamayı saatinize gönderin

- Komut isteminde „adb install -r -g aplicationname.apk“ komutunu girin (bizim durumumuzda „adb install -r -g SW3fix.apk“).

  ```{image} ../images/SonySW3_Terminal1.png
  :alt: Terminal komutu
  ```

- Kurulumun tamamlanması için yaklaşık 4-5 dakika bekleyin.

  ```{image} ../images/SonySW3_Terminal2.png
  :alt: Terminal başarılı kurulum
  ```

- Bittiğinde, saatinizi yeniden başlatın ve uygulamaların kendisini hemen senkronize etmeye başladığını görmelisiniz.
