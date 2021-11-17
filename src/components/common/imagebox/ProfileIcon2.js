import React from "react";
import { images } from "utils/images";

function ProfileIcon2() {
  return (
    <>
        <div  sm="6" xs="6">
          <img
            alt="..."
            className="img-fluid rounded-circle shadow-lg"
            src={images.imgTest1}
            style={{ width: "40px" }}
          />
        </div>
    </>
  );
}

export default ProfileIcon2;