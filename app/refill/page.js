// app/refill/page.js

"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RefillPage() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Permintaan Refill Servis</h1>
      <Card>
        <CardContent className="space-y-4 p-6">
          <div>
            <Label htmlFor="orderId">Order ID</Label>
            <Input id="orderId" placeholder="Masukkan ID Pesanan" />
          </div>
          <div>
            <Label htmlFor="service">Nama Servis</Label>
            <Input id="service" placeholder="Contoh: TikTok Followers Refill" />
          </div>
          <div>
            <Label htmlFor="reason">Sebab Refill</Label>
            <Input id="reason" placeholder="Contoh: Followers drop selepas 3 hari" />
          </div>
          <Button className="w-full">Hantar Permintaan Refill</Button>
        </CardContent>
      </Card>
    </div>
  );
    }
