import React, { useState } from "react";
import { HiOutlineEnvelope } from "react-icons/hi2";

const ProfileLeft = ({ user, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedUser);
    setIsEditing(false);
  };

  return (
    <div className="font-poppins">
      <div className="flex flex-col gap-3">
        {/* Profile Image */}
        <div className="flex items-center justify-center gap-2">
          <img
            src="#"
            alt="Profile"
            className="h-32 w-32 rounded-full border"
          />
        </div>

        {/* Profile Information - Editable */}
        <div className="flex flex-col items-center">
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-2">
              {/* Full Name Input */}
              <input
                type="text"
                name="fullName"
                value={editedUser.fullName}
                onChange={handleChange}
                className="w-full rounded border p-2"
              />

              {/* Causes Input */}
              <input
                type="text"
                name="causes"
                value={editedUser.causes.join(", ")}
                onChange={(e) =>
                  setEditedUser({
                    ...editedUser,
                    causes: e.target.value.split(", "),
                  })
                }
                className="w-full rounded border p-2"
              />

              {/* Email Input */}
              <div className="flex items-center gap-2">
                <HiOutlineEnvelope className="size-6" />
                <input
                  type="email"
                  name="email"
                  value={editedUser.email}
                  onChange={handleChange}
                  className="w-full rounded border px-2 py-1"
                />
              </div>

              {/* Save & Cancel Buttons */}
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-accent/20 border-accent text-accent rounded border px-4 py-2"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="rounded bg-gray-500 px-4 py-2 text-white"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <h2 className="text-2xl font-bold">{user.fullName}</h2>
              <p>{user.causes.join(" | ")}</p>
              <p className="mt-2 inline-flex items-center gap-2">
                <HiOutlineEnvelope className="size-6" />
                <span>{user.email}</span>
              </p>
            </>
          )}
        </div>
      </div>

      {/* Edit Button */}
      <div className="mt-4">
        {!isEditing && (
          <button
            className="bg-accent/20 border-accent w-full text-accent rounded-md border px-4 py-2"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileLeft;
