# Omnipod DASH

Aceste instrucțiuni sunt pentru configurarea pompei de generație **Omnipod DASH** **(NU Omnipod Eros)**, disponibilă ca parte a versiunii 3.0 a **AAPS**.

## Specificații Omnipod DASH

Acestea sunt specificațiile modelului **Omnipod DASH** („DASH”) și ce îl diferențiază de modelul **Omnipod EROS** („EROS”):

- Pompele DASH sunt identificate printr-un **capac albastru pentru ac** (EROS are un capac transparent pentru ac). Capsulele sunt în rest identice în ceea ce privește dimensiunile fizice.
- DASH nu necesită un dispozitiv BLE link/bridge (NU este nevoie de RileyLink, OrangeLink sau EmaLink).
- Conexiunea Bluetooth a DASH este utilizată numai atunci când se trimite o comandă (spre exemplu un Bolus) și se deconectează imediat după emiterea comenzii.
- Gata cu erorile „fără conexiune la dispozitivul/podul conectat” cu DASH.
- **AAPS** va aștepta accesibilitatea pompei pentru a trimite comenzi.
- La activarea pompei, **AAPS** va găsi și se va conecta la o nouă pompă DASH.
- Rază de acțiune preconizată: 5-10 metri (Rezultatele pot varia).

(omnipod-dash-constraints)=

