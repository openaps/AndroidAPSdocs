# Freestyle Libre 1

על מנת להשתמש בחיישן Libre כחיישן רציף המספק מדידה כל 5 דקות יש לקנות מתאם NFC לבלוטות' כדוגמת:

-   MiaoMiao (גרסה 1 או 2) <https://www.miaomiao.cool/>
-   Blucon Nightrider <https://www.ambrosiasys.com/our-products/blucon/>
-   Bubble  <https://bubbleshop.eu/> או למשתמשים ברוסיה   <https://vk.com/saharmonitor/>

בנוסף אפשר להשתמש בשעון ספציפי, Sony Smartwatch 3, לו מקלט NFC שניתן להפעילו כקורא NFC. המתאמים הרשומים מעלה הם פתרונות פשוטים ועדיפים במרבית המקרים בהם משתמשים ב-Libre 1 כחיישן רציף.

-   Sony Smartwatch 3 (SWR50) <https://github.com/pimpimmi/LibreAlarm/wiki/>

נכון להיום, אם משתמשים ב-Libre 1 כמקור נתונים, לא ניתן להפעיל את האפשרויות ‘הפעל SMB תמיד’ ו-‘הפעל SMB אחרי פחמימות‘ בהגדרות אלגוריתם ה-SMB. מדידות הסוכר של Libre 1 אינן חלקות מספיק לשימוש בטוח עם SMB. ראו [שיפור נתוני סוכר](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) לקבלת פרטים נוספים.

## אם משתמשים ב-xDrip+

-   אם עוד לא התקנתם את xDrip+, הורידו ועקבו אחר ההוראות של [LimiTTEer](https://github.com/JoernL/LimiTTer) או [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki).
-   ב-xDrip+ נווטו להגדרות > הגדרות לשיתוף פעולה בין אפליקציות > הפץ על הטלפון והפעילו.
-   ב-xDrip+ נווטו להגדרות > הגדרות לשיתוף פעולה בין אפליקציות > קבל טיפולים ובחרו כבוי.
-   אם ברצונכם לבצע כיול דרך AndroidAPS, נווטו להגדרות > הגדרות לשיתוף פעולה בין אפליקציות > קבל כיולים והפעילו. ייתכן שתצטרכו לבדוק את ההגדרות שבהגדרות > הגדרות פחות נפוצות > כיול מתקדם.
-   בחרו ביישום xDrip+ בבונה התצורה (הגדרה ב- AndroidAPS).
-   התאימו את ההגדרות ב-xDrip+ לפי [דף הוראות   xDrip+](../Configuration/xdrip.md). ישנו חלק להגדרה בסיסית של xDrip+ והגדרות מיוחדות לשימוש ב-Freestyle Libre עם xDrip+.
-   אם AAPS אינו מקבל ערכי סוכר כאשר הטלפון במצב טיסה השתמשו ב'זהה מקלט' כפי שמתואר בהגדרות [xDrip+ דף](../Configuration/xdrip.md).

## אם משתמשים ב-Glimp

-   תצטרכו להשתמש בגרסת Glimp 4.15.57 ומעלה. גרסאות ישנות יותר לא נתמכות.
-   אם לא הוגדרה כבר, אפשר להוריד את Glimp ולעקוב אחר ההוראות ב[נייטסקאוט](https://nightscout.github.io/uploader/setup/#glimp).
-   בחרו ביישום Glimp בבונה התצורה (הגדרה ב- AndroidAPS).
