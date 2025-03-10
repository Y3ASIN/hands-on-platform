import React, { useState } from "react";

import ProfileLeft from "./ProfileLeft";
import ProfileRight from "./ProfileRight";

const ProfilePage = () => {
  const [user, setUser] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    causes: ["Hiking", "Traveling", "Reading"],
  });

  const handleSave = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <div className="flex gap-4 p-4 mt-10">
      <div className="w-1/4">
        <ProfileLeft user={user} onSave={handleSave} />
      </div>
      <div className="w-3/4 border rounded-lg p-4">
        <ProfileRight />
      </div>
    </div>
  );
};

export default ProfilePage;
