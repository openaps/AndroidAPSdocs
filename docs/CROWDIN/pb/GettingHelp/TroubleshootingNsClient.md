(Troubleshooting-NSClient-troubleshooting-nsclient)=

# Resolução de problemas do NSClient

O NSClient depende de uma comunicação estável com o Nightscout. Uma conexão instável causa erros de sincronização e alto uso de dados.

Se ninguém acompanha você no Nightscout, você pode pausar o NSClient para economizar bateria. Ou você pode configurar o NSClient para conectar somente no Wi-Fi e/ou durante o carregamento.

* Como detectar uma conexão instável?

Abra a tela do NSClient (**Configuração** > **Comunicação** > **NSClientV3** > **Abrir plugin**) e observe o **Status** e o log. Com os websockets ativados, o status deve ficar "Conectado", quase sem mensagens de reconexão no log. Se você vê muitas reconexões, então há um problema.

* Reiniciar

Como primeiro passo, reinicie o Nightscout e depois o seu telefone para ver se o problema é permanente.

Se o seu Nightscout está hospedado no Heroku, você pode reiniciar o Nightscout assim: entre no Heroku, clique no nome do seu app do Nightscout, clique no menu 'More' e depois em 'Restart all dynos'.

Para outros provedores, siga a documentação do seu provedor.

* Problemas no telefone

O Android pode colocar o seu telefone em modo de suspensão. Verifique se você tem uma exceção para o AAPS nas opções de energia do seu telefone, para permitir que ele rode em segundo plano o tempo todo.

Verifique o NSClient de novo em um local com sinal de rede forte.

Tente outro telefone.

* Nightscout

Se o seu site está hospedado no Azure, muitas pessoas notaram que os problemas de conexão melhoraram depois de mudar para o Heroku.

Uma solução alternativa para problemas de conexão no Azure é definir em Application settings o HTTP protocol para 2.0 e Websockets para ON

* Nenhuma leitura de glicose do Nightscout

Se o **AAPS** conecta corretamente ao Nightscout, mas a glicose aparece como N/A: nas [configurações do NSClientV3](#Preferences-nsclient), abra **Sincronização** e ative **Receber dados de CGM do NS**. Esta opção fica oculta enquanto o controle do cliente está ativado ([modo reforçado](#client-master-control-hardened-mode)); nesse caso, verifique se **Glicemia via NSClient** está selecionado em **Configuração** → **Fonte de BG**.

* Se você ainda recebe um erro...

Verifique o tamanho do seu banco de dados no MongoDB (ou pelo plugin de tamanho do banco de dados no Nightscout). Se você usa o plano gratuito do MongoDB, 496MB significa que ele está cheio e precisa ser limpo. [Siga estas instruções do Nightscout para verificar o tamanho do seu banco de dados e apagar dados](https://nightscout.github.io/troubleshoot/troublehoot/#database-full).

Antes de apagar dados do seu banco de dados, e se você ainda não fez isso, considere doar os seus dados do AAPS para o projeto Open Humans (para pesquisa). As instruções estão na [página de configuração do Open Humans](../SupportingAaps/OpenHumans.md).