import { Button } from "./ui/button";
import { LayoutGrid, PackageIcon, ShoppingBasketIcon } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white">
      {/* IMAGEM */}
      <div className="px-8 py-6">
        <h1 className="text-2xl font-bold">STOCKLY</h1>
      </div>
      {/* BOTOES */}
      <div className="flex flex-col gap-2 p-2">
        <Button variant={"ghost"} className="justify-start gap-1">
          <LayoutGrid size={20} />
          Dashboard
        </Button>
        <Button variant={"ghost"} className="justify-start gap-1">
          <PackageIcon size={20} />
          Produtos
        </Button>
        <Button variant={"ghost"} className="justify-start gap-1">
          <ShoppingBasketIcon size={20} />
          Vendas
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
