import React from "react";
import { images } from "utils/images";
import PropTypes from "prop-types";

const ProfileImage = ({
  imageURL,
  alt,
  caption,
  header,
}) => {
  return (
    <>
      <div className="text-center">
        <div className="imgbox-big display-inline">
          <img
            className="profile-img rounded-circle shadow-lg"
            src={imageURL?imageURL:images.emptyUser}
            alt={alt?alt:""}
            caption={caption?caption:""}
            header={header?header:""}
          />
        </div>
      </div>
    </>
  );
}

ProfileImage.propTypes = {
  imageURL: PropTypes.string,
  alt: PropTypes.string,
  caption: PropTypes.string,
  header: PropTypes.string,
};

export default ProfileImage;
