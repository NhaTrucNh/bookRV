import Header from '~/components/Layout/components/Header';
import Footer from '~/components/Layout/components/Footer';

function HeaderAndFooter({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default HeaderAndFooter;
