(this.webpackJsonpdieta=this.webpackJsonpdieta||[]).push([[0],{37:function(e,a,t){e.exports=t(67)},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(14),s=t.n(l),r=(t(42),t(43),t(19)),c=t(9),o=t(10),m=t(13),d=t(12),u=function(e){var a=e.onDeficitChange;return i.a.createElement("div",null,i.a.createElement("div",{className:"br2",style:{backgroundColor:"#96CCFF"}},i.a.createElement("h3",null,"Deficit /day")),i.a.createElement("div",{className:"fw7 f8 pb3"},"How many calories would you like to reduce?"),i.a.createElement("div",{className:"flex items-center mb2"},i.a.createElement("input",{className:"mr2",type:"radio",id:"300",value:"300",name:"deficit",onClick:a}),i.a.createElement("label",{htmlFor:"300",className:"lh-copy"},"300")),i.a.createElement("div",{className:"flex items-center mb2"},i.a.createElement("input",{className:"mr2",type:"radio",id:"400",value:"400",name:"deficit",onClick:a}),i.a.createElement("label",{htmlFor:"400",className:"lh-copy"},"400")),i.a.createElement("div",{className:"flex items-center mb2"},i.a.createElement("input",{className:"mr2",type:"radio",id:"500",value:"500",name:"deficit",onClick:a}),i.a.createElement("label",{htmlFor:"500",className:"lh-copy"},"500")))},p=function(e){e.onRouteChange;var a=e.onCheckBeforeNextPage,t=e.nextPageMessage;return i.a.createElement("div",{className:"relative"},i.a.createElement("div",{className:" ma3"},i.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"next page",onClick:a}),i.a.createElement("span",{id:"spanId",className:"f5 link dark-pink absolute bottom-1"},t)))},h=(t(44),function(e){var a=e.onWeightChange,t=(e.onRouteChange,e.onDeficitChange),n=e.nextPageMessage,l=e.onCheckBeforeNextPage;return i.a.createElement("div",{className:"flex flex-column items-center"},i.a.createElement("div",{id:"cardDiv",className:"pa3 w5 w-70-ns"},i.a.createElement("article",{className:"ba pv1 br2 b--light-silver shadow-1"},i.a.createElement("div",{className:"ph3"},i.a.createElement("div",{className:"br2",style:{backgroundColor:"#96CCFF"}},i.a.createElement("h3",null,"Start to calculate!")),i.a.createElement("div",{className:"fw7 f8 pb3"},"Enter your body weight:"),i.a.createElement("div",{className:"measure"},i.a.createElement("label",{htmlFor:"name",className:"f6 b db mb2"},"Body Weight",i.a.createElement("span",{className:"normal black-60"}," kg")),i.a.createElement("div",{className:"flex flex-wrap"},i.a.createElement("input",{id:"weight",className:"input-reset ba b--black-60 pa2 db w3",type:"text","aria-describedby":"name-desc",onChange:a})),i.a.createElement("small",{id:"name-desc",className:"f6 black-60 db mb2"},"e.g. 78"))))),i.a.createElement("div",{id:"cardDiv",className:"pa3 w5 w-70-ns"},i.a.createElement("article",{className:"ba pv1 br2 b--light-silver shadow-1"},i.a.createElement("div",{className:"ph3"},i.a.createElement(u,{onDeficitChange:t})))),i.a.createElement(p,{className:"",onCheckBeforeNextPage:function(){return l("activity")},nextPageMessage:n}))}),g=(t(45),function(e){var a=e.style,t=e.item,n=e.name,l=e.onActExeAmount,s=e.optionCheckedState;return i.a.createElement("div",{id:"cardDiv",className:"pa2 dib w5 center"},i.a.createElement("article",{className:"ba pv1 br2 b--light-silver shadow-1"},i.a.createElement("div",{className:"ph3"},i.a.createElement("div",{className:"br2",style:a},i.a.createElement("h3",null,"Day ",t)),i.a.createElement("div",{className:"flex items-center mb2"},i.a.createElement("input",{className:"mr2",type:"radio",id:"".concat(n,"-rare"),value:"0",name:n,onChange:l,checked:s[0]}),i.a.createElement("label",{htmlFor:"".concat(n,"-rare"),className:"lh-copy"},"Rare")),i.a.createElement("div",{className:"flex items-center mb2"},i.a.createElement("input",{className:"mr2",type:"radio",id:"".concat(n,"-low"),value:"1",name:n,onChange:l,checked:s[1]}),i.a.createElement("label",{htmlFor:"".concat(n,"-low"),className:"lh-copy"},"Low")),i.a.createElement("div",{className:"flex items-center mb2"},i.a.createElement("input",{className:"mr2",type:"radio",id:"".concat(n,"-medium"),value:"2",name:n,onChange:l,checked:s[2]}),i.a.createElement("label",{htmlFor:"".concat(n,"-medium"),className:"lh-copy"},"Medium")),i.a.createElement("div",{className:"flex items-center mb2"},i.a.createElement("input",{className:"mr2",type:"radio",id:"".concat(n,"-high"),value:"3",name:n,onChange:l,checked:s[3]}),i.a.createElement("label",{htmlFor:"".concat(n,"-high"),className:"lh-copy"},"High")))))}),f=function(e){var a=e.name,t=e.onLoadActExe;return i.a.createElement("div",{className:"ma3"},i.a.createElement("input",{className:"b pv2 input-reset ba b--black bg-transparent grow pointer f5 dib",type:"submit",value:"Load setting of last week",name:a,onClick:t}))},b=t(8),v=(t(56),t(57),function(e){return i.a.createElement("div",{className:"w-80"},i.a.createElement(b.Table,null,i.a.createElement(b.Thead,null,i.a.createElement(b.Tr,{className:"white bg-mid-gray"},i.a.createElement(b.Th,null,"Type"),i.a.createElement(b.Th,null,"Low"),i.a.createElement(b.Th,null,"Mideum"),i.a.createElement(b.Th,null,"High"))),i.a.createElement(b.Tbody,null,e.data.map((function(e,a){return i.a.createElement(b.Tr,{className:"",key:e.Type},i.a.createElement(b.Td,null,i.a.createElement("span",{role:"img","aria-label":e.Type,className:"pr2"},e.icon),e.Type),i.a.createElement(b.Td,null,e.Low),i.a.createElement(b.Td,null,e.Medium),i.a.createElement(b.Td,null,e.High))})))))}),E=[{icon:"\ud83d\udc63",Type:"Steps",Low:"6,000",Medium:"10,000",High:"20,000"},{icon:"\u26f0",Type:"Mounting",Low:"0.5 hr",Medium:"1 hr",High:"2 hr"},{icon:"\ud83d\udcf6",Type:"Climbing stairs",Low:"0.5 hr",Medium:"1 hr",High:"2 hr"},{icon:"\ud83d\udeb6",Type:"Walking",Low:"1 hr",Medium:"2 hr",High:"3 hr"},{icon:"\ud83e\uddf9",Type:"House cleaning",Low:"1 hr",Medium:"2 hr",High:"3 hr"},{icon:"\ud83d\udeb4",Type:"Biking",Low:"1 hr",Medium:"2 hr",High:"3 hr"}],y=[{icon:"\ud83c\udfcb\ufe0f",Type:"Workout",Low:"1-1.5 hr, 12 sets",Medium:"1.5 hr, 15-20sets",High:"2 hr, 25sets"},{icon:"\ud83c\udfca",Type:"Cardio (winded)",Low:"0.5 hr",Medium:"1 hr",High:"1.5 hr"},{icon:"\ud83e\udd4a",Type:"HIIT, Tabata",Low:"10 min",Medium:"20 min",High:"30 min"},{icon:"\u26f9\ufe0f",Type:"Sports (ball, athletics...)",Low:"1 hr",Medium:"2 hr",High:"--"}],N=function(e){e.onRouteChange,e.calculateNutrition;var a=e.onActExeAmount,t=e.onLoadActExe,n=e.optionCheckedState,l=e.onCheckBeforeNextPage,s=e.nextPageMessage;return i.a.createElement("div",{className:"pa3 flex flex-column items-center"},i.a.createElement("legend",{className:"fw7 f4 pv3 tc"},"Amount of exercise/ day"),i.a.createElement(v,{data:y}),i.a.createElement(f,{name:"exercise",onLoadActExe:t}),i.a.createElement("div",{className:"flex flex-wrap"},["1","2","3","4","5","6","7"].map((function(e,t){return i.a.createElement(g,{key:e,style:{backgroundColor:"#96CCFF"},item:e,name:"exercise".concat(e),onActExeAmount:a,optionCheckedState:n[t]})}))),i.a.createElement(p,{nextPageMessage:s,onCheckBeforeNextPage:function(){l("result")}}))},w=function(e){e.onRouteChange;var a=e.onActExeAmount,t=e.onLoadActExe,n=e.optionCheckedState,l=e.onCheckBeforeNextPage,s=e.nextPageMessage;return i.a.createElement("div",{className:"pa3 flex flex-column items-center"},i.a.createElement("legend",{className:"fw7 f4 pv3 tc"},"Amount of activity/ day"),i.a.createElement(v,{data:E}),i.a.createElement(f,{name:"activity",onLoadActExe:t}),i.a.createElement("div",{className:"flex flex-wrap"},["1","2","3","4","5","6","7"].map((function(e,t){return i.a.createElement(g,{key:e,style:{backgroundColor:"#A463F2"},item:e,name:"activity".concat(e),onActExeAmount:a,optionCheckedState:n[t]})}))),i.a.createElement(p,{onCheckBeforeNextPage:function(){l("exercise")},nextPageMessage:s}))},k=(t(58),function(e){var a,t,n=e.item,l=e.protein,s=e.oil,r=e.activity,c=e.exercise,o=e.dailyCalorie,m=e.dailyCarbon;return a=0===r[n-1]?"Rare":1===r[n-1]?"Low":2===r[n-1]?"Medium":"High",t=0===c[n-1]?"Rare":1===c[n-1]?"Low":2===c[n-1]?"Medium":"High",i.a.createElement("div",{id:"cardDiv",className:"pa2 dib w5 center"},i.a.createElement("article",{className:"ba pv1 br2 b--light-silver shadow-1"},i.a.createElement("div",{className:"ph3"},i.a.createElement("div",{className:"bg-green br2"},i.a.createElement("h3",null,"Day ",n)),i.a.createElement("h4",{className:""},a," activity, ",t," exercise."),i.a.createElement("div",{className:""},i.a.createElement("dl",{className:"f5 lh-title mv2"},i.a.createElement("dt",{className:"dib b"},"Protein:"),i.a.createElement("dd",{className:"dib ml1 near-gray"},l," g")),i.a.createElement("dl",{className:"f5 lh-title mv2"},i.a.createElement("dt",{className:"dib b"},"Oil:"),i.a.createElement("dd",{className:"dib ml1 near-gray"},s," g")),i.a.createElement("dl",{className:"f5 lh-title mv2"},i.a.createElement("dt",{className:"dib b"},"Carbohydrate:"),i.a.createElement("dd",{className:"dib ml1 near-gray"},m[n-1]," g")),i.a.createElement("dl",{className:"f5 lh-title mv2"},i.a.createElement("dt",{className:"dib b"},"Total calorie: "),i.a.createElement("dd",{className:"dib ml1 near-gray"},o[n-1]," Kcal"))))))}),C=function(e){var a=e.name,t=e.onRouteChange,n=e.deficit,l=e.protein,s=e.oil,r=e.activity,c=e.exercise,o=e.dailyCalorie,m=e.dailyCarbon,d="Guest"!==a?i.a.createElement("div",{className:"pv3"},i.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign out",onClick:function(){t("signin")}})):i.a.createElement("div",{className:"pv3"},i.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign up now to save calculation result!",onClick:function(){t("signup")}}));return i.a.createElement("div",{className:"pa3 flex flex-column items-center"},i.a.createElement("legend",{className:"fw7 f4 pv2 tc"},a,", your daily recommended intakes are:"),i.a.createElement("div",{className:"b"},"Deficit : ",n," Kcal"),i.a.createElement("div",{className:"flex flex-wrap"},["1","2","3","4","5","6","7"].map((function(e){return i.a.createElement(k,{key:e,item:e,protein:l,oil:s,activity:r,exercise:c,dailyCalorie:o,dailyCarbon:m})}))),d)},x=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).onEmailChange=function(a){e.setState({email:a.target.value})},e.onPasswordChange=function(a){e.setState({password:a.target.value})},e.onSignIn=function(){var a=e.state,t=a.email,n=a.password;t&&n?fetch("https://gentle-badlands-25513.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state)}).then((function(e){return e.json()})).then((function(a){a.name?(e.props.refreshWholeUser(a),e.props.onRouteChange("howItWorks"),e.props.onIsSignIn()):e.setState({message:a})})).catch(console.log):e.setState({message:"Please fill up the blanks."})},e.state={email:"",password:"",message:""},e}return Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure center"},i.a.createElement("fieldset",{id:"sign_in",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Sign In"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"pa2 input-reset ba hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{className:"b pa2 input-reset ba hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),i.a.createElement("div",{className:""},i.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in",onClick:this.onSignIn})),i.a.createElement("div",{className:"lh-copy mt3"},i.a.createElement("p",{className:"f5 link dark-pink db"},this.state.message)))))}}]),t}(n.Component),S=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).onGuestLogin=function(){e.props.loadUser({name:"Guest",email:"guest",weight:0,deficit:0}),e.props.onRouteChange("howItWorks"),e.props.onIsSignIn()},e.onNameChange=function(a){e.setState({name:a.target.value})},e.onEmailChange=function(a){e.setState({email:a.target.value})},e.onPasswordChange=function(a){e.setState({password:a.target.value})},e.onSignUpFetch=function(e,a,t){var n={name:e,email:a,password:t};return fetch("https://gentle-badlands-25513.herokuapp.com/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).catch(console.log)},e.onSignUp=function(){var a=e.state,t=a.name,n=a.email,i=a.password;t&&n&&i?"Guest"!==e.props.name?(console.log("normal user sign up"),e.onSignUpFetch(t,n,i).then((function(a){a.name?(e.props.refreshWholeUser(a),e.props.onRouteChange("howItWorks"),e.props.onIsSignIn()):e.setState({message:a})})).catch(console.log)):(console.log("guest user sign up"),e.onSignUpFetch(t,n,i).then((function(a){if(a.name){var t=e.props,n=t.deficit,i=t.dailyCalorie,l=t.dailyCarbon;e.props.onSaveCalculation(a.email,n,i,l),e.props.onRouteChange("result"),e.props.loadUser(a),e.props.onIsSignIn()}else e.setState({message:a})})).catch(console.log)):e.setState({message:"Enter your data please."})},e.state={name:"",email:"",password:"",message:""},e}return Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure center"},i.a.createElement("fieldset",{id:"sign_in",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f4 fw6 ph0 mh0 flex"},i.a.createElement("div",null,"Sign Up"),i.a.createElement("div",{className:"pl5"},i.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"\u96a8\u4fbf\u901b\u901b",onClick:this.onGuestLogin}))),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),i.a.createElement("input",{className:"pa2 input-reset ba hover-bg-black hover-white w-50",type:"name",name:"name",id:"name",onChange:this.onNameChange})),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"pa2 input-reset ba hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{className:"b pa2 input-reset ba hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),i.a.createElement("div",{className:""},i.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign up",onClick:this.onSignUp})),i.a.createElement("div",{className:"lh-copy mt3"},i.a.createElement("p",{className:"f5 link dark-pink db"},this.state.message)))))}}]),t}(n.Component),M=function(e){var a=e.onRouteChange;return i.a.createElement("div",{className:"mt5"},i.a.createElement("article",{className:"mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-green dark-green mb5"},i.a.createElement("h1",{className:"fw6 f3 f2-ns lh-title mt0 mb3"},"Your Calorie Calculator."),i.a.createElement("h2",{className:"fw2 f4 lh-copy mt0 mb3 ph4"},"\u91dd\u5c0d\u9ad4\u91cd\u3001\u6bcf\u65e5\u6d3b\u52d5\u91cf\u53ca\u904b\u52d5\u91cf\uff0c\u53ca\u60f3\u8981\u7684\u6e1b\u91cd\u901f\u5ea6\uff0c\u5e6b\u4f60\u8a08\u7b97\u6bcf\u65e5\u5361\u8def\u91cc\u3002"),i.a.createElement("div",{className:"pt3"},i.a.createElement("p",{className:"f5 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib",onClick:function(){a("howItWorks")}},"Learn More"))))},D=(t(59),function(e){var a=e.modifySpeedUp,t=e.modifySlowDown,n=e.onModifyDeficit;return i.a.createElement("div",null,a&&!t?i.a.createElement("div",null,i.a.createElement("div",{className:"flex items-center mb2"},i.a.createElement("input",{className:"mr2",type:"radio",id:"-100",value:"-100",name:"speedup",onClick:n}),i.a.createElement("label",{htmlFor:"-100",className:"lh-copy"},"-100 Kcal")),i.a.createElement("div",{className:"flex items-center mb2"},i.a.createElement("input",{className:"mr2",type:"radio",id:"-200",value:"-200",name:"speedup",onClick:n}),i.a.createElement("label",{htmlFor:"-200",className:"lh-copy"},"-200 Kcal")),i.a.createElement("div",{className:"flex items-center mb2"},i.a.createElement("input",{className:"mr2",type:"radio",id:"-300",value:"-300",name:"speedup",onClick:n}),i.a.createElement("label",{htmlFor:"-300",className:"lh-copy"},"-300 Kcal"))):!a&&t?i.a.createElement("div",null,i.a.createElement("div",{className:"flex items-center mb2"},i.a.createElement("input",{className:"mr2",type:"radio",id:"+100",value:"+100",name:"slowdown",onClick:n}),i.a.createElement("label",{htmlFor:"+100",className:"lh-copy"},"+100 Kcal")),i.a.createElement("div",{className:"flex items-center mb2"},i.a.createElement("input",{className:"mr2",type:"radio",id:"+200",value:"+200",name:"slowdown",onClick:n}),i.a.createElement("label",{htmlFor:"+200",className:"lh-copy"},"+200 Kcal")),i.a.createElement("div",{className:"flex items-center mb2"},i.a.createElement("input",{className:"mr2",type:"radio",id:"+300",value:"+300",name:"slowdown",onClick:n}),i.a.createElement("label",{htmlFor:"+300",className:"lh-copy"},"+300 Kcal"))):null)}),I=function(e){var a=e.maintainRate,t=e.deficit,n=e.onModifySpeed,l=e.modifySpeedUp,s=e.modifySlowDown,r=e.onModifyDeficit;e.onRouteChange;return i.a.createElement("div",{className:""},i.a.createElement("div",{className:"br2",style:{backgroundColor:"#96CCFF"}},i.a.createElement("h3",null,"Consider these factors:")),i.a.createElement("div",{className:""},i.a.createElement("div",{className:"b lh-copy pb2"},"- Is the rate normal?",i.a.createElement("br",null),"- Keep losing weight for 3 weeks?",i.a.createElement("br",null),"- Feel tired?",i.a.createElement("br",null),"- Expect more stress next week?"),i.a.createElement("div",{className:"pv1"},i.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Maintain Current Rate",name:"maintain",onClick:n}),i.a.createElement("small",{id:"name-desc",className:"f6 black-60 db mb2"},"Maintain the current deficit."),a?i.a.createElement("p",null,"Maintain deficit: ",i.a.createElement("span",null,t)," Kcal."):null),i.a.createElement("div",{className:"pv1"},i.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Speed Up, eat less",name:"speedUp",onClick:n}),i.a.createElement("small",{id:"name-desc",className:"f6 black-60 db mb2"},"Enlarge calorie deficit, eat less.")),i.a.createElement(D,{modifySpeedUp:l,onModifyDeficit:r}),i.a.createElement("div",{className:"pv1"},i.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Slow Down, eat more",name:"slowDown",onClick:n}),i.a.createElement("small",{id:"name-desc",className:"f6 black-60 db mb2"},"Minimize calorie deficit, eat more.")),i.a.createElement(D,{modifySlowDown:s,onModifyDeficit:r})))},O=function(e){var a=e.showGuide,t=e.RateGuideSuggestions;return a?i.a.createElement("div",{id:"cardDiv",className:"pa3"},i.a.createElement("article",{className:"ba pv1 br2 b--light-silver shadow-1"},i.a.createElement("div",{className:"ph3"},i.a.createElement("div",{className:"br2",style:{backgroundColor:"#96CCFF"}},i.a.createElement("h3",null,t.rate)),i.a.createElement("div",{className:" b lh-copy pb2"},t.result),i.a.createElement("p",{className:"mb2"},t.suggestion1),i.a.createElement("p",null,t.suggestion2)))):null},R=[{rate:"Lose 0.5% - 1.5%",result:"Normal rate, keep going.",suggestion1:'If you have been losing weight with this rate over 3 -4weeks, a 2 - 7 day "break" are suggested.',suggestion2:"Add 200 - 400 Kcal per day during break."},{rate:"Lose 1.5% - 2% or more",result:"A little bit too fast, keep watching it.",suggestion1:'If you have been losing weight with this rate over 2 - 3 weeks, highly recommend you to take a week "break".',suggestion2:"Add 300 - 500 Kcal per day during break."},{rate:"Lose less than 0.5%",result:"Keep trying, you just need more practice.",suggestion1:"Try to record your calorie with more accuracy, and have a steady deficit every day.",suggestion2:"If the above two things you are doing right, and you are stuck here for more then 2 weeks, than speed up."}],A=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).onThisWeekInput=function(a){e.setState({weightThisWeek:parseFloat(a.target.value)})},e.onLastWeekInput=function(a){e.setState({weightLastWeek:parseFloat(a.target.value)})},e.rateCalculation=function(){e.setState({error:""});var a=e.state,t=a.weightThisWeek,n=a.weightLastWeek;if(isNaN(t)||isNaN(n))e.setState({error:"Invalid number"});else if(t<=1e3&&t>=40&&n<=1e3&&n>=40){var i=Math.round((t-n)/n*1e4)/100;e.setState({rate:i,showGuide:!0})}else e.setState({error:"Invalid number"})},e.state={showGuide:!1,weightThisWeek:0,weightLastWeek:0,rate:0,error:""},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.rate,n=a.showGuide,l=t/100;return i.a.createElement("div",{className:"flex flex-column items-center"},i.a.createElement("div",{className:"w5 w-70-ns"},i.a.createElement("div",{id:"cardDiv",className:"pa3 "},i.a.createElement("article",{className:"ba pv1 br2 b--light-silver shadow-1"},i.a.createElement("div",{className:"ph3"},i.a.createElement("div",{className:"br2",style:{backgroundColor:"#96CCFF"}},i.a.createElement("h3",null,"What's the next?",this.state.rate,l,this.state.weightThisWeek)),i.a.createElement("div",{className:"fw7 f8 "},"Calculate your losing rate:"),i.a.createElement("div",{className:"measure"},i.a.createElement("label",{htmlFor:"name",className:"f6 b db mb2"},"Average weight This Week",i.a.createElement("span",{className:"normal black-60"}," kg")),i.a.createElement("input",{id:"weightThisWeek",className:"input-reset ba b--black-60 pa2 mb2 db w3",type:"text","aria-describedby":"name-desc",onChange:this.onThisWeekInput})),i.a.createElement("div",{className:"measure"},i.a.createElement("label",{htmlFor:"name",className:"f6 b db mb2"},"Average weight Last Week",i.a.createElement("span",{className:"normal black-60"}," kg")),i.a.createElement("input",{id:"weightLastWeek",className:"input-reset ba b--black-60 pa2 mb2 db w3",type:"text","aria-describedby":"name-desc",onChange:this.onLastWeekInput})),i.a.createElement("div",{className:"pb3 flex flex-wrap"},i.a.createElement("input",{className:"ph3 pv2 input-reset ba b--black bg-transparent grow pointer b f6 dib",type:"submit",value:"submit",onClick:this.rateCalculation}),i.a.createElement("span",{className:"f5 link dark-pink dib ml2 pt3"},this.state.error)),i.a.createElement("p",null,i.a.createElement("span",{className:"pl1"},this.state.rate)," % weight change.")))),l<=-.005&&l>-.015?i.a.createElement(O,{showGuide:n,RateGuideSuggestions:R[0]}):l<=-.015?i.a.createElement(O,{showGuide:n,RateGuideSuggestions:R[1]}):i.a.createElement(O,{showGuide:n,RateGuideSuggestions:R[2]})),i.a.createElement("div",{id:"cardDiv",className:"pa3 w5 w-70-ns"},i.a.createElement("article",{className:"ba pv1 br2 b--light-silver shadow-1"},i.a.createElement("div",{className:"ph3"},i.a.createElement(I,{maintainRate:this.props.maintainRate,deficit:this.props.deficit,onModifySpeed:this.props.onModifySpeed,modifySpeedUp:this.props.modifySpeedUp,modifySlowDown:this.props.modifySlowDown,onModifyDeficit:this.props.onModifyDeficit})))),i.a.createElement(p,{nextPageMessage:this.props.nextPageMessage,onCheckBeforeNextPage:function(){e.props.onCheckBeforeNextPage("activity")}}))}}]),t}(n.Component),j=t(20),P=t(25),T=t(28),L=(t(60),function(e){var a=e.isSignIn,t=e.onRouteChange,n=e.getResult;return i.a.createElement(T.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},i.a.createElement(T.a.Brand,{className:"grow pointer",onClick:function(){t("home")}},"Dieta"),i.a.createElement(T.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),i.a.createElement(T.a.Collapse,{id:"responsive-navbar-nav"},i.a.createElement(j.a,{className:"mr-auto"},i.a.createElement(P.a,{title:"Menu",id:"collasible-nav-dropdown"},i.a.createElement(P.a.Item,{href:"#howItWorks",onClick:function(e){t("howItWorks"),e.preventDefault()}},"\u539f\u7406"),i.a.createElement(P.a.Item,{href:"#calculation",onClick:function(e){t("calculation"),e.preventDefault()}},"\u6e1b\u8102\u958b\u59cb"),i.a.createElement(P.a.Item,{href:"#nextMove",onClick:function(e){t("nextMove"),e.preventDefault()}},"\u6e1b\u8102\u671f\u9593"),i.a.createElement(P.a.Item,{href:"#getResult",onClick:function(e){n(),e.preventDefault()}},"\u4e0a\u6b21\u8a08\u7b97\u7d50\u679c"))),a?i.a.createElement(j.a,null,i.a.createElement(j.a.Link,{href:"signin",onClick:function(e){t("signin"),e.preventDefault()}},"Sign Out")):i.a.createElement(j.a,null,i.a.createElement(j.a.Link,{href:"#signin",onClick:function(e){t("signin"),e.preventDefault()}},"Sign In"),i.a.createElement(j.a.Link,{href:"#signup",onClick:function(e){t("signup"),e.preventDefault()}},"Sign Up"))))}),W=(t(64),function(e){var a=e.title,t=e.description;return i.a.createElement("div",{className:"pa2 pv3 center w5 "},i.a.createElement("article",{className:"ba pv1 br2 b--light-silver shadow-1"},i.a.createElement("div",{className:"ph3"},i.a.createElement("div",{id:"colorDiv",className:"br2"},i.a.createElement("h3",null,a)),i.a.createElement("p",{id:"description"},t))))}),U=[{title:"Why use Dieta?",description:"A weekly plan helps you loss weight easily!"},{title:"How it works?",description:"Based on your weight, your life style, and the speed of losing weight, calculate the daily calorie."},{title:"Nutrition",description:"A high level protein is needed to prevent a muscle losing. Also the carbohydrate is remained to maintain our body function."},{title:"Weekly adjustment",description:"According to your losing rate, life style, tiredness to decide the next move."}],F=[{title:"Getting start",description:"First step, enter your body weight and estimate your daily activity and exercise amount."},{title:"How can I know the amount?",description:"number of steps, sets of work out, hours of housework can be an index, follow our instruction on the top of activity and exercise page."},{title:"Check my last record",description:"Select latest result on menu"},{title:"Next move?",description:"Enter your average weight this week and last week to get an advise!"}],B=(t(65),function(){return i.a.createElement("div",{className:""},i.a.createElement("div",{className:"flex flex-wrap",id:"yellow"},U.map((function(e,a){return i.a.createElement(W,{key:e.title,title:e.title,description:e.description})}))),i.a.createElement("div",{className:"flex flex-wrap",id:"blue"},F.map((function(e,a){return i.a.createElement(W,{key:e.title,title:e.title,description:e.description})}))))}),H=document.getElementById("modal-root"),G=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).el=document.createElement("div"),e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){H.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){H.removeChild(this.el)}},{key:"render",value:function(){return s.a.createPortal(this.props.children,this.el)}}]),t}(n.Component),K=function(e){var a=e.showNoResultModal,t=e.showNoActExeModal,n=e.onHideModal;return a?i.a.createElement("div",{className:"modalClass"},i.a.createElement("div",{className:"pa2 pv3 center w5"},i.a.createElement("article",{className:"ba pv1 br2 b--light-silver shadow-1 bg-white"},i.a.createElement("div",{className:"ph3 tc"},i.a.createElement("div",{id:"colorDiv",className:"br2 bg-orange"},i.a.createElement("h3",null,"No record.")),i.a.createElement("p",{id:"description"},"Let's get start from calculation."),i.a.createElement("div",{className:"relative pb3"},i.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Got it!",onClick:function(){n("showNoResultModal")}})))))):t?i.a.createElement("div",{className:"modalClass"},i.a.createElement("div",{className:"pa2 pv3 center w5"},i.a.createElement("article",{className:"ba pv1 br2 b--light-silver shadow-1 bg-white"},i.a.createElement("div",{className:"ph3 tc"},i.a.createElement("div",{id:"colorDiv",className:"br2 bg-orange"},i.a.createElement("h3",null,"No record.")),i.a.createElement("p",{id:"description"},"Please choose options."),i.a.createElement("div",{className:"relative pb3"},i.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Got it!",onClick:function(){n("showNoActExeModal")}})))))):null},J=[[!1,!1,!1,!1],[!1,!1,!1,!1],[!1,!1,!1,!1],[!1,!1,!1,!1],[!1,!1,!1,!1],[!1,!1,!1,!1],[!1,!1,!1,!1]],_={user:{name:"",email:"",weight:0,deficit:0},isSignIn:!1,route:"home",nextPageMessage:"",activity:[],exercise:[],protein:0,oil:0,dailyCalorie:[],dailyCarbon:[],checkedActivity:J,checkedExercise:J,maintainRate:!1,modifySpeedUp:!1,modifySlowDown:!1,modifyDeficit:0,showNoResultModal:!1,showNoActExeModal:!1},z=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).fetchUser=function(e){return fetch("https://gentle-badlands-25513.herokuapp.com/user",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})}).then((function(e){return e.json()})).catch(console.log)},e.refreshWholeUser=function(a){console.log("refreshWholeUser",a),e.state.user({data:a})},e.refreshPartialUser=function(a){var t=a.name,n=a.email;return e.setState((function(e){var a=Object.assign({},e.user);return a.name=t,a.email=n,{user:a}})),t},e.loadUser=function(a){var t=a.name,n=a.email;return e.setState((function(e){var a=Object.assign({},e.user);return a.name=t,a.email=n,{user:a}})),t},e.reLoadUser=function(){fetch("https://gentle-badlands-25513.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.user.email})}).then((function(e){return e.json()})).then((function(a){a.name&&e.loadUser(a)})).catch(console.log)},e.deleteUserNumber=function(){e.setState((function(e){var a=Object.assign({},e.user);return a.weight=0,a.deficit=0,{user:a}}))},e.onIsSignIn=function(){e.setState({isSignIn:!0})},e.onWeightChange=function(a){var t=a.target.value;e.setState((function(e){var a=Object.assign({},e.user);return a.weight=parseFloat(t),{user:a}}))},e.onDeficitChange=function(a){var t=a.target.value;e.setState((function(e){var a=Object.assign({},e.user);return a.deficit=parseInt(t),{user:a}}))},e.onCheckBeforeNextPage=function(a){e.setState({nextPageMessage:""});var t=e.state.route;switch(a){case"activity":if("calculation"===t){var n=e.state.user,i=n.weight,l=n.deficit;!isNaN(i)&&i<=1e3&&i>=40?0!==l?e.onRouteChange("activity"):e.setState({nextPageMessage:"Choose deficit."}):e.setState({nextPageMessage:"Invalid weight."})}else if("nextMove"===t){var s=e.state,r=s.maintainRate,c=s.modifyDeficit;!1===r&&0===c?e.setState({nextPageMessage:"Choose deficit."}):e.onRouteChange("activity")}break;case"exercise":var o=e.state.activity;7!==o.length||o.includes(void 0)?(e.setState({nextPageMessage:"Choose options."}),console.log("message change")):(e.onRouteChange("exercise"),e.onDeleteActExeOption("activity"));break;case"result":var m=e.state.exercise;7!==m.length||m.includes(void 0)?e.setState({nextPageMessage:"Choose options."}):(e.onRouteChange("result"),e.onDeleteActExeOption("exercise"),e.calculateNutrition());break;default:console.log("default")}},e.onRouteChange=function(a){e.state.isSignIn?"signin"===a?(e.setState(_),console.log("reset initialState",_)):("calculation"===a?e.deleteUserNumber():"nextMove"===a&&e.reLoadUser(),e.setState({route:a})):"calculation"===a||"nextMove"===a||"result"===a||"signin"===a?e.setState({route:"signin"}):e.setState({route:a}),window.scrollTo(0,0)},e.onActExeAmount=function(a){var t,n=a.target.value,i=a.target.name,l=i.slice(-1),s=i.slice(0,-1),c="checked"+s.slice(0,1).toUpperCase()+s.slice(1),o=e.state[s].slice();o[l-1]=parseInt(n);var m=e.state[c].slice();m[l-1]=[!1,!1,!1,!1],m[l-1][n]=!0,e.setState((t={},Object(r.a)(t,s,o),Object(r.a)(t,c,m),t))},e.onDeleteActExeOption=function(a){var t="checked"+a.slice(0,1).toUpperCase()+a.slice(1);e.setState(Object(r.a)({},t,J))},e.onLoadActExe=function(a){var t=a.target.name,n="checked"+t.slice(0,1).toUpperCase()+t.slice(1);fetch("https://gentle-badlands-25513.herokuapp.com/".concat(t),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.user.email})}).then((function(e){return e.json()})).then((function(a){if("No saved record."===a)e.onShowModal("showNoActExeModal");else{var i;delete a.email;var l=Object.values(a);e.setState((i={},Object(r.a)(i,t,l),Object(r.a)(i,n,e.getWeekOption(l)),i))}})).catch(console.log)},e.getWeekOption=function(e){for(var a=[],t=0;t<7;t++){var n=[!1,!1,!1,!1];n[e[t]]=!0,a.push(n)}return a},e.calculateNutrition=function(){for(var a=e.state.user,t=a.name,n=a.email,i=a.weight,l=a.deficit,s=e.state,r=s.activity,c=s.exercise,o=s.modifyDeficit,m=2*i,d=1*i,u=[],p=[],h=parseInt(l)+parseInt(-o),g=0;g<7;g++)u[g]=parseInt(2.2*i*(12+parseInt(r[g])+parseInt(c[g])))-h,p[g]=parseInt((u[g]-4*m-9*d)/4);e.setState({protein:m,oil:d,dailyCalorie:u,dailyCarbon:p}),e.setState((function(e){var a=Object.assign({},e.user);return a.deficit=h,{user:a}})),"Guest"===t?console.log("guest","don't save calculation"):e.onSaveCalculation(n,h,u,p)},e.onSaveCalculation=function(a,t,n,i){var l=e.state.user.weight,s=e.state,r=s.activity,c=s.exercise;fetch("https://gentle-badlands-25513.herokuapp.com/saveData",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,weight:l,deficit:t,activity:r,exercise:c,dailyCalorie:n,dailyCarbon:i})}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch(console.log)},e.onModifySpeed=function(a){"maintain"===a.target.name?e.setState({maintainRate:!0,modifyDeficit:0,modifySpeedUp:!1,modifySlowDown:!1}):"speedUp"===a.target.name?e.setState({maintainRate:!1,modifySpeedUp:!0,modifySlowDown:!1}):"slowDown"===a.target.name&&e.setState({maintainRate:!1,modifySpeedUp:!1,modifySlowDown:!0})},e.onModifyDeficit=function(a){e.setState({maintainRate:!1,modifyDeficit:a.target.value})},e.getResult=function(){fetch("https://gentle-badlands-25513.herokuapp.com/result",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.user.email})}).then((function(e){return e.json()})).then((function(a){var t=a.user,n=t.weight,i=t.deficit,l=a.userCalorie,s=a.userCarbon,r=a.userActivity,c=a.userExercise;0===n?(e.onShowModal("showNoResultModal"),e.onRouteChange("calculation")):(e.setState((function(e){var a=Object.assign({},e.user);return a.weight=n,a.deficit=i,{user:a}})),delete l.email,delete s.email,delete r.email,delete c.email,e.setState({protein:2*n,oil:n,dailyCalorie:Object.values(l),dailyCarbon:Object.values(s),activity:Object.values(r),exercise:Object.values(c)}),e.onRouteChange("result"))})).catch(console.log)},e.onShowModal=function(a){e.setState(Object(r.a)({},a,!0))},e.onHideModal=function(a){e.setState(Object(r.a)({},a,!1))},e.renderSwitch=function(a){switch(a){case"home":return i.a.createElement(M,{onRouteChange:e.onRouteChange});case"signin":return i.a.createElement(x,{refreshWholeUser:e.refreshWholeUser,onRouteChange:e.onRouteChange,onIsSignIn:e.onIsSignIn});case"signup":return i.a.createElement(S,{name:e.state.user.name,refreshWholeUser:e.refreshWholeUser,onRouteChange:e.onRouteChange,onIsSignIn:e.onIsSignIn,onSaveCalculation:e.onSaveCalculation,deficit:e.state.user.deficit,dailyCalorie:e.state.dailyCalorie,dailyCarbon:e.state.dailyCarbon});case"howItWorks":return i.a.createElement(B,null);case"calculation":return i.a.createElement(h,{onWeightChange:e.onWeightChange,onDeficitChange:e.onDeficitChange,nextPageMessage:e.state.nextPageMessage,onCheckBeforeNextPage:e.onCheckBeforeNextPage});case"activity":return i.a.createElement(w,{onActExeAmount:e.onActExeAmount,onLoadActExe:e.onLoadActExe,optionCheckedState:e.state.checkedActivity,onDeleteActExeOption:e.onDeleteActExeOption,nextPageMessage:e.state.nextPageMessage,onCheckBeforeNextPage:e.onCheckBeforeNextPage});case"exercise":return i.a.createElement(N,{onActExeAmount:e.onActExeAmount,onLoadActExe:e.onLoadActExe,optionCheckedState:e.state.checkedExercise,onDeleteActExeOption:e.onDeleteActExeOption,nextPageMessage:e.state.nextPageMessage,onCheckBeforeNextPage:e.onCheckBeforeNextPage});case"result":return i.a.createElement(C,{onRouteChange:e.onRouteChange,name:e.state.user.name,deficit:e.state.user.deficit,protein:e.state.protein,oil:e.state.oil,activity:e.state.activity,exercise:e.state.exercise,dailyCalorie:e.state.dailyCalorie,dailyCarbon:e.state.dailyCarbon});case"nextMove":return i.a.createElement(A,{maintainRate:e.state.maintainRate,deficit:e.state.user.deficit,onModifySpeed:e.onModifySpeed,modifySpeedUp:e.state.modifySpeedUp,modifySlowDown:e.state.modifySlowDown,onModifyDeficit:e.onModifyDeficit,nextPageMessage:e.state.nextPageMessage,onCheckBeforeNextPage:e.onCheckBeforeNextPage});default:return}},e.state=JSON.parse(JSON.stringify(_)),e}return Object(o.a)(t,[{key:"render",value:function(){var e=i.a.createElement(G,null,i.a.createElement(K,{showNoResultModal:this.state.showNoResultModal,showNoActExeModal:this.state.showNoActExeModal,onHideModal:this.onHideModal}));return i.a.createElement("div",null,i.a.createElement(L,{name:this.state.user.name,onRouteChange:this.onRouteChange,isSignIn:this.state.isSignIn,getResult:this.getResult}),i.a.createElement("div",null,this.renderSwitch(this.state.route)),e)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(66);s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.206824af.chunk.js.map