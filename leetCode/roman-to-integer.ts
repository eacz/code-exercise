function romanToInt(s: string): number {
  let number = 0;
  for( let i = 0; i< s.length; i++){
      switch(s.charAt(i)){
          case 'I':
              number += 1
              break;
          case 'V':
              number += 5
              break;
          case 'X':
              number += 10
              break;
          case 'L':
              number += 50
              break;
          case 'C':
              number += 100
              break;
          case 'D':
              number += 500
              break;
          case 'M':
              number += 1000
              break;
      }
  }
  const subs = calculateSubsctraction(s)
  number = number - subs
  return number
};

function calculateSubsctraction(s: string): number{
  let subs = 0
  s.includes('IV') ? subs += 1 * 2: null;
  s.includes('IX') ? subs += 1 * 2: null;
  s.includes('XL') ? subs += 10 * 2: null;
  s.includes('XC') ? subs += 10 * 2: null;
  s.includes('CD') ? subs += 100 * 2: null;
  s.includes('CM') ? subs += 100 * 2: null;
  return subs;
}