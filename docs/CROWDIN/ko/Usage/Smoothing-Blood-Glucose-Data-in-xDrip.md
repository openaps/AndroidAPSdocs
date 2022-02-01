# 혈당 데이터 평활화

만약 혈당 데이타가 불안하거나 잡음이 심한경우, AAPS가 인슐린을 잘못 주입해 고혈당과 저혈당을 초래할 수 있습니다. 이러한 이유로 문제가 해결될 때 까지 Loop를 사용하지 않는 것이 중요합니다. CGM에 따라 이러한 문제는 CGM의 구성이나 센서 문제 혹은 사이트 문제로 인한 것일 수 있습니다. You may need to replace your CGM sensor to resolve this. Some features like 'Enable SMB always' and 'Enable SMB after carbs' can only be used with a nice-filtering BG source.

## Dexcom sensors

### Build Your Own Dexcom App

When using [BYODA](../Hardware/DexcomG6#if-using-g6-with-build-your-own-dexcom-app) your BG data is smooth and consistent. Furthermore you can take advantage of Dexcom back-smoothing. There are no restrictions in using SMB.

### xDrip+ with Dexcom G5 or G6

XDrip G5 'OB1 collector in native mode' 사용하는 경우 충분히 평활화된 데이터가 전송됩니다.

### Dexcom G5 App (patched)

When using Dexcom G5 App (patched) your BG data is smooth and consistent. There are no restrictions in using SMB.

## Freestyle Libre sensors

### xDrip+ with Freestyle Libre

When using xDrip+ as your data source for Freestyle Libre values until now you cannot activate 'Enable SMB always' and 'Enable SMB after carbs' within SMB because the BG values are not smooth enough. Except this, there are a couple of things you can do to help reduce noise in the data.

**Smooth Sensor Noise.** In xDrip+ Settings > xDrip+ Display Settings ensure that Smooth Sensor Noise is turned on. This attempts to apply smoothing to noisy data.

**Smooth Sensor Noise (Ultrasensitive).** If you are still seeing noisy data in xDrip+ you can apply more aggressive smoothing using the Smooth Sensor Noise (Ultrasensitive) setting. This will attempt to apply smoothing even on very low levels of detected noise. To do this, first enable [engineering mode](Enabling-Engineering-Mode-in-xDrip.md) in xDrip+. Then navigate to Settings > xDrip+ Display Settings and turn on Smooth Sensor Noise (Ultrasensitive).