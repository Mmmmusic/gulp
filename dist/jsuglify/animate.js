!function(m,p){var i,h,y,x,b,g,E,w,v,T,e="",a=document.createElement("div"),L=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,P={};function t(t){return i?i+t:t.toLowerCase()}m.each({Webkit:"webkit",Moz:"",O:"o"},function(t,n){if(a.style[t+"TransitionProperty"]!==p)return e="-"+t.toLowerCase()+"-",i=n,!1}),h=e+"transform",P[y=e+"transition-property"]=P[x=e+"transition-duration"]=P[g=e+"transition-delay"]=P[b=e+"transition-timing-function"]=P[E=e+"animation-name"]=P[w=e+"animation-duration"]=P[T=e+"animation-delay"]=P[v=e+"animation-timing-function"]="",m.fx={off:i===p&&a.style.transitionProperty===p,speeds:{_default:400,fast:200,slow:600},cssPrefix:e,transitionEnd:t("TransitionEnd"),animationEnd:t("AnimationEnd")},m.fn.animate=function(t,n,i,e,a){return m.isFunction(n)&&(e=n,n=i=p),m.isFunction(i)&&(e=i,i=p),m.isPlainObject(n)&&(i=n.easing,e=n.complete,a=n.delay,n=n.duration),n&&(n=("number"==typeof n?n:m.fx.speeds[n]||m.fx.speeds._default)/1e3),a&&(a=parseFloat(a)/1e3),this.anim(t,n,i,e,a)},m.fn.anim=function(t,n,i,e,a){var s,o,r,f={},u="",c=this,l=m.fx.transitionEnd,d=!1;if(n===p&&(n=m.fx.speeds._default/1e3),a===p&&(a=0),m.fx.off&&(n=0),"string"==typeof t)f[E]=t,f[w]=n+"s",f[T]=a+"s",f[v]=i||"linear",l=m.fx.animationEnd;else{for(s in o=[],t)L.test(s)?u+=s+"("+t[s]+") ":(f[s]=t[s],o.push(s.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()));u&&(f[h]=u,o.push(h)),0<n&&"object"==typeof t&&(f[y]=o.join(", "),f[x]=n+"s",f[g]=a+"s",f[b]=i||"linear")}return r=function(t){if(void 0!==t){if(t.target!==t.currentTarget)return;m(t.target).unbind(l,r)}else m(this).unbind(l,r);d=!0,m(this).css(P),e&&e.call(this)},0<n&&(this.bind(l,r),setTimeout(function(){d||r.call(c)},1e3*(n+a)+25)),this.size()&&this.get(0).clientLeft,this.css(f),n<=0&&setTimeout(function(){c.each(function(){r.call(this)})},0),this},a=null}(Zepto);