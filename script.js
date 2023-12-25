const form = document.querySelector("form")
const logoutBtn = document.querySelector(".logoutBtn")


form.addEventListener('submit', (e) => {

    e.preventDefault()

    const username = form.username.value
    const passworld = form.passworld.value

    const authenticaded = authentication(username, passworld)

    if (authenticaded) {
        window.location.href = 'logout.html'
    } else {
        alert("wrong")
    }

})

//cheking username and passworld
function authentication(username, passworld) {

    if (username === "admin" && passworld === "passworld") {
        return true
    } else {
        return false
    }
}

logoutBtn.addEventListener("click", () => {
    window.location.replace('index.html')
})

