# CareSens

Există diferite moduri de a utiliza datele CareSens cu **AAPS**:

- xDrip
- Juggluco

**Notă:** Nu aveți nevoie de aplicația de urmărire Sens365 pentru a vă conecta la AAPS.

## 1. xDrip

1. Instalați și configurați aplicația oficială CareSens.
2. În aplicația CareSen, accesați setările -> Gestionați Datele și Conexiunile -> activați comutatorul xDrip. Dacă se dorește, dezactivați conexiunile de date către CareLevo, DIA:CONN, CloudLoop etc. din secțiunea "Altele".

![Conexiunile de date ale aplicației CareSens](../images/eversenseapp-dataconnections.png)


2. Install xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. In xDrip, go to settings -> hardware data source, select `Companion App` as data source.
4. In **AAPS**, select xDrip in [**Configuration → BG Source**](#Config-Builder-bg-source).


## 2. Juggluco

1. Instalați aplicația Juggluco.
2. În Juggluco, deschideți meniul din stânga și selectați `Fotografia`
3. Scanați codul QR de pe pachetul senzorului.
4. În meniul din stânga> Setări > schimb de date, asigurați-vă că este activată transmisiunea xDrip.
5. In **AAPS**, select xDrip in [**Configuration → BG Source**](#Config-Builder-bg-source).
