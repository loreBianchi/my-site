(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3CW5":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("Wbzz"),l=a("10BB");a("9llV");t.a=function(e){var t=e.pathContext,a=e.type;if(t.numPages>1){for(var r=[],c=1;c<=t.numPages;c++)r.push(n.a.createElement("li",{className:c===t.currentPage?"active":"",key:"PaginationItem"+c},n.a.createElement(o.a,{to:"/"+a+"/"+(1===c?"":c),title:a.charAt(0).toUpperCase()+a.slice(1)+" - Page "+c,key:"PaginationItemA"+c},c)));return n.a.createElement("div",{className:"pagination"},n.a.createElement("ul",null,1!==t.currentPage&&n.a.createElement("li",null,n.a.createElement(o.a,{to:"/"+a+"/"+(t.currentPage-1==1?"":t.currentPage-1),title:"Previous Page"},n.a.createElement("span",{className:"icon"},n.a.createElement(l.b,null)))),r,t.currentPage!==t.numPages&&n.a.createElement("li",null,n.a.createElement(o.a,{to:"/"+a+"/"+(t.currentPage+1),title:"Next Page"},n.a.createElement("span",{className:"icon"},n.a.createElement(l.c,null))))))}return n.a.createElement(n.a.Fragment,null)}},eWDE:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return p}));var r=a("q1tI"),n=a.n(r),o=a("Bl7J"),l=a("uRzu"),c=a("cGQ7"),i=a("3CW5"),s=a("vrFN");var m=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.datas;return e.allMarkdownRemark.edges.length>0?n.a.createElement("section",{id:"blog",className:"container"},n.a.createElement("div",{className:"section-title"},n.a.createElement(c.a,{title:"BLOG"})),n.a.createElement(l.a,{data:e}),n.a.createElement(i.a,{pathContext:this.props.pathContext,type:"blog"})):n.a.createElement(n.a.Fragment,null)},r}(n.a.Component);t.default=function(e){var t=e.data,a=e.pathContext;return n.a.createElement(o.a,null,n.a.createElement(s.a,{lang:"en",title:"Blog"}),n.a.createElement(m,{datas:t,pathContext:a}))};var p="1482536974"},uRzu:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("Wbzz"),l=a("9eSz"),c=a.n(l),i=a("0EVa"),s=a("10BB");a("O0kv");var m=function(e){var t,a;function r(){return e.apply(this,arguments)||this}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=r.prototype;return l.componentDidMount=function(){this.color=window.getComputedStyle(this.textSecondary,null).getPropertyValue("color"),this.textSecondary.querySelector("path").setAttribute("fill",this.color)},l.render=function(){var e=this;return n.a.createElement("div",{className:"item col s12 m6"},n.a.createElement("div",{className:"box"},n.a.createElement("div",{className:"image"},n.a.createElement(c.a,{fluid:this.props.data.node.frontmatter.image.childImageSharp.fluid}),n.a.createElement(o.a,{to:this.props.data.node.fields.slug,title:this.props.data.node.frontmatter.title,"aria-label":this.props.data.node.frontmatter.title,className:"overlay-link",style:{opacity:0}},this.props.data.node.frontmatter.title)),n.a.createElement("div",{className:"content"},n.a.createElement("h3",{className:"text-primary"},n.a.createElement(o.a,{to:this.props.data.node.fields.slug,title:this.props.data.node.frontmatter.title},this.props.data.node.frontmatter.title)),n.a.createElement("p",{className:"text-tertiary"},this.props.data.node.frontmatter.description),n.a.createElement("p",{className:"date text-secondary",ref:function(t){return e.textSecondary=t}},n.a.createElement("span",{className:"icon"},n.a.createElement(s.a,null)),n.a.createElement(i.a,{data:this.props.data.node.frontmatter.date})))))},r}(n.a.Component);t.a=function(e){var t=e.data.allMarkdownRemark.edges,a=[];return t.forEach((function(t,r){e.remove&&t.node.id===e.remove||a.push(n.a.createElement(m,{key:t.node.id,data:t}))})),n.a.createElement("div",{className:"row"},a)}}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-bdc016c55abe293b9331.js.map