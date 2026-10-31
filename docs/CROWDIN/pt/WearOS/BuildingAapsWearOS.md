# Compilar a app AAPS Wear

A app **AAPS** para um smartwatch Wear OS (o **Wear apk**, `aaps-wear-….apk`) é um ficheiro de instalação separado da app **AAPS** do telefone. Precisa das duas: a app do telefone executa o loop, a app do relógio mostra os seus dados e pode enviar-lhe comandos. A app do relógio é instalada a partir do telefone, veja [Configurar o AAPS no seu relógio Wear OS](WearOsSmartwatch.md).

As duas apps só funcionam juntas quando são compatíveis:

- **A mesma versão do AAPS** no telefone e no relógio.
- **A mesma keystore** usada para assinar as duas apps.

A forma mais simples de garantir isto é compilar as duas apps **ao mesmo tempo**, na mesma compilação. A compilação no navegador faz isto por si: cada compilação produz o APK do telefone e o Wear apk juntos. Com o Android Studio ou com a linha de comandos, compila o Wear apk num segundo passo, logo a seguir ao APK do telefone.

```{note}
Já usa o **AAPS** no seu telefone, mas não tem um Wear apk da mesma compilação? Compile de novo as duas apps, com a mesma keystore, e reinstale também a app do telefone. Um Wear apk compilado meses depois, ou com outra versão do Android Studio, provavelmente não é compatível com a app do telefone.
```

## Versões do Wear OS suportadas

O **AAPS** funciona em relógios com **Wear OS 3.0, 3.2 ou 3.5** (Android 11, nível de API 30) **ou mais recente** (Wear OS 4, 5 e 6). Os relógios com Wear OS 2 não são suportados.

```{warning}
As watchfaces do AAPS estão disponíveis para smartwatches Wear OS com nível de API 30 a 33 (Wear OS 3.0, 3.2, 3.5 e 4).<br>
As versões mais recentes do Wear OS estragam cada vez mais as watchfaces do AAPS — veja [Alterações das watchfaces no Wear OS](#wearos-watchface-changes) e as [limitações do Wear OS 5](#BuildingAapsWearOs-WearOS5).
```

(building-aaps-wear-os-method)=

## Obter o Wear apk com o seu método de compilação

Siga a secção do método que usa para [compilar o AAPS](../SettingUpAaps/BuildingAaps.md).

(building-aaps-wear-os-browser)=

### Compilação no navegador (recomendada)

**Não há nada extra a fazer.** Cada compilação no navegador produz dois ficheiros a partir do mesmo código-fonte e da mesma keystore:

- `aaps-….apk`: a app do telefone.
- `aaps-wear-….apk`: a app do relógio.

O Wear apk segue a [variante](#browserbuild-variant) que escolheu para a compilação: `fullRelease` dá a app **AAPS Wear**, `aapsclientRelease` a app **AAPSClient Wear**, `pumpcontrolRelease` a app **PumpControl Wear**. Cada app Wear só comunica com a app do telefone correspondente.

Onde encontrar o Wear apk:

- **AAPS Builder**: na página da compilação, desça até **Artifacts** e descarregue `aaps-wear-….apk` ao lado da app do telefone, como mostra o [Passo 6 – Instalar a app no seu telefone](#aaps-builder-step6). Descarregue-o no telefone que executa o **AAPS** se instalar a app do relógio a partir do telefone (Wear Installer 2 ou Easy Fire Tools), ou no seu computador se usar o ADB.

  ![Artifacts com as apps do telefone e do relógio](../images/Building-the-App/CI/AapsBuilder52_Artifacts.png)

- **Fork com Google Drive**: abra o seu Google Drive, a pasta `AAPS` e depois a pasta da versão que compilou. Contém o APK do telefone e o Wear apk, veja [Passo 4 – Compilar o APK](#github-build-apk).

  ![Localização no Google Drive](../images/update/CI/GitHubActions5.png)

Guarde o Wear apk junto com o APK do telefone nas suas cópias de segurança. Com o **AAPS Builder**, os ficheiros só ficam na página da compilação durante 14 dias.

A seguir: instale o Wear apk no relógio, veja [Configurar o AAPS no seu relógio Wear OS](WearOsSmartwatch.md).

(building-aaps-wear-os-android-studio)=

### Android Studio

O Wear apk é compilado como o APK do telefone, como uma segunda compilação assinada. Faça-o logo a seguir ao APK do telefone, com a mesma versão do Android Studio e a mesma keystore.

- Siga as instruções da [Compilação com o Android Studio](../SettingUpAaps/ComputerBuild.md).
- Quando chegar à [seleção do módulo](#Building-APK-wearapk) em «Compilar o APK assinado do AAPS», selecione **`AndroidAPS.wear`**.

![Módulo Wear](../images/Building-the-App/wear_build1.png)

Selecione «**fullRelease**» para gerar o ficheiro APK do **AAPS** Wear.

![Módulo Wear](../images/Building-the-App/wear_build2.png)

Se preferir, pode compilar **“pumpcontrolRelease”** no menu pendente. Esta versão só permite controlar a bomba à distância, sem loop.

A seguir: instale o Wear apk no relógio, veja [Configurar o AAPS no seu relógio Wear OS](WearOsSmartwatch.md).

(building-aaps-wear-os-troubleshooting)=

#### Resolução de problemas da compilação no Android Studio

Ao compilar a app **AAPS** completa (e, na verdade, qualquer app assinada), o Android Studio gera um ficheiro .json na mesma pasta. Isto causa depois erros de [alterações não submetidas](#troubleshooting_androidstudio-uncommitted-changes) quando tenta compilar a app assinada seguinte, como a app **AAPS** Wear. A forma mais rápida de resolver isto é abrir a pasta onde a app AAPS completa foi compilada. A sua pasta é provavelmente parecida com:

`C:\Users\Your Name\AndroidStudioProjects\AndroidAPS\app\aapsclient\release.`

Apague o ficheiro .json desnecessário ou mova-o para fora da pasta. Depois tente compilar de novo a app **AAPS** Wear. Se isso não resultar, o [guia de resolução de problemas](../GettingHelp/TroubleshootingAndroidStudio.md) mais detalhado ajuda a encontrar o ficheiro que causa o problema, que também pode ser o seu ficheiro keystore.

(building-aaps-wear-os-cli)=

### Linha de comandos

Siga as [Instruções de compilação na linha de comandos](../SettingUpAaps/CLIBuild.md) e repita os passos de compilação e de assinatura para o módulo `wear`, com a mesma keystore:

```sh
./gradlew :wear:assembleFullRelease
```

The unsigned Wear apk is written under `wear/build/outputs/apk/full/release/`. Sign it with `apksigner` exactly like the phone apk, then install it on the watch, see [Set up AAPS on your Wear OS watch](WearOsSmartwatch.md).
