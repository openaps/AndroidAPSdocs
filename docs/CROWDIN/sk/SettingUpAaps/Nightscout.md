# Nightscout

(Nightscout-security-considerations)=

## Bezpečnostné hľadiská

Nightscout je reportovací a monitorovací server **AAPS**: **AAPS** doň nahráva vaše údaje a vy alebo vaši opatrovatelia si ich pozeráte na webovej stránke Nightscoutu alebo v aplikáciách pre sledujúcich. Obsahuje vaše zdravotné údaje, profily a ošetrenia, preto sa oplatí premyslieť zabezpečenie vašej stránky Nightscout.

V **AAPS** 4 vzdialené ovládanie neprebieha cez webovú stránku Nightscoutu. Kým je zapnuté ovládanie z klienta ([režim zvýšeného zabezpečenia](#client-master-control-hardened-mode)), ošetrenia alebo ciele zadané priamo do Nightscoutu **AAPS** **nepoužije**. Vzdialené príkazy namiesto toho prichádzajú zo spárovaného **AAPSClient** – pozrite [Ovládanie Master ↔ Client](#client-master-control).

Ak používate Nightscout ako zdroj glykémie pre AAPS, buďte maximálne opatrní.

### Nastavenia Nightscout

Verejný prístup k vášmu Nightscoutu môžete zakázať pomocou [autentizačných rolí](https://nightscout.github.io/nightscout/security): svoju URL zdieľajte iba s tokenom `readable`, nikdy nie s tokenom `admin`.

`API_SECRET` v Nightscoute je hlavné heslo vašej stránky: nezdieľajte ho verejne.

(Nightscout-aaps-settings)=

### Nastavenia AAPS

Prijímanie údajov z Nightscoutu (zmeny profilu, ošetrenia, ...) je voliteľné a predvolene vypnuté. Prepínače opísané nižšie sú skryté, keď je zapnuté ovládanie z klienta (režim zvýšeného zabezpečenia), a v [Jednoduchom móde](#preferences-simple-mode).

* Nastavenia **Synchronizácia** pluginu NSClientV3 otvoríte buď cez 1) **Nastavenia** (ikona ozubeného kolieska na hlavnej obrazovke) -> **NSClientV3** -> **Synchronizácia**, alebo 2) **Konfigurácia** (menu ☰) -> **Komunikácia** -> „**Nastavenia**“ pod NSClientV3.
* Zapnite „Nahrávať dáta na NS“.
* „Nahrávať glykémie do NS“ nájdete v nastaveniach vášho zdroja glykémie (**Konfigurácia → Zdroj glykémie → Nastavenia**). Zapnite ho, okrem prípadu, keď je zdrojom glykémie pre AAPS Nightscout: vtedy ho **nezapínajte**.
* Nezapínajte „Prijímať CGM dáta z NS“, pokiaľ Nightscout nie je vaším zdrojom glykémie.

#### Nesynchronizovať z Nightscoutu

Ak necháte všetky možnosti „Prijímať ... z NS“ vypnuté, AAPS nepoužije žiadnu zmenu z Nightscoutu:

![Iba nahrávanie do Nightscoutu](../images/preferences/settings_nsclient_sync.png)

#### Prevziať zmeny z Nightscoutu

Ak tieto možnosti zapnete, môžete meniť nastavenia AAPS cez Nightscout, napríklad upravovať a prepínať profily, nastavovať dočasné ciele a pridávať sacharidy, ktoré AAPS zoberie do úvahy. Zobrazujú sa iba vtedy, keď je ovládanie z klienta aj Jednoduchý mód vypnuté.  
Pozor: ošetrenia inzulínom sa použijú iba na výpočty, ako pri „Nepodávať bolus, iba zaznamenať“.

![Zapnuté možnosti prijímania z Nightscoutu](../images/NSsafety3.png)

### Ďalšie nastavenia zabezpečenia

Telefón udržujte aktualizovaný, ako je opísané v časti [Bezpečnosť na prvom mieste](#preparing-safety-first).

(Nightscout-manual-nightscout-setup)=

## Manuálne nastavenie Nightscoutu

Predpokladáme, že stránku Nightscout už máte. Ak nie, úplný návod na nastavenie nájdete na stránke [Nightscout](http://nightscout.github.io/nightscout/new_user/). Nasledujúce pokyny sú nastavenia, ktoré budete musieť pridať aj na svoju stránku Nightscout. Vaša stránka Nightscout musí mať aspoň verziu 15, preto skontrolujte, že používate [najnovšiu verziu](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version), inak sa v aplikácii AAPS zobrazí chybové hlásenie.

* [Upravte svoje premenné](https://nightscout.github.io/nightscout/setup_variables/#nightscout-configuration)

* Pridajte alebo upravte premenné takto:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Na [sledovanie pumpy](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring) môžete nastaviť rôzne alarmy, odporúčame najmä alarm na percento batérie: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

* Uložte úpravy. Váš Nightscout by teraz mal zobrazovať rámčeky s údajmi. Ak chcete, aby sa zobrazovali vždy, pridajte ich do `SHOW_PLUGINS`.
  
  * `SHOW_PLUGINS` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  
  ![Rámčeky s údajmi v Nightscoute](../images/nightscout1.png)

## Nightscout ako platený SaaS (softvér ako služba)

Na nastavenie premenných použite webové rozhranie dodávateľa. V prípade potreby kontaktujte podporu dodávateľa.