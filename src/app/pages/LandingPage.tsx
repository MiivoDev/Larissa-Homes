import React, { useState } from 'react';
import { Plus, Minus, Star } from 'lucide-react';
import { Link, useLocation } from 'react-router';

import svgPaths from "../../imports/svg-vhr76u2f5z";
import imgHeroSection from "figma:asset/2a1fbd6efc9926be1ebb460e8faafd23e1343331.png";
import imgImageLuxuryInterior from "figma:asset/8c890be11807a20cf324f3efccafb2501006a342.png";
import imgImage1 from "figma:asset/98579210703cf5025c77d8948a84486d7bf1a07b.png";
import imgImage2 from "figma:asset/9543ea54e352538eda11357b3a4bf4c288e3143e.png";
import imgImage3 from "figma:asset/9f5fd041043c2bbcd97de9e18d5daa7ff1ed1309.png";
import imgImage from "figma:asset/cc39b6e445e7650d0886d90aa4776d50c5f1fd84.png";
import imgImage4 from "figma:asset/c21e0b3035cfc146a2f01ca29ab3b3ee0706bf50.png";
import imgImage5 from "figma:asset/cc24b205c112d6f971869d5b1814d4a9a1bf682f.png";
import imgAbout from "figma:asset/96325666abdd434f97f0f333e88f4b8bd1279179.png";
import imgService1 from "figma:asset/7a7bc7c16ff88017929d00a7af19134b090daaac.png";
import imgService3 from "figma:asset/49bfb8276784da46af98705d07c33cf0707d4e40.png";
import newImgAboutHero from "figma:asset/4569c43857124e50096a93bccfe93b3cbb31ae8a.png";
import imgFeatured1 from "figma:asset/e3000fa2c1a1ce29ccfb5e9298be8fd52e83583a.png";
import imgFeatured2 from "figma:asset/a705a0c16314a873a565b681ed37d2e76b7230cc.png";
import imgFeatured3 from "figma:asset/736df762ba8090cfb3980e3e0bbf6df6df6396d6.png";
import imgProp1Img1 from "figma:asset/2a1fbd6efc9926be1ebb460e8faafd23e1343331.png";
import imgProp1Img2 from "figma:asset/49bfb8276784da46af98705d07c33cf0707d4e40.png";
import imgProp1Img3 from "figma:asset/984028716e8b86acc0cde8f3700e863dabe1252b.png";
import imgProp1Img4 from "figma:asset/da9c2d9677ea45ac3eb0ae30e4dd9e0b61db8b3e.png";
import imgProp2Img1 from "figma:asset/398fde9bb16de81c6d9b224a562edeb9e4f002ad.png";
import imgProp2Img2 from "figma:asset/736df762ba8090cfb3980e3e0bbf6df6df6396d6.png";
import imgProp2Img3 from "figma:asset/c444fa35203f5620fa424fab2c2a548fd3aea5d1.png";
import imgProp2Img4 from "figma:asset/570a9b1b0b46f816fd53174b9f49bc96f9b6e957.png";
import imgProp3Img1 from "figma:asset/ea61ef461049339f1d3f44cc78edbfa29427371d.png";
import imgProp3Img2 from "figma:asset/9a7cf563e0d87f66bd18d4141d4ebed16e5208ac.png";
import imgProp3Img3 from "figma:asset/a705a0c16314a873a565b681ed37d2e76b7230cc.png";
import imgProp3Img4 from "figma:asset/0299b324b41cff0ead0f662530befe4a18e1bec8.png";
import imgCtaBanner from "figma:asset/dbbfa8cfaa7aeed8ec36e941436334e9f1ac8f5c.png";
import imgOnboarding from "figma:asset/e16e059d3ee868079fe1890c5df55a6fd716eb42.png";
import imgManagement from "figma:asset/c2b22094266043d540230d1975d0655383f3745e.png";
import imgEarnings from "figma:asset/251f9657242f6f83c9c1c75de8700eea5034bd6a.png";
import imgGuestRelations from "figma:asset/8f69a618fd5b8153e404ed10d99cb7ec3d4f66b4.png";

