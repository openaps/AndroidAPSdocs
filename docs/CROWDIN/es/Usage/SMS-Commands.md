# Comandos SMS

En los ajustes de tu móvil Android ve a aplicaciones- AndroidAPS- permisos y habilitar SMS

In AndroidAPS go to Preferences > SMS Communicator and enter the phone number(s) that you will allow SMS commands to come from (separated by semicolons, no spaces or other characters anywhere - i.e. +4412345678;+4412345679) and also enable 'Allow remote commands via SMS'.

Envía un SMS al teléfono con AndroidAPS desde el teléfono autorizado para usar comandos SMS usando algún comando en negrita abajo, el teléfono responderá para confirmar el comando pedido.

## BG

- Último valor de glucemia: 5.6 4min ago, Delta: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Basal: 0.10U)

## LOOP STOP/DISABLE

- Lazo se ha deshabilitado

## LOOP START/ENABLE

- Lazo se ha habilitado

## LOOP STATUS

- Lazo deshabilitado
- Lazo habilitado
- Suspendido (10 min)

## LOOP SUSPEND 20

- Lazo suspendido durante 20 minutos

## LOOP RESUME

- Lazo reiniciado

## TREATMENTS REFRESH

- Refresca tratamiento

## NSCLIENT RESTART

- Reinicia NSclient

## PUMP

- Última conexión: 1 minago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100

## BASAL STOP/CANCEL

- Para cancelar un basal temporal responder con código EmF

## BASAL 0.3

- To start basal 0.3U/h for 30 min reply with code Swe

## BASAL 0.3 20

- To start basal 0.3U/h for 20 min reply with code Swe

## BASAL 30%

- To start basal 30% for 30 min reply with code Swe

## BASAL 30% 50

- To start basal 30% for 50 min reply with code Swe

## BOLUS 1.2

- To deliver bolus 1.2U reply with code Rrt
- Remote bolus not allowed (*if within 15 min after last bolus command or remote commands not allowed*)

## EXTENDED STOP/CANCEL

- To stop extended bolus reply with code EmF

## EXTENDED 2 120

- To start extended bolus 2U for 120 min reply with code EmF

## CAL 5.6

- To send calibration 5.6 reply with code Rrt
- Calibration sent (*if xDrip is installed. Accepting calibrations must be enabled in xDrip+*)

## PROFILE STATUS

- Profile1

## PROFILE LIST

- 1.`Profile1` 2.`Profile2`

## PROFILE 1

- To switch profile to Profile1 100% reply with code Any

## PROFILE 2 30

- To switch profile to Profile2 30% reply with code Any