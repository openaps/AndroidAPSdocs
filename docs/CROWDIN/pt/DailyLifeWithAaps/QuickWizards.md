(quickwizards)=
# Assistente Rápido (bólus com um toque)

Um **Assistente Rápido** é um botão guardado, de um só toque, para uma refeição ou situação que se repete. Contém uma quantidade fixa de **hidratos de carbono** (e a forma de dosear para eles). Assim pode administrar um bólus — ou apenas registar hidratos — com um único toque e uma confirmação, em vez de abrir sempre a calculadora de bólus completa.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Abrir o Assistente Rápido

Abra o ecrã **Gerir** (navegação inferior) e escolha **Assistente Rápido** (*«Gerir as predefinições do assistente rápido»*).

---

## Gerir os Assistentes Rápidos

Os seus Assistentes Rápidos aparecem num **carrossel de cartões deslizantes** (cada cartão mostra o texto do botão, os hidratos e o intervalo de tempo válido). O editor por baixo configura o Assistente Rápido **selecionado**; a barra de ações inferior tem **➕ adicionar**, **⧉ clonar**, **🗑️ eliminar** e um botão **▶** para executar o Assistente Rápido selecionado.

![O editor do Assistente Rápido — modo, hidratos, hora dos hidratos e intervalo de tempo válido](../images/v4/QuickWizard/quickwizard_editor.png)

Os campos principais do editor são:

- **Texto do botão** — o nome mostrado no botão.
- **Hidratos** e **Hora dos hidratos** — a quantidade de hidratos e o seu desvio no tempo.
- **Intervalo de tempo válido** — ver [Validade](#quickwizard_validity).
- **Opções da calculadora** e **Seleção do dispositivo** — ver abaixo.

---

## Os três modos

O seletor no topo do editor — **Assistente / Insulina / Hidratos** — decide **o que o botão faz** quando é tocado:

- **Assistente** — executa a **calculadora de bólus** completa para os hidratos configurados, com a sua **glicose, IA, HCA e tendência** atuais (conforme as *Opções da calculadora* abaixo). Administra o bólus *calculado* e regista os hidratos. Este é o assistente rápido clássico.
- **Insulina** — administra uma **quantidade fixa de insulina, definida por si** — sem cálculo.
- **Hidratos** — regista **apenas os hidratos** configurados, **sem bólus**.

---

## Opções da calculadora (modo Assistente)

Para um botão no modo **Assistente**, escolha os dados que o cálculo usa:

- **Usar glicose**, **Usar HCA**, **Usar IA** (com *Apenas IA positiva*), **Usar tendência** (*Todos / Apenas positivos / Apenas negativos*), **Usar alvo temporário**, **Usar alarme**.
- **Percentagem do bólus** — ajusta (multiplica) o bólus calculado.
- **Adicionar eCarbs** — agenda também hidratos de carbono prolongados.

![Opções da calculadora, percentagem do bólus e seleção do dispositivo](../images/v4/QuickWizard/quickwizard_options.png)

---

## Validade — quando o botão aparece

(quickwizard_validity)= O **Intervalo de tempo válido** (*De / Até*) controla **quando** um Assistente Rápido é mostrado e pode ser usado. Um botão definido, por exemplo, para **06:00–10:00** só aparece de manhã. Assim, um Assistente Rápido *Pequeno-almoço* não ocupa o seu ecrã (nem é tocado por engano) ao jantar. Fora da sua janela, o botão fica oculto no painel **Tratamentos** e na [barra de ferramentas QuickLaunch](QuickLaunch.md). Um botão da barra de ferramentas não é eliminado: volta a aparecer quando a janela abre de novo.

Quando o intervalo de tempo válido é inferior a 4 horas, o botão também fica oculto durante 30 minutos depois de o usar, para que a mesma refeição não seja introduzida duas vezes por engano.

---

## Pontos de utilização — onde o usa

Os interruptores da **Seleção do dispositivo** decidem onde cada Assistente Rápido aparece:

- **Mostrar no telefone** — aparece no **painel [Tratamentos](../Maintenance/V4Changes.md)** (com a dose calculada mostrada no próprio botão). Um Assistente Rápido mostrado no telefone também pode ser **fixado como botão de ação rápida no ecrã principal**: abra *Configurar QuickLaunch* (o ⚙ na barra de ferramentas [QuickLaunch](QuickLaunch.md)) e adicione-o a partir da categoria **Assistente Rápido**.
- **Mostrar no relógio** — aparece no **mosaico Assistente Rápido do Wear OS** (deslize até ele no carrossel de mosaicos do relógio e toque num botão para o executar — tal como no [mosaico Cena](#scenes-from-watch)).

```{admonition} Don't see Device Selection?
:class: note
A secção **Seleção do dispositivo** só aparece no editor quando o plugin **Android Wear** está ativado e a sua preferência **Controlo pelo Wear** está ligada. Sem isso, todos os Assistentes Rápidos aparecem simplesmente no telefone.
```

No telefone, os Assistentes Rápidos aparecem no topo do painel inferior **Tratamentos**:

![Assistentes Rápidos (em cima) no painel inferior Tratamentos aberto](../images/v4/QuickWizard/quickwizard_in_treatments.png)

…e como botão de ação rápida no ecrã principal:

![Um botão de ação rápida do Assistente Rápido no ecrã principal](../images/v4/QuickWizard/quickwizard_overview.png)

![O mosaico Assistente Rápido num relógio Wear OS](../images/v4/QuickWizard/quickwizard_watch_tile.png)

Um **cliente** emparelhado (**AAPSClient**) também pode acionar um Assistente Rápido — o **telefone principal** calcula-o e administra-o (ver [Controlo principal ↔ cliente](../RemoteFeatures/ClientMasterControl.md)).

Seja qual for o local onde é acionado, tocar num Assistente Rápido mostra sempre uma **confirmação** (a confirmação criada pelo telefone principal, quando é acionado a partir de um cliente ou relógio) antes de qualquer administração.

Um Assistente Rápido é recusado quando a sua dose está acima do seu bólus máximo, ou quando os seus hidratos ou eCarbs estão acima do seu máximo de hidratos (por exemplo, depois de ter baixado o limite). Quando os hidratos estão acima do limite, o botão no painel **Tratamentos** fica desativado. Edite o Assistente Rápido ou o limite.

---

## Adicionar e remover

- **➕ Adicionar** — cria um novo Assistente Rápido.
- **⧉ Clonar** — duplica um Assistente Rápido como ponto de partida.
- **🗑️ Eliminar** — remove um Assistente Rápido.

Com dois ou mais Assistentes Rápidos, também pode mudar a ordem no carrossel: toque no ícone **Reordenar** (⇅) na barra superior, mova o cartão central com os **botões de mover ◀ / ▶** e depois confirme com **✓**. (Os controlos são iguais aos de [reordenar perfis](ProfileSwitch-ProfilePercentage.md).)

Os Assistentes Rápidos fazem parte da configuração sincronizada, por isso são partilhados entre o seu telefone principal e os clientes emparelhados.

---


<!-- =====================================================================
     Screenshots captured from a real master device:
       - quickwizard_editor.png   (Manage → QuickWizard: carousel, mode, carbs, carb time, valid time range)
       - quickwizard_options.png  (Calculator Options, Bolus percentage, Device Selection)
       - quickwizard_overview.png (the QuickWizard quick-action button on the overview)
       - quickwizard_watch_tile.png (the Wear OS QuickWizard tile)
     No QuickWizard was actually run (no bolus delivered).
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
