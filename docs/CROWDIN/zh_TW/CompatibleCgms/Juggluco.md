- - -
orphan: true

- - -

# Juggluco 設定

如果尚未設置，請下載 [Juggluco](https://www.juggluco.nl/Juggluco/download.html)。

遵循 [指示](https://www.juggluco.nl/Jugglucohelp/introhelp.html) 來連接您的感測器。

## 所有 CGM 系統的基本設定

### 停用 Nightscout 上傳器

從 AAPS 3.2 開始，你不應讓其他應用程式上傳資料（血糖和治療方案）到 Nightscout。

在 Juggluco 中停用任何活動的 Nightscout 上傳器。

![停用 Nightscout 上傳](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Juggluco 到 AAPS

Juggluco 可以將血糖直接傳送到 AAPS，當您使用 [可信任的感測器](#GettingStarted-TrustedBGSource) 時，讓 SMB 始終啟用。

使用 Libre 2/2+/3/3+ 感測器時，會將每分鐘的讀數傳送到 AAPS，但不會觸發 AAPS 中的每分鐘計算。

在 Juggluco 中啟用 xDrip 廣播（不啟用 Patched Libre），確認並儲存 AAPS 套件資訊。 在 AAPS 中選擇 xDrip+ 血糖資料來源。

在 AAPS 中應用足夠的 [平滑處理](./SmoothingBloodGlucoseData.md)。

![Juggluco 到 AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## Juggluco 到 xDrip+

Juggluco 可以將血糖傳送到 xDrip+，然後它會將資料傳送到 AAPS。

在 Juggluco 中啟用 Patched Libre（不啟用 xDrip 廣播），確認並儲存 dexdrip 套件資訊。 在 AAPS 中選擇 xDrip+ 血糖資料來源。

在使用 Libre 2/2+/3/3+ 感測器時，如有必要，若需在 AAPS 中應用足夠的 [平滑處理](./SmoothingBloodGlucoseData.md)，xDrip+ 將每分鐘讀數平均到 5 分鐘，並且 [同樣進行平滑處理](#libre2-value-smoothing-raw-values)。

![Juggluco 到 xDrip+](../images/juggluco/Juggluco-xDrip+.png)
