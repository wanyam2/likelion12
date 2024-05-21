// 데이터 변수 var
var a = 3
console.log(a)
var a = 4
console.log(a)
a = 5
console.log(a)

// boolean
const bool1 = true
console.log(bool1)

// 배열
const array = [1, 2, 3, 4, "a"]
console.log(array)
array.push("b") // 배열 끝에 데이터 추가
array.pop() // 배열 끝에 있는 데이터 삭제
array.splice(2,1) // (시작할 데이터 인덱스 위치, 삭제할 데이터 갯수)

// 반복문
let a1 = 0
for ( i = 0; i<4; i++)  {
    a1 = a1 + 2
    console.log(a1)
}

// 함수
function say() {
    console.log(hello)
}
say("hello world");

function say(hello, age) {
    console.log("hello my name is " + helloage);
} 
say("ki", 15);

function add() {
    const a = 2
    const b = 3
    return a+b
}
const Add = add()
console.log(Add)

const group = {
    name : "pill"
    river: function(otherName) {
    console.log("hello" + otherName + "nice to meet you")
    }
}

group.river(group.name)

const functionname = (a, b) => {
    a+b
}

const Ad = functionname(5,4)
console.log(Ad)