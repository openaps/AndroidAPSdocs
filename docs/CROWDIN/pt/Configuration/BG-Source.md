# Origem da Glicemia

## Para utilizadores de Dexcom  


### Se usar G5 ou G6 com xdrip+  


* Se não estiver já instalado faça download [xdrip](https://github.com/NightscoutFoundation/xDrip) e siga as instruções do nightscout ([G4 without share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* No xdrip ir a configurações > Interapp Compatibility > Broadcast Data Locally and select ON.
* No xdrip ir a configurações> Interapp Compatibility > Accept Treatments e seleccionar OFF.
* Se você quiser utilizar AndoidAPS para calibrar no xdrip seleccionar Settings > Interapp Compatibility > Accept Calibrations e seleccione ON. Também poderá querer rever as opções em Settings > Less Common Settings > Advanced Calibration Settings.
* Seleccione xdrip no ConfigBuilder (configuração em AndroidAPS).

### _ se usar G5 ou G6 com patch Dexcom app_  


* Descarregar o apk em <https://github.com/dexcomapp/dexcomapp>, e escolher a versão que serve as suas necessidades ( a versão mg/dl ou mmol/l, G5 ou G6).
* Pare o sensor e desinstale a app original Dexcom, se ainda não o fez.
* Instale a apk que descarregou
* Inicie sensor
* Seleccione app DexcomG5 em ConfigBuilder ( configuração no AndroidAPS).

### If using G4 with OTG cable ('traditional' Nightscout)…  


* Se ainda não tiver configurado, descarregue app uploader do Nightscout desde a playstore e siga as instruções em [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements).
* Nas preferências de AndroidAps introduza o website nightscout e a API secreta.
* Selccione NSClient em Configbuilder ( configuração em AndroidAPS).

## Para usuários do Libre com cap Bluetooth  


To use your Libre as a CGM that is getting new BG values every 5 minutes you first need to buy a NFC to Bluetooth adapter like:

* MiaoMiao-leitor <https://www.miaomiao.cool/>
* Blucon Nightrider <https://www.ambrosiasys.com/howit>
* BlueReader <https://bluetoolz.de/blueorder/#home>
* Sony Smartwatch 3 (SWR50) als Auslesetool <https://github.com/pimpimmi/LibreAlarm/wiki/>

### Se usa xdrip...  


* Se ainda nao configurou descarregue app xdrip e siga as instruções em[LimiTTEer](https://github.com/JoernL/LimiTTer), [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) or [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en)([Hardware](https://bluetoolz.de/wordpress/)).
* No xdrip ir a configurações > Interapp Compatibility > Broadcast Data Locally and select ON.
* No xdrip ir a configurações> Interapp Compatibility > Accept Treatments e seleccionar OFF.
* Se você quiser utilizar AndoidAPS para calibrar no xdrip seleccionar Settings > Interapp Compatibility > Accept Calibrations e seleccione ON. Também poderá querer rever as opções em Settings > Less Common Settings > Advanced Calibration Settings.
* Seleccione xdrip no ConfigBuilder (configuração em AndroidAPS).
* Para o modo nativo G5 no xdrip ir a configurações > Cloud upload > REST API > opções extra > informação de fonte para o dispositivo e seleccione ON.

### Se usa Glimp...  


* If not already set up then download Glimp and follow instructions on [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Seleccione Glimp no ConfigBuilder (configuração em AndroidAPS).

## Para utilizadores de Eversense  


The easiest way to use Eversense with AndroidAPS is to install the modified [Eversense app](https://github.com/BernhardRo/Esel/blob/master/apk/mod_com.senseonics.gen12androidapp-release.apk) (and unistall the original one first).

**Warning: by uninstalling the old app, your local historical data older than one week will be lost!**

To finally get your data to AndroidAPS, you need to install [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk) and enable "Send to AAPS and xDrip" in ESEL and "MM640g" as BG source in the [Configuration Builder](../Configuration/Config-Builder.md) in AndroidAPS. As the BG data from Eversense can be noisy sometimes, it is good to enable "Smooth Data" in ESEL, which is better than enabling "Always use short average delta instead of simple delta" in AAPS.

You can find another instruction for using xDrip with an Eversense [here](https://github.com/BernhardRo/Esel/tree/master/apk).

## Para utilizadores de MM640g ou MM630g  


* If not already set up then download [600SeriesAndroidUploaer](http://pazaan.github.io/600SeriesAndroidUploader/) and follow instructions on [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* Na série 600 Uploader, vá a Configurações > Enviar para xdrip + e seleccione ON.
* Seleccione MM640g no ConfigBuilder (configuração em AndroidAPS).

## Para utilizadores de PocTech CT-100  


* Instale app PocTech
* Seleccione app PocTech no ConfigBuilder (configuração em AndroidAPS).

## For users of other CGM uploaded to Nightscout  


If you have any other CGM set up that sends your data to [Nightscout](http://www.nightscout.info) then  


* Nas preferências de AndroidAps introduza o website nightscout e a API secreta.
* Selccione NSClient em Configbuilder ( configuração em AndroidAPS).

# Recomendações Gerais de CGM

## Higiene CGM

Whichever CGM system you are using, if you are going to use blood based calibration, then there are some very clear rules you should apply, whether or not you are using DIY CGM software or the official apps.

* Make sure hands and kit are clean.
* Try to calibrate when you have a series of dots with a flat arrow (15-30 minutes is usually enough)
* Avoid calibrating when glucose levels are moving up or down. 
* Do “enough” calibrations – on official apps, you will be prompted for once or twice per day checks. On DIY systems you may not be, and should be careful about continuing without calibrations.
* If it all possible, calibrate with some of your readings in a lower range (4-5mmol/l or 72-90mg/dl) and some at a slightly higher level (7-9mmol/l or 126-160mg/dl) as this provides a better range for the point/slope calibration.

## Dexcom G6 & sistemas DIY

O que é claro, é que usar o G6 é talvez seja um pouco mais complexo do que o que sugere inicialmente. Para usá-lo com segurança, há alguns pontos que têm de ser conhecidos:

* If you are using the native data with the calibration code in xDrip or Spike, the safest thing to do is not allow preemptive restarts of the sensor.
* If you must use preemptive restarts, then make sure you insert at a time of day where you can observe the change and calibrate if necessary. 
* If you are restarting sensors, either do it without the factory calibration for safest results on days 11 and 12, or ensure you are ready to calibrate and keep an eye on variation.
* Pre-soaking of the G6 with factory calibration is likely to give variation in results. If you do pre-soak, then to get best results, you will probably need to calibrate the sensor.
* If you aren’t being observant about the changes that may be taking place, it may be better to revert to non-factory-calibrated mode and use the system like a G5.

Para saber mais sobre os detalhes e razões destas recomendações leia o [todo o artigo](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) publicado pelo Tim Street em [www.diabettech.com](http://www.diabettech.com).