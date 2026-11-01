(Troubleshooting-NSClient-troubleshooting-nsclient)=

# Resolução de problemas do NSClient

O NSClient precisa de uma comunicação estável com o Nightscout. Uma ligação instável causa erros de sincronização e um elevado consumo de dados.

Se ninguém o segue no Nightscout, pode pausar o NSClient para poupar bateria, ou configurar o NSClient para ligar apenas quando estiver em Wi-Fi e/ou a carregar.

* Como detetar uma ligação instável?

Abra o ecrã do NSClient (**Configuração** > **Comunicação** > **NSClientV3** > **Abrir plugin**) e observe o **Estado** e o registo. Com os websockets ativos, o estado deve ficar "connected" (ligado), quase sem mensagens de religação no registo. Se vir muitas religações, há um problema.

* Reiniciar

Como primeiro passo, reinicie o Nightscout e depois o seu telefone, para ver se o problema é permanente.

Se o seu Nightscout estiver alojado no Heroku, pode reiniciar o Nightscout assim: inicie sessão no Heroku, clique no nome da sua app Nightscout, clique no menu 'More' e depois em 'Restart all dynos'.

Para outros serviços de alojamento, siga a documentação de ajuda desse serviço.

* Problemas do telefone

O Android pode colocar o seu telefone em modo de suspensão. Verifique se o AAPS tem uma exceção nas opções de energia do seu telefone, para poder funcionar sempre em segundo plano.

Verifique novamente o NSClient num local com um sinal de rede forte.

Experimente outro telefone.

* Nightscout

Se o seu site estiver alojado no Azure, muitas pessoas notaram que os problemas de ligação melhoraram depois de mudarem para o Heroku.

Uma solução alternativa para problemas de ligação no Azure é definir, em Application settings, HTTP protocol para 2.0 e Websockets para ON

* Sem valores de glicose do Nightscout

Se o **AAPS** se liga corretamente ao Nightscout mas a glicose aparece como N/A: nas [definições do NSClientV3](#Preferences-nsclient), abra **Sincronização** e ative **Receber dados CGM do NS**. Esta opção fica oculta enquanto o controlo pelo cliente estiver ligado ([modo reforçado](#client-master-control-hardened-mode)); nesse caso, verifique se **Glicose NSClient** está selecionada em **Configuração** → **Fonte da Glicose**.

* Se continuar a ter um erro...

Verifique o tamanho da sua base de dados no MongoDB (ou através do plugin de tamanho da base de dados no Nightscout). Se usa o plano gratuito do MongoDB, 496MB significa que está cheia e tem de ser limpa. [Siga estas instruções do Nightscout para verificar o tamanho da sua base de dados e apagar dados](https://nightscout.github.io/troubleshoot/troublehoot/#database-full).

Antes de apagar dados da sua base de dados, e se ainda não o fez, considere doar os seus dados do AAPS ao projeto Open Humans (para investigação). As instruções estão na [página de configuração do Open Humans](../SupportingAaps/OpenHumans.md).