(aaps-ci-option2)=

# Opção 2 – Carregar a sua keystore existente

```{note}
Isto faz parte do [Passo 2 – Criar a sua keystore de assinatura](BrowserBuildKeystore.md) da [Compilação no navegador](BrowserBuild.md). Confirme que leu a [decisão entre a Opção 1 e a Opção 2](#aaps-ci-preparation) e que descarregou o ficheiro de preparação.
```

A Opção 2 reutiliza a JKS que já criou numa compilação anterior do AAPS num computador no Android Studio. É adequada para quem já tem uma JKS e sabe a senha e o alias da JKS.

Para `KEYSTORE_PASSWORD`, `KEY_ALIAS` e `KEY_PASSWORD`, introduza no GitHub as suas senhas e o seu alias reais – os do Android Studio; veja abaixo onde os usou.

```{warning}
**Senhas com caracteres especiais.** Introduza as suas senhas exatamente como são. Não adicione uma barra invertida nem outro carácter de escape: o workflow de compilação mantém todos os caracteres intactos, e uma barra invertida adicionada passa a fazer parte da senha.

Se a compilação continuar a falhar no passo de assinatura e a sua senha tiver `$`, um acento grave (backtick), `"` ou `\`, o ficheiro do workflow no seu fork está desatualizado. [Sincronize o seu fork](#Update-to-new-version-update-your-repo) com a versão dev mais recente e execute de novo a compilação. Consulte [Compilação no navegador: resolução de problemas](#aaps-ci-password-special-characters).
```

```{admonition} KEY + PASSWORDS
:class: dropdown

![Lembrar senhas](../images/Building-the-App/044_RememberPwd.png)
```

## Escolha o seu dispositivo

```{tip}
Vai compilar a partir de um **telemóvel Android**? Use antes o [AAPS Builder](BrowserBuildAapsBuilder.md): não precisa de ficheiro de preparação.
```

Siga a página que corresponde ao dispositivo a partir do qual vai compilar:

- **[Computador](BrowserBuildO2Computer.md)** – Windows, Mac ou Linux.

```{tip}
Pode mudar de dispositivo a qualquer momento – basta abrir a página correspondente.
```

```{toctree}
:hidden:

Computador <BrowserBuildO2Computer.md>
```
