(Extended-Carbs-extended-carbs-ecarbs)=
# Carboidratos estendidos / "eCarbs"

## O que são eCarbs e quando eles são úteis?

Na terapia comum com bomba, os bólus estendidos são uma boa forma de lidar com refeições gordurosas ou de absorção lenta, que aumentam a glicose por mais tempo do que a insulina age. Em um loop, porém, os bólus estendidos não fazem tanto sentido (e trazem problemas técnicos), porque eles são basicamente uma basal temporária alta e fixa. Isso vai contra o funcionamento do loop, que ajusta a taxa basal de forma dinâmica. Para mais detalhes, veja [bólus estendido](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) abaixo.

Mas a necessidade de lidar com essas refeições continua existindo. Por isso, o AAPS oferece os chamados carboidratos estendidos, ou eCarbs.

eCarbs são carboidratos divididos ao longo de várias horas. Para refeições comuns, com mais carboidratos do que gordura/proteína, inserir os carboidratos logo no início (e reduzir o bólus inicial, se necessário) normalmente basta para evitar que a insulina seja dada cedo demais.  Mas, para refeições de absorção mais lenta, em que inserir todos os carboidratos no início gera IOB demais por causa do SMB, os eCarbs podem ser usados para simular com mais precisão como os carboidratos (e os equivalentes de carboidratos que você inserir para outros macronutrientes) são absorvidos e influenciam a glicose. Com essa informação, o loop pode dar os SMBs de forma mais gradual para lidar com esses carboidratos. Isso pode ser visto como um bólus estendido dinâmico (também deve funcionar sem SMBs, mas provavelmente com menos eficácia).

**Nota:** os eCarbs não servem apenas para refeições gordurosas / ricas em proteína: eles também podem ajudar em qualquer situação com influências que aumentam a glicose, por exemplo, outros medicamentos como os corticosteroides.

## Como usar os eCarbs

Para inserir eCarbs, abra a caixa de diálogo **Carboidratos** (**Tratamentos** → **Carboidratos**), insira o total de carboidratos, defina uma **Duração** e, se quiser, mude o início com **Tempo dos carboidratos** (*os números abaixo são apenas exemplos; você vai precisar testar seus próprios valores para chegar a uma resposta da glicose satisfatória nos seus casos*):

![Inserir carboidratos](../images/eCarbs_Dialog.png)

Os eCarbs na tela principal: o número entre parênteses no campo **COB** mostra os carboidratos que ainda vão entrar, e o gráfico **COB** mostra cada entrada futura de eCarbs como um marcador laranja. Se você não vê um gráfico **COB**, adicione um com **Adicionar gráfico** abaixo dos gráficos (veja [Telas do AAPS](../DailyLifeWithAaps/AapsScreens.md)).

![eCarbs no campo COB e no gráfico COB](../images/eCarbs_Graph.png)

(AapsScreens-carbs-type)=
## Tipo de carboidratos no Assistente de Bólus: pão, bolo ou pizza

