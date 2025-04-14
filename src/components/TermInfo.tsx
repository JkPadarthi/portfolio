import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>Port</User>@<WebsiteName>Jk</WebsiteName>: $
    </Wrapper>
  );
};

export default TermInfo;
