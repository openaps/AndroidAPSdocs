# Setting up the Reporting Server

Neste momento existem dois servidores de relatórios que pode usar com o **AAPS**:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Servidores de relatórios](../images/Building-the-App/ReportingServer.png)

We recommend using Nightscout.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

O Nightscout é uma aplicação web que pode registar e mostrar os seus dados do CGM e do **AAPS** e criar relatórios. É uma plataforma poderosa, integrada no **AAPS** há muitos anos. It enables users and caregivers to track the patient's diabetes data in near real-time (only a few seconds may pass between data reception and data provision if there is a sufficient Internet connection between all components involved). Também transporta os comandos remotos que os cuidadores enviam para o **AAPS** a partir do **AAPSClient** (veja [Controlo principal ↔ cliente](#client-master-control)).

Nightscout is provided as open-source software. Anyone can create and operate a Nightscout server, using either free or paid-for services.

Pode encontrar mais informações no [site do projeto Nightscout](http://nightscout.github.io/).

### Option 1 - Set up your Nightscout server yourself

Creating your Nightscout reporting server can require one or more web-based applications that will require maintenance. In order to have a completely free service, you may need to migrate your Nightscout site and data, if and when providers remove the free tier.

Pode encontrar [aqui](https://nightscout.github.io/nightscout/new_user/#free-diy) uma descrição de como configurar o Nightscout, com as vantagens e desvantagens das várias opções de funcionamento e uma estimativa dos custos.

### Option 2 - Pay for a hosted Nightscout service

There are also options from different service providers who host Nightscout for you, with a monthly fee. The costs are manageable, and the advantage of a hosted option is that you do not need to be IT-literate, or have any operating infrastructure.


Existing Nightscout users can reconsider where and how their Nightscout server is hosted from time to time, and change to a different option if it becomes more suitable.

Alguns serviços de alojamento do Nightscout estão listados [aqui](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Further configuration of Nightscout

Quando a sua instância do Nightscout estiver a funcionar, veja a [página de configuração do Nightscout](../SettingUpAaps/Nightscout.md) para outras considerações.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

O Tidepool está disponível no **AAPS** desde a versão 3.2, lançada no final de 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger  
Como há um atraso de três horas entre a receção e a apresentação dos dados quando se usa o **AAPS**, o Tidepool não é adequado para partilhar informação em tempo real com os cuidadores.  
Por outro lado, o Tidepool pode ser uma ótima solução para partilhar relatórios com o endocrinologista do doente, se o Nightscout não for uma solução aceite.  
```

O Tidepool é um projeto [open source](https://github.com/tidepool-org). It offers to run an account free of charge on the Tidepool servers.

Mais informações sobre como configurar o Tidepool com o AAPS [aqui](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has the uploader for Tidepool integrated
:class: note
**Não** precisa de usar a app de envio (uploader) do Tidepool: o **AAPS** envia por si a glicose, os tratamentos e a basal. Só precisa de uma conta pessoal no Tidepool. Não envie os seus dados com a ferramenta separada Tidepool uploader, porque isso cria valores duplicados.  
```

## Next step

Depois de configurar o seu servidor de relatórios, pode configurar o **AAPS** no seu telefone com o [Assistente de Configuração](./SetupWizard.md), que também liga o **AAPS** ao seu servidor de relatórios.