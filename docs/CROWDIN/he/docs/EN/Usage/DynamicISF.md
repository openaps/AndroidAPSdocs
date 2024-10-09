(Open-APS-features-DynamicISF)=
## רגישות דינאמית (DynISF)
DynamicISF נוסף בגרסה 3.2 של AAPS ודורש להתחיל את משימה 11 כדי להתחיל שימוש. להפעלה בחרו בבונה התצורה > רגישות דינאמית. מומלץ רק למשתמשים מתקדמים שיש להם שליטה טובה ב-AAPS.

יש לשים לב כי על מנת להשתמש ב-ISF דינאמי ביעילות, נדרש מסד נתונים של AndroidAPS בגודל מינימלי של חמישה ימים.

הרגישות הדינאמית (DynISF) מתאימה את יחס הרגישות לאינסולין באופן דינאמי בהתבסס על המינון היומי הכולל של האינסולין (TDD) ועל ערכי הסוכר הנוכחיים והחזויים.

הרגישות הדינאמית משתמשת במודל של כריס וילסון לקביעת יחס הרגישות לאינסולין (ISF) במקום הגדרות פרופיל סטטיות.‬

‫המשוואה המיושמת היא: ISF = 1800 / (TDD * Ln ((glucose / insulin divisor) + 1))‬

היישום משתמש במשוואה כדי לחשב את גורם הרגישות לאינסולין הנוכחי (ISF) ובתחזיות oref1 עבור אינסולין פעיל (IOB), זמן האפס (ZT) ומודל הארוחות שלא הוכרזו (UAM). החישוב של הרגישות הדינאמית אינו מחשב פחמימות פעילות.

### TDD - סה"כ מינון אינסולין יומי
This uses a combination of the 7 day average TDD, the previous day’s TDD and a weighted average of the last eight hours of insulin use extrapolated out for 24 hours. The total daily dose used in the above equation is weighted one third to each of the above values.

### מחלק אינסולין (Insulin Divisor)
The insulin divisor depends on the peak of the insulin used and is inversely proportional to the peak time. For Lyumjev this value is 75, for Fiasp, 65 and regular rapid insulin, 55.

### Dynamic ISF Adjustment Factor
The adjustment factor allows the user to specify a value between 1% and 300%. This acts as a multiplier on the TDD value and results in the ISF values becoming smaller (ie more insulin required to move glucose levels a small amount) as the value is increased above 100% and larger (i.e. less insulin required to move glucose levels a small amount) as the value is decreased below 100%.

### Future ISF

Future ISF is used in the dosing decisions that oref1 makes. Future ISF uses the same TDD value as generated above, taking the adjustment factor into account. It then uses different glucose values dependent on the case:

* If levels are flat, within +/- 3 mg/dl, and predicted BG is above target, a combination of 50% minimum predicted BG and 50% current BG is used.

* If eventual BG is above target and glucose levels are increasing, or eventual BG is above current BG, current BG is used.

Otherwise, minimum predicted BG is used.

### אפשר יחס רגישות המבוסס על המינון היומי הכולל לשינוי מינון בזאלי וערכי מטרה

הגדרה זו מחליפה את Autosens, ומשתמשת בסך מינון האינסולין של 24 השעות האחרונות או של השבוע האחרון כדי לכוונן את יחס הרגישות ואת המינון הבזאלי, בדומה לדרך בה Autosens עושה זאת. ערך זה שנחשב נמצא בשימוש גם כדי להתאים את ערך המטרה, אם האפשרויות להתאמת ערך המטרה עם הרגישות מופעלות. בניגוד ל- Autosens, אפשרות זו לא מתאימה ערכי ISF. 
