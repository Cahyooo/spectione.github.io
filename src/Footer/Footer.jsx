export const Footer = () => {
    return (
        <footer className="footer mt-20">

            <aside className="flex font-medium justify-around">
            <div>
                <h1 className="font-semibold text-xl mb-1">Follow Us</h1>
                <p><a href="https://www.instagram.com/spectione/">Instagram</a></p>
                <p><a href="https://www.tiktok.com/@spectione">Tiktok</a></p>
            </div>
            <div>
                <h1 className="font-semibold text-xl mb-1">School</h1>
                <p><a href="https://smkn1tanjungpinang.sch.id/">SMKN 1 Tanjungpinang</a></p>
            </div>
            </aside>

            <p className="text-center mt-14 translate-y-[-15px] border-t border-black w-[350px] max-[500px]:w-[70vw] whitespace-nowrap m-auto">Copyright © 2023 Spectione</p>
        </footer>
    )
}