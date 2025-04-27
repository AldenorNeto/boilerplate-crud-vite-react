import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Plus } from "lucide-react"
import { ProductsTable } from "./ProductsTable"

export default function ProductList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Produtos</h1>
        <Button asChild>
          <Link to="/products/new" className="bg-white border ">
            <Plus className="mr-2 h-4 w-4" /> Add Produto
          </Link>
        </Button>
      </div>
      <ProductsTable />
    </div>
  )
}
