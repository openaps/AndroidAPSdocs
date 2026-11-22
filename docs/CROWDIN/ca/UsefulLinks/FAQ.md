# Preguntes freqüents per a usuaris del llaç

Com afegir preguntes a les preguntes freqüents: seguiu aquestes [instruccions](../SupportingAaps/HowToEditTheDocs.md)

## General

### Puc descarregar directament el fitxer d'instal·lació d'AAPS?

No. No hi ha cap fitxer apk d'AAPS per descarregar. L'heu de [compilar](../SettingUpAaps/BuildingAaps.md) vosaltres mateixos. Aquest és el motiu:

AAPS es fa servir per controlar la bomba i donar insulina. Segons la normativa actual a Europa, tots els sistemes de classe IIa o IIb són dispositius mèdics que necessiten una aprovació reglamentària (un marcatge CE), i aquesta aprovació demana diversos estudis i validacions. Distribuir un dispositiu no regulat és il·legal. En altres parts del món hi ha normes semblants.

Aquesta norma no es limita només a la venda (en el sentit de rebre diners per alguna cosa), sinó que s'aplica a qualsevol distribució (fins i tot regalar-lo). Compilar un dispositiu mèdic per a vosaltres mateixos és l'única manera de fer servir l'aplicació dins d'aquestes normes.

Per això no hi ha apks disponibles.

(FAQ-how-to-begin)=

### Com començar?

Comenceu per [Preparació per començar amb AAPS](../Getting-Started/PreparingForAaps.md): us guia per tot el que hi ha a continuació amb més detall.

Primer de tot, cal **aconseguir components de maquinari compatibles amb el llaç**:

