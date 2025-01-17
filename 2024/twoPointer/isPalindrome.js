// const isPalindrome = function(s) {
//     s = s.toLowerCase().replace(/[\W_]/g, "")
//     console.log('s', s)

//     let start = 0;
//     let end = s.length -1
//     while(start < end) {
//         if(s[start] !== s[end]) return false;
//         start++;
//         end--
//     }
//     return true
// };

// isPalindrome("A man, a plan, a canal: Panama");
// isPalindrome("race a car")
// isPalindrome("")


var invertTree = function(root) {
    if(root === null) return null;

    let left = root.left;
    let right = root.right;

    root.left = invertTree(right);
    root.right = invertTree(left);

    return root;
};
console.log(invertTree([4,2,7,1,3,6,9]))
