# התקנת Git

## Windows

### 1. הורדת git

- **You have to be online all of the time as Android Studio downloads several updates!**
- כל גרסה של git תתאים. For example [https://git-scm.com/download/win](https://git-scm.com/download/win).
- Make sure to note down the installation path. תצטרכו אותו בהמשך.

```{admonition} make git.exe available via Windows PATH
:class: note

Make sure that you can call git.exe without the prefing path as Android Studio needs this to find git.exe. It will then automatically sets the path to git.exe correct in the Android Studio settings.

```

```{image} ../images/Update_GitPath.png
:alt: Git installation path
```

### 2. הגדירו נתיב git ב-Android Studio

- Open File > Settings

  ```{image} ../images/Update_GitSettings1.png
  :alt: Android Studio - open settings
  ```

- Click the small triangle next to Version Control (1.) to open the sub-menu.

- Click Git (2.).

- Make sure update method "Merge" (3.) is selected.

- Check if Android Studio can locate path to git.exe automatically by clicking the button "Test" (4.)

  ```{image} ../images/AndroidStudio361_09.png
  :alt: Android Studio settings
  ```

- If automatic setting is successful git version will be displayed.

- Click "OK" in the dialog box (1.) and "OK" in the settings window (2.).

  ```{image} ../images/AndroidStudio361_10.png
  :alt: Automatic git installation succeeded
  ```

- In case file git.exe cannot be found click "OK" in the dialog box (1.) and then the button with the three dots (2.).

- Use [search function](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) in windows explorer to find "git.exe" if you are unsure where it can be found. You are looking for git.exe located in binfolder.

- Select path to git.exe and make sure you selected the one in **\\bin\\** folder (3.) and click "OK" (4.).

- Close settings window by clicking "OK" button (5.).

  ```{image} ../images/AndroidStudio361_11.png
  :alt: Automatic git installation failed
  ```

### 3. אתחל מחדש

- Reboot your PC to update System Environment.

(check-git-settings-in-android-studio)=
### 4. בדקו את הגדרות git ב-Android Studio

- Open Terminal window in Android Studio

- Enter `git --version` (without quotation marks and no spaces between the two - \[minus sign\]!) and press Return

  ```{image} ../images/AndroidStudio_gitversion1.png
  :alt: git - -version
  ```

- If git is installed and connected properly you will receive an information about the installed version that looks as follows:

  ```{image} ../images/AndroidStudio_gitversion2.png
  :alt: result git-version
  ```

## Mac

- כל גרסה של git תתאים. For example [https://git-scm.com/download/mac](https://git-scm.com/download/mac)
- Use homebrew to install git: `` `$ brew install git` ``.
- לפרטים על התקנת git עיינו ב[תיעוד ה-git הרשמי](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
- אם אתם מתקינים git דרך homebrew אין צורך לשנות שום העדפות. ליתר ביטחון: ניתן למצוא אותם כאן: Android Studio > Preferences.
