- - -
tocdepth: 1
- - -

# Actualitzacions i canvis de la documentació

## Octubre de 2026

- [Compilació al navegador amb AAPS Builder](#aaps-builder): versió 8 del workflow de compilació, ara mantingut pels desenvolupadors d'AAPS al repositori [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder). La configuració té un pas menys: el [pas 1](#aaps-builder-step1) de la [pàgina de configuració](#aaps-builder-setup) crea el vostre repositori privat com a còpia d'aquell repositori, amb el workflow de compilació ja inclòs, i per això ja no cal afegir cap workflow. A partir d'ara els passos de compilació s'actualitzen sols: el vostre repositori executa a cada compilació la versió publicada pels desenvolupadors d'AAPS, sense cap canvi per part vostra (i encara sense compilació automàtica). La compilació en si no canvia, i el vostre repositori actual continua funcionant. Per tenir aquestes actualitzacions automàtiques, substituïu una vegada el vostre `.github/workflows/build.yml` com s'explica a [Actualitzar AAPS](#aaps-builder-updates). El vostre secret `KEYSTORE_SET` es queda igual. El [pas de Google Drive](#aaps-builder-google-drive) opcional ara funciona a la mateixa pàgina de configuració, en un telèfon o en un ordinador: no cal cap fitxer de preparació @psonnera
- [Rellotges intel·ligents i AAPS](#watches-external-companion-apps): la secció **Samsung Tizen** passa a ser **Apps complementàries externes** i mostra les aplicacions que llegeixen el broadcast d'**AAPS** (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) 0.5 i posteriors es connecten directament a **AAPS** sense xDrip+: s'hi han afegit els passos de configuració, també resumits a [Configuració](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) i [Monitoratge remot](../RemoteFeatures/RemoteMonitoring.md). Rellotges Bluejay: el GTS ja no es fabrica, model actual actualitzat @psonnera
- [Compilació al navegador amb AAPS Builder](#aaps-builder): versió 6 del workflow de compilació. Els passos de compilació ara fan servir versions exactes i revisades de les eines i de la màquina de compilació de GitHub, i la compilació explica clarament quan s'ha enganxat un text incorrecte al secret `KEYSTORE_SET`. La [pàgina de configuració](#aaps-builder-setup) ara forma part de la documentació i està traduïda, comprova el vostre nom d'usuari de GitHub i té una ajuda més clara per al secret, per a «Page not found» (404) i per a l'aplicació de GitHub. Si el vostre `.github/workflows/build.yml` diu versió 5 o anterior, substituïu-lo com s'explica a [Actualitzar AAPS](#aaps-builder-updates) @psonnera
- [Instal·lador web d'AAPS](#web-installer): ara és una pàgina de la documentació, traduïda com les altres. L'adreça antiga encara funciona @psonnera
- [Compilació al navegador amb AAPS Builder](#aaps-builder): la versió 3 del workflow de compilació afegeix la variant `aapsclient3Release` (**AAPSClient3**, AAPS 4.0 i posteriors). Per compilar-la, substituïu el vostre `.github/workflows/build.yml` com s'explica a [Actualitzar AAPS](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): treta l'aplicació Dexcom G7 modificada (DiaKEM), que ja no funciona en instal·lacions noves @psonnera
- [Compilació al navegador amb AAPS Builder](#aaps-builder): versió 2 del workflow de compilació. Es treuen les compilacions setmanals automàtiques (sense programació, sense les variables `AUTO_BUILD` / `AUTO_VARIANT`, sense etiquetes `built/…`): cada compilació la inicieu vosaltres, amb la versió i la variant que trieu, i el workflow només té accés de lectura al vostre repositori. Si el vostre `.github/workflows/build.yml` diu versió 1, substituïu-lo com s'explica a [Actualitzar AAPS](#aaps-builder-updates). Afegides captures de pantalla per a cada pas @psonnera
- [Compilació al navegador amb AAPS Builder](#aaps-builder): el workflow de compilació ara forma part d'aquesta documentació. Sense repositori plantilla: creeu un repositori privat buit i hi afegiu el workflow des de la pàgina de configuració (nou pas 2). El workflow ja no comprova actualitzacions en un repositori extern. Si vau crear el vostre repositori a partir de la plantilla anterior, substituïu `.github/workflows/build.yml` pel workflow de la pàgina de configuració com s'explica a [Actualitzar AAPS](#aaps-builder-updates) @psonnera
- Pàgina nova [Compilació al navegador amb AAPS Builder](#aaps-builder): compileu AAPS des d'un telèfon Android amb una pàgina de configuració allotjada en aquest lloc, amb compilacions setmanals automàtiques i sense fitxer de preparació. Substitueix les instruccions per a Android de la compilació al navegador (s'han tret les pàgines de File Manager Plus). AAPS Builder creat per @dio99, documentació de @psonnera

## Agost de 2026

- [Transferir i instal·lar AAPS al vostre telèfon](../SettingUpAaps/TransferringAndInstallingAaps.md): la pàgina *Verificació de desenvolupadors d'Android* s'ha unit a la guia d'instal·lació, s'hi ha afegit l'[instal·lador web](#android-developer-verification-web) (instal·la l'APK directament des del navegador, sense verificació) i l'ADB sense fil @psonnera

## Juliol de 2026

- [Introducció a APS i AAPS](../Getting-Started/Introduction.md): revisió de l'exactitud de la secció APS. S'han corregit el títol i l'enllaç de la cita de Frontiers, s'ha presentat com a context i no com a guia actual del mercat, s'han actualitzat les afirmacions sobre el sistema bihormonal i el llaç tancat complet, s'ha aclarit que el controlador no sempre és una aplicació del telèfon, s'han tret els noms de marques comercials i les xifres d'usuaris sense font, i s'ha corregit OS-AID a *Open-Source Automated Insulin Delivery* @psonnera
- [Glossari](../UsefulLinks/Glossary.md): afegides les entrades **AID**, **FCL**, **HCL** i **OS-AID**, amb enllaços des d'**APS** i **Llaç tancat** @psonnera
- Pàgina nova [Verificació de desenvolupadors d'Android](#android-developer-verification): efecte del futur requisit de verificació de Google en la instal·lació d'aplicacions compilades per un mateix, amb maneres gratuïtes d'instal·lar (ADB, procés avançat, compte de distribució limitada) @psonnera

## Juny de 2026

- [Compilació al navegador](#browser-build): reorganitzada en un procés de diverses pàgines que comença per la decisió (Fork → magatzem de claus Opció 1/Opció 2 amb una pàgina pròpia per a cada dispositiu → Google Drive → Compilació → Resolució de problemes); tretes les pestanyes niuades, i la instal·lació de File Manager Plus ara és un pas ben visible @psonnera
- [Introducció a APS i AAPS](../Getting-Started/Introduction.md): la terminologia passa de *DIY* a *OS-AID* (Open-Source Automated Insulin Delivery), s'hi han afegit Trio i Stelo, i s'ha actualitzat la taula de compatibilitat de bombes/CGM @tmhastings

## Març de 2026

- [Afegida l'opció de compilació des de la línia d'ordres](../SettingUpAaps/CLIBuild.md) @je-l
- *Compilació a l'ordinador* passa a dir-se *Compilació amb Android Studio*. Es mantenen els noms dels fitxers per a les URL.

## Gener de 2025

- Versió [3.4](#version3400) i recull d'actualitzacions de la documentació (Assistent, versions de la compilació a l'ordinador, Configurador)
- Actualització de la llista de CGM. Trets Dexcom G5, Tomato i Glimp.
- [Interfície de rotació de punts d'inserció](#Aapsscreens-site-rotation)
- [Mode de funcionament](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## Desembre de 2025

- [Ajustar el perfil d'AAPS](../GettingHelp/ProfileTuning.md), de @robrub

## Octubre de 2025

- DiaKEM: les instal·lacions noves no funcionen després de l'actualització dels servidors @psonnera
- Tret el Libre 2 amb aplicació modificada (obsolet): no funciona amb els sensors nous @psonnera
- Pàgina d'Omnipod DASH refeta @XiTatiON

## Agost de 2025

- Versions i requisits d'Android Studio actualitzats
- Afegida la versió [3.3.2.1](#version3321), tretes les referències a Android 16 (corregit)
- Afegida la [Compilació al navegador](#browser-build) @Angus

## Maig de 2025

- Afegida la [pàgina d'actualització a 3.2.0.4](#update-aaps-3204) @psonnera

## Gener de 2025

- Assistent ràpid: [funció de prémer llargament](#Preferences-quick-wizard) @emilise
- Pàgina [ISF dinàmic](../DailyLifeWithAaps/DynamicISF.md) reescrita @emilise

## Desembre de 2024

- Documentació de la [versió 3.3](#version3300) @emilise

## Novembre de 2024

- Actualització d'[El vostre perfil d'AAPS](../SettingUpAaps/YourAapsProfile.md) @emilise
- Reorganització del contingut de [Rellotges intel·ligents Wear OS](../WearOS/BuildingAapsWearOS.md) @psonnera

## Octubre de 2024

- Actualització de diverses pàgines:
  - [Quant de temps cal?](#preparing-how-long-will-it-take), [Visió general dels components](../Getting-Started/ComponentOverview.md), [Completar els objectius](../SettingUpAaps/CompletingTheObjectives.md), [El vostre perfil d'AAPS](../SettingUpAaps/YourAapsProfile.md), [Configurador (Config Builder)](../SettingUpAaps/ConfigBuilder.md) i [Configuració](../SettingUpAaps/Preferences.md), [Pantalles d'AAPS](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [Càlcul del COB](../DailyLifeWithAaps/CobCalculation.md), [ISF dinàmic](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Instruccions de compilació per a Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Treball tècnic (procés de publicació de la documentació, organització dels fitxers...) @psonnera i @emilise

***

Falta l'historial de març de 2022 a setembre de 2024

Amb la revisió per a la versió 3.2, s'ha tret informació obsoleta. La trobareu a la versió anterior de la documentació:

La documentació d'AAPS 3.1 està disponible [aquí](https://androidaps.readthedocs.io/en/3.1/index.html).

***

```{dropdown} Older updates (2019 to 2022)
**Febrer de 2022**

- [Senyal d'avís de qualitat de la glucèmia](#aaps-screens-bg-warning-sign) @tanja
- [Actualització de les bombes Medtronic](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Comprovacions necessàries després d'actualitzar a AAPS 3.0](Update3_0.md) @tanja
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Documentació actualitzada per a AAPS 3.0 (en part) @xJoe
- [Wear OS per a AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

**Gener de 2022**

- [Resolució de problemes d'Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) - actualització @tanja

**Desembre de 2021**

- [Compilar l'APK](../SettingUpAaps/BuildingAaps.md) - actualització a Android Studio Arctic Fox | 2020.3.1 @tanja
- Afegida informació sobre la [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) @MilosKozak

**Novembre de 2021**

- Bones pràctiques per calibrar un sensor Libre 2
- [ISF](../UsefulLinks/FAQ.md): nova explicació de l'efecte
- Actualització de [Resolució de problemes d'Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- Treta l'aplicació [Dexcom](../CompatibleCgms/DexcomG6.md) modificada perquè és obsoleta

**Octubre de 2021**

- [Notes de la versió](ReleaseNotes.md) AAPS 3.0 beta

**Setembre de 2021**

- Especificacions recomanades de l'ordinador per [compilar l'aplicació AAPS](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

**Juny de 2021**

- [Instal·lar watchfaces manualment (sideload)](../WearOS/WearOsSmartwatch.md)

**Abril de 2021**

- Llista de [dispositius de comunicació](#CompatiblePumps-additional-communication-device) per a les bombes Omnipod i Medtronic
- Prediccions d'AAPS a [Nightscout](#Nightscout-manual-nightscout-setup)

**Març de 2021**

- La comunicació dels desenvolupadors passa de gitter a [discord](https://discord.gg/4fQUWHZ4Mw)

**Febrer de 2021**

- Nova barra de navegació i [canvi d'idioma](../NavigateDoc/ChangeLanguageVersion.md)

**Gener de 2021**

- [Pestanya Accions](#screens-action-tab) - més detalls a la pàgina «Pantalles d'AAPS»
- Dexcom G6 amb [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- [Nivell de bateria](#screens-sensor-level-battery) del lector intel·ligent Libre
- [Objectius](#objectives-objective3) - preguntes noves
- Altres [funcions noves d'AAPS 2.8.0](#Releasenotes-version-2-8-0)

**Desembre de 2020**

- [Libre 2](../CompatibleCgms/Libre2.md) - l'aplicació modificada no funciona amb sensors dels EUA
- [Límits fixos d'OpenAPS](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3: instal·lació manual de Google Play Services

**Octubre de 2020**

- Accu-Chek Combo - actualització de [l'ajust de l'hora per l'horari d'estiu](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight - opció per [enviar valors absoluts](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Registres - més detalls sobre la [ubicació de la carpeta](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros - actualització de l'estat
- [Ordres SMS - sincronització de l'hora](../RemoteFeatures/SMSCommands.md)

**Setembre de 2020**

- Gran actualització per a la nova versió d'AAPS 2.7
- Per a més detalls, vegeu les [notes de la versió](#Releasenotes-version-2-7-0)

**Juny de 2020**

- Libre 2 - més detalls sobre l'aplicació Libre Link modificada i l'ús de transmissors Bluetooth
- [Viatjar amb canvi de fus horari](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) amb Libre 2

**Maig de 2020**

- [Bolus estès només per a les bombes Dana i Insight](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Desactivar la vibració de la Insight](#Accu-Chek-Insight-Pump-vibration) (només firmware 3.x)
- [Canvi mínim de la petició](#Preferences-minimal-request-change) per reduir el nombre d'avisos en mode de llaç obert
- Aplicació Libre Link modificada - comprovar si està ben modificada
- [Línies de predicció](#aaps-screens-prediction-lines) - més detalls

**Abril de 2020**

- Registrar insulina amb data anterior (p. ex. posada amb xeringa)
- La propera versió master deixarà de donar suport a Android 6

**Març de 2020**

- [Compilar l'apk amb Android Studio 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [La DanaRS amb firmware v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **ara mateix no es pot fer servir amb AAPS!**
- [Bolus estès i canvi a llaç obert](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Actualitzar l'apk amb Android Studio 3.6.1](../Maintenance/UpdateToNewVersion.md)

**Febrer de 2020**

- Advertiments sobre l'Automatització
- [Autosens](#Open-APS-features-autosens) - explicació curta
- Alternatives al Portal de cures
- Funció de [bolus estès](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) - el llaç tancat es desactivarà
- Nou [plugin Perfil local](../SettingUpAaps/ConfigBuilder.md)
- Exemple de configuració - actualització Dexcom G6
- [Versió 2.6.0](#Releasenotes-version-2-6-0) - funcions noves importants
- [Complicacions de Wear](../WearOS/WearOsSmartwatch.md)

**Gener de 2020**

- [Correcció manual de carbohidrats](#screens-bolus-carbs) per a entrades de carbohidrats errònies
- [Mida de les imatges](../SupportingAaps/HowToEditTheDocs.md) quan editeu la documentació

**Desembre de 2019**

- [Android Auto](../RemoteFeatures/AndroidAuto.md) - configuració amb captures de pantalla
- [Accu-Chek Insight i Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) - solució provisional per fer-los servir
- [Glimp](#Config-Builder-bg-source) - compatible amb la versió 4.15.57 i posteriors
- [Watchfaces](../WearOS/WearOsSmartwatch.md) - gran actualització, molts més detalls
- [Complicacions de watchface](#Watchfaces-complications) - feu servir el vostre watchface preferit amb dades d'AAPS

**Novembre de 2019**

- [Automatització - desactivar quan es desactiva el llaç](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6: actualització sobre el canvi de transmissor](#xdrip-replace-transmitter)
- [Bolus estès - per què no funciona amb el llaç](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Preguntes freqüents - esport](#FAQ-sports)
- [Pantalla d'inici - línies del gràfic](#aaps-screens-main-graph)
- [Insight - desactivar els valors absoluts a NS Client](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Bomba Medtronic - possibles entrades dobles](../CompatiblePumps/MedtronicPump.md)
- [Nou tutorial de Freestyle Libre 2](../CompatibleCgms/Libre2.md)
- [Canvi de perfil amb percentatge - exemple](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [Actualització de les ordres SMS](../RemoteFeatures/SMSCommands.md)
- [Resolució de problemes d'Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- [Resolució de problemes - recull d'enllaços](../GettingHelp/GeneralTroubleshooting.md)
- Actualització - resum ràpid per a usuaris amb experiència
- Documentació - actualització de [editar](#edit-the-docs-code-syntax) i [traducció](#translations-translation-of-the-documentation).

**Octubre de 2019**

- Actualitzacions per a la [versió 2.5 d'AAPS](#Releasenotes-version-2-5-0) (sobretot a la [pàgina d'actualització](../Maintenance/UpdateToNewVersion.md))
- [Accu-Chek Insight - opcions de registre](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Càlcul del COB en una pàgina pròpia](../DailyLifeWithAaps/CobCalculation.md)
- [COB - detecció de valors de COB erronis](#CobCalculation-detection-of-wrong-cob-values)
- [Resolució de problemes específica del Dexcom G6](#DexcomG6-troubleshooting-g6)
- [Actualització dels objectius per a la versió 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Actualització de la configuració](../SettingUpAaps/Preferences.md)
- [Inhibidors SGLT-2 - no els feu servir amb el llaç](#PreparingForAaps-no-sglt-2-inhibitors)
- [Ordres SMS: resolució de problemes](#SMSCommands-troubleshooting)
- [xDrip - actualització sobre el canvi de transmissor G6](#xdrip-replace-transmitter)

**Setembre de 2019**

- [Automatització](../DailyLifeWithAaps/Automations.md)
- [Calculadora de bolus](#AapsScreens-wrong-cob-detection) - absorció lenta de carbohidrats
- [Seguretat de Nightscout](#Nightscout-security-considerations)
- [Desplaçament horari del perfil](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (més detalls)
- [Monitoratge remot](../RemoteFeatures/RemoteMonitoring.md)
- [Què és un sistema de llaç tancat?](#Introduction-what-does-hybrid-closed-loop-mean)

**Agost de 2019**

- Regió de l'aplicació Dexcom G6 modificada
- [Dexcom G6 transmissor nou](#xdrip-connect-g6-transmitter-for-the-first-time) («firefly» / 8G...)
- Què necessito? - estructura nova i informació addicional
- Estructura nova
```
