(github-fork)=

# 瀏覽器建置－步驟 1：建立 GitHub 複刻

```{note}
這是<a href="BrowserBuild.md">瀏覽器建置</a>的**步驟 1**。
```

You will need to store your personal Android Java Key and Google Drive information as secrets in GitHub (later in the process, we will explain how).

由於這無法在 AndroidAPS 的公開倉庫中完成，你需要製作自己的原始碼副本（稱為分支）。

## GitHub 帳號

如果你尚未擁有帳號，你需要[創建一個 GitHub 帳號](https://github.com/signup)。  
你可以使用電子郵件註冊，也可以透過 Google 註冊。遵循註冊和驗證過程。

當你擁有帳號後，請[登入 GitHub](https://github.com/login)。

## 分支 AndroidAPS

按照[這個連結](https://github.com/nightscout/AndroidAPS)打開官方 AndroidAPS 倉庫。

點選分支圖示。這將在你的帳號內創建一個副本。

![fork_aaps](../images/Building-the-App/CI/ForkAAPS.png)

向下滾動至下一個螢幕並點選**建立分支**。

![fork_aaps_confirm](../images/Building-the-App/CI/ForkAAPS2.png)

*Note: you can **unselect** "Copy the master branch only" if you will want to build developer versions or customizations.*

![fork_aaps_main](../images/Building-the-App/CI/ForkAAPS3.png)

```{note}
You cannot fork and you see this?<br/><br/>
**`No available destinations to fork this repository.`**<br/><br/>
![Already forked](../images/Building-the-App/CI/ForkAAPS3b.png)<br/><br/>
This means you already have an existing fork of AndroidAPS.<br/>
Make sure it's up to date and continue to Preparation Steps.
```

```{warning}
在沒有備份你的 secrets 前，絕對不要刪除你的 fork！
```

GitHub 現在顯示你個人的 AndroidAPS 副本。請保持這個瀏覽器頁籤開啟。

![forked_aaps](../images/Building-the-App/CI/ForkAAPS4.png)

----

**下一步：[步驟 2－建立簽署金鑰庫](BrowserBuildKeystore.md) →**
