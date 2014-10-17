function fibonacci_set(max) {
    if (max > 1) {
        var fib_list = [1];
        var current_fib = 1;
        while (current_fib < max) {
            fib_list.push(current_fib);
            current_fib = fib_list[fib_list.length -1] + fib_list[fib_list.length -2];
        }
        return fib_list;
    }
    else {
        return [1, 1];
    }
}

function even(n) {
    return n % 2 === 0;
}

function filter(func, list) {
    var new_list = [];
    for (var i = 0; i < list.length; i++) {
        if (func(list[i])) {
            new_list.push(list[i]);
        }
    }
    return new_list;
}

function sum(list) {
    var total = 0;
    for (var i = 0; i < list.length; i++) {
        total += list[i];
    }
    return total;
}

console.log (sum(filter(even, fibonacci_set(4000000))));