function Logo({ fill = "white" }: { fill?: string }) {
  return (
    <div className="h-[28px] relative w-[22.4px] shrink-0">
      <svg className="block w-full h-full" fill="none" viewBox="0 0 24 31">
        <path d={svgPaths.p14ef9540} stroke={fill} strokeWidth="2.24" />
      </svg>
    </div>
  );
}

const homeFaqs = [
  {
    q: "What amenities are included in my stay?",
    a: "All our properties come fully equipped with high-speed Wi-Fi, premium linens, luxury toiletries, a fully stocked kitchen, and a Smart TV. Specific amenities like private pools or gym access vary by property."
  },
  {
    q: "How does the check-in process work?",
    a: "We offer a seamless, contactless check-in experience. You will receive a unique digital access code and detailed instructions 24 hours before your arrival."
  },
  {
    q: "Are pets allowed in the properties?",
    a: "Pet policies vary depending on the specific property. Please check the individual property listing details or reach out to our support team to find the perfect pet-friendly stay."
  },
  {
    q: "Is there a minimum stay requirement?",
    a: "Most of our properties have a 2-night minimum stay, though this can vary during peak seasons or holidays. Long-term stays are also available with special rates."
  }
];

const investmentFaqs = [
  {
    q: "How does the commission model work?",
    a: "We charge a competitive 15% commission on gross rental revenue. There are no hidden fees, and you only pay when your property earns money."
  },
  {
    q: "What is included in the management service?",
    a: "Our service includes full property management, dynamic price optimization, 24/7 guest communication, professional cleaning coordination, and monthly financial reporting."
  },
  {
    q: "Do I have to commit to a long-term contract?",
    a: "No, we believe in earning your business every month. We don't lock you into long-term contracts, giving you flexibility and peace of mind."
  },
  {
    q: "How and when are my earnings paid out?",
    a: "You will receive your monthly payouts directly to your bank account alongside transparent, detailed performance reports detailing occupancy and revenue."
  }
];

