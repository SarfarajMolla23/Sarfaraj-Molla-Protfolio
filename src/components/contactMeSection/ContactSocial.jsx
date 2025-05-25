import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiX } from "react-icons/si";

import SingleContactSocial from "./SingleContactSocial";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/sarfaraj-molla-30b37b227"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/SarfarajMolla23"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://x.com/Sarfarajmolla23"
        Icon={SiX}
      />
    </div>
  );
};

export default ContactSocial;
