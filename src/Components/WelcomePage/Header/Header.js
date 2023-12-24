import { HeaderStyledLayout } from './Header.styled';

export const Header = ({ children }) => {
  return (
    <>
      <HeaderStyledLayout>{children}</HeaderStyledLayout>
    </>
  );
};
