import React from "react";
import {User} from "@nextui-org/react";

export default function Profile({name,description,image}) {
  return (
    <User   
      name={name}
      description={description}
      avatarProps={{
        src: image
      }}
    />
  );
}
