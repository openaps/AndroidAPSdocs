# Τέλος υποστήριξης

Ακόμη κι αν το σύστημα AAPS που έχετε τώρα λειτουργεί ακριβώς όπως θέλετε, η αναβάθμιση αξίζει. Οι νέες εκδόσεις φέρνουν διορθώσεις ασφάλειας και σφαλμάτων που ίσως δεν θα προσέξετε μέχρι να γίνουν σημαντικές. Διατηρούν τη συμβατότητα με νέες εκδόσεις του λειτουργικού συστήματος του τηλεφώνου, με εφαρμογές CGM, με το firmware της αντλίας και με αλλαγές στο Nightscout. Προσθέτουν βελτιώσεις στον αλγόριθμο και λειτουργίες που έχει δοκιμάσει η ευρύτερη κοινότητα. Και εξασφαλίζουν ότι μένετε σε μια έκδοση που υποστηρίζεται ακόμη, ώστε οι άλλοι να μπορούν πραγματικά να σας βοηθήσουν να λύσετε προβλήματα. Ορισμένες παλαιότερες εκδόσεις του AAPS σκόπιμα δεν έχουν ημερομηνία λήξης, ώστε να συνεχίζουν να λειτουργούν σε παλαιότερες εκδόσεις Android. Γι' αυτό, αν δεν βλέπετε προειδοποίηση λήξης, αυτό δεν σημαίνει ότι η έκδοσή σας είναι ενημερωμένη ή ότι υποστηρίζεται ακόμη.

Κάθε έκδοση του AAPS μπορεί να έχει ημερομηνία λήξης. Μετά από αυτή την ημερομηνία, το AAPS μπορεί να [περιορίσει το κύκλωμα](#version-enforcement). Το AAPS σας προειδοποιεί πριν λήξει μια έκδοση. Σχεδιάστε την ενημέρωση πριν από την ημερομηνία λήξης και ακολουθήστε τον [οδηγό ενημέρωσης](UpdateToNewVersion.md).

## Πώς να χρησιμοποιήσετε αυτή τη σελίδα

1. Στο AAPS, ανοίξτε το **μενού** (☰) πάνω αριστερά και επιλέξτε **Σχετικά**. Εκεί θα δείτε την έκδοση του AAPS σας.
2. Βρείτε την ίδια έκδοση στον πρώτο πίνακα παρακάτω. Διαβάστε την ημερομηνία λήξης δίπλα της. Οι ημερομηνίες γράφονται ως **έτος-μήνας-ημέρα**. Για παράδειγμα, το `2026-10-30` σημαίνει 30 Οκτωβρίου 2026.
3. Πριν από την ενημέρωση, διαβάστε τις [Σημειώσεις έκδοσης](ReleaseNotes.md) και τον [οδηγό ενημέρωσης](UpdateToNewVersion.md). Η έκδοση που μπορείτε να χρησιμοποιήσετε εξαρτάται και από την έκδοση Android του τηλεφώνου σας.

Ο πίνακας δεν δείχνει ημερομηνία λήξης για κάθε έκδοση του AAPS. Αν η έκδοσή σας λείπει, μπορεί να μην έχει οριστεί ακόμη η ημερομηνία λήξης της. Αυτό δεν σημαίνει ότι θα υποστηρίζεται για πάντα.

## Ημερομηνίες λήξης των εκδόσεων του AAPS

<div id="aaps-eol-status" role="status" aria-live="polite">Φόρτωση δεδομένων εκδόσεων του AAPS…</div>
<noscript>
  Ενεργοποιήστε τη JavaScript για να δείτε τους πίνακες.
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Έκδοση AAPS</th><th scope="col">Ημερομηνία λήξης</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## Επίπεδα API του Android

Το Android δίνει σε κάθε έκδοση του συστήματος ένα **επίπεδο API**, δηλαδή έναν αριθμό που χρησιμοποιούν οι εφαρμογές. Για παράδειγμα, το επίπεδο API 30 είναι το Android 11. Ο παρακάτω πίνακας χρησιμοποιεί επίπεδα API από τα δεδομένα εκδόσεων του AAPS. Η έκδοση του AAPS σε κάθε γραμμή είναι η τιμή που αναφέρεται για το επίπεδο API που φαίνεται. Αυτή δεν είναι πλήρης λίστα των εκδόσεων που μπορείτε να εγκαταστήσετε.

Για να επιλέξετε μια έκδοση του AAPS για το τηλέφωνό σας, χρησιμοποιήστε τις [οδηγίες για την έκδοση Android στις Σημειώσεις έκδοσης](#maintenance-android-version-aaps-version). Αν δεν αναφέρεται καμία έκδοση του AAPS για ένα επίπεδο API, ο πίνακας γράφει «Καμία έκδοση».

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Επίπεδο API του Android</th><th scope="col">Έκδοση AAPS που αναφέρεται</th></tr></thead>
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
      typeof entry.supported === 'string' && entry.supported ? entry.supported : 'Καμία έκδοση'
    ]));
    status.remove();
  } catch {
    status.textContent = 'Δεν ήταν δυνατή η φόρτωση των δεδομένων εκδόσεων του AAPS. Δοκιμάστε ξανά αργότερα.';
  }
});
</script>
```
