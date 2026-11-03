# Kullanım ömrünün sonu

Mevcut AAPS sisteminiz tam istediğiniz gibi çalışsa bile güncellemeye değer. Yeni sürümler, önemli bir an gelene kadar hiç fark etmeyebileceğiniz güvenlik düzeltmeleri ve hata düzeltmeleri getirir. Yeni telefon işletim sistemi sürümleri, CGM uygulamaları, pompa üretici yazılımı ve Nightscout değişiklikleriyle uyumluluğu korur. Daha geniş topluluk tarafından test edilmiş algoritma iyileştirmeleri ve özellikler ekler. Ayrıca hâlâ desteklenen ve başkalarının sorun gidermede size gerçekten yardım edebileceği bir sürümde kalmanızı sağlar. Bazı eski AAPS sürümlerinin, eski Android sürümlerinde çalışmaya devam edebilmeleri için bilerek bir bitiş tarihi yoktur. Bu nedenle bir süre sonu uyarısının olmaması, sürümünüzün hâlâ güncel veya destekleniyor olduğu anlamına gelmez.

Her AAPS sürümünün bir bitiş tarihi olabilir. Bu tarihten sonra AAPS [döngüyü sınırlayabilir](#version-enforcement). AAPS, bir sürümün süresi dolmadan önce sizi uyarır. Bitiş tarihinden önce güncellemeyi planlayın ve [güncelleme kılavuzunu](UpdateToNewVersion.md) izleyin.

## Bu sayfa nasıl kullanılır

1. AAPS'te sol üstteki **menüyü** (☰) açın ve **Hakkında** seçeneğini seçin. Orada AAPS sürümünüzü göreceksiniz.
2. Aynı sürümü aşağıdaki ilk tabloda bulun. Yanındaki bitiş tarihini okuyun. Tarihler **yıl-ay-gün** olarak yazılır. Örneğin `2026-10-30`, 30 Ekim 2026 anlamına gelir.
3. Güncellemeden önce [Sürüm notlarını](ReleaseNotes.md) ve [güncelleme kılavuzunu](UpdateToNewVersion.md) kontrol edin. Kullanabileceğiniz sürüm, telefonunuzun Android sürümüne de bağlıdır.

Tablo, her AAPS sürümü için bir bitiş tarihi göstermez. Sürümünüz listede yoksa, bitiş tarihi henüz belirlenmemiş olabilir. Bu, sürümün sonsuza kadar destekleneceği anlamına gelmez.

## AAPS sürümlerinin bitiş tarihleri

<div id="aaps-eol-status" role="status" aria-live="polite">AAPS sürüm verileri yükleniyor…</div>
<noscript>
  Tabloları görmek için JavaScript'i açın.
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">AAPS sürümü</th><th scope="col">Bitiş tarihi</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## Android API seviyeleri

Android, her sistem sürümüne bir **API seviyesi** verir. Bu, uygulamaların kullandığı bir sayıdır. Örneğin API seviyesi 30, Android 11'dir. Aşağıdaki tablo, AAPS sürüm verilerindeki API seviyelerini kullanır. Her satırdaki AAPS sürümü, gösterilen API seviyesi için listelenen değerdir. Bu, yükleyebileceğiniz sürümlerin tam listesi değildir.

To choose an AAPS version for your phone, use the [Android version guidance in the Release Notes](#maintenance-android-version-aaps-version).

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Android API seviyesi</th><th scope="col">Listelenen AAPS sürümü</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

```{raw} html

<script>
document.addEventListener('DOMContentLoaded', async () => {
  const status = document.getElementById('aaps-eol-status');
  if (!status) return;

  function showRows(id, rows) {
    const container = document.getElementById(id);
    const body = container.querySelector('tbody');
    for (const values of rows) {
      const row = body.insertRow();
      for (const value of values) row.insertCell().textContent = value;
    }
    container.hidden = rows.length === 0;
  }

  try {
    const response = await fetch('https://raw.githubusercontent.com/nightscout/AndroidAPS/refs/heads/versions/definition.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (!Array.isArray(data)) throw new Error('Invalid version data');

    const versions = data.filter(entry =>
      entry && typeof entry.version === 'string' &&
      typeof entry.endDate === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(entry.endDate)
    ).sort((a, b) => b.version.localeCompare(a.version, undefined, { numeric: true }));
    const android = data.filter(entry =>
      entry && Number.isInteger(entry.minAndroid) && Number.isInteger(entry.maxAndroid) &&
      typeof entry.supported === 'string' && entry.supported
    ).sort((a, b) => b.minAndroid - a.minAndroid);
    if (!versions.length && !android.length) throw new Error('No version data');

    // Merge neighbouring versions that share an end date and the same x.y.z prefix
    // (for example 3.2.0.0 to 3.2.0.3) into a single row.
    const groups = [];
    for (const entry of versions.slice().reverse()) {
      const prefix = entry.version.split('.').slice(0, 3).join('.');
      const last = groups[groups.length - 1];
      if (last && last.endDate === entry.endDate && last.prefix === prefix) {
        last.versions.push(entry.version);
      } else {
        groups.push({ prefix, endDate: entry.endDate, versions: [entry.version] });
      }
    }
    const label = list => list.length === 1 ? list[0]
      : list.length === 2 ? `${list[0]} and ${list[1]}`
      : `${list[0]} to ${list[list.length - 1]}`;
    showRows('aaps-eol-versions', groups.reverse().map(g => [label(g.versions), g.endDate]));
    showRows('aaps-eol-android', android.map(entry => [
      entry.minAndroid === entry.maxAndroid
        ? String(entry.minAndroid) : `${entry.minAndroid}–${entry.maxAndroid}`,
      entry.supported
    ]));
    status.remove();
  } catch {
    status.textContent = 'Could not load AAPS version data. Lütfen daha sonra tekrar deneyin.';
  }
});
</script>
```
