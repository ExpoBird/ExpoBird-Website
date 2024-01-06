"use client";

import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "../../../lib/api";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

const Contact = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };
  return (
    <div className="max-w-[450px] mt-3 mx-auto">
      <p className="text-[32px] text-center font-semibold">Contact Form</p>
      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}

      <div isInvalid={touched.name && !values.name} mb={5}>
        
        {/* <FormLabel>Name</FormLabel> */}
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          errorBorderColor="red.300"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
          className="w-full border-gray-500 border-2 rounded-md p-1"
          required
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </div>

      <div isInvalid={touched.email && !values.email} mb={5}>
        <label>Email</label>
        {/* <FormLabel>Email</FormLabel> */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          errorBorderColor="red.300"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
          className="w-full border-gray-500 border-2 rounded-md p-1"
          required
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </div>

      <div
        mb={5}
        isInvalid={touched.subject && !values.subject}
      >
        <label>Subject</label>
        {/* <FormLabel>Subject</FormLabel> */}
        <input
          type="text"
          name="subject"
          placeholder="Your Subject"
          errorBorderColor="red.300"
          value={values.subject}
          onChange={handleChange}
          onBlur={onBlur}
          className="w-full border-gray-500 border-2 rounded-md p-1"
          required
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </div>

      <div
        isInvalid={touched.message && !values.message}
        mb={5}
      >
        <label>Message</label>
        <Textarea
          type="text"
          name="message"
          rows={4}
          placeholder="Your Message"
          errorBorderColor="red.300"
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
          className="w-full border-gray-500 border-2 rounded-md p-1"
          required
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </div>

      <button
        className="px-6 py-2 text-md rounded-full border-2 border-gray-500 font-semibold"
        variant="outline"
        colorScheme="blue"
        isLoading={isLoading}
        disabled={
          !values.name || !values.email || !values.subject || !values.message
        }
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Contact;
