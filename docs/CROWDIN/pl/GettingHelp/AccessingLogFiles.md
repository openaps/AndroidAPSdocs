(Accessing-logfiles-accessing-logfiles)=

# Dostęp do plików logów

* Podłącz telefon do komputera w trybie przesyłania plików
* Pliki logów znajdziesz w katalogu danych AAPS, w `Android\data\info.nightscout.androidaps\files`.  
    Nazwa głównego folderu pamięci może się trochę różnić w zależności od telefonu.
* Dla [AAPSClient](#RemoteControl_aapsclient) lokalizacja to `Android\data\info.nightscout.aapsclient\files`.
* Note: log location has changed in **AAPS 3.3**. W razie potrzeby zajrzyj do dokumentacji poprzednich wersji.

![logi](../images/aapslog.png)

* The current log is a .log file which can be viewed in a number of ways such as [LogCat](https://developer.android.com/studio/debug/am-logcat.html) within Android Studio, any log viewer Android app, or simply as plain text. 
* Poprzednie pliki logów są spakowane (zip) i zapisane w folderach według daty i godziny. 
* Jeśli udostępniasz plik logu na [discordzie](https://discord.gg/4fQUWHZ4Mw), aby porozmawiać o możliwym błędzie, rozpakuj i wyślij plik z datą sprzed wystąpienia błędu.