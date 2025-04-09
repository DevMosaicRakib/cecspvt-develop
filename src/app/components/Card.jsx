import styles from "./components.module.scss";
import Image from "next/image";

export default function Card({ title, description, job, image, customClass }) {
  return (
    <div className={`${styles.card} ${customClass}`}>
      <figure>
        <Image fill src={image} alt={title} />
      </figure>
      <div>
        <h3>{title}</h3>
        <p>{job}</p>
        <div>{description}</div>
      </div>
    </div>
  );
}
