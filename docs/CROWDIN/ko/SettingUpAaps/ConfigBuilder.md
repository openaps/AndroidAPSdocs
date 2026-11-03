# 구성 (구성 관리자)

```{admonition} AAPS v3에서 오셨습니까? :class: note **구성 관리자**는 이제 **구성**이라고 하며 **메뉴**(☰)에 있습니다. [AAPS v4의 변경 사항](#v4-changes)을 참조하십시오.

    <br />**구성**에서는 어떤 플러그인을 활성화할지(CGM, 펌프, APS 알고리즘, 민감도, 동기화, …) 선택하고, 각 플러그인과 그 설정을 엽니다. 단계별 안내는 [아래](#configuration-v4)에 있습니다. 이 페이지의 나머지 부분은 각 섹션을 자세히 설명합니다.
    
    (configuration-v4)=
    ## AAPS v4의 구성
    
    **AAPS** v4에서는 메인 화면 **왼쪽 위**의 **메뉴**(☰)를 누르고 **구성**(*“구성(CGM, 펌프, ...)을 설정하고 기능을 활성화합니다”*)을 선택하십시오.
    
    ![왼쪽 위 메뉴와 구성 항목](../images/v4/Configuration/configuration_menu.png)
    
    플러그인은 **범주**별로 묶여 있습니다. 예: *평활화*, *보정*, *민감도 감지*, *APS*, *통신*, *일반*. 각 행에는 범주 이름과 **현재 활성화된** 플러그인이 표시됩니다(예: *APS → OpenAPS SMB*). 행을 누르면 범주가 열립니다.
    
    ![플러그인 범주 목록이 있는 구성 화면](../images/v4/Configuration/configuration_plugins.png)
    
    범주 안에는 그 범주에서 사용할 수 있는 플러그인이 표시됩니다. 하나만 선택하는 범주에서는 활성 플러그인을 하나 고릅니다. 일부 범주는 여러 개를 선택할 수 있습니다(*“해당하는 것을 모두 선택하십시오.”*). 각 플러그인에는 두 가지 동작이 있습니다:
    
    - **플러그인 열기** — 플러그인 자체 화면을 엽니다.
    - **설정** — 플러그인의 설정을 엽니다(설정은 펼칠 수 있는 섹션으로 묶여 있을 수 있습니다).
    
    ![플러그인이 있는 범주. 각 플러그인에 “플러그인 열기”와 “설정”이 있음](../images/v4/Configuration/configuration_open_plugin.png)
    
    (configuration_sync_icon)=
    ### 휴대폰 아이콘 — “마스터에서 동기화됨”
    
    범주나 설정 옆의 작은 **휴대폰 아이콘**은 그 항목이 **마스터에서 동기화된다**는 뜻입니다. 그 값/선택은 NSClientV3(Nightscout) 채널을 통해 이 기기로 전달됩니다.
    
    **클라이언트**(**AAPSClient**)에서는 이 항목들이 **마스터와 같은 상태로 유지됩니다**. 이 아이콘은 클라이언트에서만 표시됩니다. 그래서 메인 **AAPS** 앱에서 찍은 위의 스크린샷에는 보이지 않습니다. 클라이언트에서는 보통 *평활화*, *보정*, *민감도 감지*, *APS*에 표시됩니다. 마스터와 클라이언트가 어떻게 같은 상태를 유지하는지, 그리고 어느 쪽에서 어떤 설정을 바꿀 수 있는지는 [마스터 ↔ 클라이언트 제어](#client-master-config-prefs)에서 설명합니다.
    
    같은 아이콘은 **설정 안에서도** 동기화되는 개별 설정 옆에 표시됩니다. 아래 예에서는 *흡수 종료 시간*에 아이콘이 있습니다. 아이콘이 없는 설정은 기기마다 따로 설정합니다:
    
    ![플러그인 설정 — 휴대폰 아이콘은 동기화되는 설정을 표시합니다](../images/v4/ClientMaster/preferences_synced_icon.png)
    
    아이콘이 **없는** 항목은 **기기마다** 따로 설정합니다. 가장 중요한 예는 **NSClientV3(통신)** 연결 자체입니다. **Nightscout URL**, **액세스 토큰**, **웹소켓**은 각 휴대폰에서 따로 설정하므로 휴대폰 아이콘이 **표시되지 않습니다**.
    
    ---
    
    (Config-Builder-tab-or-hamburger-menu)=
    ## 플러그인 화면 열기
    
    각 플러그인 화면은 다음 방법 중 하나로 엽니다(**AAPS** v3의 탭과 눈 모양 체크박스는 없어졌습니다. [AAPS v4의 변경 사항](#v4-changes) 참조):
    
    - **구성** → 플러그인의 범주 → **플러그인 열기**,
    - 자주 사용하는 화면(프로파일, 인슐린 설정, 펌프, 자동화, 음식 등)은 하단 내비게이션의 **관리** 시트,
    - 직접 추가하는 [QuickLaunch](../DailyLifeWithAaps/QuickLaunch.md) 버튼,
    - 메인 화면의 **검색 창**.
    
    ```{contents}
    :backlinks: entry
    :depth: 2
    

