# עבור משתמשי Eversense

הדרך הפשוטה ביותר לשימוש בחיישן Eversense עם AndroidAPS היא להתקין את הגרסה הלא אמריקאית של [אפליקציית Eversense](https://github.com/BernhardRo/Esel/blob/master/apk/Eversense_CGM_v1.0.410-patched.apk) (יש למחוק את הגרסה המקורית מראש).

**אזהרה: בעת מחיקת האפליקציה הישנה, ההיסטוריה שנשמרה בה, שישנה יותר מהשבוע, תימחק!**

על מנת להעביר את הנתונים אל AndroidAPS, יש להתקין את [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk) ולאפשר בה את "Send to AAPS and xDrip" וב-AndroidAPS לבחור ב[בונה התצורה](../Configuration/Config-Builder.md) את מקור הנתונים כ-MM640g. היות ונתוני הסוכר של Eversense רועשים לפעמים, מומלץ לאפשר ב-ESEL את "Smooth Data", שעדיפה על האפשרות "התבסס על הפרש ממוצע קצר במקום הפרש פשוט\רגיל" ב-AAPS.

ניתן למצוא את כל קבצי ה-APK, כולל את זה המותאם לארה"ב וגם הוראות לשימוש ב-Eversense ב-xDrip [כאן](https://github.com/BernhardRo/Esel/tree/master/apk).
