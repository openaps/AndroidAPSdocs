# Como editar a documentação

**Esta descrição serve apenas para editar a documentação em inglês. Toda a informação nova tem de ser adicionada primeiro em inglês. Se quer traduzir para outras línguas (obrigado), use o [crowdin](https://crowdin.com/project/androidapsdocs).**

Para dicas sobre como formatar o texto (títulos, negrito...) e criar links, veja a secção ["Sintaxe do código"](#code-syntax) desta página.

## Geral

Para perguntas, comentários ou novas ideias, pode contactar a equipa da documentação através do [discord](https://discord.gg/4fQUWHZ4Mw).

A certa altura, vão sugerir-lhe que faça um pull request (PR), que é a forma como as suas alterações à documentação são realmente colocadas nas páginas web do AAPS, que estão guardadas no GitHub. Fazer um PR não é muito difícil e é uma ótima forma de contribuir. Está a ler esta documentação agora porque pessoas como o leitor fizeram PR. Não tenha medo de errar ou de editar os documentos errados. As suas alterações são revistas antes de serem integradas no repositório "oficial" da documentação do AAPS. Não consegue estragar os originais por nenhum acidente durante o processo. O processo geral é:

- Faça alterações e melhorias no código ou na documentação, editando o conteúdo existente.
- Verifique bem se as suas alterações estão como quer.
- Escreva algumas notas sobre o que mudou, para que as pessoas entendam as alterações.
- Crie um pull request, que pede aos administradores para usarem as suas alterações.
- Eles vão rever as alterações e (1) fazer o merge das suas alterações, (2) responder-lhe com comentários sobre as alterações, ou (3) começar um novo documento com as suas alterações.

(Nota: se aprende melhor com imagens, há um vídeo no YouTube [aqui](https://youtu.be/4b6tsL0_kzg) que mostra o processo de PR.)

Como exemplo, vamos fazer uma alteração no AndroidAPSdocs. Isto pode ser feito em qualquer PC Windows, Mac, etc. (qualquer computador com acesso à Internet).

1. Vá a <https://github.com/openaps/AndroidAPSdocs> e clique em Fork no canto superior direito para criar a sua própria cópia do repositório.

![Fazer fork do repositório](../images/PR0.png)

2. Vá a qualquer página e navegue até à página que quer editar. Pode clicar no link "Edit in GitHub" no canto superior direito. Isto só é possível nas páginas em inglês. 

![editar documento](../images/PR1.png)

Ou clique no ícone do lápis que aparece na barra superior do conteúdo da página que quer editar. Para isto, precisa de já ter sessão iniciada na sua conta GitHub (se não tiver uma, é simples de criar).

![RTD io](../images/PR2.png)

3. Qualquer uma das opções do passo 2 cria um novo branch no SEU repositório, onde as suas alterações ficam guardadas. Faça as suas alterações no ficheiro.

Usamos markdown nas páginas da documentação. Os ficheiros têm a extensão ".md". A especificação do Markdown não é fixa e, neste momento, usamos o myst_parser nos nossos ficheiros markdown. Tenha o cuidado de usar a sintaxe correta, como [descrito abaixo](#code-syntax).

![Editar branch](../images/PR3.png)

4. Tem estado a trabalhar no separador "<>Edit file". Selecione o separador "Preview changes" para ver tudo com outros olhos e confirmar que tudo o que alterou ficou como queria (incluindo erros de escrita). Se vir uma melhoria necessária, volte ao separador de edição para fazer mais melhorias. 

![modo de pré-visualização](../images/PR5.png)

5. Quando terminar as suas alterações, desça até ao fundo da página. Na caixa no fundo, escreva os seus comentários no campo de texto que diz "Add an optional extended description...". O título predefinido tem o nome do ficheiro. Tente incluir uma frase a explicar o **motivo** da alteração. Explicar o motivo ajuda os revisores a perceber o que está a tentar fazer com o PR.

![comentários do commit](../images/PR4.png)

6. Clique no botão verde "Propose file changes" ou "Commit changes". Na página que aparece, clique em "Create Pull Request" e, na página seguinte, clique de novo em "Create Pull Request".

![criar pull request](../images/PR6.png)

7. Assim fica concluída a abertura de um pull request (PR). O GitHub dá um número ao PR, que aparece depois do título e de um cardinal (#). Volte a esta página para ver se há comentários (ou, se recebe as notificações do GitHub por e-mail, vai receber e-mails sobre qualquer atividade no PR). A alteração vai ficar numa lista de PR que a equipa vai rever e, talvez, comentar antes de a incluir na documentação principal do AAPS! Se quiser ver o progresso do PR, pode clicar no ícone do sino no canto superior direito da sua conta GitHub e ver todos os seus PR.

![Acompanhamento do PR](../images/PR7.png)

PS: o seu fork e o seu branch continuam na sua conta pessoal do GitHub. Depois de receber uma notificação de que foi feito o merge do seu PR, pode apagar o seu branch se já não precisar dele (a área de notificações do passo 8 dá um link para apagar o branch depois de ter sido fechado ou integrado). Nas próximas alterações, se seguir este procedimento, as alterações começam sempre a partir de uma versão atualizada dos repositórios do AndroidAPSdocs. Se escolher outro método para começar um PR (por exemplo, editar a partir do branch master do seu repositório fork), tem de garantir que o seu repositório está atualizado: faça primeiro um "compare" e integre as atualizações que aconteceram desde a última vez que atualizou o seu fork. Como as pessoas costumam esquecer-se de atualizar os seus repositórios, recomendamos usar o processo de PR descrito acima até estar habituado a fazer "compares".

(edit-the-docs-code-syntax)=

## Sintaxe do código

Usamos markdown nas páginas da documentação. Os ficheiros têm a extensão ".md".

O Markdown é uma linguagem de formatação de texto muito simples, que separa o conteúdo do texto da sua formatação.

Quem escreve apenas marca, por exemplo, um título como título de nível 1, e o processador de markdown gera durante o processamento o código HTML necessário para mostrar o título em HTML.

A ideia por trás disto é que

- quem escreve deve pensar primeiro no texto e não na formatação,
- o texto markdown pode ser usado em diferentes ferramentas de markdown, em vez de, por exemplo, ferramentas proprietárias como o Microsoft Windows, e
- pode gerar vários formatos de saída a partir de um ficheiro markdown.

O markdown não é uma norma 100% fixa e tentamos ficar o mais perto possível da norma, para

- manter a flexibilidade para mudar de ferramentas de markdown quando for necessário ou imposto pela evolução das ferramentas de markdown e dos serviços SaaS de markdown, e
- podermos usar serviços de tradução para traduzir o inglês para uma língua de destino, como o francês ou o alemão. Estes serviços funcionam com markdown, mas não com códigos de formatação complexos, porque não conseguem separar o conteúdo do layout, o que pode ser fatal.

### Títulos

- Título 1: `# headline`
- Título 2: `## headline`
- Título 3: `### headline`
- Título 4: `#### headline`

Tentamos evitar mais níveis de títulos.

### Formato do texto

- **negrito**: `**text**`
- *itálico*: `*text*`
- ***negrito itálico***: `***text***`

### Lista ordenada

    1. primeiro
    1. segundo
    1. terceiro
    

1. primeiro
2. segundo
3. terceiro

### Lista não ordenada

    - um elemento
    - outro elemento
    - e mais outro elemento
    

- um elemento
- outro elemento
- e mais outro elemento

### Lista com vários níveis

Pode colocar listas dentro de listas, ao avançar o nível seguinte 4 espaços mais para a direita do que o anterior.

    1. primeiro
    1. segundo
    1. terceiro
      1. um elemento
      1. outro elemento
      1. e mais outro elemento
    1. quatro
    1. cinco
    1. seis
    

1. primeiro
2. segundo
3. terceiro 
    1. um elemento
    2. outro elemento
    3. e mais outro elemento
4. quatro
5. cinco
6. seis

### Imagens

Para incluir imagens, use esta sintaxe markdown.

- imagens: `![alt text](../images/file.png)`

O tipo de imagem deve ser PNG ou JPEG.

Os nomes das imagens devem seguir uma das seguintes regras. No exemplo, uso png como extensão. Se usar JPEG, use jpeg como extensão.

- `filename-image-xx.png`, em que xx é um número único de dois algarismos para as imagens deste ficheiro.
- `filename-image-xx.png`, em que xx é um nome com significado escolhido pelo autor do ficheiro md.

As imagens ficam na pasta images da língua inglesa e são passadas automaticamente para as outras línguas pelo Crowdin. Não tem de fazer nada para isso!

Neste momento não traduzimos imagens: as imagens devem ter o **mínimo de texto possível**, para serem acessíveis a leitores que não falam inglês.

(make-a-PR-image-size)= Use um tamanho razoável para as imagens, que têm de ser legíveis em PC, tablet e telemóvel.

- As capturas de ecrã de páginas web devem ter até **1050 píxeis de largura**.
- Os diagramas de processos devem ter até **1050 píxeis de largura**.
- As capturas de ecrã da aplicação devem ter até **500 píxeis de largura**. Não as coloque lado a lado se não for necessário.
- As capturas de ecrã do relógio (**Wear OS**) devem ter até **360 píxeis de largura**. Nunca aumente uma captura de ecrã mais pequena.

### Links

#### Links externos

Links externos são links para sites externos.

- link externo: `[alt text](www.url.tld)`

#### Links internos para o início de um ficheiro md

Links internos para páginas são links para o início de um ficheiro md que está no nosso próprio servidor.

- link interno para uma página .md: `[alt text](../folder/file.md)`

#### Links internos para referências com nome dentro do texto

Links internos para referências com nome são links para qualquer ponto de um ficheiro md que está no nosso próprio servidor e onde foi definida uma referência para onde apontar.

Adicione uma referência com nome no sítio do ficheiro md de destino para onde quer saltar.

`(name-of-my-md-file-this-is-my-fancy-named-reference)=`

A referência com nome tem de ser única em todos os ficheiros md do AndroidAPSDocs, e não só no ficheiro md onde está!

Por isso, é boa prática começar com o nome do ficheiro e depois o nome da referência que escolher.

Use só letras minúsculas e separe as palavras com hífenes.

Depois, ponha um link para esta referência no texto que está a escrever, com o seguinte tipo de link.

- Links internos para referências com nome: `[alt text](name-of-my-md-file-this-is-my-fancy-named-reference)`

### Notas, avisos, notas que se podem recolher

Pode adicionar caixas de notas e de avisos à documentação.

Além disso, pode adicionar notas que se podem recolher para informação detalhada, para que os utilizadores que não se interessam pelos detalhes não desistam de ler o texto. Use-as com cuidado, porque a documentação deve ser o mais fácil de ler possível.

#### Notas

    ```{admonition} Título da nota
    :class: note
    Isto é uma nota.
    ```
    

```{admonition} Título da nota :class: note Isto é uma nota.

    <br />#### Avisos
    
    ````
    ```{admonition} Aviso
    :class: warning
    Isto é um aviso.
    

    ```{admonition} Título do aviso 
    :class: warning
    Isto é um aviso.
    ```
    
    #### Notas que se podem recolher
    
    

    {admonition} leituras mais detalhadas para leitores interessados
    :class: dropdown
    
    Esta caixa de aviso foi recolhida,
    o que significa que pode adicionar aqui conteúdo mais longo,
    sem ocupar demasiado espaço na página.
    

````

```{admonition} leituras mais detalhadas para leitores interessados :class: dropdown Esta caixa de aviso foi recolhida, o que significa que pode adicionar aqui conteúdo mais longo, sem ocupar demasiado espaço na página.

```

## Tabelas

Evite usar tabelas com textos longos, porque o conteúdo é difícil de formatar em Markdown, normalmente não cabe na largura do ecrã de um telemóvel e provavelmente não vai aparecer da mesma forma depois da tradução.

## Guia de estilo

### Conteúdo

1. Dicas para escrever em inglês

2. Notas de escrita específicas do AAPS

3. Referências úteis

### ![Imagem](../images/styleguide01.png) 1\. Dicas para escrever em inglês

#### Use uma linguagem adequada ao leitor

Use inglês simples sempre que possível. Isto ajuda os leitores que não são nativos e também facilita a tradução dos documentos do AAPS para outras línguas. Escreva como numa conversa com o utilizador: imagine que está sentado à secretária, em frente da pessoa para quem escreve. Lembre-se: a maioria dos utilizadores do AAPS não tem formação em programação. A própria diabetes também tem muito jargão e muitas abreviaturas. Tenha em conta que algumas pessoas podem ter sido diagnosticadas há pouco tempo, podem ter menos experiência com a diabetes do que o leitor, ou podem ter recebido uma formação diferente sobre a diabetes. Se usar uma forma curta ou uma abreviatura, escreva-a por extenso na primeira vez que a usa, com a abreviatura logo a seguir entre parênteses, como “super micro bolus (SMB)”. Ponha também um link para o glossário. Os termos técnicos que o leitor pode não conhecer também podem ser explicados entre parênteses.

Em vez de: *“What causes high postprandial BG peaks in closed loop?"*

Use: *“What causes a high BG peak **after lunch** (postprandial) in closed loop?"*

##### Use palavras simples que todos entendam

Encontre aqui uma lista de A a Z de palavras alternativas para tornar o seu texto mais fácil de entender:

<https://www.plainenglish.co.uk/the-a-z-of-alternative-words.html>

#### Questões de privacidade/licenças:

Sobretudo se gravar vídeos ou fizer capturas de ecrã, não mostre os seus dados privados (chave API, senhas). Garanta que o conteúdo do YouTube não está listado publicamente e que só pode ser visto através de um link na documentação. Evite chamar a atenção para materiais protegidos por direitos de autor usados sem autorização (BYODA, etc.).

#### Escreva frases curtas e vá direto ao assunto

- Um texto claro deve ter frases com 15 a 20 palavras em média.

- Isto não quer dizer que todas as frases tenham o mesmo tamanho. Seja direto. Varie a escrita, misturando frases curtas (como a anterior) com frases mais longas (como esta).

- Fique com uma ideia principal por frase, e talvez mais um ponto relacionado.

- Pode ainda escrever uma ou outra frase longa, sobretudo quando tenta explicar um ponto complicado. Mas a maioria das frases longas pode ser dividida de alguma forma.

- Retire palavras fracas: “you can”, “there is/are/were”, “in order to”.

- Coloque as palavras-chave perto do início dos títulos, das frases e dos parágrafos.

- Seja visual! Sempre que possível, inclua um diagrama, uma captura de ecrã ou um vídeo curto.

#### Não tenha medo de dar instruções

Os comandos são a forma mais rápida de dar instruções, mas quem escreve às vezes tem medo de dar ordens e escreve “you should do this” em vez de apenas “do this”. Talvez as pessoas tenham receio de que as ordens pareçam demasiado duras. Muitas vezes pode resolver isto ao colocar a palavra 'please' antes. Mas, se algo tem mesmo de ser feito, é melhor não dizer ‘please’, porque isso dá ao leitor a opção de recusar.

Em vez de: *“You should just think of it as a complete statement."*

Use: *“Think of it as a complete statement.”*

#### Use sobretudo verbos na voz ativa, em vez da voz passiva

Exemplo de um **verbo na voz ativa**:

- *“The pump (subject) delivers (verb) the insulin (object).”*

Aqui, “delivers” é um verbo na voz ativa. A frase diz primeiro quem faz a administração e só depois o que é administrado.

Exemplo de um **verbo na voz passiva**:

- *“The insulin (subject) is delivered (verb) by the pump (object)”*

Aqui, *“delivered”* é um verbo na voz passiva. O sujeito e o objeto trocam de lugar, em comparação com a frase na voz ativa. Tivemos de tornar a frase mais longa, ao acrescentar “is” e “by the”. Pense também em começar com o verbo na voz ativa.

Em vez de: *“You can connect your pump with the phone through the AAPS pump menu, and there are a number of pumps available for you to connect with.”*

Use: *“Connect your desired pump to the phone through the AAPS pump menu.”*

Os verbos na voz passiva podem causar problemas:

- Podem confundir.

- Muitas vezes tornam o texto mais longo.

- Tornam o texto menos vivo.

##### Bons usos da voz passiva

Há casos em que pode ser adequado usar a voz passiva.

- Para tornar algo menos agressivo - 'this bill has not been paid' (passiva) é mais suave do que 'you have not paid this bill' (ativa).

- Para evitar atribuir a culpa - 'a mistake was made' (passiva) em vez de 'You made a mistake' (ativa).

- Quando não sabe quem ou o que faz a ação - 'the England team has been picked'.

- Se simplesmente soar melhor.

#### Evite nominalizações

Uma nominalização é o nome de algo que não é um objeto físico, como um processo, uma técnica ou uma emoção. As nominalizações formam-se a partir de verbos.

Por exemplo:

| Verbo     | Nominalização |
| --------- | ------------- |
| complete  | completion    |
| introduce | introduction  |
| provide   | provision     |
| fail      | failure       |

Muitas vezes são usadas **em vez** dos verbos de onde vêm, mas podem dar a ideia de que nada está realmente a acontecer. Demasiadas nominalizações podem tornar o texto muito aborrecido e pesado.

Em vez de: *“The implementation of the method has been done by a team.”*

Use: *“A team has implemented the method.”*

#### Use listas quando for adequado

As listas são ótimas para dividir a informação. Há dois tipos principais de listas:

- Uma frase contínua com vários pontos destacados no início, no meio ou no fim.

- Pontos de lista separados, com uma frase de introdução.

Na lista com pontos acima, cada ponto é uma frase completa, por isso cada um começa com letra maiúscula e termina com um ponto final. Use pontos de lista em vez de números ou letras, porque chamam a atenção para cada ponto sem dar informação extra para absorver.

#### Desfazer mitos

- Pode começar uma frase com **and, but, because, so ou however**.

- Pode separar o infinitivo («split infinitive»). Por isso, pode dizer **“to boldly go”**.

- Pode terminar uma frase com uma preposição. Na verdade, é algo que **we should stand up for**.

- E **pode** usar a mesma **palavra** duas vezes numa frase, se **não** encontrar uma **palavra** melhor.

#### Otimizar o estilo de escrita conforme o objetivo

Para manter a documentação clara e curta, escrevemos as diferentes secções da documentação em estilos diferentes.

O estilo de “explicação” é usado nas secções de introdução, contexto e desenvolvimento de conhecimentos.

O estilo de “guia prático” (com o mínimo de explicação) é usado para compilar e configurar o AAPS e em algumas secções de resolução de problemas.

Um tutorial ajuda o aluno a adquirir competências básicas. O utilizador vai **aprender fazendo**.

![Imagem](../images/styleguide02.png)

##### ![Imagem](../images/styleguide03.png) Tutoriais (por exemplo, ensinar uma criança a bater claras em castelo)

- o narrador fala diretamente com o leitor: In this tutorial **you** will (we) pode ser usado, em casos raros, para transmitir a ideia de “estamos nisto juntos”

- Futuro -> para mostrar o objetivo final

- Imperativo -> para fazer as tarefas -> Passos concretos - evite conceitos abstratos

- Passado -> para mostrar as tarefas concluídas -> Resultados rápidos e visíveis de imediato

- Explicações mínimas -> só o estritamente necessário para concluir a tarefa - **o quê e porquê**

- Ignore opções/alternativas/…. Sem ambiguidade

- Transições entre passos: termine um passo com uma frase que leva ao passo seguinte, numa progressão lógica. Exemplo: *You have now installed the Let’s Encrypt client, but before obtaining certificates, you need to make sure that all required ports are open. To do this, you will update your firewall settings in the next step.*

- Título do **Tutorial** (título de nível 1)

- Introdução (sem título)

- Pré-requisitos (título de nível 2)

- Passos:

- Passo 1 — Fazer a primeira coisa (título de nível 2)

- Passo 2 — Fazer a coisa seguinte (título de nível 2)

- Passo n — Fazer a última coisa (título de nível 2)

- Conclusão (título de nível 2)
    
    - **A linguagem dos tutoriais**
        
        *In this tutorial, you will…*
        
        Descreva o que o aluno vai conseguir fazer (nota - não: “you will learn…”).
        
        *First, do x. Now, do y. Now that you have done y, do z.*
        
        Sem espaço para ambiguidade ou dúvida.
        
        *We must always do x before we do y because… (see Explanation for more details).*
        
        Dê o mínimo de explicação sobre as ações, na linguagem mais simples possível. Ponha um link para uma explicação mais detalhada.
        
        *The output should look something like this…*
        
        Dê ao seu aluno expectativas claras.
        
        *Notice that… Remember that…*
        
        Dê ao seu aluno muitas pistas que o ajudem a confirmar que está no caminho certo e a orientar-se.
        
        *You have built a secure, three-layer hylomorphic stasis engine…*
        
        Descreva (e elogie, de forma moderada) o que o seu aluno conseguiu fazer (nota - não: “you have learned…”)

##### ![Imagem](../images/styleguide05.png) Guias práticos (por exemplo, uma receita)

O objetivo de um guia prático é ajudar o utilizador que já tem competências a fazer corretamente uma tarefa específica.

- COMO FAZER

- o narrador fala diretamente com o leitor: In this tutorial **you** will

- Futuro -> para mostrar o objetivo final

- Imperativo condicional -> para obter X, faça Y -> Passos concretos - evite conceitos abstratos

- Explicações mínimas -> só o estritamente necessário para concluir a tarefa -> **o quê e porquê**

- Ignore opções/alternativas/…. Sem ambiguidade, mas pode pôr um link para a entrada de referência ou de explicação

- **Como fazer**: Título (título de nível 1)

- Parágrafo de introdução

- Pré-requisitos opcionais (parágrafo, ou título de nível 2 se houver mais do que 1)

- Passos:

- Passo 1 — Fazer a primeira coisa (título de nível 2)

- Passo 2 — Fazer a coisa seguinte (título de nível 2)

- Passo n — Fazer a última coisa (título de nível 2)

- Parágrafo de conclusão
    
    - **A linguagem dos guias práticos**
        
        *This guide shows you how to…*
        
        Descreva claramente o problema ou a tarefa que o guia mostra ao utilizador como resolver.
        
        *If you want x, do y. To achieve w, do z.*
        
        Use imperativos condicionais.
        
        *Refer to the x reference guide for a full list of options.*
        
        Não encha o seu guia prático com tudo o que o utilizador poderia fazer relacionado com x.

##### ![Imagem](../images/styleguide07.png) Explicação (por exemplo, a ciência que explica porque é que as claras ficam firmes quando são batidas)

Uma explicação esclarece, aprofunda e alarga o conhecimento do leitor sobre um tema.

- PORQUÊ

- Comece com **Sobre**

- Dê contexto e ponha links para TODAS as referências relevantes

- Discuta opções/alternativas

- Não dê instruções nem forneça referências (ponha links para elas)

- Indique o que é desconhecido, o que ainda está a mudar, etc.…

- Título **Sobre** (título de nível 1)

- Introdução (sem título)

- Pré-requisitos opcionais (título de nível 2)

- Subtema 1 (título de nível 2)

- Conclusão (título de nível 2)
    
    - **A linguagem da explicação**
    
    *The reason for x is because historically, y…*
    
    Explique.
    
    *W is better than z, because…*
    
    Dê avaliações e até opiniões quando for adequado.
    
    *An x in system y is analogous to a w in system z. However…*
    
    Dê contexto que ajude o leitor.
    
    *Some users prefer w (because z). This can be a good approach, but…*
    
    Pondere as alternativas.
    
    *An x interacts with a y as follows:…*
    
    Revele o funcionamento interno, para ajudar a perceber porque é que algo faz o que faz.

### 2\. Notas de escrita/atualização específicas do AAPS

#### Autor e editor

Para escrever/atualizar a documentação do AAPS, pense no processo como tendo duas fases. Podem ser feitas pela mesma pessoa em momentos diferentes, ou por mais do que uma pessoa.

Um **autor (por exemplo, o leitor!)** escreve/edita uma secção da documentação num tom de conversa e conciso, e depois passa-a ao editor.

O **editor (por exemplo, outro utilizador do AAPS, ou a pessoa que recebe o pull request)** verifica se o guia de estilo foi seguido e edita a secção para a tornar clara e acessível, retirando o maior número possível de palavras (sobretudo nas secções de tutorial/guia prático). Ler o texto em voz alta pode ajudar.

#### Pontos gerais do AAPS

- Nos valores de glicose, indique sempre mg/dl e mmol/l (pense também nisto nas capturas de ecrã, se possível).

- Para manter a coerência, use “AAPS” e não “Android APS”.

- Indique claramente a versão do Android Studio/AAPS para a qual escreve, ou da qual são as capturas de ecrã.

### 3\. Referências úteis

<https://dev.readthedocs.io/en/latest/style-guide.html>

[Diátaxis (diataxis.fr)](https://diataxis.fr/)

[Technical Writer Style Guide Examples | Technical Writer HQ](https://technicalwriterhq.com/writing/technical-writing/technical-writer-style-guide/)

[DigitalOcean's Technical Writing Guidelines | DigitalOcean](https://www.digitalocean.com/community/tutorials/digitalocean-s-technical-writing-guidelines)

[Top 10 tips for Microsoft style and voice - Microsoft Style Guide | Microsoft Learn](https://learn.microsoft.com/en-us/style-guide/top-10-tips-style-voice?source=recommendations)

<https://www.plainenglish.co.uk/how-to-write-in-plain-english.html>

<https://developers.google.com/style>

<https://www.mongodb.com/docs/meta/style-guide/screenshots/screenshot-guidelines/>