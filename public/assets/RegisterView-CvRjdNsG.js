import{d as w,j as g,V as x,e as r,H as y,c as v,a as o,a0 as a,ae as n,ag as k,h as N,k as R,F as V,l as I,o as F,m as U}from"./index-BVzR4Yxs.js";const A={class:"mb-4"},B={class:"mb-4"},C={class:"mb-4"},L={class:"mt-6 text-blue-500 text-center"},H=w({__name:"RegisterView",setup(S){const p=g(),b=x(),u=r(null),d=r(null),m=r(null),s=y({fullName:"",email:"",password:""}),c=async()=>{var l,t,f;if(s.fullName.length<2)return(l=u.value)==null?void 0:l.focus();if(s.email==="")return(t=d.value)==null?void 0:t.focus();if(s.password.length<6)return(f=m.value)==null?void 0:f.focus();const{ok:i,message:e}=await p.register(s.fullName,s.email,s.password);i||b.error(e)};return(i,e)=>{const l=I("RouterLink");return F(),v(V,null,[e[9]||(e[9]=o("h1",{class:"text-2xl font-semibold mb-4"},"New Account",-1)),o("form",{onSubmit:k(c,["prevent"])},[o("div",A,[e[3]||(e[3]=o("label",{for:"name",class:"block text-gray-600"},"Name",-1)),a(o("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>s.fullName=t),ref_key:"fullNameInputRef",ref:u,type:"text",id:"name",name:"name",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[n,s.fullName]])]),o("div",B,[e[4]||(e[4]=o("label",{for:"email",class:"block text-gray-600"},"Username",-1)),a(o("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>s.email=t),ref_key:"emailInputRef",ref:d,type:"email",id:"email",name:"email",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[n,s.email]])]),o("div",C,[e[5]||(e[5]=o("label",{for:"password",class:"block text-gray-600"},"Password",-1)),a(o("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>s.password=t),ref_key:"passwordInputRef",ref:m,type:"password",id:"password",name:"password",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[n,s.password]])]),e[6]||(e[6]=o("div",{class:"mb-6 text-blue-500"},[o("a",{href:"#",class:"hover:underline"},"Forgot Password?")],-1)),e[7]||(e[7]=o("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"}," Accept ",-1))],32),o("div",L,[N(l,{to:{name:"login"},class:"hover:underline"},{default:R(()=>e[8]||(e[8]=[U("Login Here")])),_:1})])],64)}}});export{H as default};