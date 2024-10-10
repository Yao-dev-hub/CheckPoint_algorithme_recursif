function isPalindrome(str) {
    // Supprimer les espaces, la ponctuation et mettre en minuscules
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    if (str.length <= 1) {
        return true;
    } else if (str[0] !== str[str.length - 1]) {
        return false;
    } else {
        return isPalindrome(str.slice(1, -1));
    }
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello")); // false