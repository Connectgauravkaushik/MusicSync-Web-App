import { MUSIC_APP_LOGO } from "../../utils/constant";

const Footer = () => {
    return (
        <>
            <div className="w-auto h-[500px] border border-gray-500 bg-black mt-10 flex text-white justify-evenly">

                <div>
                    <img
                        className="w-28 h-16 mt-28"
                        src={MUSIC_APP_LOGO}
                        alt="Logo" />
                    <h1 className="text-lg ml-2">MusicSync</h1>
                </div>

                <div className="mt-28">
                    <p className="text-gray-400">COMPANY</p>
                    <ul className="mt-6">
                        <li>About</li>
                        <li>jobs</li>
                        <li>For the Record</li>
                    </ul>
                </div>

                <div className="mt-28">
                    <p className="text-gray-400">COMMUNITIES</p>
                    <ul className="mt-6">
                        <li>For Artists</li>
                        <li>Developer</li>
                        <li>Advertising</li>
                        <li>Investors</li>
                        <li>Vendors</li>
                    </ul>
                </div>

                <div className="mt-28">
                    <p className="text-gray-400">USEFULL LINKS</p>
                    <ul className="mt-6">
                        <li>Support</li>
                        <li>Web player</li>
                        <li>Free Mobile App</li>
                    </ul>
                </div>
                <div>
                    <img
                        className="rounded-full w-10 mt-28 h-10"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM5RCfLgHosoJRiuoPrL_Bjrkffx3Z7wYdvQ&usqp=CAU" alt=""></img>
                </div>
            </div>

        </>
    );
}

export default Footer;
