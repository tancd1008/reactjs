import FooterClient from './FooterClient';
import HeaderClient from './HeaderClient';
import '~/App.css';

function LayoutClient({ children }) {
    return (
        <div>
            <HeaderClient />
            <div className="content">{children}</div>
            <FooterClient />
        </div>
    );
}

export default LayoutClient;
