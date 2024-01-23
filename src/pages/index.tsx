import {Navigation} from "@/components/navigation/Navigation";
import About from '@/pages/about'
import Contact from '@/pages/contact'
import Project from '@/pages/projects'
import Home from '@/pages/home'
import Footer from '../components/footer/Footer'
export default function main() {
    return (
        <>
            <Navigation/>
            <Home/>
            <About/>
            <Project/>
            <Contact/>
            <Footer/>
        </>
    )
}
