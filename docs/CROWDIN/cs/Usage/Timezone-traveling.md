# Cestování s pumpou mezi časovými pásmy

## DanaR, Korejská DanaR

Se změnou časového pásma v telefonu není žádný problém, protože tyto pumpy nepoužívají historii

## DanaRv2, DanaRS

Tyto pumpy vyžadují zvláštní péči, protože AndroidAPS z nich používá historické údaje, ale tyto záznamy v pumpě nemají údaj o časovém pásmu. **To znamená, že pokud prostě změníte časové pásmo na telefonu, historické záznamy se z pumpy načtou v jiném pásmu a zdvojí se.**

Abychom se tomu vyhnuli, existují dvě možnosti:

### Možnost 1: Ponechat původní čas a posunout profil

* Na telefonu v nastavení vypněte 'Automatická změna data a času' (ruční změna časového pásma).
* Telefon musí mít po celou dobu cestování/pobytu nastaven standardní domácí čas.
* Posuňte v čase svůj profil podle rozdílu času doma a v cílové destinaci.
   
   * Dlouze přidržte název profilu (uprostřed horní části hlavní obrazovky)
   * Vyberte 'Přepnutí profilu'
   * Nastavte 'Posun času' podle času ve vaší destinaci.
   
   ![Přepnutí profilu s posunem času](../images/ProfileSwitchTimeShift2.png)
   
   * např. Vídeň -> New York: posun času +6 hodin
   * např. Vídeň -> Sydney: posun času -8 hodin
* Probably not an option if using [patched LibreLink app](../Hardware/Libre2#time-zone-travelling) as automatic time zone must be set to start a new Libre 2 sensor.

### Možnost 2: Vymazat historii pumpy

* Na telefonu v nastavení vypněte 'Automatická změna data a času' (ruční změna časového pásma)

Když vystoupíte z letadla:

* vypněte pumpu
* změňte časové pásmo na telefonu
* vypněte telefon, zapněte pumpu
* vymažte historii v pumpě
* změňte čas na pumpě
* zapněte telefon
* nechejte telefon spojit se s pumpou a sladit se s jejím časem

## Insight

Ovladač automaticky upravuje čas v pumpě podle času v telefonu.

Insight také zpracovává záznamy v historii o změnách času. Takže správný čas lze určit v AAPS navzdory změně času.

Může ale způsobit nepřesnosti v celkových denních dávkách. Neměl by to však být problém.

Uživatel pumpy Insight se tedy nemusí obávat změn časového pásma a změn času. K tomuto pravidlu existuje jedna výjimka: pumpa Insight má malou vnitřní baterii k napájení času atd. zatímco měníte "skutečnou" baterii. Pokud výměna baterie trvá příliš dlouho, tato interní baterie se může vybít, hodiny se resetují a vy budete vyzváni, abyste po vložení nové baterie opětovně nastavili čas. V tomto případě jsou všechny položky před změnou baterie přeskočeny, protože správný čas nelze určit.

# Úpravy letního času

V závislosti na pumpě a CGM, může skok v čase způsobit problémy. S pumpou Combo apod. se historie načítá znovu a to by vedlo ke zdvojení položek. Úpravy proto prosím provádějte tehdy, když jste vzhůru, ne během noci.

Jestliže k bolusu používáte kalkulačku, prosím nepoužívejte COB a IOB, pokud nemáte jistotu, že jsou naprosto správné - raději je několik hodin po změně času nepoužívejte vůbec.

## Accu-Chek Combo

AndroidAPS spustí alarm, pokud se čas mezi pumpou a telefonem liší příliš. V případě úpravy letního času by to bylo uprostřed noci. Abychom tomu zabránili a užili si spánku, postupujte podle těchto kroků:

1) Vypněte v telefonu automatickou změnu časového pásma. 2) Najděte časové pásmo, které má cílový čas, ale nepoužívejte letní čas. Pro střední Evropu (CET) by to bylo "Brazzaville" (Kongo). Změňte časové pásmo telefonu na Kongo. 3) V AndroidAPS obnovte pumpu. 4) Zkontrolujte kartu Ošetření... Pokud vidíte duplicitní ošetření:

* NEMAČKEJTE "odstranit ošetření v budoucnu"
* Klepněte na "odstranit" u všech budoucích ošetření a také u těch, která jsou duplicitní. Toto by mělo ošetření zneplatnit, nikoli je odstranit, takže již nebudou využívaná k výpočtu IOB. 5) Pokud stav není jasný - vypněte smyčku alespoň na dobu DIA a Max-Carb-Time - podle toho, která hodnota je větší.

Toto přepnutí je vhodné dělat v době, kdy máte nízký IOB. Např. hodinu před jídlem.

## Accu-Chek Insight

* Změna letního času se provádí automaticky. Není vyžadována žádná akce.

## Other pumps - new as of AAPS version 2.2

**Abyste mohli tuto funkci využívat, musíte aktualizovat AAPS!**

* V zájme prevence potíží bude smyčka na 3 hodiny PO přepnutí letního času deaktivována. A to z bezpečnostních důvodů (příliš vysoký IOB kvůli duplicitnímu bolusu před změnou letního času).
* Na hlavní obrazovce uvidíte 24 hodin před změnou času upozornění, že bude smyčka dočasně deaktivována. Zobrazení této zprávy není doprovázeno žádným zvukovým signálem ani vibracemi.