export const toggleHamburgerMenu =
  (setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, isOpen: boolean) =>
  () => {
    setIsOpen(!isOpen);
  };
