General CGM recommendations
**************************************************

CGM hygiene
==================================================

Whichever CGM system you are using, if you are going to use blood based calibration, then there are some very clear rules you should apply, whether or not you are using DIY CGM software or the official apps. 

* Make sure hands and kit are clean.
* Try to calibrate when you have a series of dots with a flat arrow (15-30 minutes is usually enough)
* Avoid calibrating when glucose levels are moving up or down. 
* Do “enough” calibrations – on official apps, you will be prompted for once or twice per day checks. On DIY systems you may not be, and should be careful about continuing without calibrations.
* If it all possible, calibrate with some of your readings in a lower range (4-5mmol/l or 72-90mg/dl) and some at a slightly higher level (7-9mmol/l or 126-160mg/dl) as this provides a better range for the point/slope calibration.

Setting sensor (G6)
==================================================

When setting sensor, it is recommended not to press the inserter too firmly in order to avoid bleeding. The sensor thread should not come into contact with blood.

After setting the sensor, the transmitter can be clicked into the sensor holder. Caution! First click in the square side and then press down the round side.

문제해결 
==================================================

Connection problems
--------------------------------------------------

Bluetooth connection may be disturbed by other nearby Bluetooth devices such as blood glucose meters, headsets, tablets or kitchen devices such as microwave ovens or ceramic hobs. In this case xdrip does not display any BG values. When bluetooth connection is reestablished the data is backfilled.

Sensor Errors
--------------------------------------------------
If recurring sensor errors occur try selecting a different body site to set your sensor. The sensor thread should not come into contact with blood. 

Often a "Sensor Error" can be corrected by immediate drinking and massage around the sensor!

Jumpy values
--------------------------------------------------
You might try to change settings for noise blocking in xdrip (Settings - Inter-App Settings - Noise Blocking) i.e. "Block Very High noise and worse".  See also `Smoothing BG data <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_.

Negative Sensor Age
--------------------------------------------------
.. image:: ../images/Troubleshooting_SensorAge.png
  :alt: Negative sensor age

This occurs if there is either a double "CGM Sensor Insert" entry in `actions tab / menu <../Configuration/Config-Builder.html#actions>`_ or a sensor insert with wrong date. Go to treatments tab > careportal and delete the wrong entry.
