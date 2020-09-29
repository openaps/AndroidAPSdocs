# 혈당 데이터 평활화

만약 혈당 데이타가 불안하거나 잡음이 심한경우, AAPS가 인슐린을 잘못 주입해 고혈당과 저혈당을 초래할 수 있습니다. 이러한 이유로 문제가 해결될 때 까지 Loop를 사용하지 않는 것이 중요합니다. CGM에 따라 이러한 문제는 CGM의 구성이나 센서 문제 혹은 사이트 문제로 인한 것일 수 있습니다. You may need to replace your CGM sensor to resolve this. Some features like 'Enable SMB always' and 'Enable SMB after carbs' can only be used with a nice-filtering BG source.

## DexcomG5 앱(패치버전)

DexcomG5 앱(패치버전)을 사용할 경우, 혈당데이터는 부드럽고 평활하게 수신됩니다. SMB를 사용함에 있어서 제약은 없습니다.

## xDrip+와 덱스콤 G5 사용시

XDrip G5 'OB1 collector in native mode' 사용하는 경우 충분히 평활화된 데이터가 전송됩니다.

## xDrip+와 프리스타일 리브레 사용시

xDrip+를 프리스타일 리브레의 데이터 소스로 사용한다면 혈당 데이터가 충분히 평활화되지 않기때문에 SMB의 '항상 SMB를 사용합니다'나 '탄수화물 이후 SMB를 사용합니다' 기능을 활성화 하면 안됩니다. 이를 제외하고는, 데이터의 노이즈를 줄이기 위해 취할 수 있는 몇가지 방법이 있습니다.

**Smooth Sensor Noise.** xDrip+에서 세팅 > xDrip+ 디스플레이 세팅에 가서 'Smooth Sensor Noise'를 활성화 하세요. 이것은 노이즈가 있는 데이터를 평활하게 해줍니다.

**Smooth Sensor Noise (Ultrasensitive).** xDrip+에서 여전히 노이즈가 있는 데이터가 보여진다면, Smooth Sensor Noise (Ultrasensitive) setting에서 보다 적극적으로 평활하게 할 수 있습니다. 이것은 매우 낮은 노이즈 레벨을 감지하더라도 평활화 시킵니다. To do this, first enable engineering mode in xDrip+. 이 후, 세팅 > xDrip+ 디스플레이 세팅에서 Smooth Sensor Noise (Ultrasensitive) 를 활성화 시키세요.