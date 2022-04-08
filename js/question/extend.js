function Animal(name) {
    this.species = "动物";
    // this.name = name;
    this.colors = ['black', 'white'];
}
Animal.prototype.getName = function() {
    return this.name;
}

/* 原型链继承 */
// function Cat(name, color){
//     this.name = name;
//     this.color = color;
// }
// Cat.prototype = new Animal();
// // 加了上面一行后，Cat.prototype.constructor指向Animal。
// Cat.prototype.constructor = Cat;
// // 问题1：原型中包含的引用类型属性将被所有实例共享；
// let cat = new Cat();
// console.log(cat); // 动物
// cat.colors.push('brown');
// let cat2 = new Cat('cat2');
// console.log(cat2.colors); //[ 'black', 'white', 'brown' ]
// // 问题2：子类在实例化的时候不能给父类构造函数传参；


/* 构造函数继承 */
// function Cat(name, color) {
//     Animal.apply(this, arguments);
//     // Animal.call(this, arguments);
//     this.name = name;
//     this.color = color;
// }
// var cat = new Cat();
// console.log(cat);
// // 问题：方法必须定义在构造函数中，所以会导致每次创建子类实例都会创建一遍方法。

/* 组合式 */


/* 寄生/空函数传递 */
function Cat(name, color){
    this.name = name;
    this.color = color;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

//https://juejin.cn/post/6946022649768181774#heading-1