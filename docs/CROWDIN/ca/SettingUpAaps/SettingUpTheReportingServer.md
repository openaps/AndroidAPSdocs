# Configurar el servidor d'informes

Ara mateix hi ha dos servidors d'informes que es poden fer servir amb **AAPS**:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Servidors d'informes](../images/Building-the-App/ReportingServer.png)

Us recomanem fer servir Nightscout.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout és una aplicació web que pot registrar i mostrar les vostres dades del CGM i les dades d'**AAPS**, i també crea informes. És una plataforma potent que fa molts anys que està integrada a **AAPS**. Permet als usuaris i als cuidadors seguir les dades de diabetis del pacient gairebé en temps real (només poden passar uns quants segons entre la recepció i la publicació de les dades, si hi ha una connexió a Internet suficient entre tots els components). També transporta les ordres remotes que els cuidadors envien a **AAPS** des d'**AAPSClient** (vegeu [Control principal ↔ client](#client-master-control)).

Nightscout és programari de codi obert. Qualsevol persona pot crear i gestionar un servidor Nightscout, amb serveis gratuïts o de pagament.

Trobareu més informació al [lloc web del projecte Nightscout](http://nightscout.github.io/).

### Opció 1 - Configureu vosaltres mateixos el vostre servidor Nightscout

Crear el vostre servidor d'informes Nightscout pot requerir una o més aplicacions web que caldrà mantenir. Per tenir un servei totalment gratuït, potser haureu de traslladar el vostre lloc Nightscout i les dades si els proveïdors eliminen l'opció gratuïta.

[Aquí](https://nightscout.github.io/nightscout/new_user/#free-diy) trobareu una descripció de com configurar Nightscout, amb els avantatges i els inconvenients de les diferents opcions de funcionament i una estimació dels costos.

### Opció 2 - Pagueu un servei Nightscout allotjat

També hi ha diferents proveïdors que allotgen Nightscout per vosaltres a canvi d'una quota mensual. Els costos són assumibles, i l'avantatge d'una opció allotjada és que no cal tenir coneixements d'informàtica ni cap infraestructura pròpia.


Els usuaris actuals de Nightscout poden revisar de tant en tant on i com tenen allotjat el seu servidor Nightscout, i canviar a una altra opció si els convé més.

[Aquí](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table) hi ha una llista d'alguns serveis Nightscout allotjats.

### Més configuració de Nightscout

Quan la vostra instància de Nightscout estigui en funcionament, vegeu la [pàgina de configuració de Nightscout](../SettingUpAaps/Nightscout.md) per a més informació.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool està disponible a **AAPS** des de la versió 3.2, publicada a finals del 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger
Com que hi ha un retard de tres hores entre l'arribada de les dades i el seu informe quan es fa servir **AAPS**, Tidepool no és adequat per compartir informació en temps real amb els cuidadors.  
D'altra banda, Tidepool pot ser una molt bona solució per compartir informes amb l'endocrinòleg del pacient si Nightscout no és una solució acceptada.  
```

Tidepool és un projecte de [codi obert](https://github.com/tidepool-org). Ofereix un compte gratuït als servidors de Tidepool.

[Aquí](../SettingUpAaps/Tidepool.md) trobareu més informació sobre com configurar Tidepool amb AAPS.

```{admonition} **AAPS** has the uploader for Tidepool integrated
:class: note
**No** cal que feu servir l'aplicació uploader de Tidepool: **AAPS** envia per vosaltres la glucèmia, els tractaments i la basal. Només necessiteu un compte personal a Tidepool. No envieu les vostres dades amb l'eina separada Tidepool uploader, perquè això crearia valors duplicats.  
```

## Pas següent

Quan hàgiu configurat el vostre servidor d'informes, podeu configurar **AAPS** al vostre telèfon amb l'[Assistent de configuració](./SetupWizard.md), que també connectarà **AAPS** amb el vostre servidor d'informes.