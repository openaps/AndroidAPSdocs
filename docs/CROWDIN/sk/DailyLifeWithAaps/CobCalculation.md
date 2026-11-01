# Výpočet COB

## Ako AAPS vypočítava hodnotu COB?

Keď používateľ zadá sacharidy k jedlu alebo ako korekciu sacharidmi, **AAPS** ich pripočíta k aktuálnym aktívnym sacharidom (**COB**). **AAPS** potom počíta vstrebávanie sacharidov používateľa na základe pozorovaných odchýlok **glykémie** používateľa. The rate of absorption depends on the carb’s sensitivity factor (**CSF**). Nie je to nastavenie v **Profile** používateľa, ale **AAPS** ho počíta podľa nastavenia **ISF/I:C**. Udáva, o koľko mg/dl zvýši 1 g sacharidov **glykémiu** používateľa.

## Faktor citlivosti na sacharidy

Vzorec, ktorý **AAPS** používa, je:

- vstrebané sacharidy = odchýlka * ic / isf.

Zmeny v **Profile** používateľa majú tento účinok:

- _increase_ **IC** - by increasing the carbs absorbed every 5 minutes thus shorten total time of absorption;

- _zvýšenie_ **ISF** – zníži množstvo sacharidov vstrebaných každých 5 minút, a tým predĺži celkový čas vstrebávania; a

- _change_ **Profile Percentage** - increase/decrease both values thus has no impact on carbs absorption time.

For example, if the user’s **Profile** **ISF** is 100 and the **I:C** is 5, the user’s Carb Sensitivity Factor would be 20. Za každých 20 mg/dl, o ktoré stúpne **glykémia** používateľa, **AAPS** započíta 1 g sacharidov ako vstrebaný. Výpočet **COB** ovplyvňuje aj kladný **IOB**. Ak teda **AAPS** predpovedá, že **glykémia** používateľa kvôli **IOB** klesne o 20 mg/dl, ale namiesto toho zostane stabilná, **AAPS** tiež započíta 1 g sacharidov ako vstrebaný.

Sacharidy sa vstrebávajú aj spôsobmi opísanými nižšie, podľa toho, ktorý algoritmus citlivosti si používateľ v **AAPS** vybral.

## Citlivosť na sacharidy – Oref1

Nevstrebané sacharidy sa po určitom čase odstránia z výpočtov:

![Oref1](../images/cob_oref0_orange_II.png)

![Graf COB s ukončením vstrebávania (cut-off) pri Oref1](../images/cob_oref0_orange_I.png)

```{admonition} Older screenshot
:class: note
Snímka obrazovky vyššie je zo staršej verzie **AAPS** – v **AAPS** 4 vyzerajú grafy trochu inak, ale graf **COB** obsahuje rovnaké informácie.
```


## Citlivosť na sacharidy – vážený priemer (WeightedAverage)

Vstrebávanie sa počíta tak, aby po určenom čase bolo COB = 0:

![AAPS, WeightedAverage](../images/cob_aaps2_orange_II.png)

Ak sa namiesto hodnoty vypočítanej z odchýlok **glykémie** použije minimálne vstrebávanie sacharidov (min_5m_carbimpact), na grafe **COB** sa zobrazí oranžová bodka.

(CobCalculation-detection-of-wrong-cob-values)=
## Zisťovanie nesprávnych hodnôt COB

**AAPS** will warn the user if they are about to bolus with **COB** from a previous meal if the algorithm detects current **COB** calculation as incorrect. V takom prípade sa používateľovi po použití bolusovej kalkulačky zobrazí na potvrdzovacej obrazovke ďalšia nápoveda.

### Ako AAPS zisťuje nesprávne hodnoty COB?

