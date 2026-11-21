(aaps-builder-setup)=

# Página de configuração do AAPS Builder

Compile o seu próprio app **AAPS** no GitHub. Nenhum programa para instalar, nenhum terminal. Leva cerca de 10 minutos na primeira vez; depois você mesmo inicia cada compilação.

Cada passo é explicado em mais detalhes, com capturas de tela, em [Compilação no navegador com o AAPS Builder](#aaps-builder). Deixe essa página aberta em outra aba.

Os botões abaixo abrem o GitHub em uma nova aba do Chrome. Para voltar a esta página, toque no botão de abas ao lado da barra de endereço do Chrome (o quadrado com um número) e escolha esta página.

(aaps-builder-setup-step1)=

## Passo 1 – Crie o seu repositório de compilação privado

Isso cria a sua própria cópia privada do AAPS Builder na sua conta do GitHub: um repositório que já tem o workflow de compilação. Só você pode vê-lo, assim como os apps que ele compila. Você **não** precisa fazer um fork do AndroidAPS: o código-fonte do AAPS é baixado do repositório oficial do AndroidAPS a cada compilação.

<label class="aapsb-label" for="aapsb-user">Your GitHub username (seu nome de usuário do GitHub)</label>
<input class="aapsb-input" type="text" id="aapsb-user" autocomplete="username" spellcheck="false" placeholder="my-github-name" />
<span class="aapsb-msg" id="aapsb-userMsg"></span>

Primeiro entre no github.com neste navegador (não tem conta? crie uma de graça). Depois volte aqui. Use o seu nome de usuário (mostrado no seu perfil do GitHub), não o seu e-mail: a página pergunta ao GitHub se esse nome de usuário existe.

<label class="aapsb-label" for="aapsb-repo">Name of your repository (nome do seu repositório)</label>
<input class="aapsb-input" type="text" id="aapsb-repo" spellcheck="false" placeholder="my-aaps" />

Mantenha a sugestão. Já criou o seu repositório com outro nome? Digite esse nome exato aqui.

```{note}
**Já tem um repositório do AAPS Builder** (feito com uma versão anterior desta página)? Não crie um novo: digite o nome exato dele aqui, pule o botão abaixo e atualize o workflow dele uma vez: veja **Updating your copy** (Atualizar a sua cópia) no fim deste passo. Os seus secrets continuam como estão.

Se mesmo assim você quiser um repositório novo, escolha um nome que você ainda não tem, por exemplo `my-aaps-2`, e use a mesma keystore no passo 2.

Não digite o nome do seu fork do AndroidAPS: um fork é público e já compila com o seu próprio workflow **AAPS CI**.
```

Your repository: <code class="aapsb-repoUrl"></code>

Confira este nome antes de usar os botões abaixo: a página lembra o nome da sua última visita.

<a class="aapsb-btn" id="aapsb-createRepo" target="_blank" rel="noopener">Create my private repository</a>

Na página do GitHub que abrir, tudo já está preenchido: o modelo `nightscout/aaps-builder`, a sua conta como proprietário, o nome do seu repositório e **Private**. Não mude nada e deixe **Include all branches** desmarcado.

1. Clique no botão verde **Create repository**.
2. O GitHub mostra o seu novo repositório com uma pasta `.github` e um arquivo `README.md`: o workflow de compilação está nele. Volte a esta página para o passo 2.

```{admonition} Your new repository is empty (no files)?
:class: warning

Ele não foi criado a partir do modelo. Exclua-o (**Settings** → fim da página → **Delete this repository**) e depois toque de novo em **Create my private repository**.
```

```{admonition} GitHub says "my-aaps already exists in this account"?
:class: tip

Você já tem o seu repositório: feche a aba do GitHub e continue nesta página. Se a sua chave já estiver nele, continue com o [passo 4](#aaps-builder-setup-step4). See [troubleshooting](#aaps-builder-ts-repo-exists).
```

```{admonition} Updating your copy (existing AAPS Builder repository)
:class: dropdown

As etapas de compilação são atualizadas para você: em cada compilação, o seu repositório usa a versão publicada pelos desenvolvedores do AAPS em nightscout/aaps-builder, e nada muda no seu repositório. Você só substitui o seu arquivo de workflow quando [Atualizações e mudanças na documentação](../Maintenance/DocumentationUpdate.md) avisar (por exemplo, para uma nova variante de compilação), ou uma vez, se o seu repositório foi feito com uma versão anterior desta página ou a partir do modelo antigo. O seu secret `KEYSTORE_SET` continua como está.

1. <a class="aapsb-btn aapsb-secondary" href="https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/build.yml" target="_blank" rel="noopener">Open the newest workflow</a>

   Em um computador, clique no **ícone de copiar** ("Copy raw file") no canto superior direito do arquivo. Em um telefone, abra a <a href="https://raw.githubusercontent.com/nightscout/aaps-builder/main/.github/workflows/build.yml" target="_blank" rel="noopener">versão em texto simples</a>, mantenha o dedo pressionado sobre o texto → **Selecionar tudo** → **Copiar**.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openWorkflowFile" target="_blank" rel="noopener">Open my workflow file</a>

   Abre `.github/workflows/build.yml` em <code class="aapsb-repoUrl"></code>. Toque no menu **⋯** no canto superior direito do arquivo e depois em **Edit file… In place** (em um computador, clique no lápis).
3. Substitua todo o texto pelo workflow copiado (em um telefone: mantenha pressionado → **Selecionar tudo** → **Colar**) e depois clique duas vezes em **Commit changes…**. A primeira linha do arquivo mostra a versão dele.
```

(aaps-builder-setup-step2)=

## Passo 2 – A sua chave de assinatura

O app precisa ser assinado com a sua própria chave. Use sempre a mesma chave; senão você precisa desinstalar o AAPS (e perder as configurações dele) para atualizar. Escolha uma das duas abas.

`````{tab-set}

````{tab-item} I already have a keystore
Por exemplo, do Android Studio (.jks).

<label class="aapsb-label" for="aapsb-ksFile">Keystore file (arquivo da keystore)</label>
<input type="file" id="aapsb-ksFile" accept=".jks,.keystore,.p12,.pfx,application/octet-stream">

<label class="aapsb-label" for="aapsb-ksPass">Keystore password (senha da keystore)</label>
<input class="aapsb-input" type="password" id="aapsb-ksPass" autocomplete="off">

<label class="aapsb-label" for="aapsb-ksAlias">Key alias (alias da chave)</label>
<select class="aapsb-input" id="aapsb-ksAliasSel" hidden></select>
<input class="aapsb-input" type="text" id="aapsb-ksAlias" autocomplete="off" spellcheck="false" placeholder="key0">

<label class="aapsb-check"><input type="checkbox" id="aapsb-samePass" checked> Key password is the same as the keystore password (a senha da chave é a mesma da keystore)</label>

<div id="aapsb-keyPassWrap" hidden>

<label class="aapsb-label" for="aapsb-keyPass">Key password (senha da chave)</label>
<input class="aapsb-input" type="password" id="aapsb-keyPass" autocomplete="off">

</div>

<button class="aapsb-btn" type="button" id="aapsb-haveGo">Check and continue</button> <span class="aapsb-msg" id="aapsb-haveMsg"></span>
````

````{tab-item} Create a new key
Primeira vez que você compila o AAPS? Uma nova chave é criada aqui, no seu navegador. Nada é enviado para lugar nenhum.

<label class="aapsb-label" for="aapsb-newPass">Escolha uma senha (pelo menos 8 caracteres, sem letras acentuadas como á, ç, ã)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass" autocomplete="new-password">

<label class="aapsb-label" for="aapsb-newPass2">Repita a senha</label>
<input class="aapsb-input" type="password" id="aapsb-newPass2" autocomplete="new-password">

<button class="aapsb-btn" type="button" id="aapsb-newGo">Create key</button> <span class="aapsb-msg" id="aapsb-newMsg"></span>

<div class="aapsb-box" id="aapsb-backupBox" hidden>

**Salve um backup da sua chave!**

Baixe o arquivo. Guarde estes três itens juntos, em um lugar seguro fora do seu telefone (por exemplo, no seu próprio armazenamento na nuvem):

- o arquivo `aaps-keystore.jks`
- a sua senha
- o alias da chave: **`key0`**

Você vai precisar dos três se um dia compilar o AAPS de outra forma, por exemplo com o Android Studio.

<button class="aapsb-btn" type="button" id="aapsb-downloadKs">Download backup (aaps-keystore.jks)</button>

</div>
````

`````
(aaps-builder-setup-step3)=
## Passo 3 – Entregue a chave ao seu repositório
<span id="aapsb-s3wait">Termine o passo 2 primeiro.</span>

<div id="aapsb-s3ready" hidden>
  1. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets" target="_blank" rel="noopener">Open the secrets page</a> Abre: <code class="aapsb-repoUrl"></code> Aparece "Page not found" (404)? Primeiro verifique se você entrou no github.com neste navegador: o GitHub mostra 404 para repositórios privados quando você não está conectado. Senão, o seu nome de usuário ou o nome do repositório no passo 1 não corresponde ao seu repositório: verifique-os no github.com e digite-os no passo 1. 2. Toque em "Copy name" e depois cole-o no campo pequeno "Name": `KEYSTORE_SET` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="name">Copy name</button> 3. Toque em "Copy secret" e depois cole o código longo na caixa grande "Secret": <code id="aapsb-secretPreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="secret">Copy secret</button> <span class="aapsb-msg" id="aapsb-copyMsg"></span> O secret é um código muito longo (milhares de caracteres), NÃO a palavra KEYSTORE_SET. Copie e cole primeiro o nome, depois o código longo. 4. Toque em "Add secret". Pronto, você nunca mais precisa fazer isso.
</div>
(aaps-builder-setup-step4)=
## Passo 4 – Compile o app

1. <a class="aapsb-btn" id="aapsb-openActions" target="_blank" rel="noopener">Open the build page</a>

   Abre: <code class="aapsb-repoUrl"></code>

   Aparece "Page not found" (404)? Primeiro verifique se você entrou no github.com neste navegador: o GitHub mostra 404 para repositórios privados quando você não está conectado. Senão, o seu nome de usuário ou o nome do repositório no passo 1 não corresponde ao seu repositório: verifique-os no github.com e digite-os no passo 1. Abriu o app do GitHub em vez do navegador? Toque em "RUN WORKFLOW", verifique a versão e a variante e toque de novo em "RUN WORKFLOW". Se o app ainda mostrar "Nothing to see here", puxe a lista para baixo para ver a sua compilação.
2. Se for pedido, clique no botão verde para ativar os workflows.
A lista de workflows mostra duas entradas: use "Build AAPS". Ignore "AAPS Builder": ele contém as etapas de compilação e não tem o botão "Run workflow".
3. Clique em "Run workflow" e depois no botão verde "Run workflow". "latest" compila a versão mais recente do AAPS. ***dica:*** *você pode compilar outra versão digitando o nome da [tag](https://github.com/nightscout/AndroidAPS/tags) dela em vez de "latest"*
4. Espere cerca de 15–30 minutos. Um visto verde significa que terminou.
Quer um e-mail quando a compilação terminar? O GitHub só envia um e-mail quando uma compilação falha. Para receber um também quando ela der certo: no github.com, abra a sua foto de perfil → Settings → Notifications → System → Actions e desmarque "Only notify for failed workflows".

```{admonition} No "Build AAPS" / "Run workflow" button?
:class: warning

1. Abra o seu repositório e verifique se ele tem uma pasta `.github` com o arquivo `workflows/build.yml`. Se o repositório estiver vazio, ele não foi criado a partir do modelo: exclua-o (**Settings** → fim da página → **Delete this repository**) e faça de novo o [passo 1](#aaps-builder-setup-step1) com o botão.
2. O arquivo está lá, mas o GitHub mostra "This workflow does not exist": veja a [resolução de problemas](#aaps-builder-ts-workflow-not-found).
3. Abra a aba Actions. Se disser que os workflows estão desativados, clique no botão verde para ativá-los. Depois clique em "Build AAPS" na lista.
```

(aaps-builder-setup-step5)=

## Passo 5 – Instale no seu telefone

```{admonition} Before every update: back up your settings!
:class: warning

1. No AAPS: Manutenção → Exportar configurações. (Faça isso regularmente de qualquer forma, por exemplo depois de mudar o perfil ou uma vez por mês.)
2. Copie o arquivo exportado PARA FORA do telefone, por exemplo para o Google Drive ou o Dropbox. Um backup que fica só no telefone se perde junto com o telefone.
3. Guarde lá também os arquivos APK e várias exportações mais antigas. Assim você sempre pode voltar atrás.

[Como exportar as configurações](#ExportImportSettings-Settings-Export) · [FAQ do AAPS: como organizar os backups](#FAQ-organize-backups)
```

1. Abra esta página no seu telefone, no navegador web (Chrome). Entre no github.com se for pedido.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openRuns" target="_blank" rel="noopener">Open my builds</a>

   Abriu o app do GitHub em vez do navegador? Ele não consegue baixar as compilações. No app, abra a compilação mais recente e toque em "Artifacts ↗", ou toque no ícone de compartilhar e escolha Chrome (ou "Copy link" (Copiar link) e depois cole o link na barra de endereço do Chrome). Continue no Chrome.

   Aparece "Page not found" (404)? Primeiro verifique se você entrou no github.com neste navegador: o GitHub mostra 404 para repositórios privados quando você não está conectado. Senão, o seu nome de usuário ou o nome do repositório no passo 1 não corresponde ao seu repositório: verifique-os no github.com e digite-os no passo 1.

   Para que os links do GitHub não abram mais no app: Settings (Configurações) do Android → Apps → GitHub → Open by default (Abrir por padrão) → desative "Open supported links" (Abrir links compatíveis).
3. Toque na compilação mais recente com um visto verde ✅.
4. Role para baixo até o resumo da compilação e toque no link grande "📱 Download AAPS …" (ou role mais para baixo até "Artifacts" e toque em aaps-….apk). Role com o dedo sobre o texto, não sobre o diagrama dos passos da compilação.
5. Quando o download terminar, toque no arquivo e escolha Install (Instalar). Se for pedido, permita a instalação de apps desta fonte.
6. aaps-wear-….apk é para um relógio inteligente (smartwatch). Ignore-o se você não usa um.

O APK não aparece em "Code" no seu repositório, só na página da compilação. Ele fica guardado por 14 dias.

Nova versão do AAPS? Faça backup das suas configurações e depois compile com o [passo 4](#aaps-builder-setup-step4). O seu repositório nunca compila nada sozinho.

(aaps-builder-setup-step6)=

## Passo 6 – Opcional: receba o app no Google Drive

Quer que o APK apareça no seu Google Drive (guardado para sempre)? Adicione mais um secret, GDRIVE_OAUTH2. Esta página o obtém do Google para você. Assim, o AAPS só pode ver e mudar os arquivos que ele mesmo cria no seu Google Drive, nada mais.

1. <a class="aapsb-btn" id="aapsb-googleAuth" target="_blank" rel="noopener">Connect Google Drive</a>

   O Google abre em uma nova aba. Escolha a sua conta do Google e permita que o AAPS veja e mude os seus próprios arquivos. Se o Google disser que o app não foi verificado, toque em "Advanced" (Avançado) e depois em "Go to …" (Acessar …).
2. Depois a nova aba mostra um erro como **"This site can't be reached"** ou **"127.0.0.1 refused to connect"**. **Isso é esperado.** A resposta do Google está no endereço dessa aba.

   Toque na barra de endereço dessa aba e depois no ícone de copiar ao lado do endereço (em um computador: selecione o endereço completo e copie-o). Ele começa com `http://127.0.0.1:47913/`. Volte a esta página em poucos minutos: a resposta só vale por pouco tempo.
3. <label class="aapsb-label" for="aapsb-googleUrl">Cole aqui o endereço copiado</label> <input class="aapsb-input" type="url" id="aapsb-googleUrl" autocomplete="off" spellcheck="false" placeholder="http://127.0.0.1:47913/aaps-builder?…" /> <button class="aapsb-btn" type="button" id="aapsb-googleGo">Get GDRIVE_OAUTH2</button> <span class="aapsb-msg" id="aapsb-googleMsg"></span>

<div id="aapsb-gdriveReady" hidden>

4. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets2" target="_blank" rel="noopener">Open the secrets page</a>

   Abre: <code class="aapsb-repoUrl"></code>

   Aparece "Page not found" (404)? Primeiro verifique se você entrou no github.com neste navegador: o GitHub mostra 404 para repositórios privados quando você não está conectado. Senão, o seu nome de usuário ou o nome do repositório no passo 1 não corresponde ao seu repositório: verifique-os no github.com e digite-os no passo 1.
5. Toque em "Copy name" e depois cole-o no campo pequeno "Name": `GDRIVE_OAUTH2` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="gdrive">Copy name</button>
6. Toque em "Copy secret" e depois cole o código na caixa grande "Secret": <code id="aapsb-gdrivePreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="gdriveValue">Copy secret</button> <span class="aapsb-msg" id="aapsb-gdriveCopyMsg"></span>
7. Toque em "Add secret".

</div>

```{admonition} Already have a GDRIVE_OAUTH2 value?
:class: dropdown

Um valor da página de preparação do AAPS da outra compilação no navegador também funciona: abra a página de secrets, adicione o nome `GDRIVE_OAUTH2` e cole o seu valor. Veja [Salvar as compilações no Google Drive](#aaps-builder-google-drive).
```

Na próxima compilação, os APKs também são salvos no Google Drive, na pasta AAPS/&lt;version&gt;.

Se você não compilar por 6 meses, ou se mudar a sua senha do Google, o Google encerra o acesso. A compilação então avisa isso: refaça este passo.

----

Tudo nesta página roda no seu navegador. A sua chave e as suas senhas nunca são enviadas para lugar nenhum, exceto onde você mesmo as cola. Só o seu nome de usuário do GitHub é enviado ao GitHub, para verificar se ele existe. No passo 6, a resposta do Google é enviada somente ao Google, para obter o GDRIVE_OAUTH2. O workflow de compilação é mantido pelos desenvolvedores do AAPS em [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder), com base no AAPS Builder (AGPL-3.0).

<div id="aapsb-msgs" hidden>

- <span data-aapsb-msg="copied">Código longo copiado: cole-o na caixa grande "Secret" e depois toque em "Add secret".</span>
- <span data-aapsb-msg="copiedName">Nome copiado: cole-o no campo pequeno "Name".</span>
- <span data-aapsb-msg="userOk">✓ GitHub user found (usuário do GitHub encontrado).</span>
- <span data-aapsb-msg="userBad">✗ No GitHub user with this name (nenhum usuário do GitHub com este nome). Use o seu nome de usuário (mostrado no seu perfil do GitHub), não o seu e-mail.</span>
- <span data-aapsb-msg="copiedShort">Copiado ✓</span>
- <span data-aapsb-msg="needUser">Primeiro digite o seu nome de usuário do GitHub no passo 1.</span>
- <span data-aapsb-msg="errPipe">As senhas e o alias não podem ter o caractere |</span>
- <span data-aapsb-msg="errNoFile">Escolha o seu arquivo de keystore.</span>
- <span data-aapsb-msg="errEmpty">Preencha a senha e o alias.</span>
- <span data-aapsb-msg="errPass">Senha da keystore errada.</span>
- <span data-aapsb-msg="errKeyPass">Senha da chave errada.</span>
- <span data-aapsb-msg="errAlias">Alias não encontrado na keystore. Disponíveis: {aliases}</span>
- <span data-aapsb-msg="errFormat">Isto não parece ser um arquivo de keystore.</span>
- <span data-aapsb-msg="okHave">Keystore OK! Continue com o passo 3.</span>
- <span data-aapsb-msg="okHaveUnchecked">Keystore lida. A senha será verificada quando você compilar. Continue com o passo 3.</span>
- <span data-aapsb-msg="errShort">A senha precisa ter pelo menos 8 caracteres.</span>
- <span data-aapsb-msg="errAscii">Use somente a–z, A–Z, 0–9 e símbolos como ! ? # – sem espaços, sem letras acentuadas (á, ç, ã…) e sem |</span>
- <span data-aapsb-msg="errMatch">As senhas não são iguais.</span>
- <span data-aapsb-msg="working">Criando a chave…</span>
- <span data-aapsb-msg="okNew">Key created (chave criada). Baixe o backup abaixo e depois continue com o passo 3.</span>
- <span data-aapsb-msg="gNoUrl">Primeiro cole o endereço completo da aba do Google.</span>
- <span data-aapsb-msg="gNoCode">Este endereço não tem resposta do Google. Copie o endereço completo da aba que mostra o erro, que começa com http://127.0.0.1:47913/</span>
- <span data-aapsb-msg="gDenied">O acesso ao Google não foi permitido. Toque de novo em "Connect Google Drive" e permita o acesso.</span>
- <span data-aapsb-msg="gOldUrl">Este endereço é de uma tentativa anterior. Toque de novo em "Connect Google Drive" e use o novo endereço.</span>
- <span data-aapsb-msg="gWorking">Perguntando ao Google…</span>
- <span data-aapsb-msg="gFailed">O Google não aceitou ({error}). A resposta só vale por poucos minutos e só uma vez: toque de novo em "Connect Google Drive".</span>
- <span data-aapsb-msg="gNoRefresh">O Google não enviou acesso de longo prazo. Toque de novo em "Connect Google Drive".</span>
- <span data-aapsb-msg="gOk">O GDRIVE_OAUTH2 está pronto. Adicione-o como secret abaixo.</span>
- <span data-aapsb-msg="gCopied">Código copiado: cole-o na caixa grande "Secret" e depois toque em "Add secret".</span>

</div>

<style>
  .rst-content .aapsb-label { display: block; font-weight: 700; margin: 14px 0 4px; }
  .rst-content .aapsb-input { display: block; width: 100%; max-width: 480px; padding: 8px 10px; font: inherit; border: 1px solid #ccc; border-radius: 4px; }
  .rst-content .aapsb-check { display: flex; gap: 8px; align-items: center; margin-top: 10px; }
  .rst-content .aapsb-btn, .rst-content a.aapsb-btn:visited {
    display: inline-block; margin: 4px 0; padding: 8px 16px; border-radius: 4px; border: 1px solid #2980b9; cursor: pointer;
    background: #2980b9; color: #fff; font: inherit; font-weight: 700; text-decoration: none;
  }
  .rst-content .aapsb-btn:hover { background: #1f6391; color: #fff; }
  .rst-content .aapsb-btn.aapsb-secondary, .rst-content a.aapsb-btn.aapsb-secondary:visited { background: transparent; color: #2980b9; }
  .rst-content .aapsb-btn.aapsb-secondary:hover { background: #e7f2fa; }
  .rst-content .aapsb-btn:disabled { opacity: .45; cursor: not-allowed; }
  .rst-content .aapsb-msg { display: inline-block; margin-left: 6px; }
  .rst-content .aapsb-msg.ok { color: #1a7f37; } .rst-content .aapsb-msg.err { color: #cf222e; } .rst-content .aapsb-msg.warn { color: #9a6700; }
  .rst-content .aapsb-box { background: #e7f2fa; border-radius: 4px; padding: 12px 14px; margin: 12px 0; }
  .rst-content section.aapsb-done > h2::after { content: " ✓"; color: #1a7f37; }
  .rst-content [hidden] { display: none !important; }
</style>

<script src="../_static/aaps-builder/aaps-builder.forge.min.js"></script>
<script>
// AAPS Builder setup page logic. Walks the user through creating a private copy of the
// github.com/nightscout/aaps-builder template (the build workflow is in it) and creating the
// KEYSTORE_SET secret. The repository then builds AAPS from the official source,
// github.com/nightscout/AndroidAPS, with GitHub Actions.
//
// The keystore and passwords never leave this browser. The only requests are asking GitHub's
// public API whether the typed username exists (only the name is sent) and, in the optional
// Google Drive step, sending Google's one-time answer to Google's token endpoint. The page's
// Content-Security-Policy (set in docs/shared.conf.py) allows only the AAPS documentation site
// itself, https://api.github.com and https://oauth2.googleapis.com/token.
//
// Based on AAPS Builder by the AAPS Builder authors (github.com/dio99/aaps-builder), GNU Affero
// General Public License v3.0 (AGPL-3.0). Modified for the AAPS documentation: texts in the page
// so they can be translated, workflow maintained in github.com/nightscout/aaps-builder.
// Vendor library: _static/aaps-builder/aaps-builder.forge.min.js = node-forge 1.3.1
// (BSD-3-Clause or GPL-2.0), https://github.com/digitalbazaar/forge, the unmodified
// dist/forge.min.js of the npm package node-forge@1.3.1.
(() => {
  const TEMPLATE = { owner: 'nightscout', name: 'aaps-builder' };
  const REPO_NAME = 'my-aaps';
  const WORKFLOW_PATH = '.github/workflows/build.yml';       // where the template puts it

  const $ = id => document.getElementById('aapsb-' + id);
  // The texts are in the page (hidden list above), so they are translated with it.
  const M = {};
  document.querySelectorAll('[data-aapsb-msg]').forEach(el => { M[el.dataset.aapsbMsg] = el.textContent.trim(); });
  const t = (key, vars = {}) => M[key].replace(/\{(\w+)\}/g, (all, k) => k in vars ? vars[k] : all);
  const store = {
    get: k => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch {} }
  };
  const done = step => { const el = document.getElementById('aaps-builder-setup-step' + step); if (el) el.closest('section').classList.add('aapsb-done'); };

  // ---------- step 1: links ----------
  const userInput = $('user');
  userInput.value = store.get('ghUser') || '';
  const user = () => userInput.value.trim().replace(/^@/, '');
  const repoInput = $('repo');
  repoInput.value = store.get('ghRepo') || REPO_NAME;
  const repo = () => repoInput.value.trim() || REPO_NAME;

  const LINKS = [
    ['openWorkflowFile', '/blob/HEAD/' + WORKFLOW_PATH],
    ['openSecrets', '/settings/secrets/actions/new'],
    ['openSecrets2', '/settings/secrets/actions/new'],
    ['openActions', '/actions/workflows/build.yml'],
    ['openRuns', '/actions/workflows/build.yml']
  ];

  function updateLinks() {
    const u = user();
    store.set('ghUser', u);
    store.set('ghRepo', repo());
    // GitHub's own "Use this template" page, with its documented prefill parameters: the copy is
    // private and contains the build workflow. owner=@me is the signed-in user.
    const p = new URLSearchParams({ template_owner: TEMPLATE.owner, template_name: TEMPLATE.name,
                                    owner: '@me', name: repo(), visibility: 'private' });
    $('createRepo').href = 'https://github.com/new?' + p;
    document.querySelectorAll('.aapsb-repoUrl').forEach(el => { el.textContent = `github.com/${u || '…'}/${repo()}`; });
    const base = `https://github.com/${encodeURIComponent(u)}/${encodeURIComponent(repo())}`;
    for (const [id, path] of LINKS) $(id).href = u ? base + path : '#aaps-builder-setup-step1';
  }
  userInput.addEventListener('input', updateLinks);
  // Check that the username exists (GitHub's public API, sends only the name)
  let userTimer;
  async function checkUser() {
    const u = user();
    if (!u) { $('userMsg').textContent = ''; return; }
    try {
      const r = await fetch(`https://api.github.com/users/${encodeURIComponent(u)}`);
      if (u !== user()) return;
      if (r.status === 200) msg('userMsg', t('userOk'), 'ok');
      else if (r.status === 404) msg('userMsg', t('userBad'), 'err');
      else $('userMsg').textContent = '';
    } catch { $('userMsg').textContent = ''; }
  }
  userInput.addEventListener('input', () => { clearTimeout(userTimer); userTimer = setTimeout(checkUser, 600); });
  repoInput.addEventListener('input', updateLinks);
  for (const [id] of LINKS) {
    $(id).addEventListener('click', e => { if (!user()) { e.preventDefault(); userInput.focus(); alert(t('needUser')); } });
  }
  $('createRepo').addEventListener('click', () => done(1));

  // ---------- helpers ----------
  const utf8 = s => new TextEncoder().encode(s);
  function bytesToB64(bytes) {
    let s = '';
    for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(s);
  }
  const binStrToBytes = s => Uint8Array.from(s, c => c.charCodeAt(0));
  const sha1 = async (...parts) => {
    const all = new Uint8Array(parts.reduce((n, p) => n + p.length, 0));
    let o = 0; for (const p of parts) { all.set(p, o); o += p.length; }
    return new Uint8Array(await crypto.subtle.digest('SHA-1', all));
  };
  const eq = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
  // JKS uses the password as UTF-16BE bytes
  const utf16be = s => { const b = new Uint8Array(s.length * 2); for (let i = 0; i < s.length; i++) { b[2*i] = s.charCodeAt(i) >> 8; b[2*i+1] = s.charCodeAt(i) & 255; } return b; };

  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); }
    catch {
      const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta);
      ta.select(); document.execCommand('copy'); ta.remove();
    }
  }
  function msg(id, text, cls) { const el = $(id); el.className = 'aapsb-msg ' + cls; el.textContent = text; }

  let secretValue = null;
  function setSecret(ksBytes, storePass, alias, keyPass) {
    const raw = [bytesToB64(ksBytes), storePass, alias, keyPass].join('|');
    secretValue = bytesToB64(utf8(raw));
    $('secretPreview').textContent = secretValue.slice(0, 16) + '…';
    done(2);
    $('s3wait').hidden = true;
    $('s3ready').hidden = false;
  }

  // ---------- step 2a: existing keystore ----------
  function parseJks(bytes) {
    const v = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    if (v.getUint32(0) !== 0xFEEDFEED) return null;
    let o = 12; const n = v.getUint32(8); const entries = [];
    const readUtf = () => { const len = v.getUint16(o); o += 2; const s = new TextDecoder().decode(bytes.subarray(o, o + len)); o += len; return s; };
    const skipCert = () => { if (v.getUint32(4) === 2) readUtf(); const len = v.getUint32(o); o += 4 + len; };
    for (let i = 0; i < n; i++) {
      const tag = v.getUint32(o); o += 4;
      const alias = readUtf(); o += 8;
      if (tag === 1) {
        const len = v.getUint32(o); o += 4;
        const key = bytes.subarray(o, o + len); o += len;
        const chain = v.getUint32(o); o += 4;
        for (let c = 0; c < chain; c++) skipCert();
        entries.push({ alias, key });
      } else { skipCert(); }
    }
    return { entries, body: bytes.subarray(0, o), digest: bytes.subarray(o, o + 20) };
  }

  // Sun JKS KeyProtector: verify key password without fully decrypting
  async function jksKeyPassOk(encKeyInfo, pass) {
    // EncryptedPrivateKeyInfo: SEQ { AlgId, OCTET STRING data }
    const asn = forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, encKeyInfo)));
    const data = binStrToBytes(asn.value[1].value);
    const salt = data.subarray(0, 20), enc = data.subarray(20, data.length - 20), check = data.subarray(data.length - 20);
    const pw = utf16be(pass);
    const plain = new Uint8Array(enc.length);
    let d = salt;
    for (let off = 0; off < enc.length; off += 20) {
      d = await sha1(pw, d);
      for (let j = 0; j < 20 && off + j < enc.length; j++) plain[off + j] = enc[off + j] ^ d[j];
    }
    return eq(await sha1(pw, plain), check);
  }

  let haveBytes = null, haveKind = null, haveJks = null;
  $('ksFile').addEventListener('change', async () => {
    const f = $('ksFile').files[0]; $('haveMsg').textContent = '';
    if (!f) return;
    haveBytes = new Uint8Array(await f.arrayBuffer());
    haveJks = null; haveKind = null;
    try { haveJks = parseJks(haveBytes); } catch { haveJks = null; }
    if (haveJks) {
      haveKind = 'jks';
      const sel = $('ksAliasSel');
      sel.innerHTML = '';
      haveJks.entries.forEach(e => sel.add(new Option(e.alias, e.alias)));
      if (haveJks.entries.length > 0) {
        sel.hidden = false; $('ksAlias').hidden = true; $('ksAlias').value = haveJks.entries[0].alias;
        sel.onchange = () => { $('ksAlias').value = sel.value; };
      }
    } else if (haveBytes[0] === 0x30) {
      haveKind = 'p12';
      $('ksAliasSel').hidden = true; $('ksAlias').hidden = false;
    } else {
      msg('haveMsg', t('errFormat'), 'err');
    }
  });
  $('samePass').addEventListener('change', () => { $('keyPassWrap').hidden = $('samePass').checked; });

  $('haveGo').addEventListener('click', async () => {
    const pass = $('ksPass').value, alias = $('ksAlias').value.trim();
    const keyPass = $('samePass').checked ? pass : $('keyPass').value;
    if (!haveBytes) return msg('haveMsg', t('errNoFile'), 'err');
    if (!haveKind) return msg('haveMsg', t('errFormat'), 'err');
    if (!pass || !alias || !keyPass) return msg('haveMsg', t('errEmpty'), 'err');
    if ([pass, alias, keyPass].some(s => s.includes('|'))) return msg('haveMsg', t('errPipe'), 'err');

    try {
      if (haveKind === 'jks') {
        const d = await sha1(utf16be(pass), utf8('Mighty Aphrodite'), haveJks.body);
        if (!eq(d, haveJks.digest)) return msg('haveMsg', t('errPass'), 'err');
        const entry = haveJks.entries.find(e => e.alias.toLowerCase() === alias.toLowerCase());
        if (!entry) return msg('haveMsg', t('errAlias', { aliases: haveJks.entries.map(e => e.alias).join(', ') }), 'err');
        if (!(await jksKeyPassOk(entry.key, keyPass))) return msg('haveMsg', t('errKeyPass'), 'err');
        setSecret(haveBytes, pass, entry.alias, keyPass);
        return msg('haveMsg', t('okHave'), 'ok');
      }
      // PKCS12
      let p12;
      try {
        const asn = forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, haveBytes)));
        p12 = forge.pkcs12.pkcs12FromAsn1(asn, pass);
      } catch (e) {
        if (/password|MAC/i.test(String(e && e.message))) return msg('haveMsg', t('errPass'), 'err');
        // Could not parse locally; let the build validate it
        setSecret(haveBytes, pass, alias, keyPass);
        return msg('haveMsg', t('okHaveUnchecked'), 'warn');
      }
      const names = [...new Set(p12.safeContents.flatMap(sc => sc.safeBags.flatMap(b => (b.attributes.friendlyName || []))))];
      if (names.length && !names.some(n => n.toLowerCase() === alias.toLowerCase())) {
        return msg('haveMsg', t('errAlias', { aliases: names.join(', ') }), 'err');
      }
      setSecret(haveBytes, pass, alias, keyPass);
      msg('haveMsg', t('okHave'), 'ok');
    } catch (e) {
      console.error(e);
      setSecret(haveBytes, pass, alias, keyPass);
      msg('haveMsg', t('okHaveUnchecked'), 'warn');
    }
  });

  // ---------- step 2b: new keystore ----------
  // Use the browser's cryptographic RNG for everything forge needs (salts, IVs, serial)
  forge.random.getBytesSync = n => String.fromCharCode.apply(null, crypto.getRandomValues(new Uint8Array(n)));
  forge.random.getBytes = (n, cb) => cb ? cb(null, forge.random.getBytesSync(n)) : forge.random.getBytesSync(n);
  let newKsBytes = null;
  $('newGo').addEventListener('click', async () => {
    const p1 = $('newPass').value, p2 = $('newPass2').value;
    if (p1.length < 8) return msg('newMsg', t('errShort'), 'err');
    if (p1 !== p2) return msg('newMsg', t('errMatch'), 'err');
    if (!/^[\x21-\x7e]+$/.test(p1) || p1.includes('|')) return msg('newMsg', t('errAscii'), 'err');
    $('newGo').disabled = true;
    msg('newMsg', t('working'), '');
    try {
      const kp = await crypto.subtle.generateKey(
        { name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' },
        true, ['sign', 'verify']);
      const pkcs8 = new Uint8Array(await crypto.subtle.exportKey('pkcs8', kp.privateKey));
      const key = forge.pki.privateKeyFromAsn1(forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, pkcs8))));
      const cert = forge.pki.createCertificate();
      cert.publicKey = forge.pki.setRsaPublicKey(key.n, key.e);
      cert.serialNumber = '01' + forge.util.bytesToHex(forge.random.getBytesSync(8));
      cert.validity.notBefore = new Date();
      cert.validity.notAfter = new Date(); cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 50);
      const subject = [{ name: 'commonName', value: 'AAPS' }];
      cert.setSubject(subject); cert.setIssuer(subject);
      cert.sign(key, forge.md.sha256.create());
      const asn = forge.pkcs12.toPkcs12Asn1(key, [cert], p1, { algorithm: '3des', friendlyName: 'key0', generateLocalKeyId: true });
      newKsBytes = binStrToBytes(forge.asn1.toDer(asn).getBytes());
      setSecret(newKsBytes, p1, 'key0', p1);
      $('backupBox').hidden = false;
      msg('newMsg', t('okNew'), 'ok');
    } catch (e) {
      console.error(e);
      msg('newMsg', String(e), 'err');
      $('newGo').disabled = false;
    }
  });
  $('downloadKs').addEventListener('click', () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([newKsBytes], { type: 'application/octet-stream' }));
    a.download = 'aaps-keystore.jks';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  // ---------- step 6: Google Drive access (GDRIVE_OAUTH2) ----------
  // The same Google OAuth client, scope and PKCE flow as the AAPS preparation page
  // (github.com/nightscout/aaps-ci-preparation), so the build workflow reads the value the same
  // way: base64(client_id|refresh_token). Google sends the browser to a loopback address where
  // nothing listens: the tab shows an error, but its address holds the answer. The user copies that
  // address here, and this page sends the code to Google's token endpoint, and nowhere else.
  // The PKCE verifier stays in this tab, so the code is useless to anything else that sees it.
  const GOOGLE_CLIENT_ID = '705061051276-5ssikkg2ag39l7hj9t63saq549n3s2n5.apps.googleusercontent.com';
  const GOOGLE_REDIRECT = 'http://127.0.0.1:47913/aaps-builder';
  const session = {
    get: k => { try { return sessionStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { sessionStorage.setItem(k, v); } catch {} }
  };
  const randomHex = n => [...crypto.getRandomValues(new Uint8Array(n))].map(b => b.toString(16).padStart(2, '0')).join('');
  const b64url = bytes => bytesToB64(bytes).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

  // The link is ready before the tap, so the browser opens it as a normal link and does not
  // block it as a pop-up.
  async function setGoogleLink(verifier, state) {
    const challenge = b64url(new Uint8Array(await crypto.subtle.digest('SHA-256', utf8(verifier))));
    const p = new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID, redirect_uri: GOOGLE_REDIRECT, response_type: 'code',
      scope: 'https://www.googleapis.com/auth/drive.file', access_type: 'offline',
      // consent: Google sends a refresh token only when the user is asked, also after an earlier grant
      prompt: 'consent', code_challenge_method: 'S256', code_challenge: challenge, state
    });
    $('googleAuth').href = 'https://accounts.google.com/o/oauth2/v2/auth?' + p;
  }
  // A new attempt: new verifier and state
  function newGoogleAttempt() {
    const verifier = randomHex(32), state = randomHex(16);
    session.set('gVerifier', verifier);
    session.set('gState', state);
    return setGoogleLink(verifier, state);
  }
  // Keep the attempt of this tab if the page is reloaded while the user is in the Google tab
  if (session.get('gVerifier') && session.get('gState')) setGoogleLink(session.get('gVerifier'), session.get('gState'));
  else newGoogleAttempt();

  let gdriveValue = null;
  $('googleGo').addEventListener('click', async () => {
    const text = $('googleUrl').value.trim();
    if (!text) return msg('googleMsg', t('gNoUrl'), 'err');
    let params;
    try { params = new URL(text).searchParams; } catch { return msg('googleMsg', t('gNoCode'), 'err'); }
    if (params.get('error')) return msg('googleMsg', t('gDenied'), 'err');
    const code = params.get('code');
    if (!code) return msg('googleMsg', t('gNoCode'), 'err');
    if (params.get('state') !== session.get('gState')) return msg('googleMsg', t('gOldUrl'), 'err');
    $('googleGo').disabled = true;
    msg('googleMsg', t('gWorking'), '');
    try {
      const r = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: GOOGLE_CLIENT_ID, code, code_verifier: session.get('gVerifier'),
          grant_type: 'authorization_code', redirect_uri: GOOGLE_REDIRECT
        })
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) {
        msg('googleMsg', t('gFailed', { error: data.error || r.status }), 'err');
        await newGoogleAttempt();
        return;
      }
      if (!data.refresh_token) { msg('googleMsg', t('gNoRefresh'), 'err'); await newGoogleAttempt(); return; }
      gdriveValue = bytesToB64(utf8(GOOGLE_CLIENT_ID + '|' + data.refresh_token));
      $('gdrivePreview').textContent = gdriveValue.slice(0, 16) + '…';
      $('gdriveReady').hidden = false;
      $('googleUrl').value = '';
      msg('googleMsg', t('gOk'), 'ok');
      done(6);
      await newGoogleAttempt();      // the code is used up; a new tap starts a new attempt
    } catch (e) {
      console.error(e);
      msg('googleMsg', t('gFailed', { error: String(e) }), 'err');
    } finally {
      $('googleGo').disabled = false;
    }
  });

  // ---------- step 3 / 6: copy secret names and values ----------
  document.querySelectorAll('[data-aapsb-copy]').forEach(b => b.addEventListener('click', async () => {
    const kind = b.dataset.aapsbCopy;
    const values = { name: 'KEYSTORE_SET', gdrive: 'GDRIVE_OAUTH2', secret: secretValue, gdriveValue };
    await copyText(values[kind]);
    if (kind === 'secret') msg('copyMsg', t('copied'), 'ok');
    if (kind === 'name') msg('copyMsg', t('copiedName'), 'ok');
    if (kind === 'gdriveValue') msg('gdriveCopyMsg', t('gCopied'), 'ok');
    const label = b.textContent;
    b.textContent = t('copiedShort');
    setTimeout(() => { b.textContent = label; }, 2000);
  }));

  updateLinks();
  checkUser();
})();
</script>
