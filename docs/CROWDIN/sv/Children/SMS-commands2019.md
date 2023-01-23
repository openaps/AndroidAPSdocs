# SMS Commands

## Safety First

- AndroidAPS allows you to control a child's phone remotely via text message. If you enable this SMS Communicator, always remember that the phone set up to give remote commands could be stolen. So always protect it at least by a PIN code.
- AndroidAPS will also inform you by text message if your remote commands, such as a bolus or a profile change, have been carried out. It is advisable to set this up so that confirmation texts are sent to at least two different phone numbers in case one of the receiving phones is stolen.
- **If you bolus through SMS Commands you must enter carbs through Nightscout (NSClient, Website...)!** If you fail to do so IOB would be correct with too low COB potentially leading to not performed correction bolus as AAPS assumes that you have too much active insulin.

## How it works

- Most of the adjustments of temp targets, following AAPS etc. can be done on [NSclient app](../Children/Children.md) on an Android phone with an internet connection.

- Boluses can't be given through Nightscout, but you can use SMS commands.

- If you use an iPhone as a follower and therefore cannot use NSclient, there are additional SMS commands available.

- In your android phone setting go to Applications > AndroidAPS > Permissions and enable SMS

- In AndroidAPS go to Preferences > SMS Communicator and enter the phone number(s) that you will allow SMS commands to come from (separated by semicolons, no spaces or other characters anywhere - i.e. +4412345678;+4412345679) and also enable 'Allow remote commands via SMS'.

  ```{image} ../images/SMSCommandsSetup.png
  :alt: SMS Commands Setup
  ```

- Send a SMS to the phone with AndroidAPS running from your approved phone number(s) using any of the commands below in **CAPITAL LETTERS**, the phone will respond to confirm success of command or status requested. Confirm command by sending the code provided in SMS from AndroidAPS phone where neccessary.

**Hint**: It can be useful to have SMS flat for both phones if a lot of SMS will be sent.

## Commands

Commands must be send in English, response will be in your local language if the response string is already [translated](../translations#translate-strings-for-androidaps-app).

```{image} ../images/SMSCommands.png
:alt: SMS Commands Example
```

### Loop

- LOOP STOP/DISABLE
  : - Response: Loop has been disabled
- LOOP START/ENABLE
  : - Response: Loop has been enabled
- LOOP STATUS
  : - Response depends on actual status
      : - Loop is disabled
        - Loop is enabled
        - Suspended (10 min)
- LOOP SUSPEND 20
  : - Response: Loop suspended for 20 minutes
- LOOP RESUME
  : - Response: Loop resumed

### CGM data

- BG
  : - Response: Last BG: 5.6 4min ago, Delta: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Basal: 0.10U)
- CAL 5.6
  : - Response: To send calibration 5.6 reply with code Rrt
    - Response after correct code was received: Calibration sent (**If xDrip is installed. Accepting calibrations must be enabled in xDrip+**)

### Basal

- BASAL STOP/CANCEL
  : - Response: To stop temp basal reply with code EmF \[Note: Code EmF is just an example\]
- BASAL 0.3
  : - Response: To start basal 0.3U/h for 30 min reply with code Swe
- BASAL 0.3 20
  : - Response: To start basal 0.3U/h for 20 min reply with code Swe
- BASAL 30%
  : - Response: To start basal 30% for 30 min reply with code Swe
- BASAL 30% 50
  : - Response: To start basal 30% for 50 min reply with code Swe

### Bolus

- BOLUS 1.2
  : - Response depends time last bolus was given
      : - To deliver bolus 1.2U reply with code Rrt
        - Remote bolus not available. Try again later. (**Remote bolus not allowed within 15 min after last bolus command or remote commands!**)
- EXTENDED STOP/CANCEL
  : - Response: To stop extended bolus reply with code EmF
- EXTENDED 2 120
  : - Response: To start extended bolus 2U for 120 min reply with code EmF

### Profile

- PROFILE STATUS
  : - Response: Profile1
- PROFILE LIST
  : - Response: 1.\`Profile1\` 2.\`Profile2\`
- PROFILE 1
  : - Response: To switch profile to Profile1 100% reply with code Any
- PROFILE 2 30
  : - Response: To switch profile to Profile2 30% reply with code Any

### Other

- TREATMENTS REFRESH
  : - Response: Refresh treatments from NS
- NSCLIENT RESTART
  : - Response: NSCLIENT RESTART 1 receivers
- PUMP
  : - Response: Last conn: 1 minago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100

## Troubleshooting

There was a report on SMS commands stopping after an update on Galaxy S10 phone. Could be solved by disabeling 'send as chat message'.

```{image} ../images/SMSdisableChat.png
:alt: Disable SMS as chat message
```
