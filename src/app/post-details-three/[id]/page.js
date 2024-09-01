import PostDetailsThree from "./PostDetailsThree";


export default function PostDetailsPage({ params }) {
  const { id } = params;  // 'id' will be extracted from the URL segment
    console.log('id', id)
  return <PostDetailsThree id={id} />;
}