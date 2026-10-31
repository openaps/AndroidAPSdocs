# Nightscout

(Nightscout-security-considerations)=

## Questões de segurança

O Nightscout é o servidor de relatórios e de monitorização do **AAPS**: o **AAPS** envia os seus dados para ele, e o utilizador ou os seus cuidadores consultam-nos no site do Nightscout ou em apps de seguidor. O Nightscout guarda os seus dados médicos, perfis e tratamentos, por isso vale a pena pensar em proteger o seu site Nightscout.

No **AAPS** 4, o controlo remoto não passa pelo site do Nightscout. Enquanto o controlo pelos clientes estiver ligado ([modo reforçado](#client-master-control-hardened-mode)), os tratamentos ou alvos introduzidos diretamente no Nightscout **não são aplicados** pelo **AAPS**. Em vez disso, os comandos remotos vêm de um **AAPSClient** emparelhado — veja [Controlo principal ↔ cliente](#client-master-control).

Tenha o máximo cuidado se usar o Nightscout como fonte de dados de glicose do AAPS.

### Definições do Nightscout

Pode impedir o acesso público ao seu site Nightscout com [funções de autenticação](https://nightscout.github.io/nightscout/security): partilhe o seu URL apenas com um token `readable`, nunca com um token `admin`.

O `API_SECRET` do Nightscout é a senha principal do seu site: não a partilhe publicamente.

(Nightscout-aaps-settings)=

### Definições do AAPS

Aceitar dados do Nightscout (alterações de perfil, tratamentos, ...) é opcional e está desligado por defeito. Os interruptores descritos abaixo ficam ocultos enquanto o controlo pelos clientes estiver ligado (modo reforçado) e no [modo simples](#preferences-simple-mode).

* Aceda às definições de **Sincronização** do plugin NSClientV3 de uma destas formas: 1) **Definições** (ícone de engrenagem no ecrã principal) -> **NSClientV3** -> **Sincronização**, ou 2) **Configuração** (menu ☰) -> **Comunicação** -> "**Definições**" em NSClientV3.
* Ative "Enviar dados para o NS".
* "Enviar dados de glicose para o NS" está nas definições da sua fonte de glicose (**Configuração → Fonte da Glicose → Definições**). Ative esta opção, exceto se a fonte de dados de glicose do AAPS for o Nightscout: nesse caso, **não** a ative.
* Não ative "Receber dados CGM do NS", exceto se o Nightscout for a sua fonte de dados de glicose.

#### Não sincronizar a partir do Nightscout

Manter todas as opções "Receber ... do NS" desligadas garante que nenhuma alteração do Nightscout será usada pelo AAPS:

![Nightscout: apenas envio](../images/preferences/settings_nsclient_sync.png)

#### Aceitar alterações do Nightscout

Ativar estas opções permite alterar definições do AAPS através do Nightscout, como modificar e trocar perfis, alvos temporários e adicionar hidratos de carbono que serão tidos em conta pelo AAPS. Só aparecem quando o controlo pelos clientes e o modo simples estão desligados.  
Note que os tratamentos de insulina só serão usados para cálculos, como "Não administrar bólus, apenas registar".

![Opções de receção do Nightscout ligadas](../images/NSsafety3.png)

### Outras definições de segurança

Mantenha o seu telefone atualizado, como descrito em [segurança em primeiro lugar](#preparing-safety-first).

(Nightscout-manual-nightscout-setup)=

## Configuração manual do Nightscout

Parte-se do princípio de que já tem um site Nightscout; se não tiver, visite a página do [Nightscout](http://nightscout.github.io/nightscout/new_user/) para ver as instruções completas de configuração. As instruções abaixo são definições que também terá de adicionar ao seu site Nightscout. O seu site Nightscout tem de ter pelo menos a versão 15; verifique se está a usar a [versão mais recente](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version), caso contrário receberá uma mensagem de erro na app AAPS.

* [Edite as suas variáveis](https://nightscout.github.io/nightscout/setup_variables/#nightscout-configuration)

* Adicione ou edite as variáveis da seguinte forma:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Pode definir vários alarmes para [monitorizar a bomba](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring); recomenda-se em especial o alarme da % da bateria: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

* Guarde as alterações. O seu site Nightscout deve agora mostrar as «pills» (etiquetas de informação). Pode forçar a apresentação por defeito, adicionando-as em `SHOW_PLUGINS`.
  
  * `SHOW_PLUGINS` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  
  ![«Pills» do Nightscout](../images/nightscout1.png)

## Nightscout como SaaS pago (Software as a Service)

Use a interface web do fornecedor para definir as variáveis. Se necessário, contacte o serviço de apoio do fornecedor.