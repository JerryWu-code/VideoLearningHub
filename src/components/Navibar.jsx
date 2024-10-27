import styles from "./Navibar.module.css";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";


export const Navibar = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className={styles.navibar}>
            <div className={styles.navibarInner}>
                <img className={styles.logoIcon} alt="logo" src="/logo1@2x.png" />
                
                <div className={styles.navLink} onClick={() => handleNavigation("/")}>
                    <b className={styles.title}>Home</b>
                </div>

                <div className={styles.navLink} onClick={() => handleNavigation("/main-page")}>
                    <b className={styles.title}>Main</b>
                </div>

                <div className={styles.navLink} onClick={() => handleNavigation("/course-page")}>
                    <b className={styles.title}>Courses</b>
                </div>
            </div>
        </div>
    );
}