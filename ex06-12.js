function ThreeSecChange2() { 
//関数imgchange1()を3000ミリ秒間隔で呼び出す 
  setTimeout("imgchange2()",3000); } 
  

function imgchange2() {
  document.getElementById('logo2').src = './image/goru.png';
}
