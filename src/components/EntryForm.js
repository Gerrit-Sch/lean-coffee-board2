import styled from 'styled-components';

import ScreenReaderOnly from './ScreenReaderOnly.js';

export default function EntryForm({ onSubmit }) {
  return (
    <Form onSubmit={handleSubmit} aria-labelledby="entry-form-name">
      <label htmlFor="text">
        <ScreenReaderOnly>Entry text</ScreenReaderOnly>
      </label>
      <Input
        name="text"
        id="text"
        placeholder="Just some text ..."
        type="text"
      />
      <PlusButton aria-hidden="true" id="entry-form-name">
        <ScreenReaderOnly>Create new entry</ScreenReaderOnly>
        <svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="30px"
          height="30px"
        >
          <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z" />
        </svg>
      </PlusButton>
    </Form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputElement = form.elements.text;

    onSubmit(inputElement.value);
    form.reset();
  }
}

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  

  input {
    width: 100%;
    margin-right: 20px;b
  }
`;

const PlusButton = styled.button`
  border-radius: 50%;
  line-height: 0;
  width: 28px;
  height: 28px;
  border: none;
  padding: 0;
  background-color: transparent;
`;

const Input = styled.input`
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  outline: none;

  :hover {
    border-bottom: 2px solid black;
  }
`;
