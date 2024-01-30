 // Function to encode a message
 function encodeMessage(message, shift) {
    let encodedArray = [];

    for (let i = 0; i < message.length; i++) {
        let char = message[i];

        if (char.match(/[a-z]/i)) {
            let charCode = message.charCodeAt(i);

            // Shift only alphabetic characters
            charCode = (charCode - 65 + shift) % 26 + 65;

            encodedArray.push(String.fromCharCode(charCode));
        } else {
            // Keep non-alphabetic characters unchanged
            encodedArray.push(char);
        }
    }

    return encodedArray.join('');
}

// Function to decode a message
function decodeMessage(encodedMessage, shift) {
    // Decoding is the same as encoding with a negative shift
    return encodeMessage(encodedMessage, -shift);
}

// Example usage
let originalMessage = "Hello, this is a secret message!";
let shiftAmount = 34; // You can adjust this value for stronger or weaker encryption

let encodedMessage = encodeMessage(originalMessage, shiftAmount);
let decodedMessage = decodeMessage(encodedMessage, shiftAmount);

// Display results
console.log("Original Message: ", originalMessage);
console.log("Encoded Message: ", encodedMessage);
console.log("Decoded Message: ", decodedMessage);