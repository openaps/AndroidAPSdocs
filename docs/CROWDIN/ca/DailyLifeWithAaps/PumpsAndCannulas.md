# Bombes i cànules

## Canvi dels sets d'infusió: reservoris d'insulina i cànules

El procediment que es descriu a continuació és només per a bombes amb tub. No s'aplica a bombes patch com Omnipod, Medtrum Nano, Accu-Chek Solo, etc. De vegades aquest procediment s'anomena «canvi de set»: un canvi de set «complet» inclou el reservori d'insulina i la cànula, i un canvi de set «parcial» és només el canvi de cànula.

Les bombes patch s'omplen i s'enceben soles amb el seu propi assistent d'activació, i la cànula ja és dins del cos. **AAPS** no ofereix l'encebament per a aquestes bombes: **Encebar** no es mostra al full **Gestionar** ni a l'accés ràpid. Consulteu la pàgina de la vostra bomba a [Bombes compatibles](../Getting-Started/CompatiblePumps.md).

El canvi físic del cartutx o reservori no es pot fer amb **AAPS**: s'ha de fer directament a la bomba. Un cop fet, cal anotar-lo manualment a **AAPS**.

(pumps-cannulas-changing-reservoir-and-cannula)=
### Guia per canviar el reservori de la bomba i la cànula

1. A **AAPS**, desconnecteu la bomba: premeu la [icona del llaç](#AapsScreens-loop-status) a la pantalla principal i seleccioneu **Desconnectar bomba** durant 1 hora. La icona canvia a un endoll gris, que indica que la bomba està desconnectada.

2. Canvieu físicament el reservori d'insulina: desconnecteu la bomba del cos i canvieu el reservori/cartutx i la cànula segons les instruccions del fabricant.

3. Encebeu/ompliu el tub i la cànula: es pot fer directament a la bomba. Assegureu-vos d'eliminar totes les bombolles del tub.

4. Col·loqueu la nova cànula al cos. Un cop inserida la cànula i retirada l'agulla, la cànula té un petit espai d'aire que també s'ha d'encebar. To announce this in **AAPS** and prime the site: open **Prime/Fill** (in the expanded status panel on the main screen, in the **Manage** sheet, or as a [QuickLaunch](QuickLaunch.md) button) and tick **Record pump site change** and/or **Record insulin cartridge change** as appropriate to record the change. Ara premeu la quantitat d'encebament de cànula predeterminada (normalment és d'unes 0,3 U, però comproveu que aquest valor sigui correcte per a la vostra cànula) i seleccioneu **OK**. Llegiu el missatge de resum i confirmeu l'encebament prement **OK**.

   ![Encebar al full Gestionar amb una bomba amb tub](../images/v4/Screens/manage_sheet_tube_pump.png)


5. Reconnecteu la bomba a **AAPS**: premeu la icona de l'endoll gris i seleccioneu **Reconnectar bomba** per continuar amb el llaç.

### Informació útil sobre els canvis d'insulina i de cànula

* Anotar un canvi de cànula restableix Autosens al 100%. També restableix els indicadors d'estat i les edats de la cànula i de la insulina a la pantalla principal d'**AAPS**.

* Podeu establir o ajustar les quantitats d'encebament predeterminades a la configuració d'**Encebar**: escriviu «prime» a la barra de cerca de la pantalla principal per obrir-la (vegeu [Configuració](../SettingUpAaps/Preferences.md)). Consulteu el full d'instruccions de la caixa de cànules per saber quantes unitats (segons la llargada de l'agulla i del tub) cal encebar per a la vostra cànula.

