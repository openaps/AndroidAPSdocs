# Glossari

**AAPS** = AndroidAPS és el nom de l'aplicació d'Android.

**AAPSClient** = l'aplicació de seguiment per a cuidadors. En un telèfon seguidor, segueix l'**AAPS** de l'usuari a través del lloc **Nightscout** de l'usuari i, un cop emparellada amb el telèfon d'**AAPS**, el controla a distància. No s'ha de confondre amb **NSClient**. Més informació → [Wiki - «L'aplicació AAPSClient»](../RemoteFeatures/AapsClient.md) i [Control principal ↔ client](#client-master-control).

**Activitat** (activity) = activitat de la insulina; representa la velocitat amb què baixa l'IOB. Vegeu [Wiki - «DIA»](#Config-Builder-insulin-dia) i el terme relacionat **BGI**.

**AID** = Automated Insulin Delivery (lliurament automàtic d'insulina). El terme que s'utilitza normalment en la pràctica clínica i en la recerca per a un sistema que ajusta automàticament el lliurament d'insulina amb dades del **CGM**. **APS** i **llaç tancat** volen dir el mateix → vegeu també **OS-AID**.

**APS** = Artificial Pancreas System (sistema de pàncrees artificial) → vegeu també **AID**.

**AMA** = Advanced Meal Assist (assistència avançada per als àpats). Un algoritme que permet a **AAPS** augmentar la basal de l'usuari de manera més agressiva després d'un bolus d'àpat. Més informació → [Wiki - «Advanced Meal Assist (AMA)»](#Open-APS-features-advanced-meal-assist-ama).

**Factor d'ajust** (adjustment factor) = s'utilitza a l'**ISF dinàmic** i és un valor que l'usuari defineix a la **Configuració**, entre l'1% i el 300%. Actua com un multiplicador sobre el valor de la **TDD**. Vegeu [Wiki - Factor d'ajust de l'ISF dinàmic](#dyn-isf-adjustment-factor)

**Android Auto** = un sistema que mostra algunes funcions d'un telèfon Android, entre elles **AAPS**, a la pantalla d'un cotxe. Més informació → [Wiki - «Android Auto»](../RemoteFeatures/AndroidAuto.md).

**APK** = Android application Package (paquet d'aplicació d'Android). Un fitxer per instal·lar programari. Més informació → [Wiki - «Compilar AAPS»](../SettingUpAaps/BuildingAaps.md).

**Autosens** = càlcul de la sensibilitat a la insulina en una finestra de 24 hores i de 8 hores, etc. Més informació → [DIABETTECH - **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = plataforma de computació al núvol per allotjar l'aplicació web **Nightscout** → vegeu també **Nightscout**.

**BAT** = llum d'estat de pila de la bomba baixa, que es mostra a la fila d'estat de la pantalla principal d'**AAPS** → vegeu també **CAN** / **RES** / **SEN**.

**BG** = blood glucose (glucèmia).

**BGI** = blood glucose impact (impacte en la glucèmia). Quant «hauria» de pujar o baixar la **BG** només per l'activitat de la insulina.

**Origen glucèmia** (BG source) = una opció d'AAPS per configurar d'on venen les dades de glucèmia. Vegeu [Wiki - Origen glucèmia](#Config-Builder-bg-source)

**Pont** (bridge) = un dispositiu addicional que converteix un **FGM** en un **CGM**.

**BR** = Basal Rate (taxa basal). La quantitat d'insulina en un bloc de temps determinat per mantenir la **BG** estable. → vegeu també **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App (compileu la vostra pròpia aplicació Dexcom). Una manera de generar la vostra pròpia aplicació Dexcom per llegir les dades del sensor Dexcom G6.

**CAGE** = Cannula AGE (edat de la cànula). Es mostra a la pantalla principal d'**AAPS** i a Nightscout, segons les entrades **Encebar** del Portal de cures que fa l'usuari → vegeu també **Nightscout**.

**CAN** = llum d'estat de canvi de cànula endarrerit, que es mostra a la fila d'estat de la pantalla principal d'**AAPS** → vegeu també **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor (monitor continu de glucosa) → vegeu també **FGM**.

**Llaç tancat** (closed loop) = un sistema de llaç tancat que ajusta automàticament el lliurament de basal de l'usuari segons l'algoritme d'**AAPS** i la configuració del **perfil** de l'usuari, sense demanar-li aprovació. Més informació → [Wiki - «Llaç tancat»](#KeyAapsFeatures-ClosedLoop) i vegeu també **HCL** / **FCL**.

**COB** = Carbs On Board (carbohidrats a bord). És la quantitat de carbohidrats que l'usuari encara està digerint → vegeu també IOB.

**CSF** = Carbs Sensitivity Factor (factor de sensibilitat als carbohidrats). És a dir, quant puja la **BG** de l'usuari per cada 1 g de carbohidrats absorbits.

**DIA** = Duration of Insulin Action (durada de l'acció de la insulina). Més informació → [Wiki - «DIA»](#Config-Builder-insulin-dia) i vegeu també → [DIABETTECH - «DIA»](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = Daylight Saving Time (horari d'estiu). Vegeu [Wiki - Canvi de fus horari i horari d'estiu](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**ISF dinàmic (o DynISF)** = una funció d'**AAPS** que adapta de manera dinàmica el factor de sensibilitat a la insulina (**ISF**) segons la **TDD** i la **BG** de l'usuari.

**eCarbs** = extended Carbs (carbohidrats estesos). Carbohidrats repartits en diverses hores (p. ex. per cobrir greixos i proteïnes), que permeten a **AAPS** repartir la insulina com un bolus estès. Més informació → [Wiki - «Carbohidrats estesos / e-carbs»](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop (llaç tancat complet). Un llaç que no necessita cap informació de l'usuari als àpats: no cal comptar carbohidrats ni posar bolus d'àpat. Més informació → [Wiki - «Llaç tancat complet»](../AdvancedOptions/FullClosedLoop.md) i vegeu també **HCL**.

**FGM** = Flash Glucose Monitor (monitor flash de glucosa), com el Freestyle Libre d'Abbott. Més informació → [Wiki - «Origen glucèmia»](#Config-Builder-bg-source) i vegeu també «CGM».

**git** = una eina per desar i descarregar el codi font d'**AAPS**.

**GitHub** = un servei web que allotja el codi font d'**AAPS** i el seu control de versions (seguiment dels canvis als fitxers i coordinació de la feina, sobretot en equip), i que també pot compilar l'aplicació. També és necessari per a les actualitzacions de l'**APK**. Més informació → [Wiki - «Actualitzar a una nova versió o branca»](../Maintenance/UpdateToNewVersion.md).

**Glimp** = una aplicació per recollir valors del Freestyle Libre.

**HCL (o llaç tancat híbrid)** = un llaç que automatitza el lliurament d'insulina entre àpats, però l'usuari encara ha de posar el bolus dels àpats. Gairebé tots els sistemes d'ús diari, inclòs **AAPS**, són llaços tancats híbrids → vegeu també **FCL** / **Llaç tancat**.

**IC (I:C, ICR, CR, carb ratio)** = ràtio insulina:carbohidrats. Tingueu en compte que, per convenció, s'expressa en g/U, encara que l'acrònim faci pensar en l'invers.

**IOB** = Insulin On Board (insulina a bord). La insulina activa al cos de l'usuari. Vegeu [Wiki - Insulina a bord](#aaps-screens-iob)

**ISF** = Insulin Sensitivity Factor (factor de sensibilitat a la insulina). La baixada esperada de la glucèmia per efecte d'una unitat d'insulina. La unitat és mg/dl/U o mmol/l/U. No són equivalents sense fer una conversió!

**Magatzem de claus (keystore o JKS)** = un Java Key Store, un fitxer xifrat on es desen els vostres certificats i claus personals de desenvolupador, necessaris per compilar (i tornar a compilar) **AAPS**.

**LGS** = Low Glucose Suspend (suspensió per glucèmia baixa). Vegeu [Wiki - Suspensió per glucèmia baixa](#KeyAapsFeatures-LGS)

**LineageOS** = sistema operatiu lliure i de codi obert per a telèfons intel·ligents, etc. Si feu servir Accu-Chek Combo, vegeu [Wiki - Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Fitxers de registre** (log files) = els registres de les accions de l'usuari que desa **AAPS** (útils per resoldre problemes i depurar errors). Més informació → [Wiki - «Accés als fitxers de registre»](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = IOB total màxim. És una funció de seguretat que evita que **AAPS** lliuri insulina per sobre de la configuració de l'usuari. Més informació → [Wiki - «IOB total màxim que OpenAPS no pot superar»](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = funció de seguretat que calcula una absorció de carbohidrats per defecte quan l'absorció no es pot determinar a partir de la resposta de la glucèmia de l'usuari. Més informació → [Wiki - «min_5m_carbimpact»](#Preferences-min_5m_carbimpact).

**Nightscout** = projecte de codi obert per consultar i compartir dades del **CGM**. El centre de dades principal per a les dades d'**AAPS** de l'usuari; pot generar informes per veure les dades històriques de **Nightscout** de l'usuari, com l'HbA1c prevista, el temps en rang, o buscar patrons a les dades amb un gràfic de percentils, etc.

**Nightscout** → vegeu també **Nightscout Reporter**. És especialment útil per als pares que segueixen la gestió de la diabetis del seu fill o filla.

**Nightscout Reporter Tool** = una eina que genera informes en PDF a partir de les dades de l'aplicació web Nightscout. Vegeu «Nightscout Reporter», «NS Reporter» a Facebook.

**NSClient** (**NSClientV3**) = el plugin d'**AAPS** que sincronitza dades amb **Nightscout** (**Configurador** → **Comunicació**). No és el mateix que **AAPSClient**, l'aplicació de seguiment. Més informació → [Wiki - «NSClient»](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System (sistema de pàncrees artificial obert), el projecte anterior i la base d'AAPS.

**Sistema de llaç obert** (open loop) = una funció d'**AAPS** que recomana ajustos, que l'usuari ha de fer manualment a **AAPS**. Més informació → [Wiki - «Llaç obert»](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = detecció de sensibilitat i «reference design implementation version 0/1» (implementació del disseny de referència, versió 0/1). És l'algoritme principal d'OpenAPS. Més informació → [Wiki - «Detecció de sensibilitat»](../DailyLifeWithAaps/SensitivityDetectionAndCob.md).

**OS-AID** = Open-Source Automated Insulin Delivery (lliurament automàtic d'insulina de codi obert). Un sistema **AID** fet amb programari de codi obert, com **AAPS**, **OpenAPS**, Loop o Trio. Aquests sistemes no estan aprovats oficialment per les autoritats sanitàries (FDA, NHS, etc.) → vegeu també **AID**.

**Temps del pic** (peak time) = el moment d'efecte màxim de la insulina administrada. Més informació → [Wiki - «Durada de l'acció de la insulina (DIA) i pic»](#Config-Builder-insulin-dia).

**PH** = Pump History (historial de la bomba). Es pot consultar a l'historial de tractaments d'**AAPS**: obriu el **menú** (☰) a la part superior esquerra de la pantalla principal i seleccioneu **Tractaments**.

**Prediccions** = prediccions de la **BG** futura basades en diferents càlculs. Més informació → [Wiki - «Línies de predicció»](#aaps-screens-prediction-lines).

**Perfil** = la configuració bàsica del tractament de l'usuari (taxa basal, **DIA**, **IC**, **ISF**, objectiu de **BG**). **AAPS** només fa servir perfils creats dins d'**AAPS** (**Gestionar** → **Perfil**), però els **perfils** de **Nightscout** es poden copiar (sincronitzar) a **AAPS**. Més informació → [Wiki - «El vostre perfil d'AAPS»](../SettingUpAaps/YourAapsProfile.md).

**Canvi de perfil** (profile switch) = canvi (temporal) del **perfil** de l'usuari a un altre **perfil** desat a **AAPS**.

**Percentatge del perfil** (profile percentage) = un augment o una reducció percentual (temporal) que s'aplica al **perfil** de l'usuari durant un període escollit.

**RES** = llum d'estat de canvi de reservori endarrerit, que es mostra a la fila d'estat de la pantalla principal d'**AAPS** → vegeu també **BAT** / **CAN** / **SEN**.

**RileyLink** = dispositiu de maquinari de codi obert que fa de pont entre Bluetooth Low Energy (BLE) i la comunicació sense fils a 916 MHz (per a bombes Medtronic antigues) o a 433 MHz (per a bombes Omnipod Eros).

**SAGE** = sensor age (edat del sensor). Es mostra a la pantalla principal d'**AAPS** i a **Nightscout**, segons les entrades **Inserció del sensor** del Portal de cures que fa l'usuari → vegeu també **Nightscout**.

**SEN** = llum d'estat de canvi de sensor endarrerit, que es mostra a la fila d'estat de la pantalla principal d'**AAPS** → vegeu també **BAT** / **CAN** / **RES**.

**Detecció de sensibilitat** (sensitivity detection) = càlcul de la sensibilitat a la insulina per efecte de l'esport, les hormones, etc. vegeu també → [DIABETTECH - «Autosens»](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Soroll del sensor** (sensor noise) = terme que descriu lectures inestables del **CGM** que fan que els valors de **BG** «saltin». Més informació → [Wiki - «Suavitzat de les dades de glucèmia»](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus. Una funció d'**AAPS** per lliurar insulina més de pressa i així ajustar la **BG**. Més informació → [Wiki - «**SMB**»](#Open-APS-features-super-micro-bolus-smb) i vegeu també **UAM**.

**Superbolus** = passar insulina basal a bolus per ajustar la **BG** més de pressa.

**TBB** = total base basal (basal total: suma de la taxa basal en 24 hores) → vegeu també **TBR** / **TDD**.

**TBR** = temporary basal rate (basal temporal) → vegeu també **TBB** / **TDD**.

**TDD** = total daily dose (dosi diària total: bolus + basal per dia) → vegeu també **TBB** / **TBR**.

**TT** = temporary target (objectiu temporal): augment o reducció temporal de l'objectiu (rang) de **BG** de l'usuari, p. ex. per menjar o fer esport. Més informació → [Wiki - «Objectius temporals»](../DailyLifeWithAaps/TempTargets.md).

**UAM** = unannounced meals (àpats no anunciats). Detecció d'una pujada important de la **BG** causada per àpats, adrenalina o altres factors, i intent d'ajustar-la. Més informació → [Wiki - «UAM»](#enable-uam) i vegeu també **SMB**.

**Bomba virtual** (virtual pump) = una funció d'**AAPS** que permet a l'usuari provar les funcions d'**AAPS**, o que permet a les persones amb diabetis que tenen una bomba sense controlador d'**AAPS** fer servir **AAPS** com a llaç obert → vegeu també **Sistema de llaç obert**.

**Fons de pantalla** (wallpaper) = imatge de fons d'**AAPS**; vegeu la pàgina de telèfons.

**xDrip** = programari de codi obert per llegir sistemes de **CGM**.

**Basal temporal zero** (zero-temp) = basal temporal al 0% (no es lliura insulina basal).

→ vegeu també [la documentació d'OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)