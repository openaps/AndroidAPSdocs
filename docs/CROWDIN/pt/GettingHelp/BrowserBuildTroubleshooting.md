(aaps-ci-troubleshooting)=

# Compilação no navegador: resolução de problemas

```{note}
Esta página reúne dicas para resolver problemas da [Compilação no navegador](../SettingUpAaps/BrowserBuild.md).

Usa o **AAPS Builder**? Comece pela [secção de resolução de problemas](#aaps-builder-troubleshooting) do próprio AAPS Builder. As secções sobre o Google Drive abaixo também se aplicam.
```

## Resolução de problemas do AAPS-CI

(aaps-ci-read-the-logs)=
### Primeiro: descubra o que correu mal

Quando uma compilação falha, o GitHub guarda um registo de cada passo. O registo diz-lhe qual passo falhou e porquê. Leia-o antes de tentar qualquer outra coisa: a mensagem de erro é o que deve procurar nesta página, e é o que quem o ajudar vai pedir.

1. Na sua cópia do AndroidAPS no GitHub, abra **Actions**. Uma compilação que falhou tem uma cruz vermelha. Toque no nome dela.

   ![Execução falhada na lista Actions](../images/Building-the-App/CI/aaps_ci_logs_1_runs.png)

2. O resumo da execução mostra **Failure** (falha) e, por baixo, o job que falhou (**Build AAPS**, com uma cruz vermelha).

   ![Resumo da execução](../images/Building-the-App/CI/aaps_ci_logs_2_summary.png)

3. Desça até **Annotations** (anotações) e toque na linha vermelha **Build AAPS**.

   ![Anotações](../images/Building-the-App/CI/aaps_ci_logs_3_annotations.png)

4. O job abre-se. Os passos com um visto cinzento funcionaram. O passo com a cruz vermelha é o que falhou: o GitHub abre-o para si. Os passos seguintes foram ignorados (círculo cinzento).

   ![Passos do job](../images/Building-the-App/CI/aaps_ci_logs_4_job.png)

