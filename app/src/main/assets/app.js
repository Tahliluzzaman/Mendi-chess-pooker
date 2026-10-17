/* Chess.js library embedded for offline use */
var Chess=function(r){var u="b",s="w",l=-1,_="p",A="n",S="b",m="r",y="q",p="k",t="pnbrqkPNBRQK",e="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",g=["1-0","0-1","1/2-1/2","*"],C={b:[16,32,17,15],w:[-16,-32,-17,-15]},T={n:[-18,-33,-31,-14,18,33,31,14],b:[-17,-15,17,15],r:[-16,1,16,-1],q:[-17,-16,-15,1,17,16,15,-1],k:[-17,-16,-15,1,17,16,15,-1]},c=[20,0,0,0,0,0,0,24,0,0,0,0,0,0,20,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,24,24,24,24,24,24,56,0,56,24,24,24,24,24,24,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,24,0,0,0,0,0,0,20],v=[17,0,0,0,0,0,0,16,0,0,0,0,0,0,15,0,0,17,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,17,0,0,0,0,16,0,0,0,0,15,0,0,0,0,0,0,17,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,17,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,0,17,0,16,0,15,0,0,0,0,0,0,0,0,0,0,0,0,17,16,15,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,-15,-16,-17,0,0,0,0,0,0,0,0,0,0,0,0,-15,0,-16,0,-17,0,0,0,0,0,0,0,0,0,0,-15,0,0,-16,0,0,-17,0,0,0,0,0,0,0,0,-15,0,0,0,-16,0,0,0,-17,0,0,0,0,0,0,-15,0,0,0,0,-16,0,0,0,0,-17,0,0,0,0,-15,0,0,0,0,0,-16,0,0,0,0,0,-17,0,0,-15,0,0,0,0,0,0,-16,0,0,0,0,0,0,-17],h={p:0,n:1,b:2,r:3,q:4,k:5},o={NORMAL:"n",CAPTURE:"c",BIG_PAWN:"b",EP_CAPTURE:"e",PROMOTION:"p",KSIDE_CASTLE:"k",QSIDE_CASTLE:"q"},I={NORMAL:1,CAPTURE:2,BIG_PAWN:4,EP_CAPTURE:8,PROMOTION:16,KSIDE_CASTLE:32,QSIDE_CASTLE:64},P=7,w=6,L=1,R=0,N={a8:0,b8:1,c8:2,d8:3,e8:4,f8:5,g8:6,h8:7,a7:16,b7:17,c7:18,d7:19,e7:20,f7:21,g7:22,h7:23,a6:32,b6:33,c6:34,d6:35,e6:36,f6:37,g6:38,h6:39,a5:48,b5:49,c5:50,d5:51,e5:52,f5:53,g5:54,h5:55,a4:64,b4:65,c4:66,d4:67,e4:68,f4:69,g4:70,h4:71,a3:80,b3:81,c3:82,d3:83,e3:84,f3:85,g3:86,h3:87,a2:96,b2:97,c2:98,d2:99,e2:100,f2:101,g2:102,h2:103,a1:112,b1:113,c1:114,d1:115,e1:116,f1:117,g1:118,h1:119},E={w:[{square:N.a1,flag:I.QSIDE_CASTLE},{square:N.h1,flag:I.KSIDE_CASTLE}],b:[{square:N.a8,flag:I.QSIDE_CASTLE},{square:N.h8,flag:I.KSIDE_CASTLE}]},O=new Array(128),k={w:l,b:l},q=s,D={w:0,b:0},K=l,d=0,b=1,Q=[],U={};function x(r){void 0===r&&(r=!1),O=new Array(128),k={w:l,b:l},q=s,D={w:0,b:0},K=l,d=0,b=1,Q=[],r||(U={}),F(M())}function j(){B(e)}function B(r,e){void 0===e&&(e=!1);var n=r.split(/\s+/),t=n[0],o=0;if(!$(r).valid)return!1;x(e);for(var i=0;i<t.length;i++){var f=t.charAt(i);if("/"===f)o+=8;else if(-1!=="0123456789".indexOf(f))o+=parseInt(f,10);else{var a=f<"a"?s:u;W({type:f.toLowerCase(),color:a},fr(o)),o++}}return q=n[1],-1<n[2].indexOf("K")&&(D.w|=I.KSIDE_CASTLE),-1<n[2].indexOf("Q")&&(D.w|=I.QSIDE_CASTLE),-1<n[2].indexOf("k")&&(D.b|=I.KSIDE_CASTLE),-1<n[2].indexOf("q")&&(D.b|=I.QSIDE_CASTLE),K="-"===n[3]?l:N[n[3]],d=parseInt(n[4],10),b=parseInt(n[5],10),F(M()),!0}function $(r){var e="No errors.",n="FEN string must contain six space-delimited fields.",t="6th field (move number) must be a positive integer.",o="5th field (half move counter) must be a non-negative integer.",i="4th field (en-passant square) is invalid.",f="3rd field (castling availability) is invalid.",a="2nd field (side to move) is invalid.",l="1st field (piece positions) does not contain 8 '/'-delimited rows.",u="1st field (piece positions) is invalid [consecutive numbers].",s="1st field (piece positions) is invalid [invalid piece].",p="1st field (piece positions) is invalid [row too large].",c="Illegal en-passant square",v=r.split(/\s+/);if(6!==v.length)return{valid:!1,error_number:1,error:n};if(isNaN(v[5])||parseInt(v[5],10)<=0)return{valid:!1,error_number:2,error:t};if(isNaN(v[4])||parseInt(v[4],10)<0)return{valid:!1,error_number:3,error:o};if(!/^(-|[abcdefgh][36])$/.test(v[3]))return{valid:!1,error_number:4,error:i};if(!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(v[2]))return{valid:!1,error_number:5,error:f};if(!/^(w|b)$/.test(v[1]))return{valid:!1,error_number:6,error:a};var g=v[0].split("/");if(8!==g.length)return{valid:!1,error_number:7,error:l};for(var h=0;h<g.length;h++){for(var E=0,d=!1,b=0;b<g[h].length;b++)if(isNaN(g[h][b])){if(!/^[prnbqkPRNBQK]$/.test(g[h][b]))return{valid:!1,error_number:9,error:s};E+=1,d=!1}else{if(d)return{valid:!1,error_number:8,error:u};E+=parseInt(g[h][b],10),d=!0}if(8!==E)return{valid:!1,error_number:10,error:p}}return"3"==v[3][1]&&"w"==v[1]||"6"==v[3][1]&&"b"==v[1]?{valid:!1,error_number:11,error:c}:{valid:!0,error_number:0,error:e}}function M(){for(var r=0,e="",n=N.a8;n<=N.h1;n++){if(null==O[n])r++;else{0<r&&(e+=r,r=0);var t=O[n].color,o=O[n].type;e+=t===s?o.toUpperCase():o.toLowerCase()}n+1&136&&(0<r&&(e+=r),n!==N.h1&&(e+="/"),r=0,n+=8)}var i="";D[s]&I.KSIDE_CASTLE&&(i+="K"),D[s]&I.QSIDE_CASTLE&&(i+="Q"),D[u]&I.KSIDE_CASTLE&&(i+="k"),D[u]&I.QSIDE_CASTLE&&(i+="q"),i=i||"-";var f=K===l?"-":fr(K);return[e,q,i,f,d,b].join(" ")}function G(r){for(var e=0;e<r.length;e+=2)"string"==typeof r[e]&&"string"==typeof r[e+1]&&(U[r[e]]=r[e+1]);return U}function F(r){0<Q.length||(r!==e?(U.SetUp="1",U.FEN=r):(delete U.SetUp,delete U.FEN))}function i(r){var e=O[N[r]];return e?{type:e.type,color:e.color}:null}function W(r,e){if(!("type"in r&&"color"in r))return!1;if(-1===t.indexOf(r.type.toLowerCase()))return!1;if(!(e in N))return!1;var n=N[e];return(r.type!=p||k[r.color]==l||k[r.color]==n)&&(O[n]={type:r.type,color:r.color},r.type===p&&(k[r.color]=n),F(M()),!0)}function H(r,e,n,t,o){var i={color:q,from:e,to:n,flags:t,piece:r[e].type};return o&&(i.flags|=I.PROMOTION,i.promotion=o),r[n]?i.captured=r[n].type:t&I.EP_CAPTURE&&(i.captured=_),i}function Z(r){function e(r,e,n,t,o){if(r[n].type!==_||or(t)!==R&&or(t)!==P)e.push(H(r,n,t,o));else for(var i=[y,m,S,A],f=0,a=i.length;f<a;f++)e.push(H(r,n,t,o,i[f]))}var n=[],t=q,o=ar(t),i={b:L,w:w},f=N.a8,a=N.h1,l=!1,u=!(void 0!==r&&"legal"in r)||r.legal;if(void 0!==r&&"square"in r){if(!(r.square in N))return[];f=a=N[r.square],l=!0}for(var s=f;s<=a;s++)if(136&s)s+=7;else{var p=O[s];if(null!=p&&p.color===t)if(p.type===_){var c=s+C[t][0];if(null==O[c]){e(O,n,s,c,I.NORMAL);c=s+C[t][1];i[t]===or(s)&&null==O[c]&&e(O,n,s,c,I.BIG_PAWN)}for(v=2;v<4;v++){136&(c=s+C[t][v])||(null!=O[c]&&O[c].color===o?e(O,n,s,c,I.CAPTURE):c===K&&e(O,n,s,K,I.EP_CAPTURE))}}else for(var v=0,g=T[p.type].length;v<g;v++){var h=T[p.type][v];for(c=s;!(136&(c+=h));){if(null!=O[c]){if(O[c].color===t)break;e(O,n,s,c,I.CAPTURE);break}if(e(O,n,s,c,I.NORMAL),"n"===p.type||"k"===p.type)break}}}if(!l||a===k[t]){if(D[t]&I.KSIDE_CASTLE){var E=(d=k[t])+2;null!=O[d+1]||null!=O[E]||V(o,k[t])||V(o,d+1)||V(o,E)||e(O,n,k[t],E,I.KSIDE_CASTLE)}if(D[t]&I.QSIDE_CASTLE){var d;E=(d=k[t])-2;null!=O[d-1]||null!=O[d-2]||null!=O[d-3]||V(o,k[t])||V(o,d-1)||V(o,E)||e(O,n,k[t],E,I.QSIDE_CASTLE)}}if(!u)return n;var b=[];for(s=0,g=n.length;s<g;s++)er(n[s]),X(t)||b.push(n[s]),nr();return b}function z(r,e){var n="";if(r.flags&I.KSIDE_CASTLE)n="O-O";else if(r.flags&I.QSIDE_CASTLE)n="O-O-O";else{var t=function(r,e){for(var n=Z({legal:!e}),t=r.from,o=r.to,i=r.piece,f=0,a=0,l=0,u=0,s=n.length;u<s;u++){var p=n[u].from,c=n[u].to,v=n[u].piece;i===v&&t!==p&&o===c&&(f++,or(t)===or(p)&&a++,ir(t)===ir(p)&&l++)}if(0<f)return 0<a&&0<l?fr(t):0<l?fr(t).charAt(1):fr(t).charAt(0);return""}(r,e);r.piece!==_&&(n+=r.piece.toUpperCase()+t),r.flags&(I.CAPTURE|I.EP_CAPTURE)&&(r.piece===_&&(n+=fr(r.from)[0]),n+="x"),n+=fr(r.to),r.flags&I.PROMOTION&&(n+="="+r.promotion.toUpperCase())}return er(r),f()&&(a()?n+="#":n+="+"),nr(),n}function J(r){return r.replace(/=/,"").replace(/[+#]?[?!]*$/,"")}function V(r,e){for(var n=N.a8;n<=N.h1;n++)if(136&n)n+=7;else if(null!=O[n]&&O[n].color===r){var t=O[n],o=n-e,i=119+o;if(c[i]&1<<h[t.type]){if(t.type===_){if(0<o){if(t.color===s)return!0}else if(t.color===u)return!0;continue}if("n"===t.type||"k"===t.type)return!0;for(var f=v[i],a=n+f,l=!1;a!==e;){if(null!=O[a]){l=!0;break}a+=f}if(!l)return!0}}return!1}function X(r){return V(ar(r),k[r])}function f(){return X(q)}function a(){return f()&&0===Z().length}function n(){return!f()&&0===Z().length}function Y(){for(var r={},e=[],n=0,t=0,o=N.a8;o<=N.h1;o++)if(t=(t+1)%2,136&o)o+=7;else{var i=O[o];i&&(r[i.type]=i.type in r?r[i.type]+1:1,i.type===S&&e.push(t),n++)}if(2===n)return!0;if(3===n&&(1===r[S]||1===r[A]))return!0;if(n===r[S]+2){var f=0,a=e.length;for(o=0;o<a;o++)f+=e[o];if(0===f||f===a)return!0}return!1}function rr(){for(var r=[],e={},n=!1;;){var t=nr();if(!t)break;r.push(t)}for(;;){var o=M().split(" ").slice(0,4).join(" ");if(e[o]=o in e?e[o]+1:1,3<=e[o]&&(n=!0),!r.length)break;er(r.pop())}return n}function er(r){var e,n=q,t=ar(n);if(e=r,Q.push({move:e,kings:{b:k.b,w:k.w},turn:q,castling:{b:D.b,w:D.w},ep_square:K,half_moves:d,move_number:b}),O[r.to]=O[r.from],O[r.from]=null,r.flags&I.EP_CAPTURE&&(q===u?O[r.to-16]=null:O[r.to+16]=null),r.flags&I.PROMOTION&&(O[r.to]={type:r.promotion,color:n}),O[r.to].type===p){if(k[O[r.to].color]=r.to,r.flags&I.KSIDE_CASTLE){var o=r.to-1,i=r.to+1;O[o]=O[i],O[i]=null}else if(r.flags&I.QSIDE_CASTLE){o=r.to+1,i=r.to-2;O[o]=O[i],O[i]=null}D[n]=""}if(D[n])for(var f=0,a=E[n].length;f<a;f++)if(r.from===E[n][f].square&&D[n]&E[n][f].flag){D[n]^=E[n][f].flag;break}if(D[t])for(f=0,a=E[t].length;f<a;f++)if(r.to===E[t][f].square&&D[t]&E[t][f].flag){D[t]^=E[t][f].flag;break}K=r.flags&I.BIG_PAWN?"b"===q?r.to-16:r.to+16:l,r.piece===_||r.flags&(I.CAPTURE|I.EP_CAPTURE)?d=0:d++,q===u&&b++,q=ar(q)}function nr(){var r=Q.pop();if(null==r)return null;var e=r.move;k=r.kings,q=r.turn,D=r.castling,K=r.ep_square,d=r.half_moves,b=r.move_number;var n,t,o=q,i=ar(q);if(O[e.from]=O[e.to],O[e.from].type=e.piece,O[e.to]=null,e.flags&I.CAPTURE)O[e.to]={type:e.captured,color:i};else if(e.flags&I.EP_CAPTURE){var f;f=o===u?e.to-16:e.to+16,O[f]={type:_,color:i}}e.flags&(I.KSIDE_CASTLE|I.QSIDE_CASTLE)&&(e.flags&I.KSIDE_CASTLE?(n=e.to+1,t=e.to-1):e.flags&I.QSIDE_CASTLE&&(n=e.to-2,t=e.to+1),O[n]=O[t],O[t]=null);return e}function tr(r,e){var n=J(r);if(e){var t=n.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);if(t)var o=t[1],i=t[2],f=t[3],a=t[4]}for(var l=Z(),u=0,s=l.length;u<s;u++){if(n===J(z(l[u]))||e&&n===J(z(l[u],!0)))return l[u];if(t&&(!o||o.toLowerCase()==l[u].piece)&&N[i]==l[u].from&&N[f]==l[u].to&&(!a||a.toLowerCase()==l[u].promotion))return l[u]}return null}function or(r){return r>>4}function ir(r){return 15&r}function fr(r){var e=ir(r),n=or(r);return"abcdefgh".substring(e,e+1)+"87654321".substring(n,n+1)}function ar(r){return r===s?u:s}function lr(r){var e=function r(e){var n=e instanceof Array?[]:{};for(var t in e)n[t]="object"==typeof t?r(e[t]):e[t];return n}(r);e.san=z(e,!1),e.to=fr(e.to),e.from=fr(e.from);var n="";for(var t in I)I[t]&e.flags&&(n+=o[t]);return e.flags=n,e}function ur(r){return r.replace(/^\s+|\s+$/g,"")}return B(void 0===r?e:r),{WHITE:s,BLACK:u,PAWN:_,KNIGHT:A,BISHOP:S,ROOK:m,QUEEN:y,KING:p,SQUARES:function(){for(var r=[],e=N.a8;e<=N.h1;e++)136&e?e+=7:r.push(fr(e));return r}(),FLAGS:o,load:function(r){return B(r)},reset:function(){return j()},moves:function(r){for(var e=Z(r),n=[],t=0,o=e.length;t<o;t++)void 0!==r&&"verbose"in r&&r.verbose?n.push(lr(e[t])):n.push(z(e[t],!1));return n},in_check:function(){return f()},in_checkmate:function(){return a()},in_stalemate:function(){return n()},in_draw:function(){return 100<=d||n()||Y()||rr()},insufficient_material:function(){return Y()},in_threefold_repetition:function(){return rr()},game_over:function(){return 100<=d||a()||n()||Y()||rr()},validate_fen:function(r){return $(r)},fen:function(){return M()},board:function(){for(var r=[],e=[],n=N.a8;n<=N.h1;n++)null==O[n]?e.push(null):e.push({type:O[n].type,color:O[n].color}),n+1&136&&(r.push(e),e=[],n+=8);return r},pgn:function(r){var e="object"==typeof r&&"string"==typeof r.newline_char?r.newline_char:"\n",n="object"==typeof r&&"number"==typeof r.max_width?r.max_width:0,t=[],o=!1;for(var i in U)t.push("["+i+' "'+U[i]+'"]'+e),o=!0;o&&Q.length&&t.push(e);for(var f=[];0<Q.length;)f.push(nr());for(var a=[],l="";0<f.length;){var u=f.pop();Q.length||"b"!==u.color?"w"===u.color&&(l.length&&a.push(l),l=b+"."):l=b+". ...",l=l+" "+z(u,!1),er(u)}if(l.length&&a.push(l),void 0!==U.Result&&a.push(U.Result),0===n)return t.join("")+a.join(" ");var s=0;for(i=0;i<a.length;i++)s+a[i].length>n&&0!==i?(" "===t[t.length-1]&&t.pop(),t.push(e),s=0):0!==i&&(t.push(" "),s++),t.push(a[i]),s+=a[i].length;return t.join("")},load_pgn:function(r,e){var n=void 0!==e&&"sloppy"in e&&e.sloppy;function l(r){return r.replace(/\\/g,"\\")}var t="object"==typeof e&&"string"==typeof e.newline_char?e.newline_char:"\r?\n",o=new RegExp("^(\\[((?:"+l(t)+")|.)*\\])(?:"+l(t)+"){2}"),i=o.test(r)?o.exec(r)[1]:"";j();var f=function(r,e){for(var n="object"==typeof e&&"string"==typeof e.newline_char?e.newline_char:"\r?\n",t={},o=r.split(new RegExp(l(n))),i="",f="",a=0;a<o.length;a++)i=o[a].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/,"$1"),f=o[a].replace(/^\[[A-Za-z]+\s"(.*)"\]$/,"$1"),0<ur(i).length&&(t[i]=f);return t}(i,e);for(var a in f)G([a,f[a]]);if("1"===f.SetUp&&!("FEN"in f&&B(f.FEN,!0)))return!1;var u=r.replace(i,"").replace(new RegExp(l(t),"g")," ");u=u.replace(/(\{[^}]+\})+?/g,"");for(var s=/(\([^\(\)]+\))+?/g;s.test(u);)u=u.replace(s,"");var p=ur(u=(u=(u=u.replace(/\d+\.(\.\.)?/g,"")).replace(/\.\.\./g,"")).replace(/\$\d+/g,"")).split(new RegExp(/\s+/));p=p.join(",").replace(/,,+/g,",").split(",");for(var c="",v=0;v<p.length-1;v++){if(null==(c=tr(p[v],n)))return!1;er(c)}if(c=p[p.length-1],-1<g.indexOf(c))!function(r){for(var e in r)return 1}(U)||void 0!==U.Result||G(["Result",c]);else{if(null==(c=tr(c,n)))return!1;er(c)}return!0},header:function(){return G(arguments)},ascii:function(){return function(){for(var r="   +------------------------+\n",e=N.a8;e<=N.h1;e++){if(0===ir(e)&&(r+=" "+"87654321"[or(e)]+" |"),null==O[e])r+=" . ";else{var n=O[e].type;r+=" "+(O[e].color===s?n.toUpperCase():n.toLowerCase())+" "}e+1&136&&(r+="|\n",e+=8)}return r+="   +------------------------+\n",r+="     a  b  c  d  e  f  g  h\n"}()},turn:function(){return q},move:function(r,e){var n=void 0!==e&&"sloppy"in e&&e.sloppy,t=null;if("string"==typeof r)t=tr(r,n);else if("object"==typeof r)for(var o=Z(),i=0,f=o.length;i<f;i++)if(!(r.from!==fr(o[i].from)||r.to!==fr(o[i].to)||"promotion"in o[i]&&r.promotion!==o[i].promotion)){t=o[i];break}if(!t)return null;var a=lr(t);return er(t),a},undo:function(){var r=nr();return r?lr(r):null},clear:function(){return x()},put:function(r,e){return W(r,e)},get:function(r){return i(r)},remove:function(r){return n=i(e=r),O[N[e]]=null,n&&n.type===p&&(k[n.color]=l),F(M()),n;var e,n},perft:function(r){return function r(e){for(var n=Z({legal:!1}),t=0,o=q,i=0,f=n.length;i<f;i++)er(n[i]),X(o)||(0<e-1?t+=r(e-1):t++),nr();return t}(r)},square_color:function(r){if(r in N){var e=N[r];return(or(e)+ir(e))%2==0?"light":"dark"}return null},history:function(r){for(var e=[],n=[],t=(void 0!==r&&"verbose"in r&&r.verbose);0<Q.length;)e.push(nr());for(;0<e.length;){var o=e.pop();t?n.push(lr(o)):n.push(z(o)),er(o)}return n}}};"undefined"!=typeof exports&&(exports.Chess=Chess),"undefined"!=typeof define&&define(function(){return Chess});

"use strict";
(function(){
  const game = new Chess();
  const boardEl = document.getElementById("board");
  const statusEl = document.getElementById("status");
  const badgeEl = document.getElementById("turn-badge");
  const historyEl = document.getElementById("history");
  const modeEl = document.getElementById("mode");
  const sideEl = document.getElementById("side");
  const eloEl = document.getElementById("elo");
  let selected = null, targets = [], flipped = false, thinking = false, lastMove = null;
  const glyph = {wk:"♔",wq:"♕",wr:"♖",wb:"♗",wn:"♘",wp:"♙",bk:"♚",bq:"♛",br:"♜",bb:"♝",bn:"♞",bp:"♟"};
  function playerColor(){return sideEl.value==="white"?"w":"b";}
  function computerTurn(){return modeEl.value==="computer" && game.turn()!==playerColor();}
  function clearSelection(){selected=null;targets=[];}
  function renderBoard(){
    boardEl.replaceChildren();
    const position=game.board();
    for(let vr=0;vr<8;vr++){
      for(let vc=0;vc<8;vc++){
        const r=flipped?7-vr:vr, c=flipped?7-vc:vc;
        const name="abcdefgh"[c]+(8-r), piece=position[r][c];
        const sq=document.createElement("button");
        sq.type="button"; sq.className="square "+((r+c)%2===0?"light":"dark");
        sq.setAttribute("aria-label",name); sq.title=name;
        if(selected===name)sq.classList.add("selected");
        if(targets.includes(name))sq.classList.add("legal");
        if(piece)sq.classList.add("has-piece");
        if(lastMove&&(lastMove.from===name||lastMove.to===name))sq.classList.add("last");
        if(vc===0||vr===7){
          const co=document.createElement("span");co.className="coord";
          co.textContent=vc===0?(8-r):"abcdefgh"[c];sq.appendChild(co);
        }
        if(piece){const p=document.createElement("span");p.className="piece "+(piece.color==="w"?"white":"black");p.textContent=glyph[piece.color+piece.type];sq.appendChild(p);}
        sq.addEventListener("click",()=>clickSquare(name));
        boardEl.appendChild(sq);
      }
    }
    updateStatus();
  }
  function updateStatus(){
    let s=game.turn()==="w"?"White to move":"Black to move";
    if(game.in_checkmate())s="Checkmate! "+(game.turn()==="w"?"Black":"White")+" wins.";
    else if(game.in_stalemate())s="Draw by stalemate.";
    else if(game.in_draw())s="Game drawn.";
    else if(game.in_check())s+=" — Check!";
    else if(thinking)s="Computer is thinking…";
    else if(computerTurn())s="Computer to move";
    statusEl.textContent=s;badgeEl.textContent=s;
  }
  function clickSquare(name){
    if(thinking||game.game_over()||computerTurn())return;
    const p=game.get(name);
    if(selected&&targets.includes(name)){playMove(selected,name);return;}
    if(p&&p.color===game.turn()){selected=name;targets=game.moves({square:name,verbose:true}).map(m=>m.to);}
    else clearSelection();
    renderBoard();
  }
  function playMove(from,to){
    const p=game.get(from), opts={from,to};
    if(p&&p.type==="p"&&(to.endsWith("8")||to.endsWith("1")))opts.promotion="q";
    const move=game.move(opts);clearSelection();
    if(!move){renderBoard();return;}
    lastMove={from:move.from,to:move.to};renderHistory();renderBoard();
    if(!game.game_over()&&computerTurn())computerMove();
  }
  function renderHistory(){
    const h=game.history();historyEl.replaceChildren();
    if(!h.length){historyEl.textContent="No moves yet.";return;}
    for(let i=0;i<h.length;i+=2){
      const row=document.createElement("div");row.className="history-row";
      const n=document.createElement("span");n.className="num";n.textContent=(Math.floor(i/2)+1)+".";
      const w=document.createElement("span");w.textContent=h[i];
      const b=document.createElement("span");b.textContent=h[i+1]||"—";
      row.append(n,w,b);historyEl.appendChild(row);
    }
    historyEl.scrollTop=historyEl.scrollHeight;
  }
  const VALUES = { p:100, n:320, b:335, r:500, q:900, k:20000 };
  function evaluatePosition(){
    if(game.in_checkmate()) return -100000;
    if(game.in_draw() || game.in_stalemate()) return 0;
    const board=game.board();
    let score=0;
    for(let r=0;r<8;r++){
      for(let c=0;c<8;c++){
        const p=board[r][c]; if(!p) continue;
        const sign=p.color===game.turn()?1:-1;
        let value=VALUES[p.type]||0;
        // Small centralization and pawn-advance bonuses help the engine choose sensible moves.
        const center=(3.5-Math.abs(3.5-c))+(3.5-Math.abs(3.5-r));
        if(p.type==="n"||p.type==="b") value+=center*5;
        if(p.type==="p") value+=(p.color==="w"?(6-r):(r-1))*5;
        score+=sign*value;
      }
    }
    return score;
  }
  function moveOrderScore(m){
    let s=0;
    if(m.captured) s+=10*(VALUES[m.captured]||100)-(VALUES[m.piece]||100);
    if(m.promotion) s+=VALUES[m.promotion]||800;
    if(m.san && m.san.includes("+")) s+=40;
    if(m.san && m.san.includes("#")) s+=100000;
    return s;
  }
  function searchBestMove(depth,nodeLimit){
    let nodes=0;
    function search(d,alpha,beta){
      nodes++;
      if(nodes>nodeLimit || d===0 || game.game_over()) return evaluatePosition();
      let moves=game.moves({verbose:true});
      if(!moves.length) return evaluatePosition();
      moves.sort((a,b)=>moveOrderScore(b)-moveOrderScore(a));
      let best=-Infinity;
      for(const m of moves){
        if(nodes>nodeLimit) break;
        game.move({from:m.from,to:m.to,promotion:m.promotion||"q"});
        const score=-search(d-1,-beta,-alpha);
        game.undo();
        if(score>best) best=score;
        if(score>alpha) alpha=score;
        if(alpha>=beta) break;
      }
      return best===-Infinity?evaluatePosition():best;
    }
    const moves=game.moves({verbose:true});
    if(!moves.length) return null;
    moves.sort((a,b)=>moveOrderScore(b)-moveOrderScore(a));
    let bestMove=moves[0], bestScore=-Infinity, alpha=-Infinity, beta=Infinity;
    for(const m of moves){
      if(nodes>nodeLimit) break;
      game.move({from:m.from,to:m.to,promotion:m.promotion||"q"});
      const score=-search(depth-1,-beta,-alpha);
      game.undo();
      if(score>bestScore){bestScore=score;bestMove=m;}
      if(score>alpha) alpha=score;
    }
    return bestMove;
  }
  function computerMove(){
    if(!computerTurn()||game.game_over())return;
    thinking=true;updateStatus();
    // Let the browser paint the status before searching.
    setTimeout(()=>{
      if(!computerTurn()||game.game_over()){thinking=false;renderBoard();return;}
      const elo=Number(eloEl.value)||400;
      // Conservative mobile-safe search limits. Elo is a difficulty target, not a certified rating.
      const depth=elo<=600?1:elo<=1000?2:elo<=1600?2:3;
      const nodeLimit=elo<=600?250:elo<=1000?700:elo<=1600?1400:2600;
      const m=searchBestMove(depth,nodeLimit);
      if(m){
        const done=game.move({from:m.from,to:m.to,promotion:m.promotion||"q"});
        if(done)lastMove={from:done.from,to:done.to};
      }
      thinking=false;clearSelection();renderHistory();renderBoard();
    },80);
  }
  function newGame(){
    game.reset();clearSelection();lastMove=null;thinking=false;
    flipped=sideEl.value==="black";renderHistory();renderBoard();
    if(computerTurn())computerMove();
  }
  function undo(){
    if(thinking)return;
    if(modeEl.value==="computer"){game.undo();game.undo();}
    else game.undo();
    clearSelection();
    const h=game.history({verbose:true}),m=h[h.length-1];
    lastMove=m?{from:m.from,to:m.to}:null;
    renderHistory();renderBoard();
  }
  document.getElementById("new").addEventListener("click",newGame);
  document.getElementById("undo").addEventListener("click",undo);
  document.getElementById("flip").addEventListener("click",()=>{flipped=!flipped;renderBoard();});
  modeEl.addEventListener("change",newGame);sideEl.addEventListener("change",newGame);eloEl.addEventListener("change",newGame);
  try {
    if(typeof Chess!=="function") throw new Error("Chess rules library did not load.");
    newGame();
  } catch (err) {
    statusEl.textContent = "Game error: " + (err && err.message ? err.message : String(err));
    console.error(err);
  }
  window.addEventListener("error", function(ev) {
    statusEl.textContent = "JavaScript error: " + (ev.message || "Unknown error");
  });
})();
