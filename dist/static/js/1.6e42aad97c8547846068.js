webpackJsonp([1],{348:function(t,r,e){var n=e(1)(e(351),e(542),null,null);t.exports=n.exports},351:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(362),i=(e.n(n),e(354));r.default=i.a},354:function(t,r,e){"use strict";var n=e(15),i=e.n(n);r.a={name:"User",data:function(){return{hasUser:!1,user:{},collectTopics:[],navs:[{name:"最近创建的主题",tag:"create",fa:"fa-plus-circle"},{name:"最近参与的主题",tag:"reply",fa:"fa-reply"},{name:"最近收藏的主题",tag:"collect",fa:"fa-archive"}],currType:"create",time:5}},computed:{isLoading:function(){return this.$store.state.isLoading},skinColor:function(){return this.$store.state.skinColor},userInfo:function(){return this.$store.state.userInfo},contents:function(){return[{tag:"create",topic:this.user?this.user.recent_topics:"",title:"最近创建的主题"},{tag:"reply",topic:this.user?this.user.recent_replies:"",title:"最近参与的主题"},{tag:"collect",topic:this.collectTopics?this.collectTopics:"",title:"收藏的主题"}]}},created:function(){this.$store.commit("showAsideMenu",!1),this.fetchData()},watch:{$route:function(){this.fetchData()}},methods:{fetchData:function(){var t=this;console.log("fetchData"),this.$store.commit("showLoading",!0),this.hasUser=!1,console.log(""+this.$route.params.name),i.a.get("https://cnodejs.org/api/v1/user/"+this.$route.params.name).catch(function(){t.time=5,t.$store.commit("showLoading",!1);var r=setInterval(function(){if(0===t.time)return clearInterval(r),void t.$router.go(-1);t.time--},1e3)}).then(function(r){if(console.log(r),r)return t.hasUser=!0,r.data.data}).then(function(r){return t.user=r}).then(function(){return i.a.get("https://cnodejs.org/api/v1/topic_collect/"+t.$route.params.name)}).then(function(t){return t.data.data}).then(function(r){t.collectTopics=r}).then(function(){return t.$store.commit("showLoading",!1)})}}}},358:function(t,r,e){r=t.exports=e(344)(!0),r.push([t.i,".user-center{position:absolute;width:100%;height:100%;padding:10px 0}.user-center .user-error{display:flex;justify-content:center;align-items:center;padding:.5rem;color:#343434}.user-center .user-main{max-width:1000px;height:100%;margin:0 auto;display:flex}@media screen and (max-width:650px){.user-center .user-main{flex-direction:column}}.user-center .user-main .user-info{width:2.4rem;height:100%;position:relative;margin-right:.1rem}@media screen and (max-width:650px){.user-center .user-main .user-info{width:100%;height:3rem;margin-bottom:.1rem}}.user-center .user-main .user-info .user-info-avatar{top:.2rem;left:50%;transform:translate(-50%)}.user-center .user-main .user-info .user-name{position:absolute;left:50%;top:1.2rem;transform:translate(-50%);color:#414141;width:2rem;text-align:center}.user-center .user-main .user-info .user-score{position:absolute;left:50%;top:1.6rem;transform:translate(-50%);width:2rem;height:.34rem;display:flex;align-items:center;justify-content:center;color:#222}.user-center .user-main .user-info .user-score .fa-star{color:#fb4;text-shadow:0 0 2px rgba(0,0,0,.6);transition:all 1s ease-in-out}.user-center .user-main .user-info .user-score .fa-star:hover{transform:rotate(1turn)}.user-center .user-main .user-info .user-github{position:absolute;left:50%;top:2rem;transform:translate(-50%);width:2rem;height:.34rem;display:flex;align-items:center;justify-content:center}.user-center .user-main .user-info .user-github .fa-github{text-shadow:0 0 2px rgba(0,0,0,.6)}.user-center .user-main .user-info .user-github .title{margin:0}.user-center .user-main .user-info .user-data{position:absolute;left:50%;top:2.4rem;transform:translate(-50%);width:2rem;height:.34rem;display:flex;align-items:center;justify-content:center;font-size:.24rem;color:#222}.user-center .user-main .user-info .user-data .fa-calendar{color:#000;text-shadow:0 0 1px rgba(0,0,0,.6)}.user-center .user-main .user-topic{width:100%;border:2px solid;flex:1;display:flex;background:#01508a;overflow-y:auto;overflow-x:hidden}.user-center .user-main .user-topic .user-topic-nav{width:2rem;border-right:4px solid}.user-center .user-main .user-topic .user-topic-nav .topic-navs{height:100%;display:flex;flex-direction:column}.user-center .user-main .user-topic .user-topic-nav .topic-navs .topic-nav:not(:first-child){border-top:2px solid rgba(0,0,0,.3)}.user-center .user-main .user-topic .user-topic-nav .topic-navs .topic-nav{flex:1;font-size:.2rem;display:flex;justify-content:center;align-items:center;cursor:pointer;font-weight:700}.user-center .user-main .user-topic .user-topic-nav .topic-navs .topic-nav.active{border-right:4px solid;color:#000;width:102%}.user-center .user-main .user-topic .user-topic-content{flex:1;overflow-y:auto;overflow-x:hidden}.user-center .user-main .user-topic .user-topic-content .topic-contents .topic-content{margin:.3rem 0;font-size:.2rem}.user-center .user-main .user-topic .user-topic-content .topic-contents .topic-content .topic-content-main{width:80%;margin:0 auto;margin-bottom:.3rem;padding:.2rem;border:4px solid;background:#63baba;position:relative;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.user-center .user-main .user-topic .user-topic-content .topic-contents .topic-content .topic-content-main:hover{box-shadow:0 2px 5px 0 rgba(0,0,0,.36),0 2px 10px 0 rgba(0,0,0,.32)}.user-center .user-main .user-topic .user-topic-content .topic-contents .topic-content .topic-content-main .topic-content-avatar{width:.4rem;height:.4rem;left:calc(-.35rem - 8px)}.user-center .user-main .user-topic .user-topic-content .topic-contents .topic-content .topic-content-main .topic-content-avatar .topic-user{margin:0}.user-center .user-main .user-topic .user-topic-content .topic-contents .topic-content .topic-content-main .topic-content-avatar .avatar-img{width:.4rem;height:.4rem}.user-center .user-main .user-topic .user-topic-content .topic-contents .topic-content .topic-content-main .topic-content-title{text-align:center;color:#414141}.user-center .user-main .user-topic .user-topic-content .topic-contents .topic-content .topic-content-main .topic-brief-count{text-align:center}.user-center .user-main .user-topic .user-topic-content .topic-contents .topic-content .topic-content-main .topic-brief-count span{margin-right:.2rem}.user-center .user-main .user-topic .user-topic-content .topic-contents .topic-content .topic-content-main .topic-brief-count span.reply{color:#006806}.user-center .user-main .user-topic .user-topic-content .topic-contents .topic-content .topic-content-main .topic-brief-count span.visit{color:#001668}.user-center .user-main .user-topic .user-topic-content .topic-contents .topic-content .topic-content-main .topic-brief-count span.date{color:#666}.user-center .user-main .user-topic .user-topic-content .topic-contents .topic-content .topic-error-tip{width:80%;margin:0 auto;text-align:center}","",{version:3,sources:["D:/Vue/vue-cNode/src/components/User/src/components/User/User.scss"],names:[],mappings:"AAAA,aACI,kBAAkB,AAClB,WAAW,AACX,YAAY,AACZ,cAAe,CAoMlB,AAxMD,yBAMQ,aAAa,AACb,uBAAuB,AACvB,mBAAmB,AACnB,cAAe,AACf,aAAc,CACjB,AAXL,wBAaQ,iBAAiB,AACjB,YAAY,AACZ,cAAgB,AAChB,YAAa,CAuLhB,AAtLE,oCAjBP,wBAkBW,qBAAsB,CAqL5B,CAAA,AAvML,mCAqBY,aAAa,AACb,YAAY,AACZ,kBAAkB,AAClB,kBAAoB,CA2EvB,AA1EI,oCAzBb,mCA0BgB,WAAW,AACX,YAAY,AACZ,mBAAqB,CAuE5B,CAAA,AAnGT,qDA+BgB,UAAW,AACX,SAAS,AACT,yBAA6B,CAChC,AAlCb,8CAoCgB,kBAAkB,AAClB,SAAS,AACT,WAAW,AACX,0BAA6B,AAC7B,cAAc,AACd,WAAW,AACX,iBAAkB,CACrB,AA3Cb,+CA6CgB,kBAAkB,AAClB,SAAS,AACT,WAAW,AACX,0BAA6B,AAC7B,WAAW,AACX,cAAe,AACf,aAAa,AACb,mBAAmB,AACnB,uBAAuB,AACtB,UAAW,CASf,AA/Db,wDAwDoB,WAAW,AACX,mCAAuC,AACvC,6BAA8B,CAIjC,AA9DjB,8DA4DwB,uBAAyB,CAC5B,AA7DrB,gDAiEgB,kBAAkB,AAClB,SAAS,AACT,SAAS,AACT,0BAA6B,AAC7B,WAAW,AACX,cAAe,AACf,aAAa,AACb,mBAAmB,AACnB,sBAAuB,CAO1B,AAhFb,2DA2EoB,kCAAuC,CAC1C,AA5EjB,uDA8EmB,QAAS,CACX,AA/EjB,8CAkFgB,kBAAkB,AAClB,SAAS,AACT,WAAW,AACX,0BAA6B,AAC7B,WAAW,AACX,cAAe,AACf,aAAa,AACb,mBAAmB,AACnB,uBAAuB,AACvB,iBAAkB,AAClB,UAAW,CAKd,AAjGb,2DA8FoB,WAAW,AACX,kCAAuC,CAC1C,AAhGjB,oCAqGY,WAAW,AACX,iBAAiB,AACjB,OAAO,AACP,aAAa,AACb,mBAAmB,AACnB,gBAAgB,AAChB,iBAAkB,CA2FrB,AAtMT,oDA6GgB,WAAW,AACX,sBAAuB,CAwB1B,AAtIb,gEAgHoB,YAAY,AACZ,aAAa,AACb,qBAAsB,CAkBzB,AApIjB,6FAoHwB,mCAAuC,CAC1C,AArHrB,2EAuHwB,OAAO,AACP,gBAAiB,AACjB,aAAa,AACb,uBAAuB,AACvB,mBAAmB,AACnB,eAAe,AACf,eAAiB,CAMpB,AAnIrB,kFA+H4B,uBAAuB,AACvB,WAAW,AACX,UAAW,CACd,AAlIzB,wDAwIgB,OAAO,AACP,gBAAgB,AAChB,iBAAkB,CA2DrB,AArMb,uFA6IyB,eAAgB,AAChB,eAAiB,CAqDrB,AAnMrB,2GAgJ4B,UAAU,AACV,cAAc,AACd,oBAAqB,AACrB,cAAe,AACf,iBAAiB,AACjB,mBAAmB,AACnB,kBAAkB,AAClB,mEACqC,CAqCxC,AA7LzB,iHA0JgC,mEACwC,CAC3C,AA5J7B,iIA+JgC,YAAa,AACb,aAAc,AACd,wBAA0B,CAQ7B,AAzK7B,6IAmKoC,QAAS,CACZ,AApKjC,6IAsKoC,YAAa,AACb,YAAc,CACjB,AAxKjC,gIA2KgC,kBAAkB,AAClB,aAAc,CACjB,AA7K7B,8HA+KgC,iBAAkB,CAarB,AA5L7B,mIAiLoC,kBAAoB,CAUvB,AA3LjC,yIAmLwC,aAAc,CACjB,AApLrC,yIAsLwC,aAAc,CACjB,AAvLrC,wIAyLwC,UAAc,CACjB,AA1LrC,wGA+L6B,UAAU,AACV,cAAc,AACd,iBAAkB,CACtB",file:"User.scss",sourcesContent:[".user-center {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 10px 0;\r\n    .user-error {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        padding: 0.5rem;\r\n        color: #343434;\r\n    }\r\n    .user-main {\r\n        max-width: 1000px;\r\n        height: 100%;\r\n        margin: 0px auto;\r\n        display: flex;\r\n       @media screen and (max-width: 650px) {\r\n           flex-direction: column;\r\n       }\r\n        .user-info {\r\n            width: 2.4rem;\r\n            height: 100%;\r\n            position: relative;\r\n            margin-right: 0.1rem;\r\n             @media screen and (max-width: 650px) {\r\n                width: 100%;\r\n                height: 3rem;\r\n                margin-bottom: 0.1rem;\r\n            }\r\n            .user-info-avatar {\r\n                top: 0.2rem;\r\n                left: 50%;\r\n                transform: translate(-50%, 0);\r\n            }\r\n            .user-name {\r\n                position: absolute;\r\n                left: 50%;\r\n                top: 1.2rem;\r\n                transform: translate(-50%, 0);\r\n                color: #414141;\r\n                width: 2rem;\r\n                text-align: center;\r\n            }\r\n            .user-score {\r\n                position: absolute;\r\n                left: 50%;\r\n                top: 1.6rem;\r\n                transform: translate(-50%, 0);\r\n                width: 2rem;\r\n                height: 0.34rem;\r\n                display: flex;\r\n                align-items: center;\r\n                justify-content: center;\r\n                 color: #222;\r\n                .fa-star {\r\n                    color: #fb4;\r\n                    text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);\r\n                    transition: all 1s ease-in-out;\r\n                    &:hover {\r\n                        transform: rotate(360deg);\r\n                    }\r\n                }     \r\n            }\r\n            .user-github {\r\n                position: absolute;\r\n                left: 50%;\r\n                top: 2rem;\r\n                transform: translate(-50%, 0);\r\n                width: 2rem;\r\n                height: 0.34rem;\r\n                display: flex;\r\n                align-items: center;\r\n                justify-content: center;\r\n                .fa-github {\r\n                    text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);\r\n                }\r\n                .title {\r\n                   margin: 0;\r\n                }\r\n            }\r\n            .user-data {\r\n                position: absolute;\r\n                left: 50%;\r\n                top: 2.4rem;\r\n                transform: translate(-50%, 0);\r\n                width: 2rem;\r\n                height: 0.34rem;\r\n                display: flex;\r\n                align-items: center;\r\n                justify-content: center;\r\n                font-size: 0.24rem;\r\n                color: #222;\r\n                .fa-calendar {\r\n                    color: #000;\r\n                    text-shadow: 0 0 1px rgba(0, 0, 0, 0.6);\r\n                }\r\n            }\r\n\r\n        }\r\n        .user-topic {\r\n            width: 100%;\r\n            border: 2px solid;\r\n            flex: 1;\r\n            display: flex;\r\n            background: #01508A;\r\n            overflow-y: auto;\r\n            overflow-x: hidden;\r\n            .user-topic-nav {\r\n                width: 2rem;\r\n                border-right: 4px solid;\r\n                .topic-navs {\r\n                    height: 100%;\r\n                    display: flex;\r\n                    flex-direction: column;\r\n                    .topic-nav:not(:first-child){\r\n                        border-top: 2px solid rgba(0, 0, 0, .3);\r\n                    }\r\n                    .topic-nav {\r\n                        flex: 1;\r\n                        font-size: 0.2rem;\r\n                        display: flex;\r\n                        justify-content: center;\r\n                        align-items: center;\r\n                        cursor: pointer;  \r\n                        font-weight: bold;\r\n                        &.active {\r\n                            border-right: 4px solid; \r\n                            color: #000;\r\n                            width: 102%;\r\n                        }\r\n                    }\r\n                }\r\n                \r\n            }\r\n            .user-topic-content {\r\n                flex: 1;\r\n                overflow-y: auto;\r\n                overflow-x: hidden;\r\n                .topic-contents {\r\n                    .topic-content {   \r\n                         margin: 0.3rem 0;\r\n                         font-size: 0.2rem;\r\n                         .topic-content-main {\r\n                            width: 80%;\r\n                            margin: 0 auto;\r\n                            margin-bottom: 0.3rem;\r\n                            padding: 0.2rem;\r\n                            border: 4px solid;\r\n                            background: #63BABA;\r\n                            position: relative;\r\n                            box-shadow: 0 2px 5px 0 rgba(0,0,0,.16),\r\n                                     0 2px 10px 0 rgba(0,0,0,.12);\r\n                            &:hover {\r\n                                box-shadow: 0 2px 5px 0 rgba(0,0,0,.36),\r\n                                            0 2px 10px 0 rgba(0,0,0,.32);\r\n                            }\r\n                            \r\n                            .topic-content-avatar {\r\n                                width: 0.4rem;\r\n                                height: 0.4rem;\r\n                                left: calc(-0.35rem - 8px);\r\n                                .topic-user {\r\n                                    margin: 0;\r\n                                }\r\n                                .avatar-img {\r\n                                    width: 0.4rem;\r\n                                    height: 0.4rem;\r\n                                }\r\n                            }\r\n                            .topic-content-title {\r\n                                text-align: center;\r\n                                color: #414141;\r\n                            }\r\n                            .topic-brief-count {\r\n                                text-align: center;\r\n                                span {\r\n                                    margin-right: 0.2rem;\r\n                                    &.reply {\r\n                                        color: #006806;\r\n                                    }\r\n                                    &.visit {\r\n                                        color: #001668;\r\n                                    }\r\n                                    &.date {\r\n                                        color: #666666;\r\n                                    }\r\n                                }    \r\n                            }\r\n                        }\r\n                        .topic-error-tip {\r\n                             width: 80%;\r\n                             margin: 0 auto;\r\n                             text-align: center;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    } \r\n}"],sourceRoot:""}])},362:function(t,r,e){var n=e(358);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(345)("f3e604da",n,!0)},542:function(t,r){t.exports={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],staticClass:"user-center"},[t.hasUser?e("div",{staticClass:"user-main"},[e("div",{staticClass:"user-info",style:{background:t.skinColor.replace(/\sl[\S\s]+/,"").replace(/(1)(\))/,"0.4$2")}},[e("div",{staticClass:"avatar user-info-avatar"},[e("span",{staticClass:"img-border",style:{borderTopColor:t.skinColor.replace(/\sl[\S\s]+/,""),borderRightColor:t.skinColor.replace(/\sl[\S\s]+/,"")}}),t._v(" "),e("img",{staticClass:"avatar-img",attrs:{src:t.user?t.user.avatar_url:"",alt:""}})]),t._v(" "),e("span",{staticClass:"user-name"},[t._v(t._s(t.user?t.user.loginname:""))]),t._v(" "),e("span",{staticClass:"user-score"},[e("i",{staticClass:"fa fa-star",attrs:{"aria-hidden":"true"}}),t._v("\n                "+t._s(t.user?t.user.score:"")+"\n            ")]),t._v(" "),e("span",{staticClass:"user-github"},[e("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}}),t._v(" "),e("a",{staticClass:"title",attrs:{href:"https://github.com/"+(t.user?t.user.githubUsername:"")}},[t._v("\n                    "+t._s(t.user?t.user.githubUsername:"")+"\n                ")])]),t._v(" "),e("span",{staticClass:"user-data"},[e("i",{staticClass:"fa fa-calendar",attrs:{"aria-hidden":"true"}}),t._v("\n                "+t._s(t.createTime(t.user?t.user.create_at:""))+"\n            ")])]),t._v(" "),e("div",{staticClass:"user-topic",style:{borderColor:t.skinColor.replace(/\sl[\S\s]+/,"")}},[e("nav",{staticClass:"user-topic-nav",style:{borderRightColor:t.skinColor.replace(/\sl[\S\s]+/,"").replace(/(1)(\))/,"0.4$2")}},[e("ul",{staticClass:"topic-navs"},t._l(t.navs,function(r,n){return e("li",{key:n,staticClass:"topic-nav",class:{active:t.currType===r.tag},style:{borderRightColor:t.skinColor.replace(/\sl[\S\s]+/,""),borderTopColor:t.skinColor.replace(/\sl[\S\s]+/,"").replace(/(1)(\))/,"0.6$2"),background:t.currType===r.tag?t.skinColor.replace(/\sl[\S\s]+/,"").replace(/(1)(\))/,"0.4$2"):"",color:t.currType===r.tag?"":t.skinColor.replace(/\sl[\S\s]+/,"")},on:{click:function(e){t.currType=r.tag}}},[e("i",{staticClass:"fa",class:r.fa,attrs:{"aria-hidden":"true"}}),t._v("\n                        "+t._s(r.name)+"\n                    ")])}))]),t._v(" "),e("div",{staticClass:"user-topic-content"},[e("ul",{staticClass:"topic-contents"},t._l(t.contents,function(r,n){return e("li",{directives:[{name:"show",rawName:"v-show",value:r.tag===t.currType,expression:"content.tag === currType"}],key:n,staticClass:"topic-content"},[!r.topic||r.topic.length?e("div",t._l(r.topic,function(r,n){return e("div",{key:n,staticClass:"topic-content-main",style:{borderColor:t.skinColor.replace(/\sl[\S\s]+/,"")}},[e("div",{staticClass:"avatar topic-content-avatar"},[e("router-link",{directives:[{name:"show",rawName:"v-show",value:r.author,expression:"topic.author"}],staticClass:"topic-user",attrs:{to:{name:"User",params:{name:r.author.loginname}},title:r.author.loginname}},[e("span",{staticClass:"img-border",style:{borderTopColor:t.skinColor.replace(/\sl[\S\s]+/,""),borderRightColor:t.skinColor.replace(/\sl[\S\s]+/,"")}}),t._v(" "),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:r.author?r.author.avatar_url:"",expression:"topic.author? topic.author.avatar_url : ''"}],staticClass:"avatar-img",attrs:{alt:""}})])],1),t._v(" "),e("div",{staticClass:"topic-content-title"},[e("router-link",{staticClass:"title",attrs:{to:{name:"Article",params:{id:r.id}}}},[t._v("\n                                        "+t._s(r.title)+"\n                                    ")])],1),t._v(" "),e("div",{staticClass:"topic-brief-count"},[e("span",{directives:[{name:"show",rawName:"v-show",value:r.reply_count,expression:"topic.reply_count"}],staticClass:"reply"},[e("i",{staticClass:"fa fa-comment",attrs:{"aria-hidden":"true"}}),t._v(t._s(r.reply_count)+"\n                                    ")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:r.visit_count,expression:"topic.visit_count"}],staticClass:"visit"},[e("i",{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"}}),t._v(t._s(r.visit_count)+"\n                                    ")]),t._v(" "),e("span",{staticClass:"date"},[t._v(" \n                                        "+t._s(t.changeTime(r.last_reply_at))+"\n                                    ")])])])})):e("div",{staticClass:"topic-error-tip",style:{background:t.skinColor.replace(/\sl[\S\s]+/,"").replace(/(1)(\))/,"0.4$2")}},[t._v("\n                            该用户没有此类数据\n                        ")])])}))])])]):e("div",{staticClass:"user-error",style:{background:t.skinColor.replace(/\sl[\S\s]+/,"").replace(/(1)(\))/,"0.4$2")}},[t._v("\n        用户不存在, "+t._s(t.time)+" 秒后返回上一页\n    ")])])},staticRenderFns:[]}}});
//# sourceMappingURL=1.6e42aad97c8547846068.js.map