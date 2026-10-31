# CareSens

Są różne sposoby, aby używać danych z CareSens w **AAPS**:

- xDrip
- Juggluco

**Uwaga:** Do połączenia z AAPS nie potrzebujesz aplikacji Sens365 dla obserwujących.

## 1. xDrip

1. Zainstaluj i skonfiguruj oficjalną aplikację CareSens.
2. W aplikacji CareSens przejdź do settings -> Manage Data and Connections -> włącz przełącznik xDrip. If preferred, turn off the data connections to CareLevo, DIA:CONN, CloudLoop, etc. in "others".

![Połączenia danych w aplikacji CareSens](../images/eversenseapp-dataconnections.png)


2. Zainstaluj xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. W xDrip przejdź do settings -> hardware data source i wybierz `Companion App` jako źródło danych.
4. W **AAPS** wybierz xDrip w [**Konfiguracja → Źródło BG**](#Config-Builder-bg-source).


## 2. Juggluco

1. Zainstaluj aplikację Juggluco.
2. W Juggluco otwórz lewe menu i wybierz `Photo`
3. Zeskanuj kod QR z opakowania sensora.
4. W lewym menu -> settings -> exchange data upewnij się, że opcja xDrip broadcast jest włączona.
5. W **AAPS** wybierz xDrip w [**Konfiguracja → Źródło BG**](#Config-Builder-bg-source).
