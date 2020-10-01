(this.webpackJsonpwhisper=this.webpackJsonpwhisper||[]).push([[0],{20:function(e,t,a){e.exports=a(35)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),c=a.n(s),o=a(7),u=a(9),i=a(19),l=a(11),p=a(1),m=a.n(p),d="http://localhost:4000/",h="messages/new/",f="messages/listRequest/",v="messages/lastMessages/",g="chats/new/",b="chats/listRequest/",w="users/login/",S="users/new/",E="users/search/",y="chats/addNewUser/",C=15,k=1e4,O=a(13),x={Accept:"application/json","Content-Type":"application/json"};function U(e){return{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}function N(e){if(!e.ok)return{status:e.status,badStatusText:e.statusText,message:e.message}}function j(e){return/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(e)}function M(e){return new Promise((function(t,a){var n=new FileReader;n.onload=function(){t(n.result)},n.onerror=a,n.readAsText(e)}))}function _(){var e,t,a;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=localStorage,t=e.userJson){n.next=3;break}return n.abrupt("return",null);case 3:return n.next=5,m.a.awrap(JSON.parse(t));case 5:if(a=n.sent){n.next=8;break}return n.abrupt("return",null);case 8:return n.abrupt("return",a.token?a.token:null);case 9:case"end":return n.stop()}}))}var A="CHANGE_CURRENT_USER",L="CHANGE_CURRENT_CHAT",T="REFRESH_CHATS_LIST",D="SET_AUTHENTICATION_RESULT",P="SET_LAST_ERROR",I="FILL_FOUND_USERS_LIST",R="CLEAR_LAST_ERROR",F="ADD_NEW_SPECIAL_MESSAGES_PREPROCESSOR_FUNCTION";function J(e){return{type:A,payload:e}}function W(e){return{type:L,payload:e}}function V(e){return{type:D,payload:e}}function G(e){return function(t){401===e.status&&t(B()),t(H(e))}}function H(e){return{type:P,payload:e}}function B(){return function(e){localStorage.removeItem("userJson"),e(V(!1))}}function z(e,t){return{type:F,payload:{forwardPreprocessorFunction:e,backwardPreprocessorFunction:t}}}function Q(e){return function(t){var a,n,r=localStorage.getItem(e._id);if(r){var s=JSON.parse(r);a=new Function("text",s.forward),n=new Function("text",s.backward)}t(W(e)),t({type:ee}),a&&n&&t(z(a,n))}}function Z(e){return function(t){var a,n,r;return m.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,m.a.awrap(_());case 3:if(a=s.sent){s.next=6;break}return s.abrupt("return");case 6:return s.next=8,m.a.awrap(fetch("".concat(d).concat(b,"?user_id=").concat(e),{method:"GET",headers:U(a)}));case 8:if(n=s.sent,r=N(n)){s.next=14;break}return s.next=13,m.a.awrap(n.json());case 13:r=s.sent;case 14:r.badStatusText?(t(G(r)),localStorage.removeItem("token"),localStorage.removeItem("userJson")):t({type:T,payload:r}),s.next=20;break;case 17:s.prev=17,s.t0=s.catch(0),console.log("error",s.t0);case 20:case"end":return s.stop()}}),null,null,[[0,17]])}}var q="ADD_NEW_MESSAGE",$="MESSAGE_WAS_RECEIVED",Y="REFRESH_MESSAGES_LIST",K="UNSHIFT_PREVIOUS_MESSAGES",X="PUSH_NEW_MESSAGES",ee="CLEAR_MESSAGES";function te(e){return{type:q,payload:e}}function ae(e){return{type:$,payload:e}}function ne(e){return function(t,a){var n=a().currentChat.forwardPreprocessorFunction;n&&(e=n(e)),t(function(e){return function(t,a){var n,r,s,c,o,u,i,l;return m.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:return p.prev=0,p.next=3,m.a.awrap(_());case 3:if(n=p.sent){p.next=6;break}return p.abrupt("return");case 6:return t(ae(!1)),r=(new Date).getTime(),s=a().currentUser.email,c=a().currentUser.name,o=a().currentChat._id,u={chatId:o,time:r,authorEmail:s,authorName:c,text:e},p.next=14,m.a.awrap(fetch(d+h,{method:"POST",headers:U(n),body:JSON.stringify(u)}));case 14:if(i=p.sent,l=N(i)){p.next=20;break}return p.next=19,m.a.awrap(i.json());case 19:l=p.sent;case 20:l.status?(t(G(l)),u.wasMessageReceived=!1,t(te(u)),localStorage.removeItem("token")):(u.wasMessageReceived=!0,t(te(u)),t(ae(!0))),p.next=26;break;case 23:p.prev=23,p.t0=p.catch(0),console.log("error",p.t0);case 26:case"end":return p.stop()}}),null,null,[[0,23]])}}(e))}}function re(e){return function(t,a){var n=a().currentChat.backwardPreprocessorFunction;n&&(e=function(e,t){return t&&(e=e.map((function(e){var a=t(e.text);return Object(O.a)({},e,{text:a})}))),e}(e,n)),t(function(e){return{type:X,payload:e}}(e))}}var se=Object(u.c)({messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return[];case q:return[].concat(Object(l.a)(e),[t.payload]);case Y:return t.payload;case K:var a=t.payload;return[].concat(Object(l.a)(a),Object(l.a)(e));case X:var n=t.payload;return[].concat(Object(l.a)(e),Object(l.a)(n));default:return e}},wasMessageReceived:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return t.payload;default:return e}},currentUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return t.payload;default:return e}},currentChat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return t.payload;case F:return Object(O.a)({},e,{},t.payload);default:return e}},chatsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return t.payload;default:return e}},isUserAuthenticated:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return t.payload;default:return e}},lastError:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return t.payload;case R:return null;default:return e}},usersList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return t.payload;default:return e}}}),ce=function(){var e=null;return function(t){return function(a){return function(n){switch(n.type){case"WS_CONNECT":null!==e&&e.close(),(e=new WebSocket(n.host)).onmessage=function(e){return function(t){var a=JSON.parse(t.data);switch(a.actionType){case"updateOne":var n=[a.message];e.dispatch(re(n))}}}(t),e.onclose=function(e){return function(){var t;e.dispatch({type:"WS_DISCONNECTED",host:t})}}(t),e.onopen=function(e){return function(t){e.dispatch({type:"WS_CONNECTED",host:t.target.url})}}(t);break;case"WS_DISCONNECT":null!==e&&e.close(),e=null;break;default:return a(n)}}}}}();a(31);var oe=a(2),ue=a(3),ie=a(5),le=a(4),pe=a(6),me=function(e){function t(){var e,a;Object(oe.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(ie.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",users:[]},a.onSubmit=function(e){e.preventDefault(),a.props.onSubmitNewChat(a.state.name,[a.props.currentUserId]),a.setState({name:"",users:[]})},a.updateChatNameValue=function(e){a.setState({name:e.target.value})},a}return Object(pe.a)(t,e),Object(ue.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h4",null,"+Chat"),r.a.createElement("input",{name:"chatName",placeholder:"chat name",type:"text",value:this.state.name,onChange:this.updateChatNameValue}),r.a.createElement("button",{type:"submit"},"Create new chat"))}}]),t}(r.a.Component);function de(e){return e<10?"0"+e:e}function he(e){var t=new Date(e.time),a=de(t.getHours()),n=de(t.getMinutes()),s=de(t.getDate()),c=de(t.getMonth()+1),o=t.getFullYear();return r.a.createElement("div",null,r.a.createElement("p",null,a,":",n," ",s,".",c,".",o))}function fe(e){var t,a=e.message;return t=e.currentUserEmail===a.authorEmail?"current_user_message":"another_user_message",r.a.createElement("div",{className:t},r.a.createElement("div",null,r.a.createElement("p",null,a.authorName)),r.a.createElement("div",null,r.a.createElement("p",null,a.authorEmail)),r.a.createElement("div",null,r.a.createElement("p",null,a.text)),r.a.createElement(he,{time:a.time}))}var ve=function(e){function t(){var e,a;Object(oe.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(ie.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(r)))).state={newMessage:""},a.onSubmit=function(e){e.preventDefault(),a.props.onSubmitNewMessage(a.state.newMessage),a.setState({newMessage:""})},a.updateInputValue=function(e){a.setState({newMessage:e.target.value})},a}return Object(pe.a)(t,e),Object(ue.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"new-message-input",onSubmit:this.onSubmit},r.a.createElement("h4",null,"+Message"),r.a.createElement("input",{name:"userMessage",placeholder:"message text",type:"text",value:this.state.newMessage,onChange:this.updateInputValue}),r.a.createElement("button",{type:"submit"},"Send message"))}}]),t}(r.a.Component),ge=(a(32),function(e){function t(e){var a;return Object(oe.a)(this,t),(a=Object(ie.a)(this,Object(le.a)(t).call(this,e))).componentDidMount=function(){var e=a.props.currentChat;a.state.currentChat!==e&&a.setState({currentChat:e}),a.fetchMessages(),a.initializeMessagesListUpdateTimer()},a.componentDidUpdate=function(){var e=a.props,t=e.messages,n=e.currentChat,r=a.messageListRef.current;if(a.state.currentChat===n){if(t){var s=t.length;s!==a.state.previousMessagesLength&&(a.setState({previousMessagesLength:s}),a.setState({suspendMessagesFetching:!1}),r.scrollTop+=30,a.scrollDownIfEnabled())}}else a.reloadMessagesList()},a.reloadMessagesList=function(){a.setState({currentChat:a.props.currentChat}),a.fetchMessagesForced(),a.setState({suspendMessagesFetching:!0})},a.initializeMessagesListUpdateTimer=function(){a.timerID=setInterval((function(){a.fetchNewMessages(),a.tryLoadMessagesUntilScrollAppears()}),k)},a.fetchMessages=function(){a.state.suspendMessagesFetching||a.fetchMessagesForced()},a.fetchMessagesForced=function(){var e=a.props.currentChat,t=a.props.messages;if(e&&e._id&&t){var n=(new Date).getTime(),r=t.length?t[0].time:n;a.props.fetchMessagesList(e._id,r)}},a.fetchNewMessages=function(){var e=a.props.currentChat,t=a.props.messages;if(e&&e._id&&t){var n=t.length-1;n<0?a.fetchMessages():a.props.fetchNewMessages(e._id,t[n].time)}},a.scrollDownIfEnabled=function(){a.state.enableScrollDown&&(a.setState({enableScrollDown:!1}),a.scrollDown())},a.scrollDown=function(){var e=a.messageListRef.current;e.scrollTop=e.scrollHeight},a.renderMessageList=function(){var e=a.props,t=e.messages,n=e.currentUser,s=t.length;if(t&&s)return t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(fe,{message:e,currentUserEmail:n.email}))}))},a.onScrollDownClick=function(){a.scrollDown()},a.onScroll=function(){a.messageListRef.current.scrollTop<20&&(a.setState({suspendMessagesFetching:!0}),a.fetchMessages())},a.sendNewMessage=function(e){a.props.sendNewMessage(e),a.setState({enableScrollDown:!0})},a.messageListRef=r.a.createRef(),a.state={enableScrollDown:!0,previousMessagesLength:0,suspendMessagesFetching:!1,currentChat:null},a}return Object(pe.a)(t,e),Object(ue.a)(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tryLoadMessagesUntilScrollAppears",value:function(){var e=this.messageListRef.current;e.offsetWidth<=e.clientWidth&&this.fetchMessages()}},{key:"render",value:function(){var e=(new DOMParser).parseFromString("<!doctype html><body>".concat("&#11015"),"text/html").body.textContent;return r.a.createElement("div",null,r.a.createElement("div",{className:"scroll-down-button",onClick:this.onScrollDownClick},e),r.a.createElement("div",{ref:this.messageListRef,className:"message-list",onScroll:this.onScroll},this.renderMessageList()),r.a.createElement(ve,{onSubmitNewMessage:this.sendNewMessage}))}}]),t}(r.a.Component)),be=Object(o.b)((function(e){return{messages:e.messages,currentChat:e.currentChat,currentUser:e.currentUser}}),(function(e){return{fetchMessagesList:function(t,a){return e(function(e,t){return function(a,n){var r,s,c;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m.a.awrap(_());case 3:if(r=n.sent){n.next=6;break}return n.abrupt("return");case 6:return n.next=8,m.a.awrap(fetch("".concat(d).concat(f,"?chat_id=").concat(e,"&oldest_message_time=").concat(t,"&fetch_messages_count=").concat(C),{method:"GET",headers:U(r)}));case 8:if(s=n.sent,c=N(s)){n.next=14;break}return n.next=13,m.a.awrap(s.json());case 13:c=n.sent;case 14:c.badStatusText?(a(G(c)),localStorage.removeItem("token")):a(re(c)),n.next=20;break;case 17:n.prev=17,n.t0=n.catch(0),console.log("error",n.t0);case 20:case"end":return n.stop()}}),null,null,[[0,17]])}}(t,a))},fetchNewMessages:function(t,a){return e(function(e,t){return function(a,n){var r,s,c;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m.a.awrap(_());case 3:if(r=n.sent){n.next=6;break}return n.abrupt("return");case 6:return n.next=8,m.a.awrap(fetch("".concat(d).concat(v,"?chat_id=").concat(e,"&newest_message_time=").concat(t),{method:"GET",headers:U(r)}));case 8:if(s=n.sent,c=N(s)){n.next=14;break}return n.next=13,m.a.awrap(s.json());case 13:c=n.sent;case 14:c.badStatusText?(a(G(c)),localStorage.removeItem("token")):a(re(c)),n.next=20;break;case 17:n.prev=17,n.t0=n.catch(0),console.log("error",n.t0);case 20:case"end":return n.stop()}}),null,null,[[0,17]])}}(t,a))}}}))(ge),we=function(e){function t(){var e,a;Object(oe.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(ie.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(s)))).onSelectChat=function(){var e=a.props.chat;a.props.onSelectChat(e)},a.renderUsersList=function(e){if(e&&e.length)return e.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",null,e.name))}))},a}return Object(pe.a)(t,e),Object(ue.a)(t,[{key:"render",value:function(){var e=this.props.chat;return r.a.createElement("div",{className:"selected-item",onClick:this.onSelectChat},r.a.createElement("div",null,r.a.createElement("h4",null,e.name)),r.a.createElement("div",null,r.a.createElement("p",null,"Chat members:"),r.a.createElement("div",null,this.renderUsersList(e.users))))}}]),t}(r.a.Component),Se=(a(33),function(e){function t(){var e,a;Object(oe.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(ie.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(s)))).renderChatList=function(){var e=a.props,t=e.chatsList,n=e.changeCurrentChat;if(t&&t.length)return t.map((function(e){return r.a.createElement(we,{onSelectChat:n,key:e._id,chat:e})}))},a}return Object(pe.a)(t,e),Object(ue.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.currentUser._id;e&&this.props.fetchChatsList(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"\u0441hat-list"},this.renderChatList())}}]),t}(r.a.Component)),Ee=Object(o.b)((function(e){return{chatsList:e.chatsList,currentUser:e.currentUser}}),(function(e){return{fetchChatsList:function(t){return e(Z(t))},changeCurrentChat:function(t){return e(Q(t))}}}))(Se),ye=function(e){function t(){var e,a;Object(oe.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(ie.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(r)))).onUserClick=function(){var e=a.props.user;a.props.onUserClick(e)},a}return Object(pe.a)(t,e),Object(ue.a)(t,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"selected-item",onClick:this.onUserClick},r.a.createElement("p",null,e.name),r.a.createElement("p",null,e.email))}}]),t}(r.a.Component),Ce=function(e){function t(){var e,a;Object(oe.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(ie.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(r)))).state={userSeekData:""},a.onSubmit=function(e){e.preventDefault(),a.props.onSubmitUserSeekData(a.state.userSeekData),a.setState({searchQueryString:""})},a.updateSearchQueryString=function(e){a.setState({userSeekData:e.target.value})},a}return Object(pe.a)(t,e),Object(ue.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h1",null,"Search for a new member"),r.a.createElement("label",null,"Enter email"),r.a.createElement("input",{name:"userEmail",placeholder:"User email",type:"text",value:this.state.userSeekData,onChange:this.updateSearchQueryString}),r.a.createElement("button",{type:"submit"},"Find users"))}}]),t}(r.a.Component),ke=function(e){function t(){var e,a;Object(oe.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(ie.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(s)))).onSubmitUserSeekData=function(e){a.props.findUsers(e)},a.renderUsersList=function(){var e=a.props,t=e.usersList,n=e.onUserClick;if(t&&t.length)return t.map((function(e){return r.a.createElement(ye,{onUserClick:n,key:e._id,user:e})}))},a}return Object(pe.a)(t,e),Object(ue.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"cover-div"},r.a.createElement("div",{className:"modal-window"},r.a.createElement(Ce,{onSubmitUserSeekData:this.onSubmitUserSeekData}),this.renderUsersList(),r.a.createElement("button",{onClick:this.props.onCancelClick},"Cancel")))}}]),t}(r.a.Component),Oe=function(e){function t(){var e,a;Object(oe.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(ie.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(r)))).state={file:null,filePath:""},a.onSubmit=function(e){var t=a.state.file,n=a.props.onSubmit;e.preventDefault(),t&&n(t)},a.updateMessagesPreprocessorFile=function(e){a.setState({file:e.target.files[0],filePath:e.target.value})},a}return Object(pe.a)(t,e),Object(ue.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"cover-div"},r.a.createElement("div",{className:"modal-window"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h4",null,"+Chat"),r.a.createElement("input",{name:"messagesPreprocessorFile",type:"file",value:this.state.filePath,onChange:this.updateMessagesPreprocessorFile}),r.a.createElement("button",{type:"submit"},"Add special messages preprocessor"),r.a.createElement("button",{onClick:this.props.onCancelClick},"Cancel"))))}}]),t}(r.a.Component),xe=function(e){function t(e){var a;return Object(oe.a)(this,t),(a=Object(ie.a)(this,Object(le.a)(t).call(this,e))).onAddUserButtonClick=function(){a.setState({showAddedUserMenu:!0})},a.onAddSpecialMessagesPreprocessorButtonClick=function(){a.setState({showSpecialMessagesPreprocessorMenu:!0})},a.addNewUserToCurrentChat=function(e){a.cancelUserAdding(),a.props.addNewUserToCurrentChat(e)},a.cancelUserAdding=function(){a.setState({showAddedUserMenu:!1})},a.addNewSpecialMessagesPreprocessor=function(e){a.cancelSpecialMessagesPreprocessorAdding(),a.props.addNewSpecialMessagesPreprocessor(e)},a.cancelSpecialMessagesPreprocessorAdding=function(){a.setState({showSpecialMessagesPreprocessorMenu:!1})},a.renderAddedUserWindow=function(){var e=a.state,t=e.showAddedUserMenu,n=e.showSpecialMessagesPreprocessorMenu,s=a.props,c=s.currentChat,o=s.findUsers,u=s.usersList;return t?r.a.createElement(ke,{findUsers:o,usersList:u,onUserClick:a.addNewUserToCurrentChat,onCancelClick:a.cancelUserAdding}):n?r.a.createElement(Oe,{currentChat:c,onSubmit:a.addNewSpecialMessagesPreprocessor,onCancelClick:a.cancelSpecialMessagesPreprocessorAdding}):c._id?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:a.onAddUserButtonClick},"Add new user to chat"),r.a.createElement("button",{onClick:a.onAddSpecialMessagesPreprocessorButtonClick},"Add special messages preprocessor")):void 0},a.state={showAddedUserMenu:!1,showSpecialMessagesPreprocessorMenu:!1},a}return Object(pe.a)(t,e),Object(ue.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("span",null,"Chat: ",this.props.currentChat.name),this.renderAddedUserWindow())}}]),t}(r.a.Component),Ue=Object(o.b)((function(e){return{currentChat:e.currentChat,usersList:e.usersList}}),(function(e){return{findUsers:function(t){return e(function(e){return function(t){var a,n,r;return m.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,m.a.awrap(_());case 3:if(a=s.sent){s.next=6;break}return s.abrupt("return");case 6:return s.next=8,m.a.awrap(fetch("".concat(d).concat(E,"?user_seek_data=").concat(e),{method:"GET",headers:U(a)}));case 8:if(n=s.sent,r=N(n)){s.next=14;break}return s.next=13,m.a.awrap(n.json());case 13:r=s.sent;case 14:r.badStatusText?(t(G(r)),localStorage.removeItem("token"),localStorage.removeItem("userJson")):t({type:I,payload:r}),s.next=20;break;case 17:s.prev=17,s.t0=s.catch(0),console.log("error",s.t0);case 20:case"end":return s.stop()}}),null,null,[[0,17]])}}(t))},addNewUserToCurrentChat:function(t){return e(function(e){return function(t,a){var n,r,s,c,o;return m.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,u.next=3,m.a.awrap(_());case 3:if(n=u.sent){u.next=6;break}return u.abrupt("return");case 6:return r=a(),s=r.currentChat,u.next=9,m.a.awrap(fetch(d+y,{method:"POST",headers:U(n),body:JSON.stringify({chatId:s._id,newUserId:e._id})}));case 9:if(c=u.sent,o=N(c)){u.next=15;break}return u.next=14,m.a.awrap(c.json());case 14:o=u.sent;case 15:o.badStatusText?t(G(o)):t(Q(o.chat)),u.next=21;break;case 18:u.prev=18,u.t0=u.catch(0),console.log("error",u.t0);case 21:case"end":return u.stop()}}),null,null,[[0,18]])}}(t))},addNewSpecialMessagesPreprocessor:function(t){return e(function(e){return function(t,a){var n,r,s,c,o,u;return m.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(e){i.next=2;break}return i.abrupt("return");case 2:return i.next=4,m.a.awrap(M(e));case 4:if(n=i.sent,(l=n)&&""!==l.trim()){i.next=8;break}return t(H({message:"File is empty or has wrong format"})),i.abrupt("return");case 8:if((r=JSON.parse(n)).forward&&r.backward){i.next=12;break}return t(H({message:"File has wrong format"})),i.abrupt("return");case 12:s=new Function("text",r.forward),c=new Function("text",r.backward),o=a(),u=o.currentChat,localStorage.setItem(u._id,n),t(z(s,c));case 17:case"end":return i.stop()}var l}))}}(t))}}}))(xe),Ne=function(e){function t(){var e,a;Object(oe.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(ie.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.onSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.email,a.state.password),a.setState({email:"",password:""})},a.updateUserEmailValue=function(e){a.setState({email:e.target.value})},a.updateUserPasswordValue=function(e){a.setState({password:e.target.value})},a}return Object(pe.a)(t,e),Object(ue.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit,className:"reg-auth-form"},r.a.createElement("h3",null,"Login"),r.a.createElement("label",null,"User email"),r.a.createElement("input",{name:"userEmail",placeholder:"User email",type:"text",value:this.state.email,onChange:this.updateUserEmailValue}),r.a.createElement("br",null),r.a.createElement("label",null,"User password"),r.a.createElement("input",{name:"userPassword",placeholder:"User password",type:"text",value:this.state.password,onChange:this.updateUserPasswordValue}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Submit"))}}]),t}(r.a.Component),je=function(e){function t(){var e,a;Object(oe.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(ie.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",name:"",password:""},a.onSubmit=function(e){e.preventDefault();var t=a.state,n={email:t.email,name:t.name,password:t.password};a.props.onSubmit(n),a.setState({email:"",name:"",password:""})},a.updateUserEmailValue=function(e){a.setState({email:e.target.value})},a.updateUserNameValue=function(e){a.setState({name:e.target.value})},a.updateUserPasswordValue=function(e){a.setState({password:e.target.value})},a}return Object(pe.a)(t,e),Object(ue.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit,className:"reg-auth-form"},r.a.createElement("h3",null,"New user registration"),r.a.createElement("label",null,"User email"),r.a.createElement("input",{name:"userEmail",placeholder:"User email",type:"text",value:this.state.email,onChange:this.updateUserEmailValue}),r.a.createElement("br",null),r.a.createElement("label",null,"User name"),r.a.createElement("input",{name:"userName",placeholder:"User name",type:"text",value:this.state.name,onChange:this.updateUserNameValue}),r.a.createElement("br",null),r.a.createElement("label",null,"User password"),r.a.createElement("input",{name:"userPassword",placeholder:"User password",type:"text",value:this.state.password,onChange:this.updateUserPasswordValue}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Send new user registration data"))}}]),t}(r.a.Component);function Me(e){return r.a.createElement("div",null,r.a.createElement("button",{onClick:e.onSignOut},"Sign out"),r.a.createElement("span",null,e.currentUserName))}function _e(e){var t,a,n,s=e.lastError,c=s.status,o=s.badStatusText,u=s.message;return c&&(t=r.a.createElement("p",null,"Status: ",c)),c&&(a=r.a.createElement("p",null,"Status text: ",o)),c&&(n=r.a.createElement("p",null,"Message: ",u)),r.a.createElement("div",{className:"moda-window"},r.a.createElement("div",null,r.a.createElement("h4",null,"Error")),r.a.createElement("div",null,t,a,n),r.a.createElement("button",{onClick:e.onOk},"Ok"))}a(34);var Ae=function(e){function t(){var e,a;Object(oe.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(ie.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(r)))).onSignOut=function(){a.props.resetAuthenticationResult()},a}return Object(pe.a)(t,e),Object(ue.a)(t,[{key:"componentDidMount",value:function(){this.props.checkIsUserAuthenticated()}},{key:"renderChatListNewChatForm",value:function(){if(this.props.currentUser._id)return r.a.createElement("div",null,r.a.createElement(Ee,null),r.a.createElement(me,{onSubmitNewChat:this.props.createNewChat,currentUserId:this.props.currentUser._id}))}},{key:"renderMessageList",value:function(){if(this.props.currentUser._id&&this.props.currentChat._id)return r.a.createElement(be,{sendNewMessage:this.props.sendNewMessage})}},{key:"renderErrorWindow",value:function(){if(this.props.lastError)return r.a.createElement("div",{className:"cover-div"},r.a.createElement(_e,{className:"modal-window",onOk:this.props.clearLastError,lastError:this.props.lastError}))}},{key:"renderMainContent",value:function(){return this.props.isUserAuthenticated?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-panel"},r.a.createElement("div",{className:"user-chats-panel"},this.renderChatListNewChatForm()),r.a.createElement("div",{className:"current-chat-panel"},this.renderMessageList())),r.a.createElement("div",{className:"top-panel"},r.a.createElement(Me,{className:"settings-panel",onSignOut:this.onSignOut,currentUserName:this.props.currentUser.name}),r.a.createElement(Ue,{className:"current-chat-settings"}))):r.a.createElement(r.a.Fragment,null,this.renderErrorWindow(),r.a.createElement("div",{className:"reg-auth-forms-panel"},r.a.createElement(je,{onSubmit:this.props.submitNewUser}),r.a.createElement(Ne,{onSubmit:this.props.submitUserEmailAndPassword})))}},{key:"render",value:function(){return r.a.createElement("div",{className:"app-panel"},this.renderMainContent())}}]),t}(r.a.Component),Le=Object(o.b)((function(e){return{currentUser:e.currentUser,currentChat:e.currentChat,wasMessageReceived:e.wasMessageReceived,isUserAuthenticated:e.isUserAuthenticated,lastError:e.lastError}}),(function(e){return{checkIsUserAuthenticated:function(){return e((function(e){var t,a,n;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=localStorage,a=t.userJson,r.prev=1,a){r.next=4;break}return r.abrupt("return");case 4:return r.next=6,m.a.awrap(JSON.parse(a));case 6:n=r.sent,r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),localStorage.removeItem("userJson"),r.abrupt("return");case 13:e(J(n)),e(V(!0)),e(Z(n._id));case 16:case"end":return r.stop()}}),null,null,[[1,9]])}))},createNewChat:function(t,a){return e((n=t,r=a,function(e,t){var a,s,c,o,u,i;return m.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,m.a.awrap(_());case 3:if(a=l.sent){l.next=6;break}return l.abrupt("return");case 6:return s={chat:{name:n,users:r}},l.next=9,m.a.awrap(fetch(d+g,{method:"POST",headers:U(a),body:JSON.stringify(s)}));case 9:if(c=l.sent,o=N(c)){l.next=15;break}return l.next=14,m.a.awrap(c.json());case 14:o=l.sent;case 15:o.status?e(G(o)):(u=t(),i=u.currentUser,e(Q(o.chat)),e(Z(i._id))),l.next=21;break;case 18:l.prev=18,l.t0=l.catch(0),console.log("error",l.t0);case 21:case"end":return l.stop()}}),null,null,[[0,18]])}));var n,r},sendNewMessage:function(t){return e(ne(t))},submitUserEmailAndPassword:function(t,a){return e((n=t,r=a,function(e){var t,a,s,c;return m.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(o.prev=0,j(n)){o.next=4;break}return e(H({message:"Bad email: ".concat(n)})),o.abrupt("return");case 4:return t={user:{email:n,name:"",password:r}},o.next=7,m.a.awrap(fetch(d+w,{method:"POST",headers:x,body:JSON.stringify(t)}));case 7:if(a=o.sent,s=N(a)){o.next=13;break}return o.next=12,m.a.awrap(a.json());case 12:s=o.sent;case 13:s.badStatusText?(e(G(s)),e(V(!1))):(c=s.user._id,localStorage.setItem("userJson",JSON.stringify(s.user)),e(J(s.user)),e(V(!0)),e(Z(c))),o.next=19;break;case 16:o.prev=16,o.t0=o.catch(0),console.log("error",o.t0);case 19:case"end":return o.stop()}}),null,null,[[0,16]])}));var n,r},submitNewUser:function(t){return e(function(e){return function(t){var a,n,r;return m.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(s.prev=0,j(e.email)){s.next=4;break}return t(H({message:"Bad email: ".concat(e.email)})),s.abrupt("return");case 4:return s.next=6,m.a.awrap(fetch(d+S,{method:"POST",headers:x,body:JSON.stringify({user:e})}));case 6:if(a=s.sent,n=N(a)){s.next=12;break}return s.next=11,m.a.awrap(a.json());case 11:n=s.sent;case 12:n.badStatusText?(t(G(n)),t(V(!1))):(r=n.user._id,localStorage.setItem("userJson",JSON.stringify(n.user)),t(J(n.user)),t(W({})),t(V(!0)),t(Z(r))),s.next=18;break;case 15:s.prev=15,s.t0=s.catch(0),console.log("error",s.t0);case 18:case"end":return s.stop()}}),null,null,[[0,15]])}}(t))},resetAuthenticationResult:function(){return e(B())},clearLastError:function(){return e({type:R})}}}))(Ae);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Te=Object(u.d)(se,Object(u.a)(i.a,ce));c.a.render(r.a.createElement(o.a,{store:Te},r.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.951ae271.chunk.js.map