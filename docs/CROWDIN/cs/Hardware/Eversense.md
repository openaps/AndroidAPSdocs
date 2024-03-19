# Pro uživatele Eversense

The easiest way to use Eversense with AAPS is to install the EU or US modified [Eversense app](https://cr4ck3d3v3r53n53.club/) (and uninstall the original one first).

**Varování: odinstalováním staré aplikace se vaše místní historické údaje starší než jeden týden ztratí!**

- To get your data to AAPS, you need to install [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/debug/app-debug.apk) and enable "Send to AAPS and xDrip", disable "Send to NightScout".

![ESEL Broadcast](../images/ESEL.png)

Vzhledem k tomu, že data glykémií z Eversense někdy mohou obsahovat velký šum, je dobré povolit „Vyhlazování dat“ v aplikaci ESEL, což je lepším řešením než povolení možnosti „Vždy používat krátkodobý průměrný rozdíl glykémií místo rozdílu posledních 2 hodnot“ v AAPS.

- Set "MM640g" as BG source in in [ConfigBuilder, BG Source](../Configuration/Config-Builder.md#bg-source).

You can find the instruction for using xDrip with an Eversense [here](https://github.com/BernhardRo/Esel/tree/master/apk).
