import styles from "./components.module.scss";

export default function SectionHeader({ title, border }) {
  // TODO: animations here
  return (
    <div
      className={styles.sectionHeader}
      style={{ borderBottom: border ? "0" : undefined }}
    >
      {title}
    </div>
  );
}