No [Assistente de Bólus](#aaps-screens-bolus-wizard), três botões abaixo do campo **Carboidratos** permitem escolher a velocidade de absorção da sua refeição. Escolha um antes de confirmar. Dependendo do tipo, o **AAPS** usa uma parte dos carboidratos que você digitou como carboidratos normais e adiciona [carboidratos estendidos ("eCarbs")](#Extended-Carbs-extended-carbs-ecarbs) mais tarde para refeições lentas e pesadas. Toque no ícone **(i)** ao lado dos botões para ver os alimentos típicos do tipo selecionado e o que ele faz com os seus carboidratos.

| Tipo             | Alimentos típicos (como listados no app)                                                                              | Carboidratos agora, usados para o bólus | eCarbs adicionados                                        |
| ---------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | --------------------------------------------------------- |
| **Pão** (padrão) | Pão, salgados, iogurte, frutas, batatas, arroz, aveia, legumes                                                        | 100%                                    | None                                                      |
| **Bolo**         | Bolinhos, massas, pratos asiáticos ricos em carboidratos e gorduras, doces e massas fermentadas, cereais, mel, geleia | 90%                                     | 20%, começando 60 minutos depois, distribuídos em 2 horas |
| **Pizza**        | Lasanha, pizza, hambúrgueres, batatas fritas, batatas assadas, chips                                                  | 80%                                     | 35%, começando 60 minutos depois, distribuídos em 3 horas |

**Exemplo**: você digita 100 g e escolhe **Pizza**. O bólus é calculado para 80 g, registrados agora. 35 g de eCarbs começam 1 hora depois e são distribuídos em 3 horas.

Good to know:
* Isto não é uma simples divisão: com **Bolo** e **Pizza**, os carboidratos registrados somam **mais do que você digitou** (110% e 115%). O excesso está apenas nos eCarbs.
* O bólus cobre apenas os carboidratos registrados agora. O **AAPS** não dá bólus antecipado para os eCarbs: o loop leva os eCarbs em conta quando eles começam, como quaisquer outros [eCarbs](#Extended-Carbs-extended-carbs-ecarbs).
* Se você definir um **Tempo dos carboidratos**, os eCarbs começam 60 minutos depois desse horário.
* A caixa de diálogo de confirmação mostra os eCarbs em uma linha própria, _por exemplo,_ "eCarbs 35g / 3h (+60min)".
* Os gramas são arredondados para baixo, para números inteiros.
* As porcentagens, os atrasos e as durações são fixos; eles não podem ser alterados nas configurações.
* A escolha não é lembrada: o assistente abre sempre em **Pão**.

______________________________________________________________________

Uma forma de lidar com gordura e proteína com esse recurso está descrita aqui: [https://adriansloop.blogspot.com/2018/04/page-margin-0.html](https://adriansloop.blogspot.com/2018/04/page-margin-0.html)

______________________________________________________________________

## Configuração recomendada, exemplo de cenário e notas importantes

A configuração recomendada é usar o plugin APS SMB OpenAPS, com os SMBs ativados e também com a preferência *Ativar SMB com COB* ativada.

Um cenário, por exemplo, para uma pizza pode ser dar um bólus (parcial) no início pelo *Assistente de Bólus* e depois usar a caixa de diálogo *Carboidratos* para inserir os carboidratos restantes com uma duração de 4–6 horas, começando depois de 1 ou 2 horas.

Para começar mais rápido, o *Assistente de Bólus* pode adicionar eCarbs para você: escolha o [tipo de carboidratos](#AapsScreens-carbs-type) **Bolo** ou **Pizza** abaixo do campo **Carboidratos** (veja acima). As quantidades e os horários são fixos; por isso, use a caixa de diálogo *Carboidratos* se você quiser outros valores.

**Notas importantes:** Claro que você vai precisar testar e ver quais valores concretos funcionam para você. Você também pode ajustar com cuidado a configuração *Máximo de minutos de basal para limitar o SMB* para deixar o algoritmo mais ou menos agressivo. Em refeições com pouco carboidrato e muita gordura/proteína, pode bastar usar apenas eCarbs, sem bólus manuais (veja o post do blog acima). Quando os eCarbs são gerados, uma anotação do Careportal também é criada para registrar todas as entradas. Isso facilita repetir e melhorar as entradas.

(extended-bolus-and-why-they-wont-work-in-closed-loop-environment)=
## Bólus estendido e por que ele não funciona em um loop fechado?

Como dito acima, os bólus estendidos ou de onda múltipla não funcionam bem em um loop fechado. [Veja abaixo](#why-extended-boluses-won-t-work-in-a-closed-loop-environment) para mais detalhes

(Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)=
### Bólus estendido e troca para loop aberto - apenas bombas Dana e Insight

Algumas pessoas pediram uma opção para usar o bólus estendido no AAPS mesmo assim, porque queriam tratar certos alimentos do jeito a que estão acostumadas.

Por isso, o **AAPS** oferece um bólus estendido para usuários das bombas Dana e Insight: abra **Gerenciar** e selecione **Bólus estendido**.

Primeiro, o **AAPS** avisa que o loop fechado será parado enquanto o bólus estendido estiver em andamento. Toque em **OK** para continuar:

![Aviso: o bólus estendido para o modo de loop fechado](../images/extended_bolus_stops_loop.png)

Insira a quantidade de **Insulina** e a **Duração**, depois toque no botão de confirmação na parte de baixo e em **OK**:

![Caixa de diálogo de bólus estendido com 2 U em 60 minutos](../images/extended_bolus_dialog.png)

Na bomba Insight, o bólus estendido *não está disponível* se a [emulação TBR](#Accu-Chek-Insight-Pump-settings-in-aaps) for usada.

Enquanto o bólus estendido estiver em andamento, o loop funciona no modo **Loop Aberto** (o ícone do loop na tela principal muda), e o loop fechado é ligado de novo automaticamente quando o bólus estendido termina:

![Ícone de Loop Aberto na tela principal enquanto um bólus estendido está em andamento](../images/extended_bolus_main_screen.png)

O menu **Gerenciar** mostra um botão **Cancelar** com a taxa e o tempo decorrido / total (por exemplo, **Cancelar 2,00 U/h 1/60'**). Toque nele para parar o bólus estendido antes do fim:

![Botão Cancelar de um bólus estendido em andamento no menu Gerenciar](../images/extended_bolus_running_manage.png)

(why-extended-boluses-won-t-work-in-a-closed-loop-environment)=
### Por que os bólus estendidos não funcionam em um loop fechado

1. O loop determina que agora devem ser dados 1,55 U/h. Para o algoritmo, não importa se isso é dado como bólus estendido ou como TBR. Na verdade, algumas bombas usam o bólus estendido. O que deveria acontecer então? A maioria dos drivers de bomba então para o bólus estendido -> Você nem precisava ter iniciado.

2. Se o bólus estendido fosse uma entrada, o que deveria acontecer no modelo?

   1. Ele deveria ser considerado neutro junto com a taxa basal (BR) e o loop trabalhar em cima disso? Então o loop também deveria poder reduzir o bólus se, por exemplo, você ficar baixo demais e toda a insulina "neutra" for retirada?
   2. O bólus estendido deveria simplesmente ser somado? Então o loop deveria simplesmente poder continuar? Mesmo na pior hipoglicemia? Eu não acho isso muito bom: uma hipoglicemia é prevista, mas não pode ser evitada?

3. O IOB que o bólus estendido cria aparece depois de 5 minutos, na próxima execução. Por isso, o loop daria menos basal. Então não muda muita coisa... exceto que a possibilidade de evitar a hipoglicemia é perdida.
