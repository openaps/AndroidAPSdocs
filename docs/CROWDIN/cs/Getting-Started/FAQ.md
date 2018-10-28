# Nejčastější otázky uživatelů APS

Jak sem přidat další otázky: Postupujte podle těchto pokynů: [odkaz](../make-a-PR.md)

## Obecné

### Jak začít?

Základní princip uzavřené smyčky je, že vaše dávkování bazálního inzulínu a poměr sacharidů k inzulínu (inzulíno-sacharidový poměr) jsou přesné. Všechna doporučení smyčky předpokládají, že vaše potřeba bazálního inzulínu je pokrytá a všechny vrcholy nebo propady, které vidíte na grafu glykémie, jsou výsledkem jiných faktorů vyžadujících některé jednorázové úpravy (cvičení, stres atd.). Úpravy, které uzavřená smyčka může provést, byly z důvodu bezpečnosti omezené (viz maximální povolená dávka dočasného bazálu v [OpenAPS Reference Design](https://openaps.org/reference-design/)), což znamená, že nechcete plýtvat změnou v dávkováním dočasného bazálu, abyste opravili špatně nastavený bazál. Pokud jste například často příliš nízko ještě před jídlem, pak pravděpodobně vaše bazální dávky potřebují upravit. Můžete použít [Autotune](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig), které vám připraví řadu návrhů, zda a které bazální dávky a/nebo citlivosti inzulínu byste měli upravit, a také to, zda je nutné změnit inzulíno-sacharidový poměr. Nebo můžete vyzkoušet a nastavit vaše bazály [postaru](http://integrateddiabetes.com/basal-testing/).

### Jaká jsou praktická doporučení pro provoz smyčky?

* Pokud nechcete, aby někdo mohl snadno upravit vaše nastavení, pak můžete celé menu nastavení ochránit heslem tak, že vyberete v menu Nastavení "Heslo do nastavení" a zadáte své zvolené heslo. Při příštím vstupu do menu nastavení po vás bude heslo vyžadováno, abyste mohli pokračovat dál. Pokud budete později chtít odstranit ochranu heslem, pak běžte v menu do "Heslo do nastavení" a odstraňte text.

* Pokud máte v úmyslu používat aplikaci v android wear na bolusy nebo změnu nastavení, pak je třeba zajistit, aby v systému Android nebyla blokovaná oznámení od AndroidAPS. Potvrzení akce přichází prostřednictvím oznámení.

* Pokud si sundáte svou pumpu před sprchováním/koupáním/plaváním/sportem atd., stiskněte a podržte prst na textu "Otevřená smyčka" / "Uzavřená smyčka" na hlavní domovské stránce a vyberte možnost "Odpojit pumpu na ..." pro tolik hodin, na kolik plánujete mít pumpu odpojenou. Tím se nastaví váš bazál na nulu na dané časové období. Minimální délka doby odpojení je odvozena z minimální délky dočasného bazálu, kterou lze nastavit na pumpě, takže pokud si ji přejete odpojit na kratší časové období, nebo připojíte svou pumpu dříve, než se očekávalo, poté stiskněte a podržte "Pozastaveno (X min)" a vyberte "Uvolnit". Vaše IOB pak bude přesněji vypočtené po vašem návratu k pumpě.

* Z důvodu bezpečnosti nejsou doporučení založena na jediné hodnotě ze senzoru CGM, ale opírají se o průměrnou změnu glykémie. Proto pokud jste nějaká měření ze senzoru nezachytili, může trvat nějakou dobu, než AndroidAPS nasbírá potřebná nová data a pak znovu smyčku nahodí.

* Existuje několik blogů s dobrými tipy, které vám nabídnou další zásady a praktická doporučení pro provoz smyčky:
  
  * [Fine-tuning Settings](http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
  * [Why DIA matters](http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
  * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
  * [Hormones and autosens](http://seemycgm.com/2017/06/06/hormones-2/) See my CGM

### Jaké záchranné vybavení se doporučuje brát s sebou?

### Jak bezpečně připojit CGM/FGM?

## AndroidAPS nastavení

### APS algoritmus (princip výpočtu)

#### Proč se zobrazuje "dia:3" na kartě "OPENAPS AMA", i když mám jiné DIA nastavené ve svém profilu?

![AMA 3h](../../images/Screenshot_AMA3h.png) V AMA režimu DIA ve skutečnosti neznamená "doba působnosti inzulínu". Je to parameter, který dříve souvisel s DIA. Parametr nyní znamená, "dokdy by měla být korekce dokončená". Nemá to žádnou souvislost s výpočtem IOB. V OpenAPS SMB režimu už tento parametr není potřebný vůbec.

### Profil

#### Proč se nyní používá 5h jako dolní limit DIA (doba působnosti inzulínu) namísto 2-3h?

Je to dobře vysvětleno [zde](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Nezapomeňte `AKTIVOVAT PROFIL` po úpravě vašeho DIA.

## Další nastavení

### Nastavení Nightscoutu

### Nastavení CGM

## Pumpa

### Kam pumpu umístit?

### Baterie

Smyčka může vybíjet baterii rychleji než v normálním režimu, a to protože systém s pumpou komunikuje přes bluetooth mnohem víc, než by uživatel dělal ručně. Nejlepší je vyměnit batterii už při 25%, jinak už může být komunikace s pumpou nespolehlivá. Můžete si k tomu nastavit varující alarm pro vybití baterie pumpy tak, že nastavíte proměnnou PUMP_WARN_BATT_P vaší Nightscout stránky. Mezi triky, jak zvýšit životnost baterie, patří:

* zkraťte časový interval, po jaký zůstává svítit LCD displej (v menu nastavení pumpy)
* zkraťte časový interval, po jaký zůstává svítit podsvícení (v menu nastavení pumpy)
* nastavte upozorňování tak, aby se namísto vibrace ozývalo pípnutí (v menu nastavení pumpy)
* na pumpě používejte tlačítka jenom pro výměnu inzulínu, jinak používejte raději AndroidAPS na prohlížení historie, stavu baterie a stavu zásobníku.
* AndroidAPS aplikace může být často zavíraná systémem, což šetří energii nebo paměť RAM na některých telefonech. Ale pokud se AndroidAPS pokaždé znovu inicializuje při každém startu, tak zřizuje Bluetooth spojení s pumpou a znovu načítá aktuální bazální dávky a historii bolusů. To vybíjí baterii. Abyste zjistili, jestli k tomu dochází, běžte do Nastavení > NSClient a zapněte 'Logovat spuštění aplikace do NS'. Nightscout pak obdrží událost při každém restartu AndroidAPS, čímž tento problém snadno odhalíte. Abyste tomuto chování zabránili, udělte aplikaci AndroidAPS výjimku, aby ji systém nevypínal v době nečinnosti (v menu úspory baterie na vašem telefonu).
* očistěte póly baterie alkoholem, aby na nich nezůstala případná mastnota/nečistota z výroby.
* pro pumpy DanaR/RS při spouštěcí sekvenci teče přes baterie velký proud, aby záměrně přerušil ochranný potah (který zabraňuje ztrátě kapacity baterie při skladování), ale přerušení potahu se nedaří vždy ve 100% případů. Buďto baterie vyndejte a znovu vložte 2 až 3 krát (než se na obrazovce ukáže 100%), anebo před vložením baterií použijte bateriový klíč ke chvilkovému zkratu (přidržením k oběma pólům baterie na zlomek vteřiny).
* podívejte se také na další tipy pro [konkrétní typy baterií](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md#battery-type-and-causes-of-short-battery-life) při použití pumpy Combo

### Výměna zásobníků a kanyl

Výměnu zásobníku nelze provést přes AndroidAPS, výměna musí být provedena přímo na pumpě jako dřív.

* Dlouze stiskněte "Otevřená smyčka"/"Uzavřená smyčka" na hlavní kartě AndroidAPS a vyberte 'Pozastavit smyčku na 1 h'
* Nyní odpojte pumpu a vyměňte zásobník podle instrukcí pumpy.
* Jak budete mít pumpu znovu připojenou, obnovte smyčku dlouhým stiskem na 'Pozastaveno (X min)'.

Naproti tomu pro výměnu kanyly se nepoužívá funkce "naplnit infúzní set" na pumpě, ale set a/nebo kanyla se plní bolusem, který se nezobrazuje v historii bolusů. To znamená, že se nepřeruší běžící dočasná bazální dávka. Na záložce Akce, použijte tlačítko Plnění/doplňování, abyste nastavili množství inzulínu k naplnění infúzního setu a plnění spustili. Pokud množství není dostatečné, opakujte plnění. Můžete si nastavit výchozí množství pro plnění v Nastavení > Jiné > Hodnoty plnění/doplňování. Podívejte se do příbalového letáku kanyl, kolik jednotek je nutné do kanyly naplnit podle délky jehly a hadičky.

## Hygiena

### Co dělat při sprchování a koupání?

Při sprchování a koupání si můžete pumpu sundat. Na tak krátkou dobu ji obvykle nebudete potřebovat. Ale zároveň byste o tom měli AAPS říct, aby byly výpočty IOB správné. Zmáčkněte světle modré pole "Otevřená smyčka / Uzavřená smyčka" na vrchu hlavní stránky. Vyberte možnost **"Odpojit pumpu na 1h"**. Jakmile jste znovu připojení k pumpě musíte vybrat "Uvolnit" na stejném políčku.

## Práce

## Volnočasové aktivity

## Sporty

## Sex

## Vyjít si

## Pití alkoholu

## Spánek

### Jak mohu provozovat smyčku během noci bez mobilního a WIFI záření?

Mnoho uživatelů zapíná v noci telefon v režimu letadlo. Pokud chcete provozovat smyčku když spíte, postupujte následovně (toto bude fungovat pouze se zdrojem glykémií xDrip + nebo upravená Dexcom aplikace. Nebude to fungovat pokud získáváte glykémie přes Nightscout):

1. Zapněte na mobilu režim letadlo.
2. Počkejte dokud není režim aktivní.
3. Zapněte Bluetooth.

Nebudete schopni přijímat telefonní hovory ani nebudete mít přístup na internet. Ale smyčka poběží.

## Cestování

### Jak se vypořádat s cestováním přes časové zóny?

S DanouR a korejskou verzí nemusíte dělat nic. Ostatní čerpadla viz stránka cestování ([odkaz](../Usage/Timezone-traveling.md)) pro další podrobnosti.

## Pobyt v nemocnici

## Schůzka s vaším diabetickým lékařem