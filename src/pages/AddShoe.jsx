import { useState } from 'react';

import { addShoe } from '../api/api';

import { Form } from '../components';

const AddShoe = () => {
    return (
        <div className="single-shoe-container">
            <h2>Add Shoe</h2>
            <Form btnText='Add' />
        </div>
    );

};

export default AddShoe;