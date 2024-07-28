import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import { Button } from "./ui/button";

const NavbarRoutes = () => {
    return (
        <>
            <div className="hidden md:block">
                <SearchInput />
            </div>
            <div className="flex gap-x-2 ml-auto">
                <Link to="/">
                    <Button size="sm" variant="secondary">
                        <LogOut className="h-4 w-4 mr-2" /> Thoát
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default NavbarRoutes;
