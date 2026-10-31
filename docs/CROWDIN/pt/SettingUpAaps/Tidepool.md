# Tidepool

O Tidepool é uma ferramenta de terceiros que recolhe dados sobre a glicose, a insulina e os hidratos de carbono (e as notas que adiciona aos seus tratamentos) e pode ser usada para analisar e partilhar estes dados com a sua equipa clínica. Desde a versão 3.2 do AAPS, pode ser usado como alternativa ao Nightscout para cumprir parte do Objetivo 1. It can also be used in combination with Nightscout as an alternative reporting platform that integrates well with clinical settings. This may be the desired option for children using AAPS who want to have the remote monitoring and control capabilities of Nightscout, but want a reporting platform that their clinical team are more comfortable with.

É importante compreender que o Tidepool serve apenas para relatórios. It is NOT a real-time follow app. Se precisar de ter seguidores além do telefone principal do AAPS, também tem de configurar o Nightscout.

Nota: a organização Tidepool colocou no mercado o produto iOS Loop com aprovação da FDA. This effort has nothing to do with their data reporting platform or AAPS.


## Passo 1 - Criar uma conta Tidepool

- Aceda a [tidepool.org](https://www.tidepool.org/)

- Selecione “Personal Sign Up” ou “Sign Up”

- Crie um email e uma senha e guarde-os num local seguro

- Selecione “Personal Account” e clique em “Continue”

- Preencha a secção de informações do paciente e aceite os termos de utilização

- Verifique o seu endereço de email seguindo as instruções que recebeu por email


## Passo 2 - Ligar o AAPS ao Tidepool

- Abra o **menu** (☰) no canto superior esquerdo do ecrã principal e selecione "**Configuração**"

- Abra a categoria "**Comunicação**" e ative "**Tidepool**":

![Ativar o Tidepool](../images/v4/Tidepool/tidepool_enable.png)

- Toque em "**Abrir plugin**" por baixo de Tidepool e depois toque no ícone **Login** (uma seta a entrar numa porta) no canto superior direito

- Abre-se uma janela do navegador na página de login do Tidepool. Inicie sessão com o endereço de email e a senha que criou no Passo 1 acima:

![Página de login do Tidepool](../images/v4/Tidepool/tidepool_login.png)

- Após um login com sucesso, o navegador fecha-se e o ecrã do Tidepool mostra o estado "**Ligado**"; o registo por baixo mostra os envios de dados. Se o login falhar, confirme que as suas credenciais estão corretas e que verificou o seu endereço de email no Tidepool.

![Tidepool ligado](../images/v4/Tidepool/tidepool_status.png)

- Nas "**Definições**" do plugin Tidepool, abra "**Definições de ligação**". Por predefinição, "**Usar as definições de ligação do Nightscout**" está ativado, por isso o Tidepool envia dados nas mesmas condições que definiu para o Nightscout. Desative-o se quiser condições diferentes para o Tidepool, por exemplo para enviar para o Tidepool apenas com Wi-Fi e durante o carregamento, enquanto o Nightscout também usa dados móveis.

![Definições de ligação com Usar as definições de ligação do Nightscout ativado](../images/v4/Tidepool/tidepool_connection_settings.png) ![Definições de ligação separadas para o Tidepool](../images/v4/Tidepool/tidepool_connection_settings_separate.png)

Para mais ajuda sobre como usar os seus dados depois de enviados para o Tidepool, visite: [https://www.tidepool.org/viewing-your-data](https://www.tidepool.org/viewing-your-data)

(tidepool-menu)=
## Os botões do Tidepool

No canto superior direito do ecrã do Tidepool:

- O ícone **Login** ou **Terminar Sessão** — liga ou desliga a sua conta Tidepool. Só é mostrado um deles: **Login** quando não tem sessão iniciada, **Terminar Sessão** quando tem sessão iniciada. O **AAPS** pede-lhe confirmação antes de terminar a sua sessão.
- O ícone da roda dentada — as definições do Tidepool.

Os botões na parte de baixo do ecrã do Tidepool:

- "**Fazer o upload agora**" — envia os dados novos de imediato, em vez de esperar pelo próximo envio automático.
- "**Sincronização completa**" — envia de novo todos os dados guardados no **AAPS**.
- "**Apagar todos os dados**" — apaga **todos** os dados que o **AAPS** enviou para a sua conta Tidepool. Isto não pode ser desfeito. Use-o apenas para remover dados errados ou duplicados e depois execute "**Sincronização completa**" para enviar os seus dados de novo.
- "**Limpar Registo**" — esvazia o registo mostrado no ecrã do Tidepool.

![O ecrã do Tidepool e os seus botões](../images/v4/Tidepool/tidepool_menu.png)

No Tidepool, os dados enviados pelo **AAPS** 4 são mostrados com o nome de dispositivo **AAPS**. Consulte [O que mudou no AAPS v4](#v4changes-tidepool) se usou o Tidepool com uma versão mais antiga. 
