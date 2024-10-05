# Plnění cílů

**AAPS** obsahuje řadu **Cílů** které potřebujete splnit / dokončit pro přechod ze základní otevřené smyčky do systému hybridní uzavřené smyčky a plné funkcionality **AAPS**. Dokončování **Cílů** vám tedy umožní:

- V nastavení **AAPS** jste nakonfigurovali vše správně
- Naučili jste se základní funkcionality **AAPS**
- Chápete principy fungování systému a díky tomu mu můžete důvěřovat.

```{admonition} Note
:class: note

Regularly export your **AAPS** settings after completing each **objective**!
```

Důrazně doporučujeme, abyste [exportovali své nastavení](../Usage/ExportImportSettings.md) po dokončení každého **Cíle**. Tento proces exportu vytváří soubor dat **nastavení** (.json), které by jste měli udržovat zálohované na jednom nebo více bezpečných místech (např. Google Drive, pevný disk, e-mailové přílohy atd.). Tím si zajistíte, že udržíte svůj pokrok při plnění **cílů**, a pokud omylem smažete (resetujete) dokončení některého cíle, můžete jej jednoduše znovu načíst importováním souboru s aktuálním nastavením. Stejně tak potřebujete zálohu **nastavení** v situaci, kdy musíte změnit z jakéhokoli důvodu váš chytrý telefon s nainstalovaným **AAPS** (výměna, ztráta, zničení telefonu atd.)

Soubor **nastavení** zálohuje nejen váš postup v plnění Cílů, ale také vlastní nastavení **AAPS** jako je např. **max bolus** _atd._

Pokud se něco stane s vaším **AAPS** smartphonem a vy nemáte záložní kopii souboru **nastavení**, musíte začít plnit **cíle** od začátku.

Celkově trvá splnění všech **cílů** asi 6 týdnů (viz. [jak dlouho to bude trvat?](preparing-how-long-will-it-take?) pro detailní rozpad) od konfigurace **AAPS** na vašem chytrém telefonu k "základní" hybridní uzavřené smyčce (od cíle 1 k cíli 8). I přesto, že _můžete_ pokračovat až do **cíle 5** použitím **virtuální pumpy** (a mezitím využívat jinou metodu aplikace inzulinu), v případě ztráty telefonu musíte znovu dokončit všechny **cíle**, a to je něco, čemu se opravdu chcete vyhnout.

Kromě postupného plnění **cílů**, můžete - pokud chcete - resetovat dokončený **cíl** a [vrátit se k dřívějšímu cíli](Objectives-go-back-in-objectives).

## Cíl 1: Nastavit vizualizaci a monitoring, analyzovat bazály a poměry

- **AAPS** kontroluje, zda je funkční vaše základní technické nastavení.

Pokud není, je nutné upravovat do té doby, než bude základní technické nastavení pro **AAPS** funkční.

- Vyberte správný CGMS/FGMS v [Konfiguraci](../Configuration/Config-Builder.md).  Více informací viz [Zdroj glykémií](../Configuration/BG-Source.md).
- Vyberte správnou pumpu v [Konfiguraci](../Configuration/Config-Builder.md) a ujistěte se, že vaše pumpa umí komunikovat s AAPS. Vyberte **virtuální pumpu** pokud využíváte model pumpy bez ovladače **AAPS** pro smyčku, nebo pokud chcete pracovat s počátečními **cíli** během používání jiného systému pro aplikaci inzulinu. Pro více informací viz [Inzulinová pumpa](../Getting-Started/Pump-Choices.md).
- Postupujte podle pokynů na stránce [Nightscout](../Installing-AndroidAPS/Nightscout.md) a ověřte, že Nightscout může přijímat a zobrazovat tato data.
- Mějte na paměti, že URL adresa v NSClientu musí být **_bez_ "/api/v1/"** na konci adresy - viz. [Předvolby NSClient v Nastavení](Preferences-nsclient).

Pozn. _Možná bude nutné počkat na další odečet glykémie, než _**AAPS**_ změnu zaregistruje._

## Cíl 2: Naučte se ovládat AAPS

- Proveďte několik akcí v **AAPS**, jak je popsáno v tomto cíli.
- Pro přístup k úkolům klikněte na oranžový text „Nedokončeno“.
- Jako vodítko pro případ, že dosud nejste obeznámeni s konkrétními kroky, mohou sloužit odkazy na dokumentaci.

  ![Screenshot objective 2](../images/Objective2_V2_5.png)
