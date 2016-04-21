// user.js



   export function legend(parent, data, chart, legendTemplate) {
   	legendTemplate = typeof legendTemplate !== 'undefined' ? legendTemplate : "<%=label%>";
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
           legendNode=legendTemplate.replace("<%=value%>",d.value);
           legendNode=legendNode.replace("<%=label%>",d.label);
           var text = document.createTextNode(legendNode);
           text.className = 'text-node';
           title.appendChild(text);

           show(chart, title, i);
       });
   };
