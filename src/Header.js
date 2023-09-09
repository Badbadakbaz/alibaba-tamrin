import React, { Component } from 'react';
import styles from "../src/Header.module.css"
import logo from "./image/logo.gif"


class Header extends Component {
    render() {
        return (
            <div className={styles.header}>

                <div>
                    <ul className={styles.ull}>
                        <a href=''>
                           <span>ورود یا ثبت نام</span>
                        </a>
                        <a href=''>
                            <span>سفرهای من</span>
                        </a>
                        <a href=''>
                            <path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5ZM12 3a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9Zm.242 12.634a.72.72 0 0 0-.72.72v.36a.72.72 0 0 0 .636.715l.084.005a.72.72 0 0 0 .72-.72v-.36a.72.72 0 0 0-.72-.72Zm-.285-9.068c-.5 0-.943.07-1.33.208a2.664 2.664 0 0 0-.98.592c-.264.258-.467.57-.605.937a3.48 3.48 0 0 0-.206 1.229c0 .354.054.683.164.99.108.308.257.6.441.878.185.279.394.541.629.788.232.247.475.488.724.721.286.266.48.565.578.897.1.334.147.693.147 1.078h1.445a6.226 6.226 0 0 0-.079-.96 2.803 2.803 0 0 0-.226-.726 3.122 3.122 0 0 0-.41-.636 11.256 11.256 0 0 0-.627-.69 56.686 56.686 0 0 0-.511-.519 3.796 3.796 0 0 1-.43-.507 2.073 2.073 0 0 1-.403-1.268c0-.546.144-.973.43-1.283.287-.31.703-.464 1.25-.464.228 0 .448.03.659.09.21.059.396.153.56.28a1.4 1.4 0 0 1 .395.484c.1.195.148.428.148.698h1.444a2.797 2.797 0 0 0-.258-1.186 2.65 2.65 0 0 0-.678-.885 3.035 3.035 0 0 0-1.01-.555 4.033 4.033 0 0 0-1.26-.191Z" fill-rule="evenodd"></path>
                            <span>مرکز پشتیبانی آنلاین</span>
                        </a>
                    </ul>
                </div>

                <div>
                    <ul className={styles.ulr}>
                        
                        <li>
                            <a className={styles.navlinks} href=''> بیشتر </a>
                        </li>
                        <hr />
                        <li>
                            <a className={styles.navlinks} href=''> تور </a>
                        </li>
                        <hr />
                        <li>
                            <select className={styles.navbarforms}> 
                                <option ></option>
                                <option >1</option>
                                <option >2</option>
                                <option >3</option>
                            </select>
                            <label>اقامت</label>
                        </li>
                        <hr />
                        <li>
                            <select className={styles.navbarforms}> 
                                <option ></option>
                                <option >1</option>
                                <option >2</option>
                                <option >3</option>
                            </select>
                            <label>بلیط</label>
                        </li>
                    </ul>
                </div>

                <img className={styles.logo} src={logo} alt='logo' />
                
            </div>
        );
    }
}

export default Header;