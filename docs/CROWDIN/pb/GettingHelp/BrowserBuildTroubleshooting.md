(aaps-ci-troubleshooting)=

# Compilação no navegador: resolução de problemas

```{note}
Esta página reúne dicas de resolução de problemas para a [Compilação no navegador](../SettingUpAaps/BrowserBuild.md).

Você usa o **AAPS Builder**? Comece pela [seção de resolução de problemas](#aaps-builder-troubleshooting) dele. As seções sobre o Google Drive abaixo também valem para ele.
```

## Resolução de problemas do AAPS-CI

(aaps-ci-read-the-logs)=
### Primeiro: descubra o que deu errado

Quando uma compilação falha, o GitHub guarda um log de cada passo. O log mostra qual passo falhou e por quê. Leia o log antes de tentar qualquer outra coisa: a mensagem de erro é o que você deve procurar nesta página, e é o que quem for ajudar vai pedir.

1. Na sua cópia do AndroidAPS no GitHub, abra **Actions**. Uma compilação que falhou tem um X vermelho. Toque no nome dela.

   ![Execução que falhou na lista de Actions](../images/Building-the-App/CI/aaps_ci_logs_1_runs.png)

2. O resumo da execução mostra **Failure** (falha) e, abaixo, o job que falhou (**Build AAPS**, com um X vermelho).

   ![Resumo da execução](../images/Building-the-App/CI/aaps_ci_logs_2_summary.png)

3. Role para baixo até **Annotations** e toque na linha vermelha **Build AAPS**.

   ![Annotations](../images/Building-the-App/CI/aaps_ci_logs_3_annotations.png)

4. O job é aberto. Os passos com um visto cinza funcionaram. O passo com o X vermelho é o que falhou: o GitHub o abre para você. Os passos depois dele foram pulados (círculo cinza).

   ![Passos do job](../images/Building-the-App/CI/aaps_ci_logs_4_job.png)

