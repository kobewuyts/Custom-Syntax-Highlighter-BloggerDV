/**
 * SyntaxHighlighterLoader
 *
 * @author
 * Kobe Wuyts
 * http://kobewuyts.blogspot
 * http://github.com/kobewuyts
 *
 * @version
 * 1.0.2 (June 06 2012)
 * 
 */

eval(function()
{
try 
 {
  doHighlight();
 }
 catch(e)
 {
  var elem = document.createElement('SCRIPT');
  elem.src="https://raw.github.com/kobewuyts/Custom-Syntax-Highlighter-BloggerDV/master/highlighter.js"; //when forking or rehosting, please change url
  var theBody = document.getElementsByTagName('body')[0];
  theBody.appendChild(elem);
 }
})();