"use client";
import { motion } from "framer-motion";
import Link from "next/link";
const buttonVariants = {
	hidden: { opacity: 0, y: 15 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.5 + i * 0.1,
			duration: 0.5,
			ease: "easeOut" as const,
		},
	}),
};

export default function HeroButtons() {
	return (
		<section className="mb-10 text-center">
			<div className="flex justify-center gap-4">
				<motion.a
					href="#contacto"
					className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card-strong border border-border no-underline transition-[border-color,box-shadow] duration-200 ease-in-out hover:border-coral hover:shadow-[0_4px_20px_var(--shadow-coral-mid)]"
					variants={buttonVariants}
					initial="hidden"
					animate="visible"
					custom={0}
					whileTap={{ scale: 0.97 }}>
					<span className="text-[0.9rem] text-primary">
						Contacta con nosotros
					</span>
					<span className="text-muted transition-colors duration-200 group-hover:text-coral">
						→
					</span>
				</motion.a>
				<Link href="/projects">
					<motion.div
						className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card-strong border border-border no-underline transition-[border-color,box-shadow] duration-200 ease-in-out hover:border-coral hover:shadow-[0_4px_20px_var(--shadow-coral-mid)]"
						variants={buttonVariants}
						initial="hidden"
						animate="visible"
						custom={1}
						whileTap={{ scale: 0.97 }}>
						<span className="text-[0.9rem] text-primary">
							Nuestros Proyectos
						</span>
						<span className="text-muted transition-colors duration-200 group-hover:text-coral">
							→
						</span>
					</motion.div>
				</Link>
			</div>
		</section>
	);
}
