# Выбор помпы

AndroidAPS на этот момент работает с

* [Помпа Accu Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
* [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
* [DanaR](../Configuration/DanaR-Insulin-Pump.md)
* [DanaRS](../Configuration/DanaRS-Insulin-Pump.md)
* [Dana-i](../Configuration/DanaRS-Insulin-Pump.md)
* [Diaconn G8 ](../Configuration/DiaconnG8.rst)
* [Omnipod Eros](../Configuration/OmnipodEros.rst)
* [Omnipod DASH](../Configuration/OmnipodDASH.md)
* some old [Medtronic](../Configuration/MedtronicPump.md)

Details of the status of other pumps that may have the potential to work with AndroidAPS are listed on the [Future (possible) Pumps](Future-possible-Pump-Drivers.md) page.

Часто спрашивают, какая помпа лучше для AAPS. Детали дистрибьюторов приведены в [этой таблице](https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0), добавьте вашу помпу, если она не внесена.

Combo и Insight прекрасные помпы, способные работать в составе ИПЖ The advantages of the DanaR/RS/-i as the pump of choice however are:

* The Dana*R/RS/-i connects to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the Dana*R/RS/-i pumps as quick replacement... С Combo не так просто. (Ситуация может измениться, когда Android 8.1 станет более популярным)

* Initial pairing is simpler with the DanaRS/-i. Но обычно это делается только один раз, так что это свойство важно, если хотите проверить новую функцию на других помпах.

* На данный момент Combo работает с экранным анализом. В целом, это неплохо, но такая работа идет медленно. Для цикла ИПЖ это не имеет значения, так как он работает в фоновом режиме. Тем не менее, требуется больше времени на соединение и, соответственно, больше возможности его разорвать, что плохо, если вы отошли от телефона, например, во время болюса, когда готовите пищу.

* Combo вибрирует по завершении временных базалов TBR, Dana* R вибрирует (или пищит) на микроболюсах SMB. В ночное время вы, скорее всего, будете использовать TBR а не SMB. Dana* RS может быть сконфигурирована так, что не будет ни вибрировать ни пищать.

* Чтение истории на RS позволяет легко заменить телефоны в автономном режиме и продолжать работу с появлением новых значений мониторинга CGM.

* Insulet Omnipod Eros requires a pod communication device such as RileyLink/Orangelink etc. The newer omnipod DASH does not since it communicates with your phone directly via Bluetooth.

* All pumps AndroidAPS can talk with are waterproof on delivery. Но только помпы Dana также "гарантированно водонепроницаемы" благодаря изолированным отсекам батареи и системы наполнения резервуара.

Combo, конечно, очень хорошая помпа, применимая в системах ИПЖ. Также у нее есть преимущество выбора типа инфузионной системы, так как в ней применен стандартный разъем типа luer. Батарею вы можете купить на любой заправочной станции или в круглосуточно работающем магазине, а при необходимости ее можно добыть из пульта дистанционного управления в номере отеля ;-)