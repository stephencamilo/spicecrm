/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.3.0
build: 3167
*/
YUI.add("event-key",function(a){a.Env.evt.plugins.key={on:function(e,g,b,k,c){var i=a.Array(arguments,0,true),f,j,h,d;f=k&&k.split(":");if(!k||k.indexOf(":")==-1||!f[1]){i[0]="key"+((f&&f[0])||"press");return a.on.apply(a,i);}j=f[0];h=(f[1])?f[1].split(/,|\+/):null;d=(a.Lang.isString(b)?b:a.stamp(b))+k;d=d.replace(/,/g,"_");if(!a.getEvent(d)){a.on(e+j,function(p){var q=false,m=false,n,l,o;for(n=0;n<h.length;n=n+1){l=h[n];o=parseInt(l,10);if(a.Lang.isNumber(o)){if(p.charCode===o){q=true;}else{m=true;}}else{if(q||!m){q=(p[l+"Key"]);m=!q;}}}if(q){a.fire(d,p);}},b);}i.splice(2,2);i[0]=d;return a.on.apply(a,i);}};},"3.3.0",{requires:["node-base"]});