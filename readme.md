# Javascript Concept
[Advance Js 1](https://www.youtube.com/watch?v=jvOhjcNQanE&list=PLz1XPAFf8IxbIU78QL158l_KlN9CvH5fg&index=2)  
[Advance Js 2](https://www.youtube.com/watch?v=xizFJHKHdHw&list=PL7pEw9n3GkoW5bYOhVAtmJlak3ZK7SaDf)


## Closure
In JS variables defined outside the function are automatically
available inside because js uses something called lexical scoping (meaning
variable inner is not available outside but outside function are available inside.).

**How does this happen ?** because of closures.

```
let addTo = function (outer) {
    let add = function (inner) {
        return outer + inner;
    };
    return add;
};

let addTwo = addTo(2);
let addThree = addTo(3);

console.log(addTwo(5));
console.log(addThree(2));

```
Here addTwo and addThree are closures. **closures** are nothing but a function with preserved data.


## Why do we need closure.

#### Data Encapsulation 
Closures give us the ability to store data in
a separate scope and share it only when 
necessary. Creating private static variables 
that contain data are also possible which is 
awesome because you can’t get at the data 
from an outside scope except through the 
object’s privileged methods. 
You can define a class inside a function and 
define the private static variables inside 
the closure:
