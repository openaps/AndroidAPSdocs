# Pumpa DanaR

*Tieto pokyny určené pre nastavenie vašej aplikácie a pumpy platia, pokiaľ máte pumpu DanaR. Visit [DanaRS Insulin Pump](./DanaRS-Insulin-Pump.md) if you have the DanaRS launched in 2017 instead.*

* V menu pumpy zvoľte HLAVNÍ NABÍDKA > NASTAVENÍ > UŽIV. FUNKCE
* Turn on "8. Predĺžený bolus"

![Pumpa DanaR](../images/danar1.png)

* Prejdite do HLAVNÍ NABÍDKA > NASTAVENÍ > VYHLEDÁVANÍ
* V Bluetooth nastaveniach telefónu dajte Vyhľadať blízke zariadenia, vyberte sériové číslo vašej pumpy DanaR a zadajte heslo (heslo pre spárovanie je 0000). Ak sa DanaR neobjavila v Bluetooth vyhľadávaní medzi dostupnými spárovateľnými zariadeniami, reštartujte telefón, vyberte batériu z pumpy, vymeňte ju a vyššie uvedené 2 kroky opakujte.

* In AAPS go to Config Builder and select the type of DanaR you have (DanaR, DanaR Korean, DanaRv2)

* Stlačte ikonku menu (3 bodky) v pravej hornej časti obrazovky. Zvoľte Nastavenia.
* Vyberte DanaR Bluetooth zariadenie a kliknite na sériové číslo vašej pumpy DanaR.
* Vyberte Heslo do pumpy a zadajte ho. (predvolené heslo je 1234)
* If you want AAPS to allow basal rate above 200%, enable Use extended boluses for >200%. Pri takomto nastavení umožňujúcom systému vysoké dočasné bazály nad 200 % však nebudete môcť používať predĺžené bolusy (platí pre pôvodnú verziu firmware pumpy).
* V nastaveniach pre pumpu DanaR môžete zmeniť Rýchlosť bolusu (12sec na 1u, 30sec na 1u alebo 60sec na 1u).
* Nastavte bazálny krok na pumpe na 0.01U/h
* Set bolus step on pump to 0.1 U/h
* Aktivovať v pumpe predĺžené bolusy

## Cestovanie medzi časovými pásmami s pumpou Dana R

For information on traveling across time zones see section [Timezone traveling with pumps](#timezone-traveling-danarv2-danars).