5. Leia as linhas logo acima de `Error: Process completed with exit code 1.`: elas explicam o problema. Neste exemplo, o passo **Retrieving Google Drive access token** falhou com `invalid_grant` e `Token has been expired or revoked.`, veja [O token de atualização do Google expirou](#aaps-ci-google-token-expired).

   ![Erro no registo](../images/Building-the-App/CI/aaps_ci_logs_5_error.png)

```{tip}
Vai pedir ajuda? Partilhe o nome do passo que falhou e as linhas de erro (uma captura de ecrã como a de cima serve). Nunca partilhe o conteúdo dos seus secrets.
```

(aaps-ci-update-secret)=
#### Atualizar um secret

Muitas correções significam substituir o valor de um secret. Na sua cópia do AndroidAPS no GitHub, vá a **Settings** → **Secrets and variables** → **Actions** e toque no lápis ao lado do secret.

![Lista de secrets](../images/Building-the-App/CI/aaps_ci_secret_update_1.png)

Introduza ou cole o novo valor e toque em **Update secret**. O GitHub nunca mostra o valor antigo: o campo está sempre vazio.

![Atualizar o secret](../images/Building-the-App/CI/aaps_ci_secret_update_2.png)

(aaps-ci-rerun)=
#### Executar de novo a compilação depois de uma correção

Depois de corrigir a causa, não precisa de começar do zero: abra a execução que falhou, toque em **...** (canto superior direito) e depois em **Re-run failed jobs**.

![Menu para executar de novo](../images/Building-the-App/CI/aaps_ci_rerun_1.png)

Toque em **Re-run jobs**. Também pode iniciar uma nova compilação a partir de **Run workflow**, como habitualmente.

![Janela para executar de novo](../images/Building-the-App/CI/aaps_ci_rerun_2.png)

(aaps-ci-preparation-web)=
### Página web aaps-ci-preparation
  - A página de preparação é mostrada por um servidor local temporário (por exemplo o Simple Web Server num computador), que também recebe o token de atualização do Google.
  - Se vir o ecrã abaixo, o servidor local parou ou não está acessível.
  - Feche a página de preparação, verifique se o servidor local está a funcionar e depois abra de novo o aaps-ci-preparation.html da mesma forma que no Passo 2 e conclua os passos restantes. Isto é necessário sobretudo ao criar a primeira ligação ao Google durante a configuração.

  ![aaps_ci_html_not_found](../images/Building-the-App/CI/aaps_ci_html_not_found.png)

(aaps-ci-google-token-expired)=
### O token de atualização do Google expirou
  - Os tokens de atualização (refresh tokens) OAuth2 do Google expiram se não forem usados durante 6 meses e também podem deixar de ser válidos noutras situações (por exemplo, se alterou a senha da sua conta Google ou se retirou o acesso manualmente). Para mais informações, veja a [documentação OAuth2 do Google](https://developers.google.com/identity/protocols/oauth2).
  - No [registo da compilação](#aaps-ci-read-the-logs), o passo **Retrieving Google Drive access token** falha com `invalid_grant` e `Token has been expired or revoked.`:

  ![aaps_ci_token_expired](../images/Building-the-App/CI/aaps_ci_token_expired.png)

  - Se a sua compilação falhar por causa de um token de atualização do Google expirado ou retirado, tem de repetir os passos de [Autorização do Google Drive](#aaps-ci-google-drive-auth) para obter um novo token `GDRIVE_OAUTH2`, [atualizar o secret](#aaps-ci-update-secret) no seu repositório GitHub e depois [executar de novo a compilação](#aaps-ci-rerun).
  - Se a autorização falhar outra vez, ou se o Google já não pedir o seu consentimento, retire primeiro o acesso do AAPS à sua conta Google, veja [abaixo](#aaps-ci-google-remove-access).

(aaps-ci-google-remove-access)=
### Retirar o acesso do AAPS à sua conta Google e reiniciar a autorização
  - Se a autorização do Google Drive continuar a falhar, ou se quiser começar de novo do zero, retire primeiro o acesso que deu ao AAPS e depois faça a autorização outra vez.
  - No telefone, abra [https://myaccount.google.com](https://myaccount.google.com), toque em **Security** (Segurança), desça até **Your connections to third-party apps & services** (As suas ligações a apps e serviços de terceiros) e abra a lista de aplicações ligadas. Também pode ir diretamente para [https://myaccount.google.com/connections](https://myaccount.google.com/connections).
  - Toque em **AAPS** na lista.

  ![aaps_ci_google_access_1](../images/Building-the-App/CI/aaps_ci_google_access_1.png)

  - A página mostra o acesso que deu ao AAPS (os ficheiros do Google Drive usados com a aplicação). Toque em **Delete all** (Eliminar tudo) para retirar a ligação, ou toque em **See details** (Ver detalhes) para a ver primeiro.

  ![aaps_ci_google_access_2](../images/Building-the-App/CI/aaps_ci_google_access_2.png)

  - Na página de detalhes, toque em **Remove all access** (Remover todo o acesso).

  ![aaps_ci_google_access_3](../images/Building-the-App/CI/aaps_ci_google_access_3.png)

  - Toque em **Confirm** (Confirmar).

  ![aaps_ci_google_access_4](../images/Building-the-App/CI/aaps_ci_google_access_4_confirm.png)

  - O Google confirma que o AAPS já não tem acesso. O AAPS já não aparece na lista de aplicações ligadas.

  ![aaps_ci_google_access_5](../images/Building-the-App/CI/aaps_ci_google_access_5_removed.png)

  - Agora reinicie a autorização do zero: feche **tanto** a página de preparação como a aplicação de gestão de ficheiros, abra de novo o aaps-ci-preparation.html a partir do gestor de ficheiros e repita os passos de [Autorização do Google Drive](#aaps-ci-google-drive-auth). O Google vai pedir-lhe de novo para conceder o acesso e a página vai dar-lhe um novo token `GDRIVE_OAUTH2`.
  - [Atualize o secret `GDRIVE_OAUTH2`](#aaps-ci-update-secret) no seu repositório GitHub com o novo token e depois [execute de novo a compilação](#aaps-ci-rerun).

(aaps-ci-disable-software)=
### Disable Software That May Interfere With OAuth Verification
  - Disable any VPN or security app (firewall, antimalware,...) on the phone before trying to get the OAuth key.

(aaps-ci-actions-permission)=
### Verificar as definições de permissões do GitHub Actions
  - Confirme que as políticas do GitHub Actions estão definidas como «Allow all actions and reusable workflows» (permitir todas as ações e workflows reutilizáveis) (Settings → Actions → General). Se o alterar, toque em **Save** por baixo das opções.

  ![aaps_ci_actions_permission](../images/Building-the-App/CI/aaps-ci-actions-permission.png)

`actions/checkout@v4` and `actions/setup-java@v4` are not allowed to be used in `xxxxx/AndroidAPS`. Actions in this workflow must be: within a repository owned by `xxxxx`

(aaps-ci-workflow-permissions)=
### Verificar as definições de permissões dos workflows do GitHub
  - Se a compilação falhar logo no início com um erro «Invalid workflow file» (ficheiro de workflow inválido) parecido com o de baixo, as permissões predefinidas dos workflows do seu repositório são demasiado restritas:

```
Invalid workflow file
The workflow is not valid. .github/workflows/aaps-ci.yml (Line: 361, Col: 3):
Error calling workflow 'xxxxx/AndroidAPS/.github/workflows/cleanup-workflow-runs.yml@...'.
The nested job 'cleanup' is requesting 'actions: write', but is only allowed 'actions: none'.
```

  - Confirme que as permissões dos workflows estão definidas como «Read and write permissions» (permissões de leitura e escrita) (Settings → Actions → General → Workflow permissions). Depois guarde e execute de novo o workflow de compilação.

  ![aaps_ci_workflow_permissions](../images/Building-the-App/CI/aaps-ci-workflow-permissions.jpg)

(aaps-ci-password-special-characters)=
### A compilação falha ao verificar a senha da keystore
  - No [registo da compilação](#aaps-ci-read-the-logs), o passo **Validating keystore, alias and password** falha com `Either KEYSTORE_BASE64, KEYSTORE_PASSWORD, KEY_PASSWORD, or KEY_ALIAS is incorrect`, seguido de `Keystore was tampered with, or password was incorrect`. A compilação para aí: a keystore e as senhas são verificadas antes de o AAPS ser compilado.

  ![Senha da keystore errada no registo da compilação](../images/Building-the-App/CI/aaps_ci_password_wrong.png)

  - O workflow de compilação mantém todos os caracteres das suas senhas sem alterações. Introduza `KEYSTORE_PASSWORD` e `KEY_PASSWORD` exatamente como são, sem acrescentar uma barra invertida ou qualquer outro carácter de escape. Se acrescentou barras invertidas, [atualize os secrets](#aaps-ci-update-secret) com a senha exatamente como ela é. O exemplo abaixo está errado: a senha é `Example2026`, a barra invertida foi acrescentada.

  ![Senha introduzida com uma barra invertida a mais](../images/Building-the-App/CI/aaps_ci_password_escaped.png)

  - Se a compilação continuar a falhar ao assinar o APK, embora a senha esteja correta, e a senha tiver `$`, um acento grave (backtick), `"` ou `\`, o ficheiro de workflow no seu fork é anterior a setembro de 2026 e ainda interpreta estes caracteres. [Sincronize o seu fork](#Update-to-new-version-update-your-repo) com a versão dev mais recente e depois execute de novo o workflow de compilação.
  - A barra vertical `|` é um caso especial. A página de preparação da [Opção 1](#aaps-ci-option1) junta a keystore, as senhas e o alias num único secret `KEYSTORE_SET`, separados por `|`, e o workflow divide-o por esse carácter. A senha gerada pela página de preparação tem apenas letras e números, por isso isto não pode acontecer com a Opção 1. Só pode acontecer se tiver criado um secret `KEYSTORE_SET` manualmente a partir de uma senha que contém `|`. Nesse caso, elimine o `KEYSTORE_SET` e introduza em vez dele os secrets separados da [Opção 2](#aaps-ci-option2).
