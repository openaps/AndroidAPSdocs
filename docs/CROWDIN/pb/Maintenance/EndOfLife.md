# Fim da vida útil

Mesmo que o seu sistema AAPS atual funcione exatamente como você gosta, vale a pena atualizar. As versões mais novas trazem correções de segurança e de erros que você talvez só perceba quando forem importantes. Elas mantêm a compatibilidade com novas versões do sistema do telefone, apps de CGM, firmware de bombas e mudanças no Nightscout. Elas trazem melhorias no algoritmo e recursos testados pela comunidade. E elas garantem que você use uma versão que ainda tem suporte, para que outras pessoas possam realmente ajudar você a resolver problemas. Algumas versões anteriores do AAPS não têm data de expiração de propósito, para que possam continuar funcionando em versões mais antigas do Android. Por isso, a falta de um aviso de expiração não significa que a sua versão ainda está atualizada ou tem suporte.

Cada versão do AAPS pode ter uma data de término. Depois dessa data, o AAPS pode [limitar o loop](#version-enforcement). O AAPS avisa você antes de uma versão expirar. Planeje atualizar antes da data de término e siga o [guia de atualização](UpdateToNewVersion.md).

## Como usar esta página

1. No AAPS, abra o **menu** (☰) no canto superior esquerdo e escolha **Sobre**. Lá você verá a sua versão do AAPS.
2. Encontre a mesma versão na primeira tabela abaixo. Leia a data de término ao lado dela. As datas são escritas como **ano-mês-dia**. Por exemplo, `2026-10-30` significa 30 de outubro de 2026.
3. Leia as [Notas de versão](ReleaseNotes.md) e o [guia de atualização](UpdateToNewVersion.md) antes de atualizar. A versão que você pode usar também depende da versão do Android do seu telefone.

A tabela não mostra uma data de término para todas as versões do AAPS. Se a sua versão não aparece, a data de término dela talvez ainda não tenha sido definida. Isso não significa que ela terá suporte para sempre.

## Datas de término das versões do AAPS

<div id="aaps-eol-status" role="status" aria-live="polite">Carregando os dados das versões do AAPS…</div>
<noscript>
  Ative o JavaScript para ver as tabelas.
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Versão do AAPS</th><th scope="col">Data de término</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## Níveis de API do Android

O Android dá a cada versão do sistema um **nível de API**, que é um número usado pelos apps. Por exemplo, o nível de API 30 é o Android 11. A tabela abaixo usa os níveis de API dos dados de versões do AAPS. A versão do AAPS em cada linha é o valor listado para o nível de API mostrado. Esta não é uma lista completa das versões que você pode instalar.

Para escolher uma versão do AAPS para o seu telefone, use as [orientações sobre a versão do Android nas Notas de versão](#maintenance-android-version-aaps-version). Se nenhuma versão do AAPS estiver listada para um nível de API, a tabela mostra “None listed” (nenhuma listada).

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Nível de API do Android</th><th scope="col">Versão do AAPS listada</th></tr></thead>
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
