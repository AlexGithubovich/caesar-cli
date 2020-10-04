function caesar(text, shift, action) {
  let result = '';
  if (action === 'encode') {
    for (let i = 0; i < text.length; i++) {
      let c = text.charCodeAt(i);

      // uppercase letters
      if (c >= 65 && c <= 90) {
        result += String.fromCharCode(((c - 65 + shift) % 26) + 65);

        // lowercase letters
      } else if (c >= 97 && c <= 122) {
        result += String.fromCharCode(((c - 97 + shift) % 26) + 97);

        // others
      } else {
        result += text.charAt(i);
      }
    }
  }
  if (action === 'decode') {
    shift = (26 - shift) % 26;
    result = caesar(text, shift, 'encode');
  }
  return result;
}

module.exports.caesar = caesar;
