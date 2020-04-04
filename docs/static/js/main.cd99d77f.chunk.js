(this["webpackJsonpaccordion-map"]=this["webpackJsonpaccordion-map"]||[]).push([[0],{21:function(e,t,a){e.exports=a(42)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},38:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),c=a.n(r),i=(a(26),a(20)),l=a(4),s=a(7),m=a(9),d=a(8),p=a(10),u=(a(27),a(28),a(43)),h=a(46),b=a(44),k=function(e){var t=e.onChangeSection,a=e.openedSection;return o.a.createElement("div",{className:"map-section"},o.a.createElement(u.a,{className:"card-collapse map-section__header",role:"tab",onClick:function(e){e.preventDefault(),t("Map Section")}},o.a.createElement("a",{"aria-expanded":"Map Section"===a,"data-toggle":"collapse","data-parent":"#accordion",className:"mb-0 panel-title collapsed",href:"#"},"Map Section",o.a.createElement("i",{className:"now-ui-icons arrows-1_minimal-down"}))),o.a.createElement(h.a,{isOpen:"Map Section"===a},o.a.createElement(b.a,{className:"map-section__card"},o.a.createElement("div",{id:"map"}))))},E=a(13),S=a.n(E),v=function e(){Object(l.a)(this,e)};v.mapApiAccessToken="pk.eyJ1IjoiZGFuc3dpY2siLCJhIjoiY2l1dTUzcmgxMDJ0djJ0b2VhY2sxNXBiMyJ9.25Qs4HNEkHubd4_Awbd8Og";var f=v,g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).Map=null,a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){S.a.accessToken=f.mapApiAccessToken,this.Map=new S.a.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[-74.5,40],zoom:9,attributionControl:!1}),this.Map.on("click",this.onAddMarker.bind(this))}},{key:"onAddMarker",value:function(e){var t=new S.a.Marker({draggable:!0}).setLngLat([e.lngLat.lng,e.lngLat.lat]).addTo(this.Map);this.props.onAddMarker(t)}},{key:"render",value:function(){return o.a.createElement(k,{onChangeSection:this.props.onChangeSection,openedSection:this.props.openedSection})}}]),t}(o.a.Component),M=(a(38),function(e){var t=e.onChangeSection,a=e.openedSection,n=e.markers,r=e.onMarkerRemove;return o.a.createElement("div",{className:"table-section"},o.a.createElement(u.a,{className:"card-collapse table-section__header",role:"tab",onClick:function(e){e.preventDefault(),t("Table Section")}},o.a.createElement("a",{"aria-expanded":"Table Section"===a,"data-toggle":"collapse","data-parent":"#accordion",className:"mb-0 panel-title collapsed",href:"#"},"Table Section",o.a.createElement("i",{className:"now-ui-icons arrows-1_minimal-down"}))),o.a.createElement(h.a,{isOpen:"Table Section"===a},o.a.createElement(b.a,null,o.a.createElement("table",{className:"table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{className:"text-center"},"#"),o.a.createElement("th",null,"Longitude"),o.a.createElement("th",null,"Latitude"),o.a.createElement("th",null))),o.a.createElement("tbody",null,n.map((function(e,t){return o.a.createElement("tr",{key:e._pos.x},o.a.createElement("td",{className:"text-center"},t),o.a.createElement("td",null,e._lngLat.lng.toFixed(5)),o.a.createElement("td",null,e._lngLat.lat.toFixed(5)),o.a.createElement("td",{className:"td-actions text-right"},o.a.createElement("button",{type:"button",rel:"tooltip","data-placement":"right",title:"Remove marker",className:"btn btn-neutral btn-just-icon",onClick:function(){return r(e)}},o.a.createElement("i",{className:"now-ui-icons ui-1_simple-remove"}))))})))))))}),_=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(M,{onChangeSection:this.props.onChangeSection,openedSection:this.props.openedSection,markers:this.props.markers,onMarkerRemove:this.props.onMarkerRemove})}}]),t}(o.a.Component),j=a(45),C=function(e){var t=e.onChangeSection,a=e.openedSection,n=e.markers,r=e.onAddMarker,c=e.onMarkerRemove;return o.a.createElement("div",{className:"main-content"},o.a.createElement("h1",null,"AccordionMap"),o.a.createElement("div",{"aria-multiselectable":!0,id:"accordion",role:"tablist",className:"main-content__accordion"},o.a.createElement(j.a,{className:"main-content__accordion__card"},o.a.createElement(g,{onChangeSection:t,openedSection:a,onAddMarker:r}),o.a.createElement(_,{onChangeSection:t,openedSection:a,markers:n,onMarkerRemove:c}))))},N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={openedSection:"Map Section",markers:[]},a.onChangeSection=function(e){var t=e===a.state.openedSection?"":e;a.setState({openedSection:t})},a.onAddMarker=function(e){var t=[].concat(Object(i.a)(a.state.markers),[e]);a.setState({markers:t})},a.onMarkerRemove=function(e){var t=a.state.markers.filter((function(t){return t._pos.x!==e._pos.x&&t._pos.y!==e._pos.y}));e.remove(),a.setState({markers:t})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(C,{onChangeSection:this.onChangeSection.bind(this),openedSection:this.state.openedSection,markers:this.state.markers,onAddMarker:this.onAddMarker.bind(this),onMarkerRemove:this.onMarkerRemove.bind(this)})}}]),t}(o.a.Component);var O=function(){return o.a.createElement(N,null)};a(39),a(40),a(41);c.a.render(o.a.createElement(O,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.cd99d77f.chunk.js.map