function person(name, age){
    this.name = name
    this.age = age
}
person.prototype.sex = 'n'
var per = new person('abc', 12)
