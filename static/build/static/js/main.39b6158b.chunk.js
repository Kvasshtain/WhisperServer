(this.webpackJsonpwhisper=this.webpackJsonpwhisper||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(11),o=n.n(s),c=n(6),u=n(8),i=n(17),l=n(10),h="http://localhost:4000/",m="messages/new/",d="messages/listRequest/",p="messages/lastMessages/",f="chats/new/",g="chats/listRequest/",v="users/login/",b="users/new/",E="users/search/",S="chats/addNewUser/",w=3,y=1e4,C={Accept:"application/json","Content-Type":"application/json"};function U(e){return{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}function O(e){if(!e.ok)return{status:e.status,badStatusText:e.statusText,message:e.message}}var j="CHANGE_CURRENT_USER",k="CHANGE_CURRENT_CHAT",N="REFRESH_CHATS_LIST",M="SET_AUTHENTICATION_RESULT",_="SET_LAST_ERROR",A="FILL_FOUND_USERS_LIST";function L(e){return{type:j,payload:e}}function D(e){return{type:k,payload:e}}function T(e){return{type:M,payload:e}}function I(e){return function(t){401===e.status&&t(R()),t(function(e){return{type:_,payload:e}}(e))}}function R(){return function(e){localStorage.removeItem("token"),e(T(!1))}}function P(e){return function(t){var n=localStorage.token;n&&fetch("".concat(h).concat(g,"?user_id=").concat(e),{method:"GET",headers:U(n)}).then((function(e){var t=O(e);return t||e.json()})).then((function(e){e.message?(t(I(e)),localStorage.removeItem("token")):t({type:N,payload:e})})).catch((function(e){console.log("error",e)}))}}function V(e){return function(t){var n=localStorage.token;n&&fetch("".concat(h).concat(E,"?user_seek_data=").concat(e),{method:"GET",headers:U(n)}).then((function(e){var t=O(e);return t||e.json()})).then((function(e){e.message?(t(I(e)),localStorage.removeItem("token")):t({type:A,payload:e})})).catch((function(e){console.log("error",e)}))}}var x="ADD_NEW_MESSAGE",F="MESSAGE_WAS_RECEIVED",G="REFRESH_MESSAGES_LIST",H="UNSHIFT_PREVIOUS_MESSAGES",J="PUSH_NEW_MESSAGES";function W(e){return{type:x,payload:e}}function B(e){return{type:F,payload:e}}function z(e,t){return function(n){var a=localStorage.token;a&&fetch("".concat(h).concat(d,"?chat_id=").concat(e,"&oldest_message_time=").concat(t,"&fetch_messages_count=").concat(w),{method:"GET",headers:U(a)}).then((function(e){var t=O(e);return t||e.json()})).then((function(e){e.message?(n(I(e)),localStorage.removeItem("token")):n({type:H,payload:e})})).catch((function(e){console.log("error",e)}))}}function Q(e,t){return function(n){var a=localStorage.token;a&&fetch("".concat(h).concat(p,"?chat_id=").concat(e,"&newest_message_time=").concat(t),{method:"GET",headers:U(a)}).then((function(e){var t=O(e);return t||e.json()})).then((function(e){e.message?(n(I(e)),localStorage.removeItem("token")):n({type:J,payload:e})})).catch((function(e){console.log("error",e)}))}}var q=Object(u.c)({messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return e.concat(t.payload);case G:return t.payload;case H:var n=t.payload;return[].concat(Object(l.a)(n),Object(l.a)(e));case J:var a=t.payload;return[].concat(Object(l.a)(e),Object(l.a)(a));default:return e}},wasMessageReceived:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return t.payload;default:return e}},currentUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return t.payload;default:return e}},currentChat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return t.payload;default:return e}},chatsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return t.payload;default:return e}},isUserAuthenticated:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return t.payload;default:return e}},lastError:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return t.payload;default:return e}},usersList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return t.payload;default:return e}}});n(28);var Y=n(1),$=n(2),K=n(4),X=n(3),Z=n(5),ee=function(e){function t(){var e,n;Object(Y.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(K.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",users:[]},n.onSubmit=function(e){e.preventDefault(),n.props.onSubmitNewChat(n.state.name,[n.props.currentUserId]),n.setState({name:"",users:[]})},n.updateChatNameValue=function(e){n.setState({name:e.target.value})},n}return Object(Z.a)(t,e),Object($.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h1",null,"Create new chat"),r.a.createElement("input",{name:"chatName",placeholder:"chat name",type:"text",value:this.state.name,onChange:this.updateChatNameValue}),r.a.createElement("button",{type:"submit"},"Create"))}}]),t}(r.a.Component);function te(e){var t=new Date(e.time),n=t.getHours(),a=t.getMinutes(),s=t.getDate(),o=t.getMonth()+1,c=t.getFullYear();return r.a.createElement("div",null,r.a.createElement("p",null,n,":",a," ",s,".",o,".",c))}function ne(e){var t=e.message;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,t.authorName)),r.a.createElement("div",null,r.a.createElement("p",null,t.authorEmail)),r.a.createElement("div",null,r.a.createElement("p",null,t.text)),r.a.createElement(te,{time:t.time}))}var ae=function(e){function t(){var e,n;Object(Y.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(K.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(r)))).state={newMessage:""},n.onSubmit=function(e){e.preventDefault(),n.props.onSubmitNewMessage(n.state.newMessage),n.setState({newMessage:""})},n.updateInputValue=function(e){n.setState({newMessage:e.target.value})},n}return Object(Z.a)(t,e),Object($.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h1",null,"Send new message"),r.a.createElement("input",{name:"userMessage",placeholder:"message text",type:"text",value:this.state.newMessage,onChange:this.updateInputValue}),r.a.createElement("button",{type:"submit"},"Send message"))}}]),t}(r.a.Component),re=(n(29),function(e){function t(e){var n;return Object(Y.a)(this,t),(n=Object(K.a)(this,Object(X.a)(t).call(this,e))).componentDidMount=function(){n.fetchMessages(),n.initializeMessagesListUpdateTimer()},n.componentDidUpdate=function(){var e=n.props.messages;if(e){var t=e.length;if(t!==n.state.previousMessagesLength)n.setState({previousMessagesLength:t}),n.messageListRef.current.scrollTop+=30,n.scrollDownIfEnabled()}},n.initializeMessagesListUpdateTimer=function(){n.timerID=setInterval((function(){return n.fetchNewMessages()}),y)},n.fetchMessages=function(){var e=n.props.currentChat,t=n.props.messages;if(e&&e._id&&t){var a=(new Date).getTime(),r=t.length?t[0].time:a;n.props.fetchMessagesList(e._id,r)}},n.fetchNewMessages=function(){var e=n.props.currentChat,t=n.props.messages;if(e&&e._id&&t){var a=t.length-1;a<0?n.fetchMessages():n.props.fetchNewMessages(e._id,t[a].time)}},n.scrollDownIfEnabled=function(){n.state.enableScrollDown&&(n.setState({enableScrollDown:!1}),n.scrollDown())},n.scrollDown=function(){var e=n.messageListRef.current;e.scrollTop=e.scrollHeight},n.renderMessageList=function(){var e=n.props.messages,t=e.length;if(e&&t)return e.map((function(e,t){return r.a.createElement(ne,{key:t,message:e})}))},n.onScrollDownClick=function(){n.scrollDown()},n.onScroll=function(){n.messageListRef.current.scrollTop<30&&n.fetchMessages()},n.sendNewMessage=function(e){n.props.sendNewMessage(e),n.setState({enableScrollDown:!0})},n.messageListRef=r.a.createRef(),n.state={enableScrollDown:!0,previousMessagesLength:0},n}return Object(Z.a)(t,e),Object($.a)(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.onScrollDownClick},"Scroll down"),r.a.createElement("div",{ref:this.messageListRef,className:"messageList",onScroll:this.onScroll},this.renderMessageList()),r.a.createElement(ae,{onSubmitNewMessage:this.sendNewMessage}))}}]),t}(r.a.Component)),se=Object(c.b)((function(e){return{messages:e.messages,currentChat:e.currentChat}}),(function(e){return{fetchMessagesList:function(t,n){return e(z(t,n))},fetchNewMessages:function(t,n){return e(Q(t,n))}}}))(re),oe=function(e){function t(){var e,n;Object(Y.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(K.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(s)))).onSelectChat=function(){var e=n.props.chat;n.props.onSelectChat(e)},n.renderUsersList=function(e){if(e&&e.length)return e.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",null,e.name))}))},n}return Object(Z.a)(t,e),Object($.a)(t,[{key:"render",value:function(){var e=this.props.chat;return r.a.createElement("div",{className:"selectedItem",onClick:this.onSelectChat},r.a.createElement("div",null,r.a.createElement("p",null,e.name)),r.a.createElement("div",null,r.a.createElement("h3",null,"Chat users:"),r.a.createElement("br",null),r.a.createElement("div",null,this.renderUsersList(e.users))))}}]),t}(r.a.Component),ce=function(e){function t(){var e,n;Object(Y.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(K.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(s)))).renderChatList=function(){var e=n.props,t=e.chatsList,a=e.changeCurrentChat;if(t&&t.length)return t.map((function(e){return r.a.createElement(oe,{onSelectChat:a,key:e._id,chat:e})}))},n}return Object(Z.a)(t,e),Object($.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.currentUser._id;e&&this.props.fetchChatsList(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"\u0441hatList"},this.renderChatList())}}]),t}(r.a.Component),ue=Object(c.b)((function(e){return{chatsList:e.chatsList,currentUser:e.currentUser}}),(function(e){return{fetchChatsList:function(t){return e(P(t))},changeCurrentChat:function(t){return e(D(t))}}}))(ce),ie=function(e){function t(){var e,n;Object(Y.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(K.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(r)))).onUserClick=function(){var e=n.props.user;n.props.onUserClick(e)},n}return Object(Z.a)(t,e),Object($.a)(t,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"selectedItem",onClick:this.onUserClick},r.a.createElement("p",null,e.name),r.a.createElement("p",null,e.email))}}]),t}(r.a.Component),le=function(e){function t(){var e,n;Object(Y.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(K.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(r)))).state={userSeekData:""},n.onSubmit=function(e){e.preventDefault(),n.props.onSubmitUserSeekData(n.state.userSeekData),n.setState({searchQueryString:""})},n.updateSearchQueryString=function(e){n.setState({userSeekData:e.target.value})},n}return Object(Z.a)(t,e),Object($.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h1",null,"Search for a new member"),r.a.createElement("label",null,"Enter email"),r.a.createElement("input",{name:"userEmail",placeholder:"User email",type:"text",value:this.state.userSeekData,onChange:this.updateSearchQueryString}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Find users"))}}]),t}(r.a.Component),he=function(e){function t(e){var n;return Object(Y.a)(this,t),(n=Object(K.a)(this,Object(X.a)(t).call(this,e))).onSubmitUserSeekData=function(e){n.props.findUsers(e)},n.onAddUserButtonClick=function(){n.setState({showAddedUserMenu:!0})},n.onUserClick=function(e){n.setState({showAddedUserMenu:!1}),n.props.addNewUserToCurrentChat(e)},n.renderUsersList=function(){var e=n.props.usersList,t=n.onUserClick;if(e&&e.length)return e.map((function(e){return r.a.createElement(ie,{onUserClick:t,key:e._id,user:e})}))},n.renderAddedUserMenu=function(){var e=n.state.showAddedUserMenu,t=n.props.currentChat;return e?r.a.createElement(r.a.div,null,r.a.createElement(le,{onSubmitUserSeekData:n.onSubmitUserSeekData}),n.renderUsersList()):t._id?r.a.createElement("button",{onClick:n.onAddUserButtonClick},"Add new user to chat"):void 0},n.state={showAddedUserMenu:!1},n}return Object(Z.a)(t,e),Object($.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"chatSettings"},r.a.createElement("h1",null,"Curret chat: ",this.props.currentChat.name),this.renderAddedUserMenu())}}]),t}(r.a.Component),me=Object(c.b)((function(e){return{currentChat:e.currentChat,usersList:e.usersList}}),(function(e){return{findUsers:function(t){return e(V(t))},addNewUserToCurrentChat:function(t){return e(function(e){return function(t,n){var a=localStorage.token;if(a){var r=n().currentChat;fetch(h+S,{method:"POST",headers:U(a),body:JSON.stringify({chatId:r._id,newUserId:e._id})}).then((function(e){var t=O(e);return t||e.json()})).then((function(e){if(e.message)t(I(e));else{var n=e.chat,a=n._id;n.name,n.users;t(D(a))}})).catch((function(e){console.log("error",e)}))}}}(t))}}}))(he),de=function(e){function t(){var e,n;Object(Y.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(K.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},n.onSubmit=function(e){e.preventDefault(),n.props.onSubmit(n.state.email,n.state.password),n.setState({email:"",password:""})},n.updateUserEmailValue=function(e){n.setState({email:e.target.value})},n.updateUserPasswordValue=function(e){n.setState({password:e.target.value})},n}return Object(Z.a)(t,e),Object($.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit,className:"regAuthForm"},r.a.createElement("h3",null,"Login"),r.a.createElement("label",null,"User email"),r.a.createElement("input",{name:"userEmail",placeholder:"User email",type:"text",value:this.state.email,onChange:this.updateUserEmailValue}),r.a.createElement("br",null),r.a.createElement("label",null,"User password"),r.a.createElement("input",{name:"userPassword",placeholder:"User password",type:"text",value:this.state.password,onChange:this.updateUserPasswordValue}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Submit"))}}]),t}(r.a.Component),pe=function(e){function t(){var e,n;Object(Y.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(K.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",name:"",password:""},n.onSubmit=function(e){e.preventDefault();var t=n.state,a={email:t.email,name:t.name,password:t.password};n.props.onSubmit(a),n.setState({email:"",name:"",password:""})},n.updateUserEmailValue=function(e){n.setState({email:e.target.value})},n.updateUserNameValue=function(e){n.setState({name:e.target.value})},n.updateUserPasswordValue=function(e){n.setState({password:e.target.value})},n}return Object(Z.a)(t,e),Object($.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit,className:"regAuthForm"},r.a.createElement("h3",null,"New user registration"),r.a.createElement("label",null,"User email"),r.a.createElement("input",{name:"userEmail",placeholder:"User email",type:"text",value:this.state.email,onChange:this.updateUserEmailValue}),r.a.createElement("br",null),r.a.createElement("label",null,"User name"),r.a.createElement("input",{name:"userName",placeholder:"User name",type:"text",value:this.state.name,onChange:this.updateUserNameValue}),r.a.createElement("br",null),r.a.createElement("label",null,"User password"),r.a.createElement("input",{name:"userPassword",placeholder:"User password",type:"text",value:this.state.password,onChange:this.updateUserPasswordValue}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Send new user registration data"))}}]),t}(r.a.Component);function fe(e){return r.a.createElement("div",{onClick:e.onSignOut},r.a.createElement("button",null,"Sign out"))}n(30);var ge=function(e){function t(){var e,n;Object(Y.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(K.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(r)))).onSignOut=function(){n.props.resetAuthenticationResult()},n}return Object(Z.a)(t,e),Object($.a)(t,[{key:"renderChatListNewChatForm",value:function(){if(this.props.currentUser._id)return r.a.createElement("div",null,r.a.createElement(ee,{onSubmitNewChat:this.props.createNewChat,currentUserId:this.props.currentUser._id}),r.a.createElement(ue,null))}},{key:"renderMessageList",value:function(){if(this.props.currentUser._id&&this.props.currentChat._id)return r.a.createElement(se,{sendNewMessage:this.props.sendNewMessage})}},{key:"renderMainContent",value:function(){return this.props.isUserAuthenticated?r.a.createElement("div",{className:"mainPanel"},r.a.createElement("div",{className:"userChatsPanel"},r.a.createElement(fe,{onSignOut:this.onSignOut}),r.a.createElement("div",null,r.a.createElement("h1",null,"Curret user: ",this.props.currentUser.name),this.renderChatListNewChatForm())),r.a.createElement("div",{className:"currentChatPanel"},r.a.createElement(me,null),this.renderMessageList())):r.a.createElement("div",{className:"regAuthFormsPanel"},r.a.createElement(pe,{onSubmit:this.props.submitNewUser}),r.a.createElement(de,{onSubmit:this.props.submitUserEmailAndPassword}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"appPanel"},this.renderMainContent())}}]),t}(r.a.Component),ve=Object(c.b)((function(e){return{currentUser:e.currentUser,currentChat:e.currentChat,wasMessageReceived:e.wasMessageReceived,isUserAuthenticated:e.isUserAuthenticated}}),(function(e){return{createNewChat:function(t,n){return e((a=t,r=n,function(e,t){var n=localStorage.token;if(n){var s={chat:{name:a,users:r}};fetch(h+f,{method:"POST",headers:U(n),body:JSON.stringify(s)}).then((function(e){var t=O(e);return t||e.json()})).then((function(n){if(n.status)e(I(n));else{var a=n.chat,r=a._id,s=(a.name,a.users,t().currentUser);e(D(r)),e(P(s._id))}})).catch((function(e){console.log("error",e)}))}}));var a,r},sendNewMessage:function(t){return e((n=t,function(e,t){var a=localStorage.token;if(a){e(B(!1));var r=(new Date).getTime(),s=t().currentUser.email,o=t().currentUser.name,c={chatId:t().currentChat._id,time:r,authorEmail:s,authorName:o,text:n};fetch(h+m,{method:"POST",headers:U(a),body:JSON.stringify(c)}).then((function(e){var t=O(e);return t||e.json()})).then((function(t){t.status?(e(I(t)),c.wasMessageReceived=!1,e(W(c)),localStorage.removeItem("token")):(c.wasMessageReceived=!0,e(W(c)),e(B(!0)))})).catch((function(e){console.log("error",e)}))}}));var n},submitUserEmailAndPassword:function(t,n){return e((a=t,r=n,function(e){var t={user:{email:a,name:"",password:r}};fetch(h+v,{method:"POST",headers:C,body:JSON.stringify(t)}).then((function(e){var t=O(e);return t||e.json()})).then((function(t){if(t.message)e(I(t)),e(T(!1));else{var n=t.user,a=n._id,r=n.token;localStorage.setItem("token",r),e(L(t.user)),e(T(!0)),e(P(a))}})).catch((function(e){console.log("error",e)}))}));var a,r},submitNewUser:function(t){return e(function(e){return function(t){fetch(h+b,{method:"POST",headers:C,body:JSON.stringify({user:e})}).then((function(e){var t=O(e);return t||e.json()})).then((function(e){if(e.message)t(I(e)),t(T(!1));else{var n=e.user,a=n._id,r=n.token;localStorage.setItem("token",r),t(L(e.user)),t(D({})),t(T(!0)),t(P(a))}})).catch((function(e){console.log("error",e)}))}}(t))},resetAuthenticationResult:function(){return e(R())}}}))(ge);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var be=Object(u.d)(q,Object(u.a)(i.a));o.a.render(r.a.createElement(c.a,{store:be},r.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.39b6158b.chunk.js.map