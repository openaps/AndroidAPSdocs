# Android Auto

O **AAPS** pode enviar informações sobre o seu status atual como mensagem, diretamente para o Android Auto no seu carro.

## Requisitos

O **AAPS** usa um recurso do Android Auto que permite enviar mensagens de apps do celular para a tela do sistema de som do carro.

Isso significa que:

* O Android precisa permitir que o **AAPS** mostre notificações e
* Como o **AAPS** é um app não oficial, permita o uso de "unknown sources" (fontes desconhecidas) no Android Auto.

![Dados do CGM do AAPS no Android Auto](../images/android_auto_01.png)

(androidauto-check-that-aaps-can-show-notifications)=

## Verificar se o AAPS pode mostrar notificações

O **AAPS** sempre mostra uma notificação de status com a sua glicose atual, IOB e COB. Esta é a notificação que o Android Auto mostra no carro. Não há nada para ativar no **AAPS**, mas o Android precisa permitir que o **AAPS** mostre notificações.

No seu telefone, abra **Settings** (Configurações) > **Apps** > **AAPS** > **Notifications** (Notificações) e verifique se **All AAPS notifications** (Todas as notificações do AAPS) está ativado.

![Todas as notificações do AAPS ativadas](../images/android_auto_notifications_all.png)

Role para baixo e verifique se **Status contínuo** está ativado: este é o canal da notificação de status.

![Canal de notificação Status contínuo ativado](../images/android_auto_ongoing_channel.png)

Verifique agora se você vê a notificação de status do **AAPS** no telefone antes de ir até o carro!

![Notificação do AAPS no telefone](../images/android_auto_04.png)

(androidauto-allow-the-use-of-unknown-sources-with-android-auto)=

## Permitir o uso de "unknown sources" (fontes desconhecidas) no Android Auto.

Como o **AAPS** não é um app oficial do Android Auto, as notificações precisam ser ativadas para "unknown sources" (fontes desconhecidas) no Android Auto. Isso é feito com o modo de desenvolvedor, que mostramos aqui.

Vá até o seu carro e conecte o celular ao sistema de som do carro.

Agora você deve ver uma tela parecida com esta.

![Ativar o modo de desenvolvedor](../images/android_auto_05.png)

Toque no ícone de **configurações** para começar a configuração.

Role até o fim da página e selecione **see more in the phone** (ver mais no telefone).

![Ativar o modo de desenvolvedor](../images/android_auto_06.png)

Agora vamos ativar o modo de desenvolvedor no celular.

A primeira tela é assim. Role até o fim da página.

![Ativar o modo de desenvolvedor](../images/android_auto_07.png)

Lá você vê a versão do Android Auto. Toque 10 vezes (dez vezes) na versão do Android Auto. Com essa combinação oculta, você ativou o modo de desenvolvedor.

![Ativar o modo de desenvolvedor](../images/android_auto_08.png)

Confirme que você quer ativar o modo de desenvolvedor na janela "Allow development settings?" (Permitir configurações do desenvolvedor?).

![Ativar o modo de desenvolvedor](../images/android_auto_09.png)

Em **developer settings** (configurações do desenvolvedor), ative "Unknown sources" (fontes desconhecidas).

![Ativar o modo de desenvolvedor](../images/android_auto_10.png)

Agora você pode sair do modo de desenvolvedor, se quiser. Para isso, toque no menu de três pontos no canto superior direito.

## Mostrar notificações no carro

Toque no **ícone de número** no canto inferior direito do Android Auto no seu carro.

![ícone de número - Android Auto no carro](../images/android_auto_11.png)

Seus dados do CGM serão mostrados assim:

![Dados do CGM do AAPS no Android Auto](../images/android_auto_01.png)

(android-auto-troubleshooting)=

## Resolução de problemas:

* Se você não vir a notificação, verifique se você [permitiu que o AAPS mostre notificações](#androidauto-check-that-aaps-can-show-notifications) no Android e se o [Android Auto tem acesso às notificações](#androidauto-allow-the-use-of-unknown-sources-with-android-auto).