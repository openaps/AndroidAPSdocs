(aaps-ci-option2)=

# Opção 2 – Envie a sua keystore existente

```{note}
Esta página faz parte da [Etapa 2 – Crie a sua keystore de assinatura](BrowserBuildKeystore.md) da [Compilação no navegador](BrowserBuild.md). Verifique se você leu a [decisão entre a Opção 1 e a Opção 2](#aaps-ci-preparation) e baixou o arquivo de preparação.
```

A Opção 2 reutiliza a JKS que você já criou em uma compilação anterior do AAPS no computador, com o Android Studio. Ela é indicada para quem já tem uma JKS e sabe a senha e o alias da JKS.

Em `KEYSTORE_PASSWORD`, `KEY_ALIAS` e `KEY_PASSWORD`, digite no GitHub a sua senha e o seu alias reais – os mesmos do Android Studio; veja abaixo onde você os usou.

```{warning}
**Senhas com caracteres especiais.** Digite as suas senhas exatamente como elas são. Não adicione uma barra invertida nem outro caractere de escape: o workflow de compilação mantém todos os caracteres sem mudança, e uma barra invertida adicionada passa a fazer parte da senha.

Se a compilação ainda falhar no passo de assinatura e a sua senha tiver `$`, um acento grave (backtick), `"` ou `\`, o arquivo do workflow no seu fork está desatualizado. [Sincronize o seu fork](#Update-to-new-version-update-your-repo) com a dev mais recente e execute a compilação de novo. Veja [Compilação no navegador: resolução de problemas](#aaps-ci-password-special-characters).
```

```{admonition} KEY + PASSWORDS
:class: dropdown

![Lembrar senhas](../images/Building-the-App/044_RememberPwd.png)
```

## Escolha o seu dispositivo

```{tip}
Vai compilar a partir de um **telefone Android**? Use o [AAPS Builder](BrowserBuildAapsBuilder.md): ele não precisa de arquivo de preparação.
```

Siga a página que corresponde ao dispositivo que você está usando para compilar:

- **[Computador](BrowserBuildO2Computer.md)** – Windows, Mac ou Linux.

```{tip}
Você pode trocar de dispositivo a qualquer momento – basta abrir a página correspondente.
```

```{toctree}
:hidden:

Computador <BrowserBuildO2Computer.md>
```
