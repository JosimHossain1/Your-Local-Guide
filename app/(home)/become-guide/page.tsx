"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export default function GuideRegistrationForm() {
  const [specialties, setSpecialties] = useState<string[]>([]);
  const [newSpecialty, setNewSpecialty] = useState("");

  const addSpecialty = () => {
    if (newSpecialty.trim() && !specialties.includes(newSpecialty)) {
      setSpecialties([...specialties, newSpecialty]);
      setNewSpecialty("");
    }
  };

  return (
    <div className="flex justify-center items-center py-10 mt-10">
      <Card className="w-full max-w-2xl shadow-xl border border-border/40 rounded-2xl">
        <CardHeader className="text-center space-y-2">
          <Sparkles className="w-8 h-8 text-emerald-500 mx-auto" />
          <CardTitle className="text-2xl font-bold">
            Become a Local Guide
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Share your culture, show hidden gems, and connect with travelers ✨
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" />
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="e.g. Dhaka, Bangladesh" />
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <Label htmlFor="experience">Experience Level</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select your experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                <SelectItem value="intermediate">Intermediate (2-4 years)</SelectItem>
                <SelectItem value="expert">Expert (5+ years)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Price */}
          <div className="space-y-2">
            <Label htmlFor="price">Price Range (per tour)</Label>
            <Input id="price" type="text" placeholder="$50 - $150" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Short Bio</Label>
            <Textarea
              id="description"
              placeholder="Tell travelers why they should pick you as their guide..."
              className="min-h-[100px]"
            />
          </div>

          {/* Specialties */}
          <div className="space-y-2">
            <Label>Specialties</Label>
            <div className="flex gap-2">
              <Input
                placeholder="Add a specialty (e.g. Food tours)"
                value={newSpecialty}
                onChange={(e) => setNewSpecialty(e.target.value)}
              />
              <Button type="button" onClick={addSpecialty}>
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {specialties.map((s, i) => (
                <Badge key={i} variant="secondary" className="px-3 py-1 rounded-full">
                  {s}
                </Badge>
              ))}
            </div>
          </div>

          {/* Submit */}
          <Button className="w-full mt-4 text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl py-2 text-lg">
            Submit Application
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