5. Leia as linhas logo acima de `Error: Process completed with exit code 1.`: elas explicam o problema. Neste exemplo, o passo **Retrieving Google Drive access token** falhou com `invalid_grant` e `Token has been expired or revoked.`, veja [Refresh token do Google expirado](#aaps-ci-google-token-expired).

   ![Erro no log](../images/Building-the-App/CI/aaps_ci_logs_5_error.png)

```{tip}
Vai pedir ajuda? Informe o nome do passo que falhou e as linhas de erro (uma captura de tela como a acima serve). Nunca compartilhe o conteúdo dos seus secrets.
```

(aaps-ci-update-secret)=
#### Atualizar um secret

Muitas correções consistem em substituir o valor de um secret. Na sua cópia do AndroidAPS no GitHub, vá em **Settings** → **Secrets and variables** → **Actions** e toque no lápis ao lado do secret.

![Lista de secrets](../images/Building-the-App/CI/aaps_ci_secret_update_1.png)

Digite ou cole o novo valor e toque em **Update secret**. O GitHub nunca mostra o valor antigo: o campo está sempre vazio.

![Update secret](../images/Building-the-App/CI/aaps_ci_secret_update_2.png)

(aaps-ci-rerun)=
#### Executar a compilação de novo depois de uma correção

Depois de corrigir a causa, você não precisa começar do zero: abra a execução que falhou, toque em **...** (canto superior direito) e depois em **Re-run failed jobs**.

![Menu Re-run](../images/Building-the-App/CI/aaps_ci_rerun_1.png)

Toque em **Re-run jobs**. Você também pode iniciar uma nova compilação em **Run workflow**, como de costume.

![Diálogo Re-run](../images/Building-the-App/CI/aaps_ci_rerun_2.png)

(aaps-ci-preparation-web)=
### Página web aaps-ci-preparation
  - A página de preparação é mostrada por um servidor local temporário (por exemplo, o Simple Web Server em um computador), que também recebe o refresh token do Google.
  - Se você vir a tela abaixo, o servidor local parou ou não pode ser acessado.
  - Feche a página de preparação, verifique se o servidor local está em execução, depois abra de novo o aaps-ci-preparation.html da mesma forma que na Etapa 2 e conclua os passos restantes. Isso é necessário principalmente ao criar a primeira conexão com o Google durante a configuração.

  ![aaps_ci_html_not_found](../images/Building-the-App/CI/aaps_ci_html_not_found.png)

(aaps-ci-google-token-expired)=
### Refresh token do Google expirado
  - Os refresh tokens do Google OAuth2 expiram se não forem usados por 6 meses, e também podem ficar inválidos em outras situações (por exemplo, se você mudou a senha da sua conta Google ou removeu o acesso manualmente). Para mais detalhes, veja a [documentação do Google OAuth2](https://developers.google.com/identity/protocols/oauth2).
  - No [log da compilação](#aaps-ci-read-the-logs), o passo **Retrieving Google Drive access token** falha com `invalid_grant` e `Token has been expired or revoked.`:

  ![aaps_ci_token_expired](../images/Building-the-App/CI/aaps_ci_token_expired.png)

  - Se a sua compilação falhar por causa de um refresh token do Google expirado ou removido, você precisará refazer os passos de [Google Drive Auth](#aaps-ci-google-drive-auth) para obter um novo token `GDRIVE_OAUTH2`, [atualizar o secret](#aaps-ci-update-secret) no seu repositório GitHub e depois [executar a compilação de novo](#aaps-ci-rerun).
  - Se a autorização falhar de novo, ou se o Google não pedir mais o seu consentimento, primeiro remova o acesso existente do AAPS da sua conta Google, veja [abaixo](#aaps-ci-google-remove-access).

(aaps-ci-google-remove-access)=
### Remover o acesso do AAPS da sua conta Google e reiniciar a autorização
  - Se a autorização do Google Drive continuar falhando, ou se você quiser começar de novo do zero, primeiro remova o acesso que você deu ao AAPS e depois refaça a autorização.
  - No seu telefone, abra [https://myaccount.google.com](https://myaccount.google.com), toque em **Security** (Segurança), role para baixo até **Your connections to third-party apps & services** (Suas conexões com apps e serviços de terceiros) e abra a lista de apps vinculados. Você também pode ir diretamente para [https://myaccount.google.com/connections](https://myaccount.google.com/connections).
  - Toque em **AAPS** na lista.

  ![aaps_ci_google_access_1](../images/Building-the-App/CI/aaps_ci_google_access_1.png)

  - A página mostra o acesso que você deu ao AAPS (os arquivos do Google Drive usados com o app). Toque em **Delete all** (Excluir tudo) para remover a conexão, ou toque em **See details** (Ver detalhes) para revisá-la antes.

  ![aaps_ci_google_access_2](../images/Building-the-App/CI/aaps_ci_google_access_2.png)

  - Na página de detalhes, toque em **Remove all access** (Remover todo o acesso).

  ![aaps_ci_google_access_3](../images/Building-the-App/CI/aaps_ci_google_access_3.png)

  - Toque em **Confirm** (Confirmar).

  ![aaps_ci_google_access_4](../images/Building-the-App/CI/aaps_ci_google_access_4_confirm.png)

  - O Google confirma que o AAPS não tem mais acesso. O AAPS não aparece mais na lista de apps vinculados.

  ![aaps_ci_google_access_5](../images/Building-the-App/CI/aaps_ci_google_access_5_removed.png)

  - Agora reinicie a autorização do zero: feche **tanto** a página de preparação quanto o app gerenciador de arquivos, abra de novo o aaps-ci-preparation.html pelo gerenciador de arquivos e refaça os passos de [Google Drive Auth](#aaps-ci-google-drive-auth). O Google vai pedir que você conceda o acesso de novo e a página vai fornecer um novo token `GDRIVE_OAUTH2`.
  - [Atualize o secret `GDRIVE_OAUTH2`](#aaps-ci-update-secret) no seu repositório GitHub com o novo token e depois [execute a compilação de novo](#aaps-ci-rerun).

(aaps-ci-disable-software)=
### Desativar softwares que podem atrapalhar a verificação OAUTH
  - Desative qualquer VPN ou app de segurança (firewall, antimalware, ...) no telefone antes de tentar obter a chave OAUTH.

(aaps-ci-actions-permission)=
### Verificar as configurações de permissão do GitHub Actions
  - Verifique se as políticas do GitHub Actions estão definidas como “Allow all actions and reusable workflows” (Settings → Actions → General). Se você mudar essa opção, clique em **Save** abaixo das opções.

  ![aaps_ci_actions_permission](../images/Building-the-App/CI/aaps-ci-actions-permission.png)

`actions/checkout@v4` and `actions/setup-java@v4` are not allowed to be used in `xxxxx/AndroidAPS`. Actions in this workflow must be: within a repository owned by `xxxxx`

(aaps-ci-workflow-permissions)=
### Verificar as configurações de permissões de workflow do GitHub
  - Se a compilação falhar imediatamente com um erro "Invalid workflow file" parecido com o abaixo, as permissões padrão de workflow do seu repositório são restritivas demais:

```
Invalid workflow file
The workflow is not valid. .github/workflows/aaps-ci.yml (Line: 361, Col: 3):
Error calling workflow 'xxxxx/AndroidAPS/.github/workflows/cleanup-workflow-runs.yml@...'.
The nested job 'cleanup' is requesting 'actions: write', but is only allowed 'actions: none'.
```

  - Verifique se as permissões de workflow estão definidas como “Read and write permissions” (Settings → Actions → General → Workflow permissions), depois salve e execute de novo o workflow de compilação.

  ![aaps_ci_workflow_permissions](../images/Building-the-App/CI/aaps-ci-workflow-permissions.jpg)

(aaps-ci-password-special-characters)=
### A compilação falha ao verificar a senha da keystore
  - No [log da compilação](#aaps-ci-read-the-logs), o passo **Validating keystore, alias and password** falha com `Either KEYSTORE_BASE64, KEYSTORE_PASSWORD, KEY_PASSWORD, or KEY_ALIAS is incorrect`, seguido de `Keystore was tampered with, or password was incorrect`. A compilação para ali: a keystore e as senhas são verificadas antes de o AAPS ser compilado.

  ![Senha da keystore errada no log da compilação](../images/Building-the-App/CI/aaps_ci_password_wrong.png)

  - O workflow de compilação mantém todos os caracteres das suas senhas sem alteração. Informe `KEYSTORE_PASSWORD` e `KEY_PASSWORD` exatamente como são, sem adicionar uma barra invertida ou qualquer outro caractere de escape. Se você adicionou barras invertidas, [atualize os secrets](#aaps-ci-update-secret) com a senha exatamente como ela é. O exemplo abaixo está errado: a senha é `Example2026`, e a barra invertida foi adicionada.

  ![Senha informada com uma barra invertida adicionada](../images/Building-the-App/CI/aaps_ci_password_escaped.png)

  - Se a compilação ainda falhar ao assinar o APK, embora a sua senha esteja correta, e a senha contiver `$`, uma crase, `"` ou `\`, o arquivo de workflow no seu fork é anterior a setembro de 2026 e ainda interpreta esses caracteres. [Sincronize o seu fork](#Update-to-new-version-update-your-repo) com o dev mais recente e depois execute de novo o workflow de compilação.
  - A barra vertical `|` é um caso especial. A página de preparação da [Opção 1](#aaps-ci-option1) junta a keystore, as senhas e o alias em um único secret `KEYSTORE_SET`, separados por `|`, e o workflow divide o valor nesse caractere. A senha gerada pela página de preparação contém apenas letras e números, então isso não pode acontecer com a Opção 1. Isso só pode acontecer se você mesmo montou um secret `KEYSTORE_SET` a partir de uma senha que contém `|`. Nesse caso, exclua o `KEYSTORE_SET` e informe os secrets separados da [Opção 2](#aaps-ci-option2).
