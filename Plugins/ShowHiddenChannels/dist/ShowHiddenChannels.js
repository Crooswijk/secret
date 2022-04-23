const c={byProps:(...t)=>window.enmity.filters.byProps(...t),byName:t=>window.enmity.filters.byName(t),byTypeName:t=>window.enmity.filters.byTypeName(t),byTypeString:(...t)=>window.enmity.filters.byTypeString(...t),byDefaultString:(...t)=>window.enmity.filters.byDefaultString(...t),byString:(...t)=>window.enmity.filters.byString(...t)};function F(...t){return window.enmity.modules.bulk(...t)}function w(...t){return window.enmity.modules.getByProps(...t)}function T(t){window.enmity.plugins.registerPlugin(t)}const e=window.enmity.react,u=e.React;e.memo,e.useCallback,e.useContext,e.useEffect,e.useImperativeHandle,e.useMemo,e.useReducer,e.useRef,e.useState,e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl,e.ScrollView,e.SectionList,e.StatusBar,e.StyleSheet,e.Switch,e.Text,e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const P=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio,e.FormRow,e.FormSection,e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;function v(t){return window.enmity.patcher.create(t)}const g=w("createThemedStyleSheet"),y=w("Svg");var A=u.memo(t=>{const a=g.createThemedStyleSheet({lock:{color:g.ThemeColorMap.CHANNELS_DEFAULT}});return u.createElement(P,{...t},u.createElement(y.Svg,{width:16,height:16,viewBox:"0 0 1190.000000 1280.000000"},u.createElement(y.G,{transform:"translate(0.000000,1280.000000) scale(0.100000,-0.100000)",stroke:"none",fill:a.lock.color},u.createElement(y.Path,{d:"M5625 11949 c-726 -55 -1331 -308 -1787 -748 -391 -376 -650 -839 -788 -1406 -97 -398 -102 -478 -103 -1607 l-2 -940 -27 -23 c-17 -15 -56 -30 -105 -40 -240 -51 -368 -97 -486 -174 -288 -189 -455 -502 -507 -956 -12 -104 -16 -3002 -4 -3230 21 -421 144 -691 405 -887 61 -46 199 -117 274 -141 77 -26 229 -55 345 -67 73 -7 1009 -11 3095 -10 3153 1 3139 0 3328 44 321 75 545 253 646 515 90 234 93 323 88 2111 -4 1464 -7 1563 -43 1775 -52 301 -176 554 -348 706 -21 19 -46 41 -56 50 -86 81 -249 170 -390 214 -164 51 -231 77 -240 95 -6 12 -10 333 -10 862 0 962 -6 1086 -66 1418 -26 142 -101 429 -139 530 -133 353 -235 558 -395 795 -121 180 -342 418 -516 557 -273 217 -666 404 -1015 482 -337 75 -775 104 -1154 75z m480 -1109 c217 -19 424 -64 585 -127 410 -161 718 -458 894 -858 48 -109 129 -345 121 -353 -2 -3 0 -12 5 -22 12 -23 47 -218 60 -340 7 -60 11 -420 10 -979 0 -983 4 -916 -68 -949 -34 -16 -173 -17 -1762 -17 -1620 0 -1728 1 -1782 18 -51 16 -58 21 -63 50 -3 17 -4 442 -2 942 4 998 2 977 67 1245 122 500 369 885 716 1116 92 61 275 150 376 183 253 83 553 115 843 91z"}))))});const m=v("show-hidden-channels"),[x,f,p,b,S,C,E]=F(c.byName("BaseChannelItem"),c.byProps("getChannelPermissions"),c.byProps("getChannel"),c.byProps("hasUnread"),c.byProps("Permissions"),c.byName("ChannelRecord"),t=>{var a;return((a=t.default)==null?void 0:a.name)==="ConnectedGuildSidebar"}),H={name:"ShowHiddenChannels",commands:[],onStart(){var t;this.can=(t=f.can.__original)!=null?t:f.can;const a=this;C.prototype.isHidden=function(){return![1,3].includes(this.type)&&!a.can(S.Permissions.VIEW_CHANNEL,this)},m.after(f,"can",(l,[o])=>{if(o===S.Permissions.VIEW_CHANNEL)return!0}),m.after(b,"hasUnread",(l,o,i)=>{var n;return i&&!((n=p.getChannel(o[0]))!=null&&n.isHidden())}),m.after(b,"hasUnreadPins",(l,o,i)=>{if(!p.getChannel(o[0]))return!1}),m.after(b,"getMentionCount",(l,o,i)=>{var n;return(n=p.getChannel(o[0]))!=null&&n.isHidden()?0:i}),m.after(x,"default",(l,[o],i)=>{var n;const{channel:d}=(n=N(o,r=>r==null?void 0:r.channel))!=null?n:{};if(!(d!=null&&d.isHidden()))return i;i.props.children.push(u.createElement(A,{style:{verticalAlign:"center",justifyContent:"center",alignItems:"center"}}))})},onStop(){delete C.prototype.isHidden,m.unpatchAll()}};function N(t={},a=n=>n,{ignore:l=[],walkable:o=["props","children"],maxProperties:i=100}={}){const n=[t],d=function(...r){try{return Reflect.apply(a,this,r)}catch{return!1}};for(;n.length&&i;){const r=n.shift();if(d(r))return r;if(Array.isArray(r))n.push(...r);else if(typeof r=="object"&&r!==null)if(o.length)for(const s in r){const h=r[s];~o.indexOf(s)&&!~l.indexOf(s)&&n.push(h)}else for(const s in r){const h=r[s];r&&~l.indexOf(s)||n.push(h)}i--}}T(H);
