// import * as React from "react";
// import { Engine, RenderClones, Walls, Circle } from "react-matter-js";

// export const BallPit = () => {
//   const width = document.body.clientWidth;
//   const height = document.body.clientHeight;
//   const circleCount = 50;
//   const cirlceSize = height * 0.05;

//   const renderCircles = () => {
//     return [...Array(circleCount).keys()].map(num => (
//       <Circle key={num} clone x={300} y={100} radius={cirlceSize} />
//     ));
//   };

//   return (
//     <>
//       <Engine options={{}}>
//         <RenderClones
//           enableMouse
//           options={{
//             width,
//             height,
//             background: "transparent",
//           }}
//         >
//           <Walls x={0} y={0} width={width} height={height} wallWidth={1} />
//           {renderCircles()}
//         </RenderClones>
//       </Engine>
//     </>
//   );
// };