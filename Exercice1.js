function fib(length) {
    var fibTab = [],
        i = 0,
        j = 1;
    fibTab.push(i);
    fibTab.push(j);
    while (fibTab.length <= length) {
        fibTab.push(fibTab[j] + fibTab[i]);
        j++;
        i++;
    }
    return fibTab;
};
console.log(fib(15));


