import { User } from "../types/user";
import UserModel from "../models/user";

export async function addUser(user: User) {
  try {
    const model = new UserModel(user);
    await model.save();
    return { success: true, message: "User added successfully" };
  } catch (error) {
    return { success: false, message: "Error adding user", error };
  }
}

export async function getUser(userId: string) {
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return { success: false, message: "User not found" };
    }
    return { success: true, user };
  } catch (error) {
    return { success: false, message: "Error fetching user", error };
  }
}

export async function deleteUser(userId: string) {
  try {
    const user = await UserModel.findByIdAndDelete(userId);
    if (!user) {
      return { success: false, message: "User not found" };
    }
    return { success: true, message: "User deleted successfully" };
  } catch (error) {
    return { success: false, message: "Error deleting user", error };
  }
}

export async function updateUser(
  userId: string,
  updatedUserData: Partial<User>
) {
  try {
    const user = await UserModel.findByIdAndUpdate(userId, updatedUserData, {
      new: true,
    });
    if (!user) {
      return { success: false, message: "User not found" };
    }
    return { success: true, message: "User updated successfully", user };
  } catch (error) {
    return { success: false, message: "Error updating user", error };
  }
}