- Úkoly k dokončení **Cíle 2** jsou:
  - Nastavte váš profil na 90% po dobu 10 minut (_Tip_: Dlouze stiskněte název profilu na domovské obrazovce) (_Poznámka_: AAPS neumožní zadat bazální dávku pod 0.05U/hod. Pokud váš profil obsahuje hodnoty 0.06 U/hod nebo nižší, budete muset před plněním tohoto cíle založit nový profil s vyššímy hodnotami bazálu. Po dokončení této úlohy přepněte zpět na váš normální profil.)
  - Simulujte situaci "sprchování" odpojením pumpy v **AAPS** po dobu 1 h (_Tip_: stiskněte ikonu smyčky na základní obrazovce pro otevření dialogového okna)
  - Ukončete "sprchu" připojením vaší pumpy (_Tip_: stiskněte ikonu "odpojeno" na základní obrazovce pro otevření dialogového okna)
  - Vytvořte vlastní dočasný cíl o délce 10 minut (_Tip_: stiskněte pravou lištu cílů na základní obrazovce pro zobrazení dialogového okna dočasných cílů)
  - Aktivujte zásuvný modul **AKTIVITA** v **Konfiguraci** tak, aby se zobrazoval v horní rolovací liště (_Tip_: Otevřete menu **Konfigurace** a přejděte dolů na 'Obecné')
  - Zobrazte obsah pluginu Smyčka
  - Nastavte měřítko grafu BG, pro zobrazení většího nebo menšího časového měřítka: přepínání mezi 6h, 12h, 18h a 24h zpětně (_Tip_: Klikněte na graf)

(Objectives-objective-3-prove-your-knowledge)=

## Cíl 3: Prokázat své znalosti

- Správně zodpovězte otázky s výběrem více možných odpovědí a prokažte tak znalost **AAPS**.

