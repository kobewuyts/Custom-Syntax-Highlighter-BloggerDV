eval(function()
{
try 
 {
  doHighlight();
 }
 catch(e)
 {
  var elem = document.createElement('SCRIPT');
  elem.src="INSERT LINK TOT HIGHLIGHT.JS";
  var theBody = document.getElementsByTagName('body')[0];
  theBody.appendChild(elem);
 }
})();