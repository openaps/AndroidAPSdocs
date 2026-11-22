# Configurar o servidor de relatórios

Atualmente, há dois servidores de relatórios que você pode usar com o **AAPS**:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Servidores de relatórios](../images/Building-the-App/ReportingServer.png)

Recomendamos usar o Nightscout.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

O Nightscout é uma aplicação web que pode registrar e mostrar os dados do seu CGM e os dados do **AAPS**, e também cria relatórios. É uma plataforma poderosa, integrada ao **AAPS** há muitos anos. Ele permite que usuários e cuidadores acompanhem os dados do diabetes do paciente quase em tempo real (só alguns segundos podem passar entre o recebimento dos dados e a sua disponibilização, se houver uma conexão de internet suficiente entre todos os componentes envolvidos). Ele também transporta os comandos remotos que os cuidadores enviam ao **AAPS** a partir do **AAPSClient** (veja [Controle dispositivo principal ↔ cliente](#client-master-control)).

O Nightscout é um software de código aberto. Qualquer pessoa pode criar e operar um servidor Nightscout, usando serviços gratuitos ou pagos.

Você encontra mais informações no [site do projeto Nightscout](http://nightscout.github.io/).

### Opção 1 - Configure você mesmo o seu servidor Nightscout

Criar o seu servidor de relatórios Nightscout pode exigir um ou mais aplicativos web que vão precisar de manutenção. Para ter um serviço totalmente gratuito, talvez você precise migrar o seu site e os seus dados do Nightscout, se e quando os provedores acabarem com o plano gratuito.

Uma descrição de como configurar o Nightscout, com as vantagens e desvantagens das várias opções de operação e uma estimativa dos custos, pode ser encontrada [aqui](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Opção 2 - Pague por um serviço Nightscout hospedado

Também há opções de diferentes provedores que hospedam o Nightscout para você, por uma taxa mensal. Os custos são acessíveis, e a vantagem de uma opção hospedada é que você não precisa ter conhecimentos de informática nem ter nenhuma infraestrutura própria.


Quem já usa o Nightscout pode, de tempos em tempos, repensar onde e como o seu servidor Nightscout está hospedado e mudar para outra opção, se ela for mais adequada.

Alguns serviços de hospedagem do Nightscout estão listados [aqui](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Outras configurações do Nightscout

Quando a sua instância do Nightscout estiver funcionando, veja a [página de configuração do Nightscout](../SettingUpAaps/Nightscout.md) para mais pontos a considerar.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

O Tidepool está disponível no **AAPS** desde a versão 3.2, lançada no final de 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger
Como há um atraso de três horas entre o recebimento dos dados e a disponibilização dos relatórios ao usar o **AAPS**, o Tidepool não é adequado para compartilhar informações em tempo real com cuidadores.  
Por outro lado, o Tidepool pode ser uma ótima solução para compartilhar relatórios com o endocrinologista do paciente, se o Nightscout não for uma solução aceita.  
```

O Tidepool é um projeto [de código aberto](https://github.com/tidepool-org). Ele permite manter uma conta gratuita nos servidores do Tidepool.

Mais informações sobre como configurar o Tidepool com o AAPS [aqui](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has the uploader for Tidepool integrated
:class: note
Você **não** precisa usar o app de envio (uploader) do Tidepool: o **AAPS** envia a glicose, os tratamentos e a basal por você. Você só precisa de uma conta pessoal no Tidepool. Não envie seus dados com a ferramenta separada de envio do Tidepool (Tidepool uploader), porque isso cria valores duplicados.  
```

## Próximo passo

Depois de configurar o seu servidor de relatórios, você pode configurar o **AAPS** no seu telefone com o [Assistente de configuração do AAPS](./SetupWizard.md), que também conecta o **AAPS** ao seu servidor de relatórios.