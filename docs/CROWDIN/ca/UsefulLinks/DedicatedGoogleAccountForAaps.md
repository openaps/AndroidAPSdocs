# Un compte de Google dedicat per a AAPS (opcional)

Alguns usuaris d'**AAPS** prefereixen fer servir també per a **AAPS** el seu compte de correu principal. Altres usuaris d'**AAPS** (o els seus cuidadors) creen un compte de correu dedicat per a **AAPS**. Això és opcional. A continuació us mostrem un exemple de com fer-ho.

Si no voleu crear un compte de Gmail dedicat per a **AAPS**, podeu anar directament a la secció següent, [Compilar AAPS](../SettingUpAaps/BuildingAaps.md).

```{admonition} Advantages of a dedicated Google account for AAPS
:class: dropdown

- Dedicated Google Drive space means you will not risk filling up your personal Google Drive limit with **Export settings**.
- Each version of **AAPS** (and supporting apps like xDrip, BYODA, etc) will be stored in one single place which is independent of your computer hardware. Si perdeu l'ordinador o el telèfon, o us el roben o es trenca, encara hi tindreu accés.
- Si tothom fa servir la mateixa configuració, amb una estructura de carpetes semblant, l'ajuda en línia és més senzilla.
- Segons la configuració (vegeu més avall), tindreu una identitat separada, com un àlies, per comunicar-vos amb la comunitat. Això pot protegir la vostra privacitat. 
- Els nens amb DT1 poden conservar el seu propi compte de correu «de cada dia» com a menors, i alhora fer servir **AAPS** i les funcions relacionades que necessiten un compte d'adult.
- Gmail us permet registrar fins a 4 comptes amb el mateix número de telèfon.
```

## Com crear un compte de Google dedicat per a AAPS

(⌛Uns 10 minuts)

![](../images/Building-the-App/building_0001.png)

Requisits:

* You have a Windows’ PC (Windows 10 or newer) and an Android phone (Android 12 or newer) which will host the **AAPS** app. Tots dos tenen les últimes actualitzacions de seguretat, accés a internet i permisos d'administrador, perquè alguns passos demanen descarregar i instal·lar programes.
* El telèfon Android ja està configurat amb la vostra adreça de correu personal «de cada dia», per exemple un compte de Gmail.

```{admonition} Things to consider when setting up your new account
:class: dropdown
- Per motius de privacitat, podeu fer servir un nom diferent del vostre que tingui relació amb el compte (per exemple, t1dsuperstar). Així el podeu fer servir als fòrums públics d'**AAPS** i mantenir privada la vostra identitat. Com que Google demana un correu i un número de telèfon de recuperació, encara es pot saber qui sou.
- El nou compte d'**AAPS** farà servir per a la verificació el mateix número de telèfon que el vostre compte «_de cada dia_». Farà servir l'adreça de correu «de cada dia» per a la verificació;
- Configurarem el reenviament del correu perquè tots els correus enviats al nou compte dedicat d'AAPS es reenviïn al compte principal (així no cal mirar dues bústies diferents);
- Feu servir contrasenyes diferents per al vostre compte de Gmail _de cada dia_ i per al compte de Gmail dedicat a AAPS
- Si feu servir la «verificació en 2 passos» de Google (autenticació multifactor) per a un compte de Gmail, és millor fer-la servir també per a tots dos comptes.
- Si penseu fer servir les «claus d'accés» (Passkeys) de Google, assegureu-vos de registrar diversos dispositius. Així no us quedareu sense accés al compte. Feu-ho només en dispositius als quals ningú més pot accedir (_és a dir_, no en un ordinador amb un compte compartit que altres persones poden desbloquejar).
```


```{admonition} Video Walkthrough!
:class: note
Click [here](<https://drive.google.com/file/d/1dMZTIolO-kd2eB0soP7boEVtHeCDEQBF/view?usp=drive_link>) for a video walkthrough of how to set up a dedicated Google account.
```

 Aquests són els passos que es mostren al vídeo:

En aquest exemple: 
- Your existing “_Everyday_” Google account is <donald.muck42@gmail.com>; ![](../images/Building-the-App/building_0002.png)
- El vostre nou compte de Gmail «_AAPS_» serà: <donald.muck42.aaps@gmail.com>; ![](../images/Building-the-App/building_0003.png)


### Go to <https://myaccount.google.com> 

 Si ja heu iniciat la sessió a Google, aquí anireu a la pàgina **My Account** del vostre compte «de cada dia». (1) Click on the top right of the page on your profile picture (in this case, a simple ![](../images/Building-the-App/building_0002.png)) (2) select “_add another account_”.

![](../images/Building-the-App/building_0005.png)


### Introduïu les dades del vostre NOU compte dedicat: 

- Introduïu el compte nou: 
- Create Account (crear un compte)
- per a ús personal. 


