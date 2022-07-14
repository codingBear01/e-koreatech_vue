class Shape {
  constructor(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
  }
  sayHell() {
    console.log(`Shape... ${this.id}, ${this.x}, ${this.y}`);
  }
}

class Rectangle extends Shape {
  constructor(id, x, y, width, height) {
    // 상위 Class 생성자 호출
    super(id, x, y);
    // 자신의 멤버 변수 초기화
    this.width = width;
    this.height = height;
  }
  // 상위 Class 함수 Override
  sayHell() {
    super.sayHell();
    console.log(
      `Rectangle... ${this.id}, ${this.x}, ${this.y}, ${this.width}, ${this.height}`
    );
  }
}

const obj = new Rectangle(1, 0, 0, 100, 200);
// 상위 함수까지 호출됨
obj.sayHell();
