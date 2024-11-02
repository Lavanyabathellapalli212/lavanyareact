import PostBodyComponent from "./PostBodyComponent";
import PostTitleComponent from "./PostTitleComponent";
import PostComponent from "./PostComponent";


function BlogComponent()
{
    return(
        <>
        <PostComponent title="hii" body="hello"/>

        <PostBodyComponent body="in-depth" />
        <PostTitleComponent  title="learnreact"/>
        
        </>
    )
}