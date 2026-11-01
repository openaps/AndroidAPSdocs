# Como traduzir strings do app AAPS ou da documentação

* Para as strings usadas no app, acesse <https://crowdin.com/project/androidaps> e faça login com a sua conta do GitHub
* Para a documentação, acesse <https://crowdin.com/project/androidapsdocs> e faça login com a sua conta do GitHub

* Envie um pedido de participação para a equipe da documentação. Para isso, clique na bandeira do idioma desejado e depois no botão "Join" (Participar) no canto superior direito da página seguinte. Informe o idioma, conte um pouco sobre você e sobre a sua experiência com o AAPS e diga se quer ser tradutor ou revisor (apenas pessoas com experiência em tradução e usuários avançados do AAPS).

```{admonition} Tempo para aprovação :class: note

A aprovação é uma etapa manual. Como somos uma organização sem fins lucrativos, não oferecemos SLAs (prazos garantidos), mas em geral a aprovação é feita em menos de 1 dia. Se não for, entre em contato com a equipe da documentação pelo Facebook ou pelo Discord.

    <br />* Quando aprovarmos você, clique na bandeira
       ![Quando aprovarmos você, clique na bandeira](../images/translation_flags.png)
    
    ## Tradução do app
    
    (translations-translate-strings-for-AAPS-app)=
    ### Traduzir strings do app AAPS
    
    * Se você não tiver preferência pelas strings que vai traduzir, basta selecionar o botão "Translate All" (Traduzir tudo) para começar. Ele mostrará as strings que precisam de tradução.
    
       ![Clique em Translate All](../images/translations-click-translate-all.png)
    
    * Se quiser traduzir um arquivo específico, procure o arquivo pela caixa de pesquisa ou pela estrutura em árvore e clique no nome do arquivo para começar a traduzir as strings desse arquivo.
    
       ![Clique em strings.xml](../images/translations-click-strings.png)
    
    * Traduza as frases no lado esquerdo, digitando um novo texto traduzido ou usando e editando uma sugestão 
    
       ![Tradução do app](../images/translations-translate.png)
    
    
    ### Revisar strings do app AAPS
    
    * Os revisores começam selecionando "Proofread" (Revisar) na tela inicial do idioma.
    
       ![Modo de revisão do app](../images/translations-proofreading-mode.png) 
    
    
      e aprovam os textos traduzidos 
    
       ![aprovar texto](../images/translations-proofreading.png)
    
    Quando um revisor aprova uma tradução, ela é incluída na próxima versão do AAPS.
    
    (translations-translation-of-the-documentation)=
    ## Tradução da documentação
    
    * Clique no nome da página da documentação que você quer traduzir
    
    ![Clique na página da documentação](../images/translation_WikiPage.png)
    
    
    * Traduza frase por frase
    
        1. O texto amarelo é o texto em que você está trabalhando no momento.
    
        1. O texto verde já está traduzido. Você não precisa fazer isso de novo.
    
        1. O texto vermelho é o texto restante que ainda precisa ser traduzido.
    
        1. Este é o texto de origem em que você está trabalhando no momento
    
        1. Esta é a tradução que você está preparando. Você pode copiar o texto acima ou selecionar uma das sugestões abaixo.
    
        1. Estas são as sugestões de tradução. Em especial, você pode ver o quanto o Crowdin considera a sugestão adequada, ou se o texto já foi traduzido antes e só voltou porque foi movido, não alterado.
        1. Pressione o botão "save" (salvar) para salvar uma proposta de tradução. Depois, ela será enviada a um revisor para a verificação final.
    
    ![Tradução da documentação](../images/translation_WikiTranslate.png)
    
    * Uma página traduzida só será publicada na documentação depois que 
    
        1. a tradução foi revisada
    
        1. a sincronização entre o Crowdin e o GitHub terminou (uma vez por hora), o que cria um PR no GitHub.
    
        1. o PR no GitHub foi aprovado.
    
    Em geral, isso leva de 1 a 3 dias, mas durante feriados pode levar um pouco mais.
    
    ### Tradução de links
    
    ```{admonition} Os links não são mais traduzidos
    :class: note
    
    Os links não são mais traduzidos. Antes havia um tópico aqui, mas ele não existe mais: com a migração para Markdown e o myst_parser, criamos rótulos explicitamente no texto em inglês e esses rótulos são passados automaticamente para os outros idiomas.
    
    

Você traduz o texto que representa o link. Tome cuidado para **não** remover o link, que é representado por um par de tags `<0></0>` (ou por outros números, se houver mais links no mesmo parágrafo).

É tarefa dos revisores verificar isso com atenção especial!

### Revisão

* Os revisores precisam mudar para o modo Proofreading (revisão)
    
    ![Modo de revisão da documentação](../images/translation_WikiProofreadingmode.png)
    
    e aprovar os textos traduzidos
    
    ![aprovar texto](../images/translations-proofreading.png)

* Quando um revisor aprova uma tradução, ela é incluída na próxima compilação da documentação. Isso não tem horário fixo e é feito quando necessário, mas em geral cerca de uma vez por semana, exceto durante feriados. Para acelerar o processo, você pode avisar a equipe da documentação sobre novas traduções.