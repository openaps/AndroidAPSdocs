(github-build-apk)=

# Compilação no navegador – Etapa 4: Compile o APK

```{note}
Esta é a **Etapa 4** da [Compilação no navegador](BrowserBuild.md). Primeiro conclua a [Etapa 3 – Autorize o Google Drive](BrowserBuildGoogleDrive.md).
```

## AAPS-CI: GitHub Actions para compilar o APK do AAPS
 - Adequado para usuários em geral.

```{tab-set}

:::{tab-item} Wiki
### Execute o workflow para compilar o APK assinado

1. Na sua cópia do AndroidAPS no GitHub, selecione Actions.
2. Expanda All Workflows.
3. Selecione AAPS-CI

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. Role para baixo e toque em Run Workflow.

![Run Workflow](../images/update/CI/GitHubActions2.png)

5. Deixe **Use workflow from** na branch master. Em **Select AAPS Version**, selecione a versão do **AAPS** que você quer compilar (normalmente a mais recente). Selecione a [variante](#browserbuild-variant) (fullRelease) e toque em Run workflow.



![Run Workflow](../images/update/CI/GitHubActions3.png)

6. Você verá a mensagem Workflow run was successfully requested. Atualize a página do navegador e você poderá acompanhar o progresso da compilação. Quando a ação terminar, a ação AAPS CI mostrará um sinal verde de confirmação. Você compilou com sucesso a versão atualizada do Android APS.

![Monitor Workflow](../images/update/CI/GitHubActions4.png)

### Instale o APK do AAPS

1. Abra o seu Google Drive
2. Abra a pasta AAPS, selecione a pasta da nova versão e você encontrará as versões para o telefone e para o Android Wear.

![Google Drive Location](../images/update/CI/GitHubActions5.png)
:::  

:::{tab-item} Vídeo
<div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
  <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
    <iframe
      src="https://geo.dailymotion.com/player/x9rdwms.html?video=x9rdwms&loop=true&mute=true"
      loading="lazy"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</div>
:::  

```

## Seleção da versão a compilar

**Somente versões do AAPS a partir da 3.3.2.1 podem ser compiladas pelo método do navegador.**

Toque em **Select AAPS Version** e escolha a versão a compilar. A versão mais recente fica no topo da lista.

![Lista Select AAPS Version](../images/Building-the-App/CI/BrowserBuildVariant2.png)

(browserbuild-variant)=

## Seleção da variante de compilação

*Observação: os apps para Android e para Android Wear serão compilados automaticamente.*

  - Selecione a variante de que você precisa:
    - fullRelease: para uso normal com bomba, com todas as funções.
    - [aapsclientRelease, aapsclient2Release, aapsclient3Release](#RemoteControl_aapsclient): para cuidadores (requer [Nightscout](../SettingUpAaps/Nightscout.md)). `aapsclient3Release` compila o **AAPSClient3**, disponível a partir da versão 4.0 do **AAPS** (veja [Sobre o AAPSClient, AAPSClient2 e AAPSClient3](#remotecontrol-aapsclient-versions)).
    - pumpcontrolRelease: para substituir o app/controle da sua bomba

![](../images/Building-the-App/CI/BrowserBuildVariant3.png)

Variantes que terminam em “Debug” indicam que o APK será compilado em modo de depuração, o que é útil para desenvolvedores na resolução de problemas.

<!-- If you want to test the items in a pull request has been moved to dev page /AdvancedOptions/DevBranch.md -->

----

Quando a compilação terminar com sucesso, o apk é salvo no seu Google Drive. Continue com [Transferir e instalar o AAPS](TransferringAndInstallingAaps.md).

```{note}
A partir de setembro de 2026, a [Verificação de desenvolvedor do Android](#android-developer-verification) do Google pode bloquear a instalação do APK ao tocar no arquivo, dependendo do seu país. Soluções gratuitas são explicadas nessa página.
```

Se a compilação falhar, primeiro [descubra o que deu errado no log da compilação](#aaps-ci-read-the-logs), depois veja [Compilação no navegador: resolução de problemas](../GettingHelp/BrowserBuildTroubleshooting.md). Para incluir um commit específico na sua compilação, veja [fazer cherry-pick de um commit](#github-cherry-pick).
