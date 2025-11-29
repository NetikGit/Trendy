import BarSection from "../components/BarSection";
import HeroText from "../components/HeroText";
import Navbar from "../components/Navbar";
import NewArrivals from "../components/NewArrivals";
import { Carousel } from "../components/ui/carousel";
import ProductCard from "../components/ProductCard";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import { WavyBackground } from "../components/ui/wavy-background";
import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
const Products = [
    {
      id : "1",
      category: "PANT'S",
      image: "/aniProduct.png",
      title: "UNISEX STRAIGHT FIT BAGGY PANTS",
      price: "1,699.00",
      originalPrice: "3,199.00",
      discount: 44,
    }]

const slides = [
  {
    src: "/image10.png",
    title: "SAIYAN BLACK UNISEX STRAIGHT FIT BAGGY PANTS",
    button: "Shop Now"
  },
  {
    src: "/image5.png",
    title: "SAIYAN BLACK UNISEX STRAIGHT FIT BAGGY PANTS",
    button: "Shop Now"
  },
  {
    src: "/image13.png",
    title: "SAIYAN BLACK UNISEX STRAIGHT FIT BAGGY PANTS",
    button: "Shop Now"
  },
    {
    src: "/image4.png",
    title: "SAIYAN BLACK UNISEX STRAIGHT FIT BAGGY PANTS",
    button: "Shop Now"
  },
  {
    src: "/image2.png",
    title: "SAIYAN BLACK UNISEX STRAIGHT FIT BAGGY PANTS",
    button: "Shop Now"
  }
];


function Main() {
  return(
    <div>
  <div className="w-[1200px] min-h-[1200px] relative bg-cover bg-center">
    <WavyBackground />
        <Navbar/>
      <div className="absolute left-[100px] top-[140px]">
        <div className="w-[1292px] h-[550px] bg-gradient-to-r from-black to-gray-800 rounded-lg relative z-10"></div>

        <div className="absolute left-[126px] top-[151px]">
          <HeroText />
        </div>

        <img
          src="/new.png"
          className="absolute left-[800.5px] top-[0px] w-[507px] h-[570px] z-50"
          alt="Tech"
        />

        <img
          src="/Ellipse 26.png"
          className="absolute left-[750px] top-[70.35px] w-[79.92px] h-[79.92px] z-40"
          alt="Circle Small"
        />
        <img
          src="/Ellipse 26.png"
          className="absolute left-[862.98px] top-[100px] w-[399.92px] h-[399.92px] z-30"
          alt="Circle Large"
        />
      </div>
  </div>
  

      {/* Bar Section */}
      <div className="absolute top-[650px] w-full pt-16">
        <BarSection />
      </div>
      <img 
      src="/Poster1.png"
      className="absolute top-[1400px]"
      />
      <div>
      <NewArrivals />
    </div>
    <div className="absolute top-[4400px]">
    <div className="absolute top-[100px] min-w-screen min-h-screen ">
      <h1 className=" min-w-screen text-4xl text-white tracking-widest pl-[700px] pb-8 ">TRENDING</h1>
      <Carousel slides={slides} />
    </div>
    </div>
    <div className=" flex absolute top-[5000px]">
     <ContainerScroll
      titleComponent={<h1 className="text-5xl font-bold text-white"></h1>}
    >
      <div className="h-full w-full flex items-center justify-center text-white text-2xl">
        <img  
        src="/aniImage.png"
        />
      </div>
    </ContainerScroll>
    <div className="absolute top-[350px] left-[900px] p-4 w-[400px] h-[600px] bg-gray-200 rounded-xl shadow text-black"> {Products.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
          <button className=" mt-6 ml-20 w-[200px] h-[60px] rounded-xl bg-black text-white">
            SHOP NOW
            </button>
          </div>
      
    </div>
   <div className="relative group min-w-screen h-[600px]">
    <div className="absolute top-[5000px]">
  <img
    src="/Closing.png"
    alt="Example"
    className="w-full h-full object-cover rounded-lg"
  />
  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-300">
    <p className="text-white text-2-xl font-thin tracking-widest">LET'S CONQUERER!</p>
  </div>
  </div>
  <div className="absolute top-[5600px] text-black">
    <Reviews />
  </div>
  <div className="absolute top-[6300px]">
    <Footer />
  </div>
  
</div>

   </div>
  );
}
export default Main;
