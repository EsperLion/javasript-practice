Object.assign(String.prototype, {

  toBase64 () {
    const binary = this
      .split('')
      .map(char => char.charCodeAt())
      .map(numD => (numD).toString(2));

    console.log('binary[base] -> ', binary);

    if (binary.length % 8 !== 0) {
      for (let i = 0; i < binary.length % 8; i++) {
        binary.push('0');
      }
    }

    console.log('binary[updated] -> ', binary);

    let index = 0;
    const base64Index = binary.reduce((acc, value) => {

      if (index === 5) {
        index = 0;
        acc.push('');
      }

      acc[acc.length - 1] = `${acc[acc.length - 1]}${value}`;
      index++;
      return acc;
    }, [''])
    .map(bin => parseInt(bin, 10));

    console.log('base64Index[base] -> ', binary);

    const charMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

    return base64Index.map(index => charMap[index]).join('');
  }

});


// dGhpcyBpcyBhIHN0cmluZyEh
// this is a string!!
const str = 'this is a string!!';
const res = 'dGhpcyBpcyBhIHN0cmluZyEh';

const exp = str.toBase64();

console.log(exp);
console.log(exp === res);