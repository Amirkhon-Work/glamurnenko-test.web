import React from "react"
import ServiceElement from "./ServiceElement"

export default () => {
    const first = {
        title: "Попробовать", time: "в пределах 24 часов",
        amount: "5 ваших луков или 5 ваших вопросов", prevPrice: "890", price: "499"
    }
    const second = {
        title: "1 день", time: "в пределах 24 часов",
        amount: "до 100", prevPrice: "3900", price: "2900"
    }
    const third = {
        title: "1 месяц", time: "в течении месяца",
        amount: "неограничено", prevPrice: "11900", price: "9900"
    }
    return (
        <div className="fourth-page-content">
            <img src="img/books.png" alt=""/>
            <div className="service-wrapper">
                <div className="service-title">ПАКЕТЫ УСЛУГ</div>
                <div className="service-element-wrapper">
                    <ServiceElement title={first.title} time={first.time} amount={first.amount}
                    prevPrice={first.prevPrice} price={first.price} />
                    <ServiceElement title={second.title} time={second.time} amount={second.amount}
                    prevPrice={second.prevPrice} price={second.prevPrice} />
                    <ServiceElement title={third.title} time={third.time} amount={third.amount}
                    prevPrice={third.prevPrice} price={third.price}/>
                </div>
            </div>
        </div>
    )
}