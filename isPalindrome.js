console.log(isPalindrome(121)) // true
console.log(isPalindrome(1331)) // true
console.log(isPalindrome(4554)) // true
console.log(isPalindrome(12321)) // true
console.log(isPalindrome(1001)) // true
console.log(isPalindrome(12345)) // false
console.log(isPalindrome(67896)) // false
console.log(isPalindrome(987654)) // false
console.log(isPalindrome(123456789)) // false
console.log(isPalindrome(13579)) // false

function isPalindrome(number) {
    let toCheck = number.toString()    
    let left = 0;
    let right = toCheck.length - 1;
    while(left < right) {
        if (toCheck.charAt(left) != toCheck.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}