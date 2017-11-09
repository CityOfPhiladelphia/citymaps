/* esri-leaflet-webmap - v0.4.0 - Thu Nov 09 2017 13:48:10 GMT-0500 (Eastern Standard Time)
 * Copyright (c) 2017 Yusuke Nunokawa <ynunokawa.dev@gmail.com>
 * MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("leaflet"),require("leaflet-omnivore")):"function"==typeof define&&define.amd?define(["exports","leaflet","leaflet-omnivore"],t):t((e.L=e.L||{},e.L.esri=e.L.esri||{}),e.L,e.omnivore)}(this,function(e,t,i){"use strict";function o(e,t){for(var i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}function r(e){return o(e[0],e[e.length-1])||e.push(e[0]),e}function n(e){var t,i=0,o=0,r=e.length,n=e[o];for(o;o<r-1;o++)t=e[o+1],i+=(t[0]-n[0])*(t[1]+n[1]),n=t;return i>=0}function a(e,t,i,o){var r=(o[0]-i[0])*(e[1]-i[1])-(o[1]-i[1])*(e[0]-i[0]),n=(t[0]-e[0])*(e[1]-i[1])-(t[1]-e[1])*(e[0]-i[0]),a=(o[1]-i[1])*(t[0]-e[0])-(o[0]-i[0])*(t[1]-e[1]);if(0!==a){var s=r/a,l=n/a;if(s>=0&&s<=1&&l>=0&&l<=1)return!0}return!1}function s(e,t){for(var i=0;i<e.length-1;i++)for(var o=0;o<t.length-1;o++)if(a(e[i],e[i+1],t[o],t[o+1]))return!0;return!1}function l(e,t){for(var i=!1,o=-1,r=e.length,n=r-1;++o<r;n=o)(e[o][1]<=t[1]&&t[1]<e[n][1]||e[n][1]<=t[1]&&t[1]<e[o][1])&&t[0]<(e[n][0]-e[o][0])*(t[1]-e[o][1])/(e[n][1]-e[o][1])+e[o][0]&&(i=!i);return i}function p(e,t){var i=s(e,t),o=l(e,t[0]);return!(i||!o)}function u(e){for(var t,i,o,a=[],l=[],u=0;u<e.length;u++){var f=r(e[u].slice(0));if(!(f.length<4))if(n(f)){var y=[f];a.push(y)}else l.push(f)}for(var h=[];l.length;){o=l.pop();var c=!1;for(t=a.length-1;t>=0;t--)if(i=a[t][0],p(i,o)){a[t].push(o),c=!0;break}c||h.push(o)}for(;h.length;){o=h.pop();var d=!1;for(t=a.length-1;t>=0;t--)if(i=a[t][0],s(i,o)){a[t].push(o),d=!0;break}d||a.push([o.reverse()])}return 1===a.length?{type:"Polygon",coordinates:a[0]}:{type:"MultiPolygon",coordinates:a}}function f(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function y(e,t){var i={};return"number"==typeof e.x&&"number"==typeof e.y&&(i.type="Point",i.coordinates=[e.x,e.y]),e.points&&(i.type="MultiPoint",i.coordinates=e.points.slice(0)),e.paths&&(1===e.paths.length?(i.type="LineString",i.coordinates=e.paths[0].slice(0)):(i.type="MultiLineString",i.coordinates=e.paths.slice(0))),e.rings&&(i=u(e.rings.slice(0))),(e.geometry||e.attributes)&&(i.type="Feature",i.geometry=e.geometry?y(e.geometry):null,i.properties=e.attributes?f(e.attributes):null,e.attributes&&(i.id=e.attributes[t]||e.attributes.OBJECTID||e.attributes.FID)),JSON.stringify(i.geometry)===JSON.stringify({})&&(i.geometry=null),i}function h(e,t){return new H(e,t)}function c(e,t){return new U(e,t)}function d(e,t){return new Y(e,t)}function g(e,t){return new X(e,t)}function _(e,t){return new $(e,t)}function m(e,t){return new Q(e,t)}function v(e,t){var i,o=e.drawingInfo.renderer,r={};switch(t.options.pane&&(r.pane=t.options.pane),e.drawingInfo.transparency&&(r.layerTransparency=e.drawingInfo.transparency),t.options.style&&(r.userDefinedStyle=t.options.style),o.type){case"classBreaks":if(b(e.geometryType,o,t),t._hasProportionalSymbols){t._createPointLayer();g(o,r).attachStylesToLayer(t._pointLayer),r.proportionalPolygon=!0}i=g(o,r);break;case"uniqueValue":console.log(o,r),i=_(o,r);break;default:i=m(o,r)}i.attachStylesToLayer(t)}function b(e,t,i){if(i._hasProportionalSymbols=!1,"esriGeometryPolygon"===e&&(t.backgroundFillSymbol&&(i._hasProportionalSymbols=!0),t.classBreakInfos&&t.classBreakInfos.length)){var o=t.classBreakInfos[0].symbol;!o||"esriSMS"!==o.type&&"esriPMS"!==o.type||(i._hasProportionalSymbols=!0)}}function S(e,t){return new Z(e,t)}function I(e,t){return new ee(e,t)}function L(e,t){return new te(e,t)}function x(e){return new ie(e)}function M(e,t){return new oe(e,t)}function w(e){var t={position:[],offset:[]};return t.position=e.reverse(),t.offset=[20,20],t}function k(e){var t,i={position:[],offset:[]};return t=Math.round(e.length/2),i.position=e[t].reverse(),i.offset=[0,0],i}function D(e,t){var i={position:[],offset:[]};return i.position=e.getBounds().getCenter(),i.offset=[0,0],i}function N(e){var t=(""+e).replace(/\D/g,""),i=t.match(/^(\d{3})(\d{3})(\d{4})$/);return i?"("+i[1]+") "+i[2]+"-"+i[3]:null}function T(e){return moment(e).format("MM/DD/YYYY")}function z(e,t){var i=/\{([^\]]*)\}/g,o="",r="";void 0!==e.title&&(o=e.title),o=o.replace(i,function(e){var o=i.exec(e);return t[o[1]]}),r='<div class="leaflet-popup-content-title text-center"><h4>'+o+'</h4></div><div class="leaflet-popup-content-description" style="max-height:200px;overflow:auto;">';var n='<div style="font-weight:bold;color:#999;margin-top:5px;word-break:break-all;">',a='</div><p style="margin-top:0;margin-bottom:5px;word-break:break-all;">';if(void 0!==e.fieldInfos){for(var s=0;s<e.fieldInfos.length;s++)!0===e.fieldInfos[s].visible&&(null===t[e.fieldInfos[s].fieldName]?r+=n+e.fieldInfos[s].label+a+"none</p>":"URL"===e.fieldInfos[s].fieldName||"CODE_SEC_1"===e.fieldInfos[s].fieldName||"WEBSITE"===e.fieldInfos[s].fieldName||"FINAL_LINK_COPY"===e.fieldInfos[s].fieldName?r+=n+e.fieldInfos[s].label+a+'<a target="_blank" href="'+t[e.fieldInfos[s].fieldName]+'">'+t[e.fieldInfos[s].fieldName]+"</a></p>":e.fieldInfos[s].fieldName.includes("EMAIL")?r+=n+e.fieldInfos[s].label+a+'<a href="mailto:'+t[e.fieldInfos[s].fieldName]+'">'+t[e.fieldInfos[s].fieldName]+"</a></p>":e.fieldInfos[s].fieldName.includes("PHONE")?r+=n+e.fieldInfos[s].label+a+N(t[e.fieldInfos[s].fieldName])+"</p>":e.fieldInfos[s].fieldName.includes("DATE")?r+=n+e.fieldInfos[s].label+a+T(t[e.fieldInfos[s].fieldName])+"</p>":r+=n+e.fieldInfos[s].label+a+t[e.fieldInfos[s].fieldName]+"</p>");r+="</div>"}else if(void 0!==e.description){var l=e.description.replace(i,function(e){var o=i.exec(e);return t[o[1]]});r+=l+"</div>"}return r}function C(e,t,i,o,r){return console.log("operationalLayer, layer:",e,"layers:",t,"map:",i,"params:",o,"paneName:",r),P(e,t,i,o,r)}function P(e,i,o,r,n){console.log("generateEsriLayer: ",e.title,"paneName:",n,"layer:",e);var a,s,l,p,u=[],f=n+"-label";if("Feature Collection"===e.type||void 0!==e.featureCollection){console.log("create FeatureCollection"),o.createPane(f);var y,h;if(void 0===e.itemId)for(l=0,p=e.featureCollection.layers.length;l<p;l++)e.featureCollection.layers[l].featureSet.features.length>0&&(void 0!==e.featureCollection.layers[l].popupInfo&&null!==e.featureCollection.layers[l].popupInfo&&(y=e.featureCollection.layers[l].popupInfo),void 0!==e.featureCollection.layers[l].layerDefinition.drawingInfo.labelingInfo&&null!==e.featureCollection.layers[l].layerDefinition.drawingInfo.labelingInfo&&(h=e.featureCollection.layers[l].layerDefinition.drawingInfo.labelingInfo));s=t.featureGroup(u);var c=S(null,{data:e.itemId||e.featureCollection,opacity:e.opacity,pane:n,onEachFeature:function(t,i){if(i.feature.layerName=e.title.split("_")[1],void 0!==c&&(y=c.popupInfo,h=c.labelingInfo),void 0!==y&&null!==y){var o=z(y,t.properties);i.feature.popupHtml=o}if(void 0!==h&&null!==h){var r,n=i.feature.geometry.coordinates;r="Point"===i.feature.geometry.type?w(n):"LineString"===i.feature.geometry.type?k(n):"MultiLineString"===i.feature.geometry.type?k(n[Math.round(n.length/2)]):D(i);var a=M(r.position,{zIndexOffset:1,properties:t.properties,labelingInfo:h,offset:r.offset,pane:f});s.addLayer(a)}}});return a=t.layerGroup([c,s]),i.push({type:"FC",title:e.title||"",layer:a}),a}if("ArcGISFeatureLayer"===e.layerType&&void 0!==e.layerDefinition){var d="1=1";if(void 0!==e.layerDefinition.drawingInfo){if("heatmap"===e.layerDefinition.drawingInfo.renderer.type){console.log("create HeatmapLayer");var g={};return e.layerDefinition.drawingInfo.renderer.colorStops.map(function(e){g[(Math.round(100*e.ratio)/100+6)/7]="rgb("+e.color[0]+","+e.color[1]+","+e.color[2]+")"}),a=t.esri.Heat.heatmapFeatureLayer({url:e.url,token:r.token||null,minOpacity:.5,max:e.layerDefinition.drawingInfo.renderer.maxPixelIntensity,blur:e.layerDefinition.drawingInfo.renderer.blurRadius,radius:1.3*e.layerDefinition.drawingInfo.renderer.blurRadius,gradient:g,pane:n}),i.push({type:"HL",title:e.title||"",layer:a}),a}console.log("create ArcGISFeatureLayer (with layerDefinition.drawingInfo)");var _=e.layerDefinition.drawingInfo;return _.transparency=100-100*e.opacity,console.log(_.transparency),void 0!==e.layerDefinition.definitionExpression&&(d=e.layerDefinition.definitionExpression),o.createPane(f),s=t.featureGroup(u),a=t.esri.featureLayer({url:e.url,where:d,token:r.token||null,drawingInfo:_,pane:n,onEachFeature:function(t,i){if(i.feature.layerName=e.title.split("_")[1],void 0!==e.popupInfo){var o=z(e.popupInfo,t.properties);i.feature.popupHtml=o}if(void 0!==e.layerDefinition.drawingInfo.labelingInfo&&null!==e.layerDefinition.drawingInfo.labelingInfo){var r,n=e.layerDefinition.drawingInfo.labelingInfo,a=i.feature.geometry.coordinates;r="Point"===i.feature.geometry.type?w(a):"LineString"===i.feature.geometry.type?k(a):"MultiLineString"===i.feature.geometry.type?k(a[Math.round(a.length/2)]):D(i);var l=M(r.position,{zIndexOffset:1,properties:t.properties,labelingInfo:n,offset:r.offset,pane:f});s.addLayer(l)}}}),a=t.layerGroup([a,s]),i.push({type:"FL",title:e.title||"",layer:a}),a}return console.log("create ArcGISFeatureLayer (without layerDefinition.drawingInfo)"),void 0!==e.layerDefinition.definitionExpression&&(d=e.layerDefinition.definitionExpression),a=t.esri.featureLayer({url:e.url,token:r.token||null,where:d,pane:n,onEachFeature:function(t,i){if(i.feature.layerName=e.title.split("_")[1],void 0!==e.popupInfo){var o=z(e.popupInfo,t.properties);i.feature.popupHtml=o}}}),i.push({type:"FL",title:e.title||"",layer:a}),a}if("ArcGISFeatureLayer"===e.layerType)return console.log("create ArcGISFeatureLayer"),a=t.esri.featureLayer({url:e.url,token:r.token||null,pane:n,onEachFeature:function(t,i){if(i.feature.layerName=e.title.split("_")[1],void 0!==e.popupInfo){var o=z(e.popupInfo,t.properties);i.feature.popupHtml=o}}}),i.push({type:"FL",title:e.title||"",layer:a}),a;if("CSV"===e.layerType)return s=t.featureGroup(u),a=I(null,{url:e.url,layerDefinition:e.layerDefinition,locationInfo:e.locationInfo,opacity:e.opacity,pane:n,onEachFeature:function(t,i){if(i.feature.layerName=e.title.split("_")[1],void 0!==e.popupInfo){var o=z(e.popupInfo,t.properties);i.feature.popupHtml=o}if(void 0!==e.layerDefinition.drawingInfo.labelingInfo&&null!==e.layerDefinition.drawingInfo.labelingInfo){var r,n=e.layerDefinition.drawingInfo.labelingInfo,a=i.feature.geometry.coordinates;r="Point"===i.feature.geometry.type?w(a):"LineString"===i.feature.geometry.type?k(a):"MultiLineString"===i.feature.geometry.type?k(a[Math.round(a.length/2)]):D(i);var l=M(r.position,{zIndexOffset:1,properties:t.properties,labelingInfo:n,offset:r.offset,pane:f});s.addLayer(l)}}}),a=t.layerGroup([a,s]),i.push({type:"CSV",title:e.title||"",layer:a}),a;if("KML"===e.layerType){s=t.featureGroup(u);var m=L(null,{url:e.url,opacity:e.opacity,pane:n,onEachFeature:function(t,i){if(i.feature.layerName=e.title.split("_")[1],void 0!==m.popupInfo&&null!==m.popupInfo){console.log(m.popupInfo);var o=z(m.popupInfo,t.properties);i.feature.popupHtml=o}if(void 0!==m.labelingInfo&&null!==m.labelingInfo){var r,n=m.labelingInfo,a=i.feature.geometry.coordinates;r="Point"===i.feature.geometry.type?w(a):"LineString"===i.feature.geometry.type?k(a):"MultiLineString"===i.feature.geometry.type?k(a[Math.round(a.length/2)]):D(i);var l=M(r.position,{zIndexOffset:1,properties:t.properties,labelingInfo:n,offset:r.offset,pane:f});s.addLayer(l)}}});return a=t.layerGroup([m,s]),i.push({type:"KML",title:e.title||"",layer:a}),a}if("ArcGISImageServiceLayer"===e.layerType)return console.log("create ArcGISImageServiceLayer"),a=t.esri.imageMapLayer({url:e.url,token:r.token||null,pane:n,opacity:e.opacity||1}),i.push({type:"IML",title:e.title||"",layer:a}),a;if("ArcGISMapServiceLayer"===e.layerType)return a=t.esri.dynamicMapLayer({url:e.url,token:r.token||null,pane:n,opacity:e.opacity||1}),i.push({type:"DML",title:e.title||"",layer:a}),a;if("ArcGISTiledMapServiceLayer"===e.layerType){try{a=t.esri.basemapLayer(e.title)}catch(i){a=t.esri.tiledMapLayer({url:e.url,token:r.token||null}),t.esri.request(e.url,{},function(e,t){if(e)console.log(e);else{var i=o.getSize().x-55,r='<span class="esri-attributions" style="line-height:14px; vertical-align: -3px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden; display:inline-block; max-width:'+i+'px;">'+t.copyrightText+"</span>";o.attributionControl.addAttribution(r)}})}return document.getElementsByClassName("leaflet-tile-pane")[0].style.opacity=e.opacity||1,i.push({type:"TML",title:e.title||"",layer:a}),a}if("VectorTileLayer"===e.layerType){var v={"World Street Map (with Relief)":"StreetsRelief","World Street Map (with Relief) (Mature Support)":"StreetsRelief","Hybrid Reference Layer":"Hybrid","Hybrid Reference Layer (Mature Support)":"Hybrid","World Street Map":"Streets","World Street Map (Mature Support)":"Streets","World Street Map (Night)":"StreetsNight","World Street Map (Night) (Mature Support)":"StreetsNight","Dark Gray Canvas":"DarkGray","Dark Gray Canvas (Mature Support)":"DarkGray","World Topographic Map":"Topographic","World Topographic Map (Mature Support)":"Topographic","World Navigation Map":"Navigation","World Navigation Map (Mature Support)":"Navigation","Light Gray Canvas":"Gray","Light Gray Canvas (Mature Support)":"Gray"};return v[e.title]?a=t.esri.Vector.basemap(v[e.title]):(console.error("Unsupported Vector Tile Layer: ",e),a=t.featureGroup([])),i.push({type:"VTL",title:e.title||e.id||"",layer:a}),a}if("OpenStreetMap"===e.layerType)return a=t.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),i.push({type:"TL",title:e.title||e.id||"",layer:a}),a;if("WebTiledLayer"===e.layerType){var b=J(e.templateUrl);return a=t.tileLayer(b,{attribution:e.copyright}),document.getElementsByClassName("leaflet-tile-pane")[0].style.opacity=e.opacity||1,i.push({type:"TL",title:e.title||e.id||"",layer:a}),a}if("WMS"===e.layerType){var x="";for(l=0,p=e.visibleLayers.length;l<p;l++)x+=e.visibleLayers[l],l<p-1&&(x+=",");return a=t.tileLayer.wms(e.url,{layers:String(x),format:"image/png",transparent:!0,attribution:e.copyright}),i.push({type:"WMS",title:e.title||e.id||"",layer:a}),a}return a=t.featureGroup([]),console.log("Unsupported Layer: ",e),a}function J(e){var t=e;return t=t.replace(/\{level}/g,"{z}"),t=t.replace(/\{col}/g,"{x}"),t=t.replace(/\{row}/g,"{y}")}function V(e,t){return new re(e,t)}t="default"in t?t.default:t,i="default"in i?i.default:i;var F=t.Class.extend({initialize:function(e,t){this._symbolJson=e,this.val=null,this._styles={},this._isDefault=!1,this._layerTransparency=1,t&&t.layerTransparency&&(this._layerTransparency=1-t.layerTransparency/100)},pixelValue:function(e){return 1.333*e},colorValue:function(e){return"rgb("+e[0]+","+e[1]+","+e[2]+")"},alphaValue:function(e){return e[3]/255*this._layerTransparency},getSize:function(e,t){var i=e.properties,o=t.field,r=0,n=null;if(o){n=i[o];var a,s=t.minSize,l=t.maxSize,p=t.minDataValue,u=t.maxDataValue,f=t.normalizationField,y=i?parseFloat(i[f]):void 0;if(null===n||f&&(isNaN(y)||0===y))return null;isNaN(y)||(n/=y),null!==s&&null!==l&&null!==p&&null!==u&&(n<=p?r=s:n>=u?r=l:(a=(n-p)/(u-p),r=s+a*(l-s))),r=isNaN(r)?0:r}return r},getColor:function(e,t){if(!(e.properties&&t&&t.field&&t.stops))return null;var i,o,r,n,a=e.properties,s=a[t.field],l=t.normalizationField,p=a?parseFloat(a[l]):void 0;if(null===s||l&&(isNaN(p)||0===p))return null;if(isNaN(p)||(s/=p),s<=t.stops[0].value)return t.stops[0].color;var u=t.stops[t.stops.length-1];if(s>=u.value)return u.color;for(var f=0;f<t.stops.length;f++){var y=t.stops[f];if(y.value<=s)i=y.color,r=y.value;else if(y.value>s){o=y.color,n=y.value;break}}if(!isNaN(r)&&!isNaN(n)){var h=n-r;if(h>0){var c=(s-r)/h;if(c){var d=(n-s)/h;if(d){for(var g=[],_=0;_<4;_++)g[_]=Math.round(i[_]*d+o[_]*c);return g}return o}return i}}return null}}),G=t.Path.extend({initialize:function(e,i,o){t.setOptions(this,o),this._size=i,this._latlng=t.latLng(e),this._svgCanvasIncludes()},toGeoJSON:function(){return t.GeoJSON.getFeature(this,{type:"Point",coordinates:t.GeoJSON.latLngToCoords(this.getLatLng())})},_svgCanvasIncludes:function(){},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng)},_update:function(){this._map&&this._updatePath()},_updatePath:function(){},setLatLng:function(e){return this._latlng=t.latLng(e),this.redraw(),this.fire("move",{latlng:this._latlng})},getLatLng:function(){return this._latlng},setSize:function(e){return this._size=e,this.redraw()},getSize:function(){return this._size}}),O=G.extend({initialize:function(e,t,i){G.prototype.initialize.call(this,e,t,i)},_updatePath:function(){this._renderer._updateCrossMarker(this)},_svgCanvasIncludes:function(){t.Canvas.include({_updateCrossMarker:function(e){var t=e._point,i=e._size/2,o=this._ctx;o.beginPath(),o.moveTo(t.x,t.y+i),o.lineTo(t.x,t.y-i),this._fillStroke(o,e),o.moveTo(t.x-i,t.y),o.lineTo(t.x+i,t.y),this._fillStroke(o,e)}}),t.SVG.include({_updateCrossMarker:function(e){var i=e._point,o=e._size/2;t.Browser.vml&&(i._round(),o=Math.round(o));var r="M"+i.x+","+(i.y+o)+"L"+i.x+","+(i.y-o)+"M"+(i.x-o)+","+i.y+"L"+(i.x+o)+","+i.y;this._setPath(e,r)}})}}),E=function(e,t,i){return new O(e,t,i)},W=G.extend({initialize:function(e,t,i){G.prototype.initialize.call(this,e,t,i)},_updatePath:function(){this._renderer._updateXMarker(this)},_svgCanvasIncludes:function(){t.Canvas.include({_updateXMarker:function(e){var t=e._point,i=e._size/2,o=this._ctx;o.beginPath(),o.moveTo(t.x+i,t.y+i),o.lineTo(t.x-i,t.y-i),this._fillStroke(o,e)}}),t.SVG.include({_updateXMarker:function(e){var i=e._point,o=e._size/2;t.Browser.vml&&(i._round(),o=Math.round(o));var r="M"+(i.x+o)+","+(i.y+o)+"L"+(i.x-o)+","+(i.y-o)+"M"+(i.x-o)+","+(i.y+o)+"L"+(i.x+o)+","+(i.y-o);this._setPath(e,r)}})}}),j=function(e,t,i){return new W(e,t,i)},B=G.extend({options:{fill:!0},initialize:function(e,t,i){G.prototype.initialize.call(this,e,t,i)},_updatePath:function(){this._renderer._updateSquareMarker(this)},_svgCanvasIncludes:function(){t.Canvas.include({_updateSquareMarker:function(e){var t=e._point,i=e._size/2,o=this._ctx;o.beginPath(),o.moveTo(t.x+i,t.y+i),o.lineTo(t.x-i,t.y+i),o.lineTo(t.x-i,t.y-i),o.lineTo(t.x+i,t.y-i),o.closePath(),this._fillStroke(o,e)}}),t.SVG.include({_updateSquareMarker:function(e){var i=e._point,o=e._size/2;t.Browser.vml&&(i._round(),o=Math.round(o));var r="M"+(i.x+o)+","+(i.y+o)+"L"+(i.x-o)+","+(i.y+o)+"L"+(i.x-o)+","+(i.y-o)+"L"+(i.x+o)+","+(i.y-o);r+=t.Browser.svg?"z":"x",this._setPath(e,r)}})}}),A=function(e,t,i){return new B(e,t,i)},q=G.extend({options:{fill:!0},initialize:function(e,t,i){G.prototype.initialize.call(this,e,t,i)},_updatePath:function(){this._renderer._updateDiamondMarker(this)},_svgCanvasIncludes:function(){t.Canvas.include({_updateDiamondMarker:function(e){var t=e._point,i=e._size/2,o=this._ctx;o.beginPath(),o.moveTo(t.x,t.y+i),o.lineTo(t.x-i,t.y),o.lineTo(t.x,t.y-i),o.lineTo(t.x+i,t.y),o.closePath(),this._fillStroke(o,e)}}),t.SVG.include({_updateDiamondMarker:function(e){var i=e._point,o=e._size/2;t.Browser.vml&&(i._round(),o=Math.round(o));var r="M"+i.x+","+(i.y+o)+"L"+(i.x-o)+","+i.y+"L"+i.x+","+(i.y-o)+"L"+(i.x+o)+","+i.y;r+=t.Browser.svg?"z":"x",this._setPath(e,r)}})}}),R=function(e,t,i){return new q(e,t,i)},H=F.extend({statics:{MARKERTYPES:["esriSMSCircle","esriSMSCross","esriSMSDiamond","esriSMSSquare","esriSMSX","esriPMS"]},initialize:function(e,t){var i;if(F.prototype.initialize.call(this,e,t),t&&(this.serviceUrl=t.url),e)if("esriPMS"===e.type){var o=this._symbolJson.url;o&&"http://"===o.substr(0,7)||"https://"===o.substr(0,8)?(i=this.sanitize(o),this._iconUrl=i):(i=this.serviceUrl+"images/"+o,this._iconUrl=t&&t.token?i+"?token="+t.token:i),e.imageData&&(this._iconUrl="data:"+e.contentType+";base64,"+e.imageData),this._icons={},this.icon=this._createIcon(this._symbolJson)}else this._fillStyles()},sanitize:function(e){if(!e)return"";var t;try{t=e.replace(/<br>/gi,"\n"),t=t.replace(/<p.*>/gi,"\n"),t=t.replace(/<a.*href='(.*?)'.*>(.*?)<\/a>/gi," $2 ($1) "),t=t.replace(/<(?:.|\s)*?>/g,"")}catch(e){t=null}return t},_fillStyles:function(){this._symbolJson.outline&&this._symbolJson.size>0&&"esriSLSNull"!==this._symbolJson.outline.style?(this._styles.stroke=!0,this._styles.weight=this.pixelValue(this._symbolJson.outline.width),this._styles.color=this.colorValue(this._symbolJson.outline.color),this._styles.opacity=this.alphaValue(this._symbolJson.outline.color)):this._styles.stroke=!1,this._symbolJson.color?(this._styles.fillColor=this.colorValue(this._symbolJson.color),this._styles.fillOpacity=this.alphaValue(this._symbolJson.color)):this._styles.fillOpacity=0,"esriSMSCircle"===this._symbolJson.style&&(this._styles.radius=this.pixelValue(this._symbolJson.size)/2)},_createIcon:function(e){var i=this.pixelValue(e.width),o=i;e.height&&(o=this.pixelValue(e.height));var r=i/2,n=o/2;e.xoffset&&(r+=this.pixelValue(e.xoffset)),e.yoffset&&(n+=this.pixelValue(e.yoffset));var a=t.icon({iconUrl:this._iconUrl,iconSize:[i,o],iconAnchor:[r,n]});return this._icons[e.width.toString()]=a,a},_getIcon:function(e){var t=this._icons[e.toString()];return t||(t=this._createIcon({width:e})),t},pointToLayer:function(e,i,o,r){var n=this._symbolJson.size||this._symbolJson.width;if(!this._isDefault){if(o.sizeInfo){var a=this.getSize(e,o.sizeInfo);a&&(n=a)}if(o.colorInfo){var s=this.getColor(e,o.colorInfo);s&&(this._styles.fillColor=this.colorValue(s),this._styles.fillOpacity=this.alphaValue(s))}}if("esriPMS"===this._symbolJson.type){var l=t.extend({},{icon:this._getIcon(n)},r);return t.marker(i,l)}switch(n=this.pixelValue(n),this._symbolJson.style){case"esriSMSSquare":return A(i,n,t.extend({},this._styles,r));case"esriSMSDiamond":return R(i,n,t.extend({},this._styles,r));case"esriSMSCross":return E(i,n,t.extend({},this._styles,r));case"esriSMSX":return j(i,n,t.extend({},this._styles,r))}return this._styles.radius=n/2,t.circleMarker(i,t.extend({},this._styles,r))}}),U=F.extend({statics:{LINETYPES:["esriSLSDash","esriSLSDot","esriSLSDashDotDot","esriSLSDashDot","esriSLSSolid"]},initialize:function(e,t){F.prototype.initialize.call(this,e,t),this._fillStyles()},_fillStyles:function(){if(this._styles.lineCap="butt",this._styles.lineJoin="miter",this._styles.fill=!1,this._styles.weight=0,!this._symbolJson)return this._styles;if(this._symbolJson.color&&(this._styles.color=this.colorValue(this._symbolJson.color),this._styles.opacity=this.alphaValue(this._symbolJson.color)),!isNaN(this._symbolJson.width)){this._styles.weight=this.pixelValue(this._symbolJson.width);var e=[];switch(this._symbolJson.style){case"esriSLSDash":e=[4,3];break;case"esriSLSDot":e=[1,3];break;case"esriSLSDashDot":e=[8,3,1,3];break;case"esriSLSDashDotDot":e=[8,3,1,3,1,3]}if(e.length>0){for(var t=0;t<e.length;t++)e[t]*=this._styles.weight;this._styles.dashArray=e.join(",")}}},style:function(e,t){if(!this._isDefault&&t){if(t.sizeInfo){var i=this.pixelValue(this.getSize(e,t.sizeInfo));i&&(this._styles.weight=i)}if(t.colorInfo){var o=this.getColor(e,t.colorInfo);o&&(this._styles.color=this.colorValue(o),this._styles.opacity=this.alphaValue(o))}}return this._styles}}),Y=F.extend({statics:{POLYGONTYPES:["esriSFSSolid"]},initialize:function(e,t){F.prototype.initialize.call(this,e,t),e&&(e.outline&&"esriSLSNull"===e.outline.style?this._lineStyles={weight:0}:this._lineStyles=c(e.outline,t).style(),this._fillStyles())},_fillStyles:function(){if(this._lineStyles)if(0===this._lineStyles.weight)this._styles.stroke=!1;else for(var e in this._lineStyles)this._styles[e]=this._lineStyles[e];this._symbolJson&&(this._symbolJson.color&&Y.POLYGONTYPES.indexOf(this._symbolJson.style>=0)?(this._styles.fill=!0,this._styles.fillColor=this.colorValue(this._symbolJson.color),this._styles.fillOpacity=this.alphaValue(this._symbolJson.color)):(this._styles.fill=!1,this._styles.fillOpacity=0))},style:function(e,t){if(!this._isDefault&&t&&t.colorInfo){var i=this.getColor(e,t.colorInfo);i&&(this._styles.fillColor=this.colorValue(i),this._styles.fillOpacity=this.alphaValue(i))}return this._styles}}),K=t.Class.extend({options:{proportionalPolygon:!1,clickable:!0},initialize:function(e,i){this._rendererJson=e,this._pointSymbols=!1,this._symbols=[],this._visualVariables=this._parseVisualVariables(e.visualVariables),t.Util.setOptions(this,i)},_parseVisualVariables:function(e){var t={};if(e)for(var i=0;i<e.length;i++)t[e[i].type]=e[i];return t},_createDefaultSymbol:function(){this._rendererJson.defaultSymbol&&(this._defaultSymbol=this._newSymbol(this._rendererJson.defaultSymbol),this._defaultSymbol._isDefault=!0)},_newSymbol:function(e){return"esriSMS"===e.type||"esriPMS"===e.type?(this._pointSymbols=!0,h(e,this.options)):"esriSLS"===e.type?c(e,this.options):"esriSFS"===e.type?d(e,this.options):void 0},_getSymbol:function(){},attachStylesToLayer:function(e){this._pointSymbols?e.options.pointToLayer=t.Util.bind(this.pointToLayer,this):(e.options.style=t.Util.bind(this.style,this),e._originalStyle=e.options.style)},pointToLayer:function(e,i){var o=this._getSymbol(e);return o&&o.pointToLayer?o.pointToLayer(e,i,this._visualVariables,this.options):t.circleMarker(i,{radius:0,opacity:0})},style:function(e){var t;this.options.userDefinedStyle&&(t=this.options.userDefinedStyle(e));var i=this._getSymbol(e);return i?this.mergeStyles(i.style(e,this._visualVariables),t):this.mergeStyles({opacity:0,fillOpacity:0},t)},mergeStyles:function(e,t){var i,o={};for(i in e)e.hasOwnProperty(i)&&(o[i]=e[i]);if(t)for(i in t)t.hasOwnProperty(i)&&(o[i]=t[i]);return o}}),X=K.extend({initialize:function(e,t){K.prototype.initialize.call(this,e,t),this._field=this._rendererJson.field,this._rendererJson.normalizationType&&"esriNormalizeByField"===this._rendererJson.normalizationType&&(this._normalizationField=this._rendererJson.normalizationField),this._createSymbols()},_createSymbols:function(){var e,t=this._rendererJson.classBreakInfos;this._symbols=[];for(var i=t.length-1;i>=0;i--)e=this.options.proportionalPolygon&&this._rendererJson.backgroundFillSymbol?this._newSymbol(this._rendererJson.backgroundFillSymbol):this._newSymbol(t[i].symbol),e.val=t[i].classMaxValue,this._symbols.push(e);this._symbols.sort(function(e,t){return e.val>t.val?1:-1}),this._createDefaultSymbol(),this._maxValue=this._symbols[this._symbols.length-1].val},_getSymbol:function(e){var t=e.properties[this._field];if(this._normalizationField){var i=e.properties[this._normalizationField];if(isNaN(i)||0===i)return this._defaultSymbol;t/=i}if(t>this._maxValue)return this._defaultSymbol;for(var o=this._symbols[0],r=this._symbols.length-1;r>=0&&!(t>this._symbols[r].val);r--)o=this._symbols[r];return o}}),$=K.extend({initialize:function(e,t){K.prototype.initialize.call(this,e,t),this._field=this._rendererJson.field1,this._createSymbols()},_createSymbols:function(){for(var e,t=this._rendererJson.uniqueValueInfos,i=t.length-1;i>=0;i--)e=this._newSymbol(t[i].symbol),e.val=t[i].value,this._symbols.push(e);this._createDefaultSymbol()},_getSymbol:function(e){var t=e.properties[this._field];if(this._rendererJson.fieldDelimiter&&this._rendererJson.field2){var i=e.properties[this._rendererJson.field2];if(i){t+=this._rendererJson.fieldDelimiter+i;var o=e.properties[this._rendererJson.field3];o&&(t+=this._rendererJson.fieldDelimiter+o)}}for(var r=this._defaultSymbol,n=this._symbols.length-1;n>=0;n--)this._symbols[n].val==t&&(r=this._symbols[n]);return r}}),Q=K.extend({initialize:function(e,t){K.prototype.initialize.call(this,e,t),this._createSymbol()},_createSymbol:function(){this._rendererJson.symbol&&this._symbols.push(this._newSymbol(this._rendererJson.symbol))},_getSymbol:function(){return this._symbols[0]}}),Z=t.GeoJSON.extend({options:{data:{},opacity:1},initialize:function(e,i){t.setOptions(this,i),this.data=this.options.data,this.opacity=this.options.opacity,this.popupInfo=null,this.labelingInfo=null,this._layers={};var o,r;if(e)for(o=0,r=e.length;o<r;o++)this.addLayer(e[o]);"string"==typeof this.data?this._getFeatureCollection(this.data):this._parseFeatureCollection(this.data)},_getFeatureCollection:function(e){var i="https://www.arcgis.com/sharing/rest/content/items/"+e+"/data";t.esri.request(i,{},function(e,t){e?console.log(e):this._parseFeatureCollection(t)},this)},_parseFeatureCollection:function(e){var t,i,o=0;for(t=0,i=e.layers.length;t<i;t++)e.layers[t].featureSet.features.length>0&&(o=t);var r=e.layers[o].featureSet.features,n=e.layers[o].layerDefinition.geometryType,a=e.layers[o].layerDefinition.objectIdField,s=e.layers[o].layerDefinition||null;4326!==e.layers[o].layerDefinition.extent.spatialReference.wkid&&(102100!==e.layers[o].layerDefinition.extent.spatialReference.wkid&&console.error("[L.esri.WebMap] this wkid ("+e.layers[o].layerDefinition.extent.spatialReference.wkid+") is not supported."),r=this._projTo4326(r,n)),void 0!==e.layers[o].popupInfo&&(this.popupInfo=e.layers[o].popupInfo),void 0!==e.layers[o].layerDefinition.drawingInfo.labelingInfo&&(this.labelingInfo=e.layers[o].layerDefinition.drawingInfo.labelingInfo),console.log(e);var l=this._featureCollectionToGeoJSON(r,a);null!==s&&v(s,this),console.log(l),this.addData(l)},_projTo4326:function(e,i){console.log("_project!");var o,r,n=[];for(o=0,r=e.length;o<r;o++){var a,s,l,p=e[o];if("esriGeometryPoint"===i)a=t.Projection.SphericalMercator.unproject(t.point(p.geometry.x,p.geometry.y)),p.geometry.x=a.lng,p.geometry.y=a.lat;else if("esriGeometryMultipoint"===i){var u;for(s=0,u=p.geometry.points.length;s<u;s++)a=t.Projection.SphericalMercator.unproject(t.point(p.geometry.points[s][0],p.geometry.points[s][1])),p.geometry.points[s][0]=a.lng,p.geometry.points[s][1]=a.lat}else if("esriGeometryPolyline"===i){var f,y;for(s=0,y=p.geometry.paths.length;s<y;s++)for(l=0,f=p.geometry.paths[s].length;l<f;l++)a=t.Projection.SphericalMercator.unproject(t.point(p.geometry.paths[s][l][0],p.geometry.paths[s][l][1])),p.geometry.paths[s][l][0]=a.lng,p.geometry.paths[s][l][1]=a.lat}else if("esriGeometryPolygon"===i){var h,c;for(s=0,c=p.geometry.rings.length;s<c;s++)for(l=0,h=p.geometry.rings[s].length;l<h;l++)a=t.Projection.SphericalMercator.unproject(t.point(p.geometry.rings[s][l][0],p.geometry.rings[s][l][1])),p.geometry.rings[s][l][0]=a.lng,p.geometry.rings[s][l][1]=a.lat}n.push(p)}return n},_featureCollectionToGeoJSON:function(e,t){var i,o,r={type:"FeatureCollection",features:[]},n=[];for(i=0,o=e.length;i<o;i++){var a=y(e[i],t);n.push(a)}return r.features=n,r}}),ee=t.GeoJSON.extend({options:{url:"",data:{},opacity:1},initialize:function(e,i){t.setOptions(this,i),this.url=this.options.url,this.layerDefinition=this.options.layerDefinition,this.locationInfo=this.options.locationInfo,this.opacity=this.options.opacity,this._layers={};var o,r;if(e)for(o=0,r=e.length;o<r;o++)this.addLayer(e[o]);this._parseCSV(this.url,this.layerDefinition,this.locationInfo)},_parseCSV:function(e,t,o){i.csv(e,{latfield:o.latitudeFieldName,lonfield:o.longitudeFieldName},this),v(t,this)}}),te=t.GeoJSON.extend({options:{opacity:1,url:""},initialize:function(e,i){t.setOptions(this,i),this.url=this.options.url,this.opacity=this.options.opacity,this.popupInfo=null,this.labelingInfo=null,this._layers={};var o,r;if(e)for(o=0,r=e.length;o<r;o++)this.addLayer(e[o]);this._getKML(this.url)},_getKML:function(e){var i="http://utility.arcgis.com/sharing/kml?url="+e+'&model=simple&folders=&outSR=%7B"wkid"%3A4326%7D';t.esri.request(i,{},function(e,t){e?console.log(e):(console.log(t),this._parseFeatureCollection(t.featureCollection))},this)},_parseFeatureCollection:function(e){console.log("_parseFeatureCollection");var t;for(t=0;t<3;t++)if(e.layers[t].featureSet.features.length>0){console.log(t);var i=e.layers[t].featureSet.features,o=e.layers[t].layerDefinition.objectIdField,r=this._featureCollectionToGeoJSON(i,o);void 0!==e.layers[t].popupInfo&&(this.popupInfo=e.layers[t].popupInfo),void 0!==e.layers[t].layerDefinition.drawingInfo.labelingInfo&&(this.labelingInfo=e.layers[t].layerDefinition.drawingInfo.labelingInfo),v(e.layers[t].layerDefinition,this),console.log(r),this.addData(r)}},_featureCollectionToGeoJSON:function(e,t){var i,o,r={
type:"FeatureCollection",features:[]},n=[];for(i=0,o=e.length;i<o;i++){var a=y(e[i],t);n.push(a)}return r.features=n,r}}),ie=t.DivIcon.extend({options:{iconSize:null,className:"esri-leaflet-webmap-labels",text:""},createIcon:function(e){var i=e&&"DIV"===e.tagName?e:document.createElement("div"),o=this.options;if(i.innerHTML='<div style="position: relative; left: -50%; text-shadow: 1px 1px 0px #fff, -1px 1px 0px #fff, 1px -1px 0px #fff, -1px -1px 0px #fff;">'+o.text+"</div>",i.style.fontSize="1em",i.style.fontWeight="bold",i.style.textTransform="uppercase",i.style.textAlign="center",i.style.whiteSpace="nowrap",o.bgPos){var r=t.point(o.bgPos);i.style.backgroundPosition=-r.x+"px "+-r.y+"px"}return this._setIconStyles(i,"icon"),i}}),oe=t.Marker.extend({options:{properties:{},labelingInfo:{},offset:[0,0]},initialize:function(e,i){t.setOptions(this,i),this._latlng=t.latLng(e);var o=this._createLabelText(this.options.properties,this.options.labelingInfo);this._setLabelIcon(o,this.options.offset)},_createLabelText:function(e,t){var i=/\[([^\]]*)\]/g,o=t[0].labelExpression;return o=o.replace(i,function(t){var o=i.exec(t);return e[o[1]]})},_setLabelIcon:function(e,t){var i=x({text:e,iconAnchor:t});this.setIcon(i)}}),re=t.Evented.extend({options:{map:{},token:null,server:"www.arcgis.com"},initialize:function(e,i){t.setOptions(this,i),this._map=this.options.map,this._token=this.options.token,this._server=this.options.server,this._webmapId=e,this._loaded=!1,this._metadataLoaded=!1,this._loadedLayersNum=0,this._layersNum=0,this.layers=[],this.title="",this.bookmarks=[],this.portalItem={},this.VERSION="0.4.0",this._loadWebMapMetaData(e),this._loadWebMap(e)},_checkLoaded:function(){++this._loadedLayersNum===this._layersNum&&(this._loaded=!0,this.fire("load"))},_operationalLayer:function(e,t,i,o,r){var n=C(e,t,i,o,r);void 0!==n&&!0===e.visibility&&n.addTo(i)},_loadWebMapMetaData:function(e){var i={},o=this._map,r=this,n="https://"+this._server+"/sharing/rest/content/items/"+e;this._token&&this._token.length>0&&(i.token=this._token),t.esri.request(n,i,function(e,t){e?console.log(e):(console.log("WebMap MetaData: ",t),r.portalItem=t,r.title=t.title,r._metadataLoaded=!0,r.fire("metadataLoad"),o.fitBounds([t.extent[0].reverse(),t.extent[1].reverse()]))})},_loadWebMap:function(e){var i=this._map,o=this.layers,r=this._server,n={},a="https://"+r+"/sharing/rest/content/items/"+e+"/data";this._token&&this._token.length>0&&(n.token=this._token),t.esri.request(a,n,function(e,a){e?console.log(e):(console.log("WebMap: ",a),this._layersNum=a.baseMap.baseMapLayers.length+a.operationalLayers.length,a.baseMap.baseMapLayers.map(function(a){if(void 0!==a.itemId){var s="https://"+r+"/sharing/rest/content/items/"+a.itemId;t.esri.request(s,n,function(t,r){t?console.error(e):(console.log(r.access),"public"!==r.access?this._operationalLayer(a,o,i,n):this._operationalLayer(a,o,i,{})),this._checkLoaded()},this)}else this._operationalLayer(a,o,i,{}),this._checkLoaded()}.bind(this)),a.operationalLayers.map(function(a,s){var l="esri-webmap-layer"+s;if(i.createPane(l),void 0!==a.itemId){var p="https://"+r+"/sharing/rest/content/items/"+a.itemId;t.esri.request(p,n,function(t,r){t?console.error(e):(console.log(r.access),"public"!==r.access?(console.log("inside public, layer:",a,"layers:",o,"map:",i,"params:",n,"paneName:",l),this._operationalLayer(a,o,i,n,l)):(console.log("NOT inside public, layer:",a,"layers:",o,"map:",i,"params:",n,"paneName:",l),this._operationalLayer(a,o,i,{},l))),this._checkLoaded()},this)}else this._operationalLayer(a,o,i,{},l),this._checkLoaded()}.bind(this)),void 0!==a.bookmarks&&a.bookmarks.length>0&&a.bookmarks.map(function(e){var i=t.Projection.SphericalMercator.unproject(t.point(e.extent.xmax,e.extent.ymax)),o=t.Projection.SphericalMercator.unproject(t.point(e.extent.xmin,e.extent.ymin)),r=t.latLngBounds(o,i);this.bookmarks.push({name:e.name,bounds:r})}.bind(this)))}.bind(this))}});e.WebMap=re,e.webMap=V,e.operationalLayer=C,e.FeatureCollection=Z,e.featureCollection=S,e.LabelMarker=oe,e.labelMarker=M,e.LabelIcon=ie,e.labelIcon=x,e.createPopupContent=z,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=esri-leaflet-webmap.js.map