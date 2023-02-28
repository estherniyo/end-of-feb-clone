import Head from "next/head";
import { Inter } from "next/font/google";
import ImagetextCard from "@/components/ImageTextCard";
import IconTextCard from "@/components/IconTextCard";
import ImageRightTextLeft from "@/components/ImageRightTextLeft";
import ImageTextGrid from "@/components/ImageTextGrid";
import ImageTextDown from "@/components/ImageTextDown";
import Wrapper from "@/components/Wrapper";
import BlueBgSection from "@/components/BlueBgSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImageTextSection from "@/components/ImageTextSection";
import ImageTextSectionSecond from "@/components/ImageTextSectionSecond";
import Explore from "@/components/Explore";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Aalto University</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-mediumGray overflow-hidden">
        <div className="bg-mediumGray ">
          <Navbar />
        </div>
        <div className="bg-mediumGray pt-[110px]">
          <HeroSection />
        </div>
        <div className="flex flex-col ">
          <div className="bg-mediumGray">
            <ImageTextSection />
          </div>
          <div className="bg-darkGray">
            <ImageTextSectionSecond />
          </div>
          <div className="bg-mediumGray">
            <Explore />
          </div>
          <div className="bg-mediumGray lg:pt-16 pb-24">
            <IconTextCard
              h="Important quicklinks"
              arr={[
                ["For personnel", "Aalto Handbook", "Safety"],
                [
                  "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/quicklinks/public/2018-06/pen.png?h=3ea932e1&itok=5VqIRIDk",
                  "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/quicklinks/public/2018-06/folder.png?h=3ea932e1&itok=QvILQcBV",
                  "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/quicklinks/public/2018-06/phone.png?h=3ea932e1&itok=ZOqlx9n0",
                ],
                [],
              ]}
            />
          </div>
        </div>
        <div className="bg-mediumGray">
          <ImageRightTextLeft
            arr={[
              [
                "School of Arts, Design and Architecture",
                "School of Business",
                "School of Engineering",
                "School of Chemical Engineering",
                "School of Electrical Engineering",
                "School of Science",
              ],
              [
                "School of Arts, Design and Architecture",
                "Welcome to the School of Chemical Engineering!",
                "We aim to change the world for the better",
                "Aalto student – New Student Guide replaces Into",
                "School of Arts, Design and Architecture",
                "Welcome to the School of Chemical Engineering!",
              ],
              [
                "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/1_160w_160h_d/public/2018-10/unto_rautio_aalto_dsc4772.jpg?h=d2ed74d8&itok=swcZJQs4",
                "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/1_160w_160h_d/public/2018-06/2011-05-11_johdon_kiertokaynti_otaniemi_eng_by_juha_juvonen49_original_0.jpg?h=6f8e8448&itok=_25uKN4_",
                "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/1_160w_160h_d/public/2019-12/unto_rautio_aalto_dsc5590_web.jpg?h=6c73fcc2&itok=Qr_qcJLO",
                "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/1_160w_160h_d/public/2019-10/unto_rautio_aalto_0345_original.jpg?h=19f14c2c&itok=bg5-V8V-",
                "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/1_160w_160h_d/public/2019-09/microwave.jpg?h=ee41355b&itok=K0uRPN9X",
                "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/1_160w_160h_d/public/2018-04/1258289_ray_scipakfig1_artistic_jpg.jpg?h=67ab415a&itok=i7F0ew0t",
                "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/1_160w_160h_d/public/2018-04/1258289_ray_scipakfig1_artistic_jpg.jpg?h=67ab415a&itok=i7F0ew0t",
              ],
              [],
              [],
              [],
            ]}
            h={"Explore our six schools "}
            p="Scientific research and artistic activities are carried out at six schools and their departments and units."
          />
          <div className="py-12 lg:py-20">
            <ImageTextGrid
              h={"Campus - lively and thriving"}
              arr={[
                "Explore our vibrant innovation ecosystem",
                "Explore our campus",
                "Book a space",
              ]}
              src={
                "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/1_333_800w_600h_n/public/2018-04/unto_rautio_aalto_unt9424_weblarge_jpg.jpg?h=0d9f7c6e&itok=blqBmH_o"
              }
              p="Aalto University's campus in Otaniemi is a renewable and living environment for research, art, learning, entrepreneurship and housing. The campus area inspires people to collaborate, try out new ideas and innovate together."
            />
          </div>

          <div className="pb-20">
            <ImageTextGrid
              reverse={"md:order-last order-first"}
              h={"Virtual Campus Experience"}
              p="Explore Aalto University’s campus from anywhere in the world! Our digital guides, an Aalto University student and an assistant professor, introduce you to our learning facilities, laboratories, workshops, service spots and outdoor spaces. The tour can be experienced on desktop, mobile or VR headset."
              src={
                "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/1_6_690w_431h_d/public/2021-02/aalto-website-3.jpg?h=e1c30e35&itok=JNNANuU2"
              }
              arr={["Visit the tour"]}
            />
          </div>
          <ImageTextDown
            arr={[
              [
                "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/2021-11/4.jpg?itok=rlgwZSLs",
                "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=VYThRuwV",
                "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_682w_ah_d/public/2021-11/Otaniemi_Garden_plots_3-6-2020_photo_Mikko_Raskinen_003_0.jpg?itok=EVAqWCov",
                "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_682w_ah_d/public/2021-11/La%CC%88nsimetro_avajaiset_18112017_%C2%A9JaakkoKahilaniemi-1322.jpg?itok=e_etvHDg",
                "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/2021-11/Aalto%20University%20Va%CC%88re%20Tuomas%20Uusheimo-180709-aalto-vare-015.jpg?itok=r0KJCZur",
                "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/midgard/images/1e75bf8f2258e8a5bf811e7b96a6dad767c7f287f28-aaltofestival_naytos16_student-ma-collection_23_maija_mero_25-5-2016_photo_mikko_raskinen_035_en_en_fi_fi.jpg?itok=AUafdI2y",
                "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_682w_ah_d/public/2021-11/37135037943_32840d9184_o.jpg?itok=TWi344qA",
                "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/2021-11/Aalto_Vision_Forum_07062018_photo_by_Lasse_Lecklin_014%281%29.jpg?itok=R8uYSV9p",
              ],
              [
                "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
                "Creative sustainability. Photo: Aalto University / Mikko Raskinen.",
                "Architectural gems of Otaniemi. Photo: Aalto University / Tuomas Uusheimo.",
                "Trail to the Laajalahti Nature Reserve and one of South Finland's best birdwatching bay. Photo: Aalto University.",
                "Developing a connected campus. Photo: Aalto University / Jaakko Kahilaniemi.",
                "Aalto University’s Art & Design ranked 6th in the world. QS – Art & Design 2022.",
                "One of the most international universities in Europe. Photo: Aalto Design Factory / Bijan Mokhtari.",
                "Educating future thought-leaders. Photo: Aalto Vision Forum / Lasse Lecklin.",
              ],
              [],
              [],
              [],
              [],
              [],
              [],
            ]}
          />
          <div className="pt-28 pb-16">
            {" "}
            <IconTextCard
              arr={[
                ["Watch our videos", "Read our blogs", "Listen to podcasts"],
                [
                  "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/quicklinks/public/2021-11/Esa_Saarinen_Filosofia_ja_systeemiajattelu_online_02-2021_photo_Mikko_Raskinen_012%281%29.jpg?h=ac778ff2&itok=Dw8j1SUG",
                  "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/quicklinks/public/2021-11/27400150666_8649bc706c_o_Original_thumbnail.jpg?h=d743a63a&itok=dwD4tEs5",
                  "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/quicklinks/public/2021-11/51231849380_1ab308fe43_o%281%29.jpg?h=7d7cf671&itok=cvaMq0eI",
                ],
                [],
              ]}
              h={"Community voices"}
            />
          </div>
          <div className="bg-darkGray py-12">
            <ImageTextDown
              grid={false}
              yes={true}
              styles={
                "gap-4 h-fit md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-3"
              }
              h={[
                "Ukraine war",
                "Information on coronavirus",
                "Aalto University Junior",
              ]}
              arr={[
                [
                  "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/2021-11/4.jpg?itok=rlgwZSLs",
                  "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=VYThRuwV",
                  "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_682w_ah_d/public/2021-11/Otaniemi_Garden_plots_3-6-2020_photo_Mikko_Raskinen_003_0.jpg?itok=EVAqWCov",
                ],
                [
                  "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
                  "Creative sustainability. Photo: Aalto University / Mikko Raskinen.",
                  "Architectural gems of Otaniemi. Photo: Aalto University / Tuomas Uusheimo.",
                ],
                [],
              ]}
            />
          </div>
          <div className="py-12">
            <Wrapper styles={`bg-mediumGray text-white`}>
              <h1 className="text-2xl">
                Information on Ukraine and coronavirus
              </h1>
            </Wrapper>
            <ImageRightTextLeft
              yes={true}
              arr={[
                [
                  "School of Arts, Design and Architecture",
                  "School of Business",
                ],
                [
                  "School of Arts, Design and Architecture",
                  "Welcome to the School of Chemical Engineering!",
                ],
                [
                  "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/1_160w_160h_d/public/2018-10/unto_rautio_aalto_dsc4772.jpg?h=d2ed74d8&itok=swcZJQs4",
                  "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/1_160w_160h_d/public/2018-06/2011-05-11_johdon_kiertokaynti_otaniemi_eng_by_juha_juvonen49_original_0.jpg?h=6f8e8448&itok=_25uKN4_",
                ],
              ]}
            />
          </div>
          <div className="text-lg bg-darkGray pt-14 pb-20">
            <Wrapper styles={`bg-darkGray text-white flex flex-col gap-4 pb-6`}>
              <h1 className="text-2xl">Read about our research and donate </h1>
              <p className="max-w-[940px] w-max">
                At Aalto University, we create the conditions for innovation,
                economic growth, employment and wellbeing. A gift to the
                university is an investment in a better future.
              </p>
            </Wrapper>
            <div className="">
              <ImageTextDown
                grid={false}
                styles={"grid-cols-1 gap-4 md:grid-cols-2 text-3xl"}
                imgSizes={"max-h-56 object-center object-cover"}
                h={["Ukraine war", "Information on coronavirus"]}
                arr={[
                  [
                    "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/2021-11/4.jpg?itok=rlgwZSLs",
                    "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=VYThRuwV",
                  ],
                  [
                    "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
                    "Creative sustainability. Photo: Aalto University / Mikko Raskinen.",
                  ],
                ]}
              />
            </div>
          </div>
          <BlueBgSection />
        </div>
        <div className="bg-darkGray">
          <Footer />
        </div>
      </div>
    </>
  );
}
