# Opciones de Bomba

AndroidAPS trabaja actualmente con

* [Accu-Check Combo](../Configuration/Accu-Chek-Combo-Pump.md)
* [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
* [DanaR](../Configuration/DanaR-Insulin-Pump.md)
* [DanaRS](../Configuration/DanaRS-Insulin-Pump.md)
* [Dana-i](../Configuration/DanaRS-Insulin-Pump.md)
* [Diaconn G8 ](../Configuration/DiaconnG8.rst)
* [Omnipod Eros](../Configuration/OmnipodEros.rst)
* [Omnipod DASH](../Configuration/OmnipodDASH.md)
* some old [Medtronic](../Configuration/MedtronicPump.md)

Details of the status of other pumps that may have the potential to work with AndroidAPS are listed on the [Future (possible) Pumps](Future-possible-Pump-Drivers.md) page.

Si necesita cambiar de bomba de insulina puede encontrar información en grupos de usuarios. Detalles sobre distribuidores puede encontrarlos aquí, por favor comparte los detalles de la tuya si no están en las opciones mencionadas.

La Combo y la Insight son bombas solidas, y loopeables. The advantages of the DanaR/RS/-i as the pump of choice however are:

* The Dana*R/RS/-i connects to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the Dana*R/RS/-i pumps as quick replacement... no así con la Combo. (esto puede cambiar en el futuro cuando Android 8.1 sea más popular)

* Initial pairing is simpler with the DanaRS/-i. Pero esto se realiza normalmente solo una vez, por lo que solo impacta si quieres probar nuevas características con bombas diferentes.

* Hasta ahora Combo funciona con análisis de pantalla. En general funciona bien pero es lento. Para lazo cerrado eso no es crucial puesto que trabaja en segundo plano, sin embargo, usa más tiempo la conexión bluetooth aumentando la probabilidad de fallo de conexión, lo cual no es fácil si te lejas del móvil mientras pones un bolo y cocinas. Combo vibra cuando termina una basal temporal, la DanaR vibra (o hace sonido) con SMB.

* Combo vibra cuando termina una basal temporal, la DanaR vibra (o hace sonido) con SMB. Por la noche, preferirás usar TBR sobre SMB. DanaRS se puede configurar para que ni haga sonido ni vibre.

* Leyendo el histórico de la bomba Dana RS en unos segundo junto con los carbohidratos hace posible cambiar fácilmente entre modo offline y continuar el lazo cerrado en cuanto tenga datos de MCG.

* Insulet Omnipod Eros requires a pod communication device such as RileyLink/Orangelink etc. The newer omnipod DASH does not since it communicates with your phone directly via Bluetooth.

* All pumps AndroidAPS can talk with are waterproof on delivery. Aunque solo la Dana es tiene garantizado waterproof debido a su sellado en el compartimento de la batería y el reservorio.

La Combo es una buena bomba y loopeable. Además tiene la ventaja de más tipos de equipos de infusión entre los que escoger teniendo el estándar luer lock. La batería es común por lo que se puede comprar en cualquier parte