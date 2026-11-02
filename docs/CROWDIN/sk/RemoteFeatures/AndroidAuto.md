# Android Auto

**AAPS** vám môže posielať informácie o vašom aktuálnom stave ako správu priamo do Android Auto vo vašom aute.

## Požiadavky

**AAPS** uses a feature of Android Auto which allows messages from apps on the mobile to be routed to the display of the car audio system.

To znamená, že:

* Android musí **AAPS** povoliť zobrazovať notifikácie a
* Keďže **AAPS** nie je oficiálna aplikácia, povoľte v Android Auto používanie „neznámych zdrojov“ (unknown sources).

![CGM dáta z AAPS v Android Auto](../images/android_auto_01.png)

(androidauto-check-that-aaps-can-show-notifications)=

## Check that AAPS can show notifications

**AAPS** vždy zobrazuje notifikáciu stavu s aktuálnou glykémiou, IOB a COB. Práve túto notifikáciu zobrazuje Android Auto v aute. V **AAPS** netreba nič zapínať, ale Android musí **AAPS** povoliť zobrazovať notifikácie.

V telefóne otvorte **Nastavenia** > **Aplikácie** > **AAPS** > **Upozornenia** (Notifications) a uistite sa, že **Všetky upozornenia aplikácie AAPS** (All AAPS notifications) je zapnuté.

![Všetky upozornenia aplikácie AAPS sú zapnuté](../images/android_auto_notifications_all.png)

Posuňte sa nižšie a uistite sa, že **Aktuálny stav** je zapnutý: to je kanál notifikácie stavu.

![Kanál notifikácií Aktuálny stav je zapnutý](../images/android_auto_ongoing_channel.png)

Pred cestou k autu teraz skontrolujte, či v telefóne vidíte notifikáciu stavu **AAPS**!

![Notifikácia AAPS v telefóne](../images/android_auto_04.png)

(androidauto-allow-the-use-of-unknown-sources-with-android-auto)=

## Allow the use of "unknown sources" with Android Auto.

Keďže **AAPS** nie je oficiálna aplikácia pre Android Auto, notifikácie je potrebné v Android Auto povoliť pre „neznáme zdroje“ (unknown sources). Robí sa to pomocou režimu vývojára, ktorý vám tu ukážeme.

Go to your car and connect your mobile with the car's audio system.

Teraz by ste mali vidieť obrazovku podobnú tejto.

![Zapnutie režimu vývojára](../images/android_auto_05.png)

Ťuknutím na ikonu **nastavení** spustite konfiguráciu.

Posuňte sa úplne na koniec stránky a vyberte **see more in the phone** (zobraziť viac v telefóne).

![Zapnutie režimu vývojára](../images/android_auto_06.png)

Teraz v mobile zapneme režim vývojára.

Prvá obrazovka vyzerá takto. Posuňte sa úplne na koniec stránky.

![Zapnutie režimu vývojára](../images/android_auto_07.png)

Tam uvidíte uvedenú verziu Android Auto. Ťuknite 10-krát (slovom desaťkrát) na verziu Android Auto. Touto skrytou kombináciou ste teraz zapli režim vývojára.

![Zapnutie režimu vývojára](../images/android_auto_08.png)

V dialógovom okne „Allow development settings?“ (Povoliť nastavenia pre vývojárov?) potvrďte, že chcete zapnúť režim vývojára.

![Zapnutie režimu vývojára](../images/android_auto_09.png)

V **nastaveniach pre vývojárov** zapnite „Unknown sources“ (Neznáme zdroje).

![Zapnutie režimu vývojára](../images/android_auto_10.png)

Teraz môžete režim vývojára ukončiť, ak chcete. Urobíte to cez ponuku s tromi bodkami vpravo hore.

## Zobrazenie notifikácií v aute

V Android Auto v aute ťuknite na **ikonu s číslom** vpravo dole.

![ikona s číslom - Android Auto v aute](../images/android_auto_11.png)

Vaše CGM dáta sa zobrazia takto:

![CGM dáta z AAPS v Android Auto](../images/android_auto_01.png)

(android-auto-troubleshooting)=

## Riešenie problémov:

* If you don't see the notification, check if you [allowed AAPS to show notifications](#androidauto-check-that-aaps-can-show-notifications) in Android and if [Android Auto has access rights to notifications](#androidauto-allow-the-use-of-unknown-sources-with-android-auto).