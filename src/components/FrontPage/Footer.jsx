
const Footer = () => {
    return (
        <div className="bg-base-200">
            <footer className="footer p-10 text-xl pt-10 items-center">
                <div >
                    <span className="footer-title text-center">Campus</span>
                    <div className='md:flex-col flex gap-3 flex-wrap'>
                        <a className="link link-hover">Events Organization</a>
                        <a className="link link-hover">Placement Consultation</a>
                        <a className="link link-hover">Science Club</a>
                        <a className="link link-hover">Sports Events</a>
                    </div>
                </div>
                <div>
                    <span className="footer-title text-center">University</span>
                    <div className='md:flex-col flex gap-3 flex-wrap'>
                        <a className="link link-hover">Natural Environment</a>
                        <a className="link link-hover">Hostel and Gem</a>
                        <a className="link link-hover">Central Library</a>
                        <a className="link link-hover">Three Sports Ground</a>
                    </div>
                </div>
                <div>
                    <span className="footer-title text-center">Contact University</span>
                    <div className='md:flex-col flex gap-3 flex-wrap'>
                        <a className="link link-hover">Email: campus123@gmail.com</a>
                        <a className="link link-hover">Phone:+5675457863</a>
                        <a className="link link-hover">New Calofonia || 234 B</a>
                        <a className="link link-hover">Facebook & Instagram</a>
                    </div>
                </div>
            </footer>
            <div className="footer footer-center p-4">
                <div>
                    <p>Copyright © 2023 - All right reserved by Consultation</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;