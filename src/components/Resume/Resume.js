import Button from "react-bootstrap/Button";

import pdf from "../../Assets/Resume_Kanhaiya_kumar.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Button variant="primary" href={pdf} target="_blank">
      <AiOutlineDownload />
      &nbsp;Download CV
    </Button>
  );
}

export default Resume;
