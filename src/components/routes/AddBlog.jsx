import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const userEmail = user?.email;
    const userName = user?.displayName

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const blogPara = form.blogPara.value;
        const obj = { title, blogPara, userName, userEmail };
        console.log(obj);
        //sending the post request.
        fetch(`https://badluck-server.vercel.app/post-blog`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            navigate("/blogs");
    }

    return (
        <form onSubmit={handleSubmit} className="p-5 border-2 rounded-md">
            <label className="form-control w-full ">
                <div className="label mb-2">
                    <span className="label-text text-xs font-semibod ">Enter the title of the blog?</span>
                </div>
                <input type="text" name="title" placeholder="Type here" className="text-xs border outline-none input-bordered w-full p-2" />
            </label>
            <label className="form-control">
                <div className="label mt-5 mb-2">
                    <span className="label-text  text-xs font-semibod">Enter the description of the blog?</span>
                </div>
                <textarea name="blogPara" className="w-full textarea border outline-none textarea-bordered h-24 p-2 text-xs" placeholder="Blog description"></textarea>
            </label>
            <div className="w-full flex justify-center items-center">
                <input type="submit" value={"Add"} className="px-2 py-1 bg-blue-500 hover:bg-blue-600 rounded-md text-xs text-white" />
            </div>
        </form>
    );
};

export default AddBlog;