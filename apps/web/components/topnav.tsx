import { UserButton } from "@clerk/nextjs";
import { ProfileContactsIcon, ProfileContacts } from "./profile-contacts";

export const TopNav = () => {
  return (
    <nav className="mb-3 flex w-full items-center justify-between border-b py-4 px-8 text-xl font-medium">
      <h1 className="font-mono">the residency</h1>
      <div className="flex items-center">
        <UserButton>
          <UserButton.UserProfilePage
            label="Public"
            url="contact-info"
            labelIcon={<ProfileContactsIcon />}
          >
            <ProfileContacts />
          </UserButton.UserProfilePage>
        </UserButton>
      </div>
    </nav>
  );
};
