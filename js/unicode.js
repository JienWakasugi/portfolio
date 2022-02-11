function r(from, to) {
  return ~~(Math.random() * (to - from + 1) + from);
}

function getChar() {
  // return String.fromCharCode(0x1401);
  // \1401 - \141b
  return String.fromCharCode(r(0x1401,0x141b));
}
function pick() {
  return arguments[r(0, arguments.length - 1)];
}
function loop(fn, delay) {
  let stamp = Date.now();
  function _loop() {
    if (Date.now() - stamp >= delay) {
      fn(); stamp = Date.now();
    }
    requestAnimationFrame(_loop);
  }
  requestAnimationFrame(_loop);
}
class Div {
  constructor() {
    this.element = document.createElement('div');
    this.element.textContent = getChar();
    // this.element.style.color = '#f09ae9';
    
    // this.element.style.color =pick('#FFFFFF','#FBA5B6','#FE5478','#FDAFBE','#FFB1C0','#FCADBD','#FFB6C5','#FEC6D0','#FFF5EA','#FFDEE4','#FEF6EC','#FF90A6','#FED6C3','#FFDCCD','#FED0D9','#FF7792','#FFD3DC','#FFEAEE','#FDA9B9','#FFD6DE','#FFFBF7','#FECDB7','#FBA7B7','#FFFEFD','#FDB8C5','#FFF8EF','#FDBECA','#FECDD7','#FFCDD1','#FFE4DE','#FFFAF4','#FFF6F1','#FFF4F6','#FFFDF9','#FED2BD','#FEDAC9','#FEBFCB','#FFF9F2','#FDCFB8','#FFEDE3','#FFE2D3','#FFD9E0','#FCAABB','#FFE6DB','#FDD0BB','#FF5A7C','#FF6484','#FF7E97','#FFFBFA','#FFE6EB','#FFC8D3','#FFC3CF','#FFF8F1','#FFA5B7','#FFE0E6','#FFF0E8','#FFEBEF','#FFF0F3','#FFE9E0','#FFE8DE','#FEDFCF','#FFF5F7','#FFABBC','#FFF7F8','#FF5E7F','#FED1BC');

    // this.element.style.setProperty('--scaley',r(1,5));
    // this.element.style.setProperty('--scalex',r(1,10));
    this.element.style.setProperty('--deg',r(45,360) + 'deg');
    let color = pick('#577399','#577399','#fe5f55','#fe5f55','#fee440');
    this.element.style.setProperty('--colorbg',color);
    this.element.style.setProperty('--colortx',color);
  }
  
}
function cons(target) {
  let root = document.createDocumentFragment();
  for(let i = 0; i < 500; i ++) {
    let div = new Div();
    root.appendChild(div.element);
  }
 body.appendChild(root);
}
const body = document.querySelector('body');
cons(body);