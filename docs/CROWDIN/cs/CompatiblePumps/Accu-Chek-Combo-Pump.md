* * *

orphan: true

* * *

# Pumpa Accu-Chek Combo

**Tento software je součástí DIY řešení a není to produkt, ale vyžaduje po vás, abyste si přečetli, naučili se a porozuměli systému včetně toho, jak ho používat. Není to něco, co by za vás spravovalo veškerou vaši cukrovku, ale umožňuje vám zlepšit vaši cukrovku a kvalitu života, pokud jste ochotni věnovat potřebný čas. Nespěchejte do toho, ale dopřejte si čas na učení. Jste jediní, kdo nese odpovědnost za to, co s tím uděláte.**

(Accu-Chek-Combo-Pump-hardware-requirements)=

## Požadavky na hardware

- Roche Accu-Chek Combo (jakýkoli firmware, všechny fungují)
- Zařízení Smartpix nebo Realtyme spolu s 360 konfiguračním softwarem pro nastavení pumpy. (Roche poskytuje zařízením Smartpix a konfigurační software zdarma svým zákazníkům na vyžádání.)
- Kompatibilní telefon: Android telefon s verzí LineageOS 14.1 (dříve CyanogenMod) nebo alespoň Android 8.1 (Oreo). Od verze AAPS 3.0 je Android 9 povinný. See [release notes](#maintenance-android-version-aaps-version) for details.
- S verzí LineageOS 14.1 musí být aktuální verze alespoň z června 2017, protože změna potřebná k párování Combo pumpy byla zavedena až tehdy. 
- A list of phones can be found in the [AAPS Phones](#Phones-list-of-tested-phones) document.
- Uvědomte si, že toto není úplný seznam a odráží osobní zkušenosti uživatelů. Doporučuje se také sdílet své zkušenosti a pomáhat tak ostatním (tyto projekty jsou o tom, jak si navzájem pomáhat).
- Vězte, že zatímco Android 8.1 umožňuje komunikaci s Combo, stále existují problémy s AAPS na 8.1.
- Pro pokročilé uživatele je možné provést párování na rootovaném telefonu a přenést ho na jiný rootovaný telefon, který také musí být rootovaný. To umožňuje používání telefonů s Android < 8.1, ale nebylo to široce testováno: https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Omezení

- Extended bolus and multiwave bolus are not supported (see [Extended Carbs](../DailyLifeWithAaps/ExtendedCarbs.md) instead).
- Podporován je pouze jeden profil bazálního inzulínu.
- Nastavení bazálního profilu jiného než 1 na pumpě nebo dodávání rozšířených bolusů či multiwave bolusů z pumpy narušuje TBR a způsobuje, že smyčka přejde do režimu nízkého pozastavení na 6 hodin, protože smyčka nemůže bezpečně fungovat za těchto podmínek.
- It's currently not possible to set the time and date on the pump, so [daylight saving time changes](#time-adjustment-daylight-savings-time-dst) have to be performed manually (you may disable the phone's automatic clock update in the evening and change it back in the morning together with the pump clock to avoid an alarm during the night).
- V současnosti jsou podporovány pouze bazální dávky v rozmezí 0,05 až 10 U/h. To se také vztahuje při úpravě profilu, např. když se zvyšuje na 200%, maximální bazální dávka nesmí překročit 5 U/h, protože bude zdvojena. Podobně, při redukci na 50% musí být minimální bazální dávka alespoň 0,10 U/h.
- Pokud smyčka požaduje zrušení probíhajícího TBR, Combo nastaví TBR na 90% nebo 110% na 15 minut místo toho. To je proto, že zrušení TBR způsobuje na pumpě upozornění, které způsobuje mnoho vibrací.
- Občas (každých pár dní) může AAPS selhat v automatickém zrušení upozornění TBR ZRUŠENO, což musí uživatel poté vyřešit (stisknutím tlačítka aktualizace v AAPS, aby převedl varování do AAPS, nebo potvrzením upozornění na pumpě).
- Stabilita bluetooth připojení se liší s různými telefony, což způsobuje upozornění "pumpa nedostupná", kdy již není navázáno žádné spojení s pumpou. 
- Pokud k této chybě dojde, ujistěte se, že je bluetooth povolen, stiskněte tlačítko Aktualizovat na kartě Combo, abyste zjistili, zda byla příčina přechodného problému, a pokud stále není připojení navázáno, restartujte telefon, což by to obvykle mělo vyřešit. 
- Existuje jiný problém, kdy restart nepomůže, ale je třeba stisknout tlačítko na pumpě (což resetuje bluetooth pumpy), než pumpa znovu přijme připojení z telefonu. 
- V tuto chvíli lze pro oba tyto problémy udělat velmi málo. Pokud tyto chyby vidíte často, vaší jedinou možností je nyní získat jiný telefon, který je známý tím, že dobře funguje s AAPS a Combo (více viz výše).
- Vydání bolusu z pumpy nebude vždy včas detekováno (kontrolováno vždy, když se AAPS připojí k pumpě), a může trvat až 20 minut v nejhorším případě. 
- Bolusy na pumpě jsou vždy kontrolovány před vysokým TBR či bolusem vydaným AAPS, ale kvůli omezením AAPS pak odmítne vydat TBR/Bolus, protože byl vypočítán na základě falešných předpokladů. (-> Neprovádějte bolus z pumpy!) See chapter [Usage](#usage) below)
- Nastavení TBR na pumpě by se mělo vyhnout, protože smyčka přebírá kontrolu nad TBR. Detekce nového TBR na pumpě může trvat až 20 minut a účinek TBR bude počítán pouze od chvíle, kdy bude detekován, takže v nejhorším případě může být 20 minut TBR, který není zohledněn v IOB. 

## Nastavení

- Nakonfigurujte pumpu pomocí 360 konfiguračního softwaru. 
- Pokud nemáte software, kontaktujte prosím svou Accu-Chek hotline. Obvykle posílají registrovaným uživatelům CD s "360° Pump Configuration Software" a zařízení SmartPix USB-infrazářič (zařízení Realtyme také funguje, pokud to máte).
- **Požadovaná nastavení** (označeno zeleně ve snímcích obrazovky):
    
    - Nastavte/nechte konfiguraci menu jako "Standard", toto zobrazí pouze podporovaná menu/akce na pumpě a skryje ty, které nejsou podporovány (rozšířené/multiwave bolusy, více bazálních dávek), což způsobuje omezení funkčnosti smyčky, když je používána, protože není možné bezpečně běžet smyčku, když je používána.
    - Ověřte, že *Rychlý informační text* je nastaven na "RÝCHLÁ INFO" (bez uvozovek, nachází se pod *Možnosti inzulinové pumpy*).
    - Nastavte TBR *Maximální úpravu* na 500%
    - Deaktivujte *Signál konce dočasného bazálního dávkování*
    - Nastavte TBR *Incrementální délku* na 15 minut
    - Povolte Bluetooth

- **Doporučená nastavení** (označeno modře na snímcích obrazovky)
    
    - Nastavte alarm na nízkou kazetu podle vašich představ
    - Nakonfigurujte maximální bolus vhodný pro vaši terapii, abyste ochránili zařízení před chybami v softwaru
    - Podobně nastavte maximální dobu TBR jako ochranu. Povolte alespoň 3 hodiny, protože možnost odpojit pumpu na 3 hodiny nastaví 0% během těchto 3 hodin.
    - Povolte zamykání kláves na pumpe, aby se zabránilo bolusování z pumpy, zejména když byla pumpa dříve používána a rychlé bolusování se stalo návykem.
    - Nastavte časový limit pro displej a časový limit pro menu na minimum 5,5 a 5 sekund. To umožňuje AAPS rychleji se zotavit z chybových situací a snižuje množství vibrací, které mohou během těchto chyb nastat

![Screenshot nastavení uživatelského menu](../images/combo/combo-menu-settings.png)

![Screenshot nastavení TBR](../images/combo/combo-tbr-settings.png)

![Screenshot nastavení bolusu](../images/combo/combo-bolus-settings.png)

![Screenshot nastavení inzulinové kazety](../images/combo/combo-insulin-settings.png)

- Nainstalujte AAPS podle pokynů na [AAPS wiki](https://androidaps.readthedocs.io/)
- Ujistěte se, že si přečtete wiki, abyste pochopili, jak nastavit AAPS.
- Vyberte plugin MDI v AAPS, nikoli plugin Combo, abyste se vyhnuli rušení pluginu Combo během párovacího procesu.
- Klonujte ruffy přes git z [MilosKozak/ruffy](https://github.com/MilosKozak/ruffy). V tuto chvíli je primární větev `combo`. V případě problémů můžete také vyzkoušet větev 'pairing' (viz níže).
- Sestavte a nainstalujte ruffy a použijte ho k párování pumpy. Pokud to nefunguje po několika pokusech, přepněte na větev `pairing`, spárujte pumpu a pak se vraťte zpět na původní větev. Pokud je pumpa již spárována a může být ovládána přes ruffy, instalace větve `combo` je dostačující. Věnujte pozornost tomu, že proces párování je trochu křehký (ale musí být proveden pouze jednou) a může potřebovat několik pokusů; rychle potvrďte výzvy a při restartování předtím odstraňte zařízení pumpy z nastavení Bluetooth. Další možností je přejít do menu Bluetooth po zahájení procesu párování (to udržuje Bluetooth telefonu viditelné, dokud je menu zobrazeno) a přepnout zpět na ruffy po potvrzení párování na pumpě, když pumpa zobrazuje autorizační kód. Pokud se vám nepodaří spárovat pumpu (například po 10 pokusech), zkuste počkat až 10 sekund před potvrzením párování na pumpě (když se jméno telefonu zobrazuje na pumpě). Pokud jste nastavili časový limit pro menu na 5 sekund, musíte jej znovu zvýšit. Někteří uživatelé hlásili, že to museli udělat. Nakonec zvažte přestěhování z jedné místnosti do druhé v případě místního rádiového rušení. Nejméně jeden uživatel okamžitě překonal problémy s párováním prostě změnou místnosti.
- Když AAPS používá ruffy, aplikaci ruffy není možné používat. Nejjednodušší způsob je jednoduše restartovat telefon po procesu párování a nechat AAPS spustit ruffy na pozadí.
- Pokud je pumpa zcela nová, musíte na pumpě provést jeden bolus, aby pumpa vytvořila první záznam v historii.
- Před povolením pluginu Combo v AAPS se ujistěte, že je váš profil nastaven správně a aktivován(!) a váš bazální profil je aktuální, protože AAPS synchronizuje bazální profil s pumpou. Poté aktivujte plugin Combo. Stiskněte *Obnovit* na kartě Combo pro inicializaci pumpy.
- Aby jste ověřili vaše nastavení, s pumpou **odpojenou**, použijte AAPS k nastavení TBR na 500% na 15 minut a uvolněte bolus. Pumpa by nyní měla mít běžící TBR a bolus v historii. AAPS by také měla zobrazit aktivní TBR a dodaný bolus.

(Accu-Chek-Combo-Pump-why-pairing-with-the-pump-does-not-work-with-the-app-ruffy)=

## Proč párování s pumpou nefunguje s aplikací "ruffy"?

Existuje několik možných důvodů. Zkuste následující kroky:

1. Vložte do pumpy **čerstvou nebo plnou baterii**. Podívejte se na sekci baterie pro podrobnosti. Ujistěte se, že je pumpa velmi blízko ke smartphonu.

![Combo by měl být vedle telefonu](../images/Combo_next_to_Phone.png)

2. Vypněte nebo odeberte jakákoli jiná bluetooth zařízení, aby nemohla navázat připojení k telefonu během probíhajícího párování. Jakákoliv paralelní bluetooth komunikace nebo výzva k navázání spojení může narušit proces párování.

3. Odstraňte již připojená zařízení v menu Bluetooth pumpy: **NASTAVENÍ BLUETOOTH / SPOJENÍ / ODSTRANIT** až do **ŽÁDNÉ ZAŘÍZENÍ** se nezobrazí.

4. Odstraňte pumpu, která je již připojena k telefonu přes Bluetooth: V sekci Nastavení / Bluetooth odstraňte spárované zařízení "**SpiritCombo**"
5. Ujistěte se, že AAPS neběží na pozadí smyčky. Deaktivujte smyčku v AAPS.
6. Zkuste použít větev '**pairing**' z repozitáře [MilosKozak/ruffy](https://github.com/MilosKozak/ruffy/tree/pairing) pro navázání připojení 
7. Nyní spusťte ruffy na telefonu. Můžete stisknout Reset! a odstranit staré připojení. Pak stiskněte **Připojit!**.
8. V menu Bluetooth pumpy přejděte na ** PŘIDAT ZAŘÍZENÍ / PŘIDAT PŘIPOJENÍ**. Stiskněte *PŘIPOJIT!* 
    - Další tři kroky jsou citlivé na čas, takže možná budete muset vyzkoušet různé pauzy/rychlost, pokud párování selže. Přečtěte si celý postup, než to vyzkoušíte.

9. Nyní by se na pumpě měl zobrazit BT název telefonu pro výběr párování. Je důležité počkat alespoň 5s před stisknutím tlačítka výběru na pumpě. Jinak pumpa správně neodešle žádost o párování na telefon.
    
    - Pokud je Combo Pump nastavena na 5s doby obrazovky, můžete to vyzkoušet s 40s (původní nastavení). Zkušenost naznačuje, že doba mezi zobrazením pumpy na telefonu a výběrem telefonu je kolem 5-10s. V mnoha dalších případech párování prostě vyprší bez úspěšného spárování. Později byste to měli vrátit zpět na 5s, abyste splnili nastavení AAPS Combo a urychlili připojení.
    - Pokud pumpa vůbec nezobrazuje telefon jako párovací zařízení, pravděpodobně není Bluetooth stack vašeho telefonu kompatibilní s pumpou. Ujistěte se, že používáte nový **LineageOS ≥ 14.1** nebo **Android ≥ 8.1 (Oreo)**. Pokud je to možné, vyzkoušejte jiný smartphone. You can find a list of already successfully used smartphones under [AAPS Phones](#Phones-list-of-tested-phones). 

10. Někdy telefon požaduje (typicky 4místný) bluetooth PIN, který nesouvisí s 10místným PINem, který se později zobrazí na pumpě. Obvykle ruffy tento PIN nastaví automaticky, ale kvůli problémům s časováním to ne vždy funguje. Pokud se na telefonu zobrazí žádost o bluetooth párovací PIN před tím, než se na pumpě zobrazí jakýkoli kód, musíte zadat **}gZ='GD?gj2r|B}>** jako PIN. Nej snadněji to uděláte, pokud si tento 16 znakový text zkopírujete do schránky před zahájením sekvence párování a jednoduše jej vložíte do dialogového okna v tomto kroku. Viz související [Github issue](https://github.com/MilosKozak/ruffy/issues/14) pro podrobnosti.

11. Na další pumpě by se měl objevit 10místný bezpečnostní kód. A Ruffy by měl zobrazit obrazovku pro jeho zadání. Zadejte kód do Ruffy a měli byste být připraveni pokračovat.
12. Pokud párování nebylo úspěšné a dostali jste timeout na pumpě, budete muset proces začít znovu od začátku.
13. Pokud jste použili větev 'Pairing' k sestavení aplikace ruffy, nyní nainstalujte verzi sestavenou z větve 'combo' na vrchol toho. Ujistěte se, že jste použili stejné klíče při podepisování obou verzí aplikace, abyste mohli zachovat veškerá nastavení a data, protože obsahují také vlastnosti připojení.
14. Restartujte telefon.
15. Nyní můžete restartovat smyčku AAPS.

(Accu-Chek-Combo-Pump)=

## Použití

- Mějte na paměti, že to není produkt, zejména. Na začátku musí uživatel monitorovat a rozumět systému, jeho omezením a jak může selhat. Silně se doporučuje NEMO použít tento systém, pokud osoba ho používající není schopna plně porozumět systému.
- Přečtěte si dokumentaci OpenAPS na https://openaps.org, abyste porozuměli algoritmu smyčky, na kterém je AAPS založen.
- Přečtěte si online dokumentaci, abyste se naučili a porozuměli AAPS na https://androidaps.readthedocs.io/
- Tato integrace používá stejnou funkčnost, kterou poskytuje měřič, který přichází s Combem. Měřič umožňuje zrcadlit obrazovku pumpy a přeposílat stisky tlačítek na pumpu. Připojení k pumpě a toto přeposílání je to, co aplikace ruffy dělá. Složka `scripter` čte obrazovku a automatizuje zadávání bolusů, TBR atd. a zajišťuje, že vstupy jsou správně zpracovány. AAPS pak interaguje se skripterem, aby aplikoval příkazy smyčky a spravoval bolusy. Tento mód má určitá omezení: je relativně pomalý (ale dost rychlý pro to, k čemu se používá), a nastavení TBR nebo podání bolusu způsobí, že pumpa bude vibrovat.
- Integrace Comb s AAPS je navržena s předpokladem, že všechny vstupy jsou prováděny prostřednictvím AAPS. Bolusy zadané přímo na pumpě budou detekovány AAPS, ale může trvat až 20 minut, než si AAPS uvědomí takový bolus. Čtení bolusů dodaných přímo na pumpě je bezpečnostní prvek a nemělo by být pravidelně používáno (smyčka vyžaduje znalost sacharidů konzumovaných, které nelze zadat na pumpě, což je další důvod, proč by všechny vstupy měly být prováděny v AAPS).
- Neset nebo nezrušujte TBR na pumpě. Smyčka převzala kontrolu nad TBR a nemůže spolehlivě fungovat jinak, protože není možné určit čas zahájení TBR, které nastavila uživatel.
- První profil bazálního tempa pumpy je přečten při spuštění aplikace a je aktualizován AAPS. Bazální tempo by nemělo být manuálně měněno na pumpě, ale bude detekováno a opraveno jako bezpečnostní opatření (na bezpečnostní opatření se nedoporučuje spoléhat, to má sloužit k odhalení neúmyslné změny na pumpě).
- Doporučuje se aktivovat zámek kláves na pumpě, aby se zabránilo bolusům z pumpy, zejména. když byla pumpa používána dříve a použití funkce "rychlý bolus" byla zvyklost. Také, když je zámek kláves aktivován, náhodné stisknutí klávesy NEPŘERUŠÍ aktivní komunikaci mezi AAPS a pumpou.
- Když na pumpě začne varování BOLUS/TBR ZRUŠENÉ během bolusu nebo nastavení TBR, je to způsobeno odpojením mezi pumpou a telefonem, což se občas stává. AAPS se pokusí znovu připojit a potvrdit varování a poté znovu provede poslední akci (bolusy se z bezpečnostních důvodů NEOPAKUJÍ). Proto lze takový poplach ignorovat, protože AAPS to automaticky potvrzuje, obvykle do 30 s (rušení není problém, ale povede k tomu, že současná aktivní akce musí počkat, dokud se displej pumpy nevypne, než se může znovu připojit k pumpě). Pokud alarm pumpy přetrvává, automatické potvrzení selhalo, v takovém případě musí uživatel potvrdit alarm ručně.
- Když je vzneseno varování o nízkém zásobníku nebo nízké baterii během bolusu, jsou potvrzena a zobrazena jako oznámení v AAPS. Pokud k nim dojde, když není otevřeno žádné připojení k pumpě, přechod na záložku Combo a stisknutí tlačítka Obnovit převezme tato upozornění potvrzením a zobrazí oznámení v AAPS.
- Když AAPS selže v potvrzení varování o TBR ZRUŠENÉ, nebo je vzneseno z jiného důvodu, stisknutí tlačítka Obnovit v záložce Combo obnoví připojení, potvrdí varování a zobrazí oznámení v AAPS. Toto lze bezpečně provést, protože tato varování jsou neškodná - příslušné TBR bude znovu nastaveno během další iterace smyčky.
- Pro všechna ostatní varování vznesená pumpou: připojení k pumpě zobrazí zprávu o varování v záložce Combo, např. "Stav: E4: Okolní" a také zobrazí oznámení na hlavním displeji. Chyba vyvolá urgentní oznámení. AAPS nikdy nepotvrzuje závažné chyby na pumpě, ale nechává pumpu vibrovat a zvonit, aby uživatel byl informován o kritické situaci vyžadující akci.
- Po spárování by se ruffy neměl používat přímo (AAPS se spustí na pozadí podle potřeby), protože současné používání ruffy a AAPS není podporováno.
- Pokud AAPS selže (nebo je zastaveno debuggerem) během komunikace AAPS a pumpy (při používání ruffy), může být nutné ruffy násilně ukončit. Restartování AAPS znovu spustí ruffy. Restartování telefonu je také snadný způsob, jak to vyřešit, pokud nevíte, jak násilně zabít aplikaci.
- Nedotýkejte se žádných tlačítek na pumpě, zatímco AAPS komunikuje s pumpou (na pumpě je zobrazeno logo Bluetooth).