// import Apples from "./Apples";

 import BrightText from "./BrightText";
import MovieCard from "./MovieCard";

 import CourseGoal from "./CourseGoal";
 
import BlogComponent from "./CourseGoal";

 
 // import CricketScore from "./CricketScore";
//import Discount from "./Discount";
// import IncrementDecrement from "./IncrementDecrement";

// all files cricket,apples ,discount....

//function App(){
   // return(
      //  <>
       {/* // <h1>welcome to app.js files</h1>
        
       // <IncrementDecrement/>
      //  <Apples />
      //  <CricketScore />
      //  <Discount/> */}
    
        
        //</>
   // )
//}
//export default App;
///   display only title  and description ....using blog component..

// function App(){
//     return(
//         <>
//         <BlogComponent/>



// {/* // <CourseGoal title="learnreact" description="in-depth"/>
// // <CourseGoal title="about ratan sir"description ="ratan sir is nice"/>
//    */}
//   </>
// )
// }
// export default App;
 
//colors ....bright text.....
        
// function App()
// {
//    return(
//       <>
//       <BrightText color="red" />
//       <BrightText color="blue" />
//       <BrightText color="green" />
//       </>
//    )
// } 
// export default App;

//Movie grid... display movies.....
function App()
{
   return(
      <>
       <BrightText color="red" />
      <BrightText color="blue" />
     <BrightText color="green" />

    <CourseGoal title="learnreact" description="in-depth"/>
     <CourseGoal title="about ratan sir"description ="ratan sir is nice"/>

      <BlogComponent/>
      
      <MovieCard Movie="kalki hero -probhas"/>
      <MovieCard Movie ="bhahubali hero-prabhas"/>
      <MovieCard Movie ="salar hero -prabhas"/>
      </>

   )
}
export default App;










