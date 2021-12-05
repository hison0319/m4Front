/*
작성자 : 손한이
작성일 : 2021.12.05
내용 :  board detailView (뷰)
*/
import React from 'react';
import {
    Row,
    Col,
    Button
} from 'reactstrap';
import ImgBox from 'components/common/imagebox/ImgBox';
const BoardDetail = ({
    imageItemList,
    shopName,
    context,
    snsList,
}) => {
    return (
        <>
            <Row>
                <Col>
                    <Row className="py-1 my-1 px-4">
                        <Col className="py-1 my-1">
                            <ImgBox
                            item={imageItemList}/>
                            <br></br>
                            <span className="d-block pb-4 h2 text-dark border-bottom border-gray">{shopName}</span>

                            <article className="py-4 text-secondary text-justify" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
                                {context}
                            </article>
                            {snsList && snsList.map((sns, idx) => 
                              <Button
                                key={"sns"+idx}
                                className="my-1 text-center width_100"
                                color="neutral"
                                href={sns}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <small className="text-secondary">{sns}</small>
                              </Button>
                            )}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default BoardDetail;