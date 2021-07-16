import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import './titleMessage.css'

// const MyTitleMessage = styled.h1`
//   position: absolute;
//   color:white;
//   width: 100%;
//   top: 22rem;
//   z-index: 1;
//   margin-top: -125px;
//   text-align: center;
//   strong {
//     font-size: 1.25em;
//   }
//   div {
//     color: ${props => props.theme.textColor};
//     text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
//     font-weight: 100;
//     letter-spacing: 7px;
//     .main {
//       font-size: 50px;
//     }
//     .sub {
//       font-size: 27px;
//       letter-spacing: 2px;
//     }
//   }
// `;

// const TitleMessage = () => (
//   <MyTitleMessage>
//     <div className="titleMessage">
//       <div className="heading">
//         <div className="main text-center mb-3">
//           Hi, I am
//           <br />
//           <span>
//             <strong>Utsav Raj</strong>
//           </span>
//         </div>
//         <div className="sub">
//           <Typewriter
//             options={{
//               strings: ["Web Developer", "Coach", "Learner"],
//               autoStart: true,
//               loop: true,
//               delay: 50
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   </MyTitleMessage>
// );
const TitleMessage = () => (
  <div className="title">
    <div className = "title-heading">
      Hi, I am
    </div>
    <div className="title-name">
      Utsav Raj
    </div>
    <div className="title-typeWriter">
      <Typewriter
        options={{
          strings: ["Software Developer","Web Developer", "Learner"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  </div>
)
export default TitleMessage;