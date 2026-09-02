"use client";

import React from "react";
import Navbar from "@/tier1-components/Navbar";
import Footer from "@/tier1-components/Footer";
import ConsultationForm from "@/components/ConsultationForm/ConsultationForm";
import content from "@/tier3-content/content.json";

export default function ConsultationPage() {
    return (
        <div className="flex flex-col min-h-screen relative mesh-bg">
            {/* Background Mesh Overlay */}
            <div className="fixed inset-0 bg-transparent medical-grid pointer-events-none z-0" />

            {/* Navigation bar */}
            <Navbar onOpenBooking={() => { }} data={content.layout.navbar} />

            <main className="flex-1 flex items-center justify-center py-32 px-4 relative z-10">
                <ConsultationForm />
            </main>

            <Footer data={content.layout.footer} />
        </div>
    );
}
