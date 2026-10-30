# Open Humans Uploader

## Darujte svá data vědě

Můžete pomoci komunitě tím, že darujete svá data výzkumným projektům! To pomáhá vědcům se dále posouvat, rozvíjet nové vědecké myšlenky a pomáhá otevírat téma open source systémů s uzavřenou smyčkou. AAPS umí synchronizovat vaše data s [Open Humans](https://www.openhumans.org). Je to platforma, na kterou můžete nahrávat, propojovat a ukládat svá osobní data – například genetická data, data o aktivitě a zdravotní data.

Zachováváte si plnou kontrolu nad tím, co se stane s vašimi daty, a jaké projekty chcete podpořit tím, že jim udělíte přístup k vašim datům. V závislosti na projektu, ke kterému jste se připojili, jsou údaje vyhodnocovány a používány různými způsoby a v různém rozsahu.

Následující data budou odeslána na váš účet Open Humans:

- Hodnoty glykémie
- Události Péče (kromě poznámek)
- Prodloužené bolusy
- Přepnutí profilu
- Celkové denní dávky
- Dočasné bazály
- Dočasné cíle
- Předvolby
- Verze aplikace
- Model zařízení
- Rozměry obrazovky

Tajné nebo soukromé informace, jako je adresa vašeho Nightscoutu nebo API heslo, nebudou nahrány.

## Nastavení

1. Pokud ho ještě nemáte, vytvořte si účet na [Open Humans](https://www.openhumans.org). Můžete se přihlásit také prostřednictvím svých stávajících účtů Google nebo Facebook.
2. Povolte plugin **Open Humans** v [**Konfigurace** > **Komunikace**](../SettingUpAaps/ConfigBuilder.md).

![Open Humans povolený v Konfigurace > Komunikace](../images/OHUploader1.png)

3. Na kartě **Open Humans** klepněte na **Nastavení**. Nahrávání můžete omezit jen na dobu, kdy telefon používá Wi-Fi (**Pouze WiFi**) a/nebo se nabíjí (**Pouze při nabíjení**).

![Nastavení Open Humans s volbami Pouze WiFi a Pouze při nabíjení](../images/OHUploader_settings.png)

4. Na kartě **Open Humans** klepněte na **Otevřít plugin** a pak na **Nastavení**.

![Obrazovka pluginu Open Humans s tlačítkem Nastavení](../images/OHUploader_setup.png)

5. Na obrazovce **Vítejte v Open Humans** klepněte na **Další**. Pozorně si přečtěte obrazovku **Souhlas**: ukazuje podmínky použití a jaká data se nahrávají a jaká ne.
6. Zapněte **Rozumím a souhlasím.** (1) a klepněte na **Přihlášení do Open Humans** (2).

![Obrazovky Vítejte a Souhlas pro Open Humans v AAPS](../images/OHUploader2.png)

7. Otevře se webová stránka Open Humans. Přihlaste se pomocí svých přihlašovacích údajů.
8. Rozhodněte se, zda chcete ve svém veřejném profilu Open Humans skrýt své členství v AAPS Uploader (1).
9. Klikněte na **Authorize project** (2) (autorizovat projekt).

![Přihlášení a autorizace projektu na webu Open Humans](../images/OHUploader_web.png)

```{admonition} Older screenshot
:class: note
Snímky obrazovky výše ukazují starší verzi webu Open Humans a ještě používají starý název projektu **AndroidAPS Uploader**. Postup je stejný.
```

10. Zpět v **AAPS** se vás obrazovka **Poslední dotyky** zeptá, zda chcete pokračovat. Klepněte na **Pokračovat**.
11. Počkejte, až se zobrazí **Jsme hotovi!**, a pak klepněte na **Zavřít**. Od této chvíle bude telefon čas od času nahrávat data na pozadí.
12. Obrazovka pluginu **Open Humans** teď ukazuje vaše **ID člena projektu**. Pokud chcete nahrávání spustit hned, klepněte na **Nahrát nyní**.
13. Pokud chcete nahrávání dat do Open Humans zastavit, klepněte na **Odhlásit**.
14. Oznámení systému Android vás bude informovat o probíhajícím nahrávání.

![Závěrečné nastavení Open Humans](../images/OHUploader3.png)

```{admonition} Older screenshot
:class: note
Snímek obrazovky výše je ze starší verze **AAPS**. V **AAPS** 4 jsou potvrzovací obrazovky **Poslední dotyky** a **Jsme hotovi!**, není zde velikost fronty a tlačítka jsou **Nahrát nyní** a **Odhlásit**.
```

15. Svá data můžete spravovat po přihlášení na stránku [Open Humans](https://www.openhumans.org).

![Správa dat Open Humans](../images/OHWeb.png)

## Možnosti sdílení

### [Projekt 'OPEN'](https://www.open-diabetes.eu/)

Projekt "OPEN" spojuje mezinárodní a mezioborové konsorcium inovátorů z řad pacientů, klinických pracovníků, sociálních vědců, počítačových vědců a organizací hájících zájmy pacientů s cílem prozkoumat různé aspekty DIY APS (systémy umělé slinivky typu udělej-si-sám), které používá stále více lidí s diabetem. Více informací najdete na jejich [webu](https://www.open-diabetes.eu/).

V září 2020 spustil projekt 'OPEN' [průzkum](https://survey.open-diabetes.eu/), který zahrnuje i možnost darovat data, která jste nahráli do Open Humans. [Návod](https://open-diabetes.eu/en/open-survey/survey-tutorials/), jak darovat svá data projektu 'OPEN', je k dispozici na jejich webu i přímo v průzkumu.

### [OpenAPS Data Commons](https://www.openhumans.org/activity/openaps-data-commons/)

OpenAPS Data Commons byl vytvořen proto, aby bylo možné jednoduše sdílet datové sady od DIYAPS komunity pro účely výzkumu. Tyto údaje jsou sdíleny s tradičními výzkumnými pracovníky, kteří budou vytvářet tradiční výzkumné studie, a se skupinami nebo jednotlivci z komunity, kteří chtějí přezkoumat údaje v rámci svých vlastních výzkumných projektů. OpenAPS Data Commons používá platformu 'Open Humans', aby lidé mohli snadno nahrávat a sdílet svá data z DIYAPS, včetně AAPS, Loop a OpenAPS.

Data můžete do Open Humans dostat jedním ze tří způsobů:

1. použít možnost nahrávání z AAPS (AAPS uploader) a dostat tak data do Open Humans
2. použít Nightscout Data Transfer pro odesílání svých dat do Open Humans
3. ručně nahrát datové soubory do Open Humans

Jakmile si vytvoříte účet a vaše data budou odesílána do Open Humans, ujistěte se, že se připojíte k OpenAPS Data Commons, abyste mohli darovat svá data pro výzkum, pokud se tak rozhodnete.

## Smluvní podmínky

Je to open source nástroj, který zkopíruje vaše data do [Open Humans](https://www.openhumans.org). Bez vašeho výslovného svolení neuchováváme žádná práva pro sdílení vašich údajů se třetími stranami. Data, která projekt a aplikace obdrží, jsou identifikována pomocí náhodného ID uživatele a budou bezpečně přenesena na Open Humans účet pouze na základě vaší autorizace tohoto procesu. Nahrávání můžete kdykoli zastavit a nahraná data smazat na [www.openhumans.org](https://www.openhumans.org). Pamatujte, že některé projekty, které přijímají data, toto nemusí podporovat.

Viz také [Podmínky Open Humans](https://www.openhumans.org/terms/).

## Ochrana dat

Open Humans se stará o ochranu vašeho soukromí tím, že vám pro každý projekt přidělí číselné ID. Díky tomu vás projekty mohou rozpoznat, ale ne identifikovat. ID aplikace, které AAPS nahrává, je podobné a slouží jen ke správě dat. Další informace naleznete zde:

- [Zásady využití dat Open Humans](https://www.openhumans.org/data-use/)
- [Open Humans GDPR](https://www.openhumans.org/gdpr/)
