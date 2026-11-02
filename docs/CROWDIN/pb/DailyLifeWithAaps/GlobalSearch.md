(global-search)=
# Pesquisa global

O **AAPS** v4 tem uma caixa de **pesquisa global** no topo da tela principal. Digite uma palavra e ela procura no app inteiro de uma só vez — plugins, diálogos, telas de configurações, preferências individuais — e, se você estiver online, também na **documentação do AndroidAPS**. É a forma mais rápida de ir até uma configuração ou tela sem precisar lembrar onde ela fica.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Abrir a pesquisa

Toque no campo **🔍 Pesquisar** no topo da **tela principal** (ao lado do menu ☰). Comece a digitar e os resultados aparecem enquanto você digita (depois de uma pequena pausa), agrupados por categoria:

![Resultados da pesquisa global, agrupados por categoria](../images/v4/Search/search_results.png)

Limpe a caixa com o **✕** ou feche a pesquisa com o botão **Voltar** do dispositivo.

---

## Pesquise em inglês *ou* no seu idioma

Esta é a parte que vale a pena saber: a pesquisa compara com **os dois** textos: o texto no seu **idioma selecionado** **e** o texto original em **inglês**.

- Se o seu app estiver, por exemplo, em alemão ou tcheco, você pode digitar a palavra **traduzida** **ou** a palavra em **inglês** — as duas encontram a configuração.
- Uma correspondência no título **traduzido** fica em primeiro lugar, depois no título em **inglês** e depois nas **descrições** traduzidas e em inglês.
- A comparação ignora **acentos/diacríticos** (então *ů* corresponde a *u*, *é* corresponde a *e*) e **não diferencia maiúsculas e minúsculas**.

Isso significa que um guia ou post de fórum escrito em inglês ainda leva você à configuração certa, mesmo quando o seu telefone mostra tudo traduzido.

---

## O que a pesquisa abrange

Os resultados são agrupados nestas categorias:

- **Plugins** — todos os plugins visíveis na sua compilação (os mesmos listados em [Configuração](../SettingUpAaps/ConfigBuilder.md)). Cada linha de plugin tem o seu **botão de ativação**, então você pode ativar ou desativar um plugin direto nos resultados — tocar na linha de um plugin desativado (que pode ser ligado e desligado) ativa esse plugin.
- **Diálogos** — as telas de tratamento/ação e de gerenciamento (Assistente de Bólus, Insulina, Bólus estendido, Calibração, Alvo temporário, Perfil, …). Telas que não se aplicam à sua compilação ficam de fora (por exemplo, *Parear com o dispositivo principal* em um dispositivo principal, *Clientes autorizados* em um cliente).
- **Categorias de preferências** — as **telas** de configurações e suas subtelas, tanto as próprias do app (Geral, Aparência, Proteção, Alertas, Manutenção, …) quanto as dos plugins, além dos pequenos grupos de configurações abertos a partir dos diálogos (botões de Preencher, passos dos botões de Insulina/Carboidratos, limites das luzes de status, configurações do assistente, …).
- **Preferências** — cada **configuração individual** que tem um título. Elas são filtradas para a sua compilação/modo, então você vê apenas as configurações que realmente se aplicam (APS / NSClient / controle da bomba).
- **Documentação** — páginas da **documentação do AndroidAPS** online (veja abaixo).

```{admonition} Settings that belong to a disabled plugin
:class: note
Uma preferência cujo plugin está **desativado** no momento continua aparecendo — **em cinza** e sem poder ser tocada — com a nota *“Plugin … desativado”*. Assim, você sabe que a configuração existe e qual plugin precisa ativar para chegar até ela.

![Uma configuração em cinza de um plugin desativado](../images/v4/Search/search_disabled_plugin.png)
```

---

## Resultados da documentação (online)

Enquanto a pesquisa local roda, o **AAPS** também consulta, ao mesmo tempo, a **documentação do AndroidAPS** oficial (hospedada no ReadTheDocs). As páginas encontradas aparecem em um grupo **Documentação** no final, cada uma com um ícone 📖, o título da seção e um pequeno trecho:

![Resultados da documentação (wiki) com trechos](../images/v4/Search/search_documentation.png)

- Se a documentação estiver traduzida para o idioma do seu app, o **AAPS** pesquisa as páginas traduzidas e as páginas em inglês ao mesmo tempo. As páginas no seu idioma vêm primeiro, depois as páginas em inglês que ainda não foram encontradas.
- Tocar em um resultado da documentação abre essa página no seu **navegador**.
- A pesquisa na documentação precisa de **internet** — quando você está offline, aparece a nota *“A pesquisa na documentação requer conexão com a internet”*, e os resultados locais (dentro do app) continuam funcionando normalmente.

---

## Abrir um resultado

Toque em um resultado para ir direto até ele:

- **Plugin** → abre esse plugin.
- **Diálogo** → abre essa tela ou diálogo.
- **Categoria de preferências** → abre essa tela de configurações.
- **Preferência** → abre a configuração **no lugar certo** (vai até ela dentro da sua tela).
- **Documentação** → abre a página no seu navegador.

Opening settings and protected actions still respects your **[protection](#Preferences-protection)** (PIN/password), exactly as it would if you had navigated there by hand. Depois de usar um resultado, você pode pressionar **Voltar** para retornar aos resultados da pesquisa.

---

## Atalhos para usuários avançados

Duas pesquisas especiais listam uma categoria inteira de uma vez:

- `%PLUGINS%` — lista **todos** os plugins.
- `%DIALOGS%` — lista **todos** os diálogos/telas de ação.

---

```{admonition} The index stays current
:class: note
O índice de pesquisa é criado na primeira vez que você pesquisa e fica pronto depois disso. Ele é recriado automaticamente quando você **ativa/desativa um plugin** ou **muda o idioma do app**, então os resultados sempre mostram a sua configuração atual.
```

---


<!-- =====================================================================
     Screenshots captured from a real master device (query "bolus"):
       - search_results.png        (categorized local results: Dialogs / Preference categories / Preferences)
       - search_disabled_plugin.png (greyed-out preference from a disabled plugin)
       - search_documentation.png   (online ReadTheDocs results with 📖 icon + snippets)
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
