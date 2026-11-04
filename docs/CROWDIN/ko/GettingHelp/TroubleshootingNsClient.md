(Troubleshooting-NSClient-troubleshooting-nsclient)=

# NSClient 문제 해결

NSClient는 Nightscout와의 안정적인 통신이 필요합니다. 연결이 불안정하면 동기화 오류가 생기고 데이터 사용량이 많아집니다.

Nightscout에서 아무도 사용자를 팔로우하지 않는다면 배터리를 아끼기 위해 NSClient를 일시 중지할 수 있습니다. 또는 Wi-Fi 연결 중이거나 충전 중일 때만 연결되도록 NSClient를 설정할 수 있습니다.

* 불안정한 연결은 어떻게 알 수 있습니까?

NSClient 화면(**구성** > **통신** > **NSClientV3** > **플러그인 열기**)을 열고 **상태**와 로그를 확인하십시오. 웹소켓이 활성화되어 있으면 상태는 "connected"로 계속 유지되어야 하며, 로그에 재연결 메시지가 거의 없어야 합니다. 재연결이 많이 보이면 문제가 있는 것입니다.

* Restart

먼저 Nightscout를 재시작한 다음 휴대폰을 재시작하여 문제가 계속되는지 확인하십시오.

Nightscout가 Heroku에 호스팅되어 있다면 다음과 같이 Nightscout를 재시작할 수 있습니다: Heroku에 로그인하고, Nightscout 앱 이름을 클릭하고, 'More' 메뉴를 클릭한 다음 'Restart all dynos'를 클릭하십시오.

다른 호스팅 서비스를 사용한다면 해당 서비스의 안내 문서를 따르십시오.

* 휴대폰 문제

Android가 휴대폰을 절전 모드로 전환할 수 있습니다. 휴대폰의 전원 옵션에서 AAPS가 예외로 설정되어 있어 항상 백그라운드에서 실행될 수 있는지 확인하십시오.

네트워크 신호가 강한 곳에서 NSClient를 다시 확인하십시오.

다른 휴대폰으로 시도해 보십시오.

* Nightscout

사이트가 Azure에 호스팅되어 있다면, Heroku로 옮긴 후 연결 문제가 나아졌다는 사용자가 많습니다.

Azure에서 연결 문제를 피하는 방법은 Application settings에서 HTTP protocol을 2.0으로, Websockets를 ON으로 설정하는 것입니다

* Nightscout에서 혈당 측정값을 받지 못함

**AAPS**가 Nightscout에 올바르게 연결되지만 혈당이 N/A로 표시되면: [NSClientV3 설정](#Preferences-nsclient)에서 **동기화**를 열고 **NS에서 CGM 데이터 받기**를 켜십시오. 클라이언트 제어가 켜져 있는 동안([강화 모드](#client-master-control-hardened-mode))에는 이 옵션이 숨겨집니다. 이 경우 **구성** → **혈당 출처**에서 **NSClient 혈당**이 선택되어 있는지 확인하십시오.

* 그래도 오류가 계속 발생한다면...

MongoDB에서 (또는 Nightscout의 database size 플러그인으로) 데이터베이스 크기를 확인하십시오. MongoDB의 무료 요금제를 사용한다면 496MB는 데이터베이스가 가득 찼다는 뜻이며 정리가 필요합니다. [데이터베이스 크기를 확인하고 데이터를 정리하려면 이 Nightscout 안내를 따르십시오](https://nightscout.github.io/troubleshoot/troubleshoot/#database-full).

데이터베이스에서 데이터를 지우기 전에, 아직 설정하지 않았다면 AAPS 데이터를 Open Humans 프로젝트에 기부하는 것을 고려하십시오 (연구용). 방법은 [OpenHumans 설정 페이지](../SupportingAaps/OpenHumans.md)에 있습니다.