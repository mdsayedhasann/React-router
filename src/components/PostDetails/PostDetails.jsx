
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {title, body} = post;
    return (
        <div>
            <h2> {title} </h2>
            <p> {body} </p>
            <form action="">
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <br />
                <br />
                <button>
                    Comment
                </button>
            </form>
        </div>
    );
};

export default PostDetails;