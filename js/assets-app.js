let devices=["iphone","ipad","ipod touch"]
let matches=[];for(let device of devices){if(window.navigator.userAgent.toLowerCase().includes(device)){matches.push(device)}}
if(!matches.length){if(document.querySelector(".add_repo"))
document.querySelector(".add_repo").style.display="none";}
if(!matchMedia("(prefers-color-scheme: light)").matches){document.querySelector("div.left > a:nth-child(1) > picture > img").src="/assets/icon_transp.png";}