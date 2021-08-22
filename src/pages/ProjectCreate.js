import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components/macro';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SelectMenu from 'components/SelectMenu';
import DatePicker from 'components/DatePicker';

const ProjectCreate = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');
  const [oneline, setOneline] = useState('');
  const [file, setFile] = useState('');
  const [url, setUrl] = useState(
    'https://cdn-cziplee-estore.azureedge.net//cache/no_image_uploaded-253x190.png',
  );
  const [intent, setIntent] = useState('');
  const [details, setDetails] = useState('');

  const handleThumbnailChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setUrl(reader.result);
      console.log(reader.result);
    };
    if (file && file.type.match('image.*')) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    console.log(url, typeof url);
    const data = {
      user: 1,
      name: title,
      category,
      end_date: date,
      price: +price,
      comment: oneline,
      intent,
      details,
      counted_user_num: 0,
      target_amount: 200000,
      target_count: 60,
      matched: false,
      liked: 100,
    };
    axios
      .post('http://127.0.0.1:8000/projects/', data)
      .then(function (response) {
        console.log(response);
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <>
      <img alt="banner" src={'/images/top-banner.jpg'} />
      <Container>
        <Title>프로젝트 제안하기</Title>
        <FlexDiv>
          <Item>
            <label htmlFor="title">프로젝트 제목</label>
            <TitleInput
              id="title"
              type="text"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Item>
        </FlexDiv>
        <FlexDiv>
          <Item>
            <label htmlFor="thumbnail">프로젝트 썸네일</label>
            <input
              id="thumbnail"
              type="file"
              accept="image/jpg,impge/png,image/jpeg,image/gif"
              onChange={handleThumbnailChange}
            />
            <ThumbnailInput alt="profile_preview" src={url} />
          </Item>
          <ProjectInfo>
            <Item>
              <label>카테고리</label>
              <SelectMenu value={category} setValue={setCategory} />
            </Item>
            <Item>
              <label>마감 날짜</label>
              <DatePicker value={date} setValue={setDate} />
            </Item>
            <Item>
              <label>희망 가격대</label>
              <TextField
                id="price"
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">₩</InputAdornment>
                  ),
                }}
                style={{ width: '200px' }}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Item>
            <Item>
              <label>기업에게 한 마디</label>
              <TextField
                id="price"
                type="text"
                variant="outlined"
                color="C4C4C4"
                value={oneline}
                onChange={(e) => {
                  setOneline(e.target.value);
                }}
              />
            </Item>
          </ProjectInfo>
        </FlexDiv>
        <Section>
          <SubTitle>제안의도</SubTitle>
          <LargeTextInput
            id="price"
            type="textfield"
            variant="outlined"
            color="C4C4C4"
            value={intent}
            onChange={(e) => {
              setIntent(e.target.value);
            }}
          />
        </Section>
        <Section>
          <SubTitle>프로젝트 상세 설명</SubTitle>
          <LargeTextInput
            id="price"
            type="textfield"
            variant="outlined"
            color="C4C4C4"
            height="500px"
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />
        </Section>
        <Button onClick={handleSubmit}>프로젝트 등록하기</Button>
      </Container>
    </>
  );
};

export default ProjectCreate;

const Container = styled.div`
  width: 80vw;
  margin: 30px auto;
  p {
    font-size: 16px;
    line-height: 25px;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-bottom: 15px;
  label {
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 7.5px;
  }
`;

const TitleInput = styled.input`
  width: 800px;
  font-family: 'GmarketSansBold', sans-serif;
  font-size: 20px;
  padding: 5px 10px;
  border: none;
  border-bottom: 1px solid #c4c4c4;
  :focus {
    outline: none;
  }
`;

const Title = styled.h2`
  font-family: 'GmarketSansBold', sans-serif;
  font-size: 24px;
  margin: 20px 30px 40px 0;
`;

const SubTitle = styled.h2`
  font-family: 'GmarketSansBold', sans-serif;
  font-size: 20px;
  margin: 20px 30px 20px 0;
`;

const ThumbnailInput = styled.img`
  width: 350px;
  height: 350px;
  object-fit: contain;
  border: solid 1px #c4c4c4;
  border-radius: 7px;
`;

const ProjectInfo = styled.div`
  padding: 40px 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 25px;
    b {
      font-size: 24px;
      color: #6432b7;
    }
    span {
      font-family: 'GmarketSansBold', sans-serif;
      font-weight: 900;
      margin-right: 20px;
    }
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  font-family: 'GmarketSansBold', sans-serif;
  font-size: 20px;
  background-color: #ffd600;
  border-radius: 10px;
`;

const Section = styled.section`
  margin: 40px 0;
`;

const LargeTextInput = styled.textarea`
  width: 80vw;
  min-height: 200px;
  padding: 20px;
`;
