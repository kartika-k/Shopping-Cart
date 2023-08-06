import { useState } from "react";
import { useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading] = useState(false);
  const [posts,setPosts] = useState([]);

  async function fetchProductData(){
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);

    }
    catch(error){
      console.log('Error occured');
      setPosts([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchProductData();
  },[])

  return (
    <div className=" flex justify-center items-center">
      {
        loading ? <Spinner/> :
        posts.length > 0 ?
        (
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
           {
            posts.map((post) => (
              <Product key = {post.id} post={post}/>
            ))
           }
          </div>
        ) :
        (
          <div className="flex justify-center items-center">
            <p className=" text-[40px] m-3 p-3 rounded-md font-extrabold tracking-wide text-green-600">No Data Found</p>
          </div>
        )
      }
    </div>
  );
};

export default Home;
