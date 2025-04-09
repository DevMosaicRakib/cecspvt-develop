"use client";

import "./style.scss";
import styles from "@/app/components/components.module.scss";
// import projects from "@/app/projects/projects";
import { useEffect, useLayoutEffect, useState } from "react";
import Project from "@/app/components/Project";
import { gsap } from "gsap";
import { LIST } from "@/utils/axios.utils";
import { useDispatch } from "react-redux";
import { setProjects as setReduxProjects } from "@/store/slices/projects.slice";
export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(0);
  const [allProjects, setAllProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const dispatch = useDispatch();

  function setInitialProjects(projects) {
    let projectsList = [];
    const pages = makePages([...projects]);
    pages.forEach((page_element, index) => {
      if (index <= page) {
        page_element.forEach((element) => {
          projectsList.push(element);
        });
      }
    });
    return [...projectsList];
  }

  useEffect(() => {
    LIST("/api/projects").then((projects) => {
      console.log({ projects });
      setAllProjects([...projects]);
      dispatch(setReduxProjects([...projects]));
      setProjects([...projects]);
    });
  }, []);
  useEffect(() => {
    if (projects.length > 0) {
      if (filter === "all") {
        setPage((prev) => 0);
        setProjects((prev) => []);
        setProjects([...allProjects]);
      } else {
        const filteredProjects = allProjects.filter(
          (project) => project.status === filter
        );
        setProjects((prev) => []);
        setProjects((prev) => [...filteredProjects]);
      }
    }
  }, [filter]);

  function makePages(array, chunkSize = 10) {
    let result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }

  function loadMore() {
    setPage(page + 1);
  }

  useLayoutEffect(() => {
    gsap.fromTo(
      ".header-text",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
      }
    );
  }, []);
  return (
    <>
      <div id="sub-header" className={styles.subheader}>
        <h1>Projects</h1>
        <div className="filters">
          <button
            className={filter === "all" ? "selected" : undefined}
            onClick={() => {
              setFilter("all");
            }}
          >
            All
          </button>
          <button
            className={filter === "ongoing" ? "selected" : undefined}
            onClick={() => {
              setFilter("ongoing");
            }}
          >
            Ongoing
          </button>
          <button
            className={filter === "completed" ? "selected" : undefined}
            onClick={() => {
              setFilter("completed");
            }}
          >
            Completed
          </button>
        </div>
      </div>
      <section id="projects">
        <p className="header-text">
          We take pride in showcasing our diverse portfolio of construction
          endeavours.With a commitment to excellence and a passion for turning
          architectural dreams into tangible reality , every project tells a
          unique story of innovation, precision, and quality. From commercial
          spaces to residential havens that inspire, our work embodies the
          spirit of craftsmanship and dedication.
        </p>
        <div className="projects">
          {makePages(projects).map((page_element, index) => {
            if (index <= page) {
              return page_element.map((project) => {
                return <Project key={project.id} project={project} />;
              });
            } else return null;
          })}
        </div>

        <div className="mt-10">
          {makePages(allProjects).length > 1 &&
          page < makePages(allProjects).length - 1 ? (
            <button onClick={loadMore} className="load-more-button">
              Load More
            </button>
          ) : null}
        </div>
      </section>
    </>
  );
}
