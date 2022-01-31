Monitorização remota
**************************************************

.. imagem: ../images/KidsMonitoring.png
  :alt: Monitorizando crianças
  
AndroidAPS oferece várias opções para monitorização remota de crianças e também permite enviar comandos remotos. É claro que também é possível usar a monitorização remota para seguir o seu parceiro ou amigo.

Funções
==================================================
* A bomba da criança é controlada pelo telefone da criança usando o AndroidAPS.
* Os pais podem seguir remotamente vendo todos os dados relevantes, como níveis de glicemia (BG), hidratos de carbono ativos (COB), insulina ativa (IOB), etc. utilizando **app NSClient** no seu telefone. As configurações devem ser as mesmas na AndroidAPS e no NSClient.
* Os pais podem ter alarmes usando o **xDrip em modo de seguidor** no seu telefone.
* O Controle remoto da AndroidAPS usando ` Comandos SMS <../Children/SMS-Commands.html> ` _  é assegurado por autenticação de dois fatores.
* O controle remoto por meio da app NSClient só é recomendado se a sua sincronização estiver funcionando bem (ou seja, você não vê mudanças indesejadas de dados como auto modificação de AT, DBT, etc) veja as ` notas das versões para a Versão 2.8.1.1 <../Installing-AndroidAPS/Releasenotes.html#important-hints> ` _ para obter mais detalhes.

Ferramentas e aplicações para monitorização remota
==================================================
* `Nightscout <https://nightscout.github.io/>`_ in web browser (mainly data display)
* A app NSClient é uma versão leve da AAPS capaz de seguir alguém, fazer mudanças de perfil, configurar ATs e registo de hidratos de carbono. Há 2 apps: ` NSClient & NSClient2 para download <https://github.com/nightscout/AndroidAPS/releases/>` _. A única diferença é o nome da app. Desta forma pode instalar a app duas vezes no mesmo telefone, para poder seguir 2 pessoas / nightscouts diferentes com elas.
* O Dexcom Follow se estiver a usar a app original da Dexcom (apenas valores BG)
* ` xDrip <../Configuration/xdrip.html> ` _ em modo seguidor (principalmente valores glicemia (GLIC) e ** alarmes**)
* ` Sugarmate <https://sugarmate.io/>` _ ou ` Spike <https://spike-app.com/>` _ no iOS (principalmente valores GLIC e ** alarmes**)

Considerações a ter
==================================================
* Definir os rácios corretos <../Getting-Started/FAQ.html#como começar>`_ (Basal, Fator de Sensibilidade...) é difícil nas crianças, especialmente na fase das hormonas de crescimento. 
* As configurações devem ser as mesmas na AndroidAPS e no NSClient.
* Considere o intervalo de tempo entre o mestre e o seguidor devido ao tempo para upload e download, bem como o facto de que o telefone principal AAPS só irá fazer o upload após a execução do loop.
* Vai ser necessário algum tempo para configurar e confirmar os rácios corretamente, sempre próximo da criança, antes de iniciar a monitorização e tratamento remoto. As férias escolares podem ser uma boa ocasião para isso.
* Qual é o seu plano de emergência para quando o controle remoto não funcionar (ex. problemas de rede)?
* A monitorização e o tratamento remoto podem ser muito úteis entre o infantário e o ensino básico. Mas certifique-se de que os professores e educadores estão a par do plano de tratamento da sua criança. Exemplos de tais planos podem ser encontrados nos arquivos do AndroidAPS <https://www.facebook.com/groups/AndroidAPSUsers/files/>`_ no Facebook.
