(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[967],{9228:function(e,t,i){Promise.resolve().then(i.t.bind(i,423,23)),Promise.resolve().then(i.t.bind(i,9050,23)),Promise.resolve().then(i.t.bind(i,8326,23)),Promise.resolve().then(i.bind(i,1835))},1835:function(e,t,i){"use strict";i.r(t);var o=i(7437),r=i(2265),n=i(5577),s=i(8874),l=i(3226),d=i(4982),a=i(2653),c=i(3533);t.default=e=>{let{title:t,description:i,imageUrl:x,leftContent:h,rightContent:p,mediaItems:g,reverse:m=!1}=e,[u,b]=(0,r.useState)(null),[j,v]=(0,r.useState)(!1),toggleModal=e=>{b(e),v(e=>!e)},f=m?p:h,y=m?h:p;return(0,o.jsxs)(n.Z,{component:"section",sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:x?"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(x,")"):"transparent",backgroundSize:"cover",backgroundPosition:"center",color:"white",margin:0,padding:"2rem",position:"relative"},children:[(0,o.jsxs)(s.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",sx:{padding:{xs:"20px 10px",md:"50px"}},children:[(0,o.jsx)(s.ZP,{item:!0,xs:12,md:5,sx:{order:m?2:1},children:(0,o.jsxs)(n.Z,{sx:{textAlign:"center",width:"100%"},children:[(0,o.jsx)(l.Z,{variant:"h3",gutterBottom:!0,sx:{marginBottom:"20px",lineHeight:1.2},children:t}),(0,o.jsx)("hr",{style:{width:"30px",border:"1px solid white",margin:"10px auto"}}),(0,o.jsx)(l.Z,{variant:"body1",sx:{marginBottom:"20px",lineHeight:1.5},children:i}),f&&(0,o.jsxs)(n.Z,{textAlign:"left",children:[(0,o.jsx)(l.Z,{variant:"h4",gutterBottom:!0,sx:{marginBottom:"10px"},children:f.title}),(0,o.jsx)(l.Z,{variant:"body1",children:f.description})]})]})}),(0,o.jsx)(s.ZP,{item:!0,xs:12,md:7,sx:{order:m?1:2},children:(0,o.jsxs)(n.Z,{sx:{textAlign:"center"},children:[g&&g.length>0&&(0,o.jsx)(n.Z,{children:(0,o.jsx)(s.ZP,{container:!0,spacing:2,children:g.map((e,t)=>(0,o.jsx)(s.ZP,{item:!0,xs:6,sm:6,md:3,children:(0,o.jsxs)("div",{style:{width:"100%",height:0,paddingBottom:"100%",borderRadius:"10px",overflow:"hidden",cursor:"pointer",position:"relative",transition:"transform 0.2s ease"},onClick:()=>toggleModal(e),onMouseEnter:e=>e.currentTarget.style.transform="scale(1.1)",onMouseLeave:e=>e.currentTarget.style.transform="scale(1)",children:["image"===e.type&&(0,o.jsx)("img",{src:e.url,alt:"Photo ".concat(t+1),style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",top:0,left:0}}),"video"===e.type&&(0,o.jsx)("video",{src:e.url,type:"video/mp4",controls:!0,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",top:0,left:0,borderRadius:"10px"},onClick:t=>{t.stopPropagation(),toggleModal(e)}}),(0,o.jsx)(n.Z,{sx:{position:"absolute",bottom:0,left:0,width:"100%",backgroundColor:"rgba(0, 0, 0, 0.7)",padding:"5px",textAlign:"center",color:"white"},children:(0,o.jsx)(l.Z,{variant:"body2",children:e.description})})]})},t))})}),y&&(0,o.jsx)(n.Z,{mt:{xs:2,md:0},children:y})]})})]}),(0,o.jsx)(d.Z,{open:j,onClose:toggleModal,"aria-labelledby":"media-modal-title","aria-describedby":"media-modal-description",sx:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},children:(0,o.jsx)(n.Z,{sx:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:"20px"},children:u&&(0,o.jsxs)(o.Fragment,{children:["image"===u.type&&(0,o.jsx)("img",{src:u.url,alt:u.description,style:{width:"100%",height:"auto",maxHeight:"90vh",maxWidth:"90vw",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}),"video"===u.type&&(0,o.jsx)("video",{src:u.url,type:"video/mp4",controls:!0,autoPlay:!0,loop:!0,muted:!0,style:{width:"100%",height:"auto",maxHeight:"90vh",maxWidth:"90vw",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}),(0,o.jsx)(l.Z,{variant:"body2",sx:{color:"white",margin:"10px 0",textAlign:"center"},children:u.description}),(0,o.jsx)(n.Z,{sx:{position:"absolute",top:"10px",right:"10px",backgroundColor:"rgba(0, 0, 0, 0.5)",borderRadius:"50%",padding:"5px"},children:(0,o.jsx)(a.Z,{onClick:toggleModal,sx:{color:"white"},children:(0,o.jsx)(c.Z,{})})})]})})})]})}}},function(e){e.O(0,[842,108,172,485,423,971,472,744],function(){return e(e.s=9228)}),_N_E=e.O()}]);