### Introduïu les vostres dades personals:
 - Introduïu el nom
 - cognom
 - data de naixement (ha de ser d'una persona adulta)

### Trieu la vostra NOVA adreça de correu i la contrasenya

En aquest exemple s'afegeix «.AAPS» al nom que ja té Donald Muck…\
Trieu una contrasenya

### Introduïu un número de telèfon que pugui rebre l'SMS de verificació

Ara Gmail us enviarà un codi únic que heu d'introduir per a la validació.

### Introduïu l'adreça de correu de recuperació

En aquest cas serà el vostre correu «_de cada dia_» que ja teniu…

### Acabeu de configurar el compte

Gmail mostrarà el nom del compte. Us demanarà que accepteu les condicions de Gmail i que confirmeu la configuració de personalització.

### Personalitzeu la imatge del nou perfil

Ara hauríeu de ser a la pàgina MyAccount de Gmail, amb el vostre nou compte de correu dedicat a **AAPS**. Per defecte, la foto del perfil és la primera lletra del vostre nom. Change it to something unique to avoid confusion… in this example, Donald.Muck.AAPS has replaced ![](../images/Building-the-App/building_0002.png) with ![](../images/Building-the-App/building_0003.png).

![](../images/Building-the-App/building_0007.png)\
![](../images/Building-the-App/building_0008.png)

### Obriu el web de Gmail a totes dues finestres per configurar el compte nou

Per no haver de vigilar un altre compte de correu, reenvieu tots els correus del nou compte dedicat a **AAPS** al vostre compte de cada dia\
Aquesta part pot ser una mica confusa, perquè haureu de canviar diverses vegades d'un compte a l'altre. Per fer-ho més fàcil, obriu 2 finestres del navegador, una a sobre de l'altra:

1. Moveu el navegador que ja teniu obert a la part de dalt de la pantalla i canvieu-ne la mida perquè només ocupi més o menys la meitat de dalt de la pantalla…
2. Feu clic amb el botó dret sobre la icona del navegador a la barra de tasques
3. Al menú, seleccioneu «New Window» (finestra nova)... i ajusteu-la perquè només ocupi la meitat de baix de la pantalla.

Obriu <https://gmail.com> a cada finestra del navegador. Assegureu-vos que el compte personal és a dalt i el nou compte dedicat a **AAPS** és a baix, i que es reconeix fàcilment per la foto del perfil a la cantonada de dalt a la dreta. If needed, you can always switch accounts by clicking on the profile picture and selecting the correct one.

![](../images/Building-the-App/building_0009.png)

Les pàgines d'inici de Gmail haurien de ser així:\
![](../images/Building-the-App/building_0010.png)

 ### Al nou compte de Gmail (finestra de baix), obriu la configuració de Gmail…

- Feu clic a la roda dentada a l'esquerra de la foto del perfil
- i després seleccioneu «**See all Settings**» (veure tota la configuració)

![](../images/Building-the-App/building_0011.png)

### Configureu el reenviament…

- Feu clic a la pestanya de configuració «Forwarding and POP/IMAP» (reenviament i POP/IMAP)
- Feu clic a «add a forwarding address» (afegir una adreça de reenviament)
- Afegiu la vostra adreça de correu «de cada dia»
- Gmail enviarà un codi de verificació a la vostra adreça de correu «de cada dia».
- Torneu al vostre perfil de cada dia i feu clic a l'enllaç per confirmar que accepteu el reenviament (o agafeu el codi del correu de verificació de Gmail a la finestra de Gmail «de cada dia» i enganxeu-lo a la finestra de Gmail del «nou compte dedicat a AAPS»).

Cal anar diverses vegades d'una finestra a l'altra, però així, quan mireu els correus del compte «de cada dia», també veureu els correus reenviats des del compte dedicat a AAPS, com ara les alertes de Gmail.

![](../images/Building-the-App/building_0012.png)

### Verifiqueu l'adreça de correu de reenviament

- Al Gmail «de cada dia» (finestra de dalt) rebreu el correu «Gmail forwarding Confirmation».
- Obriu-lo i feu clic a l'enllaç per confirmar la sol·licitud («click the link to confirm the request»)

### Arxiveu els correus reenviats al nou compte de Gmail dedicat (finestra de baix)

<!---->

1. Actualitzeu la finestra de baix
2. Marqueu «forward incoming email» (reenviar el correu entrant)
3. I arxiveu la còpia de Gmail (per mantenir neta la nova bústia dedicada)
4. Desplaceu-vos fins a baix de tot per desar els canvis\
   ![](../images/Building-the-App/building_0013.png)

![](../images/Building-the-App/building_0014.png)

Enhorabona! Ara ja heu creat un compte de Google dedicat a AAPS. El pas següent és [compilar l'aplicació AAPS](../SettingUpAaps/BuildingAaps.md).