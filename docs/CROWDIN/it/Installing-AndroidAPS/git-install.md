# Install git

## Windows

### 1. Download git

- **You have to be online all of the time as Android Studio downloads several updates!**
- Any git version should work. For example [https://git-scm.com/download/win](https://git-scm.com/download/win).
- Make sure to note down the installation path. You will need it in the next step.

```{image} ../images/Update_GitPath.png
:alt: Git installation path
```

### 2. Set git path in Android Studio

- Let Studio know where is git.exe located: File - Settings

  ```{image} ../images/Update_GitSettings1.png
  :alt: Android Studio - open settings
  ```

- In the next window: Version Control - Git

- Choose correct path: ... **/Git/bin** (including /bin)

- Make sure update method "Merge" is selected.

  ```{image} ../images/Update_GitSettings2a.png
  :alt: Android Studio - GIT path
  ```

### 3. Reboot

- Reboot your PC to update System Environment.

### 4. Check git settings in Android Studio

- Open Terminal window in Android Studio

- Enter "git --version" (without quotation marks!) and press Return

  ```{image} ../images/AndroidStudio_gitversion1.png
  :alt: git --version
  ```

- If git is installed and connected properly you will receive an information about the installed version that looks as follows:

  ```{image} ../images/AndroidStudio_gitversion2.png
  :alt: result git-version
  ```

## Mac

- Any git version should work. For example [https://git-scm.com/download/mac](https://git-scm.com/download/mac)
- Use homebrew to install git: `` `$ brew install git` ``.
- For details on installing git see the [official git documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
- If you install git via homebrew there is no need to change any preferences. Just in case: They can be found here: Android Studio - Preferences.
