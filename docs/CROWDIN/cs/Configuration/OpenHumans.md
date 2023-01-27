# Open Humans Uploader

## Darujte svá data vědě

Můžete pomoci komunitě tím, že daruje vaše data do výzkumných projektů! To pomáhá vědcům se dále posouvat, rozvíjet nové vědecké myšlenky a pomáhá otevírat téma open source systémů s uzavřenou smyčkou. AndroidAPS is ready to synchronize your data with [Open Humans](https://www.openhumans.org), a platform allowing you to upload, connect, and store your personal data – such as genetics, activity and health data.

Zachováváte si plnou kontrolu nad tím, co se stane s vašimi daty, a jaké projekty chcete podpořit tím, že jim udělíte přístup k vašim datům. V závislosti na projektu, ke kterému jste se připojili, jsou údaje vyhodnocovány a používány různými způsoby a v různém rozsahu.

Následující data budou odeslána na váš účet Open Humans:

- Glucose values
- Careportal events (except notes)
- Extended boluses
- Profile switches
- Total daily doses
- Temporary basals
- Temp targets
- Nastavení
- Application version
- Device model
- Screen dimensions

Tajné nebo soukromé informace, jako je adresa vašeho Nightscoutu nebo API heslo, nebudou nahrány.

## Nastavení

1. Create your account on [Open Humans](https://www.openhumans.org) if not already done. Můžete se přihlásit také prostřednictvím svých stávajících účtů Google nebo Facebook.
2. Enable the “Open Humans” plugin in [Config Builder](../Configuration/Config-Builder.md).
3. Pomocí ozubeného kolečka otevřete jeho nastavení. Můžete nahrávání dat omezit pouze na dobu, kdy je telefon na Wi-Fi a/nebo na nabíječce.
4. Otevřete plugin Open Humans (buď přes záložku OH, nebo přes hamburgerové menu) a klepněte na 'LOGIN'.

```{image} ../images/OHUploader1.png
:alt: Open Humans v Konfiguraci
```

5. Pozorně si přečtěte uvedené informace o nástroji Open Humans Uploader a podmínkách jeho použití.
6. Potvrďte zaškrtnutím políčka a klepněte na 'LOGIN'.
7. Otevře se webová stránka Open Humans. Přihlaste se pomocí svých přihlašovacích údajů.
8. Rozhodněte, zda chcete skrýt své členství AndroidAPS Uploader ve svém veřejném profilu Open Humans.
9. Klepněte na tlačítko 'Authorize project'.

```{image} ../images/OHUploader2.png
:alt: Podmínky použití a přihlášení k Open Humans
```

10. Vrátíte-li se do AAPS, uvidíte zprávu o tom, že přihlášení bylo úspěšné.
11. Ponechejte plugin Open Humans Uploader i telefon zapnuté, aby bylo možné nastavení dokončit.
12. Poté, co klepnete na tlačítko zavřít, uvidíte své ID člena. Queue sizes > 0 shows that there is still data to be uploaded.
13. Chcete-li přestat nahrávat data do Open Humans, klepněte na 'LOGOUT'.
14. Oznámení systému Android vás bude informovat o probíhajícím nahrávání.

```{image} ../images/OHUploader3.png
:alt: Závěrečné nastavení Open Humans
```

15. You can manage your data by logging in to the [Open Humans website](https://www.openhumans.org).

```{image} ../images/OHWeb.png
:alt: Správa dat Open Humans
```

## Možnosti sdílení

### [The 'OPEN' project](https://www.open-diabetes.eu/)

Projekt "OPEN" spojuje mezinárodní a mezioborové konsorcium inovátorů z řad pacientů, klinických pracovníků, sociálních vědců, počítačových vědců a organizací hájících zájmy pacientů s cílem prozkoumat různé aspekty DIY APS (systémy umělé slinivky typu udělej-si-sám), které používá stále více lidí s diabetem. For more details see their [website](https://www.open-diabetes.eu/).

September 2020 the 'OPEN' project launched a [survey](https://survey.open-diabetes.eu/) including the option to donate data you uploaded to Open Humans. A [tutorial](https://open-diabetes.eu/en/open-survey/survey-tutorials/) how to donate your data to the 'OPEN' project is available on their site and within the survey itself.

### [OpenAPS Data Commons](https://www.openhumans.org/activity/openaps-data-commons/)

OpenAPS Data Commons byl vytvořen proto, aby bylo možné jednoduše sdílet datové sady od DIYAPS komunity pro účely výzkumu. Tyto údaje jsou sdíleny s tradičními výzkumnými pracovníky, kteří budou vytvářet tradiční výzkumné studie, a se skupinami nebo jednotlivci z komunity, kteří chtějí přezkoumat údaje v rámci svých vlastních výzkumných projektů. OpenAPS Data Commons používá platformu "Open Humans" s cílem umožnit lidem snadno nahrávat a sdílet svá data z DIYAPS, včetně systémů AndroidAPS, Loop a OpenAPS.

Data můžete do Open Humans dostat jedním ze tří způsobů:

1. použít funkci AndroidAPS uploader pro odesílání svých dat do Open Humans
2. použít Nightscout Data Transfer pro odesílání svých dat do Open Humans
3. ručně nahrát datové soubory do Open Humans

Jakmile si vytvoříte účet a vaše data budou odesílána do Open Humans, ujistěte se, že se připojíte k OpenAPS Data Commons, abyste mohli darovat svá data pro výzkum, pokud se tak rozhodnete.

## Smluvní podmínky

This is an open source tool that will copy your data to [Open Humans](https://www.openhumans.org). Bez vašeho výslovného svolení neuchováváme žádná práva pro sdílení vašich údajů se třetími stranami. Data, která projekt a aplikace obdrží, jsou identifikována pomocí náhodného ID uživatele a budou bezpečně přenesena na Open Humans účet pouze na základě vaší autorizace tohoto procesu. You can stop uploading and delete your upload data at any time via [www.openhumans.org](https://www.openhumans.org). Pamatujte, že některé projekty, které přijímají data, toto nemusí podporovat.

Also see [Open Humans Terms of Use](https://www.openhumans.org/terms/).

## Ochrana dat

Open Humans se stará o ochranu vašeho soukromí tím, že vám pro každý projekt přidělí číselné ID. To umožňuje rozpoznat projekty, ale neumožňuje to identifikovat vaši osobu. ID aplikace nahrané pomocí AndroidAPS je podobné a pomáhá pouze spravovat data. Další informace naleznete zde:

- [Open Humans Data Use Policy](https://www.openhumans.org/data-use/)
- [Open Humans GDPR](https://www.openhumans.org/gdpr/)
