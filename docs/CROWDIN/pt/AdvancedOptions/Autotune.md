# Como usar o plugin Autoajuste

O plugin Autoajuste é uma implementação no AAPS do algoritmo autotune do OpenAPS. Analisa o seu histórico recente do AAPS para sugerir ajustes às suas taxas basais, ao FSI e ao rácio de hidratos de carbono (IHC).

Autotune Plugin is available in AAPS releases since [3.4](#version3400) but is hidden by default.

(autotune-how-autotune-calculates-adjustments)=
## Como o Autoajuste calcula os ajustes

O Autoajuste analisa o seu histórico recente do AAPS — leituras do CGM, bólus, hidratos de carbono e basais temporárias — e descobre onde o seu **Perfil** (taxas basais, FSI, IHC) não corresponde bem ao que aconteceu realmente à sua glicose.

Para cada ponto de dados de 5 minutos, compara a **variação real da glicose** com a variação prevista pelo seu perfil, e coloca o desvio resultante num de três grupos:

* desvios que aconteceram sem hidratos de carbono a bordo e sem atividade da insulina (usados para ajustar as **taxas basais**, hora a hora),
* desvios que aconteceram depois de um bólus/correção sem hidratos de carbono (usados para ajustar o **FSI**), ou
* desvios que aconteceram enquanto os hidratos de carbono estavam a ser absorvidos (usados para ajustar o **IHC**).

Depois, analisa o padrão dos desvios em cada grupo (com percentis em vez de uma média simples, para que alguns pontos de dados com ruído não distorçam o resultado) e propõe um novo valor para essa hora/parâmetro.

Para evitar que uma única execução corrija demais, cada execução do Autoajuste só move um valor uma parte do caminho em direção ao que os dados sugerem: até 10% para o FSI e o IHC, e até 20% para cada segmento basal. A variação total é ainda limitada pelas definições **Autosens máx.** / **Autosens mín.** (ver [Outras definições](#autotune-other-settings) abaixo) — os mesmos limites que limitam o Autosens. É por isso que o Autoajuste deve ser executado repetidamente (dia após dia, ou todas as noites) e não merece confiança depois de uma única execução: os resultados devem convergir aos poucos, e um grande salto numa execução é um sinal para verificar de novo os seus dados (hidratos de carbono em falta, um dia com um sensor mau, _etc._) em vez de confiar cegamente nele.

O Autoajuste pode ser executado de três formas: manualmente, uma única vez, dentro do plugin (como descrito abaixo), automaticamente todas as noites através de uma [regra de automatização](#autotune-run-autotune-with-an-automation-rule), ou — totalmente fora do AAPS — como ferramenta de linha de comandos independente sobre dados exportados, que é a forma como alguns guias da comunidade descrevem o seu uso sem um telefone a executar o AAPS.

*Para ver o algoritmo oref0 subjacente com todos os detalhes matemáticos, consulte a [documentação do Autotune do OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html).*

## Mostrar o plugin Autoajuste

Crie um ficheiro vazio chamado `enable_autotune` na subpasta `extra` da [pasta do AAPS](#preferences-maintenance-settings) no seu telefone.

***NOTA: verifique nas definições do AAPS onde está a sua pasta do AAPS e se colocou o ficheiro na pasta correta. Vários utilizadores puseram o ficheiro na pasta errada.***

![Ativar o Autoajuste](../images/Autotune/Autotune_0.png)

Reinicie o **AAPS**. Depois, abra o **menu** (☰), selecione **Configuração**, depois a categoria **Geral**, e marque **Autoajuste**. O cartão mostra então **Definições** e **Abrir plugin**:

![Autoajuste marcado em Configuração > Geral](../images/v4/Configuration/configuration_general_autotune.png)

## Interface do Autoajuste

Toque em **Abrir plugin** no cartão **Autoajuste** para abrir o ecrã do Autoajuste:

![Ecrã do Autoajuste com o perfil, o número de dias de dados e um aviso sobre o perfil selecionado](../images/Autotune/Autotune_1b.png)

- No menu pendente Perfil pode selecionar o perfil de entrada que quer ajustar (por predefinição, está selecionado o seu perfil ativo atual)
  - Nota: sempre que selecionar um novo perfil, os resultados anteriores serão removidos e o **Número de dias de dados** volta ao valor predefinido
- Depois, **Número de dias de dados** (chamado **Dias de ajuste** em versões antigas) serve para selecionar o número de dias usados no cálculo para ajustar o seu perfil. O valor mínimo é 1 dia e o valor máximo é 30 dias. Este número não deve ser demasiado pequeno para obter resultados iterativos corretos e suaves (mais de 7 dias em cada cálculo)
  - Nota: sempre que mudar o **Número de dias de dados**, os resultados anteriores serão removidos
- «Última execução» é uma ligação que recupera o seu último cálculo válido. Se não iniciou o Autoajuste no dia atual, ou se os resultados anteriores foram removidos por uma alteração de um parâmetro de cálculo acima, pode recuperar os parâmetros e os resultados da última execução com sucesso.
- O aviso mostra, por exemplo, algumas informações sobre o perfil selecionado (se tiver vários valores de IHC ou vários valores de FSI)
  - Nota: o cálculo do Autoajuste funciona apenas com um único valor de IHC e um único valor de FSI. De momento não existe nenhum algoritmo de Autoajuste para ajustar um IHC circadiano ou um FSI circadiano. Se o seu perfil de entrada tiver vários valores, pode ver na secção de aviso o valor médio usado para ajustar o seu perfil.
- O botão «Verificar perfil de entrada» abre o visualizador de perfis para uma verificação rápida do seu perfil (unidades, IHC, FSI, basal e alvo)
  - Nota: o Autoajuste só ajusta o seu IHC (valor único), o FSI (valor único) e a basal (com variação circadiana). As unidades e o alvo ficam iguais no perfil de saída.

- «Executar Autoajuste» inicia o cálculo do Autoajuste com o perfil selecionado e o número de dias de dados selecionado
  - Nota: o cálculo do Autoajuste pode demorar muito tempo. Depois de iniciado, pode mudar para outra vista (início, ...) e voltar mais tarde ao plugin Autoajuste para ver os resultados

  ![Início da execução do Autoajuste](../images/Autotune/Autotune_2b.png)

- Depois, durante a execução, verá os resultados intermédios abaixo

  - Nota: durante a execução, as definições ficam bloqueadas, por isso já não pode mudar o perfil de entrada selecionado nem o número de dias. Se quiser iniciar outra execução com outros parâmetros, terá de esperar pelo fim do cálculo atual.

  ![Autoajuste durante a execução](../images/Autotune/Autotune_3b.png)

- Quando o cálculo do Autoajuste terminar, verá o resultado (perfil ajustado) e quatro botões abaixo.

  ![Resultado do Autoajuste](../images/Autotune/Autotune_4b.png)

- É importante comparar sempre o perfil de entrada (coluna «Perfil»), o perfil de saída (coluna «Ajust.») e a percentagem de variação de cada valor (coluna «%»).

- Para as taxas basais, tem também o número de «dias em falta». Há dias em falta quando o Autoajuste não tem dados suficientes classificados como «Basal» para ajustar a taxa basal nesse período (por exemplo, depois de cada refeição, quando há absorção de hidratos de carbono). Este número deve ser o mais baixo possível, sobretudo quando a basal é importante (por exemplo, durante a noite ou ao fim da tarde)

- O botão «Comparar Perfis» abre a vista de comparação de perfis. O perfil de entrada está a azul e o perfil de saída (chamado «Ajustado») está a vermelho.

  - Nota: no exemplo abaixo, o perfil de entrada tem variação circadiana para IHC e FSI, mas o perfil de saída calculado tem um único valor. Se for importante para si obter um perfil de saída circadiano, veja [Perfil de IHC ou FSI circadiano](#autotune-circadian-ic-or-isf-profile) abaixo.

  ![Autoajuste: Comparar Perfis](../images/Autotune/Autotune_5.png)

- Se confiar nos resultados (baixa percentagem de variação entre o perfil de entrada e o perfil de saída), pode clicar no botão «Ativar perfil» e depois em OK para validar.

  - Ativar o perfil ajustado cria automaticamente um novo perfil «Ajustado» na sua lista de perfis (**Gerir → Perfil**).
  - Se já tiver um perfil chamado «Ajustado» em **Gerir → Perfil**, este perfil será atualizado com o perfil calculado pelo Autoajuste antes da ativação

  ![Autoajuste: Ativar perfil](../images/Autotune/Autotune_6.png)

- Se achar que o perfil ajustado deve ser corrigido (por exemplo, se achar que algumas variações são demasiado grandes), pode clicar no botão «Copiar para perfil local»

  - Será criado em **Gerir → Perfil** um novo perfil com o prefixo «Ajustado» e a data e a hora da execução

  ![Autoajuste: Copiar para perfil local](../images/Autotune/Autotune_7.png)

- Depois pode editar o perfil ajustado: abra **Gerir** > **Perfil**, deslize até ao cartão chamado «Ajustado» com a data e a hora da execução e toque no botão **Editar** (lápis)

  - na interface, os valores do perfil serão arredondados de acordo com as capacidades da sua bomba

  ![Autoajuste: atualização do perfil local](../images/Autotune/Autotune_8.png)

- Se quiser substituir o seu perfil de entrada pelo resultado do Autoajuste, clique no botão «Atualizar perfil de entrada» e confirme a janela com OK

  - Nota: se clicar em «Ativar perfil» depois de «Atualizar perfil de entrada», vai ativar o seu perfil atualizado e não o perfil predefinido «Ajustado».

  ![Autoajuste: Atualizar perfil de entrada](../images/Autotune/Autotune_9.png)

- Se atualizou o seu perfil de entrada, o botão «Atualizar perfil de entrada» é substituído pelo botão «Repor perfil de entrada» (ver a captura de ecrã abaixo). Assim, pode ver logo se o seu perfil de entrada atual em **Gerir → Perfil** já inclui ou não o resultado da última execução. Também pode recuperar o seu perfil de entrada sem o resultado do Autoajuste com este botão

  ![Autoajuste: Atualizar perfil de entrada](../images/Autotune/Autotune_10.png)



## Definições do Autoajuste

(autotune-plugin-settings)=

### Definições do plugin Autoajuste

  ![Definições do Autoajuste no AAPS 4](../images/preferences/settings_autotune.png)

```{admonition} Only DEV
:class: note
A função **Trocar perfil automaticamente** só está disponível no modo Dev/Engenharia.
```

- **Trocar perfil automaticamente** (predefinição: desativado): veja [Executar o Autoajuste com uma regra de automatização](#autotune-run-autotune-with-an-automation-rule) abaixo. Se ativar esta definição, o perfil de entrada será atualizado automaticamente com o perfil ajustado, e este será ativado.
  - **Tenha cuidado: depois de atualizar e ativar o perfil ajustado sem alterações, tem de confiar e verificar, durante vários dias seguidos, que este melhora o seu loop**

- **Classificar RNA como basal** (predefinição: desativado): esta definição é para os utilizadores que usam o AndroidAPS sem introduzir hidratos de carbono (RNA total). Quando desativada, impede que os períodos RNA sejam classificados como basal.
  - Nota: se tiver pelo menos uma hora de absorção de hidratos de carbono detetada num dia, todos os dados classificados como «RNA» serão classificados como basal, seja qual for esta definição (ativada ou desativada)
- **Dias de ajuste predefinidos** (predefinição: 5): com esta definição pode definir o valor predefinido. Sempre que selecionar um novo perfil no plugin Autoajuste, o **Número de dias de dados** será substituído por este valor predefinido
- **Usar IHC/FSI circadianos** (predefinição: desativado): veja [Perfil de IHC ou FSI circadiano](#autotune-circadian-ic-or-isf-profile) abaixo.

(autotune-other-settings)=
### Outras definições

- O Autoajuste também usa o rácio máximo e o rácio mínimo do Autosens para limitar a variação. Pode ver e ajustar estes valores em [**Definições** > **Definições de absorção** > **Definições avançadas**](../SettingUpAaps/Preferences.md) (**Autosens máx.** e **Autosens mín.**).

  ![Autosens máx. e Autosens mín. nas definições avançadas de absorção](../images/preferences/settings_absorption_advanced.png)



## Função avançada

(autotune-circadian-ic-or-isf-profile)=

### Perfil de IHC ou FSI circadiano

- Se tiver grandes variações de IHC e/ou de FSI no seu perfil e confiar totalmente nos seus horários e variações circadianos, pode ativar **Usar IHC/FSI circadianos** (chamado «Apply average result in circadian IC/ISF» em versões antigas)

  - Note que o cálculo do Autoajuste é sempre feito com um único valor, e a variação circadiana não é ajustada pelo Autoajuste. Esta definição apenas aplica aos seus valores circadianos a variação média calculada para o IHC e/ou o FSI

- Veja na captura de ecrã abaixo o perfil ajustado com a definição desativada (à esquerda) e ativada (à direita)

  ![Ecrã predefinido do Autoajuste](../images/Autotune/Autotune_13.png)



### Ajustar dias específicos da semana

- Se tocar no ícone do **olho** à direita do campo **Número de dias de dados**, verá a seleção de dias. Pode indicar que dias da semana devem ser incluídos no cálculo do Autoajuste (na captura de ecrã abaixo vê um exemplo de «dias úteis», com sábado e domingo removidos do cálculo do Autoajuste)
  - Se o número de dias incluídos no cálculo do Autoajuste for menor do que o **Número de dias de dados**, verá à direita do seletor de dias quantos dias serão incluídos (10 dias no exemplo abaixo)
  - Esta definição só dá bons resultados se o número de dias restantes não for demasiado pequeno (por exemplo, se ajustar um perfil específico para o fim de semana, apenas com sábado e domingo selecionados, deve definir o **Número de dias de dados** para pelo menos 21 ou 28, para ter 6 ou 8 dias incluídos no cálculo do Autoajuste)

  ![Ecrã predefinido do Autoajuste](../images/Autotune/Autotune_14b.png)

- Durante o cálculo do Autoajuste, pode ver o progresso dos cálculos («Resultado parcial: dia 1 / 4 ajustado» no exemplo abaixo, com sábado e domingo excluídos)

  ![Ecrã predefinido do Autoajuste](../images/Autotune/Autotune_15b.png)



(autotune-run-autotune-with-an-automation-rule)=

## Executar o Autoajuste com uma regra de automatização

```{admonition} Only DEV
:class: note
A função **Trocar perfil automaticamente** só está disponível no modo Dev/Engenharia.
```

O primeiro passo é definir o acionador correto para uma regra de automatização com o Autoajuste:

Nota: para mais informações sobre como definir uma regra de automatização, veja [aqui](../DailyLifeWithAaps/Automations.md).

- Deve selecionar o acionador «Tempo recorrente»: execute o Autoajuste só uma vez por dia; o Autoajuste foi feito para ser executado diariamente (em cada nova execução avança um dia e, rapidamente, as alterações ao perfil devem ser muito pequenas)

  ![Ecrã predefinido do Autoajuste](../images/Autotune/Autotune_16.png)

- No início, é melhor executar o Autoajuste durante o dia, para poder verificar os resultados. Se quiser executar o Autoajuste durante a noite, tem de selecionar no acionador as 4:00 ou mais tarde, para incluir o dia atual no cálculo seguinte do Autoajuste.

  ![Ecrã predefinido do Autoajuste](../images/Autotune/Autotune_17.png)

- Depois, pode selecionar a ação **Executar Autoajuste** (no grupo **Loop e insulina**)

  ![Ecrã predefinido do Autoajuste](../images/Autotune/Autotune_18.png)

- Depois, pode ajustar os parâmetros da ação para a sua execução. Numa nova ação, **Selecione o perfil para ajustar** mostra o primeiro perfil da sua lista de perfis locais, o campo **Dias de ajuste** está vazio e todos os dias estão selecionados. Escolha o perfil a ajustar e introduza o número de **Dias de ajuste** (1 a 30).

  ![Ecrã predefinido do Autoajuste](../images/Autotune/Autotune_19b.png)

- Após alguns dias, se confiar totalmente nos resultados do Autoajuste e a percentagem de alteração for baixa, pode ativar a opção «**Trocar perfil automaticamente**» nas [definições do Autoajuste](#autotune-plugin-settings), para atualizar e ativar automaticamente o perfil ajustado depois do cálculo.

Nota: se quiser ajustar automaticamente perfis para dias específicos da semana (por exemplo, um perfil para «Fim de semana» e outro para «Dias úteis»), crie uma regra para cada perfil e selecione os mesmos dias no acionador e na ação do Autoajuste. Os dias de ajuste devem ser suficientes para garantir que o ajuste é feito com pelo menos 6 ou 8 dias, e não se esqueça de selecionar no acionador uma hora depois das 4:00...

- Veja abaixo um exemplo de uma regra que é executada em todos os dias úteis (de segunda a sexta-feira) às 04:00 e ajusta o perfil «Normal» com 14 **Dias de ajuste**, só dias úteis (por isso, só 10 dias são incluídos no cálculo do Autoajuste).

  ![Ecrã predefinido do Autoajuste](../images/Autotune/Autotune_20b.png)



## Dicas e truques

O Autoajuste funciona com as informações que existem na sua base de dados. Por isso, se acabou de instalar o AAPS num telefone novo, terá de esperar vários dias antes de poder iniciar o Autoajuste com dias suficientes para obter resultados relevantes.

O Autoajuste é apenas uma ajuda: é importante verificar regularmente se concorda com o perfil calculado. Se tiver alguma dúvida, mude as definições do Autoajuste (por exemplo, o número de dias) ou copie os resultados para um perfil local e ajuste o perfil antes de o usar.

Use sempre o Autoajuste manualmente durante vários dias para verificar os resultados antes de os aplicar. Só quando confiar totalmente nos resultados do Autoajuste, e quando a variação entre o perfil anterior e o perfil calculado for muito pequena, deve começar a usar a automatização (nunca antes)

- O Autoajuste pode funcionar muito bem para alguns utilizadores e não para outros, por isso **se não confiar no resultado do Autoajuste, não o use**

Também é importante analisar os resultados do Autoajuste para perceber (ou tentar perceber) porque é que o Autoajuste propõe estas alterações

- pode haver um aumento ou uma diminuição geral da força do seu perfil (por exemplo, aumento da basal total associado a uma diminuição dos valores de FSI e IHC). pode estar associado a vários dias seguidos com correção do Autosens acima de 100% (é precisa mais agressividade) ou abaixo de 100% (está mais sensível)
- Por vezes o Autoajuste propõe um equilíbrio diferente entre as taxas basais e o IHC/FSI (por exemplo, basal mais baixa e IHC/FSI mais agressivos)

Aconselhamos a não usar o Autoajuste nos seguintes casos:

- Não introduz todos os seus hidratos de carbono
  - Se não introduzir os hidratos de carbono de correção de uma hipoglicemia, o Autoajuste verá uma subida inesperada do seu valor de glicose e aumentará as suas taxas basais 4 horas antes. Isso pode ser o contrário do que precisa para evitar a hipoglicemia, sobretudo se for a meio da noite. Por isso é importante introduzir todos os hidratos de carbono, sobretudo os de correção de hipoglicemias.
- Tem muitos períodos com RNA detetadas durante o dia.
  - Introduziu todos os seus hidratos de carbono e estimou-os corretamente?
  - Todos os períodos RNA (exceto se não introduzir hidratos de carbono num dia e a classificação de RNA como basal estiver desativada) serão classificados como basal, o que pode aumentar muito a sua basal (muito mais do que o necessário)

- A sua absorção de hidratos de carbono é muito lenta: se a maior parte da absorção de hidratos de carbono for calculada com o parâmetro min_5m_carbimpact (pode ver estes períodos com um pequeno ponto laranja no topo da curva de HCA), o cálculo dos HCA pode estar errado e levar a resultados errados.
  - Quando pratica desporto, em geral fica mais sensível e a sua glicose não sobe muito; por isso, durante ou depois do exercício, é normal ver alguns períodos com hidratos de carbono lentos. Mas se tiver com demasiada frequência uma absorção lenta e inesperada de hidratos de carbono, pode precisar de ajustar o perfil (valor de IHC mais alto) ou o min_5m_carbimpact pode estar um pouco alto demais.
- Tem «dias muito maus», por exemplo, várias horas presas em hiperglicemia com uma enorme quantidade de insulina para conseguir descer para o intervalo, ou longos períodos de valores de glicose errados depois de uma mudança de sensor. Se nas últimas semanas só tiver um ou 2 «dias maus», pode desativar manualmente estes dias no cálculo do Autoajuste para os excluir do cálculo e, novamente, **verifique com cuidado se pode confiar nos resultados**
- Se a percentagem de alteração for demasiado grande
  - Pode tentar aumentar o número de dias para obter resultados mais suaves
