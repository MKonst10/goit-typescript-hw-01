export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type descriptions = Record<UserRole, string>;

const RoleDescription: descriptions = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
