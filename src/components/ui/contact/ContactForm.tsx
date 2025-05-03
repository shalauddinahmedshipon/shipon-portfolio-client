/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/contacts/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message || 'Something went wrong');

      toast.success('Message sent successfully!');
      reset();
    } catch (error: any) {
      toast.error(error.message || 'Failed to send message.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white/5 backdrop-blur-md p-6 rounded-lg shadow-md"
    >
      <input
        type="text"
        placeholder="Your Name"
        {...register('name', { required: 'Name is required' })}
        className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {errors.name && <p className="text-sm text-red-400">{errors.name.message}</p>}

      <input
        type="email"
        placeholder="Your Email"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid email address',
          },
        })}
        className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}

      <textarea
        placeholder="Your Message"
        rows={4}
        {...register('message', { required: 'Message is required' })}
        className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {errors.message && <p className="text-sm text-red-400">{errors.message.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-gray-600 text-white py-2 px-6 rounded hover:bg-opacity-90 transition disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
