import Link from 'next/link';
import React from 'react';

const MenuBar: React.FC = () => (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem 0' }}>
        <Link href="/">
            首頁
        </Link>
        <Link href="/about">
            關於我們
        </Link>
    </nav>
);

export default MenuBar;
