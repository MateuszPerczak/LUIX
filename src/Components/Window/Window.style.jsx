import styled from "@emotion/styled";

const StyledWindow = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  background-color: ${({ theme: { taskbarMenu } }) => taskbarMenu};
  backdrop-filter: blur(20px) saturate(180%);
  box-shadow: 0 0 20px ${({ theme: { taskbarMenu } }) => taskbarMenu};
`;

export const StyledWindowTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding-left: 5px;
`;

export const StyledWindowTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  height: 40px;
  padding: 5px;
`;

export const StyledWindowContent = styled.div`
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(20px) saturate(180%);
  height: 200px;
`;

export const StyledWindowClose = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  border-radius: 8px;
  user-select: none;
  aspect-ratio: 1;
  &:hover {
    background-color: ${({ theme: { taskbarApp } }) => taskbarApp};
  }
  &:active {
    background-color: ${({ theme: { taskbarAppActive } }) => taskbarAppActive};
  }
`;

export default StyledWindow;
