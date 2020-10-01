(this.webpackJsonpwhisper=this.webpackJsonpwhisper||[]).push([[0],{17:function(e,t,a){e.exports=a(29)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),o=a.n(s),u=a(7),c=a(8),i=a(16),l="http://localhost:4000/",m="messages/new/",h="messages/listRequest/",p="chats/new/",d="chats/listRequest/",f="users/login/",g="users/new/",v="CHANGE_CURRENT_USER",E="CHANGE_CURRENT_CHAT",b="REFRESH_CHATS_LIST",y="SET_AUTHENTICATION_RESULT",w="SET_LAST_ERROR";function S(e){return{type:v,payload:e}}function C(e){return{type:E,payload:e}}function j(e){return{type:b,payload:e}}function O(e){return{type:y,payload:e}}function U(e,t){return{type:w,payload:{status:e,message:t}}}function k(e){return function(t){var a=localStorage.token;a&&fetch("".concat(l).concat(d,"?user_id=").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}}).then((function(e){return e.ok?e.json():(localStorage.removeItem("token"),{status:e.status,message:e.statusText})})).then((function(e){e.message?(t(U(e.status,e.message)),localStorage.removeItem("token")):t(j(e))})).catch((function(e){console.log("error",e)}))}}var N="ADD_NEW_MESSAGE",A="MESSAGE_WAS_RECEIVED",M="REFRESH_MESSAGES_LIST";function T(e){return{type:N,payload:e}}function _(e){return{type:A,payload:e}}function L(e){return function(t){var a=localStorage.token;a&&fetch("".concat(l).concat(h,"?chat_id=").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}}).then((function(e){return e.ok?e.json():(localStorage.removeItem("token"),{status:e.status,message:e.statusText})})).then((function(e){e.message?(t(U(e.status,e.message)),localStorage.removeItem("token")):t({type:M,payload:e})})).catch((function(e){console.log("error",e)}))}}var I=Object(c.c)({messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return e.concat(t.payload);case M:return t.payload;default:return e}},wasMessageReceived:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return t.payload;default:return e}},currentUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return t.payload;default:return e}},currentChat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return t.payload;default:return e}},chatsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return t.payload;default:return e}},isUserAuthenticated:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return t.payload;default:return e}},lastError:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return t.payload;default:return e}}});a(27);var R=a(1),x=a(2),V=a(4),D=a(3),P=a(5),F=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(V.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",users:[]},a.onSubmit=function(e){e.preventDefault(),a.props.onSubmitNewChat(a.state.name,[a.props.currentUserId]),a.setState({name:"",users:[]})},a.updateChatNameValue=function(e){a.setState({name:e.target.value})},a}return Object(P.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h1",null,"Create new chat"),r.a.createElement("input",{name:"chatName",placeholder:"chat name",type:"text",value:this.state.name,onChange:this.updateChatNameValue}),r.a.createElement("button",{type:"submit"},"Create"))}}]),t}(r.a.Component),H=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(V.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(r)))).state={newMessage:""},a.onSubmit=function(e){e.preventDefault(),a.props.onSubmitNewMessage(a.state.newMessage),a.setState({newMessage:""})},a.updateInputValue=function(e){a.setState({newMessage:e.target.value})},a}return Object(P.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h1",null,"Send new message"),r.a.createElement("input",{name:"userMessage",placeholder:"message text",type:"text",value:this.state.newMessage,onChange:this.updateInputValue}),r.a.createElement("button",{type:"submit"},"Send message"))}}]),t}(r.a.Component);function G(e){var t=new Date(e.time),a=t.getHours(),n=t.getMinutes(),s=t.getDate(),o=t.getMonth()+1,u=t.getFullYear();return r.a.createElement("div",null,r.a.createElement("p",null,a,":",n," ",s,".",o,".",u))}function B(e){var t=e.message;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,t.authorName)),r.a.createElement("div",null,r.a.createElement("p",null,t.authorEmail)),r.a.createElement("div",null,r.a.createElement("p",null,t.text)),r.a.createElement(G,{time:t.time}))}var J=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(V.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(s)))).componentDidMount=function(){var e=a.props.currentChat;e&&e._id&&a.props.fetchMessagesList(e._id)},a.renderMessageList=function(){var e=a.props.messages;if(e&&e.length)return e.map((function(e){return r.a.createElement(B,{key:e._id,message:e})}))},a}return Object(P.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"MessageList"},this.renderMessageList())}}]),t}(r.a.Component),z=Object(u.b)((function(e){return{messages:e.messages,currentChat:e.currentChat}}),(function(e){return{fetchMessagesList:function(t){return e(L(t))}}}))(J),W=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(V.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(s)))).onSelectChat=function(){var e=a.props.chat;a.props.onSelectChat(e)},a.renderUsersList=function(e){if(e&&e.length)return e.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",null,e.name))}))},a}return Object(P.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.props.chat;return r.a.createElement("div",{onClick:this.onSelectChat},r.a.createElement("div",null,r.a.createElement("p",null,e.name)),r.a.createElement("div",null,r.a.createElement("h3",null,"Chat users:"),r.a.createElement("br",null),r.a.createElement("div",null,this.renderUsersList(e.users))))}}]),t}(r.a.Component),q=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(V.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(s)))).renderChatList=function(){var e=a.props,t=e.chatsList,n=e.changeCurrentChat;if(t&&t.length)return t.map((function(e){return r.a.createElement(W,{onSelectChat:n,key:e._id,chat:e})}))},a}return Object(P.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.currentUser._id;e&&this.props.fetchChatsList(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"ChatList"},this.renderChatList())}}]),t}(r.a.Component),Y=Object(u.b)((function(e){return{chatsList:e.chatsList,currentUser:e.currentUser}}),(function(e){return{fetchChatsList:function(t){return e(k(t))},changeCurrentChat:function(t){return e(C(t))}}}))(q),$=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(V.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.onSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.email,a.state.password),a.setState({email:"",password:""})},a.updateUserEmailValue=function(e){a.setState({email:e.target.value})},a.updateUserPasswordValue=function(e){a.setState({password:e.target.value})},a}return Object(P.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h1",null,"Login"),r.a.createElement("label",null,"User email"),r.a.createElement("input",{name:"userEmail",placeholder:"User email",type:"text",value:this.state.email,onChange:this.updateUserEmailValue}),r.a.createElement("br",null),r.a.createElement("label",null,"User password"),r.a.createElement("input",{name:"userPassword",placeholder:"User password",type:"text",value:this.state.password,onChange:this.updateUserPasswordValue}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Submit"))}}]),t}(r.a.Component),K=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(V.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",name:"",password:""},a.onSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.email,a.state.name,a.state.password),a.setState({email:"",name:"",password:""})},a.updateUserEmailValue=function(e){a.setState({email:e.target.value})},a.updateUserNameValue=function(e){a.setState({name:e.target.value})},a.updateUserPasswordValue=function(e){a.setState({password:e.target.value})},a}return Object(P.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h1",null,"New user registration"),r.a.createElement("label",null,"User email"),r.a.createElement("input",{name:"userEmail",placeholder:"User email",type:"text",value:this.state.email,onChange:this.updateUserEmailValue}),r.a.createElement("br",null),r.a.createElement("label",null,"User name"),r.a.createElement("input",{name:"userName",placeholder:"User name",type:"text",value:this.state.name,onChange:this.updateUserNameValue}),r.a.createElement("br",null),r.a.createElement("label",null,"User password"),r.a.createElement("input",{name:"userPassword",placeholder:"User password",type:"text",value:this.state.password,onChange:this.updateUserPasswordValue}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Send new user registration data"))}}]),t}(r.a.Component),Q=(a(28),function(e){function t(){return Object(R.a)(this,t),Object(V.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(x.a)(t,[{key:"renderChatListNewChatForm",value:function(){if(this.props.currentUser._id)return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,null),r.a.createElement(F,{onSubmitNewChat:this.props.createNewChat,currentUserId:this.props.currentUser._id}))}},{key:"renderMessageListNewMessageInput",value:function(){if(this.props.currentUser._id&&this.props.currentChat._id)return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement(H,{onSubmitNewMessage:this.props.sendNewMessage}))}},{key:"renderMainContent",value:function(){return this.props.isUserAuthenticated?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Curret user: ",this.props.currentUser.name),r.a.createElement("h1",null,"Curret chat: ",this.props.currentChat.name),this.renderChatListNewChatForm(),this.renderMessageListNewMessageInput()):r.a.createElement($,{onSubmit:this.props.submitUserNameAndPassword})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,{onSubmit:this.props.submitNewUser}),this.renderMainContent())}}]),t}(r.a.Component)),X=Object(u.b)((function(e){return{currentUser:e.currentUser,currentChat:e.currentChat,wasMessageReceived:e.wasMessageReceived,isUserAuthenticated:e.isUserAuthenticated}}),(function(e){return{createNewChat:function(t,a){return e((n=t,r=a,function(e){var t=localStorage.token;if(t){var a={chat:{name:n,users:r}};fetch(l+p,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(a)}).then((function(e){return e.ok?e.json():(localStorage.removeItem("token"),{status:e.status,message:e.statusText})})).then((function(t){if(t.message)e(U(t.status,t.message));else{var a=t.chat,n=a._id;a.name,a.users,e(C(n)),e(j(t))}})).catch((function(e){console.log("error",e)}))}}));var n,r},sendNewMessage:function(t){return e((a=t,function(e,t){var n=localStorage.token;if(n){e(_(!1));var r=(new Date).getTime(),s=t().currentUser.email,o=t().currentUser.name,u={chatId:t().currentChat._id,time:r,authorEmail:s,authorName:o,text:a};fetch(l+m,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify(u)}).then((function(e){return e.ok?e.json():(u.wasMessageReceived=!1,localStorage.removeItem("token"),{status:e.status,message:e.statusText})})).then((function(t){t.message?(e(U(t.status,t.message)),u.wasMessageReceived=!1,e(T(u)),localStorage.removeItem("token")):(u.wasMessageReceived=!0,e(T(u)),e(_(!0)))})).catch((function(e){console.log("error",e)}))}}));var a},submitUserNameAndPassword:function(t,a){return e((n=t,r=a,function(e){var t={user:{email:n,name:"",password:r}};fetch(l+f,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.ok?e.json():{status:e.status,message:e.statusText}})).then((function(t){if(t.message)e(U(t.status,t.message)),e(O(!1));else{var a=t.user,n=a._id,r=a.token;localStorage.setItem("token",r),e(S(t.user)),e(O(!0)),e(k(n))}})).catch((function(e){console.log("error",e)}))}));var n,r},submitNewUser:function(t,a,n){return e((r=t,s=a,o=n,function(e){var t={user:{email:r,name:s,password:o}};fetch(l+g,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.ok?e.json():{status:e.status,message:e.statusText}})).then((function(t){if(t.message)e(U(t.status,t.message)),e(O(!1));else{var a=t.user,n=a._id,r=a.token;localStorage.setItem("token",r),e(S(t.user)),e(C({})),e(O(!0)),e(k(n))}})).catch((function(e){console.log("error",e)}))}));var r,s,o}}}))(Q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=Object(c.d)(I,Object(c.a)(i.a));o.a.render(r.a.createElement(u.a,{store:Z},r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.be507ca3.chunk.js.map