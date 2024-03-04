import React from 'react'


function Home() {

    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'auto' })
    return (
        <>
            <h1>Home</h1>
        </>
    )
}

export default Home
