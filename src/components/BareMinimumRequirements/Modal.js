import { useState } from 'react';
import styled from 'styled-components';

export const ModalContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 border: 1px solid lightgray;
 height: 100%;
 weigth: 100%;
 position: relative;
`;

export const ModalBackdrop = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  /*스크롤이 되도 모달창이 고정 되도록 position:fixed*/
  position: fixed;
  bottom: 0;
  /* 자식 컴포넌트인 모달창을 가운데 오게 하기 위해 flex설정*/
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBtn = styled.button`
  background-color: var(--coz-purple-600);
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs((props) => ({
  role: "dialog"
}))`

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 1000px;
  height: 500px;
  border-radius: 1rem;
  background-color: white;
  > .close-btn {
    position: absolute;
    top: 10px;
    cursor: pointer;
  }
`;

let text = "Open Modal";

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>
          {isOpen == true ? text = "Opened" : text = "Open Modal"}
        </ModalBtn>
        {isOpen ? (
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView>
              <div className="close-btn">&times;</div>모달모달
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};
