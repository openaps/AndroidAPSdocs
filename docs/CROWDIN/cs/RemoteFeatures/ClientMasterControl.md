(client-master-control)=
# Ovládání master ↔ klient

Od verze 4 **AAPS** může sledující telefon s aplikací **AAPSClient** dělat mnohem víc než jen *oznamovat* ošetření přes Nightscout: jakmile je **spárovaný** s hlavním telefonem, může posílat **podepsané příkazy**, které hlavní telefon (**hlavní zařízení**, master) zkontroluje, potvrdí a provede — včetně vydání **bolusu inzulínu** pumpou hlavního zařízení.

Tato stránka vysvětluje, jak to funguje a jak to nastavit a používat.

```{contents} Table of contents
:depth: 2
:local: true
```

```{admonition} Wording used on this page
:class: note
- **Hlavní zařízení** (master) = hlavní telefon s **AAPS**, ke kterému patří pumpa a na kterém běží smyčka (aplikace `full`).
- **Klient** = telefon s **AAPSClient** bez pumpy, který hlavní zařízení sleduje a nyní ho také *ovládá*.
- Oba telefony musí být připojené ke **stejnému Nightscoutu**. Veškerá komunikace stále probíhá přes Nightscout — přímé spojení mezi telefony není potřeba.
```

---

## Jak to funguje

```{admonition} Coming from AAPS v3?
:class: note
V **AAPS** v3 mohl **AAPSClient** do Nightscoutu zapisovat jen nepodepsaná ošetření (záznamy péče) a nemohl vydat bolus. Vzdálené ovládání nyní vyžaduje jednorázové [spárování](#client_master_master_setup). Viz také [Co se změnilo v AAPS v4](#v4changes-remote-control).
```

**AAPS** v4 používá vyhrazený kanál **Client-Control**. Stále vede přes váš Nightscout (v kolekci `settings`), ale každá zpráva je **kryptograficky podepsaná** tajným klíčem, který znají jen tyto dva telefony. Tajný klíč se předá jen jednou, při **párování**, a hned potom se nahradí novým, takže nikdy nejde v otevřené podobě.

Hlavní zásada zní **rozhoduje hlavní zařízení**:

1. Klient pošle *záměr* („bolus 2 U“, „spustit scénu Cvičení“, „nastavit tento dočasný cíl“…).
2. **Hlavní zařízení** akci znovu přepočítá a **omezí** podle **svých vlastních** aktuálních dat (profil, IOB, COB, aktuální dočasný cíl, pumpa) a **připraví přesné potvrzení**, které uživatel uvidí.
3. Klient (nebo hodinky) zobrazí potvrzovací text **hlavního zařízení** — nikdy si nevytváří vlastní.
4. Po potvrzení hlavní zařízení akci **provede jednou** a výsledek pošle zpět klientovi.

Co to pro vás znamená:

