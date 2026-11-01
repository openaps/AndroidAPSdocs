(food)=
# Alimentos (a sua base de dados de alimentos)

A base de dados **Alimentos** é a sua lista pessoal de alimentos guardados. Cada registo guarda os **hidratos** de um alimento (e, se quiser, a gordura, a proteína, a energia e uma categoria). Assim, pode ter num só sítio as coisas que come muitas vezes e iniciar um bólus a partir de um alimento guardado, com os hidratos já preenchidos.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Abrir a base de dados de alimentos

Abra o ecrã **Gerir** (navegação inferior) e escolha **Alimentos** (*«Gerir os registos da base de dados de alimentos»*). No **AAPS** v4, Alimentos **já não é um plugin** — não há nada para ativar; é um ecrã próprio, aberto a partir do [painel Gerir](#v4changes-manage).

---

## A lista de alimentos

Os seus alimentos são mostrados numa lista que pode deslizar. Cada linha mostra o **nome** do alimento, a sua **porção / unidade / categoria** e os seus **hidratos**:

![A lista da base de dados de alimentos, com a pesquisa e o botão de adicionar](../images/v4/Food/food_list.png)

- **🔍 Pesquisar** (em cima) — filtra a lista pelo **nome** (sem distinguir maiúsculas e minúsculas).
- **Filtro de categoria** — os chips permitem limitar a lista a uma **categoria**; depois de escolher uma categoria, aparecem os chips das **subcategorias** dessa categoria. (Toque outra vez num chip selecionado para o limpar.)
- **➕** (em baixo, à direita) — adiciona um novo alimento (ver abaixo).
- Toque numa linha para **editar** esse alimento.

Se a lista (ou o filtro atual) não tiver registos, o ecrã mostra **Sem dados**.

---

## Adicionar e editar um alimento

Toque em **➕** para adicionar, ou toque numa linha existente para editar. Abre-se um editor num painel inferior (**Adicionar alimento** / **Editar alimento**):

![O editor de alimentos — nome, categoria, porção, hidratos e macronutrientes](../images/v4/Food/food_editor.png)

Os campos são:

- **Nome** — obrigatório (não é possível guardar sem ele).
- **Categoria** e **Subcategoria** — opcionais, usadas para agrupar/filtrar alimentos.
- **Porção** e **Unidade** — o tamanho habitual da dose; a **Unidade** predefinida é **g**.
- **Hidratos (g)** — a quantidade de hidratos de carbono do alimento.
- **Gordura (g)**, **Proteína (g)**, **Energia (kJ)** — valores nutricionais opcionais.

Toque em **Guardar** para o guardar, ou em **Cancelar** para o descartar. Ao editar um alimento existente, o editor tem também um botão **Eliminar**.

```{admonition} Deleting is undoable
:class: note
Eliminar um alimento mostra uma mensagem **«Alimento eliminado»** com a ação **Anular**, por isso é fácil desfazer uma eliminação por engano.
```

---

## Usar um alimento para um bólus

Cada linha de alimento tem um botão de **calculadora**. Ao tocar nele, abre-se o **assistente de bólus** com os **hidratos** desse alimento já preenchidos e o **nome** do alimento adicionado como nota do tratamento — assim, confirma e administra sem voltar a escrever os hidratos.

```{admonition} The carbs value is used as-is
:class: note
O número de **hidratos** guardado no alimento é passado diretamente ao assistente — o **AAPS** não o multiplica pela porção nem pela quantidade que comeu. Se a quantidade for diferente, ajuste os hidratos no assistente antes de confirmar. (Não há escolha de alimentos *dentro* do assistente de bólus nem da janela de hidratos; comece a partir da linha do alimento aqui.)
```

---

## De onde vêm os alimentos (sincronização com o Nightscout)

A base de dados de alimentos é partilhada através do **Nightscout**, mas **apenas num sentido**:

- **Transferir:** o **AAPS** **lê** os alimentos da **base de dados de alimentos** do seu site Nightscout e mantém a lista local sincronizada com ela. Isto faz parte da sincronização do NSClient, por isso um **cliente/seguidor** emparelhado acaba também por ter os mesmos alimentos.
- **Enviar:** o **AAPS** **não** envia alimentos **para** o Nightscout — o NSClient não suporta o envio de registos de alimentos. Por isso, os alimentos que cria ou edita **dentro do AAPS** ficam **nesse dispositivo** e não são passados ao Nightscout nem aos seus outros dispositivos.

```{admonition} Maintain your shared list in Nightscout
:class: important
Como os alimentos são **só transferidos**, a forma de partilhar uma lista de alimentos entre o seu telefone, o seu seguidor/[cliente](../RemoteFeatures/ClientMasterControl.md) e o resto da sua configuração é mantê-la no **Nightscout** (no seu editor de alimentos incorporado). O **AAPS** vai buscar esses registos. Um alimento adicionado apenas no **AAPS** fica só nesse dispositivo — e mantém-se: uma transferência associa os registos do Nightscout pelo seu ID do Nightscout, por isso adiciona e atualiza esses registos, mas nunca substitui nem remove um alimento que criou localmente (um alimento só é removido quando a sua cópia no Nightscout é eliminada no Nightscout).

Note que a base de dados de alimentos também **não** faz parte do canal de controlo assinado entre o telefone principal ↔ cliente — passa apenas como dados do Nightscout.
```

---

## Não está no relógio

A base de dados de alimentos é uma função do **telefone** — não há navegador de alimentos, mosaico nem menu num **relógio Wear OS**.

---


<!-- =====================================================================
     Screenshots captured from a real master device:
       - food_list.png    (Manage → Food: list row, search, add button)
       - food_editor.png  ("Add Food" editor: name/category/subcategory/portion/unit/carbs/fat/protein/energy)
     No food was created or deleted (the editor was cancelled).
     Sync facts code-verified: download via LoadFoodsWorker.getFoods(); upload disabled
     (DataSyncSelectorV3 processChangedFoods() commented out — "NSCv3 doesn't support food update").
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
