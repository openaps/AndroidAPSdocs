# Obecná doporučení ohledně CGM

## Opatření při používání CGM

Ať už používáte jakýkoli systém CGM, pokud chcete kalibrovat z krve, měli byste dodržovat několik velmi jasných pravidel, a to bez ohledu na to, zda používáte DIY software CGM nebo oficiální aplikace.

-   Ujistěte se, že máte čisté ruce i používaná zařízení.
-   Snažte se kalibrovat tehdy, když je vaše glykémie stabilní (rovná křivka po dobu 15–30 minut je obvykle dostatečná)
-   Nekalibrujte, pokud se vaše glykémie pohybuje (stoupá nebo klesá).
-   Kalibrujte „dostatečně“ – oficiální aplikace vás vyzvou ke kontrole jednou nebo dvakrát denně. Pro DIY systémy to nemusí platit a měli byste být opatrní, pokud byste pokračovali v používání CGM bez kalibrací.
-   U senzorů, které kalibraci nevyžadují nebo ji neumožňují, si alespoň jednou denně změřte skutečnou glykémii z krve. AAPS bude jen tak bezpečný, jak spolehlivé jsou hodnoty ze senzoru.
-   Pokud je to možné, kalibrujte některými hodnotami v nižším rozsahu (4–5 mmol/l nebo 72–90 mg/dl) a některými v mírně vyšším rozsahu (7–9 mmol/l nebo 126–160 mg/dl), protože to dává lepší rozsah pro kalibraci bodu/sklonu.

## Nastavení senzoru (G6)

Při zavádění senzoru se doporučuje netlačit na aplikátor příliš silně, aby nedošlo ke krvácení. Kontakty senzoru by se neměly dostat do kontaktu s krví.

Po nastřelení senzoru je možno nakliknout vysílač do pouzdra senzoru. Pozor! Vysílač nejprve nasaďte na hranaté straně senzoru, a až poté na kulaté.

(general-cgm-troubleshooting)=
## Řešení problémů

### Problém s připojením

Bluetooth spojení může být rušeno jinými Bluetooth zařízeními v okolí, jako jsou glukometry, sluchátka, tablety, nebo kuchyňskými spotřebiči, jako jsou mikrovlnné trouby nebo sklokeramické desky. V tomto případě xDrip nezobrazuje žádné hodnoty glykémie. Když se Bluetooth spojení obnoví, chybějící data se doplní.

### Chyby senzorů

Pokud se opakovaně objevují chyby senzoru, zkuste senzor zavést na jiné místo na těle. Kontakty senzoru by se neměly dostat do kontaktu s krví.

Chybu „Sensor Error“ často vyřeší, když se hned napijete a masírujete okolí senzoru!

### Skákající hodnoty

Můžete zkusit změnit nastavení blokování šumu v xDrip (Settings - Inter-App Settings - Noise Blocking), např. „Block Very High noise and worse“. Viz také [Vyhlazování dat glykémie](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Záporné stáří senzoru

![Stáří senzoru na řádku Senzor v rozbaleném stavovém panelu](../images/main/main_status_row_expanded.png)

Stáří senzoru se zobrazuje na řádku **Senzor** ve stavovém panelu na hlavní obrazovce (rozbalíte ho klepnutím na šipku). Záporné stáří vznikne, pokud existuje buď dvojitý [záznam péče](#aaps-screens-careportal) „CGM Výměna senzoru“, nebo výměna senzoru se špatným datem. Otevřete obrazovku **Historie ošetření** (nabídka ☰), vyberte kartu **Péče** a smažte chybný záznam.
