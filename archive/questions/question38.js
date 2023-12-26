// *QUESTION: Given a valid IPv4 Address return defanged version of it
// ? 127.0.0.1 => "127[.]0[.]0[.]1"

const defangedIPVFour = (address) => {
  let arr = [];
  let tempStr = "";
  for (let i of address) {
    if (i !== ".") {
      tempStr += i;
    } else {
      arr.push(tempStr);
      tempStr = "";
    }
  }
  arr.push(tempStr);
  tempStr = "";
  for (let i in arr) {
    if (Number(i) === arr.length - 1) {
      tempStr += arr[i];
    } else {
      tempStr += arr[i] + "[.]";
    }
  }
  return tempStr;
};

console.log(defangedIPVFour("255.100.50.0"));
