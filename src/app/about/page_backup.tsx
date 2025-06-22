import React from 'react';
import MenuBar from '../../components/MenuBar';

const AboutPage: React.FC = () => {
    return (
        <>
            <MenuBar />
            <main style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
                <h1>關於我們公司111</h1>
                <section>
                    <h2>公司簡介</h2>
                    <p>
                        我們是一家專注於創新科技解決方案的公司，致力於為客戶提供高品質的產品與服務。
                    </p>
                </section>
                <section>
                    <h2>使命與願景</h2>
                    <p>
                        我們的使命是推動產業數位轉型，協助企業提升競爭力，創造更美好的未來。
                    </p>
                </section>
                <section>
                    <h2>聯絡資訊</h2>
                    <ul>
                        <li>地址：台北市信義區科技路100號</li>
                        <li>電話：(02) 1234-5678</li>
                        <li>Email：info@company.com</li>
                    </ul>
                </section>
            </main>
        </>
    );
};

export default AboutPage;