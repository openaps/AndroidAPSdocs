# a test file for image scaling

We got some problems with scaling on different devices and wanted to check how we can solve in

1. Markdown and
1. Crowdin too.

This image width is in original 400px.

## standard markdown

![testimage](../images/setup-wizard/Screenshot_20231202_141912.png)

## 400px image tag myst_parser passthrough with extra width attribute

Here comes text.

```{image} ../images/setup-wizard/Screenshot_20231202_141912.png
:width: 400px

```

Here comes some more text.

## 500px image tag myst_parser passthrough with extra width attribute

Here comes text.

```{image} ../images/setup-wizard/Screenshot_20231202_141912.png
:width: 500px

```

Here comes some more text.