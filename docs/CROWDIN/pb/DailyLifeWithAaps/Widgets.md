(widgets)=
# Widgets da tela inicial

O **AAPS** oferece widgets que você pode adicionar à tela inicial do seu telefone. Um widget mostra seus dados atuais sem abrir o app. Toque em um widget para abrir o **AAPS**.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Widgets disponíveis

Há cinco widgets disponíveis. Eles aparecem em **AAPS** no seletor de widgets do Android:

![Widgets do AAPS no seletor de widgets do Android](../images/widgets/widget_picker_aaps.png)

| Widget                                   | Tamanho padrão | O que mostra                                                                                                                                          |
| ---------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Widget do AAPS**                       | 5 × 2          | O bloco de status da tela principal: glicose com tendência e delta, modo do loop, perfil, alvo, sensibilidade, IOB e COB.                             |
| **Círculo de glicose do AAPS**           | 2 × 2          | O círculo de glicose da tela principal: um anel na cor da glicose, o arco de tendência, o delta, o valor de glicose e o tempo desde a última leitura. |
| **AAPS Pequeno**                         | 2 × 2          | Nome do perfil, glicose com seta de tendência, tempo desde a última leitura, delta, IOB e COB.                                                        |
| **AAPS glicemia + IOB + COB (compacto)** | 4 × 1          | Uma linha com a glicose e a seta de tendência, IOB e COB.                                                                                             |
| **Gráfico de glicemia do AAPS**          | 3 × 1          | O valor de glicose com um pequeno gráfico das leituras recentes.                                                                                      |

O **Widget do AAPS**, o **círculo de glicose** e o widget **Pequeno** em uma tela inicial:

![Widget do AAPS, círculo de glicose e widget Pequeno na tela inicial](../images/widgets/home_widgets_full_circle_small.png)

O widget **compacto** e o widget **gráfico de glicemia**:

![Widget compacto e widget gráfico de glicemia na tela inicial](../images/widgets/home_widgets_compact_graph.png)

Os valores de glicose usam as mesmas cores que no **AAPS**: verde na faixa-alvo, amarelo acima da faixa, vermelho abaixo da faixa.

---

## Adicionar um widget

Os passos exatos dependem do seu telefone e do launcher dele. Na maioria dos telefones:

1. Toque e segure em uma área vazia da tela inicial e selecione **Widgets**.

   ![O seletor de widgets](../images/widgets/widget_picker_list.png)

2. Abra **AAPS** na lista e toque no widget que você quer.
3. Toque em **Adicionar** (ou arraste o widget para o lugar desejado).

   ![O botão Adicionar abaixo do widget selecionado](../images/widgets/widget_picker_add_button.png)

O widget é colocado na tela inicial. Logo depois de adicionado, ele aparece com alças: arraste uma alça para **redimensionar** o widget, ou arraste o widget para movê-lo. O círculo de glicose pode ter qualquer tamanho.

![Um widget recém-adicionado, com as alças de redimensionamento e o botão de configurações](../images/widgets/widget_glucose_circle_added.png)

Se a página da tela inicial estiver cheia, o telefone coloca o widget em uma nova página.

---

## Configuração do widget

Toque no botão de **lápis** que aparece no widget logo depois de adicioná-lo. Mais tarde, toque e segure o widget para ver de novo as alças e o lápis.

A janela **Configuração do widget** tem duas configurações:

- **Configurar opacidade** — quanto o fundo do widget é opaco. Um valor baixo deixa o papel de parede aparecer através do widget.
- **Usar cor preta** — usa um fundo preto em vez do fundo padrão.

![Configuração do widget](../images/widgets/widget_configuration.png)

Cada widget tem a sua própria configuração.

---

## Bom saber

- Um widget só **mostra** dados. Você não pode dar bólus nem mudar nada a partir de um widget.
- O widget é atualizado pelo **AAPS**. Se o **AAPS** não estiver rodando, ou se o Android o restringir em segundo plano, o widget pode mostrar dados antigos. Verifique o tempo desde a última leitura e confira se o **AAPS** está excluído da [otimização de bateria](#SetupWizard-StoragePermission).
- Com o **AAPSClient**, o **AAPSClient2** e o **AAPSClient3**, o fundo do widget é amarelo, azul ou verde, para que você possa distinguir os apps. Aumente a opacidade na configuração do widget se a cor for difícil de ver. Veja [Sobre o AAPSClient, AAPSClient2 e AAPSClient3](#remotecontrol-aapsclient-versions).