* Una [bomba d'insulina compatible](../Getting-Started/CompatiblePumps.md), 
* un [telèfon intel·ligent Android](../Getting-Started/Phones.md) (AAPS no funciona amb Apple iOS; podeu mirar [iOS Loop](https://loopkit.github.io/loopdocs/)) i
* un [sistema de monitoratge continu de glucosa](../Getting-Started/CompatiblesCgms.md). 

En segon lloc, cal **configurar els components de programari**: [AAPS](../SettingUpAaps/BuildingAaps.md), la [font de CGM/FGM](../Getting-Started/CompatiblesCgms.md) i un [servidor d'informes](../SettingUpAaps/SettingUpTheReportingServer.md).

En tercer lloc, cal aprendre i **entendre el disseny de referència d'OpenAPS per comprovar els vostres factors de tractament**. El principi bàsic del llaç tancat és que la vostra [taxa basal i ràtio de carbohidrats](../SettingUpAaps/YourAapsProfile.md) siguin correctes. Totes les recomanacions suposen que la vostra basal està ben ajustada i que els pics o les baixades que veieu vénen d'altres factors (esport, estrès, etc.), que per això necessiten ajustos puntuals. Els ajustos que el llaç tancat pot fer per seguretat són limitats (vegeu la basal temporal màxima permesa a l'[OpenAPS Reference Design](https://openaps.org/reference-design/)). Per això no voleu gastar la dosi permesa a corregir una basal de base incorrecta. Per exemple, si sovint teniu basals temporals baixes abans d'un àpat, és probable que calgui ajustar la vostra basal. Podeu fer servir [Autotune](#autotune-how-autotune-calculates-adjustments) per analitzar moltes dades i proposar si cal ajustar les basals i/o l'ISF, i com, i també si cal canviar la ràtio de carbohidrats. O podeu provar i ajustar la vostra basal de la [manera tradicional](https://integrateddiabetes.com/basal-testing/).

### Quins aspectes pràctics té viure amb el llaç?

#### Protecció amb contrasenya

Si no voleu que la vostra configuració es pugui canviar fàcilment, la podeu protegir amb una contrasenya, un PIN o l'autenticació biomètrica del telèfon (empremta, cara). Obriu **Configuració** > **Protecció** > **Protecció de la configuració** i trieu el tipus de protecció. Al mateix lloc també podeu protegir tota l'aplicació o només els bolus. Vegeu [Protecció de la configuració](#Preferences-settings-protection) per a més detalls.

#### Rellotges intel·ligents Android Wear

Si feu servir l'aplicació d'AAPS per al rellotge per fer un bolus o canviar la configuració, cada petició s'ha de confirmar al rellotge: després d'enviar-la, el rellotge mostra un resum amb un botó **CONFIRMAR**. Vegeu [Controlar AAPS amb el vostre rellotge Wear OS](../RemoteFeatures/RemoteControlWearOS.md).

(FAQ-disconnect-pump)=

#### Desconnectar bomba

Si us traieu la bomba per dutxar-vos, banyar-vos, nedar, fer esport o altres activitats, heu de dir a AAPS que no es lliura insulina, perquè l'IOB sigui correcte.

Podeu desconnectar la bomba amb la [icona del llaç](#AapsScreens-loop-status) a la pantalla principal d'AAPS: premeu-la i seleccioneu **Desconnectar bomba** amb la durada que necessiteu. Si l'activitat dura més del previst, torneu a prémer la icona i trieu una durada nova: no cal reconnectar primer. Vegeu [Desconnectar la bomba per dutxar-se o fer activitat](#pumps-cannulas-disconnecting) per saber com evitar la falta d'insulina durant desconnexions llargues.

#### Recomanacions que no es basen en una sola lectura del CGM

Per seguretat, les recomanacions no es basen en una sola lectura del CGM, sinó en la delta mitjana. Per això, si perdeu algunes lectures, pot passar una estona després de recuperar les dades abans que AAPS torni a fer funcionar el llaç.

#### Més lectures

Hi ha diversos blogs amb bons consells per ajudar-vos a entendre els aspectes pràctics del llaç. Alguns ja no estan en línia: els enllaços de sota marcats amb «còpia arxivada» obren una còpia desada a l'Internet Archive.

    * [Ajustar bé la configuració](https://web.archive.org/web/20171029031305/http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM (còpia arxivada)
    * [Per què la DIA és important](https://web.archive.org/web/20231130035027/http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM (còpia arxivada)
    * [Limitar els pics després dels àpats](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
    * [Hormones i autosens](https://web.archive.org/web/20170902081839/http://seemycgm.com/2017/06/06/hormones-2/) See my CGM (còpia arxivada)
    

(what-emergency-equipment-is-recommended-to-take-with-me)= (FAQ-emergency-equipment)=

### Quin material d'emergència es recomana portar?

Heu de portar el mateix material d'emergència que qualsevol altra persona amb DT1 amb tractament amb bomba d'insulina. Quan feu servir el llaç amb AAPS, es recomana molt tenir el material addicional següent amb vosaltres o a prop:

* Bateria externa i cables per carregar el vostre telèfon intel·ligent, el rellotge i (si cal) el lector BT o el dispositiu Link
* Piles de la bomba
* Accés a les vostres còpies de seguretat, tant al telèfon com al núvol (p. ex. Google Drive, Dropbox), per poder tornar a configurar AAPS en un altre telèfon (vegeu [Crear i restaurar còpies de seguretat](../Maintenance/ExportImportSettings.md)): 
  * l'[apk](../SettingUpAaps/BuildingAaps.md) actual d'AAPS i de les altres aplicacions que feu servir (p. ex. xDrip, Juggluco, BYODA).
  * el fitxer del vostre magatzem de claus (de quan vau compilar l'apk) i la seva contrasenya,
  * els vostres últims fitxers d'exportació de configuració d'AAPS i de les altres aplicacions,
  * la vostra clau mestra d'**AAPS**: sense ella no podeu importar el fitxer de configuració. Si l'heu oblidada, vegeu [Com restablir la clau mestra?](#FAQ-reset-master-password)

(FAQ-organize-backups)=

#### Com organitzar les meves còpies de seguretat?

Exporteu la configuració molt sovint: després de cada canvi de pod o de reservori, després de modificar el perfil, quan hàgiu validat un objectiu, si canvieu de bomba… Encara que no canviï res, exporteu-la un cop al mes. Guardeu diversos fitxers d'exportació antics.

**AAPS** ho pot fer per vosaltres: pot exportar la configuració automàticament (per exemple amb una [automatització](#ExportImportSettings-Automating-Settings-Export) després de cada canvi de pod) i desar l'exportació directament en una carpeta del núvol (Google Drive). Vegeu [Crear i restaurar còpies de seguretat](../Maintenance/ExportImportSettings.md).

### Com puc subjectar el CGM/FGM de manera segura?

El podeu enganxar amb cinta. Hi ha diversos «overpatches» ja perforats per als sistemes CGM habituals (cerqueu a Google, eBay o Amazon). Alguns usuaris del llaç fan servir cinta de kinesiologia estàndard, més barata, o rocktape.

El podeu subjectar. També podeu comprar braçalets per a la part superior del braç que subjecten el CGM/FGM amb una cinta (cerqueu a Google, eBay o Amazon).

## Algoritme APS

### Per què OpenAPS AMA mostra «dia: 3» encara que tinc una altra DIA al perfil?

Amb **OpenAPS AMA** seleccionat a **Configurador** > **APS**, **Obrir plugin** mostra les dades enviades a l'algoritme. A la seva secció **Perfil**, `dia` és sempre 3.0 o menys:

![Pantalla del plugin OpenAPS AMA amb dia 3.0 a les dades del perfil](../images/screens/openaps_ama_plugin.png)

A l'AMA, la DIA en realitat no vol dir «durada de l'acció de la insulina». És un paràmetre que abans estava lligat a la DIA. Ara vol dir «en quant de temps s'ha d'acabar la correcció». No té res a veure amb el càlcul de l'IOB. A l'OpenAPS SMB aquest paràmetre ja no cal.

## Altres configuracions

### Configuració de Nightscout

(FAQ-nsclient-blocked)=

#### AAPSClient (o AAPS) no envia dades: «Bloquejat per…». Què puc fer?

L'estat de NSClient mostra per què no s'envien dades:

* **Bloquejat per les opcions de connectivitat**: la configuració de connexió no permet la connexió actual. Per exemple, feu servir dades mòbils però només es permet la WiFi, o no esteu connectats a cap de les xarxes WiFi permeses (SSID).
* **Bloquejat per les opcions de càrrega**: la configuració de connexió només permet sincronitzar mentre el telèfon es carrega (o només amb bateria), i ara no és el cas.
* **Sense connectivitat**: el telèfon no té connexió a internet.

Comproveu la [configuració de connexió de NSClient](#Preferences-nsclient): **Utilitzar dades mòbils**, **Utilitzar itinerància**, **Utilitzar WiFi**, **SSID WiFi**, **Sincronitzar amb bateria** i **Sincronitzar mentre es carrega**.

### Configuració del CGM

(FAQ-advanced-filtering)=

#### Per què AAPS diu «Les funcions "SMB sempre" i "SMB després de carbohidrats" estan desactivades perquè la font de glucèmia no fa filtrat avançat»?

**Activar SMB sempre** i **Activar SMB després de carbohidrats** només es poden fer servir amb una [font de dades de glucèmia de confiança](#GettingStarted-TrustedBGSource): un sensor i una aplicació de CGM que poden dir a **AAPS** de quin sensor vénen les lectures. Amb qualsevol altra font de glucèmia, **AAPS** desactiva aquestes dues opcions i mostra aquest missatge. Comproveu la llista de fonts de confiança i, si el vostre sensor hi és, assegureu-vos que feu servir una de les aplicacions de CGM indicades per a aquest sensor. Vegeu també [Suavitzat de les dades de glucèmia](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Bomba

#### Piles

El llaç pot gastar la pila de la bomba més ràpid que l'ús normal, perquè el sistema es comunica per Bluetooth molt més que un usuari manual. El millor és canviar la pila al 25%, perquè llavors la comunicació es torna difícil. Podeu configurar alarmes d'avís per a la pila de la bomba amb la variable PUMP_WARN_BATT_P al vostre lloc de Nightscout. Trucs per allargar la vida de la pila:

* reduïu el temps que la pantalla LCD queda encesa (al menú de configuració de la bomba)
* reduïu el temps que la retroil·luminació queda encesa (al menú de configuració de la bomba)
* configureu els avisos amb un bip en lloc de vibració (al menú de configuració de la bomba)
* premeu els botons de la bomba només per recarregar; feu servir AAPS per veure tot l'historial, el nivell de la pila i el volum del reservori.
* En alguns telèfons, l'aplicació AAPS es pot tancar sovint per estalviar energia o alliberar RAM. Quan AAPS es torna a iniciar, a cada arrencada estableix una connexió Bluetooth amb la bomba i torna a llegir la taxa basal actual i l'historial de bolus. Això gasta bateria. Per veure si passa això, activeu **Registrar l'inici de l'app** a la **Configuració avançada** de NSClient: Nightscout rebrà un esdeveniment a cada reinici d'AAPS, i així és fàcil seguir el problema. Per reduir-ho, desactiveu l'optimització de bateria per a AAPS perquè el telèfon deixi de tancar-lo: vegeu l'[estalvi de bateria](#FAQ-battery-savings) més avall.
* netegeu els contactes de la pila amb una tovalloleta d'alcohol, perquè no quedi cera ni greix de fàbrica.
* amb les [bombes Dana R/RS](../CompatiblePumps/DanaRS-Insulin-Pump.md), el procés d'arrencada fa passar un corrent alt per la pila per trencar a propòsit la capa de passivació (que evita la pèrdua d'energia durant l'emmagatzematge), però no sempre la trenca al 100%. Traieu i torneu a posar la pila 2-3 vegades fins que a la pantalla es vegi 100%, o feu servir la clau de la pila per fer un curtcircuit breu a la pila abans de posar-la: toqueu els dos contactes durant una fracció de segon.
* vegeu també més consells per a [tipus concrets de pila](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

#### Canvi de reservoris i cànules

El reservori s'ha de canviar directament a la bomba, i després el canvi es registra a **AAPS**. Seguiu la [guia pas a pas per canviar el reservori i la cànula de la bomba](#pumps-cannulas-changing-reservoir-and-cannula).

### Fons de pantalla

Trobareu el fons de pantalla d'AAPS per al vostre telèfon a la [pàgina de telèfons](#Phones-phone-wallpaper).

### Ús diari

Moltes de les situacions de sota es poden preparar un cop com a [escena](#scenes): una configuració desada que canvia el perfil, l'objectiu temporal i altres paràmetres amb un sol toc. **AAPS** ofereix plantilles ja preparades, per exemple *Esport*, *Dormir*, *Alcohol* o *Bany*.

#### Higiene

(what-to-do-when-taking-a-shower-or-bath)=

##### Què he de fer quan em dutxo o em banyo?

Podeu treure la bomba mentre us dutxeu o us banyeu. Durant aquest temps curt potser no la necessiteu, però heu de dir a AAPS que l'heu desconnectada perquè els càlculs de l'IOB siguin correctes. Vegeu la [descripció de dalt](#FAQ-disconnect-pump). La plantilla d'[escena](#scenes) *Bany* ho fa per vosaltres.

#### Feina

Segons la vostra feina, potser voleu fer servir factors de tractament diferents els dies laborables. Com a usuari del llaç, penseu en un [canvi de perfil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) per al vostre dia de feina habitual. Per exemple, podeu canviar a un perfil per sobre del 100% si teniu una feina poc activa (p. ex. assegut a una taula), o per sota del 100% si esteu actius i dempeus tot el dia. També podeu pensar en un objectiu temporal alt o baix, o en un [desplaçament horari del vostre perfil](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile), quan treballeu molt més d'hora o més tard del normal, o si feu torns diferents. També podeu crear un segon perfil (p. ex. «casa» i «dia de feina») i fer cada dia un canvi de perfil al perfil que realment necessiteu, o desar la configuració del dia de feina com a [escena](#scenes).

### Activitats de lleure

(FAQ-sports)=

#### Esport

Heu de revisar els vostres hàbits d'esport d'abans del llaç. Si simplement preneu un o més carbohidrats per a l'esport com abans, el sistema de llaç tancat els detectarà i els corregirà.

Així tindríeu més carbohidrats a bord, però al mateix temps el llaç hi reaccionaria i lliuraria insulina.

Quan feu servir el llaç, proveu aquests passos:

* Feu un [canvi de perfil](#ProfileSwitch-change-percentage) per sota del 100%: toqueu el nom del perfil a la pantalla principal, toqueu el botó rodó **▶** i després poseu el **Percentatge** i la **Durada**.
* Poseu un [objectiu temporal d'activitat](#TempTargets-activity-temp-target) per sobre del vostre objectiu habitual. Amb un percentatge per sota del 100% i una durada, la mateixa pantalla **Activar** ofereix un interruptor **Objectiu temporal / Activitat (esport)** que inicia tots dos alhora.
* Si feu servir SMB, assegureu-vos que [«Activar SMB amb objectiu temporal alt»](#Open-APS-features-enable-smb-with-high-temp-targets) i [«Activar SMB sempre»](#Open-APS-features-enable-smb-always) estan desactivats.

És important preparar aquesta configuració abans i ajustar-la després. Feu els canvis amb temps abans de l'esport i tingueu en compte l'efecte del reompliment dels músculs (glucogen).

Les plantilles d'[escena](#scenes) *Esport* i *Nit després de l'esport* agrupen aquesta configuració, i així les podeu iniciar amb un sol toc. Si feu esport sovint a la mateixa hora (p. ex. una classe al gimnàs), podeu fer servir l'[automatització](../DailyLifeWithAaps/Automations.md) per iniciar el canvi de perfil i l'OT, o l'escena. Una automatització basada en la ubicació també pot ser una idea, però fa més difícil la preparació.

El percentatge del canvi de perfil, el valor del vostre objectiu temporal d'activitat i el millor moment per als canvis són diferents per a cada persona. Comenceu pel cantó segur quan busqueu el valor correcte per a vosaltres (comenceu amb un percentatge més baix i un OT més alt).

#### Sexe

Podeu treure la bomba per estar «lliures», però ho heu de dir a AAPS perquè els càlculs de l'IOB siguin correctes. Vegeu la [descripció de dalt](#FAQ-disconnect-pump).

#### Beure alcohol

Beure alcohol és arriscat en mode de llaç tancat, perquè l'algoritme no pot predir bé la glucèmia afectada per l'alcohol. Heu de trobar el vostre propi mètode per tractar això amb les funcions següents d'AAPS:

* Desactivar el mode de llaç tancat i tractar la diabetis manualment, o
* posar objectius temporals alts i desactivar UAM, perquè el llaç no augmenti l'IOB per un àpat no anunciat, o
* feu un [canvi de perfil](#ProfileSwitch-change-percentage) a un valor clarament per sota del 100% 

La plantilla d'[escena](#scenes) *Alcohol* és un punt de partida que podeu adaptar al vostre propi mètode.

Quan beveu alcohol, heu de vigilar sempre el CGM per evitar manualment una hipoglucèmia menjant carbohidrats.

#### Dormir

##### Com puc fer servir el llaç a la nit sense radiació de la xarxa mòbil ni de la WiFi?

Molts usuaris posen el telèfon en mode avió a la nit. Si voleu que el llaç us ajudi mentre dormiu, feu el següent (només funciona si l'aplicació del CGM funciona al mateix telèfon que AAPS, com xDrip, Juggluco o BYODA; NO funciona si rebeu les lectures de glucèmia per Nightscout):

1. Activeu el mode avió al vostre mòbil.
2. Espereu fins que el mode avió estigui actiu.
3. Activeu el Bluetooth.

Ara no rebeu trucades ni esteu connectats a internet. Però el llaç continua funcionant.

Algunes persones han trobat problemes amb l'enviament local (AAPS no rep els valors de glucèmia de xDrip) quan el telèfon està en mode avió. A xDrip, aneu a Settings > Inter-app settings > Identify receiver i escriviu `info.nightscout.androidaps`.

![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

Si voleu una configuració diferent a la nit (per exemple un objectiu més alt), la plantilla d'[escena](#scenes) *Dormir* és un bon punt de partida.

#### Viatges

##### Com gestionar els canvis de fus horari?

Amb la Dana R i la Dana R coreana no cal fer res. Per a altres bombes, vegeu la pàgina [Canvi de fus horari i horari d'estiu](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) per a més detalls.

### Temes mèdics

#### Hospitalització

Si voleu compartir informació sobre AAPS i el llaç DIY amb els vostres professionals sanitaris, podeu imprimir la [guia d'AAPS per a professionals sanitaris](../UsefulLinks/ClinicianGuideToAaps.md).

#### Visita mèdica amb el vostre endocrinòleg

##### Informes

Podeu mostrar els vostres informes de Nightscout (https://YOUR-NS-SITE.com/report) o mirar [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

## Preguntes freqüents a Discord i les seves respostes...

### El meu problema no apareix aquí.

Vegeu [On puc trobar ajuda?](../GettingHelp/WhereCanIGetHelp.md). Si heu trobat la solució vosaltres mateixos, **recordeu-nos que l'afegim a aquesta llista!**

### Compilar i instal·lar

(FAQ-build-errors)=

#### Tinc problemes o errors en compilar l'aplicació.

Consulteu la pàgina de resolució de problemes de la manera com compileu **AAPS** (vegeu [Compilar AAPS](../SettingUpAaps/BuildingAaps.md)):

* compilació al navegador: [Compilació al navegador: resolució de problemes](#aaps-ci-troubleshooting),
* compilació amb Android Studio: [Resolució de problemes d'Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

(FAQ-build-error-file-name-too-long)=

#### Error de compilació: file name too long

Aquest error pot passar quan compileu amb Android Studio: la compilació s'atura amb un error que diu que el nom del fitxer és massa llarg. Possibles solucions: Moveu el codi font a una carpeta més a prop de l'arrel de la vostra unitat (p. ex. "C:\src\AndroidAPS").

Des d'Android Studio: Assegureu-vos que «Gradle» ha acabat de sincronitzar i indexar després d'obrir el projecte i de fer pull des de GitHub. Executeu Build->Clean Project abans de fer Rebuild Project. Executeu File->Invalidate Caches and Restart a Android Studio.

(FAQ-running-dev-version)=

#### Alerta: Executant versió de desenvolupament. Llaç tancat no disponible

**AAPS** mostra aquest missatge quan feu servir una versió de desenvolupament (dev) sense el mode enginyeria: en una versió dev, el llaç tancat només funciona en mode enginyeria.

La versió dev és per fer proves, no per fer servir el llaç de veritat: llegiu [Branca de desenvolupament](../AdvancedOptions/DevBranch.md) abans de continuar.

Per activar el mode enginyeria:

1. Poseu un fitxer anomenat `engineering_mode` a la subcarpeta `extra` de la vostra carpeta d'AAPS (la carpeta que vau triar a l'assistent de configuració, normalment `AAPS/extra`). Serveix qualsevol fitxer, sempre que tingui el nom correcte.
2. Reinicieu **AAPS** perquè trobi el fitxer.

Consell: feu una còpia d'un fitxer de registre que ja tingueu i canvieu-li el nom a «engineering_mode» (atenció: sense extensió de fitxer!).

### Objectius

#### M'he encallat en un objectiu i necessito ajuda.

Primer llegiu [Completar els objectius](../SettingUpAaps/CompletingTheObjectives.md). Si encara esteu encallats, feu una captura de pantalla de la pregunta i les respostes i publiqueu-la al canal d'AAPS a Discord. No oblideu explicar quines opcions trieu (o no) i per què. Rebreu pistes i ajuda, però les respostes les haureu de trobar vosaltres.

### Configuració, contrasenyes i còpies de seguretat

(FAQ-reset-master-password)=

#### Com restablir la clau mestra?

Si heu oblidat la clau mestra, la podeu restablir al número de sèrie de la vostra bomba:

1. Creeu un fitxer buit anomenat `PasswordReset` (sense extensió) a la subcarpeta `extra` de la vostra carpeta d'AAPS (normalment `AAPS/extra`).
2. Reinicieu **AAPS**. La bomba ha d'estar connectada: **AAPS** mostra «Esperant la bomba…» i ha de llegir el número de sèrie de la bomba en 30 segons.
  
  Per reiniciar, tanqueu **AAPS** amb **menú** (☰) > **Sortir** i després torneu-lo a obrir. **AAPS** només busca el fitxer quan s'inicia des de zero. Tancar la pantalla o treure l'aplicació lliscant no és suficient, perquè **AAPS** continua funcionant en segon pla. Si no apareix «Esperant la bomba…», feu servir **Força l'aturada** a la **Informació de l'aplicació** d'Android d'**AAPS**, o reinicieu el telèfon. També funciona tornar a instal·lar el vostre apk actual d'**AAPS** per sobre de l'aplicació instal·lada: es manté la configuració.

3. **AAPS** mostra «Contrasenya establerta!»: ara la vostra clau mestra és el **número de sèrie de la bomba**. El fitxer `PasswordReset` s'elimina automàticament.

4. Obriu **Configuració** > **Protecció** > **Clau mestra** i poseu una contrasenya nova.

Si no s'arriba a la bomba a temps, no canvia res: comproveu la connexió de la bomba i torneu-ho a provar.

Això només restableix la clau mestra. Una contrasenya o un PIN de configuració, d'aplicació o de bolus no es restableix, però sempre podeu fer servir la clau mestra en lloc d'ells.

    {admonition} Fitxers de configuració antics
    :class: warning
    Els fitxers de configuració exportats amb la clau mestra antiga només es poden importar amb aquella contrasenya antiga.

(FAQ-where-are-settings-files)=

#### On puc trobar els fitxers de configuració?

Els fitxers de configuració es desen a la subcarpeta `preferences` de la carpeta d'AAPS que vau triar a l'[assistent de configuració](#SetupWizard-StoragePermission) (per exemple `/internal storage/AAPS/preferences`). Si heu configurat una carpeta al núvol (Google Drive), les exportacions també s'hi poden desar. Vegeu [Crear i restaurar còpies de seguretat](../Maintenance/ExportImportSettings.md).

AVÍS: no perdeu la contrasenya, perquè sense ella no podreu importar un fitxer de configuració xifrat!

(FAQ-import-settings-earlier-versions)=

#### Com importo la configuració de versions antigues d'AAPS a AAPS v3 o v4?

Només podeu importar (a AAPS v3 o v4) configuració exportada amb AAPS v2.8x o posterior. Si feu servir una versió d'AAPS anterior a la v2.8x, o necessiteu fer servir exportacions de configuració anteriors a la v2.8x, primer heu d'instal·lar AAPS v2.8. Importeu la configuració antiga de la v2.x a la v2.8. Després de comprovar que tot està bé, podeu exportar la configuració des de la v2.8. Instal·leu la versió actual d'AAPS i importeu-hi la configuració de la v2.8.

Si feu servir la mateixa clau per compilar la versió antiga i la nova, ni tan sols caldrà importar la configuració. Podeu instal·lar la versió nova per sobre de l'antiga.

S'han afegit alguns objectius nous. Els haureu de validar.

(FAQ-delete-treatments)=

#### On puc eliminar tractaments?

Obriu el **menú** (☰) i seleccioneu **Historial de tractaments**. Manteniu premuda una entrada per seleccionar-la, toqueu més entrades si cal, després toqueu la icona de la **paperera** i confirmeu. Vegeu [Historial de tractaments](#aaps-screens-treatments).

### Problemes del telèfon i de connexió

(FAQ-aaps-stops)=

#### AAPS s'atura cada dia a la mateixa hora més o menys.

* En alguns telèfons, Google Play Protect pot tancar **AAPS** cada matí. Si passa això, aneu a les opcions de Google Play i desactiveu **Google Play Protect**.
* Comproveu si teniu aplicacions de «neteja» (p. ex. CCleaner) i desinstal·leu-les.
* Desactiveu totes les optimitzacions de bateria per a **AAPS** (vegeu l'[estalvi de bateria](#FAQ-battery-savings) més avall).

(FAQ-battery-savings)=

#### Com configurar l'estalvi de bateria?

El vostre telèfon pot suspendre **AAPS** i les aplicacions relacionades (aplicació del CGM, Bluetooth) quan no el feu servir. Llavors **AAPS** no pot fer la seva feina, i les connexions Bluetooth amb el sensor i la bomba (o el RileyLink) es poden tallar, cosa que provoca alertes de «bomba no accessible» i errors de comunicació.

Desactiveu l'optimització de bateria per a **AAPS**, per a l'aplicació del CGM (p. ex. xDrip) i per a l'aplicació de sistema Bluetooth. La manera de fer-ho depèn de la marca, el model i la versió d'Android del telèfon:

* vegeu [Optimització de bateria](#generaltroubleshooting-android-related-issues) per a telèfons Pixel, Samsung i Huawei,
* a **AAPS**, obriu el **menú** (☰) > **Quant a** i toqueu **Don't kill my app?**, o visiteu [Don't kill my app](https://dontkillmyapp.com/) per a altres marques.

Si no esteu segurs que l'estalvi de bateria provoqui el problema, podeu desactivar temporalment tot l'estalvi de bateria del telèfon: la bateria es gastarà més ràpid, però veureu de seguida si el problema desapareix.

(FAQ-pump-unreachable-alerts)=

#### Alertes de bomba no accessible diverses vegades al dia o a la nit.

El vostre telèfon pot estar suspenent **AAPS** o fins i tot el Bluetooth, i així perd la connexió amb la bomba o el RileyLink (vegeu l'[estalvi de bateria](#FAQ-battery-savings) més amunt).

També podeu canviar quan salta l'alerta: premeu la icona de **Configuració** (engranatge) a dalt a la dreta de la pantalla principal i després seleccioneu **Alertes locals** > **Llindar de bomba no accessible** (de 30 a 300 minuts). Consulteu la pàgina de la vostra bomba: algunes recomanen un valor, p. ex. 120 minuts per a l'[Omnipod DASH](../CompatiblePumps/OmnipodDASH.md).

(FAQ-link-unresponsive)=

#### El meu link/bomba/pod no respon (RL/OL/EmaLink…)

Amb alguns telèfons hi ha desconnexions Bluetooth dels Links (RL/OL/EmaLink).

Alguns també tenen Links que no responen (AAPS diu que estan connectats, però els Links no poden arribar a la bomba ni donar-li ordres).

Primer proveu el botó **Restablir RileyLink** a la pantalla de la bomba (vegeu la pàgina de la vostra bomba: [Medtronic](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump), [Omnipod Eros](#OmnipodEros-reset-rileylink-config-notes)). Si això no ajuda, la manera més fàcil de fer que totes aquestes parts tornin a funcionar juntes és:

1. Apagueu el Link.
2. Tanqueu **AAPS** (**menú** (☰) > **Sortir**).
3. Manteniu premuda la icona d'**AAPS**, obriu la **Informació de l'aplicació** d'Android, toqueu **Força l'aturada** i després **Emmagatzematge** > **Esborra la memòria cau** (NO esborreu l'emmagatzematge ni les dades!).
4. Rarament, alguns telèfons poden necessitar un reinici en aquest punt. Podeu provar-ho sense reiniciar.
5. Engegueu el Link.
6. Inicieu **AAPS**.
7. A la pantalla de la bomba, toqueu **Emparellar RileyLink** i torneu a seleccionar el vostre Link.

### Control remot

(FAQ-aapsclient)=

#### Configurar i fer servir l'aplicació remota AAPSClient

**AAPSClient** és una aplicació separada que permet a un cuidador seguir i controlar **AAPS** a distància. Des d'**AAPS** v4, per controlar **AAPS** des d'AAPSClient cal emparellar les dues aplicacions una sola vegada. Vegeu:

* [L'aplicació AAPSClient](#aapsclient-app): instal·lació, primer inici i emparellament,
* [Control principal ↔ client](#client-master-control): què es pot controlar i com funciona l'emparellament,
* [AAPSClient en un rellotge intel·ligent](#remotecontrol-smartwatches).

(FAQ-hardened-mode)=

#### Els tractaments que introdueixo al lloc web de Nightscout no s'apliquen

Això és el [mode reforçat](#client-master-control-hardened-mode). Mentre el control des del client està activat (sempre en el Mode simple), **AAPS** només accepta canvis dels clients emparellats, no del lloc web de Nightscout ni d'altres aplicacions. Introduïu-los en un **AAPSClient** emparellat.

### Alertes i avisos

#### Tinc una marca d'avís vermella (triangle vermell) / AAPS no activa el llaç tancat / El llaç es queda en LGS / Tenia un triangle groc

La marca d'avís vermella a la drecera de l'origen de glucèmia és una funció de seguretat d'AAPS. Vegeu [Senyal d'avís de glucèmia](#aaps-screens-bg-warning-sign) per a l'explicació completa.

Una marca d'avís vermella a la drecera de l'origen de glucèmia a la barra inferior (el triangle vermell de les versions antigues) vol dir que teniu glucèmies duplicades i AAPS no pot calcular les deltes amb precisió. El llaç tancat passa al mode **Suspensió per glucèmia baixa (LGS)**: continua reduint o suspenent la basal per protegir-vos de les hipoglucèmies, però no dona insulina de correcció. Per fer desaparèixer l'avís, heu d'eliminar una glucèmia de cada valor duplicat. Toqueu la drecera per obrir la [pantalla de l'origen de glucèmia](#aaps-screens-bg-source): el duplicat apareix marcat en vermell. Manteniu premuda una línia que vulgueu eliminar, marqueu una de cada parella de línies duplicades i toqueu la icona de la paperera. Potser haureu de restablir les bases de dades d'AAPS si hi ha massa glucèmies duplicades. En aquest cas, també perdreu les estadístiques, l'IOB, el COB i el perfil seleccionat.

Quan l'avís desapareix, AAPS no torna sol al **Llaç tancat**. Premeu la icona del llaç a la pantalla principal i torneu a seleccionar **Llaç tancat**.

Possible origen del problema: xDrip i/o NS que omplen glucèmies antigues (backfilling).

El triangle groc de les versions antigues volia dir que el temps entre lectures de glucèmia no era estable (glucèmies que no arriben regularment cada 5 min, o glucèmies que falten). Això passa sovint amb el Libre o després de canviar el transmissor del G6. **AAPS** 4 ja no el mostra: torna a calcular els valors en segon pla i el llaç funciona correctament.

### Omnipod DASH

(FAQ-move-dash-pod)=

#### Puc moure un pod DASH actiu a un altre telèfon?

L'estat del pod s'inclou a la configuració exportada. Per això un pod actiu es pot moure a un altre telèfon: exporteu la configuració just abans del canvi i importeu-la a l'altre telèfon. Això no té suport oficial i hi ha risc de perdre el pod: si podeu, proveu-ho quan el pod estigui a punt de caducar.

Primer llegiu aquestes seccions:

* [Exportar i importar la configuració](#omnipod-dash-export-import) a la pàgina d'Omnipod DASH, i [Bombes sense tub](#ExportImportSettings-tubeless-pumps): al telèfon nou, marqueu **Substituir també la configuració de la bomba** i feu servir un fitxer exportat mentre portàveu el pod actual,
* [Descartar un pod](#omnipod-dash-discard-pod), per treure després el pod del telèfon antic. Mantingueu el telèfon antic en mode avió fins que el pod estigui descartat, perquè els dos telèfons no parlin mai amb el pod alhora.