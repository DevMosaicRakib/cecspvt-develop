import Image from "next/image";
import Button from "@/app/components/Button";
import { setSelectedProjectIndex } from "@/store/slices/projects.slice";
import { useDispatch, useSelector } from "react-redux";

export default function Project({ project }) {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projects.projects);

  return (
    <div className="project">
      <figure>
        <Image fill src={project.image} alt="project image" />
      </figure>
      <div className="project-info">
        <div className="head">
          <img src={project.logo} alt="project logo" />
          <span className={`state ${project.status}`}>{project.status}</span>
        </div>
        <div className="project-details">
          <div>
            <span>Year</span>
            <span>Location</span>
          </div>
          <div>
            <span>{project.location}</span>
            <span>{project.year}</span>
          </div>
        </div>
        <div
          onClick={() => {
            const index = projects?.findIndex(
              (element) => element?.id === project?.id
            );
            console.log({ index });
            dispatch(setSelectedProjectIndex(index));
          }}
        >
          <Button path={`projects/${project.id}`}>View</Button>
        </div>
      </div>
    </div>
  );
}
