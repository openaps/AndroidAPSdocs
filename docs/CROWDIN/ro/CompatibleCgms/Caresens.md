# CareSens

Există diferite moduri de a utiliza datele CareSens cu **AAPS**:

- xDrip
- Juggluco

**Notă:** Nu aveți nevoie de aplicația de urmărire Sens365 pentru a vă conecta la AAPS.

## 1. xDrip

1. Instalați și configurați aplicația oficială CareSens.
2. În aplicația CareSens, accesați setările -> Gestionați Datele și Conexiunile -> activați comutatorul xDrip. If preferred, turn off the data connections to CareLevo, DIA:CONN, CloudLoop, etc. in "others".

![Conexiunile de date ale aplicației CareSens](../images/eversenseapp-dataconnections.png)


2. Instalați xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. In xDrip, go to settings -> hardware data source, select `Companion App` as data source.
4. În **AAPS**, selectați xDrip în [**Configurație → Sursă glicemie**](#Config-Builder-bg-source).


## 2. Juggluco

1. Instalați aplicația Juggluco.
2. În Juggluco, deschideți meniul din stânga și selectați `Photo`
3. Scanați codul QR de pe pachetul senzorului.
4. În meniul din stânga -> setări -> schimb de date, asigurați-vă că transmisia xDrip (xDrip broadcast) este activată.
5. În **AAPS**, selectați xDrip în [**Configurație → Sursă glicemie**](#Config-Builder-bg-source).
