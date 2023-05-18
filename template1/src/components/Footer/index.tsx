function Footer() {
    return (
        <div className="w3-buttom w3-bar">
            <footer className="w3-center w3-black w3-padding-16 ">
                <div className=" w3-light">
                    <h3 className='w3-center' style={{ fontSize: 12 }}>Siga também nossas redes sociais</h3>
                    <div className='w3-center'>
                        <a className="w3-button w3-btn" href="https://www.instagram.com/mscalhasitu/?igshid=MWI4MTIyMDE%3D" target="_blank">
                            <i className="fa fa-instagram" style={{ fontSize: 24 }}></i>
                        </a>
                        <a className="w3-button w3-btn" href="https://www.facebook.com/profile.php?id=100017202785166" target="_blank">
                            <i className="fa fa-facebook-f" style={{ fontSize: 24 }}></i>
                        </a>
                        <div className=" w3-margin"> <p style={{ fontSize: 11 }} className="w3-center">Powered by <a style={{ textDecoration: "none" }} href="https://github.com/Gustavo-Bento" title="GFMB">GFMB</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer