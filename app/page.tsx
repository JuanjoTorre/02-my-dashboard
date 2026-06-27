//ENTRADA A LA APLICACION

import { redirect } from "next/navigation";

export default function HomePage() {
	//La funcion redirect, redirecciona al path indicado
	redirect("/dashboard/counter");
}
