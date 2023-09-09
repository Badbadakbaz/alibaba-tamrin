import React, { Component } from 'react';
import styles from './Body.module.css';
import image1 from './image/1.webp';
import image2 from './image/2.webp';
import image3 from './image/3.webp';

class Body extends Component {
    constructor(){
        super();
        this.state = {
            num1: " ",
            num2: " ",
            result: " ",
            color : ""
        }
    }

    changeNum1 = () => {
        this.setState({
            num1 : ""
        })
        
    }

    changeNum2 = () => {
        this.setState({
            num2 : ""
            })
    }

    resultNum = () => {
        this.setState({
           result: num1 * num2
        })
        if(reesult > 10){
            color : ""
        } else if (reesult < 10) {
            color : ""
        }else {
            color : ""
        }
    }
    render() {
        return (
                <div>
                    <div className={styles.body}>
                        <div className={styles.baner2}>
                            <p>{this.result}</p>
                        </div>  

                        <div className={styles.baner1}>
                            <div className={styles.baner11}>
                                    <input onChange={this.changeNum1} type='number' placeholder='             عدد را وارد کنید'></input>
                                    <label >عدد اول</label>
                                    <br/><br/><br/>
                                    
                                    <input onChange={this.changeNum2} type='number' placeholder='             عدد را وارد کنید'></input>
                                    <label >عدد دوم</label>
                                    <br/><br/><br/><br/><br/><br/>
                                    <button onClick={this.resultNum}>محاسبه</button>
                            </div>
                            
                        </div>
                        
                        
                    </div>
                    <hr/>
                    <div className={styles.body2}>
                            <img className={styles.bodyimg} src={image3}/>
                            <div>
                                <h4>رتبه یک سفر</h4>
                                <p className={styles.textbody2}>رتبه یک سفرمعتبرترین عرضه‌کننده محصولات گردشگری در ایران</p>
                            </div>
                            <img className={styles.bodyimg} src={image2}/>
                            <div>
                                <h4>همسفر هر سفر</h4>
                                <p className={styles.textbody2}>همسفر هر سفرارائه تمامی خدمات سفر (پرواز، قطار، اتوبوس، هتل و تور)</p>
                            </div>
                            <img className={styles.bodyimg} src={image1}/>
                            <div>
                                <h4>همسفر همه لحظات سفر</h4>
                                <p className={styles.textbody2}>پشتیبانی و همراهی ۲۴ ساعته در تمامی مراحل سفر</p>
                            </div>
                    </div>
                </div>    
        );
    }
}

export default Body;