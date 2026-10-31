(food)=
# Żywność (Twoja baza produktów)

Baza **Żywność** to Twoja osobista lista zapisanych produktów. Każdy wpis zapisuje **węglowodany** produktu (i opcjonalnie jego tłuszcz, białko, energię i kategorię). Dzięki temu produkty, które często jesz, masz w jednym miejscu i możesz zacząć bolus od zapisanego produktu z już wpisanymi węglowodanami.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Otwieranie bazy produktów

Otwórz ekran **Zarządzaj** (dolny pasek nawigacji) i wybierz **Żywność** (*„Zarządzaj wpisami w bazie produktów spożywczych”*). W **AAPS** v4 Żywność **nie jest już wtyczką** — nie trzeba nic włączać; to osobny ekran, który otwierasz z [panelu Zarządzaj](#v4changes-manage).

---

## Lista produktów

Twoje produkty są pokazane jako przewijana lista. Każdy wiersz pokazuje **nazwę** produktu, jego **porcję / jednostkę / kategorię** oraz **węglowodany**:

![Lista bazy produktów z wyszukiwaniem i przyciskiem dodawania](../images/v4/Food/food_list.png)

- **🔍 Szukaj** (na górze) — filtruje listę według **nazwy** (wielkość liter nie ma znaczenia).
- **Filtr kategorii** — elementy pozwalają zawęzić listę do jednej **kategorii**; gdy wybierzesz kategorię, pojawiają się elementy jej **podkategorii**. (Naciśnij wybrany element jeszcze raz, aby go wyczyścić.)
- **➕** (w prawym dolnym rogu) — dodaje nowy produkt (zobacz poniżej).
- Naciśnij wiersz, aby **edytować** ten produkt.

Jeśli lista (lub obecny filtr) nie ma wpisów, ekran pokazuje **Brak danych**.

---

## Dodawanie i edycja produktu

Naciśnij **➕**, aby dodać produkt, lub naciśnij istniejący wiersz, aby go edytować. Edytor otwiera się jako panel od dołu ekranu (**Dodaj produkt** / **Edytuj produkt**):

![Edytor produktu — nazwa, kategoria, porcja, węglowodany i makroskładniki](../images/v4/Food/food_editor.png)

Pola to:

- **Nazwa** — wymagana (bez niej nie można zapisać).
- **Kategoria** i **Podkategoria** — opcjonalne, służą do grupowania i filtrowania produktów.
- **Wielkość porcji** i **Jednostka** — typowa wielkość porcji; domyślna **Jednostka** to **g**.
- **Węglowodany (g)** — ilość węglowodanów w produkcie.
- **Tłuszcz (g)**, **Białko (g)**, **Energia (kJ)** — opcjonalne wartości odżywcze.

Naciśnij **Zachowaj**, aby zapisać, lub **Anuluj**, aby odrzucić zmiany. Gdy edytujesz istniejący produkt, edytor ma też przycisk **Usuń**.

```{admonition} Deleting is undoable
:class: note
Usunięcie produktu pokazuje komunikat **„Usunięto produkt”** z akcją **Cofnij zmianę**, więc przypadkowe usunięcie łatwo cofnąć.
```

---

## Użycie produktu do bolusa

Każdy wiersz produktu ma przycisk **kalkulatora**. Naciśnięcie go otwiera **Kalkulator bolusa** z już wpisanymi **węglowodanami** produktu, a **nazwa** produktu zostaje dodana jako notatka do leczenia — wystarczy potwierdzić i podać bolus bez ponownego wpisywania węglowodanów.

```{admonition} The carbs value is used as-is
:class: note
Zapisana liczba **węglowodanów** produktu jest przekazywana do kalkulatora bez zmian — **AAPS** nie mnoży jej przez porcję ani przez to, ile zjadłeś. Jeśli masz inną ilość, popraw węglowodany w kalkulatorze przed potwierdzeniem. (Nie ma wyboru produktu *wewnątrz* kalkulatora bolusa ani okna węglowodanów; zaczynasz tutaj, od wiersza produktu.)
```

---

## Skąd pochodzą produkty (synchronizacja z Nightscout)

Baza produktów jest udostępniana przez **Nightscout**, ale **tylko w jedną stronę**:

- **Pobieranie:** **AAPS** **odczytuje** produkty z **bazy produktów** Twojej strony Nightscout i utrzymuje z nią zgodność lokalnej listy. Dzieje się to w ramach synchronizacji NSClient, więc sparowane **urządzenie opiekuna / obserwującego** też ma te same produkty.
- **Wysyłanie:** **AAPS** **nie** wysyła produktów **do** Nightscout — NSClient nie obsługuje wysyłania wpisów produktów. Produkty, które tworzysz lub edytujesz **w AAPS**, zostają więc **na tym urządzeniu** i nie trafiają do Nightscout ani na Twoje inne urządzenia.

```{admonition} Maintain your shared list in Nightscout
:class: important
Ponieważ produkty są **tylko pobierane**, aby mieć jedną listę produktów na telefonie, na urządzeniu obserwującego / [urządzeniu opiekuna](../RemoteFeatures/ClientMasterControl.md) i w reszcie systemu, prowadź ją w **Nightscout** (we wbudowanym edytorze produktów). **AAPS** pobierze te wpisy. Produkt dodany tylko w **AAPS** jest lokalny dla tego urządzenia — i tam zostaje: pobieranie dopasowuje wpisy Nightscout po ich identyfikatorze Nightscout, więc dodaje je i aktualizuje, ale nigdy nie nadpisuje ani nie usuwa produktu utworzonego lokalnie (produkt jest usuwany tylko wtedy, gdy jego kopię usunięto w Nightscout).

Pamiętaj, że baza produktów **nie** jest też częścią podpisanego kanału sterowania urządzenie pacjenta ↔ urządzenie opiekuna — jest przesyłana wyłącznie jako dane Nightscout.
```

---

## Nie na zegarku

Baza produktów to funkcja **telefonu** — na **zegarku z Wear OS** nie ma przeglądarki produktów, kafelka ani menu.

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
