import { Metadata } from "next";
import { CartCounter } from "@/app/shopping-cart/components";

export const metadata: Metadata = {
	title: "Shopping Cart",
	description: "Un simple contador",
};

//PAGINA DEL CONTADOR DE LA APLICACION
export default function CounterPage() {
	return (
		<div className="flex flex-col items-center justify-center w-full h-full">
			<span>Productos en el carrito de compra</span>
			<CartCounter value={20} />
		</div>
	);
}
