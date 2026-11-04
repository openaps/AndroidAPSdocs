(Sensitivity-detection-and-COB-sensitivity-detection)=

# 민감도 감지

## 민감도 알고리즘

**AAPS**는 현재 3가지 민감도 감지 모델을 제공합니다:

* Sensitivity AAPS
* Sensitivity WeightedAverage
* Sensitivity Oref1

### Sensitivity AAPS

민감도는 Oref1과 같은 방법으로 계산되지만, 과거 어느 시간까지 볼지 시간 범위를 지정할 수 있습니다. 최소 탄수화물 흡수는 설정의 최대 탄수화물 흡수 시간으로부터 계산됩니다.

### Sensitivity WeightedAverage

민감도는 편차의 가중 평균으로 계산됩니다. 과거 어느 시간까지 볼지 시간 범위를 지정할 수 있습니다. 최근 편차일수록 가중치가 높습니다. 최소 탄수화물 흡수는 설정의 최대 탄수화물 흡수 시간으로부터 계산됩니다. 이 알고리즘은 민감도 변화를 가장 빠르게 따라갑니다.

(SensitivityDetectionAndCob-sensitivity-oref1)=

### Sensitivity Oref1

민감도는 최근 8시간의 데이터로 계산됩니다. 마지막 주입 부위 교체가 8시간 이내이면 그때부터의 데이터로 계산됩니다. 탄수화물은 (흡수되지 않았다면) 설정에 지정된 시간이 지나면 잘립니다. Oref1 알고리즘만 미입력 식사(UAM)를 지원합니다. 즉, UAM이 감지된 시간은 민감도 계산에서 제외됩니다. 따라서 SMB를 UAM과 함께 사용한다면, 제대로 작동하도록 Oref1 알고리즘을 선택해야 합니다. UAM에 대한 자세한 내용은 [Super Micro Bolus (SMB)](#Open-APS-features-super-micro-bolus-smb) 섹션을 참조하십시오.

Oref1이 권장 옵션입니다. UAM을 감지할 수 있고 더 최신 알고리즘인 [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb)와 함께 작동할 수 있는 유일한 옵션입니다.

## 동시 탄수화물

여러 식사가 겹칠 때, 민감도 AAPS 및 가중평균 알고리즘과 Oref1 사이에는 큰 차이가 있습니다.

* Oref1은 한 번에 한 식사만 흡수된다고 가정합니다. 두 번째 식사는 첫 번째 식사가 완전히 흡수된 후에 흡수되기 시작합니다.
* 민감도 AAPS와 가중평균은 탄수화물을 입력하는 즉시 흡수를 시작합니다. 활성 탄수화물이 있는 식사가 두 개 이상이면, 최소 탄수화물 흡수는 식사 크기와 최대 흡수 시간에 따라 조정됩니다. 따라서 최소 흡수는 Oref1에 비해 더 높아집니다.