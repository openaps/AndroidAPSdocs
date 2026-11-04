# Juggluco settings

If not already set up, then download [Juggluco](https://www.juggluco.nl/Juggluco/download.html).

Prijunkite jutiklį pagal [instrukcijas](https://www.juggluco.nl/Jugglucohelp/introhelp.html).

## Pagrindiniai nustatymai visoms NGJ sistemoms

### Disable Nightscout uploader

Neleiskite jokiai kitai programėlei siųsti duomenų (gliukozės ir terapijos įrašų) į Nightscout.

Disable any active uploader to Nightscout in Juggluco.

![Disable Nightscout Upload](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Juggluco to AAPS

Juggluco gali siųsti gliukozės kiekio kraujyje duomenis tiesiogiai į AAPS ir, jei naudojate [patikimą jutiklį](#GettingStarted-TrustedBGSource), leidžia visada naudoti SMB.

Naudojant Libre 2/2+/3/3+ jutiklį, kas minutę gaunami rodmenys bus siunčiami į AAPS, tačiau dėl to AAPS neatliks skaičiavimų kas minutę.

Enable xDrip broadcast in Juggluco (do not enable Patched Libre), confirm and save the AAPS package information. AAPS kaip glikemijos šaltinį pasirinkite xDrip.

Apply sufficient [smoothing](./SmoothingBloodGlucoseData.md) in AAPS.

![Juggluco to AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## Iš Juggluco į xDrip

Juggluco gali siųsti gliukozės duomenis į xDrip, o xDrip juos perduos į AAPS.

Enable Patched Libre in Juggluco (do not enable xDrip broadcast), confirm and save the dexdrip package information. AAPS kaip glikemijos šaltinį pasirinkite xDrip.

Jei reikia, AAPS taikykite pakankamą [glodinimą](./SmoothingBloodGlucoseData.md). Naudojant Libre 2/2+/3/3+ jutiklį, xDrip kas minutę gaunamus rodmenis suvidurkina į 5 minučių rodmenis ir [taip pat juos glodina](#libre2-value-smoothing-raw-values).

![Iš Juggluco į xDrip](../images/juggluco/Juggluco-xDrip+.png)
