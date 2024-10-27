# Každodenní život s pumpou

## Výměny infuzních sad: zásobníky inzulínu a kanyly

Uvedený postup platí pouze pro pumpy připojené kanylou a neplatí pro náplasťové pumpy jako Omnipod, Medtrum Nano, Accu-Check Solo apod. Tento postup je někdy označován jako "výměna setu", kde "celková" znamená výměnu inzulinového zásobníku a kanyly a "částečná" znamená výměnu pouze kanyly.

Fyzická výměna zásobníku/nádržky se neprovádí prostřednictvím **AAPS** a musí být provedena přímo na pumpě. Výměna musí být zaznamenána v **AAPS** ručně, jakmile je dokončena.

### Návod pro výměnu zásobníku pumpy a kanyly

1. V **AAPS** odpojte pumpu: Dlouze stiskněte ikonu „Otevřená smyčka“/„Uzavřená smyčka“ na domovské obrazovce **AAPS** a vyberte „Odpojit pumpu - 1 hodina“. Ikona pumpy změní barvu na šedou, což naznačuje, že je čerpadlo odpojeno.

2. Fyzicky vyměňte zásobník inzulinu: fyzicky odpojte pumpu od těla a podle pokynů výrobce vyměňte zásobník/nádržku na inzulín a kanylu.

3. Naplňte hadičky a kanylu: to lze provést přímo na pumpě. Ujistěte se, že odstraníte všechny bublinky v hadičkách.

4. Připojte k tělu novou kanylu. Jakmile je kanyla nastřelena a jehla odstraněna, připojená kanyla má obsahuje malou vzduchovou mezeru, kterou je třeba také naplnit. To je třeba oznámit **AAPS**: na záložce Akce v **AAPS** vyberte tlačítko Plnění/Doplňování a zaškrtněte "Výměna setu" a/nebo "Výměna inzulínu" pro zaznamenání změny. Nyní stiskněte výchozí dávku pro doplnění inzulinové kanyly (obvykle kolem 0,3 U, ale zkontrolujte, zda je tato hodnota správná pro vaši kanylu) a vyberte „OK“. Přečtěte si shrnutí a potvrďte provedení klepnutím na „OK“.

5. Znovu připojte pumpu v **AAPS**: Stiskněte šedý symbol odpojené pumpy a zvolte „Připojit pumpu“ pro znovuspuštění smyčky.

### Užitečné informace týkající se výměny inzulínu/kanyly

●	Zaznamenání změny místa pumpy resetuje Autosens na 100%. Také resetuje odpovídající kontrolky kanyly/inzulínu a jejich stáří na Domovské obrazovce **AAPS**.

●	Můžete si nastavit/upravit výchozí dávku doplňování v Nastavení > Přehled > Hodnoty plnění/doplňování inzulinu. Podívejte se do příbalového letáku vaší kanyly a ověřte, kolika jednotkamy inzulinu (v závislosti na délce jehly a hadičky) je třeba pro doplnění vaší kanyly.

●	Inzulín doručený pomocí funkce plnění není brán v úvahu AAPS při výpočtu aktivního inzulinu (IOB) a je označen v menu Ošetření AAPS jako „Plnění“.

●	Jakákoli inzulín, který byl pumpou podán během odpojení, nebude v **AAPS** také brán v úvahu. Pokud se stane, že podáte bolus přímo z pumpy, když je **AAPS** odpojené, až pumpu znovu připojíte, můžete tento inzulín (bez podání) zadat v záložce „inzulín“ (viz níže odkaz „Zadání podaného inzulínu bez skutečného podání“ pro více podrobností).

### Problémy s kanylou, místem infuze a/nebo pumpou

Pokud jste si jisti, že jste po určitou dobu nedostali žádný inzulín, i když **AAPS** zaznamenává, že ano, a přesně víte, kdy problém začal (např. odstraníte kanylu a uvidíte, že kanyla byla zkroucená během procesu vložení), můžete záznamy v **AAPS** opravit. Musíte si být vědomi, že inzulín mohl být ve skutečnosti podán, ale z nějakého důvodu se může jeho působení projevit pomalu.

```{admonition} Caution - Risk of Hypoglycemia
:class: nebezpečí
Záznam o podání inzulínu smažte z **AAPS** pouze s **EXTRÉMNÍ** opatrností a pro případ, že by inzulín byl skutečně podán, pečlivě sledujte hladinu cukru v krvi v příštích 24 hodinách.
```

Pro odstranění bolusů a SMB, o nichž víte, že nebyly doručeny, otevřete záložku Ošetření a opatrně odstraňte zaznamenané informace o bolusech z výpisu sacharidů a bolusu od okamžiku, kdy k incidentu došlo. Tím se opraví hodnota "aktivního inzulínu" (IOB), která je klíčová pro kalkulace v **AAPS**. Pokud se nyní vrátítě na domovskou obrazovku, uvidíte, že se hodnota IOB snížila. Mějte na paměti, že nemůžete odstranit záznamy o bazálních dávkách inzulínu, se kterým **AAPS** počítá jako s doručeným, takže stále bude brán **AAPS** v úvahu.

