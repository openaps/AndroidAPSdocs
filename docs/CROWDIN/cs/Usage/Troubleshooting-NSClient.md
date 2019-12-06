# Řešení problémů s NSClientem

NSClient spoléhá na stabilní komunikaci s Nightscoutem. Nestabilní připojení vede k chybám synchronizace a velké spotřebě dat.

Pokud vás nikdo nesleduje na Nightscoutu, můžete pozastavit NSClienta, abyste o hodně snížili spotřebu baterie, anebo nastavte spojení jenom na wifi a během nabíjení.

* Jak detekovat nestabilní spojení?

Běžte do záložky NSClient v AAPS a pozorujte výpisy protokolu (log). Common behavior is to receive PING every ~30s and almost none reconnection messages. Pokud vidíte mnoho restartů spojení, pak máte nějaký problém. Since AndroidAPS 2.0 when such behavior is detected NSClient is paused for 15 minutes and message "NSClient malfunction" on Overview is displayed.

* Restart

Co byste měli zkusit jako první krok je restart obojího: Nightscoutu i telefonu, abyste zjistili, jestli je problém trvalý

* Problémy s telefonem

Android může váš telefon uspávat. Ověřte, že máte výjimku pro AndroidAPS ve volbách napájení tak, aby aplikace mohla trvale běžet i na pozadí. Zkuste to znovu na silném síťovém spojení. Zkuste jiný telefon.

* Nightscout

Pokud jste na Azure, řadě lidí pomohlo přestěhovat se na Heroku. Nedávno bylo nahlášeno, že pro Azure pomůže nastavit v sekci nastavení aplikace HTTP protocol na 2.0 a přepnout Websockets na ON

* Pokud se vám stále zobrazuje chyba...

Ověřte velikost své mLab databáze. 496MB znamená, že je plná a potřebuje zkomprimovat. Postupujte podle těchto OpenAPS pokynů pro kontrolu velikosti vaší databáze: [odkaz](https://openaps.readthedocs.io/en/latest/docs/Troubleshooting/Rig-NS-communications-troubleshooting.html#mlab-maintenance). Pokud komprimace nepomůže, měli byste zvážit darování AndroidAPS dat institutu Data Commons (pro výzkum), než jakákoliv data z kolekcí smažete. Zde jsou [instrukce v OpenAPS dokumentaci](https://openaps.readthedocs.io/en/latest/docs/Give%20Back-Pay%20It%20Forward/data-commons-data-donation.html), jak to provést.