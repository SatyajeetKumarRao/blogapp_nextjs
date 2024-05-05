'use client';

import axios from 'axios';
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inputClass =
    'w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300';

const initialData = {
    title: '',
    content: '',
}
const FormNewPost = () => {
    const [formData, setFormData] = useState(initialData);


    // const { data } = useSession();
    // const router = useRouter();

    const handleChange = (e
    ) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post('/api/posts/addpost', formData);

            if (response.status === 200) {
                // router.push(`/blogs/${response.data.newPost.id}`);
                setFormData(initialData)

                toast.success("New Post Created")


            }
        } catch (error) {
            console.error(error);
            toast.error(error)
        }
    };

    return (<>

        <form className='max-w-md mx-auto p-4' onSubmit={handleSubmit}>
            <div className='mb-4'>
                <input
                    type='text'
                    className={inputClass}
                    placeholder='Enter the title'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                />
            </div>
            <div className='mb-4'>
                <ReactTextareaAutosize
                    minRows={5}
                    name='content'
                    className={inputClass}
                    placeholder='Enter the content'
                    value={formData.content}
                    onChange={handleChange}
                />
            </div>
            <button
                // disabled={!data?.user?.email}
                type='submit'
                className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full disabled:bg-gray-400'
            >
                Submit
            </button>
        </form>
        <ToastContainer />
    </>
    );
};

export default FormNewPost;