import PostTitleComponent from "./PostTitleComponent";
import PostBodyComponent from "./PostBodyComponent";
function PostComponent({title,body})
{
    return(
        <>
       < PostTitleComponent title={title} />
       <PostBodyComponent body={body}/>

        
        </>
    )
}
export default PostaComponent;