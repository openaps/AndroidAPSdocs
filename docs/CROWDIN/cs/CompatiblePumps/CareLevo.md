# CareLevo

CareLevo je patch pumpa bez hadičky od výrobce CareMedi. Každý patch pojme až 300 U inzulínu a nosí se až 7 dní (168 hodin). S **AAPS** komunikuje přes Bluetooth vašeho telefonu, bez dalšího zařízení.

```{admonition} New driver
:class: warning
Ovladač CareLevo je v **AAPS** nový. Než aktivujete svůj první patch, přečtěte si celou tuto stránku a mějte po ruce návod k použití pumpy od výrobce.
```

Nejmenší dávka, kterou patch umí vydat, je 0,05 U. Nastavte bazální dávky v **profilu** alespoň na 0,05 U/h v krocích po 0,05 U/h, jinak se inzulín, který očekává **profil**, a inzulín, který patch vydá, mírně liší. **AAPS** používá bazální dávky, které patch přijal.

```{contents} Table of contents
:depth: 1
:local: true
```

## Možnosti pumpy s AAPS

* Komunikuje s **AAPS** přes vestavěný Bluetooth vašeho telefonu, bez dalšího komunikačního zařízení.
* Bolus v krocích po 0,05 U.
* Bazální dávky od 0,05 U/h do 15 U/h v krocích po 0,05 U/h, s bazálními úseky po 30 minutách.
* Dočasné bazály nastavené jako absolutní dávka, až na 12 hodin.
* Prodloužený bolus až na 8 hodin.
* Letní čas a změny časového pásma musíte řešit ručně. Patch vás upozorní, když se změní časové pásmo.

## Nastavení pumpy

1. Otevřete **nabídku** (☰) v levém horním rohu hlavní obrazovky **AAPS** a vyberte **Konfigurace**.
1. V sekci Pumpa vyberte **Carelevo**.
1. Stisknutím tlačítka Zpět se vraťte na hlavní obrazovku.

![Plugin Carelevo vybraný v Konfigurace > Pumpa](../images/v4/Pumps/carelevo_enabled.png)

## Nastavení

Otevřete obrazovku pumpy pomocí **Spravovat → Pumpa** (nebo **Konfigurace → Pumpa → Otevřít plugin**).

Nastavení CareLevo otevřete stisknutím ikony **Nastavení** (ozubené kolo) v pravém horním rohu. K dispozici jsou tři nastavení:

![Nastavení ovladače Carelevo](../images/v4/Pumps/carelevo_settings.png)

### Nastavení upozornění na málo inzulínu

Patch vás upozorní, když zbývající inzulín v zásobníku klesne na zvolené množství. Můžete nastavit hodnotu od 20 U do 50 U v krocích po 5 U. Výchozí hodnota je 30 U. Nezávisle na tomto nastavení patch spustí kritický alarm a zastaví výdej inzulínu, když zbývá méně než 10 U.

### Nastavení upozornění na dobu používání patche

Patch vás upozorní, když ho nosíte zvolený počet hodin, abyste si mohli výměnu naplánovat. Můžete nastavit hodnotu od 24 do 167 hodin. Výchozí hodnota je 116 hodin.

### Informační alarm patche

Když je tato volba zapnutá, patch pípne při začátku a konci bolusu, prodlouženého bolusu nebo dočasného bazálu. Ve výchozím stavu je vypnutá.

## Obrazovka pumpy

![Obrazovka pumpy Carelevo bez aktivního patche](../images/v4/Pumps/carelevo_pump_screen.png)

Obrazovka pumpy ukazuje **Stav Bluetooth** (Žádný aktivní patch, Odpojeno nebo Připojeno), **Sériové číslo** patche, jeho **Čas aktivace** a **Konec platnosti**, aktuální **Bazální dávka** a **Dočasný bazál**, **Zbývající inzulín** (zbývá / naplněno), **Zbývající čas patche** a **Celkem vydaný inzulín**.

Tlačítka závisí na stavu patche:

* **Aktivovat patch**: spustí aktivaci nového patche, viz níže.
* **Návod k plnění**: ukáže dvanáct kroků plnění patche inzulínem.
* **Pozastavit výdej** / **Obnovit výdej**: pozastaví a znovu spustí výdej inzulínu, viz níže.
* **Zahodit patch**: ukončí aktuální patch, aby bylo možné aktivovat nový.

## Aktivace patche

Než začnete, ujistěte se, že je v **AAPS** aktivní **profil** a že je zapnutý Bluetooth. Po zapnutí musí být patch aktivován v omezeném čase; pokud čas vyprší, patch spustí alarm **Vypršel čas na aplikaci patche** a nelze ho použít.

Na obrazovce pumpy stiskněte **Aktivovat patch** a postupujte podle kroků. Kdykoli před zavedením jehly můžete aktivaci zrušit; to, co jste zadali, se zahodí.

### Výběr inzulínu

Potvrďte inzulín, který používáte. Patch vyžaduje rychle působící inzulín U-100.

### Naplnění patche inzulínem

Naplňte patch 50 až 300 U podle toho, jak dlouho ho budete nosit. Pokud potřebujete návod k plnění, stiskněte **Návod k plnění**. Pak klepněte na naplněné množství a vyberte, kolik jste naplnili; **AAPS** podle toho ukazuje zbývající inzulín.

### Připojení patche

1. Vyndejte patch z blistru a sundejte kryt jehly.
1. Stiskněte tlačítko napájení patche na déle než jednu sekundu. Po pípnutí klepněte na **Hledat patch**.
1. Pokud je nalezený patch ten správný, klepněte na **Potvrdit**. Pokud ne, klepněte na **Hledat znovu**.

### Kontrola bezpečnosti

