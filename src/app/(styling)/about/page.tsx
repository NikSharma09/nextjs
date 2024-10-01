"use client";
import styles from "./page.module.css";
export default function About() {
  return (
    <div className={styles.pageContainer}>
        <style jsx>
            {`
                h1 {
                    color: blue;
                }
            `}
        </style>
      <h1>About</h1>
      <p style={{backgroundColor:"red"}}>This is the about page.</p>
      <ul>
        <li>Test 1</li>
        <li>Test 2</li>
        <li>Test 3</li>
      </ul>
    </div>
  );
}
