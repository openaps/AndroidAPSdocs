
# Notas de versão

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Siga as instruções do [manual de atualização](UpdateToNewVersion.md) para atualizar para uma nova versão. A seção de resolução de problemas na página do manual de atualização também trata das dificuldades mais comuns ao atualizar o **AAPS**.

```{admonition} Upgrading from AAPS v3?
:class: tip
Veja [O que mudou no AAPS v4](V4Changes.md) para as mudanças importantes de comportamento: recursos que foram movidos, renomeados ou removidos.
```

Você vai receber uma notificação como esta quando houver uma nova atualização disponível:

![Informações sobre a atualização](../images/AAPS_LoopDisable90days.png)

Se você não atualizar até a data de expiração, o **AAPS** vai mudar para Loop Aberto.

Veja [Fim da vida útil](EndOfLife.md) para as datas de término das versões do AAPS.

**Não ignore a notificação.** As novas versões do **AAPS** trazem correções de segurança importantes. Por isso, todo usuário do **AAPS** precisa atualizar para a versão mais recente o mais rápido possível. Isso é um esforço para tentar melhorar a segurança de cada usuário do **AAPS** e da comunidade DIY. Obrigado pela compreensão.

(maintenance-android-version-aaps-version)=

## Versão do Android e versão do AAPS

Se o seu smartphone usa uma versão do Android anterior ao Android 12, você não vai poder usar o AAPS v3.4 ou superior, porque ele precisa de pelo menos o Android 12.

Para permitir que usuários com Android mais antigo usem versões mais antigas do AAPS, foram lançadas novas versões que mudam apenas a verificação de versão. Nenhuma outra melhoria está incluída.

Encontre a sua versão do Android na tabela abaixo e use a versão correspondente do **AAPS**. O código é baixado de <https://github.com/nightscout/AndroidAPS> usando a branch mostrada.

| Sua versão do Android  | Versão do AAPS a usar | Branch a baixar                                                  |
| ---------------------- | --------------------- | ---------------------------------------------------------------- |
| Android 12 ou superior | Versão mais recente   | [master](https://github.com/nightscout/AndroidAPS) (padrão)      |
| Android 11             | **3.3.2.1**           | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1) |
| Android 9, 10          | **3.2.0.4**           | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4) |
| Android 8              | **2.8.2.1**           | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1) |
| Android 7              | **2.6.2**             | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)     |

## Versão para WearOS

- O AAPS precisa do WearOS 3.0, 3.2 ou 3.5 (Android 11, nível de API 30) ou mais recente. Relógios com WearOS 2 não são suportados.

```{tip}
WearOS 5, nível de API 34 (Android 14) tem [limitações](#BuildingAapsWearOs-WearOS5).
```

