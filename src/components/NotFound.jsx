import { NavLink } from 'react-router-dom';
import classes from '../styles/NotFound.module.css'
import { useLocation } from 'react-router-dom';
export default function NotFound() {
    const {pathname} = useLocation()
    return (
        <>
             <div className={classes.error_container}>
        <h1 className={classes.error_h1}>404</h1>
        <p className={classes.error_p}>{`'${pathname.replace('/','')}'`} Page Not Found</p>
        <NavLink className={classes.success} to={'/'}>Go Back</NavLink>
        <div className={classes.astronaut}>
            <div className={classes.head}>
                <div className={classes.glass}>
                    <div className={classes.reflection}></div>
                </div>
                <div className={classes.helmet}></div>
            </div>
            <div className={classes.body}></div>
            <div className={classes.arm_left}></div>
            <div className={classes.arm_right}></div>
            <div className={classes.leg_left}></div>
            <div className={classes.leg_right}></div>
        </div>
    </div>
        </>
    );
}
