// app/faq/page.js

"use client";

import React from "react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Bagaimana cara membuat pesanan?",
    answer: "Anda hanya perlu daftar, tambah dana, dan pilih servis yang diinginkan.",
  },
  {
    question: "Berapa lama pesanan diproses?",
    answer: "Biasanya dalam beberapa minit, bergantung pada servis dan status server.",
  },
  {
    question: "Adakah servis ini selamat?",
    answer: "Ya, semua servis kami disediakan oleh pembekal yang dipercayai dan selamat digunakan.",
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Soalan Lazim (FAQ)</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionItem.Trigger>{item.question}</AccordionItem.Trigger>
            <AccordionItem.Content>{item.answer}</AccordionItem.Content>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
