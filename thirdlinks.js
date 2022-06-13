//Getting links

const getDomains = async (tabs) => {
  const response = await browser.tabs.sendMessage(tabs.pop().id, {
    method: "getDomains",
  });

  document.getElementById("domains")
    .appendChild(document.createTextNode("Número de links terceiros: " + response.data.domainsQuantity));
};


function getActiveTab() {
  return browser.tabs.query({
    currentWindow: true, active: true
  });
}
getActiveTab().then(getDomains);

