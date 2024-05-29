import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testimonials = () => {
    const slider=useRef()
    let tx=0;
   const slideForward=()=>{
    if(tx>-50){
        tx-= 25
    }
    slider.current.style.transform=`translateX(${tx}%)`
   


   }
  const slideBackward=()=>{
    if(tx<0){
        tx+= 25
    }
    slider.current.style.transform=`translateX(${tx}%)`

  }

  return (
    <div className="testimonials">
      <img src={next_icon} onClick={slideForward} className="next-btn" />
      <img src={back_icon} onClick={slideBackward} className="back-btn" />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user_1" />
                <div>
                  <h3>William Jackson 1</h3>
                  <span>Edusity ,USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                descisions I have ever made.
              </p>
            </div>
          </li>

          <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_2} alt="user_2" />
              <div>
                <h3>Emily Smith</h3>
                <span>Edusity, Canada</span>
              </div>
            </div>
            <p>
              The diverse learning environment at Edusity has broadened my perspectives immensely.
            </p>
          </div>
        </li>

        <li>
        <div className="slide">
          <div className="user-info">
            <img src={user_3} alt="user_3" />
            <div>
            <h3>Sarah Davis</h3>
              <span>Edusity, UK</span>
            </div>
          </div>
          <p>
            Edusity is innovative approach to education has fueled my passion for learning.
          </p>
        </div>
      </li>
        
        <li>
        <div className="slide">
          <div className="user-info">
            <img src={user_4} alt="user_4" />
            <div>
            <h3>Michael Johnson</h3>
             
              <span>Edusity, Australia</span>
            </div>
          </div>
          <p>
            Edusity is supportive community has helped me achieve my academic goals with confidence.
          </p>
        </div>
      </li>
       

        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
