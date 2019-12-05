### Problem:
<h1>Switch/Case - Bug Fixing #6</h1>
<p>
Oh no! Timmy&apos;s evalObject function doesn&apos;t work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy&apos;s function?
</p>

<!--
<br><br><br><br>
<select id="collectionSelect"></select>
<iframe style="visibility:hidden;display:none;" onload="
(function(e){
var COLLECTION = 'https://www.codewars.com/collections/bug-fixing';
var qCode = String.fromCharCode(34);
function ioa(str, f) {
  var a=[],i=-1;
  while((i=str.indexOf(f,i+1)) >= 0) a.push(i);
  return a;
}

function fc(op,cl) {
  var arr=[], d=0;
  op = op.map(a => {return {i:a,q:'<'};});
  cl = cl.map(a => {return {i:a,q:'>'};});
  var cmb = [].concat(op,cl).sort((a,b) =>a.i-b.i);
  for(var i=0;i<cmb.length-1;i++) {
    d += cmb[i].q === '<' ? 1 : -1;
    if(d === 0 || (i > 2 && d === 2))
      return cmb[i].i;
  }
  return -1;
}

function processKataData(data) {
  var kataData = {};
  var inx1 = data.indexOf('data-title='+qCode)+12;
  var kataTitle = data.slice(inx1).slice(0,data.slice(inx1).indexOf(qCode))

  var inx2 = data.indexOf('href='+qCode)+6;
  var kataLink = data.slice(inx2).slice(0,data.slice(inx2).indexOf(qCode))

  kataData.title = kataTitle;
  kataData.link = kataLink;

  return kataData;
}

function processData(msg) {
   var data = msg.split('\n');
    var dindex = data.slice(7,8).join('').indexOf('<div class='+qCode+'nine columns prn'+qCode+'>');
      var filteredData = data.slice(7,8).join('').split('').filter((a,i) => i>=dindex).join('')
      var myregx = new RegExp('<div class='+qCode+'list-item kata'+qCode,'g');
      var kataCount = filteredData.match(myregx).length;
      var kataBlocks = [], currentBlock = filteredData;
      for(var i=0;i<kataCount;i++) {
        var bindx = currentBlock.indexOf('<div class='+qCode+'list-item kata'+qCode+''), 
        block = currentBlock.slice(bindx),
        closingBlock = fc(ioa(block, '<div').slice(0,10),ioa(block, '</div').slice(0,10)),
        kataData = block.slice(0,closingBlock).replace(/(<)/g,'[').replace(/(>)/g,']');
        kataBlocks.push(kataData);
        currentBlock = block.slice(closingBlock+3);
      }
      var kataDatas = kataBlocks.map(processKataData);
      return kataDatas;
}

function getData() {
  $.ajax({ 
    type: 'GET',
    url: COLLECTION,
    headers: {
      Host: 'www.codewars.com',
      Accept: 'text/html, */*; q=0.01',
      'Accept-Language': 'en-US,en;q=0.5',
      'Accept-Encoding': 'gzip, deflate, br',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-PJAX': 'true',
      'X-PJAX-Container': 'body',
      'X-Requested-With': 'XMLHttpRequest',
      Referer: 'https://www.codewars.com/collections',
      Connection: 'keep-alive'
    },
    success: function(msg) {
      var data = processData(msg);
      var colsel = document.getElementById('collectionSelect');
      for(var i=0;i<data.length;i++) {
        var option = document.createElement('option');
        option.text = data[i].title;
        option.value = data[i].link
        colsel.add(option);
      }

      function onchanging(e) {
        alert(e);
      }

      colsel.addEventListener(
         'change',
         function(e) {
           var options = colsel.options;
           if(colsel.selectedIndex < options.length) {
             var selected = options[colsel.selectedIndex];
             if(selected) {
               console.log(selected.value);
               window.location.href = 'https://www.codewars.com' + selected.value;
             }
           }
         },
         false
      );
    }
  });
}
getData();
})(this)" ></data>
-->
### Solution