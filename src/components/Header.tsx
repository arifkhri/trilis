import Link from "next/link";

const Header = () => {

  return (
    <div className="w-full flex justify-between items-center">
      <Link href="/products">
        <div className="flex justify-center items-center">
          <img src="/assets/trilis.png" alt="simple-cart-logo" className="w-20" />
          <h3 className="text-base ps-2">TRIPAN | LISTUNGIN</h3>
        </div>
      </Link>

      <div>
        {/* <Button variant="secondary" onClick={handleLogout}>
          Logout
          <ExitIcon />
        </Button> */}
      </div>
    </div>
  )
}

export default Header;
