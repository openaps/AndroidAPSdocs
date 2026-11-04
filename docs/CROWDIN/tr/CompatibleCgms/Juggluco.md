# Juggluco ayarları

Henüz kurmadıysanız [Juggluco](https://www.juggluco.nl/Juggluco/download.html)'yu indirin.

Sensörünüzü bağlamak için [talimatları](https://www.juggluco.nl/Jugglucohelp/introhelp.html) izleyin.

## Tüm CGM sistemleri için temel ayarlar

### Nightscout yükleyiciyi kapatın

Başka hiçbir uygulamanın Nightscout'a veri (kan şekeri ve tedaviler) yüklemesine izin vermemelisiniz.

Juggluco'da Nightscout'a etkin olan tüm yükleyicileri kapatın.

![Nightscout yüklemesini kapatma](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Juggluco'dan AAPS'e

Juggluco kan şekerini doğrudan AAPS'e gönderebilir; [güvenilir bir sensör](#GettingStarted-TrustedBGSource) kullanıyorsanız bu, SMB'lere her zaman izin verir.

Libre 2/2+/3/3+ sensörü kullanırken dakikalık ölçümler AAPS'e gönderilir, ancak AAPS'te dakikalık hesaplamaları tetiklemez.

Juggluco'da xDrip broadcast seçeneğini açın (Patched Libre seçeneğini açmayın), AAPS paket bilgisini onaylayın ve kaydedin. AAPS'te xDrip KŞ veri kaynağını seçin.

AAPS'te yeterli [yumuşatma](./SmoothingBloodGlucoseData.md) uygulayın.

![Juggluco'dan AAPS'e](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## Juggluco'dan xDrip'e

Juggluco kan şekerini xDrip'e gönderebilir, xDrip de bunu AAPS'e gönderir.

Juggluco'da Patched Libre seçeneğini açın (xDrip broadcast seçeneğini açmayın), dexdrip paket bilgisini onaylayın ve kaydedin. AAPS'te xDrip KŞ veri kaynağını seçin.

Gerekirse AAPS'te yeterli [yumuşatma](./SmoothingBloodGlucoseData.md) uygulayın. Libre 2/2+/3/3+ sensörü kullanırken xDrip dakikalık ölçümlerin ortalamasını alarak 5 dakikalık ölçümler yapar ve bunları [ayrıca yumuşatır](#libre2-value-smoothing-raw-values).

![Juggluco'dan xDrip'e](../images/juggluco/Juggluco-xDrip+.png)
