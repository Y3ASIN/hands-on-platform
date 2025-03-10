export const navLinks = [
  { path: "/dashboard/profile", label: "Profile" },
  { path: "/dashboard/events", label: "Events" },
];

export const getInitials = (name) => {
  return name.slice(0, 2);
};
