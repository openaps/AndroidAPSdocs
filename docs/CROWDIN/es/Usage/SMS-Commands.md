# Comandos SMS

En los ajustes de tu móvil Android ve a aplicaciones- AndroidAPS- permisos y habilitar SMS

En AndroidAPD ve a preferencias- Comunicaciones SMS (SMS comunicator) e introduce el número de teléfono con el que permitirás las comunicaciones SMS y habilita también “allow remote commands via SMS”

Envía un SMS al teléfono con AndroidAPS desde el teléfono autorizado para usar comandos SMS usando algún comando en negrita abajo, el teléfono responderá para confirmar el comando pedido.

## BG

- Último valor de glucemia: 5.6 4min ago, Delta: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Basal: 0.10U)

## LOOP STOP/DISABLE

- Lazo se ha deshabilitado

## LOOP START/ENABLE

- Lazo se ha habilitado

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
- Remote bolus not allowed (*if within 15 min after last bolus command or remote commands not allowed*)

## CAL 5.6

- To send calibration 5.6 reply with code Rrt
- Calibration sent (*if xDrip is installed. Accepting calibrations must be enabled in xDrip+*)