# 圖像縮放的測試文件

我們在不同設備上縮放時遇到了一些問題，並希望檢查如何解決這個問題

1. Markdown 和
1. Crowdin 測試。

這張圖片的原始寬度為 400px。

## 標準 markdown

![測試圖片](../images/setup-wizard/Screenshot_20231202_141912.png)

## 400px 圖像標籤 myst_parser 透過額外的寬度屬性

這裡有文字。

```{image} ../images/setup-wizard/Screenshot_20231202_141912.png
:width: 400px

```

這裡有更多文字。

## 500px 圖像標籤 myst_parser 透過額外的寬度屬性

這裡有文字。

```{image} ../images/setup-wizard/Screenshot_20231202_141912.png
:width: 500px

```

這裡有更多文字。