(food)=
# Potraviny (vaše databáze potravin)

Databáze **potravin** je váš osobní seznam uložených potravin. Každý záznam ukládá **sacharidy** potraviny (a volitelně také tuky, bílkoviny, energii a kategorii). Věci, které často jíte, tak máte na jednom místě a můžete z uložené potraviny spustit bolus s již vyplněnými sacharidy.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Otevření databáze potravin

Otevřete obrazovku **Spravovat** (spodní navigace) a vyberte **Potraviny** (*„Spravovat položky databáze potravin“*). V **AAPS** v4 už potraviny **nejsou plugin** – nic se nezapíná; je to samostatná obrazovka, na kterou se dostanete z [panelu Spravovat](#v4changes-manage).

---

## Seznam potravin

Vaše potraviny se zobrazují jako posouvatelný seznam. Každý řádek ukazuje **název** potraviny, její **porci / jednotku / kategorii** a její **sacharidy**:

![Seznam databáze potravin s vyhledáváním a tlačítkem pro přidání](../images/v4/Food/food_list.png)

- **🔍 Hledat** (nahoře) – filtruje seznam podle **názvu** (nezáleží na velikosti písmen).
- **Filtr kategorií** – pomocí štítků můžete seznam zúžit na jednu **kategorii**; po výběru kategorie se pro ni zobrazí štítky **podkategorií**. (Dalším klepnutím na vybraný štítek výběr zrušíte.)
- **➕** (vpravo dole) – přidá novou potravinu (viz níže).
- Klepnutím na řádek danou potravinu **upravíte**.

Pokud seznam (nebo aktuální filtr) neobsahuje žádné záznamy, obrazovka ukáže **Žádná data**.

---

## Přidání a úprava potraviny

Pro přidání klepněte na **➕**, pro úpravu klepněte na existující řádek. Otevře se editor jako spodní panel (**Přidat potravinu** / **Upravit potravinu**):

![Editor potraviny – název, kategorie, porce, sacharidy a makroživiny](../images/v4/Food/food_editor.png)

Pole jsou:

- **Název** – povinné (bez něj nelze uložit).
- **Kategorie** a **Podkategorie** – volitelné, slouží k seskupení/filtrování potravin.
- **Porce** a **Jednotka** – obvyklá velikost porce; výchozí **Jednotka** je **g**.
- **Sacharidy (g)** – množství sacharidů v potravině.
- **Tuky (g)**, **Bílkoviny (g)**, **Kalorie (kJ)** – volitelné nutriční hodnoty.

Klepnutím na **Uložit** ji uložíte, klepnutím na **Zrušit** změny zahodíte. Při úpravě existující potraviny má editor také tlačítko **Smazat**.

```{admonition} Deleting is undoable
:class: note
Po smazání potraviny se zobrazí zpráva **„Potravina odstraněna“** s akcí **Vrátit zpět**, takže omylem smazanou potravinu snadno obnovíte.
```

---

## Použití potraviny pro bolus

Každý řádek potraviny má tlačítko **kalkulačky**. Klepnutím na něj otevřete **bolusovou kalkulačku** s již vyplněnými **sacharidy** potraviny a s **názvem** potraviny přidaným jako poznámka k ošetření – stačí potvrdit a podat, bez nového zadávání sacharidů.

```{admonition} The carbs value is used as-is
:class: note
Uložené množství **sacharidů** potraviny se předá přímo do kalkulačky – **AAPS** ho nenásobí porcí ani tím, kolik jste snědli. Pokud máte jiné množství, upravte sacharidy v kalkulačce před potvrzením. (*Uvnitř* bolusové kalkulačky ani v dialogu sacharidů není výběr potravin; začínáte zde z řádku potraviny.)
```

---

## Odkud se potraviny berou (synchronizace s Nightscoutem)

Databáze potravin se sdílí přes **Nightscout**, ale **jen jedním směrem**:

- **Stažení:** **AAPS** **čte** potraviny z **databáze potravin** na vašem webu Nightscout a místní seznam s ní udržuje synchronizovaný. Probíhá to v rámci synchronizace NSClient, takže spárovaný **klient/sledující** má nakonec stejné potraviny.
- **Nahrání:** **AAPS** potraviny **neodesílá** **do** Nightscoutu – NSClient nahrávání záznamů potravin nepodporuje. Potraviny, které vytvoříte nebo upravíte **v AAPS**, proto zůstanou **jen v tomto zařízení** a nepřenesou se do Nightscoutu ani do vašich dalších zařízení.

```{admonition} Maintain your shared list in Nightscout
:class: important
Protože se potraviny **jen stahují**, seznam potravin sdílený mezi telefonem, sledujícím/[klientem](../RemoteFeatures/ClientMasterControl.md) a zbytkem vašeho systému udržujte v **Nightscoutu** (v jeho vestavěném editoru potravin). **AAPS** si tyto záznamy stáhne. Potravina přidaná jen v **AAPS** je uložená jen v tomto zařízení – a zůstane tam: stahování páruje záznamy z Nightscoutu podle jejich Nightscout ID, takže je přidává a aktualizuje, ale nikdy nepřepíše ani neodstraní potravinu, kterou jste vytvořili místně (potravina se odstraní, jen když se její kopie smaže v Nightscoutu).

Databáze potravin také **není** součástí podepsaného ovládacího kanálu hlavní zařízení ↔ klient – přenáší se pouze jako data Nightscoutu.
```

---

## Ne na hodinkách

Databáze potravin je funkce **telefonu** – na **hodinkách s Wear OS** není žádný prohlížeč potravin, dlaždice ani nabídka.

---


<!-- =====================================================================
     Screenshots captured from a real master device:
       - food_list.png    (Manage → Food: list row, search, add button)
       - food_editor.png  ("Add Food" editor: name/category/subcategory/portion/unit/carbs/fat/protein/energy)
     No food was created or deleted (the editor was cancelled).
     Sync facts code-verified: download via LoadFoodsWorker.getFoods(); upload disabled
     (DataSyncSelectorV3 processChangedFoods() commented out — "NSCv3 doesn't support food update").
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
