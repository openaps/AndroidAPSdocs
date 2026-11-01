(aaps-ci-preparation)=

# Compilação no navegador – Passo 2: Criar a sua keystore de assinatura

```{note}
Este é o **Passo 2** da [Compilação no navegador](BrowserBuild.md). Primeiro, conclua o [Passo 1 – Criar o seu fork no GitHub](BrowserBuildFork.md).
```

AAPS must be signed with private keys stored in a **Java KeyStore (JKS)**. Esta é a decisão mais importante de todo o processo, porque determina se vai poder **atualizar** o AAPS mais tarde sem o reinstalar.

```{note}
Nos próximos passos, vai guardar informação privada (a sua keystore e, mais tarde, o seu acesso ao Google Drive) dentro do GitHub como **secrets**. Um secret é apenas um valor encriptado que só a sua própria compilação consegue ler – mais ninguém o pode ver, nem mesmo quem olha para o seu fork. É isto que mantém a sua compilação só sua.
```

## Escolha a sua estratégia de keystore

Leia as duas opções e escolha a que corresponde à sua situação.

### Opção 1 – Gerar uma nova keystore (novos utilizadores)

Escolha esta opção se **qualquer** uma destas situações for verdadeira:

- É a **primeira vez** que compila o AAPS.
- Não tem uma keystore de uma compilação anterior no Android Studio (computador).
- Esqueceu-se da senha ou do alias da sua keystore.

```{warning}
Compilar o AAPS com a **Opção 1** cria uma keystore totalmente nova, por isso **não vai permitir atualizar o seu AAPS atual** por cima da instalação existente. Para passar para esta nova compilação, tem de exportar as suas definições, desinstalar o AAPS antigo, instalar o novo e importar de novo as suas definições. Siga os passos em [Reinstalar o AAPS com uma nova keystore](#reinstall-aaps).
```

**→ [Continuar com a Opção 1 – Gerar uma nova keystore](BrowserBuildO1.md)**

### Opção 2 – Carregar a sua keystore existente (utilizadores atuais / anteriores)

Escolha esta opção se **já tem** a keystore `.jks` que usou numa compilação anterior do AAPS num computador no Android Studio **e** se sabe a senha e o alias dela (normalmente `key0`).

Assim, a sua instalação atual do AAPS continua a poder ser atualizada: as próximas atualizações vão usar a mesma keystore.

**→ [Continuar com a Opção 2 – Carregar a sua keystore existente](BrowserBuildO2.md)**

----

```{note}
Na próxima página, vai escolher o seu dispositivo (computador ou iPhone). Depois, cada página de dispositivo explica passo a passo como descarregar e abrir o ficheiro de preparação da forma certa para esse dispositivo e como criar a sua keystore. A app AAPS compilada vai ser guardada no seu Google Drive.
```

**Seguinte: escolha a [Opção 1](BrowserBuildO1.md) ou a [Opção 2](BrowserBuildO2.md) acima e depois siga a página do seu dispositivo.**

----

(ci-keystore-export)=

## Exportar a sua keystore (opcional)

Se quiser exportar a keystore guardada, use este método.

Este script exporta a informação da keystore que configurou antes (na Opção 1 ou na Opção 2) como um ficheiro ZIP protegido por senha para a pasta `/AAPS/KeyStore` do seu Google Drive.

```{warning}
Antes de usar este método de exportação, confirme que as definições da keystore e do Google Drive já estão concluídas.
```

### Passos:

1. **Adicionar o secret da senha do ZIP:**
   - Vá a **Settings** → **Secrets and variables** → **Actions** do seu repositório
   - Clique em **New repository secret**
   - No campo **Name**, escreva: `ZIP_PASSWORD`
   - No campo **Secret**, escreva a senha que escolheu para encriptar o ZIP
   - Na senha, use apenas letras sem acentos (a–z, A–Z) e números: não use letras acentuadas (á, ç, ã…) nem símbolos especiais
   - Clique em **Add secret**

   ![aaps_ci_zip_password.png](../images/Building-the-App/CI/aaps_ci_zip_password.png)

2. **Executar o workflow de exportação:**
   - Vá ao separador **Actions** do seu repositório
   - Select **CI Keystore Export**
   - Clique em **Run workflow**
   - O ficheiro ZIP da keystore exportada vai ser guardado no seu Google Drive

   ![aaps_ci_keystore_export.png](../images/Building-the-App/CI/aaps_ci_keystore_export.png)

   ![aaps_ci_keystore_export_run.png](../images/Building-the-App/CI/aaps_ci_keystore_export_run.png)

```{toctree}
:hidden:

Opção 1 – Gerar uma nova keystore <BrowserBuildO1.md>
Opção 2 – Carregar a sua keystore existente <BrowserBuildO2.md>
```
