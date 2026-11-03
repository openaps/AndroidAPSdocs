# 지원 종료

현재 AAPS 시스템이 원하는 대로 정확히 작동하더라도 업그레이드할 가치가 있습니다. 새 릴리스에는 문제가 생기기 전까지는 알아채지 못할 수 있는 안전 수정과 버그 수정이 들어 있습니다. 또한 새 휴대폰 OS 버전, CGM 앱, 펌프 펌웨어, Nightscout 변경 사항과의 호환성을 유지하고, 더 넓은 커뮤니티가 테스트한 알고리즘 개선과 기능을 추가합니다. 그리고 아직 지원되는 버전, 다른 사람들이 실제로 문제 해결을 도와줄 수 있는 버전을 계속 사용할 수 있습니다. 일부 이전 AAPS 버전은 오래된 Android 버전에서 계속 작동할 수 있도록 일부러 만료일이 없습니다. 따라서 만료 경고가 없다고 해서 사용 중인 버전이 아직 최신이거나 지원된다는 뜻은 아닙니다.

각 AAPS 버전에는 종료일이 있을 수 있습니다. 이 날짜 이후에는 AAPS가 [루프를 제한](#version-enforcement)할 수 있습니다. AAPS는 버전이 만료되기 전에 경고합니다. 종료일 전에 업데이트를 계획하고 [업데이트 안내](UpdateToNewVersion.md)를 따르십시오.

## 이 페이지 사용 방법

1. AAPS에서 왼쪽 위의 **메뉴**(☰)를 열고 **정보**를 선택하십시오. 그곳에서 사용 중인 AAPS 버전을 볼 수 있습니다.
2. 아래 첫 번째 표에서 같은 버전을 찾으십시오. 그 옆에 있는 종료일을 확인하십시오. 날짜는 **연-월-일** 형식으로 적혀 있습니다. 예를 들어 `2026-10-30`은 2026년 10월 30일을 뜻합니다.
3. 업데이트하기 전에 [릴리스 노트](ReleaseNotes.md)와 [업데이트 안내](UpdateToNewVersion.md)를 확인하십시오. 사용할 수 있는 버전은 휴대폰의 Android 버전에 따라서도 달라집니다.

표에 모든 AAPS 버전의 종료일이 나와 있지는 않습니다. 사용 중인 버전이 표에 없다면 아직 종료일이 정해지지 않았을 수 있습니다. 그렇다고 해서 영원히 지원된다는 뜻은 아닙니다.

## AAPS 버전 종료일

<div id="aaps-eol-status" role="status" aria-live="polite">AAPS 버전 데이터를 불러오는 중…</div>
<noscript>
  표를 보려면 JavaScript를 켜십시오.
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">AAPS 버전</th><th scope="col">종료일</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## Android API 레벨

Android는 각 시스템 버전에 **API 레벨**을 부여합니다. API 레벨은 앱이 사용하는 숫자입니다. 예를 들어 API 레벨 30은 Android 11입니다. 아래 표는 AAPS 버전 데이터에 있는 API 레벨을 사용합니다. 각 행의 AAPS 버전은 표시된 API 레벨에 대해 목록에 있는 값입니다. 설치할 수 있는 모든 버전의 전체 목록은 아닙니다.

To choose an AAPS version for your phone, use the [Android version guidance in the Release Notes](#maintenance-android-version-aaps-version).

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Android API 레벨</th><th scope="col">목록에 있는 AAPS 버전</th></tr></thead>
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
    status.textContent = 'Could not load AAPS version data. 나중에 다시 시도하십시오.';
  }
});
</script>
```
