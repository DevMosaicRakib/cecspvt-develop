"use client";
import "./style.scss";
import { useParams } from "next/navigation";
// import projects from "@/app/projects/projects";
import Image from "next/image";
import SectionHeader from "@/app/components/SectionHeader";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@/app/components/components.module.scss";
import Button from "@/app/components/Button";
import { Autoplay } from "swiper/modules";
import { GET } from "@/utils/axios.utils";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProjectIndex } from "@/store/slices/projects.slice";

export default function Project() {
  const [nextProject, setNextProject] = useState(0);
  const params = useParams();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const dispatch = useDispatch();
  const { projects, selectedProjectIndex } = useSelector(
    (state) => state.projects.projects
  );
  const [project, setProject] = useState(null);
  const slider = useRef(null);

  useEffect(() => {
    // GET(`/api/projects/${params.project}`).then((project) => {
    setProject(() => {
      const found = projects[selectedProjectIndex];
      console.log({ found });
      return found;
    });
    // });
  }, []);

  useEffect(() => {
    setNextProject(+params.project + 1);
    if (+params.id + 1 > 2) {
      setNextProject(1);
    }
  }, [nextProject, params]);

  const handleNextSlide = () => {
    if (currentSlideIndex < project?.gallery?.length - 1) {
      slider.current.splide.go("+1");
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const handlePreviousSlide = () => {
    if (currentSlideIndex > 0) {
      slider.current.splide.go("-1");
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };
  return (
    <div id="project">
      {project && (
        <div>
          <div id="sub-header" className={styles.subheader}>
            <h1>{project.name}</h1>
          </div>

          <div className="head">
            <div className="logo-wrapper">
              <Image
                src={project.logo}
                layout="responsive"
                width={1000}
                height={1000}
                alt="logo"
              />
            </div>
            <div className="details">
              <table>
                <tbody>
                  <tr>
                    <td>Client</td>
                    <td>{project.client}</td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>{project.location}</td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td className="capitalize">{project.status}</td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td className="capitalize">{project.type}</td>
                  </tr>
                  <tr>
                    <td>Year</td>
                    <td>{project.year}</td>
                  </tr>
                  <tr>
                    <td>Value</td>
                    <td>{project.value}</td>
                  </tr>
                </tbody>
              </table>
              {/* <ul>
            <li>Client</li>
            <li>Location</li>
            <li>Status</li>
            <li>Type</li>
            <li>Year</li>
            <li>Value</li>
          </ul>
          <ul>
            <li>{project.client}</li>
            <li>{project.location}</li>
            <li>{project.status}</li>
            <li>{project.type}</li>
            <li>{project.year}</li>
            <li>{project.value}</li>
          </ul> */}
            </div>
          </div>
          <div className="main-image-wrapper">
            <Image
              src={project.image}
              layout="responsive"
              width={1000}
              height={1000}
              quality={100}
              alt="main image"
            />
          </div>
          <div className="about-project">
            <h3>About Project</h3>
            <p>{project.about}</p>
          </div>
          <div className="wwdd">
            <SectionHeader title="What we did" />
            <div className="red-box">
              <h3>Technical specifications</h3>
              <div>
                {project.description.split("\n").map((line, index) => (
                  <div>{line == "" ? <br /> : <p key={index}>{line}</p>}</div>
                ))}
              </div>
            </div>
          </div>
          <section id="gallery">
            <SectionHeader title="Gallery" border="top" />
            <Splide
              ref={slider}
              className="slider"
              options={{ gap: "1rem", pagination: false, arrows: false }}
            >
              {project?.gallery?.map((image, index) => (
                <SplideSlide key={index}>
                  <Image
                    src={image}
                    layout="responsive"
                    width={1000}
                    height={1000}
                    alt="gallery image"
                    priority
                  />
                </SplideSlide>
              ))}
            </Splide>
            <div className="splid-pagination">
              <button onClick={handlePreviousSlide}>{"<"}</button>
              <span>
                <span>{currentSlideIndex + 1}</span> /{" "}
                {project?.gallery?.length}
              </span>
              <button onClick={handleNextSlide}>{">"}</button>
            </div>
          </section>
          <section id="phase">
            <SectionHeader title="Project Phases" border="top" />
            <Swiper
              className="swiper"
              slidesPerView={"auto"}
              // centeredSlides={true}
              spaceBetween={170}
              modules={[Autoplay]}
              options={{
                pagination: false,
                arrows: false,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
            >
              {project?.projectPhotos?.map((phase, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={phase.path}
                    // layout="responsive"
                    width={700}
                    height={1000}
                    alt="phase image"
                    priority
                  />
                  <span>{phase.text}</span>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
          <section id="blue-box">
            {/* <div className="blue-box">
              <p>
                “CECS acted as a shepherd for each department thoughout the
                preconstruction process. Not only were they collaborative
                leaders, but their knowledge and interpersonal approach ensured
                all departments and stakeholders&apos; concerns were considered.
                CEC took great care in serving as the Farm’s partner throughout
                the process.”
                <br />{" "}
              </p>
              <div>
                <p>Vinod Soman</p>
                <p> Founder & Managing Director</p>
              </div>
            </div> */}
            {project.testimonial && (
              <div className="blue-box">
                <div>
                  {project.testimonial.testimonial
                    .split("\n")
                    .map((line, index) => (
                      <div>
                        {line == "" ? <br /> : <p key={index}>{line}</p>}
                      </div>
                    ))}
                </div>
                <div>
                  <p>{project.testimonial.founder}</p>
                  <p>{project.clientDesignation}</p>
                </div>
              </div>
            )}

            {selectedProjectIndex < (projects.length - 1) && (
              <div
                onClick={() => {
                  const index = projects?.findIndex(
                    (element) => element?.id === project?.id
                  );
                  console.log({ index });
                  dispatch(setSelectedProjectIndex(index + 1));
                }}
              >
                <Button
                  classes="buf buf-primary"
                  path={`/projects/${nextProject}`}
                >
                  Next Project
                </Button>
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
