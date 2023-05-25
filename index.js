import { getPageData } from "./modules/dataFunctions.js";
import { renderPosts, renderPage } from "./modules/renderFunctions.js";
import { clearPage } from "./modules/clearPage.js";

document.addEventListener("DOMContentLoaded", async () => {
    let startId = 1;

    if (window.location.href.split("=")[1] != undefined) {
        startId = Number(window.location.href.split("=")[1]);
    }


    const data = await getPageData(startId);
    
    await renderPage();
    await renderPosts(data, startId);

    document.querySelectorAll("button").forEach(async (item, index) => {
        item.addEventListener("click", async () => {
            await clearPage();

            let data = await getPageData(index + 1);

            await renderPosts(data, index + 1); 
        })
    })
});
