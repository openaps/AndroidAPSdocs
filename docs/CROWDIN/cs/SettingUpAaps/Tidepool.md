# Tidepool

Tidepool je nástroj třetí strany, který shromažďuje data o glykémii, inzulínu a sacharidech (a poznámky, které přidáte k ošetřením). Můžete ho používat k analýze těchto dat a k jejich sdílení s vaším lékařským týmem. Od verze AAPS 3.2 ho lze použít místo Nightscoutu pro splnění části Cíle 1. It can also be used in combination with Nightscout as an alternative reporting platform that integrates well with clinical settings. This may be the desired option for children using AAPS who want to have the remote monitoring and control capabilities of Nightscout, but want a reporting platform that their clinical team are more comfortable with.

Je důležité vědět, že Tidepool slouží jen k reportování. It is NOT a real-time follow app. Pokud potřebujete sledující mimo hlavní telefon s AAPS, musíte nastavit také Nightscout.

Poznámka: organizace Tidepool uvedla na trh produkt iOS Loop se schválením FDA. This effort has nothing to do with their data reporting platform or AAPS.


## Krok 1 – Vytvořte si účet Tidepool

- Přejděte na [tidepool.org](https://www.tidepool.org/)

- Zvolte „Personal Sign Up“ nebo „Sign Up“

- Vytvořte si e-mail a heslo a poznamenejte si je

- Zvolte „Personal Account“ a klikněte na „Continue“

- Vyplňte část s údaji o pacientovi a přijměte podmínky použití

- Ověřte svou e-mailovou adresu podle pokynů, které vám přijdou e-mailem


## Krok 2 – Připojte AAPS k Tidepoolu

- Otevřete **nabídku** (☰) v levém horním rohu hlavní obrazovky a zvolte „**Konfigurace**“

- Otevřete kategorii „**Komunikace**“ a zapněte „**Tidepool**“:

![Zapnutí Tidepoolu](../images/v4/Tidepool/tidepool_enable.png)

- Klepněte na „**Otevřít modul**“ pod Tidepoolem a potom klepněte na ikonu **Přihlášení** (šipka vedoucí do dveří) v pravém horním rohu

- Otevře se okno prohlížeče s přihlašovací stránkou Tidepoolu. Přihlaste se e-mailovou adresou a heslem, které jste vytvořili v kroku 1 výše:

![Přihlašovací stránka Tidepoolu](../images/v4/Tidepool/tidepool_login.png)

- Po úspěšném přihlášení se prohlížeč zavře a obrazovka Tidepool ukáže stav „**Připojeno**“; log pod ním zaznamenává nahrávání dat. Pokud se přihlášení nepodaří, zkontrolujte, že jsou vaše přihlašovací údaje správné a že jste u Tidepoolu ověřili svou e-mailovou adresu.

![Tidepool připojen](../images/v4/Tidepool/tidepool_status.png)

- V „**Nastavení**“ pluginu Tidepool otevřete „**Nastavení připojení**“. Ve výchozím stavu je volba „**Použít nastavení připojení k Nightscoutu**“ zapnutá, takže Tidepool nahrává za stejných podmínek, jaké jste nastavili pro Nightscout. Vypněte ji, pokud chcete pro Tidepool jiné podmínky, například nahrávat do Tidepoolu jen přes Wi-Fi a při nabíjení, zatímco Nightscout používá i mobilní data.

![Nastavení připojení se zapnutou volbou Použít nastavení připojení k Nightscoutu](../images/v4/Tidepool/tidepool_connection_settings.png) ![Samostatné nastavení připojení pro Tidepool](../images/v4/Tidepool/tidepool_connection_settings_separate.png)

Více pomoci s tím, jak používat svá data po nahrání do Tidepoolu, najdete na: [https://www.tidepool.org/viewing-your-data](https://www.tidepool.org/viewing-your-data)

(tidepool-menu)=
## Tlačítka Tidepoolu

V pravém horním rohu obrazovky Tidepool:

- Ikona **Přihlášení** nebo **Odhlásit** — připojení k vašemu účtu Tidepool nebo odpojení od něj. Zobrazuje se vždy jen jedna z nich: **Přihlášení**, když jste odhlášeni, a **Odhlásit**, když jste přihlášeni. **AAPS** vás před odhlášením požádá o potvrzení.
- Ikona ozubeného kola — nastavení Tidepoolu.

Tlačítka dole na obrazovce Tidepool:

- „**Nahrát nyní**“ — nahraje nová data hned, místo čekání na další automatické nahrání.
- „**Plná synchronizace**“ — znovu nahraje všechna data uložená v **AAPS**.
- „**Smazat všechna data**“ — smaže **všechna** data, která **AAPS** nahrálo do vašeho účtu Tidepool. Tuto akci nelze vrátit zpět. Používejte ji jen k odstranění chybných nebo zdvojených dat a potom spusťte „**Plná synchronizace**“, abyste svá data nahráli znovu.
- „**Vymazat log**“ — vyprázdní log zobrazený na obrazovce Tidepool.

![Obrazovka Tidepool a její tlačítka](../images/v4/Tidepool/tidepool_menu.png)

V Tidepoolu se data nahraná z **AAPS** 4 zobrazují pod názvem zařízení **AAPS**. Pokud jste Tidepool používali se starší verzí, viz [Co se změnilo v AAPS v4](#v4changes-tidepool). 
