Freestyle Libre 1
******************

Abyste mohli používat Libre jako CGM senzor, který získává nové hodnoty glykémie každých 5 minut, je potřeba nejprve koupit NFC-Bluetooth adaptér, např.:

* MiaoMiao-Reader `https://www.miaomiao.cool/ <https://www.miaomiao.cool/>`_
* Blukon Nightrider `https://www.ambrosiasys.com/howit <https://www.ambrosiasys.com/howit>`_
* BlueReader `https://bluetoolz.de/blueorder/#home <https://bluetoolz.de/blueorder/#home>`_
* Sony Smartwatch 3 (SWR50) jako nástroj pro odečítání `https://github.com/pimpimmi/LibreAlarm/wiki/ <https://github.com/pimpimmi/LibreAlarm/wiki/>`_

Ani v současné době není možné při používání Libre 1 jako zdroje glykémie povolit v rámci algoritmu SMB funkce ‘Vždy povolit SMB’ a ‘Povolit SMB po jídle’. Hodnoty glykémií z Libre 1 nejsou dostatečné vyhlazené, aby bylo použití těchto funkcí bezpečné. Další podrobnosti viz `Vyhlazování glykémií <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_.

Pokud používáte xdrip
===================
* Pokud jste tak dosud neučinili, stáhněte si xdrip postupujte podle pokynů v části `LimiTTEer <https://github.com/JoernL/LimiTTer>`_,  `Libre Alarm <https://github.com/pimpimmi/LibreAlarm/wiki>`_ or `BlueReader <https://unendlichkeit.net/wordpress/?p=680&lang=en>`_ (`Hardware <https://bluetoolz.de/wordpress/>`_).
* V xDrip vyberte Nastavení -> Komunikace mezi aplikacemi - > Lokální odesílání dat a vyberte zapnout.
* V xDrip vyberte Nastavení -> Komunikace mezi aplikacemi - > Přijímat ošetření a vyberte vypnout.
* Chcete-li, aby bylo možné přes AndroidAPS kalibrovat senzor, jděte v xDripu do Nastavení > Komunikace mezi aplikacemi > Accept Calibrations a vyberte zapnout.  Můžete také zkontrolovat v xDripu nastavení v částí Nastavení > Méně častá nastavení > Rozšířené kalibrace.
* Na kartě Konfigurace (v AndroidAPS) vyberte xDrip.
* Nastavení xDrip+ podle snímků obrazovky najdete na stránce `Nastavení xDrip+ <../Configuration/xdrip.html>`__. Je zde část pro základní nastavení xDrip+ a pro nastavení xDrip_ s Freestyle Libre.
* Pokud AndroidAPS nepřijímá v režimu letadlo hodnoty glykémie, musíte nastavit `Identify receiver` tak, jak je popsáno na stránce `nastavení xDrip+ <../Configuration/xdrip.html>`_.

Pokud používáte Glimp
==================
* Pokud jste tak dosud neučinili, stáhněte si aplikaci Glimp a postupujte podle instrukcí v části `Nightscout <http://www.nightscout.info/wiki/welcome/nightscout-for-libre>`_.
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte Glimp.
