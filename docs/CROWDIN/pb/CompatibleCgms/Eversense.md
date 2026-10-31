# Eversense

Existem quatro métodos diferentes para acessar as leituras do Eversense:

- ESEL modo companion
- ESEL modo modificado (patched)
- xDrip companion app
- Leitor de notificações (integrado ao **AAPS**)

## ESEL

Baixe e instale o [app ESEL](https://github.com/BernhardRo/Esel/tree/master/apk), seguindo estas [instruções](https://github.com/BernhardRo/Esel?tab=readme-ov-file#esel).

- No ESEL, abra o menu de três pontos (⋮) no canto superior direito e selecione **Settings** (também disponível no menu ☰). Nas configurações:
  - Ative "Send to AAPS and xDrip"
  - **Desative** "Send to Nightscout"
  - Como os dados de BG do Eversense podem ter ruído, é recomendado ativar "Smooth Data" no ESEL.

![ESEL Broadcast](../images/ESEL.png)

### Modo Companion

Lê os dados das notificações do app Eversense (funciona com o app Eversense padrão, disponível desde a versão 3.0.1 do ESEL).

1. Use o app oficial Eversense da Google Play Store
   - Opcional, mas necessário para preencher dados que faltam (backfill): faça login na sua conta Eversense
   - Em Sync, ative Auto synchronization
2. Configuração do ESEL:
   - Desative a configuração "Get data from patched Eversense App"
   - Para preencher dados que faltam (backfill): ative "Fill missing data from eversensedms.com"
   - Informe como endereço de e-mail e senha os seus dados de login do Eversense
3. Defina "MM640g" como fonte de BG em [**Configuração → Fonte de BG**](#Config-Builder-bg-source).

### App Eversense modificado

 Requer uma versão modificada (patched) do app Eversense (funciona totalmente offline, incluindo o preenchimento de dados que faltam).

1. Desinstale o app Eversense (Aviso: seus dados históricos locais (mais antigos que 1 semana) serão perdidos!)

2. Instale o [app Eversense modificado](https://cr4ck3d3v3r53n53.club) e use-o como descrito pelo fornecedor

   - Inicie o app Eversense, faça login, conecte ao seu transmissor e use-o como o app normal.

3. Configuração do ESEL:

   - Ative a configuração "Get data from patched Eversense App"



![ESEL Broadcast](../images/ESELpatch.png)

Se você usar o ESEL com uma instalação nova do Eversense pela primeira vez, pode levar até 15 min até os primeiros valores aparecerem no xDrip!

4. Defina "MM640g" como fonte de BG em [**Configuração → Fonte de BG**](#Config-Builder-bg-source).

## xDrip

O xDrip pode ler as notificações do app do fabricante, como o ESEL faz. Não há preenchimento de dados que faltam (backfill).

- Baixe e instale o xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- No xDrip, a fonte de dados “Companion App” deve estar selecionada.
- Selecione xDrip em [**Configuração → Fonte de BG**](#Config-Builder-bg-source).
- Ajuste as configurações do xDrip conforme as explicações da página [Configurações do xDrip](../CompatibleCgms/xDrip.md).
- Ative a [Suavização exponencial](../CompatibleCgms/SmoothingBloodGlucoseData.md) no AAPS.

## Notification Reader

O **AAPS** pode ler os valores de glicose diretamente das notificações do app oficial Eversense, sem nenhum outro app no meio. Não há preenchimento de dados que faltam (backfill).

- Selecione **Leitor de notificações** em [**Configuração → Fonte de BG**](#Config-Builder-bg-source) e dê ao **AAPS** acesso às notificações quando for solicitado.
- Garanta que o app Eversense mostre o valor atual de glicose na notificação dele.

```{warning}
A frequência de leitura dos valores de BG nem sempre é de 5 minutos e podem ocorrer valores duplicados.
```