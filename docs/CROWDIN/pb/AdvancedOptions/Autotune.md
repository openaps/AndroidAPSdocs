# Como usar o plugin Autotune

O plugin Autotune é uma implementação do algoritmo autotune do OpenAPS dentro do AAPS. Ele analisa seu histórico recente do AAPS para sugerir ajustes nas suas taxas basais, no ISF e na relação de carboidratos (IC).

Autotune Plugin is available in AAPS releases since [3.4](#version3400) but is hidden by default.

(autotune-how-autotune-calculates-adjustments)=
## Como o Autotune calcula os ajustes

O Autotune analisa seu histórico recente do AAPS — leituras do CGM, bólus, carboidratos e taxas basais temporárias — e descobre onde seu **Perfil** (taxas basais, ISF, relação de carboidratos) não corresponde bem ao que realmente aconteceu com sua glicose.

Para cada ponto de dados de 5 minutos, ele compara a **mudança real da glicose** com a mudança que seu Perfil previu e coloca o desvio resultante em um de três grupos:

* desvios que aconteceram sem carboidratos ativos e sem atividade de insulina (usados para ajustar as **taxas basais**, hora por hora),
* desvios que aconteceram depois de um bólus/correção sem carboidratos (usados para ajustar o **ISF**), ou
* desvios que aconteceram enquanto carboidratos estavam sendo absorvidos (usados para ajustar a **relação de carboidratos**).

Depois, ele analisa o padrão dos desvios em cada grupo (usando percentis em vez de uma média simples, para que alguns pontos de dados com ruído não distorçam o resultado) e propõe um novo valor para aquela hora/parâmetro.

Para que uma única execução não corrija demais, cada execução do Autotune só move um valor uma parte do caminho em direção ao que os dados sugerem: até 10% para ISF e relação de carboidratos, e até 20% para cada segmento de basal. A mudança total também é limitada pelas configurações **Máximo do Autosens** / **Mínimo do Autosens** (veja [Outras configurações](#autotune-other-settings) abaixo) — os mesmos limites que restringem o Autosens. Por isso o Autotune deve ser executado repetidamente (dia após dia, ou toda noite), e não ser considerado confiável depois de uma única execução: os resultados devem convergir aos poucos, e um salto grande em uma execução é sinal para verificar de novo seus dados (carboidratos não registrados, um dia ruim do sensor, _etc._), e não para confiar nele cegamente.

O Autotune pode ser executado de três formas: manualmente, uma única vez, dentro do plugin (como descrito abaixo), automaticamente toda noite por uma [regra de automação](#autotune-run-autotune-with-an-automation-rule), ou — totalmente fora do AAPS — como ferramenta de linha de comando independente com dados exportados, que é como alguns guias da comunidade descrevem seu uso sem um telefone executando o AAPS.

*Para o algoritmo oref0 em todos os detalhes matemáticos, veja a [documentação do Autotune do OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html).*

## Mostrar o plugin Autotune

Crie um arquivo vazio chamado `enable_autotune` na subpasta `extra` do [Diretório do AAPS](#preferences-maintenance-settings) no seu telefone.

***NOTA: verifique nas configurações do AAPS onde fica o seu Diretório do AAPS e se você colocou o arquivo no diretório correto. Vários usuários colocaram o arquivo na pasta errada.***

![Ativar o Autotune](../images/Autotune/Autotune_0.png)

Reinicie o **AAPS**. Depois abra o **menu** (☰), selecione **Configuração**, depois a categoria **Geral**, e marque **Autotune**. O cartão então mostra **Configurações** e **Abrir plugin**:

![Autotune marcado em Configuração > Geral](../images/v4/Configuration/configuration_general_autotune.png)

## Interface do Autotune

Toque em **Abrir plugin** no cartão **Autotune** para abrir a tela do Autotune:

![Tela do Autotune com o perfil, o número de dias de dados e um aviso sobre o perfil selecionado](../images/Autotune/Autotune_1b.png)

- No menu suspenso Perfil, você pode selecionar o perfil de entrada que quer ajustar (por padrão, seu perfil ativo atual está selecionado)
  - Nota: cada vez que você seleciona um novo perfil, os resultados anteriores são removidos e o **Número de dias de dados** volta ao valor padrão
- Depois, **Número de dias de dados** (chamado **Tune days** em versões antigas) serve para selecionar o número de dias usados no cálculo para ajustar seu perfil. O valor mínimo é 1 dia e o máximo é 30 dias. Este número não deve ser pequeno demais, para ter resultados iterativos corretos e suaves (mais de 7 dias para cada cálculo)
  - Nota: cada vez que você muda o **Número de dias de dados**, os resultados anteriores são removidos
- Última execução é um link que recupera seu último cálculo válido. Se você não iniciou o Autotune no dia atual, ou se os resultados anteriores foram removidos por uma mudança de parâmetro de cálculo acima, você pode recuperar os parâmetros e os resultados da última execução bem-sucedida.
- O Aviso mostra, por exemplo, algumas informações sobre o perfil selecionado (se você tem vários valores de IC ou vários valores de ISF)
  - Nota: o cálculo do Autotune funciona com apenas um único valor de IC e um único valor de ISF. Atualmente não existe nenhum algoritmo do Autotune para ajustar um IC circadiano ou um ISF circadiano. Se o seu perfil de entrada tem vários valores, você pode ver na seção de aviso o valor médio usado para ajustar seu perfil.
- O botão Verifique o perfil de entrada abre o visualizador de perfil, para você verificar rapidamente seu perfil (unidades, IC, ISF, basal e alvo)
  - Nota: o Autotune ajusta apenas seu IC (valor único), ISF (valor único) e a basal (com variação circadiana). As unidades e o alvo não mudam no perfil de saída.

- "Executar Autotune" inicia o cálculo do Autotune com o perfil selecionado e o número de dias de dados selecionado
  - Nota: o cálculo do Autotune pode demorar muito. Depois de iniciado, você pode mudar para outra tela (início, ...) e voltar mais tarde ao plugin Autotune para ver os resultados

  ![Início da execução do Autotune](../images/Autotune/Autotune_2b.png)

- Durante a execução, você verá os resultados intermediários abaixo

  - Nota: durante a execução, as configurações ficam bloqueadas, então você não pode mais mudar o perfil de entrada selecionado nem o número de dias. Você terá que esperar o fim do cálculo atual se quiser iniciar outra execução com outros parâmetros.

  ![Autotune durante a execução](../images/Autotune/Autotune_3b.png)

- Quando o cálculo do Autotune terminar, você verá o resultado (perfil Ajustado) e quatro botões abaixo.

  ![Resultado do Autotune](../images/Autotune/Autotune_4b.png)

- É importante sempre comparar o perfil de entrada (coluna "Perfil"), o perfil de saída (coluna "Ajustado") e a porcentagem de variação de cada valor (coluna "%").

- Para as taxas basais, você também tem o número de "dias faltantes". Há dias faltantes quando o Autotune não tem dados suficientes classificados como "Basal" para ajustar a taxa basal nesse período (por exemplo, depois de cada refeição, quando há absorção de carboidratos). Este número deve ser o mais baixo possível, principalmente quando a basal é importante (por exemplo, durante a noite ou no fim da tarde)

- O botão "Comparar perfis" abre a tela de comparação de perfis. O perfil de entrada está em azul e o perfil de saída (chamado "Ajustado") está em vermelho.

  - Nota: no exemplo abaixo, o perfil de entrada tem variação circadiana de IC e ISF, mas o perfil de saída calculado tem um único valor. Se for importante para você ter um perfil de saída circadiano, veja [Perfil com IC ou ISF circadiano](#autotune-circadian-ic-or-isf-profile) abaixo.

  ![Autotune - Comparar perfis](../images/Autotune/Autotune_5.png)

- Se você confia nos resultados (pouca variação percentual entre o perfil de entrada e o perfil de saída), pode clicar no botão "Ativar perfil" e depois em OK para confirmar.

  - Ativar o perfil Ajustado cria automaticamente um novo perfil "Ajustado" na sua lista de perfis (**Gerenciar → Perfil**).
  - Se você já tem um perfil chamado "Ajustado" em **Gerenciar → Perfil**, esse perfil será atualizado com o perfil calculado pelo Autotune antes da ativação

  ![Autotune - Ativar perfil](../images/Autotune/Autotune_6.png)

- Se você acha que o perfil Ajustado precisa de correções (por exemplo, se acha que algumas variações são grandes demais), pode clicar no botão "Copiar para o perfil local"

  - Um novo perfil com o prefixo "Ajustado" e a data e a hora da execução será criado em **Gerenciar → Perfil**

  ![Autotune - Copiar para o perfil local](../images/Autotune/Autotune_7.png)

- Depois você pode editar o perfil Ajustado: abra **Gerenciar** > **Perfil**, deslize até o cartão chamado "Ajustado" com a data e a hora da execução e toque no botão **Editar** (lápis)

  - os valores do perfil serão arredondados na interface conforme a capacidade da sua bomba

  ![Autotune - atualização do perfil local](../images/Autotune/Autotune_8.png)

- Se você quer substituir seu perfil de entrada pelo resultado do Autotune, clique no botão "Atualizar perfil de entrada" e confirme a janela com OK

  - Nota: se você clicar em "Ativar perfil" depois de "Atualizar perfil de entrada", vai ativar seu perfil atualizado e não o perfil padrão "Ajustado".

  ![Autotune - Atualizar perfil de entrada](../images/Autotune/Autotune_9.png)

- Se você atualizou seu perfil de entrada, o botão "Atualizar perfil de entrada" é substituído pelo botão "Reverter perfil de entrada" (veja a captura de tela abaixo). Assim você pode ver imediatamente se o seu perfil de entrada atual em **Gerenciar → Perfil** já inclui o resultado da última execução ou não. Com este botão, você também pode recuperar seu perfil de entrada sem o resultado do Autotune

  ![Autotune - Atualizar perfil de entrada](../images/Autotune/Autotune_10.png)



## Configurações do Autotune

(autotune-plugin-settings)=

### Configurações do plugin Autotune

  ![Configurações do Autotune no AAPS 4](../images/preferences/settings_autotune.png)

```{admonition} Only DEV
:class: note
O recurso **Trocar perfil automaticamente** só está disponível no modo Dev/Engenheiro.
```

- **Trocar perfil automaticamente** (padrão: desligado): veja [Executar o Autotune com uma regra de automação](#autotune-run-autotune-with-an-automation-rule) abaixo. Se você ativar esta configuração (On), o perfil de entrada será atualizado automaticamente com o perfil Ajustado, e ele será ativado.
  - **Cuidado: você deve confiar e verificar, durante vários dias seguidos, que depois de atualizar e ativar o perfil Ajustado sem modificação, ele melhora seu loop**

- **Categorizar UAM como basal** (padrão: desligado): esta configuração é para usuários que usam o AndroidAPS sem registrar nenhum carboidrato (Full UAM). Quando desligada (Off), ela impede que UAM seja classificado como basal.
  - Nota: se houver pelo menos uma hora de absorção de carboidratos detectada durante um dia, todos os dados classificados como "UAM" serão classificados como basal, seja qual for esta configuração (On ou Off)
- **Dias padrão de ajuste** (padrão: 5): com esta configuração, você define o valor padrão. Cada vez que você seleciona um novo perfil no plugin Autotune, o **Número de dias de dados** é substituído por este valor padrão
- **Usar IC/ISF circadianos** (padrão: desligado): veja [Perfil com IC ou ISF circadiano](#autotune-circadian-ic-or-isf-profile) abaixo.

(autotune-other-settings)=
### Outras configurações

- O Autotune também usa o Máximo do Autosens e o Mínimo do Autosens para limitar a variação. Você pode ver e ajustar esses valores em [**Configurações** > **Configurações de absorção** > **Configurações Avançadas**](../SettingUpAaps/Preferences.md) (**Máximo do Autosens** e **Mínimo do Autosens**).

  ![Máximo do Autosens e Mínimo do Autosens nas configurações avançadas de absorção](../images/preferences/settings_absorption_advanced.png)



## Recurso avançado

(autotune-circadian-ic-or-isf-profile)=

### Perfil com IC ou ISF circadiano

- Se você tem variação importante de IC e/ou ISF no seu perfil e confia totalmente nos seus horários e variações circadianas, pode ativar **Usar IC/ISF circadianos** (chamado "Apply average result in circadian IC/ISF" em versões antigas)

  - Observe que o cálculo do Autotune sempre será feito com um único valor, e a variação circadiana não será ajustada pelo Autotune. Esta configuração apenas aplica a variação média calculada para IC e/ou ISF aos seus valores circadianos

- Veja na captura de tela abaixo o perfil Ajustado com a aplicação da variação média desligada (à esquerda) e ligada (à direita)

  ![Tela padrão do Autotune](../images/Autotune/Autotune_13.png)



### Ajustar dias específicos da semana

- Se você tocar no ícone de **olho** à direita do campo **Número de dias de dados**, verá a seleção de dias. Você pode escolher quais dias da semana devem ser incluídos no cálculo do Autotune (na captura de tela abaixo, você pode ver um exemplo para "dias úteis", com sábado e domingo removidos do cálculo do Autotune)
  - Se o número de dias incluídos no cálculo do Autotune for menor que o **Número de dias de dados**, você verá à direita do seletor de dias quantos dias serão incluídos (10 dias no exemplo abaixo)
  - Esta configuração só dá bons resultados se o número de dias restantes não for pequeno demais (por exemplo, se você ajusta um perfil específico para fins de semana, com só sábado e domingo selecionados, deve definir o **Número de dias de dados** em pelo menos 21 ou 28, para ter 6 ou 8 dias incluídos no cálculo do Autotune)

  ![Tela padrão do Autotune](../images/Autotune/Autotune_14b.png)

- Durante o cálculo do Autotune, você pode ver o progresso dos cálculos ("Resultado parcial - dia 1 / 4 ajustado" no exemplo abaixo, com sábado e domingo excluídos)

  ![Tela padrão do Autotune](../images/Autotune/Autotune_15b.png)



(autotune-run-autotune-with-an-automation-rule)=

## Executar o Autotune com uma regra de automação

```{admonition} Only DEV
:class: note
O recurso **Trocar perfil automaticamente** só está disponível no modo Dev/Engenheiro.
```

O primeiro passo é definir o gatilho correto para uma regra de automação com o Autotune:

Nota: para mais informações sobre como definir uma regra de automação, veja [aqui](../DailyLifeWithAaps/Automations.md).

- Você deve selecionar o gatilho Tempo recorrente: execute o Autotune apenas uma vez por dia; o Autotune foi feito para ser executado diariamente (a cada nova execução, você avança um dia, e logo as modificações do perfil devem ficar muito pequenas)

  ![Tela padrão do Autotune](../images/Autotune/Autotune_16.png)

- No começo, é melhor executar o Autotune durante o dia, para poder verificar os resultados. Se você quer executar o Autotune durante a noite, precisa selecionar no gatilho 4h ou mais tarde, para incluir o dia atual no próximo cálculo do Autotune.

  ![Tela padrão do Autotune](../images/Autotune/Autotune_17.png)

- Depois você pode selecionar a ação **Executar Autotune** (no grupo **Loop & insulina**)

  ![Tela padrão do Autotune](../images/Autotune/Autotune_18.png)

- Depois você pode ajustar os parâmetros da ação para a sua execução. Em uma nova ação, **Selecione o perfil para ajustar** mostra o primeiro perfil da sua lista de perfis locais, o campo **Dias de ajuste** fica vazio e todos os dias ficam selecionados. Escolha o perfil para ajustar e digite o número de **Dias de ajuste** (1 a 30).

  ![Tela padrão do Autotune](../images/Autotune/Autotune_19b.png)

- Depois de alguns dias, se você confiar totalmente nos resultados do Autotune e a porcentagem de modificação for baixa, pode ativar a opção "**Trocar perfil automaticamente**" das [configurações do Autotune](#autotune-plugin-settings) para atualizar e ativar automaticamente o perfil ajustado depois do cálculo.

Nota: se você quer ajustar automaticamente perfis para dias específicos da semana (por exemplo, um perfil para "fins de semana" e outro para "dias úteis"), crie uma regra para cada perfil, selecione os mesmos dias no gatilho e na ação do Autotune; os dias de ajuste devem ser suficientes para garantir que o ajuste seja feito com pelo menos 6 ou 8 dias; e não esqueça de selecionar no gatilho um horário depois das 4h...

- Veja abaixo um exemplo de regra que é executada todo dia útil (de segunda a sexta) às 04:00 e ajusta o perfil "Normal" com 14 **Dias de ajuste**, só dias úteis (então só 10 dias são incluídos no cálculo do Autotune).

  ![Tela padrão do Autotune](../images/Autotune/Autotune_20b.png)



## Dicas e truques

O Autotune funciona com as informações que existem no seu banco de dados; então, se você acabou de instalar o AAPS em um telefone novo, terá que esperar vários dias antes de poder iniciar o Autotune com dias suficientes para ter resultados relevantes.

O Autotune é apenas uma ajuda; é importante verificar regularmente se você concorda com o perfil calculado. Se tiver qualquer dúvida, mude as configurações do Autotune (por exemplo, o número de dias) ou copie os resultados para o perfil local e ajuste o perfil antes de usá-lo.

Sempre use o Autotune manualmente por vários dias para verificar os resultados antes de aplicá-los. E só quando você confiar totalmente nos resultados do Autotune, e quando a variação entre o perfil anterior e o perfil calculado ficar muito pequena, é que você deve começar a usar a Automação (nunca antes)

- O Autotune pode funcionar muito bem para alguns usuários e não para outros, então **se você não confia no resultado do Autotune, não o use**

Também é importante analisar os resultados do Autotune para entender (ou tentar entender) por que o Autotune propõe essas modificações

- você pode ter um aumento ou uma diminuição geral da força do seu perfil (por exemplo, aumento da basal total junto com diminuição dos valores de ISF e IC). isso pode estar ligado a vários dias seguidos com correção do autosens acima de 100% (é preciso mais agressividade) ou abaixo de 100% (você está mais sensível)
- Às vezes o Autotune propõe um equilíbrio diferente entre taxas basais e IC/ISF (por exemplo, basal mais baixa e IC/ISF mais agressivos)

Recomendamos não usar o Autotune nos seguintes casos:

- Você não registra todos os seus carboidratos
  - Se você não registrar os carboidratos de correção de hipoglicemia, o Autotune verá um aumento inesperado do seu valor de glicose e aumentará suas taxas basais 4 horas antes; isso pode ser o contrário do que você precisa para evitar a hipoglicemia, principalmente se for no meio da noite. Por isso é importante registrar todos os carboidratos, principalmente a correção de hipoglicemia.
- Você tem muitos períodos com UAM detectado durante o dia.
  - Você registrou todos os seus carboidratos e estimou seus carboidratos corretamente?
  - Todos os períodos UAM (exceto se você não registrar carboidratos durante um dia e a opção de classificar UAM como basal estiver desativada): todos os seus períodos UAM serão classificados como basal, o que pode aumentar muito sua basal (muito mais do que o necessário)

- Sua absorção de carboidratos é muito lenta: se a maior parte da sua absorção de carboidratos é calculada com o parâmetro min_5m_carbimpact (você pode ver esses períodos com um pequeno ponto laranja no topo da curva de COB), o cálculo de COB pode estar errado e levar a resultados errados.
  - Quando você pratica esporte, em geral fica mais sensível e sua glicose não sobe muito; então, durante ou depois de um exercício, é comum ver alguns períodos com carboidratos lentos. Mas se você tem com muita frequência absorção lenta inesperada de carboidratos, talvez precise ajustar o perfil (valor de IC mais alto) ou seu min_5m_carbimpact esteja um pouco alto demais.
- Você tem "dias muito ruins", por exemplo, preso várias horas em hiperglicemia com uma quantidade enorme de insulina para conseguir voltar à faixa, ou, depois de uma troca de sensor, longos períodos com valores de glicose errados. Se nas últimas semanas você só teve um ou 2 "dias ruins", pode desativar manualmente esses dias no cálculo do Autotune para excluí-los do cálculo e, de novo, **verifique com cuidado se você pode confiar nos resultados**
- Se a porcentagem de modificação for grande demais
  - Você pode tentar aumentar o número de dias para ter resultados mais suaves
