(aaps-builder-setup)=

# AAPS Builder 설정 페이지

GitHub에서 자신의 **AAPS** 앱을 빌드하십시오. 설치할 프로그램도, 터미널도 필요 없습니다. 처음에는 약 10분이 걸리고, 그 후에는 각 빌드를 직접 시작합니다.

각 단계는 [AAPS Builder로 브라우저 빌드](#aaps-builder)에서 스크린샷과 함께 더 자세히 설명되어 있습니다. 그 페이지를 다른 탭에 열어 두십시오.

아래 버튼은 새 Chrome 탭에서 GitHub를 엽니다. 이 페이지로 돌아오려면 Chrome 주소창 옆의 탭 버튼(숫자가 있는 사각형)을 누르고 이 페이지를 선택하십시오.

(aaps-builder-setup-step1)=

## 1단계 – 비공개 빌드 저장소 만들기

이 단계는 GitHub 계정에 AAPS Builder의 개인 비공개 복사본을 만듭니다: 빌드 워크플로가 이미 들어 있는 저장소입니다. 이 저장소와 이 저장소가 빌드하는 앱은 본인만 볼 수 있습니다. AndroidAPS를 fork할 필요가 **없습니다**: AAPS 소스 코드는 빌드할 때마다 공식 AndroidAPS 저장소에서 다운로드됩니다.

<label class="aapsb-label" for="aapsb-user">Your GitHub username (GitHub 사용자 이름)</label>
<input class="aapsb-input" type="text" id="aapsb-user" autocomplete="username" spellcheck="false" placeholder="my-github-name" />
<span class="aapsb-msg" id="aapsb-userMsg"></span>

먼저 이 브라우저에서 github.com에 로그인하십시오(계정이 없습니까? 무료로 만드십시오). 그런 다음 이 페이지로 돌아오십시오. 이메일이 아니라 사용자 이름(GitHub 프로필에 표시됨)을 사용하십시오: 이 페이지는 GitHub에 이 사용자 이름이 있는지 확인합니다.

<label class="aapsb-label" for="aapsb-repo">Name of your repository (저장소 이름)</label>
<input class="aapsb-input" type="text" id="aapsb-repo" spellcheck="false" placeholder="my-aaps" />

제안된 이름을 그대로 두십시오. 이미 다른 이름으로 저장소를 만들었습니까? 그 이름을 여기에 정확히 입력하십시오.

```{note}
**이미 AAPS Builder 저장소가 있습니까**(이 페이지의 이전 버전으로 만든 저장소)? 새로 만들지 마십시오: 그 저장소의 이름을 여기에 정확히 입력하고, 아래 버튼은 건너뛴 다음, 워크플로를 한 번 업데이트하십시오: 이 단계 끝의 **Updating your copy**(복사본 업데이트)를 참조하십시오. secret은 그대로 유지됩니다.

그래도 새 저장소를 원하면 아직 없는 이름(예: `my-aaps-2`)을 정하고, 2단계에서 같은 키 저장소를 사용하십시오.

AndroidAPS의 fork 이름을 입력하지 마십시오: fork는 공개되어 있으며, 이미 자체 **AAPS CI** 워크플로로 빌드합니다.
```

Your repository (내 저장소): <code class="aapsb-repoUrl"></code>

아래 버튼을 사용하기 전에 이 이름을 확인하십시오: 이 페이지는 마지막 방문 때의 이름을 기억합니다.

<a class="aapsb-btn" id="aapsb-createRepo" target="_blank" rel="noopener">Create my private repository (내 비공개 저장소 만들기)</a>

열리는 GitHub 페이지에는 모든 것이 이미 입력되어 있습니다: 템플릿 `nightscout/aaps-builder`, 소유자인 본인 계정, 저장소 이름, 그리고 **Private**(비공개). 아무것도 바꾸지 말고, **Include all branches**(모든 브랜치 포함)는 체크하지 않은 상태로 두십시오.

1. 초록색 **Create repository**(저장소 만들기) 버튼을 클릭하십시오.
2. GitHub에 `.github` 폴더와 `README.md` 파일이 있는 새 저장소가 표시됩니다: 빌드 워크플로가 그 안에 있습니다. 2단계를 위해 이 페이지로 돌아오십시오.

```{admonition} Your new repository is empty (no files)?
:class: warning

저장소가 템플릿으로 만들어지지 않았습니다. 저장소를 삭제하고(**Settings** → 페이지 맨 아래 → **Delete this repository**(이 저장소 삭제)), **Create my private repository**를 다시 누르십시오.
```

```{admonition} GitHub says "my-aaps already exists in this account"?
:class: tip

You already have your repository: close the GitHub tab and go on with this page. If your key is already in it, continue with [step 4](#aaps-builder-setup-step4). See [troubleshooting](#aaps-builder-ts-repo-exists).
```

```{admonition} Updating your copy (existing AAPS Builder repository)
:class: dropdown

빌드 단계는 자동으로 업데이트됩니다: 빌드할 때마다 저장소는 AAPS 개발자가 nightscout/aaps-builder에 공개한 버전을 실행하며, 저장소의 내용은 바뀌지 않습니다. 워크플로 파일은 [문서 업데이트 및 변경 사항](../Maintenance/DocumentationUpdate.md)에서 알릴 때(예: 새 빌드 변형이 추가될 때)만 바꾸면 됩니다. 저장소를 이 페이지의 이전 버전이나 이전 템플릿으로 만든 경우에는 한 번 바꾸십시오. `KEYSTORE_SET` secret은 그대로 유지됩니다.

1. <a class="aapsb-btn aapsb-secondary" href="https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/build.yml" target="_blank" rel="noopener">Open the newest workflow (최신 워크플로 열기)</a>

   컴퓨터에서는 파일 오른쪽 위의 **copy icon**(복사 아이콘, "Copy raw file")을 클릭하십시오. 휴대폰에서는 대신 <a href="https://raw.githubusercontent.com/nightscout/aaps-builder/main/.github/workflows/build.yml" target="_blank" rel="noopener">일반 텍스트 버전</a>을 열고, 텍스트를 길게 누른 다음 → **Select all**(모두 선택) → **Copy**(복사)를 누르십시오.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openWorkflowFile" target="_blank" rel="noopener">Open my workflow file</a>

   Opens `.github/workflows/build.yml` in <code class="aapsb-repoUrl"></code>. Tap the **⋯** menu at the top right of the file, then **Edit file… In place** (on a computer, click the pencil).
3. 전체 텍스트를 복사한 워크플로로 바꾸고(휴대폰에서는: 길게 누르기 → **Select all** → **Paste**(붙여넣기)), **Commit changes…**(변경 사항 커밋)를 두 번 클릭하십시오. 파일의 첫 줄에 버전이 표시됩니다.
```

(aaps-builder-setup-step2)=

## 2단계 – 서명 키

앱은 반드시 자신의 키로 서명해야 합니다. 항상 같은 키를 사용하십시오. 다른 키를 사용하면 업데이트하기 위해 AAPS를 삭제해야 하고, AAPS의 설정도 잃게 됩니다. 두 탭 중 하나를 선택하십시오.

`````{tab-set}

````{tab-item} I already have a keystore (이미 키 저장소가 있음)
예: Android Studio에서 만든 키 저장소(.jks).

<label class="aapsb-label" for="aapsb-ksFile">Keystore file (키 저장소 파일)</label>
<input type="file" id="aapsb-ksFile" accept=".jks,.keystore,.p12,.pfx,application/octet-stream">

<label class="aapsb-label" for="aapsb-ksPass">Keystore password (키 저장소 비밀번호)</label>
<input class="aapsb-input" type="password" id="aapsb-ksPass" autocomplete="off">

<label class="aapsb-label" for="aapsb-ksAlias">Key alias (키 별칭)</label>
<select class="aapsb-input" id="aapsb-ksAliasSel" hidden></select>
<input class="aapsb-input" type="text" id="aapsb-ksAlias" autocomplete="off" spellcheck="false" placeholder="key0">

<label class="aapsb-check"><input type="checkbox" id="aapsb-samePass" checked> Key password is the same as the keystore password (키 비밀번호가 키 저장소 비밀번호와 같음)</label>

<div id="aapsb-keyPassWrap" hidden>

<label class="aapsb-label" for="aapsb-keyPass">Key password (키 비밀번호)</label>
<input class="aapsb-input" type="password" id="aapsb-keyPass" autocomplete="off">

</div>

<button class="aapsb-btn" type="button" id="aapsb-haveGo">Check and continue (확인 후 계속)</button> <span class="aapsb-msg" id="aapsb-haveMsg"></span>
````

````{tab-item} Create a new key (새 키 만들기)
AAPS를 처음 빌드합니까? 새 키는 여기 브라우저 안에서 만들어집니다. 어디로도 아무것도 보내지지 않습니다.

<label class="aapsb-label" for="aapsb-newPass">Choose a password (비밀번호 정하기: 8자 이상, 악센트가 있는 문자 사용 불가)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass" autocomplete="new-password">

<label class="aapsb-label" for="aapsb-newPass2">Repeat the password (비밀번호 다시 입력)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass2" autocomplete="new-password">

<button class="aapsb-btn" type="button" id="aapsb-newGo">Create key (키 만들기)</button> <span class="aapsb-msg" id="aapsb-newMsg"></span>

<div class="aapsb-box" id="aapsb-backupBox" hidden>

**키의 백업을 저장하십시오!**

파일을 다운로드하십시오. 다음 세 가지를 휴대폰 밖의 안전한 곳(예: 자신의 클라우드 저장소)에 함께 보관하십시오:

- 파일 `aaps-keystore.jks`
- 비밀번호
- 키의 별칭(alias): **`key0`**

나중에 다른 방법(예: Android Studio)으로 AAPS를 빌드하려면 세 가지가 모두 필요합니다.

<button class="aapsb-btn" type="button" id="aapsb-downloadKs">Download backup (백업 다운로드, aaps-keystore.jks)</button>

</div>
````

`````
(aaps-builder-setup-step3)=
## 3단계 – 저장소에 키 넘겨주기
<span id="aapsb-s3wait">먼저 2단계를 마치십시오.</span>

<div id="aapsb-s3ready" hidden>
  1. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets" target="_blank" rel="noopener">Open the secrets page (secret 페이지 열기)</a> 열리는 주소: <code class="aapsb-repoUrl"></code> "Page not found"(404)가 표시됩니까? 먼저 이 브라우저에서 github.com에 로그인되어 있는지 확인하십시오: 로그인하지 않으면 GitHub는 비공개 저장소에 대해 404를 표시합니다. 그렇지 않다면 1단계의 사용자 이름 또는 저장소 이름이 실제 저장소와 맞지 않습니다: github.com에서 확인하고 1단계에 입력하십시오. 2. "Copy name"(이름 복사)을 누른 다음, 작은 "Name"(이름) 필드에 붙여 넣으십시오: `KEYSTORE_SET` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="name">Copy name (이름 복사)</button> 3. "Copy secret"(secret 복사)을 누른 다음, 긴 코드를 큰 "Secret" 상자에 붙여 넣으십시오: <code id="aapsb-secretPreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="secret">Copy secret (secret 복사)</button> <span class="aapsb-msg" id="aapsb-copyMsg"></span> secret은 매우 긴 코드(수천 자)이며, KEYSTORE_SET이라는 단어가 아닙니다. 먼저 이름을 복사하여 붙여 넣고, 그다음 긴 코드를 복사하여 붙여 넣으십시오. 4. "Add secret"(secret 추가)을 누르십시오. 완료되었습니다. 이 작업은 다시 할 필요가 없습니다.
</div>
(aaps-builder-setup-step4)=
## 4단계 – 앱 빌드

1. <a class="aapsb-btn" id="aapsb-openActions" target="_blank" rel="noopener">Open the build page (빌드 페이지 열기)</a>

   열리는 주소: <code class="aapsb-repoUrl"></code>

   "Page not found"(404)가 표시됩니까? 먼저 이 브라우저에서 github.com에 로그인되어 있는지 확인하십시오: 로그인하지 않으면 GitHub는 비공개 저장소에 대해 404를 표시합니다. 그렇지 않다면 1단계의 사용자 이름 또는 저장소 이름이 실제 저장소와 맞지 않습니다: github.com에서 확인하고 1단계에 입력하십시오. 대신 GitHub 앱이 열렸습니까? "RUN WORKFLOW"를 누르고, 버전과 변형을 확인한 다음 "RUN WORKFLOW"를 다시 누르십시오. 앱에 계속 "Nothing to see here"(여기에 표시할 항목 없음)가 표시되면, 목록을 아래로 당겨 빌드를 표시하십시오.
2. 요청되면 초록색 버튼을 클릭하여 워크플로를 활성화하십시오.
워크플로 목록에 두 항목이 표시됩니다: "Build AAPS"를 사용하십시오. "AAPS Builder"는 무시하십시오: 이것은 빌드 단계를 담고 있으며 "Run workflow" 버튼이 없습니다.
3. "Run workflow"(워크플로 실행)를 클릭한 다음, 초록색 "Run workflow" 버튼을 클릭하십시오. "latest"는 최신 AAPS 버전을 빌드합니다. ***팁:*** *"latest" 대신 다른 버전의 [태그](https://github.com/nightscout/AndroidAPS/tags) 이름을 입력하면 그 버전을 빌드할 수 있습니다*
4. 15–30분 정도 기다리십시오. 초록색 체크 표시가 나타나면 완료된 것입니다.
빌드가 끝나면 이메일을 받고 싶습니까? GitHub는 빌드가 실패한 경우에만 이메일을 보냅니다. 성공했을 때도 이메일을 받으려면: github.com에서 프로필 사진 → Settings → Notifications → System → Actions를 열고 "Only notify for failed workflows"(실패한 워크플로만 알림)의 체크를 해제하십시오.

```{admonition} No "Build AAPS" / "Run workflow" button?
:class: warning

1. 저장소를 열고 `.github` 폴더와 `workflows/build.yml` 파일이 있는지 확인하십시오. 저장소가 비어 있으면 템플릿으로 만들어지지 않은 것입니다: 저장소를 삭제하고(**Settings** → 페이지 맨 아래 → **Delete this repository**) 버튼으로 [1단계](#aaps-builder-setup-step1)를 다시 하십시오.
2. The file is there, but GitHub shows "This workflow does not exist": see [troubleshooting](#aaps-builder-ts-workflow-not-found).
3. Actions 탭을 여십시오. 워크플로가 비활성화되어 있다고 표시되면, 초록색 버튼을 클릭하여 활성화하십시오. 그런 다음 목록에서 "Build AAPS"를 클릭하십시오.
```

(aaps-builder-setup-step5)=

## 5단계 – 휴대폰에 설치

```{admonition} Before every update: back up your settings!
:class: warning

1. AAPS에서: 정비 → 설정 내보내기. (어차피 정기적으로 하십시오. 예: 프로파일을 바꾼 후 또는 한 달에 한 번.)
2. 내보낸 파일을 휴대폰 밖으로 복사하십시오. 예: Google Drive 또는 Dropbox. 휴대폰에만 있는 백업은 휴대폰을 잃으면 함께 사라집니다.
3. APK 파일과 이전에 내보낸 파일 몇 개도 그곳에 보관하십시오. 그러면 언제든 이전 상태로 돌아갈 수 있습니다.

[설정을 내보내는 방법](#ExportImportSettings-Settings-Export) · [AAPS FAQ: 백업 정리 방법](#FAQ-organize-backups)
```

1. 이 페이지를 휴대폰의 웹 브라우저(Chrome)에서 여십시오. 요청하면 github.com에 로그인하십시오.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openRuns" target="_blank" rel="noopener">Open my builds (내 빌드 열기)</a>

   대신 GitHub 앱이 열렸습니까? 이 앱은 빌드를 다운로드할 수 없습니다. 앱에서 최신 빌드를 열고 "Artifacts ↗"를 누르거나, 공유 아이콘을 누르고 Chrome을 선택하십시오(또는 "Copy link"(링크 복사)를 누른 다음 Chrome 주소창에 링크를 붙여 넣으십시오). Chrome에서 계속하십시오.

   "Page not found"(404)가 표시됩니까? 먼저 이 브라우저에서 github.com에 로그인되어 있는지 확인하십시오: 로그인하지 않으면 GitHub는 비공개 저장소에 대해 404를 표시합니다. 그렇지 않다면 1단계의 사용자 이름 또는 저장소 이름이 실제 저장소와 맞지 않습니다: github.com에서 확인하고 1단계에 입력하십시오.

   GitHub 링크가 앱에서 열리지 않게 하려면: Android 설정 → 애플리케이션 → GitHub → 기본으로 열기 → "지원되는 링크 열기"를 끄십시오.
3. 초록색 체크 ✅가 있는 최신 빌드를 누르십시오.
4. 빌드 요약까지 아래로 스크롤하고 큰 링크 "📱 Download AAPS …"를 누르십시오 (또는 "Artifacts"까지 더 아래로 스크롤하여 aaps-….apk를 누르십시오). 빌드 단계 그림이 아니라 글자 위에서 손가락으로 스크롤하십시오.
5. 다운로드가 끝나면 파일을 누르고 설치를 선택하십시오. 요청하면 이 출처의 앱 설치를 허용하십시오.
6. aaps-wear-….apk는 스마트워치용입니다. 스마트워치를 사용하지 않으면 건너뛰십시오.

APK는 저장소의 "Code"(코드) 아래에는 표시되지 않고, 빌드 페이지에만 표시됩니다. APK는 14일 동안 보관됩니다.

새 AAPS 버전이 나왔습니까? 설정을 백업한 다음 [4단계](#aaps-builder-setup-step4)로 빌드하십시오. 저장소는 스스로 아무것도 빌드하지 않습니다.

(aaps-builder-setup-step6)=

## 6단계 – 선택 사항: Google Drive에서 앱 받기

APK를 Google Drive에도 저장하고 싶습니까(기간 제한 없이 보관)? secret을 하나 더 추가합니다: GDRIVE_OAUTH2. 이 페이지가 Google에서 대신 받아 옵니다. 그러면 AAPS는 Google Drive에서 자신이 만든 파일만 보고 바꿀 수 있으며, 다른 것은 볼 수 없습니다.

1. <a class="aapsb-btn" id="aapsb-googleAuth" target="_blank" rel="noopener">Connect Google Drive (Google Drive 연결)</a>

   Google이 새 탭에서 열립니다. Google 계정을 선택하고, AAPS가 자신의 파일을 보고 바꿀 수 있도록 허용하십시오. Google에서 앱이 확인되지 않았다고 표시하면 "Advanced"(고급)를 누른 다음 "Go to …"(…(으)로 이동)를 누르십시오.
2. 그러면 새 탭에 **"This site can't be reached"**(사이트에 연결할 수 없음) 또는 **"127.0.0.1 refused to connect"**(127.0.0.1에서 연결을 거부함) 같은 오류가 표시됩니다. **이것은 정상입니다.** Google의 응답은 그 탭의 주소에 들어 있습니다.

   Tap the address bar of that tab, then the copy icon next to the address (on a computer: select the whole address and copy it). 주소는 `http://127.0.0.1:47913/`로 시작합니다. 몇 분 안에 이 페이지로 돌아오십시오: 응답은 짧은 시간 동안만 유효합니다.
3. <label class="aapsb-label" for="aapsb-googleUrl">Paste the copied address here (복사한 주소를 여기에 붙여 넣기)</label> <input class="aapsb-input" type="url" id="aapsb-googleUrl" autocomplete="off" spellcheck="false" placeholder="http://127.0.0.1:47913/aaps-builder?…" /> <button class="aapsb-btn" type="button" id="aapsb-googleGo">Get GDRIVE_OAUTH2 (GDRIVE_OAUTH2 받기)</button> <span class="aapsb-msg" id="aapsb-googleMsg"></span>

<div id="aapsb-gdriveReady" hidden>

4. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets2" target="_blank" rel="noopener">Open the secrets page (secret 페이지 열기)</a>

   열리는 주소: <code class="aapsb-repoUrl"></code>

   "Page not found"(404)가 표시됩니까? 먼저 이 브라우저에서 github.com에 로그인되어 있는지 확인하십시오: 로그인하지 않으면 GitHub는 비공개 저장소에 대해 404를 표시합니다. 그렇지 않다면 1단계의 사용자 이름 또는 저장소 이름이 실제 저장소와 맞지 않습니다: github.com에서 확인하고 1단계에 입력하십시오.
5. "Copy name"(이름 복사)을 누른 다음, 작은 "Name"(이름) 필드에 붙여 넣으십시오: `GDRIVE_OAUTH2` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="gdrive">Copy name (이름 복사)</button>
6. "Copy secret"(secret 복사)을 누른 다음, 코드를 큰 "Secret" 상자에 붙여 넣으십시오: <code id="aapsb-gdrivePreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="gdriveValue">Copy secret (secret 복사)</button> <span class="aapsb-msg" id="aapsb-gdriveCopyMsg"></span>
7. "Add secret"(secret 추가)을 누르십시오.

</div>

```{admonition} Already have a GDRIVE_OAUTH2 value?
:class: dropdown

다른 브라우저 빌드의 AAPS 준비 페이지에서 받은 값도 사용할 수 있습니다: secret 페이지를 열고 이름 `GDRIVE_OAUTH2`를 추가한 다음 그 값을 붙여 넣으십시오. [Google Drive에 빌드 저장하기](#aaps-builder-google-drive)를 참조하십시오.
```

다음 빌드부터 APK가 Google Drive의 AAPS/&lt;version&gt; 폴더에도 저장됩니다.

6개월 동안 빌드하지 않거나 Google 비밀번호를 바꾸면, Google이 액세스를 중지합니다. 그러면 빌드에서 이를 알려 줍니다: 이 단계를 다시 하십시오.

----

이 페이지의 모든 것은 브라우저 안에서 실행됩니다. 키와 비밀번호는 직접 붙여 넣는 곳 외에는 어디로도 보내지지 않습니다. GitHub에는 GitHub 사용자 이름만 보내지며, 이는 그 이름이 있는지 확인하기 위한 것입니다. 6단계에서 Google의 응답은 GDRIVE_OAUTH2를 받기 위해 Google에만 보내집니다. 빌드 워크플로는 AAPS 개발자가 AAPS Builder(AGPL-3.0)를 기반으로 [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder)에서 관리합니다.

<div id="aapsb-msgs" hidden>

- <span data-aapsb-msg="copied">긴 코드를 복사했습니다: 큰 "Secret" 상자에 붙여 넣은 다음 "Add secret"을 누르십시오.</span>
- <span data-aapsb-msg="copiedName">이름을 복사했습니다: 작은 "Name" 필드에 붙여 넣으십시오.</span>
- <span data-aapsb-msg="userOk">✓ GitHub 사용자를 찾았습니다.</span>
- <span data-aapsb-msg="userBad">✗ 이 이름의 GitHub 사용자가 없습니다. 이메일이 아니라 사용자 이름(GitHub 프로필에 표시됨)을 사용하십시오.</span>
- <span data-aapsb-msg="copiedShort">복사됨 ✓</span>
- <span data-aapsb-msg="needUser">먼저 1단계에서 GitHub 사용자 이름을 입력하십시오.</span>
- <span data-aapsb-msg="errPipe">비밀번호와 별칭에는 | 문자를 사용할 수 없습니다</span>
- <span data-aapsb-msg="errNoFile">키 저장소 파일을 선택하십시오.</span>
- <span data-aapsb-msg="errEmpty">비밀번호와 별칭을 입력하십시오.</span>
- <span data-aapsb-msg="errPass">키 저장소 비밀번호가 틀렸습니다.</span>
- <span data-aapsb-msg="errKeyPass">키 비밀번호가 틀렸습니다.</span>
- <span data-aapsb-msg="errAlias">키 저장소에서 별칭을 찾을 수 없습니다. 사용 가능한 별칭: {aliases}</span>
- <span data-aapsb-msg="errFormat">키 저장소 파일이 아닌 것 같습니다.</span>
- <span data-aapsb-msg="okHave">키 저장소 확인 완료! 3단계로 계속하십시오.</span>
- <span data-aapsb-msg="okHaveUnchecked">키 저장소를 읽었습니다. 비밀번호는 빌드할 때 확인됩니다. 3단계로 계속하십시오.</span>
- <span data-aapsb-msg="errShort">비밀번호는 8자 이상이어야 합니다.</span>
- <span data-aapsb-msg="errAscii">a–z, A–Z, 0–9와 다음과 같은 기호만 사용하십시오: ! ? # – 공백, 악센트가 있는 문자, |는 사용할 수 없습니다.</span>
- <span data-aapsb-msg="errMatch">비밀번호가 일치하지 않습니다.</span>
- <span data-aapsb-msg="working">키를 만드는 중…</span>
- <span data-aapsb-msg="okNew">키를 만들었습니다. 아래에서 백업을 다운로드한 다음 3단계로 계속하십시오.</span>
- <span data-aapsb-msg="gNoUrl">먼저 Google 탭의 주소 전체를 붙여 넣으십시오.</span>
- <span data-aapsb-msg="gNoCode">이 주소에는 Google의 응답이 없습니다. 오류가 표시된 탭의 주소 전체를 http://127.0.0.1:47913/ 부분부터 복사하십시오.</span>
- <span data-aapsb-msg="gDenied">Google 액세스가 허용되지 않았습니다. "Connect Google Drive"를 다시 누르고 액세스를 허용하십시오.</span>
- <span data-aapsb-msg="gOldUrl">이 주소는 이전 시도의 주소입니다. "Connect Google Drive"를 다시 누르고 새 주소를 사용하십시오.</span>
- <span data-aapsb-msg="gWorking">Google에 요청하는 중…</span>
- <span data-aapsb-msg="gFailed">Google이 받아들이지 않았습니다({error}). 응답은 몇 분 동안, 한 번만 유효합니다: "Connect Google Drive"를 다시 누르십시오.</span>
- <span data-aapsb-msg="gNoRefresh">Google이 장기 액세스 권한을 보내지 않았습니다. "Connect Google Drive"를 다시 누르십시오.</span>
- <span data-aapsb-msg="gOk">GDRIVE_OAUTH2가 준비되었습니다. 아래에서 secret으로 추가하십시오.</span>
- <span data-aapsb-msg="gCopied">코드를 복사했습니다: 큰 "Secret" 상자에 붙여 넣은 다음 "Add secret"을 누르십시오.</span>

</div>

<style>
  .rst-content .aapsb-label { display: block; font-weight: 700; margin: 14px 0 4px; }
  .rst-content .aapsb-input { display: block; width: 100%; max-width: 480px; padding: 8px 10px; font: inherit; border: 1px solid #ccc; border-radius: 4px; }
  .rst-content .aapsb-check { display: flex; gap: 8px; align-items: center; margin-top: 10px; }
  .rst-content .aapsb-btn, .rst-content a.aapsb-btn:visited {
    display: inline-block; margin: 4px 0; padding: 8px 16px; border-radius: 4px; border: 1px solid #2980b9; cursor: pointer;
    background: #2980b9; color: #fff; font: inherit; font-weight: 700; text-decoration: none;
  }
  .rst-content .aapsb-btn:hover { background: #1f6391; color: #fff; }
  .rst-content .aapsb-btn.aapsb-secondary, .rst-content a.aapsb-btn.aapsb-secondary:visited { background: transparent; color: #2980b9; }
  .rst-content .aapsb-btn.aapsb-secondary:hover { background: #e7f2fa; }
  .rst-content .aapsb-btn:disabled { opacity: .45; cursor: not-allowed; }
  .rst-content .aapsb-msg { display: inline-block; margin-left: 6px; }
  .rst-content .aapsb-msg.ok { color: #1a7f37; } .rst-content .aapsb-msg.err { color: #cf222e; } .rst-content .aapsb-msg.warn { color: #9a6700; }
  .rst-content .aapsb-box { background: #e7f2fa; border-radius: 4px; padding: 12px 14px; margin: 12px 0; }
  .rst-content section.aapsb-done > h2::after { content: " ✓"; color: #1a7f37; }
  .rst-content [hidden] { display: none !important; }
</style>

<script src="../_static/aaps-builder/aaps-builder.forge.min.js"></script>
<script>
// AAPS Builder setup page logic. Walks the user through creating a private copy of the
// github.com/nightscout/aaps-builder template (the build workflow is in it) and creating the
// KEYSTORE_SET secret. The repository then builds AAPS from the official source,
// github.com/nightscout/AndroidAPS, with GitHub Actions.
//
// The keystore and passwords never leave this browser. The only requests are asking GitHub's
// public API whether the typed username exists (only the name is sent) and, in the optional
// Google Drive step, sending Google's one-time answer to Google's token endpoint. The page's
// Content-Security-Policy (set in docs/shared.conf.py) allows only the AAPS documentation site
// itself, https://api.github.com and https://oauth2.googleapis.com/token.
//
// Based on AAPS Builder by the AAPS Builder authors (github.com/dio99/aaps-builder), GNU Affero
// General Public License v3.0 (AGPL-3.0). Modified for the AAPS documentation: texts in the page
// so they can be translated, workflow maintained in github.com/nightscout/aaps-builder.
// Vendor library: _static/aaps-builder/aaps-builder.forge.min.js = node-forge 1.3.1
// (BSD-3-Clause or GPL-2.0), https://github.com/digitalbazaar/forge, the unmodified
// dist/forge.min.js of the npm package node-forge@1.3.1.
(() => {
  const TEMPLATE = { owner: 'nightscout', name: 'aaps-builder' };
  const REPO_NAME = 'my-aaps';
  const WORKFLOW_PATH = '.github/workflows/build.yml';       // where the template puts it

  const $ = id => document.getElementById('aapsb-' + id);
  // The texts are in the page (hidden list above), so they are translated with it.
  const M = {};
  document.querySelectorAll('[data-aapsb-msg]').forEach(el => { M[el.dataset.aapsbMsg] = el.textContent.trim(); });
  const t = (key, vars = {}) => M[key].replace(/\{(\w+)\}/g, (all, k) => k in vars ? vars[k] : all);
  const store = {
    get: k => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch {} }
  };
  const done = step => { const el = document.getElementById('aaps-builder-setup-step' + step); if (el) el.closest('section').classList.add('aapsb-done'); };

  // ---------- step 1: links ----------
  const userInput = $('user');
  userInput.value = store.get('ghUser') || '';
  const user = () => userInput.value.trim().replace(/^@/, '');
  const repoInput = $('repo');
  repoInput.value = store.get('ghRepo') || REPO_NAME;
  const repo = () => repoInput.value.trim() || REPO_NAME;

  const LINKS = [
    ['openWorkflowFile', '/blob/HEAD/' + WORKFLOW_PATH],
    ['openSecrets', '/settings/secrets/actions/new'],
    ['openSecrets2', '/settings/secrets/actions/new'],
    ['openActions', '/actions/workflows/build.yml'],
    ['openRuns', '/actions/workflows/build.yml']
  ];

  function updateLinks() {
    const u = user();
    store.set('ghUser', u);
    store.set('ghRepo', repo());
    // GitHub's own "Use this template" page, with its documented prefill parameters: the copy is
    // private and contains the build workflow. owner=@me is the signed-in user.
    const p = new URLSearchParams({ template_owner: TEMPLATE.owner, template_name: TEMPLATE.name,
                                    owner: '@me', name: repo(), visibility: 'private' });
    $('createRepo').href = 'https://github.com/new?' + p;
    document.querySelectorAll('.aapsb-repoUrl').forEach(el => { el.textContent = `github.com/${u || '…'}/${repo()}`; });
    const base = `https://github.com/${encodeURIComponent(u)}/${encodeURIComponent(repo())}`;
    for (const [id, path] of LINKS) $(id).href = u ? base + path : '#aaps-builder-setup-step1';
  }
  userInput.addEventListener('input', updateLinks);
  // Check that the username exists (GitHub's public API, sends only the name)
  let userTimer;
  async function checkUser() {
    const u = user();
    if (!u) { $('userMsg').textContent = ''; return; }
    try {
      const r = await fetch(`https://api.github.com/users/${encodeURIComponent(u)}`);
      if (u !== user()) return;
      if (r.status === 200) msg('userMsg', t('userOk'), 'ok');
      else if (r.status === 404) msg('userMsg', t('userBad'), 'err');
      else $('userMsg').textContent = '';
    } catch { $('userMsg').textContent = ''; }
  }
  userInput.addEventListener('input', () => { clearTimeout(userTimer); userTimer = setTimeout(checkUser, 600); });
  repoInput.addEventListener('input', updateLinks);
  for (const [id] of LINKS) {
    $(id).addEventListener('click', e => { if (!user()) { e.preventDefault(); userInput.focus(); alert(t('needUser')); } });
  }
  $('createRepo').addEventListener('click', () => done(1));

  // ---------- helpers ----------
  const utf8 = s => new TextEncoder().encode(s);
  function bytesToB64(bytes) {
    let s = '';
    for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(s);
  }
  const binStrToBytes = s => Uint8Array.from(s, c => c.charCodeAt(0));
  const sha1 = async (...parts) => {
    const all = new Uint8Array(parts.reduce((n, p) => n + p.length, 0));
    let o = 0; for (const p of parts) { all.set(p, o); o += p.length; }
    return new Uint8Array(await crypto.subtle.digest('SHA-1', all));
  };
  const eq = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
  // JKS uses the password as UTF-16BE bytes
  const utf16be = s => { const b = new Uint8Array(s.length * 2); for (let i = 0; i < s.length; i++) { b[2*i] = s.charCodeAt(i) >> 8; b[2*i+1] = s.charCodeAt(i) & 255; } return b; };

  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); }
    catch {
      const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta);
      ta.select(); document.execCommand('copy'); ta.remove();
    }
  }
  function msg(id, text, cls) { const el = $(id); el.className = 'aapsb-msg ' + cls; el.textContent = text; }

  let secretValue = null;
  function setSecret(ksBytes, storePass, alias, keyPass) {
    const raw = [bytesToB64(ksBytes), storePass, alias, keyPass].join('|');
    secretValue = bytesToB64(utf8(raw));
    $('secretPreview').textContent = secretValue.slice(0, 16) + '…';
    done(2);
    $('s3wait').hidden = true;
    $('s3ready').hidden = false;
  }

  // ---------- step 2a: existing keystore ----------
  function parseJks(bytes) {
    const v = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    if (v.getUint32(0) !== 0xFEEDFEED) return null;
    let o = 12; const n = v.getUint32(8); const entries = [];
    const readUtf = () => { const len = v.getUint16(o); o += 2; const s = new TextDecoder().decode(bytes.subarray(o, o + len)); o += len; return s; };
    const skipCert = () => { if (v.getUint32(4) === 2) readUtf(); const len = v.getUint32(o); o += 4 + len; };
    for (let i = 0; i < n; i++) {
      const tag = v.getUint32(o); o += 4;
      const alias = readUtf(); o += 8;
      if (tag === 1) {
        const len = v.getUint32(o); o += 4;
        const key = bytes.subarray(o, o + len); o += len;
        const chain = v.getUint32(o); o += 4;
        for (let c = 0; c < chain; c++) skipCert();
        entries.push({ alias, key });
      } else { skipCert(); }
    }
    return { entries, body: bytes.subarray(0, o), digest: bytes.subarray(o, o + 20) };
  }

  // Sun JKS KeyProtector: verify key password without fully decrypting
  async function jksKeyPassOk(encKeyInfo, pass) {
    // EncryptedPrivateKeyInfo: SEQ { AlgId, OCTET STRING data }
    const asn = forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, encKeyInfo)));
    const data = binStrToBytes(asn.value[1].value);
    const salt = data.subarray(0, 20), enc = data.subarray(20, data.length - 20), check = data.subarray(data.length - 20);
    const pw = utf16be(pass);
    const plain = new Uint8Array(enc.length);
    let d = salt;
    for (let off = 0; off < enc.length; off += 20) {
      d = await sha1(pw, d);
      for (let j = 0; j < 20 && off + j < enc.length; j++) plain[off + j] = enc[off + j] ^ d[j];
    }
    return eq(await sha1(pw, plain), check);
  }

  let haveBytes = null, haveKind = null, haveJks = null;
  $('ksFile').addEventListener('change', async () => {
    const f = $('ksFile').files[0]; $('haveMsg').textContent = '';
    if (!f) return;
    haveBytes = new Uint8Array(await f.arrayBuffer());
    haveJks = null; haveKind = null;
    try { haveJks = parseJks(haveBytes); } catch { haveJks = null; }
    if (haveJks) {
      haveKind = 'jks';
      const sel = $('ksAliasSel');
      sel.innerHTML = '';
      haveJks.entries.forEach(e => sel.add(new Option(e.alias, e.alias)));
      if (haveJks.entries.length > 0) {
        sel.hidden = false; $('ksAlias').hidden = true; $('ksAlias').value = haveJks.entries[0].alias;
        sel.onchange = () => { $('ksAlias').value = sel.value; };
      }
    } else if (haveBytes[0] === 0x30) {
      haveKind = 'p12';
      $('ksAliasSel').hidden = true; $('ksAlias').hidden = false;
    } else {
      msg('haveMsg', t('errFormat'), 'err');
    }
  });
  $('samePass').addEventListener('change', () => { $('keyPassWrap').hidden = $('samePass').checked; });

  $('haveGo').addEventListener('click', async () => {
    const pass = $('ksPass').value, alias = $('ksAlias').value.trim();
    const keyPass = $('samePass').checked ? pass : $('keyPass').value;
    if (!haveBytes) return msg('haveMsg', t('errNoFile'), 'err');
    if (!haveKind) return msg('haveMsg', t('errFormat'), 'err');
    if (!pass || !alias || !keyPass) return msg('haveMsg', t('errEmpty'), 'err');
    if ([pass, alias, keyPass].some(s => s.includes('|'))) return msg('haveMsg', t('errPipe'), 'err');

    try {
      if (haveKind === 'jks') {
        const d = await sha1(utf16be(pass), utf8('Mighty Aphrodite'), haveJks.body);
        if (!eq(d, haveJks.digest)) return msg('haveMsg', t('errPass'), 'err');
        const entry = haveJks.entries.find(e => e.alias.toLowerCase() === alias.toLowerCase());
        if (!entry) return msg('haveMsg', t('errAlias', { aliases: haveJks.entries.map(e => e.alias).join(', ') }), 'err');
        if (!(await jksKeyPassOk(entry.key, keyPass))) return msg('haveMsg', t('errKeyPass'), 'err');
        setSecret(haveBytes, pass, entry.alias, keyPass);
        return msg('haveMsg', t('okHave'), 'ok');
      }
      // PKCS12
      let p12;
      try {
        const asn = forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, haveBytes)));
        p12 = forge.pkcs12.pkcs12FromAsn1(asn, pass);
      } catch (e) {
        if (/password|MAC/i.test(String(e && e.message))) return msg('haveMsg', t('errPass'), 'err');
        // Could not parse locally; let the build validate it
        setSecret(haveBytes, pass, alias, keyPass);
        return msg('haveMsg', t('okHaveUnchecked'), 'warn');
      }
      const names = [...new Set(p12.safeContents.flatMap(sc => sc.safeBags.flatMap(b => (b.attributes.friendlyName || []))))];
      if (names.length && !names.some(n => n.toLowerCase() === alias.toLowerCase())) {
        return msg('haveMsg', t('errAlias', { aliases: names.join(', ') }), 'err');
      }
      setSecret(haveBytes, pass, alias, keyPass);
      msg('haveMsg', t('okHave'), 'ok');
    } catch (e) {
      console.error(e);
      setSecret(haveBytes, pass, alias, keyPass);
      msg('haveMsg', t('okHaveUnchecked'), 'warn');
    }
  });

  // ---------- step 2b: new keystore ----------
  // Use the browser's cryptographic RNG for everything forge needs (salts, IVs, serial)
  forge.random.getBytesSync = n => String.fromCharCode.apply(null, crypto.getRandomValues(new Uint8Array(n)));
  forge.random.getBytes = (n, cb) => cb ? cb(null, forge.random.getBytesSync(n)) : forge.random.getBytesSync(n);
  let newKsBytes = null;
  $('newGo').addEventListener('click', async () => {
    const p1 = $('newPass').value, p2 = $('newPass2').value;
    if (p1.length < 8) return msg('newMsg', t('errShort'), 'err');
    if (p1 !== p2) return msg('newMsg', t('errMatch'), 'err');
    if (!/^[\x21-\x7e]+$/.test(p1) || p1.includes('|')) return msg('newMsg', t('errAscii'), 'err');
    $('newGo').disabled = true;
    msg('newMsg', t('working'), '');
    try {
      const kp = await crypto.subtle.generateKey(
        { name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' },
        true, ['sign', 'verify']);
      const pkcs8 = new Uint8Array(await crypto.subtle.exportKey('pkcs8', kp.privateKey));
      const key = forge.pki.privateKeyFromAsn1(forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, pkcs8))));
      const cert = forge.pki.createCertificate();
      cert.publicKey = forge.pki.setRsaPublicKey(key.n, key.e);
      cert.serialNumber = '01' + forge.util.bytesToHex(forge.random.getBytesSync(8));
      cert.validity.notBefore = new Date();
      cert.validity.notAfter = new Date(); cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 50);
      const subject = [{ name: 'commonName', value: 'AAPS' }];
      cert.setSubject(subject); cert.setIssuer(subject);
      cert.sign(key, forge.md.sha256.create());
      const asn = forge.pkcs12.toPkcs12Asn1(key, [cert], p1, { algorithm: '3des', friendlyName: 'key0', generateLocalKeyId: true });
      newKsBytes = binStrToBytes(forge.asn1.toDer(asn).getBytes());
      setSecret(newKsBytes, p1, 'key0', p1);
      $('backupBox').hidden = false;
      msg('newMsg', t('okNew'), 'ok');
    } catch (e) {
      console.error(e);
      msg('newMsg', String(e), 'err');
      $('newGo').disabled = false;
    }
  });
  $('downloadKs').addEventListener('click', () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([newKsBytes], { type: 'application/octet-stream' }));
    a.download = 'aaps-keystore.jks';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  // ---------- step 6: Google Drive access (GDRIVE_OAUTH2) ----------
  // The same Google OAuth client, scope and PKCE flow as the AAPS preparation page
  // (github.com/nightscout/aaps-ci-preparation), so the build workflow reads the value the same
  // way: base64(client_id|refresh_token). Google sends the browser to a loopback address where
  // nothing listens: the tab shows an error, but its address holds the answer. The user copies that
  // address here, and this page sends the code to Google's token endpoint, and nowhere else.
  // The PKCE verifier stays in this tab, so the code is useless to anything else that sees it.
  const GOOGLE_CLIENT_ID = '705061051276-5ssikkg2ag39l7hj9t63saq549n3s2n5.apps.googleusercontent.com';
  const GOOGLE_REDIRECT = 'http://127.0.0.1:47913/aaps-builder';
  const session = {
    get: k => { try { return sessionStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { sessionStorage.setItem(k, v); } catch {} }
  };
  const randomHex = n => [...crypto.getRandomValues(new Uint8Array(n))].map(b => b.toString(16).padStart(2, '0')).join('');
  const b64url = bytes => bytesToB64(bytes).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

  // The link is ready before the tap, so the browser opens it as a normal link and does not
  // block it as a pop-up.
  async function setGoogleLink(verifier, state) {
    const challenge = b64url(new Uint8Array(await crypto.subtle.digest('SHA-256', utf8(verifier))));
    const p = new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID, redirect_uri: GOOGLE_REDIRECT, response_type: 'code',
      scope: 'https://www.googleapis.com/auth/drive.file', access_type: 'offline',
      // consent: Google sends a refresh token only when the user is asked, also after an earlier grant
      prompt: 'consent', code_challenge_method: 'S256', code_challenge: challenge, state
    });
    $('googleAuth').href = 'https://accounts.google.com/o/oauth2/v2/auth?' + p;
  }
  // A new attempt: new verifier and state
  function newGoogleAttempt() {
    const verifier = randomHex(32), state = randomHex(16);
    session.set('gVerifier', verifier);
    session.set('gState', state);
    return setGoogleLink(verifier, state);
  }
  // Keep the attempt of this tab if the page is reloaded while the user is in the Google tab
  if (session.get('gVerifier') && session.get('gState')) setGoogleLink(session.get('gVerifier'), session.get('gState'));
  else newGoogleAttempt();

  let gdriveValue = null;
  $('googleGo').addEventListener('click', async () => {
    const text = $('googleUrl').value.trim();
    if (!text) return msg('googleMsg', t('gNoUrl'), 'err');
    let params;
    try { params = new URL(text).searchParams; } catch { return msg('googleMsg', t('gNoCode'), 'err'); }
    if (params.get('error')) return msg('googleMsg', t('gDenied'), 'err');
    const code = params.get('code');
    if (!code) return msg('googleMsg', t('gNoCode'), 'err');
    if (params.get('state') !== session.get('gState')) return msg('googleMsg', t('gOldUrl'), 'err');
    $('googleGo').disabled = true;
    msg('googleMsg', t('gWorking'), '');
    try {
      const r = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: GOOGLE_CLIENT_ID, code, code_verifier: session.get('gVerifier'),
          grant_type: 'authorization_code', redirect_uri: GOOGLE_REDIRECT
        })
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) {
        msg('googleMsg', t('gFailed', { error: data.error || r.status }), 'err');
        await newGoogleAttempt();
        return;
      }
      if (!data.refresh_token) { msg('googleMsg', t('gNoRefresh'), 'err'); await newGoogleAttempt(); return; }
      gdriveValue = bytesToB64(utf8(GOOGLE_CLIENT_ID + '|' + data.refresh_token));
      $('gdrivePreview').textContent = gdriveValue.slice(0, 16) + '…';
      $('gdriveReady').hidden = false;
      $('googleUrl').value = '';
      msg('googleMsg', t('gOk'), 'ok');
      done(6);
      await newGoogleAttempt();      // the code is used up; a new tap starts a new attempt
    } catch (e) {
      console.error(e);
      msg('googleMsg', t('gFailed', { error: String(e) }), 'err');
    } finally {
      $('googleGo').disabled = false;
    }
  });

  // ---------- step 3 / 6: copy secret names and values ----------
  document.querySelectorAll('[data-aapsb-copy]').forEach(b => b.addEventListener('click', async () => {
    const kind = b.dataset.aapsbCopy;
    const values = { name: 'KEYSTORE_SET', gdrive: 'GDRIVE_OAUTH2', secret: secretValue, gdriveValue };
    await copyText(values[kind]);
    if (kind === 'secret') msg('copyMsg', t('copied'), 'ok');
    if (kind === 'name') msg('copyMsg', t('copiedName'), 'ok');
    if (kind === 'gdriveValue') msg('gdriveCopyMsg', t('gCopied'), 'ok');
    const label = b.textContent;
    b.textContent = t('copiedShort');
    setTimeout(() => { b.textContent = label; }, 2000);
  }));

  updateLinks();
  checkUser();
})();
</script>
