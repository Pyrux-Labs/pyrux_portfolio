"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import StarBackground from "@/components/ui/StarBackground";

export default function NotFound() {
	return (
		<>
			<StarBackground />
			<main className="relative z-1 min-h-screen flex items-center justify-center px-4">
				<motion.div
					className="text-center flex flex-col items-center gap-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut" }}>
					<span className="text-7xl min-[481px]:text-9xl font-display font-bold text-coral">
						404
					</span>
					<h1 className="text-xl min-[481px]:text-2xl font-display font-semibold text-primary">
						Página no encontrada
					</h1>
					<p className="text-sm text-secondary max-w-80 leading-relaxed">
						La página que buscás no existe o fue movida.
					</p>
					<a
						href="/es"
						className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-lg bg-coral text-primary text-sm font-semibold hover:bg-coral/90 transition-colors">
						<ArrowLeft size={16} />
						Volver al inicio
					</a>
				</motion.div>
			</main>
		</>
	);
}
