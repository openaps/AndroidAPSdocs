Vzdálené monitorování
**************************************************

.. image:: ../images/KidsMonitoring.png
  :alt: Monitorování dětí
  
AndroidAPS nabízí několik možností pro vzdálené monitorování dětí a také umožňuje odesílání vzdálených příkazů. Samozřejmě můžete také použít vzdálené monitorování, abyste sledovali svého partnera nebo přítele.

Funkce
==================================================
* Pumpa dítěte je řízena z telefonu dítěte používajícího AndroidAPS.
* Rodiče mohou na dálku sledovat všechny důležité údaje, jako jsou glykémie, zbývající sacharidy, inzulin atd. pomocí aplikace **NSClient** v jejich telefonu. V AndroidAPS a NSCinetu musí být stejné nastavení.
* Rodiče mohou být na svém mobilu varováni alarmy v aplikaci **xDrip v režimu follower**.
* Remote control of AndroidAPS using `SMS Commands <../Children/SMS-Commands.html>`_ secured by two-factor authentication.
* Dálkové přepínání profilů a dočasných cílů prostřednictvím aplikace NSClient.

Nástroje a aplikace pro vzdálené monitorování
--------------------------------------------------
* `Nightscout <http://www.nightscout.info/>`_ v prohlížeči (hlavně zobrazení dat)
* Aplikace NSClient
* Dexcom follow, pokud používáte originální aplikaci Dexcom (pouze hodnoty glykémie)
*	`xDrip+ <../Configuration/xdrip.html>`_ v módu follower (hlavně hodnoty BG a **alarmy**)
*	`Sugarmate <https://sugarmate.io/>`_ or `Spike <https://spike-app.com/>`_ on iOS (mainly BG values and **alarms**)

Co je třeba zvážit
==================================================
* Nastavení správných `parametrů léčby <../Getting-Started/FAQ.html#how-to-begin>`_ (bazální dávky, DIA, ISF...) u dětí je obtížné, zejména při zapojení růstových hormonů. 
* V AndroidAPS a NSCinetu musí být stejné nastavení.
* Vezměte v úvahu časový rozdíl mezi hlavním a sledujícím zařízením způsobený časem potřebným k nahrávání a stahování, a také skutečnosti, že hlavní AAPS telefon bude nahrávat pouze po spuštění smyčky.
* Takže si dejte načas a nastavte je správně a otestujte je v reálném životě se svým dítětem vedle sebe ještě předtím, než začnete se vzdáleným monitorováním a řízením na dálku. Ideální dobou pro jejich nastavení a otestování by mohly být školní prázdniny.
* Jaký je váš nouzový plán, když vzdálené ovládání nefunguje (např. problémy se sítí)?
* Vzdálené monitorování a řízení může být opravdu užitečné ve školce a na základní škole. Ujistěte se však, že učitelé a pedagogové jsou si vědomi plánu léčby vašich dětí. Příklady takových plánů péče lze nalézt v sekci `Soubory skupiny AndroidAPS users <https://www.facebook.com/groups/AndroidAPSUsers/files/>`_ na Facebooku.
