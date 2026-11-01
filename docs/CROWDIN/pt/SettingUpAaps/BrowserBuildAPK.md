(github-build-apk)=

# Compilação no navegador – Passo 4: Compilar o APK

```{note}
Este é o **Passo 4** da [Compilação no navegador](BrowserBuild.md). Primeiro conclua o [Passo 3 – Autorizar o Google Drive](BrowserBuildGoogleDrive.md).
```

## GitHub Actions AAPS-CI para compilar o APK do AAPS
 - Adequado para a maioria dos utilizadores.

```{tab-set}

:::{tab-item} Wiki
### Executar o workflow para compilar o APK assinado

1. Na sua cópia do AndroidAPS no GitHub, selecione Actions.
2. Expanda All Workflows.
3. Selecione AAPS-CI

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. Desça e toque em Run Workflow.

![Run Workflow](../images/update/CI/GitHubActions2.png)

5. Deixe **Use workflow from** no branch master. Em **Select AAPS Version**, selecione a versão do **AAPS** que quer compilar (normalmente a mais recente). Selecione a [variante](#browserbuild-variant) (fullRelease) e toque em Run workflow.



![Run Workflow](../images/update/CI/GitHubActions3.png)

6. Vai ver a mensagem Workflow run was successfully requested. Atualize a página do navegador e vai poder acompanhar o progresso da compilação. Quando a ação terminar, a ação AAPS CI mostra um visto verde. Compilou com sucesso a versão atualizada do Android APS.

![Acompanhar o workflow](../images/update/CI/GitHubActions4.png)

### Instalar o APK do AAPS

1. Abra o seu Google Drive
2. Abra a pasta AAPS, selecione a pasta da nova versão e vai encontrar a versão para o telefone e a versão Android Wear.

![Localização no Google Drive](../images/update/CI/GitHubActions5.png)
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

## Escolha da versão a compilar

**Só as versões do AAPS a partir da 3.3.2.1 podem ser compiladas com o método do navegador.**

Toque em **Select AAPS Version** e escolha a versão a compilar. A versão mais recente está no topo da lista.

![Lista Select AAPS Version](../images/Building-the-App/CI/BrowserBuildVariant2.png)

(browserbuild-variant)=

## Escolha da variante de compilação

*Nota: as apps Android e Android Wear são compiladas automaticamente.*

  - Selecione a variante de que precisa:
    - fullRelease: para o uso normal com a bomba, com todas as funcionalidades.
    - [aapsclientRelease, aapsclient2Release, aapsclient3Release](#RemoteControl_aapsclient): para cuidadores (requer o [Nightscout](../SettingUpAaps/Nightscout.md)). `aapsclient3Release` compila o **AAPSClient3**, disponível a partir da versão 4.0 do **AAPS** (veja [Sobre o AAPSClient, o AAPSClient2 e o AAPSClient3](#remotecontrol-aapsclient-versions)).
    - pumpcontrolRelease: para substituir a app/o comando da sua bomba

![](../images/Building-the-App/CI/BrowserBuildVariant3.png)

As variantes que terminam em “Debug” indicam que o APK vai ser compilado em modo de depuração, o que é útil para os programadores resolverem problemas.

<!-- If you want to test the items in a pull request has been moved to dev page /AdvancedOptions/DevBranch.md -->

----

Quando a compilação termina com sucesso, o apk é guardado no seu Google Drive. Continue com [Transferir e instalar o AAPS](TransferringAndInstallingAaps.md).

```{note}
A partir de setembro de 2026, a [verificação de programadores Android](#android-developer-verification) da Google pode bloquear a instalação do APK com um toque no ficheiro, conforme o seu país. Essa página explica soluções gratuitas.
```

Se a compilação falhar, primeiro [descubra o que correu mal no registo da compilação](#aaps-ci-read-the-logs); depois veja [Compilação no navegador: resolução de problemas](../GettingHelp/BrowserBuildTroubleshooting.md). Para incluir um commit específico na sua compilação, veja [aplicar (cherry-pick) um commit](#github-cherry-pick).