__AAPS__ bežne zisťuje vstrebávanie sacharidov podľa odchýlok **glykémie**. Ak používateľ zadal sacharidy, ale **AAPS** nedokáže zistiť ich odhadované vstrebávanie z odchýlok **glykémie**, použije na výpočet vstrebávania metódu [min_5m_carbimpact](#Preferences-min_5m_carbimpact) (tzv. „záložná metóda“, fallback). Keďže táto metóda počíta iba minimálne vstrebávanie sacharidov a nezohľadňuje odchýlky **glykémie**, môže viesť k nesprávnym hodnotám COB.

![Nápoveda pri nesprávnej hodnote COB](../images/Calculator_SlowCarbAbsorption.png)

Na obrázku vyššie bola v 66 % času absorpcia sacharidov vypočítaná pomocou min_5m_carbimpact namiesto hodnoty zistenej z odchýlok. To naznačuje, že používateľ mohol mať menej **COB**, ako vypočítal algoritmus.

### Ako vyriešiť toto varovanie?

- Zvážte zrušenie ošetrenia – namiesto OK stlačte „Zrušiť“.
- Vypočítajte si nadchádzajúce jedlo znova pomocou bolusovej kalkulačky a nechajte políčko **COB** nezaškrtnuté.
- Ak potrebujete korekčný bolus, zadajte ho ručne.
- Be careful not to overdose or stack insulin!


### Prečo algoritmus správne nedetekuje COB?

Môže to byť preto, lebo:
- Používateľ možno pri zadávaní nadhodnotil množstvo sacharidov.
- Aktivita/cvičenie po predchádzajúcom jedle.
- I:C treba upraviť.
- Hodnota min_5m_carbimpact je nesprávna (odporúčaná hodnota je 8 so SMB a 3 s AMA).


## Ručná oprava zadaných sacharidov

Ak boli sacharidy nadhodnotené alebo podhodnotené, môžete to opraviť na obrazovke **História ošetrení**, ako je opísané [tu](#screens-bolus-carbs).


## Oprava sacharidov – ako vymazať záznam sacharidov z ošetrení


Obrazovku **História ošetrení** môžete použiť na opravu chybného záznamu sacharidov tak, že ho vymažete. Môže to byť preto, že používateľ pri zadávaní sacharidy nadhodnotil alebo podhodnotil:

![Vymazanie záznamu sacharidov z histórie ošetrení](../images/e123d85d-907e-4545-bf1b-09fee4d42555.png)

1. Skontrolujte a zapamätajte si aktuálne **COB** a **IOB** na hlavnej obrazovke **AAPS**.
2. Otvorte **História ošetrení** (bočné menu → *História ošetrení*), kartu **Sacharidy a bolusy**. Depending on the pump, the carbs might show together with insulin in one line or as a separate entry (e.g. with Dana RS).
3. **Dlho podržte** chybný záznam sacharidov – zoznam sa prepne do **režimu výberu** so zaškrtávacím políčkom na každom riadku a záznam sa zaškrtne (vyššie označené ako **1**). Zaškrtnite aj ďalšie záznamy, ktoré chcete odstrániť.
4. Ťuknite na ikonu **🗑 Vymazať** v hornej lište (označená **2**) a potvrďte – potvrdzovací dialóg presne vypíše, čo sa odstráni.
5. Uistite sa, že sacharidy boli úspešne odstránené – znova skontrolujte **COB** na hlavnej obrazovke **AAPS**.
6. To isté urobte pre **IOB**, ak bol iba jeden riadok so sacharidmi aj inzulínom.
7. Ak sacharidy nevymažete tak, ako treba, a pridáte ďalšie sacharidy podľa tejto časti, hodnota **COB** bude príliš vysoká a **AAPS** môže podať príliš veľa inzulínu.
8. Zadajte správne množstvo sacharidov v dialógu **Sacharidy** (**Ošetrenia** → **Sacharidy**) a nastavte správny čas udalosti.
9. Ak bol iba jeden riadok so sacharidmi aj inzulínom, používateľ by mal znova pridať aj množstvo inzulínu. Nezabudnite nastaviť správny čas udalosti a po potvrdení nového záznamu skontrolujte **IOB** na hlavnej obrazovke.

