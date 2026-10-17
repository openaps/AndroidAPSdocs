# 生命週期終止

即使你目前的 AAPS 系統完全符合你的使用方式，仍然值得更新，因為新版本會帶來你可能不會注意到、直到關鍵時刻才會發現的重要安全修正與錯誤修正；保持與新手機作業系統版本、CGM 應用程式、幫浦韌體與 Nightscout 變更的相容性；新增經由更廣大社群測試的演算法改進與功能；並確保你停留在仍受支援、他人實際能協助你進行疑難排解的版本。部分舊版 AAPS 為了能在較舊的 Android 版本上繼續運作，刻意不設定到期日；因此沒有出現到期警告，並不代表你的版本仍是最新或仍受支援。

每個 AAPS 版本都可能有終止日期。 After this date, AAPS may [limit the loop](#version-enforcement). 在版本到期前，AAPS 會先提醒你。請規劃在終止日期前更新，並依照[更新指南](UpdateToNewVersion.md)。

## 如何使用本頁

1. 在 AAPS 中，點選右上角的三個點，並選擇 **About**。你會在那裡看到你的 AAPS 版本。
2. 在下方第一個表格中找到相同的版本。讀取其旁邊的終止日期。日期以 **年-月-日** 表示。例如，`2026-10-30` 代表 2026 年 10 月 30 日。
3. 在更新前，請先查看[發行說明](ReleaseNotes.md)與[更新指南](UpdateToNewVersion.md)。你可使用的版本也取決於你手機的 Android 版本。

表格不一定會顯示每個 AAPS 版本的終止日期。若你的版本未列出，可能尚未設定其終止日期。這並不代表它會一直受到支援。

## AAPS 版本終止日期

<div id="aaps-eol-status" role="status" aria-live="polite">正在載入 AAPS 版本資料…</div>
<noscript>
  開啟 JavaScript 以檢視表格。
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">AAPS 版本</th><th scope="col">終止日期</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## Android API 等級

Android 會為每個系統版本指定一個 **API 等級**，這是應用程式使用的數字。例如，API 等級 30 對應 Android 11。下列表格使用來自 AAPS 版本資料的 API 等級。每一列中的 AAPS 版本，是該列所示 API 等級所對應的數值。這不是你可安裝版本的完整清單。

To choose an AAPS version for your phone, use the [Android version guidance in the Release Notes](#maintenance-android-version-aaps-version). 若某個 API 等級未列出 AAPS 版本，表格會顯示「未列出」。

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Android API 等級</th><th scope="col">列出的 AAPS 版本</th></tr></thead>
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
      entry && Number.isInteger(entry.minAndroid) && Number.isInteger(entry.maxAndroid)
    ).sort((a, b) => b.minAndroid - a.minAndroid);
    if (!versions.length && !android.length) throw new Error('No version data');

    showRows('aaps-eol-versions', versions.map(entry => [entry.version, entry.endDate]));
    showRows('aaps-eol-android', android.map(entry => [
      entry.minAndroid === entry.maxAndroid
        ? String(entry.minAndroid) : `${entry.minAndroid}–${entry.maxAndroid}`,
      typeof entry.supported === 'string' && entry.supported ? entry.supported : '未列出'
    ]));
    status.remove();
  } catch {
    status.textContent = '無法載入 AAPS 版本資料。請稍後再試。';
  }
});
</script>
```
