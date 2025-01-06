import React from 'react';
import Header from './Header'; // Header.tsxをインポート

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      {/* HeaderコンポーネントをNavigation部分に使用 */}
      <Header />

      {/* Content */}
      <main className="pt-16">{children}</main>
    </div>
  );
};

export default Layout;
