import React from "react";
import { images } from "utils/images";
import PropTypes from "prop-types";

const ImgSquredSmall = ({
  imageURL,
  alt,
  caption,
  header,
}) => {
  return (
    <>
        <div sm="6" xs="6">
          <img
            className="img-fluid"
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

ImgSquredSmall.propTypes = {
  imageURL: PropTypes.string,
  alt: PropTypes.string,
  caption: PropTypes.string,
  header: PropTypes.string,
};

export default ImgSquredSmall;