(Troubleshooting-NSClient-troubleshooting-nsclient)=

# Řešení problémů s NSClientem

NSClient je závislý na stabilní komunikaci s Nightscoutem. Nestabilní připojení vede k chybám synchronizace a velké spotřebě dat.

Pokud vás v Nightscoutu nikdo nesleduje, můžete NSClient pozastavit a šetřit tak baterii telefonu. Můžete také nastavit, aby se NSClient připojoval pouze při připojení k Wi-Fi a/nebo během nabíjení.

* Jak zjistit, že je spojení nestabilní?

Otevřete obrazovku NSClient (**Konfigurace** > **Komunikace** > **NSClientV3** > **Otevřít plugin**) a sledujte **Stav** a log. Se zapnutými websockety by měl stav zůstávat „Připojeno“ a v logu by neměly být skoro žádné zprávy o opětovném připojení. Pokud vidíte hodně opětovných připojení, je se spojením problém.

* Restart

Co byste měli zkusit jako první krok je restart obojího: Nightscoutu i telefonu, abyste zjistili, jestli je problém trvalý

Pokud máte Nightscout hostovaný na Heroku, můžete ho restartovat takto: Přihlašte se do Heroku, klikněte na jméno své nightscoutí aplikace, klikněte na nabídku 'More' a pak na 'Restart all dynos'.

Pokud máte Nightscout hostovaný jinde, postupujte dle dokumentace k vašemu hostingu.

* Problémy s telefonem

Android může váš telefon přepínat do režimu spánku. Zkontrolujte, zda má AAPS ve vašem telefonu v nastavení napájení výjimku, aby mohla stále běžet na pozadí.

Odzkoušejte NSClient znovu na místě, kde budete mít silný signál.

Zkuste jiný telefon.

* Nightscout

Pokud máte Nightscout hostovaný na Azure, tak spoustě lidí pomohl při problémech s připojením jeho přesun na Heroku.

Problémy s připojením do Azure lze také vyřešit nastavením HTTP protokolu na verzi 2.0 a zapnutím Websockets v Aplikačním nastavení

* Žádné hodnoty glykémie z Nightscoutu

Pokud se **AAPS** k Nightscoutu připojuje správně, ale glykémie se zobrazuje jako N/A: v [nastavení NSClientV3](#Preferences-nsclient) otevřete **Synchronizace** a zapněte **Přijímat data CGM z NS**. Tato možnost je skrytá, když je zapnuté ovládání klienta ([zabezpečený režim](#client-master-control-hardened-mode)); v takovém případě zkontrolujte, že je v **Konfigurace** → **Zdroj glykémie** vybrána **Glykémie z NS**.

* Pokud se vám stále zobrazuje chyba...

Zkontrolujte velikost své databáze v MongoDB (nebo pomocí pluginu pro velikost databáze v Nightscoutu). Pokud v MongoDB používáte bezplatnou úroveň (free tier), 496 MB znamená, že je databáze plná a je potřeba ji vyčistit. [Postupujte podle těchto pokynů Nightscoutu pro kontrolu velikosti databáze a odstranění dat](https://nightscout.github.io/troubleshoot/troublehoot/#database-full).

Než data z databáze smažete, zvažte, zda (pokud jste to ještě neudělali) nedarovat svá data z AAPS projektu Open Humans (pro výzkum). Návod najdete na stránce [Open Humans Uploader](../SupportingAaps/OpenHumans.md).