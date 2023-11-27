import{d as D,e as p,s as b,j as t,f as I,g as $,h as w,i as S,k as A,B as u,L as v,_ as m,r as f,l as B,m as O}from"./index-AOw6ukEz.js";import{F as P,a as R,b as x}from"./formik.esm-CPB_2CUP.js";const T="_filter_label_1jdvu_1",H="_filter_input_1jdvu_6",g={filter_label:T,filter_input:H},V=()=>{const e=D(),n=p(b);function o(s){e(I(s.target.value))}return t.jsx("label",{className:g.filter_label,children:t.jsx("input",{className:g.filter_input,type:"text",value:n,onChange:o,placeholder:"Find contacts by name"})})},q="_overlay_13kij_1",G="_modal_13kij_14",y={overlay:q,modal:G},J="_form_phonebook_1jtou_1",K="_form_phonebook_light_1jtou_6",Q="_form_add_container_1jtou_12",h={form_phonebook:J,form_phonebook_light:K,form_add_container:Q},W=({onClose:e,contact:n})=>{const o={name:"",phone:""};n?.name?o.name=n?.name:o.name="",n?.phone?o.phone=n?.phone:o.phone="";const s=p($),{data:c}=w(),[i,{isLoading:d}]=S(),[_,{isLoading:M}]=A(),j=a=>{if(a.name.trim()===""||a.phone.trim()==="")return!0},N=async(a,l)=>{if(j(a)){m.error("Fill all fields");return}if(c.some(r=>r?.name.toLowerCase()===a.name.toLowerCase())){m.error(`${a.name} is already in contacts.`);return}try{const r=await i(a);console.log(r)}catch(r){console.log(r)}finally{l.resetForm(),e()}},E=async(a,l)=>{if(n.name===a.name&&n.phone===a.phone){l.resetForm(),e();return}if(j(a)){m.error("Fill all fields");return}try{const r=await _({data:{contactId:n._id,values:a}});console.log(r),r?.data&&(l.resetForm(),e(),console.log(r.data))}catch(r){console.log(r)}};function z(){}return t.jsx(P,{initialValues:o,onSubmit:o.name?E:N,children:t.jsxs(R,{className:s==="light"?h.form_phonebook_light:h.form_phonebook,children:[t.jsxs("div",{className:h.form_add_container,children:[t.jsx("label",{htmlFor:"name",children:"Name"}),t.jsx(x,{type:"text",name:"name",pattern:"['a-zA-Z\\u0400-\\u04ff0-9\\s\\W+\\.]+",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),t.jsx("label",{htmlFor:"phone",children:"Phone"}),t.jsx(x,{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",maxLength:"19",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +. For example +38(050)-32-74-456"})]}),t.jsx(u,{onClick:z,children:"✔"}),(d||M)&&t.jsx(v,{})]})})},Z=document.querySelector("#modal-root"),L=({onClose:e,contact:n})=>{f.useEffect(()=>{function s(c){c.code==="Escape"&&e()}return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e]);const o=s=>{s.target.nodeName==="DIV"&&e()};return B.createPortal(t.jsx("div",{className:y.overlay,onMouseDown:o,children:t.jsx("div",{className:y.modal,children:t.jsx(W,{onClose:e,contact:n})})}),Z)},U=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",children:t.jsx("path",{d:"M6 32h20l2-22h-24zM20 4v-4h-8v4h-10v6l2-2h24l2 2v-6h-10zM18 4h-4v-2h4v2z"})}),X="_contact_info_container_icji1_1",Y="_contact_phone_icji1_11",C={contact_info_container:X,contact_phone:Y},tt=({contact:e})=>{const[n,{error:o,isLoading:s}]=O();console.log(o,"del");const[c,i]=f.useState(!1),d=()=>{i(_=>!_)};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:C.contact_info_container,onClick:()=>i(!0),title:"Edit Contact",children:[t.jsxs("span",{children:[e.name,":"]}),t.jsx("span",{className:C.contact_phone,children:e.phone})]}),t.jsx(u,{onClick:()=>n(e._id),children:t.jsx(U,{})}),c&&t.jsx(L,{onClose:d,contact:e}),s&&t.jsx(v,{})]})},et="_list_contacts_u28y6_1",nt="_item_u28y6_10",F={list_contacts:et,item:nt},ot=e=>{const n=p(b),o=[...e].sort((c,i)=>c.name.localeCompare(i.name));if(!n)return o;const s=n.toLowerCase();return o.filter(c=>c.name.toLowerCase().includes(s))},st=({contacts:e})=>t.jsx("ul",{className:F.list_contacts,children:ot(e).map(n=>t.jsx("li",{className:F.item,children:e&&t.jsx(tt,{contact:n})},n._id))}),at="_hidden_76hmy_1",ct="_contact_page_container_76hmy_14",rt="_contacts_container_76hmy_34",k={hidden:at,contact_page_container:ct,contacts_container:rt},dt=()=>{const{data:e,error:n}=w();console.log(e,n,"contacts");const[o,s]=f.useState(!1),c=()=>{s(i=>!i)};return t.jsx(t.Fragment,{children:e&&t.jsxs("div",{className:k.contacts_container,children:[t.jsxs("div",{className:k.contact_page_container,children:[e?.length>0&&t.jsx(V,{}),t.jsx(u,{onClick:()=>s(!0),children:"+"})]}),t.jsx(st,{contacts:e}),o&&t.jsx(L,{onClose:c})]})})};export{dt as default};
