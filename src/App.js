import React from "react"
import Header from "./components/Header";
import FirstPage from "./components/FirstPage";
import LogoImg from "./components/Logo";
import SecondPage from "./components/SecondPage";
import Label from "./components/Label";
import SecondPageContent from "./components/SecondPageContent";
import ThirdPage from "./components/ThirdPage";
import ThirdPageContent from "./components/ThirdPageContent";
import FourthPage from "./components/FourthPage";
import FourthPageContent from "./components/FourthPageContent";
import Footer from "./components/Footer";
import FifthPage from "./components/FifthPage";
import FifthPageContent from "./components/FifthPageContent";


export default function App() {
    return (
        <>
            <FirstPage>
                <Header/>
                <LogoImg />
            </FirstPage>
            <SecondPage>
                <Label/>
                <SecondPageContent />
            </SecondPage>
            <ThirdPage>
                <ThirdPageContent/>
            </ThirdPage>
            <FourthPage>
                <FourthPageContent />
            </FourthPage>
            <FifthPage>
                <FifthPageContent />
            </FifthPage>
            <Footer />
        </>
    )
}