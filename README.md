# covid-vac-centers

코로나19 예방접종 센터 조회 프로젝트 입니다.

사용 API는 다음과 같습니다.

1. 공공 API
2. Kakao Map API



<br/><hr/><br/>



# Issue 솔루션

## 1. ``SameSite`` 정책

브라우저는 ``CSRF (Cross Site Request Forgery: 교차 사이트 요청 위조)`` 에 의해, 해킹 당할 수 있습니다.

``CSRF (Cross Site Request Forgery)``란, 사용자가 인증한 ``신뢰할 수 있는 사이트``에 해커의 의도대로 요청되는 해킹을 말합니다.

브라우저는 ``CSRF (Cross Site Request Forgery)``를 막기 위해, ``Cookie``에 ``SameSite`` 속성을 지원 합니다.

<br/>

기존의 ``SameSite`` 기본값은 ``None`` 이었지만, ``2020년`` 에 업데이트 된 ``Chrome 80`` 부터는 ``SameSite`` 기본값이 ``Lax``로 변경 되었습니다.

때문에 기존에 없던 ``SameSite Issue``가 발생하게 되고 이는, ``Javascript``에서 ``document.cookie``에 직접 ``SameSite=None;``을 설정해 주어야 합니다.

<br/>

주의할 점은 ``SameSite=None;`` 을 설정하게 되면, ``Secure`` 속성도 함께 설정해야 ``Issue``가 해결 됩니다.

<br/>

다음은 ``Vue`` 프로젝트에서 ``SameSite=None;`` 을 설정한 예시 입니다.

```typescript
// main.ts

// 기타 생략

document.cookie = "SameSite=None; Secure;";
``` 

<br/>

오타가 없고 세미콜론을 정확히 입력 했다면, ``SameSite Issue`` 가 해결 됩니다.



<br/><hr/><br/>



# 특정 컴포넌트로 ``Scroll 이동``

``Vue 프로젝트``를 사용하지 않았을 때는 ``window.scrollTo()`` 메서드가 정상동작 하였습니다.

하지만, ``Vue 프로젝트`` 내에서는 ``window.scrollTo()`` 메서드가 동작하지 않았습니다.

<br/>

이는 ``Vue 컴포넌트``의 함수인 ``vm.$scrollIntoView()`` 함수로 해결할 수 있습니다.

``vm.$scrollIntoView()`` 함수는 ``vm`` 객체로 ``Scroll을 이동`` 시키는 기능을 합니다.

<br/>

주의할 점은 ``vm.$nextTick()`` 함수를 사용하여, ``Vue Rendering Life Cycle`` 이후 동작하도록 해야 합니다.

다음은 사용 예시 입니다.

```typescript
import Vue from "vue";

export default Vue.extend({
  methods: {
    moveScroll(): void {
      this.$nextTick(() => {
        this.$scrollIntoView({ behavior: "smooth" });
      });
    },
  },
});
```



<br/><hr/><br/>