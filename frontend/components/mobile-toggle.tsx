import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import Sidebar, { SideLinkProps } from '@/app/components/Sidebar'

export const MobileToggle = ({
  links,
  socialLinks,
  logoUrl,
  shortDescription
} : {
  links: Array<SideLinkProps>;
  socialLinks: Array<SideLinkProps>;
  logoUrl: string | null;
  shortDescription: string;
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="menu" className="flex items-center justify-center w-16 h-16 mb-4">
          <div className="text-xl font-bold leading-[18px]">ME<br/>NU</div>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full bg-white sm:max-w-none">
        <Sidebar 
          links={links}
          socialLinks={socialLinks}
          logoUrl={logoUrl}
          shortDescription={shortDescription}
        />
      </SheetContent>
    </Sheet>
  )
}
