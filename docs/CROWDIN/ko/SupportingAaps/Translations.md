# AAPS 앱 또는 문서의 문자열을 번역하는 방법

* 앱에서 쓰는 문자열을 번역하려면 <https://crowdin.com/project/androidaps>에 가서 GitHub 계정으로 로그인하십시오
* 문서를 번역하려면 <https://crowdin.com/project/androidapsdocs>에 가서 GitHub 계정으로 로그인하십시오

* 문서 팀에 참여 요청을 보내십시오. 요청하려면 원하는 언어의 국기를 누른 다음, 다음 페이지의 오른쪽 위에 있는 "Join"(참여) 버튼을 누르십시오. 언어를 적고, 자신과 AAPS 사용 경험에 대해 조금 알려 주십시오. 그리고 번역자가 되고 싶은지 검수자가 되고 싶은지 적어 주십시오(검수자는 번역을 잘하고 AAPS를 깊이 아는 사용자만 가능합니다).

```{admonition} 승인에 걸리는 시간 :class: note

승인은 사람이 직접 합니다. 비영리 단체이므로 처리 기간(SLA)을 보장하지 않지만, 보통은 < 1일 안에 승인됩니다. 그렇지 않으면 Facebook 또는 Discord로 문서 팀에 연락하십시오.

    <br />* 승인되면 국기를 누르십시오
       ![승인되면 국기를 누르십시오](../images/translation_flags.png)
    
    ## 앱 번역
    
    (translations-translate-strings-for-AAPS-app)=
    ### AAPS 앱의 문자열 번역하기
    
    * 번역할 문자열을 따로 정하지 않았다면 "Translate All"(모두 번역) 버튼을 눌러 시작하십시오. 번역이 필요한 문자열이 표시됩니다.
    
       ![Translate All 누르기](../images/translations-click-translate-all.png)
    
    * 파일 하나만 번역하려면 검색 창이나 트리 구조에서 파일을 찾은 다음, 파일 이름을 눌러 그 파일의 문자열 번역을 시작하십시오.
    
       ![strings.xml 누르기](../images/translations-click-strings.png)
    
    * 왼쪽에서 문장을 번역하십시오. 새 번역을 입력하거나 제안을 사용 & 편집합니다
    
       ![앱 번역](../images/translations-translate.png)
    
    
    ### AAPS 앱의 문자열 검수하기
    
    * 검수자는 언어 홈 화면에서 "Proofread"(검수)를 선택해서 시작합니다.
    
       ![앱 검수 모드](../images/translations-proofreading-mode.png)
    
    
      그리고 번역된 텍스트를 승인합니다
    
       ![텍스트 승인](../images/translations-proofreading.png)
    
    검수자가 번역을 승인하면 그 번역은 AAPS의 다음 버전에 들어갑니다.
    
    (translations-translation-of-the-documentation)=
    ## 문서 번역
    
    * 번역할 문서 페이지의 이름을 누르십시오
    
    ![문서 페이지 누르기](../images/translation_WikiPage.png)
    
    
    * 문장을 하나씩 번역하십시오
    
        1. 노란색 텍스트는 지금 작업 중인 텍스트입니다.
    
        1. 초록색 텍스트는 이미 번역되었습니다. 이것은 다시 번역할 필요가 없습니다.
    
        1. 빨간색 텍스트는 아직 번역해야 하는 텍스트입니다.
    
        1. 지금 작업 중인 원본 텍스트입니다
    
        1. 여기에 번역을 작성합니다. 위의 텍스트를 복사하거나 아래의 제안 중 하나를 선택할 수 있습니다.
    
        1. 번역 제안입니다. 특히 Crowdin이 얼마나 잘 맞는다고 평가하는지, 또는 예전에 이미 번역되었고 텍스트가 바뀐 것이 아니라 옮겨졌기 때문에 다시 나타난 것인지 볼 수 있습니다.
        1. "save"(저장) 버튼을 눌러 번역 제안을 저장하십시오. 그다음 검수자에게 전달되어 마지막 확인을 받습니다.
    
    ![문서 번역](../images/translation_WikiTranslate.png)
    
    * 번역된 페이지는 다음 조건이 모두 끝나야 문서에 게시됩니다
    
        1. 번역이 검수되었을 때
    
        1. Crowdin과 GitHub 사이의 동기화(1시간에 한 번)가 끝나서 GitHub에 PR이 만들어졌을 때
    
        1. GitHub에서 그 PR이 승인되었을 때
    
    보통 1 - 3일이 걸리지만, 휴가 기간에는 조금 더 걸릴 수 있습니다.
    
    ### 링크 번역하기
    
    ```{admonition} 링크는 더 이상 번역하지 않습니다
    :class: note
    
    링크는 더 이상 번역하지 않습니다. 예전에는 여기에 이 주제에 대한 설명이 있었지만, 이제는 없습니다. Markdown과 myst_parser로 옮기면서 영어 텍스트에 레이블을 직접 만들고, 이 레이블이 내부에서 자동으로 다른 언어에 전달되기 때문입니다.
    
    

번역하는 것은 링크를 나타내는 텍스트입니다. 링크를 나타내는 `<0></0>` 태그 한 쌍(한 문단에 링크가 여러 개라면 다른 번호)을 지우지 **않도록** 주의하십시오.

이 부분은 검수자가 특히 주의해서 확인해야 합니다!

### 검수

* 검수자는 검수 모드(Proofreading mode)로 바꿔야 합니다
    
    ![문서 검수 모드](../images/translation_WikiProofreadingmode.png)
    
    번역된 텍스트를 승인합니다
    
    ![텍스트 승인](../images/translations-proofreading.png)

* 검수자가 번역을 승인하면 그 번역은 다음 문서 빌드에 들어갑니다. 문서 빌드는 정해진 일정 없이 필요할 때 하며, 휴가 기간을 빼면 대략 1주일에 한 번입니다. 과정을 빠르게 하려면 새 번역이 있다고 문서 팀에 알려 주십시오.