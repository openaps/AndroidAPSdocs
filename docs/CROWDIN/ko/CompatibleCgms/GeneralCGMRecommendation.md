# 일반적인 CGM 권고 사항

## CGM 위생관리

어떤 CGM 시스템을 사용하든, 혈액으로 보정할 생각이라면 DIY CGM 소프트웨어를 사용하든 공식 앱을 사용하든 꼭 지켜야 할 매우 분명한 규칙이 있습니다.

-   손과 기구가 깨끗한지 확인하십시오.
-   평평한 화살표의 점이 연속으로 나올 때 보정하십시오(보통 15-30분이면 충분합니다)
-   혈당이 오르거나 내려가고 있을 때는 보정하지 마십시오.
-   “충분히” 보정하십시오. 공식 앱에서는 하루에 한두 번 확인하라는 요청이 나옵니다. DIY 시스템에서는 이런 요청이 나오지 않을 수 있으므로, 보정 없이 계속 사용하는 것에 주의해야 합니다.
-   보정이 필요 없거나 보정을 허용하지 않는 센서는 적어도 하루에 한 번 실제 혈당을 확인하십시오. AAPS의 안전성은 센서 측정값의 신뢰성만큼만 보장됩니다.
-   가능하면 일부 측정값은 낮은 범위(4-5mmol/L 또는 72-90mg/dL)에서, 일부는 조금 높은 수준(7-9mmol/L 또는 126-160mg/dL)에서 보정하십시오. 그래야 점/기울기 보정에 더 좋은 범위가 됩니다.

## 센서 삽입 (G6)

When setting sensor, it is recommended not to press the inserter too firmly in order to avoid bleeding. 센서 접점에 피가 닿지 않아야 합니다.

After setting the sensor, the transmitter can be clicked into the sensor holder. 주의할 점! First click in the square side and then press down the round side.

(general-cgm-troubleshooting)=
## Troubleshooting

### 연결 문제

Bluetooth connection may be disturbed by other nearby Bluetooth devices such as blood glucose meters, headsets, tablets or kitchen devices such as microwave ovens or ceramic hobs. 이 경우 xDrip은 혈당값을 표시하지 않습니다. 블루투스 연결이 다시 이루어지면 빠진 데이터가 채워집니다(백필).

### 센서 오류

If recurring sensor errors occur try selecting a different body site to set your sensor. 센서 접점에 피가 닿지 않아야 합니다.

"센서 오류"는 바로 물을 마시고 센서 주변을 마사지하면 해결되는 경우가 많습니다!

### 튀는 혈당값

xDrip의 노이즈 차단 설정(Settings - Inter-App Settings - Noise Blocking)을 바꿔 볼 수 있습니다. 예: "Block Very High noise and worse". [혈당 데이터 평활화](../CompatibleCgms/SmoothingBloodGlucoseData.md)도 참고하십시오.

### 음수 센서 사용 기간

![확장된 상태 패널의 센서 줄에 표시된 센서 사용 기간](../images/main/main_status_row_expanded.png)

센서 사용 기간은 메인 화면 상태 패널의 **센서** 줄에 표시됩니다(펼치려면 화살표를 누르십시오). 음수 사용 기간은 "센서 삽입" [케어포털 기록](#aaps-screens-careportal)이 두 번 있거나 센서 삽입 날짜가 잘못된 경우에 생깁니다. **처치 이력**(메뉴 ☰)을 열고 **케어포털** 탭을 선택한 다음 잘못된 기록을 삭제하십시오.
