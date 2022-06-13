//Getting LocalStorage

const getLocalStorage = async (tabs) => {
  let tab = tabs.pop();
  const response = await browser.tabs.sendMessage(tab.id, {
    method: "getLocalStorage",
  });
  let t_localStorage = 0;
  if (response.data.length > 0) {
    for (let i of response.data) {
      t_localStorage ++;
    }
  }

  document.getElementById("localstorage").appendChild(document.createTextNode("Tamanho do Local Storage: " + t_localStorage));
};

function getActiveTab() {
  return browser.tabs.query({
    currentWindow: true, active: true
  });
}
getActiveTab().then(getLocalStorage);

