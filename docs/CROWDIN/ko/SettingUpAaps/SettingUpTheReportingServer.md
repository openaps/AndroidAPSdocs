# 리포팅 서버 설정하기

현재 **AAPS**와 함께 사용할 수 있는 리포팅 서버는 두 가지입니다:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![리포팅 서버](../images/Building-the-App/ReportingServer.png)

Nightscout 사용을 권장합니다.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout는 CGM 데이터와 **AAPS** 데이터를 기록하고 표시하며 보고서를 만드는 웹 애플리케이션입니다. 강력한 플랫폼이며 여러 해 전부터 **AAPS**에 통합되어 있습니다. 사용자와 보호자가 환자의 당뇨병 데이터를 거의 실시간으로 볼 수 있습니다(관련된 모든 구성 요소 사이에 인터넷 연결이 충분하면 데이터를 받은 후 제공하기까지 몇 초밖에 걸리지 않습니다). 또한 보호자가 **AAPSClient**에서 **AAPS**로 보내는 원격 명령도 전달합니다([마스터 ↔ 클라이언트 제어](#client-master-control) 참조).

Nightscout는 오픈 소스 소프트웨어로 제공됩니다. 누구나 무료 또는 유료 서비스를 사용하여 Nightscout 서버를 만들고 운영할 수 있습니다.

더 많은 정보는 [Nightscout 프로젝트 웹사이트](http://nightscout.github.io/)에서 볼 수 있습니다.

### 옵션 1 - Nightscout 서버 직접 설정하기

Nightscout 리포팅 서버를 만들려면 관리가 필요한 웹 기반 애플리케이션이 하나 이상 필요할 수 있습니다. 완전히 무료로 서비스를 사용하려면, 제공업체가 무료 요금제를 없앨 때 Nightscout 사이트와 데이터를 옮겨야 할 수 있습니다.

Nightscout를 설정하는 방법과 여러 운영 방식의 장단점, 예상 비용은 [여기](https://nightscout.github.io/nightscout/new_user/#free-diy)에서 볼 수 있습니다.

### 옵션 2 - 호스팅된 Nightscout 서비스 유료로 사용하기

월 요금을 받고 Nightscout를 대신 호스팅해 주는 여러 서비스 제공업체의 옵션도 있습니다. 비용은 부담할 만한 수준이며, 호스팅 옵션의 장점은 IT 지식이 없어도 되고 운영 인프라가 필요 없다는 것입니다.


기존 Nightscout 사용자는 Nightscout 서버를 어디에서 어떻게 호스팅할지 때때로 다시 검토하고, 더 적합한 옵션이 있으면 바꿀 수 있습니다.

Nightscout 호스팅 서비스 몇 가지가 [여기](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table)에 나와 있습니다.

### Nightscout 추가 구성

Nightscout 인스턴스가 준비되어 실행 중이면, 추가로 고려할 사항은 [Nightscout 구성 페이지](../SettingUpAaps/Nightscout.md)를 참조하십시오.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool은 2023년 말에 출시된 버전 3.2부터 **AAPS**에서 사용할 수 있습니다.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger
**AAPS**를 사용할 때 데이터 수신과 데이터 보고 사이에 3시간의 지연이 있으므로, Tidepool은 보호자와 실시간 정보를 공유하는 데 적합하지 않습니다.  
한편, Nightscout를 사용할 수 없는 경우 Tidepool은 환자의 내분비내과 의사와 보고서를 공유하는 데 좋은 방법이 될 수 있습니다.  
```

Tidepool은 [오픈 소스](https://github.com/tidepool-org) 프로젝트입니다. Tidepool 서버에서 무료로 계정을 운영할 수 있습니다.

AAPS와 함께 Tidepool을 설정하는 방법에 대한 더 많은 정보는 [여기](../SettingUpAaps/Tidepool.md)에 있습니다.

```{admonition} **AAPS** has the uploader for Tidepool integrated
:class: note
Tidepool용 업로더 앱은 사용할 **필요가 없습니다**: **AAPS**가 혈당, 처치, 기저를 대신 업로드합니다. Tidepool 개인 계정만 있으면 됩니다. 별도의 Tidepool 업로더 도구로 데이터를 업로드하지 마십시오. 값이 중복됩니다.  
```

## 다음 단계

리포팅 서버를 설정한 후에는 [설정 마법사](./SetupWizard.md)로 휴대폰의 **AAPS**를 구성할 수 있습니다. 설정 마법사는 **AAPS**를 리포팅 서버에도 연결합니다.