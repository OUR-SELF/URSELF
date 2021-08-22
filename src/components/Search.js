import React from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

const Search = () => {
  return (
    <Wrapper>
      <SearchIcon size={20} />
      <Input type="text" placeholder="Search..." />
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  position: relative;
`;

const SearchIcon = styled(BsSearch)`
  position: absolute;
  left: 25px;
  top: 20px;
`;

const Input = styled.input`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  padding: 5px 7px 5px 45px;
  margin: 10px;
  width: 300px;
  height: 40px;
  border: 1px solid #c4c4c4;
  border-radius: 20px;
  :focus {
    outline: none;
  }
`;
