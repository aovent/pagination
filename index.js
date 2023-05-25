import { getPageData } from "./modules/dataFunctions.js";
import { renderPosts, renderPage } from "./modules/renderFunctions.js";
import { clearPage } from "./modules/clearPage.js";

document.addEventListener("DOMContentLoaded", async () => {
    const data = await getPageData(1);
    
    await renderPage();
    await renderPosts(data, 1);

    document.querySelectorAll("button").forEach(async (item, index) => {
        item.addEventListener("click", async () => {
            await clearPage();

            let data = await getPageData(index + 1);

            await renderPosts(data, index + 1); 
        })
    })
});

