# Juggluco 設定

如果尚未設置，請下載 [Juggluco](https://www.juggluco.nl/Juggluco/download.html)。

遵循 [指示](https://www.juggluco.nl/Jugglucohelp/introhelp.html) 來連接您的傳感器。

## 所有 CGM 系統的基本設定

### 停用 Nightscout 上傳器

請勿讓其他應用程式將資料（血糖和治療紀錄）上傳至 Nightscout。

在 Juggluco 中停用任何活動的 Nightscout 上傳器。

![停用 Nightscout 上傳](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Juggluco 到 AAPS

Juggluco 可以將血糖直接傳送到 AAPS，當您使用 [可信任的傳感器](#GettingStarted-TrustedBGSource) 時，讓 SMB 始終啟用。

使用 Libre 2/2+/3/3+ 傳感器時，會將每分鐘的讀數傳送到 AAPS，但不會觸發 AAPS 中的每分鐘計算。

在 Juggluco 中啟用 xDrip 廣播（不啟用 Patched Libre），確認並儲存 AAPS 套件資訊。在 AAPS 中選取 xDrip 血糖資料來源。

在 AAPS 中應用足夠的 [平滑處理](./SmoothingBloodGlucoseData.md)。

![Juggluco 到 AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## Juggluco 到 xDrip

Juggluco 可以將血糖資料傳送至 xDrip，再由 xDrip 傳送至 AAPS。

在 Juggluco 中啟用 Patched Libre（不啟用 xDrip 廣播），確認並儲存 dexdrip 套件資訊。在 AAPS 中選取 xDrip 血糖資料來源。

使用 Libre 2/2+/3/3+ 傳感器時，如有需要，請在 AAPS 中套用足夠的[平滑處理](./SmoothingBloodGlucoseData.md)。xDrip 會將每分鐘的讀取值平均為每 5 分鐘一筆，並[進一步進行平滑處理](#libre2-value-smoothing-raw-values)。

![Juggluco 到 xDrip](../images/juggluco/Juggluco-xDrip+.png)
