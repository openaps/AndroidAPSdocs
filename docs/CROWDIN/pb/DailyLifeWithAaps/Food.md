(food)=
# Alimentos (seu banco de alimentos)

O banco de dados **Alimentos** é a sua lista pessoal de alimentos salvos. Cada entrada guarda os **carboidratos** de um alimento (e, se quiser, a gordura, a proteína, a energia e uma categoria). Assim, você pode manter as coisas que come com frequência em um só lugar e iniciar um bólus a partir de um alimento salvo, com os carboidratos já preenchidos.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Abrir o banco de alimentos

Abra a tela **Gerenciar** (navegação inferior) e escolha **Alimentos** (*“Gerenciar entradas do banco de alimentos”*). No **AAPS** v4, Alimentos **não é mais um plugin** — não há nada para ativar; é uma tela própria, aberta a partir do [painel Gerenciar](#v4changes-manage).

---

## A lista de alimentos

Seus alimentos aparecem em uma lista que pode ser rolada. Cada linha mostra o **nome** do alimento, a **porção / unidade / categoria** e os **carboidratos**:

![A lista do banco de alimentos, com a pesquisa e o botão de adicionar](../images/v4/Food/food_list.png)

- **🔍 Pesquisar** (no topo) — filtra a lista pelo **nome** (sem diferenciar maiúsculas e minúsculas).
- **Filtro de categoria** — os chips permitem limitar a lista a uma **categoria**; depois de escolher uma categoria, aparecem os chips de **subcategoria** dela. (Toque de novo em um chip selecionado para limpar a seleção.)
- **➕** (canto inferior direito) — adiciona um novo alimento (veja abaixo).
- Toque em uma linha para **editar** esse alimento.

Se a lista (ou o filtro atual) não tiver entradas, a tela mostra **Nenhum dado**.

---

## Adicionar e editar um alimento

Toque em **➕** para adicionar ou toque em uma linha existente para editar. Um editor abre como painel inferior (**Adicionar alimento** / **Editar alimento**):

![O editor de alimentos — nome, categoria, porção, carboidratos e macronutrientes](../images/v4/Food/food_editor.png)

Os campos são:

- **Nome** — obrigatório (não é possível salvar sem ele).
- **Categoria** e **Subcategoria** — opcionais, usados para agrupar/filtrar alimentos.
- **Porção** e **Unidade** — o tamanho típico da porção; o padrão de **Unidade** é **g**.
- **Carboidratos (g)** — a quantidade de carboidratos do alimento.
- **Gordura (g)**, **Proteína (g)**, **Energia (kJ)** — valores nutricionais opcionais.

Toque em **Salvar** para guardar ou em **Cancelar** para descartar. Ao editar um alimento existente, o editor também tem um botão **Excluir**.

```{admonition} Deleting is undoable
:class: note
Ao excluir um alimento, aparece a mensagem **“Alimento excluído”** com a ação **Desfazer**, então é fácil reverter uma exclusão acidental.
```

---

## Usar um alimento para um bólus

Cada linha de alimento tem um botão de **calculadora**. Ao tocar nele, abre o **Assistente de Bólus** com os **carboidratos** desse alimento já preenchidos e o **nome** do alimento adicionado como anotação do tratamento — assim, você confirma e aplica sem digitar os carboidratos de novo.

```{admonition} The carbs value is used as-is
:class: note
O número de **carboidratos** salvo do alimento é passado direto para o assistente — o **AAPS** não multiplica esse número pela porção nem pela quantidade que você comeu. Se a sua quantidade for diferente, ajuste os carboidratos no assistente antes de confirmar. (Não existe seleção de alimentos *dentro* do Assistente de Bólus nem da caixa de diálogo de carboidratos; você começa pela linha do alimento aqui.)
```

---

## De onde vêm os alimentos (sincronização com o Nightscout)

O banco de alimentos é compartilhado pelo **Nightscout**, mas **em uma só direção**:

- **Download:** o **AAPS** **lê** os alimentos do **banco de alimentos** do seu site Nightscout e mantém a lista local sincronizada com ele. Isso faz parte da sincronização do NSClient, então um **cliente/seguidor** pareado também acaba com os mesmos alimentos.
- **Upload:** o **AAPS** **não** envia alimentos **para** o Nightscout — o NSClient não permite enviar entradas de alimentos. Por isso, os alimentos que você cria ou edita **dentro do AAPS** ficam **nesse dispositivo** e não são passados para o Nightscout nem para os seus outros dispositivos.

```{admonition} Maintain your shared list in Nightscout
:class: important
Como os alimentos são **somente para download**, a forma de compartilhar uma mesma lista de alimentos entre o seu telefone, o seu seguidor/[cliente](../RemoteFeatures/ClientMasterControl.md) e o resto da sua configuração é mantê-la no **Nightscout** (no editor de alimentos dele). O **AAPS** vai baixar essas entradas. Um alimento adicionado apenas no **AAPS** fica somente nesse dispositivo — e continua lá: o download compara as entradas do Nightscout pelo ID do Nightscout, então ele adiciona e atualiza essas entradas, mas nunca sobrescreve nem remove um alimento que você criou localmente (um alimento só é removido quando a cópia dele no Nightscout é excluída no Nightscout).

Observe que o banco de alimentos também **não** faz parte do canal de controle assinado entre dispositivo principal ↔ cliente — ele é transferido apenas como dados do Nightscout.
```

---

## Não disponível no relógio

O banco de alimentos é um recurso do **telefone** — não existe navegador de alimentos, bloco nem menu em um **relógio Wear OS**.

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
