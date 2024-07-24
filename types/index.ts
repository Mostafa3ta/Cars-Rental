import { MouseEventHandler } from "react";

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface CustumBtnProps {
    title: string;
    ContainerStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    isDisabled?: boolean;
    textStyles?: string;
    rightIcon?: string;
}
export interface SearchGeneratorProps {
    manufacturer: string;
    setManuFacturer: (SearchGenerator: string) => void;
}

export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
}

export interface HomeProps {
    searchParams: FilterProps;
}

export interface OptionsProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionsProps[];
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}
