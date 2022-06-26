function SingUp() {
    return (
        <div>
            <form action="" className="w-50 mx-auto">
                <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
                <div className="mb-3">
                    <input type="text" placeholder="Ten dang nhap" className="form-control" />
                </div>
                <div className="mb-3">
                    <input type="email" placeholder="Email" className="form-control" />
                </div>
                <div className="mb-3">
                    <input type="password" placeholder="Mat khau" className="form-control" />
                </div>
                <div className="mb-3">
                    <button className=" btn btn-lg btn-primary">Đăng nhập</button>
                </div>
            </form>
        </div>
    );
}

export default SingUp;