Někteří uživatelé považují **Cíl 3** za nejobtížnější pro dokončení. Pročtěte si prosím dokumentaci **AAPS** související s otázkami. If you are genuinely stuck after researching the **AAPS** documents, please search the [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) group for "Objective 3" (because it is likely that your question has been asked- and answered - before). If you are still stuck, ask in a post on either the [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) or [Discord](https://discord.gg/4fQUWHZ4Mw) group. Tyto skupiny mohou poskytnout přátelské tipy nebo vás přesměrovat na příslušnou část dokumentace **AAPS**.

Chcete-li pokračovat s **Cílem 3**, klikněte na oranžový text “**Nedokončeno**” pro přístup k dané otázce. Každou otázku si pečlivě přečtěte a vyberte správnou odpověď (odpovědi).

- Pro snížení počtu rozhodnutí, která musíte provádět v režimu otevřené smyčky, nastavte širší cílový rozsah např. 90–150 mg/dl nebo 5,0–8,5 mmol/l.

- V noci budete možná chtít zvýšit horní limit (nebo dokonce vypnout otevřenou smyčku).

Pro každou otázku může existovat více než jedna správná odpověď! Pokud je vybrána nesprávná odpověď, otázka bude na určitý čas (60 minut) uzamčena. Až po uplynutí této doby se můžete vrátit a odpovědět na otázku znovu. Také pozor na to, že pořadí variant odpovědí se může při dalším pokusu o odpověď změnit. Cílem je, aby jste je pečlivě četli a skutečně chápali, jaká je správná nebo chybná odpověď a proč.

Když je **AAPS** nainstalován poprvé, budete muset dokončit celý **Cíl 3** před tím, než se pustíte do **Cíle 4**. Všechny cíle musí být dokončeny postupně v daném pořadí. Nové funkce budou postupně odemykány tak, jak budete dosahovat pokroku při plnění cílů.

```{admonition} __What happens if new question(s) are added to an Objective when I update to a newer version of AAPS?__
:class: Note
From time to time, new features are added to **AAPS** which may require a new question to be added to the Objectives, particularly Objective 3. As a result, any new question added to **Objective 3** will be marked as “incomplete” because **AAPS** will require you to action this. Do not worry, as each **Objective** is independent, you will **not lose the existing functionality of AAPS**, providing the other Objectives remain completed.
```

## Cíl 4: Začít s otevřenou smyčkou

Účelem tohoto cíle je objasnit, jak často bude **AAPS** vyhodnocovat vliv bazálních dávek na úroveň glykémie a jak je schopen doporučovat dočasné úpravy bazálních dávek. Jako součást splnění tohoto Cíle budete poprvé aktivovat otevřenou smyčku, a provádět 20 navrhovaných změn dočasných bazálních dávek ručně na vaší pumpě. Kromě toho budete sledovat dopad dočasných a výchozích dočasných cílů (např. pro řešení fyz. aktivity nebo řešení hypoglykémie). Pokud ještě nejste obeznámeni s nastavením a změnou dočasných bazálních dávek v **AAPS**, podívejte se prosím na záložku [AKCE](Screenshots#Screenshots-action-tab).

Odhadovaný čas k dokončení tohoto Cíle: **7 dní**. To je povinná čekací doba. Nemůžete přejít k dalšímu Cíli, i když jste již provedli všechny požadované úpravy bazálních dávek.

- Vyberte možnost Otevřená smyčka buď v Nastavení, nebo stisknutím a podržením ikony Smyčka v pravém horním rohu hlavní obrazovky.
- Projděte si [Nastavení](../Configuration/Preferences.md) a upravte (přejděte dolů na "Režim smyčky/APS" a vyberte "Otevřená smyčka").
- Ručně proveďte alespoň 20 nastavení dočasných cílů, které vám systém navrhuje, a to během 7 dní; zadejte je do své pumpy a potvrďte v **AAPS**, že jste návrhy přijali. Ujistěte se, že se tyto úpravy bazálních dávek zobrazí v **AAPS** a Nightscoutu.
- Povolte [dočasné cíle](../Usage/temptarget.md) pokud je potřeba. Při výskytu hypoglykémie použijte dočasný cíl hypogkylémie, abyste zabránili přehnané korekci systému jakmile se hodnota začne obracet.

### Snížení počtu oznámení

- Pro snížení počtu návrhů na změnu bazální dávky, které mají být provedeny v režimu otevřené smyčky, nastavte širší cílový rozsah glykémie na 90–150 mg/dl nebo 5,0–8,5 mmol/l.
- Další možností je zvýšit horní limit (nebo zakázat Otevřenou Smyčku) v průběhu noci.
- Nastavením minimálního procenta pro doporučené změny bazálů upravíte množství notifikací, které systém vyvolá.

  ![Open Loop minimal request change](../images/OpenLoop_MinimalRequestChange2.png)

```{admonition} You don't need to action each and every system recommendation!
:class: Poznámka
```

(Cíl 5: Porozumění otevřené smyčce, včetně doporučení pro dočasné bazály)=

## Cíl 5: Porozumění otevřené smyčce, včetně doporučení pro dočasné bazály

Záměrem při plnění **Cíle 5** je pochopit, jak jsou odvozena doporučení k úpravě dočasnému bazálu. To zahrnuje [stanovení logiky bazálu](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html), analýzu dopadu změn sledováním [predikčních křivek v grafu AAPS](Screenshots-prediction-lines)/Nightscoutu a sledováním podrobných výpočtů zobrazených na kartě OPENAPS.

Odhadovaný čas k dokončení tohoto Cíle: **7 dní**.

Tento Cíl vyžaduje, abyste určili a nastavili Váš "Max U/h, které lze nastavit pro dočasný bazál", hodnotu popsanou v [OpenAPS-funkce](Open-APS-features#Open-APS-features-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal). Tuto hodnotu lze upravit v menu Nastavení > **OpenAPS**.
Ujistěte se, že toto bezpečnostní nastavení je nastaveno jak v **AAPS**, tak ve vaší inzulínové pumpě.

Cílovou hodnotu (glykémie) nastavte o něco výše než je obvyklé, dokud si nebudete jisti správností výpočtů a nastavení.

**AAPS** umožňuje:

- **dolní cílová hodnota** minimálně 4 mmol (72 mg/dl) až maximálně 10 mmol (180 mg/dl)
- **horní cílová hodnota** minimálně 5 mmol (90 mg/dl) až maximálně 15 mmol (225 mg/dl)
- dočasný cíl jako jednotlivá hodnota může být v rozsahu mezi 4 až 15 mmol (72 mg/dl až 225 mg/dl)

Vaše cílová hodnota je klíčový údaj. Všechny výpočty jsou na něm založeny. Je odlišný od cílového rozmezí, v němž se obvykle snažíte udržet hodnoty glykémie v krvi. Pokud je váš cíl velmi široký (řekněme 3+ mmol/l nebo 50+ mg/dl široký), často se to projeví malým počtem reakcí **AAPS**. Je to proto, že se předpokládá, že glykémie ze senzoru má být někde v tomto širokém rozmezí, a proto jsou dočasné změny bazálu doporučovány jen zřídka.

Můžete zkusit experimentovat a nastavit své cíle tak, aby nebyl rozsah tak široký (řekněme 1 mmol/l resp. 20 mg/dl nebo méně) a přitom sledovat, jak se tím chování systému mění.

Můžete přizpůsobit (rozšířit nebo zúžit) zelenou oblast grafu, která reprezentuje váš cílový rozsah, nastavením jiných hodnot v [Nastavení](../Configuration/Preferences.md) > Přehled > Rozsah pro zobrazení.

![Stop sign](../images/sign_stop.png)

```{admonition} If you have been using a virtual pump, change to a real insulin pump now!
:class: note

If you are open looping with a virtual pump stop here. Only click verify at the end of this Objective once you have changed to using a "real" physical pump.
```

![blank](../images/blank.png)

(Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend)=

## Cíl 6: Začátek uzavřené smyčky - s pozastavením pumpy při nízké glykémii

![Warning sign](../images/sign_warning.png)

```{admonition} Closed loop will not correct high BG values in objective 6 as it is limited to low glucose suspend only!
:class: Poznámka
Budete muset korigovat vysoké hodnoty glykémií samostatně (ručním posíláním inzulinu z pumpy nebo nebo perem)!
```

V rámci **Cíle 6** budete schopni přepnout smyčku na uzavřenou a aktivovat její režim reakce na hypoglykémii (LGS), jakmile je [max IOB](Open-APS-features-maximum-total-iob-openaps-cant-go-overopenaps-max-iob) nastaven na nulu. Pro dokončení Cíle musíte zůstat v tomto režimu 5 dní. Tento čas byste měli použít ke kontrole, zda jsou nastavení profilu přesná a nespouštějí režim "Ochrana před nízkou glykémií" příliš často.

Odhadovaný čas k dokončení tohoto Cíle: **5 dní**.

Je velmi důležité, aby byl váš aktuální profil (bazály, ISF, IC) důkladně otestován před uzavřením smyčky v režimu reakce na hypoglykémie. Nesprávné nastavení profilu může způsobit např. hypoglykémie nebo jiné situace, na které budete nuceni reagovat manuálně. Správně nastavený profil vám pomůže vyhnout se nutnosti ručně reagovat na nízké glykémie během daného období 5 dnů.

**Pokud se budou stále objevovat časté nebo vážné hypoglykémie, zvažte revizi vašeho DIA, bazálů, ISF a inzulino-sacharidových poměrů.**

Během plnění Cíle 6, **AAPS** ohlídá nastavení maxIOB na nulu. **Toto prioritní nastavení bude při přechodu na Cíl 7 opět zrušeno.**

To znamená, že pokud v průběhu plnění Cíle 6 hodnota glykémie klesá, **AAPS** samostatně sníží dávkování bazálního inzulínu. Pokud hladina glykémie stoupá, **AAPS** zvýší bazální dávku **nad hodnotu** Vašeho profilu pouze za předpokladu, když **bazální IOB je záporný** v důsledku předchozího přepnutí do režimu "Ochrana před nízkou glykémií". Pokud není záporný, **AAPS** nezvýší bazál nad aktuální hodnotu profilu, a to ani v případě, že hladina glykémie stoupá. Toto preventivní nastavení má předcházet hypoglykémii v průběhu vašeho seznamování se s **AAPS**.

**V důsledku toho je nutné reagovat na vysoké hodnoty glykémie manuálními korekčními bolusy.**

- Pokud je váš bazální IOB záporný (viz snímek obrazovky níže), může být v Cíli 6 spuštěna dočasná bazální dávka (TBR) > 100%.

![Example negative IOB](../images/Objective6_negIOB.png)

- Nastavte cílový rozsah o něco výše než by byl obvyklý cíl, tak abyste měli jistotu a vytvořili si bezpečnostní rezervu.
- Povolit režim "Ochrana před nízkou glykémií" stisknutím a podržením ikony smyčky v pravém horním rohu základní obrazovky a výběrem příslušné ikony smyčky.
- Sledujte aktivní dočasné bazály zobrazené jako tyrkysový text bazálu na základní obrazovce nebo na tyrkysovou křivku bazálů která je součástí grafu na základní obrazovce.
- Může dočasně docházet k výskytu nárůstů v důsledku reakce na hypo, bez možnosti zpětného zvýšení bazálů.

(Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets)=

## Cíl 7: Vyladění uzavřené smyčky, zvýšení maxIOB nad 0 a postupné snižování cílové hladiny cukru v krvi

Pro dokončení **Cíle 7** musíte uzavřít smyčku a zvýšit [maxIOB](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob). maxIOB byl automaticky vynulován v **Cíli 6**. To se nyní vrací zpět. **AAPS** začne používat stanovenou hodnotu maxIOB ke korekci vysokých hodnot glykémie.

Odhadovaný čas k dokončení tohoto Cíle: **1 den**.

- Vyberte režim 'Uzavřená smyčka' buď přes menu [Nastavení](../Configuration/Preferences.md) nebo stisknutím a podržením ikony smyčky v pravém horním rohu základní obrazovky. Nechte puštěnou po dobu 1 dne.

- Zvyšte svou 'Maximální nepřekročitelnou hodnotu IOB' (v OpenAPS nazývanou 'max-iob') nad 0. Zvyšte hodnotu 'Maximální celkový IOB, který OpenAPS nemůže překročit' (v OpenAPS se tento parametr označuje jako 'maxIOB') která je nyní nastavenana nulu.
  **Výchozí doporučení** je použít "průměrnou hodnotu bolusu k jídlu + 3x maximální denní bazální dávku" (pro algoritmus SMB) a nebo "3x maximální denní bazální dávku" (pro starší algoritmus AMA). Tyto hodnoty byste však měli zvyšovat postupně, dokud nebudete mít jistotu že jsou nastaveny správně (maximální denní bazální dávka = maximální dávka za hodinu v kterékoli části dne).

Toto doporučení by mělo být považováno za výchozí bod. Pokud ji nastavíte na výchozí hodnotu (3x...) a pak vysledujete, že AAPS dává příliš mnoho inzulínu v reakci na stoupání hladiny glykémie, pak snižte hodnotu "Maximální celkový IOB, kterou OpenAPS nemůže překročit". Případně ji velmi opatrně zvyšujte, pokud máte vyšší rezistenci na inzulín.

![max daily basal](../images/MaxDailyBasal2.png)

- Až si budete jistí množstvím IOB, které odpovídá vašemu režimu smyčky, pak snižte své cílové glykémie na vámi požadovanou úroveň.

(Objectives-objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens)=

## Cíl 8: Upravit bazály a poměry, když bude potřeba, a povolit automatickou detekci citlivosti na inzulín

V rámci tohoto cíle budete znovu upravovat výkonnost svého profilu a budete používat funkci autosens jako indikátor chybného nastavení.

Odhadovaný čas k dokončení tohoto Cíle: **7 dní**.

- Můžete použít [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) jako jednorázovou kontrolu vašich bazálních dávek nebo provést tradiční test bazálu.
- Povolte [autosens](../Usage/Open-APS-features.md) po dobu 7 dní a sledujte bílou linku v přehledovém grafu, která ukazuje jak vaše citlivost roste a klesá v důsledku civčení, hormonálních změn apod. a zároveň sledujte na záložce OpenAPS, jak vzhledem k tomu aplikace **AAPS** upravila hodnoty vašich bazálů nebo cílových hodnot glykemie.

(Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)=

## Cíl 9: Povolit další funkce oref1 pro běžné používání, jako je SMB (super micro bolus)

V tomto cíli se budete řešit a používat "Super Micro Bolus (SMB)" jako jednu základní funkcionalitu. Po absolvování nutné četby budete dobře rozumnět tomu, co jsou SMB, jak fungují, jaký je rozumný výchozí bod s SMB a proč je bazál dočasně nastaven na nulu po podání SMB (nulové nastavení). Odhadovaný čas k dokončení tohoto Cíle: **28 dní**.

- Je nutné přečíst [SMB sekci této dokumentace](Open-APS-features-super-micro-bolus-smb) a [informace o oref1 v openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) abyste porozumněli SMB a konceptu nulového nastavení.
- Po dokončení [zvýšíte maxIOB](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob) aby mikrobolusy fungovaly správně. MaxIOB nyní zahrnuje veškerý aktivní inzulín (IOB), nejen akumulované bazály. Tato prahová hodnota zastavuje podávání SMB dokud IOB neklesne pod tuto hodnotu (_např._ maxIOB je nastaveno na 7 U a bolus 8 U je podán k pokrytí jídla: mikrobolusy budou pozastaveny a nebudou podávány dokud IOB neklesne pod 7 U). Dobré počáteční nastavení hodnoty maxIOB = průměrný bolus k jídlu + 3x maximální denní bazál (maximální denní bazál = maximální hodnota hodinového bazálu v průběhu kteréhokoli časového segmentu během dne - viz [Cíl 7](Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets).
- Změňte parametr "min_5m_carbimpact" (Nastavení > Nastavení absorpce sacharidů > min_5m_carbimpact) na hodnotu 8 jakmile přepnete z algoritmu OpenAPS AMA na OpenAPS SMB. Pro AMA je výchozí hodnota 3. Více si o těchto nastaveních přečtěte [zde](../Configuration/Preferences.html#min-5m-carbimpact)

(Objectives-objective-10-automation)=

## Cíl 10: Automatizace

Abyste mohli používat automatizace, musíte začít pracovat na **Cíli 10**.

1. Nejdříve si přečtěte stránku dokumentace  [Automation](../Usage/Automation.md) first.
2. Nastavte nejzákladnější pravidlo automatizace;
   například spuštění Android oznámení během několika minut:

- Vyberte záložku Oznámení
- Z horního 3 tečkového menu vyberte "Přidat pravidlo"
- Zadejte název úlohy "Moje první automatizované oznámení"
- "Upravit", "Podmínka"
  - Klikněte na symbol "+" k přidání prvního spouštěče
  - Vyberte "Čas" & "OK", vytvoříte tak výchozí položku AT TODAY HOUR:MINUTE
  - Klepnutím na MINUTE upravte čas tak, aby došlo ke spuštění za pár minut. Uzavřete kliknutím na "OK"
  - Kliknutím na "OK" zavřete obrazovku spouštěčů
- "PŘIDAT" "Akci"
  - Vyberte "Oznámení", "OK"
  - Klikněte na "Oznámení" pro úpravu zprávy (Msg), zadejte něco jako "Moje první automatizace"
- Počkejte, dokud se espustí oznámení (v závislosti na vašem telefonu k tomu může dojít až o několik minut později)

4. Experimentujte s nastavením užitečnějších automatizací.

- The documentation page gives a few examples, and you can search for "automation" screenshots on the [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) group. Vzhledem k tomu, že většina lidí snídá stejné jídlo každé ráno ve stejnou dobu před školou/prací, docela běžným použitím může být nastavení pravidla "cíl-před-snídaní", pro nastavení mírně nižšího dočasného cíle 30 minut před snídaní. V takovém případě bude vaše podmínka zahrnovat "opakující se čas", který se skládá z konkrétních dní v týdnu (Pondělí, Úterý, Středa, Čtvrtek, Pátek) a konkrétní čas (6:30). Akce bude obsahovat "Spustit dočasný cíl" s cílovou hodnotou a trváním po dobu 30 minut.

## Cíl 11: Povolit další funkce pro každodenní používání, jako je například Dynamic sensitivity plugin (Dynamická ISF).

- Zajistěte, aby správně fungovaly SMB
- Přečtěte si dokumentaci týkající se dynamické ISF [zde](../Usage/DynamicISF.md)
- Search the Facbook and [Discord](https://discord.gg/4fQUWHZ4Mw) groups for discussions around Dynamic ISF and read about other users experiences and recommendations.
- Povolte **DynamicISF plugin** a nastavte vhodnou kalibraci podle fyziologických parametrů uživatele. Z bezpečnostních důvodů je vhodné začít hodnotou Korekčního faktoru nižší než 100%.

(Objectives-go-back-in-objectives)=

## Návrat k předchozímu cíli

Chcete-li se z jakéhokoliv důvodu vrátit k předchozímu cíli, stačí tak učinit kliknutím na „Resetovat dokončený stav“, nebo si pročíst odstavec "Co jsem se naučil" (od verze 3.2).

![Go back in objectives](../images/Objective_ClearFinished.png)

## Cíle v AndroidAPS před verzí 3.0

V rámci vydání **AAPS** verze 3.0 byl odstraněn jeden cíl.  Uživatelé **AAPS** verze 2.8.2.1, kteří jsou na starším Android software (tj. starší než verze 9), bude používat starší sadu Cílů, které lze nalézt [zde](../Usage/Objectives_old.md).
