"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[25025],{45691:(e,n,i)=>{i.r(n),i.d(n,{comp:()=>a,data:()=>c});var t=i(6254);const l={},a=(0,i(89596).A)(l,[["render",function(e,n){const i=(0,t.g2)("RouteLink");return(0,t.uX)(),(0,t.CE)("div",null,[n[8]||(n[8]=(0,t.Lk)("h1",{id:"schneider-electric-cct595011",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#schneider-electric-cct595011"},[(0,t.Lk)("span",null,"Schneider Electric CCT595011")])],-1)),(0,t.Lk)("table",null,[n[6]||(n[6]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th"),(0,t.Lk)("th")])],-1)),(0,t.Lk)("tbody",null,[n[2]||(n[2]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Model"),(0,t.Lk)("td",null,"CCT595011")],-1)),(0,t.Lk)("tr",null,[n[1]||(n[1]=(0,t.Lk)("td",null,"Vendor",-1)),(0,t.Lk)("td",null,[(0,t.bF)(i,{to:"/supported-devices/#v=Schneider%20Electric"},{default:(0,t.k6)((()=>n[0]||(n[0]=[(0,t.eW)("Schneider Electric")]))),_:1})])]),n[3]||(n[3]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Description"),(0,t.Lk)("td",null,"Wiser motion sensor")],-1)),n[4]||(n[4]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Exposes"),(0,t.Lk)("td",null,"battery, illuminance, occupancy, linkquality")],-1)),n[5]||(n[5]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Picture"),(0,t.Lk)("td",null,[(0,t.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/CCT595011.png",alt:"Schneider Electric CCT595011"})])],-1))])]),n[9]||(n[9]=(0,t.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="illuminance-measurement" tabindex="-1"><a class="header-anchor" href="#illuminance-measurement"><span>Illuminance measurement</span></a></h3><p>The motion/occupancy detection works ok and illuminance measurement has worked in tests sporadically but automatic illuminance reporting or any kind of level triggering has not been successful and is not configured automatically. These should be supported by the device and will hopefully be added in the future.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',4)),(0,t.Lk)("p",null,[(0,t.Lk)("em",null,[(0,t.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,t.k6)((()=>n[7]||(n[7]=[(0,t.eW)("How to use device type specific configuration")]))),_:1})])]),n[10]||(n[10]=(0,t.Fv)('<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary"><span>Occupancy (binary)</span></a></h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10))])}]]),c=JSON.parse('{"path":"/devices/CCT595011.html","title":"Schneider Electric CCT595011 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Schneider Electric CCT595011 control via MQTT","description":"Integrate your Schneider Electric CCT595011 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-03-31T18:50:25.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Illuminance measurement","slug":"illuminance-measurement","link":"#illuminance-measurement","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1735936090000},"filePathRelative":"devices/CCT595011.md"}')}}]);