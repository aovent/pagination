const title = document.querySelector(".pm_title");
const body = document.querySelector(".pm_body");

const backButton = document.querySelector("p");

backButton.addEventListener("click", () => {
    let id = (window.location.href.slice(window.location.href.indexOf("=") + 1)).slice((window.location.href.slice(window.location.href.indexOf("=") + 1)).indexOf("#") + 1);
    window.location.href = `index.html?page=${id}`;
})

document.addEventListener("DOMContentLoaded", async () => {
    let id = (window.location.href.slice(window.location.href.indexOf("=") + 1));
    let pageId = id.slice(id.indexOf("#") + 1);

    let data = await getPageData(id);

    title.innerHTML = data.title;
    body.innerHTML = data.body;
})

async function getPageData(id) {
    let test = await fetch(`https://gorest.co.in/public-api/posts/${id}`, {
        method: "GET"
    })

    test = await test.json()

    return test.data
}