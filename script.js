// paste this IIFE to console browser
(() => {
  const termsKo = Array.from(document.getElementsByClassName('lang-ko'))
    const termsPl = Array.from(document.getElementsByClassName('lang-pl'))
  const csv = [];
    const zipped = termsKo.map((e, i) => ([e.innerText, termsPl[i].innerText]))
    zipped.forEach(term => {csv.push(`${term[0]},${term[1]}`)})


  console.log(csv.join('\n'));
})();