V méně zřejmých případech problémů s dodávkou inzulínu, jako jsou úniky, ucpání nebo vytvoření tunelu, kdy si buď nejste jisti, kdy problém začal, nebo si myslíte, že část inzulínu byla dodána, musíte být opatrní. Tyto problémy můžete rozpoznat buď tím, že ucítíte unikající inzulín, uvidíte vlhkou lepivou kapalinu, trpíte vysokou glykémií nebo budete upozorněni alarmem. Jelikož nikdy nebudete vědět kolik inzulínu jste dostali do kůže (což může působit až po chvíli), bude obtížné určit správný objem inzulínu, který je třeba od aktuální hodnoty "Aktivního inzulínu" (IOB) odečíst. Jednou strategií je pozastavení smyčky na dobu 5 hodin (nebo vaši hodnotu doby působnosti inzulínu) poté, co jste vyřešili problém s dodávkou inzulínu a následně můžete smyčku znovu spustit. Tímto zajistíte, že IOB bude správné, až smyčku znovu spustíte.

## Odpojení pumpy při sprchování nebo aktivitě

Pokud odpojujete inzulinovou pumpu z důvodu sprchování, koupání, plavání, kontaktního sportu nebo jiných aktivit, musíte **AAPS** oznámit přerušení dávkování inzulinu, aby bylo IOB vypočítáno správně. Pumpa může být odpojena použitím tlačítka Stav smyčky na domovské obrazovce AAPS.

Protože během odpojení pumpy nedostáváte žádný inzulín, měli byste se znovu připojit každé dvě hodiny, abyste dohnali chybějící bazál. To můžete udělat tak, že se připojíte a přidáte bolusem vynechaný bazál (např. hodnotu za poslední dvě hodiny) před opětovným odpojením. Tak můžete předejít závažnému nedostatku inzulínu, který by mohl vést k diabetické ketoacidóze (DKA). Pokud je připojení pumpy v průběhu aktivity nevhodné (např. je kanyla zakryta nošením neoprénového obleku), zvažte podání inzulínu perem. Toto manuální podání inzulínu může být zaznamenáno do **AAPS**. Záznam nemusíte udělat v době inječního podání, stačí si poznamenat čas a záznam o podání inzulínu zadat zpětně při opětovném připojení pumpy.

## Zadání dodaného inzulínu bez skutečného podání dávky

Zadání bolusu podaného buď z pumpy v době, kdy **AAPS** bylo odpojeno, nebo podaného inzulínovým perem: otevřete záložku "Inzulín", zadejte množství v jednotkách a vyberte "Nepoštět bolus, jen zaznamenat". Když vyberete tuto možnost, objeví se záložka "Časový posun". To můžete ignorovat, pokud byla dávka inzulínu podávna nedávno, ale pokud byl bolus podán před delším časem, můžete přidat znaménko minus (např. - 30 min) k zaznamenání skutečného času podání. **AAPS** pak vezme v úvahu dobu působení inzulínu a vypočte zbývající aktivní inzulín v systému správně.

If you are using **AAPS** as a careiver, you can remotely disconnect (and reconnect) the pump very easily by [SMS command](../RemoteFeatures/SMSCommands.md) using commands such as “pump disconnect 120” and “pump connect 120”. Doba trvání vzdáleného odpojení je od 1 do 120 minut (v tomto příkladu je 120 minut). Toto je velmi užitečné, pokud je mobilní telefon s **AAPS** pro vás obtížně dostupný, skrytý v pásu na pumpu vašeho dítěte, které pospíchá na bazén, nebo je pečlivě střežen (nebo používán) teenagerem.

## Znovupřipojení pumpy po ukončení aktivity

Po dlouhém odpojení (1 - 2 hodiny) je poměrně běžné, že **AAPS** spočítá, že nyní máte záporný IOB. Při opětovném připojení pumpy, v závislosti na preferenci/aktuální hladině glukózy/plánovaném jídle nebo následné činnosti, můžete buď:

a) Pouze připojte pumpu v **AAPS** (šedá až zelená, pro uzavřenou smyčku) a nechte **AAPS** začít opětovně podávat inzulin

_nebo_

b) Pokud chcete být agresivnější (například míříte k hyperglykémii), můžete přejít na kalkulačku a podat bolus na nula gramů sacharidů, abyste okamžitě podali vypočtený chybějící inzulín jako bolus.

Kterou strategii upřednostníte je na vašem osobním rozhodnutí a nejlépe se určuje pokusem a omylem.
