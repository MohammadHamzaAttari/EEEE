import BodyCard from "./BodyCard";
import React, { useEffect } from "react";
import { GETBodies, GETModels, GETTrims } from "../Constant/url";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useDisclosure,
  TableContainer,
  Box,
  Button,
} from "@chakra-ui/react";
import ModelCrud from "./ModelCrud";
import BodyCrud from "./BodyCrud";
import TrimCrud from "./TrimCrud";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
} from "@chakra-ui/react";
import DealerDreawer from "./DealerDreawer";
function DealerTables(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [models, setModels] = React.useState("");

  const handleClick = () => {
    onOpen();
  };
  return (
    <div>
      <Accordion defaultIndex={[0]} allowMultiple bg='blackAlpha.200'>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "red.400", color: "white" }}>
              <Box as='span' flex='1' textAlign='left'>
                Management
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Accordion defaultIndex={[0]} allowMultiple bg='blackAlpha.200'>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "red.400", color: "white" }}>
                    <Box as='span' flex='1' textAlign='left'>
                      Manage Models
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <ModelCrud />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "red.400", color: "white" }}>
                    <Box as='span' flex='1' textAlign='left'>
                      Manage Bodies
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <BodyCrud />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "red.400", color: "white" }}>
                    <Box as='span' flex='1' textAlign='left'>
                      Manage Trims
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <TableContainer>
                    <TrimCrud />
                  </TableContainer>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Button ref={btnRef} bg='red.400' onClick={onOpen} mt={"25px"}>
        Show All Models
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        size={"ful"}
        onClose={onClose}
        isFullHeight={true}>
        <DrawerOverlay />
        <DrawerContent overflow={"scroll"}>
          <DrawerCloseButton />
          <DrawerHeader>Models of All Companies</DrawerHeader>

          <DrawerBody>
            <DealerDreawer />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default DealerTables;
