# Fim de vida

Mesmo que o seu sistema AAPS atual funcione exatamente como deseja, vale a pena atualizar: as novas versões trazem correções de segurança e de erros que talvez nunca note até serem importantes, mantêm a compatibilidade com novas versões do sistema do telefone, apps de CGM, firmware das bombas e alterações do Nightscout, acrescentam melhorias do algoritmo e funções testadas por toda a comunidade, e garantem que fica numa versão ainda suportada, com a qual os outros o podem realmente ajudar a resolver problemas. Algumas versões anteriores do AAPS não têm data de expiração de propósito, para poderem continuar a funcionar em versões mais antigas do Android; por isso, a falta de um aviso de expiração não significa que a sua versão está atualizada ou ainda é suportada.

Cada versão do AAPS pode ter uma data de fim. Depois desta data, o AAPS pode [limitar o loop](#version-enforcement). O AAPS avisa-o antes de uma versão expirar. Planeie a atualização antes da data de fim e siga o [guia de atualização](UpdateToNewVersion.md).

## Como usar esta página

1. No AAPS, abra o **menu** (☰) no canto superior esquerdo e escolha **Sobre**. Aí verá a sua versão do AAPS.
2. Procure a mesma versão na primeira tabela abaixo. Leia a data de fim ao lado dela. As datas estão escritas como **ano-mês-dia**. Por exemplo, `2026-10-30` significa 30 de outubro de 2026.
3. Consulte as [Notas das Versões](ReleaseNotes.md) e o [guia de atualização](UpdateToNewVersion.md) antes de atualizar. A versão que pode usar depende também da versão do Android do seu telefone.

A tabela não mostra uma data de fim para todas as versões do AAPS. Se a sua versão não aparece, a data de fim pode ainda não ter sido definida. Isso não significa que será suportada para sempre.

## Datas de fim das versões do AAPS

<div id="aaps-eol-status" role="status" aria-live="polite">A carregar os dados das versões do AAPS…</div>
<noscript>
  Ative o JavaScript para ver as tabelas.
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Versão do AAPS</th><th scope="col">Data de fim</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## Níveis de API do Android

O Android dá a cada versão do sistema um **nível de API**, que é um número usado pelas apps. Por exemplo, o nível de API 30 é o Android 11. A tabela abaixo usa os níveis de API dos dados das versões do AAPS. A versão do AAPS em cada linha é o valor indicado para o nível de API mostrado. Esta não é uma lista completa das versões que pode instalar.

Para escolher uma versão do AAPS para o seu telefone, use as [indicações sobre a versão do Android nas Notas das Versões](#maintenance-android-version-aaps-version). Se nenhuma versão do AAPS estiver indicada para um nível de API, a tabela mostra “None listed” (nenhuma indicada).

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Nível de API do Android</th><th scope="col">Versão do AAPS indicada</th></tr></thead>
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
