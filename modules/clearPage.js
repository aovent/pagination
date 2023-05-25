export async function clearPage() {
    document.querySelectorAll(".post_div").forEach(item => {
        item.remove();
    })
}
