import styled from "styled-components";

export const TaskItemContainer = styled.div`
  width: 100%;
  margin: 30px 3px 30px -20px;
  background-color: #dbc1e1;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
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
  padding-left: 20px;
`;

export const TaskItemDate = styled.div`
  padding-right: 20px;
`;

export const TaskItemDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  padding-left: 20px;
  text-align: left;
`;
