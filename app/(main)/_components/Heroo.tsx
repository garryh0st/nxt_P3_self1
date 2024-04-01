"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const ref = useRef(null);
  const frontend = useRef(null);
  const developer = useRef(null);
  const navitems = useRef(null);

  useEffect(() => {
    import("locomotive-scroll").then((LocomotiveScroll) => {
      const scroll = new LocomotiveScroll.default({
        el: ref.current ?? undefined,
        smooth: true,
        direction: "horizontal",
      });
      // Frontend Reveal Animation
      gsap.fromTo(
        frontend.current,
        { x: "100%" },
        { x: "0%", duration: 2, delay: 0.5, scrollTrigger: frontend.current }
      );
      // Developer Reveal Animation
      gsap.fromTo(
        developer.current,
        { x: "-100%" },
        { x: "0%", duration: 2, delay: 0.5, scrollTrigger: developer.current }
      );

      // Navitems Reveal Animation
      gsap.fromTo(
        navitems.current,
        { y: "-10vh" },
        { y: "0%", duration: 1, scrollTrigger: navitems.current }
      );

      // Frontend Animation

      // if (frontend.current) {
      //   gsap.fromTo(
      //     (frontend.current as HTMLElement).children,
      //     { y: "40%", opacity: 0 },
      //     {
      //       y: "0%",
      //       opacity: 1,
      //       duration: 3,
      //       stagger: 0.05,
      //       scrollTrigger: frontend.current,
      //     }
      // );
      // }
    });
  }, []);

  return (
    <div
      ref={ref}
      data-scroll-container
      className=" bg-[#111111]  w-screen overflow-x-hidden"
    >
      <section className="hero ">
        <div className=" h-screen w-screen  -mt-1  bg-[#111111] ">
          <nav
            ref={navitems}
            className="flex justify-between mt-10 lg:[paragraph]"
          >
            <div className="nav_left flex flex-col sm:flex-row justify-between lg:mr-[50vh] open-font ">
              <span className=" scroll text-[#aaaaaa] ">
                Advik <br /> Aggarwal
              </span>
              <span className="text-[#777777] ">
                Web Developer
                <br />
                /2018─2024
              </span>
            </div>
            <div className="nav_right flex flex-col sm:flex-row justify-around open-font gap-5">
              <span className="text-[#777777] text-wrap  w-[20vh] text-[1.6vh]">
                AVAILABLE FOR FREELANCE WORK FROM JUNE 2024
              </span>
              <button className="btn-primary ">CONTACT</button>
            </div>
          </nav>

          <section className="flex justify-center sm:items-center ml-5 mt-10 sm:mt-20 ">
            <div className=" w-screen">
              <div
                ref={frontend}
                className=" text-[12vh] sm:text-[38vh] font-bold  sm:leading-[40vh]  transformm font-bebas  tracking-[-0.2vh]  text-[#777777] divider "
              >
                <span className="txt-hover">F</span>
                <span className="txt-hover">r</span>
                <span className="txt-hover">o</span>
                <span className="txt-hover">n</span>
                <span className="txt-hover">t</span>{" "}
                <span className=" sm-hidden ">──</span>{" "}
                <span className="txt-hover h-full ">E</span>
                <span className="txt-hover h-full">n</span>
                <span className="txt-hover h-full">d</span>
              </div>

              <div
                ref={developer}
                className=" text-[12vh] sm:text-[38vh] font-bold  sm:leading-[40vh]  transformm font-bebas  tracking-[-0.2vh]  text-[#777777]"
              >
                <span className="txt-hover">D</span>
                <span className="txt-hover">e</span>
                <span className="txt-hover">v</span>
                <span className="txt-hover">e</span>
                <span className="txt-hover">l</span>
                <span className="txt-hover">o</span>
                <span className="txt-hover">p</span>
                <span className="txt-hover">e</span>
                <span className="txt-hover">r</span>
              </div>
            </div>
          </section>
        </div>
      </section>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
      dignissimos libero labore. Nemo nihil maxime perferendis officiis nisi
      atque dicta, laudantium ea, itaque distinctio, optio accusamus? Accusamus,
      consequuntur odio? Vel. Fugit doloremque possimus dolorem saepe
      voluptatibus porro ducimus nesciunt atque iste, animi quis similique
      asperiores in eligendi minus? Molestiae fuga ut tenetur dolore ab magnam
      excepturi nobis quam, sit tempore. Rem dolores exercitationem iste
      corrupti nesciunt expedita possimus eligendi mollitia, eos, dolor eaque
      aliquam iure totam voluptates facilis sunt. Et fugit officiis voluptate!
      Provident ex, hic architecto corporis dolorum veritatis! Tempore iusto
      soluta delectus ipsum provident! Id alias doloremque vero, deleniti
      laudantium quis quisquam deserunt! Repellendus at id officiis, non vel
      porro aperiam iste nam in. Incidunt consequuntur natus nulla. Enim vero
      dolorum laudantium natus ratione est libero mollitia inventore, id
      quisquam laborum consequuntur quod molestiae nobis, rerum aspernatur
      labore ea culpa quibusdam perferendis minima sunt. Repudiandae distinctio
      corporis atque? Quaerat dicta iure, voluptas deserunt voluptate
      accusantium facilis harum error, sed recusandae at placeat, similique
      reiciendis? Cum voluptate dolorum quisquam, labore, libero facere magnam
      explicabo velit vel culpa consectetur delectus! Quis, in sequi dignissimos
      a voluptate molestiae inventore, nulla quibusdam, aut expedita illum quia
      autem? Consectetur dolore labore consequuntur. Facere, quo exercitationem?
      Accusamus eum quam iure cupiditate quis odio hic! Delectus, vero optio.
      Beatae, corrupti voluptates molestias ratione fugit blanditiis cumque,
      recusandae facilis necessitatibus tempora consequuntur officiis esse
      labore minus laudantium repellendus dolor culpa odit repellat accusamus
      odio aspernatur maiores. Natus enim eos beatae ratione? Eligendi modi
      optio rerum harum voluptate magnam fugiat, laboriosam earum, voluptas
      maiores beatae voluptatibus distinctio ea. Expedita, doloremque sed? Quam
      rem neque cum. Repellendus, non? Eveniet possimus architecto perferendis
      alias natus iste culpa in nisi magni incidunt vero, cupiditate totam
      voluptatem ipsum nulla maxime, dolorum repellat facere animi beatae
      doloribus unde quia cum. Cupiditate, nemo! Illum dolores labore dolor,
      iste voluptatem magni consequuntur sit rerum necessitatibus impedit!
      Minima consequatur iusto quas velit cum, doloremque ducimus deleniti, iste
      rem id, nemo voluptates modi inventore quam! Nobis. Esse magnam rerum
      error doloremque non est accusantium odit ullam? Totam inventore facere ut
      iste, dignissimos animi. Aperiam explicabo a exercitationem ipsam
      similique temporibus, eaque impedit sint vero recusandae delectus! Et,
      facilis vitae vel, est eos sapiente, corrupti nulla sunt tenetur molestiae
      ratione minus? Eveniet ipsam delectus ut quibusdam veniam corporis
      perspiciatis dicta, hic aliquid, sapiente error excepturi vitae iste?
      Nihil dolore necessitatibus accusamus fugit? Labore ex ut ab? Ut sequi
      tenetur ratione soluta commodi culpa? Saepe iure itaque, laudantium enim
      exercitationem a commodi atque rerum. Cumque et pariatur tempora. Vero,
      officiis explicabo. Veritatis voluptatum totam nemo consequuntur
      temporibus rem error, optio ducimus vero provident. Doloribus, modi labore
      quam accusantium odio in minus, magnam itaque numquam animi, sint
      laudantium quis? Alias voluptates recusandae amet cupiditate dignissimos.
      Dolorum dolores illo voluptates at laudantium. Quisquam explicabo officiis
      numquam dicta. Odio, cumque autem eveniet doloribus rerum voluptas ducimus
      impedit eaque vero labore beatae? Maxime aut ratione explicabo cumque
      veniam voluptas iusto sequi expedita nihil tempora culpa error quo qui,
      voluptate officia numquam minus nulla doloremque fugit. Sunt deleniti et
      sapiente molestiae perferendis corrupti. Deleniti alias reiciendis nihil
      fugit, tenetur expedita veritatis beatae animi soluta accusamus facere ea
      magni harum quas nulla modi molestias fugiat dolore in maxime ad quisquam,
      earum eius similique. Magni. Culpa, quisquam. Similique perspiciatis quam
      id expedita quos, facere exercitationem sit accusantium culpa sunt
      repudiandae aspernatur rerum velit esse mollitia tenetur nihil sint
      dolorem nemo tempora asperiores odio facilis? Eligendi? Necessitatibus
      sequi voluptate autem. Nisi recusandae assumenda corrupti earum sunt
      tenetur porro cupiditate eos? Deleniti atque omnis minima ab. Excepturi
      voluptatum quod sapiente, veritatis iure ipsam pariatur. Sint, laborum
      veniam! Est nisi commodi iure itaque soluta, tempore iste expedita velit
      animi. Fugiat soluta quasi sunt natus magnam aut iure adipisci saepe
      officia praesentium illo ullam, voluptatem, eveniet enim reprehenderit
      nobis. Fuga cum nisi asperiores, earum animi tenetur minus sint iste
      doloribus soluta, tempora, error repellendus suscipit. Laboriosam, qui
      velit! Voluptatibus commodi, deserunt cum reprehenderit id accusantium
      alias accusamus laborum corporis. Consequatur modi nemo commodi, sunt quos
      saepe, corrupti, facere ullam voluptas asperiores minima sed ratione
      doloremque suscipit ducimus expedita assumenda dolorum incidunt. At
      veritatis quasi hic perspiciatis quidem facilis nobis? Ipsa laudantium nam
      excepturi cupiditate blanditiis distinctio accusantium saepe officia
      veniam esse. Repudiandae suscipit obcaecati blanditiis dolorem consectetur
      rerum deserunt tenetur voluptatem aliquid? Harum repellendus minus itaque
      ad eaque non. Ea error animi blanditiis repellat, labore debitis excepturi
      deleniti pariatur velit quas culpa quidem laborum accusantium dicta
      aliquam cupiditate nemo, inventore facilis harum numquam sed minus.
      Tenetur totam cum error. Cum magni natus voluptatum, ipsam veniam ut id
      quae odio, voluptatem autem facere minima sint earum omnis facilis
      delectus eius laboriosam quibusdam ipsa? Perspiciatis excepturi modi id,
      necessitatibus non dolorem. Ab porro explicabo, similique aperiam delectus
      non odio amet! Aut eos, qui mollitia nesciunt iusto quas, natus quia
      tempora distinctio illum, saepe quod? Sed pariatur ex corrupti ipsa, nihil
      praesentium! Culpa dolorem, ipsa ipsam ullam explicabo, odit repudiandae
      ducimus autem veritatis libero repellat deleniti delectus nam qui!
      Sapiente, error at velit cumque libero excepturi animi tenetur ipsam
      facere? Sit, suscipit? Distinctio amet perferendis fuga corporis nihil
      molestiae voluptatum, perspiciatis sequi minima odio delectus quae quam
      ipsum! Vero, sed, possimus est ducimus repudiandae laudantium recusandae
      inventore voluptas doloremque tenetur magnam molestias? Rerum repudiandae
      est aliquam fuga expedita? Amet modi sapiente, doloremque voluptatum est
      itaque blanditiis! Dicta harum ratione placeat? Dolores nobis voluptatum
      et eligendi repellendus reiciendis quo perspiciatis molestias mollitia
      doloremque! Fugit, dignissimos maxime deleniti accusantium soluta fugiat
      nostrum. Quod quo minima quidem repudiandae illo in dicta impedit
      obcaecati modi maxime saepe provident officia optio ipsam tempore
      corrupti, voluptatum doloremque eligendi? Sit repudiandae eius beatae
      voluptatem, ipsum repellat quae impedit provident vel! Ipsam, eos
      consectetur aut blanditiis fugiat nisi deserunt fuga placeat voluptate
      ratione reprehenderit esse laboriosam quisquam et, fugit iure? Commodi
      voluptate corrupti a, fugiat ipsa animi quos iure odit? Blanditiis tenetur
      consectetur nemo nulla a quos praesentium saepe aspernatur quo veniam amet
      consequuntur molestias officia odit, quod voluptatum quidem. Repudiandae
      nobis nesciunt magni facere hic ad dolorem laudantium obcaecati, quis quam
      incidunt quia animi pariatur accusamus, aliquid sapiente laborum omnis
      sit. Iure velit molestias accusamus cupiditate tempore provident error.
      Perspiciatis ratione minus dicta ex magni fugiat at sint, minima maiores
      quod obcaecati ea est inventore voluptates labore corrupti unde tenetur
      vero quidem perferendis, vel vitae corporis! Suscipit, quasi numquam?
      Maxime ipsum atque est quibusdam? In minus consequatur eligendi distinctio
      quasi corporis esse consequuntur, eius laboriosam dolorum perferendis
      atque, quod delectus sunt officia quia saepe, error incidunt? Inventore,
      totam unde. Iste, debitis atque quaerat sit maiores corrupti repellendus
      sed pariatur, blanditiis ullam optio cupiditate aut quo ipsa totam
      voluptatem veniam ea. Reprehenderit iste unde blanditiis quia, eligendi
      aperiam magnam. Neque? Alias animi pariatur minus, veritatis, veniam nemo,
      unde itaque similique blanditiis doloribus debitis praesentium
      voluptatibus? Expedita odio asperiores deleniti consequuntur, ipsum
      accusamus voluptatum recusandae tempore blanditiis molestiae eveniet
      necessitatibus culpa. Repellat neque qui voluptas earum recusandae harum
      fuga sit reprehenderit corrupti, magnam dicta autem quo facilis tempore
      iste quam animi praesentium dolorem? Magnam mollitia similique dolores
      alias cumque impedit sunt! Voluptatum dignissimos cum maxime aut atque
      quos rem recusandae ea? Ducimus eveniet saepe tempore, assumenda officia
      at rem cum pariatur impedit architecto dolor non nulla vero est expedita
      ipsam in! Aperiam a voluptate aspernatur! Ad magni laudantium temporibus
      neque minima velit commodi ipsa nemo molestiae ipsum illo reiciendis
      nesciunt qui adipisci modi quasi corrupti, illum facilis molestias
      recusandae et. Accusamus. Aspernatur, tempora. Iure hic atque ut
      temporibus voluptates molestiae alias, provident doloribus blanditiis
      nobis numquam vitae magnam labore ipsam asperiores mollitia! Tenetur
      consectetur minus sint voluptatem distinctio consequatur ducimus aut?
      Animi, maiores sapiente! Exercitationem natus recusandae dolor nihil quas
      nisi nam itaque perferendis enim rerum in, sint temporibus dolorem vel!
      Laudantium ratione, ipsum numquam ducimus maxime ipsa quod quidem vero.
      Nostrum illo maiores, assumenda delectus tenetur praesentium doloribus
      labore, molestias nisi esse, soluta rem sint quos repellendus nam
      veritatis facere itaque accusantium consequuntur ut? Commodi laborum rerum
      necessitatibus illum nisi. Adipisci vitae necessitatibus optio mollitia?
      Eaque obcaecati vero animi repellat iusto? Culpa nihil suscipit rerum
      fugiat minima, pariatur, accusamus possimus ex distinctio error eius
      neque? Animi sequi aperiam quis tempora! Vel magni dignissimos maiores
      autem, quas dolor laboriosam est ad illum modi facere quam deleniti
      doloribus sapiente? Temporibus, odio! Quas aliquam amet officia,
      necessitatibus exercitationem possimus suscipit nobis quam blanditiis.
      Tempore esse, ut nulla accusamus, quam corrupti, molestias natus eaque eos
      sequi accusantium repellat dolor aut fuga sit assumenda ab possimus veniam
      pariatur maiores odio ducimus totam! Sint, dolorum minima! Fugiat
      laboriosam in numquam facilis ipsa dolorum, perferendis iusto minima
      adipisci quisquam harum similique voluptas quidem nesciunt ullam,
      accusamus nam, architecto consequatur quae. At, et voluptatibus rerum
      facere beatae facilis? Soluta veniam quibusdam ratione nisi minima
      perspiciatis provident facilis ab, consequatur non suscipit tenetur
      delectus dolorem deleniti deserunt iure eum voluptas eligendi quo
      distinctio natus! Esse sint illum doloremque ex. Iure ut laborum, id
      fugit, in alias error est dolore impedit ducimus facere. Ipsa adipisci sed
      aliquam doloremque corporis veritatis libero esse officiis est quasi neque
      cumque, nostrum eos a.
    </div>
  );
};
export default Hero;
