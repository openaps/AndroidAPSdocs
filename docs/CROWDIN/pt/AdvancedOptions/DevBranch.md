# Branch de desenvolvimento

```{warning}
O branch dev serve apenas para o desenvolvimento do AAPS. Deve ser usado num telefone separado para testes, <font color="#FF0000">**não para o loop real!**</font>
```

A versão mais estável do AAPS é a do [branch master](https://github.com/nightscout/AndroidAPS/tree/master). Recomenda-se ficar no branch master para o loop real.

A versão dev do AAPS é apenas para programadores e testadores à vontade com stacktraces, com a análise de ficheiros de registo e talvez com o uso do depurador para criar relatórios de erros úteis para os programadores (em resumo: pessoas que sabem o que estão a fazer sem ajuda!). Por isso, muitas funcionalidades ainda não terminadas estão desativadas. To enable these features enter **Engineering Mode** by creating a file named `engineering_mode` in the directory /AAPS/extra. Ativar o modo de engenharia pode avariar totalmente o loop.

No entanto, o branch dev é um bom sítio para ver que funcionalidades estão a ser testadas, ajudar a eliminar erros e dar feedback sobre o funcionamento das novas funcionalidades na prática. Muitas vezes as pessoas testam o branch dev num telefone e numa bomba antigos até terem a certeza de que está estável - qualquer uso é por sua conta e risco. Ao testar novas funcionalidades, lembre-se de que está a escolher testar uma funcionalidade ainda em desenvolvimento. Faça-o por sua conta e risco & com o devido cuidado para se manter seguro.

Se encontrar um erro ou achar que algo correu mal ao usar o branch dev, consulte o [separador issues](https://github.com/nightscout/AndroidAPS/issues) para ver se outra pessoa já o encontrou, ou adicione-o se ainda não existir. Quanto mais informação partilhar, melhor (não se esqueça de que pode ter de partilhar os seus [ficheiros de registo](../GettingHelp/AccessingLogFiles.md)). As novas funcionalidades também podem ser discutidas no [Discord](https://discord.gg/4fQUWHZ4Mw).

Uma versão dev tem uma data de validade. Isto parece incómodo quando a versão funciona bem, mas tem um objetivo. Quando circula uma única versão dev, é mais fácil acompanhar os erros que as pessoas comunicam. Os programadores não querem estar numa situação em que circulam três versões dev, em que os erros estão corrigidos numas e não noutras, e as pessoas continuam a comunicar os erros já corrigidos.

(branch-ci-test)=

## Testar um branch específico (branch-ci)

Para compilar um branch de teste, selecione branch-ci, que permite escolher um branch específico para criar a APK. Pode usar este método quando precisar de testar o branch dev.

![aaps_ci_branch_ci1](../images/Building-the-App/CI/aaps_ci_branch_ci1.png)

![aaps_ci_branch_ci2](../images/Building-the-App/CI/aaps_ci_branch_ci2.png)

(github-pr-test)=

## Testar itens num pull request (implementação com GitHub CI actions)

Disponível a partir de 3.3.2.1.dev

- Adequado para testadores ou para quem ajuda nos testes.

```{eval-rst}
.. raw:: html

    <!--crowdin: exclude-->
    <div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
      <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
        <iframe
          src="https://geo.dailymotion.com/player/x9rdx1q.html?video=x9rdx1q&loop=true&mute=true"
          loading="lazy"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
    </div>
```

![aaps_ci_pr_ci](../images/Building-the-App/CI/aaps_ci_pr_ci.png)

- Target repository: o repositório que contém o PR, no formato owner/repo. Mantenha o valor predefinido **nightscout/AndroidAPS**, a não ser que lhe tenham dito para usar outro repositório (só os programadores o devem fazer).

- PR number: introduza o número do PR que quer testar.

- PR reference types: os tipos de referência do PR incluem duas opções:
    
    - head:
    - Obtém o conteúdo real do branch do autor do PR (ou seja, o histórico de commits original, sem operações de merge).
    - Equivale ao estado original do branch do PR, como se fosse obtido diretamente de um fork ou de um branch de funcionalidade.
    
    - merge:
    
    - Obtém o resultado do merge do PR no branch de destino (por exemplo, dev), simulado antecipadamente pelo GitHub.
    - Este é um commit de merge virtual, criado automaticamente pelo GitHub.
    - Este commit só existe quando o PR não tem conflitos e pode ser integrado (merge).
    
    - variant:
    
    - Consulte [variante](#browserbuild-variant)