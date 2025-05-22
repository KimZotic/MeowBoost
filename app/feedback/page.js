// app/feedback/page.js

"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function FeedbackPage() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Maklum Balas Pelanggan</h1>
      <Card>
        <CardContent className="space-y-4 p-6">
          <div>
            <Label htmlFor="name">Nama</Label>
            <Input id="name" placeholder="Masukkan nama anda" />
          </div>
          <div>
            <Label htmlFor="feedback">Maklum Balas</Label>
            <Textarea id="feedback" placeholder="Tulis maklum balas anda di sini" />
          </div>
          <Button className="w-full">Hantar Maklum Balas</Button>
        </CardContent>
      </Card>
    </div>
  );
}