function PropertyImageCarousel({ images, alt }: { images: string[], alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full rounded-[24px] overflow-hidden group">
      <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${alt} ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-6 bg-white' : 'w-2 bg-white/60 hover:bg-white/90'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-white text-[#12161D] font-sans overflow-x-hidden selection:bg-[#5383a9] selection:text-white">
      
      {/* Hero Section */}
      {isHomePage ? (
        <section className="relative w-full h-[800px] lg:h-[947px] flex flex-col items-center">
          <div className="absolute inset-0 z-0">
            <img src={imgHeroSection} className="w-full h-full object-cover" alt="Luxury Interior" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#5383a9] to-transparent h-[60%] opacity-80" />
          </div>
          
          {/* Navbar */}
          <nav className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 py-5 flex justify-between items-center z-10">
            <div className="flex items-center gap-3">
              <Link to="/">
                <span className="font-bold text-xl text-white tracking-wide">Larisa Homes</span>
              </Link>
              <Logo fill="white" />
            </div>
            <div className="hidden md:flex items-center gap-12">
              <div className="flex gap-8 text-white text-base">
                <a href="#pricing" className="hover:text-white/80 transition-colors">Pricing</a>
                <Link to="/investments" className="hover:text-white/80 transition-colors">Investments</Link>
                <a href="#about" className="hover:text-white/80 transition-colors">About Us</a>
              </div>
              <button className="bg-white text-[#12161D] px-6 py-2 rounded-full font-semibold hover:bg-white/90 transition-colors">
                Get started
              </button>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center text-center mt-20 lg:mt-32 px-4 w-full max-w-[1200px]">
            <h1 className="text-[40px] md:text-6xl lg:text-[72px] font-normal text-white leading-tight tracking-tight mb-8 whitespace-nowrap lg:whitespace-normal">
              Find the perfect rental<br />
              that feels like home<br />
              with style and comfort.
            </h1>
            <button className="bg-white text-[#12161D] px-8 py-4 rounded-full font-medium text-lg hover:bg-white/90 transition-colors">
              Get started
            </button>
          </div>
        </section>
      ) : (
        <section className="relative w-full lg:h-[889px] flex flex-col lg:flex-row bg-[#f4f7f9] overflow-hidden">
          {/* Navbar Overlay */}
          <nav className="absolute top-0 left-0 right-0 w-full max-w-[1440px] mx-auto px-6 lg:px-[62px] py-6 flex justify-between items-center z-20">
            <div className="flex items-center gap-3">
              <Link to="/">
                <span className="font-bold text-xl text-[#2e5d82] tracking-wide">Larisa Homes</span>
              </Link>
              <Logo fill="#2e5d82" />
            </div>
            <div className="hidden md:flex items-center gap-12">
              <div className="flex gap-8 text-white text-base font-medium">
                <a href="#pricing" className="hover:text-white/80 transition-colors">Pricing</a>
                <Link to="/investments" className="hover:text-white/80 transition-colors">Investments</Link>
                <a href="#about" className="hover:text-white/80 transition-colors">About Us</a>
              </div>
              <button className="bg-white text-[#12161D] px-6 py-2 rounded-full font-semibold hover:bg-white/90 transition-colors">
                Get started
              </button>
            </div>
          </nav>

          {/* Left Side (Text) */}
          <div className="w-full lg:w-1/2 pt-32 lg:pt-[274px] px-6 lg:pl-[102px] lg:pr-16 pb-16 flex flex-col gap-10 z-10 relative">
            <h1 className="text-[40px] lg:text-[56px] font-bold text-[#2e5d82] leading-[1.4] tracking-[-1.68px] max-w-[623px]">
              Complete Airbnb management that maximizes your earnings with style and comfort.
            </h1>
            <button className="bg-[#2e5d82] text-white px-[18px] py-[8px] rounded-[25px] font-semibold text-base w-fit hover:bg-[#2e5d82]/90 transition-colors min-w-[184px] h-[48px] flex items-center justify-center">
              Estimate Now
            </button>
          </div>

          {/* Right Side (Image) */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:h-full lg:absolute lg:right-0 lg:top-0">
            <img src={imgImageLuxuryInterior} className="w-full h-full object-cover object-center" alt="Luxury Interior" />
          </div>
        </section>
      )}

      {/* Featured Stays (Only on Home Page) */}
      {isHomePage && (
        <section className="bg-white py-24 px-6 lg:px-20 max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-[40px] lg:text-[52px] font-medium text-[#12161D] leading-tight tracking-tight">
                  Featured Stays in Dubai
                </h2>
                <p className="text-[18px] text-[#61656E] max-w-xl">
                  Discover our handpicked selection of premium properties. Designed for comfort, styled for luxury, and perfectly located.
                </p>
              </div>
              <button className="text-[#12161D] font-medium text-lg border-b border-[#12161D] pb-1 hover:text-[#61656E] hover:border-[#61656E] transition-colors">
                Explore All Stays
              </button>
            </div>

            <div className="w-full pb-16 flex flex-col gap-24">
                {/* Property 1 */}
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-[24px] overflow-hidden">
                      <PropertyImageCarousel 
                        images={[imgProp1Img1, imgProp1Img2, imgProp1Img3, imgProp1Img4]} 
                        alt="Exclusive 2BR Luxury Retreat" 
                      />
                    </div>
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <span className="bg-[#f4f7f9] text-[#12161D] text-sm font-semibold px-4 py-2 rounded-full w-fit uppercase tracking-wider">Palm Jumeirah</span>
                          <div className="flex items-center gap-1 text-[#12161D] font-medium">
                            <Star className="w-[18px] h-[18px] fill-current" />
                            <span className="text-[17px]">4.75</span>
                          </div>
                        </div>
                        <h3 className="text-3xl lg:text-5xl text-[#12161D] font-medium leading-tight">Exclusive 2BR Luxury Retreat</h3>
                        <div className="flex items-center gap-3 text-[#61656E] text-base lg:text-lg mt-1">
                          <span>Up to 4 guests</span>
                          <span className="w-1.5 h-1.5 bg-[#D1D3D6] rounded-full" />
                          <span>2 Bedrooms</span>
                          <span className="w-1.5 h-1.5 bg-[#D1D3D6] rounded-full" />
                          <span>2 Beds</span>
                          <span className="w-1.5 h-1.5 bg-[#D1D3D6] rounded-full" />
                          <span>2 Baths</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 text-[17px] lg:text-[18px] text-[#61656E] leading-relaxed">
                        <p>Indulge in luxury at this freshly furnished 2-bedroom #Beachfront apartment in Dubai’s most exclusive vacation spot.</p>
                        <p>Designed for those who crave privacy, serenity, and effortless beachfront living, this retreat is perfect for romantic getaways, family vacations, or remote work escapes.</p>
                      </div>
                      <div className="pt-2">
                        <button className="bg-[#12161D] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#12161D]/90 transition-colors w-fit shadow-sm">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Property 2 */}
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-[24px] overflow-hidden lg:order-last">
                      <PropertyImageCarousel 
                        images={[imgProp2Img1, imgProp2Img2, imgProp2Img3, imgProp2Img4]} 
                        alt="Oriental Zen Suite" 
                      />
                    </div>
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <span className="bg-[#f4f7f9] text-[#12161D] text-sm font-semibold px-4 py-2 rounded-full w-fit uppercase tracking-wider">Palm Jumeirah</span>
                          <div className="flex items-center gap-1 text-[#12161D] font-medium">
                            <Star className="w-[18px] h-[18px] fill-current" />
                            <span className="text-[17px]">4.79</span>
                          </div>
                        </div>
                        <h3 className="text-3xl lg:text-5xl text-[#12161D] font-medium leading-tight">Oriental Zen Suite</h3>
                        <div className="flex items-center gap-3 text-[#61656E] text-base lg:text-lg mt-1">
                          <span>Up to 2 guests</span>
                          <span className="w-1.5 h-1.5 bg-[#D1D3D6] rounded-full" />
                          <span>1 Bedroom</span>
                          <span className="w-1.5 h-1.5 bg-[#D1D3D6] rounded-full" />
                          <span>1 Bed</span>
                          <span className="w-1.5 h-1.5 bg-[#D1D3D6] rounded-full" />
                          <span>1 Bath</span>
                        </div>
                      </div>
                      <p className="text-[17px] lg:text-[18px] text-[#61656E] leading-relaxed">
                        Unwind in a serene Japanese Zen-inspired space, just steps from your private beach! soaking up the sun or enjoying a cozy night in with 85" TV, this retreat is designed for ultimate comfort. With prompt, high-quality service, we’re here to make your stay stress-free and unforgettable.
                      </p>
                      <div className="pt-2">
                        <button className="bg-[#12161D] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#12161D]/90 transition-colors w-fit shadow-sm">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Property 3 */}
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-[24px] overflow-hidden">
                      <PropertyImageCarousel 
                        images={[imgProp3Img1, imgProp3Img2, imgProp3Img3, imgProp3Img4]} 
                        alt="Unique JP Apartment" 
                      />
                    </div>
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <span className="bg-[#f4f7f9] text-[#12161D] text-sm font-semibold px-4 py-2 rounded-full w-fit uppercase tracking-wider">Palm Jumeirah</span>
                          <div className="flex items-center gap-1 text-[#12161D] font-medium">
                            <Star className="w-[18px] h-[18px] fill-current" />
                            <span className="text-[17px]">4.83</span>
                          </div>
                        </div>
                        <h3 className="text-3xl lg:text-5xl text-[#12161D] font-medium leading-tight">Unique JP Apartment</h3>
                        <div className="flex items-center gap-3 text-[#61656E] text-base lg:text-lg mt-1">
                          <span>Up to 2 guests</span>
                          <span className="w-1.5 h-1.5 bg-[#D1D3D6] rounded-full" />
                          <span>1 Bedroom</span>
                          <span className="w-1.5 h-1.5 bg-[#D1D3D6] rounded-full" />
                          <span>1 Bed</span>
                          <span className="w-1.5 h-1.5 bg-[#D1D3D6] rounded-full" />
                          <span>1 Bath</span>
                        </div>
                      </div>
                      <p className="text-[17px] lg:text-[18px] text-[#61656E] leading-relaxed">
                        The newly trend landmark in Dubai! No need to go inside the Palm but enjoy the unique Palm advantages such as OCEAN VIEW, PRIVATE BEACH, Skyline Swimming Pool and Fitness! All you need is here, as the area is very new, you can enjoy the quality Quiet Vocation only at Beachfront Dubai!
                      </p>
                      <div className="pt-2">
                        <button className="bg-[#12161D] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#12161D]/90 transition-colors w-fit shadow-sm">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      )}

      {/* Stats Strip */}
      <section className="w-full py-16 bg-[#ffffff]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="flex flex-wrap md:flex-nowrap justify-between gap-8 md:gap-4">
            <div className="flex flex-col gap-2 w-[45%] md:w-auto">
              <span className="text-[40px] lg:text-[48px] font-medium text-[#12161D] tracking-tight">2,300+</span>
              <span className="text-[15px] font-medium text-[#61656E]">Properties managed</span>
            </div>
            <div className="flex flex-col gap-2 w-[45%] md:w-auto">
              <span className="text-[40px] lg:text-[48px] font-medium text-[#12161D] tracking-tight">220k+</span>
              <span className="text-[15px] font-medium text-[#61656E]">Booking managed</span>
            </div>
            <div className="flex flex-col gap-2 w-[45%] md:w-auto">
              <span className="text-[40px] lg:text-[48px] font-medium text-[#12161D] tracking-tight">85.3%</span>
              <span className="text-[15px] font-medium text-[#61656E]">Avg occupancy rate</span>
            </div>
            <div className="flex flex-col gap-2 w-[45%] md:w-auto">
              <span className="text-[40px] lg:text-[48px] font-medium text-[#12161D] tracking-tight">4.7/5</span>
              <span className="text-[15px] font-medium text-[#61656E]">Rated by Hosts</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* About Section (Only on Home Page) */}
      {isHomePage && (
        <section className="bg-white py-16 px-6 lg:px-20 max-w-[1440px] mx-auto">
          <div className="bg-[#F1EFEA] rounded-[24px] flex flex-col lg:flex-row overflow-hidden min-h-[500px]">
            <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full">
              <img src={newImgAboutHero} className="absolute inset-0 w-full h-full object-cover" alt="Luxury Property Interior" />
            </div>
            <div className="lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center">
              <div className="bg-white text-[#12161D] text-xs font-bold px-3 py-1.5 rounded uppercase tracking-widest w-fit mb-6">
                About Larisa Homes
              </div>
              <h2 className="text-[40px] lg:text-[52px] leading-[1.05] font-medium text-[#12161D] mb-6 tracking-tight">
                Exceptional Airbnb stays and premium hosting services in Dubai.
              </h2>
              <p className="text-[17px] text-[#42444A] leading-relaxed">
                Whether you're a traveler seeking a luxurious, unforgettable stay in the heart of Dubai, or a property owner looking for end-to-end management that maximizes your earnings, Larisa Homes has you covered. We blend world-class hospitality with cutting-edge technology to deliver flawless experiences for guests and stress-free hosting for owners.
              </p>
            </div>
          </div>
        </section>
      )}

      {!isHomePage && (
        <>
          {/* Section 3: Services */}
          <section className="bg-white py-24 px-6 lg:px-20 max-w-[1440px] mx-auto flex flex-col gap-16 lg:gap-24">
            {/* Listing Management */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
              <div className="w-full lg:w-1/2 h-[347px] shrink-0">
                <img src={imgService1} alt="Listing Management" className="w-full h-full object-cover rounded-[10px]" />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4">
                <h3 className="text-[32px] lg:text-[40px] font-normal text-[#12161D]">Listing Management</h3>
                <p className="text-[18px] text-[#61656E] leading-[1.5]">
                  Professional photography, compelling descriptions, and continuous optimization across Airbnb, Booking.com, and VRBO. We ensure your listing ranks high and attracts quality guests consistently.
                </p>
              </div>
            </div>

            {/* Guest Relations */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-24">
              <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4">
                <h3 className="text-[32px] lg:text-[40px] font-normal text-[#12161D]">Guest Relations</h3>
                <p className="text-[18px] text-[#61656E] leading-[1.5]">
                  24/7 guest communication, seamless check-in/check-out, and immediate support to ensure 5-star reviews every time. We handle all inquiries and vetting so you don't have to.
                </p>
              </div>
              <div className="w-full lg:w-1/2 h-[347px] shrink-0">
                <img src={imgGuestRelations} alt="Guest Relations" className="w-full h-full object-cover rounded-[10px]" />
              </div>
            </div>

            {/* Property Maintenance */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
              <div className="w-full lg:w-1/2 h-[347px] shrink-0">
                <img src={imgService3} alt="Property Maintenance" className="w-full h-full object-cover rounded-[10px]" />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4">
                <h3 className="text-[32px] lg:text-[40px] font-normal text-[#12161D]">Property Maintenance</h3>
                <p className="text-[18px] text-[#61656E] leading-[1.5]">
                  Hotel-quality cleaning, regular inspections, and prompt maintenance handling to keep your investment pristine. Your property is always ready for the next stay.
                </p>
              </div>
            </div>
          </section>

          {/* Hosting Process Section */}
          <section className="bg-[#f4f7f9] py-24 w-full">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col items-center gap-16">
              <div className="text-center flex flex-col gap-4 max-w-2xl">
                <h2 className="text-[40px] lg:text-[52px] font-medium text-[#12161D] leading-tight tracking-tight">
                  Hosting Made Simple
                </h2>
                <p className="text-[18px] text-[#61656E] leading-relaxed">
                  Experience a hassle-free journey from onboarding to consistent payouts. We manage the details so you don't have to.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {/* Step 1 */}
                <div className="bg-white rounded-[16px] overflow-hidden shadow-sm flex flex-col h-full">
                  <div className="h-[240px] w-full shrink-0">
                    <img src={imgOnboarding} alt="Onboarding" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 flex flex-col gap-4 flex-1">
                    <div className="bg-[#12161D] text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm">
                      1
                    </div>
                    <h3 className="text-[24px] font-medium text-[#12161D]">Onboarding</h3>
                    <p className="text-[16px] text-[#61656E] leading-relaxed">
                      We evaluate your property, arrange professional photography, and set up your listing across major platforms to maximize visibility.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white rounded-[16px] overflow-hidden shadow-sm flex flex-col h-full">
                  <div className="h-[240px] w-full shrink-0">
                    <img src={imgManagement} alt="Management" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 flex flex-col gap-4 flex-1">
                    <div className="bg-[#12161D] text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm">
                      2
                    </div>
                    <h3 className="text-[24px] font-medium text-[#12161D]">Management</h3>
                    <p className="text-[16px] text-[#61656E] leading-relaxed">
                      Our team handles daily pricing optimization, seamless guest communications, and hotel-quality cleaning between every stay.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white rounded-[16px] overflow-hidden shadow-sm flex flex-col h-full">
                  <div className="h-[240px] w-full shrink-0">
                    <img src={imgEarnings} alt="Earnings" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 flex flex-col gap-4 flex-1">
                    <div className="bg-[#12161D] text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm">
                      3
                    </div>
                    <h3 className="text-[24px] font-medium text-[#12161D]">Earnings</h3>
                    <p className="text-[16px] text-[#61656E] leading-relaxed">
                      Sit back and relax as we maintain your property. Access transparent reports and receive consistent monthly payouts directly.
                    </p>
                  </div>
                </div>
              </div>

              <button className="bg-[#12161D] text-white px-8 py-4 rounded-[100px] font-medium text-[17px] hover:bg-[#12161D]/90 transition-colors shadow-sm">
                Get started
              </button>
            </div>
          </section>
        </>
      )}


      {/* Section 5: FAQ */}
      <section className="bg-white py-32 lg:py-40 px-6 lg:px-20 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-[550px] shrink-0">
            <h2 className="text-4xl lg:text-[44px] font-medium leading-tight text-[#12161D] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#61656E] leading-relaxed">
              If there are questions you want to ask.<br />
              We will answer all your questions.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-5">
            {(isHomePage ? homeFaqs : investmentFaqs).map((faq, index) => (
              <div key={index} className="border border-[#E5E5E6] rounded-lg bg-white overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-xl lg:text-2xl font-medium text-[#12161D] pr-4">{faq.q}</span>
                  <span className="w-6 h-6 flex items-center justify-center shrink-0 text-[#12161D]">
                    {openFaq === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? "max-h-[200px] pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-lg text-[#61656E] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-white pb-24 px-6 lg:px-20 max-w-[1440px] mx-auto">
        <div className="relative w-full rounded-[24px] overflow-hidden bg-[#12161D]">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0 w-full h-full">
            <img src={imgCtaBanner} className="w-full h-full object-cover" alt="Modern Kitchen Interior" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#12161D]/90 via-[#12161D]/70 to-transparent" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 py-20 px-8 lg:px-16 flex flex-col gap-8 max-w-2xl">
            <h2 className="text-4xl lg:text-[52px] font-medium leading-[1.1] text-white tracking-tight">
              Ready to Maximize Your Property's Potential?
            </h2>
            <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
              Join Larisa Homes today and let our expert team transform your space into a high-performing luxury rental. Sit back, relax, and watch your earnings grow.
            </p>
            <div className="pt-4">
              <button className="bg-white text-[#12161D] px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                Get started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FAFAFB] w-full pt-20 pb-10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
            <div className="flex flex-col gap-6 max-w-sm">
              <div className="flex items-center gap-3">
                <span className="font-bold text-2xl text-[#12161D] tracking-wide">Larisa Homes</span>
                <Logo fill="#12161D" />
              </div>
              <p className="text-lg text-[#61656E] leading-relaxed">
                More Comfortable.<br />
                More Classy.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-16 lg:gap-32">
              <div className="flex flex-col gap-8">
                <h4 className="text-lg font-medium text-[#12161D]">Product</h4>
                <div className="flex flex-col gap-4 text-[#61656E]">
                  <a href="#" className="hover:text-[#12161D] transition-colors">Features</a>
                  <a href="#" className="hover:text-[#12161D] transition-colors">Integrations</a>
                  <a href="#" className="hover:text-[#12161D] transition-colors">Pricing</a>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <h4 className="text-lg font-medium text-[#12161D]">Company</h4>
                <div className="flex flex-col gap-4 text-[#61656E]">
                  <a href="#" className="hover:text-[#12161D] transition-colors">About us</a>
                  <a href="#" className="hover:text-[#12161D] transition-colors">Blog</a>
                  <a href="#" className="hover:text-[#12161D] transition-colors">Careers</a>
                  <a href="#" className="hover:text-[#12161D] transition-colors">Customers</a>
                  <a href="#" className="hover:text-[#12161D] transition-colors">Brand</a>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <h4 className="text-lg font-medium text-[#12161D]">Resources</h4>
                <div className="flex flex-col gap-4 text-[#61656E]">
                  <a href="#" className="hover:text-[#12161D] transition-colors">Community</a>
                  <a href="#" className="hover:text-[#12161D] transition-colors">Contact</a>
                  <a href="#" className="hover:text-[#12161D] transition-colors">DPA</a>
                  <a href="#" className="hover:text-[#12161D] transition-colors">Terms of service</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#E5E5E6] pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#61656E]">
            <p>© {new Date().getFullYear()} Larisa Homes. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="hover:text-[#12161D] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#12161D] transition-colors">Policy service</a>
              <a href="#" className="hover:text-[#12161D] transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-[#12161D] transition-colors">Partners</a>
            </div>
          </div>
        </div>
      </footer>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
