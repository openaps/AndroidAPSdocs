# Nightscout 설정

당신이 이미 Nightscout 사이트를 설치하였다는 가정하에 진행합니다. 만약 그렇지 않을 경우, [Nightscout](http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku) 설치안내 페이지를 방문하셔서 설치하세요. 아래 자료는 당신이 Nightscout 사이트에 추가할 필요가 있는 설정에 대해 안내합니다. 사용자의 Nightscout 사이트는 최소한 버전 10이상(0.10으로 표시) 이어야 하므로, 최신버전([LINK](http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie))으로 사용하고 있음을 확인하시기 바랍니다. 그렇지 않을경우, AAPS앱에서 에러메세지를 보여줄 것입니다. 일부 유저들이 Azure의 무료 한도 이상으로 AAPS가 데이터를 사용하는것을 발견하였습니다. 따라서 Azure보단 Heroku가 권장됩니다.

* https://herokuapp.com/ 을 방문하세요.

* App Service명을 클릭하세요.

* (Azure인 경우) "Application settings" / (Heroku인 경우) "Settings" > "Reveal Config Vars"를 클릭하세요.

* 아래와 같이 변수를 수정 또는 추가하세요.
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `PUMP_FIELDS` = `reservoir battery clock` 
  * 펌프 상태를 모니터링([LINK](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring))하기 위해 다양한 알람 설정이 가능합니다. 특히 펌프배터리량(%) 설정이 권장됩니다. 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 
  * Optional: The following 'timers' can be set for the coloring in the AAPS careportal: 
    * `BAGE_WARN` = `480` (Warning after x hours since last Battery Changed Event in Careportal)
  * `BAGE_URGENT` = `504` (Urgent warning after x hours since last Battery Changed Event in Careportal)
  * `CAGE_WARN` = `40` (Warning after x hours since last Cannula Changed Event in Careportal)
  * `CAGE_URGENT` = `48` (Urgent warning after x hours since last Cannula Changed Event in Careportal)
  * `IAGE_WARN` = `144` (Warning after x hours since last Insulin Cartridge Changed Event in Careportal)
  * `IAGE_URGENT` = `192` (Warning after x hours since last Insulin Cartridge Changed Event in Careportal)
  * `SAGE_WARN` = `160` (Warning after x hours since the last CGM Sensor Insert Event in Careportal)
  * `SAGE_URGENT` = `168` (Urgent Warning after x hours since the last CGM Sensor Insert Event in Careportal)

![Azure](../../images/nightscout1.png)

* (Azure의 경우) 패널 상단에서 "Save"를 클릭하세요.

## ns.10be.de

This service is offered by fellow looper Martin Schiftan free of charge at the moment. You can install Nightscout with a few clicks and use it directly. He tries to automate the administration to such an extent that you don't have to do much manual work anymore. All settings can be made via a user-friendly web interface. The service includes an automated basal rate check using Autotune. The server is located in Germany.

<http://ns.10be.de/en/index.html>