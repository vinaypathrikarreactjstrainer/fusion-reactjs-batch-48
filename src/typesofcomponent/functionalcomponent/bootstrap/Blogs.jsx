import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const Blogs = () => {
    const [blog, setBlogs] = useState([]); // post/blogs
    const [show, setShow] = useState(false); // show/hide blogs Ui
    const blogURL = `https://jsonplaceholder.typicode.com/posts`;
    useEffect(() => {
        fetch(blogURL)
            .then(resp => resp.json())
            .then(data => {
                console.log('data => ', data);
                const post20 = data.slice(0, 20);
                console.log('post20 => ', post20);
                setBlogs(post20);
            })
            .catch(err => console.error(err))
    }, []);

    // functions
    const showBlogs = () => {
        console.log('inside the showBlogs function');
        setShow(true);
    }

    return(
        <>
            <Button variant="primary" onClick = {() => showBlogs()}>Blogs</Button>
            
                <ListGroup >
                    {
                        show == true
                        ? blog.map(post => (
                            <ListGroup.Item key={post.id}>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </ListGroup.Item>
                        ))
                        : <h4>Opps! blogs are not found</h4>
                    }
                </ListGroup>
            
        </>
    )
}
export default Blogs;