Vzdálené monitorování
**************************************************

.. image:: ../images/KidsMonitoring.png
  :alt: Monitorování dětí
  
AndroidAPS nabízí několik možností pro vzdálené monitorování dětí a také umožňuje odesílání vzdálených příkazů. Samozřejmě můžete také použít vzdálené monitorování, abyste sledovali svého partnera nebo přítele.

Funkce
==================================================
* Pumpa dítěte je řízena z telefonu dítěte používajícího AndroidAPS.
* Rodiče mohou na dálku sledovat všechny důležité údaje, jako jsou glykémie, zbývající sacharidy, inzulin atd. pomocí aplikace **NSClient** v jejich telefonu. Settings must be the same in AndroidAPS and NSClient app.
* Rodiče mohou být na svém mobilu varováni alarmy v aplikaci **xDrip v režimu follower**.
* Vzdálené ovládání AndroidAPS pomocí `SMS příkazů <../Children/SMS-Commands.html>`_ je zabezpečeno dvoufaktorovým ověřením.
* Remote control through NSClient app is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see `release notes for Version 2.8.1.1 <https://androidaps.readthedocs.io/en/latest/EN/Installing-AndroidAPS/Releasenotes.html#important-hints>`_ for further details.

Nástroje a aplikace pro vzdálené monitorování
==================================================
* `Nightscout <http://www.nightscout.info/>`_ v prohlížeči (hlavně zobrazení dat)
*	NSClient app is a stripped down version of AAPS capable of following somebody, making profile switches, setting TTs and entering carbs. There are 2 apps:  `NSClient & NSClient2 to download <https://github.com/nightscout/AndroidAPS/releases/>`_. The only difference is the app name. This way you can install the app twice on the same phone, to be able to follow 2 different persons/nightscouts with it.
* Dexcom follow, pokud používáte originální aplikaci Dexcom (pouze hodnoty glykémie)
*	`xDrip+ <../Configuration/xdrip.html>`_ v módu follower (hlavně hodnoty BG a **alarmy**)
*	`Sugarmate <https://sugarmate.io/>`_ or `Spike <https://spike-app.com/>`_ na iOS (hlavně hodnoty glykémií a **alarmy**)

Co je třeba zvážit
==================================================
* Nastavení správných `parametrů léčby <../Getting-Started/FAQ.html#how-to-begin>`_ (bazální dávky, DIA, ISF...) u dětí je obtížné, zejména při zapojení růstových hormonů. 
* Settings must be the same in AndroidAPS and NSClient app.
* Vezměte v úvahu časový rozdíl mezi hlavním a sledujícím zařízením způsobený časem potřebným k nahrávání a stahování, a také skutečnosti, že hlavní AAPS telefon bude nahrávat pouze po spuštění smyčky.
* Takže si dejte načas a nastavte je správně a otestujte je v reálném životě se svým dítětem vedle sebe ještě předtím, než začnete se vzdáleným monitorováním a řízením na dálku. Ideální dobou pro jejich nastavení a otestování by mohly být školní prázdniny.
* Jaký je váš nouzový plán, když vzdálené ovládání nefunguje (např. problémy se sítí)?
* Vzdálené monitorování a řízení může být opravdu užitečné ve školce a na základní škole. Ujistěte se však, že učitelé a pedagogové jsou si vědomi plánu léčby vašich dětí. Příklady takových plánů péče lze nalézt v sekci `Soubory skupiny AndroidAPS users <https://www.facebook.com/groups/AndroidAPSUsers/files/>`_ na Facebooku.
