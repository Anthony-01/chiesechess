!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e,t){this.x=e,this.y=t}},function(e,t,n){var o=n(2);o.initMap(),o.init(),document.getElementsByTagName("body")[0].addEventListener("click",o.initEvent,!1)},function(e,t,n){var o=1,r=2,a=o,s=new Array(32),i=new Array,u=document.getElementById("myCanvas"),c=u.getContext("2d"),p=document.getElementById("qipan"),h=document.getElementById("Info1"),f=document.getElementById("Info2"),v=document.getElementById("message_txt"),l=(n(0),n(3));var y=n(6),m=n(7);function w(){c.drawImage(p,0,0);for(var e=0;e<9;e++)for(var t=0;t<10;t++)-1!=i[e][t]&&s[i[e][t]].showPic(c)}function d(e){var t=function(e,t){var n=u.getBoundingClientRect();return{x:e-n.left*(u.width/n.width),y:t-n.top*(u.height/n.height)}}(e.pageX,e.pageY);!function(e,t){var n=parseInt(Math.floor(e-m.C_OFFX)/m.C_INTERVAL),u=parseInt(Math.floor(t-m.C_OFFX)/m.C_INTERVAL);if(n<0||n>8||u<0||u>9)return void(v.innerHTML="x: "+n+", y:"+u);var p=s[i[n][u]];if(function(e){if(null==e)return!1;if(e.player!=a)return v.innerHTML="单击成对方棋子了!",!1;return!0}(p))x&&w(),(x=p).drawSelectedChess(c);else{if(!x)return void(v.innerHTML="请选择准备移动的棋子");if(!l.isAbleTo(x,n,u))return void(v.innerHTML="不符合走动规则");var y=x.pos.x,d=x.pos.y,M=i[n][u];i[n][u]=i[y][d],i[y][d]=-1,x.SetPos(n,u),l.setMap(i),w(),a==o?(a=r,h.style.display="none",f.style.display="block"):(a=o,h.style.display="block",f.style.display="none"),0==M&&(v.innerHTML="红方赢了"),16==M&&(v.innerHTML="黑方赢了")}}(t.x,t.y)}var x=null;e.exports={initMap:function(){var e,t;for(e=0;e<9;e++)for(i[e]=new Array,t=0;t<10;t++)i[e][t]=-1},init:function(){!function(){for(var e in y){var t=y[e],n="red"==e?1:2,o=!0,r=!1,a=void 0;try{for(var u,h=t[Symbol.iterator]();!(o=(u=h.next()).done);o=!0)for(var f=u.value,v=0;v<f.pos.length;v++){var w=new m.Chess(n,f.name,f.pos[v]);s[f.value+v]=w,i[f.pos[v].x][f.pos[v].y]=f.value+v}}catch(e){r=!0,a=e}finally{try{o||null==h.return||h.return()}finally{if(r)throw a}}}l.setMap(i),c.drawImage(p,0,0),s.forEach(function(e){e.showPic(c)})}(),h.style.display="block",f.style.display="none",u.addEventListener("mousedown",d,!1)},initEvent:d}},function(e,t,n){var o=new(n(4).MoveMaster),r=n(0),a=n(5);function s(e,t){var n=e<16?-1:1;switch(e<16?e:e-16){case 0:return 7*n;case 1:case 2:return 6*n;case 3:case 4:return 5*n;case 5:case 6:return 4*n;case 7:case 8:return 3*n;case 9:case 10:return 2*n;case 11:case 12:case 13:case 14:case 15:return 1*n;default:return 0}}function i(e,t){var n=!1;return e.forEach(function(e){e.x==t.x&&e.y==t.y&&(n=!0)}),n}function u(e,t){return new r(e,t)}e.exports={setMap:function(e){var t=function(e){return a(e)}(e);!function(e){e.forEach(function(t,n){e[n]=t.map(s)})}(t),o.updateMap(t)},isAbleTo:function(e,t,n){var r=1==e.player?1:0,a=u(e.pos.x,e.pos.y),s=u(t,n);switch(e.chessName){case"将":case"帅":return i(o.bossMove(a,r),s);case"兵":case"卒":return i(o.binMove(a,r),s);case"仕":case"士":return i(o.shiMove(a,r),s);case"象":case"相":return i(o.xiangMove(a,r),s);case"马":return i(o.maMove(a,r),s);case"车":return i(o.juMove(a,r),s);case"炮":return i(o.paoMove(a,r),s)}}}},function(e,t,n){"use strict";t.__esModule=!0;var o,r=n(0);!function(e){e[e.BLACK=0]="BLACK",e[e.RED=1]="RED"}(o=t.SIDE||(t.SIDE={}));var a=function(){function e(){}return e.prototype.updateMap=function(e){this.map=e},e.prototype.binMove=function(e,t){var n,a=[],s=0,i=t?1:-1;if(t==o.RED?(n=e.y<5,s=-1):(n=e.y>4,s=1),e.y+s>=0&&e.y+s<=this.map.length&&this.map[e.x][e.y+s]*i<=0){var u=new r(e.x,e.y+s);a.push(u)}return n&&(e.x-1>=0&&this.map[e.x-1][e.y]*i<=0&&a.push(new r(e.x-1,e.y)),e.x+1<=8&&this.map[e.x+1][e.y]*i<=0&&a.push(new r(e.x+1,e.y))),a},e.prototype.paoMove=function(e,t){for(var n=[],o=0;o<4;o++)n=n.concat(this.paoMove_(e,o,t));return n},e.prototype.paoMove_=function(e,t,n){var o,a=this,s=[],i=e.x,u=e.y,c=0,p=0,h=n?1:-1;switch(t){case 0:o=function(e,t){return e>=0},p=-1;break;case 1:o=function(e,t){return t>=0},c=-1;break;case 2:o=function(e,t){return e<a.map.length},p=1;break;case 3:o=function(e,t){return t<a.map[0].length},c=1}for(var f=!1;o(i,u);)if(i!=e.x||u!=e.y){if(0==this.map[i][u])f||s.push(new r(i,u));else{if(f){this.map[i][u]*h<0&&(s.push(new r(i,u)),f=!1);break}f=!0}u+=c,i+=p}else i+=p,u+=c;return s},e.prototype.juMove=function(e,t){for(var n=[],o=e.y;o>=0&&(o==e.y||this.fastMove(new r(e.x,o),t,n));o--);for(var a=e.x;a>=0&&(a==e.x||this.fastMove(new r(a,e.y),t,n));a--);for(o=e.y;o<this.map[0].length&&(o==e.y||this.fastMove(new r(e.x,o),t,n));o++);for(a=e.x;a<this.map.length&&(a==e.x||this.fastMove(new r(a,e.y),t,n));a++);return n},e.prototype.fastMove=function(e,t,n){var o=t?1:-1;return 0==this.map[e.x][e.y]?(n.push(new r(e.x,e.y)),!0):(this.map[e.x][e.y]*o<0&&n.push(new r(e.x,e.y)),!1)},e.prototype.maMove=function(e,t){var n=[];return n=(n=(n=(n=n.concat(this.maMove_(e,t,-1,0))).concat(this.maMove_(e,t,1,0))).concat(this.maMove_(e,t,0,-1))).concat(this.maMove_(e,t,0,1))},e.prototype.maMove_=function(e,t,n,o){var a=[],s=t?1:-1;if(e.x+n>=0&&e.x+n<this.map.length&&e.y+o>=0&&e.y+o<this.map[0].length&&0==this.map[e.x+n][e.y+o]){var i=0,u=0;0==n?i=-1:u=-1;var c=e.x+2*n-i,p=e.y+2*o-u;c>=0&&c<this.map.length&&p>=0&&p<this.map[0].length&&this.map[c][p]*s<=0&&a.push(new r(c,p));var h=e.x+2*n+i,f=e.y+2*o+u;h>=0&&h<this.map.length&&f>=0&&f<this.map[0].length&&this.map[h][f]*s<=0&&a.push(new r(h,f))}return a},e.prototype.xiangMove=function(e,t){var n=[];return n=(n=(n=(n=n.concat(this.xiangMove_(e,t,1,1))).concat(this.xiangMove_(e,t,-1,1))).concat(this.xiangMove_(e,t,-1,-1))).concat(this.xiangMove_(e,t,1,-1))},e.prototype.xiangMove_=function(e,t,n,o){var a=[],s=t?1:-1,i=e.x+n,u=e.y+o;return i>=0&&i<this.map.length&&u>=0&&u<this.map[0].length&&0==this.map[i][u]&&this.map[e.x+2*n][e.y+2*o]*s<=0&&(s>0?e.y+2*o>4&&a.push(new r(e.x+2*n,e.y+2*o)):e.y+2*o<5&&a.push(new r(e.x+2*n,e.y+2*o))),a},e.prototype.shiMove=function(e,t){var n=[];return n=(n=(n=(n=n.concat(this.shiMove_(e,t,1,1))).concat(this.shiMove_(e,t,-1,1))).concat(this.shiMove_(e,t,-1,-1))).concat(this.shiMove_(e,t,1,-1))},e.prototype.shiMove_=function(e,t,n,a){var s,i,u=[],c=t?1:-1;t==o.RED?(s=7,i=9):(s=0,i=2);var p=e.x+n,h=e.y+a;return p>=3&&p<=5&&h>=s&&h<=i&&this.map[p][h]*c<=0&&u.push(new r(p,h)),u},e.prototype.bossMove=function(e,t){var n=[];return n=(n=(n=(n=n.concat(this.shiMove_(e,t,1,0))).concat(this.shiMove_(e,t,0,1))).concat(this.shiMove_(e,t,-1,0))).concat(this.shiMove_(e,t,0,-1))},e}();t.MoveMaster=a},function(e,t){e.exports=function(e){if(e.length&&e[0].length){var t=[];return e.forEach(function(e,n){t[n]=new Array,e.forEach(function(e,o){t[n].push(e)})}),t}return console.log("复制的并不是二维数组"),console.log(e),e}},function(e,t,n){var o=n(0);e.exports={red:[{name:"兵",count:5,pos:[new o(0,6),new o(2,6),new o(4,6),new o(6,6),new o(8,6)],value:27},{name:"炮",count:2,pos:[new o(1,7),new o(7,7)],value:25},{name:"车",count:2,pos:[new o(0,9),new o(8,9)],value:23},{name:"马",count:2,pos:[new o(1,9),new o(7,9)],value:21},{name:"相",count:2,pos:[new o(2,9),new o(6,9)],value:19},{name:"士",count:2,pos:[new o(3,9),new o(5,9)],value:17},{name:"帅",count:1,pos:[new o(4,9)],value:16}],black:[{name:"卒",count:5,pos:[new o(0,3),new o(2,3),new o(4,3),new o(6,3),new o(8,3)],value:11},{name:"炮",count:2,pos:[new o(1,2),new o(7,2)],value:9},{name:"车",count:2,pos:[new o(0,0),new o(8,0)],value:7},{name:"马",count:2,pos:[new o(1,0),new o(7,0)],value:5},{name:"象",count:2,pos:[new o(2,0),new o(6,0)],value:3},{name:"仕",count:2,pos:[new o(3,0),new o(5,0)],value:1},{name:"将",count:1,pos:[new o(4,0)],value:0}]}},function(e,t){function n(e,t,n){this.player=e,this.chessName=t,this.pos={},this.SetPos(n.x,n.y)}n.prototype.showPic=function(e){if(1==this.player){var t=document.getElementById("Img"+this.chessName);e.drawImage(t,this.x,this.y)}else{var n=document.getElementById("Img"+this.chessName+1);e.drawImage(n,this.x,this.y)}},n.prototype.SetPos=function(e,t){this.pos.x=e,this.pos.y=t,this.x=76*this.pos.x+24,this.y=76*this.pos.y+24},n.prototype.drawSelectedChess=function(e){e.lineWidth=5,e.strokeStyle="red",e.beginPath(),e.rect(this.x-2,this.y-2,65,65),e.stroke()},e.exports={Chess:n,C_INTERVAL:76,C_OFFX:24}}]);
//# sourceMappingURL=bundle.js.map