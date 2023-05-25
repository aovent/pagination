const main = document.querySelector("main");

export async function renderPosts(array, _activeButtonID, _pageNumber) {
    setActiveButton(_activeButtonID);

    array.forEach(item => {
        renderPost(item.title, item.body, item.id, _activeButtonID);
    })
} 

export async function renderPage() {
    let pageSection = document.createElement("section");
    let pageButtons = document.createElement("section");

    main.append(pageSection);
    main.append(pageButtons);

    pageSection.classList.add("page_section");
    pageButtons.classList.add("page_buttons");
    
    let button;
    for (let index = 1; index < 11; index++) {
        button = document.createElement("button");

        button.innerHTML = index;

        pageButtons.append(button);
    }
}

async function renderPost(_title, _body, _id, _pageNumber) {
    let pageSection = document.querySelector(".page_section");

    let postDiv = document.createElement("div");
    postDiv.classList.add("post_div");
    pageSection.append(postDiv);

    let h1title = document.createElement("h1");
    h1title.classList.add("post_title");
    postDiv.append(h1title);

    let atitle = document.createElement("a");
    atitle.innerHTML = _title;
    atitle.href = `post.html?id=${_id}#${_pageNumber}`;
    h1title.append(atitle);
}

async function setActiveButton(_id) {
    let allButtons = document.querySelectorAll("button");

    allButtons.forEach((item, index) => {
        if (index != _id - 1) {
            item.classList.remove("active_button");
        }
    })

    allButtons[_id - 1].classList.add("active_button");
}
