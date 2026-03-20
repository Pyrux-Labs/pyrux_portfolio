// ═══════════════════════════════════════════════
// Company Modal
// ═══════════════════════════════════════════════

"use client";

import { useTranslations } from "next-intl";
import Modal from "@/components/ui/Modal";
import { ExternalLink, Quote } from "lucide-react";
import Image from "next/image";
import type { Company } from "@/types";

interface CompanyModalProps {
	company: Company | null;
	isOpen: boolean;
	onClose: () => void;
}

export default function CompanyModal({
	company,
	isOpen,
	onClose,
}: CompanyModalProps) {
	const t = useTranslations("CompanyModal");
	if (!company) return null;

	return (
		<Modal isOpen={isOpen} onClose={onClose} bottomSheet>
			{/* Header: name (left) / logo (right) */}
			<div className="flex items-center justify-between gap-4 mb-4 pr-10">
				<h3 className="font-display text-xl font-bold text-primary">
					{company.name}
				</h3>
				<div className="w-24 h-24 shrink-0 rounded-full border border-border bg-elevated flex items-center justify-center overflow-hidden p-2">
					{company.logoDark ? (
						<>
							<Image
								src={company.logo}
								alt={`${company.name} logo`}
								width={96}
								height={96}
								className="logo-for-light w-full h-full object-contain"
							/>
							<Image
								src={company.logoDark}
								alt={`${company.name} logo`}
								width={96}
								height={96}
								className="logo-for-dark w-full h-full object-contain"
							/>
						</>
					) : (
						<Image
							src={company.logo}
							alt={`${company.name} logo`}
							width={96}
							height={96}
							className="w-full h-full object-contain"
						/>
					)}
				</div>
			</div>

			{/* Summary */}
			<p className="text-secondary leading-relaxed mb-4">{company.summary}</p>

			{/* Work done */}
			<div className="mb-6">
				<h4 className="font-display text-[0.95rem] font-semibold text-primary mb-2">
					{t("workDone")}
				</h4>
				<p className="text-secondary text-[0.9rem] leading-relaxed">
					{company.workDescription}
				</p>
			</div>

			{/* Testimonial + Button row */}
			<div className="flex items-end justify-between gap-4">
				{company.testimonial ? (
					<div className="p-4 rounded-xl border border-border bg-elevated max-w-sm">
						<div className="flex items-start gap-3">
							<Quote
								size={20}
								className="text-coral shrink-0 mt-0.5 rotate-180"
							/>
							<blockquote className="text-[0.9rem] text-secondary italic leading-relaxed">
								&ldquo;{company.testimonial}&rdquo;
							</blockquote>
							<Quote size={20} className="text-coral shrink-0 mt-0.5" />
						</div>
					</div>
				) : (
					<div />
				)}
				<a
					href={company.websiteUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-coral bg-coral-soft-bg text-coral text-[0.9rem] font-medium no-underline transition-all duration-200 hover:shadow-[0_8px_24px_var(--shadow-coral-soft)] hover:-translate-y-0.5">
					<ExternalLink size={16} />
					{t("visitWebsite")}
				</a>
			</div>
		</Modal>
	);
}
