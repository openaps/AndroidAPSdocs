# Compilar o app AAPS para Wear

O app do **AAPS** para um smartwatch Wear OS (o **apk do Wear**, `aaps-wear-….apk`) é um arquivo de instalação separado do app do **AAPS** para o telefone. Você precisa dos dois: o app do telefone executa o loop, o app do relógio mostra os dados dele e pode enviar comandos para ele. O app do relógio é instalado a partir do telefone, veja [Configurar o AAPS no seu relógio Wear OS](WearOsSmartwatch.md).

Os dois apps só funcionam juntos quando combinam:

- **A mesma versão do AAPS** no telefone e no relógio.
- **A mesma keystore** usada para assinar os dois apps.

A forma mais simples de garantir isso é compilar os dois apps **ao mesmo tempo**, na mesma compilação. A compilação no navegador faz isso por você: cada compilação gera o apk do telefone e o apk do Wear juntos. Com o Android Studio ou pela linha de comando, você compila o apk do Wear como um segundo passo, logo depois do apk do telefone.

```{note}
Você já usa o **AAPS** no seu telefone, mas não tem um apk do Wear da mesma compilação? Compile os dois apps de novo, com a mesma keystore, e reinstale também o app do telefone. Um apk do Wear compilado meses depois, ou com outra versão do Android Studio, provavelmente não será compatível com o app do telefone.
```

## Versões do Wear OS compatíveis

O **AAPS** funciona em relógios com **Wear OS 3.0, 3.2 ou 3.5** (Android 11, nível de API 30) **ou mais novo** (Wear OS 4, 5 e 6). Relógios com Wear OS 2 não são compatíveis.

```{warning}
Os mostradores do AAPS estão disponíveis para smartwatches Wear OS com nível de API de 30 a 33 (Wear OS 3.0, 3.2, 3.5 e 4).<br>
As versões mais novas do Wear OS quebram cada vez mais os mostradores do AAPS — veja [Mudanças nos mostradores do Wear OS](#wearos-watchface-changes) e as [limitações do Wear OS 5](#BuildingAapsWearOs-WearOS5).
```

(building-aaps-wear-os-method)=

## Obter o apk do Wear com o seu método de compilação

Siga a seção do método que você usa para [compilar o AAPS](../SettingUpAaps/BuildingAaps.md).

(building-aaps-wear-os-browser)=

### Compilação no navegador (recomendada)

**Não é preciso fazer nada a mais.** Cada compilação no navegador gera dois arquivos a partir do mesmo código-fonte e da mesma keystore:

- `aaps-….apk`: o app do telefone.
- `aaps-wear-….apk`: o app do relógio.

O apk do Wear segue a [variante](#browserbuild-variant) que você selecionou para a compilação: `fullRelease` gera o app **AAPS Wear**, `aapsclientRelease` o app **AAPSClient Wear**, `pumpcontrolRelease` o app **PumpControl Wear**. Cada app Wear só se comunica com o app do telefone correspondente.

Onde encontrar o apk do Wear:

- **AAPS Builder**: na página da compilação, role para baixo até **Artifacts** e baixe o `aaps-wear-….apk` ao lado do app do telefone, como mostrado em [Passo 6 – Instale o app no seu telefone](#aaps-builder-step6). Baixe-o no telefone que executa o **AAPS** se você instalar o app do relógio a partir do telefone (Wear Installer 2 ou Easy Fire Tools), ou no seu computador se você usar o ADB.

  ![Artifacts com os apps do telefone e do relógio](../images/Building-the-App/CI/AapsBuilder52_Artifacts.png)

- **Fork com Google Drive**: abra o seu Google Drive, a pasta `AAPS` e depois a pasta da versão que você compilou. Ela contém o apk do telefone e o apk do Wear, veja [Etapa 4: Compile o APK](#github-build-apk).

  ![Local no Google Drive](../images/update/CI/GitHubActions5.png)

Guarde o apk do Wear junto com o apk do telefone nos seus backups. Com o **AAPS Builder**, os arquivos ficam na página da compilação por apenas 14 dias.

Próximo passo: instale o apk do Wear no relógio, veja [Configurar o AAPS no seu relógio Wear OS](WearOsSmartwatch.md).

(building-aaps-wear-os-android-studio)=

### Android Studio

O apk do Wear é compilado como o apk do telefone, como uma segunda compilação assinada. Faça isso logo depois do apk do telefone, com a mesma versão do Android Studio e a mesma keystore.

- Siga as instruções da [Compilação no Android Studio](../SettingUpAaps/ComputerBuild.md).
- Quando você chegar à [seleção do módulo](#Building-APK-wearapk) em "Compilar o apk assinado do AAPS", selecione **`AndroidAPS.wear`**.

![Módulo Wear](../images/Building-the-App/wear_build1.png)

Selecione "**fullRelease**" para gerar o arquivo apk do Wear do **AAPS**.

![Módulo Wear](../images/Building-the-App/wear_build2.png)

Se preferir, você pode compilar **“pumpcontrolRelease”** no menu suspenso. Com ele você só controla a bomba remotamente, sem fazer loop.

Próximo passo: instale o apk do Wear no relógio, veja [Configurar o AAPS no seu relógio Wear OS](WearOsSmartwatch.md).

(building-aaps-wear-os-troubleshooting)=

#### Resolução de problemas da compilação no Android Studio

Durante a compilação do app **AAPS** completo (e, na verdade, de qualquer app assinado), o Android Studio gera um arquivo .json na mesma pasta. Isso causa erros de [alterações não confirmadas (uncommitted changes)](#troubleshooting_androidstudio-uncommitted-changes) quando você tenta compilar o próximo app assinado, como o app Wear do **AAPS**. A forma mais rápida de resolver isso é ir até a pasta onde o app AAPS completo foi compilado. A sua pasta deve ser algo como:

`C:\Users\Your Name\AndroidStudioProjects\AndroidAPS\app\aapsclient\release.`

Apague o arquivo .json que não é necessário ou mova-o para fora da pasta. Depois tente compilar o app Wear do **AAPS** de novo. Se isso não funcionar, o [guia de resolução de problemas](../GettingHelp/TroubleshootingAndroidStudio.md) mais detalhado ajuda você a encontrar o arquivo exato que causa o problema. Pode ser também o seu arquivo keystore.

(building-aaps-wear-os-cli)=

### Linha de comando

Siga as [Instruções de compilação pela linha de comando](../SettingUpAaps/CLIBuild.md) e repita os passos de compilar e assinar para o módulo `wear`, com a mesma keystore:

```sh
./gradlew :wear:assembleFullRelease
```

O apk do Wear não assinado é gravado em `wear/build/outputs/apk/full/release/`. Assine-o com o `apksigner` exatamente como o apk do telefone e depois instale-o no relógio, veja [Configurar o AAPS no seu relógio Wear OS](WearOsSmartwatch.md).
