# CoffeeSalesSite

## 프로젝트 개요
CoffeeSalesSite는 커피 판매 웹 애플리케이션입니다. 이 프로젝트는 Express.js를 사용하여 서버를 구현하고 Pug를 사용하여 뷰를 렌더링합니다.


## 커밋 메시지 전략
- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 변경
- style: 코드 포맷팅, 세미콜론 누락 등 코드 수정이 없는 변경
- refactor: 코드 리팩토링
- test: 테스트 추가 또는 수정
- chore: 빌드 프로세스 또는 기타 설정 변경

### 카밋 메시지 예시
```sh
git commit -m "feat: add user login feature"
git commit -m "fix: correct header layout on mobile"
git commit -m "docs: update README with contribution guidelines"

```

## 브랜치 전략
다음은 브랜치 전략입니다:
- `main`: 배포 가능한 상태의 코드가 있는 브랜치입니다.
- `dev`: 개발 중인 최신 코드가 있는 브랜치입니다.
- `feature/{기능명}`: 새로운 기능을 개발하는 브랜치입니다.
- `hotfix/{수정명}`: 배포된 버전에서 발생한 긴급한 문제를 수정하는 브랜치입니다.
- `release/{버전명}`: 배포 준비가 된 코드를 모으는 브랜치입니다.

### 브랜치 생성 및 병합 예시
```sh
# feature 브랜치 생성
git checkout -b feature/new-feature

# 작업 후 커밋
git add .
git commit -m "Add new feature"

# develop 브랜치로 이동 후 병합
git checkout develop
git merge feature/new-feature
```

### Git node_modules 제거
```sh
# 캐시 제거
git rm -r --cached node_modules
# 변경 사항 커밋
git commit -m "Update .gitignore to exclude node_modules"
```

