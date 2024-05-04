import React from "react";
import { useActiveUser } from "nostr-hooks";
import { TextInput, View } from "react-native";

const Profile = () => {
  const { activeUser } = useActiveUser();
  if (!activeUser?.profile?.name) {
    return <View>Loading...</View>;
  }

  return (
    <View>
      <TextInput value={activeUser.profile.name} />
    </View>
  );
};

export default Profile;
