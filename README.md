# covid-vac-centers

코로나19 예방접종 센터 조회 프로젝트 입니다.

<img src="https://img.shields.io/badge/vue-v2.6.11-brightgreen" alt="버전: vue v2.6.11"> <img src="https://img.shields.io/badge/vuex-v3.4.0-brightgreen" alt="버전: vuex v3.4.0"> <img src="https://img.shields.io/badge/vue--router-v3.2.0-brightgreen" alt="버전: vue-router v3.2.0">

<br/>

<img src="https://img.shields.io/badge/webpack-v4.46.0-important" alt="버전: webpack v4.46.0"> <img src="https://img.shields.io/badge/babel-v7.14.6-important" alt="버전: babel v7.14.6"> 

<img src="https://img.shields.io/badge/eslint-v6.7.2-yellow" alt="버전: eslint v6.7.2"> <img src="https://img.shields.io/badge/prettier-v2.2.1-yellow" alt="버전: prettier v2.2.1">

<br/>

<img src="https://img.shields.io/badge/typescript-v4.1.5-blue" alt="버전: typescript v4.1.5"> <img src="https://img.shields.io/badge/node--sass-v4.12.0-blue" alt="버전: node-sass v4.12.0"> <img src="https://img.shields.io/badge/jest-v24.0.19-blue" alt="버전: jest v24.0.19">


<br/><br/>


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



# ``Storybook``의 전역 스타일 적용

``CSS`` 파일을 전역 스타일로 사용할 때는 ``preview.js``에서 ``import`` 하는 것으로 전역 스타일을 적용시킬 수 있었습니다.

``SCSS`` 전처리기를 사용할 때도 동일하게 ``import`` 해보았지만, 여기서 이슈가 발생하였습니다.

``Vue`` 파일 내부의 ``<style>``에서 사용한 전역 ``Variables`` 나 ``Mixins`` 가 정의되지 않았다는 에러가 발생하는 것입니다.

<br/>

이 문제는 ``Storybook`` 프레임워크를 빌드할 때, ``preview.js``가 빌드되기 전에, ``Vue`` 파일을 컴파일하게 되는데, 컴파일 순서에 의한 에러 였습니다.

즉, ``preview.js``를 컴파일 해야 ``전역 스타일``을 사용할 수 있지만, ``Vue`` 파일을 먼저 컴파일 하기 때문 입니다.

<br/>

이 문제를 해결하기 위해, ``Storybook``의 ``Webpack``에서 전역 스타일을 ``import`` 하였습니다.

``Storybook``의 ``Webpack`` 설정은 ``main.js``에서 할 수 있습니다.

<br/>

전역 SCSS 설정은 다음과 같습니다.

```javascript
// 경로: .storybook/main.js
module.exports = {
  // ... 생략 ...
  
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      
      use: [
        "style-loader", 
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            prependData: `
              @import "src/스타일경로/스타일.scss";
            `,
          },
        },
      ],
      
      include: path.resolve(__dirname, "../"),
    });
  },
};
```



<br/><hr/><br/>



# ``Storybook``의 모듈 ``alias`` 설정

``Storybook``은 자체 ``Webpack``을 사용하여 빌드를 합니다.

때문에 프로젝트의 ``Webpack``설정이 적용되지 않으며, 기존에 사용하던 ``alias``도 적용되지 않습니다.

만약, ``Storybook``에 등록할 ``*.stories.ts`` 파일 내에 ``alias``를 사용했다면, 모듈을 찾지 못한다는 에러가 발생하게 됩니다.

<br/>

이를 해결하기 위해, ``main.js``에서 ``Webpack``의 ``alias``를 설정합니다.

```javascript
// 경로: .storybook/main.js
module.exports = {
  // ... 생략 ...
  
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "..", "src"),
    };

    config.resolve.extensions.push("ts", "tsx");

    return config;
  },
}
```

<br/>

위와같이 설정을 하게되면, ``*.stories.ts`` 내부에서도 ``@`` alias를 정상적으로 컴파일 할 수 있습니다.
