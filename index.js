// 순수 함수 => 입력값에 의해 출력이 정해진다.

function 바깥함수(param) {
  const 상태 = param

  return function 안쪽함수(매개변수) {
    return 상태 + 매개변수
  }
}

const 안쪽함수 = 바깥함수()

// 자스로 순수한 함수형 만들기 어렵다..라는 것
//const a = console.log(안쪽함수(200))

console.log(안쪽함수(200))