# Eversense

Há quatro métodos diferentes para obter as leituras do Eversense:

- ESEL no modo Companion
- ESEL no modo patched (app modificada)
- xDrip companion app
- Leitor de notificações (integrado no **AAPS**)

## ESEL

Obtenha e instale a [app ESEL](https://github.com/BernhardRo/Esel/tree/master/apk), seguindo estas [instruções](https://github.com/BernhardRo/Esel?tab=readme-ov-file#esel).

- No ESEL, abra o menu de três pontos (⋮) no canto superior direito e selecione **Settings** (também disponível no menu ☰). Nas definições:
  - Ative «Send to AAPS and xDrip»
  - **Desative** «Send to Nightscout»
  - Como os dados de glicose do Eversense podem ter ruído, recomenda-se ativar «Smooth Data» no ESEL.

![ESEL Broadcast](../images/ESEL.png)

### Modo Companion

Lê os dados das notificações da app Eversense (funciona com a app Eversense normal, disponível desde a versão 3.0.1 do ESEL).

1. Use a app oficial Eversense da Google Play Store
   - Opcional, mas necessário para o preenchimento de dados em falta (backfill): inicie sessão na sua conta Eversense
   - Em Sync, ative Auto synchronization
2. Configuração do ESEL:
   - Desative a definição «Get data from patched Eversense App»
   - Para o preenchimento de dados em falta (backfill): ative «Fill missing data from eversensedms.com»
   - Indique como endereço de e-mail e senha os seus dados de início de sessão Eversense
3. Defina «MM640g» como fonte da glicose em [**Configuração → Fonte da Glicose**](#Config-Builder-bg-source).

### App Eversense modificada (patched)

 Requer uma versão modificada (patched) da app Eversense (funciona totalmente offline, incluindo o preenchimento de dados em falta).

1. Desinstale a app Eversense (Aviso: os seus dados históricos locais (com mais de 1 semana) serão perdidos!)

2. Instale a [app Eversense modificada](https://cr4ck3d3v3r53n53.club) e use-a como descrito pelo fornecedor

   - Inicie a app Eversense, inicie sessão, ligue-se ao seu transmissor e use-a como a app normal.

3. Configuração do ESEL:

   - Ative a definição «Get data from patched Eversense App»



![ESEL Broadcast](../images/ESELpatch.png)

Se usar o ESEL pela primeira vez com uma instalação nova do Eversense, pode demorar até 15 min até os primeiros valores aparecerem no xDrip!

4. Defina «MM640g» como fonte da glicose em [**Configuração → Fonte da Glicose**](#Config-Builder-bg-source).

## xDrip

O xDrip consegue ler as notificações da app do fabricante, tal como o ESEL. Não há preenchimento de dados em falta.

- Transfira e instale o xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- No xDrip, tem de selecionar «Companion App» como fonte de dados.
- Selecione xDrip em [**Configuração → Fonte da Glicose**](#Config-Builder-bg-source).
- Ajuste as definições do xDrip de acordo com as explicações da página [Definições do xDrip](../CompatibleCgms/xDrip.md).
- Ative a [Suavização exponencial](../CompatibleCgms/SmoothingBloodGlucoseData.md) no AAPS.

## Leitor de notificações

O **AAPS** consegue ler os valores de glicose diretamente das notificações da app oficial Eversense, sem outra app pelo meio. Não há preenchimento de dados em falta.

- Selecione **Leitor de notificações** em [**Configuração → Fonte da Glicose**](#Config-Builder-bg-source) e dê ao **AAPS** acesso às notificações quando for pedido.
- Garanta que a app Eversense mostra o valor de glicose atual na sua notificação.

```{warning}
A frequência de leitura dos valores de glicose nem sempre é de 5 minutos e podem ocorrer duplicados.
```