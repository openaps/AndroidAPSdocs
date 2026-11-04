(aaps-ci-option2)=

# 옵션 2 – 기존 키 저장소 업로드하기

```{note}
이 페이지는 [브라우저 빌드](BrowserBuild.md)의 [2단계 – 서명 키 저장소 만들기](BrowserBuildKeystore.md)의 일부입니다. [옵션 1과 옵션 2 중 선택](#aaps-ci-preparation)을 읽었는지 확인하십시오.
```

옵션 2는 이전에 컴퓨터의 Android Studio에서 AAPS를 빌드할 때 이미 만든 JKS를 다시 사용합니다. 이미 JKS가 있고 JKS 비밀번호와 별칭(alias)을 알고 있는 사용자에게 적합합니다.

`KEYSTORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD`에는 GitHub에 실제 비밀번호와 별칭을 입력하십시오. Android Studio에서 사용한 것과 같으며, 아래에서 어디에 사용했는지 확인할 수 있습니다.

```{warning}
**특수 문자가 있는 비밀번호.** 비밀번호를 정확히 그대로 입력하십시오. 백슬래시나 다른 이스케이프 문자를 추가하지 마십시오. 빌드 워크플로는 모든 문자를 그대로 유지하므로, 추가한 백슬래시는 비밀번호의 일부가 됩니다.

그래도 빌드가 서명 단계에서 실패하고 비밀번호에 `$`, 백틱, `"` 또는 `\`가 들어 있다면, fork에 있는 워크플로 파일이 오래된 것입니다. 최신 dev로 [fork를 동기화](#Update-to-new-version-update-your-repo)한 다음 빌드를 다시 실행하십시오. [브라우저 빌드 문제 해결](#aaps-ci-password-special-characters)을 참조하십시오.
```

```{admonition} KEY + PASSWORDS
:class: dropdown

![비밀번호 기억하기](../images/Building-the-App/044_RememberPwd.png)
```

## 기기 선택하기

```{tip}
**Android 휴대폰**에서 빌드합니까? 대신 [AAPS Builder](BrowserBuildAapsBuilder.md)를 사용하십시오. 준비 파일이 필요 없습니다.
```

빌드에 사용하는 기기에 맞는 페이지를 따르십시오:

- **[컴퓨터](BrowserBuildO2Computer.md)** – Windows, Mac 또는 Linux.

```{tip}
언제든지 기기를 바꿀 수 있습니다. 맞는 페이지를 열기만 하면 됩니다.
```

```{toctree}
:hidden:

컴퓨터 <BrowserBuildO2Computer.md>
```
