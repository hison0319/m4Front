import React from "react";
import { images } from "utils/images";

function ProfileIcon() {
  return (
    <>
        <div  sm="6" xs="6">
          <img
            alt="..."
            className="img-fluid rounded-circle shadow-lg"
            src={images.imgTestProfile}
            style={{ width: "40px" }}
          />
        </div>
    </>
  );
}

export default ProfileIcon;