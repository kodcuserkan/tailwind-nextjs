const Layout = ({ children }) => {
  return (
    <div className="antialiased text-gray-900 flex items-center justify-center min-h-screen flex-col">
      { children }
    </div>
  )
};

export default Layout;
