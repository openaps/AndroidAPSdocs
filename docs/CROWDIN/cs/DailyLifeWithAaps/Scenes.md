(scenes)=
# Scény (předvolby situací)

**Scéna** je pojmenovaná předvolba, která provede **více akcí najednou** – například předvolba *Spánek*, *Cvičení* nebo *Nemoc*, která jedním klepnutím přepne profil, nastaví dočasný cíl, zapne nebo vypne SMB a přidá poznámku do Péče, případně na nastavenou dobu.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Co je scéna

Místo toho, abyste při každé opakující se situaci ručně měnili několik věcí, nastavíte je jednou jako scénu a aktivujete ji jedním klepnutím. Scéna může obsahovat kteroukoli z těchto akcí:

- **Přepnutí profilu** – přepne profil a/nebo ho upraví procentem (např. 70 %).
- **Dočasný cíl** – nastaví dočasný cíl (např. *Aktivita*, *Před jídlem* nebo vlastní hodnotu).
- **SMB zap/vyp** – povolí nebo zakáže super mikro bolusy, dokud je scéna aktivní.
- **Režim smyčky** – změní režim smyčky (např. na opatrnější režim).
- **Poznámka v Péči** – zaznamená událost (např. *Cvičení*, *Nemoc*), aby se zobrazila v grafu a v Nightscoutu.

Scéna má také **trvání** – pevně danou dobu (minuty/hodiny/dny) nebo *Neurčený (ruční ukončení)* – a **koncovou akci**, která se provede, když scéna skončí: buď **oznámení**, nebo může scéna **navázat** na další scénu (například *Nemoc → Cvičení*).

---

## Správa scén

Otevřete **Spravovat → Scény**, kde můžete scény zobrazit, vytvořit, upravit, povolit/zakázat a změnit jejich pořadí.

![Obrazovka pro správu scén](../images/v4/Scenes/scenes_list.png)

Každá karta scény ukazuje:

- **zaškrtávací políčko** pro povolení/zakázání scény,
- **ikonu** a **název**,
- souhrn – *„N akcí, trvání“* – a **→ navazující scénu**, pokud na scénu navazuje další,
- a tři tlačítka: **▶ aktivovat**, **✏️ upravit**, **🗑️ smazat**.

Novou scénu vytvoříte klepnutím na tlačítko **+**.

---

## Vytvoření nebo úprava scény

### Začít ze šablony

Scénu **vytvoříte** klepnutím na tlačítko **+** na obrazovce Scény. Prvním krokem je **Začít ze šablony**: vyberte hotovou scénu pro běžnou situaci – *Cvičení*, *Nemoc*, *Nemoc — zvracení*, *Spánek*, *Noc po cvičení*, *Před jídlem*, *Alkohol*, *Řízení*, *Koupání*, *Luteální fáze*, *Horké počasí*, *Lékařský zákrok* – nebo začněte *Prázdnou* scénou. Každá šablona **předvyplní doporučené akce** a vše můžete upravit v dalších krocích.

![„Začít ze šablony“ – výběr počátečního bodu](../images/v4/Scenes/templates_picker.png)

Po výběru šablony se nejprve vysvětlí její účel – *kdy* a *proč* ji použít – a teprve potom pokračujete:

![Vysvětlení šablony](../images/v4/Scenes/template_explanation.png)

### Projděte akce krok za krokem

Zbytek editoru je krátký průvodce **krok za krokem**. Každý krok je jeden typ akce s přepínačem *„Zahrnout … do scény“* – zapněte ho jen u akcí, které má tato scéna provést, a ostatní nechte vypnuté.

![Editor scény – krok Přepnutí profilu](../images/v4/Scenes/scene_editor.png)

