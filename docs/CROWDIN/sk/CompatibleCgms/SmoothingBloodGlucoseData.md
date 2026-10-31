# Vyhladzovanie údajov glykémie

Ak údaje **glykémie** skáču alebo sú zašumené, **AAPS** môže dávkovať inzulín nesprávne, čo vedie k vysokým alebo nízkym glykémiám. Ak pri CGM pozorujete chyby alebo skákajúce údaje, je dôležité vypnúť okruh, kým sa problém nevyrieši. V závislosti od vášho CGM môžu byť príčinou takýchto problémov nastavenia CGM v **AAPS** (ako je vysvetlené nižšie) alebo problém s miestom zavedenia senzora CGM (čo môže vyžadovať výmenu senzora CGM).

## Vyhladzovanie dát v AAPS

**AAPS** ponúka možnosť vyhladzovať údaje priamo v **AAPS**, a nie v aplikácii CGM. Otvorte **ponuku** (☰), vyberte [**Konfigurácia**](../SettingUpAaps/ConfigBuilder.md) a potom **Vyhladzovanie**. Sú štyri možnosti a naraz môže byť aktívna iba jedna: **Žiadne vyhladzovanie**, **Exponenciálne vyhladzovanie**, **Priemerovacie vyhladzovanie** a **Unscented Kalmanov filter**.

![Konfigurácia > Vyhladzovanie](../images/v4/Configuration/configuration_smoothing.png)

### Exponenciálne vyhladzovanie

Vo všeobecnosti je to odporúčaná možnosť na začiatok, pretože najsilnejšie odstraňuje šum a prepisuje aj najnovšiu hodnotu. Ďalšie konkrétne odporúčania však nájdete v tabuľke nižšie.

### Priemerovacie vyhladzovanie

Táto možnosť funguje podobne ako spätné vyhladzovanie (back smoothing), ktoré bolo predtým zavedené na niektorých platformách CGM. Rýchlejšie reaguje na nedávne zmeny hodnoty glykémie, a preto je náchylnejšie na nesprávnu reakciu na zašumené dáta z CGM.

### Žiadne vyhladzovanie

Túto možnosť použite iba vtedy, ak vaša zberná aplikácia (collector) údaje z CGM správne vyhladzuje ešte pred ich odoslaním do **AAPS**.

### Unscented Kalmanov filter (UKF)

Táto možnosť používa štatistický model, ktorý z prichádzajúcich (možno zašumených) hodnôt priebežne odhaduje vašu skutočnú glykémiu a rýchlosť jej zmeny a automaticky sa prispôsobuje tomu, aký zašumený je váš senzor práve teraz. Zistí aj náhle odľahlé hodnoty a vyradí ich. Je to pokročilejšia alternatíva k exponenciálnemu a priemerovaciemu vyhladzovaniu. Hodí sa, ak chcete, aby sa vyhladzovanie samo prispôsobovalo meniacej sa úrovni šumu vášho senzora namiesto použitia pevnej metódy.

(smoothing-xdrip-dexcom-g6)=

## Odporúčania na použitie vyhladzovania

Metódu vyhladzovania môžete meniť aj automaticky, napríklad podľa veku senzora, pomocou [akcie automatizácie](#automations-automation-action) **Zmeniť vyhladzovanie**.

|               |     Exponenciálne     | Priemerovacie  | Žiadne vyhladzovanie |
| ------------- |:---------------------:|:--------------:|:--------------------:|
| G5/G6/ONE     | Pri zašumených dátach |                |      Odporúčané      |
| G7/ONE+/Stelo | Pri zašumených dátach | Ak je stabilný |                      |

Senzory Libre sú zašumené a môžu vyžadovať vyhladzovanie. Pri priamom pripojení xDrip alebo pri zdroji dát z upravenej aplikácie (príjem z inej aplikácie, vrátane Juggluco) [vyhladzovanie už prebieha v aplikácii](#libre2-value-smoothing-raw-values).

| Senzor / zdroj dát  |   Juggluco    | xDrip priame pripojenie | xDrip mostík  | xDrip upravená aplikácia |
| ------------------- |:-------------:|:-----------------------:|:-------------:|:------------------------:|
| Libre 1/14 days/Pro |      N/A      |           N/A           | Priemerovacie |           N/A            |
| Libre 2/2+ (EÚ)     | Priemerovacie |         Žiadne          | Priemerovacie |          Žiadne          |
| Libre 2/2+/3/3+     | Priemerovacie |           N/A           |      N/A      |          Žiadne          |
