const n=["#2C3E50","#34495E","#2C2C2C","#616A6B","#4A235A","#2F4F4F","#0E4B5A","#36454F","#2C3E50","#800020"];function e(){return Math.floor(n.length*Math.random())}const t=document.querySelector("body"),r=document.querySelector("#bg-hex-code");function c(){const o=n[e()];r.innerText=o,t.style.backgroundColor=o}const d=document.querySelector("#btn");d.onclick=c;
