 /*eslint-disable*/ 
 import React, { Component, useEffect, useState, useRef, } from 'react';
 import './App.css';
 import Data from './data.js';
 import Slider from "react-slick";
 import github from './aesset/github.png';
 import mobile from './aesset/mobile.png';
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";


 function Project( {sliders} ){ 
     let [data, setdata] = useState(Data);       
     let baseRef = useRef();  
  
     useEffect(() => { 
         let base = document.querySelectorAll('.base');
          
     }, []);

     return(
        <div id="project">
          <h1 className='title'>PROJECT</h1>
          <div id ="project_box">
            <Slider {...settings} width="100%">
              {
                data.map((item, i) => { 
                        return (
                          <div className={`base base${item.id}`} key={i}>
                            <header id="explanation">
                              {item.explanation}
                            </header>
                            <div className='proimg_box'>           
                            </div>                 
                            <ul className='button_box'>
                              <li>
                                <a href={item.gitlink}>
                                  <img src={github} alt='github'/>
                                  <span>Github</span>
                                </a>
                              </li>
                              <li>
                                <a href={item.homelink}>
                                  <img src={mobile} alt='homepage'/>
                                  <span>Homepage</span>
                                </a>
                              </li>                  
                            </ul>                     
                          </div>  
                        );
                  })
              }                    
              {/* <Base />  컴포넌트로 돌릴경우 position 에러남. */}
            </Slider>    
          </div>   
          <footer>
            <h4>
               앞으로 다양한 스킬공부와 프로젝트 개발로 꾸준히 역량을 쌓아,
               <span className='f0'>함께 공동의 목표를 이룰 수있는 인재가 되겠습니다.</span><br/>
               <span className='f1'>저의 공부기록, 프로젝트들이 담길 <span className='f2'>소스코드저장소</span> 입니다.</span>                
            </h4>
            <a href='https://github.com/jinhee5577'>
              <img src={github} alt="git"/>
            </a>            
          </footer> 
        </div>
     );     
 }


 export default Project;


 const settings = {
        arrows: true,
        dots: true,  // 슬라이드 밑에 점 보이게
        infinite: true,  // 무한으로 반복
        speed: 1000,
        autoplay: false,
     //   autoplaySpeed: 2500,  // 넘어가는 속도
        slidesToShow: 2,  // 2장씩 보이게
        slidesToScroll: 2,  // 1장씩 뒤로 넘어가게
        centerMode: false,
        centerPadding: '0px',  // 0px 하면 슬라이드 끝쪽 이미지가 
        responsive: [{
              breakpoint: 600,
              settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 5
              }
         },]
    };
 