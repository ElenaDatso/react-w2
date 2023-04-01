import React, { Component } from 'react';
import MovieCard from '../Card/Card';

class Form extends Component {
  nameRef: React.RefObject<HTMLInputElement>;
  surnameRef: React.RefObject<HTMLInputElement>;
  zipcodeRef: React.RefObject<HTMLInputElement>;
  birthdayRef: React.RefObject<HTMLInputElement>;
  deliveryDateRef: React.RefObject<HTMLInputElement>;
  countryRef: React.RefObject<HTMLInputElement>;
  stateRef: React.RefObject<HTMLInputElement>;
  consentRef: React.RefObject<HTMLInputElement>;
  presentsRef: React.RefObject<HTMLInputElement>;
  genderRef: React.RefObject<HTMLInputElement>;
  notificationRef: React.RefObject<HTMLInputElement>;
  fileRef: React.RefObject<HTMLInputElement>;
  formRef: React.RefObject<HTMLFormElement>;
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.surnameRef = React.createRef();
    this.zipcodeRef = React.createRef();
    this.birthdayRef = React.createRef();
    this.deliveryDateRef = React.createRef();
    this.countryRef = React.createRef();
    this.stateRef = React.createRef();
    this.consentRef = React.createRef();
    this.presentsRef = React.createRef();
    this.genderRef = React.createRef();
    this.notificationRef = React.createRef();
    this.fileRef = React.createRef();
    this.formRef = React.createRef();
    this.state = {
      cards: [],
      errors: {},
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      nameRef,
      surnameRef,
      zipcodeRef,
      birthdayRef,
      deliveryDateRef,
      countryRef,
      stateRef,
      consentRef,
      presentsRef,
      genderRef,
      notificationRef,
      fileRef,
    } = this;

    const name: string = (nameRef.current as HTMLInputElement).value;
    const surname = (surnameRef.current as HTMLInputElement).value;
    const zipcode = (zipcodeRef.current as HTMLInputElement).value;
    const birthday = (birthdayRef.current as HTMLInputElement).value;
    const deliveryDate = (deliveryDateRef.current as HTMLInputElement).value;
    const country = (countryRef.current as HTMLInputElement).value;
    const state = (stateRef.current as HTMLInputElement).value;
    const consent = (consentRef.current as HTMLInputElement).checked;
    const presents = (presentsRef.current as HTMLInputElement).value;
    const gender = (genderRef.current as HTMLInputElement).value;
    const notification = (notificationRef.current as HTMLInputElement).checked;
    const file = ((fileRef.current as HTMLInputElement).files as FileList)[0];

    const errors: {
      name?: string;
      surname?: string;
      zipcode?: string;
      birthday?;
      deliveryDate?: string;
      country?: string;
      state?;
      consent?;
      presents?;
      gender?;
    } = {};
    if (!name) {
      errors.name = 'Please enter your name';
    } else if (!/^[A-Z]/.test(name)) {
      errors.name = 'Name should start with an uppercase letter';
    }
    if (!surname) {
      errors.surname = 'Please enter your surname';
    } else if (!/^[A-Z]/.test(surname)) {
      errors.surname = 'Surname should start with an uppercase letter';
    }
    if (!zipcode) {
      errors.zipcode = 'Please enter your zip code';
    }
    if (!birthday) {
      errors.birthday = 'Please enter your birthday';
    }
    if (!deliveryDate) {
      errors.deliveryDate = 'Please enter delivery date';
    }
    if (!country) {
      errors.country = 'Please select a country';
    }
    if (!state) {
      errors.state = 'Please select a state';
    }
    if (!consent) {
      errors.consent = 'Please give your consent';
    }
    if (!presents) {
      errors.presents = 'Please select at least one present';
    }
    if (!gender) {
      errors.gender = 'Please select your gender';
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const data = {
        name,
        surname,
        zipcode,
        birthday,
        deliveryDate,
        country,
        state,
        consent,
        presents,
        gender,
        notification,
        file: reader.result,
      };
      this.setState(() => ({
        cards: [this.state, data],
        errors: {},
      }));
      if (this.fileRef !== null && this.formRef.current !== null) this.formRef.current.reset();
    };
  };
}
