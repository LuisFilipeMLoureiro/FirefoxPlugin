const outputscore = () => {

	let numberofcookies = document.getElementById('number-cookies').getAttribute("value");
	let storagelength = document.getElementById('localstorage').getAttribute("value");
	let numberoflinks = document.getElementById('domains').getAttribute('value');

	let displayscore = document.getElementById("score");


	let slScore = Number(storagelength);
	let tlScore = Number(numberoflinks);
	let cScore  = Number(numberofcookies);


	var total_score = (1/(slScore + tlScore + cScore))*1000;



	document.getElementById("score")
      .appendChild(document.createTextNode("Security Score: " + total_score));


}

	function getActiveTab() {
  return browser.tabs.query({
    currentWindow: true, active: true
  });
}


setTimeout(() => {
  getActiveTab().then(outputscore);
}, 100);



