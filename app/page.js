"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function LegoEffect() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const sampleImages = [
    "/samples/lego-monalisa.png",
    "/samples/lego-girl-with-pearl.png",
    "/samples/lego-men1.png",
    "/samples/lego-women1.png",
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Lego Effect Website</h1>
    </div>
  );
}
