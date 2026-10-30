# Android Auto

**AAPS** vám může posílat informace o vašem aktuálním stavu jako zprávu přímo do Android Auto ve vašem autě.

## Požadavky

**AAPS** využívá funkci Android Auto, která umožňuje přesměrovat zprávy z aplikací v mobilu na displej audiosystému v autě.

To znamená, že:

* Android musí aplikaci **AAPS** povolit zobrazovat oznámení a
* Protože **AAPS** není oficiální aplikace, povolte v Android Auto použití „neznámých zdrojů“.

![Data CGM z AAPS v Android Auto](../images/android_auto_01.png)

## Check that AAPS can show notifications

**AAPS** vždy zobrazuje stavové oznámení s vaší aktuální glykémií, IOB a COB. Toto oznámení Android Auto zobrazuje v autě. V **AAPS** není potřeba nic zapínat, ale Android musí aplikaci **AAPS** povolit zobrazovat oznámení.

V telefonu otevřete **Nastavení** > **Aplikace** > **AAPS** > **Oznámení** a ujistěte se, že je zapnuté **Všechna oznámení aplikace AAPS**.

![Všechna oznámení aplikace AAPS zapnutá](../images/android_auto_notifications_all.png)

Sjeďte dolů a ujistěte se, že je zapnutý **Průběžný stav**: to je kanál stavového oznámení.

![Kanál oznámení Průběžný stav zapnutý](../images/android_auto_ongoing_channel.png)

Než půjdete k autu, zkontrolujte prosím, že v telefonu vidíte stavové oznámení **AAPS**!

![Oznámení AAPS v telefonu](../images/android_auto_04.png)

## Allow the use of "unknown sources" with Android Auto.

Protože **AAPS** není oficiální aplikace pro Android Auto, musí být oznámení v Android Auto povolena pro „neznámé zdroje“. K tomu se používá režim vývojáře, který vám zde ukážeme.

Jděte do auta a připojte mobil k audiosystému auta.

Nyní byste měli vidět obrazovku podobnou této.

![Zapnutí režimu vývojáře](../images/android_auto_05.png)

Konfiguraci spustíte klepnutím na ikonu **nastavení**.

Sjeďte dolů na konec stránky a vyberte **see more in the phone** (zobrazit více v telefonu).

![Zapnutí režimu vývojáře](../images/android_auto_06.png)

Nyní na mobilu zapneme režim vývojáře.

První obrazovka vypadá takto. Sjeďte dolů na konec stránky.

![Zapnutí režimu vývojáře](../images/android_auto_07.png)

Tam uvidíte uvedenou verzi Android Auto. Klepněte 10krát (slovy desetkrát) na verzi Android Auto. Touto skrytou kombinací jste nyní zapnuli režim vývojáře.

![Zapnutí režimu vývojáře](../images/android_auto_08.png)

V dialogu „Allow development settings?“ („Povolit nastavení pro vývojáře?“) potvrďte, že chcete zapnout režim vývojáře.

![Zapnutí režimu vývojáře](../images/android_auto_09.png)

V **nastavení pro vývojáře** zapněte „Neznámé zdroje“ („Unknown sources“).

![Zapnutí režimu vývojáře](../images/android_auto_10.png)

Nyní můžete režim vývojáře opustit, pokud chcete. Chcete-li jej opustit, klepněte na tři tečky vpravo nahoře.

## Zobrazení oznámení v autě

Klepněte na **ikonu s číslem** vpravo dole v Android Auto ve vašem autě.

![ikona s číslem – Android Auto v autě](../images/android_auto_11.png)

Vaše data z CGM se zobrazí takto:

![Data CGM z AAPS v Android Auto](../images/android_auto_01.png)

(android-auto-troubleshooting)=

## Poradce při potížích:

* Pokud oznámení nevidíte, zkontrolujte, zda jste v Androidu [povolili AAPS zobrazovat oznámení](#check-that-aaps-can-show-notifications) a zda má [Android Auto přístupová práva k oznámením](#allow-the-use-of-unknown-sources-with-android-auto).