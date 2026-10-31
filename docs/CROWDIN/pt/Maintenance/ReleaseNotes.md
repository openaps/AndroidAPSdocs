
# Notas das Versões

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Para atualizar para uma nova versão, siga as instruções do [manual de atualização](UpdateToNewVersion.md). A secção de resolução de problemas da página do manual de atualização também trata as dificuldades mais comuns ao atualizar o **AAPS**.

```{admonition} Upgrading from AAPS v3?
:class: tip
Veja [O que mudou no AAPS v4](V4Changes.md) para as alterações de comportamento mais importantes: funcionalidades que mudaram de lugar, mudaram de nome ou foram removidas.
```

Quando houver uma nova atualização disponível, vai receber uma notificação como esta:

![Informação sobre a atualização](../images/AAPS_LoopDisable90days.png)

Se não atualizar até à data de expiração, o **AAPS** muda para Loop aberto.

Veja [Fim de vida](EndOfLife.md) para as datas de fim das versões do AAPS.

**Não ignore a notificação.** As novas versões do **AAPS** trazem correções de segurança importantes. Por isso, todos os utilizadores do **AAPS** têm de atualizar para a versão mais recente o mais depressa possível. É um esforço para tentar melhorar a segurança de cada utilizador do **AAPS** e da comunidade DIY. Obrigado pela sua compreensão.

(maintenance-android-version-aaps-version)=

## Versão do Android e versão do AAPS

Se o seu smartphone usar uma versão do Android anterior ao Android 12, não vai poder usar o AAPS v3.4 e superior, porque este precisa de pelo menos o Android 12.

Para permitir que utilizadores com versões antigas do Android usem versões antigas do AAPS, foram publicadas novas versões que só alteram a verificação da versão. Não foram incluídas outras melhorias.

Encontre a sua versão do Android na tabela abaixo e use a versão do **AAPS** correspondente. O código é transferido de <https://github.com/nightscout/AndroidAPS> usando o branch indicado.

| A sua versão do Android | Versão do AAPS a usar | Branch a transferir                                              |
| ----------------------- | --------------------- | ---------------------------------------------------------------- |
| Android 12 e superior   | Versão mais recente   | [master](https://github.com/nightscout/AndroidAPS) (predefinido) |
| Android 11              | **3.3.2.1**           | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1) |
| Android 9, 10           | **3.2.0.4**           | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4) |
| Android 8               | **2.8.2.1**           | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1) |
| Android 7               | **2.6.2**             | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)     |

## Versão WearOS

- O AAPS precisa do WearOS 3.0, 3.2 ou 3.5 (Android 11, nível de API 30) ou mais recente. Os relógios WearOS 2 não são suportados.

```{tip}
O WearOS 5, nível de API 34 (Android 14), tem [limitações](#BuildingAapsWearOs-WearOS5).
```

