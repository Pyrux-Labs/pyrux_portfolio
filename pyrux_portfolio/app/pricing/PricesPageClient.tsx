"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import StarBackground from "@/components/ui/StarBackground";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Link from "next/link";
import PackageCard from "@/components/cards/PackageCard";
import MaintenanceGrid from "@/components/cards/MaintenanceGrid";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import { packages } from "@/data/packages";
import { steps } from "@/data/steps";
import { faqItems } from "@/data/faq";

const headerVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" as const },
	},
};

const gridVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.06 } },
};

export default function PreciosPageClient() {
	const [selectedPkg, setSelectedPkg] = useState<number>(0);

	return (
		<>
			<StarBackground />
			<main className="relative z-1 max-w-215 mx-auto min-h-screen flex flex-col px-4 pt-20 pb-8 min-[481px]:px-6 min-[481px]:pb-10">
				{/* Header */}
				<motion.div
					className="mb-14"
					variants={headerVariants}
					initial="hidden"
					animate="visible">
					<Link
						href="/"
						className="inline-flex items-center gap-2 text-[0.9rem] text-secondary no-underline mb-6 hover:text-coral">
						<ArrowLeft size={16} />
						Volver al inicio
					</Link>

					<h1 className="font-display text-3xl font-bold text-primary mb-4">
						Tu negocio merece una <br />
						<span className="text-coral">presencia digital que venda.</span>
					</h1>
					<p className="text-[0.8rem] text-muted font-mono tracking-wider uppercase mb-3">
						Desarrollo Web Profesional — Rosario, Argentina
					</p>
					<p className="text-[1rem] text-secondary max-w-140 leading-relaxed mb-6">
						Diseñamos y desarrollamos sitios web a medida que posicionan tu
						marca, generan confianza y convierten visitantes en clientes.
					</p>
				</motion.div>

				{/* Paquetes */}
				<Section id="paquetes" className="mb-6" title="Nuestros paquetes">
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
						variants={gridVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}>
						{packages.map((pkg, idx) => (
							<PackageCard
								key={pkg.number}
								pkg={pkg}
								isSelected={selectedPkg === idx}
								onClick={() => setSelectedPkg(idx)}
							/>
						))}
					</motion.div>
				</Section>

				{/* Mantenimiento — cards del plan seleccionado */}
				<Section
					className="mb-14"
					title={`Mantenimiento incluido — ${packages[selectedPkg].name}`}>
					<MaintenanceGrid
						cards={packages[selectedPkg].maintenanceCards}
						animKey={selectedPkg}
					/>
				</Section>

				{/* Proceso */}
				<ProcessSection steps={steps} />

				{/* FAQ */}
				<FAQSection items={faqItems} />

				<Footer />
			</main>
		</>
	);
}
