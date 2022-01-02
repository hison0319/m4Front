/*
작성자 : 손한이
작성일 : 2021.10.31
내용 :  프로필의 이미지 Input과 이미지 미리보기 (기능, 뷰)
*/
import React from "react";
import {
    Row,
    Col,
    InputGroup,
    InputGroupAddon,
    CustomInput,
} from "reactstrap";
import ProfileImage from "components/common/imagebox/ProfileImage";
import PropTypes from "prop-types";

const ProfileImageInput = ({
    setImgFile,
    previewURL,
    setPreviewURL,
}) => {
    const handleFileOnChange = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        const imgFile = e.target.files[0];
        reader.onloadend = () => {
            setImgFile(imgFile);
            setPreviewURL(reader.result);
        }
        reader.readAsDataURL(imgFile);
    }
    const imagePreview = <ProfileImage imageURL={previewURL}/>

    return (
        <>
            <Row className="px-2">
                <Col>
                    <Row>
                        <Col className="my-4 pb-2">
                        {imagePreview}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-4" xs="12">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                            </InputGroupAddon>
                            <CustomInput
                            type="file"
                            id="image"
                            name="image"
                            accept='image/jpg,impge/png,image/jpeg,image/gif'
                            onChange={handleFileOnChange}
                            label="사진 업로드"/>
                        </InputGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
};

ProfileImageInput.prototype={
    imgFile: PropTypes.object,
    previewURL: PropTypes.string,
    setPreviewURL: PropTypes.func,
};

export default ProfileImageInput;