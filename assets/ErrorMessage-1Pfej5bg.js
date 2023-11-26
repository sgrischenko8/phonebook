import{o as b,r as h,j as t,B as u,_ as n}from"./index-n_4HEuY1.js";import{F as f,a as g,b as i}from"./formik.esm-mhgVTtLS.js";const x="_credential_form_7pzhm_1",y="_form_btn_container_7pzhm_9",j="_visibility_btn_7pzhm_29",o={credential_form:x,form_btn_container:y,visibility_btn:j},z=({loginHandler:e,registerHandler:s,email:r})=>{const l={name:"",email:r||"",password:""},a=b(),[m,c]=h.useState(!1);function d(){c(_=>!_)}function p(){}return t.jsx(f,{initialValues:l,onSubmit:a.pathname==="/register"?s:e,children:t.jsxs(g,{className:o.credential_form,children:[a.pathname==="/register"&&t.jsxs(t.Fragment,{children:[t.jsx("label",{htmlFor:"name",children:"Name:"}),t.jsx(i,{type:"text",name:"name",pattern:"['a-zA-Z\\u0400-\\u04ff0-9\\s\\W+\\.]+",minLength:"2",title:"Name may contain only letters, apostrophe, dash, dots and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]}),t.jsx("label",{htmlFor:"email",children:"Email:"}),t.jsx(i,{type:"email",name:"email",pattern:"^([^ ]+@[^ ]+\\.[a-z]{2,6}|)$",title:"E-mail may contain only letters, digits, At sign and dot. For example JacobMercer2@gmail.com"}),t.jsx("label",{htmlFor:"password",children:"Password:"}),t.jsx(i,{type:m?"text":"password",name:"password",pattern:"['a-zA-Z\\d\\s\\W+\\.]+.",minLength:"6",title:"Password number may contain letters, digits, spaces and symbols"}),t.jsx("div",{className:o.form_btn_container,children:t.jsx(u,{onClick:p,children:a.pathname==="/register"?"Sign Up":"Log In"})}),t.jsx("button",{className:o.visibility_btn,type:"button",onClick:()=>d(),children:"show"})]})})},C=({error:e,path:s})=>{if(e.status===400&&!e.data.message&&s==="/login"){console.log(e),n.error("E-mail and password not fit");return}if(e.data.code===11e3){console.log(e,"error 11000"),n.error("Your access denied");return}if(e.status===400&&e.data.code!==11e3){n.error("Fill all fields");return}};export{z as C,C as E};
