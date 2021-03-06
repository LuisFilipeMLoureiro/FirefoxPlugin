//Getting cookies
function showCookiesForTab(tabs) {
  //get the first tab object in the array
  let tab = tabs.pop();
  let countCookies = 0;

  //get all cookies in the domain
  var gettingAllCookies = browser.cookies.getAll({url: tab.url});
  gettingAllCookies.then((cookies) => {

    //set the header of the panel
    var activeTabUrl = document.getElementById('header-title');
    var text = document.createTextNode("Cookies at: "+ tab.title);
    var cookieList = document.getElementById('cookie-list');
    var numberOfCookies = document.getElementById('number-cookies');
    activeTabUrl.appendChild(text);

    if (cookies.length > 0) {
      //add an <li> item with the name and value of the cookie to the list
      for (let cookie of cookies) {
        //let li = document.createElement("li");
        //let content = document.createTextNode(cookie.name + ": "+ cookie.value);
        //li.appendChild(content);
        //cookieList.appendChild(li);
        countCookies++;
      }
      let cookiesText = document.createElement("p");
      let cookiesContent = document.createTextNode("Number of cookies: "+countCookies);
      cookiesText.appendChild(cookiesContent);
      numberOfCookies.appendChild(cookiesText);
      var cookies = document.getElementById('number-cookies');
      cookies.setAttribute("value", countCookies);
    } else {
      let p = document.createElement("p");
      let content = document.createTextNode("No cookies in this tab.");
      let parent = cookieList.parentNode;

      p.appendChild(content);
      parent.appendChild(p);

      
    }
  });







  let li = document.createElement("li");
  let gettingSpace = browser.storage.storage.getBytesInUse({url: tab.url})
  let content = document.createTextNode(gettingSpace);
  li.appendChild(content);
  cookieList.appendChild(li);
}

//get active tab to run an callback function.
//it sends to our callback an array of tab objects
function getActiveTab() {
  return browser.tabs.query({currentWindow: true, active: true});
}
getActiveTab().then(showCookiesForTab);

