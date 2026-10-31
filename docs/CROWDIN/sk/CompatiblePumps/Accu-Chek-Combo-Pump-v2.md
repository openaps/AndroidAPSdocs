# Accu-Chek Combo

**Tento softvér je súčasťou riešenia „urob si sám“ (DIY), nie je to produkt. Vyžaduje, aby ste si VY systém prečítali, naučili sa ho a porozumeli mu, vrátane toho, ako ho používať. Nie je to niečo, čo za vás urobí celú liečbu diabetu. Ak ste ochotní venovať tomu potrebný čas, pomôže vám zlepšiť liečbu diabetu aj kvalitu života. Neponáhľajte sa, dajte si čas na učenie. Za to, čo s ním urobíte, zodpovedáte iba vy sami.**

```{admonition} Accu-Chek Combo is being phased out
:class: note

Roche sa sťahuje z trhu inzulínových púmp, aby svoju ponuku pre diabetes zamerala na CGM Accu-Chek SmartGuide. Oznámila koniec predaja púmp Accu-Chek Combo aj Accu-Chek Insight; aj jej posledná mikropumpa Accu-Chek Solo sa postupne prestáva predávať (posledné dodávky v Nemecku koncom roka 2025). Zmena sa zavádza postupne podľa regiónov, začína sa v Nemecku a očakáva sa, že budú nasledovať ďalšie európske trhy. Ak sa na túto pumpu spoliehate, naplánujte si včas prechod na podporovanú pumpu.
```

```{contents} Table of contents
:depth: 1
:local: true
```

## Funkcie pumpy s AAPS

* Komunikuje s **AAPS** priamo cez Bluetooth vášho telefónu, bez ďalšieho komunikačného zariadenia.
* Automatická zmena letného času a časového pásma.

## Hardvérové a softvérové požiadavky

