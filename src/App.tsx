import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import './App.css';

interface Schema {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: number;
}

interface ErrorObject {
  massage: string;
  ref: Element;
  type: string;
}

interface Errors {
  firstName?: ErrorObject;
  lastName?: ErrorObject;
  email?: ErrorObject;
  mobileNumber?: ErrorObject;
}

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>();

  const onSubmit: SubmitHandler<Schema> = (data): void => {
    console.log(data);
  };

  const onError: SubmitErrorHandler<Schema | Errors> = (errorObject): void => {
    Object.keys(errorObject).forEach(property => {
      console.error(errorObject[property].ref);
    });
  };

  const registerOptions = {
    firstName: {
      required: 'First name is required',
      minLength: {
        value: 5,
        message: 'First name must be longer than 5 chara',
      },
      pattern: {
        value: /^[a-zA-Z]+$/,
        message: 'First name can only be letters',
      },
    },
    lastName: { required: 'Last name is required' },
    email: {
      required: 'Email is required',
      pattern: {
        value: /^\S+@\S+$/i,
        message: 'Email address must be a valid format',
      },
    },
    mobileNumber: {
      required: 'mobile number is required',
    },
  };

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <input
          type="text"
          placeholder="First name"
          {...register('firstName', registerOptions.firstName)}
        />
        {errors?.firstName && <p>{errors.firstName.message}</p>}
        <input
          type="text"
          placeholder="Last name"
          {...register('lastName', registerOptions.lastName)}
        />
        {errors?.lastName && <p>{errors.lastName.message}</p>}
        <input
          type="text"
          placeholder="Email"
          {...register('email', registerOptions.email)}
        />
        {errors?.email && <p>{errors.email.message}</p>}
        <input
          type="tel"
          placeholder="Mobile number"
          {...register('mobileNumber', registerOptions.email)}
        />
        {errors?.mobileNumber && <p>{errors.mobileNumber.message}</p>}
        <input type="submit" />
      </form>
    </main>
  );
};

export default App;
