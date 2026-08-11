import styles from "./StudentCard.module.css";

export default function StudentCard({ student }) {
  return (
    <div
      className={`${styles.card} ${
        student.status === "On Probation" ? styles.probation : ""
      }`}
    >
      <h2>{student.name}</h2>
      <p>Course: {student.course}</p>
      <p>Year Level: {student.yearLevel}</p>

      <p>
        Status:{" "}
        {student.status === "On Probation"
          ? "On Probation"
          : student.status}
      </p>

      <p>GWA: {student.gwa}</p>

      {student.gwa <= 1.75 && (
        <span className={styles.badge}>Dean's Lister</span>
      )}
    </div>
  );
}