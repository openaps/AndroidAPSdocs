# Monitorização remota

![Monitorizar crianças](../images/KidsMonitoring.png)

O __AAPS__ oferece várias funções para a monitorização remota de crianças com diabetes tipo 1 e também permite comandos remotos, que enviam instruções ao __AAPS__ à distância. Da mesma forma, o __AAPSClient__ também pode ser usado para monitorização remota, para seguir o __AAPS__ do seu parceiro ou de um amigo.

## Funções

- A bomba da criança é controlada pelo telefone da criança com o __AAPS__.
- Os cuidadores podem seguir à distância todos os dados importantes, como os níveis de glicose, os hidratos de carbono ativos, a insulina ativa, etc., com a **apk AAPSClient** no seu telefone Android (uma versão do **AAPSClient** para iPhone está em desenvolvimento, ver [AAPSClient](AapsClient.md)). As definições alteradas no __AAPS__ são sincronizadas com o __AAPSClient__ e vice-versa.
- Os cuidadores podem receber alarmes com a **app xDrip em modo de seguidor** no seu telefone Android, se o modo companion do xDrip estiver configurado.
- O controlo remoto do __AAPS__ com [Comandos SMS](../RemoteFeatures/SMSCommands.md) está protegido por autenticação de dois fatores.
- O controlo remoto através do __AAPSClient__ usa o canal de comandos assinados introduzido no **AAPS** 4: primeiro, o cliente tem de ser **emparelhado** com o telefone principal (com um código QR ou um PIN), e cada comando é confirmado e executado pelo telefone principal. O telefone de cada cuidador pode ter a sua própria [função](#client-master-control-roles), desde só leitura até controlo total — ver [Controlo principal ↔ cliente](#client-master-control).

## Ferramentas e aplicações para monitorização remota

- [Nightscout](https://nightscout.github.io/) no navegador web (sobretudo para mostrar dados).
- O [__AAPSClient__](AapsClient.md) é uma versão reduzida do __AAPS__ que consegue seguir o __AAPS__ principal e, depois de **emparelhado**, enviar comandos remotos: hidratos de carbono, __Alvos temporários__, __Trocas de perfil__ e até bólus (ver [Controlo principal ↔ cliente](#client-master-control)). Existem 3 apps: [AAPSClient, AAPSClient2 e AAPSClient3 para descarregar](https://github.com/nightscout/AndroidAPS/releases/), para que um cuidador possa seguir até três pessoas diferentes no mesmo telefone (por exemplo, duas crianças com diabetes tipo 1, cada uma com a sua conta Nightscout e o seu __AAPS__ principal).
- Dexcom Follow, se usar a app original da Dexcom (apenas valores de glicose).
- [xDrip](../CompatibleCgms/xDrip.md) em modo de seguidor (sobretudo valores de glicose e **alarmes**).
- [Sugarmate](https://sugarmate.io/) ou [Spike](https://spike-app.com/) no iOS (sobretudo valores de glicose e **alarmes**).
- Alguns utilizadores acham útil uma ferramenta de acesso remoto completo, como o [TeamViewer](https://www.teamviewer.com/), para resolver problemas avançados à distância.

## Opções de smartwatch

Um smartwatch pode ser uma ferramenta muito útil para ajudar a gerir o __AAPS__ em crianças com diabetes tipo 1. Há algumas opções possíveis:

- Opção 1 - Se o __AAPSClient__ estiver instalado no telefone do cuidador, a [app AAPSClient para WearOS](https://github.com/nightscout/AndroidAPS/releases/) pode ser instalada num smartwatch compatível ligado ao telefone do cuidador. Mostra a __glicose__ atual, o estado do loop e o histórico de bólus, e permite introduzir hidratos de carbono, __Alvos temporários__ e alterações de __Perfil__. Se o cliente estiver **emparelhado** com o telefone principal, o relógio também pode iniciar um **bólus**: o comando passa pelo cliente até ao telefone principal, que o confirma e o administra (ver [Controlo principal ↔ cliente](#client-master-control)).
- Opção 2 - A [app AAPS para WearOS](../WearOS/WearOsSmartwatch.md) também pode ser compilada e instalada num smartwatch compatível, ligado ao telefone da criança mas usado pelo cuidador. Inclui todas as funções acima e também permite dar bólus de insulina diretamente, sem ser preciso tirar o telefone à criança.
- Opção 3 - Só visualização: um relógio que o **AAPS** não suporta diretamente (Xiaomi, Amazfit ou um relógio Wear OS que mostra uma complicação) pode mostrar a glicose, a IA, os HCA e o estado do loop através de uma app complementar como WatchDrip+ ou GlucoDataHandler, alimentada pelo plugin **Aplicações externas complementares** do telefone com **AAPS** ou **AAPSClient** ao qual está ligado. Ver [Aplicações externas complementares](#watches-external-companion-apps).

## Aspetos a considerar

- Tenha em conta o atraso entre o telefone principal e o seguidor, devido ao tempo de envio e de descarga, e também ao facto de o telefone principal do __AAPS__ só enviar dados depois de o loop correr.
- Qual é o seu plano de emergência para quando o controlo remoto não funcionar (_por exemplo,_ problemas de rede ou perda da ligação Bluetooth)? Pense sempre no que acontece com o **AAPS** se, de repente, não conseguir enviar um novo comando. O **AAPS** substitui a basal, o FSI e o IHC da bomba pelos valores do perfil atual. Se mudar para um perfil de insulina mais forte, use apenas trocas de perfil temporárias (_ou seja,_ com uma duração definida), para o caso de a ligação remota falhar. Assim, a bomba volta ao perfil original quando o tempo terminar.
