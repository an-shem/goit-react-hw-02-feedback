(this["webpackJsonpgoit-react-hw-02-feedback-group-27"]=this["webpackJsonpgoit-react-hw-02-feedback-group-27"]||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a,c,o,r=n(1),i=n.n(r),s=n(5),d=n.n(s),l=(n(17),n(6)),b=n(7),u=n(8),j=n(11),p=n(10),h=n(2),x=n(3),f=x.a.h1(a||(a=Object(h.a)(["\n  font-size: 32px;\n  margin-bottom: 30px;\n"]))),g=n(0);function v(e){var t=e.children,n=e.title;return Object(g.jsxs)("section",{children:[Object(g.jsx)(f,{children:n}),t]})}var O,m=x.a.div(c||(c=Object(h.a)(["\n  margin-bottom: 30px;\n  padding-left: 30px;\n"]))),k=x.a.button(o||(o=Object(h.a)(["\n  padding: 2px 10px;\n  border: 1px solid #c9c1c1;\n  border-radius: 8px;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 22px;\n  letter-spacing: 0.03em;\n  text-align: center;\n  background-color: #fff;\n  cursor: pointer;\n\n  &:not(:last-child) {\n    margin-right: 15px;\n  }\n  &:hover {\n    background-color: #66bdf0;\n  }\n"])));function y(e){var t=e.options,n=e.onLeaveFeedback;return Object(g.jsx)(m,{children:t.map((function(e){return Object(g.jsx)(k,{type:"button",name:e,onClick:n,children:e[0].toUpperCase()+e.slice(1)},e)}))})}var F,w=x.a.div(O||(O=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n\n  & h2 {\n    margin-bottom: 30px;\n  }\n\n  & p {\n    font-style: normal;\n    font-weight: 500;\n    font-size: 20px;\n    line-height: 22px;\n    letter-spacing: 0.03em;\n  }\n  & p:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"])));function P(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,o=e.positivePercentage;return Object(g.jsxs)(w,{children:[Object(g.jsxs)("p",{children:["Good: ",t]}),Object(g.jsxs)("p",{children:["Neutral: ",n]}),Object(g.jsxs)("p",{children:["Bad: ",a]}),Object(g.jsxs)("p",{children:["Total: ",c]}),Object(g.jsxs)("p",{children:["Positive feedback: ",o,"%"]})]})}function N(e){var t=e.message;return Object(g.jsx)("h2",{children:t})}var T=x.a.div(F||(F=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n  margin: 40px auto 0;\n"]))),L=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var n=t.target.name;e.setState((function(e){return Object(l.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}))},e.countPositiveFeedbackPercentage=function(){var t=Math.round(e.state.good/e.countTotalFeedback()*100);return Number.isNaN(t)?0:t},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=Object.keys(this.state);return Object(g.jsxs)(T,{children:[Object(g.jsx)(v,{title:"Please leave feedback",children:Object(g.jsx)(y,{options:c,onLeaveFeedback:this.onLeaveFeedback})}),this.countTotalFeedback()?Object(g.jsx)(v,{title:"Statistics",children:Object(g.jsx)(P,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})}):Object(g.jsx)(N,{message:"No feedback given"})]})}}]),n}(r.Component);d.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(L,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.96945c6d.chunk.js.map