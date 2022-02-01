import React from "react";
import { images } from "utils/images";
import PropTypes from "prop-types";

const ImgCircleSmall = ({
  imageURL,
  alt,
  caption,
  header,
}) => {
  return (
    <>
        <div sm="6" xs="6">
          <img
            className="img-fluid rounded-circle shadow-lg"
            style={{ width: "35px" }}
            src={imageURL?imageURL:images.emptyUser}
            alt={alt?alt:""}
            caption={caption?caption:""}
            header={header?header:""}
          />
        </div>
    </>
  );
}

ImgCircleSmall.propTypes = {
  imageURL: PropTypes.string,
  alt: PropTypes.string,
  caption: PropTypes.string,
  header: PropTypes.string,
};

export default ImgCircleSmall;