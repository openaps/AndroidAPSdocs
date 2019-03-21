# Origem da Glicemia

## For users of Dexcom  


### If using G5 or G6 with xdrip+  


* Se não estiver já instalado faça download [xdrip](https://github.com/NightscoutFoundation/xDrip) e siga as instruções do nightscout ([G4 without share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* No xdrip ir a configurações > Interapp Compatibility > Broadcast Data Locally and select ON.
* No xdrip ir a configurações> Interapp Compatibility > Accept Treatments e seleccionar OFF.
* Se você quiser utilizar AndoidAPS para calibrar no xdrip seleccionar Settings > Interapp Compatibility > Accept Calibrations e seleccione ON. Também poderá querer rever as opções em Settings > Less Common Settings > Advanced Calibration Settings.
* Seleccione xdrip no ConfigBuilder (configuração em AndroidAPS).

### If using G5 or G6 with patched Dexcom app  


* Descarregar o apk em <https://github.com/dexcomapp/dexcomapp>, e escolher a versão que serve as suas necessidades ( a versão mg/dl ou mmol/l, G5 ou G6).
* Pare o sensor e desinstale a app original Dexcom, se ainda não o fez.
* Instale a apk que descarregou
* Inicie sensor
* Seleccione app DexcomG5 em ConfigBuilder ( configuração no AndroidAPS).

### If using G4 with OTG cable ('traditional' Nightscout)…  


* Se ainda não tiver configurado, descarregue app uploader do Nightscout desde a playstore e siga as instruções em [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements).
* In AndroidAPS Preferences enter your Nightscout website and API secret.
* Selccione NSClient em Configbuilder ( configuração em AndroidAPS).

## For users of Libre with Bluetooth cap  


To use your Libre as a CGM that is getting new BG values every 5 minutes you first need to buy a NFC to Bluetooth adapter like:

* MiaoMiao-leitor <https://www.miaomiao.cool/>
* Blucon Nightrider <https://www.ambrosiasys.com/howit>
* BlueReader <https://bluetoolz.de/blueorder/#home>
* Sony Smartwatch 3 (SWR50) als Auslesetool <https://github.com/pimpimmi/LibreAlarm/wiki/>

### If using xdrip...  


* Se ainda nao configurou descarregue app xdrip e siga as instruções em[LimiTTEer](https://github.com/JoernL/LimiTTer), [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) or [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en)([Hardware](https://bluetoolz.de/wordpress/)).
* No xdrip ir a configurações > Interapp Compatibility > Broadcast Data Locally and select ON.
* No xdrip ir a configurações> Interapp Compatibility > Accept Treatments e seleccionar OFF.
* Se você quiser utilizar AndoidAPS para calibrar no xdrip seleccionar Settings > Interapp Compatibility > Accept Calibrations e seleccione ON. Também poderá querer rever as opções em Settings > Less Common Settings > Advanced Calibration Settings.
* Seleccione xdrip no ConfigBuilder (configuração em AndroidAPS).
* Para o modo nativo G5 no xdrip ir a configurações > Cloud upload > REST API > opções extra > informação de fonte para o dispositivo e seleccione ON.

### If using Glimp...  


* If not already set up then download Glimp and follow instructions on [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Seleccione Glimp no ConfigBuilder (configuração em AndroidAPS).

## For users of Eversense  


The easiest way to use Eversense with AndroidAPS is to install the modified [Eversense app](https://github.com/BernhardRo/Esel/blob/master/apk/mod_com.senseonics.gen12androidapp-release.apk) (and unistall the original one first).

**Warning: by uninstalling the old app, your local historical data older than one week will be lost!**

To finally get your data to AndroidAPS, you need to install [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk) and enable "Send to AAPS and xDrip" in ESEL and "MM640g" as BG source in the [Configuration Builder](../Configuration/Config-Builder.md) in AndroidAPS. As the BG data from Eversense can be noisy sometimes, it is good to enable "Smooth Data" in ESEL, which is better than enabling "Always use short average delta instead of simple delta" in AAPS.

You can find another instruction for using xDrip with an Eversense [here](https://github.com/BernhardRo/Esel/tree/master/apk).

## For users of MM640g or MM630g  


* If not already set up then download [600SeriesAndroidUploaer](http://pazaan.github.io/600SeriesAndroidUploader/) and follow instructions on [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* Na série 600 Uploader, vá a Configurações > Enviar para xdrip + e seleccione ON.
* Seleccione MM640g no ConfigBuilder (configuração em AndroidAPS).

## For users of PocTech CT-100  


* Instale app PocTech
* Seleccione app PocTech no ConfigBuilder (configuração em AndroidAPS).

## For users of other CGM uploaded to Nightscout  


If you have any other CGM set up that sends your data to [Nightscout](http://www.nightscout.info) then  


* In AndroidAPS Preferences enter your Nightscout website and API secret.
* Selccione NSClient em Configbuilder ( configuração em AndroidAPS).