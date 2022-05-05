import { useForm } from 'react-hook-form';
import './App.css';

const App = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: object): void => {
    console.log(data);
  };

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First name"
          {...register('First name', {
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        <input
          type="text"
          placeholder="Last name"
          {...register('Last name', {
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register('Mobile number', { required: true, maxLength: 13 })}
        />
        <input type="submit" />
      </form>
    </main>
  );
};

export default App;
