(this.webpackJsonpdieta=this.webpackJsonpdieta||[]).push([[0],{37:function(e,a,t){e.exports=t(67)},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(16),r=t.n(i),c=(t(42),t(43),t(27)),s=t(11),o=t(12),m=t(15),d=t(13),u=function(e){var a=e.onDeficitChange;return l.a.createElement("div",null,l.a.createElement("div",{className:"br2",style:{backgroundColor:"#96CCFF"}},l.a.createElement("h3",null,"Deficit /day")),l.a.createElement("div",{className:"fw7 f8 pb3"},"How many calories would you like to reduce?"),l.a.createElement("div",{className:"flex items-center mb2"},l.a.createElement("input",{className:"mr2",type:"radio",id:"300",value:"300",name:"deficit",onClick:a}),l.a.createElement("label",{htmlFor:"300",className:"lh-copy"},"300")),l.a.createElement("div",{className:"flex items-center mb2"},l.a.createElement("input",{className:"mr2",type:"radio",id:"400",value:"400",name:"deficit",onClick:a}),l.a.createElement("label",{htmlFor:"400",className:"lh-copy"},"400")),l.a.createElement("div",{className:"flex items-center mb2"},l.a.createElement("input",{className:"mr2",type:"radio",id:"500",value:"500",name:"deficit",onClick:a}),l.a.createElement("label",{htmlFor:"500",className:"lh-copy"},"500")))},p=function(e){var a=e.onRouteChange;return l.a.createElement("div",{className:"ma3"},l.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"next page",onClick:a}))},h=(t(44),function(e){var a=e.onWeightChange,t=e.onBMRCalculate,n=e.bmr,i=e.onRouteChange,r=e.onDeficitChange;return l.a.createElement("div",{className:"flex flex-column items-center"},l.a.createElement("div",{id:"cardDiv",className:"pa3 w5 w-70-ns"},l.a.createElement("article",{className:"ba pv1 br2 b--light-silver shadow-1"},l.a.createElement("div",{className:"ph3"},l.a.createElement("div",{className:"br2",style:{backgroundColor:"#96CCFF"}},l.a.createElement("h3",null,"Start to calculate!")),l.a.createElement("div",{className:"fw7 f8 pb3"},"Enter your body weight:"),l.a.createElement("div",{className:"measure"},l.a.createElement("label",{htmlFor:"name",className:"f6 b db mb2"},"Body Weight",l.a.createElement("span",{className:"normal black-60"}," kg")),l.a.createElement("input",{id:"weight",className:"input-reset ba b--black-60 pa2 mb2 db w3",type:"text","aria-describedby":"name-desc",onChange:a}),l.a.createElement("small",{id:"name-desc",className:"f6 black-60 db mb2"},"enter your body weight here")),l.a.createElement("div",{className:"pb3"},l.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"submit",onClick:t})),l.a.createElement("p",null,"Your BMR is ",l.a.createElement("span",null,n)," Kcal.")))),l.a.createElement("div",{id:"cardDiv",className:"pa3 w5 w-70-ns"},l.a.createElement("article",{className:"ba pv1 br2 b--light-silver shadow-1"},l.a.createElement("div",{className:"ph3"},l.a.createElement(u,{onDeficitChange:r})))),l.a.createElement(p,{onRouteChange:function(){i("activity")}}))}),g=(t(45),function(e){var a=e.style,t=e.item,n=e.name,i=e.onActExeAmount,r=e.optionCheckedState;return l.a.createElement("div",{id:"cardDiv",className:"pa2 dib w5 center"},l.a.createElement("article",{className:"ba pv1 br2 b--light-silver shadow-1"},l.a.createElement("div",{className:"ph3"},l.a.createElement("div",{className:"br2",style:a},l.a.createElement("h3",null,"Day ",t)),l.a.createElement("div",{className:"flex items-center mb2"},l.a.createElement("input",{className:"mr2",type:"radio",id:"".concat(n,"-rare"),value:"0",name:n,onChange:i,checked:r[0]}),l.a.createElement("label",{htmlFor:"".concat(n,"-rare"),className:"lh-copy"},"Rare")),l.a.createElement("div",{className:"flex items-center mb2"},l.a.createElement("input",{className:"mr2",type:"radio",id:"".concat(n,"-low"),value:"1",name:n,onChange:i,checked:r[1]}),l.a.createElement("label",{htmlFor:"".concat(n,"-low"),className:"lh-copy"},"Low")),l.a.createElement("div",{className:"flex items-center mb2"},l.a.createElement("input",{className:"mr2",type:"radio",id:"".concat(n,"-medium"),value:"2",name:n,onChange:i,checked:r[2]}),l.a.createElement("label",{htmlFor:"".concat(n,"-medium"),className:"lh-copy"},"Medium")),l.a.createElement("div",{className:"flex items-center mb2"},l.a.createElement("input",{className:"mr2",type:"radio",id:"".concat(n,"-high"),value:"3",name:n,onChange:i,checked:r[3]}),l.a.createElement("label",{htmlFor:"".concat(n,"-high"),className:"lh-copy"},"High")))))}),b=function(e){var a=e.name,t=e.onLoadActExe;return l.a.createElement("div",{className:"ma3"},l.a.createElement("input",{className:"b pv2 input-reset ba b--black bg-transparent grow pointer f5 dib",type:"submit",value:"Load setting of last week",name:a,onClick:t}))},f=t(8),E=(t(56),t(57),function(e){return l.a.createElement("div",{className:"w-80"},l.a.createElement(f.Table,null,l.a.createElement(f.Thead,null,l.a.createElement(f.Tr,{className:"white bg-mid-gray"},l.a.createElement(f.Th,null,"Type"),l.a.createElement(f.Th,null,"Low"),l.a.createElement(f.Th,null,"Mideum"),l.a.createElement(f.Th,null,"High"))),l.a.createElement(f.Tbody,null,e.data.map((function(e,a){return l.a.createElement(f.Tr,{className:"",key:e.Type},l.a.createElement(f.Td,null,l.a.createElement("span",{role:"img","aria-label":e.Type,className:"pr2"},e.icon),e.Type),l.a.createElement(f.Td,null,e.Low),l.a.createElement(f.Td,null,e.Medium),l.a.createElement(f.Td,null,e.High))})))))}),v=[{icon:"\ud83d\udc63",Type:"Steps",Low:"6,000",Medium:"10,000",High:"20,000"},{icon:"\u26f0",Type:"Mounting",Low:"0.5 hr",Medium:"1 hr",High:"2 hr"},{icon:"\ud83d\udcf6",Type:"Climbing stairs",Low:"0.5 hr",Medium:"1 hr",High:"2 hr"},{icon:"\ud83d\udeb6",Type:"Walking",Low:"1 hr",Medium:"2 hr",High:"3 hr"},{icon:"\ud83e\uddf9",Type:"House cleaning",Low:"1 hr",Medium:"2 hr",High:"3 hr"},{icon:"\ud83d\udeb4",Type:"Biking",Low:"1 hr",Medium:"2 hr",High:"3 hr"}],y=[{icon:"\ud83c\udfcb\ufe0f",Type:"Workout",Low:"1-1.5 hr, 12 sets",Medium:"1.5 hr, 15-20sets",High:"2 hr, 25sets"},{icon:"\ud83c\udfca",Type:"Cardio (winded)",Low:"0.5 hr",Medium:"1 hr",High:"1.5 hr"},{icon:"\ud83e\udd4a",Type:"HIIT, Tabata",Low:"10 min",Medium:"20 min",High:"30 min"},{icon:"\u26f9\ufe0f",Type:"Sports (ball, athletics...)",Low:"1 hr",Medium:"2 hr",High:"--"}],w=function(e){var a=e.onRouteChange,t=e.onActExeAmount,n=e.calculateNutrition,i=e.onLoadActExe,r=e.optionCheckedState;return l.a.createElement("div",{className:"pa3 flex flex-column items-center"},l.a.createElement("legend",{className:"fw7 f4 pv3 tc"},"Amount of exercise/ day"),l.a.createElement(E,{data:y}),l.a.createElement(b,{name:"exercise",onLoadActExe:i}),l.a.createElement("div",{className:"flex flex-wrap"},["1","2","3","4","5","6","7"].map((function(e,a){return l.a.createElement(g,{key:e,style:{backgroundColor:"#96CCFF"},item:e,name:"exercise".concat(e),onActExeAmount:t,optionCheckedState:r[a]})}))),l.a.createElement(p,{onRouteChange:function(){a("result"),n()}}))},N=function(e){var a=e.onRouteChange,t=e.onActExeAmount,n=e.onLoadActExe,i=e.optionCheckedState;return l.a.createElement("div",{className:"pa3 flex flex-column items-center"},l.a.createElement("legend",{className:"fw7 f4 pv3 tc"},"Amount of activity/ day"),l.a.createElement(E,{data:v}),l.a.createElement(b,{name:"activity",onLoadActExe:n}),l.a.createElement("div",{className:"flex flex-wrap"},["1","2","3","4","5","6","7"].map((function(e,a){return l.a.createElement(g,{key:e,style:{backgroundColor:"#A463F2"},item:e,name:"activity".concat(e),onActExeAmount:t,optionCheckedState:i[a]})}))),l.a.createElement(p,{onRouteChange:function(){a("exercise")}}))},C=(t(58),function(e){var a,t,n=e.item,i=e.protein,r=e.oil,c=e.activity,s=e.exercise,o=e.dailyCalorie,m=e.dailyCarbon;return a="0"===c[n-1]?"Rare":"1"===c[n-1]?"Low":"2"===c[n-1]?"Medium":"High",t="0"===s[n-1]?"Rare":"1"===s[n-1]?"Low":"2"===s[n-1]?"Medium":"High",l.a.createElement("div",{id:"cardDiv",className:"pa2 dib w5 center"},l.a.createElement("article",{className:"ba pv1 br2 b--light-silver shadow-1"},l.a.createElement("div",{className:"ph3"},l.a.createElement("div",{className:"bg-green br2"},l.a.createElement("h3",null,"Day ",n)),l.a.createElement("h4",{className:""},a," activity, ",t," exercise."),l.a.createElement("div",{className:""},l.a.createElement("dl",{className:"f5 lh-title mv2"},l.a.createElement("dt",{className:"dib b"},"Protein:"),l.a.createElement("dd",{className:"dib ml1 near-gray"},i," g")),l.a.createElement("dl",{className:"f5 lh-title mv2"},l.a.createElement("dt",{className:"dib b"},"Oil:"),l.a.createElement("dd",{className:"dib ml1 near-gray"},r," g")),l.a.createElement("dl",{className:"f5 lh-title mv2"},l.a.createElement("dt",{className:"dib b"},"Carbohydrate:"),l.a.createElement("dd",{className:"dib ml1 near-gray"},m[n-1]," g")),l.a.createElement("dl",{className:"f5 lh-title mv2"},l.a.createElement("dt",{className:"dib b"},"Total calorie: "),l.a.createElement("dd",{className:"dib ml1 near-gray"},o[n-1]," Kcal"))))))}),k=function(e){var a=e.name,t=e.onRouteChange,n=e.deficit,i=e.protein,r=e.oil,c=e.activity,s=e.exercise,o=e.dailyCalorie,m=e.dailyCarbon;return l.a.createElement("div",{className:"pa3 flex flex-column items-center"},l.a.createElement("legend",{className:"fw7 f4 pv2 tc"},a,", your daily recommended intakes are:"),l.a.createElement("div",{className:"b"},"Deficit : ",n," Kcal"),l.a.createElement("div",{className:"flex flex-wrap"},["1","2","3","4","5","6","7"].map((function(e){return l.a.createElement(C,{key:e,item:e,protein:i,oil:r,activity:c,exercise:s,dailyCalorie:o,dailyCarbon:m})}))),l.a.createElement("div",{className:"pv3"},l.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign out",onClick:function(){t("signin")}})))},S=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).onEmailChange=function(a){e.setState({email:a.target.value})},e.onPasswordChange=function(a){e.setState({password:a.target.value})},e.onSignIn=function(){fetch("https://gentle-badlands-25513.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state)}).then((function(e){return e.json()})).then((function(a){a.name?(e.props.loadUser(a),e.props.onRouteChange("howItWorks"),e.props.onIsSignIn()):console.log("fail to sign in")}))},e.state={email:"",password:""},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"pa4 black-80"},l.a.createElement("div",{className:"measure center"},l.a.createElement("fieldset",{id:"sign_in",className:"ba b--transparent ph0 mh0"},l.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Sign In"),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),l.a.createElement("input",{className:"pa2 input-reset ba hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),l.a.createElement("div",{className:"mv3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),l.a.createElement("input",{className:"b pa2 input-reset ba hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),l.a.createElement("div",{className:""},l.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in",onClick:this.onSignIn})),l.a.createElement("div",{className:"lh-copy mt3"},l.a.createElement("p",{className:"f6 link dim black db",onClick:function(){e.props.onRouteChange("signup")}},"Sign up")))))}}]),t}(n.Component),x=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).onNameChange=function(a){e.setState({name:a.target.value})},e.onEmailChange=function(a){e.setState({email:a.target.value})},e.onPasswordChange=function(a){e.setState({password:a.target.value})},e.onSignUp=function(){var a=e.state,t=a.name,n=a.email,l=a.password;t&&n&&l?fetch("https://gentle-badlands-25513.herokuapp.com/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state)}).then((function(e){return e.json()})).then((function(a){a.name&&(e.props.loadUser(a),e.props.onRouteChange("howItWorks"),e.props.onIsSignIn())})):console.log("enter personal data plz!")},e.state={name:"",email:"",password:""},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"pa4 black-80"},l.a.createElement("div",{className:"measure center"},l.a.createElement("fieldset",{id:"sign_in",className:"ba b--transparent ph0 mh0"},l.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Sign Up"),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),l.a.createElement("input",{className:"pa2 input-reset ba hover-bg-black hover-white w-50",type:"name",name:"name",id:"name",onChange:this.onNameChange})),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),l.a.createElement("input",{className:"pa2 input-reset ba hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),l.a.createElement("div",{className:"mv3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),l.a.createElement("input",{className:"b pa2 input-reset ba hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),l.a.createElement("div",{className:""},l.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign up",onClick:this.onSignUp})),l.a.createElement("div",{className:"lh-copy mt3"},l.a.createElement("p",{className:"f6 link dim black db",onClick:function(){e.props.onRouteChange("signin")}},"Sign in")))))}}]),t}(n.Component),R=function(e){var a=e.onRouteChange;return l.a.createElement("div",{className:"mt5"},l.a.createElement("article",{className:"mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-green dark-green mb5"},l.a.createElement("h1",{className:"fw6 f3 f2-ns lh-title mt0 mb3"},"Your Calorie Calculator."),l.a.createElement("h2",{className:"fw2 f4 lh-copy mt0 mb3 ph4"},"\u91dd\u5c0d\u9ad4\u91cd\u3001\u6bcf\u65e5\u6d3b\u52d5\u91cf\u53ca\u904b\u52d5\u91cf\uff0c\u53ca\u60f3\u8981\u7684\u6e1b\u91cd\u901f\u5ea6\uff0c\u5e6b\u4f60\u8a08\u7b97\u6bcf\u65e5\u5361\u8def\u91cc\u3002"),l.a.createElement("div",{className:"pt3"},l.a.createElement("p",{className:"f5 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib",onClick:function(){a("howItWorks")}},"Learn More"))))},I=(t(59),function(e){var a=e.modifySpeedUp,t=e.modifySlowDown,n=e.onModifyDeficit;return l.a.createElement("div",null,a&&!t?l.a.createElement("div",null,l.a.createElement("div",{className:"flex items-center mb2"},l.a.createElement("input",{className:"mr2",type:"radio",id:"-100",value:"-100",name:"speedup",onClick:n}),l.a.createElement("label",{htmlFor:"-100",className:"lh-copy"},"-100 Kcal")),l.a.createElement("div",{className:"flex items-center mb2"},l.a.createElement("input",{className:"mr2",type:"radio",id:"-200",value:"-200",name:"speedup",onClick:n}),l.a.createElement("label",{htmlFor:"-200",className:"lh-copy"},"-200 Kcal")),l.a.createElement("div",{className:"flex items-center mb2"},l.a.createElement("input",{className:"mr2",type:"radio",id:"-300",value:"-300",name:"speedup",onClick:n}),l.a.createElement("label",{htmlFor:"-300",className:"lh-copy"},"-300 Kcal"))):!a&&t?l.a.createElement("div",null,l.a.createElement("div",{className:"flex items-center mb2"},l.a.createElement("input",{className:"mr2",type:"radio",id:"+100",value:"+100",name:"slowdown",onClick:n}),l.a.createElement("label",{htmlFor:"+100",className:"lh-copy"},"+100 Kcal")),l.a.createElement("div",{className:"flex items-center mb2"},l.a.createElement("input",{className:"mr2",type:"radio",id:"+200",value:"+200",name:"slowdown",onClick:n}),l.a.createElement("label",{htmlFor:"+200",className:"lh-copy"},"+200 Kcal")),l.a.createElement("div",{className:"flex items-center mb2"},l.a.createElement("input",{className:"mr2",type:"radio",id:"+300",value:"+300",name:"slowdown",onClick:n}),l.a.createElement("label",{htmlFor:"+300",className:"lh-copy"},"+300 Kcal"))):null)}),M=function(e){var a=e.onModifySpeed,t=e.modifySpeedUp,n=e.modifySlowDown,i=e.onModifyDeficit,r=e.onRouteChange;return l.a.createElement("div",{className:""},l.a.createElement("div",{className:"br2",style:{backgroundColor:"#96CCFF"}},l.a.createElement("h3",null,"Consider these factors:")),l.a.createElement("div",{className:""},l.a.createElement("div",{className:"b lh-copy pb2"},"- Is the rate normal?",l.a.createElement("br",null),"- Keep losing weight for 3 weeks?",l.a.createElement("br",null),"- Feel tired?",l.a.createElement("br",null),"- Expect more stress next week?"),l.a.createElement("div",{className:"pv1"},l.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Maintain Current Rate",onClick:function(){r("activity")}}),l.a.createElement("small",{id:"name-desc",className:"f6 black-60 db mb2"},"Maintain the current deficit.")),l.a.createElement("div",{className:"pv1"},l.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Speed Up",onClick:a}),l.a.createElement("small",{id:"name-desc",className:"f6 black-60 db mb2"},"Enlarge calorie deficit, eat less.")),l.a.createElement(I,{modifySpeedUp:t,onModifyDeficit:i}),l.a.createElement("div",{className:"pv1"},l.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Slow Down",onClick:a}),l.a.createElement("small",{id:"name-desc",className:"f6 black-60 db mb2"},"Minimize calorie deficit, eat more.")),l.a.createElement(I,{modifySlowDown:n,onModifyDeficit:i})))},D=function(e){var a=e.showGuide,t=e.RateGuideSuggestions;return a?l.a.createElement("div",{id:"cardDiv",className:"pa3"},l.a.createElement("article",{className:"ba pv1 br2 b--light-silver shadow-1"},l.a.createElement("div",{className:"ph3"},l.a.createElement("div",{className:"br2",style:{backgroundColor:"#96CCFF"}},l.a.createElement("h3",null,t.rate)),l.a.createElement("div",{className:" b lh-copy pb2"},t.result),l.a.createElement("p",{className:"mb2"},t.suggestion1),l.a.createElement("p",null,t.suggestion2)))):null},T=[{rate:"Lose 0.5% - 1.5%",result:"Normal rate, keep going.",suggestion1:'If you have been losing weight with this rate over 3 -4weeks, a 2 - 7 day "break" are suggested.',suggestion2:"Add 200 - 400 Kcal per day during break."},{rate:"Lose 1.5% - 2% or more",result:"A little bit too fast, keep watching it.",suggestion1:'If you have been losing weight with this rate over 2 - 3 weeks, highly recommend you to take a week "break".',suggestion2:"Add 300 - 500 Kcal per day during break."},{rate:"Lose less than 0.5%",result:"Keep trying, you just need more practice.",suggestion1:"Try to record your calorie with more accuracy, and have a steady deficit every day.",suggestion2:"If the above two things you are doing right, and you are stuck here for more then 2 weeks, than speed up."}],A=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).onThisWeekInput=function(a){e.setState({weightThisWeek:a.target.value})},e.onLastWeekInput=function(a){e.setState({weightLastWeek:a.target.value})},e.rateCalculation=function(){var a=e.state,t=a.weightThisWeek,n=a.weightLastWeek,l=Math.round((t-n)/n*1e4)/100;e.setState({rate:l,showGuide:!0})},e.state={showGuide:!1,weightThisWeek:0,weightLastWeek:0,rate:0},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.rate,n=a.showGuide,i=t/100;return l.a.createElement("div",{className:"flex flex-column items-center"},l.a.createElement("div",{className:"w5 w-70-ns"},l.a.createElement("div",{id:"cardDiv",className:"pa3 "},l.a.createElement("article",{className:"ba pv1 br2 b--light-silver shadow-1"},l.a.createElement("div",{className:"ph3"},l.a.createElement("div",{className:"br2",style:{backgroundColor:"#96CCFF"}},l.a.createElement("h3",null,"What's the next?")),l.a.createElement("div",{className:"fw7 f8 "},"Calculate your losing rate:"),l.a.createElement("div",{className:"measure"},l.a.createElement("label",{htmlFor:"name",className:"f6 b db mb2"},"Average weight This Week",l.a.createElement("span",{className:"normal black-60"}," kg")),l.a.createElement("input",{id:"weightThisWeek",className:"input-reset ba b--black-60 pa2 mb2 db w3",type:"text","aria-describedby":"name-desc",onChange:this.onThisWeekInput})),l.a.createElement("div",{className:"measure"},l.a.createElement("label",{htmlFor:"name",className:"f6 b db mb2"},"Average weight Last Week",l.a.createElement("span",{className:"normal black-60"}," kg")),l.a.createElement("input",{id:"weightLastWeek",className:"input-reset ba b--black-60 pa2 mb2 db w3",type:"text","aria-describedby":"name-desc",onChange:this.onLastWeekInput})),l.a.createElement("div",{className:"pb3"},l.a.createElement("input",{className:"ph3 pv2 input-reset ba b--black bg-transparent grow pointer b f6 dib",type:"submit",value:"submit",onClick:this.rateCalculation})),l.a.createElement("p",null,l.a.createElement("span",{className:"pl1"},this.state.rate)," % weight change.")))),i<=-.005&&i>-.015?l.a.createElement(D,{showGuide:n,RateGuideSuggestions:T[0]}):i<=-.015?l.a.createElement(D,{showGuide:n,RateGuideSuggestions:T[1]}):l.a.createElement(D,{showGuide:n,RateGuideSuggestions:T[2]})),l.a.createElement("div",{id:"cardDiv",className:"pa3 w5 w-70-ns"},l.a.createElement("article",{className:"ba pv1 br2 b--light-silver shadow-1"},l.a.createElement("div",{className:"ph3"},l.a.createElement(M,{onModifySpeed:this.props.onModifySpeed,modifySpeedUp:this.props.modifySpeedUp,modifySlowDown:this.props.modifySlowDown,onModifyDeficit:this.props.onModifyDeficit,onRouteChange:this.props.onRouteChange})))),l.a.createElement(p,{onRouteChange:function(){e.props.onRouteChange("activity")}}))}}]),t}(n.Component),L=t(19),j=t(24),F=t(28),O=(t(60),function(e){var a=e.isSignIn,t=e.onRouteChange,n=e.getResult;return l.a.createElement(F.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},l.a.createElement(F.a.Brand,{className:"grow pointer",onClick:function(){t("home")}},"Dieta"),l.a.createElement(F.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(F.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(L.a,{className:"mr-auto"},l.a.createElement(j.a,{title:"Menu",id:"collasible-nav-dropdown"},l.a.createElement(j.a.Item,{href:"#howItWorks",onClick:function(e){t("howItWorks"),e.preventDefault()}},"How it works"),l.a.createElement(j.a.Item,{href:"#calculation",onClick:function(e){t("calculation"),e.preventDefault()}},"Calculation"),l.a.createElement(j.a.Item,{href:"#getResult",onClick:function(e){n(),e.preventDefault()}},"Latest Result"),l.a.createElement(j.a.Item,{href:"#nextMove",onClick:function(e){t("nextMove"),e.preventDefault()}},"Next Move"))),a?l.a.createElement(L.a,null,l.a.createElement(L.a.Link,{href:"signin",onClick:function(e){t("signin"),e.preventDefault()}},"Sign Out")):l.a.createElement(L.a,null,l.a.createElement(L.a.Link,{href:"#signin",onClick:function(e){t("signin"),e.preventDefault()}},"Sign In"),l.a.createElement(L.a.Link,{href:"#signup",onClick:function(e){t("signup"),e.preventDefault()}},"Sign Up"))))}),W=(t(64),function(e){var a=e.title,t=e.description;return l.a.createElement("div",{className:"pa2 pv3 center w5 "},l.a.createElement("article",{className:"ba pv1 br2 b--light-silver shadow-1"},l.a.createElement("div",{className:"ph3"},l.a.createElement("div",{id:"colorDiv",className:"br2"},l.a.createElement("h3",null,a)),l.a.createElement("p",{id:"description"},t))))}),U=[{title:"Why use Dieta?",description:"A weekly plan helps you loss weight easily!"},{title:"How it works?",description:"Based on your weight, your life style, and the speed of losing weight, calculate the daily calorie."},{title:"Nutrition",description:"A high level protein is needed to prevent a muscle losing. Also the carbohydrate is remained to maintain our body function."},{title:"Weekly adjustment",description:"According to your losing rate, life style, tiredness to decide the next move."}],H=[{title:"Getting start",description:"First step, enter your body weight and estimate your daily activity and exercise amount."},{title:"How can I know the amount?",description:"number of steps, sets of work out, hours of housework can be an index, follow our instruction on the top of activity and exercise page."},{title:"Check my last record",description:"Select latest result on menu"},{title:"Next move?",description:"Enter your average weight this week and last week to get an advise!"}],B=(t(65),function(){return l.a.createElement("div",{className:""},l.a.createElement("div",{className:"flex flex-wrap",id:"yellow"},U.map((function(e,a){return l.a.createElement(W,{key:e.title,title:e.title,description:e.description})}))),l.a.createElement("div",{className:"flex flex-wrap",id:"blue"},H.map((function(e,a){return l.a.createElement(W,{key:e.title,title:e.title,description:e.description})}))))}),K=[[!1,!1,!1,!1],[!1,!1,!1,!1],[!1,!1,!1,!1],[!1,!1,!1,!1],[!1,!1,!1,!1],[!1,!1,!1,!1],[!1,!1,!1,!1]],G={user:{name:"",email:"",weight:0,deficit:0},BMR:0,isSignIn:!1,route:"home",activity:[],exercise:[],protein:0,oil:0,dailyCalorie:[],dailyCarbon:[],checkedActivity:K,checkedExercise:K,modifySpeedUp:!1,modifySlowDown:!1,modifyDeficit:0},J=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).loadUser=function(a){e.setState({user:a})},e.onIsSignIn=function(){e.setState({isSignIn:!0})},e.onWeightChange=function(a){e.setState(Object.assign(e.state.user,{weight:a.target.value}))},e.onBMRCalculate=function(){var a=parseInt(2.2*e.state.weight*12);e.setState({BMR:a})},e.onDeficitChange=function(a){e.setState(Object.assign(e.state.user,{deficit:a.target.value}))},e.onRouteChange=function(a){e.state.isSignIn?"signin"===a?e.setState(G):e.setState({route:a}):"calculation"===a||"nextMove"===a||"result"===a||"signin"===a?e.setState({route:"signin"}):e.setState({route:a}),window.scrollTo(0,0)},e.onActExeAmount=function(a){var t,n=a.target.name.slice(-1),l=a.target.name.slice(0,-1),i="checked"+l.slice(0,1).toUpperCase()+l.slice(1),r=e.state[l].slice();r[n-1]=a.target.value;var s=e.state[i].slice();s[n-1]=[!1,!1,!1,!1],s[n-1][a.target.value]=!0,e.setState((t={},Object(c.a)(t,l,r),Object(c.a)(t,i,s),t))},e.onLoadActExe=function(a){var t=a.target.name,n="checked"+t.slice(0,1).toUpperCase()+t.slice(1);fetch("https://gentle-badlands-25513.herokuapp.com/".concat(t),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.user.email})}).then((function(e){return e.json()})).then((function(a){var l;delete a.userEmail;var i=Object.values(a);e.setState((l={},Object(c.a)(l,t,i),Object(c.a)(l,n,e.getWeekOption(i)),l))}))},e.getWeekOption=function(e){for(var a=[],t=0;t<7;t++){var n=[!1,!1,!1,!1];n[e[t]]=!0,a.push(n)}return a},e.calculateNutrition=function(){for(var a=e.state.user,t=a.weight,n=a.deficit,l=e.state,i=l.activity,r=l.exercise,c=l.modifyDeficit,s=2*t,o=1*t,m=[],d=[],u=parseInt(n)+parseInt(-c),p=0;p<7;p++)m[p]=parseInt(2.2*t*(12+parseInt(i[p])+parseInt(r[p])))-u,d[p]=parseInt((m[p]-4*s-9*o)/4);e.setState({protein:s,oil:o,dailyCalorie:m,dailyCarbon:d}),e.setState(Object.assign(e.state.user,{deficit:u})),fetch("https://gentle-badlands-25513.herokuapp.com/calculate",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.user.email,deficit:u,activity:i,exercise:r,dailyCalorie:m,dailyCarbon:d})}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))},e.onModifySpeed=function(a){"Speed Up"===a.target.value?e.setState({modifySpeedUp:!0,modifySlowDown:!1}):e.setState({modifySpeedUp:!1,modifySlowDown:!0})},e.onModifyDeficit=function(a){e.setState({modifyDeficit:a.target.value})},e.getResult=function(){var a=e.state.user.weight;0===a?(alert("No record! Why don't we do it from the beginning?"),e.onRouteChange("calculation")):(fetch("https://gentle-badlands-25513.herokuapp.com/result",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.user.email})}).then((function(e){return e.json()})).then((function(t){var n=t.dailyCalorie,l=t.dailyCarbon;delete n.userEmail,delete l.userEmail,e.setState({protein:2*a,oil:a,dailyCalorie:Object.values(n),dailyCarbon:Object.values(l)})})),e.onRouteChange("result"))},e.renderSwitch=function(a){switch(a){case"home":return l.a.createElement(R,{onRouteChange:e.onRouteChange});case"signin":return l.a.createElement(S,{loadUser:e.loadUser,onRouteChange:e.onRouteChange,onIsSignIn:e.onIsSignIn});case"signup":return l.a.createElement(x,{loadUser:e.loadUser,onRouteChange:e.onRouteChange,onIsSignIn:e.onIsSignIn});case"howItWorks":return l.a.createElement(B,null);case"calculation":return l.a.createElement(h,{onWeightChange:e.onWeightChange,onBMRCalculate:e.onBMRCalculate,bmr:e.state.BMR,onRouteChange:e.onRouteChange,onDeficitChange:e.onDeficitChange});case"activity":return l.a.createElement(N,{onRouteChange:e.onRouteChange,onActExeAmount:e.onActExeAmount,onChange:e.onChange,onLoadActExe:e.onLoadActExe,optionCheckedState:e.state.checkedActivity});case"exercise":return l.a.createElement(w,{onRouteChange:e.onRouteChange,onActExeAmount:e.onActExeAmount,calculateNutrition:e.calculateNutrition,onLoadActExe:e.onLoadActExe,optionCheckedState:e.state.checkedExercise});case"result":return l.a.createElement(k,{onRouteChange:e.onRouteChange,name:e.state.user.name,deficit:e.state.user.deficit,protein:e.state.protein,oil:e.state.oil,activity:e.state.activity,exercise:e.state.exercise,dailyCalorie:e.state.dailyCalorie,dailyCarbon:e.state.dailyCarbon});case"nextMove":return l.a.createElement(A,{onModifySpeed:e.onModifySpeed,modifySpeedUp:e.state.modifySpeedUp,modifySlowDown:e.state.modifySlowDown,onModifyDeficit:e.onModifyDeficit,onRouteChange:e.onRouteChange});default:return}},e.state=G,e}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(O,{name:this.state.user.name,onRouteChange:this.onRouteChange,isSignIn:this.state.isSignIn,getResult:this.getResult}),l.a.createElement("div",null,this.renderSwitch(this.state.route)),l.a.createElement("br",null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(66);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.5025ce07.chunk.js.map