# Documento de referência do Custom Watchface

Esta página é para quem cria novos mostradores. Ela lista todas as palavras-chave e todos os recursos disponíveis quando você quer criar ou animar um novo mostrador.

- Os novos recursos e chaves disponíveis no Custom Watchface V2 (apk do Wear 3.3.0 ou mais recente) estão [aqui](#cwf-reference-new-v2-features)

## Formato do Custom Watchface

Custom Watchface é um formato aberto criado para o AAPS e ligado ao novo mostrador "AAPS (Custom)", disponível no relógio.

O arquivo do mostrador é um arquivo zip simples, mas para ser reconhecido como arquivo de mostrador, o arquivo zip deve conter os seguintes arquivos:

- Um arquivo de imagem chamado CustomWatchface (pode ser um arquivo bitmap `CustomWatchface.jpg`, `CustomWatchface.png` ou um arquivo vetorial `CustomWatchface.svg`). Este arquivo é o pequeno ícone usado para selecionar o mostrador quando você clica no botão "Carregar Watchface", e também a imagem que aparece no plugin Wear do AAPS.
- Um arquivo chamado `CustomWatchface.json` (veja [Estrutura do JSON](#cwf-reference-json-structure) abaixo). Este segundo arquivo é o arquivo principal. Ele tem todas as informações necessárias para desenhar o mostrador. Este arquivo json deve ser válido (provavelmente é o ponto mais difícil quando você edita este arquivo à mão em um editor de texto, porque uma vírgula a menos ou a mais já quebra o formato json). Este arquivo JSON também deve ter um bloco `"metadata"` com uma chave `"name"` com valor não vazio. Este será o nome do seu mostrador personalizado (veja [Configuração de metadata](#cwf-reference-metadata-settings) abaixo)
- o tamanho deste zip deve ser o menor possível (menos de cerca de 500 kb). Se este arquivo for grande demais, ele será bloqueado e não será enviado ao relógio.

O arquivo zip também pode conter alguns arquivos de recurso adicionais:

- Nomes de arquivo fixos para imagens que serão usadas nas views padrão do mostrador (como `Background`, `CoverChart`... veja [Lista dos arquivos de recurso com nome fixo](#cwf-reference-list-of-hardcoded-resource-files) abaixo). Todos esses arquivos podem estar no formato `jpg`, `png` ou `svg`. mas para a maioria deles você terá que usar `png` ou `svg`, que suportam transparência (arquivos jpg são menores que png, mas não têm transparência). Observe que a melhor qualidade com o menor tamanho geralmente é obtida com arquivos svg (formato vetorial).
- Arquivos de recurso adicionais com nomes livres. Esses arquivos adicionais podem ser arquivos de imagem ou arquivos de fonte (para fontes, são aceitos os formatos `ttf` e `otf`). Observe que, para estes arquivos adicionais, o `filename` (sem extensão) será usado como keyValue no arquivo JSON, para definir onde ou quando estes arquivos devem ser usados.
  - arquivos de imagem são usados muitas vezes como fundo de views de texto ou para animação dinâmica (como o nível da bateria de 0% a 100%)
  - arquivos de fonte permitem usar fontes próprias no seu mostrador

(cwf-reference-json-structure)=

## Estrutura do JSON

Os arquivos JSON podem ser editados no editor de texto Notepad (ou notepad++) (prefira o notepad++, que reconhece JSON e usa cores na formatação)

- ele contém chaves de texto `"string_key":` e valores de chave, que podem ser textos como `"key value"`, números inteiros, valores booleanos como `true` ou `false`, ou blocos de dados.
- cada valor é separado por uma vírgula `,`
- Um bloco de dados começa com `{`  e termina com `}`
- o arquivo json é um bloco único, então ele começa com  `{`  e termina com `}`, e dentro deste arquivo todos os blocos internos estão ligados a uma `"key"`, que deve ser única dentro do bloco
- Para facilitar a leitura do arquivo json, ele geralmente é indentado (cada nova chave fica em uma nova linha, e cada novo bloco é deslocado 4 espaços para a direita)

(cwf-reference-metadata-settings)=

### Configuração de metadata

Este bloco é o primeiro bloco do arquivo json e é obrigatório. Ele contém todas as informações ligadas a este mostrador, como o nome, o autor, a data de criação ou de atualização, a versão do autor ou a versão do plugin.

Veja abaixo um exemplo de bloco metadata:

```text
"metadata": {
    "name": "Default Watchface",
    "author": "myName",
    "created_at": "07\/10\/2023",
    "author_version": "1.0",
    "cwf_version": "1.0",
    "comment": "Default watchface, you can click on EXPORT WATCHFACE button to generate a template"
},
```

Observe que a `/` usada na data é um caractere especial. Para que ela seja reconhecida corretamente no arquivo json, você precisa colocar antes dela um caractere de "escape" `\`

Em alguns arquivos json você pode ver uma chave adicional `"filename"`. Esta chave é criada ou atualizada automaticamente quando o mostrador personalizado é carregado no AAPS (ela é usada para mostrar ao usuário o nome do arquivo zip na pasta exports). Por isso você pode remover esta chave do bloco metadata.

(cwf-reference-general-parameter-settings)=

### Configuração dos parâmetros gerais

Depois do primeiro bloco com metadata, você define alguns parâmetros gerais (veja [Lista dos parâmetros gerais](#cwf-reference-list-of-general-parameters) abaixo). Eles permitem definir as cores do gráfico (carboidratos, bólus, valores de glicose...) e também as cores padrão para valores na faixa-alvo, hiper ou hipo (cores padrão do valor da glicose e das setas)

Veja abaixo um exemplo de parâmetros gerais

```text
"highColor": "#FFFF00",
"midColor": "#00FF00",
"lowColor": "#FF0000",
"lowBatColor": "#E53935",
"carbColor": "#FB8C00",
"basalBackgroundColor": "#0000FF",
"basalCenterColor": "#64B5F6",
"gridColor": "#FFFFFF",
"pointSize": 2,
"enableSecond": true,
```
(cwf-reference-imageview-settings)=

### Configuração das ImageViews

Uma imagem personalizada pode ser ajustada usando o nome de arquivo correto, ligado a cada ImageView incluída no layout do mostrador personalizado. O bloco json serve apenas para definir a posição, o tamanho, se a view está visível ou não e, opcionalmente, ajustar a cor:

Veja abaixo um exemplo de bloco de imagem para second_hand (neste caso não há imagem no arquivo zip, então será usada a imagem padrão do ponteiro dos segundos, mas com uma cor personalizada).

```text
"second_hand": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "visibility": "visible",
    "color": "#BC906A"
}
```
Para colorir second_hand com a cor padrão da glicose (lowRange, midRange ou highRange), basta alterar a última linha com o keyValue `bgColor`

```json
    "color": "bgColor"
```

(cwf-reference-textview-settings)=

### Configuração das TextViews

A TexView tem mais parâmetros disponíveis que a ImageView: você pode ajustar rotation (valor inteiro em graus), textsize (valor inteiro em pixels), gravity (para definir se o texto fica centralizado (valor padrão) ou alinhado à esquerda ou à direita), definir font, fontStyle e fontColor, e também a cor de fundo da TextView

```text
"basalRate": {
    "width": 91,
    "height": 32,
    "topmargin": 133,
    "leftmargin": 249,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 23,
    "gravity": "center",
    "font": "default",
    "fontStyle": "bold",
    "fontColor": "#BDBDBD"
},
```
Observe que, se você não quiser usar uma view no seu mostrador, coloque a chave `"visibility"` como `"gone"`, mas também coloque o tamanho e a posição fora da área visível, assim:

```text
"second": {
    "width": 0,
    "height": 0,
    "topmargin": 0,
    "leftmargin": 0,
    "rotation": 0,
    "visibility": "gone",
    "textsize": 46,
    "gravity": "center",
    "font": "default",
    "fontStyle": "bold",
    "fontColor": "#BDBDBD"
},
```
Se o tamanho e a posição estiverem dentro da área visível, você pode ver por um instante o valor oculto durante a atualização do mostrador.

Se você quiser personalizar a imagem de fundo de uma view de texto, pode usar a chave `"background":` e colocar como keyValue o nome de arquivo de uma imagem incluída no arquivo zip. Você também pode apenas alterar a cor de fundo com a chave `"color:"`.

```json
"background": "fileName"
```

Você também tem 4 textViews especiais (chamadas freetext1 a freetext4) que têm um parâmetro próprio `"textvalue":`, que pode ser usado, por exemplo, para definir um rótulo

(cwf-reference-chartview-settings)=

### Configuração da ChartView

A ChartView é uma view muito especial, que pode compartilhar alguns parâmetros com a ImageView ou com a TextView...

A configuração padrão desta view é muito simples:

```text
"chart": {
    "width": 400,
    "height": 170,
    "topmargin": 230,
    "leftmargin": 0,
    "visibility": "visible"
},
```
Os 2 parâmetros adicionais que você pode incluir na ChartView são uma cor de fundo (o padrão é transparente), com a chave `"color"`, ou uma imagem de fundo, com a chave `"background"`.

(cwf-reference-how-to-build-watchface)=

## Como criar/desenhar seu primeiro mostrador

### Ferramentas necessárias

- Editor de texto: minha sugestão é usar o NotePad++ (ou equivalente), que é um editor de texto simples, mas com a vantagem de mostrar o texto formatado com cores, o que facilita encontrar erros. qualquer editor de texto simples serve. Já que o objetivo é ajustar as informações do json.
- Editor de imagens (bitmap e/ou vetorial)
  - Se você usar bitmap
    - O editor de imagens deve suportar transparência (necessária para todas as imagens acima do fundo) e o formato png (se você usar imagens bitmap)
    - A imagem de fundo pode estar no formato jpg (menor que png)
    - O editor de imagens deve permitir medir em pixels os objetos gráficos (pode ser um quadrado simples) (top, left, width, height)
    - O editor de imagens deve conseguir mostrar as cores com o código RRGGBB em hexadecimal
    - O editor de imagens deve conseguir redimensionar a imagem para 400px x 400px (muito importante trabalhar com esta resolução)
  - Se você usar vetor
    - A imagem vetorial deve ser exportada no formato svg

### Obtenha um modelo para não começar do zero

Quando você quiser desenhar seu primeiro mostrador, o melhor é começar pelo mostrador padrão (assim você tem a versão mais recente, com todas as views disponíveis na ordem correta)

- Você pode obter o arquivo zip clicando no botão "Exportar modelo" no plugin Wear. O arquivo zip fica na pasta AAPS/exports
- Observe que você precisa ter um relógio conectado ao AAPS para ver os botões do mostrador personalizado (mas o relógio também é necessário para verificar, testar e ajustar seu mostrador personalizado)

O mostrador padrão é muito simples, e o arquivo zip contém apenas 2 arquivos:

- CustomWatchface.png (imagem do mostrador padrão para a seleção do mostrador)
- CustomWatchface.json

### Organize seus arquivos no computador

A forma mais fácil de trabalhar é ter o telefone conectado ao computador e trabalhar com duas pastas:

- um explorador de arquivos aberto em uma pasta própria, que terá todos os arquivos (json, imagens bitmap, imagens vetoriais, fontes) e também o arquivo CustomWatchface.zip
- outro explorador de arquivos (ou a árvore de navegação ajustada) aberto na pasta Telefone/AAPS/exports

Assim o trabalho fica muito fácil: cada vez que você ajustar o arquivo json com um editor de texto ou uma imagem com o editor de imagens (bitmap ou vetorial), você só precisa:

1. salvar suas alterações em cada app
2. arrastar e soltar todos os arquivos dentro do arquivo CustomWatchface.zip
3. arrastar e soltar o CustomWatchface.zip na pasta AAPS/exports do telefone
4. enviar o CustomWatchface para o relógio para verificar o resultado

### Iniciar a personalização do mostrador

Primeiro você terá que definir um nome para o mostrador (necessário para selecioná-lo com facilidade nos testes) e começar a ajustar as chaves de metadata no início do arquivo json

Depois você terá que definir quais informações quer mostrar, ou seja, quais views devem ficar visíveis ou ocultas.

- você vai mostrar os segundos ou não?
- você quer desenhar um relógio analógico ou digital (ou os dois...)?

Agora você pode começar a alterar o arquivo json, colocando a chave `"visibility":` de cada view como `"visible"` ou `"gone"` (para manter a view ou não)

Você também pode começar a ajustar de forma aproximada os valores de margem superior, margem esquerda, largura e altura, para começar a organizar o mostrador (estes valores serão ajustados depois com o editor de imagens)

Observação: tudo é desenhado dentro de um **retângulo de 400px x 400px**. Então tudo é posicionado com coordenadas absolutas dentro deste tamanho.

Quando você desenhar seu primeiro mostrador, saiba que tudo é organizado em camadas, do fundo para a frente. Assim, cada view (ImageView ou TextView) pode esconder algo que está atrás dela...



![Camadas do CustomWatchface](../images/CustomWatchface_1.jpg)



No arquivo json, todas as views estão em ordem do fundo para a frente (isso ajuda você a lembrar o que está atrás do quê...)

Se você está desenhando ou ajustando seu primeiro mostrador personalizado, comece com coisas simples: altere a visibilidade de algumas views, inclua uma imagem de fundo própria sem alterar o arquivo json...

### Gerenciar cores

No arquivo json, você tem várias chaves para definir cores: `"color"`, `"fontColor"` para as views, mas também `"highColor"`, `"midColor"`, `"lowColor"`, ... (veja [Lista dos parâmetros gerais](#cwf-reference-list-of-general-parameters))

As cores são definidas com um campo de texto que começa com `#`, seguido dos valores RRGGBB (Red, Green, Blue = vermelho, verde, azul) em formato hexadecimal:

- `"#FFFFFF"` é branco, `"#000000"` é preto, `"#FF0000"` é vermelho...

Você também pode incluir 2 valores a mais para a camada alfa e definir um nível de transparência (AARRGGBB):

- `"#00000000"` é totalmente transparente, e `"#FF000000"` é totalmente opaco (então  `"#FF000000"` é igual a  `"#000000"`)

Você também pode usar o keyvalue especial `"bgColor"` para usar automaticamente `"highColor"`, `"midColor"`, `"lowColor"`, definidas nos parâmetros gerais, de acordo com o valor da glicose:

- `"fontColor": "bgColor",` define automaticamente a cor da fonte da view de acordo com o valor da glicose
- Observe que as views `sgv` (valor da glicose) e `direction` (seta de tendência) aplicam automaticamente as cores de glicose definidas nos parâmetros gerais (para estas 2 views, se você quiser cores diferentes, terá que usar o recurso avançado [dynData](#cwf-reference-dyndata-feature) com uma etapa de cor...)

Para mais informações sobre as ImageViews e a chave `"color":`, veja o capítulo próprio [Ajustar a cor da imagem](#cwf-reference-tune-image-color) abaixo.

### Incluir imagens com nome fixo

a forma mais fácil de começar a ajustar seu mostrador é incluir no arquivo zip algumas imagens com nomes específicos (veja a [Lista dos arquivos de recurso com nome fixo](#cwf-reference-list-of-hardcoded-resource-files))

- A imagem deve estar no formato `.jpg`, `.png` ou `.svg`. mas tenha cuidado: jpg não suporta transparência, então deve ser usado somente na camada de fundo. Para todas as camadas intermediárias (cover_chart, cover_plate, ponteiros), use imagens `.png` ou `.svg`

- Se você tem um editor de imagens vetoriais (como, por exemplo, o Illustrator), prefira este formato, que gera arquivos de texto pequenos com a extensão `.svg` e a melhor qualidade.
- Tenha cuidado para usar o nome de arquivo exato (incluindo maiúsculas/minúsculas)

Agora, se você quiser uma imagem de fundo própria, basta incluir no arquivo zip um arquivo chamado `Background.jpg` (sem alterar mais nada). Envie o arquivo zip para o relógio e veja o resultado!

Se você quiser personalizar hour_hand, minute_hand ou second_hand para um relógio analógico, basta incluir `HourHand.png` (ou `HourHand.svg`), `MinuteHand.png` e `SecondHand.png`.

- estas imagens giram automaticamente em torno do centro da imagem, então as imagens devem estar na posição 00:00:00 (e para um relógio analógico de "tela cheia", use um tamanho de 400 x 400 px, posicionado em top 0 left 0)

Você também pode notar na [Lista dos arquivos de recurso com nome fixo](#cwf-reference-list-of-hardcoded-resource-files) que, para cada image view, há dois nomes de arquivo fixos adicionais, `High` e `Low` (por exemplo, você pode incluir no arquivo zip outras imagens chamadas `BackgroundHigh.jpg` e `BackgroundLow.jpg`). então a imagem muda automaticamente de acordo com o nível da sua glicose (na faixa-alvo, Hiper ou Hipo). Veja o mostrador AIMICO como exemplo.

(cwf-reference-tune-image-color)=

### Ajustar a cor da imagem

A chave `"color"` pode ser usada para ajustar a cor padrão da imagem:

- aplicada na view background, ela define a cor de fundo (padrão preto)
- aplicada em cover_plate (dial simples) ou nos ponteiros, ela troca a cor da imagem padrão (branca) pela cor definida (incluindo `"bgColor"`)

Quando você aplica a chave `"color"` em uma imagem bitmap (`.jpg` ou `.png`), a cor aplica um efeito interessante na saturação das cores. Assim você ainda vai reconhecer seu bitmap.

Por fim, em arquivos de imagem `.svg`, a chave `"color"` não tem efeito: considere a cor dos arquivos vetoriais como fixa dentro da imagem. Se você quiser alterar as cores, terá que incluir vários arquivos `svg` e usar o recurso avançado [dynData](#cwf-reference-dyndata-feature) para trocá-las

### Usar fontes adicionais nas TextViews

Várias fontes padrão já estão disponíveis no apk do Wear (veja as chaves de fonte no capítulo [Valores das chaves](#cwf-reference-key-values)). Mas se você quiser usar fontes adicionais que não estão disponíveis por padrão, pode incluir fontes adicionais no arquivo zip:

- os 2 formatos de fonte aceitos são arquivos `.ttf` e `.otf`
- se você incluir uma fonte personalizada no arquivo zip, por exemplo um arquivo chamado `myCustomFont.ttf`, você terá que usar o nome do arquivo para usá-la no arquivo json em uma TextView:

```
"font": "myCustomFont",
```

Lembre-se de que algumas fontes podem estar em arquivos grandes (e há um tamanho máximo para o arquivo zip). Então, se você usa poucos caracteres (números, `.`, `,`), pode usar ferramentas gratuitas para remover os caracteres não usados (por exemplo [aqui](https://products.aspose.app/font/generator/ttf-to-ttf)) e assim reduzir o tamanho da fonte.

(cwf-reference-advanced-features)=

## Recursos avançados

(cwf-reference-preference-feature)=

### Recurso de preferências

O CustomWatchface pode ajustar automaticamente algumas preferências do relógio para que o mostrador seja exibido corretamente (se o usuário der autorização nas preferências do Wear).

Mas este recurso deve ser usado com cuidado. As preferências são comuns a todos os outros mostradores. Por isso, siga algumas regras com este recurso:

- nunca defina preferências de views ocultas
- tente deixar visíveis o máximo possível de views
- não tenha medo de deixar algumas views mais largas que o necessário:
  - A TBR pode ser mostrada como porcentagem (largura pequena) mas também como valor absoluto (muito mais largo)
  - delta ou delta médio com informações detalhadas podem ser largos
  - o mesmo vale para iob2: esta view pode mostrar o IOB total, mas se o IOB detalhado estiver selecionado, o texto pode ficar muito longo

Se mesmo assim você precisar de configurações muito específicas para a exibição correta (no exemplo abaixo, se não houver espaço suficiente para o IOB detalhado, você pode "forçar" este parâmetro do relógio para `false`), você pode incluir no bloco metadata uma restrição de configuração assim

```text
"metadata": {
    "name": "Default Watchface",
    "author": "myName",
    "created_at": "07\/10\/2023",
    "author_version": "1.0",
    "cwf_version": "1.0",
    "comment": "Default watchface, you can click on EXPORT WATCHFACE button to generate a template",
    "key_show_detailed_iob": false
},
```

Se o usuário autorizar o mostrador personalizado a alterar os parâmetros do relógio (configuração no plugin Wear), então Mostrar IOB detalhado será definido como "desativado" e bloqueado como desativado (não será possível alterar este parâmetro até que a autorização seja desativada nos parâmetros do plugin Wear ou que outro mostrador seja selecionado)

- Observe que, quando o usuário seleciona um mostrador, ele pode ver o número de "parâmetros obrigatórios" durante a seleção do mostrador

No exemplo abaixo, o mostrador Gota tem um parâmetro obrigatório. Se a autorização não for dada, ele será mostrado em branco. Se a autorização for dada, este parâmetro será definido e bloqueado no relógio (neste caso o número fica em laranja)

![Parâmetros obrigatórios](../images/CustomWatchface_2.jpg)



(cwf-reference-twinview-feature)=

### Recurso TwinView

As twin views (views gêmeas) oferecem uma forma fácil de ajustar a posição da view de acordo com as views visíveis. Isso não tem o poder de um layout feito todo com LinearLayout, mas resolve muitos casos comuns.

No exemplo abaixo você pode ver o mostrador AAPS (Cockpit) com todas as views visíveis nas configurações, e o mesmo mostrador com "Mostrar bateria de rig" desativado e "Mostrar média de delta" desativado

![Twin Views](../images/CustomWatchface_3.jpg)

Você pode ver que, quando uma das twin views fica oculta, a outra é deslocada para ficar centralizada

neste exemplo, você pode ver que no bloco `"uploader_battery"` foi adicionada a chave `"twinView":` para definir a view `"rig_battery"`, e no bloco `"rig_battery"` a chave `"twinView":` define `"uploader_battery"` como gêmea. Depois, a chave adicional `"leftOffsetTwinHidden":` define o número de pixels para deslocar a view quando a gêmea está oculta.

Para calcular este número, veja que a diferença entre o leftMargin de cada uma das twin views é de 50 pixels. Então o deslocamento para ficar centralizado é a metade, em uma direção ou na outra.

Se as twin views estiverem posicionadas na vertical, neste caso você deve usar a chave `"topOffsetTwinHidden":`

```text
"uploader_battery": {
    "width": 49,
    "height": 30,
    "topmargin": 354,
    "leftmargin": 150,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 23,
    "gravity": "center",
    "font": "roboto_condensed_bold",
    "fontStyle": "bold",
    "fontColor": "#FFFFFF",
    "twinView": "rig_battery",
    "leftOffsetTwinHidden": 25
},
"rig_battery": {
    "width": 49,
    "height": 30,
    "topmargin": 354,
    "leftmargin": 200,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 23,
    "gravity": "center",
    "font": "roboto_condensed_bold",
    "fontStyle": "bold",
    "fontColor": "#FFFFFF",
    "twinView": "uploader_battery",
    "leftOffsetTwinHidden": -25
},
```
(cwf-reference-dyndata-feature)=

### Recurso DynData

O DynData é o recurso mais poderoso se você quiser incluir animações no seu mostrador, de acordo com alguns valores internos (como valor da glicose, nível da glicose, delta, % da bateria... veja a lista dos dados disponíveis [aqui](#cwf-reference-dyndata-key-values))

Para explicar este recurso, vou usar o exemplo do mostrador AAPS (SteamPunk):

![CustomWatchface_4](../images/CustomWatchface_4.png)

Neste mostrador, teremos que gerenciar a [rotação do valor da glicose](#cwf-reference-background-management) (de 30 graus a 330 graus) à direita, a [faixa dinâmica do avg_delta](#cwf-reference-avg-delta-management) (escala de até 5 mgdl, 10 mgdl ou 20 mgdl de acordo com o valor), a [rotação do ponteiro](#cwf-reference-dynamic-rotation-management), que deve estar sincronizada com a escala, e também as diferentes camadas das views...

Para conseguir gerenciar este mostrador, veja abaixo todas as imagens incluídas no arquivo zip:

Observação: para que a transparência fique visível, todas estas imagens estão sobre um fundo amarelo e cercadas por um quadrado vermelho

![Imagens do Steampunk](../images/CustomWatchface_5.jpg)

- Na primeira linha, Background.jpg e CoverPlate.png serão ligadas automaticamente às views correspondentes (nomes de arquivo padrão das views), e steampunk_pointer.png será gerenciado pelo dynData
- Na segunda linha você vê as 3 escalas da faixa dinâmica para avg_delta, que também serão gerenciadas pelo dynData
- Na terceira linha, chartBackground.jpg será ligado manualmente à view chart, e os arquivos HourHand.png e MinuteHand.png serão ligados automaticamente às views correspondentes

(cwf-reference-background-management)=

#### Gerenciamento do fundo

Primeiro, sobre a imagem do valor da glicose, aqui não há escolha: ela só pode ficar na camada de fundo (senão ela fica na frente da view do gráfico, e o gráfico não fica visível!). Então teremos que ligar o valor da glicose (BG) ao fundo e depois girar a imagem de fundo de acordo com o valor da glicose.

No bloco `"background"`, vamos incluir 2 chaves próprias para fazer esta rotação:

```text
"background": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "dynData": "rotateSgv",
    "rotationOffset": true,
    "visibility": "visible"
},
```
A chave `"dynData":` define qual bloco deve ser usado para definir a animação (valor, faixa, conversão...). Aqui este bloco foi chamado "rotateSgv" (escolha um nome claro quando usar este recurso),

`"rotationOffset": true,` define que a animação esperada de acordo com o valor deve ser uma rotação. (outras chaves disponíveis são `"leftOffset"` e `"topOffset"`, se você quiser criar um controle deslizante)

Agora vamos ao fim do arquivo, depois da última view:

```text
"second_hand": {
    "width": 120,
    "height": 120,
    "topmargin": 140,
    "leftmargin": 140,
    "visibility": "gone"
},
"dynData": {
    "rotateSgv": {
        "valueKey": "sgv",
        "minData": 30,
        "maxData": 330
    },
```
Você pode ver que depois da última view (`"second_hand"`) adicionamos um novo bloco `"dynData": { ... }`, que  vai conter todas as animações:

O bloco definido na view `"background"` foi chamado `"rotateSgv"`. É o primeiro bloco que você encontra em `"dynData"`!

Este bloco é simples: você tem uma primeira chave chamada `"valueKey":`, que define qual valor deve ser usado. neste caso, `"sgv"` é um "keyValue" que define o valor da glicose (observe que na maioria dos casos o keyValue tem o mesmo nome da view que mostra esta informação).

Sobre o valor da glicose, o min data padrão é 39 mgdl e o max data padrão é 400 mgdl (veja em [Valores das chaves DynData](#cwf-reference-dyndata-key-values) abaixo todos os keyValues disponíveis e os valores min/max data correspondentes).

No bloco `"rotateSgv"`, as duas chaves adicionais (`"minData":` e `"maxData":`) servem para ajustar os dados mínimo e máximo para 30 e 330. Com estes valores mínimo e máximo, podemos usar diretamente o valor do dado (sem nenhuma conversão) para girar o fundo em graus. Nesta situação, todos os valores de glicose acima de 330 mg/dl serão limitados a 330, o limite superior da imagem.

#### Gerenciamento do gráfico

O fundo padrão do gráfico é transparente. Então, para esconder a escala de glicose incluída na imagem de fundo, precisamos incluir uma imagem de fundo própria (esta imagem terá as sombras gerais do mostrador Steampunk). A ligação com o arquivo chartBackground.jpg é feita com a chave `"background":`

Claro, o tamanho e a posição da view devem ser ajustados pixel a pixel!

```text
"chart": {
    "width": 216,
    "height": 107,
    "topmargin": 280,
    "leftmargin": 80,
    "visibility": "visible",
    "background": "chartBackground"
},
```
(cwf-reference-avg-delta-management)=

#### Gerenciamento do delta médio

Para gerenciar a faixa dinâmica do delta médio, vamos usar as quatro views freetext. freetext1 será usada para gerenciar a escala da imagem, e freetext2 a freetext4 serão usadas para gerenciar a rotação do ponteiro de acordo com a escala.

**freetext1**

Como explicado antes, as views freetext ficam na frente do gráfico e na frente do fundo. Por isso incluímos uma área transparente para ver estas imagens (lado direito e parte de baixo da imagem)

Observe que a parte de baixo removida destas imagens foi usada como fundo do gráfico, para uma integração perfeita.

```text
"freetext1": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "rotation": 0,
    "visibility": "visible",
    "dynData": "avgDeltaBackground"
},
```
Para esta view, incluímos a ligação com outro bloco `"dynData"` chamado `avgDeltaBackground`. Este bloco vai gerenciar a escala do avgDelta de acordo com o valor do avgDelta.

```text
"avgDeltaBackground": {
    "valueKey": "avg_delta",
    "minData": -20,
    "maxData": 20,
    "invalidImage": "steampunk_gauge_mgdl_5",
    "image1": "steampunk_gauge_mgdl_20",
    "image2": "steampunk_gauge_mgdl_20",
    "image3": "steampunk_gauge_mgdl_10",
    "image4": "steampunk_gauge_mgdl_5",
    "image5": "steampunk_gauge_mgdl_5",
    "image6": "steampunk_gauge_mgdl_10",
    "image7": "steampunk_gauge_mgdl_20",
    "image8": "steampunk_gauge_mgdl_20"
},
```
- `"valueKey":` faz a ligação com o valor `"avg_delta"`
- min e max Data também vão limitar a faixa ao valor máximo disponível neste mostrador (de -20 mg/dl a 20 mg/dl). Para usuários de mmol: lembre-se de que todos os valores internos estão sempre em mg/dl no AAPS.

Agora vamos ver aqui como gerenciar uma imagem de fundo dinâmica de acordo com o valor.

`"invalidImage":` é a chave para definir a imagem a mostrar quando temos um dado inválido (ou um dado que falta). Aqui fazemos a ligação com uma imagem de recurso adicional, incluída no arquivo zip, com a escala de 5 mg/dl

Depois vamos usar uma série de imagens, de `"image1":` a `"image8":`. O número de imagens fornecidas define o número de etapas entre `minData` e `maxData`.

- `image1` define a imagem a mostrar quando avg_delta é igual ou próximo de `minData`, e a imagem com o maior número (aqui `image8`) define a imagem que deve ser mostrada quando avg_delta é igual ou próximo de `maxData`
- entre -20 mg/dl e 20 mg/dl, a faixa total é de 40 mg/dl; dividida por 8 (número de imagens fornecidas), teremos 8 etapas de 5 mg/dl
- Agora podemos ligar as imagens de fundo ao valor de avg_delta, começando pelos valores mais baixos: entre -20 e -15, e também entre -15 e -10, usamos  `steampunk_gauge_mgdl_20` para a escala; depois, entre -10 e -5, `steampunk_gauge_mgdl_10`, e assim por diante até +15 e +20, onde usamos de novo a imagem de fundo `steampunk_gauge_mgdl_20`

(cwf-reference-dynamic-rotation-management)=

**freetext2 a freetext4**

Para estas views vamos combinar imagens dinâmicas e o recurso de rotação explicado antes:

```text
"freetext2": {
    "width": 276,
    "height": 276,
    "topmargin": 64,
    "leftmargin": 64,
    "rotation": 0,
    "visibility": "visible",
    "dynData": "avgDelta5",
    "rotationOffset": true
},
"freetext3": {
    "width": 276,
    "height": 276,
    "topmargin": 64,
    "leftmargin": 64,
    "rotation": 0,
    "visibility": "visible",
    "dynData": "avgDelta10",
    "rotationOffset": true
},
"freetext4": {
    "width": 276,
    "height": 276,
    "topmargin": 64,
    "leftmargin": 64,
    "rotation": 0,
    "visibility": "visible",
    "dynData": "avgDelta20",
    "rotationOffset": true
},
```
Aqui cada view é própria para uma escala específica (então está ligada a um bloco dynData próprio). Você também pode notar que a chave `"rotationOffset":` está ativada nestas 3 views. Agora veja o primeiro bloco dynData:

```text
"avgDelta5": {
    "valueKey": "avg_delta",
    "minData": -20,
    "maxData": 20,
    "rotationOffset": {
        "minValue": -120,
        "maxValue": 120
    },
    "invalidImage": "null",
    "image1": "null",
    "image2": "null",
    "image3": "null",
    "image4": "steampunk_pointer",
    "image5": "steampunk_pointer",
    "image6": "null",
    "image7": "null",
    "image8": "null"
},
```
Aqui, mesmo que a faixa dinâmica seja usada somente entre -5 e +5 de avg_delta, é importante manter a faixa total de -20 a +20 mg/dl para garantir que o ponteiro fique sincronizado com o fundo durante as trocas de escala. Por isso mantemos a mesma faixa total de `avgDeltaBackground`  e o mesmo número de etapas (8 imagens).

Você pode notar que tanto `"invalidImage"` como várias `"imagexx"` têm o valor `"null"` (pode ser qualquer texto que não exista como nome de arquivo no arquivo zip). Quando um nome de arquivo não é encontrado, a imagem de fundo da view fica transparente. Assim, a configuração garante que o ponteiro só fique visível nas etapas 4 e 5 (delta médio entre -5 mg/dl e +5 mg/dl) e não fique visível fora desta faixa.

Agora podemos ver um novo bloco `"rotationOffset":`, que tem dentro duas chaves: `"minValue":` e `"maxValue":`. Estes valores são usados para fazer a conversão entre os dados internos (em mg/dl) e o ângulo de rotação que queremos.

- O mostrador Steampunk foi desenhado para ter uma rotação máxima do ponteiro de -30 graus a 30 graus. Então, de acordo com a escala (aqui de -5 mg/dl a 5 mg/dl), queremos ter 30 graus para estes valores. Como `minData` e `maxData` são 4 vezes maiores, os minValues e maxValues correspondentes são 4 * 30 graus, ou seja, -120 e +120 graus. Mas para toda rotação acima ou abaixo de +-30 graus o ponteiro fica oculto (nenhuma imagem visível), e o ponteiro só fica visível para valores entre -5 e +5 mg/dl... É exatamente o que queremos aqui.

Os outros blocos dynData são definidos da mesma forma para ajustar `"avgDelta10"` e `"avgDelta20"`

#### view loop

no mostrador Steampunk, as setas verde e vermelha do loop (para o status) estão desativadas. Isso também é gerenciado com um bloco dynData próprio, ligado à view loop.

```text
    "loopArrows": {
        "invalidImage": "greyArrows",
        "image1": "greenArrows",
        "image2": "redArrows"
    }
```
Como este bloco só é chamado pela view loop, e os dados padrão desta view são as informações do loop, a chave `"valueKey":` é opcional.

Os valores padrão de `minData` e `maxData` para o loop são 0 min e 28 min. Então, com duas imagens, todos os valores abaixo de 14 min serão mostrados com o fundo `image1`, e todos os valores acima de 14 min serão mostrados com `image2`. 14 min é exatamente o limite para trocar da seta verde para a seta vermelha.

Neste exemplo, os arquivos `greyArrows`, `greenArrows` e `redArrows` não estão no arquivo zip, então estas setas são simplesmente removidas (invisíveis). Mas você pode usar este bloco "como está" se quiser ajustar as setas de status com imagens de fundo personalizadas.

#### views rig_battery e uploader_battery

Para terminar a visão geral do recurso dynData, vamos ver o gerenciamento da bateria. A ideia aqui é personalizar a cor do texto de acordo com o nível da bateria (de 0 a 100%)

```text
"uploader_battery": {
    "width": 60,
    "height": 28,
    "topmargin": 100,
    "leftmargin": 170,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 20,
    "gravity": "center",
    "font": "default",
    "fontStyle": "bold",
    "fontColor": "#00000000",
    "dynData": "batteryIcons",
    "twinView": "rig_battery",
    "topOffsetTwinHidden": -13
},
"rig_battery": {
    "width": 60,
    "height": 28,
    "topmargin": 74,
    "leftmargin": 170,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 20,
    "gravity": "center",
    "font": "default",
    "fontStyle": "bold",
    "fontColor": "#00000000",
    "dynData": "batteryIcons",
    "twinView": "uploader_battery",
    "topOffsetTwinHidden": 13
},
```
Você pode ver aqui que estas duas views compartilham o mesmo bloco `dynData`, chamado `batteryIcons`. Isso é possível porque, por padrão, os dados ligados são os da própria view (sem definir uma chave  `"valueKey":` no bloco  `batteryIcons`, ele será aplicado aos dados de `uploader_battery` ou aos dados de `rig_battery`, de acordo com a view).

Observe que estas duas views também usam o recurso TwinView explicado [aqui](#cwf-reference-twinview-feature).

Agora vamos ver o bloco dynData:

```text
"batteryIcons": {
    "invalidFontColor": "#00000000",
    "fontColor1": "#A00000",
    "fontColor2": "#000000",
    "fontColor3": "#000000",
    "fontColor4": "#000000",
    "fontColor5": "#000000"        
},
```
Aqui usamos exatamente a mesma lógica da imagem de fundo dinâmica, mas com chaves próprias (`"invalidFontColor"` e  `"fontColor1"` a `"fontColor5"`, para definir 5 etapas de 20% cada).

- `"fontColor1"` (vermelho escuro) será usada para todos os valores abaixo de 20%, e o branco será usado para todos os valores acima deste limite.
- Se você quiser baixar o limite para "abaixo de 10%", basta adicionar 5 chaves a mais, de `"fontColor6"` a `"fontColor10"` , mas você também pode ajustar cada cor se quiser uma variação gradual do verde para o amarelo, laranja e vermelho...

(cwf-reference-dynpref-feature)=

### Recurso DynPref

Antes de ler este capítulo, você precisa entender como funciona o [dynData](#cwf-reference-dyndata-feature), porque o DynPref é um uso avançado do DynData: agora você pode ajustar cada bloco DynData de acordo com as preferências definidas pelo usuário:

Para explicar o recurso DynPref, vamos usar dois exemplos:

- Mostrador Steampunk (uso simples para incluir no mesmo mostrador a versão mgdl e a versão mmol; o mostrador troca automaticamente de acordo com a unidade selecionada no AAPS).
- O mostrador AAPS V2 combina diferentes preferências para gerenciar a cor do texto e o fundo de acordo com as preferências dark e match divider.

#### Uso simples do dynPref no mostrador Steampunk

No Steampunk, temos dois conjuntos de imagens de acordo com a unidade: a imagem `background`, que tem a escala de glicose e gira de acordo com o valor da glicose. e `freeText1`, que contém a escala dinâmica de acordo com o valor de avgDelta. Para ter um único mostrador que mostre automaticamente a unidade correta, devemos selecionar a imagem de acordo com a unidade selecionada.

Para isso, vamos substituir a chave `dynData` por uma chave `dynPref` no bloco da view:

```text
 "background": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "dynPref": "rotateSgv",
    "rotationOffset": true,
    "visibility": "visible"
},
```
O uso das chaves `dynPref` é muito parecido com o das chaves `dynData` explicadas no capítulo anterior

Agora vamos ver o fim do arquivo json, depois do bloco `dynData`:

```text
"dynData": {
    ...
},
"dynPref": {
    "rotateSgv": {
        "prefKey": "key_units",
        "true": {
            "valueKey": "sgv",
            "minData": 30,
            "maxData": 330,
            "invalidImage": "Background_mgdl",
            "image1": "Background_mgdl"
        },
        "false": {
            "valueKey": "sgv",
            "minData": 30,
            "maxData": 330,
            "invalidImage": "Background_mmol",
            "image1": "Background_mmol"
        }
    },
    ...
}
```
Você pode ver que a chave dynPref definida no bloco da view `background` (`"dynPref": "rotateSgv"`) existe no bloco json `dynPref`, incluído no fim do arquivo json:

Este bloco deve conter uma chave `"prefKey"`, que define qual preferência deve ser usada. Neste exemplo, a chave `"key_units"` está ligada às unidades selecionadas no AAPS no telefone, e o valor é `"true"` se a unidade selecionada for mgdl e `"false"` se a unidade selecionada for mmol.

Depois você encontra dois blocos json no formato "dynData", que serão usados de acordo com a preferência selecionada

Observe que o nome de arquivo "fixo" da imagem de fundo agora é substituído por uma imagem dinâmica, que será a mesma qualquer que seja o valor da glicose (arquivo `Background_mgdl.png` se key_units for "true", `Background_mmol.png` se key_units for false). Também incluímos uma chave `"invalidImage"` para ter sempre uma imagem de fundo, mesmo se nenhum dado tiver sido recebido do telefone.

#### Combinar diferentes preferências no dynPref com o AAPS V2

Na maioria das vezes, quando você define uma preferência, não é para ter um "comportamento dinâmico", mas apenas o resultado de acordo com o que você seleciona. Mas, no dynPref, isso é considerado um recurso dinâmico...

- enquanto no `dynData` você define um bloco completo de parâmetros (com imagens, fontColor, Color, ...), com `dynPref` você pode combinar cada parâmetro de acordo com uma preferência específica.
- Aqui vamos ver como a preferência match divider é combinada com a preferência dark para mostrar, quando está ativada (true), texto branco sobre fundo preto no mostrador escuro (parâmetro dark true) ou texto preto sobre fundo branco no mostrador claro (dark false)...

Primeiro vamos ver o início do arquivo json:

```text
"dynPrefColor": "prefColorDark",
"pointSize": 2,
"enableSecond": false,
"background": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "visibility": "visible",
    "dynPref": "dark"
},
```
`"dynPrefColor": "prefColorDark"` define o bloco dynPref de todas as cores padrão fora das views. Estas cores serão ajustadas de acordo com o parâmetro dark em `"prefColorDark"`:

E no fim, dentro do bloco `dynPref`, você terá um bloco dynPref próprio para as cores padrão:

```text
"prefColorDark": {
    "prefKey": "key_dark",
    "true": {
        "highColor": "#FFFF00",
        "midColor": "#00FF00",
        "lowColor": "#FF0000",
        "lowBatColor": "#E53935",
        "carbColor": "#FB8C00",
        "basalBackgroundColor": "#0000FF",
        "basalCenterColor": "#64B5F6",
        "gridColor": "#FFFFFF"
    },
    "false": {
        "highColor": "#A0A000",
        "midColor": "#00A000",
        "lowColor": "#A00000",
        "lowBatColor": "#E53935",
        "carbColor": "#D07C00",
        "basalBackgroundColor": "#0000A0",
        "basalCenterColor": "#64B5F6",
        "gridColor": "#303030"
    }
}
```
A diferença entre este bloco dynPref e os outros blocos dynPref normais, usados nas views, é que aqui você não tem um bloco dynData para cada valor do parâmetro `"key_dark"`, mas apenas a lista das cores principais (`highColor`, `midColor` , ...)

Agora vamos ver os itens incluídos na "faixa do divisor" (no exemplo abaixo, a view `"basalRate"` ligada à view dynPref `"matchDivider"`):

```text
"basalRate": {
    "width": 90,
    "height": 32,
    "topmargin": 127,
    "leftmargin": 242,
    "rotation": 0,
    ...
    "leftOffsetTwinHidden": 33,
    "dynPref": "matchDivider"
},
```
Depois, no bloco dynPref, você pode ver que o parâmetro Match divider (chave `key_match_divider`) tem os 2 blocos "true" e "false", mas estes dois blocos só servem para definir que a view vai usar o dynBlock "dark" (ou seja, exatamente as mesmas cores de fundo e de texto das outras views fora da faixa) ou o dynBLock "white", que define cores opostas para o fundo e o texto...

```text
"matchDivider": {
    "prefKey": "key_match_divider",
    "true": {
        "dynPref": "dark"
    },
    "false": {
        "dynPref": "white"
    }
},
"dark": {
    "prefKey": "key_dark",
    "true": {
        "color1": "#000000",
        "fontColor1": "#FFFFFF"
    },
    "false": {
        "color1": "#FFFFFF",
        "fontColor1": "#000000"
    }
},
```
Observe que aqui você está dentro de um bloco "dynData". Então, para definir uma color ou uma fontColor, você usa um dynData (não definido aqui) e uma única etapa (são usados `"color1"` e `'fontColor1'`)

- para todos os parâmetros, exceto `image`, o "valor inválido" padrão (se não for definido especificamente pela chave `"invalidColor"` ou pelas chaves `"invalidFontColor"`) será `"color1"` e `"fontColor1"`.



Depois vamos ver um terceiro exemplo com as views de IOB (`iob1` e `iob2`), onde usamos texto menor para o IOB detalhado e texto maior para o IOB total:

```text
"iob1": {
    "width": 125,
    "height": 33,
    "topmargin": 168,
    "leftmargin": 275,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 19,
    ...
    "dynPref": "prefIob1"
},
"iob2": {
    "width": 125,
    "height": 33,
    "topmargin": 196,
    "leftmargin": 275,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 24,
    ...
    "leftOffsetTwinHidden": -10,
    "dynPref": "prefIob2"
},
```
Você vai ver nas configurações padrão das views o tamanho do texto (19 em `iob1` e 24 em `iob2`) e os dois blocos `dynPref` diferentes, que devem ajustar o textsize (de acordo com o parâmetro de IOB detalhado) e as cores (de acordo com o parâmetro dark)

```text
"prefIob1": {
    "prefKey": "key_show_detailed_iob",
    "true": {
        "dynPref": "dark",
        "textsize1": 24
    },
    "false": {
        "dynPref": "dark"
    }
},
"prefIob2": {
    "prefKey": "key_show_detailed_iob",
    "true": {
        "dynPref": "dark",
        "textsize1": 19
    },
    "false": {
        "dynPref": "dark"
    }
},
```
Você pode ver aqui que, de acordo com o parâmetro de IOB detalhado (chave `"key_show_detailed_iob"`), quando ele é "true", o textsize é definido com um valor fixo maior que o padrão (24 em vez de 19): isso é feito com o recurso de "etapas" do textsize, com um só valor, ou seja, uma só etapa... (observe que, para todos os parâmetros exceto imagens, se invalidTextSize não for definido, textsize1 será usado para dados inválidos)

Depois, o bloco dynPref "dark" será usado para definir color e fontColor

Neste exemplo, o bloco dynData usado para a view iob1, se o IOB detalhado estiver ativado e dark estiver ativado, será:

```text
{
    "color1": "#000000",
    "fontColor1": "#FFFFFF",
    "textsize1": 24
},
```

Assim, o texto ficará branco sobre fundo preto, e o tamanho 24 vai substituir o tamanho padrão 19 definido na view

O bloco dynData usado para a mesma view iob1, se o IOB detalhado estiver desativado e dark estiver desativado, será:

```text
{
    "color1": "#FFFFFF",
    "fontColor1": "#000000"
},
```

Agora o texto ficará preto sobre fundo branco, com tamanho 19

#### Dicas e truques para dynPref

- Você pode combinar quantas preferências quiser, mas tenha cuidado: o número de blocos a descrever pode crescer muito rápido (é exponencial): se você encadear 3 parâmetros e quiser definir todas as situações, terá 8 blocos a descrever, se cada parâmetro tiver só 2 valores...
- Tenha cuidado para não criar um "loop infinito" (por exemplo, se o bloco dynpref1 deve ser completado pelo bloco dynpref2, que deve ser completado pelo bloco dynpref1...). Neste caso, os blocos dynPref serão considerados inválidos...
- Não esqueça de incluir o índice numérico depois da chave (quando você usa, por exemplo, a chave `"textsize"` em uma view, precisa usar `"textsize1"` no bloco de valores do dynPref, porque é um formato "dynData", ligado ao valor com uma só etapa neste caso)
- Só uma chave `"valueKey"` deve ser definida para uma view. Então, se o bloco `dynData` final for montado a partir de vários blocos `dynPref`, não inclua várias `"valueKey"`  (e as chaves `"minData"`, `"maxData"`, ... correspondentes)

(cwf-reference-new-v2-features)=

### Novos recursos no CustomWatchface V2 (AAPS V3.3.0 ou mais recente)

Observe que os mostradores que usam estes novos recursos ou views precisam do apk do Wear mais recente, compilado a partir da versão 3.3.0 do AAPS.

Se você usar um zip "v2" com um relógio que tem o CustomWachface V1, faltarão informações ou o conteúdo do mostrador estará errado.

O CustomWatchface V2 tem estes novos recursos:

- [Nova view Status](#cwf-reference-new-status-feature)
- [Nova view TempTarget](#cwf-reference-new-temp-target-feature)
- [Nova view Reservoir Level](#cwf-reference-new-reservoir-level-feature)
- [Novo recurso de formatação](#cwf-reference-new-formating-feature)
- [Mostrar dados externos para seguidores](#cwf-reference-show-external-datas) (até 3 conjuntos de dados em um único mostrador, para AAPS, AAPSCLIENT e AAPSCLIENT2)

(cwf-reference-new-status-feature)=

#### Nova view Status

A chave desta view é `"status"`, e o bloco correspondente é incluído automaticamente no modelo exportado do apk do Wear "Custom Watchface V2" (compilado a partir da versão 3.3.0 do AAPS ou mais recente)

Esta view já existia nos mostradores anteriores AAPS (NoChart), AAPS (BigChart) e AAPS (Large) e tem um valor de texto (montado no apk do Wear).

Estes mostradores anteriores foram removidos e substituídos por 3 novos mostradores personalizados no AAPS 3.3.0.

- a informação mínima é o valor do IOB (sempre visível, qualquer que seja o parâmetro de IOB no relógio)
- depois vêm os valores de IOB detalhados (BolusIOB|BasalIOB), se ativados nas preferências
- e o valor do BGI (também se ativado nas preferências)

Esta view `"status"` está ligada à chave `"key_show_loop_status"` (no dynPref) para gerenciar a visibilidade.

Esta view poderia ser gerenciada no V1 com as views existentes `"iob1"`, `"iob2"` e `"bgi"`  , mas com a necessidade de configurações dynPref complexas para gerenciar o espaço entre cada informação de acordo com as diferentes configurações selecionadas no relógio.

(cwf-reference-new-temp-target-feature)=

#### Nova view TempTarget

A chave desta view é `"tempTarget"`, e o bloco correspondente é incluído automaticamente no modelo exportado do apk do Wear "Custom Watchface V2" (compilado a partir da versão 3.3.0 do AAPS ou mais recente).

Ela mostra no mostrador:

- O alvo do perfil (valor único ou valores de alvo mín.-máx.) (cor padrão: branco)
- O alvo ajustado pelo loop (cor padrão: verde)
- O alvo temporário definido pelo usuário (cor padrão: amarelo)

Esta view `"tempTarget"` está ligada à chave `"key_show_temp_target"` (no dynPref) para gerenciar a visibilidade.

A chave DynData (ligada à informação de cor) é `"tempTarget"` (chave DynData padrão ligada à view TempTarget)

O valor do DynData é:

- 0 (alvo do perfil),
- 1 (alvo do loop) ou
- 2 (alvo temporário do usuário)

Observe que esta view também está disponível para dados externos (veja [abaixo](#cwf-reference-show-external-datas)) com as chaves `"tempTarget_Ext1"` e  `"tempTarget_Ext2"` (View e DynData)

(cwf-reference-new-reservoir-level-feature)=

#### Nova view Reservoir Level

A chave desta view é `"reservoir"`, e o bloco correspondente é incluído automaticamente no modelo exportado do apk do Wear "Custom Watchface V2" (compilado a partir da versão 3.3.0 do AAPS ou mais recente).

Esta view mostra o nível do reservatório (em `U`) com a cor padrão branca, amarela no nível de aviso e vermelha no nível urgente

Esta view `"reservoir"` está ligada à chave `"key_show_reservoir_level"` (no dynPref) para gerenciar a visibilidade.

As chaves DynData ligadas ao nível do reservatório são:

-  `"reservoir"`  (chave DynData padrão ligada à view Reservoir Level), ligada ao nível de insulina em `U`
  - O valor mínimo é 0,0 U
  - O valor máximo é 500,0 U
-  `"reservoirLevel"`
  - 0 (nível normal, cor branca por padrão)
  - 1 (nível de aviso, cor amarela por padrão)
  - 2 (nível urgente, cor vermelha por padrão)

Observe que esta view também está disponível para dados externos (veja [abaixo](#cwf-reference-show-external-datas)) com as chaves `"reservoir_Ext1"`, `"reservoir_Ext2"`, `"reservoirLevel_Ext1"` e  `"reservoirLevel_Ext2"` (View e DynData).

(cwf-reference-new-formating-feature)=

#### Novo recurso de formatação para DynData ou DynPref

Agora você pode definir uma formatação personalizada dos valores brutos recebidos pelo relógio e listados na [tabela de valores das chaves dyndata](#cwf-reference-dyndata-key-values) abaixo.

Para mostrar como este recurso funciona, vamos usar como exemplo o mostrador AAPS (Large) e ver os resultados de acordo com o "valor de tempo atrás" e com a nova view "status" visível ou não:

![AAPS (Large)](../images/CustomWatchface_6.jpg)

- Na primeira captura de tela, à esquerda, a view status está visível (com IOB, IOB detalhado e BGI). Então só 1/3 da linha está disponível para mostrar o timestamp (informação muito compacta com `1'`, e para a informação da bateria do uploader `U: 55%`)
- Na segunda captura de tela, a view `status` foi ocultada nos parâmetros do relógio. Então há muito espaço disponível para mostrar o rótulo completo do timestamp e da bateria do uploader (`1 minute ago` e `Uploader : 55%`)
- Na terceira captura de tela, à direita, a configuração do relógio é exatamente a mesma, mas agora o timestamp mudou e está acima de "1". agora o mostrador personalizado consegue mostrar o rótulo atualizado, com tratamento do plural (`2 minutes ago`)

Não vou explicar abaixo como todas as views são gerenciadas no arquivo zip (posição de cada view de acordo com as diferentes configurações). Vou focar apenas na forma de gerenciar o recurso de formatação e o valor dinâmico correspondente no mostrador AAPS (Large).



**Este recurso precisa de um "bloco dinâmico"** (pode ser um bloco `dynData` ou um bloco `dynPref`)

- No mostrador AAPS (Large), queríamos o formato ajustado de acordo com os parâmetros (formato curto ou longo de acordo com a visibilidade da view `status`), então usamos um bloco `dynPref` para isso.

Primeiro vamos começar pelas views:

```text
"uploader_battery": {
    "width": 200,
    "height": 50,
    "topmargin": 175,
    "leftmargin": 0,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 25,
    "gravity": "center",
    "font": "roboto_condensed_light",
    "fontStyle": "normal",
    "dynPref": "uploader",
    "dynValue": false,
    "fontColor": "#BDBDBD"
},

"timestamp": {
    "width": 200,
    "height": 50,
    "topmargin": 175,
    "leftmargin": 0,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 25,
    "gravity": "center",
    "font": "roboto_condensed_light",
    "fontStyle": "normal",
    "dynPref": "timestamp",
    "dynValue": false,
    "fontColor": "#FFFFFF"
},
```
aqui a chave mais importante é `"dynValue"`: com esta chave, ativa-se o gerenciamento dinâmico do valor bruto. o valor booleano (true ou false) define se o valor deve ser "convertido ou não"

- `false`: o valor bruto será usado como está, sem nenhum limite ou conversão
- `true`: o valor bruto será convertido (usando as chaves `minData` e `maxData` no bloco dynData e usando `minValue` e `maxValue` definidos no dynData)

Neste mostrador, os valores brutos são usados sem nenhuma conversão, então, nas duas views, a chave `"dynValue"` foi definida como `false`.



Agora vamos ver o bloco `"uploader"` definido em `"dynPref"`:

```text
"uploader": {
    "prefKey": "key_show_loop_status",
    "true": {
        "dynPref": "uploader_true_ago",
        "invalidTextvalue": "U: --",
        "textvalue1": "U: %.0f%%"
    },
    "false": {
        "dynPref": "uploader_false_ago",
        "invalidTextvalue": "Uploader: --",
        "textvalue1": "Uploader: %.0f%%"
    }
},
```
Por padrão, a view  `"uploader_battery"` está ligada a `"uploader_battery"` , então não é preciso adicionar uma linha explícita com

`"valueKey": "uploader_battery"` (valor mín. 0, valor máx. 100, e o valor bruto é a porcentagem da bateria do telefone)

O texto de formatação está na chave `"textvalue1"` (as chaves `"textvalue1"`, `"textvalue2"`, etc. estão ligadas à chave `"textvalue"`, que pode estar no bloco `view`)

- A chave `"textvalue"`  pode ser usada com informações de formatação no bloco da view (nesta situação o formato será fixo, qualquer que seja o valor ou a configuração)
- Se você quiser alterar as informações de formatação de acordo com as configurações ou os valores, todo o recurso dynData pode ser aplicado, e as chaves próprias são a chave `"invalidTextValue"` (sem "informação de formatação", porque o valor não é válido) e `"textvalue1"`, `"textvalue2"`... (e quantos valores você quiser para gerenciar as etapas entre minData e maxData)
- as chaves `"dynPref"` adicionais são usadas para definir outros blocos para variação de posição e de cor, de acordo com as views visíveis e as configurações dark e matchDivider

Sobre o texto de formatação, a sintaxe é a seguinte: `%[flags][width][.precision]f`

- `%` é o início de uma formatação, `f` é o fim e deve ser usado para a conversão de valores Double.
  - Observe que, se você quiser usar o caractere `%` no seu texto, terá que usar `%%` para indicar que não é uma formatação, mas o caractere de porcentagem.
- `[flag]` é opcional; pode ser principalmente `+`, se você quiser sempre um sinal antes do número, ou `(`, se quiser os valores negativos entre parênteses
- `[width]`  é opcional e define o número mínimo de caracteres a escrever na saída
- `[.precision]` é usado para definir o número de dígitos depois da vírgula decimal.
  - Observe que os valores são Double, então é bom sempre definir uma precisão (para evitar muitos caracteres depois da vírgula decimal, por causa da precisão do kotlin)

Então, no exemplo acima, `%.0f` mostra o valor Double como um número inteiro



Agora vamos ver o bloco dynPref do timestamp, para gerenciar o plural:

```text
"timestamp": {
    "prefKey": "key_show_loop_status",
    "true": {
        "dynPref": "timestamp_true_uploader",
        "invalidTextvalue": "U: --",
        "textvalue1": "%.0f'"
    },
    "false": {
        "dynPref": "timestamp_false_uploader",
        "minData": 0,
        "maxData": 3,
        "invalidTextvalue": "-- minute ago",
        "textvalue1": "%.0f minute ago",
        "textvalue2": "%.0f minutes ago"
    }
},
```
- aqui, se a view `status` estiver visível (ou seja, a chave  `"key_show_loop_status"` é `true`), é usado um único formato (`"textvalue1"`), com `'`  como "unidade"
- se a view `status` estiver oculta, são usados 2 formatos diferentes: um para 0 ou 1, no singular, e outro para valores a partir de 2, no plural
  - `"minData"` e `"maxData"` são usados para definir a faixa e garantir que a troca do singular para o plural aconteça entre os valores 1 e 2
  - Observe que `"maxData"` (inteiro) foi definido como 3 e não 2, porque os dados Double usados no sistema não são inteiros. Então um valor um pouco acima ou um pouco abaixo de 1 pode ficar no singular ou no plural, mesmo que, depois de arredondado para inteiro, o valor seja 1.

- Na view `timestamp`, é importante definir a chave `"dynValue"` como `false`,  senão, por causa da formatação (singular/plural), todos os valores acima de 3 serão limitados a `3 minutes ago` pela conversão com `maxData`...



**Comentário adicional sobre o recurso de formatação**

- lembre-se de que os únicos valores dinâmicos disponíveis são os listados [aqui](#cwf-reference-dyndata-key-values)
- Todos os valores de `BG` estão em mgdl. Se você quiser usar o recurso de formatação para mostrar valores em mmol, terá que fazer a conversão de mgdl para mmol. Dentro de um bloco `dynData` ou `dynPref`, a chave usada para dar nome ao bloco que terá `"minValue"` e `"maxValue"` para a conversão de valores deve se chamar `"dynValue": { ...  }`. (veja [Chaves DynData](#cwf-reference-dyndata-keys))
- Se em uma view você quiser usar um texto de formatação fixo, com a chave `"textvalue"` para definir o formato e a chave `"dynValue"` para definir o uso do valor dinâmico, você também terá que usar um bloco `"dynData"` ou `"dynPref"` (mesmo vazio) para poder usar o recurso de formatação.
- `"textvalue1"`, `"textvalue2"` até textvalue*n* podem ser usados sem o recurso de formatação, para substituir uma etapa de valor double por um rótulo de texto próprio (por exemplo, com o key value `"day_name"` e  sete etapas para definir nomes personalizados dos dias da semana, ... )

- Para a documentação completa, veja [Class Formatter](https://docs.oracle.com/javase/8/docs/api/java/util/Formatter.html)

(cwf-reference-show-external-datas)=

#### Mostrar dados externos para seguidores

Agora o Custom Watchface consegue mostrar no mesmo mostrador até 3 conjuntos de dados: AAPS, AAPSCLIENT e AAPSCLIENT2

Para usar este recurso, você precisa:

- ter pelo menos 2 dos 3 apps a seguir instalados no telefone (AAPS, AAPSCLIENT, AAPSCLIENT2)
- ativar a transmissão de dados (Broadcast data) no AAPSCLIENT e/ou no AAPSCLIENT2, para transmitir os dados ao app principal usado para sincronizar com o CustomWatchface (AAPS ou AAPSCLIENT)
- Usar um CustomWatchface que tenha views com chaves que incluem `_Ext1` ou `_Ext2` (veja [Referência de Key e KeyValue](#cwf-reference-key-and-keyvalue-reference) abaixo)

Observe que, se o app principal no telefone for o AAPSCLIENT e o app secundário que transmite os dados for o AAPSCLIENT2, você terá que ativar o parâmetro `Switch external data in watchface` nos parâmetros próprios do Custom Watchface, se usar um mostrador com views padrão e views adicionais Ext1 (Ext1 está ligado ao AAPSCLIENT e Ext2 está ligado ao AAPSCLIENT2)

Além disso, foram adicionadas três novas views (`"patient_name"` , `"patient_name_Ext1"`  e `"patient_name_Ext2"` *) para incluir automaticamente no mostrador o nome do paciente (definido nas preferências do AAPS) (veja o exemplo abaixo)

![CustomWatchface_7](../images/CustomWatchface_7.png)

(cwf-reference-key-and-keyvalue-reference)=

## Referência de Key e KeyValue

(cwf-reference-list-of-metadata-keys)=

### Lista das chaves de metadata

(cwf-reference-list-of-standard-metadata-keys)=

#### Lista das chaves de metadata com informações padrão

| Chave              | Comentário                                                                                                                   |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `"name"`           | Nome do mostrador personalizado                                                                                              |
| `"author"`         | Nome ou apelido do(s) autor(es)                                                                                              |
| `"created_at"`     | Data de criação (ou de atualização). Cuidado: `/` é um caractere especial, então, se você usá-la na data, coloque `\` antes |
| `"cwf_version"`    | Versão do plugin de mostrador compatível com o design do seu mostrador                                                       |
| `"author_version"` | Aqui o autor pode informar a versão do seu mostrador                                                                         |
| `"comment"`        | Texto livre que pode ser usado para dar informações ou limitações do mostrador atual                                         |

(cwf-reference-preference-keys)=

#### Chaves de preferências

| Chave                         | Valor padrão e comentário                                                                                                                                                                                                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"key_show_detailed_iob"`     | true bloqueia os dados de IOB detalhados na view `iob2`; então `iob1` (se visível e não substituída por um ícone) mostra o IOB total.<br />false bloqueia o IOB total na view `iob2`. pode ser usado se a largura de `iob2` for pequena demais para mostrar corretamente o IOB detalhado |
| `"key_show_detailed_delta"`   | false (somente se o design não for compatível com a largura do delta detalhado nas views `delta` e `avg_delta`)                                                                                                                                                                                |
| `"key_show_bgi"`              | true se o seu design precisa da informação `bgi`                                                                                                                                                                                                                                               |
| `"key_show_iob"`              | true se o seu design precisa das views `iob1` ou `iob2`                                                                                                                                                                                                                                        |
| `"key_show_cob"`              | true se o seu design precisa das views `cob1` ou `cob2`                                                                                                                                                                                                                                        |
| `"key_show_delta"`            | true se o seu design precisa da informação `delta`                                                                                                                                                                                                                                             |
| `"key_show_avg_delta"`        | true se o seu design precisa da informação `avg_delta`                                                                                                                                                                                                                                         |
| `"key_show_temp_target"`      | true se o seu design precisa da informação `tempTarget`                                                                                                                                                                                                                                        |
| `"key_show_reservoir_level"`  | true se o seu design precisa da informação `reservoir`                                                                                                                                                                                                                                         |
| `"key_show_uploader_battery"` | true se o seu design precisa da informação `uploader_battery` (bateria do telefone)                                                                                                                                                                                                            |
| `"key_show_rig_battery"`      | true se o seu design precisa da informação `rig_battery`                                                                                                                                                                                                                                       |
| `"key_show_temp_basal"`       | true se o seu design precisa da informação `basalRate`                                                                                                                                                                                                                                         |
| `"key_show_direction"`        | true se o seu design precisa da informação `direction` (setas de variação da glicose)                                                                                                                                                                                                          |
| `"key_show_ago"`              | true se o seu design precisa da informação `timestamp` (minutos desde a última glicose recebida)                                                                                                                                                                                               |
| `"key_show_bg"`               | true se o seu design precisa da informação `sgv` (valor da glicose)                                                                                                                                                                                                                            |
| `"key_show_loop_status"`      | true se o seu design precisa da informação `loop` (status do loop e há quanto tempo)                                                                                                                                                                                                           |
| `"key_show_week_number"`      | true se o seu design precisa da informação `week_number`                                                                                                                                                                                                                                       |
| `"key_show_date"`             | true se o seu design precisa da informação `Date`, `Month` ou `Day of the week`                                                                                                                                                                                                                |

#### Chaves internas

| Chave                 | Comentário                                                                                                                                                                                                        |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"filename"`          | Esta chave será criada (ou atualizada) automaticamente quando o mostrador for carregado e terá o nome do arquivo zip local na pasta exports                                                                       |
| `"cwf_authorization"` | esta chave será criada (quando o mostrador for carregado) e atualizada cada vez que a preferência de autorização for alterada nas configurações do Wear. Ela é usada para sincronizar a autorização com o relógio |

(cwf-reference-list-of-general-parameters)=

### Lista dos parâmetros gerais

| Chave                    | Comentário                                                                                                                                                                                                                                            |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"highColor"`            | `"#FFFF00"`(padrão amarelo): Cor do valor da glicose, das setas de tendência e dos valores de glicose no gráfico se a glicose estiver acima do limite superior (Hiper)                                                                                |
| `"midColor"`             | `"#00FF00"`(padrão verde): Cor do valor da glicose, das setas de tendência e dos valores de glicose no gráfico se a glicose estiver na faixa-alvo                                                                                                     |
| `"lowColor"`             | `"#FF0000"`(padrão vermelho): Cor do valor da glicose, das setas de tendência e dos valores de glicose no gráfico se a glicose estiver abaixo do limite inferior (Hipo)                                                                               |
| `"lowBatColor"`          | `"#E53935"`(padrão vermelho escuro): Cor de `uploader_battery` quando o valor está baixo (abaixo de 20%, a confirmar)                                                                                                                                 |
| `"carbColor"`            | `"#FB8C00"`(padrão laranja): Cor dos pontos de carboidratos no gráfico                                                                                                                                                                                |
| `"basalBackgroundColor"` | `"#0000FF"`(padrão azul escuro): Cor da curva da TBR no gráfico                                                                                                                                                                                       |
| `"basalCenterColor"`     | `"#64B5F6"`(padrão azul claro): Cor dos pontos de bólus ou SMB no gráfico                                                                                                                                                                             |
| `"gridColor"`            | `"#FFFFFF"`(padrão branco): Cor das linhas e do texto da escala no gráfico                                                                                                                                                                            |
| `"pointSize"`            | 2 (padrão): tamanho dos pontos no gráfico (1 para pontos pequenos, 2 para pontos grandes)                                                                                                                                                             |
| `"enableSecond"`         | false (padrão): define se o mostrador vai mostrar os segundos ou não nas views `time`, `second` ou `second_hand`. é importante manter coerência entre a visibilidade das views e esta configuração geral, que permite atualizar a hora a cada segundo |
| `"dayNameFormat"`        | "E" (padrão): de "E" a "EEEE" define o formato do nome do dia (número, nome curto, nome completo), a confirmar                                                                                                                                        |
| `"monthFormat"`          | "MMM" (padrão): de "M" a "MMMM" define o formato do mês (número, nome curto, nome completo)                                                                                                                                                           |

(cwf-reference-list-of-hardcoded-resource-files)=

### Lista dos arquivos de recurso com nome fixo

Para a maioria das imagens, os sufixos High e Low permitem ajustar a imagem de acordo com o nível da glicose (na faixa-alvo, Hiper ou Hipo)

| Nomes de arquivo                                                | Comentário                                                                                                                                                                                            |
| --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CustomWatchface                                                 | Imagem mostrada na seleção do mostrador e no plugin Wear                                                                                                                                              |
| Background,<br />BackgroundHigh,<br />BackgroundLow | nenhum (padrão preto): Imagem de fundo. o fundo está sempre visível, e a cor padrão é preta se nenhuma imagem for fornecida. A cor pode ser alterada para combinar com o design do mostrador          |
| CoverChart,<br />CoverChartHigh,<br />CoverChartLow | nenhum (padrão): Imagem na frente do gráfico (deve ter transparência para ver o gráfico atrás). Pode ser usada para limitar as bordas do gráfico                                                      |
| CoverPlate,<br />CoverPlateHigh,<br />CoverPlateLow | dial simples (padrão): imagem na frente de todos os valores de texto. transparência obrigatória para ver todos os valores que estão atrás                                                             |
| HourHand,<br />HourHandHigh,<br />HourHandLow       | hour_hand (padrão): imagem do ponteiro das horas. uma imagem padrão é fornecida e pode ser colorida para combinar com um design analógico. Observação: o eixo de rotação será o centro da imagem      |
| MinuteHand,<br />MinuteHandHigh,<br />MinuteHandLow | minute_hand (padrão): imagem do ponteiro dos minutos. uma imagem padrão é fornecida e pode ser colorida para combinar com um design analógico. Observação: o eixo de rotação será o centro da imagem  |
| SecondHand,<br />SecondHandHigh,<br />SecondHandLow | second_hand (padrão): imagem do ponteiro dos segundos. uma imagem padrão é fornecida e pode ser colorida para combinar com um design analógico. Observação: o eixo de rotação será o centro da imagem |
| ArrowNone                                                       | ?? (padrão): imagem mostrada quando não há seta válida.                                                                                                                                               |
| ArrowDoubleUp                                                   | ↑↑ (padrão): imagem da seta dupla para cima                                                                                                                                                           |
| ArrowSingleUp                                                   | ↑ (padrão): imagem da seta simples para cima                                                                                                                                                          |
| Arrow45Up                                                       | ↗ (padrão): imagem da seta de 45 graus para cima                                                                                                                                                      |
| ArrowFlat                                                       | → (padrão): imagem da seta horizontal                                                                                                                                                                 |
| Arrow45Down                                                     | ↘ (padrão): imagem da seta de 45 graus para baixo                                                                                                                                                     |
| ArrowSingleDown                                                 | ↓ (padrão): imagem da seta simples para baixo                                                                                                                                                         |
| ArrowDoubleDown                                                 | ↓↓ (padrão): imagem da seta dupla para baixo                                                                                                                                                          |

Para cada um dos nomes de arquivo acima, a extensão pode ser `.jpg`, `.png` ou `.svg`. Mas tenha cuidado: `.jpg` não suporta transparência (então a maioria dos arquivos deve ser .png ou .svg, para não esconder as views que estão atrás...)

(cwf-reference-list-of-view-keys)=

### Lista das chaves de view

Esta lista está em ordem do fundo para a frente. Conhecer esta ordem é muito importante quando você organiza seu mostrador, porque algumas imagens ou textos podem ficar escondidos por outras imagens.

Observação: todas as chaves que terminam com `_Ext1` ou `_Ext2` são novas e próprias para mostradores com vários usuários.

| Chave                                                                                  | Tipo de view        | Dados ligados                                                                                                                                                                     | Chave DynData                                                                                                                                    |
| -------------------------------------------------------------------------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"background"`                                                                         | Image View          |                                                                                                                                                                                   |                                                                                                                                                  |
| `"chart"`                                                                              | Chart View especial | Curvas gráficas                                                                                                                                                                   |                                                                                                                                                  |
| `"cover_chart"`                                                                        | Image View          |                                                                                                                                                                                   |                                                                                                                                                  |
| `"freetext1"`                                                                          | Text View           |                                                                                                                                                                                   |                                                                                                                                                  |
| `"freetext2"`                                                                          | Text View           |                                                                                                                                                                                   |                                                                                                                                                  |
| `"freetext3"`                                                                          | Text View           |                                                                                                                                                                                   |                                                                                                                                                  |
| `"freetext4"`                                                                          | Text View           |                                                                                                                                                                                   |                                                                                                                                                  |
| `"patient_name"` *<br/>`"patient_name_Ext1"` *<br/>`"patient_name_Ext2"` * | Text View           | Nome do paciente                                                                                                                                                                  |                                                                                                                                                  |
| `"iob1"`<br/>`"iob1_Ext1"` *<br/>`"iob1_Ext2"` *                           | Text View           | Rótulo do IOB ou IOB total                                                                                                                                                        |                                                                                                                                                  |
| `"iob2"`<br/>`"iob2_Ext1"` *<br/>`"iob2_Ext2"` *                           | Text View           | IOB total ou IOB detalhado                                                                                                                                                        |                                                                                                                                                  |
| `"cob1"`<br/>`"cob1_Ext1"` *<br/>`"cob1_Ext2"` *                           | Text View           | Rótulo de carboidratos                                                                                                                                                            |                                                                                                                                                  |
| `"cob2"`<br/>`"cob2_Ext1"` *<br/>`"cob2_Ext2"` *                           | Text View           | Valor do COB                                                                                                                                                                      |                                                                                                                                                  |
| `"delta"`<br/>`"delta_Ext1"` *<br/>`"delta_Ext2"` *                        | Text View           | Delta curto (5 min)                                                                                                                                                               | delta  
delta_Ext1<br/>delta_Ext2                                                                                                          |
| `"avg_delta"`<br/>`"avg_delta_Ext1"` *<br/>`"avg_delta_Ext2"` *            | Text View           | Delta médio (15 min)                                                                                                                                                              | avg_delta<br/>avg_delta_Ext1<br/>avg_delta_Ext2                                                                                  |
| `"tempTarget"`*<br/>`"tempTarget_Ext1"` *<br/>`"tempTarget_Ext2"` *        | Text View           | Alvo de glicose (valor único ou valores de alvo mín. - máx.)                                                                                                                      | tempTarget<br/>tempTarget_Ext1<br/>tempTarget_Ext2                                                                                   |
| `"reservoir"`*<br/>`"reservoir_Ext1"` *<br/>`"reservoir_Ext2"` *           | Text View           | Nível do reservatório                                                                                                                                                             | reservoir<br/>reservoirLevel<br/>reservoir_Ext1<br/>reservoirLevel_Ext1<br/>reservoir_Ext2<br/>reservoirLevel_Ext2 |
| `"uploader_battery"`                                                                   | Text View           | nível da bateria do telefone (%)                                                                                                                                                  | uploader_battery                                                                                                                                 |
| `"rig_battery"`<br/>`"rig_battery_Ext1"` *<br/>`"rig_battery_Ext2"` *      | Text View           | nível da bateria do rig (%)                                                                                                                                                       | rig_battery<br/>rig_battery_Ext1<br/>rig_battery_Ext2                                                                            |
| `"basalRate"`<br/>`"basalRate_Ext1"` *<br/>`"basalRate_Ext2"` *            | Text View           | % ou valor absoluto                                                                                                                                                               |                                                                                                                                                  |
| `"bgi"`<br/>`"bgi_Ext1"` *<br/>`"bgi_Ext2"` *                              | Text View           | mgdl/(5 min) ou mmol/(5 min)                                                                                                                                                      |                                                                                                                                                  |
| `"status"` *<br/>`"status_Ext1"` *<br/>`"status_Ext2"` *                   | Text View           | Resumo do IOB (qualquer que seja a configuração de IOB no relógio), do IOB detalhado (de acordo com a configuração no relógio) e do BGI (de acordo com a configuração no relógio) |                                                                                                                                                  |
| `"time"`                                                                               | Text View           | HH:MM ou HH:MM:SS                                                                                                                                                                 |                                                                                                                                                  |
| `"hour"`                                                                               | Text View           | HH                                                                                                                                                                                |                                                                                                                                                  |
| `"minute"`                                                                             | Text View           | MM                                                                                                                                                                                |                                                                                                                                                  |
| `"second"`                                                                             | Text View           | SS                                                                                                                                                                                |                                                                                                                                                  |
| `"timePeriod"`                                                                         | Text View           | AM ou PM                                                                                                                                                                          |                                                                                                                                                  |
| `"day_name"`                                                                           | Text View           | nome do dia (ver dayNameFormat)                                                                                                                                                   | day_name                                                                                                                                         |
| `"day"`                                                                                | Text View           | DD data                                                                                                                                                                           | day                                                                                                                                              |
| `"week_number"`                                                                        | Text View           | (WW) número da semana                                                                                                                                                             | week_number                                                                                                                                      |
| `"month"`                                                                              | Text View           | nome do mês (ver monthFormat)                                                                                                                                                     |                                                                                                                                                  |
| `"loop"`<br/>`"loop_Ext1"` *<br/>`"loop_Ext2"` *                           | Text View           | minutos desde a última execução e status (setas coloridas no fundo); as setas coloridas podem ser ajustadas com DynData                                                           | loop                                                                                                                                             |
| `"direction"`<br/>`"direction_Ext1"` *<br/>`"direction_Ext2"` *            | Image View          | TrendArrows                                                                                                                                                                       | direction                                                                                                                                        |
| `"timestamp"`<br/>`"timestamp_Ext1"` *<br/>`"timestamp_Ext2"` *            | Text View           | inteiro (minutos atrás)                                                                                                                                                           | timestamp                                                                                                                                        |
| `"sgv"`<br/>`"sgv_Ext1"` *<br/>`"sgv_Ext2"` *                              | Text View           | valor sgv (mgdl ou mmol)                                                                                                                                                          | sgv<br />sgvLevel<br/>sgv_Ext1<br />sgvLevel_Ext1<br/>sgv_Ext2<br />sgvLevel_Ext2                                  |
| `"cover_plate"`                                                                        | Image View          |                                                                                                                                                                                   |                                                                                                                                                  |
| `"hour_hand"`                                                                          | Image View          |                                                                                                                                                                                   |                                                                                                                                                  |
| `"minute_hand"`                                                                        | Image View          |                                                                                                                                                                                   |                                                                                                                                                  |
| `"second_hand"`                                                                        | Image View          |                                                                                                                                                                                   |                                                                                                                                                  |

**View adicionada no Custom Watchface V2.0 ou mais recente (disponível no apk do Wear do AAPS 3.3.0 ou mais recente)*

(cwf-reference-list-of-json-keys)=

### Lista das chaves json

(cwf-reference-common-keys)=

#### Chaves comuns

 que podem ser usadas em todos os tipos de view (Text View, Image View, view de gráfico)

| Chave                    | tipo    | comentário / valor                                                                                                                                                                                       |
| ------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"width"`                | int     | largura da view em pixels                                                                                                                                                                                |
| `"height"`               | int     | altura da view em pixels                                                                                                                                                                                 |
| `"topmargin"`            | int     | margem superior em pixels                                                                                                                                                                                |
| `"leftmargin"`           | int     | margem esquerda em pixels                                                                                                                                                                                |
| `"rotation"`             | int     | ângulo de rotação em graus                                                                                                                                                                               |
| `"visibility"`           | string  | veja a tabela de valores das chaves                                                                                                                                                                      |
| `"dynData"`              | string  | nome do bloco que define os dados dinâmicos a ligar e a animação correspondente (cores, imagem, deslocamento, rotação)<br />`"dynData": "customName",` (veja abaixo)                               |
| `"leftOffset"`           | boolean | inclua esta chave com o valor true para ativar o deslocamento horizontal (valor positivo ou negativo) de acordo com o valor do dynData                                                                   |
| `"topOffset"`            | boolean | inclua esta chave com o valor true para ativar o deslocamento vertical (valor positivo ou negativo) de acordo com o valor do dynData                                                                     |
| `"rotationOffset"`       | boolean | inclua esta chave com o valor true para ativar a rotação (valor positivo ou negativo) de acordo com o valor do dynData                                                                                   |
| `"twinView"`             | string  | chave da outra view (geralmente a outra view também tem o parâmetro twinView com a chave desta view)                                                                                                     |
| `"topOffsetTwinHidden"`  | int     | número de pixels para deslocar a posição da view na vertical se a twin view estiver oculta (valor positivo ou negativo)<br />topOffsetTwinHidden = (topOffset twinView - topOffset thisView)/2     |
| `"leftOffsetTwinHidden"` | int     | número de pixels para deslocar a posição da view na horizontal se a twin view estiver oculta (valor positivo ou negativo)<br />leftOffsetTwinHidden= (leftOffset twinView - leftOffset thisView)/2 |
| `"dynPref"`              | string  | nome do bloco que define a preferência dinâmica a ligar e a animação correspondente (cores, imagem, deslocamento, rotação)<br />`"dynPref": "customName",` (veja abaixo)                           |

(cwf-reference-textview-keys)=

#### Chaves da TextView

| Chave          | tipo    | comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"textsize"`   | int     | tamanho da fonte em pixels (lembre-se de que a fonte pode ter margens em cima e embaixo, então o tamanho real do texto geralmente é menor que o número de pixels definido). Observe que o tamanho deve ser menor que a altura da view para não ser cortado                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `"gravity"`    | string  | veja a tabela de valores das chaves                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `"font"`       | string  | veja na tabela de valores das chaves as fontes disponíveis.<br />Também pode ser o nome de arquivo (sem extensão) de fontes incluídas no arquivo zip                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `"fontStyle"`  | string  | veja a tabela de valores das chaves                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `"fontColor"`  | string  | Gerencia a cor da fonte<br />`"#RRGGBB"`: código de cor no formato RGB, valores hexadecimais; #FF0000 é vermelho<br />`"#AARRGGBB"`: AA é a informação alfa (transparência); 00 é transparente, FF é opaco<br />`"bgColor"`: o keyValue bgColor é uma forma fácil de usar highColor, midColor ou lowColor de acordo com o valor da glicose                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `"allCaps"`    | boolean | true se você quiser o texto em maiúsculas (principalmente o nome do dia ou do mês)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `"background"` | string  | `resource_filename`: você pode incluir uma imagem de recurso como fundo da view de texto (o arquivo de recurso será redimensionado para caber na altura e na largura da view de texto, mas mantendo a proporção da imagem). o valor do texto fica na frente da imagem de fundo.<br />- Observe que esta chave também pode ser usada na view `chart` para definir um fundo personalizado para o gráfico, na frente da imagem de fundo                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `"color"`      | string  | Gerencia a cor do fundo da view ou ajusta a cor da imagem (somente bitmap)<br />`"#RRGGBB"`: código de cor no formato RGB, valores hexadecimais; #FF0000 é vermelho<br />`"#AARRGGBB"`: AA é a informação alfa (transparência); 00 é transparente, FF é opaco<br />`"bgColor"`: o keyValue bgColor é uma forma fácil de usar highColor, midColor ou lowColor de acordo com o valor da glicose<br />- Para a imagem padrão embutida (ponteiro, dial), a cor é aplicada diretamente; para imagens bitmap (jpg ou png), é aplicado um filtro de gradiente de saturação na imagem<br />- Para svg, este parâmetro não tem efeito (a cor dos arquivos svg não pode ser alterada)<br />- Observe que esta chave também pode ser usada na view `chart` para definir um fundo personalizado para o gráfico, na frente da imagem de fundo |
| `"textvalue"`  | string  | Chave própria das 4 views de texto livre incluídas no layout (de freetext1 a freetext4). Ela permite definir o texto a ser incluído (pode ser um rótulo, ou apenas `:` se você quiser um separador entre a view das horas e a view dos minutos...)  
A partir do plugin Custom Watchface v2 (AAPS 3.3), textvalue pode ser usado para incluir um texto de formatação nas outras textViews (para usar com a chave `dynValue` e com `dynData` ou `dynPref`). por exemplo                                                                                                                                                                                                                                                                                                                                                                                               |
| `"dynValue"`*  | boolean | true se você quiser incluir o valor bruto em (double). Útil com a chave `textvalue` se você quiser um formato próprio para mostrar o valor                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

**Chave adicionada no Custom Watchface V2.0 ou mais recente (disponível no apk do Wear do AAPS 3.3.0 ou mais recente)*

(cwf-reference-imageview-keys)=

#### Chaves da ImageView

| Chave     | tipo   | comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"color"` | string | Gerencia a cor do fundo da view ou ajusta a cor da imagem (somente bitmap)<br />`"#RRGGBB"`: código de cor no formato RGB, valores hexadecimais; #FF0000 é vermelho<br />`"#AARRGGBB"`: AA é a informação alfa (transparência); 00 é transparente, FF é opaco<br />`"bgColor"`: o keyValue bgColor é uma forma fácil de usar highColor, midColor ou lowColor de acordo com o valor da glicose<br />- Para a imagem padrão embutida (ponteiro, dial), a cor é aplicada diretamente; para imagens bitmap (jpg ou png), é aplicado um filtro de gradiente de saturação na imagem<br />- Para svg, este parâmetro não tem efeito (a cor dos arquivos svg não pode ser alterada)<br />- Observe que esta chave também pode ser usada na view `chart` para definir um fundo personalizado para o gráfico, na frente da imagem de fundo |

(cwf-reference-chartview-keys)=

#### Chaves da ChartView

| Chave          | tipo   | comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"color"`      | string | Gerencia a cor do fundo da view ou ajusta a cor da imagem (somente bitmap)<br />`"#RRGGBB"`: código de cor no formato RGB, valores hexadecimais; #FF0000 é vermelho<br />`"#AARRGGBB"`: AA é a informação alfa (transparência); 00 é transparente, FF é opaco<br />`"bgColor"`: o keyValue bgColor é uma forma fácil de usar highColor, midColor ou lowColor de acordo com o valor da glicose<br />- Para a imagem padrão embutida (ponteiro, dial), a cor é aplicada diretamente; para imagens bitmap (jpg ou png), é aplicado um filtro de gradiente de saturação na imagem<br />- Para svg, este parâmetro não tem efeito (a cor dos arquivos svg não pode ser alterada)<br />- Observe que esta chave também pode ser usada na view `chart` para definir um fundo personalizado para o gráfico, na frente da imagem de fundo |
| `"background"` | string | `resource_filename`: você pode incluir uma imagem de recurso como fundo da view de texto (o arquivo de recurso será redimensionado para caber na altura e na largura da view de texto, mas mantendo a proporção da imagem). o valor do texto fica na frente da imagem de fundo.<br />- Observe que esta chave também pode ser usada na view `chart` para definir um fundo personalizado para o gráfico, na frente da imagem de fundo                                                                                                                                                                                                                                                                                                                                                                                                                           |

(cwf-reference-key-values)=

### Valores das chaves

| Valor da chave               | chave      | comentário                                                                                   |
| ---------------------------- | ---------- | -------------------------------------------------------------------------------------------- |
| `"gone"`                     | visibility | view oculta                                                                                  |
| `"visible"`                  | visibility | view visível no mostrador (mas a visibilidade pode ser ativada ou desativada nos parâmetros) |
| `"center"`                   | gravity    | o texto fica centralizado na vertical e na horizontal dentro da view                         |
| `"left"`                     | gravity    | o texto fica centralizado na vertical, mas alinhado à esquerda dentro da view                |
| `"right"`                    | gravity    | o texto fica centralizado na vertical, mas alinhado à direita dentro da view                 |
| `"sans_serif"`               | font       |                                                                                              |
| `"default"`                  | font       |                                                                                              |
| `"default_bold"`             | font       |                                                                                              |
| `"monospace"`                | font       |                                                                                              |
| `"serif"`                    | font       |                                                                                              |
| `"roboto_condensed_bold"`    | font       |                                                                                              |
| `"roboto_condensed_light"`   | font       |                                                                                              |
| `"roboto_condensed_regular"` | font       |                                                                                              |
| `"roboto_slab_light"`        | font       |                                                                                              |
| `"normal"`                   | fontStyle  |                                                                                              |
| `"bold"`                     | fontStyle  |                                                                                              |
| `"bold_italic"`              | fontStyle  |                                                                                              |
| `"italic"`                   | fontStyle  |                                                                                              |

(cwf-reference-dyndata-keys)=

### Chaves DynData

| Chave                     | tipo   | comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"dynData"`               | bloco  | define o bloco de todos os blocos de dados dinâmicos que serão usados nas views. geralmente depois da última view.<br />Todas as chaves definidas neste bloco serão usadas como key Value no bloco da view:<br />`"dynData": { dynData blocks }`<br />e cada bloco é definido por um nome personalizado e várias chaves dentro dele:<br />`"customName": { one dynData block }`                                                                                                                  |
| `"valueKey"`              | string | nome do dado dinâmico a usar (geralmente o mesmo da chave da view correspondente).<br />Se não existir, o padrão serão os valores usados pela view que usa este bloco. <br />por exemplo, você pode definir um bloco para personalizar a porcentagem do nível da bateria sem definir valueKey e depois usar o mesmo bloco para personalizar uploader_battery e rig_battery                                                                                                                                 |
| `"minData"`               | int    | define o valor mínimo a considerar para os dados do AAPS: por exemplo, se o valor for sgv (unidade interna mgdl) e minData for 50, todos os valores de glicose abaixo de 50 mgdl serão definidos como 50.<br />- Observe que minData e maxData serão usados para calcular os valores dinâmicos (em pixels ou em graus).                                                                                                                                                                                            |
| `"maxData"`               | int    | define o valor máximo a considerar para os dados do AAPS: por exemplo, se o valor for sgv (unidade interna mgdl) e maxData for 330, todos os valores de glicose acima de 330 mgdl serão definidos como 330.                                                                                                                                                                                                                                                                                                              |
| `"leftOffset"`            | bloco  | Define o deslocamento horizontal da view, em pixels, de acordo com os valores mínimo e máximo.<br />- Inclui a chave minValue, a chave maxValue e a chave invalidValue (opcional)<br />- Se o dado for menor ou igual a minData, a view será deslocada minValue pixels, e se o dado for maior ou igual a maxData, a view será deslocada maxValue pixels<br />Observe que, para aplicar este deslocamento, `leftOffset` deve estar como true na view                                                    |
| `"topOffset"`             | bloco  | Define o deslocamento vertical da view, em pixels, de acordo com os valores mínimo e máximo.<br />- Inclui a chave minValue, a chave maxValue e a chave invalidValue (opcional)<br />- Se o dado for menor ou igual a minData, a view será deslocada minValue pixels, e se o dado for maior ou igual a maxData, a view será deslocada maxValue pixels<br />Observe que, para aplicar este deslocamento, topOffset deve estar como true na view                                                         |
| `"rotationOffset"`        | bloco  | Define o ângulo de rotação da view, em graus, de acordo com os valores mínimo e máximo.<br />- Inclui a chave `minValue`, a chave `maxValue` e a chave `invalidValue` (opcional)<br />- Se o dado for menor ou igual a `minData`, a view vai girar `minValue` graus, e se o dado for maior ou igual a `maxData`, a view vai girar `maxValue` graus<br />Observe que, para aplicar esta rotação, `rotationOffset` deve estar como true na view                                                          |
| `"dynValue"`*             | bloco  | Define a conversão do dynValue da faixa mín. e máx. para os valores mín. e máx. em pixels.<br />- Inclui a chave `minValue`, a chave `maxValue` e a chave `invalidValue` (opcional)<br />- Se o dado for menor ou igual a `minData`, o dynValue enviado será minValue (convertido para double), e se o dado for maior ou igual a `maxData`, o dynValue calculado será maxValue (convertido para double)<br />Observe que, para aplicar esta conversão, a chave `dynValue` deve estar como true na view |
| `"minValue"`              | int    | valor resultante a aplicar na view (chave válida somente dentro de um bloco leftOffset, topOffset ou rotationOffset)                                                                                                                                                                                                                                                                                                                                                                                                     |
| `"maxValue"`              | int    | valor resultante a aplicar na view (chave válida somente dentro de um bloco leftOffset, topOffset ou rotationOffset)                                                                                                                                                                                                                                                                                                                                                                                                     |
| `"invalidValue"`          | int    | valor resultante a aplicar na view se o dado for inválido (chave válida somente dentro de um bloco leftOffset, topOffset ou rotationOffset)                                                                                                                                                                                                                                                                                                                                                                              |
| `"invalidImage"`          | string | `resource_filename` a usar na ImageView ou no fundo da TextView se o dado for inválido                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| image*1_to_n*           | string | `resource_filename` da imagem a usar em cada etapa entre minData (ou perto de minData), com `"image1"`, e maxData (ou perto de maxData), com image*n*<br />Se, por exemplo, você colocar 5 imagens (de image1 a image5), a faixa entre minData e maxData será dividida em 5 etapas e, de acordo com o valor do dado, a imagem correspondente será mostrada                                                                                                                                                         |
| `"invalidFontColor"`      | string | Gerencia as etapas de fontColor se o dado for inválido<br />`"#RRGGBB"` ou `"#AARRGGBB"`: cor a usar se for recebido um dado inválido (pode ser transparente se AA=00)                                                                                                                                                                                                                                                                                                                                             |
| fontColor*1_to_n*       | string | Gerencia as etapas de fontColor<br />`"#RRGGBB"` ou `"#AARRGGBB"`: cor a usar em cada etapa entre minData (ou perto de minData), com `"fontColor1"`, e maxData (ou perto de maxData), com fontColor*n*                                                                                                                                                                                                                                                                                                             |
| `"invalidColor"`          | string | Gerencia as etapas da cor de fundo ou da cor da imagem se o dado for inválido<br />`"#RRGGBB"` ou `"#AARRGGBB"`: cor a usar se for recebido um dado inválido (pode ser transparente se AA=00)                                                                                                                                                                                                                                                                                                                      |
| color*1_to_n*           | string | Gerencia as etapas da cor de fundo ou da cor da imagem<br />`"#RRGGBB"` ou `"#AARRGGBB"`: cor a usar em cada etapa entre minData (ou perto de minData), com `"color1"`, e maxData (ou perto de maxData), com color*n*                                                                                                                                                                                                                                                                                              |
| `"invalidTextSize"`       | int    | Gerencia as etapas do tamanho do texto se o dado for inválido                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| textsize*1_to_n*        | int    | Gerencia o tamanho do texto a usar em cada etapa entre minData (ou perto de minData), com `"textsize1"`, e maxData (ou perto de maxData), com textsize*n*                                                                                                                                                                                                                                                                                                                                                                |
| `"invalidLeftOffset"`     | int    | Gerencia as etapas de leftOffset se o dado for inválido                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| leftOffset*1_to_n*      | int    | Gerencia o leftOffset a usar em cada etapa entre minData (ou perto de minData), com `"leftOffset1"`, e maxData (ou perto de maxData), com leftOffset*n*<br />Observação: pode ser usado com dynPref para deslocar uma view quando outra está oculta...                                                                                                                                                                                                                                                             |
| `"invalidTopOffset"`      | int    | Gerencia as etapas de topOffset se o dado for inválido                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| topOffset*1_to_n*       | int    | Gerencia o topOffset a usar em cada etapa entre minData (ou perto de minData), com topOffset1, e maxData (ou perto de maxData), com topOffset*n*<br />Observação: pode ser usado com dynPref para deslocar uma view quando outra está oculta...                                                                                                                                                                                                                                                                    |
| `"invalidRotationOffset"` | int    | Gerencia as etapas de rotationOffset se o dado for inválido                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| rotationOffset*1_to_n*  | int    | Gerencia o rotationOffset a usar em cada etapa entre minData (ou perto de minData), com rotationOffset1, e maxData (ou perto de maxData), com rotationOffset*n*                                                                                                                                                                                                                                                                                                                                                          |
| `"invalidTextvalue"`*     | string | Gerencia o textvalue se o dado for inválido                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| textvalue*1_to_n* *     | string | Gerencia o textvalue a usar em cada etapa entre minData (ou perto de minData), com textvalue1, e maxData (ou perto de maxData), com textvalue*n*<br />Observação: pode conter um texto de formatação se `"dynValue"` estiver como true na view                                                                                                                                                                                                                                                                     |

**Chave adicionada no Custom Watchface V2.0 ou mais recente (disponível no apk do Wear do AAPS 3.3.0 ou mais recente)*

(cwf-reference-dyndata-key-values)=

### Valores das chaves DynData

| Valor da chave                                                                              | chave    | comentário                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"sgv"`<br/>`"sgv_Ext1"` *<br>`"sgv_Ext2"` *                                    | valueKey | minData padrão = 39 mgdl<br />maxData padrão = 400 mgdl<br />- Observe que o maxData real depende do seu sensor, e as unidades dos valores internos estão sempre em mgdl                                                                                                                            |
| `"sgvLevel"`<br/>`"sgvLevel_Ext1"` *<br/>`"sgvLevel_Ext2"` *                    | valueKey | minData padrão = -1 (Hipo)<br />maxData padrão = 1 (Hiper)<br />se a glicose estiver na faixa-alvo = 0                                                                                                                                                                                              |
| `"direction"`<br/>`"direction_Ext1"` *<br/>`"direction_Ext2"` *                 | valueKey | minData padrão = 1 (dupla para baixo)<br />maxValue padrão = 7 (dupla para cima)<br />dado da seta horizontal = 4<br />Erro ou dado ausente = 0 (??)                                                                                                                                          |
| `"delta"`<br/>`"delta_Ext1"` *<br/>`"delta_Ext2"` *                             | valueKey | minData padrão = -25 mgdl<br />maxData padrão = 25 mgdl<br />- Observe que os valores reais de min e maxData podem ser maiores, e as unidades dos valores internos estão sempre em mgdl                                                                                                             |
| `"avg_delta"`<br/>`"avg_delta_Ext1"` *<br/>`"avg_delta_Ext2"` *                 | valueKey | minData padrão = -25 mgdl<br />maxData padrão = 25 mgdl<br />- Observe que os valores reais de min e maxData podem ser maiores, e as unidades dos valores internos estão sempre em mgdl                                                                                                             |
| `"tempTarget"`*<br/>`"tempTarget_Ext1"` *<br/>`"tempTarget_Ext2"` *             | valueKey | minData padrão = 0 (alvo do perfil)<br />maxData padrão = 2 (alvo temporário)<br />Alvo ajustado pelo loop = 1<br/>Informação padrão ou ausente = 0                                                                                                                                           |
| `"reservoir"`*<br/>`"reservoir_Ext1"` *<br/>`"reservoir_Ext2"` *                | valueKey | minData padrão = 0 U<br />maxData padrão = 500 U                                                                                                                                                                                                                                                          |
| `"reservoirLevel"`*<br/>`"reservoirLevel_Ext1"` *<br/>`"reservoirLevel_Ext2"` * | valueKey | minData padrão = 0 (cor normal)<br/>maxData padrão = 2 (cor urgente)<br/>Cor de aviso = 1                                                                                                                                                                                                           |
| `"uploader_battery"`                                                                        | valueKey | minData padrão = 0 %<br />maxData padrão = 100%                                                                                                                                                                                                                                                           |
| `"rig_battery"`<br/>`"rig_battery_Ext1"` *<br/>`"rig_battery_Ext2"` *           | valueKey | minData padrão = 0 %<br />maxData padrão = 100%                                                                                                                                                                                                                                                           |
| `"timestamp"`<br/>`"timestamp_Ext1"` *<br/>`"timestamp_Ext2"` *                 | valueKey | minData padrão = 0 min<br />maxData padrão = 60 min                                                                                                                                                                                                                                                       |
| `"loop"`<br/>`"loop_Ext1"` *<br/>`"loop_Ext2"` *                                | valueKey | minData padrão = 0 min<br />maxData padrão = 28 min<br />- Observe que as setas de status ficam verdes abaixo de 14 min e vermelhas acima de 14 min. Então, se você colocar 2 imagens, pode substituir o fundo do status com suas imagens personalizadas, usando os valores padrão de min e maxData |
| `"day"`                                                                                     | valueKey | minData padrão = 1<br />maxData padrão = 31                                                                                                                                                                                                                                                               |
| `"day_name"`                                                                                | valueKey | minData padrão = 1<br />maxData padrão = 7                                                                                                                                                                                                                                                                |
| `"month"`                                                                                   | valueKey | minData padrão = 1<br />maxData padrão = 12                                                                                                                                                                                                                                                               |
| `"week_number"`                                                                             | valueKey | minData padrão = 1<br />maxData padrão = 53                                                                                                                                                                                                                                                               |

**Chave adicionada no Custom Watchface V2.0 ou mais recente (disponível no apk do Wear do AAPS 3.3.0 ou mais recente)*

(cwf-reference-dynpref-keys)=

### Chaves DynPref

| Chave            | tipo   | comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"dynPref"`      | bloco  | define o bloco de todos os blocos de preferências dinâmicas que serão usados nas views. Geralmente depois da última view ou depois do bloco dynData.<br />Todas as chaves definidas neste bloco serão usadas como key Value no bloco da view:<br />`"dynPref": { dynPref blocks }`<br />e cada bloco é definido por um nome personalizado e várias chaves dentro dele:<br />`"customName": { one dynPref block }`                                                                                                                                                      |
| `"dynPref"`      | string | *Dentro de um bloco de view*<br />nome do bloco dynPref dinâmico a usar (geralmente o mesmo da chave da view correspondente ou da preferência correspondente).                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `"dynPref"`      | string | *Dentro de um bloco dynData parcial incluído em um bloco dynPref*<br />nome do bloco dynPref dinâmico a usar para completar o bloco dynData. Isso permite ajustar um bloco dynData de acordo com várias preferências                                                                                                                                                                                                                                                                                                                                                                     |
| `"dynPrefColor"` | string | esta chave é própria do bloco principal com todas as cores principais (highColor, midColor, lowColor, cores do gráfico...). use-a se quiser ajustar as cores principais de acordo com as preferências                                                                                                                                                                                                                                                                                                                                                                                          |
| `"prefKey"`      | string | define o key Value da preferência que será usado para obter as preferências do usuário (veja [Valores de PrefKey](#cwf-reference-prefkey-values) abaixo). Esta chave deve ser usada dentro de um bloco `dynPref`.<br />Então, de acordo com a chave de preferência, o bloco `dynPref` deve conter tantas chaves quantos forem os valores de prefKey.<br />Observe que na maioria das vezes as preferências são "booleanas", então você deve encontrar no bloco dynPref estes dois blocos dynData: <br />`"true": { dynData Block },`<br />`"false": { dynData Block }` |
| `"true"`         | bloco  | a maioria das preferências define um valor booleano `"true"` ou `"false"`. Aqui você define o bloco dynData a usar se a preferência selecionada pelo usuário for true.<br />Observe que, se o bloco também tiver uma chave `"dynPref":`, o bloco dynData será mesclado com o outro bloco. Isso permite ajustar, por exemplo, a cor de acordo com uma preferência e o tamanho do texto de acordo com outra preferência                                                                                                                                                                    |
| `"false"`        | bloco  | a maioria das preferências define um valor booleano `"true"` ou `"false"`. Aqui você define o bloco dynData a usar se a preferência selecionada pelo usuário for false.<br />Observe que, se o bloco também tiver uma chave `"dynPref":`, o bloco dynData será mesclado com o outro bloco. Isso permite ajustar, por exemplo, a cor de acordo com uma preferência e o tamanho do texto de acordo com outra preferência                                                                                                                                                                   |

(cwf-reference-prefkey-values)=

### Valores de PrefKey

Todas as chaves do capítulo [Chaves de preferências](#cwf-reference-preference-keys) acima podem ser usadas para ajustar os parâmetros das views

Você também pode usar estas chaves adicionais abaixo, incluídas nos parâmetros específicos do AAPS (Custom):

| Chave                 | tipo    | comentário                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"key_units"`         | boolean | *true*: se a unidade selecionada no AAPS for mgdl<br />*false*: se a unidade selecionada no AAPS for mmol                                                                                                                                                                                                                                                                        |
| `"key_dark"`          | boolean | *true*: para usar um fundo escuro<br />*false*: para usar um fundo claro<br />Observação: este parâmetro é muito usado nos mostradores anteriores do AAPS (AAPS, AAPS V2...)                                                                                                                                                                                               |
| `"key_match_divider"` | boolean | *true*: divisor incluído no AAPS, os mostradores AAPS v2 não serão visíveis<br />*false*: divisor incluído no AAPS, os mostradores AAPS v2 serão visíveis<br />Observação: esta configuração muitas vezes é combinada com a preferência dark (usando a chave `dynPref` no bloco `dynData`) para definir a cor do texto (e do fundo) igual ou oposta à do parâmetro dark... |
