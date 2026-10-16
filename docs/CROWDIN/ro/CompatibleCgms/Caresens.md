# CareSens

Există diferite moduri de a utiliza datele CareSens cu **AAPS**:

- xDrip+
- Juggluco

**Notă:** Nu aveți nevoie de aplicația de urmărire Sens365 pentru a vă conecta la AAPS.

## 1. xDrip+

1. Instalați și configurați aplicația oficială CareSens.
2. În aplicația CareSen, accesați setările -> Gestionați Datele și Conexiunile -> activați comutatorul xDrip. Dacă se dorește, dezactivați conexiunile de date către CareLevo, DIA:CONN, CloudLoop etc. din secțiunea "Altele".

![Conexiunile de date ale aplicației CareSens](../images/eversenseapp-dataconnections.png)


2. Instalați xDrip+: [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. În xDrip+, mergeți la Setări -> Sursă de date hardware, selectați `Companion App` ca sursă de date.
4. În **AAPS**, selectați xDrip+ în [Configurator, Sursă de glicemie](#Config-Builder-bg-source).


## 2. Juggluco

1. Instalați aplicația Juggluco.
2. În Juggluco, deschideți meniul din stânga și selectați `Fotografia`
3. Scanați codul QR de pe pachetul senzorului.
4. În meniul din stânga> Setări > schimb de date, asigurați-vă că este activată transmisiunea xDrip.
5. În **AAPS**, selectați xDrip+ în [Configurator, Sursă de glicemie](#Config-Builder-bg-source).