Kroky procházejte tlačítky **Další**/**Zpět**: *Přepnutí profilu*, *Dočasný cíl*, *SMB*, *Režim smyčky*, *Poznámka v Péči*, potom **trvání**, **koncová akce** (oznámení nebo navázání na další scénu) a nakonec **název a ikona** scény. Až budete hotovi, uložte. (Pro **úpravu** existující scény klepněte na její tlačítko **✏️** – dostanete se přímo do těchto kroků.)

Každý krok začíná krátkým vysvětlením, co akce dělá. Kroky vypadají takto, zde se šablonou *Cvičení*:

**Dočasný cíl** – vyberte jednu ze svých předvoleb dočasného cíle:

![Krok Dočasný cíl](../images/v4/Scenes/scene_editor_step3.png)

**SMB** – povolí nebo zakáže SMB, dokud je scéna aktivní:

![Krok SMB](../images/v4/Scenes/scene_editor_step4.png)

**Režim smyčky** – volitelně změní režim smyčky:

![Krok Režim smyčky](../images/v4/Scenes/scene_editor_step5.png)

**Péče** – typ události a poznámka, které se zaznamenají:

![Krok Péče](../images/v4/Scenes/scene_editor_step6.png)

**Trvání** – jak dlouho zůstane scéna aktivní; 0 znamená, dokud ji sami neukončíte:

![Krok Trvání](../images/v4/Scenes/scene_editor_step7.png)

**Navazující scéna** – volitelně scéna, která se spustí, když tato skončí:

![Krok Navazující scéna](../images/v4/Scenes/scene_editor_followup.png)

**Scéna** – název a ikona. Uložte stisknutím **Dokončit**:

![Krok Název a ikona](../images/v4/Scenes/scene_editor_step9.png)

---

## Aktivace scény

Scénu aktivujete ze seznamu **Scény** (tlačítko **▶**) nebo z položky **Scény** ve spodní navigaci. V panelu **Scény** ve spodní navigaci ukazuje každá scéna stejný souhrn jako v seznamu scén. **Tužka** nahoře v panelu otevře **Spravovat → Scény**, kde scény vytvoříte nebo upravíte.

![Panel Scény ve spodní navigaci](../images/v4/Scenes/scenes_sheet.png)

If [bolus protection](#Preferences-protection) is on, **AAPS** asks for it before a scene starts or ends. Changing a scene needs the [settings protection](#Preferences-settings-protection) instead.

Než se cokoli provede, zobrazí se **potvrzení** s přesným seznamem toho, co scéna udělá, abyste to mohli zkontrolovat:

![Potvrzení aktivace scény se seznamem jejích akcí](../images/v4/Scenes/scene_confirmation.png)

Pokud na scénu navazuje další, potvrzení končí znakem **→** a názvem navazující scény, stejně jako v seznamu scén.

Když scénu spustíte z položky **Scény** ve spodní navigaci, potvrzení je jednodušší dialog se stejným seznamem akcí. Aktivujte stisknutím **OK**:

![Potvrzení scény při spuštění ze spodní navigace](../images/v4/Scenes/scene_confirmation_from_sheet.png)

Po potvrzení se akce provedou a **aktivní scéna** se zobrazí nahoře na přehledu s tlačítkem **Ukončit scénu**. Pokud na scénu navazuje další, banner uvádí i název navazující scény:

![Banner aktivní scény na přehledu s tlačítkem Ukončit scénu](../images/v4/Scenes/scene_active_banner.png)

Akce scény platí, dokud:

- neskončí její **trvání** (provede se **koncová akce** – oznámení, nebo navázání na další scénu), nebo
- ji ručně neukončíte klepnutím na **Ukončit scénu**. Pokud na scénu navazuje další, máte dvě možnosti: **Přeskočit na** navazující scénu (aktivní scéna skončí a navazující se spustí hned), nebo **Ukončit scénu** (aktivní scéna skončí a navazující se nespustí).

Scéna bez navazující scény vás jen požádá o potvrzení:

![Dialog Ukončit scénu](../images/v4/Scenes/scene_end_dialog.png)

Ukončení scény **vrátí** změny, které provedla (například přepnutí profilu a dočasný cíl, které spustila).

Když je scéna aktivní, mají profil a cíl na hlavní obrazovce malou ikonu scény, pokud je nastavila scéna. Panel **Scény** ve spodní navigaci zůstává dostupný, abyste mohli spustit jinou scénu:

![Panel Scény, když je scéna aktivní](../images/v4/Scenes/scenes_sheet_active.png)

Když trvání skončí samo, změny se hned vrátí a banner se změní na **Scéna ukončena** s tlačítkem **Zavřít**. Zavřením se jen odstraní banner z obrazovky – samotná scéna už skončila, takže pravidla automatizace i navazující scéna pokračují a na zavření nečekají.

---

## Spouštění scén z automatizace

Scénu nemusíte spouštět ručně – může ji za vás spustit **Automatizace**. Když do pravidla automatizace přidáváte akci (**Spravovat → Automatizace**), výběr akcí obsahuje kategorii **Scény**:

- **Spustit scénu** – aktivuje scénu, když se splní spouštěče pravidla (například v nastavený čas, když někam dorazíte nebo když glykémie překročí mez).
- **Povolit scénu** / **Zakázat scénu** – zpřístupní (nebo znepřístupní) scénu, aniž by ji aktivovaly.

![Akce „Scény“ ve výběru akcí automatizace](../images/v4/Scenes/automation_scene_action.png)

Automatizace může na scénu také **reagovat**: seznam spouštěčů obsahuje spouštěč **Scéna**, takže pravidlo se může provést jen tehdy, když je aktivní určitá scéna. Spolu s **koncovou akcí** scény (vrácení změn, oznámení nebo navázání na další scénu) tak mohou scény automaticky začínat, navazovat na sebe a končit.

---

## Scény s hlavním zařízením/klientem a s hodinkami

**Právě aktivní scéna se synchronizuje** na všech vašich spárovaných zařízeních – aktivujete ji na jednom telefonu a ostatní ji zobrazí také.

Spárovaný **klient** (**AAPSClient**) může scénu také aktivovat nebo ukončit: požadavek se pošle **hlavnímu zařízení**, které vytvoří potvrzení a použije scénu na svůj vlastní stav. Jak to funguje, popisuje stránka [Ovládání master ↔ klient](../RemoteFeatures/ClientMasterControl.md).

(scenes-from-watch)=
### Z hodinek s Wear OS

Na **hodinkách s Wear OS** jsou scény dostupné jako **dlaždice Scéna**. V řadě dlaždic na hodinkách přejeďte na dlaždici **Scéna** (pokud tam ještě není, nejprve ji přidejte ze seznamu dlaždic) a klepněte na scénu, kterou chcete spustit:

![Dlaždice Scéna na hodinkách s Wear OS](../images/v4/Scenes/scene_watch_tile.png)

Dlaždice má čtyři pozice. Ve výchozím stavu se každá pozice vyplní **automaticky** další z vašich povolených scén, v pořadí jako v telefonu. Pokud chcete vybírat sami, **dlouze stiskněte dlaždici** a otevřete její nastavení: pro každou ze čtyř pozic můžete ponechat **Automaticky**, připnout **konkrétní scénu**, nebo vybrat **Žádná** a pozici nechat prázdnou. Pozice připnutá ke scéně, která byla mezitím smazána nebo zakázána, ukazuje **Nedostupný** – vyberte pro ni jinou scénu.

Hodinky pak zobrazí potvrzení – klepnutím na **✓** scénu aktivujete, přejetím zpět akci zrušíte:

![Potvrzení scény na hodinkách](../images/v4/Scenes/scene_watch_confirm.png)

Stejně jako u klienta **vytvoří potvrzení a spustí scénu hlavní zařízení**; hodinky jen předají požadavek (přes klientský telefon, pokud jsou hodinky spárované s klientem).

Když scéna běží – nebo když je v telefonu ještě zobrazený její banner **Scéna ukončena** – ukazuje dlaždice tlačítko **Konec** a pod ním název scény. Klepnutím na něj ukončíte aktivní scénu, nebo zavřete zbylý banner, přímo ze zápěstí.

Pokud na běžící scénu navazuje další, ukazuje dlaždice také tlačítko **Přeskočit** a pod ním název navazující scény. Jsou to stejné dvě možnosti jako v telefonu:

- **Konec** – aktivní scéna skončí. Potvrzení vám oznámí, že navazující scéna se nespustí.
- **Přeskočit** – aktivní scéna skončí a navazující scéna se spustí hned. Potvrzení uvádí obě scény.

Na [obrazovce Stav smyčky](#WearOsSmartwatch-loop-status) hodinek se také zobrazuje aktivní scéna, zbývající čas a navazující scéna.

---


<!-- =====================================================================
     Screenshots captured from a real master device:
       - scenes_list.png        (Manage → Scenes management list)
       - templates_picker.png   (create: "Start from template" picker)
       - template_explanation.png (create: chosen template's explanation)
       - scene_editor.png       (scene editor, Profile switch step)
       - scene_confirmation.png (scene activation confirmation — also used on the Client/Master page)
       - scene_active_banner.png (overview active-scene banner with the End Scene button)
       - automation_scene_action.png (Automation action picker — Scenes category)
       - scene_watch_tile.png    (Wear OS Scene tile)
       - scene_watch_confirm.png (Wear OS scene confirmation)
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
