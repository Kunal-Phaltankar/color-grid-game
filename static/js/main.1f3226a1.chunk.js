(this["webpackJsonpcolor-grid-game"]=this["webpackJsonpcolor-grid-game"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(7),i=a.n(n),c=(a(13),a(14),a(1)),l=a(2),s=a(4),h=a(3),u=a(5),d=(a(15),a(16),function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={randomNodeColor:null},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t={backgroundColor:this.props.color};return this.props.isRandomNode?o.a.createElement("div",{className:"node randomnode",style:t,onClick:this.props.highlightMatchingColors}):o.a.createElement("div",{className:"node",style:t,onClick:function(){e.props.checkMatch(e.props.color)}})}}]),t}(o.a.Component)),m=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).handleLevels=function(t){e.setState({gridSize:t,highScore:0},(function(){this.handleChangeColor()}))},e.state={grid:[],colorMatrix:[],anyColorFromColorMatrix:null,findMatch:!1,score:0,gridSize:5,highScore:0},e.highlightMatchingColors=function(t){e.setState({findMatch:!0})},e.checkMatch=function(t){t===e.state.anyColorFromColorMatrix?(e.setState({score:e.state.score+20},(function(){this.state.score>this.state.highScore?this.setState({highScore:this.state.score}):console.log("this.state.score <= this.state.highScore")})),e.setState(f(e.state.gridSize)),e.setState({findMatch:!1})):e.setState({score:e.state.score-5})},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=f(this.state.gridSize),t=e.grid,a=e.colorMatrix,r=e.anyColorFromColorMatrix,o=e.gridSize;this.setState({grid:t,colorMatrix:a,anyColorFromColorMatrix:r,gridSize:o})}},{key:"handleChangeColor",value:function(){this.setState(f(this.state.gridSize)),this.setState({findMatch:!1,score:0})}},{key:"getGridStyle",value:function(e){return{minWidth:5===e?300:10===e?500:700}}},{key:"renderGrid",value:function(){var e=this;return o.a.createElement("div",{className:"grid"},this.state.grid.map((function(t,a){return o.a.createElement("div",{key:a},t.map((function(t,a){return o.a.createElement(d,{key:a,row:t.row,col:t.col,color:e.state.colorMatrix[t.row][t.col],isRandomNode:!!e.state.findMatch&&e.state.colorMatrix[t.row][t.col]===e.state.anyColorFromColorMatrix,checkMatch:e.checkMatch})})))})))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Colors container",style:this.getGridStyle(this.state.gridSize)},o.a.createElement("h3",null,"Where Am I?"),o.a.createElement("div",{className:"score"},o.a.createElement("label",{id:"left"},"Your Score: ",this.state.score),o.a.createElement("label",{id:"right"},"HighScore: ",this.state.highScore)),o.a.createElement("div",null,o.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){return e.handleChangeColor()}},"Change Colors")),this.renderGrid(),o.a.createElement(d,{isRandomNode:!0,color:this.state.anyColorFromColorMatrix,highlightMatchingColors:this.highlightMatchingColors}),o.a.createElement("div",null,o.a.createElement("label",{id:"info"},"Find above tile in the Color Grid.")),o.a.createElement("div",{className:"levels"},o.a.createElement("button",{className:"waves-effect waves-teal btn-flat",onClick:function(){return e.handleLevels(5)}},"Easy"),o.a.createElement("button",{className:"waves-effect waves-teal btn-flat",onClick:function(){return e.handleLevels(10)}},"Medium"),o.a.createElement("button",{className:"waves-effect waves-teal btn-flat",onClick:function(){return e.handleLevels(15)}},"Hard")))}}]),t}(o.a.Component),f=function(e){for(var t=[],a=[],r=0;r<e;r++){for(var o=[],n=[],i=0;i<e;i++)o.push(g(r,i)),n.push(v());t.push(o),a.push(n)}return{grid:t,colorMatrix:a,anyColorFromColorMatrix:a[C(e)][C(e)],gridSize:e}},g=function(e,t){return{row:e,col:t}},v=function(){return"#"+Math.random().toString(16).substr(-6)},C=function(e){return parseInt(Math.random().toString().substr(-1))%e};var S=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.1f3226a1.chunk.js.map