Jakmile je patch připojen, stiskněte **Bezpečnostní kontrola**. Patch se sám otestuje a naplní. Zkontrolujte, že se na špičce jehly vytvořila kapka inzulínu. Pokud kapka není vidět, stiskněte **Opakovat**. Po dokončení kontroly stiskněte **Další**.

### Místo a připevnění patche

1. Vyberte místo, kde budete patch nosit.
1. Místo důkladně očistěte alkoholovým tamponem.
1. Odstraňte krycí pásku a přilepte patch na kůži tak, aby označená tečka mířila nahoru.
1. Až bude patch přilepený, stiskněte **Další**.

### Zavedení jehly

1. Otočte bezpečnostní kryt ve směru šipky a sundejte ho.
1. Stiskněte tlačítko aplikátoru až na doraz a držte ho 10 sekund. Když je jehla zavedena, ozve se pípnutí.
1. Odstraňte aplikátor a stiskněte **Potvrdit zavedení**.

Pokud zavedení selže, **AAPS** vám řekne, kolik pokusů zbývá. Když nezbývá žádný pokus, patch spustí alarm **Chyba zavedení jehly** a musí se vyměnit.

Výdej inzulínu začne, jakmile je zavedení potvrzeno.

## Zprávy k bolusu

Pokud patch bolus odmítne, **AAPS** vám řekne proč. Například *Bolus nelze vydat. Dostupný bolus: 2,8 U* znamená, že patch teď může vydat jen toto množství.

Pokud bolus zastavíte a patch zastavení nepotvrdí, **AAPS** počká na konec bolusu a zaznamená množství, které patch nahlásí. Pokud bolus nebyl zaznamenán (například proto, že byl zastaven během podávání), **AAPS** ho doplní z celkového množství hlášeného patchem a požádá vás, abyste před dalším pokusem zkontrolovali IOB.

## Pozastavení a obnovení výdeje inzulínu

Na obrazovce pumpy stiskněte **Pozastavit výdej** a vyberte, na jak dlouho se má výdej pozastavit: od 30 minut do 4 hodin v krocích po 30 minutách. Výdej se sám neobnoví: když pauza skončí, patch spustí výstrahu **Spustit inzulín**. Na obrazovce pumpy stiskněte **Obnovit výdej**, nebo ve výstraze **Spustit inzulín**, a potvrďte.

## Zahození patche

Na obrazovce pumpy stiskněte **Zahodit patch** a potvrďte. Výdej inzulínu se zastaví a patch už nelze použít. Sundejte patch z těla a aktivujte nový.

Když patch zastavil kritický alarm, nabídne alarm místo toho tlačítko **Deaktivovat patch**. Jeho stisknutím se patch zahodí stejným způsobem.

(carelevo-alarms-and-notifications)=

## Alarmy a oznámení

Patch hlásí události na třech úrovních. Všechny se zobrazují jako oznámení **AAPS**.

### Kritické alarmy

Výdej inzulínu se zastavil. Jednejte hned:

* **Málo inzulínu**: zbývá méně než 10 U. Deaktivujte patch a vyměňte ho.
* **Platnost patche vypršela**: patch dosáhl konce své životnosti. Deaktivujte patch a vyměňte ho.
* **Slabá baterie**: zahoďte patch a vyměňte ho.
* **High/Low Temperature**: move to a suitable temperature, between 40 ℉ and 99 ℉ (4.4 ℃ and 37.2 ℃).
* **Automatické vypnutí**: patch se zastavil, protože výstraha Automatické vypnutí byla ignorována. Stisknutím **Spustit inzulín** znovu spustíte výdej bazálu.
* **Vypršel čas na aplikaci patche**, **Autodiagnostika selhala**, **Chyba patche**, **Okluze** a **Chyba zavedení jehly**: deaktivujte patch a vyměňte ho.

### Výstrahy

Výdej inzulínu pokračuje, ale něco vyžaduje vaši pozornost:

* **Málo inzulínu**: zásobník dosáhl množství nastaveného v **Nastavení upozornění na málo inzulínu**. Připravte se na výměnu patche.
* **Patch brzy vyprší** a **Doba provozu patche skončila**: vyměňte patch.
* **Slabá baterie**: připravte se na výměnu patche.
* **High/Low Temperature**: delivery is paused until the patch is back between 40 ℉ and 99 ℉ (4.4 ℃ and 37.2 ℃).
* **Automatické vypnutí**: klepněte na **OK**. Pokud výstrahu ignorujete, změní se na kritický alarm a výdej se zastaví.
* **Aktivace patche nedokončena**: klepněte na **OK** a dokončete aktivaci.
* **Spustit inzulín**: pauza, kterou jste nastavili, skončila. Klepnutím na **Spustit inzulín** obnovíte výdej.
* **Zapněte Bluetooth** a **BLE nepřipojeno**: telefon se nemůže s patchem spojit. Zapněte Bluetooth nebo zkontrolujte připojení patche.

### Upozornění

Jen pro informaci: **Málo inzulínu**, **Upozornění na dobu používání patche** (uplynul čas nastavený v **Nastavení upozornění na dobu používání patche**), **Upozornění na kontrolu patche**, **Změna časového pásma** a **Zkontrolujte glykémii** (nastavenou dobu po bolusu).

Patch také hlásí, když se spustí nebo skončí jeho vlastní funkce pozastavení při nízké glykémii (**LGS**). **AAPS** tuto funkci nepoužívá; nízkou glykémii řeší smyčka sama.

## Kde získat pomoc

Problémy s ovladačem CareLevo hlaste na [stránce issues AAPS na GitHubu](https://github.com/nightscout/AndroidAPS/issues) nebo v komunitních kanálech AAPS, viz [Kde mohu získat pomoc?](../GettingHelp/WhereCanIGetHelp.md).
