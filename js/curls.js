function smallCurl(width=32, height=1278, colour="none"){
  return `
    <svg width="${width}" height="${height}" viewBox="0 0 32 1278" fill="${colour}" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.0737 1C4.787 15.0573 -11.2869 39.5401 16.0737 88.4791C32.509 117.876 30.5172 132.335 16.0737 163.663C7.4427 172.097 -1.15203 214.992 19.5625 261.261C40.277 307.529 27.0316 355.244 19.5625 364.28C13.5871 371.51 8.4085 395.97 19.5625 423.924C30.7164 451.877 24.2099 483.767 19.5625 496.218C13.9191 507.062 6.01837 537.426 19.5625 572.127C33.1065 606.829 25.2058 648.438 19.5625 664.906C10.9314 680.168 -1.15203 722.5 19.5625 769.733C40.277 816.965 28.1935 857.691 19.5625 872.15C11.5953 883.798 0.441389 916.973 19.5625 956.494C38.6835 996.015 27.5296 1027.58 19.5625 1038.43C14.251 1052.49 6.81508 1087.83 19.5625 1116.75C32.3098 1145.66 24.8739 1183.42 19.5625 1198.68C12.9232 1212.34 3.62823 1247.12 19.5625 1277" stroke="black" stroke-width="2"/>
    </svg>
    `
}

function mediumCurl(width=31, height=1293, colour="none"){
  return `
    <svg width="${width}" height="${height}" viewBox="0 0 31 1293" fill="${colour}" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.8444 1C-2.54802 53.8 9.93087 107 18.8444 127C28.7483 145.667 36.6714 187 18.8444 248C2.23957 304.818 8.94049 390.333 18.8444 429C26.2723 455.667 36.6714 522.8 18.8444 578C-3.43937 647 -6.41054 727 18.8444 837C39.0483 925 27.2627 999 18.8444 1025C11.4165 1049.67 1.01737 1114.4 18.8444 1176C36.6714 1237.6 26.2723 1279 18.8444 1292" stroke="black" stroke-width="2"/>
    </svg>
    `
}

function largeCurl(width=18, height=1293, colour="none"){
  return `
    <svg width="${width}" height="${height}" viewBox="0 0 18 1293" fill="${colour}" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.06372 1C-2.17733 50.8247 5.02289 96.6329 9.06372 119C19 174 15 187 9.06372 248C3.3311 306.907 1.59022 350.484 9.5 396.5C15 423 14.507 520.193 9.06372 578C2.34149 649.39 -3.42657 735.042 9.06372 837C20.0016 926.286 18.4922 999 9.06372 1025C2.4033 1100 1.14981 1106.02 9.06372 1176C16.9776 1245.98 21.5582 1232.34 9.06372 1292" stroke="black" stroke-width="2"/>
    </svg>
    `
}

const smallCurlBrown = smallCurl(30, 1200, "brown")

let hairViewBox = document.getElementById("hairViewBox")