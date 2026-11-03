# CareSens

**AAPS**에서 CareSens 데이터를 사용하는 방법은 여러 가지가 있습니다:

- xDrip
- Juggluco

**참고:** AAPS에 연결하기 위해 Sens365 팔로워 앱은 필요하지 않습니다.

## 1. xDrip

1. 공식 CareSens 앱을 설치하고 설정하십시오.
2. CareSens 앱에서 설정 -> Manage Data and Connections -> 로 이동하여 xDrip 스위치를 켜십시오. 원하면 "others"에서 CareLevo, DIA:CONN, CloudLoop 등으로의 데이터 연결을 끌 수 있습니다.

![CareSens 앱 데이터 연결](../images/eversenseapp-dataconnections.png)


2. xDrip을 설치하십시오: [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. xDrip에서 settings -> hardware data source 로 이동하여 데이터 소스로 `Companion App`을 선택하십시오.
4. **AAPS**의 [**구성 → 혈당 출처**](#Config-Builder-bg-source)에서 xDrip을 선택하십시오.


## 2. Juggluco

1. Juggluco 앱을 설치하십시오.
2. Juggluco에서 왼쪽 메뉴를 열고 `Photo`를 선택하십시오.
3. 센서 포장에 있는 QR 코드를 스캔하십시오.
4. 왼쪽 메뉴 -> settings -> exchange data 에서 xDrip broadcast가 켜져 있는지 확인하십시오.
5. **AAPS**의 [**구성 → 혈당 출처**](#Config-Builder-bg-source)에서 xDrip을 선택하십시오.
