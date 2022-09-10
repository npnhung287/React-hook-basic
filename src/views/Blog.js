import React from "react"
import useFetch from "../customize/fetch"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import './Blog.scss'

const Blog = () => {

    const { data: dataBlog, isLoading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);
    let history = useHistory()
    let newData = []

    if (dataBlog && dataBlog.length > 0) {
        newData = dataBlog.slice(0, 9)

    }

    const handleAddNewBlog = () => {
        history.push('/add-new-blog')
    }

    return (
        <>
            <div>
                <button className="btn-add-new"
                    onClick={handleAddNewBlog}>
                    + Add New Block
                </button>
            </div>
            <div className="blogs-container">
                {isLoading === false && newData && newData.length > 0 &&
                    newData.map(item => {
                        return (
                            <div className="single-blog" key={item.id}>
                                <div className="title">{item.title}</div>
                                <div className="content">{item.body}</div>
                                <button>
                                    <Link to={`/blog/${item.id}`}>View Detail</Link>
                                </button>
                            </div>
                        )
                    })
                }

                {isLoading === true &&
                    <div>Loading Data...</div>
                }

            </div>
        </>
    )
}


export default Blog
