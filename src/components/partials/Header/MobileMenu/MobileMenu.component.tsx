"use client";

import React, { useState } from "react";
import { Button, Separator, Sheet, SheetContent, SheetTrigger } from "@components";
import { Navigation, Icons } from '@data';
import Link from 'next/link';

import { ColorThemeSelector, ThemeToggle } from '../ThemeToggle';
import { IHeaderProps } from "../Header";



export const MobileMenu: React.FC<IHeaderProps> = ({ url }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (path: string) => path === url;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Icons.Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[320px]">
        <div className="flex flex-col space-y-6 mt-8">
          {/* Navigation */}
          <div className="space-y-2">
            {Navigation.map((item) => (
              <Link key={item.name} href={item.url} onClick={() => setIsOpen(false)}>
                <Button
                  variant={isActive(item.url) ? 'default' : 'ghost'}
                  className="w-full justify-start space-x-2"
                >
                  <item.Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Button>
              </Link>
            ))}
          </div>

          <Separator />

          {/* Theme Settings */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Appearance</span>
              <ThemeToggle />
            </div>

            <div className="space-y-2">
              <ColorThemeSelector />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}