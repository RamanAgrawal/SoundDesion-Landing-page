import Blog from "../layouts/Blog/Blog"
import Footer from "../layouts/Footer/Footer"
import Header from "../layouts/Header/Header"
import Info from "../layouts/Info/Info"
import Testimonials from "../layouts/Testimonial/Testimonials"
import Topics from "../layouts/Topics/Topics"


const HomePage = () => {
  return (
    <>
    <Header/>
    <Topics/>
    <Info/>
    <Blog/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default HomePage