For users of Eversense
**************************************************
The easiest way to use Eversense with AndroidAPS is to install the non-US modified `Eversense app <https://github.com/BernhardRo/Esel/blob/master/apk/Eversense_CGM_v1.0.410-patched.apk>`_ (and unistall the original one first).

**Warning: by uninstalling the old app, your local historical data older than one week will be lost!**

To finally get your data to AndroidAPS, you need to install `ESEL <https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk>`_ and enable "Send to AAPS and xDrip" in ESEL and "MM640g" as BG source in the `Configuration Builder <../Configuration/Config-Builder.html>`_ in AndroidAPS. As the BG data from Eversense can be noisy sometimes, it is good to enable "Smooth Data" in ESEL, which is better than enabling "Always use short average delta instead of simple delta" in AAPS.

You can find  all APKs including the one for the US and another instruction for using xDrip with an Eversense `here <https://github.com/BernhardRo/Esel/tree/master/apk>`_.
