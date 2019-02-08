# BG source

**For users of Dexcom:**  
_If using G5 or G6 with xdrip+_  


* Se não estiver já instalado faça download [xdrip](https://github.com/NightscoutFoundation/xDrip) e siga as instruções do nightscout ([G4 without share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* No xdrip ir a configurações > Interapp Compatibility > Broadcast Data Locally and select ON.
* No xdrip ir a configurações> Interapp Compatibility > Accept Treatments e seleccionar OFF.
* Se você quiser utilizar AndoidAPS para calibrar no xdrip seleccionar Settings > Interapp Compatibility > Accept Calibrations e seleccione ON. Também poderá querer rever as opções em Settings > Less Common Settings > Advanced Calibration Settings.
* Seleccione xdrip no ConfigBuilder (configuração em AndroidAPS).

_If using G5 or G6 with patched Dexcom app_  


* Download the apk from <https://github.com/dexcomapp/dexcomapp>, and choose the version that fits your needs (mg/dl or mmol/l version, G5 or G6).
* Pare o sensor e desinstale a app original Dexcom, se ainda não o fez.
* Instale a apk que descarregou
* Inicie sensor
* Seleccione app DexcomG5 em ConfigBuilder ( configuração no AndroidAPS).

_Se usar G4 com cabo OTG ('tradicional' Nightscout)…_  


* Se ainda não tiver configurado, descarregue app uploader do Nightscout desde a playstore e siga as instruções em [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements).
* Nas preferências de AndroiAps introduza o website nightscout e a API secreta.
* Selccione NSClient em Configbuilder ( configuração em AndroidAPS).

**Para utilizadores do Libre com Bluetooth:**  
Para usar o seu Libre como CGM que recebe valores de glicémia cada 5 minutos tem primeiro de adquirir um adaptador de NFC a Bluetooth tais como:

* MiaoMiao-leitor <https://www.miaomiao.cool/>
* Blucon Nightrider <https://www.ambrosiasys.com/howit>
* BlueReader <https://bluetoolz.de/blueorder/#home>
* Sony Smartwatch 3 (SWR50) als Auslesetool <https://github.com/pimpimmi/LibreAlarm/wiki/>

_Se usar xdrip..._  


* Se ainda nao configurou descarregue app xdrip e siga as instruções em[LimiTTEer](https://github.com/JoernL/LimiTTer), [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) or [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en)([Hardware](https://bluetoolz.de/wordpress/)).
* No xdrip ir a configurações > Interapp Compatibility > Broadcast Data Locally and select ON.
* No xdrip ir a configurações> Interapp Compatibility > Accept Treatments e seleccionar OFF.
* Se você quiser utilizar AndoidAPS para calibrar no xdrip seleccionar Settings > Interapp Compatibility > Accept Calibrations e seleccione ON. Também poderá querer rever as opções em Settings > Less Common Settings > Advanced Calibration Settings.
* Seleccione xdrip no ConfigBuilder (configuração em AndroidAPS).
* Para o modo nativo G5 no xdrip ir a configurações > Cloud upload > REST API > opções extra > informação de fonte para o dispositivo e seleccione ON.

_Se usa Glimp..._  


* Se ainda não o fez, descarregue app Glimp e siga as instruções em [nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Seleccione Glimp no ConfigBuilder (configuração em AndroidAPS).

**Para utilizadores de MM640g or MM630g:**  


* Se não configurou ainda, descarregue [600SeriesAndroidUploaer](http://pazaan.github.io/600SeriesAndroidUploader/) e siga as instruções em [nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* Na série 600 Uploader, vá a Configurações > Enviar para xdrip + e seleccione ON.
* Seleccione MM640g no ConfigBuilder (configuração em AndroidAPS).

**Para utilizadores de PocTech CT-100:**  


* Instale app PocTech
* Seleccione app PocTech no ConfigBuilder (configuração em AndroidAPS).

**Para usuários de outro CGM com dados enviados para nightscout:**   
se tiver qualquer outro CGM configurar para que envie os seus dados para [Nightscout](http://www.nightscout.info), depois  


* Nas preferências de AndroiAps introduza o website nightscout e a API secreta.
* Selccione NSClient em Configbuilder ( configuração em AndroidAPS).