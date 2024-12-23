/* Task1:NeedtocreateJavaScript functions for a sum of numbers in the string (Example like
 “foo8bar8cat2tc2”)
 */
function SumOfNumsInStr(input) {
    let res = 0;
    for (let i = 0; i < input.length; i++) {
        if (/[0-9]/.test(input[i])) {
            res += parseInt(input[i]);
        }
    }
    return res;
}
console.log(SumOfNumsInStr("foo8bar8cat2tc2"));
