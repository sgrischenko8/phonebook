import{u as v,a as x,b as p,c as _,r as j,j as s,L as E,_ as k}from"./index-AOw6ukEz.js";import{C as L,E as C}from"./ErrorMessage-zL-vv7wA.js";import"./formik.esm-CPB_2CUP.js";const R="_main_container_ycomf_1",S={main_container:R},b=()=>{let t=v();const[n]=x(),a=n.get("verificationToken"),[c,{isLoading:l,error:o,isSuccess:g}]=p(),[f,{isLoading:m,error:u,isSuccess:y}]=_(),h=async()=>{try{await f(a).then(e=>{if(console.log(e,"promise verify"),!e.error){i();const{email:r}=e.data;t("/login",{state:{email:r}})}})}catch(e){console.log(e)}};j.useEffect(()=>{a&&h()},[]);const i=()=>{k.success(y?"You successfully register!":"Check your email for verification link")},d=async e=>{try{await c(e).then(r=>{console.log(r,"promise register"),g&&i()})}catch(r){console.log(r)}};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:S.main_container,children:[s.jsx("h1",{children:"Phonebook"}),s.jsx(L,{registerHandler:d})]}),o&&s.jsx(C,{error:o||u,path:"/register"}),l||m?s.jsx(E,{}):null]})};export{b as default};