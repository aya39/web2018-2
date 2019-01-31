function ChangeImageAndBack(){
  
  imgback();
  
  ThreeSecChange4(); 
  
}


function ThreeSecChange4(){
  setTimeout("imgchange4()",3000);
}
function imgchange4() {
  document.getElementById('logo4').src = './image/hanabi.png';
}

//function ThreeSecBack() { 
//関数imgchange1()を3000ミリ秒間隔で呼び出す 
//  setInterval("imgback()",3000);
//}


function imgback() {
  document.getElementById('logo4').src = './image/hanabi1.png';
}