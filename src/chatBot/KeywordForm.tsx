import React, { useState } from 'react';
import axios from 'axios';
import './styles/KeywordForm.module.scss';
import styles from './styles/KeywordForm.module.scss';

function KeywordForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    number: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submittingError, setSubmittingError] = useState('');

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('https://avocad-chat-back.onrender.com/add', formData)
      .then(response => {
        console.log(response.data);
        setFormData({ email: '', name: '', number: '' });
        setSubmitted(true);
      })
      .catch(error => {
        console.error('Error sending data:', error);
        setSubmittingError(
          'An error occurred while sending data. Please reshape.'
        );
      });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.logoContainer}>Contactez-nous</div>

      {!submitted ? (
        <form className={styles.formAll} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='Courriel'
              required
              onChange={handleChange}
              value={formData.email}
              className={styles.formInput}
            />
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Nom'
              required
              onChange={handleChange}
              value={formData.name}
              className={styles.formInput}
            />
            <input
              type='text'
              id='number'
              name='number'
              placeholder='Téléphone'
              required
              onChange={handleChange}
              value={formData.number}
              className={styles.formInput}
            />
          </div>
          <button className={styles.formSubmitBtn} type='submit'>
            Envoyer
          </button>
        </form>
      ) : (
        <p className={styles.successMessage}>
          Vous avez envoyé le courrier avec succès.
        </p>
      )}

      {submittingError && (
        <div className={styles.errorMessage}>{submittingError}</div>
      )}
    </div>
  );
}

export default KeywordForm;