## Constrângeri/probleme AAPS cunoscute pentru Omnipod DASH
- Android 16 necesită **AAPS** versiunea 3.3.2.1 sau mai târziu.
- Recomandare generală este de a rula **AAPS** pe Android 14 sau 16. Android 15 are multe probleme [raportate ](https://github.com/nightscout/AndroidAPS/issues/3471) de către comunitate. Cu toate acestea, dacă rulați pe Android 15, este posibil să fie nevoie să activați și să utilizați Bluetooth Bonding cu succes pompele, vedeți [Depanare](../GettingHelp/GeneralTroubleshooting.md) pentru mai multe informații despre setările de asociere.
- Actualizările prea frecvente ale bazalelor pot cauza [probleme](https://github.com/nightscout/AndroidAPS/issues/4158) în administrarea insulinei bazale cu Omnipod Dash. Când se utilizează **SMB**, limitează intervalul la minim 5 minute pentru a evita această problemă.
- Dash acceptă doar rata bazale în pași de 0,05 U/h. Dacă încercați să setați bazala cu pași de 0,01 în profilul **AAPS**, AAPS nu vă va da un avertisment, chiar dacă pompa va rotunji rata bazală în pași de 0,05. Dacă afișați Gestionare Pompă/Istoric Pompă vă va arată că s-a setat o bazală de 0,05. Acest lucru înseamnă, de asemenea, cea mai mică rată bazală permisă de DASH din **AAPS** este de 0,05U/h.
- Starea de activare a unei pompe este stocată în fișierul de setări, dacă exportați un fișier de setări cu o pompă activă. Apoi schimbați la o nouă pompă, restabiliți setările din exportul anterior și veți fi restabilit activarea pompei vechi și veți fi eliminat activarea pompei noi. De aceea, vă recomandăm să exportați setările după fiecare activare de pompă pentru a permite o restaurare a stării de activare a pompei, dacă ceva se întâmplă cu dispozitivul dumneavoastră.
- La setarea unui profil bazal nou, DASH va suspenda livrarea înainte de a seta noul **Profil** bazal. Dacă există o întrerupere sau o eroare de comunicare, profilul bazalei nu va reporni automat. Vedeți secțiunea [Reluarea Administrării de insulină](#omnipod-dash-resuming-insulin-delivery) pentru detalii.
- În cazul în care alertele sunt configurate, iar pompa este pe cale să expire, pompa va continua să piuie până când alertele sunt reduse la tăcere, Vedeți [Suprimarea alertelor pompei](#omnipod-dash-silencing-pod-alerts) pentru detalii.
- Există o serie de probleme cunoscute cu Bluetooth, care pot cauza probleme de activare a pompei. Vedeți [Depanarea Bluetooth](../GettingHelp/BluetoothTroubleshooting.md) pentru problema cunoscută și soluțiile la aceste probleme.

(hardware-software-requirements)=

(omnipod-dash-hardware-software-requirements)=
## Cerințe hardware/software

- Omnipod DASH este identificat prin capacul albastru al acului.

![Pompă Omnipod](../images/DASH_images/Omnipod_Pod.png)

- **Un telefon Android** compatibil cu Bluetooth Low Energy (BLE) (a se vedea [Telefoane](../Getting-Started/Phones.md) pentru mai multe informații), În plus, următoarele informații vă vor ghida cu privire la alte aspecte esențiale legate de activarea și utilizarea cu succes a DASH pe un telefon compatibil:
    -  Driverul **AAPS** Omnipod Dash se conectează cu pompa DASH folosind Bluetooth.  
      **AAPS** va stabili automat o nouă conexiune Bluetooth la pompă de fiecare dată când trebuie să trimită o comandă (spre exemplu, un bolus), după trimiterea comenzii, conexiunea Bluetooth este deconectată imediat.
       - **NOTĂ:**
         - Conexiunea Bluetooth poate fi întreruptă/perturbată de alte dispozitive Bluetooth conectate la telefonul care rulează **AAPS**, cum ar fi căștile șamd... Dispozitive ca acestea pot cauza erori de conectare sau probleme de activare ale pompei pe unele modele de telefoane. Este o idee bună să revizuiți lista [pentru configurațiile hardware testate](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true) pentru configurațiile de lucru cunoscute înainte de a te înhăma la un nou dispozitiv pregătit pentru Omnipod DASH.
         - Există o serie de probleme cunoscute cu Bluetooth, care pot cauza probleme de activare a pompei (Vedeți [Depanarea](#troubleshooting) pentru sfaturi cu privire la alte probleme Bluetooth) în mod specific secțiunea [probleme legate de Bluetooth](#omnipod-dash-bluetooth-related-issues).
    - Pentru **Android 15** sau mai jos: Dumneavoastră **TREBUIE** să utilizați ** cel puțin Versiunea 3.0 de AAPS** folosind instrucțiunile [**Construire APK**](../SettingUpAaps/BuildingAaps.md), cu toate acestea, este recomandabil să rulați ultima versiune publicată.
    - Pentru **Android 16**: **TREBUIE** să folosești **Versiunea 3.3.2. sau mai nou de AAPS** folosind instrucțiunile [**Construire APK**](../SettingUpAaps/BuildingAaps.md), datorită modificării modului de funcționare a sistemului Bluetooth de către Android 16. Orice versiune mai veche de 3.3.2.1 va cauza probabil defecțiuni ale pompei și/sau [probleme](https://github.com/nightscout/AndroidAPS/issues/3471) la activare.
- Un [**Senzor de monitorizare continuă a glicemiei (CGM)**](../Getting-Started/CompatiblesCgms.md)

Instrucțiunile de mai jos explică cum să activați o nouă sesiune de pompă prin utilizarea **AAPS**. Ar trebui să așteptați ca pompa curentă să fie aproape de expirare pentru că va trebui să activați o pompă nouă cu **AAPS**. Once a pod is de-activated it cannot be reused/re-activated, the de-activation is final.

## Before You Begin

Ensure you have read and understand this whole guide, have read and understand the **Before You Begin** section, as well as  **[Omnipod and AAPS Constraints and Issues](#omnipod-dash-constraints)** to avoid running into a known problem.

### **SAFETY FIRST** - You **SHOULD NOT** try to connect **AAPS** to a pod for the first time without having access to all of the following:
1. Extra pods (3 or more spare)
2. Spare Insulin and MDI equipment
3. A working Omnipod PDM (In case **AAPS** fails)
4. Supported Phones are a must! (See [Hardware/Software Requirements](#hardware-software-requirements))
5. Correct version of AAPS built and installed

### **Your Omnipod Dash PDM will become redundant after the AAPS Dash driver activates your pod.**
- Before using **AAPS** you or your care giver would have had to manage the Pod using the Omnipod PDM (or in some regions a Phone app) to send commands to your DASH (e.g a Bolus).
- The DASH can only facilitate a single Bluetooth device (e.g PDM or Phone) connection to manage and send commands.
- The device that successfully activates the pod is the only device allowed to communicate with that Pod from that point forward. This means that once you activate a DASH with your Android phone using **AAPS**, **you will no longer be able to use your PDM with that pod!** For the time that Pod is active the **AAPS** Dash driver running on your Android phone is now the new PDM for your pod.
- **DO NOT Throw away your PDM!** It is recommended to keep it around as a backup and for emergencies, for instance when your phone gets lost or **AAPS** is not working correctly.

### Your pod **WILL NOT** stop delivering insulin when it is not connected to AAPS.
Default basal rates are programmed on the pod on activation as defined in the current active [**Profile**](../SettingUpAaps/YourAapsProfile.md).  
As long as **AAPS** is operational it will send basal rate adjustment commands that run for a maximum of 120 minutes.  
When for some reason the pod does not receive any new commands (for instance because communication was lost due to Pod ➜ phone distance) the pod will automatically fall back to default basal rates as defined in your [**Profile**](../SettingUpAaps/YourAapsProfile.md).

### **AAPS Profile(s) do not support 30 minute basal rate time frames**
If you are new to **AAPS** and are setting up your basal rate [**Profile**](../SettingUpAaps/YourAapsProfile.md) for the first time, please be aware that basal rates starting on a half-hour basis are not supported. For example, on your Omnipod PDM, if you have a basal rate of 1.1 units which starts at 09:30 and has a duration of 2 hours ending at 11:30, it is not possible replicate this exact basil **Profile** in **AAPS**.  
You will need to change this 1.1 unit basal rate to a time range of either 9:00-11:00 or 10:00-12:00. Even though the DASH hardware itself supports the 30 minute basal rate **Profile** increments, **AAPS** does NOT support this feature.

### **0U/h Profile basal rates are NOT supported in AAPS**
While the DASH does support a zero basal rate, **AAPS** uses multiples of the user's **Profile** basal rate to determine automated treatment; it cannot function with a zero basal rate.  
Instead a temporary zero basal rate can be achieved through the "Disconnect pump" function, or through a combination of Disable Loop/Temp Basal Rate or Suspend Loop/Temp Basal Rate.  
**NOTE:** The lowest basal rate allowed by the DASH in **AAPS** is 0.05U/h.

## Selecting Dash in AAPS

There are **two** available options to configure Omnipod in **AAPS**:

### Option 1: New installations

When installing **AAPS** for the first time, the **Setup Wizard** will guide new users through key features and installation requirements for **AAPS**.  
Select “DASH” when you reach Pump selection.

![Enable_Dash_1](../images/DASH_images/Enable_Dash/Enable_Dash_1.png)

When in doubt you can also select “Virtual Pump” and select “DASH” later, after setting up **AAPS** (See Option 2).

(omnipod-dash-option-2-config-builder)=
### Option 2: The Config Builder

On an existing installation you can select the **DASH** pump from the Config builder:

On the top-left hand corner **hamburger menu** select **Config Builder (1)** ➜ **Pump** ➜ **Dash** ➜ **Settings Gear (3)** by selecting the **radio button (2)** titled **Dash**.

Selecting the **checkbox (4)** next to the **Settings Gear (3)** will allow the DASH menu to be displayed as a tab in the **AAPS** interface titled **DASH**. Checking this box will facilitate your access to the DASH commands when using **AAPS**.

**NOTE:** A faster way to access the [**Dash settings**](#omnipod-dash-settings) can be found below in the DASH settings section of this document.

![Enable_Dash_3](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)

### Verification of Omnipod Driver Selection

To verify that you have selected the DASH in **AAPS**, if you have **checked the box (4)**, **swipe to the left** from the **Overview** tab, where you will now see a **DASH** tab on **AAPS**. If this box is left unchecked, you’ll find the DASH tab in the hamburger menu upper left.

![Enable_Dash_4](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

## Dash Configuration

**Swipe left** to the [**DASH tab**](#omnipod-dash-tab) where you will be able to manage all pod functions (some of these functions are not enabled or visible without an active pod session):

![Refresh_LOGO](../images/DASH_images/Refresh_LOGO.png) 'Refresh' pod connectivity and status, be able to silence pod alarms when the pod beeps

![POD_MGMT_LOGO](../images/DASH_images/POD_MGMT_LOGO.png)   'Pod Management' (Activate, Deactivate, Play test beep, and Pod history)

(omnipod-dash-activate-pod)=

### Activate Pod

1. Navigați la fila **DASH** și faceți clic pe butonul **Gestionare pompă (1)** și apoi apăsați pe **Activați pompă (2)**.

   ![Activate_Pod_1](../images/DASH_images/Activate_Pod/Activate_Pod_1.png)

   ![Activate_Pod_2](../images/DASH_images/Activate_Pod/Activate_Pod_2.png)

2. Ecranul **Umplere Pompă** este afișat. Umpleți un nouă pompă cu **cel puțin 80 unități** de insulină și ascultați două semnale sonore care indică faptul că pompa este gata de amorsare.

   ***NOTĂ:** La calcularea cantității totale de insulină de care aveți nevoie pentru 3 zile, vă rugăm să luați în considerare faptul că amorsarea pompei va utiliza aproximativ 3-10 unități.*

   ![Activate_Pod_3](../images/DASH_images/Activate_Pod/Activate_Pod_3.png)

   ![Activate_Pod_4](../images/DASH_images/Activate_Pod/Activate_Pod_4.jpg)

   Asigurați-vă că noua pompă și telefonul pe care rulează **AAPS** se află în imediata apropiere și apăsați pe butonul **Următorul**.

   ***NOTĂ**: dacă mesajul de eroare de mai jos apare _'Nu s-a putut găsi o pompă disponibilă pentru activare'_ (se poate întâmpla), nu intrați în panică. Apăsați pe butonul **Reîncercați**. În majoritatea situațiilor, activarea va continua cu succes.*

   ![Activate_Pod_3](../images/DASH_images/Activate_pod_error.png)

3. Pe ecranul **Inițializați pompa**, pompa va începe amorsarea (veți auzi un clic urmat de o serie de ticăituri pe parcursul amorsării pompei).  
   Un marcaj verde va fi afișat la amorsarea cu succes, iar butonul **Următorul** va fi activat. Apăsați pe butonul **Următorul** pentru a finaliza inițializarea de amorsare a pompei și pentru afișarea ecranului **Atașați Pompa**.

   ![Activate_Pod_5](../images/DASH_images/Activate_Pod/Activate_Pod_5.jpg)    ![Activate_Pod_6](../images/DASH_images/Activate_Pod/Activate_Pod_6.jpg)

4. Apoi, pregătiți locul de infuzare pentru a fi gata să primească noua pompă. Spălați-vă pe mâini pentru a evita orice risc de infecție. Curățați locul de infuzie fie cu apă și săpun, fie cu un tampon cu alcool pentru a dezinfecta zona și lăsați aerul să usuce pielea complet înainte de a continua.   
   Dacă aveți iritații ale pielii de la adeziv, luați în considerare folosirea un șervețel (umed) pentru barieră cutanată sau un spray pentru barieră cutanată.

   Îndepărtați capacul de plastic al acului, de culoare albastră. Dacă vedeți ceva ce iese din pompă sau ceva care arată neobișnuit, **OPRIȚI** procesul și începeți cu o nouă pompă. Dacă totul arată **OK**, continuați să îndepărtați folia de protecție albă de pe adeziv și lipiți pompa pe locul selectat de pe corpul dumneavoastră.

   Când ați terminat, apăsați pe butonul **Următorul**.

   ![Activate_Pod_8](../images/DASH_images/Activate_Pod/Activate_Pod_8.jpg)

6. Caseta de dialog **Atașează Pompă** va apărea acum. **Apăsați pe butonul OK DOAR dacă sunteți pregătit să introduceți canula!**

   ![Activate_Pod_9](../images/DASH_images/Activate_Pod/Activate_Pod_9.jpg)

7. După ce apăsați **OK**, poate dura ceva timp până când DASH răspunde și introduce canula (maxim 1-2 minute). **Aveți răbdare**

   ***NOTĂ:** Înainte de inserarea canulei, este recomandat să prindeți pielea (între degete) lângă punctul de inserție al canulei. Acest lucru asigură o inserare lină a acului și va reduce riscul de apariție a ocluziilor.*

   ![Activate_Pod_10](../images/DASH_images/Activate_Pod/Activate_Pod_10.png)    ![Activate_Pod_11](../images/DASH_images/Activate_Pod/Activate_Pod_11.jpg)

8. Un marcaj verde este afișat pe ecran, iar butonul **Următorul** devine disponibil după inserarea cu succes a canulei.   
   Apăsați pe butonul **Următorul**.

   ![Activate_Pod_12](../images/DASH_images/Activate_Pod/Activate_Pod_12.jpg)

1. Ecranul **Pompă activată** este afișat.

   Apăsați pe butonul verde **Finalizare**.

   Felicitări! Tocmai ați început o nouă sesiune de pompă.

   ![Activate_Pod_13](../images/DASH_images/Activate_Pod/Activate_Pod_13.jpg)

2. Meniul **Gestionare pompă** de pe ecran ar trebui să afișeze acum butonul **Activare pompă (1)** ca dezactivat și butonul ** Dezactivare pompă (2)** ca *activat*. Acest lucru se datorează faptului că o pompă este acum activă și nu puteți activa o pompă suplimentară fără a dezactiva mai întâi pompa activă.

    Apăsați pe butonul înapoi de pe telefonul dumneavoastră pentru a reveni la fila **DASH**, care va afișa acum informații despre pompă pentru sesiunea activă de pompă, inclusiv rata bazală curentă, nivelul rezervorului, insulina livrată, erorile pompei și alertele.

    ***NOTĂ:** Pentru mai multe detalii despre informațiile afișate, accesați [**Fila DASH**](#omnipod-dash-tab) a acestui document.*

   ![Activate_Pod_14](../images/DASH_images/Activate_Pod/Activate_Pod_14.png)

   ![Activate_Pod_15](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

   ***NOTĂ:** Este recomandat să exportați setările DUPĂ activarea pompei. Setările trebuie exportate după fiecare schimbare de pompă și o dată pe lună, asigurați-vă că veți copia fișierul de setări exportat într-o locație de stocare în cloud (spre exemplu Google Drive) sau undeva în afara telefonului în cazul în care vă pierdeți telefonul (vedeți [**Export setări**](../Maintenance/ExportImportSettings.md)).*


(omnipod-dash-deactivate-pod)=

### Dezactivare pompă

În condiții normale, durata de viață preconizată a unei pompe este de trei zile (72 de ore) și de încă 8 ore după avertismentul privind expirarea pompei, pentru un total de 80 de ore de utilizare totală a pompei.

Pentru a dezactiva o pompă (fie de la expirare, fie de la o defecțiune de pompă):

1. Mergeți la fila **DASH**, faceți clic pe butonul **Gestionare pompă (1)**, iar pe ecranul **Gestionare pompă** click pe butonul **Dezactivează pompă (2)**.

   ![Deactivate_Pod_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)

   ![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

2. Pe ecranul **Dezactivați pompă**, faceți clic pe butonul **Următorul** pentru a începe procesul de dezactivare a pompei.

   Veți primi un semnal sonor de confirmare de la pompă că dezactivarea a reușit.

   ![Deactivate_Pod_3](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_3.jpg)

   ![Deactivate_Pod_4](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_4.jpg)

3. O bifă verde va fi afișată la dezactivarea cu succes. Faceți clic pe butonul **Următorul** pentru a afișa ecranul de pompă dezactivată.

   Acum puteți să dați jos pompa deoarece sesiunea activă a fost dezactivată.

   ![Deactivate_Pod_5](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_5.jpg)

4. Faceți clic pe butonul verde pentru a reveni la ecranul **Gestionare pompă**.

   ![Deactivate_Pod_6](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_6.jpg)

5. Acum sunteți în meniul **Gestionare pompă**, apăsați butonul înapoi de pe telefon pentru a reveni la fila **DASH**.

   Verifică dacă câmpul **Stare pompă** afișează un mesaj **Nicio pompă**.

   ![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

   ![Deactivate_Pod_8](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)


(omnipod-dash-resuming-insulin-delivery)=

### Reluarea administrării de insulină

**NOTĂ**: În timpul **Comutării de profil**, ca atunci când se utiliza PDM, AAPS trebuie să suspende administrarea de pe pompă înainte de a seta noul **profil** bazal. În cazul în care comunicarea nu reușește între comenzile de suspendare și reluare, administrarea poate rămâne suspendată, Citește [**Administrare suspendată**](#omnipod-dash-delivery-suspended) în secțiunea ce ține de depanare pentru mai multe detalii.

Când administrarea insulinei este suspendată, va trebui să dați o comandă pentru a instrui pompa activă, suspendată în prezent, să reia administrarea de insulină. După procesarea cu succes a comenzii, insulina va relua administrarea normală folosind rata bazală curentă în funcție de timpul curent în baza **profilului** activ de bazală. Pompa va accepta din nou comenzi pentru bolus, **RBT**și **SMB**.

1. Mergeți la fila **DASH** și asigurați-vă că câmpul **Stare pompă (1)** afișează **SUSPENDAT**, apoi apăsați butonul **RELUAȚI LIVRAREA(2)** pentru a începe procesul de instruire a pompei curente pentru reluarea administrării normale de insulină. Un mesaj **RELUAȚI LIVRAREA** va fi afișat în câmpul **Stare pompă (3)**.

   ![Resume_1](../images/DASH_images/Resume/Resume_1.jpg)   ![Resume_2](../images/DASH_images/Resume/Resume_2.jpg)

2. Atunci când comanda de reluare a livrării a avut succes, un dialog de confirmare va afișa mesajul **Administrarea insulinei a fost reluată**. Apăsați **OK** pentru a confirma și continua.

   ![Resume_3](../images/DASH_images/Resume/Resume_3.png)

3. Fila **DASH** va actualiza câmpul **Stare pompă (1)** pentru a afișa **RULEAZĂ,** iar butonul **Reluați administrarea** nu va mai fi afișat

   ![Resume_4](../images/DASH_images/Resume/Resume_4.jpg)

(omnipod-dash-silencing-pod-alerts)=

### Amuțirea alertelor de pompă

Procedura de mai jos vă va arăta cum să recunoașteți și să opriți semnalele sonore pompei atunci când timpul de utilizare al pompei active atinge limita de avertizare înainte de expirarea pompei la 72 de ore (3 zile). Acest termen de avertizare este definit în setarea de alerte Dash numită **Orele de dinainte de închidere**. Durata maximă de viață a unei pompe este de 80 de ore (3 zile 8 ore), cu toate acestea, Insulet recomandă să nu fie depășită limita de 72 de ore (3 zile).

***NOTĂ**: Butonul **AMUȚEȘTE ALERTELE(3)** este disponibil doar în fila **DASH** atunci când sunt declanșate alerta de expirare a pompei sau cea de rezervor scăzut. Dacă butonul **AMUȚEȘTE ALERTE** nu este vizibil și auziți semnale sonore din pompă, încercați să "Reîmprospătați starea pompei".*

1. Când este atinsă limita de timp definită **Ore înainte de închidere**, poma va emite semnale sonore de avertizare pentru a vă informa că se apropie de ora expirării și că va fi necesară o modificare a pompei în curând.  
   Puteți verifica acest lucru în fila **DASH**, câmpul **Pompa expiră: (1)** va arăta ora exactă la care pompa va expira (72 ore după activare), iar textul se va face **roșu** după ce a trecut acest timp.  
   Sub câmpul **Alerte active ale pompei (2)** mesajul **Pompa va expira în curând** este afișat. Acest lucru va declanșa, de asemenea, afișarea butonului **AMUȚIRE ALERTE(3)**.

   ![ACK_alerts_1](../images/DASH_images/ACK_Alerts/ACK_ALERTS_1.png)

2. Mergeți la fila **DASH** și apăsați butonul **AMUȚEȘTE ALERTELE(2)**. **AAPS** trimite comanda către pompă pentru a dezactiva semnalele sonore de avertizare a expirării pompei și actualizează câmpul **Status pompă (1)** cu **CONFIRMAȚI ALERTELE**.

   ![ACK_alerts_2](../images/DASH_images/ACK_Alerts/ACK_ALERTS_2.png)

3. La **dezactivarea cu succes** a alertelor, **2 semnale de sonore** vor fi emise de către dispozitivul activ și un dialog de confirmare va afișa mesajul **Alertele active au fost dezactivate**. Apăsați pe butonul **OK** pentru a confirma și a închide dialogul.

   ![ACK_alerts_3](../images/DASH_images/ACK_Alerts/ACK_ALERTS_3.png)

4. Mergeți la fila **DASH**. Sub câmpul **Alerte pompă activă**, mesajul de avertizare nu mai este afișat, iar pompa activă nu va mai emite semnale sonore legate de expirare.

(omnipod-dash-view-pod-history)=

### Vedeți istoricul pompei

Această secțiune explică modul de revizuire al istoricului pompei active și filtrarea după diferite categorii de acțiune. Instrumentul Istoric pompă vă permite să vizualizați acțiunile și rezultatele înregistrate pentru pompa dumneavoastră activă curent, pe parcursul celor trei zile (72 – 80 de ore) de viață ale acesteia.

Această funcție este utilă în verificarea bolusurilor, a RBT și a comenzilor bazale care au fost trimise către pompă. Restul categoriilor sunt utile pentru depanarea problemelor și pentru determinarea ordinii evenimentelor care au dus la o defecțiune.

***NOTĂ:** **Numai ultima comandă poate fi incertă**. Comenzile noi *nu vor fi trimise* până când comanda **nu va fi ultima 'incertă' devine 'confirmată' sau 'refuzată'**. Modul de a 'rezolva' comenzile incerte este de a **'reîmprospăta starea pompei'**.*

1. Mergeți la fila **DASH** și apăsați butonul **Gestionare pompă (1)** pentru a accesa meniul **Gestionare pompă** și apoi apăsați butonul **Istoric Pompă (2)** pentru a accesa ecranul istoricului de pompă.

   ![Pod_history_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)  
   ![Pod_history_2](../images/DASH_images/Pod_History/Pod_history_2.jpg)

2. Pe ecranul **Istoric pompă**, categoria implicită **Toate (1)** este afișată, afișează **Data și ora (2)** ale tuturor **Acțiunilor (3)** și **Rezultate (4)** în ordine cronologică inversă. Folosește de **2 ori** butonul **de înapoi** al telefonului tău pentru a te întoarce la fila **DASH** din interfața principală <0>AAPS</0>.

   ![Pod_history_3](../images/DASH_images/Pod_History/Pod_history_3.jpg) ![Pod_history_4](../images/DASH_images/Pod_History/Pod_history_4.jpg)

(omnipod-dash-tab)=

## Fila DASH

Mai jos este o explicație a aspectului și semnificației pictogramelor și a câmpurilor de stare din fila **DASH** din interfața principală AAPS.

***NOTĂ:** Dacă vreun mesaj din câmpurile de stare ale filei **DASH** raportează (incert), atunci va trebui să apăsați butonul Reîmprospătare pentru a șterge mesajul și a actualiza starea pompei.*

![DASH_Tab_1](../images/DASH_images/DASH_Tab/DASH_Tab_1.png)

### Câmpuri



- **Adresa Bluetooth:** Afișați adresa curentă Bluetooth a pompei conectate.

- **Stare Bluetooth:**  Afișați starea curentă a conexiunii.

- **Număr secvență:** Afișați numărul secvenței al pompei active.

- **Versiunea firmware:** Afișați versiunea de firmware pentru conexiunea activă.

- **Timpul pe pompă:** Afișați ora curentă de pe pompă.

- **Stare pompă:** Afișați starea pompei.

- **Ultima conexiune:** Afișați timpul ultimei comunicări cu pompa.

  - *Adineauri* - mai puțin de 20 de secunde în urmă.

  - *Cu mai puțin de un minut în urmă* - mai mult de 20 de secunde, dar mai puțin de 60 de secunde în urmă.

  - *Acum 1 minut* - mai mult de 60 de secunde, dar mai puțin de 120 de secunde (2 minute)

  - *XX minute în urmă* - mai mult de 2 minute în urmă așa cum este definit de valoarea XX

- **Ultimul bolus:** Afișați cantitatea ultimului bolus trimis către pompa activă și cu cât timp în urmă a fost emis în paranteză.

- **Rată bazală de bază:** Afișați rata bazală programată pentru timpul curent din profilul ratei bazale.

- **Rata bazalei temporare:** Afișați rata bazală temporară care rulează în prezent în următorul format
  - {Unități pe oră} @{timp de început RBT} ({minute rulate}/{total minute în care va fi rulat RBT})

  - Exemplu: * 0,00U/h @18:25 ( 90/120 minute)

- **Rezervor:** Afișați peste 50+U rămase atunci când mai mult de 50 de unități au rămas în rezervor. Sub 50 U, unitățile exacte sunt afișate.

- **Total livrat:** Afișați numărul total de unități de insulină livrate din rezervor. Acestea includ insulina utilizată pentru activare și amorsare.

- **Eroare:** Afișați ultima eroare întâlnită. Revizuiți [Istoricul de pompă](#omnipod-dash-view-pod-history) și fișierele de jurnal pentru erorile anterioare și informații mai detaliate.

- **Alerte active de pompă:** Rezervat pentru rularea alertelor pe pompa activă.



### Butoane

![Refresh_Icon](../images/DASH_images/Refresh_LOGO.png) Trimite comanda de reîmprospătare la pompa activă pentru a actualiza comunicarea.

  - *Folosiți pentru a reîmprospăta starea pompei și a închide câmpurile de stare care conțin textul (incert).*

  - *Vedeți secțiunea [Depanare](#omnipod-dash-troubleshooting) de mai jos pentru informații suplimentare.*

![POD_MGMT_Icon](../images/DASH_images/POD_MGMT_LOGO.png)   Navigare la meniul de gestionare pompă.

![ack_alert_logo](../images/DASH_images/ack_alert_logo.png) Când este apăsat acesta va dezactiva alertele sonore ale pompei și notificările (expirare, rezervor scăzut..).

  - *Butonul este afișat numai atunci când timpul pompei e trecut de timpul de avertizare al expirării.*
  -  *După închiderea cu succes, această pictogramă nu va mai apărea.*

![RESUME_Icon](../images/DASH_images/DASH_tab_icons/RESUME_Icon.png)    Reluați livrarea administrării curente de insulină în pompa activă.



### Meniu Gestionare Pompă

Mai jos este descris scopul fiecărei pictograme din meniul **Gestionare pompă**, accesat prin apăsarea butonului **Gestionare pompă (1)** din fila **DASH**.

![DASH_Tab_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)

![DASH_Tab_3](../images/DASH_images/DASH_Tab/DASH_Tab_3.png)

**Tabelul de mai jos descrie fiecare buton și funcția sa:**

| Buton | Funcție                                                                                                 |
| ----- | ------------------------------------------------------------------------------------------------------- |
| 1     | Accesați setările Gestionare pompă                                                                      |
| 2     | [**Activați pompa**](#omnipod-dash-activate-pod): Amorsează și activează o nouă pompă.                  |
| 3     | [**Dezactivați pompa**](#omnipod-dash-deactivate-pod): Dezactivează pompa activă în prezent.            |
| 4     | **Redați semnal sonor** : Redă un singur semnal sonor de test pe pompă atunci când este apăsat.         |
| 5     | [**Istoricul de pompă**](#omnipod-dash-view-pod-history) : Afișați istoricul activității pompei active. |


(omnipod-dash-settings)=

## Setări Dash

The Dash driver settings are configurable from the top-left hand corner **hamburger menu** under **Config Builder (1)** ➜ **Pump**  **Dash** ➜ **Settings Gear (3)** by selecting the **radio button (2)** titled **Dash**. Selecting the **checkbox (4)** next to the **Settings Gear (3)** will allow the Dash menu to be displayed as a tab in the **AAPS** interface titled **DASH**.

![Dash_settings_1](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)

***NOTE:** A faster way to access the **Dash settings** is by accessing the **3 dot menu (1)** in the upper right hand corner of the **DASH** tab and selecting **Dash preferences (2)** from the dropdown menu.*

![Dash_settings_3](../images/DASH_images/Dash_settings/Dash_settings_3.png)

The settings groups are listed below; you can enable or disable via a toggle switch for most entries described below:

***NOTE:** An asterisk (\*) denotes the default setting is enabled.*

### Confirmation beeps

![Dash_settings_4](../images/DASH_images/Dash_settings/Dash_settings_4.jpg)

Provides confirmation beeps from the pod for bolus, basal, SMB, and TBR delivery and changes.

**Bolus beeps enabled:**    Enable or disable confirmation beeps when a bolus is delivered.

**Basal beeps enabled:**    Enable or disable confirmation beeps when a new basal rate is set, active basal rate is canceled or current basal rate is changed.

**SMB beeps enabled:**  Enable or disable confirmation beeps when a SMB is delivered.

**TBR beeps enabled:**  Enable or disable confirmation beeps when a TBR is set or canceled.



### Alerts

![Dash_settings_5](../images/DASH_images/Dash_settings/Dash_settings_5.jpg)

Provides **AAPS** alerts for pod expiration, shutdown, low reservoir based on the defined threshold units.

***NOTE:** an AAPS notification will ALWAYS be issued for any alert after the initial communication with the pod since the alert was triggered. Dismissing the notification will NOT dismiss the alert UNLESS automatically acknowledge Pod alerts is enabled. To MANUALLY dismiss the alert you must visit the **DASH** tab and press the **Silence ALERTS button**.*

**Expiration reminder enabled:**    Enable or disable the pod expiration reminder set to trigger when the defined number of hours before shutdown is reached.

**Hours before shutdown:**  Defines the number hours before the active pod shutdown occurs, which will then trigger the expiration reminder alert.

**Low reservoir alert enabled:**    Enable or disable an alert when the pod's remaining units low reservoir limit is reached as defined in the Number of units field.

**Number of units:**    The number of units at which to trigger the pod low reservoir alert.



### Notifications

![Dash_settings_6](../images/DASH_images/Dash_settings/Dash_settings_6.jpg)

The Notification section allows the user to select their preferred notifications and audible phone alerts when AAPS is uncertain about the status of TBR, SMB, or bolus, and when delivery suspended events were successful.

***NOTE:** These are notifications only, no audible beep alerts are made.*

**Sound for uncertain TBR notifications enabled:**  Enable or disable this setting to trigger an audible alert and visual notification when **AAPS** is uncertain if a TBR was successfully set.

**Sound for uncertain SMB notifications enabled:**  Enable or disable this setting to trigger an audible alert and visual notification when **AAPS** is uncertain if an SMB was successfully delivered.

**Sound for uncertain bolus notifications enabled:**    Enable or disable this setting to trigger an audible alert and visual notification when **AAPS** is uncertain if a bolus was successfully delivered.

**Sound when delivery suspended notifications enabled:**    Enable or disable this setting to trigger an audible alert and visual notification when suspend delivery was successfully delivered.

## Actions (ACT) Tab

This tab is well documented in the main **AAPS** documentation but there are a few items on this tab that are specific to how the DASH differs from tube based pumps, especially after the processes of applying a new pod.

1. Go to the **Actions (ACT)** tab in the main **AAPS** interface.

2. Under the **Careportal (1)** section the **Insulin** and **Cannula** fields will have their **age reset** to 0 days and 0 hours **after each pod change**. This is done because of how the Omnipod pump is built and operates. Since the pod inserts the cannula directly into the skin at the site of the pod application, a traditional tube is not used in Omnipod pumps. *Therefore after a pod change the age of each of these values will automatically reset to zero.* **Pump battery age** is not reported as the battery in the pod will always be more than the life of the pod (maximum 80 hours). The **pump battery** and **insulin reservoir** are self contained inside of each pod.

   ![ACT_1](../images/DASH_images/Actions_Tab/ACT_1.png)

### Level

**Insulin Level**

Insulin level displayed is the amount reported by DASH. However, the pod only reports the actual insulin reservoir level when it is below 50 units. Until then “Above 50 units” will be displayed. The amount reported is not exact: when the pod reports ‘empty’ in most cases the reservoir will still have some additional units of insulin left.

The DASH overview tab will display as described the below:

  * **Above 50 Units** - The pod reports more than 50 units currently in the reservoir.
  * **Below 50 Units** - The amount of insulin remaining in the reservoir as reported by the Pod.

Notă suplimentară:
  * **SMS** - Returnează valoarea sau 50+U pentru răspunsuri SMS
  * **Nightscout** - Încarcă în Nightscout valoarea de 50 atunci când sunt peste 50 de unități (versiunea 14.07 și mai vechi).  Newer versions will report a value of 50+ when over 50 units.

(omnipod-dash-troubleshooting)=

## Depanare

(omnipod-dash-delivery-suspended)=

Prezenta secțiune se referă la problemele comune cunoscute și la soluțiile pentru utilizarea Omnipod DASH împreună cu AAPS. Există, de asemenea, secțiunea [Depanare generală](../GettingHelp/GeneralTroubleshooting.md) în documentație care ar trebui să fie reluată deoarece acoperă subiecte relevante și pentru unele probleme specifice pompei Omnipod.

---

(omnipod-dash-bluetooth-related-issues)=

## **Probleme legate de Bluetooth**

Pentru probleme cunoscute cu conexiunile Bluetooth, întreruperile pompei, activarea și problemele de conexiune [Depanarea Bluetooth](../GettingHelp/BluetoothTroubleshooting.md)

---
### Administrarea insulinei suspendată

  - Nu mai există niciun buton de suspendare. Dacă doriți să "suspendați" pompa, puteți seta o **RBT** zero pentru x minute.
  - În timpul **Comutării de profil**, DASH trebuie să suspende administrarea înainte de a seta noul **profil** bazal. Dacă comunicarea nu reușește între cele două comenzi, atunci administrarea poate rămâne suspendată. Când se întâmplă acest lucru:
     - Nu va fi nicio administrare a insulinei, nici bazală, SMB, bolusare manuală șamd.
     - Este posibil să existe notificări că una dintre comenzi este neconfirmată: acest lucru depinde de când a avut loc eșecul.
     - **AAPS** va încerca să seteze noul profil bazal la fiecare 15 minute.
     - **AAPS** va afișa o notificare care va informa că administrarea este suspendată la fiecare 15 minute, dacă administrarea este încă suspendată (reluarea administrării a eșuat).
     - Butonul [**Reluați administrarea**](#omnipod-dash-resuming-insulin-delivery) va fi activ dacă utilizatorul alege să reia administrarea manual.
     - Dacă **AAPS** nu reia singur administrarea (acest lucru se întâmplă dacă pompa nu este accesibilă, sunetul este dezactivat, șamd), pompa va începe să emită semnale sonore de 4 ori pe minut timp de 3 minute; se repetă la fiecare 15 minute, dacă administrarea este încă suspendată timp de peste 20 de minute.
  - Pentru comenzile neconfirmate, "Reîmprospătare stare pompă" ar trebui să le confirme/infirme.

*****NOTĂ:** Când auziți semnale sonore de la pompă, nu presupuneți că administrarea va continua fără a verifica telefonul, administrarea poate rămâne suspendată, ***așa că trebuie să verificați!******

---
### Eșecuri pompă

- Pods fail occasionally due to a variety of issues, including hardware issues with the Pod itself.
- It is best practice not to raise support / replacement cases with Insulet, since AAPS is not an approved method of using the Pods.
- A list of fault codes can be [**found here**](https://github.com/openaps/openomni/wiki/Fault-event-codes) to help determine the cause.

---
### Preventing error 49 pod failures

This failure is related to an incorrect pod state for a command or an error during an insulin delivery command. This is when the driver and Pod disagree on the actual state. The Pod (out of a built-in safety measure) then reacts with an unrecoverable error code 49 (0x31) ending up with what is know as a “screamer”: the long irritating beep that can only be stopped by punching a hole at the appropriate location at the back of the Pod. The exact origin of a “49 pod failure” often is hard to trace. In situations that are suspected for this failure to occur (for instance on application crashes, running a development version or re-installation).

---

### Pump Unreachable Alerts

When no communication can be established with the pod for a pre-configured time a “Pump unreachable” alert will be raised. Pump unreachable alerts can be configured by going to the top right-hand side three-dot menu, selecting **Preferences** ➜ **Local Alerts** ➜ **Pump unreachable threshold [min]**. Recommended value is alerting after **120** minutes.

---
### Export  Settings

Exporting **AAPS** settings enables you to restore all your settings, and maybe more importantly, all your Objectives. You may need to restore settings to the “last known working situation” or after uninstalling/reinstalling **AAPS** or in case of phone loss, reinstalling on the new phone.

***NOTE:** The active pod information is included in the exported settings. If you import an "old" exported file, your actual pod will "die". There is no other alternative. In some cases (like a _programmed_ phone change), you may need to use the exported file to restore **AAPS'** settings **while keeping the current active Pod**. In this case it is important to only use the recently exported settings file containing the pod currently active.*

**It is good practice to do an export immediately after activating a pod**. This way you will always be able to restore the current active pod in case of a problem. For instance when moving to another backup phone.

Regularly (after each export preferably) copy your exported settings to a safe place (a cloud drive e.g. Google Drive) that is accessible by any phone when needed. This allows you to restore to a phone from anywhere in case of a phone loss or factory reset of your phone while you are not at home.

---
### Import Settings

**WARNING**: Please note that importing settings will possibly import an outdated Pod status (depending when you made the last export/backup).  
As a result, there is a **risk of losing the active Pod!** (see **Exporting Settings**).
1. Only try an import when no other options are available.
2. When importing settings with an active Pod, make sure the export was done with the currently active pod.

**Importing while on an active Pod:** (you risk losing the Pod!)

1. **Make sure you are importing settings that were recently exported with the currently active Pod!**
2. Import your settings.
3. Check all preferences.

**Importing (no active Pod session)**

1. Importing any recent export should work (see above)
2. Import your settings.
3. Check all preferences.
4. You may need to **Deactivate** the "non existing" pod if the imported settings included any active pod data.

---
### Importing settings that contain Pod state from an inactive Pod

When importing settings containing data for a Pod that is no longer active, AAPS will try to connect with it, which will obviously fail. You can not activate a new Pod in this situation.

To remove the old pod session:
1. “try” to de-activate the Pod. The de-activation will likely fail.
2. Select “Retry”.
3. After the second or third retry you will get the option to remove the pod.
4. Once the old pod is removed you will be able to activate a new pod.

### Generic error: java.lan.illegalStateException: Trying to set a Bluetooth Address to ***, but it is already set to ***.

If you receive this error when attempting to Initialize a new pod **AAPS** fails as it still has settings for an old pod stored in configuration.

![omnipod_address_in_use](../images/DASH_images/Errors/omnipod_address_in_use.png)

This can happen if you restore from a backup, or a pod deactivation fails.

To resolve keep clicking on `RETRY` until a `Discard` option is shown, then discard. This procedure should work for De-Activating a pod too.

You should now be able to Activate a new pod.

---
### Reinstalling AAPS

When uninstalling **AAPS** you will lose all your settings, objectives and the current Pod session. **To restore them make sure you have a recent exported settings file available!**

When on an active Pod, make sure that you have an export for the current pod session or you will lose the currently active pod when importing older settings.

1. Export your settings and store a copy in a safe place (e.g Google Drive).
2. Uninstall **AAPS** and restart your phone.
3. Install the new version of **AAPS**.
4. Import your settings.
5. Verify all preferences (optionally import settings again).
6. Activate a new pod.
7. When done: Export current settings.

---
### Updating AAPS to a newer version

In most cases there is no need to uninstall. You can do an “in-place” install by starting the installation for the new version. This is also possible when on an active Pod session.

1. Export your settings.
2. Install the new **AAPS** version.
3. Verify the installation was successful
4. RESUME the Pod or activate a new pod.
5. When done: Export current settings.

---
### Omnipod driver alerts

The Omnipod Dash driver presents a variety of unique alerts on the **Overview tab**, most of them are informational and can be dismissed while some provide the user with an action requiring their input to resolve the cause of the triggered alert.

A summary of the main alerts that you may encounter is listed below:

- No active Pod session detected. This alert can temporarily be dismissed by pressing **SNOOZE** but it will keep triggering as long as a new pod has not been activated. Once activated this alert is automatically silenced.
- Pod suspended Informational alert that pod has been suspended.
- Setting basal **Profile** failed : Delivery might be suspended! Please manually refresh the Pod status from the Omnipod tab and resume delivery if needed.. Informational alert that the Pod basal **Profile** setting has failed, and you will need to hit *Refresh* on the Omnipod tab.
- Unable to verify whether **SMB** bolus succeeded. If you are sure that the Bolus didn't succeed, you should manually delete the SMB entry from Treatments. Alert that the **SMB** bolus command success could not be verified, you will need to verify the *Last bolus* field on the DASH tab to see if **SMB** bolus succeeded and if not remove the entry from the Treatments tab.
- Uncertain if "task bolus/TBR/SMB" completed, please manually verify if it was successful.

(omnipod-dash-where-to-get-help-for-dash)=

## Where to get help for DASH

All of the development work for the DASH is done by the community on a **volunteer** basis; please keep this in mind and use the following guidelines before requesting assistance:

-  **Level 0:** Read the relevant section of this documentation to ensure you understand how the functionality with which you are experiencing difficulty is supposed to work.
-  **Level 1:** If you are still encountering problems that you are not able to resolve by using this document, then please go to the *#AAPS* channel on **Discord** by using [this invite link](https://discord.gg/4fQUWHZ4Mw). There are also numerous Facebook and other groups you can ask in too (see [**Getting Help**](../GettingHelp/WhereCanIGetHelp.md))
-  **Level 2:** Search existing issues to see if your issue has already been reported at [Issues](https://github.com/nightscout/AndroidAPS/issues) if it exists, please confirm/comment/add information on your problem. If not, please create a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach [your log files](../GettingHelp/AccessingLogFiles.md).
-  **Be patient - most of the members of our community consist of good-natured volunteers, and solving issues often requires time and patience from both users and developers.**

When requesting help come prepared with the following information to help those in the community with your specific questions and problems:
- Android phone make and model
- Android OS version (e.g 15 or 16)
  - Did you recently upgrade your Android OS version?
- The version of **AAPS** you are running
- Plain english description of the problem you are facing considering some of the following things
   - Was it working before now?
   - When did it work or not work?
   - Did you make any changes to configuration or profile settings?
   - Did you pair a new bluetooth device?
   - Did you upgrade or install a new app?
   - How long was it working before it stopped working?
