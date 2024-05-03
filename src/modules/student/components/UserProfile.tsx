import { useQueryClient } from "@tanstack/react-query";
import { IUser } from "../types/user";

function UserProfile() {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["user"]) as IUser;
  return (
    <div className=" flex items-center gap-4 p-1">
      <img
        src={user?.photo?.path || "/users/default-user-image.webp"}
        alt="user image"
        className="w-24 h-24 rounded-full"
      />
      <div>
        <p>
          {user?.firstName} {user?.lastName}
        </p>
        <p>{user?.title || "Student"}</p>
      </div>
    </div>
  );
}

export default UserProfile;
