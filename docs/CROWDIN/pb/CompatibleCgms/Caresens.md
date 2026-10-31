# CareSens

Existem diferentes formas de usar os dados do CareSens com o **AAPS**:

- xDrip
- Juggluco

**Observação:** Você não precisa do app seguidor Sens365 para conectar ao AAPS.

## 1. xDrip

1. Instale e configure o app oficial CareSens.
2. No app CareSens, vá em settings -> Manage Data and Connections -> ative a chave xDrip. Se preferir, desative as conexões de dados com CareLevo, DIA:CONN, CloudLoop etc. em "others".

![Conexões de dados do app CareSens](../images/eversenseapp-dataconnections.png)


2. Instale o xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. No xDrip, vá em settings -> hardware data source e selecione `Companion App` como fonte de dados.
4. No **AAPS**, selecione xDrip em [**Configuração → Fonte de BG**](#Config-Builder-bg-source).


## 2. Juggluco

1. Instale o app Juggluco.
2. No Juggluco, abra o menu da esquerda e selecione `Photo`
3. Escaneie o código QR na embalagem do sensor.
4. No menu da esquerda -> settings -> exchange data, verifique se xDrip broadcast está ativado.
5. No **AAPS**, selecione xDrip em [**Configuração → Fonte de BG**](#Config-Builder-bg-source).
