 /*eslint-disable*/ 
 import React, { Component, useEffect, useState, useRef, } from 'react';
 import chorong from './aesset/chorong.png';
 import chorong2 from './aesset/chorong2.png';
 import music from './aesset/zaurim2521.mp3';
 import react_img from './aesset/react_img.png';
 import redux_img from './aesset/redux2.png';
 import js_img from './aesset/js_img.png';
 import html_img from './aesset/html_img.png';
 import css_img from './aesset/css_img.png';
 import ajax_img from './aesset/Ajax.png';
 import jquery_img from './aesset/jquery_img.gif';
 import boot_img from './aesset/boot_img.png';
 import Project from './Project.js';
//  import { Link, Route, Routes, } from 'react-router-dom';
 import './App.css';
 

function App() { 
  let appRef = useRef();
  let audio = new Audio(music);  // import 해서 가져와야한다.
  audio.loop = true;

  useEffect( () => {       
        let chorong = document.querySelectorAll('.chorong');
        let blackmoon = setTimeout(() => { 
            chorong[0].style.left = 0;    
            chorong[1].style.right = 0;    
            chorong.forEach( (item) => { 
                item.style.opacity = 1;          
            });
        }, 270);           

        return () => { clearTimeout(blackmoon); }
    }, [] );

    useEffect(() => { 
          let chorong = document.querySelectorAll('.chorong');
          let section = document.querySelectorAll('.sc');
          let header = document.querySelector('.sc1 > header'); 
          let onbutton = document.querySelectorAll('header > button'); 
          let profile = document.querySelector('.profile');
          let history = document.querySelector('.history');
          let certificate = document.querySelector('.certificate');
          let media_600 = matchMedia('screen and (max-width: 600px)'); 
      
          let sc_num = 0;
          let scoffset = 0;
          header.addEventListener('click', (e) => {
                e.preventDefault();
                sc_num = Number(e.target.getAttribute('num'));                    
                scoffset = section[sc_num].offsetTop;
                // if(media_600.matches){      
                //     if(sc_num >= 2){
                //       window.scrollTo({top : scoffset, behavior:'smooth'});               
                //     } else {
                //         window.scrollTo({top : scoffset, behavior:'smooth'});
                //     }                   
                // } else {
                //     window.scrollTo({top : scoffset, behavior:'smooth'});
                // }   
                window.scrollTo({top : scoffset, behavior:'smooth'});                        
                change_button();
                setTimeout(loadaction, 450);        
          });

          window.addEventListener('scroll', () => { 
              if(window.pageYOffset > 0){
                  sc_num = 0;
                  change_button();  
                  profile.classList.remove('ac_600');                     
                  setTimeout(loadaction, 450);        
              }
              if(window.pageYOffset > section[1].offsetTop - 100){ 
                  sc_num = 1; 
                  change_button();   
                  if(media_600.matches){    
                      section[1].classList.remove('active');                                           
                      profile.classList.add('ac_600');                   
                      if(window.pageYOffset > section[1].offsetTop + 300){                                       
                            history.classList.add('acti_600');                    
                      }
                      if(window.pageYOffset > section[1].offsetTop + 600){  
                            certificate.classList.add('acti_602');
                      }
                  } else {        
                      setTimeout(loadaction, 450); 
                  }      
              }
              if(window.pageYOffset > section[2].offsetTop - 100){  
                  history.classList.remove('acti_600');        
                  certificate.classList.remove('acti_602');
                  sc_num = 2;
                  change_button();
                  setTimeout(loadaction, 450);   
              }
              if(window.pageYOffset > section[3].offsetTop - 100 ){
                  sc_num = 3;
                  change_button();
                  setTimeout(loadaction, 450);    
              }

              if(media_600.matches){
                  if(window.pageYOffset > section[1].offsetTop - 50){
                      chorong.forEach( (item) => { item.style.opacity = 0; } );
                  } else {
                      chorong.forEach( (item) => { item.style.opacity = 1; } );
                  }
              }             

          });

          function loadaction (){
              section.forEach((sc) => { sc.classList.remove('active'); });
              section[sc_num].classList.add('active');
          }

          function change_button (){
              onbutton.forEach((ele) => {
                      ele.classList.remove('click');   
                });
              onbutton[sc_num].classList.add('click');                
          }
     }, []);


     let flower = () => { 
        let colors = ["#8cc3f7ab", "#cef38aaf"];
        let numBalls = 30;
        let balls = [];
    
        for (let i = 0; i < numBalls; i++) {
            let ball = document.createElement("div");
            ball.classList.add("ball");
            ball.style.background = colors[Math.floor(Math.random() * colors.length)];
            ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
            ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
            ball.style.transform = `scale(${Math.random()})`;
            ball.style.width = `${Math.random() / 1.7}em`;
            ball.style.height = ball.style.width;     
        
            balls.push(ball);
            appRef.current.append(ball);
        }
    
          // Keyframes
          balls.forEach((el, i, ra) => {
              let to = {
                          x: Math.random() * (i % 2 === 0 ? -20 : 20),
                          y: Math.random() * 30,
                          z: Math.random() * (-70)
                      };
    
              let anim = el.animate(
                [{ transform: "translate3d(0, 0, 0)", opacity: 0.7},
                { transform: `translate3d(${to.x}rem, ${to.y}rem, ${to.z}rem)`, opacity: 0 }],
                  {
                    duration: (Math.random() + 1) * 2500, // random duration
                    // direction: "alternate",
                    fill: "both",
                    iterations: Infinity,
                    easing: "ease-in-out"
                  }
              );                  
          });              
    }; 
     
  return (
    <div className="App" ref={appRef}>        
        <div className="chorong">
          <img src={chorong2} alt="청사초롱"/>
          <span></span>
        </div>    
        <div className="chorong rong2">
          <img src={chorong} alt="청사초롱"/>
          <span></span>
        </div>         
      <section className='sc sc1'>
        <header>         
             <button num='0'>HOME</button>
             <button num='1'>ABOUT</button>
             <button num='2'>SKILLS</button>
             <button num='3'>PROJECT</button>       
        </header>
        <h2 className='title'>저는 상상을 현실로 만드는 프론트엔드, UI 개발 을 지원하는 오진희 입니다.</h2> 
        <div className='music_box'>
          <button onClick={() => { audio.play(); flower(); }}>play</button>
          <button onClick={() => { audio.pause(); }} >stop</button> 
        </div>
      </section>
      <section className='sc sc2'>
        <div className='profile'>
          <div className='about'>ABOUT
           <span className='l1'></span>
           <span className='l2'></span>
           <span className='l3'></span>
           <span className='l4'></span>
          </div>
          <article>
            <h4>안녕하십니까. 프론트엔드에서 저의 모든 상상과 역량, 목표를
                현실로 만들어 나가는 오진희 입니다!. <br/>코드를 이용해 상상을 
                더욱더 구체적으로 그려 내기위해 항상 끊임없이 고민하고 공부하며 노력합니다.
                제가 그동안 쌓아온 역량을 가장자신있게 잘할수있는 UI개발을 
                기반으로, 꾸준히 javascript를 더욱더 탄탄히 다졌으며, 
                React와 Redux를 이용한 여러 기능개발 들과 애니메이션등을 직접 
                javascript로 구현한 개인프로젝트 개발을 통하여 React개발 경험과 
                역량을 향상시켜 왔습니다.<br/><br/>
               
                저의 강점인 목표를 향한 끈기있는 열정과 집요한노력 덕분에 
                오늘날까지 성장할수 있었습니다.<br/>
                프론트에서 아름답고 놀라운 경험을 선물하기위해 최선의 방법을 함께 모색하는, 
                공동의 목표를 함께 이룰수있는 인재 입니다.              
            </h4>            
          </article>
        </div>
        <div className='history'>
          <div className='about'>HISTORY    
            <span className='l1'></span>
            <span className='l2'></span>        
            <span className='l3'></span>
            <span className='l4'></span>         
          </div>
          <aside>
             <History date={['2007. 03', '2010. 02']} school='목포정명여자고등학교 졸업'/>
             <History date={['2010. 03', '2011. 12']} school='초당대학교 치위생학과 자퇴'/>
             <div className='timeline'>
              <span></span>
              <div className='contbox'>
                <h4>2020. 04 ~ 2020. 10</h4> 
                <h5>UI/UX 웹디자인 개발자 과정 수료</h5>         
                <h5>목포한양직업전문학교</h5> 
              </div>        
             </div>       
             <History date={['2020. 11', '2021. 03']} school='워너비체인소프트'/>
          </aside>
        </div>
        <div className='certificate'>
          <div className='about'>LICENSE  
            <span className='l1'></span>
            <span className='l2'></span>        
            <span className='l3'></span>
            <span className='l4'></span>         
          </div>
          <aside>
            <Certificate data='2020. 09' license='웹디자인기능사'/>          
            <Certificate data='2020. 10' license='컴퓨터그래픽스운용기능사'/>          
            <Certificate data='2020. 08' license='GTQ 1급'/>          
            <Certificate data='2020. 06' license='(국가공인)디지털정보활용능력'/>                     
            <Certificate data='2011. 11' license='간호조무사'/>       
          </aside>            
        </div>        
      </section>
      <section className='sc sc3'>
        <h1 className='title'>SKILLS</h1>
        <div className='skillbox'>
          <ul>
            <Skills img={react_img} number={95} name='React'/>
            <Skills img={redux_img} number={85} name='Redux'/>
            <Skills img={js_img} number={95} name='Javascript'/>
            <Skills img={html_img} number={95} name='HTML5'/>
            <Skills img={css_img} number={95} name='CSS3'/>
            <Skills img={jquery_img} number={90} name='Jquery'/>
            <Skills img={ajax_img} number={90} name='Ajax'/>
            <Skills img={boot_img} number={80} name='Bootstap'/>
          </ul>
        </div>     
      </section>
      <section className='sc sc4'>
        <Project />
      </section>     
    </div>
  );
}

function History(props){
  return (     
        <div className='timeline'>
          <span></span>
          <div className='contbox'>
            <h4>{props.date[0]} ~ {props.date[1]}</h4> 
            <h5>{props.school}</h5> 
          </div>        
        </div>     
  );
}

function Certificate(props){
   return (
      <div className='timeline'>
        <span></span>
        <div className='contbox'>
          <h4>{props.data}</h4> 
          <h5>{props.license}</h5>  
        </div>  
      </div> 
   );
}
 
function Skills(props){
    return(
        <li>
          <div className='inside'>
            <img src={props.img} alt="1"/>
            <h2>{props.number}%</h2>
            <h5>{props.name}</h5>
          </div>
        </li> 
    );
}


export default App;