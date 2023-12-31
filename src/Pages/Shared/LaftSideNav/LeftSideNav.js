import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://news-potal-server.vercel.app/news-category')
        .then(res => res.json())
        .then(data => setCategory(data));

    }, []);

    return (
        <div>
            <h4>Category{categories.length}</h4>
            <div>
                {
                    categories.map(category => <p
                        key={category.id}>
                            <Link to={`/category/${category.id}`}>{category.name}</Link>
                        
                    </p> )
                }
            </div>

        </div>
    );
};

export default LeftSideNav;