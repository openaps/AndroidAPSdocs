# CareSens

Údaje CareSens sa dajú s **AAPS** používať rôznymi spôsobmi:

- xDrip
- Juggluco

**Poznámka:** Na pripojenie k AAPS nepotrebujete aplikáciu Sens365 na sledovanie (follower).

## 1. xDrip

1. Nainštalujte a nastavte oficiálnu aplikáciu CareSens.
2. V aplikácii CareSens choďte do settings -> Manage Data and Connections -> zapnite prepínač xDrip. If preferred, turn off the data connections to CareLevo, DIA:CONN, CloudLoop, etc. in "others".

![Dátové pripojenia aplikácie CareSens](../images/eversenseapp-dataconnections.png)


2. Nainštalujte xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. V xDrip choďte do settings -> hardware data source a ako zdroj dát vyberte `Companion App`.
4. V **AAPS** vyberte xDrip v [**Konfigurácia → Zdroj glykémie**](#Config-Builder-bg-source).


## 2. Juggluco

1. Nainštalujte aplikáciu Juggluco.
2. V Juggluco otvorte ľavú ponuku a vyberte `Photo`
3. Naskenujte QR kód na balení senzora.
4. V ľavej ponuke -> settings -> exchange data sa uistite, že je zapnuté xDrip broadcast.
5. V **AAPS** vyberte xDrip v [**Konfigurácia → Zdroj glykémie**](#Config-Builder-bg-source).
