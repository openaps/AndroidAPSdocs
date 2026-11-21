# Configurar o servidor de relatórios

Neste momento existem dois servidores de relatórios que pode usar com o **AAPS**:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Servidores de relatórios](../images/Building-the-App/ReportingServer.png)

Recomendamos o Nightscout.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

O Nightscout é uma aplicação web que pode registar e mostrar os seus dados do CGM e do **AAPS** e criar relatórios. É uma plataforma poderosa, integrada no **AAPS** há muitos anos. Permite aos utilizadores e aos cuidadores seguir os dados da diabetes do doente quase em tempo real (com uma boa ligação à Internet entre todos os componentes, passam só alguns segundos entre a receção dos dados e a sua disponibilização). Também transporta os comandos remotos que os cuidadores enviam para o **AAPS** a partir do **AAPSClient** (veja [Controlo principal ↔ cliente](#client-master-control)).

O Nightscout é software open source. Qualquer pessoa pode criar e gerir um servidor Nightscout, com serviços gratuitos ou pagos.

Pode encontrar mais informações no [site do projeto Nightscout](http://nightscout.github.io/).

### Opção 1 – Configurar o seu servidor Nightscout por si próprio

Criar o seu servidor de relatórios Nightscout pode exigir uma ou mais aplicações web que precisam de manutenção. Para ter um serviço totalmente gratuito, pode ter de migrar o seu site Nightscout e os seus dados se os fornecedores deixarem de ter um plano gratuito.

Pode encontrar [aqui](https://nightscout.github.io/nightscout/new_user/#free-diy) uma descrição de como configurar o Nightscout, com as vantagens e desvantagens das várias opções de funcionamento e uma estimativa dos custos.

### Opção 2 – Pagar um serviço Nightscout alojado

Também há fornecedores de serviços que alojam o Nightscout por si, com uma mensalidade. Os custos são razoáveis. A vantagem de uma opção alojada é que não precisa de conhecimentos de informática nem de manter nenhuma infraestrutura.


Quem já usa o Nightscout pode, de vez em quando, rever onde e como o seu servidor Nightscout está alojado e mudar para outra opção, se for mais adequada.

Alguns serviços de alojamento do Nightscout estão listados [aqui](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Configuração adicional do Nightscout

Quando a sua instância do Nightscout estiver a funcionar, veja a [página de configuração do Nightscout](../SettingUpAaps/Nightscout.md) para outras considerações.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

O Tidepool está disponível no **AAPS** desde a versão 3.2, lançada no final de 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger
Como existe um atraso de três horas entre a receção e a apresentação dos dados com o **AAPS**, o Tidepool não é adequado para partilhar informação em tempo real com os cuidadores.  
Por outro lado, o Tidepool pode ser uma ótima solução para partilhar relatórios com o endocrinologista do doente, se o Nightscout não for uma solução aceite.  
```

O Tidepool é um projeto [open source](https://github.com/tidepool-org). Permite ter uma conta gratuita nos servidores do Tidepool.

Mais informações sobre como configurar o Tidepool com o AAPS [aqui](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has the uploader for Tidepool integrated
:class: note
**Não** precisa de usar a app de envio (uploader) do Tidepool: o **AAPS** envia por si a glicose, os tratamentos e a basal. Só precisa de uma conta pessoal no Tidepool. Não envie os seus dados com a ferramenta separada Tidepool uploader, porque isso cria valores duplicados.  
```

## Próximo passo

Depois de configurar o seu servidor de relatórios, pode configurar o **AAPS** no seu telefone com o [Assistente de Configuração](./SetupWizard.md), que também liga o **AAPS** ao seu servidor de relatórios.