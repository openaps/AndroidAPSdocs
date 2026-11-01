# Configurar o servidor de relatórios

Atualmente, há dois servidores de relatórios que você pode usar com o **AAPS**:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Servidores de relatórios](../images/Building-the-App/ReportingServer.png)

We recommend using Nightscout.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

O Nightscout é uma aplicação web que pode registrar e mostrar os dados do seu CGM e os dados do **AAPS**, e também cria relatórios. É uma plataforma poderosa, integrada ao **AAPS** há muitos anos. It enables users and caregivers to track the patient's diabetes data in near real-time (only a few seconds may pass between data reception and data provision if there is a sufficient Internet connection between all components involved). Ele também transporta os comandos remotos que os cuidadores enviam ao **AAPS** a partir do **AAPSClient** (veja [Controle dispositivo principal ↔ cliente](#client-master-control)).

Nightscout is provided as open-source software. Anyone can create and operate a Nightscout server, using either free or paid-for services.

Você encontra mais informações no [site do projeto Nightscout](http://nightscout.github.io/).

### Option 1 - Set up your Nightscout server yourself

Creating your Nightscout reporting server can require one or more web-based applications that will require maintenance. In order to have a completely free service, you may need to migrate your Nightscout site and data, if and when providers remove the free tier.

Uma descrição de como configurar o Nightscout, com as vantagens e desvantagens das várias opções de operação e uma estimativa dos custos, pode ser encontrada [aqui](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Option 2 - Pay for a hosted Nightscout service

There are also options from different service providers who host Nightscout for you, with a monthly fee. The costs are manageable, and the advantage of a hosted option is that you do not need to be IT-literate, or have any operating infrastructure.


Existing Nightscout users can reconsider where and how their Nightscout server is hosted from time to time, and change to a different option if it becomes more suitable.

Alguns serviços de hospedagem do Nightscout estão listados [aqui](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Further configuration of Nightscout

Quando a sua instância do Nightscout estiver funcionando, veja a [página de configuração do Nightscout](../SettingUpAaps/Nightscout.md) para mais pontos a considerar.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

O Tidepool está disponível no **AAPS** desde a versão 3.2, lançada no final de 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger  
Como há um atraso de três horas entre a chegada dos dados e o relatório quando você usa o **AAPS**, o Tidepool não é adequado para compartilhar informações em tempo real com cuidadores.  
Por outro lado, o Tidepool pode ser uma ótima solução para compartilhar relatórios com o endocrinologista do paciente, se o Nightscout não for uma solução aceita.  
```

O Tidepool é um projeto [de código aberto](https://github.com/tidepool-org). It offers to run an account free of charge on the Tidepool servers.

Mais informações sobre como configurar o Tidepool com o AAPS [aqui](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has the uploader for Tidepool integrated
:class: note
Você **não** precisa usar o app de envio (uploader) do Tidepool: o **AAPS** envia a glicose, os tratamentos e a basal por você. Você só precisa de uma conta pessoal no Tidepool. Não envie seus dados com a ferramenta separada de envio do Tidepool (Tidepool uploader), porque isso cria valores duplicados.  
```

## Next step

Depois de configurar o seu servidor de relatórios, você pode configurar o **AAPS** no seu telefone com o [Assistente de configuração do AAPS](./SetupWizard.md), que também conecta o **AAPS** ao seu servidor de relatórios.