(ConfigBuilder_Profile)=

## Profile

이 모듈은 **AAPS**의 핵심 부분이므로 비활성화할 수 없습니다.

**프로파일**에 무엇이 들어가는지 기본적으로 이해하려면 [AAPS 프로파일](../SettingUpAaps/YourAapsProfile.md)을 참조하십시오.

(insulin)= (Config-Builder-insulin)=

## 인슐린

![인슐린 설정](../images/manage/insulin_settings.png)

**AAPS** 4에서는 인슐린이 더 이상 **구성**에서 선택하는 플러그인이 아닙니다. 사용하는 인슐린을 설정하려면 **관리 → 인슐린 설정**을 여십시오.

인슐린 편집기에서는 다음을 할 수 있습니다:

* 쉽게 알아볼 수 있도록 인슐린에 **인슐린 별명** 붙이기,
* **피크**(인슐린 활동이 최대가 되는 시간, 분 단위)와 **DIA**(인슐린 작용 시간, 시간 단위)를 값을 입력하거나 **–** / **+** 버튼으로 설정하기,
* **피크 불러오기** 프리셋 버튼(**Novorapid**(75분), **Fiasp**(55분), **Lyumjev**(45분))을 눌러 그 인슐린의 표준 피크 시간을 한 번에 입력하기.

허용 범위는 어떤 인슐린을 사용하든 같습니다:

