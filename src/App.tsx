import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">My Portfolio</h1>
          <p className="text-sm">Welcome to my personal space!</p>
        </div>
      </header>
      <main className="container mx-auto mt-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>
            Hello! I'm a passionate developer who loves building web applications.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ul className="space-y-4">
            <li className="bg-white shadow p-4 rounded">
              <h3 className="text-lg font-bold">Project 1</h3>
              <p>A cool project I worked on.</p>
            </li>
            <li className="bg-white shadow p-4 rounded">
              <h3 className="text-lg font-bold">Project 2</h3>
              <p>Another awesome project.</p>
            </li>
          </ul>
        </section>
      </main>
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2025 My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
