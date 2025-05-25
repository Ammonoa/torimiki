const u=()=>{
  let d=new Date,h=d.getHours()+d.getMinutes()/60,w=d.getDay();
  t1.textContent=w===1?'定休日':h<17||h>=23?'準備中':h<22.5?'営業時間中':'L.O.終了';
};
u(),setInterval(u,1e4);
