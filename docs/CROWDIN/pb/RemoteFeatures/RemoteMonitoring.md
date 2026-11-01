# Monitoramento Remoto

![Monitoramento de crianças](../images/KidsMonitoring.png)

O __AAPS__ oferece vários recursos para o monitoramento remoto de crianças com diabetes tipo 1 e também permite comandos remotos, que enviam instruções ao __AAPS__ a distância. Da mesma forma, o __AAPSClient__ também pode ser usado para o monitoramento remoto, para seguir o __AAPS__ do seu parceiro ou amigo.

## Funções

- A bomba da criança é controlada pelo telefone da criança com o __AAPS__.
- Os cuidadores podem acompanhar a distância todos os dados importantes, como os níveis de glicose, os carboidratos ativos, a insulina ativa etc., com o **apk do AAPSClient** no seu telefone Android (uma versão do **AAPSClient** para iPhone está em desenvolvimento, veja [AAPSClient](AapsClient.md)). As configurações alteradas no __AAPS__ são sincronizadas com o __AAPSClient__ e vice-versa.
- Os cuidadores podem receber alarmes com o **app xDrip no modo seguidor** no seu telefone Android, se o modo companheiro do xDrip estiver configurado.
- O controle remoto do __AAPS__ com os [Comandos SMS](../RemoteFeatures/SMSCommands.md) é protegido por autenticação de dois fatores.
- O controle remoto pelo __AAPSClient__ usa o canal de comandos assinados que surgiu no **AAPS** 4: primeiro, o cliente precisa ser **pareado** com o dispositivo principal (com um código QR ou um PIN), e cada comando é confirmado e executado pelo dispositivo principal. O telefone de cada cuidador pode ter a sua própria [função](#client-master-control-roles), de somente leitura até controle total — veja [Controle dispositivo principal ↔ cliente](#client-master-control).

## Ferramentas e aplicativos para monitoramento remoto

- [Nightscout](https://nightscout.github.io/) no navegador web (principalmente para mostrar dados).
- O [__AAPSClient__](AapsClient.md) é uma versão reduzida do __AAPS__ que pode seguir o __AAPS__ do dispositivo principal e, depois de **pareado**, enviar comandos remotos: carboidratos, __Alvos temporários__, __Trocas de perfil__ e até bólus (veja [Controle dispositivo principal ↔ cliente](#client-master-control)). Existem 3 apps: [AAPSClient, AAPSClient2 e AAPSClient3 para baixar](https://github.com/nightscout/AndroidAPS/releases/), assim um cuidador pode seguir até três pessoas diferentes no mesmo telefone (por exemplo, duas crianças com diabetes tipo 1, cada uma com a sua própria conta do Nightscout e o seu próprio __AAPS__ no dispositivo principal).
- Dexcom Follow, se você usa o app original da Dexcom (somente valores de glicose).
- [xDrip](../CompatibleCgms/xDrip.md) no modo seguidor (principalmente valores de glicose e **alarmes**).
- [Sugarmate](https://sugarmate.io/) ou [Spike](https://spike-app.com/) no iOS (principalmente valores de glicose e **alarmes**).
- Alguns usuários consideram uma ferramenta de acesso remoto completa, como o [TeamViewer](https://www.teamviewer.com/), útil para solução de problemas remotos avançados.

## Opções de smartwatch

Um smartwatch pode ser uma ferramenta muito útil para ajudar a gerenciar o __AAPS__ de crianças com DM1. Existem algumas opções diferentes:

- Opção 1 - Se o __AAPSClient__ estiver instalado no telefone do cuidador, o [app AAPSClient para WearOS](https://github.com/nightscout/AndroidAPS/releases/) pode ser instalado em um smartwatch compatível conectado ao telefone do cuidador. Ele mostra a __glicose__ atual, o status do loop e o histórico de bólus, e permite inserir carboidratos e alterar __Alvos temporários__ e o __Perfil__. Se o cliente estiver **pareado** com o dispositivo principal, o relógio também pode iniciar um **bólus**: o comando passa pelo cliente até o dispositivo principal, que o confirma e aplica (veja [Controle dispositivo principal ↔ cliente](#client-master-control)).
- Opção 2 - O [app AAPS para WearOS](../WearOS/WearOsSmartwatch.md) também pode ser compilado e instalado em um smartwatch compatível, conectado ao telefone da criança, mas usado pelo cuidador. Isso inclui todas as funções listadas acima e também a possibilidade de aplicar bólus de insulina diretamente, sem precisar tirar o telefone da criança.
- Opção 3 - Somente exibição: um relógio que o **AAPS** não suporta diretamente (Xiaomi, Amazfit ou um relógio Wear OS que mostra uma complicação) pode mostrar a glicose, o IOB, o COB e o status do loop por meio de um app companheiro, como o WatchDrip+ ou o GlucoDataHandler, alimentado pelo plugin **Apps companheiros externos** do telefone com **AAPS** ou **AAPSClient** ao qual ele está conectado. Veja [Apps companheiros externos](#watches-external-companion-apps).

## Pontos a considerar

- Considere o atraso entre o dispositivo principal e o seguidor, causado pelo tempo de envio e de download, e também o fato de que o telefone principal com __AAPS__ só envia os dados depois que o loop roda.
- Qual é o seu plano de emergência para quando o controle remoto não funcionar (_por exemplo,_ problemas de rede ou perda da conexão Bluetooth)? Sempre pense no que vai acontecer com o **AAPS** se, de repente, você não puder enviar um novo comando. O **AAPS** sobrescreve a basal, o ISF e o IC da bomba com os valores do perfil atual. Se você trocar para um perfil de insulina mais forte, use apenas trocas de perfil temporárias (_ou seja,_ com uma duração definida), para o caso de a sua conexão remota cair. Assim, a bomba volta ao perfil original quando o tempo acabar.
