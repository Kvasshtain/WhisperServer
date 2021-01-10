(this.webpackJsonpwhisper=this.webpackJsonpwhisper||[]).push([[0],{18:function(e,t,a){e.exports=a(30)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),o=a.n(s),c=a(7),u=a(8),l=a(16),i=a(17),m="http://localhost:4000/",h="messages/new/",p="messages/listRequest/",d="chats/new/",f="chats/listRequest/",g="users/login/",v="users/new/",E=3,b="CHANGE_CURRENT_USER",w="CHANGE_CURRENT_CHAT",S="REFRESH_CHATS_LIST",y="SET_AUTHENTICATION_RESULT",C="SET_LAST_ERROR";function j(e){return{type:b,payload:e}}function O(e){return{type:w,payload:e}}function U(e){return{type:S,payload:e}}function k(e){return{type:y,payload:e}}function M(e,t){return{type:C,payload:{status:e,message:t}}}function N(e){return function(t){var a=localStorage.token;a&&fetch("".concat(m).concat(f,"?user_id=").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}}).then((function(e){return e.ok?e.json():(localStorage.removeItem("token"),{status:e.status,message:e.statusText})})).then((function(e){e.message?(t(M(e.status,e.message)),localStorage.removeItem("token")):t(U(e))})).catch((function(e){console.log("error",e)}))}}var T="ADD_NEW_MESSAGE",_="MESSAGE_WAS_RECEIVED",A="REFRESH_MESSAGES_LIST",L="UNSHIFT_PREVIOUS_MESSAGES";function R(e){return{type:T,payload:e}}function I(e){return{type:_,payload:e}}function D(e,t){return function(a){var n=localStorage.token;n&&fetch("".concat(m).concat(p,"?chat_id=").concat(e,"&oldest_message_time=").concat(t,"&fetch_messages_count=").concat(E),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.ok?e.json():(localStorage.removeItem("token"),{status:e.status,message:e.statusText})})).then((function(e){e.message?(a(M(e.status,e.message)),localStorage.removeItem("token")):a({type:L,payload:e})})).catch((function(e){console.log("error",e)}))}}var x=Object(u.c)({messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return e.concat(t.payload);case A:return t.payload;case L:return e.unshift.apply(e,Object(i.a)(t.payload));default:return e}},wasMessageReceived:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return t.payload;default:return e}},currentUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return t.payload;default:return e}},currentChat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return t.payload;default:return e}},chatsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return t.payload;default:return e}},isUserAuthenticated:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return t.payload;default:return e}},lastError:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return t.payload;default:return e}}});a(28);var V=a(1),P=a(2),F=a(4),H=a(3),G=a(5),B=function(e){function t(){var e,a;Object(V.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(F.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",users:[]},a.onSubmit=function(e){e.preventDefault(),a.props.onSubmitNewChat(a.state.name,[a.props.currentUserId]),a.setState({name:"",users:[]})},a.updateChatNameValue=function(e){a.setState({name:e.target.value})},a}return Object(G.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h1",null,"Create new chat"),r.a.createElement("input",{name:"chatName",placeholder:"chat name",type:"text",value:this.state.name,onChange:this.updateChatNameValue}),r.a.createElement("button",{type:"submit"},"Create"))}}]),t}(r.a.Component);function J(e){var t=new Date(e.time),a=t.getHours(),n=t.getMinutes(),s=t.getDate(),o=t.getMonth()+1,c=t.getFullYear();return r.a.createElement("div",null,r.a.createElement("p",null,a,":",n," ",s,".",o,".",c))}function z(e){var t=e.message;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,t.authorName)),r.a.createElement("div",null,r.a.createElement("p",null,t.authorEmail)),r.a.createElement("div",null,r.a.createElement("p",null,t.text)),r.a.createElement(J,{time:t.time}))}var W=function(e){function t(){var e,a;Object(V.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(F.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r)))).state={newMessage:""},a.onSubmit=function(e){e.preventDefault(),a.props.onSubmitNewMessage(a.state.newMessage),a.setState({newMessage:""})},a.updateInputValue=function(e){a.setState({newMessage:e.target.value})},a}return Object(G.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h1",null,"Send new message"),r.a.createElement("input",{name:"userMessage",placeholder:"message text",type:"text",value:this.state.newMessage,onChange:this.updateInputValue}),r.a.createElement("button",{type:"submit"},"Send message"))}}]),t}(r.a.Component),q=function(e){function t(e){var a;return Object(V.a)(this,t),(a=Object(F.a)(this,Object(H.a)(t).call(this,e))).componentDidMount=function(){a.fetchMessages()},a.fetchMessages=function(){var e=a.props.currentChat,t=a.props.messages;if(e&&e._id&&t){var n=(new Date).getTime(),r=t.length?t[0].time:n;a.props.fetchMessagesList(e._id,r)}},a.scrollDownIfEnabled=function(){a.state.enableScrollDown&&(a.setState({enableScrollDown:!1}),a.scrollDown())},a.scrollDown=function(){var e=a.messageListRef.current;e.scrollTop=e.scrollHeight},a.componentDidUpdate=function(){var e=a.props.messages;if(e){var t=e.length;t!==a.state.previousMessagesLength&&(a.setState({previousMessagesLength:t}),a.scrollDownIfEnabled())}},a.renderMessageList=function(){var e=a.props.messages,t=e.length;if(e&&t)return e.map((function(e,t){return r.a.createElement(z,{key:t,message:e})}))},a.onScrollDownClick=function(){a.scrollDown()},a.onScroll=function(){a.messageListRef.current.scrollTop<10&&a.fetchMessages()},a.sendNewMessage=function(e){a.props.sendNewMessage(e),a.setState({enableScrollDown:!0})},a.messageListRef=r.a.createRef(),a.state={enableScrollDown:!0,scrollTop:0,previousMessagesLength:0},a}return Object(G.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:this.onScrollDownClick},"Scroll down"),r.a.createElement("div",{ref:this.messageListRef,className:"messageList",onScroll:this.onScroll},this.renderMessageList()),r.a.createElement(W,{onSubmitNewMessage:this.sendNewMessage}))}}]),t}(r.a.Component),Y=Object(c.b)((function(e){return{messages:e.messages,currentChat:e.currentChat}}),(function(e){return{fetchMessagesList:function(t,a){return e(D(t,a))}}}))(q),$=function(e){function t(){var e,a;Object(V.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(F.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(s)))).onSelectChat=function(){var e=a.props.chat;a.props.onSelectChat(e)},a.renderUsersList=function(e){if(e&&e.length)return e.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",null,e.name))}))},a}return Object(G.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this.props.chat;return r.a.createElement("div",{onClick:this.onSelectChat},r.a.createElement("div",null,r.a.createElement("p",null,e.name)),r.a.createElement("div",null,r.a.createElement("h3",null,"Chat users:"),r.a.createElement("br",null),r.a.createElement("div",null,this.renderUsersList(e.users))))}}]),t}(r.a.Component),K=function(e){function t(){var e,a;Object(V.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(F.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(s)))).renderChatList=function(){var e=a.props,t=e.chatsList,n=e.changeCurrentChat;if(t&&t.length)return t.map((function(e){return r.a.createElement($,{onSelectChat:n,key:e._id,chat:e})}))},a}return Object(G.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.currentUser._id;e&&this.props.fetchChatsList(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"\u0441hatList"},this.renderChatList())}}]),t}(r.a.Component),Q=Object(c.b)((function(e){return{chatsList:e.chatsList,currentUser:e.currentUser}}),(function(e){return{fetchChatsList:function(t){return e(N(t))},changeCurrentChat:function(t){return e(O(t))}}}))(K),X=function(e){function t(){var e,a;Object(V.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(F.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.onSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.email,a.state.password),a.setState({email:"",password:""})},a.updateUserEmailValue=function(e){a.setState({email:e.target.value})},a.updateUserPasswordValue=function(e){a.setState({password:e.target.value})},a}return Object(G.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h1",null,"Login"),r.a.createElement("label",null,"User email"),r.a.createElement("input",{name:"userEmail",placeholder:"User email",type:"text",value:this.state.email,onChange:this.updateUserEmailValue}),r.a.createElement("br",null),r.a.createElement("label",null,"User password"),r.a.createElement("input",{name:"userPassword",placeholder:"User password",type:"text",value:this.state.password,onChange:this.updateUserPasswordValue}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Submit"))}}]),t}(r.a.Component),Z=function(e){function t(){var e,a;Object(V.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(F.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",name:"",password:""},a.onSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.email,a.state.name,a.state.password),a.setState({email:"",name:"",password:""})},a.updateUserEmailValue=function(e){a.setState({email:e.target.value})},a.updateUserNameValue=function(e){a.setState({name:e.target.value})},a.updateUserPasswordValue=function(e){a.setState({password:e.target.value})},a}return Object(G.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h1",null,"New user registration"),r.a.createElement("label",null,"User email"),r.a.createElement("input",{name:"userEmail",placeholder:"User email",type:"text",value:this.state.email,onChange:this.updateUserEmailValue}),r.a.createElement("br",null),r.a.createElement("label",null,"User name"),r.a.createElement("input",{name:"userName",placeholder:"User name",type:"text",value:this.state.name,onChange:this.updateUserNameValue}),r.a.createElement("br",null),r.a.createElement("label",null,"User password"),r.a.createElement("input",{name:"userPassword",placeholder:"User password",type:"text",value:this.state.password,onChange:this.updateUserPasswordValue}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Send new user registration data"))}}]),t}(r.a.Component),ee=(a(29),function(e){function t(){return Object(V.a)(this,t),Object(F.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(G.a)(t,e),Object(P.a)(t,[{key:"renderChatListNewChatForm",value:function(){if(this.props.currentUser._id)return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null),r.a.createElement(B,{onSubmitNewChat:this.props.createNewChat,currentUserId:this.props.currentUser._id}))}},{key:"renderMessageListNewMessageInput",value:function(){if(this.props.currentUser._id&&this.props.currentChat._id)return r.a.createElement(Y,{sendNewMessage:this.props.sendNewMessage})}},{key:"renderMainContent",value:function(){return this.props.isUserAuthenticated?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Curret user: ",this.props.currentUser.name),r.a.createElement("h1",null,"Curret chat: ",this.props.currentChat.name),this.renderChatListNewChatForm(),this.renderMessageListNewMessageInput()):r.a.createElement(X,{onSubmit:this.props.submitUserNameAndPassword})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{onSubmit:this.props.submitNewUser}),this.renderMainContent())}}]),t}(r.a.Component)),te=Object(c.b)((function(e){return{currentUser:e.currentUser,currentChat:e.currentChat,wasMessageReceived:e.wasMessageReceived,isUserAuthenticated:e.isUserAuthenticated}}),(function(e){return{createNewChat:function(t,a){return e((n=t,r=a,function(e){var t=localStorage.token;if(t){var a={chat:{name:n,users:r}};fetch(m+d,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(a)}).then((function(e){return e.ok?e.json():(localStorage.removeItem("token"),{status:e.status,message:e.statusText})})).then((function(t){if(t.message)e(M(t.status,t.message));else{var a=t.chat,n=a._id;a.name,a.users,e(O(n)),e(U(t))}})).catch((function(e){console.log("error",e)}))}}));var n,r},sendNewMessage:function(t){return e((a=t,function(e,t){var n=localStorage.token;if(n){e(I(!1));var r=(new Date).getTime(),s=t().currentUser.email,o=t().currentUser.name,c={chatId:t().currentChat._id,time:r,authorEmail:s,authorName:o,text:a};fetch(m+h,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify(c)}).then((function(e){return e.ok?e.json():(c.wasMessageReceived=!1,localStorage.removeItem("token"),{status:e.status,message:e.statusText})})).then((function(t){t.message?(e(M(t.status,t.message)),c.wasMessageReceived=!1,e(R(c)),localStorage.removeItem("token")):(c.wasMessageReceived=!0,e(R(c)),e(I(!0)))})).catch((function(e){console.log("error",e)}))}}));var a},submitUserNameAndPassword:function(t,a){return e((n=t,r=a,function(e){var t={user:{email:n,name:"",password:r}};fetch(m+g,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.ok?e.json():{status:e.status,message:e.statusText}})).then((function(t){if(t.message)e(M(t.status,t.message)),e(k(!1));else{var a=t.user,n=a._id,r=a.token;localStorage.setItem("token",r),e(j(t.user)),e(k(!0)),e(N(n))}})).catch((function(e){console.log("error",e)}))}));var n,r},submitNewUser:function(t,a,n){return e((r=t,s=a,o=n,function(e){var t={user:{email:r,name:s,password:o}};fetch(m+v,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.ok?e.json():{status:e.status,message:e.statusText}})).then((function(t){if(t.message)e(M(t.status,t.message)),e(k(!1));else{var a=t.user,n=a._id,r=a.token;localStorage.setItem("token",r),e(j(t.user)),e(O({})),e(k(!0)),e(N(n))}})).catch((function(e){console.log("error",e)}))}));var r,s,o}}}))(ee);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=Object(u.d)(x,Object(u.a)(l.a));o.a.render(r.a.createElement(c.a,{store:ae},r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.60bdd8f7.chunk.js.map