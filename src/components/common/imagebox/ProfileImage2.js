import React from "react";
import { images } from "utils/images";

function ProfileImage2() {
  return (
    <>
      <div className="text-center">
        <div className="imgbox-big display-inline">
          <img
            alt="..."
            className="profile-img rounded-circle shadow-lg"
            src={images.imgTest1}
          />
        </div>
      </div>
    </>
  );
}

export default ProfileImage2;
