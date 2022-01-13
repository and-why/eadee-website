import { serverURL } from '../../config';
import { useState } from 'react';
import ErrorMessage from '../ErrorMessage';
import { Button } from '../styled-components/Button';
import { Form } from '../styled-components/Forms';
import useForm from '../useForm';
import styled from 'styled-components';

export default function ContactForm() {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState();
  const [isSuccess, setSuccess] = useState(false);
  const { inputs, handleChange, clearForm, resetForm } = useForm({ name: '', email: '', body: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { name: inputs.name, email: inputs.email, body: inputs.body };

    const res = await fetch(`${serverURL}/requests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.status === 200) {
      await res.json();
      setLoading(false);
      setSuccess(true);
    } else {
      setLoading(false);
      setError(res.error);
    }
    setLoading(false);
  };
  if (inputs) {
    return (
      <Form onSubmit={handleSubmit}>
        {!isSuccess ? (
          <>
            <div className='formInner'>
              <h2>Contact us</h2>
              <fieldset>
                <label htmlFor='name'>Name</label>
                <input
                  required
                  name='name'
                  value={inputs.name}
                  placeholder='Enter your name'
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset>
                <label htmlFor='email'>Email</label>
                <input
                  required
                  name='email'
                  type='email'
                  value={inputs.email}
                  placeholder='Enter your email'
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset>
                <label htmlFor='body'>Message</label>
                <textarea
                  required
                  name='body'
                  value={inputs.body}
                  placeholder='Enter your message'
                  onChange={handleChange}
                />
              </fieldset>
              <ErrorMessage error={isError} />
            </div>
            <footer>
              <p>Are you happy with this information?</p>
              <Button primary type='submit' disabled={isLoading}>
                Submit form
              </Button>
            </footer>
          </>
        ) : (
          <SuccessMessage className='formsuccess'>
            <h2>Success!</h2>
            <p>Form Sent Successfully. Send another?</p>
            <Button onClick={() => setSuccess(false)}>Reset Form</Button>
          </SuccessMessage>
        )}
      </Form>
    );
  }

  return <p>Loading</p>;
}

const SuccessMessage = styled.div`
  padding: var(--l);
  p {
    margin-bottom: var(--l);
  }
`;
