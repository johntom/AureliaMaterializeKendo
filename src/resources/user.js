// user.js

var localVariable = 123;  // not visible outside this file

export default function User(age) {
  this.age = age;
}; // can be imported by other files
export const sqrt = Math.sqrt;
   export function square(x) {
       return x * x;
   };
   export function diag(x, y) {
       return sqrt(square(x) + square(y));
   };
   export function legendtest(parent, data, chart, legendTemplate) {

     legendTemplate = typeof legendTemplate !== 'undefined' ? legendTemplate : "<%=label%>";
    console.log('legendTemplate',legendTemplate)
       parent.className = 'legend';
       var datas = data.hasOwnProperty('datasets') ? data.datasets : data;
       // remove possible children of the parent
       while(parent.hasChildNodes()) {
           parent.removeChild(parent.lastChild);
       }

       var show = chart ? showTooltip : noop;
       datas.forEach(function(d, i) {

           //span to div: legend appears to all element (color-sample and text-node)
           var title = document.createElement('div');
           title.className = 'title';
           parent.appendChild(title);

           var colorSample = document.createElement('div');
           colorSample.className = 'color-sample';
           colorSample.style.backgroundColor = d.hasOwnProperty('strokeColor') ? d.strokeColor : d.color;
           colorSample.style.borderColor = d.hasOwnProperty('fillColor') ? d.fillColor : d.color;
           title.appendChild(colorSample);
          let  legendNode=legendTemplate.replace("<%=value%>",d.value);
            legendNode=legendNode.replace("<%=label%>",d.label);
           var text = document.createTextNode(legendNode);
           text.className = 'text-node';
           title.appendChild(text);
console.log('d.label',d.label)
           show(chart, title, i);
       });


   //add events to legend that show tool tips on chart


        // return 'jrt'+parent;
        function showTooltip(chart, elem, indexChartSegment){
           var helpers = Chart.helpers;

           var segments = chart.segments;
           //Only chart with segments
           if(typeof segments != 'undefined'){
               helpers.addEvent(elem, 'mouseover', function(){
                   var segment = segments[indexChartSegment];
                   segment.save();
                   segment.fillColor = segment.highlightColor;
                   chart.showTooltip([segment]);
                   segment.restore();
               });

               helpers.addEvent(elem, 'mouseout', function(){
                   chart.draw();
               });
           }
       }
      //  export function noop() {}
   };


//
