# Fin de vie

Même si votre système AAPS actuel fonctionne exactement comme vous le souhaitez, la mise à jour vaut quand même la peine. Les nouvelles versions apportent des corrections de sécurité et de bugs que vous ne remarquerez peut-être pas avant qu'elles deviennent importantes. Elles restent compatibles avec les nouvelles versions de l'OS du téléphone, les applications MGC, le firmware des pompes et les changements de Nightscout. Elles ajoutent des améliorations de l'algorithme et des fonctions testées par une large communauté. Et elles vous gardent sur une version encore prise en charge, pour laquelle les autres peuvent vraiment vous aider à résoudre les problèmes. Certaines anciennes versions d'AAPS n'ont volontairement pas de date d'expiration, pour pouvoir continuer à fonctionner sur d'anciennes versions d'Android. L'absence d'avertissement d'expiration ne signifie donc pas que votre version est encore à jour ou prise en charge.

Chaque version d'AAPS peut avoir une date de fin. Après cette date, AAPS peut [limiter la boucle](#version-enforcement). AAPS vous avertit avant qu'une version expire. Prévoyez de faire la mise à jour avant la date de fin, et suivez le [guide de mise à jour](UpdateToNewVersion.md).

## Comment utiliser cette page

1. Dans AAPS, ouvrez le **menu** (☰) en haut à gauche et choisissez **À propos**. Vous y verrez votre version d'AAPS.
2. Cherchez la même version dans le premier tableau ci-dessous. Lisez la date de fin à côté. Les dates sont écrites sous la forme **année-mois-jour**. Par exemple, `2026-10-30` signifie le 30 octobre 2026.
3. Consultez les [notes de version](ReleaseNotes.md) et le [guide de mise à jour](UpdateToNewVersion.md) avant de faire la mise à jour. La version que vous pouvez utiliser dépend aussi de la version Android de votre téléphone.

Le tableau n'indique pas de date de fin pour chaque version d'AAPS. Si votre version n'y figure pas, sa date de fin n'a peut-être pas encore été fixée. Cela ne veut pas dire qu'elle sera prise en charge pour toujours.

## Dates de fin des versions d'AAPS

<div id="aaps-eol-status" role="status" aria-live="polite">Chargement des données des versions AAPS…</div>
<noscript>
  Activez JavaScript pour voir les tableaux.
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Version d'AAPS</th><th scope="col">Date de fin</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## Niveaux d'API Android

Android donne à chaque version du système un **niveau d'API**, c'est-à-dire un nombre utilisé par les applications. Par exemple, le niveau d'API 30 correspond à Android 11. Le tableau ci-dessous utilise les niveaux d'API des données des versions AAPS. La version d'AAPS de chaque ligne est la valeur indiquée pour le niveau d'API affiché. Ce n'est pas une liste complète des versions que vous pouvez installer.

Pour choisir une version d'AAPS pour votre téléphone, utilisez les [conseils sur les versions Android dans les notes de version](#maintenance-android-version-aaps-version). Si aucune version d'AAPS n'est indiquée pour un niveau d'API, le tableau affiche « Aucune indiquée ».

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Niveau d'API Android</th><th scope="col">Version d'AAPS indiquée</th></tr></thead>
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
      typeof entry.supported === 'string' && entry.supported ? entry.supported : 'Aucune indiquée'
    ]));
    status.remove();
  } catch {
    status.textContent = 'Impossible de charger les données des versions AAPS. Veuillez réessayer plus tard.';
  }
});
</script>
```
