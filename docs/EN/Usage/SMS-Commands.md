# SMS Commands

In your android phone setting go to Applications > AndroidAPS > Permissions and enable SMS

In AndroidAPS go to Preferences > SMS Communicator and enter the phone number(s) that you will allow SMS commands to come from and also enable 'Allow remote commands via SMS'

Send a SMS to the phone with AndroidAPS running from your approved phone number(s) using any of the commands below in **bold**, the phone will respond to confirm success of command or status requested.

## BG
- Last BG: 5.6 4min ago, Delta: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Basal: 0.10U)
## LOOP STOP/DISABLE
- Loop has been disabled
## LOOP START/ENABLE
- Loop has been enabled
## LOOP STATUS
- Loop is disabled
- Loop is enabled
- Suspended (10 min)
## LOOP SUSPEND 20
- Loop suspended for 20 minutes
## LOOP RESUME
- Loop resumed
## TREATMENTS REFRESH
- TERATMENTS REFRESH 1 receivers
## NSCLIENT RESTART
- NSCLIENT RESTART 1 receivers
## DANAR / PUMP (since 1.60)
- Last conn: 1 minago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100
## BASAL STOP/CANCEL
- To stop temp basal reply with code EmF
## BASAL 0.3
- To start basal 0.3U/h reply with code Swe
- Remote basal setting is not allowed (if remote commands not allowed)
## BOLUS 1.2
- To deliver bolus 1.2U reply with code Rrt
- Remote bolus not allowed (_if within 15 min after last bolus command or remote commands not allowed_)
## CAL 5.6
- To send calibration 5.6 reply with code Rrt
- Calibration sent (_if xDrip is installed. Accepting calibrations must be enabled in xDrip+_)

