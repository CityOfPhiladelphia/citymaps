(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mbmb_pvm_CyclomediaWidget"],{"0a90":function(e,t,o){var a=o("63b6"),i=o("10ff");a(a.G+a.F*(parseFloat!=i),{parseFloat:i})},"10ff":function(e,t,o){var a=o("e53d").parseFloat,i=o("a1ce").trim;e.exports=1/a(o("e692")+"-0")!==-1/0?function(e){var t=i(String(e),3),o=a(t);return 0===o&&"-"==t.charAt(0)?-0:o}:a},"59ad":function(e,t,o){e.exports=o("7be7")},"7be7":function(e,t,o){o("0a90"),e.exports=o("584a").parseFloat},"98f9":function(e,t,o){},cf49:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:this.cycloContainerClass,attrs:{id:"cyclo-container"}},[!1===this.isMobileOrTablet&&!0===this.popoutAble?o("div",{style:{right:e.popoutPosition},attrs:{id:"inCycloDiv"},on:{click:this.popoutClicked}},[o("font-awesome-icon",{staticClass:"popout-icon",attrs:{icon:"external-link"}})],1):e._e(),o("div",{ref:"cycloviewer",staticClass:"panoramaViewerWindow",attrs:{id:"cycloviewer"}})])},i=[],n=o("5d73"),r=o.n(n),s=(o("a481"),o("59ad")),c=o.n(s),l=o("a745"),d=o.n(l),p=o("a79f"),m={name:"CyclomediaWidget",data:function(){return{docWidth:0,divWidth:0,popoutPosition:0}},props:["screenPercent"],computed:{isMobileOrTablet:function(){return this.$store.state.isMobileOrTablet},fullScreenMapEnabled:function(){return this.$store.state.fullScreenMapEnabled},popoutAble:function(){var e;return e=!1!==this.$config.cyclomedia.popoutAble,e},cyclomediaInitialized:function(){return this.$store.state.cyclomedia.initialized},cyclomediaActive:function(){return this.$store.state.cyclomedia.active},pictometryActive:function(){return this.$store.state.pictometry.active},cycloContainerClass:function(){return this.pictometryActive?"medium-16 large-16 columns mb-panel":"medium-24 large-24 columns mb-panel"},locForCyclo:function(){var e=this.$store.state.geocode.data;this.$store.state.map.map;if(e)return[e.geometry.coordinates[1],e.geometry.coordinates[0]]},latLngFromMap:function(){return this.$store.state.cyclomedia.latLngFromMap},mapCenter:function(){return this.$store.state.map.center},navBarOpen:function(){return this.$store.state.cyclomedia.navBarOpen},projection4326:function(){return"+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs"},projection2272:function(){return"+proj=lcc +lat_1=40.96666666666667 +lat_2=39.93333333333333 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +datum=NAD83 +to_meter=0.3048006096012192 +no_defs"}},watch:{fullScreenMapEnabled:function(){this.setDivWidth()},locForCyclo:function(e){e&&this.setNewLocation(e)},latLngFromMap:function(e){this.cyclomediaInitialized&&(d()(e)?this.setNewLocation([e[1],e[0]]):this.setNewLocation([e.lat,e.lng]))},cyclomediaInitialized:function(){var e=this;StreetSmartApi.init({targetElement:this.$refs.cycloviewer,username:this.$config.cyclomedia.username,password:this.$config.cyclomedia.password,apiKey:this.$config.cyclomedia.apiKey,srs:"EPSG:2272",locale:"en-us",addressSettings:{locale:"en-us",database:"CMDatabase"}}).then(function(){var t=e.$store.state.cyclomedia.latLngFromMap;e.setNewLocation([t[0],t[1]])},function(e){}),window.addEventListener("resize",this.setDivWidth)},cyclomediaActive:function(e){this.setDivWidth(),!0===e&&this.setNewLocation(this.latLngFromMap)}},updated:function(){this.cyclomediaActive&&window.panoramaViewer&&window.panoramaViewer.rotateRight(1e-7),this.setDivWidth()},methods:{setDivWidth:function(){var e=document.body.clientWidth;this.docWidth=e;var t,o=document.getElementById("cyclo-container"),a=window.getComputedStyle(o),i=c()(a.getPropertyValue("width").replace("px",""));this.divWidth=i,t=this.fullScreenMapEnabled?e-i+"px":e-(e/this.$props.screenPercent+i)+"px",this.popoutPosition=t},setNewLocation:function(e){var t=StreetSmartApi.ViewerType.PANORAMA,o=Object(p["a"])(this.projection4326,this.projection2272,[e[1],e[0]]);StreetSmartApi.open(o[0]+","+o[1],{viewerType:t,srs:"EPSG:2272",panoramaViewer:{closable:!1,maximizable:!1}}).then(function(e){var t=this;if(e){for(var o=0;o<e.length;o++)e[o].getType()===StreetSmartApi.ViewerType.PANORAMA&&(window.panoramaViewer=e[o]);t.sendOrientationToStore(),window.panoramaViewer.toggleNavbarExpanded(t.navBarOpen),window.panoramaViewer.toggleButtonEnabled("panorama.elevation",!1),window.panoramaViewer.toggleButtonEnabled("panorama.reportBlurring",!1);var a=!0,i=!1,n=void 0;try{for(var s,c=r()(window.panoramaViewer.props.overlays);!(a=(s=c.next()).done);a=!0){var l=s.value;"surfaceCursorLayer"===l.id&&!0===l.visible&&window.panoramaViewer.toggleOverlay(l)}}catch(d){i=!0,n=d}finally{try{a||null==c.return||c.return()}finally{if(i)throw n}}this.$config.cyclomedia.measurementAllowed&&"false"!==this.$config.cyclomedia.measurementAllowed||(StreetSmartApi.removeOverlay("measurementLayer"),window.panoramaViewer.toggleButtonEnabled("panorama.measure",!1)),window.panoramaViewer.on("VIEW_CHANGE",function(){window.panoramaViewer.props.orientation.yaw!==t.$store.state.cyclomedia.orientation.yaw||window.panoramaViewer.props.orientation.xyz!==t.$store.state.cyclomedia.orientation.xyz?t.sendOrientationToStore():window.panoramaViewer.getNavbarExpanded()!==this.navBarOpen&&t.$store.commit("setCyclomediaNavBarOpen",window.panoramaViewer.getNavbarExpanded())}),window.panoramaViewer.on("VIEW_LOAD_END",function(){window.panoramaViewer.props.orientation.yaw!==t.$store.state.cyclomedia.orientation.yaw||window.panoramaViewer.props.orientation.xyz!==t.$store.state.cyclomedia.orientation.xyz?t.sendOrientationToStore():window.panoramaViewer.getNavbarExpanded()!==this.navBarOpen&&t.$store.commit("setCyclomediaNavBarOpen",window.panoramaViewer.getNavbarExpanded())})}}.bind(this)).catch(function(e){})},sendOrientationToStore:function(){this.$store.commit("setCyclomediaYaw",window.panoramaViewer.props.orientation.yaw),this.$store.commit("setCyclomediaHFov",window.panoramaViewer.props.orientation.hFov);var e=[window.panoramaViewer.props.orientation.xyz[0],window.panoramaViewer.props.orientation.xyz[1]],t=Object(p["a"])(this.projection2272,this.projection4326,e);this.$store.commit("setCyclomediaXyz",t)},popoutClicked:function(){var e=this.$store.state.map.map,t=e.getCenter();window.open("//cyclomedia.phila.gov/?"+t.lat+"&"+t.lng,"_blank"),this.$store.commit("setCyclomediaActive",!1)}}},w=m,u=(o("f18d"),o("2877")),h=Object(u["a"])(w,a,i,!1,null,null,null);t["default"]=h.exports},f18d:function(e,t,o){"use strict";var a=o("98f9"),i=o.n(a);i.a}}]);
//# sourceMappingURL=mbmb_pvm_CyclomediaWidget.5241be2a.js.map