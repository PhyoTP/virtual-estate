import { Outlet } from 'react-router-dom';
import "./styles.css";
const Layout = () => {
    return (
        <>
            <header>
                <h1>VirtualEstates</h1>
            </header>
            <div style={{ height: "5rem"}}></div>
            <main>
                <Outlet/>
            </main>
        </>
    );
}
export default Layout;