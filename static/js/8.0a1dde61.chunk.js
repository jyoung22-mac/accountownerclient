(this.webpackJsonpaccountownerclient=this.webpackJsonpaccountownerclient||[]).push([[8],{220:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var c=n(24),r=function(e,t){return 404===e.response.status?function(e){return{type:c.e,props:e}}(t):500===e.response.status?function(e){return{type:c.f,props:e}}(t):function(e){return{type:c.g,error:e}}(e)},s=function(){return{type:c.a}}},221:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return j}));var c=n(24),r=n(223),s=n.n(r).a.create({baseURL:"https://brokerage.herokuapp.com",headers:{headerType:"example header type"}}),o=n(220),i=function(e,t){return function(n){s.get(e).then((function(e){var t;n((t=e.data,{type:c.d,data:t}))})).catch((function(e){n(o.b(e,t))}))}},d=function(e,t,n){return function(r){s.post(e,t).then((function(e){r(function(e){return{type:c.h,response:e}}(e))})).catch((function(e){r(o.b(e,n))}))}},a=function(e,t,n){return function(r){s.put(e,t).then((function(e){r(function(e){return{type:c.i,response:e}}(e))})).catch((function(e){r(o.b(e,n))}))}},u=function(e,t){return function(n){s.delete(e).then((function(e){n(function(e){return{type:c.c,response:e}}(e))})).catch((function(e){n(o.b(e,t))}))}},j=function(e,t){return{type:c.b,props:t,url:e}}},222:function(e,t,n){},225:function(e,t,n){"use strict";var c=n(9),r=(n(1),n(15));n(222);t.a=function(e){return Object(c.jsxs)(r.h,{show:e.show,backdrop:"static",children:[Object(c.jsx)(r.h.Header,{children:e.modalHeaderText}),Object(c.jsx)(r.h.Body,{children:Object(c.jsx)("p",{children:e.modalBodyText})}),Object(c.jsx)(r.h.Footer,{children:Object(c.jsx)(r.a,{bsStyle:"success",onClick:e.successClick,children:e.okButtonText})})]})}},226:function(e,t,n){"use strict";var c=n(9),r=(n(1),n(15));n(222);t.a=function(e){return Object(c.jsxs)(r.h,{show:e.show,backdrop:"static",children:[Object(c.jsx)(r.h.Header,{children:e.modalHeaderText}),Object(c.jsx)(r.h.Body,{children:Object(c.jsx)("p",{children:e.modalBodyText})}),Object(c.jsx)(r.h.Footer,{children:Object(c.jsx)(r.a,{bsStyle:"danger",onClick:e.closeModal,children:e.okButtonText})})]})}},262:function(e,t,n){"use strict";n.r(t);var c=n(14),r=n(9),s=n(1),o=n(221),i=n(220),d=n(98),a=n(15),u=n(227),j=n.n(u),l=n(225),h=n(226);t.default=function(e){var t=Object(d.d)((function(e){return e.repository.data})),n=Object(d.d)((function(e){return e.repository.showSuccessModal})),u=Object(d.d)((function(e){return e.errorHandler.showErrorModal})),b=Object(d.d)((function(e){return e.errorHandler.errorMessage})),f=Object(d.c)(),O=Object(c.a)({},t);Object(s.useEffect)((function(){var t="/api/owner/"+e.match.params.id;f(o.c(t,Object(c.a)({},e)))}),[]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(a.l,{children:Object(r.jsx)(a.b,{md:10,children:Object(r.jsxs)(a.n,{children:[Object(r.jsxs)(a.l,{children:[Object(r.jsx)(a.b,{md:3,children:Object(r.jsx)(a.c,{htmlFor:"name",children:"Owners name:"})}),Object(r.jsx)(a.b,{md:7,children:Object(r.jsx)("span",{name:"name",children:O.name})})]}),Object(r.jsxs)(a.l,{children:[Object(r.jsx)(a.b,{md:3,children:Object(r.jsx)(a.c,{htmlFor:"dateOfBirth",children:"Date of birth:"})}),Object(r.jsx)(a.b,{md:7,children:Object(r.jsx)("span",{name:"dateOfBirth",children:Object(r.jsx)(j.a,{format:"MM/DD/YYYY",children:O.dateOfBirth})})})]}),Object(r.jsxs)(a.l,{children:[Object(r.jsx)(a.b,{md:3,children:Object(r.jsx)(a.c,{htmlFor:"address",children:"Address:"})}),Object(r.jsx)(a.b,{md:7,children:Object(r.jsx)("span",{name:"address",children:O.address})})]})]})})}),Object(r.jsxs)(a.l,{children:[Object(r.jsx)(a.b,{mdOffset:8,md:1,children:Object(r.jsx)(a.a,{type:"submit",bsStyle:"info",onClick:function(n){n.preventDefault();var r="/api/owner/"+t.id;f(o.b(r,Object(c.a)({},e)))},children:"Delete"})}),Object(r.jsx)(a.b,{md:1,children:Object(r.jsx)(a.a,{bsStyle:"danger",onClick:function(){e.history.push("/owner-List")},children:"Cancel"})})]}),Object(r.jsx)(l.a,{show:n,modalHeaderText:"Success message",modalBodyText:"Action completed successfully",okButtonText:"OK",successClick:function(){return f(o.a("/owner-List",Object(c.a)({},e)))}}),Object(r.jsx)(h.a,{show:u,modalHeaderText:"Error message",modalBodyText:b,okButtonText:"OK",closeModal:function(){return f(i.a())}})]})}}}]);
//# sourceMappingURL=8.0a1dde61.chunk.js.map