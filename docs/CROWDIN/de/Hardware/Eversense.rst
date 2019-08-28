Für Eversense Nutzer
********************************
The easiest way to use Eversense with AndroidAPS is to install the modified `Eversense app <https://github.com/BernhardRo/Esel/blob/master/apk/eversense_cgm_v1.0.409_com.senseonics.gen12androidapp-patched.apk>`_ (and unistall the original one first).

**Warning: by uninstalling the old app, your local historical data older than one week will be lost!**

To finally get your data to AndroidAPS, you need to install `ESEL <https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk>`_ and enable "Send to AAPS and xDrip" in ESEL and "MM640g" as BG source in the `Configuration Builder <../Configuration/Config-Builder.html>`_ in AndroidAPS. Da die Glukose-Daten von Eversense manchmal schwankend ("noisy") sein können, sollte in ESEL "Smooth Data" aktiviert werden. Das ist besser als die Option  "Always use short average delta instead of simple delta" zu wählen.

You can find another instruction for using xDrip with an Eversense `here <https://github.com/BernhardRo/Esel/tree/master/apk>`_.
