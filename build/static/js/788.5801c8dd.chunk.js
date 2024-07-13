"use strict";(self.webpackChunkhooks=self.webpackChunkhooks||[]).push([[788],{85:(e,t,s)=>{s.d(t,{A:()=>r});const n={gradientColor:"SolidTitle_gradientColor__8cbxl",title3:"SolidTitle_title3__uykDV SolidTitle_gradientColor__8cbxl",distort:"SolidTitle_distort__M3D82"};var i=s(270),l=s(43),o=s(579);function r(e){let{titleText:t}=e;const s=(0,l.useRef)(),r=(0,l.useCallback)((()=>{i.os.to("feDisplacementMap",1,{attr:{scale:0},ease:"circ.out"},1),i.os.to("feTurbulence",1,{attr:{baseFrequency:"2.01 .01"},ease:"circ.out"},1),i.os.to(s.current,1,{fontVariationSettings:"'wght' 700",ease:"back.out"},1)}),[]),a=(0,l.useCallback)((()=>{i.os.to("feDisplacementMap",1,{attr:{scale:100},ease:"circ.out"}),i.os.to("feTurbulence",1,{attr:{baseFrequency:"2.08 .08"},ease:"circ.out"},1),i.os.to(s.current,1,{fontVariationSettings:"'wght' 650",ease:"back.out"})}),[]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("h2",{className:n.title3,onMouseEnter:a,onMouseLeave:r,ref:s,children:[t," "]}),(0,o.jsx)("svg",{className:n.distort,children:(0,o.jsxs)("filter",{id:"distortionFilter",children:[(0,o.jsx)("feTurbulence",{type:"fractalNoise",baseFrequency:"2.01 .01",numOctaves:"5",seed:"2",stitchTiles:"noStitch",x:"0%",y:"0%",width:"100%",height:"100%",result:"noise"}),(0,o.jsx)("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:"0",xChannelSelector:"R",yChannelSelector:"B",x:"0%",y:"0%",width:"100%",height:"100%",filterUnits:"userSpaceOnUse"})]})})]})}},629:(e,t,s)=>{s.d(t,{v:()=>i});var n=s(43);const i=(e,t)=>{const[s,i]=(0,n.useState)((()=>{var s;return null!==(s=JSON.parse(localStorage.getItem(e)))&&void 0!==s?s:t}));return(0,n.useEffect)((()=>{localStorage.setItem(e,JSON.stringify(s))}),[e,s]),[s,i]}},788:(e,t,s)=>{s.r(t),s.d(t,{default:()=>C});var n=s(43),i=s(3),l=s(73);var o=s(579);class r extends n.Component{constructor(){super(...arguments),this.prodIdTitle=(0,l.A)(),this.prodIdDesc=(0,l.A)(),this.prodIdAgreed=(0,l.A)(),this.prodIdSize=(0,l.A)(),this.state={title:"",desc:"",agreed:!1,size:"",product:null},this.handleCheck=e=>{this.setState({agreed:!this.state.agreed})},this.handleChange=e=>{console.log(e.target.name,e.target.value),this.setState({[e.target.name]:e.target.value})},this.handleChangeAllInputs=()=>{const{name:e,type:t,checked:s,value:n}=this.state;this.setState({[e]:"checkbox"===t?s:n})},this.handleSubmit=e=>{e.preventDefault();const t={id:(0,l.A)(),title:this.state.title,desc:this.state.desc,size:this.state.size};this.setState({product:t}),this.props.addNewProduct(t),this.props.onAdd(t),this.resetForm()},this.resetForm=()=>{this.setState({title:"",desc:"",size:"",agreed:!1})}}render(){console.log("\u043c\u0435\u0442\u043e\u0434 add:",this.props.onAdd);const{title:e,desc:t,size:s,agreed:n}=this.state,{handleSubmit:i,handleChange:l,handleCheck:r}=this;return(0,o.jsxs)("form",{onSubmit:i,children:[(0,o.jsx)("label",{htmlFor:this.prodIdTitle,children:"Title"}),(0,o.jsx)("input",{type:"text",id:this.prodIdTitle,name:"title",value:e,onChange:l}),(0,o.jsx)("br",{}),(0,o.jsx)("label",{htmlFor:this.prodIdDesc,children:"Description"}),(0,o.jsx)("input",{type:"text",id:this.prodIdDesc,name:"desc",value:t,onChange:l}),(0,o.jsx)("br",{}),(0,o.jsx)("label",{htmlFor:this.prodIdSize,children:"Choose your size"}),(0,o.jsxs)("select",{name:"size",id:this.prodIdSize,value:s,onChange:l,children:[(0,o.jsx)("option",{value:"",disabled:!0,children:"..."}),(0,o.jsx)("option",{value:"s",children:"s"}),(0,o.jsx)("option",{value:"m",children:"m"}),(0,o.jsx)("option",{value:"l",children:"l"})]}),(0,o.jsx)("br",{}),(0,o.jsx)("label",{htmlFor:this.prodIdAgreed,children:"Agree?"}),(0,o.jsx)("input",{type:"checkbox",name:"agreed",id:this.prodIdAgreed,checked:n,onChange:r}),(0,o.jsx)("br",{}),(0,o.jsx)("button",{type:"submit",disabled:!n,children:"add"})]})}}const a=(0,i.Ng)(null,(e=>({onAdd:t=>e({type:"product/add",payload:t})})))(r),d="Modal_backDrop__h5OD8",c="Modal_content__xKQj4";var h=s(950);class u extends n.Component{constructor(){super(...arguments),this.handleEscape=e=>{"Escape"===e.code&&this.props.toggleModal()},this.handleClose=e=>{e.currentTarget===e.target&&this.props.toggleModal()}}componentDidMount(){window.addEventListener("keydown",this.handleEscape)}componentDidUpdate(){}componentWillUnmount(){window.removeEventListener("keydown",this.handleEscape)}render(){const{children:e}=this.props;return(0,h.createPortal)((0,o.jsx)("div",{className:d,onClick:this.handleClose,children:(0,o.jsx)("div",{className:c,children:e})}),document.getElementById("modalRoot"))}}const p={productItem:"ProductsList_productItem__rGmv9",productTitle:"ProductsList_productTitle__I4Put",productDesc:"ProductsList_productDesc__iqqeN"};var x=s(294);function g(e){let{unitRef:t,isOpen:s,toggleState:n,keydownHandler:i,handleClick:l,handleDelete:r,textObj:{title:a,content:d,backBtn:c,deleteBtn:h}}=e;return(0,o.jsx)(x.lf,{flipId:"wrapper",children:(0,o.jsxs)("div",{ref:t,tabIndex:s?void 0:0,role:"dialog",className:"dialog animated-in",onClick:n,onKeyDown:i,children:[(0,o.jsx)("p",{className:"title content",children:a}),(0,o.jsx)("p",{className:"content",children:d}),(0,o.jsx)("button",{className:"button secondary content",onClick:l,children:c}),(0,o.jsx)("button",{className:"button primary content",onClick:r,children:h})]})})}g.defaultProps={textObj:{title:"Delete this item?",content:"This operation will permenantly delete this item and all its dependencies. This actioncannot be undone",backBtn:"Oh no, bring me back",deleteBtn:"I understand, delete it"}};class m extends n.Component{constructor(){super(...arguments),this.state={isOpen:this.props.isOpen},this.ref=(0,n.createRef)(),this.toggleState=()=>{this.state.isOpen||(this.setState((e=>({isOpen:!e.isOpen}))),this.ref.current.focus())},this.keydownHandler=e=>{"Enter"!==e.key&&"Escape"!==e.key||this.toggleState()},this.handleClick=()=>this.setState({isOpen:!1}),this.handleDelete=()=>{this.props.onDelete(this.props.id),this.setState({isOpen:!1})}}render(){const{isOpen:e}=this.state,{ref:t,keydownHandler:s,toggleState:n,handleClick:i,handleDelete:l}=this;return(0,o.jsx)(x.ZI,{flipKey:e,spring:"stiff",stagger:!0,children:e?(0,o.jsx)(g,{unitRef:t,isOpen:e,toggleState:n,keydownHandler:s,handleClick:i,handleDelete:l}):(0,o.jsx)(x.lf,{flipId:"wrapper",children:(0,o.jsx)("div",{ref:t,tabIndex:0,role:"button",className:"button primary",onClick:n,onKeyDown:s,children:(0,o.jsx)(x.lf,{flipId:"action",children:(0,o.jsx)("span",{className:"action",children:"Delete"})})})})})}}var j=s(85);function b(e){let{products:t,onDeleteProduct:s}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j.A,{titleText:"Product List"}),(0,o.jsx)("ul",{children:t.map((e=>(0,o.jsxs)("li",{className:p.productItem,children:[(0,o.jsx)("h3",{className:p.productTitle,children:e.title}),(0,o.jsx)("p",{className:p.productDesc,children:e.desc}),(0,o.jsx)(m,{onDelete:s,id:e.id})]},e.id)))})]})}const f=e=>{const[t,s]=(0,n.useState)(e);return console.log("useTollle:",t),[t,()=>{s((e=>!e))}]};var k=s(629);function C(){const[e,t]=(0,k.v)("products",[]),[s,i]=f(!1),[l,r]=(0,n.useState)(""),d=(0,n.useMemo)((()=>{let t=l.toLowerCase();return e.filter((e=>e.title.toLowerCase().includes(t)))}),[l,e]);console.log(d);const c=(0,n.useCallback)((e=>{r(e.target.value)}),[]);return(0,o.jsxs)(o.Fragment,{children:[s&&(0,o.jsx)(u,{toggleModal:i,children:(0,o.jsx)(a,{addNewProduct:e=>t((t=>[...t,e]))})}),(0,o.jsx)("h1",{children:"Products"}),(0,o.jsx)("button",{type:"button",onClick:i,children:"Add Product"}),(0,o.jsx)("br",{}),(0,o.jsx)("label",{htmlFor:"filter",children:"Filter"}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{type:"text",id:"filter",value:l,onChange:c}),(0,o.jsx)("br",{}),(0,o.jsx)(b,{products:d,onDeleteProduct:e=>t((t=>t.filter((t=>t.id!==e))))})]})}}}]);
//# sourceMappingURL=788.5801c8dd.chunk.js.map