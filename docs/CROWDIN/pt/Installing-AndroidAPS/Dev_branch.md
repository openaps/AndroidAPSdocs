## Branch de desenvolvimento

<font color="#FF0000"><strong>Atenção:</strong></font>
A branch de desenvolvimento é apenas para o desenvolvimento da AndroidAPS. Ele deve ser utilizado num telefone separado para teste <font color="#FF0000"><strong>não para looping real!</strong></font>

A versão mais estável da AndroidAPS para usar é que está em [Master](https://github.com/nightscout/AndroidAPS/tree/master). Recomenda-se ficar na branch principal para loop real.

A versão dev da AndroidAPS é apenas para desenvolvedores e testadores confortáveis em lidar com deteção de erros, olhando através de arquivos de log e talvez ligando o depurador para produzir relatórios de bugs que são úteis para os desenvolvedores (em resumo: pessoas que sabem o que estão a fazer sem serem ajudados!). Portanto, muitos recursos não acabados estão desativados. Para ativar esses recursos digite **Modo de Engenharia** criando um arquivo denominado `engineering__mode` (observe o sublinhado duplo) no mesmo diretório em que encontraria os arquivos de log. Ativar o modo de engenharia pode quebrar totalmente o loop.

No entanto, a branch Dev é um boa para ver que recursos estão sendo testados e para ajudar a detetar os bugs e dar feedback sobre como os novos recursos funcionam na prática. Muitas vezes as pessoas vão testar a Dev branch num telefone antigo e bomba até que estejam confiantes de que ele é estável-qualquer uso dele é por sua conta e risco. Ao testar quaisquer novos recursos, lembre-se de que está a optar por testar um recurso de ainda em desenvolvimento. Faça isso por seu próprio risco & com o devida cuidado para se manter seguro.

Se você encontrar um bug ou achar que algo errado aconteceu ao usar a Dev branch, então visualize o separador[questões](https://github.com/nightscout/AndroidAPS/issues) para verificar se alguém mais o encontrou, ou, caso contrário, adicioná-lo você mesmo. Quanto mais informações puder partilhar aqui, melhor (não se esqueça de que pode precisar partilhar os seus arquivos de registo[](../Usage/Accessing-logfiles.md). The new features can also be discussed on [discord](https://discord.gg/4fQUWHZ4Mw).