- **Podepsané příkazy**: příkazy mohou posílat jen klienti, které jste spárovali (každý klient má vlastní tajný klíč pro párování a podpis). Staré nebo opakovaně poslané příkazy jsou odmítnuty.
- **Role pro každého klienta**: sami rozhodnete, co smí každý klient dělat, od *Pouze pro čtení* po *Admin* — viz [Role klientů](#client-master-control-roles).
- **Bolus inzulínu z klienta**: hlavní zařízení ho vydá svou pumpou a klient zobrazuje průběh vydávání.
- **Rozhoduje hlavní zařízení**: každou akci omezí podle svých vlastních limitů a napíše potvrzení, které se zobrazí na klientovi.
- **Léčbu mění jen spárovaní klienti**: když je ovládání z klienta zapnuté, hlavní zařízení už nepřijímá ošetření ani změny zadané přímo do Nightscoutu — viz [Zabezpečený režim](#client-master-control-hardened-mode).
- **Každý klient dostane vlastní token Nightscoutu** jen s právy, která klient potřebuje — viz [Vlastní token Nightscoutu pro klienta](#client-master-control-own-token).
- **Hlavní zařízení offline**: akce jsou zablokované a zobrazí se jasná zpráva.
- **Odebrání klienta** je jedno klepnutí (pro každého klienta zvlášť), nebo vypínačem na hlavním zařízení zastavíte všechny klienty.

Akce, které lze spustit z klienta: **bolus**, **sacharidy / eSacharidy**, **dočasný cíl** (nastavit a zrušit), **přepnutí profilu**, změna **smyčky / režimu smyčky**, **dočasný bazál** (nastavit a zrušit), **prodloužený bolus** (nastavit a zrušit), **výběr inzulínu** a **[scény](../DailyLifeWithAaps/Scenes.md)**. Část **předvoleb** se navíc synchronizuje oběma směry mezi hlavním zařízením a klienty.

---

## Role a předpoklady

```{admonition} Before you start
:class: important
- **Hlavní zařízení** používá běžné sestavení **AAPS** `full` a je připojené k vaší pumpě.
- **Hlavní zařízení** používá **NSClientV3** s vaším Nightscoutem a ukazuje stav *připojeno*. Dejte mu **admin token** vašeho Nightscoutu: s ním si hlavní zařízení může pro každého klienta vytvořit vlastní token a ukázat ho klientovi jako QR kód.
- **Klient** používá **[AAPSClient](AapsClient.md)** (nebo **AAPSClient2** / **AAPSClient3** pro další pacienty — viz [O AAPSClient, AAPSClient2 a AAPSClient3](#remotecontrol-aapsclient-versions)). Musí používat **stejný** Nightscout. Pokud ho nastavíte QR kódem hlavního zařízení, klient dostane adresu a token Nightscoutu od hlavního zařízení; jinak na něm nejdřív sami nastavte **NSClientV3**.
- **Websockety** jsou potřeba na obou telefonech: příkazy se k hlavnímu zařízení dostanou jen přes spojení websocket. Když je ovládání z klienta zapnuté, **AAPS** nechává websockety zapnuté na hlavním zařízení i na spárovaných klientech.
```

Párování a synchronizace jsou dvě různé věci:

- **Synchronizace** (data: glykémie, ošetření, profil) se nastavuje stejně jako dřív — viz [Synchronizace](#RemoteControl_aapsclient). QR kód hlavního zařízení to na klientovi může udělat za vás.
- **Párování** (ovládání: podepsaný kanál pro příkazy popsaný zde) je nový krok popsaný níže.

---

## Nastavení

(client_master_master_setup)=
### 1. Na hlavním zařízení — zapněte ovládání a přidejte klienta

Na hlavním zařízení otevřete obrazovku **Spravovat** a vyberte **Autorizovaní klienti**.

Zapněte **Povolit ovládání z klienta** (ve výchozím stavu je **vypnuté**). Je to hlavní vypínač: když je vypnutý, žádný klient nemůže posílat příkazy, ale spárovaní klienti zůstanou uložení, takže ho můžete později znovu zapnout. Jeho zapnutím se zapne také [Zabezpečený režim](#client-master-control-hardened-mode), který se zobrazí jako „*Zabezpečený režim zapnutý*“ s ikonou **(i)**, která ho vysvětluje. V [Zjednodušeném režimu](#preferences-simple-mode) je ovládání z klienta vždy zapnuté, proto se vypínač nezobrazuje.

![Obrazovka Autorizovaní klienti na hlavním zařízení](../images/v4/ClientMaster/authorized_clients_master.png)

Klienta přidáte klepnutím na tlačítko **+** (vpravo dole). V dialogu **Nový klient**:

1. Zadejte **název zařízení**, abyste ho v seznamu poznali.
2. Vyberte, **jak je telefon nastaven** (viz tabulka níže).
3. Vyberte jeho **[roli](#client-master-control-roles)**. Nic není předvybrané: správná role závisí na tom, kdo telefon používá.

![Dialog Nový klient na hlavním zařízení: název zařízení, jak je telefon nastaven a jeho role](../images/v4/ClientMaster/new_client_master.png)

| Způsob                            | Co nový telefon dostane                                                            | Kdy ho použít                                                                                             |
| --------------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **QR kód: Nightscout a párování** | adresu Nightscoutu, vlastní token Nightscoutu a spárování, vše jedním naskenováním | nový telefon má fotoaparát: nejrychlejší způsob, nic se nepíše                                            |
| **QR kód: pouze Nightscout**      | adresu Nightscoutu a vlastní token Nightscoutu, bez spárování                      | telefon má data jen **zobrazovat** a nikdy neposílat příkazy                                              |
| **PIN**                           | jen spárování; nastavení Nightscoutu si ponechá svá                                | telefon nemá fotoaparát (nebo hlavní zařízení neumí vytvářet tokeny); musí už být připojený k Nightscoutu |

Oba způsoby s QR kódem potřebují **admin token** v nastavení **NSClientV3** na hlavním zařízení, protože hlavní zařízení vytváří token klienta v Nightscoutu. Bez něj se možnosti s QR kódem zobrazí, ale nedají se vybrat, a dialog uvede proč; **PIN** funguje vždy.

#### S QR kódem

Klepněte na **OK**: hlavní zařízení vytvoří token Nightscoutu pro klienta a zobrazí **QR kód**. Kód, který také páruje, platí asi **dvě minuty**; obrazovka odpočítává čas a sama se zavře, když se klient spáruje. Naskenujte ho na novém telefonu podle postupu v části [Na klientovi](#client_master_client_setup).

```{admonition} The QR code is a secret
:class: warning
Kdokoli, kdo QR kód uvidí, může číst váš Nightscout, a kód, který páruje, nese i spárování. Ukažte ho jen novému telefonu. **AAPS** blokuje snímky obrazovky, dokud je kód zobrazený.
```

![Obrazovka hlavního zařízení s QR kódem a odpočtem (kód je rozmazaný)](../images/v4/ClientMaster/qr_code_master.png)

#### S PINem

Klepněte na **OK**: hlavní zařízení zobrazí 8místný **PIN pro párování**, rozdělený do dvou skupin po čtyřech číslicích (například `1234 5678`). Tento PIN je **jednorázový** a **vyprší asi za dvě minuty**. As with the QR code, the master refuses a client name that is already in its list: each client gets its own Nightscout token under its name.

![Obrazovka párování na hlavním zařízení s jednorázovým PINem (zde zobrazený PIN už vypršel)](../images/v4/ClientMaster/pairing_pin_master.png)

```{admonition} The pairing PIN is a secret
:class: warning
PIN chrání tajný klíč pro párování, který se předává přes Nightscout. Sdílejte ho jen se zařízením, které párujete, nezveřejňujte ho a pokud ho nepoužijete, nechte ho vypršet. Nový PIN můžete kdykoli vytvořit dalším klepnutím na **+**.
```

(client_master_client_setup)=
### 2. Na klientovi — spárujte ho s hlavním zařízením

#### Naskenování QR kódu

QR kód hlavního zařízení můžete naskenovat na dvou místech:

- v **Průvodci nastavením** klienta, v kroku „**Nastavit z hlavního zařízení**“, který je před krokem Nightscout. Jedno naskenování pak nastaví Nightscout a u kódu, který páruje, také spárování, takže je nastavení hotové: průvodce se zavře a otevře se hlavní obrazovka;
- kdykoli později přes **Spravovat → Párovat s hlavním zařízením → Naskenovat QR kód**.

Při prvním použití **AAPSClient** požádá o oprávnění k **fotoaparátu**. Pokud ho odmítnete, obrazovka napíše, že je fotoaparát potřeba, a můžete ho povolit tlačítkem **Zkuste to znovu**, nebo místo toho spárovat pomocí PINu.

Namiřte fotoaparát na kód. Klient ukáže, co kód udělá — adresu Nightscoutu a u kódu, který páruje, i hlavní zařízení, se kterým se spáruje — a zeptá se „**Použít tento kód?**“. Klepněte na **Použít**: klient zapne **NSClientV3**, nahradí svou adresu a token Nightscoutu údaji z kódu a zapne websockety. Kód, který páruje, telefon také spáruje; telefon se hlavnímu zařízení ohlásí, jakmile se připojí k Nightscoutu.

![Krok průvodce Nastavit z hlavního zařízení na klientovi](../images/v4/AapsClient/aapsclient_wizard_from_master.png)

```{admonition} Scanning is available on Android
:class: note
Skener zatím není dostupný v iOS a počítač nemá fotoaparát: tam použijte PIN.
```

#### Zadání PINu

Na klientovi otevřete **Spravovat → Párovat s hlavním zařízením** (nebo krok průvodce **Párovat s hlavním zařízením**, za krokem Nightscout), **zadejte 8místný PIN** zobrazený na hlavním zařízení a klepněte na **Párovat**. Klient pomocí PINu bezpečně načte nabídku párování přes Nightscout, pak se zeptá „**Párovat s tímto hlavním zařízením?**“ a ukáže identifikátor hlavního zařízení. Potvrďte klepnutím na **Párovat** (snímek obrazovky najdete v části [Párování s hlavním zařízením](#aapsclient-pairing-with-the-master)).

![Obrazovka Párovat s hlavním zařízením na klientovi před spárováním — sem zadejte PIN](../images/v4/ClientMaster/pair_with_master_unpaired.png)

#### Po spárování

Jakmile je klient spárovaný, pošle hlavnímu zařízení zprávu **Hello** a objeví se v seznamu **Autorizovaní klienti** na hlavním zařízení jako **Aktivní**, s časem *„naposledy spatřeno“*. Klient zná svou [roli](#client-master-control-roles) ze spárování, takže hned zobrazí správná tlačítka. Spárováním v Průvodci nastavením se průvodce dokončí. Ve stejném kroku oba telefony nahradí tajný klíč pro párování novým, který nikdy nebyl přenášen (viz [Bezpečnostní poznámky](#client-master-control-security)), a klient nastavený pomocí PINu dostane vlastní token Nightscoutu (viz [Vlastní token Nightscoutu pro klienta](#client-master-control-own-token)). Klient může být spárovaný jen s **jedním** hlavním zařízením; pokud ho chcete spárovat s jiným hlavním zařízením, nejdřív klepněte na **Odpárovat**.

![Obrazovka Párovat s hlavním zařízením na klientovi (už spárováno)](../images/v4/ClientMaster/pair_with_master_client.png)

### 3. Správa klientů

Na obrazovce **Autorizovaní klienti** na hlavním zařízení můžete kdykoli:

- **Změnit roli** klienta řadou čtyř tlačítek pod jeho názvem. Nová role platí hned, bez nového párování.
- **Zjistit, s jakým tokenem Nightscoutu** klient zapisuje: chcete vidět „*Vlastní token Nightscoutu*“. Červený řádek „*Používá Nightscout token …, který má více práv, než klient potřebuje*“ znamená, že klient stále používá token s více právy, obvykle váš admin token — viz [Vlastní token Nightscoutu pro klienta](#client-master-control-own-token).
- **Odebrat** jednoho klienta — klepněte na ikonu **koše** vedle něj. Klient pak nemůže posílat příkazy, dokud ho znovu nespárujete. Smaže se i jeho vlastní token Nightscoutu, takže už nemůže ani číst váš Nightscout.
- **Zastavit veškeré ovládání** bez ztráty spárování — vypněte **Povolit ovládání z klienta**.

Telefony nastavené přes **QR kód: pouze Nightscout** jsou uvedené pod klienty v části „**Pouze číst Nightscout**“. U každého z nich můžete znovu zobrazit QR kód (pro nové nastavení stejného telefonu) nebo smazat jeho token, čímž jeho přístup k vašemu Nightscoutu skončí.

![Autorizovaní klienti se spárovaným klientem (tlačítka rolí, vlastní token Nightscoutu) a telefonem v části Pouze číst Nightscout](../images/v4/ClientMaster/authorized_clients_roles.png)

---

(client-master-control-roles)=
## Role klientů

Každý spárovaný klient má **roli**. Hlavní zařízení ji kontroluje u každého příkazu a klient zobrazuje jen to, co jeho role dovoluje. Nová role platí hned, bez nového párování. Role na sebe navazují: každá může všechno, co může ta před ní.

| Role                | Klient smí                                                                                                                                                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Pouze pro čtení** | jen zobrazovat data. Zůstává spárovaný, takže je připravený, až mu dáte vyšší roli.                                                                                                                                             |
| **Jídlo**           | dát bolus, použít bolusovou kalkulačku a Rychlý bolus, zadat sacharidy a zastavit probíhající bolus. Sacharidy zadané zde mohou způsobit, že smyčka vydá víc inzulínu.                                                          |
| **Pečovatel**       | dělat vše, co uživatel dělá v **AAPS**: dočasné cíle, přepnutí profilu a inzulínu, režim smyčky, dočasný bazál, prodloužený bolus, scény, záznamy péče, kalibrace a odstraňování záznamů. Nemůže měnit nastavení ani předvolby. |
| **Admin**           | dělat vše, včetně nastavení a předvoleb (Rychlý bolus, předvolby dočasných cílů, scény, profily, automatizace, inzulín).                                                                                                        |

Ikona **(i)** nahoře na obrazovce **Autorizovaní klienti** ukazuje stejné vysvětlení. Na klientovi ukazuje **Spravovat → Párovat s hlavním zařízením** vlastní roli telefonu.

---

(client-master-control-hardened-mode)=
## Zabezpečený režim

Když je zapnuté **Povolit ovládání z klienta**, hlavní zařízení je v **zabezpečeném režimu**: přijímá změny jen od spárovaných klientů. **Nepřijímá** ošetření, dočasné cíle, změny profilu, změny režimu smyčky ani mazání provedené přímo v Nightscoutu, například na webu Nightscoutu nebo v jiných aplikacích.

- Nastavení pro přijímání dat z Nightscoutu (**NSClientV3 → Synchronizace**) jsou v zabezpečeném režimu skrytá; **AAPS** s nimi pracuje, jako by byla vypnutá.
- Hlavní zařízení dál **nahrává** všechna svá data do Nightscoutu, včetně glykémie, a nechává zapnuté **websockety**.
- Pokud hlavní zařízení bere **glykémii z Nightscoutu**, bere ji odtud dál.
- Pro načtení historie do **nového** hlavního zařízení použijte **Plná synchronizace** v **NSClientV3**: načte vše, co je v Nightscoutu, včetně profilů.
- [SMS příkazy](SMSCommands.md) nejsou ovlivněné.

Spárovaný klient se řídí zabezpečeným režimem hlavního zařízení: nechává zapnuté websockety a jsou na něm skrytá stejná nastavení Nightscoutu. Nespárovaný klient si ponechává svá vlastní nastavení.

[Zjednodušený režim](#preferences-simple-mode) vždy zapne zabezpečený režim. Pokud ho chcete vypnout, opusťte Zjednodušený režim a na hlavním zařízení vypněte **Povolit ovládání z klienta**.

```{admonition} Why hardened mode
:class: note
Vše, co spárovaný klient pošle, je podepsané, zkontrolované a potvrzené hlavním zařízením. Ošetření zadané na webu Nightscoutu takové není: mohl by ho přidat kdokoli s právem zápisu do vašeho Nightscoutu. V zabezpečeném režimu mohou chování hlavního zařízení změnit jen podepsané příkazy.
```

---

(client-master-control-own-token)=
## Vlastní token Nightscoutu pro klienta

Klient nepotřebuje admin token. Jen čte váš Nightscout a posílá přes něj své příkazy hlavnímu zařízení; sám nic nenahrává. Proto hlavní zařízení dá každému klientovi vlastní token Nightscoutu jen s těmito právy:

- číst vše,
- zapisovat do kolekce `settings`, což je kanál k hlavnímu zařízení,
- odložit alarmy Nightscoutu.

Token patří k roli Nightscoutu s názvem **`aaps-client`**, kterou hlavní zařízení vytvoří, když ji poprvé potřebuje. Roli a tokeny (s názvem `aaps-` a jméno klienta) uvidíte v **Admin tools** (nástroje správce) vašeho Nightscoutu. Pokud tam roli změníte, hlavní zařízení ji vrátí zpět, až bude příště vytvářet token nebo až otevřete **Autorizovaní klienti**.

Jak klient získá svůj token:

- **Nastavení pomocí QR kódu**: token je v kódu.
- **Spárování pomocí PINu** (nebo spárování dřív, než tato funkce existovala): po spárování mu hlavní zařízení pošle jeho vlastní token šifrovaně přes spárovaný kanál. Klient nejdřív ověří, že přihlášení s ním funguje, a pak ho používá místo tokenu, který měl. K tomu je na hlavním zařízení potřeba admin token; bez něj si klient ponechá svůj token a jeho karta na hlavním zařízení ukazuje červený řádek.

**Klient si ponechává svůj vlastní token.** Jakmile hlavní zařízení uvidí, že klient zapisuje svým vlastním tokenem, přijímá od tohoto klienta příkazy už jen s tímto tokenem. Příkaz zapsaný jiným tokenem (například admin tokenem, který byl později zadán do klienta, nebo tokenem jiného klienta) je odmítnut, i když je klient spárovaný, a klient napíše „*Hlavní zařízení odmítlo příkaz: tento telefon zapisuje do Nightscoutu s jiným tokenem, než je jeho vlastní*“. Jeho karta na hlavním zařízení to ukazuje červeně. Klient se dál zobrazuje jako online, takže vidíte, co je špatně. Opravíte to tak, že klienta na hlavním zařízení odeberete a znovu přidáte.

Hlavní zařízení nikdy nesmaže ani nezmění token Nightscoutu, který samo nevytvořilo (token s jinými rolemi než `aaps-client`): ty patří vám. Vlastní token klienta smaže, když klienta odeberete.

---

## Používání vzdáleného ovládání

### Spuštění akce z klienta

Klienta používejte přesně tak, jako byste používali samotný telefon: otevřete **Sacharidy**, **Inzulín**, **Dočasný cíl**, **Profil**, **Scény**, panel **Spravovat** atd. a vyplňte hodnoty.

Když potvrdíte, klient krátce zobrazí **„Kontaktuji hlavní zařízení…“**, **hlavní zařízení** akci spočítá a omezí a klient pak zobrazí **vlastní potvrzení hlavního zařízení** — přesně ty řádky, hodnoty a barvy, které by hlavní zařízení ukázalo na své obrazovce. Zkontrolujte je a pokračujte klepnutím na **OK**.

![Potvrzení scény připravené hlavním zařízením a zobrazené na klientovi](../images/v4/ClientMaster/confirmation_master_authored.png)

Totéž platí pro jednoduché zadání sacharidů — množství zobrazené k potvrzení je to, které spočítalo hlavní zařízení:

![Potvrzení sacharidů připravené hlavním zařízením](../images/v4/ClientMaster/carbs_confirmation_client.png)

Po potvrzení hlavní zařízení akci jednou provede a výsledek se zobrazí na klientovi.

### Bolus inzulínu z klienta

Toto je hlavní nová funkce ve v4. Bolus spuštěný na klientovi **vydá hlavní zařízení svou pumpou**; hlavní zařízení ho omezí podle svých vlastních limitů a klient během vydávání ukazuje **průběh vydávání v reálném čase** (a alarm, pokud pumpa nahlásí chybu).

```{admonition} Boluses are always confirmed and capped on the master
:class: note
Klient nikdy sám nerozhoduje o vydaném množství. Hlavní zařízení ho přepočítá a omezí, vy potvrdíte množství připravené hlavním zařízením a teprve pak se vydá.
```

(clientmastercontrol-when-the-master-is-offline)=
### Když je hlavní zařízení offline

Pokud hlavní zařízení není dostupné (telefon je vypnutý nebo spí, není připojený k Nightscoutu nebo nefungují websockety), akce ovládání jsou na klientovi **zablokované dřív, než se cokoli odešle**, a dostanete jasnou zprávu. Nic se neprovede jen napůl.

![Zpráva na klientovi, když je hlavní zařízení offline](../images/v4/ClientMaster/master_offline_error.png)

Klient dostupnost automaticky znovu kontroluje a ovládání znovu povolí, jakmile je hlavní zařízení zase online.

(clientmastercontrol-wear-os-on-a-client)=

### Wear OS (hodinky) na klientovi

Hodinky spárované s telefonem **klienta** předávají své akce přes klienta hlavnímu zařízení (hodinky → klient → hlavní zařízení). Hodinky zobrazují potvrzovací řádky **hlavního zařízení** a skutečný výsledek, stejně jako telefon. Nastavení hodinek se nemění — viz [Wear OS](../WearOS/WearOsSmartwatch.md).


<!-- 📷 SCREENSHOT NEEDED (optional): watch confirmation screen relayed from the master,
     and/or the "Contacting master" state on the watch. Requires a paired Wear OS device. -->

---

(client-master-config-prefs)=
## Změna konfigurace a předvoleb

Párování nejen předává jednotlivé akce — také udržuje **konfiguraci** a mnoho **předvoleb** stejné na hlavním zařízení i jeho klientech.

### Konfigurace (které pluginy jsou aktivní)

Aktivní **pluginy** (algoritmus APS, citlivost, vyhlazování, …) se vybírají na **hlavním zařízení** a **zrcadlí se** na všechny spárované klienty. Na klientovi jsou tyto volby označené malou **ikonou mobilu** na obrazovce [Konfigurace](#configuration_sync_icon) — změňte je na hlavním zařízení a klienti se automaticky přizpůsobí, a naopak.

Na klientovi se ikona mobilu zobrazuje u položek *Vyhlazování*, *Kalibrace*, *Detekce citlivosti* a *APS* (synchronizováno z hlavního zařízení), ale ne u *Komunikace*:

![Seznam konfigurace na klientovi — ikona mobilu označuje kategorie synchronizované s hlavním zařízením](../images/v4/ClientMaster/configuration_client.png)

Údaje o připojení, které jsou pro každé zařízení jedinečné — hlavně **URL Nightscoutu / přístupový token v NSClient** — se *nesynchronizují*. Každý telefon má své vlastní; na klientovi pocházejí z QR kódu hlavního zařízení, nebo je nastavíte sami.

### Profily

Váš **seznam profilů** se také synchronizuje mezi hlavním zařízením a jeho spárovanými klienty. Na spárovaném klientovi ukazuje **Spravovat → Profil** stejné profily jako hlavní zařízení; profil můžete **upravit** nebo **aktivovat** a — jako každý jiný příkaz — změna se pošle na **hlavní zařízení**, tam se použije a synchronizuje zpět.

Když poprvé aktivujete profil na nově nainstalovaném klientovi, klient může zobrazit „*Zatím se nepoužívá žádný inzulín*“ a požádat vás, abyste **vybrali inzulín**. Vyberte inzulín, který je aktivní na hlavním zařízení (ukazuje ho **Spravovat → Nastavení inzulínu** na hlavním zařízení).

Na klientovi, který **není spárovaný**, je obrazovka Profil stále dostupná, ale **jen pro čtení**: klient ukazuje profily, které dostává přes Nightscout (potřebuje je pro své vlastní výpočty), ale není tam tlačítko pro úpravu ani aktivaci — není hlavní zařízení, kam by se změna poslala.

### Předvolby

Část **předvoleb** je **obousměrná**: můžete je změnit na **hlavním zařízení nebo na spárovaném klientovi** a změna se synchronizuje na druhou stranu. Když takovou předvolbu změníte na klientovi, pošle se podepsaným kanálem na hlavní zařízení, tam se použije a platná hodnota se pošle zpět — takže na klientovi vždy vidíte to, co hlavní zařízení uložilo. Pokud se stejná předvolba změní na dvou zařízeních téměř ve stejnou chvíli, **platí poslední změna**. U nastavení s posuvníkem se nová hodnota pošle, když zvednete prst.

V nastavení označuje stejná malá **ikona mobilu** jednotlivé předvolby, které se synchronizují. V příkladu níže se synchronizuje *Doba absorpce* (ikona mobilu), zatímco nastavení bez ikony platí jen pro dané zařízení:

![Nastavení pluginu — ikona mobilu označuje synchronizované předvolby](../images/v4/ClientMaster/preferences_synced_icon.png)

```{admonition} The master must be online to change synced settings from a client
:class: note
Protože o uložené hodnotě rozhoduje hlavní zařízení, úprava položky konfigurace řízené hlavním zařízením nebo obousměrné předvolby z klienta vyžaduje, aby bylo hlavní zařízení **dostupné**. When the master is offline those controls are disabled on the client (see [When the master is offline](#clientmastercontrol-when-the-master-is-offline)).
```

---

(client-master-control-security)=
## Bezpečnostní poznámky

```{admonition} How the channel is protected
:class: tip
- **Tajný klíč pro párování**: hlavní zařízení ho klientovi předá jen jednou — chráněný PINem v dokumentu v Nightscoutu, nebo uvnitř QR kódu — a oba telefony ho ukládají šifrovaně.
- **Nový tajný klíč hned po spárování**: první zpráva klienta po spárování spustí výměnu klíčů a od té chvíle oba telefony používají tajný klíč, který nikdy nebyl přenášen. Tajný klíč, který mohl někdo vidět (vyfocený QR kód, nabídka s PINem přečtená z Nightscoutu), je potom k ničemu. Telefony spárované dřív, než tato funkce existovala, udělají totéž jednou po aktualizaci.
- **Každý příkaz je podepsaný** (HMAC). Hlavní zařízení odmítne vše, jehož podpis neodpovídá spárovanému klientovi.
- **Opakovanému poslání se brání** monotónním čítačem pro každého klienta a každý příkaz po krátké době platnosti **vyprší**.
- **Nejmenší práva v Nightscoutu**: každý klient má [vlastní token Nightscoutu](#client-master-control-own-token), který může jen číst a zapisovat do kanálu pro ovládání z klienta. Jakmile ho klient použije, hlavní zařízení přijímá jeho příkazy už jen s tímto tokenem. Odebráním klienta se token smaže.
- **Jen podepsané změny**: v [zabezpečeném režimu](#client-master-control-hardened-mode) hlavní zařízení ignoruje změny léčby zadané přímo do Nightscoutu.
- **Hlavní zařízení podepisuje, co sdílí**: nastavení, seznam klientů a znamení „hlavní zařízení žije“, které hlavní zařízení ukládá do Nightscoutu pro své klienty, nesou podpis hlavního zařízení. Klient je přijme jen tehdy, když je podpis od hlavního zařízení, takže token jiného klienta je nemůže změnit. Klient se klíč hlavního zařízení dozví při párování, nebo z QR kódu u telefonu, který jen čte Nightscout. Odmítnutý dokument se v logu NSClient zobrazí jako „*✕ SETTINGS … refused*“.
- **Ovládání máte stále vy**: dejte každému klientovi [roli](#client-master-control-roles), kterou potřebuje, odeberte klienta jedním klepnutím, nebo vše vypněte přes **Povolit ovládání z klienta**.
```

```{admonition} After restoring a backup
:class: warning
Pokud klienta obnovíte ze zálohy, která vrátí jeho čítač příkazů zpět, hlavní zařízení odmítne jeho další příkazy jako opakovaně poslané. Problém vyřešíte tak, že klienta **odpárujete a znovu spárujete**.
```

---

(client-master-control-troubleshooting)=

## Řešení problémů

| Příznak                                                                                                                     | Co zkontrolovat                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Klient hlásí, že **hlavní zařízení je offline**                                                                             | Telefon hlavního zařízení je zapnutý a běží na něm **AAPS**; oba telefony jsou připojené v **NSClientV3**; **websockety** jsou zapnuté na obou; stejný Nightscout.                                                                                                                                                                       |
| Klient hlásí, že **není spárovaný**                                                                                         | Spárujte ho znovu přes **Spravovat → Párovat s hlavním zařízením**. Ověřte, že je klient **Aktivní** v seznamu **Autorizovaní klienti** na hlavním zařízení.                                                                                                                                                                             |
| Příkaz byl hlavním zařízením **odmítnut**                                                                                   | Hlavní zařízení příkaz znovu ověřuje podle svého aktuálního stavu — např. vybraný profil už neexistuje nebo typ pumpy nesouhlasí. Zkontrolujte to na hlavním zařízení.                                                                                                                                                                   |
| Příkazy fungují, ale jsou **pomalé**                                                                                        | Zapněte **websockety** na obou telefonech (jinak aplikace přejdou na pomalejší pravidelné dotazování).                                                                                                                                                                                                                                   |
| Párování je zrušeno se zprávou *„Tento telefon nemohl uložit klíč párování“*                                                | Nic se nezměnilo. Začněte párování znovu; pokud se to stále nedaří, restartujte **AAPSClient** a zkuste to ještě jednou.                                                                                                                                                                                                                 |
| Po spárování se nic neděje                                                                                                  | Ujistěte se, že je na hlavním zařízení ZAPNUTÉ **Povolit ovládání z klienta** a že je hlavní zařízení připojené k Nightscoutu.                                                                                                                                                                                                           |
| Možnosti s QR kódem nejdou v dialogu **Nový klient** vybrat                                                                 | Dialog uvede proč. *Token není token administrátora*: dejte hlavnímu zařízení admin token vašeho Nightscoutu, nebo přidejte klienta pomocí **PINu**. *Nepřipojeno*: počkejte, až hlavní zařízení ukáže v **NSClientV3** stav *připojeno*.                                                                                                |
| *„Nightscout již má token s tímto jménem a dalšími právy“*                                                                  | Jeden z vašich vlastních tokenů Nightscoutu se jmenuje `aaps-` a toto jméno. Zvolte pro klienta jiné jméno.                                                                                                                                                                                                                              |
| *„Klient s tímto jménem je již v seznamu“*                                                                                  | Zvolte jiné jméno, nebo tohoto klienta nejdřív odeberte.                                                                                                                                                                                                                                                                                 |
| Klient hlásí *„Tento kód pochází z jiné verze AAPS“*                                                                        | Hlavní zařízení a klient musí používat **stejnou** verzi **AAPS**. Aktualizujte starší z nich.                                                                                                                                                                                                                                           |
| Klient hlásí *„Platnost tohoto kódu vypršela“*                                                                              | Kód, který páruje, platí asi dvě minuty. Pro nový kód přidejte klienta na hlavním zařízení znovu.                                                                                                                                                                                                                                        |
| Klient hlásí *„Tento telefon je již spárován“*                                                                              | Nejdřív ho odpárujte (**Spravovat → Párovat s hlavním zařízením → Odpárovat**), pak znovu naskenujte. Kód **pouze Nightscout** funguje i na spárovaném telefonu.                                                                                                                                                                         |
| Klient hlásí *„Hlavní zařízení odmítlo příkaz: tento telefon zapisuje do Nightscoutu s jiným tokenem, než je jeho vlastní“* | Klient dřív používal svůj vlastní token Nightscoutu a nyní zapisuje jiným, například poté, co byl do jeho nastavení Nightscoutu zadán jiný token. Odeberte klienta na hlavním zařízení a přidejte ho znovu (viz [Vlastní token Nightscoutu pro klienta](#client-master-control-own-token)).                                              |
| Log NSClient na klientovi ukazuje *„✕ SETTINGS … refused“* a jeho nastavení už nenásledují hlavní zařízení                  | Dokument s nastavením hlavního zařízení zapsal někdo jiný, nebo má hlavní zařízení nový klíč (například po smazání jeho dat). Spárovaný klient si nový klíč převezme sám při příštím připojení k Nightscoutu. Telefon, který jen čte Nightscout, potřebuje znovu QR kód hlavního zařízení (**Pouze číst Nightscout → Zobrazit QR kód**). |
| Karta klienta ukazuje červeně *„Používá Nightscout token …“*                                                                | Klient stále zapisuje tokenem, který má více práv, než potřebuje. Hlavní zařízení mu po spárování pošle jeho vlastní token, ale jen pokud má hlavní zařízení admin token. Zkontrolujte token hlavního zařízení, nebo klienta nastavte znovu pomocí QR kódu.                                                                              |
| Klient už nemůže číst Nightscout                                                                                            | Jeho token byl smazán, například protože byl klient na hlavním zařízení odebrán. Přidejte ho znovu.                                                                                                                                                                                                                                      |
| Ošetření zadaná na webu Nightscoutu se nepoužijí                                                                            | V [zabezpečeném režimu](#client-master-control-hardened-mode) je to očekávané: zadejte je místo toho na spárovaném klientovi.                                                                                                                                                                                                            |

Problémy s Nightscoutem / synchronizací nejdřív řešte podle stránky [Řešení problémů s NSClientem](../GettingHelp/TroubleshootingNsClient.md).

---


<!-- =====================================================================
     SCREENSHOTS STILL TO ADD:
       1. (optional) Wear OS confirmation relayed from the master
     Already included:
       - authorized_clients_master.png       (master: Allow client control, hardened mode, client card, + button)
       - authorized_clients_roles.png        (master: client card with roles, Read Nightscout only section)
       - new_client_master.png               (master: New client dialog, three ways and role row)
       - qr_code_master.png                  (master: pairing QR code with countdown, code blurred; console screenshot)
       - aapsclient_wizard_from_master.png   (client: Set up from the master wizard step)
       - pair_with_master_unpaired.png       (client: pairing screen, unpaired PIN entry)
       - pairing_pin_master.png              (master: one-time pairing PIN — expired demo PIN)
       - pair_with_master_client.png         (client: pairing screen, paired state)
       - confirmation_master_authored.png    (client: master-authored scene confirmation)
       - carbs_confirmation_client.png       (client: master-authored carbs confirmation)
       - master_offline_error.png            (client: master-offline message)
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
