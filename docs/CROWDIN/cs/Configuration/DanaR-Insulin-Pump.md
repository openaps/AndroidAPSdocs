# Pumpa DanaR

*Tyto pokyny pro nastavení aplikace a Vaší pumpy platí, pokud máte pumpu DanaR. Navštivte stránku [Pumpa DanaRS](./DanaRS-Insulin-Pump), pokud máte pumpu DanaRS z roku 2017 a novější.*

* Jděte na pumpě do HLAVNÍ NABÍDKY > NASTAVENÍ > UŽIV. FUNKCE
* Přejděte na "8. PRODL. BOLUS:"

![Pumpa DanaR](../images/danar1.png)

* Jděte do HLAVNÍ NABÍDKY > NASTAVENÍ > VYHLEDÁVÁNÍ
* Na telefonu v nastavení Bluetooth dejte "vyhledat zařízení", vyberte sériové číslo vaší DanaR a vyplňte heslo (heslo pro párování je 0000). Pokud se DanaR neobjevila v seznamu nalezených zařízení, restartujte telefon a vyndejte z DanaR baterii, vyměňte ji a tyto dva kroky opakujte znovu.

* In AAPS go to Config Builder and select the type of DanaR you have (DanaR, DanaR Korean, DanaRv2)

* Vyvolejte Menu ťuknutím na tři tečky v pravém horním rohu. Zvolte Nastavení.
* Vyberte DanaR Bluetooth zařízení a ťukněte na sériové číslo Vaší DanaR.
* Zvolte Heslo k pumpě a vložte Vaše heslo. (Výchozí heslo je 1234)
* If you want AAPS to allow basal rate above 200%, enable Use extended boluses for >200%. Mějte na paměti, že nemůžete používat smyčku s tímto nastavením, pokud chcete používat rozšířený bolus pro jídlo.
* V Nastavení pro pumpu DanaR můžete změnit výchozí rychlost podávání bolusu (12sec na 1U, 30sec na 1U nebo 60sec na 1U).
* Nastavte bazální krok na pumpě na 0.01 U/h
* Nastavte bolusový krok na pumpě 0.1 U/h
* Na pumpě povolte rozšířené bolusy

## Cestování mezi časovými pásmy s pumpou Dana R

Více informací o cestování přes více časových pásem najdete v části [Cestování s pumpou mezi časovými pásmy](Timezone-traveling-danarv2-danars).