**Release notes of the latest version of each major release**. For all other versions, see the [releases on GitHub](https://github.com/nightscout/AndroidAPS/releases).

(latestrelease)=

(version400)=

**Versão 4.0.0**

Data de lançamento: 31-10-2026

**Novas funcionalidades**

- Nova interface: a app do telefone foi reconstruída em Jetpack Compose @MilosKozak
- [Pesquisa global](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Migração para Kotlin Multiplatform, cliente para Windows, Mac, Linux (computador) e iOS @MilosKozak
- [Cenas](../DailyLifeWithAaps/Scenes.md): guardar um conjunto de ações e executá-las em conjunto @MilosKozak
- [Controlo principal ↔ cliente](../RemoteFeatures/ClientMasterControl.md): enviar comandos de um telefone cliente para o principal @MilosKozak
  - [Funções dos clientes](#client-master-control-roles): Só leitura, Refeições, Cuidador ou Admin para cada cliente @MilosKozak
  - [Modo reforçado](#client-master-control-hardened-mode): com o controlo pelos clientes ativo, o principal só aceita alterações de clientes emparelhados @MilosKozak
  - Emparelhamento com um código QR, que também configura o Nightscout no cliente, ou com um PIN; o segredo de emparelhamento é substituído logo após o emparelhamento @MilosKozak
  - [Token próprio do Nightscout](#client-master-control-own-token) para cada cliente, só com os direitos de que o cliente precisa @MilosKozak
- Suporte da [concentração da insulina](../AdvancedOptions/InsulinConcentration.md) (U200, U500) nas bombas, no assistente e nos perfis @Philoul @MilosKozak
- Gestão das insulinas: catálogo de insulinas, nomes curtos, seleção no perfil e no assistente @Philoul
- Plugin de calibração @MilosKozak
- [Suavização](../CompatibleCgms/SmoothingBloodGlucoseData.md): Unscented Kalman Filter (UKF) @piecycle
- New [automation actions](#automations-automation-action): **Change smoothing** @olorinmaia, and **Run**, **Enable** or **Disable scene** @MilosKozak
- [Rotação dos locais](#Aapsscreens-site-rotation): registar e rodar os locais de infusão @Philoul @MilosKozak
- Revisão do [Autoajuste](../AdvancedOptions/Autotune.md) @Philoul
- Novos [widgets](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Acessibilidade: a app do telefone funciona com um leitor de ecrã - controlos com nome, estado falado, descrições dos gráficos e cabeçalhos para navegar depressa @MilosKozak
- [Importação das definições](../Maintenance/ExportImportSettings.md): pode manter as definições da bomba @MilosKozak
- A notificação permanente usa as atualizações em direto do Android, com suporte da Now bar da Samsung e do delta @premnirmal
- Gráfico da glicose: [manter premido](#aaps-screens-graph-press-and-hold) para ver os valores numa leitura, em todos os gráficos da visão geral @t1dude @olorinmaia
- Melhorias de desempenho @MilosKozak
- eCarbs automáticos no Assistente de Bólus @MilosKozak

**Novos dispositivos**

- **CareLevo**: novo [controlador da bomba](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: suporte @MilosKozak
- **Instara**: nova fonte CGM @leohunt

**Melhorias nos controladores das bombas**

- Ecrãs de visão geral das bombas reconstruídos para Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn e Equil @MilosKozak
- **Omnipod Dash**: códigos Ref como no PDM e descrições de falhas legíveis, compensação do desvio sempre ativa, melhor informação sobre o tipo de bólus @nl-ruud
- **Omnipod**: data de fim fixa para Dash e Eros @mcnelson
- **DanaR, RS**: emulador da bomba para testes @MilosKozak
- **Equil**: emulador da bomba para testes @MilosKozak
- Muitas correções nas bombas e no loop @MilosKozak e outros

**Wear OS**

- [App do relógio](../WearOS/WearOsSmartwatch.md) reconstruída em Compose, novos mosaicos e complicações, instalação automática da watchface (Watch Face Push) no Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface disponível para WearOS 6.0 (GW7, GW8, GW9...) com uma watchface WFF própria @Philoul @olorinmaia
- A CustomWatchface pode agora incluir 5 espaços para complicações que pode personalizar (nova funcionalidade só disponível para relógios mais antigos) @Philoul
- Nova [watchface WFF baseada nas complicações do AAPS](#wearos-complications-watchface-setup) @olorinmaia
- Correções no resultado do Assistente de Bólus e do Assistente Rápido @olorinmaia
- Novo gráfico da glicose e atividade do Modo de funcionamento no menu principal @olorinmaia
- Assistente de Bólus: página [Tipo de refeição](#WearOsSmartwatch-wizard-meal-type), que divide os hidratos como o assistente do telefone, e [Hora dos hidratos](#WearOsSmartwatch-wizard-carb-time) com o lembrete *Hora de comer* no relógio @olorinmaia
- [Alarmes do telefone no relógio](#WearOsSmartwatch-phone-alarms): o relógio mostra o alarme e oferece Silenciar e Silenciar 5 min @olorinmaia

**Compilação**

- Workflows de CI para compilações de tags/branches, correspondência das versões do JDK @Angus-repo

**Contribuidores**

@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Lista completa de alterações: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

---

(version3426)=

**Versão 3.4.2.6**

- Equil: melhor estabilidade @MilosKozak

---

(version3321)=

**Versão 3.3.2.1**

Data de lançamento: 13-08-2025

- Corrigida a ligação Bluetooth do Omnipod no Android 16
- Processo de CI (compilação no navegador)
- Correção da conversão mmol-mgdl
- Correção da escolha de hora errada nas caixas de diálogo em alguns fusos horários
- Correção da leitura das chaves no modo simples
- Correção das previsões em falta no Wear
- Configuração melhorada
- Sincronização completa do NSCv3 melhorada

---

(version3300)=

**Versão 3.3.2.0**

Data de lançamento: 27-03-2025

**Como atualizar**

* Para compilar esta versão, é necessária a [versão do Android Studio chamada "Meerkat"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) ou superior. Se já compilou uma versão 3.3.x, tem de atualizar o Android Studio novamente.

(version-enforcement)=

**A partir desta versão, as notificações e a imposição da versão foram simplificadas e suavizadas e funcionam da seguinte forma:**

*  Sem expiração quando o dispositivo está offline (sem ligação à internet). Isto significa que já não há períodos de tolerância de 60 e 90 dias.
*  Após a expiração, o modo SGB é imposto
*  Vai receber avisos/notificações com menos frequência:
   - faltam 28 dias ou mais: a cada 7 dias
   - faltam 27–14 dias: a cada 3 dias
   - depois, uma vez por dia
   - A notificação é gerada depois do meio-dia, para não o incomodar durante a noite
* Há só 2 tipos de notificação
   - Nova versão disponível (não tem efeito no AAPS)
   - A aplicação expira numa data no futuro (ainda sem efeito no AAPS) / expirou (o AAPS passa para o modo SGB)

Other changes: [release notes on GitHub](https://github.com/nightscout/AndroidAPS/releases/tag/3.3.2.0).

---

(version3204)=

**[Versão 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)**

Data de lançamento: 27-02-2024

Esta é a última versão que suporta o Android 10. Se não puder atualizar para o Android 11, [atualize o AAPS para a 3.2.0.4](#update-aaps-3204).

**Alterações**

- Suporte do G7 via xDrip
- Correções do Medtrum
- Correção do ícone da Automatização
- Correção da passagem do objetivo 1

---

**Versão 2.8.2**

Data de lançamento: 23-01-2021

[Notas das Versões](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

---

**Versão 1.0**

```{admonition} First version of **AAPS**
:class: note

A primeira versão de teste começou em 2015 e a primeira versão foi lançada em 2016.

A cronologia exata destas versões não está disponível neste momento, mas, como esta pergunta foi feita várias vezes, documentamo-la aqui.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
