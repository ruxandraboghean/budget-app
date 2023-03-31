const renderWidgets = (title, items) => {
  return `
    <h2> ${title} </h2>
    <ul> 
        ${items.forEach((item) => {
          return `
            <li> 
                <div class="widget-item"> 
                    <div class="widget-item-name"> ${item.name}</div>
                    <div class="widget-item-balance"> ${item.balance}</div>
                </div>    
            </li>`;
        })}
    </ul>
  `;
};

//un fel de onload la pagina, se executa
(function () {
  // const aside = document.querySelector("aside");
  // aside.innerHTML = renderWidgets("Wallets", wallets);
})();
