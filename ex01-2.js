function hyoji(){
  //表示する文字
 var str="ながのかわあや";
 //
 var cnt=document.timer.moji.value.length;
  //
  if(cnt<7){
    //
    document.timer.moji.value=str.substr(0,cnt+1);}
  else{
    //
    document.timer.moji.value="";}}
function startfnc(){
  //
  setInterval("hyoji()",1000);}

function imgchange10(){
  document.getElementById('logo10').src='./aya now.jpg';
}
