(Accessing-logfiles-accessing-logfiles)=

# Acceder a los logs

* Conecta el teléfono a un ordenador en modo de transferencia de archivos.
* Busca los archivos de log en el directorio de datos de AAPS, en `Android\data\info.nightscout.androidaps\files`.  
    El nombre de la carpeta raíz del almacenamiento puede variar un poco según el teléfono.
* Para [AAPSClient](#RemoteControl_aapsclient), la ubicación es `Android\data\info.nightscout.aapsclient\files`.
* Nota: la ubicación de los logs ha cambiado en **AAPS 3.3**. Si lo necesitas, consulta la documentación de las versiones anteriores.

![logs](../images/aapslog.png)

* El log actual es un archivo .log que puedes ver de varias formas, por ejemplo con [LogCat](https://developer.android.com/studio/debug/am-logcat.html) en Android Studio, con cualquier app de Android para ver logs o simplemente como texto plano. 
* Los archivos de registro anteriores se comprimen y almacenan en carpetas en orden de fecha / hora. 
* Si compartes tu archivo de log en [discord](https://discord.gg/4fQUWHZ4Mw) para hablar de un posible error, descomprime y sube el archivo con la fecha anterior al momento del error.