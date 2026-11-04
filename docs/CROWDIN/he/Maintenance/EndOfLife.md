# סוף התמיכה

גם אם מערכת AAPS הנוכחית שלכם עובדת בדיוק כמו שאתם רוצים, עדיין כדאי לשדרג. גרסאות חדשות מביאות תיקוני בטיחות ותיקוני באגים שאולי לא תשימו לב אליהם עד שהם יהיו חשובים; הן שומרות על תאימות לגרסאות חדשות של מערכת ההפעלה בטלפון, לאפליקציות CGM, לקושחת המשאבה ולשינויים ב-Nightscout; הן מוסיפות שיפורים באלגוריתם ותכונות שנבדקו על ידי הקהילה הרחבה; והן מבטיחות שתישארו בגרסה שעדיין נתמכת, ושאחרים באמת יוכלו לעזור לכם לפתור בה תקלות. לחלק מגרסאות AAPS הקודמות אין תאריך תפוגה בכוונה, כדי שיוכלו להמשיך לעבוד בגרסאות Android ישנות. לכן, אם אין אזהרת תפוגה, זה לא סימן שהגרסה שלכם עדיין עדכנית או נתמכת.

לכל גרסה של AAPS יכול להיות תאריך סיום. אחרי תאריך זה, AAPS עשוי [להגביל את הלולאה](#version-enforcement). AAPS מזהיר לפני שתוקף הגרסה פג. כדאי לתכנן את העדכון לפני תאריך הסיום, ולפעול לפי [מדריך העדכון](UpdateToNewVersion.md).

## איך להשתמש בדף זה

1. ב-AAPS, יש לפתוח את **התפריט** (☰) בפינה העליונה של המסך ולבחור **אודות**. שם תופיע גרסת AAPS שלכם.
2. יש למצוא את אותה גרסה בטבלה הראשונה שלמטה. יש לקרוא את תאריך הסיום שלידה. התאריכים כתובים בתבנית **שנה-חודש-יום**. לדוגמה, `2026-10-30` פירושו 30 באוקטובר 2026.
3. לפני העדכון, יש לבדוק את [הערות הגרסה](ReleaseNotes.md) ואת [מדריך העדכון](UpdateToNewVersion.md). הגרסה שאפשר להשתמש בה תלויה גם בגרסת Android של הטלפון.

הטבלה לא מציגה תאריך סיום לכל גרסה של AAPS. אם הגרסה שלכם חסרה, ייתכן שתאריך הסיום שלה עוד לא נקבע. זה לא אומר שהתמיכה בה תימשך לתמיד.

## תאריכי הסיום של גרסאות AAPS

<div id="aaps-eol-status" role="status" aria-live="polite">נתוני הגרסאות של AAPS בטעינה…</div>
<noscript>
  יש להפעיל JavaScript כדי לראות את הטבלאות.
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">גרסת AAPS</th><th scope="col">תאריך סיום</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## רמות API של Android

Android נותן לכל גרסת מערכת **רמת API**, שהיא מספר שאפליקציות משתמשות בו. לדוגמה, רמת API 30 היא Android 11. הטבלה שלמטה משתמשת ברמות API מתוך נתוני הגרסאות של AAPS. גרסת AAPS בכל שורה היא הערך שרשום עבור רמת ה-API שמוצגת. זו לא רשימה מלאה של הגרסאות שאפשר להתקין.

To choose an AAPS version for your phone, use the [Android version guidance in the Release Notes](#maintenance-android-version-aaps-version).

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">רמת API של Android</th><th scope="col">גרסת AAPS רשומה</th></tr></thead>
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
    status.textContent = 'Could not load AAPS version data. נא לנסות שוב מאוחר יותר.';
  }
});
</script>
```
