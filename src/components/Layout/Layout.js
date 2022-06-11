import React from "react";

function Layout({ children }) {
  return (
    <>
      <header>
        <h1>header</h1>
      </header>

      <main>
        {children}
      </main>

      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}

export default Layout;