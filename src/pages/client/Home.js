import FooterClient from '~/components/layouts/client/FooterClient';
import HeaderClient from '~/components/layouts/client/HeaderClient';

function Home() {
    return (
        <div className="container">
            <div>
                <HeaderClient />
            </div>
            <h2>Home Page</h2>
            <div>
                <FooterClient />
            </div>
        </div>
    );
}

export default Home;
