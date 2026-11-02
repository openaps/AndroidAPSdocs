(Troubleshooting-NSClient-troubleshooting-nsclient)=

# Riešenie problémov s NSClient

NSClient potrebuje stabilnú komunikáciu s Nightscoutom. Nestabilné pripojenie vedie k chybám synchronizácie a vysokej spotrebe dát.

Ak vás na Nightscoute nikto nesleduje, môžete NSClient pozastaviť, aby ste šetrili batériu, alebo môžete NSClient nastaviť tak, aby sa pripájal iba cez Wi-Fi a/alebo počas nabíjania.

* Ako zistiť nestabilné pripojenie?

Otvorte obrazovku NSClient (**Konfigurácia** > **Komunikácia** > **NSClientV3** > **Otvoriť plugin**) a sledujte **Stav** a log. So zapnutými websocketmi by mal stav zostať „Pripojené“ (connected) a v logu by nemali byť takmer žiadne správy o opätovnom pripojení. Ak vidíte veľa opätovných pripojení, je niekde problém.

* Reštart

As a first step, restart Nightscout and then your phone to see if the issue is permanent.

Ak je váš Nightscout hostovaný na Heroku, môžete ho reštartovať takto: prihláste sa do Heroku, kliknite na názov svojej aplikácie nightscout, kliknite na ponuku 'More' a potom na 'Restart all dynos'.

Pri iných hostingoch postupujte podľa dokumentácie vášho poskytovateľa.

* Problémy s telefónom

Android môže prepnúť telefón do režimu spánku. Skontrolujte, či má AAPS v nastaveniach napájania telefónu výnimku, aby mohol stále bežať na pozadí.

Skontrolujte NSClient znova na mieste so silným signálom siete.

Vyskúšajte iný telefón.

* Nightscout

Ak je vaša stránka hostovaná na Azure, mnohí ľudia zistili, že problémy s pripojením sa zlepšili po presune na Heroku.

Ako náhradné riešenie problémov s pripojením na Azure nastavte v Application settings HTTP protocol na 2.0 a Websockets na ON

* Žiadna glykémia z Nightscoutu

Ak sa **AAPS** pripojí k Nightscoutu správne, ale glykémia sa zobrazuje ako N/A: v [nastaveniach NSClientV3](#Preferences-nsclient) otvorte **Synchronizácia** a zapnite **Prijímať CGM dáta z NS**. Táto možnosť je skrytá, keď je zapnuté ovládanie z klienta ([režim zvýšeného zabezpečenia](#client-master-control-hardened-mode)). V takom prípade skontrolujte, či je v **Konfigurácia** → **Zdroj glykémie** vybraté **Glykémia z NS**.

* Ak máte stále problém...

Skontrolujte veľkosť svojej databázy v MongoDB (alebo cez plugin database size v Nightscoute). Ak používate bezplatnú verziu (free tier) MongoDB, 496 MB znamená, že je plná a treba ju vyčistiť. [Follow these Nightscout instructions for checking the size of your database and clearing out data](https://nightscout.github.io/troubleshoot/troubleshoot/#database-full).

Skôr než vymažete dáta z databázy, a ak ste to ešte nenastavili, zvážte darovanie svojich dát AAPS projektu Open Humans (na výskum). Pokyny nájdete na [stránke nastavenia OpenHumans](../SupportingAaps/OpenHumans.md).