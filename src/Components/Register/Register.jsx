import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Use YUP For Validation
const schema = yup
  .object({
    name: yup
      .string()
      .required("Name is Required")
      .min(3, "Min Length is 3")
      .max(10, "Max Length is 10"),

    email: yup.string().required("Email is Required"),
  })
  .required();

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-75 py-4 mx-auto">
      <h2>Register Now</h2>
      <form className="my-4" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" className="mb-2">
          User Name
        </label>
        <input
          {...register("userName")}
          type="text"
          className="form-control mb-3"
          name="name"
          placeholder="Enter Your Name"
          id="name"
        />

        <p className="bg-danger">{errors.userName?.message}</p>

        <label htmlFor="email" className="mb-2">
          User Email
        </label>
        <input
          {...register("userEmail")}
          type="text"
          className="form-control mb-3"
          name="email"
          placeholder="Enter Your E-mail"
          id="email"
        />

        <p className="bg-danger" role="alert">
          {errors.userEmail?.message}
        </p>

        <select className="m-3" {...register("country")}>
          <option value="egypt">Egypt</option>
          <option value="usa">U.S.A</option>
          <option value="german">German</option>
        </select>
        <div className="gender m-3 p-3">
          <input
            {...register("gender")}
            type="radio"
            name="gender"
            value="male"
          />{" "}
          Male
          <input
            {...register("gender")}
            type="radio"
            name="gender"
            value="female"
          />{" "}
          Female
        </div>
        <input
          className="d-block mx-auto m-5 btn btn-outline-success"
          type="submit"
          onClick={() => {
            console.log("Done");
          }}
        />
      </form>
    </div>
  );
}
