// src/components/CreateAdmins.jsx
import React, { useState } from 'react';

const CreateAdmins = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ssn, setSsn] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/admins', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          ssn,
          dob,
          address,
          phone: contactNumber,
          role,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create admin');
      }

      alert('Admin created successfully!');
      setName('');
      setEmail('');
      setPassword('');
      setSsn('');
      setDob('');
      setAddress('');
      setContactNumber('');
      setRole('');
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Create New Admin</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="text" placeholder="SSN" value={ssn} onChange={(e) => setSsn(e.target.value)} required />
        <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} required />
        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <input type="text" placeholder="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
        <input type="text" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} required />
        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Admin'}
        </button>
      </form>
    </div>
  );
};

export default CreateAdmins;
