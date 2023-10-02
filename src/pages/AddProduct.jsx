import { useState } from 'react';

import { postData } from '../api/api';

import { Form } from '../components';

const AddProduct = () => {
    return (
        <div className="single-shoe-container">
            <h2>Add Product</h2>
            <Form apiMethod={postData} btnText='Add' />
        </div>
    );

};

export default AddProduct;