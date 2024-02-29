
import Bloglist from './Bloglist';
import useFetch from './useFetch';


const Home = () => {
   const { data: blogs, isPending, error } = useFetch('http://localhost:3000/blogs');
    console.log(error);

    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <Bloglist blogs={blogs} title="All Blogs" />}
        </div>     
     );
}

export default Home;