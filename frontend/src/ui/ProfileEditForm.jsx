import React from "react";
import { useForm } from "react-hook-form";

const ProfileEditForm = ({ user, onSave }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: user,
  });

  const onSubmit = (data) => {
    onSave(data);
  };

  return (
    <div className="rounded-md p-4 shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <input
            {...register("fullName")}
            className="input-field w-full rounded border p-2"
          />
        </div>

        <div>
          <input
            {...register("email")}
            className="input-field w-full rounded border p-2"
            type="email"
          />
        </div>

        <div>
          <input
            {...register("causes")}
            className="input-field w-full rounded border p-2"
          />
        </div>

        <div>
          <input
            {...register("skills")}
            className="input-field w-full rounded border p-2"
          />
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-accent rounded px-4 py-2 text-white"
          >
            Save
          </button>
          <button
            type="button"
            className="rounded bg-gray-500 px-4 py-2 text-white"
            onClick={() => onSave(user)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditForm;
