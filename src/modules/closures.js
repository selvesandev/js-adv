let addTo = function (outer) {
    function add(inner) {
        return outer + inner;
    }

    return add;
};

let addTwo = addTo(2);
let addThree = addTo(3);

console.log(addTwo(5));
console.log(addThree(2));

