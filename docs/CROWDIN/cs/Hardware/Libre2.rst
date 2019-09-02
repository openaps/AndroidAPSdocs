Freestyle Libre 2
*********************

Senzor Freestyle Libre 2 dokáže poskytovat systému AndroidAPS glykémie každých 5 minut. Vzhledem k tomu, že je odesílá prostřednictvím bluetooth přímo do telefonu, není již potřeba žádný bluetooth adaptér, jako např. MiaoMiao. Ani v současné době není možné při používání Libre 2 jako zdroje glykémie povolit v rámci algoritmu SMB funkce ‘Vždy povolit SMB’ a ‘Povolit SMB po jídle’. Hodnoty glykémií z Libre 2 nejsou dostatečné vyhlazené, aby bylo použití těchto funkcí bezpečné. Další podrobnosti viz `Vyhlazování glykémií <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>`_.

Krok 1: Sestavte si svou vlastní upravenou aplikaci Librelink
==============
* Postupujte podle `těchto pokynů <https://github.com/user987654321resu/Libre2-patched-App>`_ a sestavte si vlastní upravenou aplikaci Librelink.
* Nainstalujte ji do telefonu a spusťte nový senzor s upravenou aplikací.

Step 2: Nainstalujte a nastavte aplikaci xDrip+
==============
* Pokud jste tak dosud neučinili, stáhněte si některou z nejnovějších verzí aplikace xdrip (tzv. nightly built) z `tohoto umístění <https://github.com/NightscoutFoundation/xDrip/releases>`_.
* V xDrip vyberte Nastavení -> Komunikace mezi aplikacemi - > Lokální odesílání dat a vyberte zapnout.
* V xDrip vyberte Nastavení -> Komunikace mezi aplikacemi - > Přijímat ošetření a vyberte vypnout.
* Chcete-li, aby bylo možné přes AndroidAPS kalibrovat senzor, jděte v xDripu do Nastavení > Komunikace mezi aplikacemi > Accept Calibrations a vyberte zapnout.  Můžete také zkontrolovat v xDripu nastavení v částí Nastavení > Méně častá nastavení > Rozšířené kalibrace.
* Na kartě Konfigurace (v AndroidAPS) vyberte xDrip.
* Nastavení xDrip+ podle snímků obrazovky najdete na stránce `Nastavení xDrip+ <../Configuration/xdrip.md>`__. Je zde část pro základní nastavení xDrip+ a pro nastavení xDrip_ s Freestyle Libre.

Step 3: Nakonfigurujte AndroidAPS
==============
* V AndroidAPS přejděte na kartu Konfigurace > Zdroj glykémie a vyberte 'xDrip+' 
* Pokud AndroidAPS nepřijímá v režimu letadlo hodnoty glykémie, musíte nastavit `Identify receiver` tak, jak je popsáno na stránce `nastavení xDrip+ <../Configuration/xdrip.md>`_.
