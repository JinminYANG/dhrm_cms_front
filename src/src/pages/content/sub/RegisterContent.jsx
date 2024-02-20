import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";

const RegisterContent = ({
                           id = undefined,
                           modalOption
                         }) => {

  const [contentInfo, setContentInfo] = useState({
    title: '',  // 전시명
    status: 'on', // 전시여부
    location: '', // 전시위치
    type: 'image',  // 전시유형
    writer: '', // 작성자
    startDate: '',  // 전시시작일
    endDate: '',  // 전시종료일
    content: '',  // 전시내용
    thumbnail: '',  // 썸네일
    file: '',  // 파일
    template: '', // 템플릿
    repeat: false,  // 반복여부
    repeatType: '',  // 반복주기,
    description: '',  // 설명
  });

  const onChangeContentInfo = (e) => {
    const {name, value} = e.target;
    setContentInfo((prev) => {
      return {...prev, [name]: value};
    });
  };

  useEffect(() => {
    console.log(contentInfo);
  }, [contentInfo]);

  // 저장 기능 추가 예정
  /*const onSubmit = (e) => {
    fetch('http://localhost:8080/api/content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contentInfo)
    })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  };*/


  return (
      <>
        <Form>
          <Row>
            <Col md={8}>
              <Form.Group className="mb-3" controlId="contentTitle">
                <Form.Label>전시명</Form.Label>
                <Form.Control type="text" placeholder="전시명을 입력하세요."
                              name={"title"}
                              value={contentInfo.title}
                              onChange={onChangeContentInfo}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="contentStatus">
                <Form.Label>전시여부</Form.Label>
                <Form.Select
                    name={"status"}
                    value={contentInfo.status}
                    onChange={onChangeContentInfo}
                >
                  <option value={"on"}>ON</option>
                  <option value={"off"}>OFF</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={8}>
              <Form.Group className="mb-3" controlId="contentLocation">
                <Form.Label>전시위치</Form.Label>
                <Form.Select
                    name={"location"}
                    value={contentInfo.location}
                    onChange={onChangeContentInfo}
                >
                  <option value={"1-a-1"}>제 1전시관 A-1</option>
                  <option value={"1-a-2"}>제 1전시관 A-2</option>
                  <option value={"1-a-3"}>제 1전시관 A-3</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="contentType">
                <Form.Label>전시유형</Form.Label>
                <Form.Select
                    name={"type"}
                    value={contentInfo.type}
                    onChange={onChangeContentInfo}
                >
                  <option value={"image"}>이미지</option>
                  <option value={"video"}>동영상</option>
                  <option value={"vr"}>VR 파노라마</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3" controlId="contentTemplate">
                <Form.Label>템플릿</Form.Label>
                {
                  contentInfo.type === 'image' ?
                      <div className={"template-image"}>
                        <Form.Check
                            inline
                            type="radio"
                            id="image"
                        >
                          <Form.Check.Input
                              type={"radio"}
                              name={"template"}
                              value={"image"}
                              onChange={onChangeContentInfo}
                          />
                          <Form.Check.Label className={"align-middle"}>
                            이미지
                          </Form.Check.Label>
                        </Form.Check>
                        <Form.Check
                            inline
                            type="radio"
                            id="imageAndText"
                        >
                          <Form.Check.Input
                              type={"radio"}
                              name={"template"}
                              value={"imageAndText"}
                              onChange={onChangeContentInfo}
                          />
                          <Form.Check.Label className={"align-middle"}>
                            이미지 + 텍스트
                          </Form.Check.Label>
                        </Form.Check>
                        <Form.Check
                            inline
                            type="radio"
                            id="textAndImage"
                        >
                          <Form.Check.Input
                              type={"radio"}
                              name={"template"}
                              value={"textAndImage"}
                              onChange={onChangeContentInfo}
                          />
                          <Form.Check.Label className={"align-middle"}>
                            텍스트 + 이미지
                          </Form.Check.Label>
                        </Form.Check>
                      </div>
                      :
                      contentInfo.type === 'video' ?
                          <div className={"template-video"}>
                            <Form.Check
                                inline
                                type="radio"
                                id="video"
                            >
                              <Form.Check.Input
                                  type={"radio"}
                                  name={"template"}
                                  value={"video"}
                                  onChange={onChangeContentInfo}
                              />
                              <Form.Check.Label className={"align-middle"}>
                                동영상
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check
                                inline
                                type="radio"
                                id="videoAndText"
                            >
                              <Form.Check.Input
                                  type={"radio"}
                                  name={"template"}
                                  value={"videoAndText"}
                                  onChange={onChangeContentInfo}
                              />
                              <Form.Check.Label className={"align-middle"}>
                                동영상 + 텍스트
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check
                                inline
                                type="radio"
                                id="textAndVideo"
                            >
                              <Form.Check.Input
                                  type={"radio"}
                                  name={"template"}
                                  value={"textAndVideo"}
                                  onChange={onChangeContentInfo}
                              />
                              <Form.Check.Label className={"align-middle"}>
                                텍스트 + 동영상
                              </Form.Check.Label>
                            </Form.Check>
                          </div>
                          :
                          <div className={"template-vr"}>
                            <Form.Check
                                inline
                                type="radio"
                                id="vr"
                            >
                              <Form.Check.Input
                                  type={"radio"}
                                  name={"template"}
                                  value={"vr"}
                                  onChange={onChangeContentInfo}
                              />
                              <Form.Check.Label className={"align-middle"}>
                                VR
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check
                                inline
                                type="radio"
                                id="vrAndText"
                            >
                              <Form.Check.Input
                                  type={"radio"}
                                  name={"template"}
                                  value={"vrAndText"}
                                  onChange={onChangeContentInfo}
                              />
                              <Form.Check.Label className={"align-middle"}>
                                VR + 텍스트
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check
                                inline
                                type="radio"
                                id="textAndVR"
                            >
                              <Form.Check.Input
                                  type={"radio"}
                                  name={"template"}
                                  value={"textAndVR"}
                                  onChange={onChangeContentInfo}
                              />
                              <Form.Check.Label className={"align-middle"}>
                                텍스트 + VR
                              </Form.Check.Label>
                            </Form.Check>
                          </div>
                }

              </Form.Group>
            </Col>
            {
              contentInfo.type === 'image' ?
                  <>
                    <Col md={8}>
                      <Form.Group className="mb-3" controlId="contentImage">
                        <Form.Label>이미지</Form.Label>
                        <Form.Control type="file" accept="image/*"
                                      name={"image"}
                                      onChange={onChangeContentInfo}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3" controlId="contentImageResolution">
                        <Form.Label>해상도</Form.Label>
                        <Form.Select
                            name={"imageResolution"}
                            value={contentInfo.imageResolution}
                            onChange={onChangeContentInfo}
                        >
                          <option value={"1920x1080"}>1920 X 1080</option>
                          <option value={"1080x1920"}>1080 X 1920</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </>
                  :
                  contentInfo.type === 'video' ?
                      <Col md={12}>
                        <Form.Group className="mb-3" controlId="contentVideo">
                          <Form.Label>동영상</Form.Label>
                          <Form.Control type="file" accept={"video/*"}
                                        name={"video"}
                                        onChange={onChangeContentInfo}
                          />
                        </Form.Group>
                      </Col>
                      :
                      <Col md={12}>
                        <Form.Group className="mb-3" controlId="contentVR">
                          <Form.Label>VR</Form.Label>
                          <Form.Control type="file" accept={"*"}
                                        name={"vr"}
                                        onChange={onChangeContentInfo}
                          />
                        </Form.Group>
                      </Col>
            }
            <Col md={12}>
              <Form.Group className="mb-3" controlId="contentDescription">
                <Form.Label>텍스트</Form.Label>
                <Form.Control as="textarea" rows={3}
                              name={"description"}
                              value={contentInfo.description}
                              onChange={onChangeContentInfo}
                />
              </Form.Group>
            </Col>

            {/*
            <Col md={12}>
              <Form.Group className="mb-3" controlId="contentWriter">
                <Form.Label>작성자</Form.Label>
                <Form.Control type="text" placeholder="작성자를 입력하세요."/>
              </Form.Group>
            </Col>
            */}

            <Col md={6}>
              <Form.Group className="mb-3" controlId="contentDate">
                <Form.Label>전시 스케줄</Form.Label>
                <Row>
                  <Col md={5}>
                    <Form.Control type="date"
                                  name={"startDate"}
                                  value={contentInfo.startDate}
                                  onChange={onChangeContentInfo}
                    />
                  </Col>
                  <Col md={2} className="text-center align-middle">
                    ~
                  </Col>
                  <Col md={5}>
                    <Form.Control type="date"
                                  name={"endDate"}
                                  value={contentInfo.endDate}
                                  onChange={onChangeContentInfo}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={3}>
                  {/*  스케줄 반복 on/off */}
                  <Form.Group className="mb-3" controlId="contentRepeat">
                    <Form.Label>스케줄 반복</Form.Label>
                    <Form.Check
                        type="switch"
                        id="contentRepeat"
                        className={""}
                        // label="스케줄 반복"
                        name={"repeat"}
                        checked={contentInfo.repeat}
                        onChange={(e) => {
                          onChangeContentInfo(e);
                          setContentInfo({
                            ...contentInfo,
                            repeat: e.target.checked
                          });
                        }}
                    />
                  </Form.Group>
                </Col>
                {contentInfo.repeat &&
                    <>
                      <Col md={3}>
                        <Form.Group className="mb-3" controlId="contentRepeatType">
                          <Form.Label>반복 주기</Form.Label>
                          <Form.Select
                              name={"repeatType"}
                              value={contentInfo.repeatType}
                              onChange={onChangeContentInfo}
                          >
                            <option value={"day"}>매일</option>
                            <option value={"week"}>매주</option>
                            <option value={"month"}>매월</option>
                            <option value={"year"}>매년</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Row>
                          <Col md={5}>
                            <Form.Group className="mb-3" controlId="contentRepeatStartDate">
                              <Form.Label>시작일</Form.Label>
                              <Form.Control type="text"
                                            name={"repeatStartDate"}
                                            value={contentInfo.repeatStartDate}
                                            onChange={onChangeContentInfo}
                              />
                            </Form.Group>
                          </Col>
                          <Col md={2}>
                            ~
                          </Col>
                          <Col md={5}>
                            <Form.Group className="mb-3" controlId="contentRepeatEndDate">
                              <Form.Label>종료일</Form.Label>
                              <Form.Control type="text"
                                            name={"repeatEndDate"}
                                            value={contentInfo.repeatEndDate}
                                            onChange={onChangeContentInfo}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                      </Col>
                    </>
                }
              </Row>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col md={12} className={"text-center my-2"}>
              <Button
                  variant="secondary"
                  onClick={() => {
                    setContentInfo({
                      type: "image",
                      title: "",
                      image: "",
                      imageResolution: "1920x1080",
                      description: "",
                      startDate: "",
                      endDate: "",
                      repeat: false,
                      repeatType: "day",
                      repeatStartDate: "",
                      repeatEndDate: ""
                    });
                    modalOption.cancel();
                  }}
              >
                취소
              </Button>
              <Button variant="primary"
                      onClick={() => {
                      }}
                      className={"ms-3"}
              >
                저장
              </Button>
            </Col>
          </Row>
        </Form>
      </>
  );
};

export default RegisterContent;
