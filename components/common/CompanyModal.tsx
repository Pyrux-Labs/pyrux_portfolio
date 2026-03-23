// ═══════════════════════════════════════════════
// Company Modal
// ═══════════════════════════════════════════════

"use client";

import { useTranslations } from "next-intl";
import Modal from "@/components/ui/Modal";
import { Quote } from "lucide-react";
import ExternalLinkButton from "@/components/ui/ExternalLinkButton";
import Image from "next/image";
import type { Company } from "@/types";
import { cdnFull } from "@/lib/cloudinary";

interface CompanyModalProps {
	company: Company | null;
	isOpen: boolean;
	onClose: () => void;
}

export default function CompanyModal({ company, isOpen, onClose }: CompanyModalProps) {
	const t = useTranslations("CompanyModal");
	if (!company) return null;

	const logos = company.logoDark
		? [
				{ src: cdnFull(company.logo), className: "logo-for-light w-full h-full object-contain" },
				{ src: cdnFull(company.logoDark), className: "logo-for-dark w-full h-full object-contain" },
			]
		: [{ src: cdnFull(company.logo), className: "w-full h-full object-contain" }];

	return (
		<Modal isOpen={isOpen} onClose={onClose} closeLabel={t("closeModal")}>
			{/* Header: name (left) / logo (right) */}
			<div className="flex items-center justify-between gap-4 mb-4 pr-10">
				<h3 className="font-display text-xl font-bold text-primary">{company.name}</h3>
				<div className="w-16 h-16 sm:w-24 sm:h-24 shrink-0 rounded-full border border-border bg-elevated flex items-center justify-center overflow-hidden p-2">
					{logos.map(({ src, className }) => (
						<Image key={src} src={src} alt={`${company.name} logo`} width={96} height={96} className={className} />
					))}
				</div>
			</div>

			{/* Summary */}
			<p className="text-secondary leading-relaxed mb-4">{company.summary}</p>

			{/* Work done */}
			<div className="mb-6">
				<h4 className="font-display text-[0.95rem] font-semibold text-primary mb-2">{t("workDone")}</h4>
				<p className="text-secondary text-[0.9rem] leading-relaxed">{company.workDescription}</p>
			</div>

			{/* Testimonial */}
			{company.testimonial && (
				<div className="p-4 rounded-xl border border-border bg-elevated mb-6">
					<div className="flex items-start gap-3">
						<Quote size={20} className="text-coral shrink-0 mt-0.5 rotate-180" />
						<blockquote className="text-[0.9rem] text-secondary italic leading-relaxed">
							&ldquo;{company.testimonial}&rdquo;
						</blockquote>
						<Quote size={20} className="text-coral shrink-0 mt-0.5" />
					</div>
				</div>
			)}

			{/* Button */}
			<div className="flex justify-end">
				<ExternalLinkButton href={company.websiteUrl} label={t("visitWebsite")} />
			</div>
		</Modal>
	);
}
