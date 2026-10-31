(aaps-ci-google-drive-auth)=

# Compilação no navegador – Passo 3: Autorizar o Google Drive

```{note}
Este é o **Passo 3** da [Compilação no navegador](BrowserBuild.md). Primeiro, conclua o [Passo 2 – Criar a sua keystore de assinatura](BrowserBuildKeystore.md).
```

```{warning}
Seja qual for o conjunto de instruções que seguiu antes (Opção 1 ou Opção 2), TEM de adicionar a autorização do Google Drive para usar a compilação no navegador com sucesso.
```

Nota: se já fez esta parte no vídeo, pode agora passar para o [Passo 4 – Compilar o APK](BrowserBuildAPK.md).

```{warning}
Se a autorização da Google não começar ou se a página de preparação falhar, feche a página de preparação, abra de novo `aaps-ci-preparation.html` da mesma forma que no Passo 2 e repita este passo desde o início. Consulte a [resolução de problemas](#aaps-ci-preparation-web).
```

Volte ao separador da página de preparação.

Desça até à secção Google Drive Auth (autorização do Google Drive) e toque em Start Auth.

![](../images/Building-the-App/CI/BrowserBuildStep44.png)

Selecione a sua conta Google.

![](../images/Building-the-App/CI/BrowserBuildGAUTH1.png)

Desça e aceite o acesso. A página web precisa dele para obter a chave de autenticação do Google Drive.

Toque em Continue (Continuar).

![](../images/Building-the-App/CI/BrowserBuildGAUTH2.png)

O campo `GDRIVE_OAUTH2` fica preenchido. Toque no botão Copy de cima.

![](../images/Building-the-App/CI/BrowserBuildGAUTH3.png)

Volte ao separador do GitHub.

Desça até Repository secrets e toque em New repository secret.

Se seguiu a Opção 1, deve ver isto:

![](../images/Building-the-App/CI/BrowserBuildGAUTH4.png)

Se seguiu a Opção 2, haverá mais chaves:

![](../images/Building-the-App/CI/BrowserBuildGAUTH4b.png)

No campo Name, cole o texto que acabou de copiar. Toque longamente na caixa de texto para mostrar o menu de colar.

![](../images/Building-the-App/CI/BrowserBuildGAUTH5.png)

Mude para o separador da página de preparação.

Toque no segundo botão Copy.

![](../images/Building-the-App/CI/BrowserBuildGAUTH6.png)

Volte ao separador do GitHub.

1. No campo Secret, cole o texto que acabou de copiar. Toque longamente na caixa de texto para mostrar o menu de colar.

2. Toque em Add secret.

![](../images/Building-the-App/CI/BrowserBuildGAUTH7.png)

Agora deve ter dois (Opção 1) ou cinco (Opção 2) secrets.

![](../images/Building-the-App/CI/BrowserBuildGAUTH8.png)

Depois da compilação, o GitHub vai poder guardar o ficheiro apk do AAPS no seu Google Drive.

----

**Seguinte: [Passo 4 – Compilar o APK](BrowserBuildAPK.md) →**
