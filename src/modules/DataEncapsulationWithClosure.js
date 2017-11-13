(function () {
    let foo;
    foo = 0;

    function MyClass() {
        foo += 1;
    }

    MyClass.prototype = {
        howMany: function () {
            return foo;
        }
    };

    window.MyClass = MyClass;
}());