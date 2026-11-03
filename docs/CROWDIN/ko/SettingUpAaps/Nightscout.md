# Nightscout

(Nightscout-security-considerations)=

## Security considerations

Nightscout는 **AAPS**의 리포팅 및 모니터링 서버입니다. **AAPS**가 데이터를 Nightscout에 업로드하면, 사용자나 보호자가 Nightscout 웹사이트나 팔로워 앱에서 데이터를 봅니다. Nightscout에는 의료 데이터, 프로파일, 처치가 저장되므로 Nightscout 웹사이트의 보안을 생각해 두는 것이 좋습니다.

**AAPS** 4에서는 원격 제어가 Nightscout 웹사이트를 거치지 않습니다. 클라이언트 제어가 켜져 있는 동안([강화 모드](#client-master-control-hardened-mode)), Nightscout에 직접 입력한 처치나 목표는 **AAPS**에서 **적용되지 않습니다**. 원격 명령은 대신 페어링된 **AAPSClient**에서 옵니다. [마스터 ↔ 클라이언트 제어](#client-master-control)를 참조하십시오.

Nightscout를 AAPS의 혈당 데이터 소스로 사용한다면 최대한 주의하십시오.

### Nightscout settings

[인증 역할](https://nightscout.github.io/nightscout/security)을 사용하면 Nightscout 사이트에 대한 공개 접근을 막을 수 있습니다. URL은 반드시 `readable` 토큰과 함께만 공유하고, `admin` 토큰과 함께 공유하지 마십시오.

Nightscout `API_SECRET`은 사이트의 주 비밀번호입니다. 공개적으로 공유하지 마십시오.

(Nightscout-aaps-settings)=

### AAPS 설정

Nightscout의 데이터(프로파일 변경, 처치 등)를 받아들이는 것은 선택 사항이며 기본으로 꺼져 있습니다. 아래에 설명된 스위치는 클라이언트 제어가 켜져 있는 동안(강화 모드)과 [간단 모드](#preferences-simple-mode)에서는 숨겨집니다.

* NSClientV3 플러그인의 **동기화** 설정은 다음 방법 중 하나로 엽니다. 1) **설정**(메인 화면의 톱니바퀴 아이콘) -> **NSClientV3** -> **동기화**, 또는 2) **구성**(☰ 메뉴) -> **통신** -> NSClientV3 아래의 "**설정**".
* "NS에 데이터 업로드"를 활성화하십시오.
* "혈당 데이터를 NS에 업로드"는 혈당 출처의 설정(**구성 → 혈당 출처 → 설정**)에 있습니다. 이 설정을 활성화하십시오. 단, AAPS의 혈당 데이터 소스가 Nightscout라면 활성화하지 **마십시오**.
* Nightscout가 혈당 데이터 소스가 아니라면 "NS에서 CGM 데이터 받기"를 활성화하지 마십시오.

#### Nightscout에서 동기화하지 않기

"NS에서 … 받기" 옵션을 모두 비활성화해 두면 AAPS는 Nightscout의 변경 사항을 전혀 사용하지 않습니다:

![Nightscout에 업로드만](../images/preferences/settings_nsclient_sync.png)

#### Nightscout의 변경 사항 받아들이기

이 옵션들을 활성화하면 Nightscout를 통해 AAPS 설정을 바꿀 수 있습니다. 예를 들어 프로파일 수정과 전환, 임시 목표, 탄수화물 추가가 AAPS에 반영됩니다. 이 옵션들은 클라이언트 제어와 간단 모드가 꺼져 있을 때만 표시됩니다.  
인슐린 처치는 "볼러스하지 않고 기록만" 같은 계산에만 사용된다는 점에 유의하십시오.

![Nightscout 받기 옵션 활성화됨](../images/NSsafety3.png)

### 추가 보안 설정

[안전 우선](#preparing-safety-first)에 설명된 대로 휴대폰을 최신 상태로 유지하십시오.

(Nightscout-manual-nightscout-setup)=

## Nightscout 수동 설정

이미 Nightscout 사이트가 있다고 가정합니다. 없다면 설정 방법 전체는 [Nightscout](http://nightscout.github.io/nightscout/new_user/) 페이지를 참조하십시오. 아래 안내는 Nightscout 사이트에도 추가해야 하는 설정입니다. Nightscout 사이트는 최소 버전 15여야 합니다. [최신 버전](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version)을 사용하는지 확인하십시오. 그렇지 않으면 AAPS 앱에 오류 메시지가 표시됩니다.

* [변수 편집](https://nightscout.github.io/nightscout/setup_variables/#nightscout-configuration)

* 다음과 같이 변수를 추가하거나 편집하십시오:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * [펌프 모니터링](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring)을 위해 여러 알람을 설정할 수 있습니다. 특히 배터리 % 알람을 권장합니다: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

* 변경 사항을 저장하십시오. 이제 Nightscout 사이트에 필(pill)이 표시됩니다. `SHOW_PLUGINS`에 추가하면 기본으로 표시되게 할 수 있습니다.
  
  * `SHOW_PLUGINS` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  
  ![Nightscout 필(pill)](../images/nightscout1.png)

## 유료 SaaS(Software as a Service)로 사용하는 Nightscout

변수는 업체의 웹 인터페이스에서 설정하십시오. 필요하면 업체 지원 서비스에 문의하십시오.