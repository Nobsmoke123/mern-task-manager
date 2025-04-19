const Footer = () => {
  return (
    <footer className="bg-purple-primary">
      <div className="container mx-auto py-10 text-center">
        <p className="text-white text-lg">
          &copy; {new Date().getFullYear()} Genr8. All rights reserved.
        </p>
        <p className="text-white text-sm mt-2">Built with ❤️ by Genr8</p>
      </div>
    </footer>
  );
};

export default Footer;
