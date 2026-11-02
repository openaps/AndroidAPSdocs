# Como traduzir textos da aplicação AAPS ou da documentação

* Para os textos usados na aplicação, vá a <https://crowdin.com/project/androidaps> e inicie sessão com a sua conta GitHub
* Para a documentação, visite <https://crowdin.com/project/androidapsdocs> e inicie sessão com a sua conta GitHub

* Envie um pedido de adesão à equipa da documentação. Para isso, clique na bandeira da língua pretendida e depois no botão "Join" (Aderir), no canto superior direito da página seguinte. Indique a língua, dê algumas informações sobre si e a sua experiência com o AAPS, e diga se quer ser tradutor ou revisor (só para pessoas com experiência em tradução e utilizadores avançados do AAPS).

```{admonition} Tempo para aprovação :class: note

A aprovação é um passo manual. Como organização sem fins lucrativos, não oferecemos SLA (garantia de tempo de resposta), mas em geral a aprovação é feita em < 1 dia. Se não for, contacte a equipa da documentação pelo Facebook ou pelo Discord.

    <br />* Quando o aprovarmos, clique na bandeira
       ![Quando o aprovarmos, clique na bandeira](../images/translation_flags.png)
    
    ## Tradução da aplicação
    
    (translations-translate-strings-for-AAPS-app)=
    ### Traduzir textos da aplicação AAPS
    
    * Se não tiver preferência pelos textos a traduzir, selecione simplesmente o botão "Translate All" (Traduzir tudo) para começar. Mostra-lhe os textos que precisam de tradução.
    
       ![Clicar em Translate All](../images/translations-click-translate-all.png)
    
    * Se quiser traduzir um ficheiro específico, procure o ficheiro na caixa de pesquisa ou na estrutura em árvore e clique no nome do ficheiro para começar a traduzir os textos desse ficheiro.
    
       ![Clicar em strings.xml](../images/translations-click-strings.png)
    
    * Traduza as frases do lado esquerdo, escrevendo um novo texto traduzido ou usando & editando uma sugestão 
    
       ![Tradução da aplicação](../images/translations-translate.png)
    
    
    ### Rever textos da aplicação AAPS
    
    * Os revisores começam por selecionar "Proofread" (Rever) no ecrã inicial da língua.
    
       ![Modo de revisão da aplicação](../images/translations-proofreading-mode.png) 
    
    
      e aprovar os textos traduzidos 
    
       ![aprovar texto](../images/translations-proofreading.png)
    
    Quando um revisor aprova uma tradução, esta é incluída na versão seguinte do AAPS.
    
    (translations-translation-of-the-documentation)=
    ## Tradução da documentação
    
    * Clique no nome da página da documentação que quer traduzir
    
    ![Clicar na página da documentação](../images/translation_WikiPage.png)
    
    
    * Traduza frase a frase
    
        1. O texto amarelo é o texto em que está a trabalhar neste momento.
    
        1. O texto verde já está traduzido. Não precisa de o traduzir outra vez.
    
        1. O texto vermelho é o texto que ainda falta traduzir.
    
        1. Este é o texto original em que está a trabalhar neste momento
    
        1. Esta é a tradução que está a preparar. Pode copiar o texto de cima ou escolher uma das sugestões de baixo.
    
        1. Estas são as sugestões de tradução. Em particular, pode ver quanto o Crowdin considera que a sugestão se ajusta, ou se o texto já foi traduzido antes e só voltou a aparecer porque foi movido, não alterado.
        1. Prima o botão "save" (guardar) para guardar uma proposta de tradução. Depois, a tradução passa para um revisor, que faz a verificação final.
    
    ![Tradução da documentação](../images/translation_WikiTranslate.png)
    
    * Uma página traduzida só é publicada na documentação depois de 
    
        1. a tradução ser revista
    
        1. the sync run between Crowdin and Github finished (once an hour) which creates a PR for GitHub.
    
        1. o PR no GitHub ser aprovado.
    
    Em geral, isto demora 1–3 dias, mas em períodos de férias pode demorar um pouco mais.
    
    ### Traduzir ligações
    
    ```{admonition} As ligações já não são traduzidas
    :class: note
    
    As ligações já não são traduzidas. In the past we had a topic here but this is gone as through migration to Markdown and the myst_parser we explicitly create labels in the english text and propagate these labels under the hood to the languages.
    
    

Está a traduzir o texto que representa a ligação. Please be careful **not** to remove the link, which is represented by a pair of `<0></0>` tags (or other numbers, if there are more links in one paragraph).

Os revisores devem prestar especial atenção a isto!

### Revisão

* Os revisores têm de mudar para o modo "Proofreading" (revisão)
    
    ![Modo de revisão da documentação](../images/translation_WikiProofreadingmode.png)
    
    e aprovar os textos traduzidos
    
    ![aprovar texto](../images/translations-proofreading.png)

* Quando um revisor aprova uma tradução, esta é incluída na compilação seguinte da documentação, que é feita a pedido, sem calendário fixo, mas em geral cerca de uma vez por semana (exceto em períodos de férias). Para acelerar o processo, pode informar a equipa da documentação sobre novas traduções.