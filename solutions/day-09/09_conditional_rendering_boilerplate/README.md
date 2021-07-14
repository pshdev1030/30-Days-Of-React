## Conditional Rendering
* 조건부 랜더링은 서로 다른 JSX요소를 다른 조건으로 랜더링 하는 것이다.
* if문 및 else문, 삼항연산자 및 &&를 사용하여 조건부 랜더링을 구현하 수 있다.

## if else
* 일반적인 경우에 모두 사용 가능하다.
```javascript
if(condition) button =(<button>login</button>);
else button= button=(<button>logout</button>);
return button
```

## 삼항연산자
* 참이면 A 거짓이면 B를 랜더링해야할 떄 사용한다.
```javascript
const button = condition ? (<button>login</button>):(<button>logout</button>);

return button;
```

## &&연산자
* 조건에 따라 랜더링 할지 말지를 결정해야 할 떄 사용한다.
```javascript
const loginbutton = <button>login</button>;
const logoutButton=<button>logout</button>;

return(
    {login&&(<button>logout</button>)}
    {logout&&(<button>logout</button>)}
);
return button;
```