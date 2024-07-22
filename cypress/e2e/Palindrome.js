function isPalindrome(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Compare the cleaned string with its reverse
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

// Example usage:
const string = "Eva, can I see bees in a cave?";
console.log(isPalindrome(string));  // Output: true

function add(a, b) {
    return a + b;
    console.assert(result === 5, `Expected 5, but got ${result}`);
}
