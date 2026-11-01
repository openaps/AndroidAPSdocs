(aaps-ci-preparation)=

# Compilação no navegador – Etapa 2: Crie a sua keystore de assinatura

```{note}
Esta é a **Etapa 2** da [Compilação no navegador](BrowserBuild.md). Primeiro conclua a [Etapa 1 – Crie o seu fork no GitHub](BrowserBuildFork.md).
```

AAPS must be signed with private keys stored in a **Java KeyStore (JKS)**. Esta é a decisão mais importante de todo o processo, porque ela define se você vai poder **atualizar** o AAPS mais tarde sem reinstalar.

```{note}
Nas próximas etapas, você vai guardar informações privadas (a sua keystore e, mais tarde, o seu acesso ao Google Drive) dentro do GitHub como **secrets**. Um secret é apenas um valor criptografado que só a sua própria compilação pode ler – ninguém mais, nem mesmo quem olha o seu fork, pode vê-lo. É isso que mantém a sua compilação só sua.
```

## Escolha a sua estratégia de keystore

Leia as duas opções e escolha a que combina com a sua situação.

### Opção 1 – Gere uma nova keystore (novos usuários)

Escolha esta opção se **qualquer** uma destas frases for verdadeira:

- Esta é a **primeira vez** que você compila o AAPS.
- Você não tem uma keystore de uma compilação anterior no Android Studio (computador).
- Você esqueceu a senha ou o alias da sua keystore.

```{warning}
Compilar o AAPS com a **Opção 1** cria uma keystore totalmente nova, por isso **não será possível atualizar o seu AAPS atual** sem reinstalar. Para passar para esta nova compilação, você precisa exportar as suas configurações, desinstalar o AAPS antigo, instalar o novo e importar as suas configurações de novo. Siga as etapas em [Reinstalar o AAPS com uma nova keystore](#reinstall-aaps).
```

**→ [Continue com a Opção 1 – Gere uma nova keystore](BrowserBuildO1.md)**

### Opção 2 – Envie a sua keystore existente (usuários atuais / anteriores)

Escolha esta opção se você **já tem** a keystore `.jks` que usou em uma compilação anterior do AAPS no computador, no Android Studio, **e** sabe a senha e o alias dela (normalmente `key0`).

Assim a sua instalação atual do AAPS continua podendo ser atualizada: as próximas atualizações vão usar a mesma keystore.

**→ [Continue com a Opção 2 – Envie a sua keystore existente](BrowserBuildO2.md)**

----

```{note}
Na próxima página, você vai escolher o seu dispositivo (computador ou iPhone). Depois, cada página de dispositivo mostra passo a passo como baixar e abrir o arquivo de preparação da forma certa para esse dispositivo e como criar a sua keystore. O app AAPS compilado será salvo no seu Google Drive.
```

**Próximo: escolha a [Opção 1](BrowserBuildO1.md) ou a [Opção 2](BrowserBuildO2.md) acima e depois siga a página do seu dispositivo.**

----

(ci-keystore-export)=

## Exportar a sua keystore (opcional)

Se você quiser exportar a keystore guardada, use este método.

Este script exporta as informações da keystore que você configurou antes (na Opção 1 ou na Opção 2) como um arquivo ZIP protegido por senha para a pasta `/AAPS/KeyStore` no seu Google Drive.

```{warning}
Antes de usar este método de exportação, verifique se as configurações da keystore e do Google Drive já foram concluídas.
```

### Passos:

1. **Adicione o secret da senha do ZIP:**
   - Vá até **Settings** → **Secrets and variables** → **Actions** do seu repositório
   - Clique em **New repository secret**
   - No campo **Name**, digite: `ZIP_PASSWORD`
   - No campo **Secret**, digite a sua própria senha para criptografar o ZIP
   - Use apenas letras inglesas (sem acentos) e números na senha (sem símbolos especiais)
   - Clique em **Add secret**

   ![aaps_ci_zip_password.png](../images/Building-the-App/CI/aaps_ci_zip_password.png)

2. **Execute o workflow de exportação:**
   - Vá até a aba **Actions** do seu repositório
   - Select **CI Keystore Export**
   - Clique em **Run workflow**
   - O arquivo ZIP exportado da keystore será salvo no seu Google Drive

   ![aaps_ci_keystore_export.png](../images/Building-the-App/CI/aaps_ci_keystore_export.png)

   ![aaps_ci_keystore_export_run.png](../images/Building-the-App/CI/aaps_ci_keystore_export_run.png)

```{toctree}
:hidden:

Opção 1 – Gere uma nova keystore <BrowserBuildO1.md>
Opção 2 – Envie a sua keystore existente <BrowserBuildO2.md>
```
