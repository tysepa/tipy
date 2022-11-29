import {useState,useEffect} from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs]= useState([
        {title: "hellowins", body:"welcome to days......", Author:"Kaloim", id:1},
        {title: "hellowins", body:"welcome to days......", Author:"Clalick", id:2},
        {title: "hellowins", body:"welcome to days......", Author:"Kaloim", id:3}
    ])

    const handleDelete =(id)=>{
        const newBlog = blogs.filter((blog)=> blog.id !==id)
        setBlogs(newBlog)
    }

    useEffect(()=>{
        console.log(blogs)
    })
    return ( 
        <div className="home">
         <BlogList blogs={blogs} title='Blog List!' handleDelete={handleDelete} />
        
        </div>
     );
}
 
export default Home;