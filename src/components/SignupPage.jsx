import { useState } from 'react';
import { Form, FormGroup, FormFeedback, Input, Button } from 'reactstrap';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordStrong, setIsPasswordStrong] = useState(false);
  const [nationality, setNationality] = useState('EN');
  const [greeting, setGreeting] = useState('Hello');

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(newEmail));
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setIsPasswordStrong(strongPasswordRegex.test(newPassword));
  };

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
    switch (event.target.value) {
      case 'EN':
        setGreeting('Hello');
        break;

      case 'DE':
        setGreeting('Hallo');
        break;

      case 'FR':
        setGreeting('Bonjour');
        break;

      default:
        setGreeting('Hello');
        break;
    }
  };

  const emailFormInput = () => {
    if (email === '') {
      return (
        <Input
          type="email"
          id="email-input"
          onChange={handleEmailChange}
          style={{ borderColor: 'lightgrey' }}
        />
      );
    } else if (isEmailValid) {
      return (
        <div>
          <Input
            valid
            type="email"
            id="email-input"
            onChange={handleEmailChange}
            style={{ borderColor: 'green' }}
          />
          <FormFeedback valid style={{ width: 400 }}>
            Valid email address
          </FormFeedback>
        </div>
      );
    } else {
      return (
        <div>
          <Input
            invalid
            type="email"
            id="email-input"
            onChange={handleEmailChange}
            style={{ borderColor: 'red' }}
          />
          <FormFeedback style={{ width: 400 }}>
            Invalid email address
          </FormFeedback>
        </div>
      );
    }
  };

  const passwordFormInput = () => {
    if (password === '') {
      return (
        <Input
          type="password"
          id="password-input"
          onChange={handlePasswordChange}
          style={{ borderColor: 'lightgrey' }}
        />
      );
    } else if (isPasswordStrong) {
      return (
        <div>
          <Input
            valid
            type="password"
            id="password-input"
            onChange={handlePasswordChange}
            style={{ borderColor: 'green' }}
          />
          <FormFeedback valid style={{ width: 400 }}>
            Strong password
          </FormFeedback>
        </div>
      );
    } else {
      return (
        <div>
          <Input
            invalid
            type="password"
            id="password-input"
            onChange={handlePasswordChange}
            style={{ borderColor: 'red' }}
          />
          <FormFeedback style={{ width: 400 }}>
            Weak password, try adding some additional characters
          </FormFeedback>
        </div>
      );
    }
  };

  return (
    <div className="sign-up-page">
      <h1>Sign up Page</h1>
      <Form>
        <FormGroup>
          {emailFormInput()}
          {passwordFormInput()}
          <Button color="primary" id="sign-up-button">
            Sign Up
          </Button>
        </FormGroup>
      </Form>

      <select
        name="nationality"
        id="nationality-input"
        onChange={handleNationalityChange}
      >
        <option value="EN">English</option>
        <option value="DE">German</option>
        <option value="FR">French</option>
      </select>
      <p>{greeting}</p>
      <p>
        Your email is <b>{email}</b>
      </p>
    </div>
  );
}

export default SignupPage;
