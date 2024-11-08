import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Registration() {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [checkbox, setcheckbox] = useState(false);


    const handleSubmit = (e) => {
       e.preventDefault
    const formdata = {
        firstName,
        lastName,
        email,
    }
    console.log(formdata)

    //clear form
    setfirstName("");
    setlastName("");
    setemail("");
    setpassword("");
    setcheckbox(false);
    
}

  return (
    <form onSubmit={handleSubmit} className='container mt-5'>
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="firstName" 
        placeholder="firstName"
        value={firstName}
        onChange={(e)=> setfirstName(e.target.value)}
         />
         </Form.Group>

         <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="lastName" 
        placeholder="lastName"
        value={lastName}
        onChange={(e) => setlastName(e.target.value)}
         />
         </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" 
        placeholder="Enter email"
        value={email}
        onChange={(e)=> setemail(e.target.value)}
         />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        value={password}
        onChange={(e)=> setpassword(e.target.value)}
         />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out"
        value={checkbox}
        onChange={(e)=> setcheckbox(e.target.value)}
         />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default Registration;