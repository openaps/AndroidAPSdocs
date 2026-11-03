# Huawei 휴대폰 설정 방법

**이 페이지가 다루는 휴대폰:** **EMUI 12 ~ EMUI 15**를 사용하는 Huawei 휴대폰. 이들은 모두 Android 12 기반이며, Android 12는 현재 버전의 **AAPS**에 필요한 최소 버전입니다. 더 오래된 EMUI 버전의 휴대폰에서는 [이전 AAPS 버전](#maintenance-android-version-aaps-version)만 사용할 수 있습니다.

```{admonition} HarmonyOS NEXT / HarmonyOS 5 휴대폰 :class: warning

중국에서 판매되는 최근 Huawei 휴대폰은 HarmonyOS NEXT(HarmonyOS 5 이상)를 사용합니다. 이 시스템은 더 이상 Android가 아니므로 **AAPS**를 실행할 수 없습니다. ```

Huawei 휴대폰은 백그라운드에서 실행 중인 앱을 매우 적극적으로 종료합니다. 아래 설정을 모두 **AAPS**와 CGM 앱(예: xDrip+ 또는 Juggluco)에 적용하십시오. 그렇지 않으면 화면이 꺼져 있을 때 루프와 혈당 측정값이 멈출 수 있습니다.

메뉴 이름은 모델마다 조금 다를 수 있습니다. 설정을 찾을 수 없으면 **Settings**(설정) 맨 위의 검색창에 그 이름을 입력하십시오.

아래 스크린샷은 이전 EMUI 버전에서 찍은 것입니다. 설정은 EMUI 12 ~ 15에서 같습니다.

## 배터리 최적화 무시

1. **Settings > Apps > Apps**(설정 > 앱 > 앱)를 여십시오.
2. 오른쪽 위의 메뉴 **⋮**를 누르고 **Special access > Battery optimization**(특별한 액세스 > 배터리 최적화)을 선택하십시오.
3. 목록 위쪽의 화살표를 누르고 **All apps**(모든 앱)를 선택하십시오.
4. **AAPS**를 선택하고 **Don't allow**(허용 안 함)를 선택하십시오. 그러면 Huawei는 이 목록에 있는 앱을 더 이상 최적화하지 않습니다.
5. CGM 앱에도 똑같이 하십시오.

![Huawei - 배터리 최적화 무시](../images/Huawei_BatteryOptimization.png)

## 앱 실행: 백그라운드 실행 허용

1. **Settings > Battery > App launch**(설정 > 배터리 > 앱 실행)를 여십시오(또는 **Settings > Apps > Apps >**(설정 > 앱 > 앱 >)에서 앱을 선택한 다음 **> Battery > App launch**(> 배터리 > 앱 실행)).
2. **AAPS**를 찾아 **Manage automatically**(자동으로 관리)를 끄십시오.
3. **Manage manually**(수동으로 관리) 창에서 세 가지 옵션을 모두 켜십시오: 
    - **Auto-launch(자동 실행)**
    - **Secondary launch**(보조 실행: 다른 앱이 실행할 수 있음)
    - **Run in background(백그라운드에서 실행)**
4. CGM 앱에도 똑같이 하십시오.

![Huawei - 배터리 옵션](../images/Huawei_BatteryOptions.png)

## 최근 앱 목록에서 AAPS 잠그기

잠긴 앱은 최근 앱 목록을 지워도 종료되지 않습니다.

1. 최근 앱 목록을 여십시오.
2. **AAPS** 카드를 아래로 밀어 내리십시오. 카드에 자물쇠 기호가 나타납니다.
3. CGM 앱에도 똑같이 하십시오.

![Huawei - 앱 잠금](../images/Huawei_LockApp.png)

## 절전 모드

**Power saving mode**(절전 모드)와 **Ultra power saving**(초절전 모드)를 꺼 두십시오(**Settings > Battery**(설정 > 배터리)). 이 모드들은 위의 설정과 상관없이 백그라운드 앱을 종료합니다.

## AAPS가 여전히 백그라운드에서 멈추는 경우

Huawei에 맞는 다른 해결 방법은 [Don't kill my app](https://dontkillmyapp.com/huawei)을 참조하십시오.

## Honor 휴대폰

Honor는 이제 별도의 브랜드이며, Honor 휴대폰은 EMUI 대신 MagicOS를 사용합니다. 백그라운드 설정은 매우 비슷합니다. 앱의 배터리 설정에서 **App launch**(앱 실행)를 찾아 **Manage automatically**(자동으로 관리)를 끄고 세 가지 옵션을 모두 허용한 다음, 배터리 최적화에서 앱을 제외하십시오.