export async function getPageData(id) {
    let test = await fetch(`https://gorest.co.in/public-api/posts?page=${id}`, {
        method: "GET"
    })

    test = await test.json()

    return test.data
}
