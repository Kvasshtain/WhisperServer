(this.webpackJsonpwhisper=this.webpackJsonpwhisper||[]).push([[0],{20:function(e,t,n){e.exports=n(35)},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(11),c=n.n(s),o=n(6),i=n(8),u=n(18),l=n(10),m="http://localhost:4000/",d="messages/new/",h="messages/listRequest/",p="messages/lastMessages/",f="chats/new/",g="chats/listRequest/",v="users/login/",b="users/new/",E="users/search/",S="chats/addNewUser/",w=3,y=1e4,C=n(15),O=n.n(C),U={Accept:"application/json","Content-Type":"application/json"};function k(e){return{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}function j(e){if(!e.ok)return{status:e.status,badStatusText:e.statusText,message:e.message}}function N(e){return/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(e)}function M(e){return new Promise((function(t,n){var a=new FileReader;a.onload=function(){t(a.result)},a.onerror=n,a.readAsText(e)}))}function _(e,t){return t&&(e=e.map((function(e){return t(e)}))),e}var A="CHANGE_CURRENT_USER",L="CHANGE_CURRENT_CHAT",T="REFRESH_CHATS_LIST",P="SET_AUTHENTICATION_RESULT",D="SET_LAST_ERROR",R="FILL_FOUND_USERS_LIST",x="CLEAR_LAST_ERROR",I="ADD_NEW_SPECIAL_MESSAGES_PREPROCESSOR_FUNCTION";function F(e){return{type:A,payload:e}}function V(e){return{type:L,payload:e}}function W(e){return{type:P,payload:e}}function G(e){return function(t){401===e.status&&t(B()),t(H(e))}}function H(e){return{type:D,payload:e}}function B(){return function(e){localStorage.removeItem("token"),e(W(!1))}}function J(e,t){return{type:I,payload:{forwardPreprocessorFunction:e,backwardPreprocessorFunction:t}}}function z(e){return function(t){var n,a,r=localStorage.getItem(e._id);if(r){var s=JSON.parse(r);n=new Function("text",s.forward),a=new Function("text",s.backward)}t(V(e)),n&&a&&t(J(n,a))}}function Q(e){return function(t){var n=localStorage.token;n&&fetch("".concat(m).concat(g,"?user_id=").concat(e),{method:"GET",headers:k(n)}).then((function(e){var t=j(e);return t||e.json()})).then((function(e){e.badStatusText?(t(G(e)),localStorage.removeItem("token")):t({type:T,payload:e})})).catch((function(e){console.log("error",e)}))}}function Z(e){return function(t){var n=localStorage.token;n&&fetch("".concat(m).concat(E,"?user_seek_data=").concat(e),{method:"GET",headers:k(n)}).then((function(e){var t=j(e);return t||e.json()})).then((function(e){e.badStatusText?(t(G(e)),localStorage.removeItem("token")):t({type:R,payload:e})})).catch((function(e){console.log("error",e)}))}}var q="ADD_NEW_MESSAGE",$="MESSAGE_WAS_RECEIVED",Y="REFRESH_MESSAGES_LIST",K="UNSHIFT_PREVIOUS_MESSAGES",X="PUSH_NEW_MESSAGES";function ee(e){return{type:q,payload:e}}function te(e){return{type:$,payload:e}}function ne(e){return function(t,n){var a=n().currentChat.forwardPreprocessorFunction;a&&(e=a(e)),t(function(e){return function(t,n){var a=localStorage.token;if(a){t(te(!1));var r=(new Date).getTime(),s=n().currentUser.email,c=n().currentUser.name,o={chatId:n().currentChat._id,time:r,authorEmail:s,authorName:c,text:e};fetch(m+d,{method:"POST",headers:k(a),body:JSON.stringify(o)}).then((function(e){var t=j(e);return t||e.json()})).then((function(e){e.status?(t(G(e)),o.wasMessageReceived=!1,t(ee(o)),localStorage.removeItem("token")):(o.wasMessageReceived=!0,t(ee(o)),t(te(!0)))})).catch((function(e){console.log("error",e)}))}}}(e))}}function ae(e,t){return function(n,a){var r=localStorage.token;r&&fetch("".concat(m).concat(h,"?chat_id=").concat(e,"&oldest_message_time=").concat(t,"&fetch_messages_count=").concat(w),{method:"GET",headers:k(r)}).then((function(e){var t=j(e);return t||e.json()})).then((function(e){e.badStatusText?(n(G(e)),localStorage.removeItem("token")):(e=_(e,a().currentChat.backwardPreprocessorFunction),n({type:K,payload:e}))})).catch((function(e){console.log("error",e)}))}}function re(e,t){return function(n,a){var r=localStorage.token;r&&fetch("".concat(m).concat(p,"?chat_id=").concat(e,"&newest_message_time=").concat(t),{method:"GET",headers:k(r)}).then((function(e){var t=j(e);return t||e.json()})).then((function(e){e.badStatusText?(n(G(e)),localStorage.removeItem("token")):(e=_(e,a().currentChat.backwardPreprocessorFunction),n({type:X,payload:e}))})).catch((function(e){console.log("error",e)}))}}var se=n(19);var ce=Object(i.c)({messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return[].concat(Object(l.a)(e),[t.payload]);case Y:return t.payload;case K:var n=t.payload;return[].concat(Object(l.a)(n),Object(l.a)(e));case X:var a=t.payload;return[].concat(Object(l.a)(e),Object(l.a)(a));default:return e}},wasMessageReceived:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return t.payload;default:return e}},currentUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return t.payload;default:return e}},currentChat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return t.payload;case I:t.payload.reprocessorFunction;return Object(se.a)({},e,{},t.payload);default:return e}},chatsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return t.payload;default:return e}},isUserAuthenticated:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return t.payload;default:return e}},lastError:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return t.payload;case x:return null;default:return e}},usersList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return t.payload;default:return e}}});n(31);var oe=n(1),ie=n(2),ue=n(4),le=n(3),me=n(5),de=function(e){function t(){var e,n;Object(oe.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(ue.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",users:[]},n.onSubmit=function(e){e.preventDefault(),n.props.onSubmitNewChat(n.state.name,[n.props.currentUserId]),n.setState({name:"",users:[]})},n.updateChatNameValue=function(e){n.setState({name:e.target.value})},n}return Object(me.a)(t,e),Object(ie.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h4",null,"+Chat"),r.a.createElement("input",{name:"chatName",placeholder:"chat name",type:"text",value:this.state.name,onChange:this.updateChatNameValue}),r.a.createElement("button",{type:"submit"},"Create new chat"))}}]),t}(r.a.Component);function he(e){var t=new Date(e.time),n=t.getHours(),a=t.getMinutes(),s=t.getDate(),c=t.getMonth()+1,o=t.getFullYear();return r.a.createElement("div",null,r.a.createElement("p",null,n,":",a," ",s,".",c,".",o))}function pe(e){var t,n=e.message;return t=e.currentUserEmail===n.authorEmail?"current_user_message":"another_user_message",r.a.createElement("div",{className:t},r.a.createElement("div",null,r.a.createElement("p",null,n.authorName)),r.a.createElement("div",null,r.a.createElement("p",null,n.authorEmail)),r.a.createElement("div",null,r.a.createElement("p",null,n.text)),r.a.createElement(he,{time:n.time}))}var fe=function(e){function t(){var e,n;Object(oe.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(ue.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(r)))).state={newMessage:""},n.onSubmit=function(e){e.preventDefault(),n.props.onSubmitNewMessage(n.state.newMessage),n.setState({newMessage:""})},n.updateInputValue=function(e){n.setState({newMessage:e.target.value})},n}return Object(me.a)(t,e),Object(ie.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"new-message-input",onSubmit:this.onSubmit},r.a.createElement("h4",null,"+Message"),r.a.createElement("input",{name:"userMessage",placeholder:"message text",type:"text",value:this.state.newMessage,onChange:this.updateInputValue}),r.a.createElement("button",{type:"submit"},"Send message"))}}]),t}(r.a.Component),ge=(n(32),function(e){function t(e){var n;return Object(oe.a)(this,t),(n=Object(ue.a)(this,Object(le.a)(t).call(this,e))).componentDidMount=function(){n.fetchMessages(),n.initializeMessagesListUpdateTimer()},n.componentDidUpdate=function(){var e=n.props.messages,t=n.messageListRef.current;if(e){var a=e.length;a!==n.state.previousMessagesLength&&(n.setState({previousMessagesLength:a}),t.scrollTop+=30,n.scrollDownIfEnabled(),n.tryLoadMessagesUntilScrollAppears())}},n.initializeMessagesListUpdateTimer=function(){n.timerID=setInterval((function(){return n.fetchNewMessages()}),y)},n.fetchMessages=function(){var e=n.props.currentChat,t=n.props.messages;if(e&&e._id&&t){var a=(new Date).getTime(),r=t.length?t[0].time:a;n.props.fetchMessagesList(e._id,r)}},n.fetchNewMessages=function(){var e=n.props.currentChat,t=n.props.messages;if(e&&e._id&&t){var a=t.length-1;a<0?n.fetchMessages():n.props.fetchNewMessages(e._id,t[a].time)}},n.scrollDownIfEnabled=function(){n.state.enableScrollDown&&(n.setState({enableScrollDown:!1}),n.scrollDown())},n.scrollDown=function(){var e=n.messageListRef.current;e.scrollTop=e.scrollHeight},n.renderMessageList=function(){var e=n.props,t=e.messages,a=e.currentUser,s=t.length;if(t&&s)return t.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(pe,{key:t,message:e,currentUserEmail:a.email}))}))},n.onScrollDownClick=function(){n.scrollDown()},n.onScroll=function(){n.messageListRef.current.scrollTop<30&&n.fetchMessages()},n.sendNewMessage=function(e){n.props.sendNewMessage(e),n.setState({enableScrollDown:!0})},n.messageListRef=r.a.createRef(),n.state={enableScrollDown:!0,previousMessagesLength:0},n}return Object(me.a)(t,e),Object(ie.a)(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tryLoadMessagesUntilScrollAppears",value:function(){var e=this.messageListRef.current;e.offsetWidth<=e.clientWidth&&this.fetchMessages()}},{key:"render",value:function(){var e=(new DOMParser).parseFromString("<!doctype html><body>".concat("&#11015"),"text/html").body.textContent;return r.a.createElement("div",null,r.a.createElement("div",{className:"scroll-down-button",onClick:this.onScrollDownClick},e),r.a.createElement("div",{ref:this.messageListRef,className:"message-list",onScroll:this.onScroll},this.renderMessageList()),r.a.createElement(fe,{onSubmitNewMessage:this.sendNewMessage}))}}]),t}(r.a.Component)),ve=Object(o.b)((function(e){return{messages:e.messages,currentChat:e.currentChat,currentUser:e.currentUser}}),(function(e){return{fetchMessagesList:function(t,n){return e(ae(t,n))},fetchNewMessages:function(t,n){return e(re(t,n))}}}))(ge),be=function(e){function t(){var e,n;Object(oe.a)(this,t);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(n=Object(ue.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(s)))).onSelectChat=function(){var e=n.props.chat;n.props.onSelectChat(e)},n.renderUsersList=function(e){if(e&&e.length)return e.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",null,e.name))}))},n}return Object(me.a)(t,e),Object(ie.a)(t,[{key:"render",value:function(){var e=this.props.chat;return r.a.createElement("div",{className:"selected-item",onClick:this.onSelectChat},r.a.createElement("div",null,r.a.createElement("h4",null,e.name)),r.a.createElement("div",null,r.a.createElement("p",null,"Chat members:"),r.a.createElement("div",null,this.renderUsersList(e.users))))}}]),t}(r.a.Component),Ee=(n(33),function(e){function t(){var e,n;Object(oe.a)(this,t);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(n=Object(ue.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(s)))).renderChatList=function(){var e=n.props,t=e.chatsList,a=e.changeCurrentChat;if(t&&t.length)return t.map((function(e){return r.a.createElement(be,{onSelectChat:a,key:e._id,chat:e})}))},n}return Object(me.a)(t,e),Object(ie.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.currentUser._id;e&&this.props.fetchChatsList(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"\u0441hat-list"},this.renderChatList())}}]),t}(r.a.Component)),Se=Object(o.b)((function(e){return{chatsList:e.chatsList,currentUser:e.currentUser}}),(function(e){return{fetchChatsList:function(t){return e(Q(t))},changeCurrentChat:function(t){return e(z(t))}}}))(Ee),we=function(e){function t(){var e,n;Object(oe.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(ue.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(r)))).onUserClick=function(){var e=n.props.user;n.props.onUserClick(e)},n}return Object(me.a)(t,e),Object(ie.a)(t,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"selected-item",onClick:this.onUserClick},r.a.createElement("p",null,e.name),r.a.createElement("p",null,e.email))}}]),t}(r.a.Component),ye=function(e){function t(){var e,n;Object(oe.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(ue.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(r)))).state={userSeekData:""},n.onSubmit=function(e){e.preventDefault(),n.props.onSubmitUserSeekData(n.state.userSeekData),n.setState({searchQueryString:""})},n.updateSearchQueryString=function(e){n.setState({userSeekData:e.target.value})},n}return Object(me.a)(t,e),Object(ie.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h1",null,"Search for a new member"),r.a.createElement("label",null,"Enter email"),r.a.createElement("input",{name:"userEmail",placeholder:"User email",type:"text",value:this.state.userSeekData,onChange:this.updateSearchQueryString}),r.a.createElement("button",{type:"submit"},"Find users"))}}]),t}(r.a.Component),Ce=function(e){function t(){var e,n;Object(oe.a)(this,t);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(n=Object(ue.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(s)))).onSubmitUserSeekData=function(e){n.props.findUsers(e)},n.renderUsersList=function(){var e=n.props,t=e.usersList,a=e.onUserClick;if(t&&t.length)return t.map((function(e){return r.a.createElement(we,{onUserClick:a,key:e._id,user:e})}))},n}return Object(me.a)(t,e),Object(ie.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"cover-div"},r.a.createElement("div",{className:"modal-window"},r.a.createElement(ye,{onSubmitUserSeekData:this.onSubmitUserSeekData}),this.renderUsersList(),r.a.createElement("button",{onClick:this.props.onCancelClick},"Cancel")))}}]),t}(r.a.Component),Oe=function(e){function t(){var e,n;Object(oe.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(ue.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(r)))).state={file:null,filePath:""},n.onSubmit=function(e){var t=n.state.file,a=n.props.onSubmit;e.preventDefault(),t&&a(t)},n.updateMessagesPreprocessorFile=function(e){n.setState({file:e.target.files[0],filePath:e.target.value})},n}return Object(me.a)(t,e),Object(ie.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"cover-div"},r.a.createElement("div",{className:"modal-window"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h4",null,"+Chat"),r.a.createElement("input",{name:"messagesPreprocessorFile",type:"file",value:this.state.filePath,onChange:this.updateMessagesPreprocessorFile}),r.a.createElement("button",{type:"submit"},"Add special messages preprocessor"),r.a.createElement("button",{onClick:this.props.onCancelClick},"Cancel"))))}}]),t}(r.a.Component),Ue=function(e){function t(e){var n;return Object(oe.a)(this,t),(n=Object(ue.a)(this,Object(le.a)(t).call(this,e))).onAddUserButtonClick=function(){n.setState({showAddedUserMenu:!0})},n.onAddSpecialMessagesPreprocessorButtonClick=function(){n.setState({showSpecialMessagesPreprocessorMenu:!0})},n.addNewUserToCurrentChat=function(e){n.cancelUserAdding(),n.props.addNewUserToCurrentChat(e)},n.cancelUserAdding=function(){n.setState({showAddedUserMenu:!1})},n.addNewSpecialMessagesPreprocessor=function(e){n.cancelSpecialMessagesPreprocessorAdding(),n.props.addNewSpecialMessagesPreprocessor(e)},n.cancelSpecialMessagesPreprocessorAdding=function(){n.setState({showSpecialMessagesPreprocessorMenu:!1})},n.renderAddedUserWindow=function(){var e=n.state,t=e.showAddedUserMenu,a=e.showSpecialMessagesPreprocessorMenu,s=n.props,c=s.currentChat,o=s.findUsers,i=s.usersList;return t?r.a.createElement(Ce,{findUsers:o,usersList:i,onUserClick:n.addNewUserToCurrentChat,onCancelClick:n.cancelUserAdding}):a?r.a.createElement(Oe,{currentChat:c,onSubmit:n.addNewSpecialMessagesPreprocessor,onCancelClick:n.cancelSpecialMessagesPreprocessorAdding}):c._id?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:n.onAddUserButtonClick},"Add new user to chat"),r.a.createElement("button",{onClick:n.onAddSpecialMessagesPreprocessorButtonClick},"Add special messages preprocessor")):void 0},n.state={showAddedUserMenu:!1,showSpecialMessagesPreprocessorMenu:!1},n}return Object(me.a)(t,e),Object(ie.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("span",null,"Chat: ",this.props.currentChat.name),this.renderAddedUserWindow())}}]),t}(r.a.Component),ke=Object(o.b)((function(e){return{currentChat:e.currentChat,usersList:e.usersList}}),(function(e){return{findUsers:function(t){return e(Z(t))},addNewUserToCurrentChat:function(t){return e(function(e){return function(t,n){var a=localStorage.token;if(a){var r=n().currentChat;fetch(m+S,{method:"POST",headers:k(a),body:JSON.stringify({chatId:r._id,newUserId:e._id})}).then((function(e){var t=j(e);return t||e.json()})).then((function(e){e.badStatusText?t(G(e)):t(z(e.chat))})).catch((function(e){console.log("error",e)}))}}}(t))},addNewSpecialMessagesPreprocessor:function(t){return e(function(e){return function(t,n){var a,r,s,c,o,i;return O.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(e){u.next=2;break}return u.abrupt("return");case 2:return u.next=4,O.a.awrap(M(e));case 4:if(a=u.sent,(l=a)&&""!=l.trim()){u.next=8;break}return t(H({message:"File is empty or has wrong format"})),u.abrupt("return");case 8:if((r=JSON.parse(a)).forward&&r.backward){u.next=12;break}return t(H({message:"File has wrong format"})),u.abrupt("return");case 12:s=new Function("text",r.forward),c=new Function("text",r.backward),o=n(),i=o.currentChat,localStorage.setItem(i._id,a),t(J(s,c));case 17:case"end":return u.stop()}var l}))}}(t))}}}))(Ue),je=function(e){function t(){var e,n;Object(oe.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(ue.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},n.onSubmit=function(e){e.preventDefault(),n.props.onSubmit(n.state.email,n.state.password),n.setState({email:"",password:""})},n.updateUserEmailValue=function(e){n.setState({email:e.target.value})},n.updateUserPasswordValue=function(e){n.setState({password:e.target.value})},n}return Object(me.a)(t,e),Object(ie.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit,className:"reg-auth-form"},r.a.createElement("h3",null,"Login"),r.a.createElement("label",null,"User email"),r.a.createElement("input",{name:"userEmail",placeholder:"User email",type:"text",value:this.state.email,onChange:this.updateUserEmailValue}),r.a.createElement("br",null),r.a.createElement("label",null,"User password"),r.a.createElement("input",{name:"userPassword",placeholder:"User password",type:"text",value:this.state.password,onChange:this.updateUserPasswordValue}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Submit"))}}]),t}(r.a.Component),Ne=function(e){function t(){var e,n;Object(oe.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(ue.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",name:"",password:""},n.onSubmit=function(e){e.preventDefault();var t=n.state,a={email:t.email,name:t.name,password:t.password};n.props.onSubmit(a),n.setState({email:"",name:"",password:""})},n.updateUserEmailValue=function(e){n.setState({email:e.target.value})},n.updateUserNameValue=function(e){n.setState({name:e.target.value})},n.updateUserPasswordValue=function(e){n.setState({password:e.target.value})},n}return Object(me.a)(t,e),Object(ie.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit,className:"reg-auth-form"},r.a.createElement("h3",null,"New user registration"),r.a.createElement("label",null,"User email"),r.a.createElement("input",{name:"userEmail",placeholder:"User email",type:"text",value:this.state.email,onChange:this.updateUserEmailValue}),r.a.createElement("br",null),r.a.createElement("label",null,"User name"),r.a.createElement("input",{name:"userName",placeholder:"User name",type:"text",value:this.state.name,onChange:this.updateUserNameValue}),r.a.createElement("br",null),r.a.createElement("label",null,"User password"),r.a.createElement("input",{name:"userPassword",placeholder:"User password",type:"text",value:this.state.password,onChange:this.updateUserPasswordValue}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Send new user registration data"))}}]),t}(r.a.Component);function Me(e){return r.a.createElement("div",null,r.a.createElement("button",{onClick:e.onSignOut},"Sign out"),r.a.createElement("span",null,e.currentUserName))}function _e(e){var t,n,a,s=e.lastError,c=s.status,o=s.badStatusText,i=s.message;return c&&(t=r.a.createElement("p",null,"Status: ",c)),c&&(n=r.a.createElement("p",null,"Status text: ",o)),c&&(a=r.a.createElement("p",null,"Message: ",i)),r.a.createElement("div",{className:"moda-window"},r.a.createElement("div",null,r.a.createElement("h4",null,"Error")),r.a.createElement("div",null,t,n,a),r.a.createElement("button",{onClick:e.onOk},"Ok"))}n(34);var Ae=function(e){function t(){var e,n;Object(oe.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(ue.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(r)))).onSignOut=function(){n.props.resetAuthenticationResult()},n}return Object(me.a)(t,e),Object(ie.a)(t,[{key:"renderChatListNewChatForm",value:function(){if(this.props.currentUser._id)return r.a.createElement("div",null,r.a.createElement(Se,null),r.a.createElement(de,{onSubmitNewChat:this.props.createNewChat,currentUserId:this.props.currentUser._id}))}},{key:"renderMessageList",value:function(){if(this.props.currentUser._id&&this.props.currentChat._id)return r.a.createElement(ve,{sendNewMessage:this.props.sendNewMessage})}},{key:"renderErrorWindow",value:function(){if(this.props.lastError)return r.a.createElement("div",{className:"cover-div"},r.a.createElement(_e,{className:"modal-window",onOk:this.props.clearLastError,lastError:this.props.lastError}))}},{key:"renderMainContent",value:function(){return this.props.isUserAuthenticated?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-panel"},r.a.createElement("div",{className:"user-chats-panel"},this.renderChatListNewChatForm()),r.a.createElement("div",{className:"current-chat-panel"},this.renderMessageList())),r.a.createElement("div",{className:"top-panel"},r.a.createElement(Me,{className:"settings-panel",onSignOut:this.onSignOut,currentUserName:this.props.currentUser.name}),r.a.createElement(ke,{className:"current-chat-settings"}))):r.a.createElement(r.a.Fragment,null,this.renderErrorWindow(),r.a.createElement("div",{className:"reg-auth-forms-panel"},r.a.createElement(Ne,{onSubmit:this.props.submitNewUser}),r.a.createElement(je,{onSubmit:this.props.submitUserEmailAndPassword})))}},{key:"render",value:function(){return r.a.createElement("div",{className:"app-panel"},this.renderMainContent())}}]),t}(r.a.Component),Le=Object(o.b)((function(e){return{currentUser:e.currentUser,currentChat:e.currentChat,wasMessageReceived:e.wasMessageReceived,isUserAuthenticated:e.isUserAuthenticated,lastError:e.lastError}}),(function(e){return{createNewChat:function(t,n){return e((a=t,r=n,function(e,t){var n=localStorage.token;if(n){var s={chat:{name:a,users:r}};fetch(m+f,{method:"POST",headers:k(n),body:JSON.stringify(s)}).then((function(e){var t=j(e);return t||e.json()})).then((function(n){if(n.status)e(G(n));else{var a=t().currentUser;e(z(n.chat)),e(Q(a._id))}})).catch((function(e){console.log("error",e)}))}}));var a,r},sendNewMessage:function(t){return e(ne(t))},submitUserEmailAndPassword:function(t,n){return e((a=t,r=n,function(e){if(N(a)){var t={user:{email:a,name:"",password:r}};fetch(m+v,{method:"POST",headers:U,body:JSON.stringify(t)}).then((function(e){var t=j(e);return t||e.json()})).then((function(t){if(t.badStatusText)e(G(t)),e(W(!1));else{var n=t.user,a=n._id,r=n.token;localStorage.setItem("token",r),e(F(t.user)),e(W(!0)),e(Q(a))}})).catch((function(e){console.log("error",e)}))}else e(H({message:"Bad email: ".concat(a)}))}));var a,r},submitNewUser:function(t){return e(function(e){return function(t){N(e.email)?fetch(m+b,{method:"POST",headers:U,body:JSON.stringify({user:e})}).then((function(e){var t=j(e);return t||e.json()})).then((function(e){if(e.badStatusText)t(G(e)),t(W(!1));else{var n=e.user,a=n._id,r=n.token;localStorage.setItem("token",r),t(F(e.user)),t(V({})),t(W(!0)),t(Q(a))}})).catch((function(e){console.log("error",e)})):t(H({message:"Bad email: ".concat(e.email)}))}}(t))},resetAuthenticationResult:function(){return e(B())},clearLastError:function(){return e({type:x})}}}))(Ae);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Te=Object(i.d)(ce,Object(i.a)(u.a));c.a.render(r.a.createElement(o.a,{store:Te},r.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.a9f56d03.chunk.js.map