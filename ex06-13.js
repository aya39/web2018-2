function ChangeImageAndBack(){
  
  imgback();
  
  ThreeSecChange3(); 
  
}


function ThreeSecChange3(){
  setTimeout("imgchange3()",3000);
}
function imgchange3() {
  document.getElementById('logo3').src = './image/hasiru.jpg';
}

//function ThreeSecBack() { 
//関数imgchange1()を3000ミリ秒間隔で呼び出す 
//  setInterval("imgback()",3000);
//}

function imgback() {
  document.getElementById('logo3').src = './image/goru.png';
}