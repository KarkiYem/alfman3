(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{641:function(t,e,n){},705:function(t,e,n){"use strict";n(641)},751:function(t,e,n){"use strict";n.r(e);n(10);var r=n(11),o=(n(43),n(171),n(118)),c=n(703),d=n.n(c),v=n(704),l=n.n(v),_={layout:"DashboardLayout",data:function(){return{s:!0,data:{},name:"",formatted:"",cruise:"",reportingtime:"",boardingtime:"",veg:0,nonveg:0,other:0}},mounted:function(){this.getData()},methods:{open:function(){},getData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.collection("Booking").getFirstListItem('id = "'.concat(t.$store.state.test,'"'));case 2:return t.data=e.sent,t.name=t.data.adultdetails[0].name,e.next=6,o.a.collection("webcruise").getFirstListItem('name="'.concat(t.data.cruise,'"'));case 6:n=e.sent,t.reportingtime=n.reportingtime,t.veg=t.data.veg,t.nonveg=t.data.nonveg,t.other=t.data.other,t.boardingtime=n.timing.split(/[to\/,-]/)[0],r=t.data.date,c=r.split("/"),t.formatted=t.formatDate(c[2],c[1],c[0]),t.genQR(t.data.id);case 16:case"end":return e.stop()}}),e)})))()},genQR:function(t){var e=document.getElementById("qrcode");e&&e.parentNode.removeChild(e);var n=document.createElement("div");n.id="qrcode",n.style.width="140px",n.style.height="140px",n.style.display="flex",n.style.justifyContent="center",n.style.alignItems="center",n.style.border="3px solid white",n.style.background="white",document.querySelector(".qrimg").appendChild(n);new l.a(n,{logoWidth:70,text:t,logoHeight:70,logoBackgroundColor:"#26144e",logoBackgroundTransparent:!1,width:130,height:130})},donloads:function(){var t=document.getElementById("op");d()(t).then((function(canvas){var t=canvas.toDataURL(),link=document.createElement("a");link.download="ticket.png",link.href=t,link.click()}))},formatDate:function(t,e,n){var r=new Date(t,e-1,n),o=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][r.getDay()],c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][r.getMonth()];return this.formatted="".concat(o,", ").concat(r.getDate()," ").concat(c,", ").concat(r.getFullYear()),this.formatted}}},m=(n(705),n(7)),component=Object(m.a)(_,(function(){var t=this,e=t._self._c;return e("div",[e("div",[e("div",{staticClass:"main"},[e("div",{staticClass:"ticket",attrs:{id:"op"}},[e("div",{staticClass:"dot"}),t._v(" "),e("div",{staticClass:"dot1"}),t._v(" "),e("div",{staticClass:"dot3"}),t._v(" "),e("div",{staticClass:"ticket1"},[e("div",{staticClass:"ticket2"},[e("p",{staticClass:"htext"},[t._v("Alfresco Grand")]),t._v(" "),e("div",{staticClass:"det"},[e("p",{staticClass:"ptextkl"},[e("b",[t._v(t._s(t.data.cruise))])])]),t._v(" "),e("div",{staticClass:"det"},[e("p",{staticClass:"ptext1"},[e("b",[t._v("Name")]),e("br"),t._v(t._s(t.name))]),t._v(" "),e("p",{staticClass:"ptext1"},[e("b",[t._v("Date")]),e("br"),t._v(t._s(t.formatted))])]),t._v(" "),e("div",{staticClass:"det"},[e("p",{staticClass:"ptext"},[e("b",[t._v("Adult"+t._s(t.data.adult<=1?"":"s"))]),e("br"),t._v(t._s(t.data.adult)+"\n              ")]),t._v(" "),e("p",{staticClass:"ptext"},[e("b",[t._v("Kid"+t._s(t.data.kid<=1?"":"s"))]),e("br"),t._v(t._s(t.data.kid)+"\n              ")]),t._v(" "),e("p",{staticClass:"ptext"},[e("b",[t._v("Infant"+t._s(t.data.infant<=1?"":"s"))]),t._v(" "),e("br"),t._v(t._s(t.data.infant)+"\n              ")])]),t._v(" "),e("div",{staticClass:"det"},[e("p",{staticClass:"ptext"},[e("b",[t._v("Deck")]),e("br"),t._v(t._s("No Deck"==t.data.deck?"Dinner Deck":t.data.deck)+"\n              ")]),t._v(" "),e("p",{staticClass:"ptext"},[e("b",[t._v("Reporting")]),e("br"),t._v(t._s(t.reportingtime))]),t._v(" "),e("p",{staticClass:"ptext"},[e("b",[t._v("Boarding")]),e("br"),t._v(t._s(t.boardingtime))])]),t._v(" "),"Dinner Cruise"==t.data.cruise?e("div",{staticStyle:{"border-top":"2px dashed white","margin-top":"1rem","margin-bottom":"1rem"}}):t._e(),t._v(" "),"Dinner Cruise"==t.data.cruise?e("div",{staticClass:"det"},[e("p",{staticClass:"ptext"},[e("b",[t._v("Veg")]),e("br"),t._v("\n                 "+t._s(t.veg)+"\n              ")]),t._v(" "),e("p",{staticClass:"ptext"},[e("b",[t._v("Non-Veg")]),e("br"),t._v("     \n                "+t._s(t.nonveg)+"\n              ")]),t._v(" "),e("p",{staticClass:"ptext"},[e("b",[t._v("Others")]),e("br"),t._v("    "+t._s(t.other)+"\n              ")])]):t._e()])]),t._v(" "),e("div",{staticClass:"qr"},[e("div",{staticClass:"qrimg",on:{click:function(e){return t.open()}}},[e("div",{attrs:{id:"qrcode"}})])])]),t._v(" "),e("div",{staticClass:"abb"},[e("button",{staticClass:"btn1",on:{click:function(e){return t.donloads()}}},[t._v("Download Ticket")])]),t._v(" "),e("div",{staticClass:"hidden",attrs:{hidden:t.s}},[e("div",{staticClass:"pop"},[e("h1",{staticClass:"cross",on:{click:function(e){return t.open()}}},[t._v("×")]),t._v(" "),t._m(0)])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"qr"},[t("div",{staticClass:"qrimg"},[t("div",{attrs:{id:"qrcode"}})])])}],!1,null,"966108f8",null);e.default=component.exports}}]);