* **DIA**: 5~9시간(환자 유형이 **임신 중**이면 5~10시간). 값을 고르려면 [인슐린 작용 시간(DIA)과 피크](#Config-Builder-insulin-dia)를 참조하십시오.
* **피크**: 35~120분.

편집기 아래쪽에 표시되는 **IOB**(활성 인슐린)와 **활동** 곡선은 값을 바꾸면 바로 업데이트됩니다. 그래서 설정이 인슐린 작용에 어떤 영향을 주는지 바로 볼 수 있습니다.

**AAPS**에 표시되는 인슐린 프로파일을 이해하기 위한 자세한 정보는 [여기](#AapsScreens-insulin-profile)에 있습니다.

(Config-Builder-insulin-change-active)=

### 사용 중인 인슐린 변경(DIA 또는 피크)

**활성**으로 표시된 인슐린이 현재 실행 중인 프로파일이 사용하는 인슐린입니다. 그 항목은 회색으로 표시되어 편집하거나 삭제할 수 없습니다. 이렇게 하면 실행 중인 프로파일에 표시되는 인슐린 이름이 실제로 사용하는 설정과 항상 일치합니다.

사용 중인 DIA나 피크를 바꾸려면:

1. **관리 → 인슐린 설정**을 여십시오. 화면이 읽기 전용으로 열리면(상단 바에 **✏️ 연필**이 있음) 연필을 누르고 설정 잠금을 해제하십시오.
2. **+**(*새 인슐린 추가*)를 누르십시오. **AAPS**가 화면에 표시된 인슐린의 복사본을 만듭니다.
3. 새 **피크** 및/또는 **DIA**를 설정한 다음 저장 아이콘(오른쪽 위)을 누르십시오.
4. **▶**(*인슐린 활성화*)을 누르고 확인하십시오. 새 인슐린이 **활성** 상태가 됩니다.

```{admonition} 이름에 피크와 DIA가 포함됩니다 :class: note **AAPS**는 인슐린 이름에 피크, DIA, 농도를 자동으로 추가합니다(예: *Fiasp 55m 8h U100*). 그래서 여러 구성을 한눈에 구별할 수 있습니다.

    <br />이전 인슐린은 더 이상 활성 상태가 아니면 삭제할 수 있습니다.
    
    ### "피크 불러오기" 프리셋
    
    **AAPS** 4에는 선택할 수 있는 인슐린 유형 목록이 없습니다. 모든 인슐린은 같은 지수 활동 곡선을 사용합니다. 다른 것은 **피크**와 **DIA**뿐입니다. 인슐린 편집기의 **피크 불러오기** 프리셋은 가장 흔한 인슐린의 권장 피크를 한 번에 입력합니다(**피크 불러오기** 옆의 작은 ⓘ에 인슐린과 피크 값 목록이 표시됩니다). 그 후에도 **피크**와 **DIA**를 조정할 수 있습니다.
    
    효과를 이해하는 경우에만 피크를 권장 값과 다르게 바꾸십시오. [인슐린 곡선 그래프](#AapsScreens-insulin-profile)가 곡선을 이해하는 데 도움이 됩니다.
    
    #### Novorapid
    
    ![Novorapid 피크의 인슐린 곡선](../images/Profile/ConfBuild_Insulin_RAO.png)
    
    * Humalog, Novolog, Novorapid에 권장(**AAPS** v3에서는 *Rapid-Acting Oref*라고 함)
    * 피크 = 주사 후 75분
    
    #### Fiasp
    
    ![Fiasp 피크의 인슐린 곡선](../images/Profile/ConfBuild_Insulin_URO.png)
    
    * Fiasp에 권장(**AAPS** v3에서는 *Ultra-Rapid Oref*라고 함)
    * 피크 = 주사 후 55분
    
    (Config-Builder-lyumjev)=
    #### Lyumjev
    
    ![Lyumjev 피크의 인슐린 곡선](../images/Profile/ConfBuild_Insulin_L.png)
    
    * Lyumjev에 권장
    * 피크 = 주사 후 45분
    
    #### 사용자 지정 피크
    
    * **AAPS** 4에는 별도의 "Free-Peak Oref" 인슐린 유형이 없습니다. 프리셋을 사용하지 않고 [인슐린 편집기](#Config-Builder-insulin)에서 **피크**(35~120분)를 직접 입력하십시오.
    * 목록에 없는 인슐린이나 여러 인슐린을 섞어서 사용하는 경우 사용자 지정 피크가 유용합니다.
    
    (Config-Builder-insulin-dia)=
    ### 인슐린 작용 시간(DIA)과 피크
    
    ```{warning}
    루프 사용 중에 DIA나 피크를 줄이면 주입되는 인슐린이 항상 늘어납니다. AAPS에서 DIA는 상용 AID 시스템과 다르게 작동합니다. 이 설정을 신중하지 않게 바꾸면 인슐린 용량이 예상보다 훨씬 크거나 작게 바뀔 수 있습니다.
    

AAPS는 수학 공식으로 인슐린 작용의 시간 흐름을 모델링합니다. 이 공식은 **DIA**와, 이와 밀접하게 관련된 **피크** 설정으로 구성됩니다. DIA는 IOB가 0이 될 때까지의 이론적인 시간이고, 피크는 인슐린 효과가 가장 강한 시점입니다. 이로부터 IOB 곡선과 활동 곡선이 만들어집니다. 활동 곡선은 단순히 IOB가 줄어드는 **속도**입니다.

AAPS로 루프를 사용할 때는 [0 임시 기저](#Open-APS-features-super-micro-bolus-smb) 기간이 있는 것이 정상이라는 점을 생각하십시오. 이렇게 빠진 기저 인슐린은 IOB에서 모두 빠집니다. 그래서 실제로는 IOB가 설정된 DIA보다 몇 시간이나 일찍 0에 도달합니다. 메인 화면에서 [볼러스 IOB와 기저 IOB](#aaps-screens-iob-cob-basal-sens)를 따로 확인할 수 있습니다.

DIA와 피크를 설정하려면 메인 화면에서 **관리**를 누른 다음 **인슐린 설정**을 누르십시오. AAPS는 현재 활성화된 인슐린 구성을 다음과 같이 표시합니다:

![인슐린 구성 예](../images/manage/insulin_profile.png)

이 예에서 피크 설정은 55분, DIA는 8시간이며 [인슐린 농도](#Insulin-Concentration)는 표준인 100 IU/mL입니다.

위에서 설명한 0 임시 기저의 영향과 AAPS의 IOB 감소 공식 때문에, 대부분의 사용자는 상용 시스템보다 DIA를 확실히 더 높게 설정합니다. 일반적으로 많은 사람에게 9시간의 **DIA**가 잘 맞습니다. AAPS 경험이 더 쌓이고 프로파일이 잘 조정되면, 아래 정보를 참고하여 자신에게 맞는 DIA와 피크 설정을 찾아볼 수 있습니다.

````{admonition} DIA와 피크 설정의 영향에 대한 자세한 내용 :class: dropdown

AAPS에서는 기저 주입량이 IOB 감소에 간접적으로 영향을 줍니다. 그래서 기저 주입량이 너무 높으면 너무 높은 DIA가 가려질 수 있고, 그 반대도 마찬가지입니다. DIA와 피크를 조정하기 전에 먼저 기저 주입량을 신중하게 조정하는 것이 좋습니다. 또한 DIA와 피크 설정은 서로 영향을 줍니다. 즉 DIA의 효과는 피크에 따라 달라지고, 그 반대도 마찬가지입니다.

이 차트들은 허용되는 값 범위 전체에서 DIA와 피크가 IOB 곡선에 주는 정확한 영향을 보여 줍니다.

DIA 조정:

```{image} ../images/iob_remaining_static_peak.png :width: 400px

    <br />피크 조정:
    
    ```{image} ../images/iob_remaining_static_dia.png
    :width: 400px
    

마지막으로, DIA와 피크를 함께 조정한 비교입니다. 여기서는 두 값을 같은 비율로 조정하므로 `49/35 ~ 7/5`가 됩니다. 또는 마찬가지로 `120/93 ~ 9/7`입니다. 두 값의 상대적 변화가 같다면, 기준이 되는 DIA나 피크와 관계없이 간격은 일정합니다.

```{image} ../images/iob_remaining_uniform.png :width: 400px

    <br />이렇게 DIA와 피크를 조정하면 곡선의 모든 점이 같은 비율만큼 이동합니다.
    
    ````
    
    #### DIA와 피크 설정에 대한 추가 자료
    
    * [AAPS의 전신인 OpenAPS의 기술 세부 사항과 역사적 배경](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves).
    * Diabettech의 [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)(우리가 사용하는 인슐린 작용 시간(DIA)이 자주 틀리는 이유와 그것이 중요한 이유).
    * See My CGM(보관본)의 [Exponential Insulin Curves + Fiasp](https://web.archive.org/web/20220630154425/http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/).
    * Bionic Wookie의 [Revised Humalog model in a closed loop](https://bionicwookiee.com/2022/04/13/revised-humalog-model-in-a-closed-loop/) 및 기타 글. Lyumjev, Fiasp, NovoRapid, Humalog에 9시간의 DIA를 권장합니다.
    
    (Config-Builder-bg-source)=
    ## 혈당 출처
    사용하는 혈당 출처를 선택하십시오. 자세한 설정 정보는 [혈당 출처](../Getting-Started/CompatiblesCgms.md) 페이지를 참조하십시오.
    
    ![구성 > 혈당 출처](../images/v4/Configuration/configuration_bg_source.png)
    
    아래로 스크롤하면 다른 출처가 표시됩니다:
    
    ![구성 > 혈당 출처, 계속](../images/v4/Configuration/configuration_bg_source_2.png)
    
    ![구성 > 혈당 출처, 목록 끝](../images/v4/Configuration/configuration_bg_source_3.png)
    
    * [xDrip+ 혈당](../CompatibleCgms/xDrip.md) - [Juggluco](../CompatibleCgms/Juggluco.md) 같은 호환 앱에도 사용
    * [NSClient 혈당](../CompatibleCgms/CgmNightscoutUpload.md) - 무엇을 하는지 잘 아는 경우에만 사용하십시오. [혈당 출처](../Getting-Started/CompatiblesCgms.md)를 참조하십시오.
    * [MM640g](../CompatibleCgms/MM640g.md)
    * Glimp - 4.15.57 이상 버전만 지원됩니다
    * [BYODA (Build Your Own Dexcom App)](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app).
    * MicroTech CGM 앱 - Aidex / LinX CGM용
    * [Poctech](../CompatibleCgms/PocTech.md)
    * Tomato (MiaoMiao) - MiaoMiao 기기용 Tomato 앱
    * [Glunovo](https://infinovo.com/) - Glunovo CGM 시스템용 Glunovo 앱
    * Intelligo - Intelligo 앱
    * Syai/Ottai - Syai 및 Ottai 앱용([Syai Tag](../CompatibleCgms/SyaiTagX1.md) 및 [Ottai](../CompatibleCgms/OttaiM8.md) 참조)
    * SI 앱 - Sibionics CGM용 패치된 SI 앱 또는 Sibionics 앱
    * Sino 앱 - Sinocare CGM용 패치된 앱
    * 알림 읽기 - 공식 CGM 앱(Dexcom, Medtronic, Eversense 등)이 표시하는 알림에서 혈당 값을 읽습니다
    * Instara - Instara 앱
    * 무작위 혈당 - 테스트용 무작위 혈당 데이터를 만듭니다. 이 출처는 **가상 펌프**를 사용하는 엔지니어링(개발자) 빌드에서만 활성화할 수 있습니다. 그래서 일반 **AAPS** 설치에서는 사용할 수 없습니다.
    
    ## 평활화
    
    ![구성 > 평활화](../images/v4/Configuration/configuration_smoothing.png)
    
    [혈당 데이터 평활화](../CompatibleCgms/SmoothingBloodGlucoseData.md)를 참조하십시오.
    
    ## 보정
    
    **AAPS**가 센서에서 받은 값을 어떻게 처리할지 선택하십시오:
    
    - **보정 없음**: 센서 값을 그대로 사용합니다. 센서가 이미 공장 보정되어 있고 정확할 때 사용하십시오. 이것이 기본값입니다.
    - **선형 보정**: **AAPS**가 손가락 채혈 입력값으로 계산한 기울기와 오프셋으로 센서 값을 보정합니다.
    
    **선형 보정** 사용 방법:
    
    1. **보정** 분류에서 **선형 보정**을 선택하십시오.
    2. 새 센서를 삽입하면 센서 교체를 기록하십시오: 보정 화면에서 **센서 교체 기록**을 사용하거나 케어포털에서 CGM 센서 삽입을 입력하십시오. 이렇게 하면 **AAPS**가 센서 세션이 언제 시작되었는지 알 수 있습니다. 측정값에 30분이 넘는 공백이 있으면 **AAPS**가 센서 교체를 표시하라고 요청할 수 있습니다. 이 요청은 마스터에서만 나타나고 클라이언트에서는 나타나지 않습니다.
    3. 플러그인을 열고 **보정 추가**를 누르십시오. 손가락 채혈 값을 입력하십시오. **AAPS**는 이 값을 최근 10분 동안의 센서 값과 짝을 짓습니다.
    
    보정은 다음 경우에만 받아들여집니다:
    
    - 센서 교체가 기록되어 있고 그 후 최소 **2시간**이 지났을 때(워밍업),
    - 혈당이 안정적일 때. 혈당이 너무 빨리 변하면 대화 상자에 그 사실과 한계값이 표시됩니다,
    - 최근 10분 동안의 CGM 측정값이 있을 때,
    - 현재 시점에 대한 값일 때. 이전 손가락 채혈 값은 입력할 수 없습니다.
    
    보정 방식:
    
    - **AAPS**는 현재 센서의 짝들을 지나는 직선을 그립니다: `corrected value = slope × sensor value + offset`.
    - 최근 짝이 오래된 짝보다 더 많이 반영됩니다: 2일 된 짝은 약 37 %, 4일 된 짝은 약 14 % 반영됩니다. 따라서 센서 값이 점점 어긋나면 직선도 그에 따라 바뀝니다.
    - 최소 **2개의 짝**이 필요합니다.
    - 짝들이 서로 가까우면(차이가 54 mg/dL / 3 mmol/L 미만) 값만 이동합니다(오프셋만, 기울기 없음).
    - 기울기는 0.55와 1.6 사이로 유지됩니다. 이 범위를 벗어난 기울기는 가장 가까운 값으로 제한됩니다.
    - 안전 한계: 100 mg/dL(5.5 mmol/L)에서의 보정이 ±30 mg/dL(1.7 mmol/L)보다 크면 보정을 적용하지 않습니다. 이것은 잘못된 입력으로부터 사용자를 보호합니다.
    
    바뀌는 것:
    
    - 보정된 값은 모든 곳에서 사용됩니다: 메인 화면의 혈당, 그래프, 루프. 센서 측정값 자체는 바뀌지 않습니다. 보정은 그 위에 적용되며, 현재 센서의 이전 측정값에도 적용됩니다.
    - 새 센서 교체는 처음부터 다시 시작합니다. 이전 센서의 짝은 더 이상 반영되지 않습니다.
    - 그래프에서 보정은 손가락 채혈 값 위치에 표시로 나타납니다.
    - 보정은 Nightscout를 통해 동기화되므로, 클라이언트에도 같은 보정 값이 표시됩니다.
    
    입력값 확인 및 삭제:
    
    - **플러그인 열기**는 상태(예: *기울기 0.85, 중간 범위 교정 -0.4*), 직선과 함께 짝을 보여 주는 차트, 입력값 목록을 표시합니다.
    - 입력값이 잘못되었으면(예: 손가락에 설탕이 묻어 있었을 때) 옆의 휴지통 아이콘을 누르십시오. 직선이 바로 다시 계산됩니다.
    
    ```{admonition} xDrip+를 혈당 출처로 사용합니까?
    :class: note
    xDrip+에는 자체 보정이 있습니다. 센서 값이 두 번 보정되지 않도록 한 곳에서만 보정하십시오.
    

    {admonition} 신중하게 보정하십시오
    :class: warning
    손가락 채혈 값이 잘못되면 혈당 값이 잘못되고, 그 결과 인슐린 용량도 잘못됩니다. 측정 전에 손을 씻으십시오. 혈당이 빠르게 변하는 동안에는 보정하지 마십시오.

![구성 > 보정](../images/v4/Configuration/configuration_calibration.png)

(Config-Builder-pump)=

## Pump

사용하는 펌프를 선택하십시오. 자세한 설정 정보는 [호환 펌프](../Getting-Started/CompatiblePumps.md) 페이지를 참조하십시오.

![구성 > 펌프](../images/v4/Configuration/configuration_pump_list_1.png)

아래로 스크롤하면 모든 펌프 드라이버가 표시됩니다:

![구성 > 펌프, 계속](../images/v4/Configuration/configuration_pump_list_2.png)

![구성 > 펌프, 계속](../images/v4/Configuration/configuration_pump_list_3.png)

![구성 > 펌프, 목록 끝](../images/v4/Configuration/configuration_pump_list_4.png)

다른 펌프를 선택하면 **AAPS**가 변경을 확인하라고 묻습니다:

![플러그인 전환 확인](../images/v4/Pumps/switch_plugin_dialog.png)

* [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)
* 다나R 한글 (국내용 DanaR 펌프)
* 다나R v2 (비공식 펌웨어 업그레이드를 한 DanaR 펌프)
* [Dana-i/RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)
* [아큐-첵 Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)
* [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)
* [Omnipod Eros](../CompatiblePumps/OmnipodEros.md)용 Omnipod
* [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)용 Dash
* [Medtronic](../CompatiblePumps/MedtronicPump.md)
* [Diaconn G8](../CompatiblePumps/DiaconnG8.md)
* [EOPatch2](../CompatiblePumps/EOPatch2.md)
* [Medtrum](../CompatiblePumps/MedtrumNano.md)
* [Equil 5.3](../CompatiblePumps/Equil5.3.md)
* [Carelevo](../CompatiblePumps/CareLevo.md)
* 가상 펌프: 개방 루프 - **AAPS** 제안만 
  * **AAPS**를 처음 사용하는 단계, 즉 처음 [목표](../SettingUpAaps/CompletingTheObjectives.md)를 진행하는 동안
  * 아직 드라이버가 없는 펌프용

(config-builder-wrong-pump-data)=

### 메시지: "다른 펌프에서 데이터가 오고 있습니다"

**AAPS**는 연결된 펌프(펌프 종류와 일련번호)를 기억합니다. 다른 펌프에서 데이터를 받으면(예: 펌프를 같은 모델의 새 펌프로 교체한 경우) 이 메시지를 표시하고 그 펌프의 데이터를 무시합니다:

![다른 펌프에서 데이터가 오고 있습니다](../images/Screen_DifferentPump.png)

새 펌프를 사용하려면 펌프 드라이버를 변경하십시오: **가상 펌프**를 선택하고 확인한 다음, 사용하는 펌프를 다시 선택하십시오. 그러면 **AAPS**가 지금 연결된 펌프를 등록합니다.

(Config-Builder-sensitivity-detection)=

## 민감도 감지

![구성 > 민감도 감지](../images/v4/Configuration/configuration_sensitivity_detection.png)

민감도 감지 유형을 선택하십시오. 여러 방식에 대한 자세한 내용은 [여기](../DailyLifeWithAaps/SensitivityDetectionAndCob.md)를 읽으십시오. 이 기능은 과거 데이터를 계속 분석하여, 평소보다 인슐린에 더 민감하게(또는 반대로 더 저항성 있게) 반응하는 것을 인식하면 조정합니다. 민감도 비율 자체가 어떻게 계산되는지에 대한 자세한 내용은 [AAPS 주요 기능 > Autosens](#Open-APS-features-autosens)에서 볼 수 있습니다.

메인 화면의 [추가 그래프](#AapsScreens-section-g-additional-graphs)에서 SENS%를 선택하고 흰색 선을 보면 민감도를 확인할 수 있습니다. 민감도 감지/[Autosens](#Open-APS-features-autosens)가 주입되는 인슐린 양을 자동으로 조정하게 하려면 [목표 8](#objectives-objective8)에 있어야 합니다. 그 목표에 도달하기 전에는 Autosens 퍼센트 / 그래프의 선은 정보로만 표시됩니다.

### Absorption settings

**SMB**와 함께 Oref1을 사용하는 경우 **min_5m_carbimpact**를 8로 바꿔야 합니다. 이 값은 **CGM** 값이 끊긴 동안이나, 신체 활동이 원래라면 **AAPS**가 COB를 줄이게 했을 혈당 상승을 모두 "써 버릴" 때만 사용됩니다. 혈당 반응을 바탕으로 [탄수화물 흡수](../DailyLifeWithAaps/CobCalculation.md)를 동적으로 계산할 수 없을 때, 탄수화물에 기본 감소율을 적용합니다. 기본적으로 이것은 안전 장치입니다.

(Config-Builder-aps)=

## APS

![구성 > APS](../images/v4/Configuration/configuration_aps.png)

치료 조정에 사용할 APS 알고리즘을 선택하십시오. **플러그인 열기**로 선택한 알고리즘의 현재 세부 정보를 볼 수 있습니다.

* OpenAPS AMA 
  * 고급 식사 지원(Advanced Meal Assist): 더 이상 권장하지 않는 이전 알고리즘입니다.
  * 간단히 말하면, 식사 볼러스를 한 후 탄수화물을 정확히 입력한다면 시스템이 더 빠르게 높은 임시 기저를 설정할 수 있다는 장점이 있습니다.
* [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb) 
  * 슈퍼 마이크로 볼러스(Super Micro Bolus): 모든 사용자에게 권장하는 최신 알고리즘입니다.
  * AMA와 달리 SMB는 혈당을 조절하는 데 임시 기저 주입량이 아니라 주로 작은 **슈퍼 마이크로 볼러스**를 사용합니다.
  * 참고: 실제로 SMB가 주입되는 것은 [목표 9](#objectives-objective9)부터이지만, 처음부터 이 알고리즘을 사용하는 것을 권장합니다.
* [자동 ISF](#Open-APS-features-auto-isf) 
  * 고급 사용자를 위한 실험적 알고리즘입니다. 목표를 완료한 후에만 목록에 표시됩니다.

AMA에서 SMB 알고리즘으로 바꾸는 경우, [설정 → 흡수 설정](#Preferences-min_5m_carbimpact)에서 *min_5m_carbimpact*를 직접 **8**(SMB 기본값)로 바꿔야 합니다.

## 루프

이 모듈은 **AAPS**의 핵심 부분이므로 비활성화할 수 없습니다.

![구성 > 루프](../images/v4/Configuration/configuration_loop.png)

## Constraints

![구성 > 제한](../images/v4/Configuration/configuration_constraints.png)

### Objectives

**AAPS**에는 단계별로 완료해야 하는 학습 프로그램(일련의 목표)이 있습니다. 이 프로그램은 폐쇄 루프 시스템을 안전하게 설정하도록 안내합니다.

자세한 내용은 [목표](../SettingUpAaps/CompletingTheObjectives.md) 페이지를 참조하십시오.

## 통신

이 범주(**AAPS** v3에서는 **동기화**라고 함)에서는 **AAPS**가 데이터를 보낼지, 어디로 보낼지 선택합니다.

![구성 > 통신](../images/v4/Configuration/configuration_communication.png)

아래로 스크롤하면 목록의 나머지가 표시됩니다:

![구성 > 통신, 계속](../images/v4/Configuration/configuration_communication_2.png)

### NSClientV3

[리포팅 서버](../SettingUpAaps/SettingUpTheReportingServer.md) 및/또는 [원격 모니터링](../RemoteFeatures/RemoteMonitoring.md), [원격 제어](../RemoteFeatures/RemoteControl.md)에 사용할 수 있습니다.

NSClientV3 동기화를 설정하려면 [리포팅 서버와 동기화](#SetupWizard-synchronization-with-the-reporting-server-and-more)를 참조하십시오.

### Tidepool

[리포팅 서버](../SettingUpAaps/SettingUpTheReportingServer.md)로 사용할 수 있습니다.

[Tidepool](../SettingUpAaps/Tidepool.md)을 참조하십시오.

### xDrip

같은 휴대폰의 xDrip+로 혈당 값과 처치 같은 데이터를 **보내는** 데 사용합니다. 이 플러그인의 설정에는 **xDrip+로 상태 보내기**도 있습니다. 이것은 xDrip+와 일부 워치 동반 앱이 표시하는 IOB와 COB 상태 줄입니다.

### Open Humans

[Open Humans](../SupportingAaps/OpenHumans.md)를 참조하십시오.

(Config-Builder-wear)=

### Wear

Wear OS 워치에서 **AAPS**를 모니터링하고 제어합니다. 워치 설정 방법은 [Wear OS 스마트워치](../WearOS/WearOsSmartwatch.md)에 설명되어 있습니다. 플러그인을 활성화한 후 [설정 > 워치](#preferences-wear)에서 옵션을 선택하십시오. 워치 사용 방법은 [Wear OS 스마트워치로 AAPS 사용하기](../RemoteFeatures/RemoteControlWearOS.md)에 설명되어 있습니다.

(external-companion-apps)=

### 외부 연동 앱

휴대폰에서 **AAPS** 상태 데이터를 브로드캐스트하여, 휴대폰에 설치된 다른 앱(예: 워치나 위젯 동반 앱)이 표시할 수 있게 합니다. 브로드캐스트에는 혈당과 추세, IOB, COB, 기저와 임시 기저, 프로파일 이름, 루프 상태, 휴대폰과 펌프 배터리, 레저버 잔량, 볼러스 진행 상황이 포함됩니다. 사용하는 동반 앱이 이 데이터를 요청하는 경우에만 활성화하십시오.

이 브로드캐스트를 읽는 것으로 알려진 앱은 [WatchDrip+](https://bigdigital.home.blog/)(Xiaomi와 Amazfit 워치), [GlucoDataHandler](https://github.com/pachi81/GlucoDataHandler)(Wear OS 컴플리케이션과 위젯, 그리고 GlucoDataAuto를 통한 Android Auto), G-Watch 앱입니다. 설정 방법은 [스마트워치와 AAPS](#watches-external-companion-apps)에 설명되어 있습니다. 이 중 일부 앱은 IOB와 COB 상태 줄을 위해 위의 **xDrip** 플러그인의 **xDrip+로 상태 보내기**도 사용합니다.

이전 버전에서는 이 플러그인을 **Samsung Tizen**이라고 했습니다. 이 플러그인이 처음에 [Samsung Tizen 워치용 G-Watch 앱](#Watchfaces-tizen)을 위해 만들어졌기 때문입니다.

### Garmin

Garmin 기기(Fenix, Edge...)와 연결

## 처치

**메뉴**(☰)를 열고 [처치 이력](#aaps-screens-treatments)을 선택하면 기록된 처치를 볼 수 있습니다. 입력 항목을 편집하거나 삭제하려면(예: 예상보다 탄수화물을 적게 먹은 경우) '삭제'를 선택한 다음, 하단 내비게이션의 **처치 → 탄수화물**에서 새 값을 입력하십시오(필요하면 시간도 바꾸십시오). [탄수화물](#screens-bolus-carbs)을 참조하십시오.

## 일반

**AAPS** 4에서는 **구성**의 **일반** 범주에 **Autotune**만 표시됩니다. 아래에 설명된 다른 기능은 항상 사용할 수 있으며, 더 이상 여기서 활성화할 필요가 없습니다. 각 단락에 위치가 설명되어 있습니다.

![구성 > 일반](../images/v4/Configuration/configuration_general.png)

### 개요

**AAPS**의 [메인 화면](#AapsScreens-the-homescreen)은 더 이상 플러그인이 아니며 **구성**에 자체 설정이 없습니다. 이전에 여기에 있던 옵션은 **설정**(톱니바퀴 아이콘)에 있습니다: [대화 상자에 노트 표시](#Preferences-show-notes-field-in-treatments-dialogs), [상태 등](#Preferences-status-lights), 볼러스 마법사에서 사용하는 [볼러스 비율](#Preferences-deliver-this-part-of-bolus-wizard-result). **AAPS** 3.x의 슈퍼 볼러스 옵션은 **AAPS** 4에서 [설정으로 제공되지 않습니다](#Preferences-advanced-settings-overview).

(Config-Builder-actions)=

### 동작

**AAPS** 3.x의 동작 탭은 더 이상 없습니다. 그 버튼들은 이제 **관리** 시트에 있습니다. [동작 탭은 어디로 갔습니까?](#screens-action-tab)를 참조하십시오.

### Automation

**관리 → 자동화**에서 [자동화](../DailyLifeWithAaps/Automations.md)를 관리할 수 있습니다. [목표 10](#objectives-objective10)부터 사용할 수 있습니다.

(Config-Builder-sms-communicator)=

### SMS 통신기

원격 보호자가 SMS로 일부 **AAPS** 기능을 제어할 수 있게 합니다. 자세한 설정 정보는 [SMS 명령](../RemoteFeatures/SMSCommands.md)을 참조하십시오.

### Food

**관리 → 음식**에는 Nightscout 음식 데이터베이스에 정의된 음식 프리셋이 표시됩니다. 자세한 설정 정보는 [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods)를 참조하십시오.

참고: 입력 항목은 **AAPS** 계산기에서 사용할 수 없습니다. (View only)

(Config-Builder-autotune)=

### Autotune

Autotune을 활성화할 수 있습니다. [여기](../AdvancedOptions/Autotune.md)를 참조하십시오.

### Maintenance

**메뉴**(☰)를 열고 **정비**를 선택하면 설정을 내보내기 / 가져오기하고 로그 파일을 관리할 수 있습니다.

![정비 화면, 로그 파일](../images/screens/maintenance.png)

![정비 화면, 파일 관리](../images/screens/maintenance_2.png)

![정비 화면, 데이터베이스 관리](../images/screens/maintenance_3.png)

### 구성 관리자

이제 **구성**이라고 합니다: 바로 이 페이지입니다.