import { useForm } from 'react-hook-form';


const reactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('name', { required: 'Name is required' })} />
            {errors.name && <span>{errors.name.message}</span>}
            <input type="email" {...register('email', { required: 'Email is required' })} />
            {errors.email && <span>{errors.email.message}</span>}
            <button type="submit">Submit</button>
        </form>
    );
};     

export default reactForm; 