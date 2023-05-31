import {
  Menu,
  MenuButton,
  Button,
  Avatar,
  AvatarBadge,
  MenuList,
  Center,
  MenuDivider,
  MenuItem,
  Text,
} from "@chakra-ui/react";

export default function Avater() {
  const firstName = localStorage.getItem("firstName");
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          minW={0}>
          <Avatar
            size={"sm"}
            src={"https://avatars.dicebear.com/api/male/username.svg"}>
            <AvatarBadge boxSize='1.25em' bg='green.500' />
          </Avatar>
        </MenuButton>
        <MenuList alignItems={"center"}>
          <MenuItem>Logged in as</MenuItem>
          <MenuItem fontWeight={"bold"}>{firstName}</MenuItem>

          <MenuDivider />
          <MenuItem>Saved Searches</MenuItem>
          <MenuItem>Favorite Cars</MenuItem>
          <MenuItem>Saved Builds</MenuItem>
          <MenuItem>Saved Deals</MenuItem>
          <MenuItem>Trade Ins</MenuItem>
          <MenuItem>Your Offers</MenuItem>
          <MenuDivider />
          <MenuItem>Account Information</MenuItem>
          <MenuItem>Email Preferences</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
