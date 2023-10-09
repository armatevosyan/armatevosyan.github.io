(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[10],{100:function(e,n,t){},135:function(e,n,t){var o={"./About":[91,0,5],"./About.jsx":[91,0,5],"./Education":[92,9,3],"./Education.jsx":[92,9,3],"./Experience":[93,0,1,4],"./Experience.jsx":[93,0,1,4],"./FallbackSpinner":[31],"./FallbackSpinner.jsx":[31],"./Header":[87,8],"./Header.jsx":[87,8],"./Home":[49],"./Home.jsx":[49],"./NavBar":[44],"./NavBar.jsx":[44],"./Projects":[94,0,2],"./Projects.jsx":[94,0,2],"./Skills":[95,0,7],"./Skills.jsx":[95,0,7],"./Social":[50],"./Social.jsx":[50],"./ThemeToggler":[46],"./ThemeToggler.jsx":[46],"./projects/ProjectCard":[90,0,6],"./projects/ProjectCard.jsx":[90,0,6]};function r(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],r=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(r)}))}r.keys=function(){return Object.keys(o)},r.id=135,e.exports=r},136:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),i=t(17),a=t.n(i),c=(t(100),t(89),t(101),t(34)),l=t(20),s=t(76),d=t(52),u=t(10),h=t(31),f=t(44),j=t(49),b=t(1),m={sections:[{component:"About",path:"/about",headerTitle:"About"},{component:"Skills",path:"/skills",headerTitle:"Skills"},{component:"Education",path:"/education",headerTitle:"Education"},{component:"Experience",path:"/experience",headerTitle:"Experience"},{component:"Projects",path:"/projects",headerTitle:"Projects"}]};var v,p=function(){return Object(b.jsxs)("div",{className:"MainApp",children:[Object(b.jsx)(f.default,{}),Object(b.jsx)("main",{className:"main",children:Object(b.jsx)(u.c,{children:Object(b.jsxs)(o.Suspense,{fallback:Object(b.jsx)(h.default,{}),children:[Object(b.jsx)(u.a,{exact:!0,path:"https://armatevosyan.github.io/portfolio.github.io/",component:j.default}),m&&m.sections.map((function(e){var n=r.a.lazy((function(){return t(135)("./"+e.component)}));return Object(b.jsx)(u.a,{path:e.path,component:function(){return Object(b.jsx)(n,{header:e.headerTitle})}},e.headerTitle)}))]})})})]})},g=t(36),x=Object(l.c)(v||(v=Object(g.a)(["\n   body {\n     background: ",";\n     color: ",";\n     transition: all 0.50s linear; \n  }\n"])),(function(e){return e.theme.background}),(function(e){return e.theme.color})),k={background:"#fff",color:"#121212",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"white",cardForeColor:"black",titleColor:"white"},timelineLineColor:"#ccc",cardBackground:"#fff",cardFooterBackground:"#f7f7f7",cardBorderColor:"#00000020",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"light",bsSecondaryVariant:"dark",socialIconBgColor:"#121212"},C={background:"#121212",color:"#eee",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"#1B1B1B",cardForeColor:"#eee",titleColor:"black"},timelineLineColor:"#444",cardBackground:"#060606",cardFooterBackground:"#181818",cardBorderColor:"#ffffff20",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"dark",bsSecondaryVariant:"light",socialIconBgColor:"#fefefe"};var O=function(){window.matchMedia=null;var e=Object(s.a)(!0);return Object(b.jsx)(d.a.Provider,{value:{darkMode:e},children:Object(b.jsxs)(l.b,{theme:e.value?C:k,children:[Object(b.jsx)(x,{}),Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(c.a,{children:Object(b.jsx)(p,{})})})]})})},y=function(e){e&&e instanceof Function&&t.e(13).then(t.bind(null,177)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),o(e),r(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),y()},31:function(e,n,t){"use strict";t.r(n);t(0);var o=t(137),r=t(1),i={spinnerContainerStyle:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}};n.default=function(){return Object(r.jsx)("div",{style:i.spinnerContainerStyle,children:Object(r.jsx)(o.a,{animation:"grow"})})}},44:function(e,n,t){"use strict";t.r(n);var o,r,i=t(4),a=t(36),c=t(55),l=t(138),s=t(86),d=t(0),u=t(10),h=t(34),f=t(20),j=t(46),b=t(1),m={logo:{source:"images/logo.png",height:45,width:50},sections:[{title:"Home",href:"/"},{title:"About",href:"/about"},{title:"Skills",href:"/skills"},{title:"Education",href:"/education"},{title:"Experience",href:"/experience"},{title:"Projects",href:"/projects"},{title:"Resume",href:"https://drive.google.com/file/d/1d39rz2TzT-kiBAqfsGQwduM_p4Ei_yQv/view?usp=drive_link",type:"link"}]},v={logoStyle:{width:50,height:40}},p=f.d.a(o||(o=Object(a.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor})),g=Object(f.d)(h.b)(r||(r=Object(a.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n  &.navbar__link--active {\n    color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor}),(function(e){return e.theme.navbarTheme.linkActiveColor})),x=Object(u.f)((function(){var e,n,t,o,r,a,u=Object(d.useContext)(f.a),h=Object(d.useState)(!1),x=Object(i.a)(h,2),k=x[0],C=x[1];return Object(b.jsx)(c.a,{fixed:"top",expand:"md",bg:"dark",variant:"dark",className:"navbar-custom",expanded:k,children:Object(b.jsxs)(l.a,{children:[(null===m||void 0===m?void 0:m.logo)&&Object(b.jsx)(c.a.Brand,{href:"/",children:Object(b.jsx)("img",{src:null===m||void 0===m||null===(e=m.logo)||void 0===e?void 0:e.source,className:"d-inline-block align-top",alt:"main logo",style:null!==m&&void 0!==m&&null!==(n=m.logo)&&void 0!==n&&n.height&&null!==m&&void 0!==m&&null!==(t=m.logo)&&void 0!==t&&t.width?{height:null===m||void 0===m||null===(o=m.logo)||void 0===o?void 0:o.height,width:null===m||void 0===m||null===(r=m.logo)||void 0===r?void 0:r.width}:v.logoStyle})}),Object(b.jsx)(c.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return C(!k)}}),Object(b.jsxs)(c.a.Collapse,{id:"responsive-navbar-nav",children:[Object(b.jsx)(s.a,{className:"me-auto"}),Object(b.jsx)(s.a,{children:m&&(null===(a=m.sections)||void 0===a?void 0:a.map((function(e,n){return"link"===(null===e||void 0===e?void 0:e.type)?Object(b.jsx)(p,{href:e.href,target:"_blank",rel:"noopener noreferrer",onClick:function(){return C(!1)},className:"navbar__link",theme:u,children:e.title},e.title):Object(b.jsx)(g,{onClick:function(){return C(!1)},exact:0===n,activeClassName:"navbar__link--active",className:"navbar__link",to:e.href,theme:u,children:e.title},e.title)})))}),Object(b.jsx)(j.default,{onClick:function(){return C(!1)}})]})]})})}));n.default=x},46:function(e,n,t){"use strict";t.r(n);t(0);var o=t(78),r=t.n(o),i=t(52),a=t(1);function c(e){var n=e.onClick;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(i.a.Consumer,{children:function(e){return Object(a.jsx)("div",{style:{marginBottom:8},children:Object(a.jsx)(r.a,{onChange:function(){return e.darkMode.toggle(),void n()},checked:e.darkMode.value,size:50})})}})})}c.defaultProps={onClick:function(){}},n.default=c},49:function(e,n,t){"use strict";t.r(n);t(0);var o=t(83),r=t.n(o),i=t(63),a=t.n(i),c=t(50),l=t(31),s=t(1),d={name:"Armen Matevosyan",roles:["a Developer","a Software Engineer","a Freelancer"]},u={nameStyle:{fontSize:"5em"},inlineChild:{display:"inline-block"},mainContainer:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}};n.default=function(){return d?Object(s.jsx)(a.a,{children:Object(s.jsxs)("div",{style:u.mainContainer,children:[Object(s.jsx)("h1",{style:u.nameStyle,children:null===d||void 0===d?void 0:d.name}),Object(s.jsxs)("div",{style:{flexDirection:"row"},children:[Object(s.jsx)("h2",{style:u.inlineChild,children:"I'm\xa0"}),Object(s.jsx)(r.a,{options:{loop:!0,autoStart:!0,strings:null===d||void 0===d?void 0:d.roles}})]}),Object(s.jsx)(c.default,{})]})}):Object(s.jsx)(l.default,{})}},50:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t(84),i=t(20),a=t(1),c={iconStyle:{marginLeft:10,marginRight:10,marginBottom:10}},l={social:[{network:"linkedin",href:"https://linkedin.com/in/armen-matevosyan-b269071b9"},{network:"github",href:"https://github.com/armatevosyan"},{network:"email",href:"https://mail.google.com/mail/?view=cm&fs=1&to=matevosyan.2011@gmail.com&su=SUBJECT"}]};n.default=function(){var e=Object(o.useContext)(i.a);return Object(a.jsx)("div",{className:"social",children:l?l.social.map((function(n){return Object(a.jsx)(r.SocialIcon,{style:c.iconStyle,url:n.href,network:n.network,bgColor:e.socialIconBgColor,target:"_blank",rel:"noopener"},n.network)})):null})}},52:function(e,n,t){"use strict";var o=t(0),r=t.n(o).a.createContext();n.a=r},89:function(e,n,t){}},[[136,11,12]]]);
//# sourceMappingURL=main.6de6fea7.chunk.js.map