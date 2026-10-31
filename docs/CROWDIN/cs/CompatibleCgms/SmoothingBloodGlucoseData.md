# Vyhlazování dat glykémie

Pokud jsou data **glykémie** skákající/zašuměná, **AAPS** může dávkovat inzulín nesprávně, což vede k vysokým nebo nízkým glykémiím. Pokud u svého CGM pozorujete chyby nebo skákající data, je důležité vypnout smyčku, dokud se problém nevyřeší. Podle toho, jaký CGM máte, mohou být příčinou takových problémů nastavení CGM v **AAPS** (jak je vysvětleno níže) nebo problém s místem, kde je senzor CGM zavedený (pak může být nutné senzor vyměnit).

## Vyhlazování dat v AAPS

**AAPS** nabízí možnost vyhlazovat data přímo v **AAPS**, a ne v aplikaci CGM. Otevřete **nabídku** (☰), vyberte [**Konfigurace**](../SettingUpAaps/ConfigBuilder.md) a pak **Vyhlazování**. Jsou čtyři možnosti a aktivní může být vždy jen jedna: **Žádné vyhlazování**, **Exponenciální vyhlazování**, **Průměrovací vyhlazování** a **Unscented Kalmanův filtr**.

![Konfigurace > Vyhlazování](../images/v4/Configuration/configuration_smoothing.png)

### Exponenciální vyhlazování

Obecně je to doporučená možnost pro začátek, protože nejsilněji potlačuje šum a přepisuje nejnovější hodnotu. Další konkrétní doporučení však najdete v tabulce níže.

### Průměrovací vyhlazování

Tato možnost funguje podobně jako zpětné vyhlazování, které dříve používaly některé platformy CGM. Rychleji reaguje na nedávné změny glykémie, a proto spíše nesprávně reaguje na zašuměná data CGM.

### Žádné vyhlazování

Tuto možnost použijte jen tehdy, když data CGM správně vyhlazuje vaše sběrná aplikace dříve, než je pošle do **AAPS**.

### Unscented Kalmanův filtr (UKF)

Tato možnost používá statistický model, který z příchozích (možná zašuměných) hodnot průběžně odhaduje vaši skutečnou glykémii a rychlost její změny a automaticky se přizpůsobuje tomu, jak moc je váš senzor právě zašuměný. Také rozpozná a vyřadí náhlé odlehlé hodnoty. Je to pokročilejší alternativa k exponenciálnímu a průměrovacímu vyhlazování, užitečná, pokud chcete, aby se vyhlazování samo přizpůsobovalo měnící se úrovni šumu senzoru, místo použití pevné metody.

(smoothing-xdrip-dexcom-g6)=

## Doporučení pro použití vyhlazování

Metodu vyhlazování můžete měnit i automaticky, například podle stáří senzoru, pomocí [akce automatizace](#automations-automation-action) **Změnit vyhlazování**.

|               |      Exponenciální       |          Průměr          | Žádné vyhlazování |
| ------------- |:------------------------:|:------------------------:|:-----------------:|
| G5/G6/ONE     | Pokud jsou data zašuměná |                          |    Doporučeno     |
| G7/ONE+/Stelo | Pokud jsou data zašuměná | Pokud jsou data stabilní |                   |

Senzory Libre jsou zašuměné a mohou vyžadovat vyhlazování. Když používáte přímé spojení xDrip nebo zdroj dat z upravené aplikace (příjem z jiné aplikace, včetně Juggluco), [vyhlazování už probíhá uvnitř aplikace](#libre2-value-smoothing-raw-values).

| Senzor / Zdroj dat | Juggluco  | xDrip – přímé spojení | xDrip – můstek | xDrip – upravená aplikace |
| ------------------ |:---------:|:---------------------:|:--------------:|:-------------------------:|
| Libre 1/14 dní/Pro | Netýká se |       Netýká se       |     Průměr     |         Netýká se         |
| Libre 2/2+ (EU)    |  Průměr   |         Žádný         |     Průměr     |           Žádný           |
| Libre 2/2+/3/3+    |  Průměr   |       Netýká se       |   Netýká se    |           Žádný           |