* Roche Accu-Chek Combo (akýkoľvek firmware, funguje so všetkými).
* Zariadenie Smartpix alebo Realtyme spolu so softvérom 360 Configuration Software na konfiguráciu pumpy. (Roche na požiadanie posiela svojim zákazníkom zariadenia Smartpix a konfiguračný softvér zadarmo.)
* Kompatibilný telefón s Androidom 12 alebo novším. Podrobnosti nájdete v [poznámkach k vydaniu](#maintenance-android-version-aaps-version).
* Aplikácia **AAPS** nainštalovaná v telefóne.

Niektoré telefóny môžu fungovať lepšie ako iné. Záleží na kvalite ich podpory Bluetooth a na tom, či majú ďalšie, veľmi agresívne funkcie na šetrenie energie. Zoznam telefónov nájdete v dokumente [Telefóny](#Phones-list-of-tested-phones). Uvedomte si, že tento zoznam nie je úplný a odráža osobné skúsenosti používateľov. Budeme radi, ak doplníte aj svoje skúsenosti a pomôžete tak ostatným (v týchto projektoch ide o to, aby sme pomoc posúvali ďalej).

(combov2-before-you-begin)=
## Skôr než začnete

**BEZPEČNOSŤ NA PRVOM MIESTE** – nerobte tento postup v prostredí, kde by ste sa nevedeli zotaviť z chyby. Majte po ruke zariadenie Smartpix / Realtyme a softvér 360 Configuration Software. Na nastavenie všetkého a kontrolu, či všetko funguje správne, si vyhraďte asi hodinu.

Majte na pamäti tieto obmedzenia:

* Predĺžený bolus a viacvlnový bolus momentálne nie sú podporované (namiesto nich môžete použiť [predĺžené sacharidy](../DailyLifeWithAaps/ExtendedCarbs.md)).
* Podporovaný je iba jeden bazálny profil (prvý).
* Najnižšia bazálna dávka vo vašom **profile** je 0,05 U/h. **AAPS** odmietne **profil** s nižšou dávkou. Combo zaokrúhľuje bazálne dávky na svoje vlastné kroky (0,01 U/h pod 1 U/h, 0,05 U/h do 10 U/h, 0,1 U/h nad 10 U/h). **AAPS** používa dávky, ktoré pumpa skutočne podáva.
* Dočasné bazály sú obmedzené na 500 % aktuálnej bazálnej dávky. **AAPS** s týmto limitom počíta.
* Okruh je vypnutý, ak aktuálne aktívny profil v pumpe nie je profil č. 1. Tak to zostane, kým nebude aktívny profil č. 1. Keď sa to stane, AAPS pri ďalšom pripojení (buď samo po chvíli, alebo keď ťuknete na **Obnoviť** na obrazovke pumpy Accu-Chek Combo) zistí, že aktuálny je profil č. 1, a okruh znova zapne.
* Ak okruh požiada o zrušenie bežiaceho dočasného bazálu (TBR), Combo namiesto toho nastaví dočasný bazál 90 % alebo 110 % na 15 minút. Dôvodom je, že skutočné zrušenie dočasného bazálu vyvolá na pumpe výstrahu, ktorá spôsobí veľa vibrácií, a tieto vibrácie sa nedajú vypnúť.
* Stabilita spojenia cez Bluetooth sa líši podľa telefónu. Spôsobuje výstrahy „pumpa nedostupná“, keď sa už nepodarí nadviazať spojenie s pumpou. If that error occurs, make sure Bluetooth is enabled, tap **Refresh** on the pump screen (**Manage** > **Pump**) to see if this was caused by an intermittent issue and if still no connection is established, reboot the phone which should usually fix this.
* There is another issue where a restart doesn't help but a button on the pump must be pressed (which resets the pump's Bluetooth stack), before the pump accepts connections from the phone again.
* Dočasný bazál na pumpe nenastavujte, pretože dočasné bazály riadi okruh. Zistenie nového dočasného bazálu na pumpe môže trvať až 20 minút a jeho účinok sa započíta až od chvíle, keď sa zistí. V najhoršom prípade teda môže 20 minút dočasného bazálu chýbať v IOB.

Ovládač momentálne podporuje na pumpe Combo tieto jazyky. (Nesúvisí to s jazykom v AAPS – ide o jazyk, ktorý zobrazuje samotný LCD displej pumpy Combo.)

* Angličtina
* Španielčina
* Francúzština
* Taliančina
* Ruština
* Turečtina
* Poľština
* Čeština
* Maďarčina
* Slovenčina
* Rumunčina
* Chorvátčina
* Holandčina
* Gréčtina
* Fínčina
* Nórčina
* Portugalčina
* Švédčina
* Dánčina
* Nemčina
* Slovinčina
* Litovčina

**Dôležité**: Ak je vaša pumpa nastavená na jazyk, ktorý nie je v tomto zozname, kontaktujte vývojárov a nastavte jazyk pumpy na jeden z jazykov v zozname. Inak ovládač nebude fungovať správne.

## Nastavenie telefónu

Je veľmi dôležité overiť, že je vypnutá optimalizácia batérie. AAPS už samo zistí, keď sa ho táto optimalizácia týka, a vo svojom rozhraní vás požiada, aby ste ju vypli. Na moderných telefónoch s Androidom je však aj samotný Bluetooth _aplikácia_ (systémová aplikácia). A táto „aplikácia Bluetooth“ zvyčajne beží _so zapnutou optimalizáciou batérie_. Preto môže Bluetooth prestať odpovedať, keď chce telefón šetriť energiu, pretože aplikáciu Bluetooth ukončí. To znamená, že optimalizáciu batérie treba vypnúť aj v nastaveniach tejto systémovej aplikácie Bluetooth. Bohužiaľ, spôsob, ako túto systémovú aplikáciu Bluetooth nájsť, sa v rôznych telefónoch líši. V čistom Androide prejdite do Nastavenia -> Aplikácie -> Zobraziť všetky aplikácie (N) (N = počet aplikácií v telefóne). Potom otvorte ponuku v pravom hornom rohu a ťuknite na „Zobraziť systémové“, „Zobraziť systémové aplikácie“ alebo „Všetky aplikácie“. V rozšírenom zozname aplikácií teraz nájdite aplikáciu „Bluetooth“. Vyberte ju a na obrazovke „Informácie o aplikácii“ ťuknite na „Batéria“. Tam vypnite optimalizáciu batérie (niekedy sa volá „využitie batérie“).

## Nastavenie pumpy Combo

* Nakonfigurujte pumpu pomocou softvéru Accu-Chek 360 Configuration Software. Ak tento softvér nemáte, kontaktujte zákaznícku linku Accu-Chek. Registrovaným používateľom zvyčajne pošlú CD so softvérom „360° Pump Configuration Software“ a zariadenie SmartPix na infračervené pripojenie cez USB (funguje aj zariadenie Realtyme, ak ho máte).

  - **Povinné nastavenia** (na snímkach obrazovky označené zelenou):

     * Konfiguráciu ponuky nastavte/ponechajte na „Standard“. Pumpa potom zobrazí iba podporované ponuky/akcie a skryje tie nepodporované (predĺžený/viacvlnový bolus, viac bazálnych profilov). Ich použitie obmedzí funkciu okruhu, pretože okruh potom nemôže bežať bezpečne.
     * Overte, že _Quick Info Text_ je nastavený na „QUICK INFO“ (bez úvodzoviek, nájdete ho v časti _Insulin Pump Options_).
     * Nastavte _Maximum Adjustment_ dočasného bazálu na 500 %
     * Vypnite _Signal End of Temporary Basal Rate_
     * Nastavte _Duration increment_ dočasného bazálu na 15 min
     * Zapnite Bluetooth

  - **Odporúčané nastavenia** (na snímkach obrazovky označené modrou)

     * Upozornenie na takmer prázdny zásobník nastavte podľa seba
     * Nastavte maximálny bolus vhodný pre vašu liečbu, aby ste sa chránili pred chybami v softvéri
     * Podobne nastavte ako poistku maximálne trvanie dočasného bazálu. Povoľte aspoň 3 hodiny, pretože možnosť odpojiť pumpu na 3 hodiny nastaví 0 % na 3 hodiny.
     * Zapnite na pumpe zámok tlačidiel, aby sa nedal podať bolus priamo z pumpy, najmä ak ste pumpu používali predtým a boli ste zvyknutí na rýchly bolus.
     * Nastavte čas vypnutia displeja na minimum 5,5 a čas zatvorenia ponuky na minimum 5. Vďaka tomu sa AAPS rýchlejšie zotaví z chybových situácií a pri takých chybách bude menej vibrácií

  ![Snímka obrazovky nastavení používateľskej ponuky](../images/combo/combo-menu-settings.png)

  ![Snímka obrazovky nastavení dočasného bazálu](../images/combo/combo-tbr-settings.png)

  ![Snímka obrazovky nastavení bolusu](../images/combo/combo-bolus-settings.png)

  ![Snímka obrazovky nastavení inzulínového zásobníka](../images/combo/combo-insulin-settings.png)

## Aktivácia ovládača a jeho spárovanie s pumpou Combo

* Otvorte **ponuku** (☰) v ľavom hornom rohu, prejdite do [**Konfigurácia** > **Pumpa**](../SettingUpAaps/ConfigBuilder.md) a vyberte **Accu-Chek Combo**.

  ![Konfigurácia > Pumpa s pluginom Accu-Chek Combo](../images/v4/Configuration/configuration_pump_list_1.png)

  Keď je vybraná, karta **Accu-Chek Combo** zobrazuje dve tlačidlá, **Nastavenia** a **Otvoriť plugin**:

  ![Plugin Accu-Chek Combo vybraný v Konfigurácia > Pumpa](../images/v4/Pumps/accu_chek_combo_enabled.png)

  **Nastavenia** otvoria nastavenia ovládača Accu-Chek Combo (pozrite [Nastavenia](#combov2-preferences) nižšie):

  ![Nastavenia ovládača Accu-Chek Combo](../images/v4/Pumps/accu_chek_combo_settings.png)

  **Otvoriť plugin** (alebo **Spravovať** > **Pumpa**) otvorí obrazovku pumpy Accu-Chek Combo. Kým nie je pumpa spárovaná, zobrazuje **Nespárované s pumpou**:

  ![Obrazovka pumpy Accu-Chek Combo pred spárovaním](../images/v4/Pumps/accu_chek_combo_pump_screen.png)

* Na obrazovke pumpy ťuknite na **Párovanie**. Otvorí sa obrazovka **Spárovať s pumpou**. Urobte kroky zobrazené na obrazovke a potom ťuknite na **Spustiť párovanie**. Keď Android požiada o povolenie, aby bol telefón viditeľný pre iné zariadenia Bluetooth, ťuknite na **Povoliť**. Nakoniec Combo zobrazí na svojej obrazovke 10-miestny PIN na párovanie a **AAPS** si ho vypýta. Zadajte tento PIN do poľa **10-miestny PIN**.

  ![Obrazovka Spárovať s pumpou s tlačidlom Spustiť párovanie](../images/combo/combov2-pairing-screen-1.png)

  ![Android žiada, aby bol telefón viditeľný pre iné zariadenia Bluetooth](../images/combo/combov2-pairing-bt-visible-prompt.png)

  ![Prebieha Combo párovanie, vyhľadávanie pumpy](../images/combo/combov2-pairing-screen-2.png)

  Ďalšie obrázky sú zo staršej verzie **AAPS**. Kroky a texty sú rovnaké, ale obrazovky vyzerajú trochu inak.

  ![Snímka obrazovky párovania Combo 3](../images/combo/combov2-pairing-screen-3.png)

  ![Snímka obrazovky párovania Combo 4](../images/combo/combov2-pairing-screen-4.png)

  ![Snímka obrazovky párovania Combo 4](../images/combo/combov2-pairing-screen-5.png)

* Ak zadáte PIN nesprávne, **AAPS** zobrazí **PIN nefungoval. Skontrolujte, či ste neurobili preklep. Pokiaľ sa to stále deje, zrušte a opakujte párovanie.**

  ![Snímka obrazovky párovania Combo 3](../images/combo/combov2-pairing-screen-incorrect-pin.png)

* Keď sa zobrazí **Úspešne spárované s Combo**, ťuknite na **OK**. Vrátite sa na obrazovku pumpy, ktorá teraz zobrazuje stav pumpy (pozrite [Obsah obrazovky pumpy Accu-Chek Combo](#combov2-tab-contents) nižšie). Tlačidlo **Párovanie** sa nahradí tlačidlom **Zrušiť párovanie**.

* Na overenie nastavenia (pumpa musí byť pre istotu **odpojená** od kanyly!) nastavte v AAPS dočasný bazál 500 % na 15 min a podajte bolus. Na pumpe by mal teraz bežať dočasný bazál a v histórii by mal byť bolus. AAPS by malo tiež ukazovať aktívny dočasný bazál a podaný bolus.

* Na pumpe Combo odporúčame zapnúť zámok tlačidiel, aby sa nedal podať bolus priamo z pumpy, najmä ak ste pumpu používali predtým a boli ste zvyknutí na funkciu „rýchly bolus“.

## Poznámky k párovaniu

Pumpa Accu-Chek Combo bola vyvinutá pred vydaním Bluetooth 4.0 a len rok po vydaní úplne prvej verzie Androidu. Preto jej spôsob párovania s inými zariadeniami nie je na 100 % kompatibilný s tým, ako sa párovanie robí v dnešnom Androide. Aby to AAPS úplne prekonalo, potrebovalo by systémové oprávnenia, ktoré majú iba systémové aplikácie. Tie inštalujú do telefónu jeho výrobcovia – používatelia systémové aplikácie inštalovať nemôžu.

Preto párovanie nikdy nebude na 100 % bez problémov. Najmä počas párovania sa môže na chvíľu zobraziť dialóg Androidu na zadanie PIN pre Bluetooth a sám zmiznúť. Niekedy však zostane na obrazovke a pýta si 4-miestny PIN. (Nezamieňajte si ho s 10-miestnym PIN na párovanie s Combo.) Nič nezadávajte, iba stlačte Zrušiť. Ak párovanie nepokračuje, opakujte pokus o párovanie podľa pokynov na obrazovke.

(combov2-tab-contents)=
## Obsah obrazovky pumpy Accu-Chek Combo

Obrazovku pumpy otvoríte cez **Spravovať** > **Pumpa**. Keď je pumpa spárovaná, zobrazuje tieto informácie (položky sú uvedené zhora nadol):

![Snímka obrazovky pumpy Accu-Chek Combo so spárovanou pumpou (staršia verzia AAPS)](../images/combo/combov2-tab-with-pairing.png)

1. **Stav ovládača**: Ovládač môže byť v jednom z týchto stavov:
   - **Odpojené**: Nie je spojenie cez Bluetooth. V tomto stave je ovládač väčšinu času a k pumpe sa pripája iba vtedy, keď je to potrebné – tým šetrí energiu
   - **Pripájanie**
   - **Kontrola pumpy**: pumpa je pripojená, ale ovládač práve robí bezpečnostné kontroly, aby overil, že je všetko v poriadku a aktuálne
   - **Pripravený**: ovládač je pripravený prijímať príkazy z AAPS
   - **Pozastavené**: pumpa je pozastavená (na pumpe Combo sa zobrazuje ako „stop“)
   - Popis práve vykonávaného príkazu, napríklad **Nastavenie bazálneho profilu** alebo **Načítavam stav pumpy**
   - **Chyba**: nastala chyba; spojenie sa ukončilo a všetky prebiehajúce príkazy sa prerušili
2. **Posledné spojenie**: Pred koľkými minútami sa ovládač úspešne pripojil k pumpe Combo. Ak je to viac ako 30 minút, položka sa zobrazí červenou farbou
3. **Batéria**: Stav batérie. Combo hlási iba **Nabitá**, **Takmer vybitá** alebo **Úplne vybitá** a nič presnejšie (napríklad percentá) neposkytuje, preto sa tu zobrazujú iba tieto tri úrovne
4. **Zásobník**: Koľko jednotiek (IU) je práve v zásobníku pumpy Combo
5. **Posledný bolus**: Pred koľkými minútami bol podaný posledný bolus. Ak od spustenia AAPS ešte žiadny podaný nebol, nezobrazuje sa
6. **Dočasný bazál**: Podrobnosti o práve aktívnom dočasnom bazále. Ak žiadny nie je aktívny, nezobrazuje sa
7. **Základná hodnota bazálu**: Práve aktívna základná bazálna dávka („základná“ znamená bazálna dávka bez vplyvu aktívneho dočasného bazálu)
8. **Sériové číslo**: Sériové číslo pumpy Combo, ako ho hlási pumpa (zodpovedá sériovému číslu na zadnej strane pumpy Combo)
9. **Adresa Bluetooth**: 6-bajtová adresa Bluetooth pumpy Combo vo formáte `XX:XX:XX:XX:XX:XX`

Kým ovládač niečo robí (napríklad nastavuje bazálny profil), pod zoznamom je rámček s popisom aktuálnej činnosti a s tenkým ukazovateľom priebehu.

Pumpu Combo je možné cez Bluetooth ovládať v režime _vzdialeného terminálu_ alebo v režime _príkazov_. Režim vzdialeného terminálu zodpovedá „režimu diaľkového ovládania“ na glukomeri Combo, ktorý napodobňuje LCD displej pumpy a jej štyri tlačidlá. Niektoré príkazy musí ovládač vykonať v tomto režime, pretože v režime príkazov nemajú obdobu. Režim príkazov je oveľa rýchlejší, ale, ako už bolo povedané, má obmedzený rozsah. Keď je aktívny režim vzdialeného terminálu, aktuálna obrazovka vzdialeného terminálu sa zobrazuje v poli tesne nad obrázkom pumpy Combo. Keď sa však ovládač prepne do režimu príkazov, toto pole zostane prázdne.

(Vy to neovplyvňujete; ovládač sám úplne rozhoduje, ktorý režim použije. Je to len poznámka, aby ste vedeli, prečo v tomto poli niekedy vidíte obrazovky pumpy Combo.)

V dolnej časti sú tieto tlačidlá:

- **Obnoviť**: Spustí okamžitú aktualizáciu stavu pumpy. Používa sa aj na to, aby ste AAPS oznámili, že predtým zistená chyba je už vyriešená a AAPS môže znova skontrolovať, či je všetko v poriadku (viac nižšie v [časti o výstrahách](#combov2-alerts)). Ťuknúť naň môžete iba vtedy, keď je ovládač odpojený, pozastavený alebo v chybovom stave.
- **Zrušiť párovanie**: Zruší párovanie spárovanej pumpy Combo s **AAPS** a Androidom po tom, ako potvrdíte **Naozaj chcete odpárovať pumpu?**. Keď nie je spárovaná žiadna pumpa, toto tlačidlo sa nahradí tlačidlom **Párovanie**.

(combov2-preferences)=
## Nastavenia

Pre ovládač Combo sú dostupné tieto nastavenia (**Konfigurácia** > **Pumpa** > **Accu-Chek Combo** > **Nastavenia**, alebo ikona nastavení (ozubené koliesko) na obrazovke pumpy). Položky sú uvedené zhora nadol:

1. **Dĺžka hľadania (v sekundách)**: Pri párovaní ovládač urobí telefón viditeľným pre pumpu. Toto nastavenie určuje, ako dlho je telefón viditeľný. Predvolene je zvolené maximum (300 sekúnd = 5 minút). Android nedovoľuje, aby bol telefón viditeľný neobmedzene, preto treba zvoliť dĺžku.
2. **Detekovať a vložiť automaticky výmenu zásobníka**: Ak je zapnuté, ovládač zaznamená „výmenu zásobníka“, ktorú by ste inak zadali sami cez **Spravovať** > **Plnenie/doplňovanie**. Podrobnejšie je to vysvetlené [nižšie](#combov2-autodetections).
3. **Detekovať a vložiť automaticky výmenu batérie**: Ak je zapnuté, ovládač zaznamená „výmenu batérie“, ktorú by ste inak zadali sami cez **Spravovať** > **Výmena batérie v pumpe**. Podrobnejšie je to vysvetlené [nižšie](#combov2-autodetections).
4. **Povoliť podrobné logovanie Combo**: Výrazne zvýši množstvo logov, ktoré ovládač zapisuje. **POZOR**: Toto nastavenie nezapínajte, pokiaľ vás o to nepožiada vývojár. Inak by to do logov **AAPS** pridalo veľa zbytočných záznamov a znížilo by ich užitočnosť.

Párovanie a zrušenie párovania sa robí na obrazovke pumpy, nie v nastaveniach (pozrite vyššie).

(combov2-autodetections)=
## Automatické zistenie a zaznamenanie výmeny batérie a zásobníka

Ovládač dokáže zistiť výmenu batérie a zásobníka tak, že sleduje stav batérie a zásobníka. Ak Combo pri poslednej aktualizácii stavu pumpy hlásilo takmer vybitú batériu a teraz, pri novej aktualizácii stavu, je stav batérie normálny, ovládač usúdi, že používateľ musel batériu vymeniť. Rovnaká logika platí pre stav zásobníka: ak je teraz vyšší ako predtým, považuje sa to za výmenu zásobníka.

Funguje to iba vtedy, ak sa batéria a zásobník vymieňajú, keď je ich stav hlásený ako nízky, _a_ nová batéria a zásobník sú dostatočne plné.

Toto automatické zisťovanie môžete vypnúť v [nastaveniach](#combov2-preferences) ovládača.

(combov2-alerts)=
## Výstrahy (upozornenia a chyby) a ako sa spracúvajú

Combo zobrazuje výstrahy ako obrazovky vzdialeného terminálu. Warnings are shown with a "Wx" code (x is a digit), along with a short description. Príkladom je „W7“, „TBR OVER“. Chyby vyzerajú podobne, ale namiesto toho majú kód „Ex“.

Niektoré upozornenia ovládač automaticky potvrdí. Sú to:

- W1 „reservoir low“: ovládač z neho urobí upozornenie „takmer prázdny zásobník“, ktoré sa zobrazí na hlavnej obrazovke AAPS
- W2 „battery low“: ovládač z neho urobí upozornenie „takmer vybitá batéria“, ktoré sa zobrazí na hlavnej obrazovke AAPS
- W3, W6, W7, W8: všetky sú pre používateľa iba informačné, preto ich ovládač môže bezpečne automaticky potvrdiť

Ostatné upozornenia sa automaticky _nepotvrdzujú_. Ani chyby sa automaticky _nikdy_ nepotvrdzujú. Oba prípady sa spracúvajú rovnako: ovládač zobrazí dialóg s výstrahou nad rozhraním AAPS a preruší vykonávanie všetkých prebiehajúcich príkazov. Ovládač potom prejde do stavu „chyba“ (pozrite [Obsah obrazovky pumpy Accu-Chek Combo vyššie](#combov2-tab-contents)). V tomto stave nie je možné vykonať žiadny príkaz. Používateľ musí chybu vyriešiť na pumpe; napríklad pri chybe oklúzie môže byť potrebné vymeniť kanylu. Keď používateľ chybu vyrieši, bežnú prevádzku obnovíte ťuknutím na **Obnoviť** na obrazovke pumpy Accu-Chek Combo. Ovládač sa potom pripojí k pumpe Combo a aktualizuje jej stav. Pritom skontroluje, či sa na obrazovke stále zobrazuje chyba atď. Ovládač tiež po chvíli stav pumpy obnoví sám, takže ručné stlačenie tohto tlačidla nie je povinné.

Bolus je špeciálny prípad. Podáva sa v režime príkazov pumpy Combo, ktorý počas bolusu nehlási, že sa objavila výstraha. Preto ovládač nemôže upozornenia automaticky potvrdzovať _počas_ bolusu. Bohužiaľ to znamená, že pumpa bude pípať, kým sa bolus neskončí. Najčastejšia výstraha počas bolusu je zvyčajne W1 „reservoir low“ (takmer prázdny zásobník). **Don't** dismiss Combo warnings on the pump itself manually during a bolus. Riskujete, že bolus prerušíte. Ovládač sa o upozornenie postará, keď sa bolus skončí.

Výstrahy, ktoré vzniknú, keď ovládač nie je pripojený k pumpe Combo, ovládač nezaznamená. Combo nemá ako výstrahu samo poslať do telefónu; spojenie musí vždy začať telefón. Preto výstraha zostane, kým sa ovládač k pumpe nepripojí. Na obrazovke pumpy môžete ťuknúť na **Obnoviť**, aby ste spustili pripojenie a ovládač výstrahu spracoval hneď (namiesto čakania, kým sa AAPS samo rozhodne pripojiť).

**DÔLEŽITÉ**: Ak nastane chyba alebo sa zobrazí upozornenie, ktoré sa automaticky nepotvrdzuje, ovládač prejde do chybového stavu. V tomto stave **BUDE OKRUH ZABLOKOVANÝ**, kým sa stav pumpy neobnoví! Odblokuje sa po aktualizácii stavu pumpy (buď ťuknutím na **Obnoviť**, alebo automatickou aktualizáciou ovládača), ak sa už nezobrazuje žiadna chyba.

## Na čo si dávať pozor pri používaní pumpy Combo

* Majte na pamäti, že to nie je produkt. Najmä na začiatku musí používateľ systém sledovať a porozumieť mu, jeho obmedzeniam a tomu, ako môže zlyhať. Dôrazne odporúčame tento systém NEPOUŽÍVAŤ, ak mu osoba, ktorá ho používa, nedokáže úplne porozumieť.
* Pre spôsob, akým funguje diaľkové ovládanie pumpy Combo, sú niektoré operácie (najmä nastavenie bazálneho profilu) v porovnaní s inými pumpami pomalé. Je to nešťastné obmedzenie pumpy Combo, ktoré sa nedá obísť.
* Dočasný bazál na pumpe nenastavujte ani nerušte. Dočasné bazály riadi okruh a inak nemôže spoľahlivo fungovať, pretože nie je možné zistiť čas začiatku dočasného bazálu, ktorý používateľ nastavil na pumpe.
* Kým AAPS komunikuje s pumpou, nestláčajte na pumpe žiadne tlačidlá (kým je pumpa pripojená k AAPS, zobrazuje logo Bluetooth). Tým by ste prerušili spojenie cez Bluetooth. Urobte to iba vtedy, ak máte problémy s nadviazaním spojenia (pozrite [časť „Skôr než začnete“ vyššie](#combov2-before-you-begin)).
* Kým pumpa podáva bolus, nestláčajte žiadne tlačidlá. Najmä sa nepokúšajte stláčaním tlačidiel potvrdiť výstrahy. Prečo, to podrobnejšie vysvetľuje [časť o výstrahách](#combov2-alerts).

## Kontrolný zoznam, keď sa nedá nadviazať spojenie s pumpou Combo

Ovládač sa zo všetkých síl snaží pripojiť k pumpe Combo a používa niekoľko trikov, aby bolo spojenie čo najspoľahlivejšie. Napriek tomu sa niekedy spojenie nenadviaže. Tu je niekoľko krokov, ktoré môžu pomôcť.

1. Stlačte tlačidlo na pumpe Combo. Niekedy softvér Bluetooth (Bluetooth stack) pumpy Combo prestane reagovať a už neprijíma spojenia. Keď stlačíte tlačidlo na pumpe Combo a na LCD displeji sa niečo zobrazí, softvér Bluetooth sa reštartuje. Vo väčšine prípadov je to jediný krok, ktorý problémy so spojením vyrieši.
2. Reštartujte telefón. To môže byť potrebné, ak je problém v samotnom softvéri Bluetooth (Bluetooth stack) telefónu.
3. Ak je kryt batérie pumpy Combo starý, zvážte jeho výmenu. Staré kryty batérie môžu spôsobovať problémy s napájaním pumpy Combo, čo ovplyvňuje Bluetooth.
4. Ak pokusy o spojenie stále zlyhávajú, zvážte zrušenie párovania a nové spárovanie pumpy.

(combov2-tips-for-basic-usage)=
## Tipy na základné používanie

### Ako zaistiť plynulú prevádzku

* **Smartfón noste vždy pri sebe**, v noci ho nechajte vedľa postele. As your pump may lay behind or under your body while you sleep, a higher position (on a shelf or board) works best.
* Vždy dbajte na to, aby bola batéria pumpy čo najviac nabitá. See the battery section for tips regarding the battery.
* Vždy, keď je to možné, ovládajte pumpu iba cez aplikáciu AAPS. Aby ste si to uľahčili, zapnite na pumpe zámok tlačidiel v **PUMP SETTINGS / KEY LOCK / ON**. Tlačidlá pumpy treba použiť iba pri výmene batérie alebo zásobníka.

![Zámok tlačidiel](../images/combo/combo-tips-keylock.png)

### Pumpa nedostupná. Čo robiť?

#### Zapnite alarm nedostupnej pumpy
* V **AAPS** ťuknite na ikonu **Nastavenia** (ozubené koliesko) vpravo hore na hlavnej obrazovke, prejdite do **Lokálne výstrahy**, zapnite **Výstraha pri nedostupnej pumpe** a nastavte **Prah nedostupnosti pumpy** na **31** minút.
* Tak budete mať dosť času, aby sa alarm nespustil, keď odídete z miestnosti a telefón necháte na stole. Zároveň vás upozorní, ak pumpa nie je dostupná dlhšie, ako trvá dočasný bazál.

#### Obnovenie dostupnosti pumpy

* Keď AAPS hlási alarm **Pumpa nedostupná**, najprv odomknite zámok tlačidiel a **stlačte na pumpe ľubovoľné tlačidlo** (napr. tlačidlo „dole“). Hneď ako sa displej pumpy vypne, ťuknite na **Obnoviť** na obrazovke pumpy Accu-Chek Combo (**Spravovať** > **Pumpa**). Väčšinou potom komunikácia znova funguje.
* Ak to nepomôže, reštartujte smartfón. Po reštarte sa AAPS znova spustí a nadviaže nové spojenie s pumpou.

* Testy s rôznymi smartfónmi ukázali, že niektoré smartfóny spôsobujú chybu „pumpa nedostupná“ častejšie ako iné. Úspešne otestované smartfóny nájdete v dokumente [Telefóny](#Phones-list-of-tested-phones).

#### Hlavné príčiny a následky častých chýb komunikácie
* Na telefónoch s **malou pamäťou** (alebo s **agresívnym šetrením energie**) systém AAPS často ukončí. Spoznáte to podľa toho, že pri otvorení AAPS sa na hlavnej obrazovke nezobrazujú tlačidlá ošetrení (lišta Rýchleho spustenia), pretože sa systém inicializuje. To môže pri spustení vyvolať alarmy „pumpa nedostupná“. V poli **Posledné spojenie** na obrazovke pumpy (**Spravovať** > **Pumpa**) môžete skontrolovať, kedy AAPS naposledy komunikovalo s pumpou.

![Žiadne spojenie s pumpou](../images/combo/combov2-tips-no-connection-to-pump.png)

* Táto chyba môže rýchlejšie vybíjať batériu pumpy, pretože pri reštarte aplikácie sa z pumpy načítava bazálny profil.
* Zvyšuje tiež pravdepodobnosť chyby, pri ktorej pumpa odmieta všetky prichádzajúce spojenia, kým sa na nej nestlačí tlačidlo.

### Zrušenie dočasného bazálu zlyhá
* Občas AAPS nedokáže automaticky potvrdiť výstrahu **TBR CANCELED**. Vtedy musíte buď ťuknúť na **Obnoviť** na obrazovke pumpy Accu-Chek Combo, alebo potvrdiť alarm na pumpe.

### Batéria pumpy

#### Výmena batérie
* Po alarme **low battery** (takmer vybitá batéria) treba batériu vymeniť čo najskôr, aby bolo vždy dosť energie na spoľahlivú komunikáciu so smartfónom cez Bluetooth, aj keď je telefón od pumpy ďalej.
* Aj po alarme **low battery** sa batéria môže ešte dosť dlho používať. Napriek tomu odporúčame mať po alarme „low battery“ vždy pri sebe novú batériu.
* Pred výmenou batérie ťuknite na symbol **Okruh** na hlavnej obrazovke a vyberte **Pozastaviť uzavretý okruh** na 1 hodinu.
* Wait for the phone to communicate with the pump and for the Bluetooth logo on the pump to fade.

![Bluetooth zapnutý](../images/combo/combo-tips-compo.png)

* Odomknite zámok tlačidiel na pumpe, prepnite pumpu do režimu stop, potvrďte prípadne zrušený dočasný bazál a rýchlo vymeňte batériu.
* Po výmene batérie nemusíte znova nastavovať hodiny pumpy: AAPS dátum a čas v pumpe aktualizuje automaticky.
* Then put the pump back in run mode and select **Resume** when pressing on the **Suspended Loop** icon on the main screen.
* AAPS znova nastaví potrebný dočasný bazál, keď príde ďalšia hodnota glykémie.

(Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)=
#### Typ batérie a príčiny krátkej výdrže batérie
* Intenzívna komunikácia cez Bluetooth spotrebuje veľa energie, preto používajte iba **kvalitné batérie**, napríklad Energizer Ultimate Lithium, batérie „Power One“ z „veľkého“ servisného balíka Accu-Chek, alebo ak chcete nabíjateľnú batériu, použite batérie Eneloop.

![Energizer](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

Typická výdrž rôznych typov batérií je:
* **Energizer Ultimate Lithium**: 4 až 7 týždňov
* **Power One Alkaline** (Varta) zo servisného balíka: 2 až 4 týždne
* **Eneloop** nabíjateľné batérie (BK-3MCCE): 1 až 3 týždne

Ak je výdrž vašej batérie výrazne kratšia ako tieto hodnoty, skontrolujte tieto možné príčiny:
* Existuje niekoľko variantov skrutkovacieho krytu batérie pumpy Combo, ktoré batérie čiastočne skratujú a rýchlo ich vybíjajú. Kryty bez tohto problému spoznáte podľa zlatých kovových kontaktov.
* Ak hodiny pumpy „neprežijú“ krátku výmenu batérie, je pravdepodobne pokazený kondenzátor, ktorý udržuje hodiny v chode pri krátkom výpadku napájania. V takom prípade môže pomôcť výmena pumpy od firmy Roche, čo počas záručnej doby nie je problém.
* Hardvér a softvér smartfónu (operačný systém Android a softvér Bluetooth) tiež ovplyvňujú výdrž batérie pumpy, aj keď presné faktory ešte nie sú úplne známe. Ak máte možnosť, vyskúšajte iný smartfón a porovnajte výdrž batérie.

### Predĺžený bolus, viacvlnový bolus
Algoritmus OpenAPS nepodporuje súbežný predĺžený bolus ani viacvlnový bolus. Podobnú liečbu však môžete dosiahnuť týmito alternatívami:
* Pri zadávaní sacharidov alebo v bolusovej kalkulačke použite **eSacharidy**: zadajte sacharidy celého jedla a dobu, počas ktorej očakávate, že sa sacharidy dostanú do krvi ako glukóza. The system will then calculate small carbs equally distributed over the whole duration which will cause the algorithm to provide equivalent insulin dosing while still permanently checking the overall rise/decrease of the blood glucose level. Pre postup podobný viacvlnovému bolusu môžete tiež skombinovať menší okamžitý bolus s eSacharidmi.
* Pred jedlom nastavte na niekoľko hodín dočasný cieľ **Pred jedlom** s glykémiou 80 (ťuknite na cieľ na hlavnej obrazovke alebo použite **Spravovať** > **Dočasný cieľ**). Trvanie by malo zodpovedať intervalu, ktorý by ste zvolili pre predĺžený bolus. Váš cieľ tak bude nižší ako zvyčajne, a preto sa podá viac inzulínu.
* Potom v dialógu **Bolusová kalkulačka** zadajte všetky sacharidy jedla, ale navrhnuté hodnoty priamo nepoužite. Ak chcete podať bolus podobný viacvlnovému, dávku inzulínu znížte. Podľa jedla teraz musí algoritmus podať ďalšie SMB alebo vyššie dočasné bazály, aby pôsobil proti vzostupu glykémie. Here, the safety limitation of the basal rate (Max U/h, Maximum basal IOB) should be very carefully experimented with and, if necessary, temporarily changed.

* Predĺžený ani viacvlnový bolus nepodávajte priamo na pumpe. Ovládač ich nepodporuje (pozrite [Skôr než začnete](#combov2-before-you-begin)). Ak sa na pumpe aj tak podá viacvlnový bolus, **AAPS** ho z histórie pumpy zaznamená ako bežný bolus a predĺžený bolus, takže sa započíta do IOB. Predĺžený bolus nefunguje v prostredí uzavretého okruhu (podrobnosti nájdete na [tejto stránke](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment)).

### Alarmy pri podávaní bolusu
* Po každom boluse ovládač načíta históriu bolusov z pumpy. Je to bezpečnostný mechanizmus na správny výpočet aktívneho inzulínu (IOB), aj keď sa bolus podá priamo z pumpy.
* Ak je pred bolusom v histórii pumpy bolus, o ktorom **AAPS** nevedelo (napríklad bolus podaný priamo na pumpe), požadovaný bolus sa **nepodá**, pretože bol vypočítaný bez tohto inzulínu. **AAPS** zobrazí **V histórii pumpy sa našiel bolus, o ktorom AAPS nevedelo. Požadovaný bolus nebol podaný...** Skontrolujte históriu bolusov v pumpe a svoj IOB. Ak je bolus stále potrebný, vypočítajte ho znova. To platí aj vtedy, keď sa neznámy bolus nájde pri novom pripojení.
* Ak bol bolus podaný, ale v histórii pumpy boli aj ďalšie bolusy, o ktorých **AAPS** nevedelo, teraz sa zaznamenajú a **AAPS** vás požiada, aby ste pred ďalším bolusom skontrolovali IOB.
* Ak sa spojenie s pumpou preruší **počas** bolusu, **AAPS** nezaznamená 0 U: zobrazí, koľko pumpa dovtedy podala, a upozorní, že pumpa môže ešte podať zvyšok. **Nepodávajte ďalší bolus.** **AAPS** pri ďalšom pripojení načíta skutočné množstvo z histórie pumpy.
* Ak sa spojenie preruší, kým **AAPS** posiela bolus, nie je známe, či ho pumpa prijala. Pred ďalším bolusom skontrolujte históriu bolusov v pumpe.
* Ak **AAPS** nemôže potvrdiť, že bol bolus podaný, zobrazí **Podávanie inzulínu zlyhalo. Zdá sa, že nebol podaný žiadny bolus. Aby ste si boli istí, skontrolujte pumpu a prípadne pošlite bolus znovu.** Bolusy sa nikdy automaticky neopakujú.

## Kde získať pomoc

Vývoj ovládača Combo robí komunita **dobrovoľne**. Skôr než požiadate o pomoc:

1. **Prečítajte si** príslušnú časť tejto dokumentácie a overte si, ako má funkcia fungovať.
2. **Opýtajte sa** na kanáli *#AAPS* na [Discorde](https://discord.gg/4fQUWHZ4Mw) alebo v niektorom z ďalších [komunitných kanálov](../GettingHelp/WhereCanIGetHelp.md).
3. **Nahláste chybu**: prehľadajte [existujúce hlásenia (issues)](https://github.com/nightscout/AndroidAPS/issues); ak tam vaša chyba nie je, otvorte [nové hlásenie](https://github.com/nightscout/AndroidAPS/issues) a priložte svoje [log súbory](../GettingHelp/AccessingLogFiles.md).

Keď žiadate o pomoc, uveďte značku a model telefónu, verziu Androidu, verziu **AAPS** a jednoduchý opis problému (čo sa zmenilo a kedy to naposledy fungovalo).
