console.log('hullo');
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
document.addEventListener('DOMContentLoaded', async function() {
    await delay(750);
    console.log('i wated 4 u');
    // jQuery("#setter").val("LOAD \"*\",8")
    jQuery("#writer").html("load \"*\",8<br/>");
    await delay(500);
    jQuery("#writer").append("<br/>searching for *<br/>");
    await delay(200);
    jQuery("#writer").append("LOADING<br/>");
    await delay(1500);
    jQuery("#writer").append("READY.<br/>");
    await delay(500);
    jQuery("#writer").append("LIST<br/>");
    await delay(500);
    
    jQuery("#writer").append(`<br/>
    10 REM YOU MIGHT BE LOOKING FOR <a href="https://mattmutz.com">Matt</a><br/> 
    ready.<br/>`);


});