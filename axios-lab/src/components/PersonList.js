

import React from 'react';
import axios from 'axios';
import './PersonList.css';

const PersonList = () => {
    const [persons, setPersons] = useState([]);
    const [newPerson, setNewPerson] = useState({ name: '', age: '' });
    const [editingPerson, setEditingPerson] = useState(null);
    const [loading, setLoading] = useState(true);

const PersonList = () => {
    return (
        <div className="person-list">
            <h2>Person List</h2>
        </div>
    )
}
export default PersonList;