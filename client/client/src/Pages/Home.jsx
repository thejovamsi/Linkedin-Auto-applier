import {useForm} from "react-hook-form";
import axios from "axios";



function Home(){

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async(data) => {
        try{
            const re =await axios.post("http://localhost:4000/job-preference", data, {
                headers: {
                    'content-type' : 'application/json'
                }
            });
            console.log("Response from server:", re.data);
            alert("job preference submitted successfully!");
            reset(); // Reset the form after submission
        }catch(err){
            console.error(err);
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center p-5">
            <h1 className="p-3 ">Job Preference</h1>
                <form onSubmit ={handleSubmit(onSubmit)} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"> 
                    <label className="block mb-2">
                    <span className="block text-gray-700">Job Title</span>
                    <select  {...register("jobTitle")} className="w-full border border-gray-300 rounded-md mb-4">
                       <option value="">Select Job Type</option>
                       <option value="full-time">Full Time</option>
                       <option value="part-time">Part Time</option>
                       <option value="internship">Internship</option>
                   </select>
                   </label>
                   <label className="block mb-2">
                    <span className="block text-gray-600">Date Posted</span>
                    <select {...register("datePosted")} className="w-full border border-gray-300 rounded-md mb-4">
                       <option value="">Select Date</option>
                       <option value="last-24-hours">Last 24 Hours</option>
                       <option value="last-7-days">Last 7 Days</option>
                       <option value="last-30-days">Last 30 Days</option>
                   </select>
                   </label>
                   <label className="block mb-2">
                    <span className="block text-gray-600 text-sm">Job description</span>
                    <input {...register("jobDescription")} className="w-full border border-gray-300 rounded-md p-2 "
                     type="text"
                      placeholder="Enter job description"
                      />
                   </label>

                   <button type="submit" className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 rounded-md">Submit</button>
                </form>
        </div>
    )
}

export default Home;