**Release notes of the latest version of each major release**. For all other versions, see the [releases on GitHub](https://github.com/nightscout/AndroidAPS/releases).

(latestrelease)=

(version400)=

**Versão 4.0.0**

Data de lançamento: 31-10-2026

**Novos recursos**

- Nova interface do usuário: app do telefone refeito em Jetpack Compose @MilosKozak
- [Pesquisa global](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Migração para Kotlin Multiplatform, cliente para desktop Windows, Mac, Linux e para iOS @MilosKozak
- [Cenários](../DailyLifeWithAaps/Scenes.md): salve um conjunto de ações e execute todas juntas @MilosKozak
- [Controle dispositivo principal ↔ cliente](../RemoteFeatures/ClientMasterControl.md): envie comandos de um telefone cliente para o dispositivo principal @MilosKozak
  - [Funções dos clientes](#client-master-control-roles): Somente leitura, Refeições, Cuidador ou Admin para cada cliente @MilosKozak
  - [Modo reforçado](#client-master-control-hardened-mode): com o controle do cliente ativado, o dispositivo principal aceita alterações apenas de clientes pareados @MilosKozak
  - Pareamento com um código QR, que também configura o Nightscout no cliente, ou com um PIN; o segredo de pareamento é trocado logo após o pareamento @MilosKozak
  - [Token próprio do Nightscout](#client-master-control-own-token) para cada cliente, apenas com as permissões que o cliente precisa @MilosKozak
- Suporte à [concentração de insulina](../AdvancedOptions/InsulinConcentration.md) (U200, U500) em bombas, calculadora e perfis @Philoul @MilosKozak
- Gerenciamento de insulinas: catálogo de insulinas, apelidos, seleção no perfil e na calculadora @Philoul
- Plugin de calibração @MilosKozak
- [Suavização](../CompatibleCgms/SmoothingBloodGlucoseData.md): Filtro de Kalman Unscented (UKF) @piecycle
- New [automation actions](#automations-automation-action): **Change smoothing** @olorinmaia, and **Run**, **Enable** or **Disable scene** @MilosKozak
- [Rotação do local](#Aapsscreens-site-rotation): registre e alterne os locais de infusão @Philoul @MilosKozak
- Reformulação do [Autotune](../AdvancedOptions/Autotune.md) @Philoul
- Novos [widgets](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Acessibilidade: o app do telefone funciona com leitor de tela - controles com nome, status falado, descrições dos gráficos e títulos para navegar rápido @MilosKozak
- [Importação de configurações](../Maintenance/ExportImportSettings.md): pode manter as configurações da bomba @MilosKozak
- A notificação permanente usa as atualizações ao vivo (live updates) do Android, com suporte à Now bar da Samsung e ao delta @premnirmal
- Gráfico de glicose: [toque e segure](#aaps-screens-graph-press-and-hold) para ver os valores de uma leitura, em todos os gráficos da tela principal @t1dude @olorinmaia
- Melhorias de desempenho @MilosKozak
- e-carbs automáticos no Assistente de Bólus @MilosKozak

**Novos dispositivos**

- **CareLevo**: novo [driver de bomba](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: suporte @MilosKozak
- **Instara**: nova fonte de CGM @leohunt

**Melhorias nos drivers de bomba**

- Telas de visão geral das bombas refeitas para Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn e Equil @MilosKozak
- **Omnipod Dash**: códigos Ref no estilo do PDM e descrições de falhas fáceis de ler, compensação de desvio (drift) sempre ligada, melhor registro do tipo de bólus @nl-ruud
- **Omnipod**: data final fixa para Dash e Eros @mcnelson
- **DanaR, RS**: emulador de bomba para testes @MilosKozak
- **Equil**: emulador de bomba para testes @MilosKozak
- Muitas correções de bombas e do loop @MilosKozak e outros

**Wear OS**

- [App do relógio](../WearOS/WearOsSmartwatch.md) refeito em Compose, novos blocos e complicações, instalação automática do mostrador (Watch Face Push) no Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface disponível para WearOS 6.0 (GW7, GW8, GW9...) com um mostrador WFF dedicado @Philoul @olorinmaia
- O CustomWatchface agora pode incluir 5 espaços de complicação personalizáveis (recurso novo disponível apenas para relógios mais antigos) @Philoul
- Novo [mostrador WFF baseado nas complicações do AAPS](#wearos-complications-watchface-setup) @olorinmaia
- Correções no resultado do Assistente de Bólus e do Assistente rápido @olorinmaia
- Novo gráfico de glicose e nova atividade de Modo de operação no menu principal @olorinmaia
- Assistente de Bólus: página [Tipo de refeição](#WearOsSmartwatch-wizard-meal-type), que divide os carboidratos como a calculadora do telefone, e [tempo dos carboidratos](#WearOsSmartwatch-wizard-carb-time) com o lembrete *Hora de comer* no relógio @olorinmaia
- [Alarmes do telefone no relógio](#WearOsSmartwatch-phone-alarms): o relógio mostra o alarme e oferece Silenciar e Silenciar 5 min @olorinmaia

**Compilação**

- Workflows de CI para compilações por tag/branch, mapeamento da versão do JDK @Angus-repo

**Colaboradores**

@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Lista completa de mudanças: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

---

(version3426)=

**Versão 3.4.2.6**

- Equil: estabilidade melhorada @MilosKozak

---

(version3321)=

**Versão 3.3.2.1**

Data de lançamento: 13-08-2025

- Corrigida a conexão Bluetooth do Omnipod no Android 16
- Processo de CI (Compilação no navegador)
- Corrigida a conversão mmol-mgdl
- Corrigida a seleção de hora errada nos diálogos em alguns fusos horários
- Corrigida a leitura de chaves no modo simples
- Corrigidas previsões que faltavam no Wear
- Configuração melhorada
- Sincronização completa do NSCv3 melhorada

---

(version3300)=

**Versão 3.3.2.0**

Data de lançamento: 27-03-2025

**Como atualizar**

* É necessária a [versão do Android Studio chamada "Meerkat"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) ou superior para compilar esta versão. Se você já compilou uma versão 3.3.x, precisa atualizar o Android Studio de novo.

(version-enforcement)=

**A partir desta versão, as notificações e a obrigatoriedade de versão foram simplificadas e suavizadas e funcionam assim:**

*  Sem expiração quando o dispositivo está offline (sem conexão com a internet). Isso significa que não há mais os períodos de tolerância de 60 e 90 dias.
*  Após a expiração, o modo LGS é imposto
*  Você vai receber avisos/notificações com menos frequência:
   - 28 ou mais dias restantes: a cada 7 dias
   - 27–14 dias restantes: a cada 3 dias
   - depois, uma vez por dia
   - A notificação é gerada depois do meio-dia, para não incomodar você à noite
* Existem apenas 2 tipos de notificação
   - Nova versão disponível (não tem efeito no AAPS)
   - O aplicativo vai expirar em uma data futura (ainda sem efeito no AAPS) / expirou (o AAPS passa para o modo LGS)

Other changes: [release notes on GitHub](https://github.com/nightscout/AndroidAPS/releases/tag/3.3.2.0).

---

(version3204)=

**[Versão 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)**

Data de lançamento: 27-02-2024

Esta é a última versão que suporta o Android 10. Se você não pode atualizar para o Android 11, [atualize o AAPS para a 3.2.0.4](#update-aaps-3204).

**Mudanças**

- Suporte ao G7 via xDrip
- Correções do Medtrum
- Correção do ícone de Automação
- Correção para passar o objetivo 1

---

**Versão 2.8.2**

Data de lançamento: 23-01-2021

[Notas de versão](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

---

**Versão 1.0**

```{admonition} First version of **AAPS**
:class: note

A primeira versão de teste começou em 2015, e o primeiro lançamento foi em 2016.

A cronologia exata desses lançamentos não está disponível no momento, mas, como essa pergunta já foi feita várias vezes, nós a documentamos aqui.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
