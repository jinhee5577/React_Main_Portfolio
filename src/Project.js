 /*eslint-disable*/ 
 import React, { Component, useEffect, useState, useRef, } from 'react';
 import './App.css';
 import Slider from "react-slick";
 import github from './aesset/github.png';
 import mobile from './aesset/mobile.png';
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";

 function Project( {sliders} ){    
     let imgRef = useRef();  
   
     useEffect(() => { 
         
          
     }, []);

     return(
        <div id="project">
          <h1 className='title'>PROJECT</h1>
          <div id ="project_box">
            <Slider {...settings} width="100%">
              <div className='base'>
                <div className='proimg_box'>           
                </div>                 
                <ul className='button_box'>
                  <li>
                    <a ref={imgRef} href='https://github.com/jinhee5577/JHreact'>
                      <img src={github} alt='github'/>
                      <span>Github</span>
                    </a>
                  </li>
                  <li>
                    <a href='https://jinhee5577.github.io/reactJH/'>
                      <img src={mobile} alt='homepage'/>
                      <span>Homepage</span>
                    </a>
                  </li>                  
                </ul>                     
              </div>                
              <div className='base'></div>
              <div className='base'>3</div>
              <div className='base'>4</div>
              <div className='base'>5</div>
                {/* <Base />  컴포넌트로 돌릴경우 position 에러남. */}
            </Slider>    
          </div>
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
 