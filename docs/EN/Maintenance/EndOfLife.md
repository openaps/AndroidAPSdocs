# End of life

Even if your current AAPS system works exactly the way you like, upgrading is still worth it because newer releases bring safety fixes and bug corrections you may never notice until they matter, keep compatibility with new phone OS versions, CGM apps, pump firmware and Nightscout changes, add algorithm improvements and features that have been tested by the wider community, and ensure you stay on a version that is still supported and that others can actually help you troubleshoot.
Some previous AAPS versions deliberately have no expiration date so they can keep working on older Android versions, so the lack of an expiration warning is not a sign that your version is still up to date or supported.

Each AAPS version can have an end date. After this date, AAPS may [limit the loop](#version-enforcement). AAPS warns you before a version expires. Plan to update before the end date, and follow the [update guide](UpdateToNewVersion.md).

## How to use this page

1. In AAPS, open the **menu** (☰) at the top left and choose **About**. You will see your AAPS version there.
2. Find the same version in the first table below. Read the end date next to it. Dates are written as **year-month-day**. For example, `2026-10-30` means 30 October 2026.
3. Check the [Release Notes](ReleaseNotes.md) and the [update guide](UpdateToNewVersion.md) before you update. The version you can use also depends on your phone's Android version.

The table does not show an end date for every AAPS version. If your version is missing, its end date may not have been set yet. This does not mean it will be supported forever.

## AAPS version end dates

<div id="aaps-eol-status" role="status" aria-live="polite">Loading AAPS version data…</div>
<noscript>Turn on JavaScript to see the tables.</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">AAPS version</th><th scope="col">End date</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## Android API levels

Android gives each system version an **API level**, which is a number used by apps. For example, API level 30 is Android 11. The table below uses API levels from AAPS version data. The AAPS version in each row is the value listed for the API level shown. This is not a full list of versions you can install.

To choose an AAPS version for your phone, use the [Android version guidance in the Release Notes](#maintenance-android-version-aaps-version). If no AAPS version is listed for an API level, the table says “None listed”.

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Android API level</th><th scope="col">AAPS version listed</th></tr></thead>
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
      typeof entry.supported === 'string' && entry.supported ? entry.supported : 'None listed'
    ]));
    status.remove();
  } catch {
    status.textContent = 'Could not load AAPS version data. Please try again later.';
  }
});
</script>
```
