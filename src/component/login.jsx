


export default function Login() {
    return (
        <div className="content">
            <div className="flex-div">
                <div className="name-content">
                    <h1 className="logo">Alltale</h1>
                    <p>Selamat datang di bank Alltale</p>
                </div>
                    <form action="#">
                        <p>Username</p>
                        <input id="username" type="text" placeholder="Masukan username " required />
                        <p>Password</p>
                        <input id="password" type="password" placeholder="Masukan password" required/>
                        <button id="loginbutton" onclick="login()" className="login">Masuk</button>
                    {/* <!-- <a href="#">Lupa Password?</a> --> */}
                    <hr></hr>
                    <button onclick="buatAkun()" className="create-account">Buat Rekening Baru</button>
                    </form>
            </div>
        </div>
    );
  }