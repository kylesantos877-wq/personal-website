(function(){
  try{
    var n=new Date(),b=new Date(2010,1,26),a=n.getFullYear()-b.getFullYear();
    if(n<new Date(n.getFullYear(),1,26))a--;
    document.getElementById('age').textContent=a;
    document.getElementById('yr').textContent=n.getFullYear();
    document.getElementById('yr2').textContent=n.getFullYear();
  }catch(e){}
})();
(function(){
  var b=document.getElementById('copy'),t=document.getElementById('email');
  if(!b)return;
  b.addEventListener('click',function(){
    function done(){b.textContent='Copied';setTimeout(function(){b.textContent='Copy email'},1800)}
    function sel(){var r=document.createRange();r.selectNodeContents(t);var s=window.getSelection();s.removeAllRanges();s.addRange(r);b.textContent='Selected, press copy'}
    try{navigator.clipboard.writeText(t.textContent).then(done,sel)}catch(e){sel()}
  });
})();
