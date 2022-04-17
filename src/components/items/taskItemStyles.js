import styled from "styled-components";

export const TaskItemContainer = styled.div`
  width: 560px;
  margin: 30px 3px 30px -20px;
  background-color: #dbc1e1;
  border-radius: 12px;
  display: flex;
  flex-direction: column;

  @media (max-width: 780px) {
    width: 500px;
  }

  @media (max-width: 700px) {
    margin-left: 10px;
    width: 380px;
  }

  @media (max-width: 500px) {
    margin-left: 5px;
    width: 300px;
  }
`;

export const TaskItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
  border-bottom: 1px solid #fff;
`;

export const TaskItemH3 = styled.h3`
  font-size: 16px;
  margin: 10px auto 0 auto;

  @media (max-width: 500px) {
    font-size: 13px;
  }
`;

export const TaskItemDate = styled.div`
  margin: 0 auto;

  @media (max-width: 500px) {
    font-size: 11px;
  }
`;

export const TaskItemDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  padding-left: 20px;
  text-align: left;

  @media (max-width: 500px) {
    font-size: 12px;
    padding-right: 10px;
  }
`;
