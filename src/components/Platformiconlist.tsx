import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}

const Platformiconlist = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    web: BsGlobe,
    iphone: MdPhoneIphone,
  };

  return (
    <HStack margin={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/>
      ))}
    </HStack>
  );
};

export default Platformiconlist;
