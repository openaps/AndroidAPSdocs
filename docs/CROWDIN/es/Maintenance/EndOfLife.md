# Fin de vida útil

Aunque tu sistema AAPS actual funcione exactamente como quieres, vale la pena actualizar. Las versiones nuevas traen correcciones de seguridad y de errores que quizá no notes hasta que importen. Mantienen la compatibilidad con nuevas versiones del sistema operativo del teléfono, apps de MCG, firmware de bombas y cambios de Nightscout. Añaden mejoras del algoritmo y funciones que la comunidad ya ha probado. Y te aseguran estar en una versión que todavía tiene soporte, con la que otras personas pueden ayudarte de verdad a resolver problemas. Algunas versiones anteriores de AAPS no tienen fecha de caducidad a propósito, para que puedan seguir funcionando en versiones antiguas de Android. Por eso, que no aparezca un aviso de caducidad no significa que tu versión esté actualizada o tenga soporte.

Cada versión de AAPS puede tener una fecha de fin. Después de esta fecha, AAPS puede [limitar el lazo](#version-enforcement). AAPS te avisa antes de que caduque una versión. Planifica la actualización antes de la fecha de fin y sigue la [guía de actualización](UpdateToNewVersion.md).

## Cómo usar esta página

1. En AAPS, abre el **menú** (☰) arriba a la izquierda y elige **Acerca de**. Ahí verás tu versión de AAPS.
2. Busca la misma versión en la primera tabla de abajo. Lee la fecha de fin que aparece a su lado. Las fechas se escriben como **año-mes-día**. Por ejemplo, `2026-10-30` significa 30 de octubre de 2026.
3. Revisa las [Notas de la versión](ReleaseNotes.md) y la [guía de actualización](UpdateToNewVersion.md) antes de actualizar. La versión que puedes usar también depende de la versión de Android de tu teléfono.

La tabla no muestra una fecha de fin para todas las versiones de AAPS. Si tu versión no aparece, puede que todavía no se haya fijado su fecha de fin. Esto no significa que vaya a tener soporte para siempre.

## Fechas de fin de las versiones de AAPS

<div id="aaps-eol-status" role="status" aria-live="polite">Cargando los datos de versiones de AAPS…</div>
<noscript>
  Activa JavaScript para ver las tablas.
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Versión de AAPS</th><th scope="col">Fecha de fin</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## Niveles de API de Android

Android da a cada versión del sistema un **nivel de API**, que es un número que usan las apps. Por ejemplo, el nivel de API 30 es Android 11. La tabla de abajo usa los niveles de API de los datos de versiones de AAPS. La versión de AAPS de cada fila es el valor indicado para el nivel de API mostrado. Esta no es una lista completa de las versiones que puedes instalar.

Para elegir una versión de AAPS para tu teléfono, usa la [guía de versiones de Android en las Notas de la versión](#maintenance-android-version-aaps-version). Si no hay ninguna versión de AAPS indicada para un nivel de API, la tabla muestra “Ninguna indicada”.

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Nivel de API de Android</th><th scope="col">Versión de AAPS indicada</th></tr></thead>
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
      typeof entry.supported === 'string' && entry.supported ? entry.supported : 'Ninguna indicada'
    ]));
    status.remove();
  } catch {
    status.textContent = 'No se pudieron cargar los datos de versiones de AAPS. Inténtalo de nuevo más tarde.';
  }
});
</script>
```