* **AAPS** no té en compte la insulina lliurada amb la funció d'encebament quan calcula la insulina a bord (IOB), i a l'[Historial de tractaments](#aaps-screens-treatments) apareix marcada com a «Encebament».

* **AAPS** tampoc no té en compte cap bolus fet des de la bomba mentre la bomba està desconnectada. Si feu un bolus directament des de la bomba mentre **AAPS** està desconnectat, quan reconnecteu la bomba podeu anotar aquesta insulina (sense fer el bolus) al diàleg **Insulina** (vegeu [Anotar insulina lliurada sense fer el bolus](#pumps-cannulas-announce-insulin) més avall).

### Problemes amb la cànula, el punt d'infusió, el tub o la bomba

Si esteu segurs que no heu rebut insulina durant un temps, tot i que **AAPS** ha registrat que sí, i sabeu exactament quan va començar el problema (_p. ex._ traieu la cànula i veieu que es va doblegar en inserir-la), ho podeu corregir a **AAPS**. Tingueu en compte, però, que potser la insulina sí que s'ha lliurat però actua lentament per algun motiu.

```{admonition} Caution - Risk of Hypoglycemia
:class: danger
Elimineu un lliurament d'insulina d'**AAPS** només amb MOLTA precaució, per si la insulina _sí_ que s'ha lliurat, i vigileu de prop la glucèmia durant les 24 h següents.
```

Per eliminar bolus i SMB que sabeu que no s'han lliurat, obriu el **menú** (☰), seleccioneu [Historial de tractaments](#aaps-screens-treatments) i, a la pestanya **Carbohidrats i bolus**, elimineu amb prudència els bolus registrats des del moment en què va passar l'incident. Així es corregeix el valor d'«insulina a bord» (IOB), que és clau per als càlculs d'**AAPS**. Si ara torneu a la pantalla principal, veureu que l'IOB ha baixat. Tingueu en compte que no podeu eliminar la insulina basal que **AAPS** calcula que s'ha lliurat, i per tant **AAPS** la continuarà tenint en compte.

En casos menys clars de problemes de lliurament d'insulina, _p. ex._ fuites, oclusions o tunelització, en què no sabeu quan va començar el problema o creieu que una part de la insulina sí que s'ha lliurat, heu d'anar amb compte. Podeu detectar aquests problemes perquè «oloreu» la insulina, veieu l'adhesiu mullat, teniu valors de glucèmia alts o rebeu una alarma. Com que mai no sabreu quanta insulina ha quedat a la pell (i potser comença a actuar al cap d'una estona), és difícil saber quanta insulina cal restar del valor actual d'«insulina a bord» (IOB). Una estratègia és aturar el llaç durant 5 hores (o la vostra durada de l'acció de la insulina) després de resoldre el problema de lliurament d'insulina, i reprendre el llaç després. Així l'IOB serà correcte quan torneu a iniciar el llaç.

(pumps-cannulas-disconnecting)=
## Desconnectar la bomba per dutxar-se o fer activitat

Si us traieu la bomba per dutxar-vos, banyar-vos, nedar, fer esports de contacte o altres activitats, heu d'indicar a **AAPS** que no s'està lliurant insulina, perquè l'IOB sigui correcte. Podeu desconnectar la bomba amb la [icona del llaç](#AapsScreens-loop-status) a la pantalla principal: premeu-la i seleccioneu **Desconnectar bomba** amb la durada que necessiteu. Si l'activitat dura més del previst, torneu a obrir el mateix diàleg i trieu una nova durada a **Desconnectar bomba**: la desconnexió s'allarga i la nova durada compta des d'ara. No cal reconnectar primer.

Com que no rebeu insulina mentre la bomba està desconnectada, us hauríeu de reconnectar cada dues hores per recuperar la basal que falta. Per fer-ho, connecteu la bomba i feu un bolus amb la basal que falta (_p. ex._ de les últimes dues hores) abans de tornar a desconnectar-la. Això ajuda a evitar una manca greu d'insulina, que podria provocar una cetoacidosi diabètica (CAD). Si és incòmode reconnectar la bomba durant l'activitat (el punt de la cànula queda tapat per un vestit de neoprè, _etc._), considereu fer una injecció amb ploma. Podeu anotar aquesta injecció manual a **AAPS**, i no cal fer-ho en el moment de la injecció (només apunteu l'hora), perquè quan reconnecteu la bomba podeu anotar la insulina i posar-hi l'hora real en què es va administrar.

(pumps-cannulas-announce-insulin)=
## Anotar insulina lliurada sense fer el bolus

To announce insulin delivered from the pump either while **AAPS** was disconnected, or from pen injections: open the [Insulin dialog](#aaps-screens-buttons-insulin) (**Treatments** in the bottom navigation, or a QuickLaunch button), enter the amount in units and enable **Bolus will be recorded only (not delivered by pump)**. Aleshores una fila **Hora** (posada a **Ara**) us permet anotar l'hora real de la injecció. La podeu ignorar si la injecció és recent. Si el bolus es va fer fa una estona, feu servir **-** per endarrerir l'hora (_p. ex._ -30 min), o obriu la fila amb la fletxa per triar la data i l'hora exactes. Aleshores **AAPS** tindrà en compte la durada de l'acció de la insulina i calcularà la insulina que encara queda al cos.

Si feu servir **AAPS** com a cuidador, podeu desconnectar (i reconnectar) la bomba a distància molt fàcilment amb una [ordre SMS](../RemoteFeatures/SMSCommands.md), per exemple "pump disconnect 120" i "pump connect 120". La durada de la desconnexió remota va d'1 a 120 min (en aquest exemple és de 120 minuts). Això és molt útil si no podeu accedir fàcilment al telèfon amb **AAPS**: per exemple, si va dins d'un cinturó portabomba d'un nen que corre cap a la piscina, o si un adolescent el vigila de prop (o el fa servir).

## Reconnectar la bomba després de l'activitat

Després d'una desconnexió llarga (1–2 hores), és força habitual que **AAPS** calculi que ara teniu un IOB negatiu. Quan reconnecteu la bomba, segons les vostres preferències, la glucèmia actual, el menjar previst o l'activitat que vingui després, podeu:

a) Simplement reconnectar la bomba a **AAPS** (de gris a verd, en llaç tancat) i deixar que **AAPS** torni a lliurar insulina

_o_

b) Si voleu ser més agressius (per exemple, aneu cap a una hiperglucèmia), podeu obrir la [Calculadora de bolus](#aaps-screens-bolus-wizard) i fer un bolus amb zero carbohidrats, per lliurar de seguida com a bolus la insulina que falta segons el càlcul.

L'estratègia preferida és molt personal, i el millor és trobar-la provant.


(Aapsscreens-site-rotation)=
## Rotació de punts d'inserció

**Gestionar → Rotació de punts d'inserció** obre el diàleg de rotació de punts en mode de visualització:

- Amb els dos botons de dalt (icona de cànula i icona de sensor) podeu mostrar només els punts de cànula, només els punts de sensor, o tots dos
- All Cannula change and Sensor change events from the past 45 days are available.
- Feu clic en una zona o en una entrada de la llista de sota per filtrar la llista i veure només les entrades de la zona seleccionada. La zona seleccionada es marca en verd clar.
- Premeu la icona del **llapis** al costat d'una entrada per obrir la vista d'edició i canviar-ne la ubicació, la fletxa o la nota

![Mode de visualització](../images/SiteRotation/ViewMode.png)

- La icona de l'**engranatge** (a dalt a la dreta) obre la configuració: **Perfil d'usuari per a la rotació del punt d'infusió** obre un diàleg on trieu **Home**, **Dona** o **Infant**, i els interruptors **Gestionar la rotació del punt d'infusió de la bomba** i **Gestionar la rotació del punt del CGM** trien quins punts gestioneu.

![Configuració](../images/SiteRotation/Settings.png)

![Diàleg del perfil d'usuari per a la rotació de punts](../images/SiteRotation/Type.png)

*Note: this setting decides whether the Site Rotation dialog (Edit mode) opens automatically when a new entry is made with the "Prime/Fill" button or the "Sensor Insert" button.*

- Si el canvi de cànula s'ha fet directament a la bomba, heu d'obrir el mode de visualització i editar la nova entrada per triar la ubicació i la fletxa

El mode d'edició us permet triar la ubicació, la fletxa i la nota de l'entrada seleccionada:

- L'entrada que s'edita es mostra sota les imatges del cos, amb la icona del seu tipus (cànula o sensor)
- Les vistes de davant i de darrere es mostren una al costat de l'altra: premeu la zona on l'heu col·locat
- Once a site is selected (highlighted in green), the list below shows all entries made in this site in the past 45 days.

![Mode d'edició](../images/SiteRotation/EditMode.png)

- Podeu afegir una fletxa opcional prement la icona de fletxa a la dreta de l'entrada: el diàleg **Seleccionar fletxa** us permet indicar una subzona o l'orientació del pod

![Posició](../images/SiteRotation/EditModeSub.png)

- També podeu afegir una **Nota** sobre el punt seleccionat
- Premeu la icona de **desar** (a dalt a la dreta) per registrar el punt

Podeu filtrar de manera gràfica a la imatge, o fent clic en un esdeveniment de teràpia de la llista Per treure el filtre, feu clic a la imatge fora de qualsevol punt

![Filtre](../images/SiteRotation/Filtering.png)
