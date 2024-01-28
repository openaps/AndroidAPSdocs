# Eversense

The easiest way to use Eversense with AAPS is to install the EU or US modified [Eversense app](https://cr4ck3d3v3r53n53.club/) (and uninstall the original one first).

**Warning: by uninstalling the old app, your local historical data older than one week will be lost!**

- To get your data to AAPS, you need to install [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/debug/app-debug.apk) and enable "Send to AAPS and xDrip", disable "Send to NightScout".

![ESEL Broadcast](../images/ESEL.png)

Aangezien de BG-gegevens van Eversense soms veel 'ruis' kunnen hebben, is het goed om "Smooth Data" (gegevens vloeiend maken) in ESEL in te schakelen. Dit heeft de voorkeur boven "Gebruik altijd korte gemiddeld verschil ipv gewone verschil" inschakelen in AAPS.

- Set "MM640g" as BG source in in [ConfigBuilder, BG Source](../Configuration/Config-Builder.md#bg-source).

You can find the instruction for using xDrip with an Eversense [here](https://github.com/BernhardRo/Esel/tree/master/apk).
