"use client";

import Button from "@/components/ui/button";
import { Color, Size } from "@/types";
import { Plus } from "lucide-react";
import { useState } from "react";

interface MobileFiltersProps {
    colors: Color[];
    sizes: Size[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ colors, sizes }) => {
    
    const [open, setOpen] = useState(false);

    const onOpen = () =>  setOpen(true);
    const onClose = () => setOpen(false);

  return (
    <>
        <Button className="flex items-center gap-x-2 lg:hidden">
            Filters
            <Plus size={20} />
        </Button>
    </>
  )
}

export default MobileFilters;