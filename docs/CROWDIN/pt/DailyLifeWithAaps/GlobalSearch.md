(global-search)=
# Pesquisa global

O **AAPS** v4 tem uma caixa de **pesquisa global** no topo do ecrã principal. Escreva uma palavra e a pesquisa procura em toda a app de uma só vez — plugins, janelas, ecrãs de definições, preferências individuais — e, se estiver online, também na **documentação do AndroidAPS**. É a forma mais rápida de ir para uma definição ou um ecrã sem ter de se lembrar onde está.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Abrir a pesquisa

Toque no campo **🔍 Pesquisar** no topo da **Visão geral** (ao lado do menu ☰). Comece a escrever e os resultados aparecem enquanto escreve (após uma pequena pausa), agrupados por categoria:

![Resultados da pesquisa global, agrupados por categoria](../images/v4/Search/search_results.png)

Limpe a caixa com o **✕**, ou feche a pesquisa com o botão **Voltar** do dispositivo.

---

## Pesquisar em inglês *ou* na sua língua

Isto é importante saber: a pesquisa compara com **ambos**, o texto na **língua selecionada** **e** o texto original em **inglês**.

- Se a sua app estiver, por exemplo, em alemão ou checo, pode escrever a palavra **traduzida** **ou** a palavra em **inglês** — ambas encontram a definição.
- Uma correspondência no título **traduzido** fica em primeiro lugar, depois o título em **inglês**, depois as **descrições** traduzidas e em inglês.
- A comparação ignora **acentos/sinais diacríticos** (por isso *ů* corresponde a *u*, *é* corresponde a *e*) e **não distingue maiúsculas de minúsculas**.

Isto significa que um guia ou uma mensagem de fórum escrita em inglês continua a levá-lo à definição certa, mesmo quando o seu telefone mostra tudo traduzido.

---

## O que a pesquisa abrange

Os resultados são agrupados nestas categorias:

- **Plugins** — todos os plugins visíveis na sua compilação (os mesmos que aparecem em [Configuração](../SettingUpAaps/ConfigBuilder.md)). Cada linha de plugin tem o seu **interruptor de ativação**, por isso pode ativar ou desativar um plugin diretamente nos resultados — tocar na linha de um plugin desativado (que pode ser ligado/desligado) ativa-o.
- **Diálogos** — os ecrãs de tratamento/ação e de gestão (Assistente de Bólus, Insulina, Bólus Prolongado, Calibração, Alvo temporário, Perfil, …). Os ecrãs que não se aplicam à sua compilação ficam de fora (por exemplo *Emparelhar com o telefone principal* num telefone principal, *Clientes autorizados* num cliente).
- **Categorias de preferências** — os **ecrãs** de definições e os seus subecrãs, tanto os incorporados (Geral, Aparência, Proteção, Alertas, Manutenção, …) como os dos plugins, mais os pequenos grupos de definições abertos a partir das janelas (botões de preenchimento, passos dos botões de Insulina/Hidratos, limites das luzes de estado, definições do assistente, …).
- **Preferências** — todas as **definições individuais** que têm um título. Estas são filtradas conforme a sua compilação/modo, por isso só vê as definições que realmente se aplicam (APS / NSClient / controlo da bomba).
- **Documentação** — páginas da **documentação do AndroidAPS** online (ver abaixo).

```{admonition} Settings that belong to a disabled plugin
:class: note
Uma preferência cujo plugin está **desativado** continua a aparecer — **a cinzento** e sem poder ser tocada — com uma nota *«Plugin … desativado»*, para que saiba que a definição existe e que plugin deve ativar para lá chegar.

![Uma definição a cinzento de um plugin desativado](../images/v4/Search/search_disabled_plugin.png)
```

---

## Resultados da documentação (online)

Enquanto a pesquisa local decorre, o **AAPS** também consulta, em paralelo, a **documentação oficial do AndroidAPS** (alojada no ReadTheDocs). As páginas encontradas aparecem num grupo **Documentação** no fim, cada uma com um ícone 📖, o título da secção e um pequeno excerto:

![Resultados da documentação (wiki) com excertos](../images/v4/Search/search_documentation.png)

- Se a documentação estiver traduzida para a língua da sua app, o **AAPS** pesquisa ao mesmo tempo as páginas traduzidas e as páginas em inglês. As páginas na sua língua aparecem primeiro, depois as páginas em inglês que ainda não tinham sido encontradas.
- Tocar num resultado da documentação abre essa página no seu **navegador**.
- A pesquisa na documentação precisa de **internet** — quando está offline, recebe em vez disso a nota *«A pesquisa na documentação requer ligação à internet»*, e os resultados locais (dentro da app) continuam a funcionar normalmente.

---

## Abrir um resultado

Toque num resultado para ir diretamente para ele:

- **Plugin** → abre esse plugin.
- **Diálogo** → abre esse ecrã ou essa janela.
- **Categoria de preferências** → abre esse ecrã de definições.
- **Preferência** → abre a definição **no sítio** (salta para ela dentro do seu ecrã).
- **Documentação** → abre a página no seu navegador.

Abrir definições e ações protegidas continua a respeitar a sua **[proteção](../SettingUpAaps/ConfigBuilder.md)** (PIN/senha), exatamente como se tivesse navegado até lá à mão. Depois de usar um resultado, pode premir **Voltar** para regressar aos resultados da pesquisa.

---

## Atalhos para utilizadores avançados

Duas pesquisas especiais mostram uma categoria inteira de uma vez:

- `%PLUGINS%` — mostra **todos** os plugins.
- `%DIALOGS%` — mostra **todas** as janelas/ecrãs de ação.

---

```{admonition} The index stays current
:class: note
O índice de pesquisa é criado na primeira vez que pesquisa e fica pronto depois disso. É recriado automaticamente quando **ativa/desativa um plugin** ou **muda a língua da app**, por isso os resultados refletem sempre a sua configuração atual.
```

---


<!-- =====================================================================
     Screenshots captured from a real master device (query "bolus"):
       - search_results.png        (categorized local results: Dialogs / Preference categories / Preferences)
       - search_disabled_plugin.png (greyed-out preference from a disabled plugin)
       - search_documentation.png   (online ReadTheDocs results with 📖 icon + snippets)
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
